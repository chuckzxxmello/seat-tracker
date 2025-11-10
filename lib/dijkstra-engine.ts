interface Node {
  id: string
  x: number
  y: number
  type:
    | "seat"
    | "entrance"
    | "intersection"
    | "waypoint"
    | "table"
    | "vip-table"
    | "buffet"
    | "carving-table"
    | "photo-exhibit"
    | "crying-room"
    | "stage"
}

interface Edge {
  from: string
  to: string
  distance: number
}

interface PathResult {
  path: Node[]
  distance: number
  instructions: string[]
}

class PriorityQueue<T> {
  private items: Array<{ element: T; priority: number }> = []

  enqueue(element: T, priority: number) {
    const item = { element, priority }
    let added = false

    for (let i = 0; i < this.items.length; i++) {
      if (item.priority < this.items[i].priority) {
        this.items.splice(i, 0, item)
        added = true
        break
      }
    }

    if (!added) {
      this.items.push(item)
    }
  }

  dequeue(): T | undefined {
    return this.items.shift()?.element
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }
}

class DijkstraGraph {
  private nodes: Map<string, Node> = new Map()
  private edges: Edge[] = []
  private adjacency: Map<string, string[]> = new Map()

  addNode(id: string, x: number, y: number, type: Node["type"]) {
    this.nodes.set(id, { id, x, y, type })
    this.adjacency.set(id, [])
  }

  addEdge(fromId: string, toId: string) {
    const fromNode = this.nodes.get(fromId)
    const toNode = this.nodes.get(toId)

    if (!fromNode || !toNode) return

    const distance = this.calculateDistance(fromNode, toNode)
    this.edges.push({ from: fromId, to: toId, distance })
    this.edges.push({ from: toId, to: fromId, distance })

    this.adjacency.get(fromId)?.push(toId)
    this.adjacency.get(toId)?.push(fromId)
  }

  private calculateDistance(p1: Node, p2: Node): number {
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  findShortestPath(startId: string, endId: string): PathResult {
    const distances = new Map<string, number>()
    const previous = new Map<string, string | null>()
    const pq = new PriorityQueue<string>()

    // Initialize distances
    for (const nodeId of this.nodes.keys()) {
      distances.set(nodeId, Number.POSITIVE_INFINITY)
      previous.set(nodeId, null)
    }
    distances.set(startId, 0)
    pq.enqueue(startId, 0)

    while (!pq.isEmpty()) {
      const current = pq.dequeue()
      if (!current || current === endId) break

      const currentDist = distances.get(current) ?? Number.POSITIVE_INFINITY
      if (currentDist === Number.POSITIVE_INFINITY) continue

      // Explore neighbors
      for (const neighbor of this.adjacency.get(current) ?? []) {
        const edge = this.edges.find((e) => e.from === current && e.to === neighbor)
        if (!edge) continue

        const altDist = currentDist + edge.distance
        const neighborDist = distances.get(neighbor) ?? Number.POSITIVE_INFINITY

        if (altDist < neighborDist) {
          distances.set(neighbor, altDist)
          previous.set(neighbor, current)
          pq.enqueue(neighbor, altDist)
        }
      }
    }

    // Reconstruct path
    const path: string[] = []
    let current: string | null = endId
    while (current !== null) {
      path.unshift(current)
      current = previous.get(current) ?? null
    }

    // Validate path
    if (path.length === 0 || path[0] !== startId) {
      return {
        path: [],
        distance: Number.POSITIVE_INFINITY,
        instructions: ["No path found to destination"],
      }
    }

    const pathNodes = path.map((id) => this.nodes.get(id)!).filter(Boolean)
    const totalDistance = distances.get(endId) ?? 0
    const instructions = this.generateInstructions(pathNodes)

    return {
      path: pathNodes,
      distance: totalDistance,
      instructions,
    }
  }

  private generateInstructions(path: Node[]): string[] {
    const instructions: string[] = []

    if (path.length === 0) {
      return ["No path found"]
    }

    if (path.length === 1) {
      return ["You are already at your destination!"]
    }

    instructions.push(`Start at ${path[0].id}`)

    for (let i = 0; i < path.length - 1; i++) {
      const current = path[i]
      const next = path[i + 1]

      const dx = next.x - current.x
      const dy = next.y - current.y
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)

      let direction = "Continue forward"
      if (angle > -22.5 && angle <= 22.5) direction = "Go right →"
      else if (angle > 22.5 && angle <= 67.5) direction = "Go down-right ↘"
      else if (angle > 67.5 && angle <= 112.5) direction = "Go down ↓"
      else if (angle > 112.5 && angle <= 157.5) direction = "Go down-left ↙"
      else if (angle > 157.5 || angle <= -157.5) direction = "Go left ←"
      else if (angle > -157.5 && angle <= -112.5) direction = "Go up-left ↖"
      else if (angle > -112.5 && angle <= -67.5) direction = "Go up ↑"
      else if (angle > -67.5 && angle <= -22.5) direction = "Go up-right ↗"

      const distance = Math.sqrt(dx * dx + dy * dy)
      const steps = Math.round(distance / 15)
      instructions.push(`${direction} for about ${steps} steps to ${next.id}`)
    }

    instructions.push(`You have arrived at ${path[path.length - 1].id}!`)

    return instructions
  }

  getAllNodes(): Node[] {
    return Array.from(this.nodes.values())
  }

  getAllEdges(): Edge[] {
    return this.edges
  }
}

export { DijkstraGraph, type PathResult, type Node }
