const fs = require("fs");
const axios = require("axios");

async function test() {

  const image =
    fs.readFileSync(
      "./uploads/test.jpg",
      "base64"
    );

  const response =
    await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "gemma3:4b",

        prompt: `
What clothing item is this?

Return JSON:
{
  "category":"",
  "color":""
}
`,
        images: [image],

        stream: false
      }
    );

  console.log(
    response.data.response
  );
}

test();