const searchInput = document.querySelector(".search-input");
const animeCards = document.querySelectorAll(".anime-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  animeCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "" : "none";
  });
});

animeCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
