import 'core-js/stable';
class startView {
  _parentElement = document.querySelector('.game');
  _newGameContainer = document.querySelector('.game__new-game');

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  _generateMarkup() {
    return `    
    <div class="game__new-game">
        <p class="game__question">Choose amount of games: </p>
        <span class="game__amount" data-amount="1">1</span>
        <span class="game__amount" data-amount="3">3</span>
        <span class="game__amount" data-amount="5">5</span>
    </div>`;
  }

  // pass amount of chosen rounds
  addHandlerStart(handler) {
    if (!this._newGameContainer) return;
    this._newGameContainer.addEventListener('click', e => {
      const amount = e.target.dataset.amount;
      handler(amount);
    });
  }
}

export default new startView();
