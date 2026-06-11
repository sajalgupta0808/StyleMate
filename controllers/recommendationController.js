const {
  generateRecommendation,
} = require(
  "../services/recommendationService"
);

async function recommendOutfit(
  req,
  res
) {

  try {

    const { occasion } =
      req.body;

    const outfit =
      await generateRecommendation(
        occasion
      );

    res.json({
      success: true,
      data: outfit,
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
  recommendOutfit,
};