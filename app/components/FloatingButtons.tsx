'use client'

import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingButtons = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined') {
      window.open('tel:+918468942754', '_self')
    }
  }

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined') {
      window.open('https://wa.me/918468942754?text=Hi, I want to book a slot at Turf N Lonavala!', '_blank')
    }
  }

  return (
    <div className="floating-buttons">
      <button
        onClick={handleCall}
        className="floating-btn bg-blue-600 text-white hover:bg-blue-700"
        aria-label="Call us"
      >
        <Phone size={24} />
      </button>
      <button
        onClick={handleWhatsApp}
        className="floating-btn bg-green-600 text-white hover:bg-green-700"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  )
}

export default FloatingButtons