import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Users, Armchair, BarChart3 } from "lucide-react"
import { RealTimeStatistics } from "@/components/real-time-statistics"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-blue-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Seating Tracker</h1>
            <p className="text-slate-600 text-sm mt-1">Seating Management System</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <RealTimeStatistics />
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-300 hover:border-blue-400 transition-colors p-8 cursor-pointer group shadow-sm">
            <Link href="/login" className="block">
              <Users className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Admin Dashboard</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Manage delegates, import attendee data, assign seats and tables, and view analytics
              </p>
              <div className="mt-6 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Access Dashboard →
              </div>
            </Link>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-300 hover:border-emerald-400 transition-colors p-8 cursor-pointer group shadow-sm">
            <Link href="/checkin" className="block">
              <Armchair className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Attendee Check-in</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Search attendees, locate their seats, get directions, and complete check-in process
              </p>
              <div className="mt-6 text-emerald-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Start Check-in →
              </div>
            </Link>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-300 hover:border-purple-400 transition-colors p-8 cursor-pointer group shadow-sm">
            <Link href="/staff" className="block">
              <BarChart3 className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Staff Tools</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Quick seat lookup, on-the-fly reassignments, and real-time event monitoring
              </p>
              <div className="mt-6 text-purple-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Staff Access →
              </div>
            </Link>
          </Card>
        </div>

        {/* Bottom Info */}
        <Card className="bg-white border-blue-200 mt-12 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Venue Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-slate-700 font-semibold mb-2">Event Details</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>Total Tables: 80</li>
                <li>Total Seats: 320</li>
                <li>Capacity: 8000 attendees</li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-700 font-semibold mb-2">Delegations</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>Luzon, Visayas, Mindanao, International</li>
                <li>VIP & Regular seat types</li>
                <li>Multi-region support</li>
              </ul>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
