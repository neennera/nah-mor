import { NextRequest, NextResponse } from "next/server";

let imageData: { [key: string]: string } = {} // Store images by key

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const imageKey = searchParams.get('key')
    
    if (imageKey && imageData[imageKey]) {
      return NextResponse.json({ image: imageData[imageKey], key: imageKey })
    }
    
    // Return all images if no key specified
    return NextResponse.json({ images: imageData })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to get image' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { image, key } = await req.json()
    
    if (image && key && typeof image === 'string' && typeof key === 'string') {
      imageData[key] = image
      return NextResponse.json({ success: true, key, message: 'Image saved successfully' })
    }
    
    return NextResponse.json({ error: 'Invalid image data or key' }, { status: 400 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to save image' }, { status: 500 })
  }
}