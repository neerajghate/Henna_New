'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Bridal Mehendi', href: '/services/mehendi/bridal' },
    { name: 'Arabic Mehendi', href: '/services/mehendi/arabic' },
    { name: 'Make Up', href: '/services/makeup' },
    { name: 'Hair Styling', href: '/services/hairstyle' },
  ]

  return (
    <footer className="bg-gradient-to-br from-henna-900 via-henna-800 to-gold-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Logo size="sm" className="mb-6" />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional henna artist Rita Sheth with 18+ years of experience. 
                Celebrating your special moments with beautiful Indian art in Denver, CO.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-6 text-gold-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-6 text-gold-400">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-playfair font-semibold mb-6 text-gold-400">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-gold-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Denver, Colorado<br />
                    United States
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-gold-400" />
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    (123) 456-7890
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-gold-400" />
                  <a 
                    href="mailto:rita.sheth@example.com" 
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    rita.sheth@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rita Sheth - Mehendi Artisan. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
