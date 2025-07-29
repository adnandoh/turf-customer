import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Heart, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Turf N Lonavala',
  description: 'Learn about Turf N Lonavala, Lonavala\'s premier multi-sport destination. Our vision, history, and commitment to providing the best sports experience for cricket, football, basketball, pickleball, and badminton.',
}

export default function About() {
  return (
    <div className="pt-16">

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Turf N Lonavala was born from a passion for sports and a love for Lonavala's natural beauty. 
                Founded with a vision to create a premium multi-sport facility, we recognized the need for 
                versatile sports venues that could serve both locals and tourists visiting this beautiful hill station.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a dream to create the perfect sports destination has evolved into 
                Lonavala's most sought-after multi-sport facility. With two 5000 sq. ft. turfs, we've hosted countless 
                cricket and football matches, basketball games, pickleball tournaments, and badminton competitions, 
                creating memorable moments for sports enthusiasts of all ages.
              </p>
              <p className="text-lg text-gray-600">
                Today, Turf N Lonavala stands as a testament to our commitment to excellence, providing 
                a world-class multi-sport experience amidst the serene mountain landscape of Lonavala, 
                available 24 hours a day for your convenience.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
                alt="TurfBook facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Turf N Lonavala
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our facility and service
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-gray-600">
                Our love for sports drives us to create unforgettable experiences
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                Premium facilities and equipment for the best multi-sport experience
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                Building a strong sports community in Lonavala and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Experience */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                alt="Lonavala mountains"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Mountain-side Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                What sets Turf N Lonavala apart is our unique location in the heart of Lonavala 
                and our versatile sports offerings. Surrounded by lush green hills and fresh mountain air, 
                playing cricket, football, basketball, pickleball, or badminton at our facility 
                is more than just a game – it's an experience.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The cool mountain breeze, panoramic views, and serene environment create 
                the perfect backdrop for your sporting activities. Whether you're here for 
                a casual game with friends or a competitive tournament, the natural beauty 
                of Lonavala enhances every moment.
              </p>
              <p className="text-lg text-gray-600">
                After your game, explore the nearby attractions, enjoy local cuisine, 
                or simply relax and take in the breathtaking views that make Lonavala 
                a favorite destination for sports and leisure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl">
                To be the premier multi-sport destination in Western India, where athletes 
                and sports enthusiasts of cricket, football, basketball, pickleball, and badminton 
                come to experience the perfect blend of world-class facilities and natural beauty, 
                available 24/7 for maximum convenience.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl">
                To provide exceptional multi-sport facilities and services that inspire 
                people to stay active, build communities, and create lasting memories 
                in the beautiful setting of Lonavala. We aim to make sports accessible 
                around the clock with our 24-hour operation and diverse sporting options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}