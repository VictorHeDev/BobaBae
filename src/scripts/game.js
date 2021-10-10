import Canvas from "./canvas.js"
import Player from "./player.js"



export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.startGameLoop = this.startGameLoop.bind(this);
    this.animating = false;
    this.player = new Player();
    // this.running = false;
  }

  play() {
    this.running = true;
    this.animate();
  }

  update() {

  }

  draw() {

  }

  startGameLoop() {
    this.animating = true;
    this.canvas = new Canvas();

    // bind to stage
    // load stage



  }

  // register events
  // handle keyup/down events

  gameOver() {

  };

}