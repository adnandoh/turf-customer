#!/usr/bin/env node

/**
 * Cache clearing script for Vercel deployment
 * Run this after deployment to ensure fresh content
 */

const https = require('https');

const urlsToClear = [
  'https://turfngroup.com',
  'https://turfngroup.com/sitemap.xml',
  'https://turfngroup.com/robots.txt',
  'https://turfngroup.com/about',
  'https://turfngroup.com/amenities',
  'https://turfngroup.com/gallery',
  'https://turfngroup.com/contact',
  'https://turfngroup.com/faq',
  'https://turfngroup.com/book',
  'https://turfngroup.com/privacy-policy',
  'https://turfngroup.com/policy'
];

async function clearCache() {
  console.log('🧹 Clearing cache for all pages...\n');
  
  for (const url of urlsToClear) {
    try {
      console.log(`Clearing cache for: ${url}`);
      
      // Make a request to clear cache
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      
      console.log(`✅ Status: ${response.status}`);
      
      // Check for problematic headers
      const xRobotsTag = response.headers.get('x-robots-tag');
      if (xRobotsTag) {
        console.log(`⚠️  Warning: X-Robots-Tag found: ${xRobotsTag}`);
      }
      
    } catch (error) {
      console.error(`❌ Error clearing cache for ${url}:`, error.message);
    }
  }
  
  console.log('\n✅ Cache clearing completed!');
  console.log('\n📝 Next steps:');
  console.log('   1. Deploy your changes to production');
  console.log('   2. Wait 5-10 minutes for Vercel to update');
  console.log('   3. Test the sitemap again');
  console.log('   4. Resubmit in Google Search Console');
}

clearCache();