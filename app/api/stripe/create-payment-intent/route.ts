import { NextRequest, NextResponse } from 'next/server'
// Stripe integration commented out for demo purposes
// import Stripe from 'stripe'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2023-10-16',
// })

export async function POST(request: NextRequest) {
  try {
    const { amount, serviceName } = await request.json()

    // Demo response - simulate Stripe payment intent
    console.log('Demo payment intent created:', { amount, serviceName })

    return NextResponse.json({
      clientSecret: 'demo_client_secret_' + Date.now(),
      demo: true
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}
