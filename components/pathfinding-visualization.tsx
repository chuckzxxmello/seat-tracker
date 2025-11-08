"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { getVenueMap, buildGraphFromVenueMap, type VenueNode } from "@/lib/venue-map-service"
import { DijkstraGraph } from "@/lib/dijkstra-engine"
import { AlertCircle } from "lucide-react"

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
  const [venueNodes, setVenueNodes] = useState<VenueNode[]>([])
  const [pathData, setPathData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
      // Build graph from saved nodes
      const graph = new DijkstraGraph()
      venueNodes.forEach((node) => {
        graph.addNode(node.id, node.x, node.y, node.type)
      })

      const graphData = buildGraphFromVenueMap(venueNodes)
      graphData.edges.forEach((edge) => {
        graph.addEdge(edge.from, edge.to, edge.weight)
      })

      const targetTable = venueNodes.find((node) => {
        // Match table type based on VIP status
        const expectedType = isVip ? "vip-table" : "table"
        if (node.type !== expectedType) return false

        // Extract table number from label
        const tableNum = node.label.match(/\d+/)?.[0]
        return tableNum === String(seatId)
      })

      if (!targetTable) {
        setError(`${isVip ? "VIP " : ""}Table ${seatId} not found`)
        setPathData(null)
        return
      }

      console.log(`[v0] Routing to ${isVip ? "VIP " : ""}Table ${seatId}: ${targetTable.id}`)

      // Find nearest entrance
      const entrances = venueNodes.filter((n) => n.type === "entrance")
      if (entrances.length === 0) {
        setError("No entrances configured")
        setPathData(null)
        return
      }

      const nearestEntrance = entrances.reduce((nearest, entrance) => {
        const distToThis = Math.sqrt(Math.pow(entrance.x - targetTable.x, 2) + Math.pow(entrance.y - targetTable.y, 2))
        const distToNearest = Math.sqrt(Math.pow(nearest.x - targetTable.x, 2) + Math.pow(nearest.y - targetTable.y, 2))
        return distToThis < distToNearest ? entrance : nearest
      })

      // Calculate path
      const result = graph.findShortestPath(nearestEntrance.id, targetTable.id)

      if (result.path.length === 0) {
        setError("No path found - add Edge Nodes in the venue editor to define walkable corridors")
        setPathData(null)
      } else {
        console.log(`[v0] Path found: ${result.path.map((n: any) => n.id).join(" → ")}`)
        setPathData(result)
        setError(null)
      }
    } catch (err) {
      console.error("[v0] Error calculating path:", err)
      setError("Error calculating path")
      setPathData(null)
    }
  }, [seatId, venueNodes, isVip])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || venueNodes.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Calculate bounds from all nodes
    const allX = venueNodes.map((n) => n.x)
    const allY = venueNodes.map((n) => n.y)
    const minX = Math.min(...allX) - 100
    const maxX = Math.max(...allX) + 100
    const minY = Math.min(...allY) - 100
    const maxY = Math.max(...allY) + 100

    const contentWidth = maxX - minX
    const contentHeight = maxY - minY

    // Set canvas size to fit content with proper aspect ratio
    const canvasWidth = 1200
    const scale = canvasWidth / contentWidth
    const canvasHeight = Math.ceil(contentHeight * scale)

    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // Clear canvas
    ctx.fillStyle = "#FFFFFF"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Transform function to map node coordinates to canvas
    const toCanvas = (x: number, y: number) => ({
      x: (x - minX) * scale,
      y: (y - minY) * scale,
    })

    const drawNode = (node: VenueNode, highlight = false) => {
      const pos = toCanvas(node.x, node.y)

      if (node.type === "stage") {
        // Draw stage as rectangle
        ctx.fillStyle = "#1E3A8A"
        ctx.fillRect(pos.x - 100 * scale, pos.y - 20 * scale, 200 * scale, 40 * scale)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `bold ${Math.max(12, 16 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("STAGE", pos.x, pos.y)
      } else if (node.type === "buffet") {
        // Draw buffet as rectangle
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
        // Draw carving table
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
        ctx.font = `${Math.max(7, 8 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("CR", pos.x, pos.y)
      } else if (node.type === "photo-exhibit") {
        ctx.fillStyle = "#F59E0B"
        ctx.fillRect(pos.x - 30 * scale, pos.y - 20 * scale, 60 * scale, 40 * scale)
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `${Math.max(7, 8 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("PHOTO", pos.x, pos.y)
      } else if (node.type === "edge-node") {
        // Edge nodes should not be visible to end users, only used for pathfinding
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
        // Draw entrance as circle
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
        // Draw table circle
        const tableNum = node.label.match(/\d+/)?.[0]
        const isSelected = tableNum === String(seatId)

        ctx.fillStyle = node.type === "vip-table" ? "#DC2626" : "#1E40AF"
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 12 * scale, 0, Math.PI * 2)
        ctx.fill()

        // Highlight selected table
        if (isSelected) {
          ctx.strokeStyle = "#FBBF24"
          ctx.lineWidth = 4
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, 18 * scale, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Table number
        ctx.fillStyle = "#FFFFFF"
        ctx.font = `bold ${Math.max(8, 10 * scale)}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(tableNum || "", pos.x, pos.y)
      }
    }

    // Draw all nodes
    venueNodes.forEach((node) => drawNode(node))

    if (pathData && pathData.path.length > 1) {
      ctx.strokeStyle = "#10B981"
      ctx.lineWidth = 4 * scale
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.shadowColor = "rgba(16, 185, 129, 0.4)"
      ctx.shadowBlur = 6

      ctx.beginPath()
      const startPos = toCanvas(pathData.path[0].x, pathData.path[0].y)
      ctx.moveTo(startPos.x, startPos.y)

      pathData.path.slice(1).forEach((node: any) => {
        const pos = toCanvas(node.x, node.y)
        ctx.lineTo(pos.x, pos.y)
      })
      ctx.stroke()

      ctx.shadowColor = "transparent"
      ctx.shadowBlur = 0

      // Highlight start and end nodes
      const startNode = venueNodes.find((n) => n.id === pathData.path[0].id)
      const endNode = venueNodes.find((n) => n.id === pathData.path[pathData.path.length - 1].id)
      if (startNode) drawNode(startNode, true)
      if (endNode) drawNode(endNode, true)
    }
  }, [seatId, venueNodes, pathData])

  if (isLoading) {
    return (
      <Card className="bg-white border-blue-200 p-8">
        <div className="flex items-center justify-center gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <p className="text-slate-600 text-center">Loading venue map...</p>
        </div>
      </Card>
    )
  }

  if (venueNodes.length === 0) {
    return (
      <Card className="bg-red-50 border-red-200 p-8">
        <div className="flex items-center gap-3 text-red-700">
          <AlertCircle className="w-6 h-6" />
          <div>
            <h3 className="font-semibold">Venue Map Not Configured</h3>
            <p className="text-sm">Please set up the venue map in the admin panel first.</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-slate-200 overflow-hidden shadow-sm">
      <div className="p-3 bg-emerald-50 border-b border-emerald-200 flex items-center justify-between">
        <p className="text-sm text-emerald-700">
          <span className="font-semibold">Using saved venue layout</span>
          <span className="text-emerald-600 ml-2">({venueNodes.length} nodes from Firebase)</span>
        </p>
        {pathData && (
          <p className="text-sm text-blue-700">
            Path: <span className="font-semibold">{pathData.path.length} nodes</span>,
            <span className="ml-2">{Math.round(pathData.distance / 15)} steps</span>
          </p>
        )}
      </div>

      {error && (
        <div className="p-3 bg-yellow-50 border-b border-yellow-200 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-yellow-700" />
          <p className="text-sm text-yellow-700">{error}</p>
        </div>
      )}

      <canvas ref={canvasRef} className="w-full bg-white" />

      <div className="p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-2 md:grid-cols-6 gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-900"></div>
          <span className="text-xs font-medium text-slate-700">Table</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-600"></div>
          <span className="text-xs font-medium text-slate-700">VIP Table</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-600"></div>
          <span className="text-xs font-medium text-slate-700">Entrance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-800"></div>
          <span className="text-xs font-medium text-slate-700">Buffet</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-green-500"></div>
          <span className="text-xs font-medium text-slate-700">Shortest Path</span>
        </div>
      </div>
    </Card>
  )
}
