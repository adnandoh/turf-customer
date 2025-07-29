'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How do I book a slot at TurfBook?',
    answer: 'You can book a slot through our website by clicking the "Book Now" button, calling us directly at +91 98765 43210, or visiting our facility in person. Online booking is available 24/7 for your convenience.'
  },
  {
    question: 'What are your operating hours?',
    answer: 'TurfBook is open from 6:00 AM to 11:00 PM, seven days a week. Our booking office operates from 9:00 AM to 9:00 PM for any assistance you might need.'
  },
  {
    question: 'What sports can be played at TurfBook?',
    answer: 'Our facility is perfect for football, cricket, and other field sports. The artificial turf is designed to accommodate various sports activities and can be customized based on your requirements.'
  },
  {
    question: 'Do you provide sports equipment?',
    answer: 'Yes, we offer sports equipment rental including footballs, cricket gear, cones, and other accessories. Equipment rental charges are separate from the turf booking fees.'
  },
  {
    question: 'What happens if it rains during my booked slot?',
    answer: 'Our artificial turf is all-weather and can handle light rain. However, for heavy rain or unsafe conditions, we offer rescheduling or full refund options. Safety is our top priority.'
  },
  {
    question: 'Is parking available at the facility?',
    answer: 'Yes, we provide ample free parking space for both cars and two-wheelers. The parking area is secure and well-lit for your convenience.'
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer: 'Cancellations made 24 hours before the booked slot are eligible for a full refund. Rescheduling can be done subject to availability. Please refer to our policy page for detailed terms.'
  },
  {
    question: 'Do you host tournaments and events?',
    answer: 'Absolutely! We regularly host tournaments and can organize corporate events, birthday parties, and private competitions. Contact us for custom event planning and special packages.'
  },
  {
    question: 'Are there changing rooms and restrooms?',
    answer: 'Yes, we have clean and well-maintained changing rooms and restrooms for both men and women. These facilities are regularly sanitized for hygiene and safety.'
  },
  {
    question: 'What are your rates for turf booking?',
    answer: 'Our rates vary based on time slots and duration. Peak hours (evening) have different rates than off-peak hours. Please contact us or check our booking page for current pricing.'
  },
  {
    question: 'Is coaching available?',
    answer: 'Yes, we have professional coaches available for football and cricket training. Coaching sessions can be arranged separately, and we offer both individual and group training programs.'
  },
  {
    question: 'Do you have a cafeteria or refreshment area?',
    answer: 'We have a refreshment area where you can purchase snacks, beverages, and energy drinks. This helps keep you energized during and after your games.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-16">

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-primary" size={24} />
                  ) : (
                    <ChevronDown className="text-primary" size={24} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}