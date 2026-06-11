async function generateOutfit() {

  const occasion =
    document.getElementById(
      "occasion"
    ).value;

  document.getElementById(
    "result"
  ).innerHTML = `
    <div class="spinner"></div>
    <p>AI is styling your outfit...</p>
  `;

  const response =
    await fetch(
      "/api/recommendations",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          occasion
        })
      }
    );

  const result =
    await response.json();

  document.getElementById(
    "result"
  ).innerHTML = `

    <div class="card">

      <div class="card-body">

        <h2>
          Recommended Outfit
        </h2>

        <p>
          👔 Top:
          ${result.data.top || "N/A"}
        </p>

        <p>
          👖 Bottom:
          ${result.data.bottom || "N/A"}
        </p>

        <p>
          👟 Footwear:
          ${result.data.footwear || "N/A"}
        </p>

        <hr>

        <h3>
          Why this works
        </h3>

        <p>
          ${result.data.reason || ""}
        </p>

      </div>

    </div>
  `;
}