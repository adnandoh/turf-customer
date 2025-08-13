'use client'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative lg:min-h-[calc(100vh-64px)] flex items-start pt-12 md:pt-16">
      {/* Light gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-green-50 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 md:py-12 lg:py-20">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center items-start lg:pr-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold mb-6 text-gray-900">
              Play Cricket & Football, Any Hour - Sports Turf in Lonavala
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-600">
              Two all-weather grounds for cricket, football. Easy hassle free <strong className="text-gray-800">turf booking</strong> in seconds and full refund up to 6 hours before play. No questions asked!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="tel:+918468942754"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors shadow-lg text-center transform hover:scale-105"
              >
                Book Now
              </a>
              <a
                href="tel:+918468942754"
                className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
              >
                Call +91 84689 42754
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/gallery/hero-sports-turf-lonavala.webp"
              alt="Turf N Group - Sports Facility in Lonavala"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection