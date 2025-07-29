import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Turf N Lonavala',
  description: 'Get in touch with Turf N Lonavala for bookings, inquiries, or assistance. Located in Lonavala with easy access and ample parking.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}