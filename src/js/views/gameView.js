import 'core-js/stable';
import * as model from '../model.js';

class gameView {
  _parentElement = document.querySelector('.game');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _generateMarkup() {
    return `    
        <div class="game__play">
            <div class="game__result-box">
                <div class="game__player">
                    <p class="game__player-name">Player</p>
                    <p class="game__player-result game__player-result--player">${model.state.playerScore}</p>
                </div>
                <span>:</span>
                <div class="game__player">
                    <p class="game__player-result game__player-result--computer">${model.state.computerScore}</p>
                    <p class="game__player-name">Computer</p>
                </div>
            </div>
            <div class="game__board">
                <div class="game__part game__part--player"></div>
                <span>VS</span>
                <div class="game__part game__part--computer"></div>
            </div>
            <div class="game__options">
                <p class="game__options-text">Choose your move</p>
                <span class="game__option" data-option_number="1" data-option="rock">✊</span>
                <span class="game__option" data-option_number="2" data-option="paper">✋</span>
                <span class="game__option" data-option_number="3" data-option="scissors">🖖</span>
            </div>
        </div>`;
  }

  addHandlerMove(handler) {
    const movesContainer = document.querySelector('.game__options');
    movesContainer.addEventListener('click', function (e) {
      if (!movesContainer || !e.target.classList.contains('game__option')) return;
      const choice = e.target.dataset.option;
      handler(choice);
    });
  }

  renderChoices(playerChoice, computerChoice) {
    const playerBoard = document.querySelector('.game__part--player');
    const computerBoard = document.querySelector('.game__part--computer');

    playerBoard.textContent = this.changeNameToIcon(playerChoice);
    computerBoard.textContent = this.changeNameToIcon(computerChoice);
  }

  changeNameToIcon(name) {
    if (name === 'rock') return '✊';
    if (name === 'paper') return '✋';
    if (name === 'scissors') return '🖖';
  }

  showCurrentResult(playerScore, computerScore) {
    const playerResult = document.querySelector('.game__player-result--player');
    const computerResult = document.querySelector(
      '.game__player-result--computer'
    );
    playerResult.textContent = playerScore;
    computerResult.textContent = computerScore;
  }

  removePrevChoices() {
    document.querySelectorAll('.game__options').forEach(option => {
      option.style.pointerEvents = 'none';
    })
    const playerBoard = document.querySelector('.game__part--player');
    const computerBoard = document.querySelector('.game__part--computer');

    playerBoard.classList.add('addAnimationLeft');
    computerBoard.classList.add('addAnimationRight');

    playerBoard.addEventListener('animationend', () => {
      playerBoard.innerHTML = '';
      playerBoard.classList.remove('addAnimationLeft');

      document.querySelectorAll('.game__options').forEach(option => {
        option.style.pointerEvents = 'auto';
      })
    });

    computerBoard.addEventListener('animationend', () => {
      computerBoard.innerHTML = '';
      computerBoard.classList.remove('addAnimationRight');
    });
  }
}

export default new gameView();
