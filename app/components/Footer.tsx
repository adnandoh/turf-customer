'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-800 pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* TurfBook Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">TurfBook</h3>
            <p className="text-gray-600 mb-4">
              Connecting cricket and pickleball enthusiasts with the perfect turf fields for their games and events.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/918468942754" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a 
                href="https://facebook.com/turfnlonavala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/turfnlonavala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+918468942754" className="text-gray-600 hover:text-primary transition-colors">
                  +91 84689 42754
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Turf N Lonavala, Gat no 69/32, Railway station, boraj road, near Malavli, Malavli, Lonavala, Maharashtra 410401
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/amenities" className="text-gray-600 hover:text-primary transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-600 hover:text-primary transition-colors">
                  Booking Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 mb-2">
            &copy; {currentYear} TurfBook. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" fill="currentColor" /> for cricket and pickleball enthusiasts
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer