import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Now - TurfBook Lonavala',
  description: 'Reserve your preferred time slot at TurfBook, Lonavala\'s premier sports destination. Easy online booking with flexible time slots.',
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}