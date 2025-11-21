"use client"

import { useEffect, useRef } from "react"
import type { PathResult } from "@/lib/dijkstra"

interface VenueMapProps {
  highlightPath?: PathResult | null
  selectedSeat?: string | null
  onSeatClick?: (seatId: string) => void
  interactive?: boolean
}

// Layout constants used both for drawing and hit-testing
const TABLE_RADIUS = 12
const TABLE_SPACING_X = 50
const TABLE_SPACING_Y = 50

// Section configs for 4 x 5 blocks of tables
const SECTION_CONFIGS = [
  {
    startTable: 1,
    endTable: 20,
    startX: 80,
    startY: 150,
  },
  {
    startTable: 21,
    endTable: 40,
    startX: 550,
    startY: 150,
  },
  {
    startTable: 41,
    endTable: 60,
    startX: 80,
    startY: 500,
  },
  {
    startTable: 61,
    endTable: 80,
    startX: 550,
    startY: 500,
  },
]

function getSeatPosition(seatNumber: number): { x: number; y: number } | null {
  if (seatNumber < 1 || seatNumber > 80) return null

  const section = SECTION_CONFIGS.find(
    (s) => seatNumber >= s.startTable && seatNumber <= s.endTable,
  )
  if (!section) return null

  const indexInSection = seatNumber - section.startTable // 0-based
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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size (logical pixels)
    canvas.width = 1000
    canvas.height = 1200
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    drawVenue(ctx, canvas)

    // Draw path if available
    if (highlightPath) {
      drawPath(ctx, highlightPath)
    }

    // Highlight selected seat
    if (selectedSeat) {
      drawSelectedSeat(ctx, selectedSeat)
    }
  }, [highlightPath, selectedSeat])

  // Click handling for interactive mode
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !interactive || !onSeatClick) return

    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()

      // Translate from screen coords to canvas logical coords
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height

      const canvasX = (event.clientX - rect.left) * scaleX
      const canvasY = (event.clientY - rect.top) * scaleY

      // Find nearest table within radius
      const CLICK_RADIUS = TABLE_RADIUS + 6 // a bit larger for easier tapping
      let clickedSeat: number | null = null

      for (let seat = 1; seat <= 80; seat++) {
        const pos = getSeatPosition(seat)
        if (!pos) continue
        const dx = canvasX - pos.x
        const dy = canvasY - pos.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance <= CLICK_RADIUS) {
          clickedSeat = seat
          break
        }
      }

      if (clickedSeat !== null) {
        onSeatClick(String(clickedSeat))
      }
    }

    canvas.addEventListener("click", handleClick)
    return () => {
      canvas.removeEventListener("click", handleClick)
    }
  }, [interactive, onSeatClick])

  const drawVenue = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.strokeStyle = "#1e40af"
    ctx.lineWidth = 2
    ctx.fillStyle = "#f0f9ff"

    // Stage area
    ctx.fillStyle = "#001f3f"
    ctx.fillRect(150, 30, 700, 80)
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 24px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("STAGE", 500, 70)

    // Main seating section
    const drawSeatingSection = (
      ctx: CanvasRenderingContext2D,
      startX: number,
      startY: number,
      rows: number,
      cols: number,
      startTableNumber: number,
      isVIP = false,
    ) => {
      const tableRadius = isVIP ? 14 : TABLE_RADIUS

      let tableNumber = startTableNumber

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = startX + col * TABLE_SPACING_X
          const y = startY + row * TABLE_SPACING_Y

          // VIP tables are red, regular tables blue
          ctx.beginPath()
          ctx.arc(x, y, tableRadius, 0, Math.PI * 2)
          ctx.fillStyle = isVIP ? "#ef4444" : "#1d4ed8"
          ctx.fill()
          ctx.strokeStyle = "#1e3a8a"
          ctx.stroke()

          // Table number
          ctx.fillStyle = "#ffffff"
          ctx.font = "bold 12px Arial"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(tableNumber.toString(), x, y)

          tableNumber++
        }
      }
    }

    // Regular tables
    drawSeatingSection(ctx, 80, 150, 4, 5, 1) // Section A (seats 1-20)
    drawSeatingSection(ctx, 550, 150, 4, 5, 21) // Section B (seats 21-40)
    drawSeatingSection(ctx, 80, 500, 4, 5, 41) // Section C (seats 41-60)
    drawSeatingSection(ctx, 550, 500, 4, 5, 61) // Section D (seats 61-80)

    // VIP label text (just labels, not tables)
    ctx.fillStyle = "#1e40af"
    ctx.font = "bold 12px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("VIP TABLE 1-2", 460, 220)
    ctx.fillText("VIP TABLE 3-4", 460, 260)

    // Buffet areas
    const drawBuffetArea = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      label: string,
    ) => {
      ctx.fillStyle = "#000000"
      ctx.fillRect(x, y, 80, 80)
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 10px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(label, x + 40, y + 40)
    }

    drawBuffetArea(ctx, 50, 250, "BUFFET 1")
    drawBuffetArea(ctx, 900, 250, "BUFFET 4")
    drawBuffetArea(ctx, 50, 600, "BUFFET 2")
    drawBuffetArea(ctx, 900, 600, "BUFFET 3")

    // Entrance marker
    ctx.fillStyle = "#059669"
    ctx.fillRect(400, 1150, 200, 30)
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 12px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("MAIN ENTRANCE", 500, 1165)

    // Photo exhibit
    ctx.fillStyle = "#1e3a8a"
    ctx.fillRect(250, 1000, 500, 60)
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 14px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("PHOTO EXHIBIT", 500, 1030)
  }

  const drawPath = (ctx: CanvasRenderingContext2D, result: PathResult) => {
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

    // Path points
    result.path.forEach((node, index) => {
      ctx.beginPath()
      ctx.arc(node.x, node.y, index === 0 ? 8 : 5, 0, Math.PI * 2)
      ctx.fillStyle = index === 0 ? "#22c55e" : "#f97316"
      ctx.fill()
    })
  }

  const drawSelectedSeat = (
    ctx: CanvasRenderingContext2D,
    seatId: string,
  ) => {
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

  // Bigger on mobile: full width, tall height; no max-w-2xl
  return (
    <canvas
      ref={canvasRef}
      className="border-2 border-blue-200 rounded-lg bg-white w-full h-[70vh] md:h-[650px] max-w-none mx-auto"
    />
  )
}
