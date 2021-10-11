import Canvas from "./scripts/canvas.js"
import Game from "./scripts/game.js"

window.addEventListener('DOMContentLoaded', function() {
  // start animation loop
  // console.log(canvas);
  // this.game = new Game();
  // this.game.kickOff();

  window.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      this.game = new Game();
      this.game.kickOff();
    }

    if (e.code === "Escape") {
      let gameCanvas = document.getElementById("game-canvas");
      gameCanvas.classList("hidden");
    }


  })
});


// window.addEventListener("keydown", function(e) {
//   keys[e.keyCode] = true;
//   player.moving = true;
// });

// window.addEventListener("keyup", function(e) {
//   delete keys[e.keyCode];
//   player.moving = false;
// });