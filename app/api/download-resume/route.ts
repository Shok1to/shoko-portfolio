import { NextResponse } from "next/server"

export async function GET() {
  // This is a simple route handler that could be used to track resume downloads
  // or serve the resume from a secure location

  // You could add analytics tracking here

  // For now, we'll just return a success response
  return NextResponse.json({
    success: true,
    message: "Resume download initiated",
  })
}

