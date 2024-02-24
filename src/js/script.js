import * as model from './model.js';
import startView from './views/startView.js';
import gameView from './views/gameView.js';

/*
Option number reference: 
1 - ROCK
2 - PAPER
3 - SCISSORS
*/

const controlStart = function (amount) {
  model.state.toScore = amount;
  startView._newGameContainer.classList.add('hidden');
  gameView.render();
  gameView.addHandlerMove(controlGame);
};

const controlGame = function (playerChoice) {
  const computerChoice = model.choiceOfComputer();
  gameView.renderChoices(playerChoice, computerChoice);
  model.singleGamePoints(playerChoice, computerChoice);
  gameView.showCurrentResult(
    model.state.playerScore,
    model.state.computerScore
  );

  // CHECK IF END OF GAME
  if (model.checkScores()) console.log('koniec gry');
};

const init = function () {
  startView.addHandlerStart(controlStart);
};

init();
