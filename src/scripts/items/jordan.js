import Item from './item.js';

export default class Jordan extends Item {
  constructor(stage) {
    super(stage);
    this.spriteWidth = 810;
    this.spriteHeight = 810;
    // modifier must be the same
    this.width = 60;
    this.height = 60;
    this.x = Math.random() * this.stage.width; // canvas width is 800
    this.y = 10;
    // can also do this with id or query selector
    this.image = new Image();
    this.image.src = 'src/images/off-white.png';
    this.velY = Math.random() * 0.05 + 0.1;
    this.value = 30;
  }
}
