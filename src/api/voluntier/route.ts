import { NextRequest, NextResponse } from "next/server";

let name = "ไม่ระบุชื่อ" // Default volunteer name

export async function GET() {
  try {
    return NextResponse.json({ volunteerName: name })
  } catch (err) {
    return NextResponse.json({ volunteerName: name }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { volunteerName } = await req.json()
    if (volunteerName && typeof volunteerName === 'string' && volunteerName.trim().length > 0) {
      name = volunteerName.trim()
    }
    
    return NextResponse.json({ volunteerName : name })
  } catch (err) {
    return NextResponse.json({ volunteerName : name}, { status: 500 })
  }
}