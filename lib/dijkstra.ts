interface Node {
  id: string
  x: number
  y: number
  type: "entrance" | "seat" | "intersection"
  label?: string
}

interface Edge {
  from: string
  to: string
  weight: number
}

interface Graph {
  nodes: Node[]
  edges: Edge[]
}

interface PathResult {
  path: Node[]
  distance: number
  steps: string[]
}

export function dijkstra(graph: Graph, startId: string, endId: string): PathResult {
  const distances: Record<string, number> = {}
  const previous: Record<string, string | null> = {}
  const unvisited = new Set<string>()
  const visited = new Set<string>()

  // Initialize distances
  graph.nodes.forEach((node) => {
    distances[node.id] = Number.POSITIVE_INFINITY
    previous[node.id] = null
    unvisited.add(node.id)
  })

  distances[startId] = 0

  while (unvisited.size > 0) {
    // Find unvisited node with smallest distance
    let current: string | null = null
    let minDistance = Number.POSITIVE_INFINITY

    for (const nodeId of unvisited) {
      if (distances[nodeId] < minDistance) {
        minDistance = distances[nodeId]
        current = nodeId
      }
    }

    if (current === null || current === endId || minDistance === Number.POSITIVE_INFINITY) break

    unvisited.delete(current)
    visited.add(current)

    // Check neighbors
    graph.edges.forEach((edge) => {
      if (edge.from === current && unvisited.has(edge.to)) {
        const alt = distances[current] + edge.weight
        if (alt < distances[edge.to]) {
          distances[edge.to] = alt
          previous[edge.to] = current
        }
      }
    })
  }

  // Reconstruct path
  const path: Node[] = []
  let current: string | null = endId

  while (current !== null) {
    const node = graph.nodes.find((n) => n.id === current)
    if (node) path.unshift(node)
    current = previous[current] || null
  }

  // Generate step-by-step directions
  const steps: string[] = []
  for (let i = 0; i < path.length - 1; i++) {
    const current = path[i]
    const next = path[i + 1]
    const dx = next.x - current.x
    const dy = next.y - current.y
    const direction = getDirection(dx, dy)
    steps.push(`Move ${direction} to ${next.label || `intersection at (${next.x}, ${next.y})`}`)
  }

  return {
    path,
    distance: distances[endId],
    steps,
  }
}

function getDirection(dx: number, dy: number): string {
  const angle = Math.atan2(dy, dx) * (180 / Math.PI)
  if (angle > -45 && angle <= 45) return "right"
  if (angle > 45 && angle <= 135) return "down"
  if (angle > 135 || angle <= -135) return "left"
  return "up"
}
