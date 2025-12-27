const ramData = [
  {
    name: "Corsair 8GB DDR4",
    price: 28,
    store: "Amazon",
    location: "Online",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
  },
  {
    name: "Kingston 16GB DDR4",
    price: 55,
    store: "Newegg",
    location: "Online",
    stock: "Limited Stock",
    image: "https://images.unsplash.com/photo-1612197527762-2f8eebf0c7b7"
  },
  {
    name: "Crucial 8GB DDR4",
    price: 26,
    store: "Local PC Store",
    location: "New York",
    stock: "In Stock",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704"
  }
];
function searchRAM() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("results");
  results.innerHTML = "";

  let filtered = ramData.filter(ram =>
    ram.name.toLowerCase().includes(input)
  );

  filtered.sort((a, b) => a.price - b.price);

  filtered.forEach((ram, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${ram.image}" alt="RAM Image">
      <h3>${ram.name}</h3>
      <p>💲 ${ram.price}</p>
      <p>🏪 ${ram.store} · ${ram.location}</p>
      <p>📦 ${ram.stock}</p>
      ${index === 0 ? "<span class='badge'>AI Best Deal</span>" : ""}
      <button class="buy">View Deal</button>
    `;
    results.appendChild(card);
  });
}

