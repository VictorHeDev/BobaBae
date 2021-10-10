import Canvas from "./scripts/canvas.js"
import Player from "./scripts/player.js"

document.addEventListener('DOMContentLoaded', () => {
  const canvas = new Canvas();
  console.log(canvas);

  // rendering a rectangle. Delete this later
  let player = new Player(canvas.ctx);
  // calling step -> 30 FPS. Refactor later using requestAnimationFrame for smoother animations
  let gameLoop = setInterval(step, 1000/30);

  // Can move this Game class to it's own file later
  // side note, will the reference to this within Game class be what we expect because this is currently within an arrow function?
  // class Game {
  //   constructor() {
  //     this.startGameLoop = this.startGameLoop.bind(this);
  //   }

  //   startGameLoop() {


  //   }

  // }

  // this.canvas.loadCurrentStage();

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
