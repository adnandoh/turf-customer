import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Turf N Lonavala | Book Your Sports Session',
  description: 'Contact Turf N Lonavala for bookings and inquiries. Call +91-8468942754 or visit us at Malavli, Lonavala. Open 24/7 for cricket, football, basketball, pickleball, and badminton.',
  keywords: 'contact turf lonavala, book sports turf, cricket booking lonavala, football booking, basketball court, pickleball court, badminton court',
}

'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-16">

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      Turf N Lonavala<br />
                      Gat no 69/32, near Malavli Railway station<br />
                      boraj road, Lonavala, Maharashtra 410401<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+918468942754" className="hover:text-primary transition-colors">+91 84689 42754</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:turfnlonavala@gmail.com" className="hover:text-primary transition-colors">turfnlonavala@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">Turf Hours:</span><br />
                      Open 24 Hours<br /><br />
                      <span className="font-medium">Booking Available:</span><br />
                      24/7 Online
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your message or inquiry"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Lonavala</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex flex-col items-center justify-center">
              <div className="text-center mb-6">
                <MapPin size={48} className="text-primary mx-auto mb-4" />
                <p className="text-gray-600">Turf N Lonavala</p>
                <p className="text-sm text-gray-500 mt-2">
                  Gat no 69/32, near Malavli Railway station, boraj road, Lonavala, Maharashtra 410401
                </p>
              </div>
              <a 
                href="https://www.google.com/maps/dir//Gat+no+69+%2F32,+Turf+N+Lonavala,+Railway+station,+boraj+road,+near+Malavli,+Malavli,+Lonavala,+Maharashtra+410401/@18.9092996,72.509654,9z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2ab70d00a1c5f:0xe9c8a48745dd469c!2m2!1d73.4836373!2d18.745212?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach</h2>
            <p className="text-xl text-gray-600">Easy directions to Turf N Lonavala</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">By Car</h3>
              <p className="text-gray-600">
                Take the Mumbai-Pune Expressway and exit at Lonavala. 
                Follow signs to Malavli Railway station. Turf N Lonavala is located near boraj road.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">By Train</h3>
              <p className="text-gray-600">
                Take a train to Malavli Railway Station. 
                Turf N Lonavala is just a short distance away by auto-rickshaw or taxi.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">By Bus</h3>
              <p className="text-gray-600">
                Regular bus services from Mumbai and Pune to Lonavala. 
                Get off at Lonavala Bus Stand and take local transport to Malavli.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}