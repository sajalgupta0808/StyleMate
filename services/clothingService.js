const { analyzeClothingImage } = require("./aiService");

const {
  createClothingItem,
  getAllClothes,
} = require("../repositories/clothingRepository");

async function processClothingUpload(filePath) {

  const metadata =
    await analyzeClothingImage(filePath);

  const displayName =
    `${metadata.primaryColor} ${metadata.subcategory}`;

  const clothingItem =
    await createClothingItem({
      imagePath: filePath,
      displayName,
      ...metadata,
    });

  return clothingItem;
}

async function fetchWardrobe() {
  return await getAllClothes();
}

module.exports = {
  processClothingUpload,
  fetchWardrobe,
};