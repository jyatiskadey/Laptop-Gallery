import { Facebook, Instagram, Laptop, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from 'next/image';
import logo from "../image/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              {/* <Laptop className="h-8 w-8 text-emerald-400" /> */}
              <Image src={logo} alt="" height={100} width={100} />

              <span className="ml-2 text-xl font-bold">Laptop Gallery</span>
            </div>
            <p className="mt-4 text-gray-300">
              Your trusted source for quality second-hand laptops and professional computer services.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Computer Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Computer Customization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Computer Upgrades
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Data Recovery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Hardware Installation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="ml-3 text-gray-300">
                Sainik Market, Near High Street
                  <br />
                  Main Road-834001
                </span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="ml-3 text-gray-300">
                hr complex, Kadru Main Rd, Kadru,
                  <br />
                  Ranchi, Jharkhand 834002
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="ml-3 text-gray-300"> +91 9693047905</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="ml-3 text-gray-300"> +91 087895 97898
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="ml-3 text-gray-300">info@laptopgallery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
  <p>&copy; {new Date().getFullYear()} Laptop Gallery. All rights reserved.</p>
  <p className="mt-2 text-sm">
    Developed & Designed by{" "}
    <a
      href="https://ranchiitsolutions.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white font-semibold hover:underline"
    >
      Ranchi IT Solutions
    </a>
  </p>
</div>


      </div>
    </footer>
  )
}

export default Footer
