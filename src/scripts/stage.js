import Boba from "./boba.js"
import Bee from "./bee.js"
import Player from "./player.js"
import RedEnvelope from "./redEnvelope.js";
import Lexus from "./tesla.js";

export default class Stage {
    constructor(ctx) {
        this.ctx = ctx;
        this.canvas = this.ctx.canvas;
        this.score = 0;
        this.items = [];
        this.createItemTimer = 300;
        this.itemTimerReset = 0;
        this.itemTypes = ['boba', 'bee', 'redEnvelope', 'lexus']
        this.deltaTime = 1
        this.background = new Image();
        this.background.src = "src/images/cyberpunk-bg.png";
    }

    loadCurrentStage() {
        this.loadPlayer()

        this.renderBackground()
        this.renderScore()
        this.loadEventListeners()
    }

    loadPlayer() {
        this.currentPlayer = new Player(this.ctx)
        this.currentPlayer.draw()
    }

    // for new keypress version
    loadEventListeners() {
        this.currentPlayer.eventListener();
    }

    updateEntities() {
        this.renderEntities()
        this.updateItems()
        this.drawItems()
        this.currentPlayer.update();
        this.currentPlayer.draw()
    }

    renderEntities() {
        this.renderBackground()
        this.renderScore()
    }

    renderBackground() {
        this.ctx.drawImage(this.background, 0,0, this.canvas.width, this.canvas.height);
    }

    renderScore() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score: ${this.score}`, 50, 75);
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(`Score: ${this.score}`, 55, 80);
    }

    updateItems() {
        // Remove item from the array if it is off screen
        this.items = this.items.filter((item) => !item.offScreen && !item.playerCollision) // check the method below
        // console.log(this.items);
        if (this.itemTimerReset > this.createItemTimer) {
            this.addNewItem();
            this.itemTimerReset = 0;
        } else {
            this.itemTimerReset += this.deltaTime
        }

        this.items.forEach((item) => {
            item.update(this.deltaTime);
        })
    }

    drawItems() {
        // ctx.drawImage(backgroundImg, 0, 0);
        this.items.forEach((item) => {
            item.draw(this.ctx);
        })
    }

    addNewItem() {
        // let randomItem = this.itemTypes[(Math.floor(Math.random() * this.itemTypes.length))];
        // this.items.push(randomItem);
        this.items.push(new Boba(this));
        this.items.push(new Bee(this));
        this.items.push(new RedEnvelope(this));
        this.items.push(new Lexus(this));
        // console.log(this.items)
    }



    playerItemCollisionDetection() {
        // iterate through the items array
        this.items.forEach((item) => {
            // for each obj, check their x and y coordinates
            // compare them to the player's x and y coordinates
            // if they intersect then collision detected
            if (this.currentPlayer.x > item.x + item.width ||
                this.currentPlayer.x + this.currentPlayer.width < item.x ||
                this.currentPlayer.y > item.y + item.height ||
                this.currentPlayer.y + this.currentPlayer.height < item.y) {
                    // no collision
                    // do nothing
                } else {
                    // collision detected
                    console.log("Collision detected");
                    item.playerCollision = true;
                    this.incrementScore(item);
                }
        })
    }

    incrementScore(item) {
        this.score += item.value;
    }

}