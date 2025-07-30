#!/usr/bin/env node

/**
 * Cache clearing script for Vercel deployment
 * Run this after deployment to ensure fresh content
 */

const https = require('https');

const urls = [
  'https://turfngroup.com/sitemap.xml',
  'https://turfngroup.com/robots.txt',
  'https://turfngroup.com/',
];

async function clearCache() {
  console.log('🔄 Clearing cache for production URLs...\n');
  
  for (const url of urls) {
    try {
      const options = {
        method: 'HEAD',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        }
      };
      
      await new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
          console.log(`✅ ${url} - Status: ${res.statusCode}`);
          console.log(`   Cache-Control: ${res.headers['cache-control'] || 'Not set'}`);
          console.log(`   Content-Type: ${res.headers['content-type'] || 'Not set'}\n`);
          resolve();
        });
        
        req.on('error', (error) => {
          console.log(`❌ ${url} - Error: ${error.message}\n`);
          reject(error);
        });
        
        req.end();
      });
      
      // Add small delay between requests
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.log(`❌ Failed to check ${url}: ${error.message}\n`);
    }
  }
  
  console.log('🎉 Cache clearing completed!');
  console.log('\n📝 Next steps:');
  console.log('1. Wait 5-10 minutes for CDN propagation');
  console.log('2. Test your sitemap: https://turfngroup.com/sitemap.xml');
  console.log('3. Submit to Google Search Console if needed');
}

clearCache().catch(console.error);