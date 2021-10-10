
// Maybe I should make canvas width and height constants
// In this file all we want to do is retrieve the attributes of the canvas and clear it upon each call to our game loop (in another file)
// Might want to edit this later so we have this class do more things such as creating the canvas and hiding it
// or even rendering another canvas in order to display a menu for starting the game, pausing, or game over

export default class Canvas {
  constructor() {
    this.canvas = document.getElementById("my-canvas");
    this.canvas.width = 800;
    this.canvas.height = 600;
    this.ctx = this.canvas.getContext("2d");
  }

  clearCanvas() {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  // // maybe move this later
  // loadCurrentStage() {
  //   this.background = new Image();
  //   this.background.src = "src/images/cyberpunk-bg.png";
  //   this.renderBackground();
  //   // render score
  // }

  // renderBackground() {
  //   this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
  // }
}