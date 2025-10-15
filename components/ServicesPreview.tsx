'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiEdit3, FiStar, FiScissors } from 'react-icons/fi'

const ServicesPreview = () => {
  const services = [
    {
      iconName: 'palette',
      title: 'Mehendi (Henna)',
      description: 'Beautiful henna designs for all occasions including bridal, Arabic, and traditional styles',
      features: ['Bridal Mehendi', 'Arabic Designs', 'Traditional Patterns', 'Custom Designs'],
      href: '/services/mehendi',
      color: 'from-henna-500 to-henna-600'
    },
    {
      iconName: 'sparkles',
      title: 'Make Up',
      description: 'Professional makeup services for weddings, parties, and special events',
      features: ['Bridal Makeup', 'Party Makeup', 'Traditional Makeup', 'Photo Shoots'],
      href: '/services/makeup',
      color: 'from-gold-500 to-gold-600'
    },
    {
      iconName: 'scissors',
      title: 'Hair Style',
      description: 'Elegant hair styling and draping services to complete your look',
      features: ['Bridal Hairstyles', 'Traditional Styles', 'Saree Draping', 'Hair Accessories'],
      href: '/services/hairstyle',
      color: 'from-henna-600 to-gold-600'
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <FiEdit3 className="text-white text-2xl" />
      case 'sparkles':
        return <FiStar className="text-white text-2xl" />
      case 'scissors':
        return <FiScissors className="text-white text-2xl" />
      default:
        return <FiEdit3 className="text-white text-2xl" />
    }
  }

  return (
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
            Complete Beauty Services
          </h2>
          <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed">
            From stunning henna art to professional makeup and elegant hair styling, 
            I provide a complete beauty experience for your special occasions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-henna-100 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-henna-500 to-henna-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-playfair font-semibold text-henna-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-henna-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-henna-600">
                      <div className="w-2 h-2 bg-henna-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="btn-secondary w-full flex items-center justify-center group-hover:bg-henna-600 group-hover:text-white transition-all duration-300"
                >
                  Learn More
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-henna-50 to-gold-50 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-semibold text-henna-800 mb-4">
              Need Multiple Services?
            </h3>
            <p className="text-henna-600 mb-6">
              Get special packages for bridal services including henna, makeup, and hair styling
            </p>
            <Link href="/contact" className="btn-primary">
              Get Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
