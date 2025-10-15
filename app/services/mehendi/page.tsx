'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiClock, FiStar, FiHeart } from 'react-icons/fi'

const MehendiServicesPage = () => {
  const mehendiTypes = [
    {
      id: 1,
      name: 'Bridal Mehendi',
      description: 'Intricate and elaborate designs for the bride, covering hands, arms, and feet',
      price: '$200 - $400',
      duration: '3-5 hours',
      features: ['Full hand & arm coverage', 'Feet designs', 'Custom motifs', 'Long-lasting color'],
      image: '/api/placeholder/400/300',
      popular: true
    },
    {
      id: 2,
      name: 'Arabic Mehendi',
      description: 'Flowing patterns with bold lines and floral motifs, perfect for any occasion',
      price: '$80 - $150',
      duration: '1-2 hours',
      features: ['Flowing patterns', 'Bold lines', 'Floral motifs', 'Quick application'],
      image: '/api/placeholder/400/300',
      popular: false
    },
    {
      id: 3,
      name: 'Traditional Indian Mehendi',
      description: 'Classic Indian patterns with intricate details and traditional symbolism',
      price: '$100 - $180',
      duration: '2-3 hours',
      features: ['Traditional patterns', 'Intricate details', 'Cultural symbolism', 'Authentic designs'],
      image: '/api/placeholder/400/300',
      popular: false
    },
    {
      id: 4,
      name: 'Roses Mehendi',
      description: 'Beautiful rose patterns and floral designs for a romantic touch',
      price: '$60 - $120',
      duration: '1-2 hours',
      features: ['Rose patterns', 'Floral designs', 'Romantic touch', 'Elegant look'],
      image: '/api/placeholder/400/300',
      popular: false
    },
    {
      id: 5,
      name: 'Color Mehendi',
      description: 'Vibrant colored henna designs for special celebrations and festivals',
      price: '$100 - $200',
      duration: '2-3 hours',
      features: ['Vibrant colors', 'Festival designs', 'Special occasions', 'Unique look'],
      image: '/api/placeholder/400/300',
      popular: false
    },
    {
      id: 6,
      name: 'Designer Mehendi',
      description: 'Custom-designed patterns tailored to your personal style and preferences',
      price: '$120 - $250',
      duration: '2-4 hours',
      features: ['Custom designs', 'Personal style', 'Unique patterns', 'Tailored approach'],
      image: '/api/placeholder/400/300',
      popular: false
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We discuss your preferences, occasion, and design ideas'
    },
    {
      step: 2,
      title: 'Design Planning',
      description: 'I create a custom design plan based on your requirements'
    },
    {
      step: 3,
      title: 'Application',
      description: 'Professional henna application with natural, high-quality paste'
    },
    {
      step: 4,
      title: 'Aftercare',
      description: 'Detailed aftercare instructions for best color results'
    }
  ]

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
              Mehendi (Henna) Services
            </h1>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your hands and feet with beautiful henna art. From traditional patterns 
              to modern designs, I create stunning mehendi for all your special occasions.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Your Mehendi Session
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mehendi Types Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-henna-800 mb-6">
              Mehendi Styles
            </h2>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed">
              Choose from a variety of beautiful mehendi styles, each crafted with care and attention to detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mehendiTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {type.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-henna-100 h-full">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-henna-200 to-gold-200 flex items-center justify-center">
                    <div className="text-center text-henna-600">
                      <div className="w-16 h-16 mx-auto mb-3 border-2 border-henna-400 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <p className="text-sm font-medium">Mehendi Image</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-henna-800 mb-3">
                      {type.name}
                    </h3>
                    <p className="text-henna-600 mb-4 leading-relaxed">
                      {type.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-henna-600">
                          <FiCheck className="text-henna-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price & Duration */}
                    <div className="flex justify-between items-center mb-4 p-3 bg-henna-50 rounded-lg">
                      <div>
                        <span className="text-lg font-semibold text-henna-800">{type.price}</span>
                      </div>
                      <div className="flex items-center text-henna-600">
                        <FiClock className="mr-1 text-sm" />
                        <span className="text-sm">{type.duration}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      Book This Style
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-henna-50 to-gold-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-henna-800 mb-6">
              My Process
            </h2>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed">
              Every mehendi session is carefully planned and executed to ensure you get the perfect design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-henna-500 to-gold-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-henna-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-henna-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-henna-800 mb-6">
                Aftercare Instructions
              </h2>
              <p className="text-lg text-henna-600 mb-8 leading-relaxed">
                Follow these simple steps to ensure your henna design lasts longer and develops the perfect color
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-henna-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-henna-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-henna-800 mb-1">Keep Dry for 2-3 Hours</h4>
                    <p className="text-henna-600 text-sm">Avoid water contact to allow the paste to set properly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-henna-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-henna-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-henna-800 mb-1">Apply Lemon & Sugar</h4>
                    <p className="text-henna-600 text-sm">Mix lemon juice with sugar and apply to enhance color</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-henna-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-henna-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-henna-800 mb-1">Avoid Soap Initially</h4>
                    <p className="text-henna-600 text-sm">Use oil-based products for the first 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-henna-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-henna-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-henna-800 mb-1">Moisturize Regularly</h4>
                    <p className="text-henna-600 text-sm">Keep your skin moisturized to maintain color vibrancy</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-henna-100 to-gold-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-henna-600">
                  <FiHeart className="text-6xl mx-auto mb-4" />
                  <p className="text-lg font-medium">Aftercare Tips</p>
                  <p className="text-sm">Follow these steps for best results</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-henna-900 via-henna-800 to-gold-900">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ready for Beautiful Mehendi?
            </h2>
            <p className="text-xl text-gold-200 mb-8 max-w-3xl mx-auto">
              Book your consultation today and let's create a stunning henna design for your special occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Book Now
              </Link>
              <Link href="/gallery" className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MehendiServicesPage
