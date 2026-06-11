const {
  getAllClothes,
} = require("../repositories/clothingRepository");

const {
  generateAIOutfit,
} = require("./aiRecommendationService");

async function generateRecommendation(
  occasion
) {

  const wardrobe =
    await getAllClothes();

  return await generateAIOutfit(
    occasion,
    wardrobe
  );
}

module.exports = {
  generateRecommendation,
};