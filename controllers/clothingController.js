const {
  processClothingUpload,
  fetchWardrobe,
} = require("../services/clothingService");

async function uploadClothing(req, res) {
  try {
    const filePath = req.file.path;

    const clothingItem =
      await processClothingUpload(filePath);

    res.status(201).json({
      success: true,
      data: clothingItem,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getWardrobe(req, res) {
  try {

    const clothes =
      await fetchWardrobe();

    res.status(200).json({
      success: true,
      data: clothes,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  uploadClothing,
  getWardrobe,
};