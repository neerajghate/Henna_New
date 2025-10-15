'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  }

  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Henna-inspired decorative element */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-henna-600 rounded-full opacity-60"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 rounded-full opacity-40"></div>
        
        {/* Main logo text */}
        <motion.h1 
          className={`${sizeClasses[size]} font-playfair font-bold text-henna-800 relative z-10`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-gradient">RS</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-xs text-henna-600 font-lato font-medium tracking-wider mt-1 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          HENNA ARTIST
        </motion.p>
        
        {/* Decorative line */}
        <motion.div 
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-henna-600 to-gold-600"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}

export default Logo
