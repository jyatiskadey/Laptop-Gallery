"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-emerald-800 to-emerald-600 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-20 px-6 lg:px-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2 z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Reliable Laptop Repair & <br />
            <span className="text-teal-300">Refurbished Devices</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional repairs, deep cleaning, upgrades, and premium second-hand laptops at unbeatable prices.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="#laptops"
              className="px-6 py-3 bg-white text-emerald-800 font-semibold rounded-md hover:bg-gray-100 transition"
            >
              Browse Laptops
            </Link>
            <Link
              href="#services"
              className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-md hover:bg-emerald-600 transition"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Video Section */}
        <div className="relative mt-12 lg:mt-0 lg:w-1/2">
          <motion.div
            className="w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <video
              className="w-full h-full object-cover"
              src="https://cdn.pixabay.com/video/2023/01/09/145864-787701151_tiny.mp4" // Place this video inside the public/videos folder
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </div>
      </div>

      {/* Overlay effect (optional) */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </section>
  )
}

export default Hero
