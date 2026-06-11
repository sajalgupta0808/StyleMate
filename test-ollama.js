const axios = require("axios");

async function test() {

  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "gemma3:4b",
      prompt: "What color is a black shirt?",
      stream: false
    }
  );

  console.log(response.data.response);
}

test();