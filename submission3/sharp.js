const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heroes');
const destination = path.resolve(__dirname, 'src/public/images/heroes-responsive');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  const imagePath = path.join(target, image);
  const imageNameWithoutExtension = image.split('.').slice(0, -1).join('.');

  // Membuat default image dengan akhiran -default.jpg
  fs.copyFileSync(
    imagePath,
    path.resolve(__dirname, `${destination}/${imageNameWithoutExtension}-default.jpg`),
  );

  // Mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
  sharp(imagePath)
    .resize(1000)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${imageNameWithoutExtension}-large.jpg`,
      ),
    );

  // Mengubah ukuran gambar dengan lebar 800px, dengan prefix -medium.jpg
  sharp(imagePath)
    .resize(800)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${imageNameWithoutExtension}-medium.jpg`,
      ),
    );

  // Mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
  sharp(imagePath)
    .resize(480)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${imageNameWithoutExtension}-small.jpg`,
      ),
    );
});
