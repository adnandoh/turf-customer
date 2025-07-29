import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - Turf N Lonavala',
  description: 'Explore our world-class facility and memorable moments at Turf N Lonavala. View images of our premium turf, events, and beautiful Lonavala location.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}