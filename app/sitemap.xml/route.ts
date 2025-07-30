import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://turfngroup.com';
  const lastModified = new Date().toISOString();

  const urls = [
    '',
    'about',
    'amenities',
    'gallery',
    'contact',
    'faq',
    'book',
    'privacy-policy',
    'policy',
  ];

  const urlEntries = urls.map((path) => {
    let changefreq = 'monthly';
    let priority = 0.8;

    if (path === '') {
      changefreq = 'weekly';
      priority = 1.0;
    } else if (path === 'book') {
      changefreq = 'weekly';
      priority = 0.9;
    } else if (path === 'faq') {
      priority = 0.7;
    } else if (path === 'privacy-policy' || path === 'policy') {
      changefreq = 'yearly';
      priority = 0.5;
    }

    return `  <url>
    <loc>${baseUrl}${path ? '/' + path : ''}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  const xml =
    
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urlEntries.join('\n') +
    '\n</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
