import Item from "./item.js"

export default class Bee extends Item {
  constructor(stage) {
    super(stage);
    this.spriteWidth = 363;
    this.spriteHeight = 389;
    // modifier must be the same
    this.width = 60;
    this.height = 60;
    this.x = (Math.random() * 800);
    this.y = 10;
    // can also do this with id or query selector
    this.image = new Image();
    this.image.src = "src/images/bobabee.png";
    this.velY = (Math.random() * 0.1 + 1.5);
    this.value = 10;
  }
}