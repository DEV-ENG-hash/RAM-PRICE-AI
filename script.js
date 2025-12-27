function searchRAM() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  let filtered = ramData.filter(ram =>
    ram.name.toLowerCase().includes(input)
  );

  filtered.sort((a, b) => a.price - b.price);

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>No RAM found</p>";
    return;
  }

  filtered.forEach((ram, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${ram.name}</h3>
      <p><strong>Price:</strong> $${ram.price}</p>
      <p><strong>Store:</strong> ${ram.store}</p>
      <p><strong>Location:</strong> ${ram.location}</p>
      <p><strong>Status:</strong> ${ram.stock}</p>
      ${index === 0 ? "<span class='badge'>🤖 AI Recommended</span>" : ""}
      <button class="buy">View Deal</button>
    `;
    resultsDiv.appendChild(div);
  });
}
