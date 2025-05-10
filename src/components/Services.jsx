"use client"

import { motion } from "framer-motion"
import { Cpu, HardDrive, RefreshCw, Settings, Shield, PenToolIcon as Tool, Zap, Database } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Computer Cleaning",
    description: "Professional cleaning of hardware components to improve performance and extend lifespan.",
    icon: <RefreshCw className="h-6 w-6" />,
  },
  {
    id: 2,
    name: "Computer Customization",
    description: "Personalize your computer with custom hardware and software configurations.",
    icon: <Settings className="h-6 w-6" />,
  },
  {
    id: 3,
    name: "Computer Upgrades",
    description: "Upgrade your existing hardware for better performance and capabilities.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    id: 4,
    name: "Custom Computer Building",
    description: "Build a custom computer tailored to your specific needs and requirements.",
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    id: 5,
    name: "Data Backup & Recovery",
    description: "Secure your important data with backup solutions and recover lost information.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    id: 6,
    name: "Hardware & Software Installation",
    description: "Professional installation of hardware components and software applications.",
    icon: <HardDrive className="h-6 w-6" />,
  },
  {
    id: 7,
    name: "Virus Removal & Protection",
    description: "Remove malware and set up protection to keep your computer secure.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    id: 8,
    name: "Troubleshooting & Repair",
    description: "Diagnose and fix hardware and software issues to get your computer running smoothly.",
    icon: <Tool className="h-6 w-6" />,
  },
]

const Services = ({ fullPage = false }) => {
  return (
    <section id="services" className={`py-12 ${fullPage ? "bg-white" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional computer services to keep your technology running smoothly
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-md text-emerald-600">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{service.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {fullPage && (
          <div className="mt-12 bg-emerald-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900">Need a Custom Service?</h3>
            <p className="mt-2 text-gray-600">
              Don't see what you're looking for? Contact us for custom computer services tailored to your specific
              needs.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
