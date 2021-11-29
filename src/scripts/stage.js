import Boba from './items/boba.js';
import Bee from './items/bee.js';
import Player from './player.js';
import RedEnvelope from './items/redEnvelope.js';
import Tesla from './items/tesla.js';
import Ring from './items/ring.js';
import Jersey from './items/jersey.js';
import Jordan from './items/jordan.js';
import Dj from './items/dj.js';

export default class Stage {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = this.ctx.canvas;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.score = 0;
    this.currentCountDown = this.createCountDown(10);
    // this.currentCountDown = this.createCountDown(60000);

    this.items = [];
    this.createItemTimer = 1500; // delays the items falling from the sky ... maybe create a ready set go
    this.itemTimerReset = 0;
    this.itemTypes = [
      'boba',
      'bee',
      'redEnvelope',
      'tesla',
      'ring',
      'jersey',
      'jordan',
      'dj',
    ];
    this.background = new Image();
    this.background.src = 'src/images/cyberpunk-bg.png';
  }

  loadCurrentStage() {
    this.loadPlayer();

    this.renderBackground();
    this.renderScore();
    this.loadEventListeners();
  }

  loadPlayer() {
    // throw in the constructor
    this.currentPlayer = new Player(this.ctx);
    this.currentPlayer.draw();
  }

  // for new keypress version
  loadEventListeners() {
    this.currentPlayer.eventListener();
  }

  updateEntities(deltaTime) {
    this.playerItemCollisionDetection();

    this.renderEntities();
    this.updateItems(deltaTime);
    this.drawItems();

    // pass in deltaTime to currentPlayer.update
    this.currentPlayer.update(deltaTime);
    this.currentPlayer.draw();
  }

  renderEntities() {
    this.renderBackground();
    this.renderScore();
    this.renderTimer();
  }

  renderBackground() {
    this.ctx.drawImage(
      this.background,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }

  renderScore() {
    this.ctx.font = '30px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText(`Score: ${this.score}`, 25, 50);
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Score: ${this.score}`, 27, 52);
  }

  renderTimer() {
    // let currTimerValue = this.currentCountDown().toString().slice(0, 2);
    this.ctx.font = '30px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText(`Timer: ${this.currentCountDown()}`, 325, 50);
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Timer: ${this.currentCountDown()}`, 327, 52);

    if (parseInt(this.currentCountDown()) <= 0) console.log('banana!');
  }

  updateItems(deltaTime) {
    // Remove item from the array if it is off screen
    this.items = this.items.filter(
      (item) => !item.offScreen && !item.playerCollision
    );

    if (this.itemTimerReset > this.createItemTimer) {
      this.addNewItem();
      this.itemTimerReset = 0;
    } else {
      this.itemTimerReset += deltaTime;
    }

    this.items.forEach((item) => {
      item.update(deltaTime);
    });
  }

  drawItems() {
    this.items.forEach((item) => {
      item.draw(this.ctx);
    });
  }

  addNewItem() {
    const randomItem =
      this.itemTypes[Math.floor(Math.random() * this.itemTypes.length)];

    switch (randomItem) {
      case 'boba':
        this.items.push(new Boba(this));
        break;
      case 'bee':
        this.items.push(new Bee(this));
        break;
      case 'redEnvelope':
        this.items.push(new RedEnvelope(this));
        break;
      case 'tesla':
        this.items.push(new Tesla(this));
        break;
      case 'ring':
        this.items.push(new Ring(this));
        break;
      case 'jersey':
        this.items.push(new Jersey(this));
        break;
      case 'jordan':
        this.items.push(new Jordan(this));
        break;
      case 'dj':
        this.items.push(new Dj(this));
        break;
      default:
        break;
    }
    // console.log(this.items)
  }

  playerItemCollisionDetection() {
    this.items.forEach((item) => {
      // for each obj, check their x and y coordinates
      // compare them to the player's x and y coordinates
      // if they intersect then collision detected

      let playerHBX = this.currentPlayer.x + this.currentPlayer.width / 4;
      let playerHBY = this.currentPlayer.y;
      let playerHBXWidth = this.currentPlayer.width / 2;
      let playerHBYHeight = this.currentPlayer.height;

      let itemHBX = item.x;
      let itemHBY = item.y;
      let itemHBXWidth = item.width;
      let itemHBYHeight = item.height;

      if (
        playerHBX > itemHBX + itemHBXWidth ||
        playerHBX + playerHBXWidth < itemHBX ||
        playerHBY > itemHBY + itemHBYHeight ||
        playerHBY + playerHBYHeight < itemHBY
      ) {
        // no collision
      } else {
        // collision detected
        this.incrementScore(item);
        // console.log('collision!')
      }
    });
  }

  incrementScore(item) {
    this.score += item.value;
    item.playerCollision = true;
  }

  createCountDown(timeRemaining) {
    let startTime = Math.floor(Date.now() / 1000);

    return () => timeRemaining - (Math.floor(Date.now() / 1000) - startTime);
  }
}
