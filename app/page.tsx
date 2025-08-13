'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Star, Car, Shield, Droplets, Lightbulb, Users } from 'lucide-react'
import dynamic from 'next/dynamic'
import Breadcrumb from './components/Breadcrumb'

// Lazy load heavy components
const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

const FeaturesSection = dynamic(() => import('./components/FeaturesSection'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

const GallerySection = dynamic(() => import('./components/GallerySection'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

export default function Home() {
  const [showFAQ, setShowFAQ] = useState<number | null>(null)
  const [showScrollButton, setShowScrollButton] = useState(false)

  // Memoize static data
  const testimonials = useMemo(() => [
    {
      text: "Best lighting for night cricket in the region — we've switched here permanently. The LED floodlights provide excellent visibility and the turf quality is outstanding.",
      name: "Rajesh Kumar",
      role: "Cricket Team Captain",
      rating: 5,
      date: "2 weeks ago",
      avatar: "RK"
    },
    {
      text: "Amazing football turf quality and the mountain views make every game special! Staff is very helpful and the booking process is super easy.",
      name: "Priya Sharma",
      role: "Football Enthusiast",
      rating: 5,
      date: "1 month ago",
      avatar: "PS"
    },
    {
      text: "24/7 availability is perfect for our early morning basketball sessions. Clean facilities and great atmosphere. Highly recommended!",
      name: "Amit Patel",
      role: "Basketball Player",
      rating: 5,
      date: "3 weeks ago",
      avatar: "AP"
    },
    {
      text: "Excellent facilities with free parking and gear. The mountain backdrop makes playing here a unique experience. Will definitely come back!",
      name: "Sneha Desai",
      role: "Badminton Player",
      rating: 5,
      date: "1 week ago",
      avatar: "SD"
    }
  ], [])

  const faqs = useMemo(() => [
    {
      question: "How do I book a turf slot?",
      answer: "Hit 'Book Now' button or WhatsApp us at +91 84689 42754. You can also call us directly for instant booking."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you get a full refund if you cancel up to 6 hours before your slot. No questions asked!"
    },
    {
      question: "Do you provide sports gear rental?",
      answer: "Absolutely! We provide willow bats, footballs, and pickleball paddles free of charge with your booking."
    },
    {
      question: "Is coaching allowed on the turf?",
      answer: "Yes, bring your coach or ask us for local coaching contacts. We welcome professional training sessions."
    },
    {
      question: "What are the football turf cost and cricket turf price?",
      answer: "Weekdays 6am-6pm: ₹800/hr, 6pm-6am: ₹1,100/hr. Weekends 6am-6pm: ₹1,000/hr, 6pm-6am: ₹1,300/hr."
    }
  ], [])

  const homeBreadcrumbs = useMemo(() => [
    { label: 'Home', href: '/', isCurrentPage: true }
  ], [])

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    setShowScrollButton(scrollPosition > windowHeight)
  }, [])

  // Add scroll-triggered animations and button visibility
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate')
    animateElements.forEach((el) => observer.observe(el))

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      animateElements.forEach((el) => observer.unobserve(el))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div>
      {/* SEO Breadcrumb for Home Page */}
      <Breadcrumb items={homeBreadcrumbs} className="hidden" />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Lonavala's Favourite Sports Turf - Ready When You Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Looking for a sports turf that feels close-by yet miles from city chaos? Welcome to Turf N Group in Lonavala —your go-to spot for quick, hassle-free <strong>turf booking</strong> any time of day. Whether it's a late-night five-a-side on our <strong>football turf</strong>, early-morning nets on the <strong>cricket turf</strong>, we've built these all-weather grounds so you can play when your mood says. Book a slot in seconds, park for free, gear up on-site, and breathe in that cool mountain air before the whistle blows.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Sports We Host Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sports We Host
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100 hover:border-primary/20">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-6xl">🏏</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cricket</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Box and eight-a-side cricket on pro turf with bright floodlights till midnight.
              </p>
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100 hover:border-primary/20">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-6xl">⚽</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Football</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Five or seven-a-side football on cushioned turf, perfect grip and wide goalposts.
              </p>
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100 hover:border-primary/20 relative overflow-hidden">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-6xl">🏓</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Pickleball</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Professional pickleball courts with regulation nets and court markings for competitive play.
              </p>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                Coming Soon
              </div>
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Google-Style Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Players Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900 ml-2">4.9</span>
            </div>
            <p className="text-gray-600">Based on 150+ Google reviews</p>
          </div>

          {/* Horizontal scrolling reviews container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-80 md:w-96 snap-start">
                  {/* Header with avatar, name, and rating */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-lg flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <span className="text-sm text-gray-500">{testimonial.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {testimonial.text}
                  </p>

                  {/* Google-style footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <span>Posted on Google</span>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Helpful
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View all reviews button */}
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/92CW5e5QkY3xNLHH7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:shadow-md transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              View all Google reviews
            </a>
          </div>
        </div>
      </section>

      {/* Map & Amenities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8234567890123!2d73.4836373!3d18.745212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ab70d00a1c5f%3A0xe9c8a48745dd469c!2sTurf%20N%20Lonavala!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Turf N Lonavala Location"
                ></iframe>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">What's Around Here?</h4>
                <div className="space-y-4">
                  {/* First row: 2 items side by side */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all duration-300 group">
                      <div className="text-xl">🍵</div>
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-orange-700 text-sm">Tea & Snacks Stall</div>
                        <div className="text-xs text-gray-600">Fresh refreshments on-site</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300 group">
                      <div className="text-xl">🚂</div>
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-blue-700 text-sm">Railway Station</div>
                        <div className="text-xs text-gray-600">Just 100m away</div>
                      </div>
                    </div>
                  </div>

                  {/* Second row: 2 items side by side */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200 hover:shadow-md transition-all duration-300 group">
                      <div className="text-xl">💧</div>
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-cyan-700 text-sm">Waterfall</div>
                        <div className="text-xs text-gray-600">1km scenic walk</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300 group">
                      <div className="text-xl">🏨</div>
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-green-700 text-sm">Nearby Resorts</div>
                        <div className="text-xs text-gray-600">Multiple stay options</div>
                      </div>
                    </div>
                  </div>

                  {/* Third row: 1 item full width */}
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-300 group">
                    <div className="text-2xl">⛰️</div>
                    <div>
                      <div className="font-medium text-gray-800 group-hover:text-purple-700">Mountain Viewpoints</div>
                      <div className="text-sm text-gray-600">Breathtaking Western Ghats scenery all around</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                On-site Amenities
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                  <Car className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <span className="text-gray-700 group-hover:text-gray-900">Free parking (including one 25-seater bus bay)</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                  <Lightbulb className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <span className="text-gray-700 group-hover:text-gray-900">LED floodlights</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                  <Droplets className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <span className="text-gray-700 group-hover:text-gray-900">Changing room</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                  <Users className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <span className="text-gray-700 group-hover:text-gray-900">On-site manager</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 cursor-pointer group">
                  <Star className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <span className="text-gray-700 group-hover:text-gray-900">Sports Gears</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Play? Book Your Slot in 30 Seconds
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Check live availability, choose your sport and time, pay online, and get a full refund if you cancel up to six hours before play—zero calls, zero hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918468942754"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section - Now Last */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 flex justify-between items-center"
                  onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                >
                  {faq.question}
                  <span className="text-2xl">{showFAQ === index ? '−' : '+'}</span>
                </button>
                {showFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-triggered Sticky Bar for Mobile */}
      <div className={`fixed bottom-0 left-0 right-0 bg-primary text-white p-4 z-50 md:hidden transition-transform duration-300 ${showScrollButton ? 'translate-y-0' : 'translate-y-full'
        }`}>
        <div className="flex justify-center">
          <a
            href="tel:+918468942754"
            className="bg-white text-primary px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Ready to play? Book your slot →
          </a>
        </div>
      </div>


    </div>
  )
}