"use client"
import { Card } from "@/components/ui/card"

interface SimpleVenueDisplayProps {
  highlightedSeat?: number
  showDirections?: boolean
}

export function SimpleVenueDisplay({ highlightedSeat, showDirections }: SimpleVenueDisplayProps) {
  return (
    <Card className="w-full bg-white border-slate-300 shadow-md overflow-hidden">
      <div className="relative w-full bg-white">
        <img
          src="/images/design-mode/ee85d619-1eb4-4c4f-b56f-f2cc3cb11ebe.jfif.jpeg"
          alt="Event Venue Map - 80 Seats"
          className="w-full h-auto"
        />
      </div>
    </Card>
  )
}
