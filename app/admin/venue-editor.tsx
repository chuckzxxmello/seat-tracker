"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { VenueMap } from "@/components/venue-map"

export function VenueEditor() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [drawMode, setDrawMode] = useState<"seat" | "path" | "entrance" | null>(null)

  return (
    <Card className="bg-white border-blue-200 p-6">
      <h2 className="text-xl font-semibold text-slate-900 mb-4">Venue Map Editor</h2>

      <div className="flex gap-2 mb-6">
        <Button
          onClick={() => setDrawMode("entrance")}
          variant={drawMode === "entrance" ? "default" : "outline"}
          className="bg-green-600 hover:bg-green-700"
        >
          Add Entrance
        </Button>
        <Button
          onClick={() => setDrawMode("seat")}
          variant={drawMode === "seat" ? "default" : "outline"}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Add Seat
        </Button>
        <Button
          onClick={() => setDrawMode("path")}
          variant={drawMode === "path" ? "default" : "outline"}
          className="bg-amber-600 hover:bg-amber-700"
        >
          Draw Path
        </Button>
      </div>

      <div className="border-2 border-blue-200 rounded-lg overflow-hidden bg-gray-50 p-4">
        <p className="text-slate-600 text-sm mb-4">
          {drawMode ? `Click on the map to ${drawMode}` : "Select a drawing mode to start"}
        </p>
        <VenueMap interactive={true} />
      </div>

      <div className="mt-6 pt-6 border-t border-blue-200">
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">Save Venue Layout</Button>
      </div>
    </Card>
  )
}
