const express = require("express");

const {
  recommendOutfit,
} = require(
  "../controllers/recommendationController"
);

const router =
  express.Router();

router.post(
  "/",
  recommendOutfit
);

module.exports = router;