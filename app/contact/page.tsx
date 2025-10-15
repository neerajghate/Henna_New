'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Bridal Mehendi',
    'Arabic Mehendi',
    'Traditional Mehendi',
    'Roses Mehendi',
    'Color Mehendi',
    'Designer Mehendi',
    'Bridal Makeup',
    'Party Makeup',
    'Hair Styling',
    'Complete Package',
    'Other'
  ]

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Location',
      details: 'Denver, Colorado, United States',
      description: 'Serving the greater Denver area'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      details: '(123) 456-7890',
      description: 'Call or text for appointments'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: 'rita.sheth@example.com',
      description: 'Send us your inquiries'
    },
    {
      icon: FiClock,
      title: 'Hours',
      details: 'Mon - Sat: 9 AM - 7 PM',
      description: 'Sunday: By appointment only'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Demo form submission - would normally send to API
      console.log('Contact form submitted:', formData)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-henna-50 to-gold-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-henna-800 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to create something beautiful together? I'd love to hear about your vision 
              and help make your special occasion unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-henna-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-henna-500 to-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-henna-800 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-henna-700 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-henna-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-henna-50 to-gold-50 rounded-2xl p-6">
                <h3 className="text-xl font-playfair font-semibold text-henna-800 mb-4">
                  Quick Contact
                </h3>
                <p className="text-henna-600 mb-4">
                  For urgent bookings or immediate assistance, feel free to call or text me directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+1234567890"
                    className="flex-1 bg-henna-600 hover:bg-henna-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 text-center flex items-center justify-center"
                  >
                    <FiPhone className="mr-2" />
                    Call Now
                  </a>
                  <a
                    href="mailto:rita.sheth@example.com"
                    className="flex-1 bg-transparent border-2 border-henna-600 text-henna-600 hover:bg-henna-600 hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center"
                  >
                    <FiMail className="mr-2" />
                    Email Me
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-henna-100 p-8">
                <h2 className="text-3xl font-playfair font-bold text-henna-800 mb-6">
                  Send Me a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheckCircle className="text-green-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-henna-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-henna-600">
                      Thank you for your message. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-henna-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-henna-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-henna-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-henna-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-henna-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-henna-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell me about your event, design preferences, or any special requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-henna-600 hover:bg-henna-700 disabled:bg-henna-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-henna-50 to-gold-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-henna-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto">
              Here are some common questions I receive. Don't see your question? Feel free to contact me directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How far in advance should I book?",
                answer: "For weddings and special events, I recommend booking at least 2-3 months in advance. For regular appointments, 1-2 weeks notice is usually sufficient."
              },
              {
                question: "Do you travel to locations?",
                answer: "Yes, I provide on-location services throughout the Denver metro area. Travel fees may apply for locations outside my standard service area."
              },
              {
                question: "What should I do before my appointment?",
                answer: "Please arrive with clean, dry skin. Avoid applying lotions or oils to the areas where henna will be applied. Bring any reference images you'd like to discuss."
              },
              {
                question: "How long does henna last?",
                answer: "Henna typically lasts 1-3 weeks depending on your skin type, care routine, and the area of application. Proper aftercare can help extend the duration."
              },
              {
                question: "Do you offer group bookings?",
                answer: "Absolutely! I love working with bridal parties, family gatherings, and group events. Special rates are available for group bookings."
              },
              {
                question: "What forms of payment do you accept?",
                answer: "I accept cash, credit cards, and digital payments. A deposit is typically required to secure your booking."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-henna-100"
              >
                <h3 className="text-lg font-semibold text-henna-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-henna-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
