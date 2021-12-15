// In this file all we want to do is retrieve the attributes of the canvas and clear it upon each call to our game loop (in another file)
// Might want to edit this later so we have this class do more things such as creating the canvas and hiding it
// or even rendering another canvas in order to display a menu for starting the game, pausing, or game over

// naming convention -> may change later
export default class Canvas {
  // constructor(width, height, id) {
  //   this.canvas = document.createElement("canvas");
  //   this.canvas.width = width;
  //   this.canvas.height = height;
  //   this.canvas.id = id;
  //   this.ctx = this.canvas.getContext("2d");
  //   this.bindCanvasToDOM();
  //   document.getElementsByClassName("game-container").appendChild(this.canvas);
  // }

  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext('2d');
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  removeCanvas() {
    let gameContainer = document.getElementsByClassName('game-container');
    gameContainer.removeChild(this.canvas);
  }
}
