"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Users, Armchair, Clock } from "lucide-react"
import { getEventStatistics, type EventStatistics } from "@/lib/statistics-service"

export function RealTimeStatistics() {
  const [stats, setStats] = useState<EventStatistics | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadStatistics()
    const interval = setInterval(loadStatistics, 5000) // Refresh every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const loadStatistics = async () => {
    try {
      const data = await getEventStatistics()
      setStats(data)
    } catch (error) {
      console.error("[v0] Error loading statistics:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading || !stats) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-white border-blue-200 p-6 shadow-sm animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-slate-200 rounded w-1/3"></div>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="bg-white border-blue-200 p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-600 text-sm font-medium">Total Attendees</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{stats.totalAttendees}</p>
            <p className="text-slate-500 text-xs mt-1">Registered</p>
          </div>
          <Users className="w-12 h-12 text-blue-500/20" />
        </div>
      </Card>

      <Card className="bg-white border-green-200 p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-600 text-sm font-medium">Seats Filled</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{stats.seatsFilled}</p>
            <p className="text-slate-500 text-xs mt-1">Assigned seats</p>
          </div>
          <Armchair className="w-12 h-12 text-emerald-500/20" />
        </div>
      </Card>

      <Card className="bg-white border-amber-200 p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-600 text-sm font-medium">Pending Check-ins</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{stats.pendingCheckIns}</p>
            <p className="text-slate-500 text-xs mt-1">Not yet checked in</p>
          </div>
          <Clock className="w-12 h-12 text-amber-500/20" />
        </div>
      </Card>
    </div>
  )
}
