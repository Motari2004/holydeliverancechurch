import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaArrowRight,
  FaCross
} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f1f12] text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaCross className="text-[#c9a84c] text-2xl" />
              <h4 className="text-xl font-serif text-[#c9a84c] font-semibold">
                Holy Deliverance
              </h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A place of worship, community, and spiritual growth in the heart of Ogembo.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f1f12] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f1f12] transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f1f12] transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f1f12] transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-[#c9a84c] mb-4 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-[#c9a84c] transition-colors flex items-center group"
                >
                  <FaArrowRight className="text-[#c9a84c] text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-[#c9a84c] transition-colors flex items-center group"
                >
                  <FaArrowRight className="text-[#c9a84c] text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-[#c9a84c] transition-colors flex items-center group"
                >
                  <FaArrowRight className="text-[#c9a84c] text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-[#c9a84c] transition-colors flex items-center group"
                >
                  <FaArrowRight className="text-[#c9a84c] text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-[#c9a84c] mb-4 font-semibold">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <HiOutlineMail className="text-[#c9a84c] text-xl mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 block text-xs">Email</span>
                  <a 
                    href="mailto:holydiference105@gmail.com" 
                    className="text-gray-300 hover:text-[#c9a84c] transition-colors"
                  >
                    holydiference105@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <HiOutlinePhone className="text-[#c9a84c] text-xl mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 block text-xs">Phone</span>
                  <a 
                    href="tel:01166252528" 
                    className="text-gray-300 hover:text-[#c9a84c] transition-colors"
                  >
                    011 662 52528
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <HiOutlineLocationMarker className="text-[#c9a84c] text-xl mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 block text-xs">Address</span>
                  <span className="text-gray-300">
                    P.O Box 62, H0204 Ogembo
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-serif text-[#c9a84c] mb-4 font-semibold">
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get updates about our services and events.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-[#1a2a1f] border border-gray-700 rounded-l-md focus:outline-none focus:border-[#c9a84c] text-sm text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="bg-[#c9a84c] text-[#0f1f12] px-4 py-2 rounded-r-md hover:bg-yellow-500 transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Holy Deliverance Church. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-[#c9a84c] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c9a84c] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-[#c9a84c] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}