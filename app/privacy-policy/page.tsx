import type { Metadata } from 'next'
import { Shield, Lock, Eye, FileText, Database, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Turf N Lonavala',
  description: 'Read our privacy policy at Turf N Lonavala. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="pt-16">

      {/* Policy Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>Last Updated: June 2023</p>
              <p>Turf N Lonavala ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.</p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <Database size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Personal Information:</strong> When you make a booking or create an account, we collect personal information such as your name, email address, phone number, and payment information.</p>
              <p><strong>Usage Data:</strong> We may collect information about how you access and use our website, including your IP address, browser type, device information, pages visited, and time spent on those pages.</p>
              <p><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.</p>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <Eye size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Provide Services:</strong> To process bookings, manage your account, and provide customer support.</p>
              <p><strong>Improve Our Services:</strong> To understand how users interact with our website and improve our offerings.</p>
              <p><strong>Communications:</strong> To send you booking confirmations, updates, and promotional content (if you have opted in).</p>
              <p><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <Lock size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Security Measures:</strong> We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</p>
              <p><strong>Third-Party Services:</strong> While we take steps to protect your information, we cannot guarantee the security of information transmitted to third-party services or platforms.</p>
              <p><strong>Data Retention:</strong> We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy.</p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <FileText size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Access and Update:</strong> You have the right to access and update your personal information at any time.</p>
              <p><strong>Opt-Out:</strong> You can opt-out of receiving promotional communications from us by following the unsubscribe instructions included in each email.</p>
              <p><strong>Data Deletion:</strong> You may request the deletion of your personal information, subject to certain exceptions provided by law.</p>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mb-12 bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white p-3 rounded-full mr-4">
                <RefreshCw size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Policy Updates</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p><strong>Changes to This Policy:</strong> We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <p><strong>Effective Date:</strong> The updated policy will be effective immediately upon posting.</p>
              <p><strong>Review:</strong> We encourage you to review this Privacy Policy periodically for any changes.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/policy"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View Other Policies
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}