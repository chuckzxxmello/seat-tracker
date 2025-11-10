export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateTicketNumber(ticket: string): boolean {
  return ticket.trim().length > 0
}

export function validateSeatNumber(seat: number): boolean {
  return seat >= 1 && seat <= 80 && Number.isInteger(seat)
}

export function validateAttendeeData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || data.name.trim().length === 0) {
    errors.push("Name is required")
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push("Valid email is required")
  }

  if (!data.ticketNumber || !validateTicketNumber(data.ticketNumber)) {
    errors.push("Ticket number is required")
  }

  if (!data.region) {
    errors.push("Region is required")
  }

  if (!data.category) {
    errors.push("Category is required")
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}
