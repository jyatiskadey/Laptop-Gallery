"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ZoomIn, X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: "https://5.imimg.com/data5/SELLER/Default/2022/3/BJ/UM/GD/4697972/laptop-repairing-service-500x500.jpg",
    alt: "Laptop repair service",
    category: "service",
  },
  {
    id: 2,
    src: "https://images.indianexpress.com/2023/10/hp-refurbished-laptops.jpg?w=414",
    alt: "Premium refurbished laptop",
    category: "laptop",
  },
  {
    id: 3,
    src: "https://5.imimg.com/data5/SELLER/Default/2022/8/QH/GQ/RP/3894261/computer-cleaning-services-250x250.webp",
    alt: "Computer cleaning service",
    category: "service",
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4KXwmenbiPXgZN_nojJ44FT8jLSii9Er7A&s",
    alt: "Custom built PC",
    category: "custom",
  },
  {
    id: 5,
    src: "https://store.infotroop.co.in/product-images/DR.jpg/134577000001826001/800x800",
    alt: "Data recovery service",
    category: "service",
  },
  {
    id: 6,
    src: "https://5.imimg.com/data5/SELLER/Default/2024/3/395087114/YJ/UQ/HI/193303474/hardware-installation-services-500x500.webp",
    alt: "Hardware installation",
    category: "service",
  },
]

// Additional images for the full gallery page
const additionalImages = [
  {
    id: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-gKJeJqXUomQH99VlByEfg3j_EINrKwUnw&s",
    alt: "Laptop upgrade service",
    category: "service",
  },
  {
    id: 8,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXl2dXFn5orqf7yGCJx4zB8MVeJx90X-VWEg&s",
    alt: "MacBook Pro refurbished",
    category: "laptop",
  },
  {
    id: 9,
    src: "https://www.srijishnucommunications.com/wp-content/uploads/2023/06/maxresdefault-5-1024x576.jpg",
    alt: "Computer virus removal",
    category: "service",
  },
  {
    id: 10,
    src: "https://5.imimg.com/data5/RO/RA/JE/SELLER-3866941/gaming-desktop-pc.jpg",
    alt: "Custom gaming PC",
    category: "custom",
  },
  {
    id: 11,
    src: "https://3.imimg.com/data3/MT/UI/MY-21273847/1.png",
    alt: "Laptop screen replacement",
    category: "service",
  },
  {
    id: 12,
    src: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0609475_963546.jpg",
    alt: "SSD installation service",
    category: "service",
  },
]

const GalleryImage = ({ image, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-md group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <p className="font-medium">{image.alt}</p>
          <button
            onClick={() => onClick(image)}
            className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none"
          >
            <ZoomIn className="h-4 w-4 mr-1" />
            View
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const Gallery = ({ limit = 6, fullPage = false }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const displayImages = fullPage ? [...galleryImages, ...additionalImages] : galleryImages.slice(0, limit)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className={`py-12 ${fullPage ? "bg-white" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Gallery
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {fullPage
              ? "Browse our collection of laptops, services, and custom builds"
              : "Take a look at some of our laptops and services"}
          </motion.p>
        </div>

        {fullPage && (
          <div className="mt-8 mb-10">
            <div className="flex flex-wrap justify-center gap-4">
              {/* <button className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">All</button>
              <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">Laptops</button>
              <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">Services</button>
              <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">Custom Builds</button> */}
            </div>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayImages.map((image) => (
            <GalleryImage key={image.id} image={image} onClick={handleImageClick} />
          ))}
        </div>

        {!fullPage && (
          <div className="mt-10 text-center">
            {/* <motion.button
              onClick={() => document.getElementById("gallerypage").scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              View More
            </motion.button> */}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75" onClick={closeModal}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white bg-emerald-600 rounded-full p-2 hover:bg-emerald-700"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </button>
              <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} className="w-full rounded-lg" />
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-lg font-medium text-gray-900">{selectedImage.alt}</h3>
                <p className="text-gray-500 mt-1">Category: {selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
