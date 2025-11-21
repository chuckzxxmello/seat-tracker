"use client"

import { useCallback, useEffect, useRef } from "react"
import type { PathResult } from "@/lib/dijkstra"

interface VenueMapProps {
  highlightPath?: PathResult | null
  selectedSeat?: string | null
  onSeatClick?: (seatId: string) => void
  interactive?: boolean
}

const BASE_WIDTH = 1000
const BASE_HEIGHT = 1200

// Layout constants (in base coordinates)
const TABLE_RADIUS = 12
const TABLE_SPACING_X = 50
const TABLE_SPACING_Y = 50

const SECTION_CONFIGS = [
  { startTable: 1, endTable: 20, startX: 80, startY: 150 },
  { startTable: 21, endTable: 40, startX: 550, startY: 150 },
  { startTable: 41, endTable: 60, startX: 80, startY: 500 },
  { startTable: 61, endTable: 80, startX: 550, startY: 500 },
] as const

function getSeatPosition(seatNumber: number): { x: number; y: number } | null {
  if (seatNumber < 1 || seatNumber > 80) return null

  const section = SECTION_CONFIGS.find(
    (s) => seatNumber >= s.startTable && seatNumber <= s.endTable,
  )
  if (!section) return null

  const indexInSection = seatNumber - section.startTable
  const row = Math.floor(indexInSection / 5)
  const col = indexInSection % 5

  return {
    x: section.startX + col * TABLE_SPACING_X,
    y: section.startY + row * TABLE_SPACING_Y,
  }
}

export function VenueMap({
  highlightPath,
  selectedSeat,
  onSeatClick,
  interactive = false,
}: VenueMapProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const drawScene = useCallback(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = wrapper.getBoundingClientRect()
    if (rect.width === 0) return

    const dpr = window.devicePixelRatio || 1

    // Make the map as wide as the wrapper, compute height by aspect ratio
    const width = rect.width
    const baseScale = width / BASE_WIDTH

    // On small screens, give it a bit more vertical space (looks “bigger”)
    const zoomBoost = width < 640 ? 1.15 : 1 // tweak this if you want more/less zoom on mobile
    const scale = baseScale * zoomBoost
    const height = BASE_HEIGHT * scale

    // Canvas size in device pixels
    canvas.width = width * dpr
    canvas.height = height * dpr

    // CSS size in layout pixels
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    // Draw in logical (1000×1200) coordinates, scaled & DPR-corrected
    ctx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0)
    ctx.clearRect(0, 0, BASE_WIDTH, BASE_HEIGHT)

    drawVenue(ctx)

    if (highlightPath && highlightPath.path.length > 0) {
      drawPath(ctx, highlightPath)
    }

    if (selectedSeat) {
      drawSelectedSeat(ctx, selectedSeat)
    }
  }, [highlightPath, selectedSeat])

  // Draw on first mount and whenever highlight/selection changes
  useEffect(() => {
    drawScene()
  }, [drawScene])

  // Redraw on resize so mobile/desktop always get correct scaling
  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const observer = new ResizeObserver(() => {
      drawScene()
    })
    observer.observe(wrapper)

    return () => observer.disconnect()
  }, [drawScene])

  // Click handler (for attendee side)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !interactive || !onSeatClick) return

    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const cssX = event.clientX - rect.left
      const cssY = event.clientY - rect.top

      // Convert from CSS pixels back to base coordinates
      const baseScale = rect.width / BASE_WIDTH
      const zoomBoost = rect.width < 640 ? 1.15 : 1
      const scale = baseScale * zoomBoost

      const x = cssX / scale
      const y = cssY / scale

      const CLICK_RADIUS = TABLE_RADIUS + 6
      let clickedSeat: number | null = null

      for (let seat = 1; seat <= 80; seat++) {
        const pos = getSeatPosition(seat)
        if (!pos) continue
        const dx = x - pos.x
        const dy = y - pos.y
        if (Math.sqrt(dx * dx + dy * dy) <= CLICK_RADIUS) {
          clickedSeat = seat
          break
        }
      }

      if (clickedSeat !== null) {
        onSeatClick(String(clickedSeat))
      }
    }

    canvas.addEventListener("click", handleClick)
    return () => canvas.removeEventListener("click", handleClick)
  }, [interactive, onSeatClick])

  return (
    <div
      ref={wrapperRef}
      className="w-full max-w-3xl mx-auto border-2 border-blue-200 rounded-lg bg-white overflow-hidden"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}

/* -------------------- Drawing helpers (base 1000×1200) -------------------- */

function drawVenue(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, BASE_WIDTH, BASE_HEIGHT)

  // Stage
  ctx.fillStyle = "#1d4ed8"
  ctx.fillRect(150, 30, 700, 80)
  ctx.fillStyle = "#ffffff"
  ctx.font = "bold 24px Arial"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("STAGE", 500, 70)

  const drawSeatingSection = (
    startX: number,
    startY: number,
    rows: number,
    cols: number,
    startTableNumber: number,
    isVip = false,
  ) => {
    let tableNumber = startTableNumber
    const tableRadius = isVip ? 14 : TABLE_RADIUS

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * TABLE_SPACING_X
        const y = startY + row * TABLE_SPACING_Y

        ctx.beginPath()
        ctx.arc(x, y, tableRadius, 0, Math.PI * 2)
        ctx.fillStyle = isVip ? "#ef4444" : "#1d4ed8"
        ctx.fill()
        ctx.strokeStyle = "#1e3a8a"
        ctx.lineWidth = 1.5
        ctx.stroke()

        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(tableNumber.toString(), x, y)

        tableNumber++
      }
    }
  }

  // Standard seating blocks (1–80)
  drawSeatingSection(80, 150, 4, 5, 1) // 1–20
  drawSeatingSection(550, 150, 4, 5, 21) // 21–40
  drawSeatingSection(80, 500, 4, 5, 41) // 41–60
  drawSeatingSection(550, 500, 4, 5, 61) // 61–80

  // VIP labels (just labels)
  ctx.fillStyle = "#1e40af"
  ctx.font = "bold 12px Arial"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("VIP TABLE 1-2", 460, 220)
  ctx.fillText("VIP TABLE 3-4", 460, 260)

  // Buffet blocks
  const drawBuffetArea = (x: number, y: number, label: string) => {
    ctx.fillStyle = "#111827"
    ctx.fillRect(x, y, 80, 80)
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 10px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(label, x + 40, y + 40)
  }

  drawBuffetArea(50, 250, "BUFFET 1")
  drawBuffetArea(900 - 80, 250, "BUFFET 4")
  drawBuffetArea(50, 600, "BUFFET 2")
  drawBuffetArea(900 - 80, 600, "BUFFET 3")

  // Entrance
  ctx.fillStyle = "#059669"
  ctx.fillRect(400, 1150, 200, 30)
  ctx.fillStyle = "#ffffff"
  ctx.font = "bold 12px Arial"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("MAIN ENTRANCE", 500, 1165)

  // Photo exhibit
  ctx.fillStyle = "#f59e0b"
  ctx.fillRect(250, 1000, 500, 60)
  ctx.fillStyle = "#ffffff"
  ctx.font = "bold 14px Arial"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillText("PHOTO EXHIBIT", 500, 1030)
}

function drawPath(ctx: CanvasRenderingContext2D, result: PathResult) {
  if (!result.path || result.path.length === 0) return

  ctx.strokeStyle = "#ef4444"
  ctx.lineWidth = 4
  ctx.setLineDash([5, 5])
  ctx.lineJoin = "round"
  ctx.lineCap = "round"

  ctx.beginPath()
  result.path.forEach((node, index) => {
    if (index === 0) {
      ctx.moveTo(node.x, node.y)
    } else {
      ctx.lineTo(node.x, node.y)
    }
  })
  ctx.stroke()
  ctx.setLineDash([])

  result.path.forEach((node, index) => {
    ctx.beginPath()
    ctx.arc(node.x, node.y, index === 0 ? 8 : 5, 0, Math.PI * 2)
    ctx.fillStyle = index === 0 ? "#22c55e" : "#f97316"
    ctx.fill()
  })
}

function drawSelectedSeat(ctx: CanvasRenderingContext2D, seatId: string) {
  const seatNumber = Number.parseInt(seatId, 10)
  if (!Number.isFinite(seatNumber)) return

  const pos = getSeatPosition(seatNumber)
  if (!pos) return

  ctx.save()
  ctx.beginPath()
  ctx.arc(pos.x, pos.y, TABLE_RADIUS + 6, 0, Math.PI * 2)
  ctx.strokeStyle = "#facc15"
  ctx.lineWidth = 4
  ctx.shadowColor = "rgba(250, 204, 21, 0.7)"
  ctx.shadowBlur = 12
  ctx.stroke()
  ctx.restore()
}
