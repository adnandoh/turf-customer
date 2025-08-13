'use client'

import { Clock, Users, MapPin, Calendar, Lightbulb, Car } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Always Open, Always On",
      description: "Play anytime, late nights or dawn, our gates stay unlocked and staff are available 24/7 year-round for every player."
    },
    {
      icon: Users,
      title: "Multi-Sport Dual Turfs Ready",
      description: "Two adjacent turfs have marked lines, allowing you to swap between cricket, football, or any other game you prefer."
    },
    {
      icon: MapPin,
      title: "Scenic Mountain-View Atmosphere",
      description: "Fresh hillside air and panoramic Western Ghats scenery transform everyday games into memorable, energising sporting escapes."
    },
    {
      icon: Calendar,
      title: "Fast Booking, Easy Refunds",
      description: "Reserve your slot online in thirty seconds if you'd like. You can cancel up to six hours beforehand for a full refund, no questions asked."
    },
    {
      icon: Lightbulb,
      title: "LED Lighting Everywhere",
      description: "200 Watts floodlights erase glare, provide crystal-clear vision and a professional, broadcast-quality night match for everyone."
    },
    {
      icon: Car,
      title: "Free Parking, Gear Included",
      description: "Drive straight in, park free, collect complimentary bats, balls, paddles, and count on staff for assistance."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Pick Turf N Lonavala
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
                <div className="bg-gradient-to-br from-primary to-green-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-primary to-green-600 mx-auto rounded-full"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection