'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiFilter, FiX, FiDownload, FiHeart } from 'react-icons/fi'

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const categories = [
    { id: 'all', name: 'All Work', count: 48 },
    { id: 'bridal', name: 'Bridal Mehendi', count: 12 },
    { id: 'arabic', name: 'Arabic Mehendi', count: 8 },
    { id: 'traditional', name: 'Traditional', count: 10 },
    { id: 'festival', name: 'Festival', count: 8 },
    { id: 'makeup', name: 'Makeup', count: 6 },
    { id: 'hairstyle', name: 'Hair Styling', count: 4 }
  ]

  const galleryImages = [
    {
      id: 1,
      title: 'Bridal Mehendi - Intricate Hand Design',
      category: 'bridal',
      image: '/api/placeholder/400/300',
      description: 'Beautiful bridal mehendi with intricate patterns covering the full hand and arm',
      likes: 42
    },
    {
      id: 2,
      title: 'Arabic Mehendi - Flowing Patterns',
      category: 'arabic',
      image: '/api/placeholder/400/300',
      description: 'Elegant Arabic style mehendi with flowing lines and floral motifs',
      likes: 38
    },
    {
      id: 3,
      title: 'Traditional Indian Design',
      category: 'traditional',
      image: '/api/placeholder/400/300',
      description: 'Classic traditional Indian mehendi patterns with cultural significance',
      likes: 35
    },
    {
      id: 4,
      title: 'Diwali Festival Mehendi',
      category: 'festival',
      image: '/api/placeholder/400/300',
      description: 'Vibrant festival mehendi design perfect for Diwali celebrations',
      likes: 29
    },
    {
      id: 5,
      title: 'Bridal Makeup Look',
      category: 'makeup',
      image: '/api/placeholder/400/300',
      description: 'Stunning bridal makeup with traditional Indian elements',
      likes: 45
    },
    {
      id: 6,
      title: 'Elegant Bridal Hairstyle',
      category: 'hairstyle',
      image: '/api/placeholder/400/300',
      description: 'Beautiful bridal hairstyle with traditional accessories',
      likes: 33
    },
    {
      id: 7,
      title: 'Roses Mehendi Design',
      category: 'traditional',
      image: '/api/placeholder/400/300',
      description: 'Romantic rose patterns in traditional mehendi style',
      likes: 27
    },
    {
      id: 8,
      title: 'Color Mehendi for Festival',
      category: 'festival',
      image: '/api/placeholder/400/300',
      description: 'Colorful henna design for special celebrations',
      likes: 31
    }
  ]

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              Portfolio Gallery
            </h1>
            <p className="text-xl text-henna-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore my collection of henna art, makeup, and hair styling work. 
              Each piece is crafted with love and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section-padding bg-white border-b border-henna-100">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-henna-400" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-henna-200 rounded-lg focus:ring-2 focus:ring-henna-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-henna-600 text-white'
                      : 'bg-henna-100 text-henna-700 hover:bg-henna-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-henna-200 to-gold-200 flex items-center justify-center">
                        <div className="text-center text-henna-600">
                          <div className="w-16 h-16 mx-auto mb-3 border-2 border-henna-400 rounded-full flex items-center justify-center">
                            <span className="text-2xl">🎨</span>
                          </div>
                          <p className="text-sm font-medium">Gallery Image</p>
                        </div>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                            <FiHeart className="text-lg" />
                          </button>
                          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                            <FiDownload className="text-lg" />
                          </button>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-white/90 text-henna-700 rounded-full text-xs font-medium capitalize">
                          {image.category}
                        </span>
                      </div>

                      {/* Likes */}
                      <div className="absolute top-3 right-3">
                        <div className="flex items-center space-x-1 px-2 py-1 bg-white/90 rounded-full">
                          <FiHeart className="text-henna-600 text-sm" />
                          <span className="text-xs font-medium text-henna-700">{image.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-henna-800 mb-2 line-clamp-2">
                        {image.title}
                      </h3>
                      <p className="text-sm text-henna-600 line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-henna-800 mb-2">No images found</h3>
              <p className="text-henna-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-henna-600 hover:bg-white transition-colors"
              >
                <FiX className="text-xl" />
              </button>

              {/* Image */}
              <div className="h-96 bg-gradient-to-br from-henna-200 to-gold-200 flex items-center justify-center">
                <div className="text-center text-henna-600">
                  <div className="w-24 h-24 mx-auto mb-4 border-2 border-henna-400 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <p className="text-lg font-medium">Full Size Image</p>
                  <p className="text-sm">Beautiful henna work showcase</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-playfair font-semibold text-henna-800 mb-2">
                      {selectedImage.title}
                    </h2>
                    <span className="inline-block px-3 py-1 bg-henna-100 text-henna-700 rounded-full text-sm font-medium capitalize">
                      {selectedImage.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiHeart className="text-henna-600" />
                    <span className="text-henna-600 font-medium">{selectedImage.likes}</span>
                  </div>
                </div>

                <p className="text-henna-600 leading-relaxed mb-6">
                  {selectedImage.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-henna-600 hover:bg-henna-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    <FiHeart className="mr-2" />
                    Like This Work
                  </button>
                  <button className="flex-1 bg-transparent border-2 border-henna-600 text-henna-600 hover:bg-henna-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <FiDownload className="mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-henna-900 via-henna-800 to-gold-900">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Love What You See?
            </h2>
            <p className="text-xl text-gold-200 mb-8 max-w-3xl mx-auto">
              Let's create something beautiful together for your special occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Book Your Session
              </a>
              <a href="/services" className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
