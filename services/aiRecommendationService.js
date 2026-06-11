const axios = require("axios");

async function generateAIOutfit(
  occasion,
  wardrobe
) {

  const prompt = `
You are a professional fashion stylist.

Occasion:
${occasion}

Available wardrobe:

${JSON.stringify(
  wardrobe,
  null,
  2
)}

Choose:

- one top
- one bottom
- one footwear

Return ONLY JSON.

{
  "top":"",
  "bottom":"",
  "footwear":"",
  "reason":""
}
`;

  const response =
    await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "gemma3:4b",
        prompt,
        stream: false,
      }
    );

  const content =
    response.data.response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

  return JSON.parse(content);
}

module.exports = {
  generateAIOutfit,
};