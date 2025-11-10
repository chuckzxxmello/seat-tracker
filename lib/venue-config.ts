// This defines the exact seat positions, areas, and entrances based on the provided reference layout

export interface SeatPosition {
  id: number
  x: number
  y: number
  type: "regular" | "vip"
  section: string
}

export interface Entrance {
  id: string
  name: string
  x: number
  y: number
}

export interface VenueArea {
  id: string
  name: string
  x: number
  y: number
  width: number
  height: number
  type: "buffet" | "gaming" | "vip_table" | "photo_exhibit" | "crying_room"
}

// Precise seat layout matching the reference image
// Reference: Stage at top, 4 sections of seats (left, right, center bottom)
const seatGrid: SeatPosition[] = [
  // ===== TOP LEFT SECTION (Seats 1-20) =====
  // Seats 1-4 (first row of left section, near stage)
  { id: 1, x: 160, y: 160, type: "regular", section: "TopLeft" },
  { id: 2, x: 215, y: 160, type: "regular", section: "TopLeft" },
  { id: 3, x: 270, y: 160, type: "regular", section: "TopLeft" },
  { id: 4, x: 325, y: 160, type: "regular", section: "TopLeft" },

  // Seats 5-8 (second row)
  { id: 5, x: 160, y: 225, type: "regular", section: "TopLeft" },
  { id: 6, x: 215, y: 225, type: "regular", section: "TopLeft" },
  { id: 7, x: 270, y: 225, type: "regular", section: "TopLeft" },
  { id: 8, x: 325, y: 225, type: "regular", section: "TopLeft" },

  // Seats 9-12 (third row)
  { id: 9, x: 160, y: 290, type: "regular", section: "TopLeft" },
  { id: 10, x: 215, y: 290, type: "regular", section: "TopLeft" },
  { id: 11, x: 270, y: 290, type: "regular", section: "TopLeft" },
  { id: 12, x: 325, y: 290, type: "regular", section: "TopLeft" },

  // Seats 13-16 (fourth row, slightly offset)
  { id: 13, x: 215, y: 355, type: "regular", section: "TopLeft" },
  { id: 14, x: 270, y: 355, type: "regular", section: "TopLeft" },
  { id: 15, x: 325, y: 355, type: "regular", section: "TopLeft" },
  { id: 16, x: 380, y: 355, type: "regular", section: "TopLeft" },

  // Seats 17-20 (fifth row)
  { id: 17, x: 160, y: 420, type: "regular", section: "TopLeft" },
  { id: 18, x: 215, y: 420, type: "regular", section: "TopLeft" },
  { id: 19, x: 270, y: 420, type: "regular", section: "TopLeft" },
  { id: 20, x: 325, y: 420, type: "regular", section: "TopLeft" },

  // ===== TOP RIGHT SECTION (Seats 21-40) =====
  // Seats 21-24 (first group, right side near stage)
  { id: 21, x: 715, y: 160, type: "regular", section: "TopRight" },
  { id: 22, x: 770, y: 160, type: "regular", section: "TopRight" },
  { id: 23, x: 825, y: 160, type: "regular", section: "TopRight" },
  { id: 24, x: 880, y: 160, type: "regular", section: "TopRight" },

  // Seats 25-28 (second group)
  { id: 25, x: 715, y: 225, type: "regular", section: "TopRight" },
  { id: 26, x: 770, y: 225, type: "regular", section: "TopRight" },
  { id: 27, x: 825, y: 225, type: "regular", section: "TopRight" },
  { id: 28, x: 880, y: 225, type: "regular", section: "TopRight" },

  // Seats 29-32 (third group)
  { id: 29, x: 715, y: 290, type: "regular", section: "TopRight" },
  { id: 30, x: 770, y: 290, type: "regular", section: "TopRight" },
  { id: 31, x: 825, y: 290, type: "regular", section: "TopRight" },
  { id: 32, x: 880, y: 290, type: "regular", section: "TopRight" },

  // Seats 33-36 (fourth group)
  { id: 33, x: 715, y: 355, type: "regular", section: "TopRight" },
  { id: 34, x: 770, y: 355, type: "regular", section: "TopRight" },
  { id: 35, x: 825, y: 355, type: "regular", section: "TopRight" },
  { id: 36, x: 880, y: 355, type: "regular", section: "TopRight" },

  // Seats 37-40 (fifth group)
  { id: 37, x: 715, y: 420, type: "regular", section: "TopRight" },
  { id: 38, x: 770, y: 420, type: "regular", section: "TopRight" },
  { id: 39, x: 825, y: 420, type: "regular", section: "TopRight" },
  { id: 40, x: 880, y: 420, type: "regular", section: "TopRight" },

  // ===== BOTTOM LEFT SECTION (Seats 41-68) =====
  // Seats 41-44 (first group, bottom-left)
  { id: 41, x: 160, y: 560, type: "regular", section: "BottomLeft" },
  { id: 42, x: 215, y: 560, type: "regular", section: "BottomLeft" },
  { id: 43, x: 270, y: 560, type: "regular", section: "BottomLeft" },
  { id: 44, x: 325, y: 560, type: "regular", section: "BottomLeft" },

  // Seats 45-48 (center-bottom group)
  { id: 45, x: 485, y: 560, type: "regular", section: "BottomCenter" },
  { id: 46, x: 540, y: 560, type: "regular", section: "BottomCenter" },
  { id: 47, x: 595, y: 560, type: "regular", section: "BottomCenter" },
  { id: 48, x: 650, y: 560, type: "regular", section: "BottomCenter" },

  // Seats 49-52 (second group, bottom-left)
  { id: 49, x: 160, y: 625, type: "regular", section: "BottomLeft" },
  { id: 50, x: 215, y: 625, type: "regular", section: "BottomLeft" },
  { id: 51, x: 270, y: 625, type: "regular", section: "BottomLeft" },
  { id: 52, x: 325, y: 625, type: "regular", section: "BottomLeft" },

  // Seats 53-56 (center-bottom continuation)
  { id: 53, x: 485, y: 625, type: "regular", section: "BottomCenter" },
  { id: 54, x: 540, y: 625, type: "regular", section: "BottomCenter" },
  { id: 55, x: 595, y: 625, type: "regular", section: "BottomCenter" },
  { id: 56, x: 650, y: 625, type: "regular", section: "BottomCenter" },

  // Seats 57-60 (third group, bottom-left)
  { id: 57, x: 160, y: 690, type: "regular", section: "BottomLeft" },
  { id: 58, x: 215, y: 690, type: "regular", section: "BottomLeft" },
  { id: 59, x: 270, y: 690, type: "regular", section: "BottomLeft" },
  { id: 60, x: 325, y: 690, type: "regular", section: "BottomLeft" },

  // Seats 61-64 (center-bottom continuation)
  { id: 61, x: 485, y: 690, type: "regular", section: "BottomCenter" },
  { id: 62, x: 540, y: 690, type: "regular", section: "BottomCenter" },
  { id: 63, x: 595, y: 690, type: "regular", section: "BottomCenter" },
  { id: 64, x: 650, y: 690, type: "regular", section: "BottomCenter" },

  // Seats 65-68 (fourth group, bottom-left)
  { id: 65, x: 160, y: 755, type: "regular", section: "BottomLeft" },
  { id: 66, x: 215, y: 755, type: "regular", section: "BottomLeft" },
  { id: 67, x: 270, y: 755, type: "regular", section: "BottomLeft" },
  { id: 68, x: 325, y: 755, type: "regular", section: "BottomLeft" },

  // ===== BOTTOM RIGHT SECTION (Seats 69-80) =====
  // Seats 69-72 (bottom-right group)
  { id: 69, x: 485, y: 755, type: "regular", section: "BottomRight" },
  { id: 70, x: 540, y: 755, type: "regular", section: "BottomRight" },
  { id: 71, x: 595, y: 755, type: "regular", section: "BottomRight" },
  { id: 72, x: 650, y: 755, type: "regular", section: "BottomRight" },

  // Seats 73-76 (fifth group, bottom-left continuation)
  { id: 73, x: 160, y: 820, type: "regular", section: "BottomFar" },
  { id: 74, x: 215, y: 820, type: "regular", section: "BottomFar" },
  { id: 75, x: 270, y: 820, type: "regular", section: "BottomFar" },
  { id: 76, x: 325, y: 820, type: "regular", section: "BottomFar" },

  // Seats 77-80 (bottom-center far end)
  { id: 77, x: 485, y: 820, type: "regular", section: "BottomFar" },
  { id: 78, x: 540, y: 820, type: "regular", section: "BottomFar" },
  { id: 79, x: 595, y: 820, type: "regular", section: "BottomFar" },
  { id: 80, x: 650, y: 820, type: "regular", section: "BottomFar" },
]

// Strategic entrances at venue perimeter
export const entrances: Entrance[] = [
  { id: "entrance-north", name: "Main Entrance (Top)", x: 500, y: 80 },
  { id: "entrance-west", name: "Left Entrance", x: 80, y: 400 },
  { id: "entrance-east", name: "Right Entrance", x: 920, y: 400 },
  { id: "entrance-south", name: "Bottom Entrance", x: 500, y: 900 },
]

// Venue areas with accurate positioning
export const venueAreas: VenueArea[] = [
  // Buffet stations (left and right sides)
  { id: "buffet-1", name: "BUFFET 1", x: 60, y: 200, width: 50, height: 140, type: "buffet" },
  { id: "buffet-2", name: "BUFFET 2", x: 60, y: 550, width: 50, height: 140, type: "buffet" },
  { id: "buffet-3", name: "BUFFET 4", x: 940, y: 200, width: 50, height: 140, type: "buffet" },
  { id: "buffet-4", name: "BUFFET 3", x: 940, y: 550, width: 50, height: 140, type: "buffet" },

  // Gaming tables (circular, positioned at sides)
  { id: "gaming-1", name: "GAMING TABLE", x: 60, y: 370, width: 50, height: 50, type: "gaming" },
  { id: "gaming-2", name: "GAMING TABLE", x: 940, y: 370, width: 50, height: 50, type: "gaming" },

  // VIP Tables (center-top area, between left and right seating)
  { id: "vip-table-1", name: "VIP TABLE 1-2", x: 425, y: 180, width: 35, height: 140, type: "vip_table" },
  { id: "vip-table-2", name: "VIP TABLE 1-2", x: 540, y: 180, width: 35, height: 140, type: "vip_table" },

  // Bottom areas
  { id: "crying-room", name: "CRYING ROOM", x: 120, y: 870, width: 150, height: 60, type: "crying_room" },
  { id: "photo-exhibit", name: "PHOTO EXHIBIT", x: 380, y: 870, width: 240, height: 60, type: "photo_exhibit" },
]

export const seatsData = seatGrid

export function getSeatById(id: number): SeatPosition | undefined {
  return seatGrid.find((s) => s.id === id)
}

export function getSeatsBySection(section: string): SeatPosition[] {
  return seatGrid.filter((s) => s.section === section)
}
