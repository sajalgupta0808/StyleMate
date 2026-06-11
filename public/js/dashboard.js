async function loadDashboard() {

  const response =
    await fetch("/api/clothes");

  const result =
    await response.json();

  const clothes =
    result.data;

  const total =
    clothes.length;

  const topwear =
    clothes.filter(
      item =>
      item.category ===
      "Topwear"
    ).length;

  const bottomwear =
    clothes.filter(
      item =>
      item.category ===
      "Bottomwear"
    ).length;

  const footwear =
    clothes.filter(
      item =>
      item.category ===
      "Footwear"
    ).length;

  const accessories =
    clothes.filter(
      item =>
      item.category ===
      "Accessories"
    ).length;

  document.getElementById(
    "stats"
  ).innerHTML = `

    <div class="stat-card">
      <h2>${total}</h2>
      <p>Total Clothes</p>
    </div>

    <div class="stat-card">
      <h2>${topwear}</h2>
      <p>Topwear</p>
    </div>

    <div class="stat-card">
      <h2>${bottomwear}</h2>
      <p>Bottomwear</p>
    </div>

    <div class="stat-card">
      <h2>${footwear}</h2>
      <p>Footwear</p>
    </div>

    <div class="stat-card">
      <h2>${accessories}</h2>
      <p>Accessories</p>
    </div>
  `;
}

loadDashboard();