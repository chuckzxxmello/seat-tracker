"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, AlertCircle, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import { PathfindingVisualization } from "@/components/pathfinding-visualization"
import { getAttendees, getCheckInStats, updateAttendee } from "@/lib/firebase-service"

export default function StaffTools() {
  const [searchSeat, setSearchSeat] = useState("")
  const [selectedAttendees, setSelectedAttendees] = useState<any[]>([])
  const [searchedSeat, setSearchedSeat] = useState<number | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isReassigning, setIsReassigning] = useState<string | null>(null)
  const [newSeatNumber, setNewSeatNumber] = useState("")
  const [stats, setStats] = useState({ checkedIn: 0, pending: 0, checkInRate: 0 })

  useEffect(() => {
    loadStats()
    const interval = setInterval(loadStats, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const loadStats = async () => {
    try {
      const data = await getCheckInStats()
      setStats({
        checkedIn: data.checkedIn,
        pending: data.pending,
        checkInRate: data.checkInPercentage,
      })
    } catch (err) {
      console.error("[v0] Failed to load stats:", err)
    }
  }

  const handleSearch = async () => {
    setIsSearching(true)
    setError(null)
    setIsReassigning(null)

    try {
      const seatNumber = Number.parseInt(searchSeat)
      if (isNaN(seatNumber) || seatNumber < 1 || seatNumber > 80) {
        setError("Please enter a valid seat number (1-80)")
        setIsSearching(false)
        return
      }

      const attendees = await getAttendees()
      const seatedAttendees = attendees.filter((a) => a.assignedSeat === seatNumber)

      if (seatedAttendees.length > 0) {
        setSearchedSeat(seatNumber)
        setSelectedAttendees(seatedAttendees)
      } else {
        setError("No attendee assigned to that seat")
        setSelectedAttendees([])
        setSearchedSeat(null)
      }
    } catch (err) {
      console.error("[v0] Seat lookup failed:", err)
      setError("Failed to lookup seat. Please try again.")
    } finally {
      setIsSearching(false)
    }
  }

  const handleReassign = async (attendeeId: string) => {
    if (!newSeatNumber) return

    const newSeat = Number.parseInt(newSeatNumber)
    if (isNaN(newSeat) || newSeat < 1 || newSeat > 80) {
      setError("Please enter a valid seat number (1-80)")
      return
    }

    try {
      setIsSearching(true)
      setError(null)

      const attendee = selectedAttendees.find((a) => a.id === attendeeId)
      await updateAttendee(attendeeId, {
        assignedSeat: newSeat,
      })

      alert(`Successfully reassigned ${attendee?.name} to Seat ${newSeat}`)
      setIsReassigning(null)
      setNewSeatNumber("")

      await handleSearch()
    } catch (err) {
      console.error("[v0] Reassignment failed:", err)
      setError("Failed to reassign seat. Please try again.")
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="border-b border-blue-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Staff Tools</h1>
              <p className="text-slate-600 text-sm mt-1">Seat lookup and event monitoring</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white border-blue-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Checked In</p>
                <p className="text-3xl font-bold text-emerald-600 mt-2">{stats.checkedIn}</p>
              </div>
              <Users className="w-12 h-12 text-emerald-500/20" />
            </div>
          </Card>

          <Card className="bg-white border-blue-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Pending</p>
                <p className="text-3xl font-bold text-amber-600 mt-2">{stats.pending}</p>
              </div>
              <AlertCircle className="w-12 h-12 text-amber-500/20" />
            </div>
          </Card>

          <Card className="bg-white border-blue-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm">Check-in Rate</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{stats.checkInRate}%</p>
              </div>
              <TrendingUp className="w-12 h-12 text-blue-500/20" />
            </div>
          </Card>
        </div>

        {error && (
          <Card className="bg-red-50 border-red-300 p-4 mb-8">
            <p className="text-red-700 text-sm">{error}</p>
          </Card>
        )}

        <Card className="bg-white border-blue-200 p-8 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Seat Lookup</h2>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Enter seat number (1-80)..."
                value={searchSeat}
                onChange={(e) => setSearchSeat(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                className="pl-12 bg-white border-blue-200 text-slate-900 placeholder:text-slate-400 h-12"
              />
            </div>
            <Button
              onClick={handleSearch}
              disabled={isSearching}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12"
            >
              {isSearching ? "Looking up..." : "Lookup"}
            </Button>
          </div>
        </Card>

        {searchedSeat && selectedAttendees.length > 0 && (
          <div className="mb-8">
            <Card className="bg-white border-blue-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Venue Map with Shortest Path - Table {searchedSeat}
              </h2>
              <PathfindingVisualization
                seatId={searchedSeat}
                isVip={selectedAttendees[0]?.category === "VIP"}
                showBackground={false}
              />
              <p className="text-sm text-slate-600 mt-4 p-4 bg-blue-50 rounded-lg">
                <strong>{selectedAttendees.length} attendee(s)</strong> assigned to{" "}
                <strong>Table {searchedSeat}</strong>.
              </p>
            </Card>
          </div>
        )}

        {selectedAttendees.length > 0 ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900">
              All Attendees at Table {searchedSeat} ({selectedAttendees.length} total)
            </h3>
            {selectedAttendees.map((attendee) => (
              <Card key={attendee.id} className="bg-white border-blue-200 p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-slate-600 text-sm font-medium mb-4">Attendee</h3>
                    <p className="text-xl font-bold text-slate-900 mb-2">{attendee.name}</p>
                    <p className="text-slate-600 text-sm">{attendee.ticketNumber}</p>
                  </div>
                  <div>
                    <h3 className="text-slate-600 text-sm font-medium mb-4">Details</h3>
                    <div className="space-y-2">
                      <p className="text-slate-900">
                        <span className="text-slate-600">Region:</span> {attendee.region}
                      </p>
                      <p className="text-slate-900">
                        <span className="text-slate-600">Category:</span> {attendee.category}
                      </p>
                      <p className="text-slate-900">
                        <span className="text-slate-600">Status:</span>
                        <span className={attendee.checkedIn ? "text-emerald-600" : "text-amber-600"}>
                          {" "}
                          {attendee.checkedIn ? "Checked In" : "Pending"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-slate-600 text-sm font-medium mb-4">Actions</h3>
                    </div>
                    <div className="space-y-3">
                      {isReassigning !== attendee.id ? (
                        <Button
                          onClick={() => setIsReassigning(attendee.id)}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Reassign Seat
                        </Button>
                      ) : (
                        <div className="space-y-2">
                          <Input
                            type="number"
                            min="1"
                            max="80"
                            placeholder="New seat number (1-80)"
                            value={newSeatNumber}
                            onChange={(e) => setNewSeatNumber(e.target.value)}
                            className="bg-white border-blue-200"
                          />
                          <div className="flex gap-2">
                            <Button
                              onClick={() => handleReassign(attendee.id)}
                              disabled={isSearching}
                              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                            >
                              Confirm
                            </Button>
                            <Button
                              onClick={() => {
                                setIsReassigning(null)
                                setNewSeatNumber("")
                              }}
                              variant="outline"
                              className="flex-1 border-slate-300"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          searchSeat &&
          !isSearching && (
            <Card className="bg-white border-blue-200 p-8 text-center shadow-sm">
              <p className="text-slate-600">No seat found at that location.</p>
            </Card>
          )
        )}
      </main>
    </div>
  )
}
