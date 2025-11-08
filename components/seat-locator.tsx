"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { InteractiveVenueMap } from "./interactive-venue-map"

interface SeatLocatorProps {
  attendees?: Record<string, any>
}

export function SeatLocator({ attendees = {} }: SeatLocatorProps) {
  const [searchInput, setSearchInput] = useState("")
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null)
  const [selectedEntrance, setSelectedEntrance] = useState<string>("entrance-1")
  const [isSearching, setIsSearching] = useState(false)
  const [isVip, setIsVip] = useState(false) // Track VIP status for proper routing

  const mockAttendees: Record<string, any> = {
    chuckie: { name: "Chuckie Santos", seatId: 2, seatNode: "table-2", category: "PMT" },
    T001: { name: "John Smith", seatId: 5, seatNode: "table-5", category: "Paying Guests" },
    VIP001: { name: "Rev. James", seatId: 2, seatNode: "vip-table-2", category: "VIP" }, // VIP table 2
    T002: { name: "Maria Garcia", seatId: 12, seatNode: "table-12", category: "Doctors/Dentists" },
    ...attendees,
  }

  const handleSearch = async () => {
    setIsSearching(true)
    setSelectedSeat(null)
    setIsVip(false)

    const attendee =
      mockAttendees[searchInput.toLowerCase()] ||
      Object.values(mockAttendees).find((a) => a.name.toLowerCase().includes(searchInput.toLowerCase()))

    if (attendee) {
      const attendeeIsVip = attendee.category === "VIP"
      console.log("[v0] Found attendee:", attendee.name, "at seat:", attendee.seatId, "VIP:", attendeeIsVip)
      setSelectedSeat(attendee.seatId)
      setIsVip(attendeeIsVip)
    } else {
      console.log("[v0] Attendee not found")
      setSelectedSeat(null)
      setIsVip(false)
    }

    setIsSearching(false)
  }

  return (
    <div className="space-y-6">
      {/* Search Card */}
      <Card className="bg-white border-blue-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Find Your Seat</h2>
        <div className="mb-4 bg-blue-50 border border-blue-200 rounded p-2 text-xs text-blue-800">
          ℹ️ All paths are calculated using the latest saved venue layout from the admin panel
        </div>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Enter ticket number or name (e.g., chuckie, VIP001)..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10 bg-white border-blue-200 text-slate-900"
            />
          </div>
          <Button
            onClick={handleSearch}
            disabled={!searchInput || isSearching}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isSearching ? "Searching..." : "Find Seat"}
          </Button>
        </div>
      </Card>

      <InteractiveVenueMap
        selectedSeat={selectedSeat || undefined}
        selectedEntrance={selectedEntrance}
        showPath={!!selectedSeat}
        isVip={isVip}
        onSeatSelect={(seatId) => setSelectedSeat(seatId)}
      />
    </div>
  )
}
