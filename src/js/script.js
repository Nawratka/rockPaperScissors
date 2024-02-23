import * as model from './model.js';
import startView from './views/startView.js';

const controlStart = function(amount) {
    console.log('start ze skryptu', amount);
}

const init = function() {
    startView.addHandlerStart(controlStart);
}

init();