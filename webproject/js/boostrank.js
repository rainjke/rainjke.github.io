let currentRank = '';
let desiredRank = '';

  if (currentRank === '') {
    currentRank = rank;
    document.getElementById('currentRankSelection').innerHTML = <img src="${rank}.png" class="rank-image">;
  } else {
    desiredRank = rank;
    document.getElementById('desiredRankSelection').innerHTML = <img src="${rank}.png" class="rank-image">;
  }
}

function calculateBoost() {
  if (currentRank === '' || desiredRank === '') {
    alert('Пожалуйста, выберите текущий и желаемый ранг');
    return;
  }

  const rankPrices = {
    iron: 0,
    bronze: 1,
    silver: 3,
    gold: 5,
    platinum: 8,
    diamond: 12,
    ascendant: 15,
    immortal: 25,
    radiant: 50

  };

  const boostAmount = Math.abs(rankPrices[desiredRank] - rankPrices[currentRank]);
  document.getElementById('boostResult').textContent = Boost amount: $${boostAmount};
}
