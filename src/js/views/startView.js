import 'core-js/stable';
import * as model from '../model.js';
class startView {
  _parentElement = document.querySelector('.game');

  render(handler) {
    // GENERATE VIEW
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markup);

    // ADD LISTENER WITH AMOUNT OF GAMES
    const newGameContainer = document.querySelector('.game__new-game');
    newGameContainer.addEventListener('click', e => {
      model.state.toScore = e.target.dataset.amount;
      handler();
    });
  }

  _generateMarkup() {
    return `    
    <div class="game__new-game">
        <p class="game__question">Number of games: </p>
        <span class="game__amount" data-amount="1">1</span>
        <span class="game__amount" data-amount="3">3</span>
        <span class="game__amount" data-amount="5">5</span>
    </div>`;
  }
}

export default new startView();
