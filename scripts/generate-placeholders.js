// This script uses sharp to generate placeholder images
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const placeholders = [
  {
    name: 'hero-bg.jpg',
    width: 1920,
    height: 1080,
    text: 'Hospital Hero Image',
  },
  {
    name: 'doctors/doctor1.jpg',
    width: 600,
    height: 800,
    text: 'Dr. John Smith',
  },
  {
    name: 'doctors/doctor2.jpg',
    width: 600,
    height: 800,
    text: 'Dr. Ayush Sharma',
  },
  {
    name: 'blog/integration.jpg',
    width: 800,
    height: 600,
    text: 'Modern Medicine & Ayurveda',
  },
  {
    name: 'blog/diet.jpg',
    width: 800,
    height: 600,
    text: 'Ayurvedic Diet',
  },
  {
    name: 'blog/chronic-conditions.jpg',
    width: 800,
    height: 600,
    text: 'Chronic Conditions',
  },
  {
    name: 'blog/stress.jpg',
    width: 800,
    height: 600,
    text: 'Stress Management',
  },
  {
    name: 'blog/remedies.jpg',
    width: 800,
    height: 600,
    text: 'Natural Remedies',
  },
  {
    name: 'blog/herbs.jpg',
    width: 800,
    height: 600,
    text: 'Ayurvedic Herbs',
  },
  {
    name: 'about-mission.jpg',
    width: 1200,
    height: 800,
    text: 'Our Mission',
  },
];

async function generatePlaceholder({ name, width, height, text }) {
  // escape XML special chars in the text to avoid SVG parse errors
  const escapeXml = (str) =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#16a34a"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, Helvetica, sans-serif" 
        font-size="32" 
        fill="white" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${escapeXml(text)}
      </text>
    </svg>
  `;

  const outputPath = path.join(process.cwd(), 'public', 'images', name);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(Buffer.from(svg))
    .jpeg()
    .toFile(outputPath);

  console.log(`Generated: ${name}`);
}

async function main() {
  for (const placeholder of placeholders) {
    await generatePlaceholder(placeholder);
  }
}

main().catch(console.error);