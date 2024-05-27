let costPerGame = 1; // Стоимость по умолчанию
const slider = document.getElementById("victorySlider");
const victoryCountDisplay = document.getElementById("victoryCount");
const victoryCostDisplay = document.getElementById("victoryCost");
const totalCostDisplay = document.getElementById("totalCost");
const rankImages = document.querySelectorAll(".rank-image");
let currentRank = "";

// Функция для обновления стоимости в зависимости от ранга
function updateCost(rank) {
  switch (rank) {
    case "iron":
      costPerGame = 1;
      break;
    case "bronze":
      costPerGame = 2;
      break;
    case "silver":
      costPerGame = 2;
      break;
    case "gold":
      costPerGame = 2;
      break;
    case "platinum":
      costPerGame = 2;
      break;
    case "diamond":
      costPerGame = 3;
      break;
    case "ascendant":
      costPerGame = 4;
      break;
    case "immortal":
      costPerGame = 5;
      break;
    case "radiant":
      costPerGame = 5;
      break;
    default:
      costPerGame = 1;
  }
  victoryCostDisplay.textContent = costPerGame;
  totalCostDisplay.textContent = slider.value * costPerGame;
}

function calculate() {
  document.getElementById("boostResult").textContent =
    `Boost amount: ${slider.value * costPerGame}`;
}

document.querySelector(".calculate").addEventListener("click", calculate);

rankImages.forEach((image) => {
  image.addEventListener("click", function () {
    if (currentRank && currentRank !== this.id) {
      document
        .querySelector(`#currentRankSelection .rank-image#${currentRank}`)
        .classList.remove("rank-selected");
    }
    updateCost(this.id);
    currentRank = this.id;
    document.querySelector(".order #current-image").src = this.src;
    document.querySelector(".order #current-image").classList.remove("hidden");
    document.getElementById("rankArrow").classList.remove("hidden");
    document
      .querySelector(`#currentRankSelection .rank-image#${currentRank}`)
      .classList.add("rank-selected");
  });
});

slider.oninput = function () {
  victoryCountDisplay.textContent = this.value;
  totalCostDisplay.textContent = this.value * costPerGame;
  count = this.value;
  document.querySelector(".desired-wins #desired").innerHTML = count;
  document.querySelector(".desired-wins #desired-title").innerHTML = "Игр";
  document.getElementById("rankArrow").classList.remove("hidden");
};

victoryCostDisplay.textContent = costPerGame;
totalCostDisplay.textContent = slider.value * costPerGame;
