const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const artifactsDir = `C:\\Users\\yigit\\.gemini\\antigravity\\brain\\07787719-7a03-4494-a96a-9960466c81b5`;
const publicImagesDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

const files = [
    { source: 'hero_lock_cylinder_1776165877116.png', dest: 'hero-lock-cylinder.webp' },
    { source: 'service_key_cutting_1776165891561.png', dest: 'service-key-cutting.webp' },
    { source: 'service_auto_lock_1776165934801.png', dest: 'service-auto-lock.webp' },
    { source: 'about_storefront_1776165907840.png', dest: 'about-storefront.webp' }
];

async function convertImages() {
    for (const file of files) {
        const inputPath = path.join(artifactsDir, file.source);
        const outputPath = path.join(publicImagesDir, file.dest);
        
        if (fs.existsSync(inputPath)) {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Converted ${file.source} to ${file.dest}`);
        } else {
            console.error(`File not found: ${inputPath}`);
        }
    }
}

convertImages().catch(console.error);
