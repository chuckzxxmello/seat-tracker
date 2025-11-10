// CSV parsing and export service for attendee data

export interface AttendeeCSVData {
  ticketNumber: string
  name: string
  email: string
  region: string
  category: string
  table?: number
  seat?: number
}

export interface ParseResult {
  valid: boolean
  data: AttendeeCSVData[]
  errors: string[]
}

export function parseCSV(csvContent: string): ParseResult {
  const lines = csvContent.trim().split("\n")
  const errors: string[] = []
  const data: AttendeeCSVData[] = []

  if (lines.length < 2) {
    return { valid: false, data: [], errors: ["CSV must have at least a header row and one data row"] }
  }

  const headerLine = lines[0].toLowerCase()
  const headers = headerLine.split(",").map((h) => h.trim())

  const requiredHeaders = ["ticketnumber", "name", "region", "category"]
  const missingHeaders = requiredHeaders.filter((h) => !headers.includes(h))

  if (missingHeaders.length > 0) {
    return {
      valid: false,
      data: [],
      errors: [`Missing required columns: ${missingHeaders.join(", ")}`],
    }
  }

  // Find column indices
  const ticketIdx = headers.indexOf("ticketnumber")
  const nameIdx = headers.indexOf("name")
  const emailIdx = headers.indexOf("email")
  const regionIdx = headers.indexOf("region")
  const categoryIdx = headers.indexOf("category")
  const tableIdx = headers.indexOf("table")
  const seatIdx = headers.indexOf("seat")

  // Parse data rows
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    const values = line.split(",").map((v) => v.trim())
    const rowNum = i + 1

    const ticket = values[ticketIdx]?.toUpperCase() || ""
    const name = values[nameIdx] || ""
    const email = values[emailIdx] || ""
    const region = values[regionIdx] || ""
    const category = values[categoryIdx] || ""
    const table = values[tableIdx] ? Number.parseInt(values[tableIdx]) : undefined
    const seat = values[seatIdx] ? Number.parseInt(values[seatIdx]) : undefined

    // Validate row
    if (!ticket) {
      errors.push(`Row ${rowNum}: Missing ticket number`)
      continue
    }
    if (!name) {
      errors.push(`Row ${rowNum}: Missing name`)
      continue
    }
    if (!region || !["Luzon", "Visayas", "Mindanao", "International"].includes(region)) {
      errors.push(`Row ${rowNum}: Invalid region "${region}"`)
      continue
    }
    if (!category || !["PMT", "VIP", "Paying Guests", "Doctors/Dentists"].includes(category)) {
      errors.push(`Row ${rowNum}: Invalid category "${category}"`)
      continue
    }

    data.push({
      ticketNumber: ticket,
      name,
      email: email || `${ticket}@event.local`,
      region,
      category,
      table,
      seat,
    })
  }

  return {
    valid: errors.length === 0,
    data,
    errors,
  }
}

export function generateCSV(attendees: any[]): string {
  const headers = ["Ticket Number", "Name", "Email", "Region", "Category", "Table", "Seat", "Check-in Status"]

  const rows = attendees.map((a) => [
    a.ticketNumber,
    a.name,
    a.email,
    a.region,
    a.category,
    a.table || "-",
    a.assignedSeat || "-",
    a.checkedIn ? "Checked In" : "Pending",
  ])

  const csvContent = [
    headers.join(","),
    ...rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")),
  ].join("\n")

  return csvContent
}

export function downloadCSV(csvContent: string, filename: string): void {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)

  link.setAttribute("href", url)
  link.setAttribute("download", filename)
  link.style.visibility = "hidden"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
