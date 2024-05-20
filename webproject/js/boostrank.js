let currentRank = '';
let desiredRank = '';

function selectRank(rank) {
  if (!currentRank) {
    currentRank = rank;
    document.getElementById('currentRankSelection').innerHTML = `<img src="img/ranks/${rank}.png" class="rank-image" title="${rank}">`;
  } else if (!desiredRank) {
    desiredRank = rank;
    document.getElementById('desiredRankSelection').innerHTML = `<img src="img/ranks/${rank}.png" class="rank-image" title="${rank}">`;
  }
}

function calculateBoost() {
  if (!currentRank || !desiredRank) {
    alert('Please select current and desired ranks.');
    return;
  }

  const rankPrices = {
    iron: 1,
    bronze: 2,
    silver: 3,
    gold: 4,
    platinum: 5,
    diamond: 6,
    ascendant: 7,
    immortal: 8,
    radiant: 9
  };

  const rrRanges = {
    '0-20': 1,
    '21-40': 2,
    '41-60': 3,
    '61-80': 4,
    '81-100': 5
  };

  const currentRankPrice = rankPrices[currentRank];
  const desiredRankPrice = rankPrices[desiredRank];
  const currentRrMultiplier = rrRanges[document.getElementById('current-lp').value];

  if (currentRankPrice >= desiredRankPrice) {
    alert('Desired rank must be higher than the current rank.');
    return;
  }

  const boostPrice = (desiredRankPrice - currentRankPrice) * currentRrMultiplier * 10;

  document.getElementById('boostResult').textContent = `Стоимость буста: ${boostPrice} $`;
}
