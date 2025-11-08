"use client"

import { VenueMapEditor } from "@/components/venue-map-editor"
import { AdminAttendeesList } from "@/components/admin-attendees-list"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("attendees")

  const handleLogout = () => {
    // Logout logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600 mt-1">Manage attendees and seat assignments</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/"
              className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium border border-blue-200 rounded"
            >
              Back to Home
            </Link>
            <Button onClick={handleLogout} variant="destructive">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="flex border-b border-slate-200 gap-8">
            <button
              onClick={() => setActiveTab("attendees")}
              className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === "attendees"
                  ? "text-blue-600 border-blue-600"
                  : "text-slate-600 border-transparent hover:text-slate-900"
              }`}
            >
              Attendees
            </button>
            <button
              onClick={() => setActiveTab("venue-map")}
              className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === "venue-map"
                  ? "text-blue-600 border-blue-600"
                  : "text-slate-600 border-transparent hover:text-slate-900"
              }`}
            >
              Venue Map Editor
            </button>
          </div>
        </div>

        {activeTab === "attendees" && (
          <div className="space-y-6">
            <AdminAttendeesList adminEmail="" />
          </div>
        )}

        {activeTab === "venue-map" && (
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-1">Venue Map Editor</h3>
              <p className="text-blue-800 text-sm">
                You are in the Venue Map Editor section. Here you can interactively add custom nodes, assign meaningful
                labels, and manage the venue layout. All changes are automatically persisted to Firebase and will be
                restored when you return to this page.
              </p>
            </div>
            <VenueMapEditor />
          </div>
        )}
      </main>
    </div>
  )
}

export default AdminPage
