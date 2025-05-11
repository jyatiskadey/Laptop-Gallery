"use client"

import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

const laptops = [
  {
    id: 1,
    name: "Dell XPS 13",
    description: 'Intel Core i7, 16GB RAM, 512GB SSD, 13.3" FHD Display',
    price: "$799",
    image: "https://microless.com/cdn/products/9ab6a5ad2e3f47c9cb1e569a404983ce-hi.jpg",
  },
  {
    id: 2,
    name: "MacBook Pro 2019",
    description: 'Intel Core i5, 8GB RAM, 256GB SSD, 13" Retina Display',
    price: "$899",
    image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111945_sp799-mbp13touch-space.jpg",
  },
  {
    id: 3,
    name: "HP Spectre x360",
    description: 'Intel Core i7, 16GB RAM, 1TB SSD, 15.6" 4K Touch Display',
    price: "$849",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSj7K3mf7L6ve8CV5fKHcyEj3d2z7rXhsYW8HnNg67iRaJ6Zbm3jpIHLT_O0ZvkogyPXXT1NPJLz-r39zt79bWqRA1i48HcXuD1bE1MLsnlPjvPpPyqpn44",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1",
    description: 'Intel Core i5, 16GB RAM, 512GB SSD, 14" FHD Display',
    price: "$749",
    image: "https://p3-ofp.static.pub//fes/cms/2025/03/28/owwp0je9qq36queobpv7jlk86xqwd2321070.png",
  },
]

const FeaturedLaptops = () => {
  return (
    <section id="laptops" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-[#046c4e] sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Featured Laptops
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4"
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
                <img
                  src={laptop.image || "/placeholder.svg"}
                  alt={laptop.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-[#046c4e]">{laptop.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{laptop.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  {/* <p className="text-lg font-bold text-[#11a683]">{laptop.price}</p> */}
                  {/* <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-[#046c4e] hover:bg-[#11a683] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046c4e]">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Details
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-10 text-center">
          <motion.a
            href="#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#046c4e] hover:bg-[#11a683] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046c4e]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            View All Laptops
          </motion.a>
        </div> */}
      </div>
    </section>
  )
}

export default FeaturedLaptops
