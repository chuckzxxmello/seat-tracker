"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { PieChart, Pie, BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { getCheckInStats, getRegionDistribution, getCategoryDistribution } from "@/lib/firebase-service"
import { Users, CheckCircle2, Clock, TrendingUp } from "lucide-react"

export function AdminAnalytics() {
  const [stats, setStats] = useState<any>(null)
  const [regions, setRegions] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadAnalytics()
  }, [])

  const loadAnalytics = async () => {
    try {
      setLoading(true)
      const [statsData, regionsData, categoriesData] = await Promise.all([
        getCheckInStats(),
        getRegionDistribution(),
        getCategoryDistribution(),
      ])

      setStats(statsData)
      setRegions(
        Object.entries(regionsData).map(([name, value]) => ({
          name,
          value,
        })),
      )
      setCategories(
        Object.entries(categoriesData).map(([name, value]) => ({
          name,
          value,
        })),
      )
    } catch (err) {
      console.error("[v0] Failed to load analytics:", err)
    } finally {
      setLoading(false)
    }
  }

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">Loading analytics...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white border-blue-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Total Attendees</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">{stats?.totalAttendees || 0}</p>
            </div>
            <Users className="w-12 h-12 text-blue-500/20" />
          </div>
        </Card>

        <Card className="bg-white border-blue-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Checked In</p>
              <p className="text-3xl font-bold text-emerald-600 mt-2">{stats?.checkedIn || 0}</p>
            </div>
            <CheckCircle2 className="w-12 h-12 text-emerald-500/20" />
          </div>
        </Card>

        <Card className="bg-white border-blue-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Pending</p>
              <p className="text-3xl font-bold text-amber-600 mt-2">{stats?.pending || 0}</p>
            </div>
            <Clock className="w-12 h-12 text-amber-500/20" />
          </div>
        </Card>

        <Card className="bg-white border-blue-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Check-in Rate</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">{stats?.checkInPercentage || 0}%</p>
            </div>
            <TrendingUp className="w-12 h-12 text-blue-500/20" />
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Region Distribution */}
        <Card className="bg-white border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Region Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={regions}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {regions.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Distribution */}
        <Card className="bg-white border-blue-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categories}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
