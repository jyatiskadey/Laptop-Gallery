"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Laptop Gallery
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your trusted source for quality second-hand laptops and professional computer services
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Laptop Gallery was founded in 2015 with a simple mission: to provide affordable, high-quality
                refurbished laptops and expert computer services to our community.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small repair shop has grown into a trusted business serving thousands of satisfied
                customers. We take pride in our work and stand behind every laptop we sell and service we provide.
              </p>
              <p className="text-gray-600">
                Our team consists of certified technicians with years of experience in the computer industry. We're
                passionate about technology and committed to helping our customers find the perfect solutions for their
                needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-900">Quality Assurance</strong> - All our laptops undergo rigorous
                    testing and come with a warranty.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-900">Expert Technicians</strong> - Our certified team has years of
                    experience in computer repair and customization.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-900">Affordable Pricing</strong> - We offer competitive prices on all
                    our products and services.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-900">Customer Satisfaction</strong> - Our 5-star reviews speak to our
                    commitment to excellence.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">
                    <strong className="text-gray-900">Eco-Friendly</strong> - By refurbishing laptops, we help reduce
                    electronic waste.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 bg-emerald-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              At Laptop Gallery, our mission is to bridge the digital divide by providing affordable, high-quality
              technology solutions. We believe everyone deserves access to reliable computing equipment and services,
              regardless of budget constraints. Through our commitment to quality refurbishment, expert repairs, and
              personalized service, we aim to extend the lifecycle of technology while reducing electronic waste.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
