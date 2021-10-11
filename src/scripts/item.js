
export default class Item {
  // here we can make our code more dynamic by passing in the game, which already has the canvas' width and height variables
  constructor(game) {
    this.game = game;
    this.offScreen = false;
  }
  update() {
    // this.y++;
    // make deltaTime a global variable? * deltaTime
    this.y += this.velY;
    if ((this.y - this.height ) > 600) {
      this.offScreen = true;
    }
  }

  draw(ctx) {
    // ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(this.image, 0, 0, this.spriteHeight, this.spriteHeight, this.x, this.y, this.width, this.height);
  }

}