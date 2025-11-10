import type { Graph } from "@/lib/dijkstra"

export function getVenueGraph(): Graph {
  return {
    nodes: [
      // Entrances
      { id: "entrance-main", x: 500, y: 1150, type: "entrance", label: "Main Entrance" },
      { id: "entrance-left", x: 50, y: 400, type: "entrance", label: "Left Entrance" },
      { id: "entrance-right", x: 950, y: 400, type: "entrance", label: "Right Entrance" },

      // Seat nodes (example - would normally be many more)
      { id: "seat-1", x: 130, y: 200, type: "seat", label: "Seat 1" },
      { id: "seat-5", x: 130, y: 320, type: "seat", label: "Seat 5" },
      { id: "seat-12", x: 250, y: 320, type: "seat", label: "Seat 12" },
      { id: "seat-30", x: 630, y: 250, type: "seat", label: "Seat 30" },
      { id: "seat-50", x: 130, y: 620, type: "seat", label: "Seat 50" },

      // Intersection nodes
      { id: "intersection-1", x: 300, y: 400, type: "intersection" },
      { id: "intersection-2", x: 500, y: 400, type: "intersection" },
      { id: "intersection-3", x: 700, y: 400, type: "intersection" },
    ],
    edges: [
      // Main paths from entrances
      { from: "entrance-main", to: "intersection-2", weight: 100 },
      { from: "entrance-left", to: "intersection-1", weight: 80 },
      { from: "entrance-right", to: "intersection-3", weight: 80 },

      // Paths between intersections
      { from: "intersection-1", to: "intersection-2", weight: 150 },
      { from: "intersection-2", to: "intersection-3", weight: 150 },

      // Paths to seats
      { from: "intersection-1", to: "seat-1", weight: 50 },
      { from: "intersection-1", to: "seat-5", weight: 80 },
      { from: "intersection-1", to: "seat-12", weight: 120 },
      { from: "intersection-2", to: "seat-30", weight: 100 },
      { from: "intersection-1", to: "seat-50", weight: 200 },
    ],
  }
}
