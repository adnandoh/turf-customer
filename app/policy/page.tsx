import type { Metadata } from 'next'
import { Shield, Clock, RefreshCw, Users, AlertTriangle, FileText } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Policies - Turf N Lonavala',
  description: 'Read our booking, refund, and usage policies at Turf N Lonavala. Clear terms and conditions for a smooth experience.',
}

export default function Policy() {
  return (
    <div className="pt-16">
      <Breadcrumb />

      {/* Policy Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Booking Policy */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <Clock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Booking Policy</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Advance Booking:</strong> Slots can be booked up to 30 days in advance.</p>
              <p><strong>Minimum Duration:</strong> Minimum booking duration is 1 hour.</p>
              <p><strong>Payment:</strong> Full payment is required at the time of booking.</p>
              <p><strong>Confirmation:</strong> You will receive a booking confirmation via SMS and email.</p>
              <p><strong>Late Arrival:</strong> If you arrive more than 15 minutes late, your slot may be given to walk-in customers.</p>
              <p><strong>Group Size:</strong> Maximum 14 players allowed per booking for football (7v7), 8-12 players for cricket.</p>
              <p><strong>Turf Size:</strong> Two 5000 sq. ft. turfs available for different sports activities.</p>
            </div>
          </div>

          {/* Cancellation & Refund Policy */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <RefreshCw size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cancellation & Refund Policy</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Rescheduling:</strong> Rescheduling is allowed up to 24 hours before the booked slot. Rescheduling requests made less than 24 hours before the slot will not be accommodated.</p>
              <p><strong>Cancellation:</strong> Cancellations made 24 hours or more before the booked slot will receive a full refund. No refunds for cancellations made less than 24 hours before the slot.</p>
              <p><strong>Weather Cancellation:</strong> Full refund or rescheduling available for cancellations due to severe weather conditions.</p>
              <p><strong>Refund Processing:</strong> Refunds will be processed within 5-7 business days to the original payment method.</p>
              <p><strong>No-Show Policy:</strong> No refunds or rescheduling for no-shows.</p>
            </div>
          </div>

          {/* Usage Policy */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Usage Policy</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Appropriate Footwear:</strong> Only turf shoes or sports shoes with appropriate studs are allowed.</p>
              <p><strong>No Smoking/Alcohol:</strong> Smoking and consumption of alcohol are strictly prohibited on the premises.</p>
              <p><strong>Respect Property:</strong> Any damage to the facility or equipment will be charged to the customer.</p>
              <p><strong>Clean Up:</strong> Please dispose of trash in designated bins and keep the facility clean.</p>
              <p><strong>Time Limits:</strong> Strictly adhere to your booked time slot. Extensions subject to availability.</p>
              <p><strong>Behavior:</strong> Maintain respectful behavior towards staff and other customers.</p>
            </div>
          </div>

          {/* Safety Policy */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Safety Policy</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Play at Own Risk:</strong> All sports activities are undertaken at your own risk.</p>
              <p><strong>Medical Conditions:</strong> Inform staff of any medical conditions that might affect your play.</p>
              <p><strong>First Aid:</strong> Basic first aid is available on-site. Serious injuries will be referred to nearby medical facilities.</p>
              <p><strong>Equipment Check:</strong> Inspect rental equipment before use and report any defects immediately.</p>
              <p><strong>Weather Conditions:</strong> Activities may be suspended during adverse weather for safety reasons.</p>
              <p><strong>Emergency Procedures:</strong> Follow staff instructions during any emergency situations.</p>
            </div>
          </div>

          {/* Liability Policy */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <AlertTriangle size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Liability Policy</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Limited Liability:</strong> Turf N Lonavala's liability is limited to the amount paid for the booking.</p>
              <p><strong>Personal Belongings:</strong> Turf N Lonavala is not responsible for lost, stolen, or damaged personal items.</p>
              <p><strong>Injury Disclaimer:</strong> Participation in sports activities involves inherent risks. Players participate at their own risk.</p>
              <p><strong>Insurance:</strong> We recommend players have their own sports/health insurance coverage.</p>
              <p><strong>Property Damage:</strong> Customers are liable for any damage caused to the facility or equipment.</p>
            </div>
          </div>

          {/* General Terms */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">General Terms & Conditions</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Age Restrictions:</strong> Children under 12 must be accompanied by an adult at all times.</p>
              <p><strong>Photography:</strong> TurfBook may use photographs/videos taken on the premises for promotional purposes.</p>
              <p><strong>Right to Refuse:</strong> Management reserves the right to refuse service to anyone without prior notice.</p>
              <p><strong>Policy Changes:</strong> These policies may be updated from time to time. Current policies apply to all bookings.</p>
              <p><strong>Disputes:</strong> Any disputes will be resolved through mutual discussion or legal proceedings in Lonavala jurisdiction.</p>
              <p><strong>Contact:</strong> For any policy-related queries, contact us at turfnlonavala@gmail.com or +91 84689 42754.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Our Policies?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to clarify any doubts you may have about our terms and conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/faq"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View FAQ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}