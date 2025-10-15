'use client'

import { useState } from 'react'
// Stripe integration commented out for demo purposes
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { motion } from 'framer-motion'
import { FiCreditCard, FiLock, FiCheck } from 'react-icons/fi'

interface PaymentFormProps {
  amount: number
  serviceName: string
  onSuccess: () => void
}

const PaymentForm = ({ amount, serviceName, onSuccess }: PaymentFormProps) => {
  // Stripe integration commented out for demo purposes
  // const stripe = useStripe()
  // const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // Demo payment processing - simulate Stripe integration
    setIsProcessing(true)
    setPaymentError(null)

    try {
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      setPaymentSuccess(true)
      setIsProcessing(false)

      // Call success callback after a delay
      setTimeout(() => {
        onSuccess()
      }, 2000)
    } catch (err) {
      setPaymentError('An unexpected error occurred')
      setIsProcessing(false)
    }
  }

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        fontFamily: '"Lato", sans-serif',
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }

  if (paymentSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiCheck className="text-green-600 text-2xl" />
        </div>
        <h3 className="text-xl font-semibold text-henna-800 mb-2">
          Payment Successful!
        </h3>
        <p className="text-henna-600">
          Your payment has been processed successfully. You will receive a confirmation email shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-henna-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-henna-800 mb-2">
          Booking Summary
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-henna-600">Service:</span>
            <span className="font-medium text-henna-800">{serviceName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-henna-600">Amount:</span>
            <span className="font-bold text-henna-800">${amount}</span>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-henna-700 mb-3">
          <FiCreditCard className="inline mr-2" />
          Payment Information (Demo)
        </label>
        <div className="border border-henna-200 rounded-lg p-4 bg-white">
          <div className="text-center text-henna-600 py-8">
            <FiCreditCard className="text-4xl mx-auto mb-4 text-henna-400" />
            <p className="font-medium">Payment Form (Demo Mode)</p>
            <p className="text-sm">Stripe integration would appear here</p>
          </div>
        </div>
      </div>

      {paymentError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4"
        >
          <p className="text-red-600 text-sm">{paymentError}</p>
        </motion.div>
      )}

      <div className="flex items-center space-x-2 text-sm text-henna-600">
        <FiLock className="text-henna-500" />
        <span>Your payment information is secure and encrypted</span>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className="w-full bg-henna-600 hover:bg-henna-700 disabled:bg-henna-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        {isProcessing ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Processing Payment...
          </>
        ) : (
          <>
            <FiLock className="mr-2" />
            Pay ${amount}
          </>
        )}
      </button>
    </form>
  )
}

export default PaymentForm
