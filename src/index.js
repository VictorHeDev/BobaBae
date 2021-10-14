import Canvas from "./scripts/canvas.js"
import Game from "./scripts/game.js"

window.addEventListener('DOMContentLoaded', function() {
  // start animation loop
  window.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      hideGameOverMessage();
      removeMenu();

      this.game = new Game();
      this.game.kickOff();
    }
    // if (e.code === "Escape") {
    //   let gameCanvas = document.getElementById("game-canvas");
    //   gameCanvas.classList("hidden");
    // }

  })
});

function removeMenu() {
  let menu = document.getElementById("start-menu");
  menu.classList.add("hidden");
}

function hideGameOverMessage() {
  let hideMessage = document.getElementById("game-end");
  hideMessage.classList.add("hidden");
}
