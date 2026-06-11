const fs = require("fs");
const axios = require("axios");

async function analyzeClothingImage(imagePath) {
  try {
    console.log("Reading image...");

    const imageBase64 = fs.readFileSync(imagePath, {
      encoding: "base64",
    });

    console.log("Calling Ollama...");

    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "gemma3:4b",
//         prompt: `
// You are a fashion expert.

// Analyze the clothing item in the image.

// Return ONLY valid JSON.

// {
//   "category":"",
//   "subcategory":"",
//   "primaryColor":"",
//   "pattern":"",
//   "fit":"",
//   "occasions":[]
// }
// `,
prompt: `
You are a fashion expert.

Analyze the clothing item.

Return ONLY raw JSON.

Do NOT wrap JSON in markdown.
Do NOT use \`\`\`json.
Do NOT explain anything.

Use ONLY these categories:

- Topwear
- Bottomwear
- Footwear
- Accessories

Use accurate subcategories such as:

- T-Shirt
- Shirt
- Polo Shirt
- Hoodie
- Sweater
- Jeans
- Chinos
- Trousers
- Shorts
- Sneakers
- Loafers
- Formal Shoes
- Watch
- Belt
- Sunglasses

Return exactly:

{
  "category":"",
  "subcategory":"",
  "primaryColor":"",
  "pattern":"",
  "fit":"",
  "occasions":[]
}
`,
        images: [imageBase64],
        stream: false,
      }
    );

    console.log("Ollama response received");

    const content = response.data.response;

    console.log("Raw Response:");
    console.log(content);

    try {
      // return JSON.parse(content);
      const cleanedContent = content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      return JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error("JSON Parse Error");

      return {
        category: "Unknown",
        subcategory: "Unknown",
        primaryColor: "Unknown",
        pattern: "Unknown",
        fit: "Unknown",
        occasions: [],
        rawResponse: content,
      };
    }
  } catch (error) {
    console.error("Ollama Error:", error.message);

    throw error;
  }
}

async function explainOutfit(
  recommendation
) {

  const response =
    await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "gemma3:4b",

        prompt: `
Explain why this outfit works:

${JSON.stringify(recommendation)}

Keep answer under 3 sentences.
`,

        stream: false,
      }
    );

  return response.data.response;
}

module.exports = {
  analyzeClothingImage,
};