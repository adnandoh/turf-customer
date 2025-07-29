import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://turfngroup.com'),
  title: 'Turf N Lonavala - Multipurpose Outdoor Sports Turf',
  description: 'Experience the thrill of sports amidst scenic mountain views at Turf N Lonavala, offering cricket, football, basketball, pickleball, and badminton facilities.',
  keywords: 'sports turf, Lonavala, football, cricket, basketball, pickleball, badminton, booking, sports facility',
  authors: [{ name: 'Turf N Lonavala' }],
  openGraph: {
    title: 'Turf N Lonavala - Multipurpose Outdoor Sports Turf',
    description: 'Experience the thrill of sports amidst scenic mountain views',
    url: 'https://turfngroup.com',
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
    title: 'Turf N Lonavala - Multipurpose Outdoor Sports Turf',
    description: 'Experience the thrill of sports amidst scenic mountain views',
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
              "description": "Multipurpose Outdoor Sports Turf in Lonavala",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lonavala",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": "+91-8468942754",
              "email": "turfnlonavala@gmail.com",
              "url": "https://turfngroup.com",
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