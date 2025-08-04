#!/usr/bin/env node

/**
 * Cache clearing script for Vercel deployment
 * Run this after deployment to ensure fresh content
 */

const https = require('https');

const urlsToClear = [
  'https://www.turfngroup.com/',
  'https://www.turfngroup.com/sitemap.xml',
  'https://www.turfngroup.com/robots.txt',
  'https://www.turfngroup.com/about/',
  'https://www.turfngroup.com/contact/',
  'https://www.turfngroup.com/book/',
  'https://www.turfngroup.com/policy/'
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