import { NextRequest, NextResponse } from "next/server";

let volunteerName = "ไม่ระบุชื่อ" // Default volunteer name

export async function GET() {
  try {
    return NextResponse.json({ volunteerName })
  } catch (err) {
    return NextResponse.json({ volunteerName }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json()
    if (name && typeof name === 'string' && name.trim().length > 0) {
      volunteerName = name.trim()
    }
    return NextResponse.json({ volunteerName })
  } catch (err) {
    return NextResponse.json({ volunteerName }, { status: 500 })
  }
}
