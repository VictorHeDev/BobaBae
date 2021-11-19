import Item from './item.js';

export default class Bee extends Item {
  constructor(stage) {
    super(stage);
    this.stage = stage;
    this.spriteWidth = 363;
    this.spriteHeight = 389;
    // modifier must be the same
    this.width = 50;
    this.height = 50;
    // this.x = Math.random() * 760;
    this.x = Math.random() * this.stage.width;
    // this.y = 10;
    this.y = 10;
    // can also do this with id or query selector
    this.image = new Image();
    this.image.src = 'src/images/bobabee.png';
    this.velY = Math.random() * 0.1 + 0.1;
    this.value = 10;
  }
}
