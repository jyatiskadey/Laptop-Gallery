"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FeaturedLaptops from "./components/FeaturedLaptops"
import Services from "./components/Services"
import Reviews from "./components/Reviews"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const [activePage, setActivePage] = useState("home")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {activePage === "home" && (
        <>
          <Hero />
          <FeaturedLaptops />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Services />
          </motion.div>
          <Reviews />
        </>
      )}

      {activePage === "about" && <About />}
      {activePage === "services" && <Services fullPage={true} />}
      {activePage === "contact" && <Contact />}

      <Footer />
    </div>
  )
}

export default App
