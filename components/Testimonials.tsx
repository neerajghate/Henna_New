'use client'

import { motion } from 'framer-motion'
import { FiStar, FiMessageCircle } from 'react-icons/fi'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Denver, CO',
      rating: 5,
      text: 'Rita\'s bridal mehendi was absolutely stunning! She took my vision and made it even more beautiful than I imagined. The intricate details and her attention to my preferences made my wedding day perfect.',
      service: 'Bridal Mehendi',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Aisha Khan',
      location: 'Aurora, CO',
      rating: 5,
      text: 'I\'ve been getting henna done by Rita for years. Her Arabic designs are incredible and she always makes sure I\'m comfortable throughout the process. Highly recommended!',
      service: 'Arabic Mehendi',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Jennifer Smith',
      location: 'Boulder, CO',
      rating: 5,
      text: 'Rita\'s complete bridal package was worth every penny. Her makeup skills are phenomenal and the hair styling was exactly what I wanted. She made me feel like a princess on my special day.',
      service: 'Bridal Package',
      image: '/api/placeholder/80/80'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-henna-900 via-henna-800 to-gold-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            What My Clients Say
          </h2>
          <p className="text-xl text-gold-200 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it - hear from the amazing clients who have trusted me with their special moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                    <FiMessageCircle className="text-gold-400 text-xl" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-gold-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-white/90 mb-6 leading-relaxed text-center">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-henna-400 to-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  
                  <h4 className="text-white font-semibold mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold-200 text-sm mb-2">
                    {testimonial.location}
                  </p>
                  <span className="inline-block px-3 py-1 bg-henna-500/30 text-henna-200 rounded-full text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-white mb-2">5.0</div>
              <div className="text-gold-200">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gold-200">Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gold-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-gold-200">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
