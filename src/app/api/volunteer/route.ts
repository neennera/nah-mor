import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    let volunteer = await prisma.volunteer.findFirst();
    
    if (!volunteer) {
      volunteer = await prisma.volunteer.create({
        data: { name: "ไม่ระบุชื่อ" }
      });
    }
    
    return NextResponse.json({ volunteerName: volunteer.name });
  } catch (err) {
    console.error('GET /api/volunteer error:', err);
    return NextResponse.json({ volunteerName: "ไม่ระบุชื่อ" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    
    if (name && typeof name === 'string' && name.trim().length > 0) {
      let volunteer = await prisma.volunteer.findFirst();
      
      if (volunteer) {
        volunteer = await prisma.volunteer.update({
          where: { id: volunteer.id },
          data: { name: name.trim() }
        });
      } else {
        volunteer = await prisma.volunteer.create({
          data: { name: name.trim() }
        });
      }
      
      return NextResponse.json({ volunteerName: volunteer.name });
    }
    
    return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
  } catch (err) {
    console.error('POST /api/volunteer error:', err);
    return NextResponse.json({ error: 'Failed to update volunteer name' }, { status: 500 });
  }
}
