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
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // canvas zoom/pan (view-space)
  const [zoom, setZoom] = useState(1)
  const [initialZoom, setInitialZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // pinch-zoom tracking
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null)

  // Load venue nodes from Firebase
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
      } catch (err) {
        console.error("[v0] Error loading venue map:", err)
        setError("Failed to load venue map")
      } finally {
        setIsLoading(false)
      }
    }
    loadVenueData()
  }, [])

  // Validate the requested seat exists
  useEffect(() => {
    if (!seatId || venueNodes.length === 0) return

    try {
      const targetTable = venueNodes.find((node) => {
        const expectedType = isVip ? "vip-table" : "table"
        if (node.type !== expectedType) return false
        const tableNum = node.label.match(/\d+/)?.[0]
        return tableNum === String(seatId)
      })

      if (!targetTable) {
        setError(`${isVip ? "VIP " : ""}Table ${seatId} not found`)
      } else {
        setError(null)
      }
    } catch (err) {
      console.error("[v0] Error finding table:", err)
      setError("Error locating table")
    }
  }, [seatId, venueNodes, isVip])

  // --- Zoom/pan helpers ------------------------------------------------------

  const clampZoom = (z: number) => Math.min(3, Math.max(0.5, z))

  // Zoom around a specific screen point (Google-Maps style)
  const zoomAtPoint = (factor: number, clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    setZoom((prevZoom) => {
      const targetZoom = clampZoom(prevZoom * factor)
      const actualFactor = targetZoom / prevZoom
      if (actualFactor === 1) return prevZoom

      setPan((prevPan) => {
        // world coords currently under cursor
        const worldX = (x - prevPan.x) / prevZoom
        const worldY = (y - prevPan.y) / prevZoom

        return {
          x: x - worldX * targetZoom,
          y: y - worldY * targetZoom,
        }
      })

      return targetZoom
    })
  }

  // Zoom around canvas center (for buttons)
  const zoomToCenter = (factor: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    zoomAtPoint(factor, rect.left + rect.width / 2, rect.top + rect.height / 2)
  }

  // Drag / pan handlers (mouse)
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

  const handleMouseUp = () => setIsDragging(false)

  // Mouse-wheel zoom
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const factor = e.deltaY < 0 ? 1.1 : 0.9
    zoomAtPoint(factor, e.clientX, e.clientY)
  }

  // Touch handlers: one-finger drag, two-finger pinch zoom
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0]
      setIsDragging(true)
      setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y })
      setLastTouchDistance(null)
    } else if (e.touches.length === 2) {
      e.preventDefault()
      const [t1, t2] = [e.touches[0], e.touches[1]]
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY)
      setLastTouchDistance(dist)
      setIsDragging(false)
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1 && isDragging) {
      const touch = e.touches[0]
      setPan({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      })
    } else if (e.touches.length === 2 && lastTouchDistance) {
      e.preventDefault()
      const [t1, t2] = [e.touches[0], e.touches[1]]
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY)
      if (dist === 0) return

      const factor = dist / lastTouchDistance
      const centerX = (t1.clientX + t2.clientX) / 2
      const centerY = (t1.clientY + t2.clientY) / 2

      zoomAtPoint(factor, centerX, centerY)
      setLastTouchDistance(dist)
    }
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 0) {
      setIsDragging(false)
      setLastTouchDistance(null)
    } else if (e.touches.length === 1) {
      const touch = e.touches[0]
      setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y })
    }
  }

  const handleZoomIn = () => zoomToCenter(1.25)
  const handleZoomOut = () => zoomToCenter(0.8)

  const handleResetView = () => {
    setZoom(initialZoom)
    setPan({ x: 0, y: 0 })
  }

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev)
    if (!isFullscreen) {
      handleResetView()
    }
  }

  // Draw the venue onto the canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || venueNodes.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // --- COMPUTE BOUNDS ------------------------------------------------------
    const allX = venueNodes.map((n) => n.x)
    const allY = venueNodes.map((n) => n.y)
    const rawMinX = Math.min(...allX)
    const rawMaxX = Math.max(...allX)
    const rawMinY = Math.min(...allY)
    const rawMaxY = Math.max(...allY)

    const rawWidth = rawMaxX - rawMinX
    const rawHeight = rawMaxY - rawMinY

    // Find selected node (for centering/zooming)
    const selectedNode = (() => {
      if (!seatId) return null
      return venueNodes.find((node) => {
        const tableNum = node.label.match(/\d+/)?.[0]
        const isSelectedType =
          (isVip && node.type === "vip-table") || (!isVip && node.type === "table")
        return isSelectedType && tableNum === String(seatId)
      })
    })()

    // Base bounds (full map)
    let focusMinX = rawMinX
    let focusMaxX = rawMaxX
    let focusMinY = rawMinY
    let focusMaxY = rawMaxY

    // If we have a selected node, crop the bounds around it
    if (selectedNode) {
      const focusFactor = 1.4 // 1.0 = full map, >1 = zoom in
      const focusWidth = rawWidth / focusFactor
      const focusHeight = rawHeight / focusFactor

      let desiredMinX = selectedNode.x - focusWidth / 2
      let desiredMaxX = selectedNode.x + focusWidth / 2
      let desiredMinY = selectedNode.y - focusHeight / 2
      let desiredMaxY = selectedNode.y + focusHeight / 2

      // Clamp horizontally within full bounds
      if (desiredMinX < rawMinX) {
        const diff = rawMinX - desiredMinX
        desiredMinX += diff
        desiredMaxX += diff
      }
      if (desiredMaxX > rawMaxX) {
        const diff = desiredMaxX - rawMaxX
        desiredMinX -= diff
        desiredMaxX -= diff
      }

      // Clamp vertically within full bounds
      if (desiredMinY < rawMinY) {
        const diff = rawMinY - desiredMinY
        desiredMinY += diff
        desiredMaxY += diff
      }
      if (desiredMaxY > rawMaxY) {
        const diff = desiredMaxY - rawMaxY
        desiredMinY -= diff
        desiredMaxY -= diff
      }

      focusMinX = desiredMinX
      focusMaxX = desiredMaxX
      focusMinY = desiredMinY
      focusMaxY = desiredMaxY
    }

    // Add a bit of outer margin
    const margin = 40
    const minX = focusMinX - margin
    const maxX = focusMaxX + margin
    const minY = focusMinY - margin
    const maxY = focusMaxY + margin

    const contentWidth = maxX - minX
    const contentHeight = maxY - minY

    // Logical canvas size
    const canvasWidth = 1400
    const scale = canvasWidth / contentWidth
    const canvasHeight = Math.ceil(contentHeight * scale)

    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // Background
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
        // Skip drawing edge helper nodes
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
          tableNum === String(seatId) &&
          ((isVip && node.type === "vip-table") || (!isVip && node.type === "table"))

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
        tableNum === String(seatId) &&
        ((isVip && node.type === "vip-table") || (!isVip && node.type === "table"))
      drawNode(node, isSelected)
    })

    ctx.restore()

    // initial zoom baseline
    if (initialZoom !== 1) {
      setInitialZoom(1)
      setZoom(1)
      setPan({ x: 0, y: 0 })
    }
  }, [seatId, venueNodes, isVip, zoom, pan, initialZoom])

  if (isLoading) {
    return (
      <Card className="bg-white border-blue-200 p-6 md:p-8">
        <div className="flex items-center justify-center gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" />
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
      {/* Fullscreen overlay */}
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
          <div ref={containerRef} className="flex-1 overflow-hidden bg-white">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain cursor-move touch-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          </div>
          {/* Zoom controls in fullscreen */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-center gap-3">
            <Button variant="outline" size="icon" onClick={handleZoomOut}>
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleResetView}>
              1:1
            </Button>
            <Button variant="outline" size="icon" onClick={handleZoomIn}>
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Normal (embedded) view */}
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
              <span className="block md:inline text-xs md:text-sm">
                {" "}
                - Highlighted on the map below
              </span>
            </p>
            <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="ml-2">
              <Maximize2 className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        )}

        {/* Map area */}
        <div className="w-full bg-white flex items-center justify-center p-3 md:p-4">
          <div className="w-full h-[75vh] md:h-[550px] lg:h-[650px] max-w-full">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain cursor-move touch-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          </div>
        </div>
      </Card>
    </>
  )
}
