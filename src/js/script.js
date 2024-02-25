import * as model from './model.js';
import startView from './views/startView.js';
import gameView from './views/gameView.js';
import 'core-js/stable';

/*
Option number reference: 
1 - ROCK
2 - PAPER
3 - SCISSORS
*/

const controlStart = function (amount) {
  model.state.currRound = 0;

  // SET WINNING SCORE
  model.state.toScore = amount;
  startView._newGameContainer.classList.add('hidden');

  // CHANGE VIEW FROM START POINT TO GAME VIEW
  gameView.render();

  // START LISTEN TO CHOOSING MOVES
  gameView.addHandlerMove(controlGame);
};

const controlGame = function (playerChoice) {
  model.state.currRound++;

  // DEFINE COMPUTER'S CHOICE
  const computerChoice = model.choiceOfComputer();

  // DISPLAY CURRENT CHOICES ON BOARD
  gameView.renderChoices(playerChoice, computerChoice);

  // WHO GETS POINT
  model.awardingPoint(playerChoice, computerChoice);

  // DISPLAY CURRENT PUNCTATION
  gameView.showCurrentResult(
    model.state.playerScore,
    model.state.computerScore
  );

  // CHECK IF END OF GAME
  if (model.checkScores()) console.log('koniec gry');

  // REMOVE PREV CHOICES ICONS FROM BOARD
  gameView.removePrevChoices();
};

const init = function () {
  startView.addHandlerStart(controlStart);
};
init();
