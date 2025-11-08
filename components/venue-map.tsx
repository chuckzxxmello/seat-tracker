"use client"

import { useEffect, useRef } from "react"
import type { PathResult } from "@/lib/dijkstra"

interface VenueMapProps {
  highlightPath?: PathResult | null
  selectedSeat?: string | null
  onSeatClick?: (seatId: string) => void
  interactive?: boolean
}

export function VenueMap({ highlightPath, selectedSeat, onSeatClick, interactive = false }: VenueMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
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
    ctx.fillText("STAGE", 500, 75)

    // Main seating sections
    drawSeatingSection(ctx, 80, 150, 4, 5, 1) // Section A (seats 1-20)
    drawSeatingSection(ctx, 550, 150, 4, 5, 21) // Section B (seats 21-40)
    drawSeatingSection(ctx, 80, 500, 4, 5, 41) // Section C (seats 41-60)
    drawSeatingSection(ctx, 550, 500, 4, 5, 61) // Section D (seats 61-80)

    // VIP tables
    ctx.fillStyle = "#1e40af"
    ctx.font = "bold 12px Arial"
    ctx.textAlign = "center"
    ctx.fillText("VIP\nTABLE 1-2", 460, 220)
    ctx.fillText("VIP\nTABLE 3-4", 460, 280)

    // Buffet areas
    drawBuffetArea(ctx, 50, 250, "BUFFET 1")
    drawBuffetArea(ctx, 900, 250, "BUFFET 4")
    drawBuffetArea(ctx, 50, 600, "BUFFET 2")
    drawBuffetArea(ctx, 900, 600, "BUFFET 3")

    // Entrance markers
    ctx.fillStyle = "#059669"
    ctx.fillRect(400, 1150, 200, 30)
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 12px Arial"
    ctx.textAlign = "center"
    ctx.fillText("MAIN ENTRANCE", 500, 1170)

    // Photo exhibit
    ctx.fillStyle = "#1e3a8a"
    ctx.fillRect(250, 1000, 500, 60)
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 14px Arial"
    ctx.fillText("PHOTO EXHIBIT", 500, 1032)
  }

  const drawSeatingSection = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    cols: number,
    rows: number,
    startSeat: number,
  ) => {
    const seatRadius = 20
    const spacing = 60
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 1
    ctx.strokeRect(x - 30, y - 30, cols * spacing + 20, rows * spacing + 20)

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const seatX = x + c * spacing + 15
        const seatY = y + r * spacing + 15
        const seatNumber = startSeat + r * cols + c

        // Check if seat is selected
        const isSelected = selectedSeat === `seat-${seatNumber}`

        ctx.fillStyle = isSelected ? "#dc2626" : "#1e40af"
        ctx.beginPath()
        ctx.arc(seatX, seatY, seatRadius, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 10px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(seatNumber.toString(), seatX, seatY)
      }
    }
  }

  const drawBuffetArea = (ctx: CanvasRenderingContext2D, x: number, y: number, label: string) => {
    ctx.fillStyle = "#000000"
    ctx.fillRect(x, y, 80, 80)
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 10px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(label, x + 40, y + 40)
  }

  const drawPath = (ctx: CanvasRenderingContext2D, result: PathResult) => {
    ctx.strokeStyle = "#ef4444"
    ctx.lineWidth = 4
    ctx.setLineDash([5, 5])

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

    // Draw path points
    result.path.forEach((node, index) => {
      if (index === 0) {
        ctx.fillStyle = "#059669"
      } else if (index === result.path.length - 1) {
        ctx.fillStyle = "#dc2626"
      } else {
        ctx.fillStyle = "#f59e0b"
      }
      ctx.beginPath()
      ctx.arc(node.x, node.y, 8, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  const drawSelectedSeat = (ctx: CanvasRenderingContext2D, seatId: string) => {
    // This highlights the seat already in drawSeatingSection
  }

  return <canvas ref={canvasRef} className="border-2 border-blue-200 rounded-lg bg-white w-full max-w-2xl mx-auto" />
}
