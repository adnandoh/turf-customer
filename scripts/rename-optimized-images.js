const fs = require('fs');
const path = require('path');

const optimizedDir = path.join(__dirname, '../public/gallery/optimized');
const galleryDir = path.join(__dirname, '../public/gallery');

// Mapping of old names to new SEO-friendly names
const nameMapping = {
  'ChatGPT Image Jul 25, 2025, 04_57_12 PM.webp': 'turf-facility-overview.webp',
  'heroimage.webp': 'hero-sports-turf-lonavala.webp',
  'LED Lights at Night.webp': 'led-lights-night-cricket.webp',
  'Players on Turf.webp': 'players-on-football-turf.webp',
  'turf Surrounded by Hills.webp': 'turf-mountain-view-lonavala.webp',
  'WhatsApp Image 2025-07-25 at 16.47.44_ee4f52ab.webp': 'football-ground-aerial-view.webp',
  'WhatsApp Image 2025-07-25 at 16.47.54_728dc4a6.webp': 'cricket-turf-ground-view.webp',
  'WhatsApp Image 2025-07-25 at 16.52.15_e00ca2f3.webp': 'sports-activities-turf.webp',
  'WhatsApp Image 2025-07-25 at 16.52.58_38a1030b.webp': 'night-sports-led-lighting.webp'
};

async function renameOptimizedImages() {
  try {
    console.log('Renaming optimized images with SEO-friendly names...');

    for (const [oldName, newName] of Object.entries(nameMapping)) {
      const oldPath = path.join(optimizedDir, oldName);
      const newPath = path.join(galleryDir, newName);

      if (fs.existsSync(oldPath)) {
        fs.copyFileSync(oldPath, newPath);
        console.log(`✓ ${oldName} -> ${newName}`);
      } else {
        console.log(`⚠ File not found: ${oldName}`);
      }
    }

    console.log('\nImage renaming complete!');
    console.log('New WebP images are now available in /public/gallery/');
  } catch (error) {
    console.error('Error renaming images:', error);
  }
}

renameOptimizedImages();