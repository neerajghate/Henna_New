'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import Image from 'next/image'
import mainHeroImage from '@/app/gallery/main image.webp'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-henna-50 via-white to-gold-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-henna-600 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gold-500 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-gold-600 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-henna-400 rounded-full"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-henna-100 text-henna-700 rounded-full text-sm font-medium mb-4">
                Professional Henna Artist
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-henna-800 leading-tight">
                Beautiful Henna Art for Your
                <span className="block text-gradient">Special Moments</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-henna-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              With 18+ years of experience, I specialize in creating stunning henna designs, 
              professional makeup, and elegant hair styling for weddings, celebrations, and special occasions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Book Your Session
                <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/gallery" className="btn-secondary inline-flex items-center justify-center">
                View My Work
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-henna-600"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-henna-500 rounded-full mr-2"></div>
                18+ Years Experience
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                Serving Denver, CO
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-henna-500 rounded-full mr-2"></div>
                Professional Services
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={mainHeroImage}
                  alt="Featured henna artwork"
                  placeholder="blur"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-henna-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                    <span className="text-gold-600 text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-henna-800">5.0 Rating</p>
                    <p className="text-xs text-henna-600">500+ Reviews</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-henna-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-henna-100 rounded-full flex items-center justify-center">
                    <span className="text-henna-600 text-lg">💎</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-henna-800">Premium Quality</p>
                    <p className="text-xs text-henna-600">Natural Ingredients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-henna-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-henna-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
