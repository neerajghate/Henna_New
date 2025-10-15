import { NextRequest, NextResponse } from 'next/server'
import { uploadToS3 } from '@/lib/aws'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer())
    
    // Generate unique filename
    const timestamp = Date.now()
    const filename = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
    const key = `gallery/${filename}`

    // Upload to demo S3
    const url = await uploadToS3(buffer, key, file.type)

    return NextResponse.json({
      url,
      key,
      filename: file.name,
      size: file.size,
      type: file.type,
      demo: true
    })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    )
  }
}
