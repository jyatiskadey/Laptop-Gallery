"use client"

import { motion } from "framer-motion"
import Gallery from "./Gallery"

const GalleryPage = () => {
  return (
    <section id="gallery-page" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Gallery
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our complete collection of laptops, services, and custom builds
          </motion.p>
        </div>

        <Gallery fullPage={true} />
      </div>
    </section>
  )
}

export default GalleryPage
