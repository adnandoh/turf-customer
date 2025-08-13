const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');

// List of old images to remove (keeping WebP versions)
const oldImages = [
  'ChatGPT Image Jul 25, 2025, 04_57_12 PM.png',
  'heroimage.png',
  'LED Lights at Night.png',
  'Players on Turf.png',
  'turf Surrounded by Hills.png',
  'WhatsApp Image 2025-07-25 at 16.47.44_ee4f52ab.jpg',
  'WhatsApp Image 2025-07-25 at 16.47.54_728dc4a6.jpg',
  'WhatsApp Image 2025-07-25 at 16.52.15_e00ca2f3.jpg',
  'WhatsApp Image 2025-07-25 at 16.52.58_38a1030b.jpg'
];

function cleanupOldImages() {
  console.log('🧹 Cleaning up old unoptimized images...\n');

  let totalSaved = 0;

  oldImages.forEach(filename => {
    const filePath = path.join(galleryDir, filename);
    
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeKB = stats.size / 1024;
      totalSaved += stats.size;
      
      // Move to backup folder instead of deleting
      const backupDir = path.join(galleryDir, 'backup');
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const backupPath = path.join(backupDir, filename);
      fs.renameSync(filePath, backupPath);
      
      console.log(`✅ Moved ${filename} (${sizeKB.toFixed(1)}KB) to backup folder`);
    } else {
      console.log(`⚠️  ${filename} not found`);
    }
  });

  console.log(`\n💾 Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  console.log('📁 Old images moved to /public/gallery/backup/');
  console.log('✨ Cleanup complete!');
}

cleanupOldImages();