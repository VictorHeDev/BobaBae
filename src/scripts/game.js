import Canvas from "./canvas.js"
import Stage from "./stage.js"

export default class Game {
  constructor() {
    this.kickOff = this.kickOff.bind(this);
    this.running = false; // true when constructed?
    // this.animating = false;
  }

  // call for window.requestAnimationFrame which takes it a callback to itself for recursive loop
  // calculate deltaTime
  kickOff() {
    this.animating = true;
    this.canvas = new Canvas(); // grabs the "game-canvas" id
    this.stage = new Stage(this.canvas.ctx)
    this.stage.loadCurrentStage();
    this.animation = () => {
      this.canvas.clearCanvas();
      if (this.animating) {
        this.stage.updateEntities();
        this.interval = window.requestAnimationFrame(this.animation);
      }
    }
    // calls recursively and passes in timeStamp variable
    window.requestAnimationFrame(this.animation)
  }

  pause() {
    // when escape key is hit, we want to effectively stop the animation loop
    this.running = false;

  }

  gameOver() {
    // stop the game
    // display thank you message
    // display play again button

  }

}


  // play() {
  //   this.running = true;
  //   this.animate();
  // }

  // update() {

  // }

  // draw() {

  // }

  // // register events
  // // handle keyup/down events

  // gameOver() {

  // };

  // // restart() {
  // //   this.running = false;
  // //   this.score = 0;

  // // }



