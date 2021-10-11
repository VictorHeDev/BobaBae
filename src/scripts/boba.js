import Item from "./item.js"

export default class Boba extends Item {
  constructor(game) {
    super(game);
    // check sprite dimensions
    this.spriteWidth = 349;
    this.spriteHeight = 641;
    // modifier must be the same
    this.width = 60;
    this.height = 60;

    // temp solution change to referring Canvas class
    // ------>
    // this.canvas.width = 800
    this.x = (Math.random() * 800);
    // ------>

    this.y = 10;
    // can also do this with id or query selector
    this.image = new Image();
    this.image.src = "src/images/boba2.png";
    this.velY = (Math.random() * 0.1 + 1);
  }
}
