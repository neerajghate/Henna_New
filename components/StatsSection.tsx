'use client'

import { motion } from 'framer-motion'
import { FiUsers, FiAward, FiHeart, FiStar } from 'react-icons/fi'

const StatsSection = () => {
  const stats = [
    {
      icon: FiUsers,
      number: '1000+',
      label: 'Happy Clients',
      color: 'text-henna-600'
    },
    {
      icon: FiAward,
      number: '18+',
      label: 'Years Experience',
      color: 'text-gold-600'
    },
    {
      icon: FiHeart,
      number: '500+',
      label: 'Weddings',
      color: 'text-henna-600'
    },
    {
      icon: FiStar,
      number: '5.0',
      label: 'Average Rating',
      color: 'text-gold-600'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-henna-800 mb-4">
            Trusted by Hundreds of Clients
          </h2>
          <p className="text-lg text-henna-600 max-w-2xl mx-auto">
            Experience the difference that comes with years of dedication and passion for henna art
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-henna-50 to-gold-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`text-2xl ${stat.color}`} />
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-henna-800 mb-2"
                >
                  {stat.number}
                </motion.div>
                
                <p className="text-henna-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
