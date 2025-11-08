"use client"

import { useState, useEffect, useRef } from "react"
import { getVenueMap, buildGraphFromVenueMap } from "@/lib/venue-map-service"
import { DijkstraGraph } from "@/lib/dijkstra-engine"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation, AlertCircle } from "lucide-react"

interface ImageVenueMapProps {
  selectedSeat?: number
  showPath?: boolean
  onSeatSelect?: (seatId: number) => void
}

export function ImageVenueMap({ selectedSeat, showPath = false, onSeatSelect }: ImageVenueMapProps) {
  const [path, setPath] = useState<any>(null)
  const [instructions, setInstructions] = useState<string[]>([])
  const [hoveredSeat, setHoveredSeat] = useState<number | null>(null)
  const [selectedEntrance, setSelectedEntrance] = useState<string>("")
  const [imageLoaded, setImageLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [venueMap, setVenueMap] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isLoadingMap = useRef(false)

  useEffect(() => {
    const loadVenueMap = async () => {
      if (isLoadingMap.current) return

      try {
        setIsLoading(true)
        isLoadingMap.current = true
        console.log("[v0] Loading saved venue map from Firebase as primary data source...")

        const loadedMap = await getVenueMap()

        if (!loadedMap || !loadedMap.nodes || loadedMap.nodes.length === 0) {
          setError("No venue map configured. Please configure the venue layout in the admin panel first.")
          setVenueMap(null)
        } else {
          console.log("[v0] Successfully loaded", loadedMap.nodes.length, "saved nodes from Firebase")
          setVenueMap(loadedMap)

          // Set default entrance to first available entrance
          const entranceNode = loadedMap.nodes.find((n: any) => n.type === "entrance")
          if (entranceNode) {
            setSelectedEntrance(entranceNode.id)
          }

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
        console.log("[v0] Calculating path using saved venue map nodes...")
        const graph = new DijkstraGraph()

        // Add all venue map nodes
        venueMap.nodes.forEach((node: any) => {
          graph.addNode(node.id, node.x, node.y, node.type)
        })

        // Build edges from venue map
        const graphData = buildGraphFromVenueMap(venueMap.nodes)
        graphData.edges.forEach((edge: any) => {
          graph.addEdge(edge.from, edge.to)
        })

        // Find the seat node in saved venue map
        const seatNode = venueMap.nodes.find(
          (node: any) =>
            node.label.toLowerCase().includes(`${selectedSeat}`) ||
            node.id === `seat-${selectedSeat}` ||
            node.id === `table-${selectedSeat}`,
        )

        if (!seatNode) {
          console.warn("[v0] Seat", selectedSeat, "not found in saved venue map")
          setError(`Seat ${selectedSeat} not found in venue configuration`)
          setPath(null)
          setInstructions([])
          return
        }

        const result = graph.findShortestPath(selectedEntrance, seatNode.id)

        if (result.path.length === 0) {
          setError("No path found to this seat. Please check venue configuration.")
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
  }, [selectedSeat, selectedEntrance, showPath, venueMap])

  const imageWidth = venueMap?.width || 1200
  const imageHeight = venueMap?.height || 1000

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

  return (
    <div className="w-full space-y-4">
      <Card className="bg-green-50 border-green-200 p-3">
        <p className="text-sm text-green-800 font-medium flex items-center gap-2">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          Using latest saved venue layout ({venueMap.nodes.length} nodes from Firebase)
        </p>
      </Card>

      <Card className="w-full bg-white border-slate-300 shadow-md overflow-hidden">
        <div className="w-full bg-slate-50 p-4">
          <div className="relative w-full" style={{ aspectRatio: `${imageWidth}/${imageHeight}` }}>
            <img
              src={venueMap.imageUrl || venueMap.customImageUrl}
              alt="Venue Layout"
              className="absolute inset-0 w-full h-full object-contain rounded-lg"
              onLoad={() => setImageLoaded(true)}
              onError={() => setError("Unable to load venue image")}
            />

            {imageLoaded && (
              <div className="absolute inset-0 w-full h-full">
                {seats.map((seat: any) => {
                  const seatNumber = seat.label.match(/\d+/)?.[0]
                  const isOnPath = path?.path.some((n: any) => n.id === seat.id)
                  const isSelected =
                    selectedSeat &&
                    (seat.label.toLowerCase().includes(`${selectedSeat}`) ||
                      seat.id === `seat-${selectedSeat}` ||
                      seat.id === `table-${selectedSeat}`)
                  const isHovered = seatNumber && hoveredSeat === Number.parseInt(seatNumber)

                  return (
                    <div
                      key={seat.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
                      style={{
                        left: `${(seat.x / imageWidth) * 100}%`,
                        top: `${(seat.y / imageHeight) * 100}%`,
                        zIndex: isSelected ? 30 : isOnPath ? 20 : 10,
                      }}
                      onMouseEnter={() => seatNumber && setHoveredSeat(Number.parseInt(seatNumber))}
                      onMouseLeave={() => setHoveredSeat(null)}
                      onClick={() => seatNumber && onSeatSelect?.(Number.parseInt(seatNumber))}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer transition-all duration-200 ${
                          isSelected
                            ? "bg-blue-600 ring-2 ring-blue-300 scale-125 shadow-lg"
                            : isOnPath
                              ? "bg-blue-500 opacity-100 scale-110"
                              : seat.type === "vip-table"
                                ? "bg-red-700 opacity-60 hover:opacity-90 hover:scale-110"
                                : "bg-blue-700 opacity-60 hover:opacity-90 hover:scale-110"
                        }`}
                      >
                        {seatNumber || seat.label.substring(0, 2)}
                      </div>

                      {isHovered && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50 pointer-events-none">
                          {seat.label}
                        </div>
                      )}
                    </div>
                  )
                })}

                {entrances.map((entrance: any) => (
                  <div
                    key={entrance.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${(entrance.x / imageWidth) * 100}%`,
                      top: `${(entrance.y / imageHeight) * 100}%`,
                      zIndex: 15,
                    }}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all cursor-pointer ${
                        selectedEntrance === entrance.id
                          ? "bg-green-500 ring-2 ring-green-300 scale-125 shadow-lg"
                          : "bg-green-600 opacity-70 hover:opacity-100 hover:scale-110"
                      }`}
                      onClick={() => setSelectedEntrance(entrance.id)}
                      title={entrance.label}
                    >
                      E
                    </div>
                  </div>
                ))}

                {path?.path && path.path.length > 1 && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    preserveAspectRatio="none"
                    viewBox={`0 0 ${imageWidth} ${imageHeight}`}
                    style={{ zIndex: 5 }}
                  >
                    <polyline
                      points={path.path.map((p: any) => `${p.x},${p.y}`).join(" ")}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.9"
                    />
                    <circle cx={path.path[0].x} cy={path.path[0].y} r="6" fill="#22c55e" opacity="0.9" />
                    <circle
                      cx={path.path[path.path.length - 1].x}
                      cy={path.path[path.path.length - 1].y}
                      r="6"
                      fill="#ef4444"
                      opacity="0.9"
                    />
                  </svg>
                )}
              </div>
            )}

            {!imageLoaded && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                <p className="text-slate-600 text-sm">Loading venue map...</p>
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-50">
                <div className="flex items-center gap-2 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      {selectedSeat && showPath && entrances.length > 0 && (
        <Card className="bg-blue-50 border-blue-200 p-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Select Entrance Point</h3>
              <p className="text-xs text-slate-600 mt-1">Choose where you're starting from</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {entrances.map((entrance: any) => (
                <Button
                  key={entrance.id}
                  variant={selectedEntrance === entrance.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedEntrance(entrance.id)}
                  className={
                    selectedEntrance === entrance.id
                      ? "bg-green-600 text-white"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100"
                  }
                >
                  {entrance.label.replace("Entrance", "").trim() || `Entrance ${entrance.id.split("-")[1]}`}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      )}

      {instructions.length > 0 && showPath && (
        <Card className="bg-blue-50 border-blue-200 p-4">
          <div className="flex gap-3 mb-4">
            <Navigation className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900">Directions to Seat {selectedSeat}</h3>
              <p className="text-sm text-slate-600">Distance: ~{Math.round((path?.distance ?? 0) / 15)} steps</p>
            </div>
          </div>
          <div className="space-y-2 ml-8">
            {instructions.map((instruction, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <span className="text-sm font-bold text-blue-700 min-w-fit">{idx + 1}.</span>
                <span className="text-sm text-slate-700">{instruction}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
