import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'business.business';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'turf booking, cricket booking, pickleball booking, sports facility, Lonavala sports, turf rental, sports ground booking',
  image = '/images/turf-hero.jpg',
  url = 'https://turfbook.com',
  type = 'website',
  author = 'TurfBook',
  publishedTime,
  modifiedTime,
  noIndex = false,
  canonicalUrl,
}) => {
  const siteTitle = 'TurfBook - Premium Sports Booking in Lonavala';
  const fullTitle = title === 'Home' ? siteTitle : `${title} | ${siteTitle}`;
  const fullUrl = canonicalUrl || `${url}${window.location.pathname}`;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="TurfBook" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@TurfBook" />
      
      {/* Article specific (for blog posts) */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Business specific */}
      {type === 'business.business' && (
        <>
          <meta property="business:contact_data:street_address" content="Gat no 69/32, Railway station, boraj road, near Malavli" />
          <meta property="business:contact_data:locality" content="Lonavala" />
          <meta property="business:contact_data:region" content="Maharashtra" />
          <meta property="business:contact_data:postal_code" content="410401" />
          <meta property="business:contact_data:country_name" content="India" />
          <meta property="business:contact_data:phone_number" content="+918468942754" />
        </>
      )}
      
      {/* Additional SEO Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#388e3c" />
      <meta name="msapplication-TileColor" content="#388e3c" />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          "name": "TurfBook - Turf N Lonavala",
          "description": description,
          "url": fullUrl,
          "image": fullImage,
          "telephone": "+91-84689-42754",
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
            "latitude": "18.7451839",
            "longitude": "73.4835825"
          },
          "openingHours": "Mo-Su 06:30-06:30",
          "priceRange": "₹700-₹1300",
          "sport": ["Cricket", "Pickleball"],
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Cricket Field",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Pickleball Court",
              "value": true
            }
          ],
          "sameAs": [
            `https://wa.me/8468942754`
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;