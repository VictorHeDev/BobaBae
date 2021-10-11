// import Canvas from "./scripts/canvas.js"
import Game from "./scripts/game.js"

window.addEventListener('DOMContentLoaded', function() {
  // this.game = new Game();
  // start animation loop
  // console.log(canvas);
  this.game = new Game();
  this.game.kickOff();
  }
);

// window.addEventListener("keydown", function(e) {
//   keys[e.keyCode] = true;
//   player.moving = true;
// });

// window.addEventListener("keyup", function(e) {
//   delete keys[e.keyCode];
//   player.moving = false;
// });