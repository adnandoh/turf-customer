import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Turf N Lonavala',
  description: 'Find answers to common questions about Turf N Lonavala, including booking, cancellation, facilities, and policies.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}