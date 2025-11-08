import { firestore, storage } from "./firebase"
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export interface VenueNode {
  id: string
  x: number
  y: number
  type:
    | "entrance"
    | "table"
    | "vip-table"
    | "buffet"
    | "carving-table"
    | "photo-exhibit"
    | "crying-room"
    | "stage"
    | "custom"
    | "edge-node" // Added edge-node type for manual pathfinding waypoints
    | "waypoint"
    | "intersection"
  label: string
  description?: string
  customLabel?: string
  seats?: number
  capacity?: number
  groupId?: string
  createdAt: Date
  updatedAt: Date
}

export interface NodeGroup {
  id: string
  name: string
  color: string
  nodeIds: string[]
}

export interface LayoutTemplate {
  id: string
  name: string
  description: string
  nodes: Omit<VenueNode, "createdAt" | "updatedAt">[]
  groups?: NodeGroup[]
}

export interface VenueMap {
  id: string
  name: string
  imageUrl: string
  customImageUrl?: string
  backgroundOpacity?: number
  width: number
  height: number
  defaultZoom?: number
  defaultCenter?: { x: number; y: number }
  nodes: VenueNode[]
  groups?: NodeGroup[]
  createdAt: Date
  updatedAt: Date
}

export const LAYOUT_TEMPLATES: LayoutTemplate[] = [
  {
    id: "standard-tables",
    name: "Standard Table Layout",
    description: "40 tables arranged in a grid with center aisle",
    nodes: Array.from({ length: 40 }, (_, i) => {
      const col = i % 8
      const row = Math.floor(i / 8)
      const xOffset = col >= 4 ? 100 : 0 // Center aisle
      return {
        id: `table-${i + 1}`,
        x: 150 + col * 120 + xOffset,
        y: 200 + row * 120,
        type: "table" as const,
        label: `Table ${i + 1}`,
        seats: 8,
        capacity: 10,
      }
    }),
    groups: [
      {
        id: "group-tables",
        name: "All Tables",
        color: "#1E40AF",
        nodeIds: Array.from({ length: 40 }, (_, i) => `table-${i + 1}`),
      },
    ],
  },
  {
    id: "vip-section",
    name: "VIP Section Layout",
    description: "12 VIP tables with stage and premium positioning",
    nodes: [
      { id: "stage-1", x: 600, y: 100, type: "stage", label: "Main Stage" },
      ...Array.from({ length: 12 }, (_, i) => {
        const col = i % 4
        const row = Math.floor(i / 4)
        return {
          id: `vip-table-${i + 1}`,
          x: 300 + col * 150,
          y: 300 + row * 140,
          type: "vip-table" as const,
          label: `VIP Table ${i + 1}`,
          seats: 6,
          capacity: 30,
        }
      }),
    ],
    groups: [
      {
        id: "group-vip",
        name: "VIP Tables",
        color: "#DC2626",
        nodeIds: Array.from({ length: 12 }, (_, i) => `vip-table-${i + 1}`),
      },
    ],
  },
  {
    id: "wedding-layout",
    name: "Wedding Reception",
    description: "Complete wedding setup with stage, tables, buffet, and dance floor",
    nodes: [
      { id: "stage-1", x: 600, y: 80, type: "stage", label: "Stage" },
      { id: "entrance-1", x: 600, y: 1100, type: "entrance", label: "Main Entrance" },
      { id: "buffet-1", x: 100, y: 500, type: "buffet", label: "Buffet Left" },
      { id: "buffet-2", x: 1100, y: 500, type: "buffet", label: "Buffet Right" },
      ...Array.from({ length: 20 }, (_, i) => {
        const col = i % 5
        const row = Math.floor(i / 5)
        const xOffset = col >= 2.5 ? 150 : 0 // Dance floor space
        return {
          id: `table-${i + 1}`,
          x: 200 + col * 120 + xOffset,
          y: 250 + row * 150,
          type: "table" as const,
          label: `Table ${i + 1}`,
          seats: 8,
          capacity: 10,
        }
      }),
    ],
    groups: [
      { id: "group-food", name: "Food Stations", color: "#059669", nodeIds: ["buffet-1", "buffet-2"] },
      {
        id: "group-tables",
        name: "Guest Tables",
        color: "#1E40AF",
        nodeIds: Array.from({ length: 20 }, (_, i) => `table-${i + 1}`),
      },
    ],
  },
  {
    id: "conference-layout",
    name: "Conference Hall",
    description: "Professional conference setup with theater-style seating",
    nodes: [
      { id: "stage-1", x: 600, y: 100, type: "stage", label: "Presentation Stage" },
      { id: "entrance-1", x: 300, y: 1000, type: "entrance", label: "Left Entrance" },
      { id: "entrance-2", x: 900, y: 1000, type: "entrance", label: "Right Entrance" },
      ...Array.from({ length: 30 }, (_, i) => {
        const col = i % 6
        const row = Math.floor(i / 6)
        return {
          id: `table-${i + 1}`,
          x: 250 + col * 140,
          y: 300 + row * 120,
          type: "table" as const,
          label: `Table ${i + 1}`,
          seats: 4,
          capacity: 10,
        }
      }),
    ],
    groups: [
      {
        id: "group-seating",
        name: "Theater Seating",
        color: "#1E40AF",
        nodeIds: Array.from({ length: 30 }, (_, i) => `table-${i + 1}`),
      },
    ],
  },
]

/**
 * Removes undefined fields from an object to ensure Firebase compatibility
 */
function removeUndefinedFields<T extends Record<string, any>>(obj: T): Partial<T> {
  const cleaned: any = {}
  for (const key in obj) {
    if (obj[key] !== undefined) {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !(obj[key] instanceof Date) &&
        !(obj[key] instanceof Timestamp)
      ) {
        cleaned[key] = removeUndefinedFields(obj[key])
      } else {
        cleaned[key] = obj[key]
      }
    }
  }
  return cleaned
}

/**
 * Persists the complete venue map configuration to Firebase Firestore.
 *
 * Persistence Details:
 * - Document ID: 'main' in 'venueMaps' collection
 * - Stores all node data including custom positions, labels, and coordinates
 * - Timestamps are set to server time for consistency
 * - Data is immediately available after save for subsequent page loads/sessions
 * - Filters out undefined fields to ensure Firebase compatibility
 *
 * @param venueMap - Complete venue map configuration with all nodes
 * @returns Document reference ID
 */
export async function saveVenueMap(venueMap: Omit<VenueMap, "id" | "createdAt" | "updatedAt">): Promise<string> {
  try {
    if (!venueMap.name) {
      throw new Error("Venue map name is required")
    }
    if (!venueMap.imageUrl) {
      throw new Error("Venue map imageUrl is required")
    }
    if (!venueMap.nodes || !Array.isArray(venueMap.nodes)) {
      throw new Error("Venue map nodes array is required")
    }
    if (!venueMap.width || !venueMap.height) {
      throw new Error("Venue map dimensions (width/height) are required")
    }

    const mapRef = doc(firestore, "venueMaps", "main")
    const now = Timestamp.now()

    const cleanedNodes = venueMap.nodes.map((node) => {
      const cleaned: any = {
        id: node.id,
        x: node.x,
        y: node.y,
        type: node.type,
        label: node.label,
      }

      // Only add optional fields if they have values
      if (node.description !== undefined && node.description !== null) {
        cleaned.description = node.description
      }
      if (node.customLabel !== undefined && node.customLabel !== null) {
        cleaned.customLabel = node.customLabel
      }
      if (node.seats !== undefined && node.seats !== null) {
        cleaned.seats = node.seats
      }
      if (node.capacity !== undefined && node.capacity !== null) {
        cleaned.capacity = node.capacity
      }
      if (node.groupId !== undefined && node.groupId !== null) {
        cleaned.groupId = node.groupId
      }
      if (node.createdAt) {
        cleaned.createdAt = node.createdAt instanceof Date ? Timestamp.fromDate(node.createdAt) : node.createdAt
      }
      if (node.updatedAt) {
        cleaned.updatedAt = node.updatedAt instanceof Date ? Timestamp.fromDate(node.updatedAt) : node.updatedAt
      }

      return cleaned
    })

    const dataToSave: any = {
      name: venueMap.name,
      imageUrl: venueMap.imageUrl,
      width: venueMap.width,
      height: venueMap.height,
      nodes: cleanedNodes,
      createdAt: now,
      updatedAt: now,
    }

    // Only add optional fields if they're defined
    if (venueMap.customImageUrl !== undefined && venueMap.customImageUrl !== null) {
      dataToSave.customImageUrl = venueMap.customImageUrl
    }
    if (venueMap.backgroundOpacity !== undefined && venueMap.backgroundOpacity !== null) {
      dataToSave.backgroundOpacity = venueMap.backgroundOpacity
    }
    if (venueMap.defaultZoom !== undefined && venueMap.defaultZoom !== null) {
      dataToSave.defaultZoom = venueMap.defaultZoom
    }
    if (venueMap.defaultCenter !== undefined && venueMap.defaultCenter !== null) {
      dataToSave.defaultCenter = venueMap.defaultCenter
    }
    if (venueMap.groups !== undefined && venueMap.groups !== null && venueMap.groups.length > 0) {
      dataToSave.groups = venueMap.groups
    }

    await setDoc(mapRef, dataToSave)

    console.log("[v0] Venue map persisted to Firebase Firestore successfully")
    return mapRef.id
  } catch (error) {
    console.error("[v0] Error saving venue map:", error)
    if (error instanceof Error) {
      throw new Error(`Failed to save venue map: ${error.message}`)
    }
    throw new Error("Failed to save venue map: Unknown error occurred")
  }
}

/**
 * Retrieves the complete venue map from Firebase Firestore.
 *
 * Session Persistence:
 * - Loads all previously saved node configurations on page load
 * - All custom nodes and labels are restored exactly as saved
 * - Handles missing data gracefully with empty nodes array
 *
 * @returns Complete venue map or null if not initialized
 */
export async function getVenueMap(): Promise<VenueMap | null> {
  try {
    const mapRef = doc(firestore, "venueMaps", "main")
    const snapshot = await getDoc(mapRef)

    if (!snapshot.exists()) {
      console.log("[v0] No existing venue map found in Firestore")
      return null
    }

    const data = snapshot.data()
    return {
      id: snapshot.id,
      name: data.name,
      imageUrl: data.imageUrl,
      customImageUrl: data.customImageUrl,
      backgroundOpacity: data.backgroundOpacity,
      width: data.width,
      height: data.height,
      defaultZoom: data.defaultZoom || 0.8,
      defaultCenter: data.defaultCenter || { x: 600, y: 600 },
      nodes: data.nodes || [],
      groups: data.groups || [],
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
    }
  } catch (error) {
    console.error("[v0] Error fetching venue map:", error)
    throw error
  }
}

export function loadLayoutTemplate(templateId: string): LayoutTemplate | null {
  return LAYOUT_TEMPLATES.find((t) => t.id === templateId) || null
}

export async function uploadBackgroundImage(file: File): Promise<string> {
  try {
    const storageRef = ref(storage, `venue-backgrounds/${Date.now()}-${file.name}`)
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    console.log("[v0] Background image uploaded successfully")
    return downloadURL
  } catch (error) {
    console.error("[v0] Error uploading background image:", error)
    throw error
  }
}

/**
 * Builds a graph for pathfinding using manually placed Edge Nodes.
 * Edge nodes define walkable corridors and corners that connect entrances to tables.
 * All entrances are starting points for pathfinding.
 */
export function buildGraphFromVenueMap(nodes: VenueNode[]): {
  nodes: Array<{ id: string; x: number; y: number; type: string }>
  edges: Array<{ from: string; to: string; weight: number }>
} {
  console.log("[v0] Building graph using Edge Nodes for walkable paths")

  const graphNodes = nodes.map((node) => ({
    id: node.id,
    x: node.x,
    y: node.y,
    type: node.type,
  }))

  const edges: Array<{ from: string; to: string; weight: number }> = []

  const entrances = nodes.filter((n) => n.type === "entrance")
  const edgeNodes = nodes.filter((n) => n.type === "edge-node")
  const tables = nodes.filter((n) => n.type === "table" || n.type === "vip-table")

  console.log(`[v0] Found ${entrances.length} entrances, ${edgeNodes.length} edge nodes, ${tables.length} tables`)

  if (entrances.length === 0) {
    console.warn("[v0] No entrances found - pathfinding will fail")
    return { nodes: graphNodes, edges }
  }

  const euclideanDistance = (n1: { x: number; y: number }, n2: { x: number; y: number }) => {
    const dx = n2.x - n1.x
    const dy = n2.y - n1.y
    return Math.sqrt(dx * dx + dy * dy)
  }

  for (let i = 0; i < entrances.length; i++) {
    for (let j = i + 1; j < entrances.length; j++) {
      const dist = euclideanDistance(entrances[i], entrances[j])
      edges.push({ from: entrances[i].id, to: entrances[j].id, weight: dist })
      edges.push({ from: entrances[j].id, to: entrances[i].id, weight: dist })
    }
  }

  // Connect edge nodes that are vertically or horizontally aligned within tolerance
  const alignmentTolerance = 30 // Allow slight misalignment

  for (let i = 0; i < edgeNodes.length; i++) {
    for (let j = i + 1; j < edgeNodes.length; j++) {
      const node1 = edgeNodes[i]
      const node2 = edgeNodes[j]

      const dx = Math.abs(node2.x - node1.x)
      const dy = Math.abs(node2.y - node1.y)

      // Check if aligned vertically (same X)
      const isVerticallyAligned = dx < alignmentTolerance
      // Check if aligned horizontally (same Y)
      const isHorizontallyAligned = dy < alignmentTolerance

      if (isVerticallyAligned || isHorizontallyAligned) {
        const dist = euclideanDistance(node1, node2)
        // Only connect nearby edge nodes (< 300px apart)
        if (dist < 300) {
          const weight = isVerticallyAligned ? dist : dist * 1.2 // Slightly prefer vertical movement
          edges.push({ from: node1.id, to: node2.id, weight })
          edges.push({ from: node2.id, to: node1.id, weight })
          console.log(
            `[v0] Connected edge nodes ${node1.label} <-> ${node2.label} (${isVerticallyAligned ? "vertical" : "horizontal"}, ${Math.round(dist)}px)`,
          )
        }
      }
    }
  }

  entrances.forEach((entrance) => {
    const nearestEdgeNodes = edgeNodes
      .map((edge) => ({ edge, dist: euclideanDistance(entrance, edge) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 3) // Connect to 3 nearest edge nodes

    nearestEdgeNodes.forEach(({ edge, dist }) => {
      if (dist < 400) {
        edges.push({ from: entrance.id, to: edge.id, weight: dist })
        edges.push({ from: edge.id, to: entrance.id, weight: dist })
        console.log(`[v0] Connected entrance ${entrance.label} to edge node ${edge.label} (${Math.round(dist)}px)`)
      }
    })
  })

  tables.forEach((table) => {
    const nearestEdgeNodes = edgeNodes
      .map((edge) => ({ edge, dist: euclideanDistance(table, edge) }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 2) // Connect each table to 2 nearest edge nodes

    nearestEdgeNodes.forEach(({ edge, dist }) => {
      if (dist < 250) {
        // Tables only connect if very close to edge node
        edges.push({ from: edge.id, to: table.id, weight: dist })
        edges.push({ from: table.id, to: edge.id, weight: dist })
      }
    })
  })

  console.log(`[v0] Built edge node graph: ${graphNodes.length} nodes, ${edges.length} edges`)
  console.log(`[v0] Edge nodes define walkable corridors with 90-degree turns, entrances are all starting points`)

  return { nodes: graphNodes, edges }
}

export async function addVenueNode(node: Omit<VenueNode, "id" | "createdAt" | "updatedAt">): Promise<VenueNode> {
  try {
    const venueMap = await getVenueMap()
    if (!venueMap) throw new Error("Venue map not found")

    const newNode: VenueNode = {
      ...node,
      id: `node-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const updatedNodes = [...venueMap.nodes, newNode]
    await saveVenueMap({
      ...venueMap,
      nodes: updatedNodes,
    })

    return newNode
  } catch (error) {
    console.error("[v0] Error adding venue node:", error)
    throw error
  }
}

export async function updateVenueNode(nodeId: string, updates: Partial<VenueNode>): Promise<void> {
  try {
    const venueMap = await getVenueMap()
    if (!venueMap) throw new Error("Venue map not found")

    const updatedNodes = venueMap.nodes.map((node) =>
      node.id === nodeId ? { ...node, ...updates, updatedAt: new Date() } : node,
    )

    await saveVenueMap({
      ...venueMap,
      nodes: updatedNodes,
    })
  } catch (error) {
    console.error("[v0] Error updating venue node:", error)
    throw error
  }
}

export async function deleteVenueNode(nodeId: string): Promise<void> {
  try {
    const venueMap = await getVenueMap()
    if (!venueMap) throw new Error("Venue map not found")

    const updatedNodes = venueMap.nodes.filter((node) => node.id !== nodeId)

    await saveVenueMap({
      ...venueMap,
      nodes: updatedNodes,
    })
  } catch (error) {
    console.error("[v0] Error deleting venue node:", error)
    throw error
  }
}

export async function initializeDefaultVenueMap(): Promise<VenueMap> {
  const defaultMap: Omit<VenueMap, "id" | "createdAt" | "updatedAt"> = {
    name: "Main Event Venue",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9caa3868-4cd5-468f-9fe7-4dc613433d03.jfif-bjuGNoSEEOVtEQdwylS2JSfEkM6Jhy.jpeg",
    width: 1200,
    height: 1400,
    defaultZoom: 0.8,
    defaultCenter: { x: 600, y: 700 },
    nodes: [
      // Entrances
      { id: "entrance-1", x: 300, y: 1350, type: "entrance", label: "Main Entrance", description: "South entrance" },
      {
        id: "entrance-2",
        x: 600,
        y: 1350,
        type: "entrance",
        label: "Entrance 2",
        description: "South entrance (center)",
      },
      {
        id: "entrance-3",
        x: 900,
        y: 1350,
        type: "entrance",
        label: "Entrance 3",
        description: "South entrance (right)",
      },

      // Stage
      { id: "stage", x: 600, y: 50, type: "stage", label: "STAGE", description: "Main stage" },

      // Buffets
      { id: "buffet-1", x: 50, y: 400, type: "buffet", label: "BUFFET1", description: "Left side buffet" },
      { id: "buffet-2", x: 50, y: 700, type: "buffet", label: "BUFFET2", description: "Left side buffet (lower)" },
      { id: "buffet-3", x: 1150, y: 700, type: "buffet", label: "BUFFET3", description: "Right side buffet" },

      // Carving Tables
      {
        id: "carving-1",
        x: 100,
        y: 600,
        type: "carving-table",
        label: "CARVING TABLE",
        description: "Left side carving station",
      },
      {
        id: "carving-2",
        x: 1100,
        y: 600,
        type: "carving-table",
        label: "CARVING TABLE",
        description: "Right side carving station",
      },

      // Photo Exhibit
      {
        id: "photo-exhibit",
        x: 600,
        y: 1200,
        type: "photo-exhibit",
        label: "PHOTO EXHIBIT",
        description: "Photo exhibition area",
      },

      // Crying Room
      { id: "crying-room", x: 250, y: 1150, type: "crying-room", label: "CRYING ROOM", description: "Comfort room" },

      // VIP Tables
      { id: "vip-table-1", x: 450, y: 250, type: "vip-table", label: "VIP TABLE 1", seats: 8, capacity: 30 },
      { id: "vip-table-2", x: 750, y: 250, type: "vip-table", label: "VIP TABLE 2", seats: 8, capacity: 30 },

      // Regular Tables (sampling - 20 tables shown, total 80)
      { id: "table-1", x: 200, y: 150, type: "table", label: "Table 1", seats: 8, capacity: 10 },
      { id: "table-2", x: 350, y: 150, type: "table", label: "Table 2", seats: 8, capacity: 10 },
      { id: "table-5", x: 200, y: 300, type: "table", label: "Table 5", seats: 8, capacity: 10 },
      { id: "table-6", x: 350, y: 300, type: "table", label: "Table 6", seats: 8, capacity: 10 },
      { id: "table-9", x: 200, y: 450, type: "table", label: "Table 9", seats: 8, capacity: 10 },
      { id: "table-10", x: 350, y: 450, type: "table", label: "Table 10", seats: 8, capacity: 10 },
      { id: "table-21", x: 850, y: 150, type: "table", label: "Table 21", seats: 8, capacity: 10 },
      { id: "table-22", x: 1000, y: 150, type: "table", label: "Table 22", seats: 8, capacity: 10 },
      { id: "table-25", x: 850, y: 300, type: "table", label: "Table 25", seats: 8, capacity: 10 },
      { id: "table-26", x: 1000, y: 300, type: "table", label: "Table 26", seats: 8, capacity: 10 },
    ],
    groups: [
      { id: "group-1", name: "Entrances", color: "#FF5733", nodeIds: ["entrance-1", "entrance-2", "entrance-3"] },
      {
        id: "group-2",
        name: "Food Stations",
        color: "#33FF57",
        nodeIds: ["buffet-1", "buffet-2", "buffet-3", "carving-1", "carving-2"],
      },
      { id: "group-3", name: "Special Areas", color: "#3357FF", nodeIds: ["photo-exhibit", "crying-room", "stage"] },
      { id: "group-4", name: "VIP Tables", color: "#F333FF", nodeIds: ["vip-table-1", "vip-table-2"] },
      {
        id: "group-5",
        name: "Regular Tables",
        color: "#FF33A1",
        nodeIds: [
          "table-1",
          "table-2",
          "table-5",
          "table-6",
          "table-9",
          "table-10",
          "table-21",
          "table-22",
          "table-25",
          "table-26",
        ],
      },
    ],
  }

  await saveVenueMap(defaultMap)
  const saved = await getVenueMap()
  return saved!
}
