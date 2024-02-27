import * as model from './model.js';
import startView from './views/startView.js';
import gameView from './views/gameView.js';
import 'core-js/stable';
import endView from './views/endView.js';

/*
Option number reference: 
1 - ROCK
2 - PAPER
3 - SCISSORS
*/

const controlStart = function () {
  // CHANGE VIEW FROM START POINT TO GAME VIEW
  document.querySelector('.game__new-game').classList.add('hidden');

  // RENDER PLAY GAME BOARD
  gameView.render();

  // START LISTEN TO CHOOSING MOVES
  gameView.addHandlerMove(controlGame);
};

const controlGame = function (playerChoice) {
  // DEFINE COMPUTER'S CHOICE
  const computerChoice = model.choiceOfComputer();

  // DISPLAY CURRENT CHOICES ICONS ON BOARD
  gameView.renderChoices(playerChoice, computerChoice);

  // WHO GETS POINT
  model.awardingPoint(playerChoice, computerChoice);

  // DISPLAY CURRENT PUNCTATION
  gameView.showCurrentResult(
    model.state.playerScore,
    model.state.computerScore
  );

  // REMOVE PREV CHOICES ICONS FROM BOARD USING ANIMATION
  gameView.removePrevChoices();

  // CHECK IF END OF GAME AND WHO FINALLY WINS
  if (model.checkScores()) {
    setTimeout(() => {
      // TO HANDLE PREV SET ANIMATION
      let winner =
        model.state.playerScore === +model.state.toScore
          ? 'player'
          : 'computer';
      // DISPLAY WINNER
      endView.render(winner);

      // CHANGE VIEWS
      document.querySelector('.game__play').classList.add('hidden');
      endView.addHandlerNewGameBtn(prepareNewGame);
    }, 1400);
  }
};

const prepareNewGame = function () {
  // CLEAR CURRENT GAME STATE
  model.state.playerScore = 0;
  model.state.computerScore = 0;
  model.state.toScore = 1;

  // REMOVE PLAY VIEW AND END VIEW FROM GAME-MAIN CONTAINER
  const gameBox = document.querySelector('.game');
  const newGameBox = document.querySelector('.game__new-game');
  const playBox = document.querySelector('.game__play');
  const endBox = document.querySelector('.game__end');
  gameBox.removeChild(playBox);
  gameBox.removeChild(endBox);

  // // CHANGE VIEW FROM END POINT TO GAME NEW GAME
  newGameBox.classList.remove('hidden');
};

const init = function () {
  startView.render(controlStart);
};
init();
