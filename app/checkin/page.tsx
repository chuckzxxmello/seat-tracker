"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { PathfindingVisualization } from "@/components/pathfinding-visualization"
import { searchAttendees, checkInAttendee, cancelCheckIn, logAudit, checkTableCapacity } from "@/lib/firebase-service"
import { useAuth } from "@/lib/auth-context"

export default function CheckinPage() {
  const { user } = useAuth()
  const [searchInput, setSearchInput] = useState("")
  const [selectedAttendee, setSelectedAttendee] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    setIsSearching(true)
    setError(null)
    setSelectedAttendee(null)

    try {
      const results = await searchAttendees(searchInput)
      if (results.length > 0) {
        setSelectedAttendee(results[0])
      } else {
        setError("No attendee found with that search term.")
      }
    } catch (err) {
      console.error("[v0] Search failed:", err)
      setError("Failed to search attendees. Please try again.")
    } finally {
      setIsSearching(false)
    }
  }

  const handleCheckin = async () => {
    if (!selectedAttendee) return

    if (selectedAttendee.assignedSeat) {
      try {
        const isVIP = selectedAttendee.category === "VIP"
        const capacity = await checkTableCapacity(selectedAttendee.assignedSeat, isVIP)

        if (capacity.isFull) {
          setError(
            `Table ${selectedAttendee.assignedSeat} is at full capacity (${capacity.max}/${capacity.max} seats). Cannot check in.`,
          )
          return
        }
      } catch (err) {
        console.error("[v0] Error checking capacity:", err)
        setError("Failed to check table capacity. Please try again.")
        return
      }
    }

    try {
      setIsSearching(true)
      await checkInAttendee(selectedAttendee.id)
      await logAudit("check_in", user?.email || "", selectedAttendee.ticketNumber, selectedAttendee.assignedSeat, {
        name: selectedAttendee.name,
      })

      setSelectedAttendee({ ...selectedAttendee, checkedIn: true })
      setTimeout(() => {
        setSearchInput("")
        setSelectedAttendee(null)
      }, 2000)
    } catch (err) {
      console.error("[v0] Check-in failed:", err)
      setError("Failed to check in. Please try again.")
    } finally {
      setIsSearching(false)
    }
  }

  const handleCancelCheckIn = async () => {
    if (!selectedAttendee || !confirm("Are you sure you want to cancel this check-in?")) return

    try {
      setIsSearching(true)
      setError(null)

      await cancelCheckIn(selectedAttendee.id)
      await logAudit(
        "cancel_check_in",
        user?.email || "",
        selectedAttendee.ticketNumber,
        selectedAttendee.assignedSeat,
        {
          name: selectedAttendee.name,
        },
      )

      setSelectedAttendee({ ...selectedAttendee, checkedIn: false })
    } catch (err) {
      console.error("[v0] Error cancelling check-in:", err)
      setError("Failed to cancel check-in. Please try again.")
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="border-b border-blue-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Attendee Check-in</h1>
              <p className="text-slate-600 text-sm mt-1">Search and check in attendees with real-time seat tracking</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {error && (
          <Card className="bg-red-50 border-red-300 p-4 mb-8">
            <p className="text-red-700 text-sm">{error}</p>
          </Card>
        )}

        <Card className="bg-white border-blue-200 p-8 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Find Attendee</h2>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Enter ticket number or name..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="pl-12 bg-white border-blue-200 text-slate-900 placeholder:text-slate-400 h-12 text-lg"
              />
            </div>
            <Button
              onClick={handleSearch}
              disabled={!searchInput || isSearching}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12"
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </div>
        </Card>

        {selectedAttendee && (
          <div className="mb-8">
            <Card className="bg-white border-blue-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Venue Map with Shortest Path - Seat {selectedAttendee.assignedSeat || "TBD"}
              </h2>
              {selectedAttendee.assignedSeat && (
                <PathfindingVisualization
                  seatId={selectedAttendee.assignedSeat}
                  isVip={selectedAttendee.category === "VIP"}
                  showBackground={false}
                />
              )}
              <p className="text-sm text-slate-600 mt-4 p-4 bg-blue-50 rounded-lg">
                Your assigned seat is <strong>Seat {selectedAttendee.assignedSeat || "Not Yet Assigned"}</strong>.
                Follow the green path from any entrance.
              </p>
            </Card>
          </div>
        )}

        {selectedAttendee && (
          <Card
            className={`border-2 p-8 shadow-sm ${
              selectedAttendee.checkedIn ? "bg-emerald-50 border-emerald-300" : "bg-white border-blue-200"
            }`}
          >
            <div className="mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedAttendee.name}</h3>
                  <p className="text-slate-600 text-sm">Ticket: {selectedAttendee.ticketNumber}</p>
                </div>
                {selectedAttendee.checkedIn && <CheckCircle2 className="w-8 h-8 text-emerald-600" />}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-slate-600 text-sm mb-1">Region</p>
                  <p className="text-slate-900 font-semibold">{selectedAttendee.region}</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-1">Category</p>
                  <p className="text-slate-900 font-semibold">{selectedAttendee.category}</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-1">Email</p>
                  <p className="text-slate-900 font-semibold">{selectedAttendee.email}</p>
                </div>
                <div>
                  <p className="text-slate-600 text-sm mb-1">Seat</p>
                  <p className="text-slate-900 font-semibold">{selectedAttendee.assignedSeat || "-"}</p>
                </div>
              </div>
            </div>

            {!selectedAttendee.checkedIn && (
              <Button
                onClick={handleCheckin}
                disabled={isSearching}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                {isSearching ? "Processing..." : "Mark as Checked In"}
              </Button>
            )}

            {selectedAttendee.checkedIn && (
              <div className="space-y-4">
                <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-6 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <p className="text-emerald-700 font-semibold">Check-in Completed!</p>
                </div>
                <Button
                  onClick={handleCancelCheckIn}
                  disabled={isSearching}
                  variant="outline"
                  className="w-full border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  {isSearching ? "Processing..." : "Cancel Check-in"}
                </Button>
              </div>
            )}
          </Card>
        )}
      </main>
    </div>
  )
}
