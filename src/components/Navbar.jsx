"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import logo from "../image/logo.png"
import Image from "next/image"

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Gallery", id: "gallery" },
  { name: "Services", id: "services" },
  { name: "Contact Us", id: "contact" },
]

const Navbar = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="mb-8">

    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-sm transition-all mb- ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" height={40} width={40} className="rounded-full" />
            <span className="text-lg font-semibold text-emerald-700 tracking-tight">Laptop Gallery</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center mb-">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                  activePage === item.id
                    ? "bg-emerald-100 text-emerald-700"
                    : "text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                    activePage === item.id
                      ? "bg-emerald-100 text-emerald-700"
                      : "text-gray-800 hover:bg-gray-100 hover:text-emerald-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </div>

  )
}

export default Navbar
