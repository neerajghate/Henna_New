'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiStar, FiClock, FiUsers } from 'react-icons/fi'

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Mehendi (Henna)',
      description: 'Beautiful henna designs for all occasions with traditional and modern patterns',
      icon: '🎨',
      features: [
        'Bridal Mehendi Designs',
        'Arabic & Traditional Styles',
        'Custom Pattern Creation',
        'Natural Henna Paste',
        'Professional Application',
        'Aftercare Instructions'
      ],
      types: [
        'Arabic Mehendi',
        'Bridal Mehendi',
        'Roses Mehendi',
        'Color Mehendi',
        'Designer Mehendi',
        'Theme Mehendi',
        'Tattoo Mehendi',
        'Tribal Mehendi'
      ],
      pricing: {
        basic: '$60',
        premium: '$150',
        bridal: '$200+'
      },
      duration: '1-3 hours',
      href: '/services/mehendi'
    },
    {
      id: 2,
      title: 'Make Up',
      description: 'Professional makeup services for weddings, parties, and special events',
      icon: '✨',
      features: [
        'Bridal Makeup',
        'Party & Event Makeup',
        'Traditional Indian Makeup',
        'Photo Shoot Makeup',
        'Airbrush Techniques',
        'Long-lasting Formulas'
      ],
      types: [
        'Bridal Makeup',
        'Party Makeup',
        'Traditional Makeup',
        'Photo Shoot Makeup'
      ],
      pricing: {
        basic: '$80',
        premium: '$120',
        bridal: '$150+'
      },
      duration: '1-2 hours',
      href: '/services/makeup'
    },
    {
      id: 3,
      title: 'Hair Style',
      description: 'Elegant hair styling and saree draping to complete your perfect look',
      icon: '💇‍♀️',
      features: [
        'Bridal Hairstyles',
        'Traditional Hair Styling',
        'Saree Draping',
        'Hair Accessories',
        'Updos & Braids',
        'Hair Consultation'
      ],
      types: [
        'Bridal Hairstyles',
        'Traditional Styles',
        'Saree Draping',
        'Hair Accessories'
      ],
      pricing: {
        basic: '$50',
        premium: '$100',
        bridal: '$120+'
      },
      duration: '1-2 hours',
      href: '/services/hairstyle'
    }
  ]

  const packages = [
    {
      name: 'Bridal Complete Package',
      price: '$450',
      originalPrice: '$500',
      services: [
        'Full Bridal Mehendi (hands & feet)',
        'Bridal Makeup with trial',
        'Bridal Hair Styling',
        'Saree Draping',
        'Pre-wedding consultation',
        'Touch-ups on wedding day'
      ],
      popular: true
    },
    {
      name: 'Mehendi + Makeup Package',
      price: '$280',
      originalPrice: '$320',
      services: [
        'Full Mehendi Design',
        'Professional Makeup',
        'Hair Styling',
        'Consultation'
      ],
      popular: false
    },
    {
      name: 'Festival Special Package',
      price: '$180',
      originalPrice: '$220',
      services: [
        'Festival Mehendi Design',
        'Traditional Makeup',
        'Hair Styling',
        'Accessories Styling'
      ],
      popular: false
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
              Professional Beauty Services
            </h1>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed mb-8">
              From stunning henna art to professional makeup and elegant hair styling, 
              I provide complete beauty solutions for your special occasions
            </p>
            <Link href="/contact" className="btn-primary">
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-henna-100 h-full">
                  {/* Icon */}
                  <div className="text-6xl mb-6 text-center">
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-2xl font-playfair font-semibold text-henna-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-henna-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-henna-800 mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-henna-600">
                          <FiCheck className="text-henna-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Types */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-henna-800 mb-3">Service Types:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.types.map((type, typeIndex) => (
                        <span
                          key={typeIndex}
                          className="px-3 py-1 bg-henna-100 text-henna-700 rounded-full text-xs"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-henna-50 rounded-lg">
                    <h3 className="font-semibold text-henna-800 mb-2">Starting Prices:</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-henna-600">Basic:</span>
                        <span className="font-semibold text-henna-800">{service.pricing.basic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-henna-600">Premium:</span>
                        <span className="font-semibold text-henna-800">{service.pricing.premium}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-henna-600">Bridal:</span>
                        <span className="font-semibold text-henna-800">{service.pricing.bridal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center text-henna-600 mb-6">
                    <FiClock className="mr-2" />
                    <span className="text-sm">Duration: {service.duration}</span>
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Learn More
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Special Packages
            </h2>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed">
              Save more with our comprehensive packages designed for your special occasions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-white rounded-2xl p-8 shadow-lg card-hover border-2 h-full ${
                  pkg.popular ? 'border-gold-500' : 'border-henna-100'
                }`}>
                  <h3 className="text-2xl font-playfair font-semibold text-henna-800 mb-4">
                    {pkg.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <span className="text-4xl font-bold text-henna-800">{pkg.price}</span>
                      <span className="text-lg text-henna-400 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <p className="text-henna-600 text-sm">Save ${parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start text-henna-600">
                        <FiCheck className="text-henna-500 mr-3 mt-0.5 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                      pkg.popular
                        ? 'bg-gold-500 hover:bg-gold-600 text-white'
                        : 'btn-primary'
                    }`}
                  >
                    Book This Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-henna-800 mb-6">
              Ready to Book Your Service?
            </h2>
            <p className="text-lg text-henna-600 mb-8 max-w-2xl mx-auto">
              Contact me for a personalized consultation and let's create something beautiful together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary">
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
