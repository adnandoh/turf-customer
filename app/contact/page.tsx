'use client'

import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

export default function Contact() {

  return (
    <div className="pt-16">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to book your slot or have questions? We're here to help! Reach out through any of the channels below for instant assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918468942754"
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918468942754"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Call Us</h3>
              <p className="text-gray-600 mb-4">Instant booking & support</p>
              <a 
                href="tel:+918468942754" 
                className="text-primary font-semibold hover:text-primary-dark transition-colors text-lg"
              >
                +91 84689 42754
              </a>
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            </div>

            {/* WhatsApp */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick messages & booking</p>
              <a 
                href="https://wa.me/918468942754" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors text-lg"
              >
                Chat Now
              </a>
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
            </div>

            {/* Email */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Email</h3>
              <p className="text-gray-600 mb-4">Detailed inquiries</p>
              <a 
                href="mailto:turfnlonavala@gmail.com" 
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm break-all"
              >
                turfnlonavala@gmail.com
              </a>
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Visit Us */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-100">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Visit Us</h3>
              <p className="text-gray-600 mb-4">See the turf in person</p>
              <p className="text-orange-600 font-semibold text-sm">
                Near Malavli Station<br />
                Lonavala
              </p>
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We're Always Available
              </h2>
              <p className="text-lg text-gray-600">Book anytime, play anytime</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-4">🏟️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Turf Hours</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-gray-600">Open all day, every day</p>
                <div className="mt-6 bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-700 font-medium">
                    ✓ LED floodlights for night games<br />
                    ✓ On-site manager available<br />
                    ✓ Safe and secure environment
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Support</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Online & phone support</p>
                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-700 font-medium">
                    ✓ Instant WhatsApp responses<br />
                    ✓ Phone support available<br />
                    ✓ Easy online booking system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us Easily</h2>
            <p className="text-xl text-gray-600">Located conveniently near Malavli Railway Station</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Address Info */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary text-white p-3 rounded-full flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Turf N Lonavala</strong><br />
                      Gat no 69/32, near Malavli Railway station<br />
                      Boraj road, Lonavala<br />
                      Maharashtra 410401, India
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <a 
                    href="https://www.google.com/maps/dir//Gat+no+69+%2F32,+Turf+N+Lonavala,+Railway+station,+boraj+road,+near+Malavli,+Malavli,+Lonavala,+Maharashtra+410401/@18.9092996,72.509654,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2ab70d00a1c5f:0xe9c8a48745dd469c!2m2!1d73.4836373!2d18.745212?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105"
                  >
                    <Navigation size={20} />
                    Get Directions
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/92CW5e5QkY3xNLHH7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:shadow-md transition-all"
                  >
                    <MapPin size={20} />
                    View on Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8234567890123!2d73.4836373!3d18.745212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ab70d00a1c5f%3A0xe9c8a48745dd469c!2sTurf%20N%20Lonavala!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Turf N Lonavala Location"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-600">Multiple convenient ways to get to Turf N Lonavala</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="text-6xl mb-6">🚗</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">By Car</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Take Mumbai-Pune Expressway → Exit at Lonavala → Follow signs to Malavli Railway Station → Turf N Lonavala on Boraj Road
              </p>
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Free Parking Available
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="text-6xl mb-6">🚂</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">By Train</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Take train to Malavli Railway Station → Just 100m walk to Turf N Lonavala → Perfect for day trips from Mumbai/Pune
              </p>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                100m from Station
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="text-6xl mb-6">🚌</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">By Bus</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regular buses from Mumbai/Pune to Lonavala → Take local transport to Malavli → Short ride to turf
              </p>
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Budget Friendly
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Travel Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">💡</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Best Time to Visit</h4>
                  <p className="text-gray-600 text-sm">Early morning or evening for pleasant weather. Night games under floodlights are spectacular!</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🅿️</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Parking</h4>
                  <p className="text-gray-600 text-sm">Free parking for cars and bikes. Bus parking available for group bookings.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🏪</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Nearby Amenities</h4>
                  <p className="text-gray-600 text-sm">Tea stall on-site, restaurants and hotels within walking distance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📱</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Before You Come</h4>
                  <p className="text-gray-600 text-sm">Call or WhatsApp to confirm availability and get real-time directions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Play? Let's Connect!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't wait - book your slot now or reach out with any questions. We're here to make your sports experience amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918468942754"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              📞 Call +91 84689 42754
            </a>
            <a
              href="https://wa.me/918468942754"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}