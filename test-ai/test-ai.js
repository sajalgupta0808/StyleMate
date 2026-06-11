require("dotenv").config();

console.log("1. File started");

const {
    analyzeClothingImage
} = require("../services/aiService");

console.log("2. AI service imported");

(async () => {
    try {
        console.log("3. Entering main function");

        const fs = require("fs");

        const files = fs.readdirSync("./uploads");

        console.log(files);

        const result = await analyzeClothingImage(
            `./uploads/${files[0]}`
        );
        console.log("4. Got result");

        console.log(result);

    } catch (err) {
        console.error("ERROR:");
        console.error(err);
    }
})();