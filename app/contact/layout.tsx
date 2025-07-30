import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Turf N Lonavala | Book Your Sports Session',
  description: 'Contact Turf N Lonavala for bookings and inquiries. Call +91-8468942754 or visit us at Malavli, Lonavala. Open 24/7 for cricket, football, basketball, pickleball, and badminton.',
  keywords: 'contact turf lonavala, book sports turf, cricket booking lonavala, football booking, basketball court, pickleball court, badminton court',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}