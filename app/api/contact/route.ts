import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, projectType, budget, description, timeline } = body

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("design_requests")
      .insert([
        {
          name,
          email,
          project_type: projectType,
          budget,
          description,
          timeline,
          status: "pending",
        },
      ])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to save request" }, { status: 500 })
    }

    console.log("Contact form saved to database:", data)

    return NextResponse.json(
      {
        message: "Request submitted successfully",
        data,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
