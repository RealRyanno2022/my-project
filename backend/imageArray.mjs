import fs from 'fs';
import brandData from './brandData.js';

const images = {};

for (const key in brandData) {
  if (brandData.hasOwnProperty(key)) {
    const item = brandData[key];
    if (item.image) {
      const imageName = item.image.split('/').pop(); // Extract the image name from the image path
      const imagePath = `./pictures/VapePics/${item.brand}/${imageName}.png`;
      images[item.name] = imagePath;
    }
  }
}

console.log(images);

const filePath = 'imageArray2.js';
const content = `module.exports = ${JSON.stringify(images, null, 2)};`;

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log(`Successfully wrote images to ${filePath}`);
  }
});