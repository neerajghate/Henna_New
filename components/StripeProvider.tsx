'use client'

// Stripe integration commented out for demo purposes
// import { loadStripe } from '@stripe/stripe-js'
// import { Elements } from '@stripe/react-stripe-js'

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface StripeProviderProps {
  children: React.ReactNode
}

export default function StripeProvider({ children }: StripeProviderProps) {
  // For demo purposes, just return children without Stripe wrapper
  return <>{children}</>
  
  // Original Stripe implementation:
  // return (
  //   <Elements stripe={stripePromise}>
  //     {children}
  //   </Elements>
  // )
}
