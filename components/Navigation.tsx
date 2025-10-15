'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import Logo from './Logo'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Mehendi (Henna)', href: '/services/mehendi' },
        { name: 'Make Up', href: '/services/makeup' },
        { name: 'Hair Style', href: '/services/hairstyle' },
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About Me', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const mehendiTypes = [
    { name: 'Arabic Mehendi', href: '/services/mehendi/arabic' },
    { name: 'Bridal Mehendi', href: '/services/mehendi/bridal' },
    { name: 'Roses Mehendi', href: '/services/mehendi/roses' },
    { name: 'Color Mehendi', href: '/services/mehendi/color' },
    { name: 'Designer Mehendi', href: '/services/mehendi/designer' },
    { name: 'Theme Mehendi', href: '/services/mehendi/theme' },
    { name: 'Tattoo Mehendi', href: '/services/mehendi/tattoo' },
    { name: 'Tribal Mehendi', href: '/services/mehendi/tribal' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-henna-800 hover:text-henna-600 font-medium transition-colors">
              Home
            </Link>
            
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-henna-800 hover:text-henna-600 font-medium transition-colors"
                >
                  {item.name}
                  {item.submenu && <FiChevronDown className="ml-1 text-sm" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-henna-700 hover:bg-henna-50 hover:text-henna-800 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                      
                      {/* Mehendi Types Dropdown */}
                      {item.name === 'Services' && (
                        <div className="border-t border-gray-100">
                          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Mehendi Types
                          </div>
                          {mehendiTypes.map((type) => (
                            <Link
                              key={type.name}
                              href={type.href}
                              className="block px-6 py-2 text-sm text-henna-600 hover:bg-henna-50 hover:text-henna-800 transition-colors"
                            >
                              {type.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-henna-800 hover:text-henna-600 transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-max py-4">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block py-3 text-henna-800 hover:text-henna-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-3 text-henna-800 hover:text-henna-600 font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-sm text-henna-600 hover:text-henna-800 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
