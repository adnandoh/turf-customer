import type { Metadata } from 'next'
import Image from 'next/image'
import { Zap, Users, Car, Wifi, Coffee, Shield, Clock, Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Amenities - Turf N Lonavala',
  description: 'Discover our world-class amenities including premium turf, professional lighting, multi-sport facilities for cricket, football, basketball, pickleball, badminton and more at Turf N Lonavala.',
}

export default function Amenities() {
  const amenities = [
    {
      icon: <Zap size={32} />,
      title: 'LED Floodlights',
      description: 'High-quality LED floodlights for perfect visibility during evening games'
    },
    {
      icon: <Users size={32} />,
      title: 'Multi-Sport Utility',
      description: 'Facilities for cricket, football, basketball, pickleball, and badminton'
    },
    {
      icon: <Car size={32} />,
      title: 'Ample Parking',
      description: 'Secure parking space for cars and two-wheelers'
    },
    {
      icon: <Wifi size={32} />,
      title: '24/7 Booking',
      description: 'Book your slot anytime with our 24/7 online booking system'
    },
    {
      icon: <Coffee size={32} />,
      title: 'Refreshment Area',
      description: 'Snacks and beverages available to keep you energized'
    },
    {
      icon: <Shield size={32} />,
      title: 'Security',
      description: '24/7 security and CCTV surveillance for your safety'
    },
    {
      icon: <Clock size={32} />,
      title: '24-Hour Access',
      description: 'Open 24 hours to suit your schedule, day or night'
    },
    {
      icon: <Droplets size={32} />,
      title: 'Nets Around Turf',
      description: 'Safety nets surrounding the turf to contain balls during play'
    }
  ]

  return (
    <div className="pt-16">

      {/* Turf Quality Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Artificial Turf
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art artificial turf is designed to provide the perfect 
                playing surface for cricket, football, basketball, pickleball, badminton and other sports. 
                With two 5000 sq. ft. turfs (approximately 7v7 football or 8-12 players for cricket), 
                the high-quality synthetic grass offers excellent ball control and player safety.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">FIFA-approved artificial grass for professional feel</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Shock-absorbing base layer for injury prevention</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">All-weather surface suitable for year-round play</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Regular maintenance for optimal playing conditions</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
                alt="Premium artificial turf"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a perfect sports experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=600&h=400&fit=crop"
                alt="Professional lighting system"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional LED Lighting System
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced LED floodlights ensure perfect visibility for evening 
                and night games. The lights are strategically positioned to eliminate 
                shadows and provide uniform illumination across the entire playing field, 
                allowing for 24-hour play.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Energy-efficient LED technology</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Minimum 500 lux illumination level</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Anti-glare design for player comfort</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Weather-resistant fixtures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Extra services to enhance your sports experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Sports Equipment</h3>
              <p>Cricket, football, basketball, pickleball, and badminton equipment available</p>
            </div>
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Two Turf Grounds</h3>
              <p>Two 5000 sq. ft. turfs available for different sports and activities</p>
            </div>
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p>Book and play anytime with our round-the-clock availability</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}