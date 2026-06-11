async function generateOutfit() {

  const occasion =
    document.getElementById(
      "occasion"
    ).value;

  const response =
    await fetch(
      "/api/recommendations",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          occasion,
        }),
      }
    );

  const result =
    await response.json();

  document.getElementById(
    "result"
  ).innerHTML = `
    <div class="card p-3">

      <h3>
        Recommended Outfit
      </h3>

      <p>
        Top:
        ${
          result.data.top
            ?.display_name
            || "N/A"
        }
      </p>

      <p>
        Bottom:
        ${
          result.data.bottom
            ?.display_name
            || "N/A"
        }
      </p>

      <p>
        Footwear:
        ${
          result.data.footwear
            ?.display_name
            || "N/A"
        }
      </p>

    </div>
  `;
}