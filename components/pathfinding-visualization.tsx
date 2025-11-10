"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getVenueMap, type VenueNode } from "@/lib/venue-map-service"
import { AlertCircle, Maximize2, Minimize2, ZoomIn, ZoomOut } from "lucide-react"

interface PathfindingVisualizationProps {
  seatId: number | null
  imageSrc?: string
  showBackground?: boolean
  isVip?: boolean
}

export function PathfindingVisualization({
  seatId,
  imageSrc,
  showBackground = false,
  isVip = false,
}: PathfindingVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [venueNodes, setVenueNodes] = useState<VenueNode[]>([])
  const [pathData, setPathData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  useEffect(() => {
    async function loadVenueData() {
      try {
        const venueMap = await getVenueMap()
        if (venueMap && venueMap.nodes) {
          setVenueNodes(venueMap.nodes)
          setError(null)
        } else {
          setError("No venue map configured")
        }
      } catch (error) {
        console.error("[v0] Error loading venue map:", error)
        setError("Failed to load venue map")
      } finally {
        setIsLoading(false)
      }
    }
    loadVenueData()
  }, [])

  useEffect(() => {
    if (!seatId || venueNodes.length === 0) {
      setPathData(null)
      return
    }

    try {
      const targetTable = venueNodes.find((node) => {
        const expectedType = isVip ? "vip-table" : "table"
        if (node.type !== expectedType) return false
        const tableNum = node.label.match(/\d+/)?.[0]
        return tableNum === String(seatId)
      })

      if (!targetTable) {
        setError(`${isVip ? "VIP " : ""}Table ${seatId} not found`)
        setPathData(null)
        return
      }

      console.log(`[v0] Highlighting ${isVip ? "VIP " : ""}Table ${seatId}: ${targetTable.id}`)
      setPathData({ targetTable })
      setError(null)
    } catch (err) {
      console.error("[v0] Error finding table:", err)
      setError("Error locating table")
      setPathData(null)
    }
  }, [seatId, venueNodes, isVip])

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y })
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging) return
    const touch = e.touches[0]
    setPan({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    })
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleResetView = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    if (!isFullscreen) {
      handleResetView()
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || venueNodes.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const allX = venueNodes.map((n) => n.x)
    const allY = venueNodes.map((n) => n.y)
    const minX = Math.min(...allX) - 100
    const maxX = Math.max(...allX) + 100
    const minY = Math.min(...allY) - 100
    const maxY = Math.max(...allY) + 100

    const contentWidth = maxX - minX
    const contentHeight = maxY - minY

    const canvasWidth = 1400
    const scale = canvasWidth / contentWidth
    const canvasHeight = Math.ceil(contentHeight * scale)

    canvas.width = canvasWidth
    canvas.height = canvasHeight

    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.save()
    ctx.scale(zoom, zoom)
    ctx.translate(pan.x / zoom, pan.y / zoom)

    const toCanvas = (x: number, y: number) => ({
      x: (x - minX) * scale,
      y: (y - minY) * scale,
    })

    const drawNode = (node: VenueNode, highlight = false) => {
      const pos = toCanvas(node.x, node.y)

      if (node.type === "stage") {
        ctx.fillStyle = "#1E3A8A"
        ctx.fillRect(pos.x - 100 * scale, pos.y - 20 * scale, 200 * scale, 40 * scale)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `bold ${Math.max(12, 16 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("STAGE", pos.x, pos.y)
      } else if (node.type === "buffet") {
        ctx.fillStyle = "#1F2937"
        ctx.fillRect(pos.x - 15 * scale, pos.y - 30 * scale, 30 * scale, 60 * scale)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `${Math.max(8, 10 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.save()
        ctx.translate(pos.x, pos.y)
        ctx.rotate(-Math.PI / 2)
        ctx.fillText("BUFFET", 0, 0)
        ctx.restore()
      } else if (node.type === "carving-table") {
        ctx.fillStyle = "#7C3AED"
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 25 * scale, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `${Math.max(8, 9 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("CT", pos.x, pos.y)
      } else if (node.type === "crying-room") {
        ctx.fillStyle = "#06B6D4"
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 20 * scale, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `${Math.max(6, 7 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("CRYING", pos.x, pos.y - 4 * scale)
        ctx.fillText("ROOM", pos.x, pos.y + 4 * scale)
      } else if (node.type === "photo-exhibit") {
        ctx.fillStyle = "#F59E0B"
        ctx.fillRect(pos.x - 30 * scale, pos.y - 20 * scale, 60 * scale, 40 * scale)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `${Math.max(7, 8 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("PHOTO", pos.x, pos.y)
      } else if (node.type === "edge-node") {
        return
      } else if (node.type === "custom" || node.type === "waypoint" || node.type === "intersection") {
        ctx.fillStyle = "#8B5CF6"
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 8 * scale, 0, Math.PI * 2)
        ctx.fill()
        if (node.label && node.type === "custom") {
          ctx.fillStyle = "#1F2937"
          ctx.font = `${Math.max(7, 8 * scale)}px sans-serif`
          ctx.textAlign = "center"
          ctx.fillText(node.label.substring(0, 8), pos.x, pos.y + 15 * scale)
        }
      } else if (node.type === "entrance") {
        ctx.fillStyle = highlight ? "#FBBF24" : "#10B981"
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 12 * scale, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = "#FFFFFF"
        ctx.lineWidth = 2
        ctx.stroke()
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `bold ${Math.max(8, 10 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("E", pos.x, pos.y)
      } else if (node.type === "table" || node.type === "vip-table") {
        const tableNum = node.label.match(/\d+/)?.[0]
        const isSelected =
          tableNum === String(seatId) && ((isVip && node.type === "vip-table") || (!isVip && node.type === "table"))

        ctx.fillStyle = node.type === "vip-table" ? "#DC2626" : "#1E40AF"
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 12 * scale, 0, Math.PI * 2)
        ctx.fill()

        if (isSelected) {
          ctx.strokeStyle = "#FBBF24"
          ctx.lineWidth = 4
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, 18 * scale, 0, Math.PI * 2)
          ctx.stroke()
        }

        ctx.fillStyle = "#FFFFFF"
        ctx.font = `bold ${Math.max(8, 10 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(tableNum || "", pos.x, pos.y)
      }
    }

    venueNodes.forEach((node) => {
      const tableNum = node.label.match(/\d+/)?.[0]
      const isSelected =
        tableNum === String(seatId) && ((isVip && node.type === "vip-table") || (!isVip && node.type === "table"))

      drawNode(node, isSelected)
    })

    ctx.restore()
  }, [seatId, venueNodes, pathData, isVip, zoom, pan])

  if (isLoading) {
    return (
      <Card className="bg-white border-blue-200 p-6 md:p-8">
        <div className="flex items-center justify-center gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <p className="text-slate-600 text-center text-sm md:text-base">Loading venue map...</p>
        </div>
      </Card>
    )
  }

  if (venueNodes.length === 0) {
    return (
      <Card className="bg-red-50 border-red-200 p-6 md:p-8">
        <div className="flex items-center gap-3 text-red-700">
          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-sm md:text-base">Venue Map Not Configured</h3>
            <p className="text-xs md:text-sm">Please set up the venue map in the admin panel first.</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <>
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between p-4 bg-slate-50 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              {isVip ? "VIP " : ""}Seat Number {seatId}
            </h3>
            <Button variant="ghost" size="sm" onClick={toggleFullscreen}>
              <Minimize2 className="w-5 h-5" />
            </Button>
          </div>
          <div ref={containerRef} className="flex-1 overflow-hidden relative bg-white">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain cursor-move"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <Button
                size="icon"
                onClick={handleZoomIn}
                className="bg-white hover:bg-slate-100 text-slate-900 shadow-lg"
              >
                <ZoomIn className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                onClick={handleZoomOut}
                className="bg-white hover:bg-slate-100 text-slate-900 shadow-lg"
              >
                <ZoomOut className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                onClick={handleResetView}
                className="bg-white hover:bg-slate-100 text-slate-900 shadow-lg text-xs font-bold"
              >
                1:1
              </Button>
            </div>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-900 flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Table</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-600 flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">VIP Table</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-600 flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Entrance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-800 flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-700">Buffet</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Card className="bg-white border-slate-200 overflow-hidden shadow-sm">
        {error && (
          <div className="p-3 md:p-4 bg-yellow-50 border-b border-yellow-200 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-700 flex-shrink-0" />
            <p className="text-xs md:text-sm text-yellow-700">{error}</p>
          </div>
        )}

        {seatId && !error && (
          <div className="p-3 md:p-4 bg-blue-50 border-b border-blue-200 flex items-center justify-between">
            <p className="text-xs md:text-sm text-slate-700 text-center leading-relaxed flex-1">
              <span className="font-semibold text-blue-700 text-base md:text-lg block md:inline mb-1 md:mb-0">
                {isVip ? "VIP " : ""}Seat Number {seatId}
              </span>
              <span className="block md:inline text-xs md:text-sm"> - Highlighted in orange below</span>
            </p>
            <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="ml-2">
              <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        )}

        <div className="w-full bg-white min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center p-4">
          <canvas ref={canvasRef} className="w-full h-auto max-w-full" />
        </div>

        <div className="p-3 md:p-4 bg-slate-50 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-900 flex-shrink-0"></div>
              <span className="text-xs md:text-sm font-medium text-slate-700">Table</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-600 flex-shrink-0"></div>
              <span className="text-xs md:text-sm font-medium text-slate-700">VIP Table</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-600 flex-shrink-0"></div>
              <span className="text-xs md:text-sm font-medium text-slate-700">Entrance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-800 flex-shrink-0"></div>
              <span className="text-xs md:text-sm font-medium text-slate-700">Buffet</span>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}
