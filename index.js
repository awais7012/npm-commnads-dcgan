import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';

export async function generateAnimeFace(number) {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }

  const timestamp = Date.now();
  const directUrl = `https://ai-r1.onrender.com/generate/${number}?t=${timestamp}`;

  const response = await fetch(directUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const buffer = await response.buffer();

  // Save the image as 'anime-face-[number].png'
  const filename = `anime-face-${number}.png`;
  await writeFile(filename, buffer);
  
  console.log(`✅ Anime face saved as ${filename}`);
}
