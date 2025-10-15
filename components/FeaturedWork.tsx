'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiEye } from 'react-icons/fi'
import Image from 'next/image'

const FeaturedWork = () => {
  const featuredItems = [
    {
      id: 1,
      title: 'Bridal Mehendi Collection',
      category: 'Bridal',
      image: '/api/placeholder/400/300',
      description: 'Intricate bridal henna designs that tell your unique love story',
      price: 'Starting at $200'
    },
    {
      id: 2,
      title: 'Arabic Mehendi Patterns',
      category: 'Arabic',
      image: '/api/placeholder/400/300',
      description: 'Elegant Arabic-style henna with flowing patterns and motifs',
      price: 'Starting at $80'
    },
    {
      id: 3,
      title: 'Festival Special Collection',
      category: 'Festival',
      image: '/api/placeholder/400/300',
      description: 'Vibrant henna designs perfect for Diwali, Eid, and celebrations',
      price: 'Starting at $60'
    }
  ]

  return (
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
            Featured Work
          </h2>
          <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed">
            Explore some of my most popular henna designs and see the artistry that makes each piece unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-henna-200 to-gold-200 flex items-center justify-center">
                    <div className="text-center text-henna-600">
                      <div className="w-16 h-16 mx-auto mb-3 border-2 border-henna-400 rounded-full flex items-center justify-center">
                        <span className="text-xl">🎨</span>
                      </div>
                      <p className="text-sm font-medium">Featured Image</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={`/gallery?category=${item.category.toLowerCase()}`}
                      className="btn-primary flex items-center"
                    >
                      <FiEye className="mr-2" />
                      View Gallery
                    </Link>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-henna-700 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-henna-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-henna-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-henna-700">
                      {item.price}
                    </span>
                    <Link
                      href="/contact"
                      className="text-henna-600 hover:text-henna-800 transition-colors duration-300 flex items-center"
                    >
                      Book Now
                      <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/gallery" className="btn-secondary inline-flex items-center">
            View Complete Gallery
            <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedWork
