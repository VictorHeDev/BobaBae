export default class Item {
  // * here we can make our code more dynamic by passing in the stage, which already has the canvas' width and height variables
  constructor(stage) {
    this.stage = stage;
    this.offScreen = false;
    this.playerCollision = false;
    this.value = 10; // TODO: we will likely give each item a different score value later
  }

  update(deltaTime) {
    this.y += this.velY * deltaTime;
    this.y - this.height > this.stage.height
      ? (this.offScreen = true)
      : (this.offScreen = false);
  }

  draw(ctx) {
    // ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.image,
      0,
      0,
      this.spriteHeight,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.drawHitbox(ctx); // ! comment out when deploying
  }

  // dummy hitbhox method
  drawHitbox(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
}
