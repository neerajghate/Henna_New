'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiUser, FiCreditCard, FiCheck } from 'react-icons/fi'
import StripeProvider from '@/components/StripeProvider'
import PaymentForm from '@/components/PaymentForm'

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    duration: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    amount: 0
  })

  const services = [
    {
      id: 'bridal-mehendi',
      name: 'Bridal Mehendi',
      price: 250,
      duration: '3-5 hours',
      description: 'Full bridal mehendi including hands, arms, and feet'
    },
    {
      id: 'arabic-mehendi',
      name: 'Arabic Mehendi',
      price: 80,
      duration: '1-2 hours',
      description: 'Flowing Arabic patterns for hands and feet'
    },
    {
      id: 'traditional-mehendi',
      name: 'Traditional Mehendi',
      price: 120,
      duration: '2-3 hours',
      description: 'Classic Indian traditional designs'
    },
    {
      id: 'bridal-package',
      name: 'Complete Bridal Package',
      price: 450,
      duration: '6-8 hours',
      description: 'Mehendi, makeup, and hair styling'
    },
    {
      id: 'makeup-only',
      name: 'Makeup Only',
      price: 120,
      duration: '1-2 hours',
      description: 'Professional makeup application'
    },
    {
      id: 'hair-styling',
      name: 'Hair Styling',
      price: 80,
      duration: '1-2 hours',
      description: 'Professional hair styling and accessories'
    }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM'
  ]

  const handleServiceSelect = (service: typeof services[0]) => {
    setBookingData({
      ...bookingData,
      service: service.name,
      duration: service.duration,
      amount: service.price
    })
    setCurrentStep(2)
  }

  const handleDateTimeSelect = (date: string, time: string) => {
    setBookingData({
      ...bookingData,
      date,
      time
    })
    setCurrentStep(3)
  }

  const handlePersonalInfoSubmit = (data: any) => {
    setBookingData({
      ...bookingData,
      ...data
    })
    setCurrentStep(4)
  }

  const handlePaymentSuccess = () => {
    setCurrentStep(5)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-henna-50 to-gold-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-henna-800 mb-6">
              Book Your Session
            </h1>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to secure your appointment with Rita Sheth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-white border-b border-henna-100">
        <div className="container-max">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step 
                      ? 'bg-henna-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 5 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-henna-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-henna-800 mb-8 text-center">
                Select Your Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white border-2 border-henna-100 rounded-2xl p-6 cursor-pointer hover:border-henna-300 transition-colors"
                    onClick={() => handleServiceSelect(service)}
                  >
                    <h3 className="text-xl font-semibold text-henna-800 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-henna-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-henna-600">
                        <FiClock className="mr-1" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <span className="text-2xl font-bold text-henna-800">
                        ${service.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-henna-800 mb-8 text-center">
                Choose Date & Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-henna-800 mb-4 flex items-center">
                    <FiCalendar className="mr-2" />
                    Select Date
                  </h3>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent"
                    onChange={(e) => {
                      if (bookingData.time) {
                        handleDateTimeSelect(e.target.value, bookingData.time)
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-henna-800 mb-4 flex items-center">
                    <FiClock className="mr-2" />
                    Available Times
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        className="p-3 border border-henna-200 rounded-lg hover:border-henna-400 hover:bg-henna-50 transition-colors"
                        onClick={() => {
                          if (bookingData.date) {
                            handleDateTimeSelect(bookingData.date, time)
                          }
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Personal Information */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-henna-800 mb-8 text-center">
                Your Information
              </h2>
              <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />
            </motion.div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-henna-800 mb-8 text-center">
                Secure Payment
              </h2>
              <StripeProvider>
                <PaymentForm
                  amount={bookingData.amount}
                  serviceName={bookingData.service}
                  onSuccess={handlePaymentSuccess}
                />
              </StripeProvider>
            </motion.div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="text-green-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-henna-800 mb-6">
                Booking Confirmed!
              </h2>
              <div className="bg-henna-50 rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-henna-800 mb-4">
                  Booking Details
                </h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-henna-600">Service:</span>
                    <span className="font-medium">{bookingData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-henna-600">Date:</span>
                    <span className="font-medium">{bookingData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-henna-600">Time:</span>
                    <span className="font-medium">{bookingData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-henna-600">Duration:</span>
                    <span className="font-medium">{bookingData.duration}</span>
                  </div>
                  <div className="flex justify-between border-t border-henna-200 pt-2">
                    <span className="text-henna-600">Total:</span>
                    <span className="font-bold">${bookingData.amount}</span>
                  </div>
                </div>
              </div>
              <p className="text-henna-600 mt-6">
                You will receive a confirmation email with all the details shortly.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

// Personal Info Form Component
const PersonalInfoForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-henna-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-henna-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-henna-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent"
          placeholder="(123) 456-7890"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-henna-700 mb-2">
          Special Notes or Requirements
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full p-4 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent resize-none"
          placeholder="Any specific design preferences, allergies, or special requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-henna-600 hover:bg-henna-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300"
      >
        Continue to Payment
      </button>
    </form>
  )
}

export default BookingPage
