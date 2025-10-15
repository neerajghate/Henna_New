import { NextRequest, NextResponse } from 'next/server'
import { sendContactFormEmail } from '@/lib/aws'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using demo AWS SES
    await sendContactFormEmail(formData)

    return NextResponse.json(
      { message: 'Contact form submitted successfully (Demo Mode)' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
