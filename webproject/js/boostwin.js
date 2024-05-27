let costPerVictory = 1; // Стоимость по умолчанию
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
      costPerVictory = 1;
      break;
    case "bronze":
      costPerVictory = 2;
      break;
    case "silver":
      costPerVictory = 2;
      break;
    case "gold":
      costPerVictory = 2;
      break;
    case "platinum":
      costPerVictory = 2;
      break;
    case "diamond":
      costPerVictory = 3;
      break;
    case "ascendant":
      costPerVictory = 4;
      break;
    case "immortal":
      costPerVictory = 5;
      break;
    case "radiant":
      costPerVictory = 5;
      break;
    default:
      costPerVictory = 1;
  }
  victoryCostDisplay.textContent = costPerVictory;
  totalCostDisplay.textContent = slider.value * costPerVictory;
}

function calculate() {
  document.getElementById("boostResult").textContent =
    `Boost amount: ${slider.value * costPerVictory}`;
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
  totalCostDisplay.textContent = this.value * costPerVictory;
  count = this.value;
  document.querySelector(".desired-wins #desired").innerHTML = count;
  document.querySelector(".desired-wins #desired-title").innerHTML = "Побед";
  document.getElementById("rankArrow").classList.remove("hidden");
};

victoryCostDisplay.textContent = costPerVictory;
totalCostDisplay.textContent = slider.value * costPerVictory;
