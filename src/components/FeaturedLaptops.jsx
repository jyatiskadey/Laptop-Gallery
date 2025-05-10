"use client"

import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

const laptops = [
  {
    id: 1,
    name: "Dell XPS 13",
    description: 'Intel Core i7, 16GB RAM, 512GB SSD, 13.3" FHD Display',
    price: "$799",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    name: "MacBook Pro 2019",
    description: 'Intel Core i5, 8GB RAM, 256GB SSD, 13" Retina Display',
    price: "$899",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    description: 'Intel Core i7, 16GB RAM, 1TB SSD, 15.6" 4K Touch Display',
    price: "$849",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1",
    description: 'Intel Core i5, 16GB RAM, 512GB SSD, 14" FHD Display',
    price: "$749",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const FeaturedLaptops = () => {
  return (
    <section id="laptops" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Laptops
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Quality second-hand laptops in excellent condition
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {laptops.map((laptop, index) => (
            <motion.div
              key={laptop.id}
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                <img src={laptop.image || "/placeholder.svg"} alt={laptop.name} className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{laptop.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{laptop.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <p className="text-lg font-bold text-emerald-600">{laptop.price}</p>
                  <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.a
            href="#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            View All Laptops
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedLaptops
