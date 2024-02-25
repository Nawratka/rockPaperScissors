export const state = {
  playerScore: 0,
  computerScore: 0,
  toScore: 1,
  currRound: 0
};

// GENERATES CHOICE OF COMPUTER. RETURN RANDOM INT TRANSFORMED INTO STRING - GAME OPTION
export const choiceOfComputer = function () {
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  let computerChoice = getRandomInt(1, 3);
  switch (computerChoice) {
    case 1:
      computerChoice = `rock`;
      break;
    case 2:
      computerChoice = `paper`;
      break;
    case 3:
      computerChoice = `scissors`;
      break;
  }

  return computerChoice;
};

export const awardingPoint = function (playerChoice, computerChoice) {
  // REMIS
  if (playerChoice === computerChoice) return;

  // ROCK
  if (playerChoice === 'rock' && computerChoice === 'paper') {
    state.computerScore++;
    return;
  }
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    state.playerScore++;
    return;
  }

  // PAPER
  if (playerChoice === 'paper' && computerChoice === 'rock') {
    state.playerScore++;
    return;
  }
  if (playerChoice === 'paper' && computerChoice === 'scissors') {
    state.computerScore++;
    return;
  }

  // SCISSORS
  if (playerChoice === 'scissors' && computerChoice === 'rock') {
    state.computerScore++;
    return;
  }
  if (playerChoice === 'scissors' && computerChoice === 'paper') {
    state.playerScore++;
    return;
  }
};

export const checkScores = function () {
  return (+state.playerScore === +state.toScore ||
    +state.computerScore === +state.toScore)
};
