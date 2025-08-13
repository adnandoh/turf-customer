const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/gallery');
const outputDir = path.join(__dirname, '../public/gallery/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputName = path.parse(file).name + '.webp';
      const outputPath = path.join(outputDir, outputName);

      console.log(`Processing: ${file}`);

      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;

      // Convert to WebP with optimization
      await sharp(inputPath)
        .webp({ 
          quality: 85,
          effort: 6,
          lossless: false
        })
        .toFile(outputPath);

      // Get optimized file size
      const optimizedStats = fs.statSync(outputPath);
      const optimizedSize = optimizedStats.size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

      console.log(`✓ ${file} -> ${outputName}`);
      console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`  Optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`  Savings: ${savings}%\n`);
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();