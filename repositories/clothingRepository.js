const db = require("../config/db");

async function createClothingItem(item) {
  const query = `
    INSERT INTO clothing_items (
      image_path,
      display_name,
      category,
      subcategory,
      primary_color,
      pattern,
      fit,
      occasions
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *;
  `;

  const values = [
    item.imagePath,
    item.displayName,
    item.category,
    item.subcategory,
    item.primaryColor,
    item.pattern,
    item.fit,
    JSON.stringify(item.occasions),
  ];

  const result = await db.query(query, values);

  return result.rows[0];
}

async function getAllClothes() {
  const result = await db.query(`
    SELECT *
    FROM clothing_items
    ORDER BY id DESC
  `);

  return result.rows;
}

module.exports = {
  createClothingItem,
  getAllClothes,
};