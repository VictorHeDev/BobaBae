import Canvas from './scripts/canvas.js';
import Game from './scripts/game.js';

window.addEventListener('DOMContentLoaded', () => {
  const startGame = document.querySelector('#start-btn');

  startGame.addEventListener('click', (e) => {
    e.preventDefault();
    hideGameOverMessage();
    removeMenu();

    let game = new Game();
    // game.kickOff(30);
    game.kickOff();
  });

  const restartGame = document.querySelector('#restart-btn');
  restartGame.addEventListener('click', (e) => {
    e.preventDefault();
    hideGameOverMessage();
    removeMenu();

    let game = new Game();
    game.kickOff();
  });

  const instructions = document.querySelector('.instructions');
  instructions.addEventListener('mouseenter', (e) => {
    revealInstructions();
  });
  instructions.addEventListener('mouseleave', (e) => {
    hideInstructions();
  });

  const items = document.querySelector('.items');
  items.addEventListener('mouseenter', (e) => {
    revealItems();
  });
  items.addEventListener('mouseleave', (e) => {
    hideItems();
  });

  const purpose = document.querySelector('.purpose');
  purpose.addEventListener('mouseenter', (e) => {
    revealPurpose();
  });
  purpose.addEventListener('mouseleave', (e) => {
    hidePurpose();
  });
});

function removeMenu() {
  let menu = document.getElementById('start-menu');
  menu.classList.add('hidden');
}

function hideGameOverMessage() {
  let hideMessage = document.getElementById('game-end');
  hideMessage.classList.add('hidden');
}

function revealInstructions() {
  let instructionsLegend = document.getElementById('instructions-container');
  instructionsLegend.classList.remove('hidden');
}

function hideInstructions() {
  let instructionsLegend = document.getElementById('instructions-container');
  instructionsLegend.classList.add('hidden');
}

function revealItems() {
  let itemsLegend = document.getElementById('items-container');
  itemsLegend.classList.remove('hidden');
}

function hideItems() {
  let itemsLegend = document.getElementById('items-container');
  itemsLegend.classList.add('hidden');
}

function revealPurpose() {
  let purposeLegend = document.getElementById('purpose-container');
  purposeLegend.classList.remove('hidden');
}

function hidePurpose() {
  let purposeLegend = document.getElementById('purpose-container');
  purposeLegend.classList.add('hidden');
}
