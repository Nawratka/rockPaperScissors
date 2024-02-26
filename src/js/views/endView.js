import * as model from '../model.js';

class endView {
  _parentElement = document.querySelector('.game');

  render(winner) {
    const markup = this._generateMarkup(winner);
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _generateMarkup(winner) {
    return `
    <div class="game__end">
        <div class="game__result-box">
            <div class="game__player">
                <p class="game__player-name">Player</p>
                <p class="game__player-result">${model.state.playerScore}</p>
            </div>
            <span>:</span>
            <div class="game__player">
                <p class="game__player-result">${model.state.computerScore}</p>
                <p class="game__player-name">Computer</p>
            </div>
        </div>
        <div class="game__winner-container">
            <span class="icon">🏆</span>
            <span class="winner">${winner}</span>
            <span class="icon">🏆</span>
        </div>
        <button class="game__new-btn">New game</button>
    </div>`;
  }

  addHandlerNewGameBtn(handler) {
    const newGameBtn = document.querySelector('.game__new-btn')
    if (!newGameBtn) return;
    newGameBtn.addEventListener('click', handler)
  }
}

export default new endView();
