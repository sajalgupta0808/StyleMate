const db = require("../config/db");

async function getClothesByCategory(category) {
  const result = await db.query(
    `
    SELECT *
    FROM clothing_items
    WHERE LOWER(category) = LOWER($1)
    `,
    [category]
  );

  return result.rows;
}

module.exports = {
  getClothesByCategory,
};