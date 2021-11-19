import Item from './item.js';

export default class Tesla extends Item {
  constructor(stage) {
    super(stage);
    this.spriteWidth = 300;
    this.spriteHeight = 300;
    // modifier must be the same
    this.width = 60;
    this.height = 60;
    this.x = Math.random() * 760; // canvas width is 800
    this.y = 10;
    // can also do this with id or query selector
    this.image = new Image();
    this.image.src = 'src/images/tesla.png';
    this.velY = Math.random() * 0.1 + 0.02;
    this.value = 15;
  }
}
