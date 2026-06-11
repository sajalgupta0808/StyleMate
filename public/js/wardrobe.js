let wardrobeData = [];

async function loadWardrobe() {

  const response =
    await fetch("/api/clothes");

  const result =
    await response.json();

  wardrobeData =
    result.data;

  renderWardrobe(
    wardrobeData
  );
}

function renderWardrobe(items) {

  const grid =
    document.getElementById(
      "wardrobeGrid"
    );

  grid.innerHTML = "";

  items.forEach(item => {

    grid.innerHTML += `

      <div class="card">

        <img
          src="/${item.image_path}"
          alt="${item.display_name}"
        >

        <div class="card-body">

          <h3 class="card-title">
            ${item.display_name || "Unknown"}
          </h3>

          <p>
            ${item.category}
          </p>

          <span class="badge">
            ${item.primary_color}
          </span>

        </div>

      </div>
    `;

  });

}

document
.getElementById("search")
.addEventListener(
  "input",
  e => {

    const value =
      e.target.value
        .toLowerCase();

    const filtered =
      wardrobeData.filter(item =>
        item.display_name
          ?.toLowerCase()
          .includes(value)
      );

    renderWardrobe(
      filtered
    );
  }
);

loadWardrobe();