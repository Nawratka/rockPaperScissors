export const state = {
  playerScore: 0,
  computerScore: 0,
  rounds: 1,
  currRound: 1,
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
