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
});

function removeMenu() {
  let menu = document.getElementById('start-menu');
  menu.classList.add('hidden');
}

function hideGameOverMessage() {
  let hideMessage = document.getElementById('game-end');
  hideMessage.classList.add('hidden');
}
