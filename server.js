console.log("SERVER STARTING");

const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const db = require("./config/db");

const clothingRoutes =
  require("./routes/clothingRoutes");

const recommendationRoutes =
  require("./routes/recommendationRoutes");

const app = express();

// Middleware

app.use(cors());

app.use(express.json());

// Static Files

app.use(
  express.static(
    path.join(__dirname, "public")
  )
);

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

// API Routes

app.use(
  "/api/clothes",
  clothingRoutes
);

app.use(
  "/api/recommendations",
  recommendationRoutes
);

// Health Check

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "StyleMate API Running 🚀",
  });
});

// Start Server

const PORT =
  process.env.PORT || 3000;

async function startServer() {

  try {

    const result =
      await db.query(
        "SELECT NOW()"
      );

    console.log(
      "✅ Connected to PostgreSQL"
    );

    console.log(
      "Database Time:",
      result.rows[0].now
    );

    app.listen(
      PORT,
      () => {

        console.log(
          `🚀 Server running on port ${PORT}`
        );

        console.log(
          `🌐 Home: http://localhost:${PORT}`
        );

        console.log(
          `📤 Upload: http://localhost:${PORT}/upload.html`
        );

        console.log(
          `👕 Wardrobe: http://localhost:${PORT}/wardrobe.html`
        );

        console.log(
          `✨ Stylist: http://localhost:${PORT}/recommendation.html`
        );

        console.log(
          `📊 Dashboard: http://localhost:${PORT}/dashboard.html`
        );

      }
    );

  } catch (error) {

    console.error(
      "❌ Failed to connect to PostgreSQL"
    );

    console.error(error);

    process.exit(1);

  }

}

startServer();