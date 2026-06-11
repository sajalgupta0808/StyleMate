const express = require("express");

const upload =
  require("../middleware/uploadMiddleware");

const {
  uploadClothing,
  getWardrobe,
} = require("../controllers/clothingController");

const router = express.Router();

router.post(
  "/upload",
  upload.single("image"),
  uploadClothing
);

router.get(
  "/",
  getWardrobe
);

module.exports = router;