import Item from './item.js';

export default class Dj extends Item {
  constructor(stage) {
    super(stage);
    this.spriteWidth = 897;
    this.spriteHeight = 896;
    // modifier must be the same
    this.width = 70;
    this.height = 70;
    this.x = Math.random() * this.stage.width; // canvas width is 800
    this.y = 10;
    // can also do this with id or query selector
    this.image = new Image();
    this.image.src = 'src/images/dj.png';
    this.velY = Math.random() * 0.05 + 0.1;
    this.value = 15;
  }
}
