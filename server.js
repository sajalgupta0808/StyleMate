console.log("SERVER STARTING");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const clothingRoutes = require("./routes/clothingRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static("public"));

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/clothes", clothingRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "StyleMate API Running 🚀",
  });
});

const recommendationRoutes =
  require(
    "./routes/recommendationRoutes"
  );

app.use(
  "/api/recommendations",
  recommendationRoutes
);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Test PostgreSQL connection
    const result = await db.query("SELECT NOW()");

    console.log("✅ Connected to PostgreSQL");
    console.log("Database Time:", result.rows[0].now);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 http://localhost:${PORT}`);
      console.log(
        `👕 Wardrobe Page: http://localhost:${PORT}/wardrobe.html`
      );
    });
  } catch (error) {
    console.error("❌ Failed to connect to PostgreSQL");
    console.error(error);
    process.exit(1);
  }
}

startServer();