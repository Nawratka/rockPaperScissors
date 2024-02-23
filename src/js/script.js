import * as model from './model.js';
import startView from './views/startView.js';
import gameView from './views/gameView.js';

/*
Option number reference: 
1 - ROCK
2 - PAPER
3 - SCISSORS
*/

const controlStart = function(amount) {
    model.state.rounds = amount;
    startView._newGameContainer.classList.add('hidden')
    gameView.render();
    gameView.addHandlerMove(controlGame);
}

const controlGame = function(playerChoice) {
    console.log(playerChoice);
    const computerChoice = model.choiceOfComputer()
    console.log(computerChoice);
    gameView.renderChoices(playerChoice, computerChoice);
}

const init = function() {
    startView.addHandlerStart(controlStart);
}

init();