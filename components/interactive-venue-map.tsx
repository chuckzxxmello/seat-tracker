"use client"

import { useState, useEffect, useRef } from "react"
import { getVenueMap, buildGraphFromVenueMap } from "@/lib/venue-map-service"
import { DijkstraGraph } from "@/lib/dijkstra-engine"
import { Card } from "@/components/ui/card"
import { Navigation, AlertCircle } from "lucide-react"

interface InteractiveVenueMapProps {
  selectedSeat?: number
  selectedEntrance?: string
  onSeatSelect?: (seatId: number) => void
  showPath?: boolean
  isVip?: boolean
}

export function InteractiveVenueMap({
  selectedSeat,
  selectedEntrance,
  onSeatSelect,
  showPath = false,
  isVip = false,
}: InteractiveVenueMapProps) {
  const [path, setPath] = useState<any>(null)
  const [instructions, setInstructions] = useState<string[]>([])
  const [venueMap, setVenueMap] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const isLoadingMap = useRef(false)

  useEffect(() => {
    const loadVenueMap = async () => {
      if (isLoadingMap.current) return

      try {
        setIsLoading(true)
        isLoadingMap.current = true

        const loadedMap = await getVenueMap()

        if (!loadedMap || !loadedMap.nodes || loadedMap.nodes.length === 0) {
          setError("No venue map configured. Please configure the venue layout in the admin panel first.")
          setVenueMap(null)
        } else {
          setVenueMap(loadedMap)
          setError(null)
        }
      } catch (err) {
        console.error("[v0] Error loading venue map:", err)
        setError("Failed to load venue map from database. Please try again.")
        setVenueMap(null)
      } finally {
        setIsLoading(false)
        isLoadingMap.current = false
      }
    }

    loadVenueMap()
  }, [])

  useEffect(() => {
    if (!showPath || !selectedSeat || !selectedEntrance || !venueMap) {
      setPath(null)
      setInstructions([])
      return
    }

    const calculatePath = () => {
      try {
        const graph = new DijkstraGraph()

        venueMap.nodes.forEach((node: any) => {
          graph.addNode(node.id, node.x, node.y, node.type)
        })

        const graphData = buildGraphFromVenueMap(venueMap.nodes)
        graphData.edges.forEach((edge: any) => {
          graph.addEdge(edge.from, edge.to, edge.weight)
        })

        const expectedType = isVip ? "vip-table" : "table"
        const seatNode = venueMap.nodes.find((node: any) => {
          if (node.type !== expectedType) return false
          const tableNum = node.label.match(/\d+/)?.[0]
          return tableNum === String(selectedSeat)
        })

        if (!seatNode) {
          setError(`${isVip ? "VIP " : ""}Table ${selectedSeat} not found in venue configuration`)
          setPath(null)
          setInstructions([])
          return
        }

        const result = graph.findShortestPath(selectedEntrance, seatNode.id)

        if (result.path.length === 0) {
          setError("No path found - add Edge Nodes in the venue editor to define walkable corridors")
        } else {
          setError(null)
        }

        setPath(result)
        setInstructions(result.instructions)
      } catch (err) {
        console.error("[v0] Error calculating path:", err)
        setError("Unable to calculate path with current venue configuration")
        setPath(null)
        setInstructions([])
      }
    }

    calculatePath()
  }, [selectedSeat, selectedEntrance, showPath, venueMap, isVip])

  const SVG_WIDTH = venueMap?.width || 1000
  const SVG_HEIGHT = venueMap?.height || 950

  if (isLoading) {
    return (
      <Card className="w-full bg-white border-slate-200 p-8 shadow-sm">
        <div className="flex items-center justify-center gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <p className="text-slate-600">Loading saved venue configuration...</p>
        </div>
      </Card>
    )
  }

  if (!venueMap) {
    return (
      <Card className="w-full bg-red-50 border-red-200 p-8 shadow-sm">
        <div className="flex items-center gap-3 text-red-700">
          <AlertCircle className="w-6 h-6 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Venue Map Not Configured</h3>
            <p className="text-sm">
              {error || "Please set up the venue layout in the admin panel before using the seat locator."}
            </p>
          </div>
        </div>
      </Card>
    )
  }

  const seats = venueMap.nodes.filter((n: any) => n.type === "table" || n.type === "vip-table" || n.type === "seat")
  const entrances = venueMap.nodes.filter((n: any) => n.type === "entrance")
  const specialAreas = venueMap.nodes.filter((n: any) =>
    ["buffet", "stage", "photo-exhibit", "crying-room", "carving-table"].includes(n.type),
  )
  // Edge nodes are intentionally excluded from rendering

  return (
    <Card className="w-full bg-white border-slate-200 p-4 shadow-sm overflow-x-auto">
      <div className="mb-3 bg-green-50 border border-green-200 rounded p-2 text-xs text-green-800 flex items-center gap-2">
        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
        <span>Using latest saved venue layout ({venueMap.nodes.length} nodes from Firebase)</span>
      </div>

      {error && (
        <div className="mb-3 bg-yellow-50 border border-yellow-200 rounded p-2 text-xs text-yellow-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      <div className="relative inline-block min-w-full">
        <svg
          width="100%"
          height="auto"
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          className="border border-slate-300 rounded-lg bg-white"
          style={{ minWidth: "600px" }}
        >
          {specialAreas
            .filter((a: any) => a.type === "stage")
            .map((area: any) => (
              <g key={area.id}>
                <rect x={area.x - 300} y={area.y - 30} width="600" height="55" fill="#1e40af" rx="4" />
                <text
                  x={area.x}
                  y={area.y}
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                  className="font-sans"
                >
                  {area.label}
                </text>
              </g>
            ))}

          {specialAreas
            .filter((a: any) => a.type === "buffet")
            .map((area: any) => (
              <g key={area.id}>
                <rect x={area.x - 30} y={area.y - 100} width="60" height="200" fill="#1a1a1a" rx="3" />
                <text
                  x={area.x}
                  y={area.y}
                  fill="white"
                  fontSize="9"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-sans font-bold"
                >
                  {area.label}
                </text>
              </g>
            ))}

          {/* Path visualization - before seats so it appears underneath */}
          {path?.path && path.path.length > 1 && (
            <>
              <polyline
                points={path.path.map((p: any) => `${p.x},${p.y}`).join(" ")}
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
              {path.path.map((p: any, idx: number) => (
                <circle key={`path-${idx}`} cx={p.x} cy={p.y} r="4" fill="#10b981" opacity="0.8" />
              ))}
            </>
          )}

          {seats.map((seat: any) => {
            const seatNumber = seat.label.match(/\d+/)?.[0]
            const isOnPath = path?.path.some((n: any) => n.id === seat.id)
            const isSelected =
              selectedSeat &&
              (seat.label.toLowerCase().includes(`${selectedSeat}`) ||
                seat.id === `seat-${selectedSeat}` ||
                seat.id === `table-${selectedSeat}`)

            return (
              <g key={seat.id}>
                <circle
                  cx={seat.x}
                  cy={seat.y}
                  r="14"
                  fill={isSelected ? "#2563eb" : seat.type === "vip-table" ? "#dc2626" : "#1e40af"}
                  stroke={isSelected ? "#fbbf24" : "#1e3a8a"}
                  strokeWidth={isSelected ? "3" : "1.5"}
                  opacity={isOnPath ? 1 : 0.7}
                  className="cursor-pointer hover:opacity-100 transition-all duration-200"
                  onClick={() => seatNumber && onSeatSelect?.(Number.parseInt(seatNumber))}
                />
                <text
                  x={seat.x}
                  y={seat.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                  className="font-sans pointer-events-none select-none"
                >
                  {seatNumber || seat.label.substring(0, 3)}
                </text>
              </g>
            )
          })}

          {entrances.map((entrance: any) => (
            <g key={entrance.id}>
              <circle cx={entrance.x} cy={entrance.y} r="13" fill="#22c55e" stroke="#16a34a" strokeWidth="2" />
              <text
                x={entrance.x}
                y={entrance.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="9"
                fontWeight="bold"
                className="font-sans"
              >
                E
              </text>
            </g>
          ))}
        </svg>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-900" />
            <span className="text-xs text-slate-600 font-medium">Seat</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-slate-600 font-medium">Entrance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-900" />
            <span className="text-xs text-slate-600 font-medium">Buffet</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-700" />
            <span className="text-xs text-slate-600 font-medium">VIP</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 bg-green-500 rounded" />
            <span className="text-xs text-slate-600 font-medium">Path</span>
          </div>
        </div>

        {instructions.length > 0 && (
          <Card className="mt-6 bg-blue-50 border-blue-200 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Navigation className="w-5 h-5 text-blue-700" />
              <h3 className="font-semibold text-slate-900">
                Directions to {isVip ? "VIP " : ""}Seat {selectedSeat}
                <span className="text-sm font-normal text-slate-600 ml-2">
                  (≈{Math.round((path?.distance ?? 0) / 15)} steps)
                </span>
              </h3>
            </div>
            <div className="space-y-2">
              {instructions.map((instruction, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-sm font-bold text-blue-700 min-w-fit">{idx + 1}.</span>
                  <span className="text-sm text-slate-700">{instruction}</span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </Card>
  )
}
