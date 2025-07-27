import { NextRequest, NextResponse } from "next/server";

let imageData: { [key: string]: string } = {} // Store images by key

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const imageKey = searchParams.get('key')
    
    if (!imageKey) {
      return NextResponse.json({ error: 'Image key is required' }, { status: 400 })
    }
    
    if (imageData[imageKey]) {
      return NextResponse.json({ 
        image: imageData[imageKey], 
        key: imageKey,
        success: true 
      })
    }
    
    return NextResponse.json({ 
      error: 'Image not found',
      key: imageKey,
      availableKeys: Object.keys(imageData)
    }, { status: 404 })
  } catch (err) {
    console.error('GET /api/picture error:', err)
    return NextResponse.json({ error: 'Failed to get image' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { image, key } = body
    
    if (!image || !key) {
      return NextResponse.json({ 
        error: 'Both image and key are required',
        received: { hasImage: !!image, hasKey: !!key }
      }, { status: 400 })
    }
    
    if (typeof image !== 'string' || typeof key !== 'string') {
      return NextResponse.json({ 
        error: 'Image and key must be strings',
        types: { image: typeof image, key: typeof key }
      }, { status: 400 })
    }
    
    // Validate base64 image format
    if (!image.startsWith('data:image/')) {
      return NextResponse.json({ 
        error: 'Invalid image format. Expected base64 data URL' 
      }, { status: 400 })
    }
    
    imageData[key] = image
    console.log(`Image saved successfully with key: ${key}`)
    
    return NextResponse.json({ 
      success: true, 
      key, 
      message: 'Image saved successfully',
      imageSize: image.length
    })
  } catch (err) {
    console.error('POST /api/picture error:', err)
    return NextResponse.json({ 
      error: 'Failed to save image',
      details: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 })
  }
}