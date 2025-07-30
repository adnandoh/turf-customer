'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Calendar, Users, Star, ArrowUp, Clock } from 'lucide-react'

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
        

      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Turf N Lonavala?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of world-class sports facilities and breathtaking mountain views
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Sport Facility</h3>
              <p className="text-gray-600">
                Cricket, football, basketball, pickleball, and badminton - all in one premium location
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Open round the clock for your convenience - play anytime that suits you
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scenic Location</h3>
              <p className="text-gray-600">
                Play amidst the beautiful hills of Lonavala with fresh mountain air and stunning views
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Chart Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Affordable Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Competitive rates for premium sports facilities
            </p>
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

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from sports enthusiasts who love playing at Turf N Lonavala
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Amazing facility with great lighting for night games. The cricket pitch is well-maintained and the mountain views make every game special!"
              </p>
              <div className="font-semibold">Rahul Sharma</div>
              <div className="text-sm text-gray-500">Cricket Enthusiast</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Perfect for our weekend football matches. The turf quality is excellent and the 24/7 availability is a huge plus for our group."
              </p>
              <div className="font-semibold">Priya Patel</div>
              <div className="text-sm text-gray-500">Football Player</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Love the multi-sport options! We play basketball and pickleball here regularly. Great location and friendly staff."
              </p>
              <div className="font-semibold">Amit Desai</div>
              <div className="text-sm text-gray-500">Sports Enthusiast</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Play?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your slot now and experience the best multi-sport facility in Lonavala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918468942754"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +91-8468942754
            </a>
            <a
              href="https://wa.me/918468942754?text=Hi, I want to book a slot at Turf N Lonavala!"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              WhatsApp Booking
            </a>
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