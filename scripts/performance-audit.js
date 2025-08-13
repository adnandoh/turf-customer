const fs = require('fs');
const path = require('path');

function analyzeBundle() {
  console.log('🔍 Performance Audit Report\n');
  
  // Check if build exists
  const buildPath = path.join(__dirname, '../.next');
  if (!fs.existsSync(buildPath)) {
    console.log('❌ No build found. Run "npm run build" first.');
    return;
  }

  // Analyze image sizes
  console.log('📸 Image Analysis:');
  const galleryPath = path.join(__dirname, '../public/gallery');
  
  if (fs.existsSync(galleryPath)) {
    const files = fs.readdirSync(galleryPath);
    let totalSize = 0;
    let webpCount = 0;
    
    files.forEach(file => {
      const filePath = path.join(galleryPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        totalSize += stats.size;
        if (file.endsWith('.webp')) {
          webpCount++;
          console.log(`  ✅ ${file} - ${(stats.size / 1024).toFixed(1)}KB (WebP)`);
        } else if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
          console.log(`  ⚠️  ${file} - ${(stats.size / 1024).toFixed(1)}KB (Not optimized)`);
        }
      }
    });
    
    console.log(`\n📊 Total gallery size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📊 WebP images: ${webpCount}/${files.filter(f => f.match(/\.(jpg|jpeg|png|gif|webp)$/i)).length}`);
  }

  // Check for performance best practices
  console.log('\n🚀 Performance Checklist:');
  
  // Check Next.js config
  const configPath = path.join(__dirname, '../next.config.js');
  if (fs.existsSync(configPath)) {
    const config = fs.readFileSync(configPath, 'utf8');
    
    console.log('  ✅ Next.js configuration found');
    
    if (config.includes('swcMinify: true')) {
      console.log('  ✅ SWC minification enabled');
    } else {
      console.log('  ⚠️  Consider enabling SWC minification');
    }
    
    if (config.includes('image/webp')) {
      console.log('  ✅ WebP image format enabled');
    } else {
      console.log('  ⚠️  WebP image format not configured');
    }
    
    if (config.includes('removeConsole')) {
      console.log('  ✅ Console removal in production enabled');
    } else {
      console.log('  ⚠️  Consider removing console logs in production');
    }
  }

  // Check for lazy loading
  const pageFiles = [
    path.join(__dirname, '../app/page.tsx'),
    path.join(__dirname, '../app/about/page.tsx'),
    path.join(__dirname, '../app/contact/page.tsx')
  ];

  let lazyLoadingCount = 0;
  pageFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('loading="lazy"')) {
        lazyLoadingCount++;
      }
    }
  });

  if (lazyLoadingCount > 0) {
    console.log(`  ✅ Lazy loading implemented in ${lazyLoadingCount} pages`);
  } else {
    console.log('  ⚠️  Consider implementing lazy loading for images');
  }

  console.log('\n🎯 Recommendations:');
  console.log('  • Use WebP format for all images');
  console.log('  • Implement lazy loading for below-fold images');
  console.log('  • Enable compression in your hosting provider');
  console.log('  • Use a CDN for static assets');
  console.log('  • Monitor Core Web Vitals with Google PageSpeed Insights');
  
  console.log('\n✨ Audit complete!');
}

analyzeBundle();