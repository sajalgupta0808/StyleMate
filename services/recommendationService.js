const {
  getAllClothes,
} = require("../repositories/clothingRepository");

async function generateRecommendation(
  occasion
) {

  const clothes =
    await getAllClothes();

  const tops =
    clothes.filter(item =>
      item.category?.toLowerCase()
        .includes("top")
    );

  const bottoms =
    clothes.filter(item =>
      item.category?.toLowerCase()
        .includes("bottom")
    );

  const footwear =
    clothes.filter(item =>
      item.category?.toLowerCase()
        .includes("foot")
    );

  return {
    occasion,
    top:
      tops.length > 0
        ? tops[0]
        : null,

    bottom:
      bottoms.length > 0
        ? bottoms[0]
        : null,

    footwear:
      footwear.length > 0
        ? footwear[0]
        : null,
  };
}

module.exports = {
  generateRecommendation,
};