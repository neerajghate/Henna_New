'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiStar, FiUsers, FiAward, FiHeart } from 'react-icons/fi'
import HeroSection from '@/components/HeroSection'
import FeaturedWork from '@/components/FeaturedWork'
import ServicesPreview from '@/components/ServicesPreview'
import Testimonials from '@/components/Testimonials'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Featured Work */}
      <FeaturedWork />
      
      {/* Services Preview */}
      <ServicesPreview />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-henna-50 to-gold-50">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-henna-800 mb-6">
              Ready to Transform Your Special Day?
            </h2>
            <p className="text-xl text-henna-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let me help you create beautiful, lasting memories with professional henna art, 
              makeup, and hair styling services. Book your consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Book Consultation
                <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/gallery" className="btn-secondary inline-flex items-center">
                View Gallery
                <FiHeart className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
