// import Canvas from "./scripts/canvas.js"
import Game from "./scripts/game.js"

document.addEventListener('DOMContentLoaded', function() {
  // this.game = new Game();
  // start animation loop
  console.log(canvas);
  const game = new Game();




  // Can move this Game class to it's own file later
  // side note, will the reference to this within Game class be what we expect because this is currently within an arrow function?


  this.canvas.loadCurrentStage();

  /*
    call for window.requestAnimationFrame which takes it a callback to itself for recursive loop

  */

 // DELETE LATER
 // called in our gameLoop
  function step() {
    // console.log(player);
    // step player
    player.step(canvas.ctx);

    // draw everything
    draw(canvas.ctx);
  }

  function draw(ctx) {
    // invoke or not?
    canvas.ctx.fillStyle = "green";
    canvas.clearCanvas();

    // draw the player
    player.draw(canvas.ctx);
  }

})
