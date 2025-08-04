'use client'

import { useState, useEffect } from 'react'
import { Phone, ArrowUp } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollToTop } = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [])

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
    <>
      {/* Floating Action Buttons */}
      <div className="fixed right-4 bottom-20 md:bottom-6 flex flex-col gap-3 z-50">
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 md:w-14 md:h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </button>
        )}
        
        {/* Call Button */}
        <button
          onClick={handleCall}
          className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Call us"
        >
          <Phone size={20} className="group-hover:animate-pulse" />
        </button>
        
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="w-12 h-12 md:w-14 md:h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="WhatsApp us"
        >
          <FaWhatsapp size={20} className="group-hover:animate-pulse" />
        </button>
      </div>
    </>
  )
}

export default FloatingButtons