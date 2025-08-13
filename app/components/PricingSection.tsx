'use client'

import { memo } from 'react'

const PricingSection = memo(() => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple Pricing Snapshot
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Per Hour Rate Schedule On All Days<br />
            Monday to Sunday
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Day Time Slot */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl mb-4">☀️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Day Time</h3>
                  <p className="text-gray-600 mb-4">7:00 AM to 7:00 PM</p>
                  <div className="text-3xl font-bold text-green-600 mb-2">₹500</div>
                  <p className="text-sm text-gray-500">per hour</p>
                </div>
              </div>

              {/* Night Time Slot */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌙</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Night Time</h3>
                  <p className="text-gray-600 mb-4">7:00 PM to 6:00 AM</p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹700</div>
                  <p className="text-sm text-gray-500">per hour</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-green-500">✓</span>
                <span className="text-sm font-medium text-gray-700">Same rates for all sports • All days of the week</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Need a tournament block or corporate booking? Reach out and we'll customise a package.
          </p>
        </div>
      </div>
    </section>
  )
})

PricingSection.displayName = 'PricingSection'

export default PricingSection