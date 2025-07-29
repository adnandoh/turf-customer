'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, Users, Star, ArrowUp } from 'lucide-react'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white min-h-[calc(100vh-64px)] flex items-center">
        {/* Gradient background */}
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgb(56, 142, 60) 0%, rgb(102, 187, 106) 100%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
          <div className="flex flex-col items-start py-12 md:py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">Lonavala's Premier<br className="hidden sm:block" />Multi-Sport Destination</h1>
            <p className="text-lg sm:text-xl mb-8 md:mb-10 max-w-xl">
              Experience cricket, football, basketball, pickleball, and badminton amidst scenic mountain views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
              <a
                href="tel:+918468942754"
                className="bg-white text-primary px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md text-center"
              >
                Book Now
              </a>
              <a
                href="https://www.google.com/maps/dir//Gat+no+69+%2F32,+Turf+N+Lonavala,+Railway+station,+boraj+road,+near+Malavli,+Malavli,+Lonavala,+Maharashtra+410401/@18.9092996,72.509654,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2ab70d00a1c5f:0xe9c8a48745dd469c!2m2!1d73.4836373!2d18.745212?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors text-center"
              >
                View Location
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating buttons for quick contact */}
        <div className="floating-buttons">
          <a href="tel:+918468942754" className="floating-btn bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a href="https://wa.me/918468942754?text=Hi,%20I%20want%20to%20book%20a%20slot%20at%20Turf%20N%20Lonavala!" target="_blank" rel="noopener noreferrer" className="floating-btn bg-green-600 text-white hover:bg-green-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Rate Chart Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rate Chart
            </h2>

          </div>
          
          {/* Mobile-friendly rate cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:hidden">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-primary text-white p-4 text-center font-semibold">
                Monday - Thursday
              </div>
              <div className="p-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Time Slot:</span>
                  <span className="font-medium">6:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">1 Hour</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Charges:</span>
                  <span className="inline-block bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">₹800</span>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-primary text-white p-4 text-center font-semibold">
                Monday - Thursday
              </div>
              <div className="p-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Time Slot:</span>
                  <span className="font-medium">6:00 PM - 6:00 AM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">1 Hour</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Charges:</span>
                  <span className="inline-block bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">₹1100</span>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-primary text-white p-4 text-center font-semibold">
                Friday - Sunday
              </div>
              <div className="p-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Time Slot:</span>
                  <span className="font-medium">6:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">1 Hour</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Charges:</span>
                  <span className="inline-block bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">₹600</span>
                </div>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-primary text-white p-4 text-center font-semibold">
                Friday - Sunday
              </div>
              <div className="p-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Time Slot:</span>
                  <span className="font-medium">6:00 PM - 6:00 AM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">1 Hour</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Charges:</span>
                  <span className="inline-block bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">₹800</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop table view */}
          <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-primary text-white p-4 text-center font-semibold">Time Slot</th>
                    <th className="bg-primary text-white p-4 text-center font-semibold">Duration</th>
                    <th className="bg-primary text-white p-4 text-center font-semibold">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-center">6:00 AM - 6:00 PM (Mon-Thu)</td>
                    <td className="p-4 text-center">1 hour</td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">₹800</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 text-center">6:00 PM - 6:00 AM (Mon-Thu)</td>
                    <td className="p-4 text-center">1 hour</td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">₹1100</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 text-center">6:00 AM - 6:00 PM (Fri-Sun)</td>
                    <td className="p-4 text-center">1 hour</td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">₹600</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 text-center">6:00 PM - 6:00 AM (Fri-Sun)</td>
                    <td className="p-4 text-center">1 hour</td>
                    <td className="p-4 text-center">
                      <span className="inline-block bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">₹800</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>



      {/* Scroll to top button */}
      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  )
}