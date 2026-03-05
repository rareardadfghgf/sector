import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Skip if not an image or if it's a directory
    if (!['.jpg', '.jpeg', '.png', '.webp', '.jfif'].includes(ext)) {
      continue;
    }

    // Skip if it's a directory (readdirSync returns names, not stats)
    if (fs.lstatSync(filePath).isDirectory()) {
      continue;
    }

    const fileName = path.basename(file, ext);
    const outputFilePath = path.join(imagesDir, `${fileName}.webp`);

    console.log(`Optimizing ${file}...`);

    try {
      const metadata = await sharp(filePath).metadata();
      let pipeline = sharp(filePath);

      // Resize logic:
      // Max width 1600px for everything to be safe and performant
      if (metadata.width > 1600) {
        pipeline = pipeline.resize({ width: 1600 });
      }

      await pipeline
        .webp({ quality: 80 }) // Good balance of quality and size
        .toFile(outputFilePath);

      console.log(`Saved optimized image to ${outputFilePath}`);
      
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
}

optimizeImages();
