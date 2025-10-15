'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiAward, FiHeart, FiUsers, FiMapPin, FiStar, FiCalendar } from 'react-icons/fi'

const AboutPage = () => {
  const achievements = [
    {
      icon: FiAward,
      title: '18+ Years Experience',
      description: 'Over 18 years of dedicated practice in henna art and beauty services'
    },
    {
      icon: FiUsers,
      title: '1000+ Happy Clients',
      description: 'Served hundreds of satisfied clients across Denver and surrounding areas'
    },
    {
      icon: FiStar,
      title: '5.0 Rating',
      description: 'Consistently rated 5 stars by clients for quality and service'
    },
    {
      icon: FiHeart,
      title: 'Passion for Art',
      description: 'Deep passion for henna art and helping clients create beautiful memories'
    }
  ]

  const timeline = [
    {
      year: '2005',
      title: 'Started Henna Journey',
      description: 'Began my passion for henna art and started practicing traditional designs'
    },
    {
      year: '2010',
      title: 'Professional Services',
      description: 'Started offering professional henna services for weddings and special events'
    },
    {
      year: '2015',
      title: 'Expanded Services',
      description: 'Added makeup and hair styling services to provide complete beauty solutions'
    },
    {
      year: '2020',
      title: 'Digital Presence',
      description: 'Enhanced online presence and started offering virtual consultations'
    },
    {
      year: '2023',
      title: 'Current Success',
      description: 'Continuing to serve clients with dedication and expanding my portfolio'
    }
  ]

  const clients = [
    'Rani Mukherjee',
    'Kajol',
    'Hema Malini',
    'Kareena Kapoor',
    'Birlas Family'
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-henna-50 to-gold-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-henna-800 mb-6">
                About Rita Sheth
              </h1>
              <p className="text-xl text-henna-600 leading-relaxed mb-8">
                Welcome to my world of henna art and beauty! With over 18 years of experience, 
                I've had the privilege of creating beautiful memories for countless clients 
                through my passion for henna art, makeup, and hair styling.
              </p>
              <Link href="/contact" className="btn-primary">
                Get to Know Me Better
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-henna-200 to-gold-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-henna-600">
                  <div className="w-24 h-24 mx-auto mb-4 border-4 border-henna-400 rounded-full flex items-center justify-center">
                    <span className="text-3xl">👩‍🎨</span>
                  </div>
                  <p className="text-lg font-medium">Rita Sheth</p>
                  <p className="text-sm">Professional Henna Artist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
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
              My Story
            </h2>
            <p className="text-xl text-henna-600 max-w-4xl mx-auto leading-relaxed">
              Creativity flows from my mind to my hands and the cone starts plotting a new paradigm 
              on the hands of the bride. This is my passion, my art, and my way of celebrating your special moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-playfair font-semibold text-henna-800 mb-6">
                The Beginning of My Journey
              </h3>
              <div className="space-y-4 text-henna-600 leading-relaxed">
                <p>
                  My journey with henna began over 18 years ago when I discovered the beauty and artistry 
                  of traditional Indian henna designs. What started as a hobby quickly became a passion 
                  that has defined my career and brought joy to countless clients.
                </p>
                <p>
                  Based in Denver, Colorado, I specialize in creating beautiful henna designs for all 
                  occasions - from intimate family gatherings to grand wedding celebrations. Each design 
                  is carefully crafted to reflect the client's personality and the significance of their occasion.
                </p>
                <p>
                  Over the years, I've had the honor of working with celebrities and notable families, 
                  including members of the glamour industry and business leaders. These experiences have 
                  only deepened my commitment to excellence and innovation in my craft.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-henna-100 to-gold-100 rounded-2xl p-8">
                <h4 className="text-xl font-playfair font-semibold text-henna-800 mb-4">
                  Notable Clients
                </h4>
                <div className="space-y-3">
                  {clients.map((client, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-henna-500 rounded-full"></div>
                      <span className="text-henna-700 font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              My Achievements
            </h2>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed">
              Years of dedication and passion have led to these meaningful milestones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-henna-500 to-gold-500 rounded-full flex items-center justify-center">
                  <achievement.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-henna-800 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-henna-600 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              My Journey
            </h2>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed">
              A timeline of my growth and evolution as a henna artist and beauty professional
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-henna-500 to-gold-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-henna-100">
                      <div className="flex items-center mb-3">
                        <FiCalendar className="text-henna-600 mr-2" />
                        <span className="text-2xl font-bold text-henna-800">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-playfair font-semibold text-henna-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-henna-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 bg-gradient-to-r from-henna-500 to-gold-500 rounded-full border-4 border-white shadow-lg flex-shrink-0 z-10"></div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gradient-to-br from-henna-900 via-henna-800 to-gold-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
                My Philosophy
              </h2>
              <div className="space-y-4 text-gold-200 leading-relaxed">
                <p>
                  Every henna design tells a story, and every client's story is unique. 
                  I believe in creating not just beautiful art, but meaningful experiences 
                  that celebrate life's special moments.
                </p>
                <p>
                  My approach combines traditional techniques with modern innovation, 
                  ensuring each design is both authentic and contemporary. I take pride 
                  in using only the finest natural ingredients and maintaining the highest 
                  standards of hygiene and safety.
                </p>
                <p>
                  Whether it's a bride's special day, a festival celebration, or any 
                  other occasion, I'm committed to making your experience memorable 
                  and your design perfect.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gold-400 to-henna-400 rounded-full flex items-center justify-center">
                  <FiHeart className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
                  Passion & Dedication
                </h3>
                <p className="text-gold-200 leading-relaxed">
                  Every design is created with love, attention to detail, and a deep 
                  understanding of the cultural significance behind henna art.
                </p>
              </div>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-henna-800 mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl text-henna-600 mb-8 max-w-3xl mx-auto">
              I'd love to hear about your vision and help bring it to life. 
              Let's discuss how we can make your special occasion even more memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
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

export default AboutPage
