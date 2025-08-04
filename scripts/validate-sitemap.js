#!/usr/bin/env node

/**
 * Sitemap validation script
 * Tests if sitemap is accessible and properly formatted
 */

const https = require('https');
const { DOMParser } = require('xmldom');

async function validateSitemap() {
  const sitemapUrl = 'https://www.turfngroup.com/sitemap.xml';
  
  console.log('🔍 Validating sitemap...\n');
  
  try {
    // Test accessibility
    const response = await new Promise((resolve, reject) => {
      https.get(sitemapUrl, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: data
          });
        });
      }).on('error', reject);
    });
    
    console.log(`✅ Status Code: ${response.statusCode}`);
    console.log(`✅ Content-Type: ${response.headers['content-type']}`);
    console.log(`✅ Content-Length: ${response.headers['content-length']} bytes\n`);
    
    if (response.statusCode !== 200) {
      console.log('❌ Sitemap is not accessible (non-200 status)');
      return;
    }
    
    // Test XML parsing
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, 'text/xml');
      
      const urls = xmlDoc.getElementsByTagName('url');
      console.log(`✅ Found ${urls.length} URLs in sitemap`);
      
      // List all URLs
      console.log('\n📋 URLs in sitemap:');
      for (let i = 0; i < urls.length; i++) {
        const loc = urls[i].getElementsByTagName('loc')[0];
        if (loc) {
          console.log(`   ${i + 1}. ${loc.textContent}`);
        }
      }
      
      console.log('\n🎉 Sitemap validation successful!');
      console.log('\n📝 Next steps for Google Search Console:');
      console.log('1. Go to Google Search Console');
      console.log('2. Navigate to Sitemaps section');
      console.log('3. Add sitemap URL: https://www.turfngroup.com/sitemap.xml');
      console.log('4. Click Submit');
      
    } catch (xmlError) {
      console.log('❌ XML parsing failed:', xmlError.message);
      console.log('\n📄 Raw content preview:');
      console.log(response.data.substring(0, 500) + '...');
    }
    
  } catch (error) {
    console.log('❌ Failed to fetch sitemap:', error.message);
  }
}

// Install xmldom if not present
try {
  require('xmldom');
} catch (e) {
  console.log('📦 Installing xmldom for XML validation...');
  require('child_process').execSync('npm install xmldom --save-dev', { stdio: 'inherit' });
  console.log('✅ xmldom installed\n');
}

validateSitemap().catch(console.error);