"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users } from "lucide-react"

interface TableInfo {
  tableNumber: number
  capacity: number
  assignedCount: number
  attendees: Array<{ name: string; ticketNumber: string }>
}

interface TableManagementProps {
  allAttendees: Array<{
    id: string
    name: string
    ticketNumber: string
    table?: number
  }>
}

export function TableManagement({ allAttendees }: TableManagementProps) {
  const [tables, setTables] = useState<Map<number, TableInfo>>(new Map())
  const [editingTable, setEditingTable] = useState<number | null>(null)
  const [newCapacity, setNewCapacity] = useState<number>(0)

  useEffect(() => {
    const tableMap = new Map<number, TableInfo>()

    allAttendees.forEach((attendee) => {
      const tableNum = attendee.table || 0
      if (tableNum > 0) {
        if (!tableMap.has(tableNum)) {
          tableMap.set(tableNum, {
            tableNumber: tableNum,
            capacity: 10,
            assignedCount: 0,
            attendees: [],
          })
        }
        const table = tableMap.get(tableNum)!
        table.assignedCount++
        table.attendees.push({ name: attendee.name, ticketNumber: attendee.ticketNumber })
      }
    })

    setTables(tableMap)
  }, [allAttendees])

  const handleUpdateCapacity = (tableNum: number) => {
    if (editingTable === tableNum) {
      const table = tables.get(tableNum)
      if (table) {
        table.capacity = newCapacity
        setTables(new Map(tables))
      }
      setEditingTable(null)
    } else {
      setEditingTable(tableNum)
      setNewCapacity(tables.get(tableNum)?.capacity || 10)
    }
  }

  if (tables.size === 0) {
    return (
      <Card className="bg-white border-blue-200 p-8 text-center">
        <p className="text-slate-600">
          No tables assigned yet. Attendees will appear here once table assignments are made.
        </p>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from(tables.values()).map((table) => (
        <Card key={table.tableNumber} className="bg-white border-blue-200 p-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Table {table.tableNumber}</h3>
              <div className="flex items-center gap-2 mt-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-slate-600 text-sm">
                  {table.assignedCount} / {table.capacity} attendees
                </span>
              </div>
            </div>
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">{table.assignedCount}</span>
            </div>
          </div>

          {/* Capacity Editor */}
          <div className="mb-4 pb-4 border-b border-blue-200">
            <div className="flex gap-2">
              {editingTable === table.tableNumber ? (
                <>
                  <Input
                    type="number"
                    min="1"
                    value={newCapacity}
                    onChange={(e) => setNewCapacity(Number.parseInt(e.target.value) || 0)}
                    className="bg-white border-blue-200 flex-1 h-8 text-sm"
                    placeholder="Capacity"
                  />
                  <Button
                    onClick={() => handleUpdateCapacity(table.tableNumber)}
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 h-8 text-xs"
                  >
                    Save
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => handleUpdateCapacity(table.tableNumber)}
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-200 text-blue-600 h-8 text-xs"
                >
                  Edit Capacity
                </Button>
              )}
            </div>
          </div>

          {/* Attendee List */}
          <div className="space-y-2 max-h-48 overflow-y-auto">
            <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Assigned Attendees</p>
            {table.attendees.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No attendees assigned</p>
            ) : (
              table.attendees.map((att) => (
                <div key={att.ticketNumber} className="text-xs bg-blue-50 p-2 rounded border border-blue-200">
                  <p className="font-medium text-slate-900 truncate">{att.name}</p>
                  <p className="text-slate-600 text-xs">{att.ticketNumber}</p>
                </div>
              ))
            )}
          </div>

          {/* Availability Indicator */}
          <div className="mt-4 pt-4 border-t border-blue-200">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600">Availability</span>
              <div className="h-2 flex-1 mx-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${table.assignedCount >= table.capacity ? "bg-red-500" : table.assignedCount >= table.capacity * 0.8 ? "bg-amber-500" : "bg-emerald-500"}`}
                  style={{ width: `${Math.min((table.assignedCount / table.capacity) * 100, 100)}%` }}
                />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">{table.capacity - table.assignedCount} spots remaining</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
