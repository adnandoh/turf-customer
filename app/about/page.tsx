import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Heart, Award, Users } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: 'About Turf N Group | Our Journey and Vision',
  description: 'Turf N Group Founded in Lonavala 2025 is now lonavala\'s first of it\'s Turf near Railway, waterwall, resort, market, and near villas with mountain view.',
}

export default function About() {
  return (
    <div className="pt-16">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Turf N Group - At a Glance
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1: Who We Are - Content Left, Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content Left */}
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who we are
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Turf N Group is a 24 × 7, multi-sport destination in the green hills of Lonavala, purpose-built for cricket, football (7 v 7), and pickleball lovers of all ages. Our twin 5,000 sq ft turfs combine professional-grade surfaces with the fresh mountain air that makes every match memorable, with a nearby railway station, waterfall, resorts, and lots of villas in the region, which provides an experience with a mountain view. At the same time, anyone can come, play and enjoy the surroundings too.
              </p>
            </div>
            {/* Image Right */}
            <div className="relative">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/gallery/Players on Turf.png"
                  alt="Players enjoying football and cricket on professional turf at Turf N Group Lonavala"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2025</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Drives Us - Image Left, Content Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/gallery/turf Surrounded by Hills.png"
                  alt="Sports turf surrounded by beautiful hills and mountains in Lonavala"
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Content Right */}
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                WHAT DRIVES US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What drives Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is simple: make quality sports turf accessible around the clock. We envision becoming Western India's go-to hub where passion for play meets world-class convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Players Choose Us - Content Left, Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content Left */}
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why players choose us
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <strong>Scenic setting:</strong>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Play against a backdrop of mist-laden hills and cool breezes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <strong>Flexibility first:</strong>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Hassle-free rescheduling and fair refund policy because plans can change.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <strong>One-click booking:</strong>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Secure your slot online in seconds—no phone tag required.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <strong>All-weather lighting:</strong>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    High-efficiency LED floodlights keep the action bright—day or night.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <strong>Two full turfs:</strong>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Host simultaneous games, tournaments, or training sessions without crowding.
                  </p>
                </div>
              </div>
            </div>
            {/* Image Right */}
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/gallery/turf Surrounded by Hills.png"
                alt="Sports turf surrounded by beautiful hills and mountains in Lonavala"
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Join the Game Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            JOIN THE GAME
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the game
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Whether you're a weekend warrior, corporate team, family, or student squad, Turf N Lonavala welcomes you to lace up, book your ground, and create winning moments today.
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Ready to play? Call +91 84689 42754 or hit Book Now to lock in your time on the turf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918468942754"
              className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              Call +91 84689 42754
            </a>
            <a
              href="/book/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}