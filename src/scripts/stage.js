import Boba from './items/boba.js';
import Bee from './items/bee.js';
import Player from './player.js';
import RedEnvelope from './items/redEnvelope.js';
import Tesla from './items/tesla.js';
import Ring from './items/ring.js';
import Jersey from './items/jersey.js';

export default class Stage {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = this.ctx.canvas;
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.score = 0;
    this.items = [];
    this.createItemTimer = 1500; // delays the items falling from the sky ... maybe create a ready set go
    this.itemTimerReset = 0;
    this.itemTypes = ['boba', 'bee', 'redEnvelope', 'tesla', 'ring', 'jersey'];
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
    this.currentPlayer.update();
    this.currentPlayer.draw();
  }

  renderEntities() {
    this.renderBackground();
    this.renderScore();
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
    this.ctx.fillText(`Score: ${this.score}`, 50, 75);
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`Score: ${this.score}`, 52, 77);
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
    // ctx.drawImage(backgroundImg, 0, 0);
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
      default:
        break;
    }
    // console.log(this.items)
  }

  playerItemCollisionDetection() {
    // iterate through the items array
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

      // if (this.currentPlayer.x > item.x + item.width ||
      //     this.currentPlayer.x + this.currentPlayer.width < item.x ||
      //     this.currentPlayer.y > item.y + item.height ||
      //     this.currentPlayer.y + this.currentPlayer.height < item.y) {
      //         // no collision
      //         // do nothing
      //     } else {
      //         // collision detected
      //         console.log("Collision detected");
      //         item.playerCollision = true;
      //         this.incrementScore(item);
      //     }
    });
  }

  incrementScore(item) {
    this.score += item.value;
    item.playerCollision = true;
  }
}
