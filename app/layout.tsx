import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.turfngroup.com'),
  title: 'Sports Turf in Lonavala | Turf N Group 24/7 Booking',
  description: 'Book Turf N Group\'s sports turf in Lonavala for cricket or football, open 24/7. Fast online turf booking, free parking and full refund up to 6 hours before.',
  keywords: 'turf near me, cricket turf near me, football turf near me, turf booking, football turf, cricket turf, turf ground near me, football turf cost, cricket turf price, badminton turf, basketball turf near me, turf ground cricket',
  authors: [{ name: 'Turf N Lonavala' }],
  openGraph: {
    title: 'Sports Turf in Lonavala | Turf N Group 24/7 Booking',
    description: 'Book Turf N Group\'s sports turf in Lonavala for cricket or football, open 24/7. Fast online turf booking, free parking and full refund up to 6 hours before.',
    url: 'https://www.turfngroup.com/',
    siteName: 'Turf N Lonavala',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Turf in Lonavala | Turf N Group 24/7 Booking',
    description: 'Book Turf N Group\'s sports turf in Lonavala for cricket or football, open 24/7. Fast online turf booking, free parking and full refund up to 6 hours before.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Turf N Lonavala",
              "description": "Multipurpose Outdoor Sports Turf in Lonavala offering cricket, football, basketball, pickleball, and badminton facilities",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gat no 69/32, Railway station, boraj road, near Malavli",
                "addressLocality": "Lonavala",
                "addressRegion": "Maharashtra",
                "postalCode": "410401",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.745212",
                "longitude": "73.4836373"
              },
              "telephone": "+91-8468942754",
              "email": "turfnlonavala@gmail.com",
              "url": "https://www.turfngroup.com/",
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "₹800-₹1300",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Cricket Field",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Football Field",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Basketball Court",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Pickleball Court",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Badminton Court",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "24 Hour Access",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Parking",
                  "value": true
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              },
              "sameAs": [
                "https://www.facebook.com/turfnlonavala",
                "https://www.instagram.com/turfnlonavala"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <GoogleAnalytics gaId="G-DJ296301C8" />
      </body>
    </html>
  )
}