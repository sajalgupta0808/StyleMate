async function loadWardrobe() {

  const response =
    await fetch(
      "/api/clothes"
    );

  const result =
    await response.json();

  const container =
    document.getElementById(
      "wardrobeContainer"
    );

  container.innerHTML = "";

  result.data.forEach(item => {

    container.innerHTML += `

      <div class="col-md-4 mb-4">

        <div class="card">

          <img
            src="/${item.image_path}"
            class="card-img-top"
            style="
              height:300px;
              object-fit:cover;
            "
          >

          <div class="card-body">

            <h5>
              ${item.category || "Unknown"}
            </h5>

            <p>
              Color:
              ${item.primary_color || "Unknown"}
            </p>

            <p>
              Pattern:
              ${item.pattern || "Unknown"}
            </p>

          </div>

        </div>

      </div>
    `;
  });
}

loadWardrobe();