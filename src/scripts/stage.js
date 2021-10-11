import Boba from "./boba.js"
import Bee from "./bee.js"
import Player from "./player.js"


export default class Stage {
    constructor(ctx) {
        this.ctx = ctx;
        this.canvas = this.ctx.canvas;
        this.items = [];
        this.createItemTimer = 300;
        this.itemTimerReset = 0;
        this.itemTypes = ['boba', 'bee']
        this.deltaTime = 1

        this.movementController();
    }

    loadCurrentStage() {
        this.background = new Image();
        this.background.src = "src/images/cyberpunk-bg.png";
        this.loadPlayer()

        // this.renderBackground()
        this.renderScore()

        // this.loadEventListeners()
    }

    loadPlayer() {
        this.currentPlayer = new Player(this.ctx)
        this.currentPlayer.draw()
        // debugger
    }

    // for new keypress version
    // loadEventListeners() {
    //     this.currentPlayer.eventListener();
    // }

    updateEntities() {
        this.renderEntities()
        this.update()
        this.draw()

        // this.currentPlayer.updatePlayerFrame()
        this.currentPlayer.draw()
        // debugger
    }

    renderEntities() {
        this.renderBackground()
        this.renderScore()
    }

    renderBackground() {
        this.ctx.drawImage(this.background, 0,0, this.canvas.width, this.canvas.height);
    }

    renderScore() {
        let score = 0;
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Score: ' + score, 50, 75);
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('Score: ' + score, 55, 80);
    }

    update() {
        // Remove item from the array if it is off screen
        this.items = this.items.filter(item => !item.offScreen)
        // console.log(this.items);
        if (this.itemTimerReset > this.createItemTimer) {
            this.addNewItem();
            this.itemTimerReset = 0;
        } else {
            this.itemTimerReset += this.deltaTime
        }

        this.items.forEach((object) => {
            object.update(this.deltaTime);
        })
    }

    draw() {
        // ctx.drawImage(backgroundImg, 0, 0);
        this.items.forEach((object) => {
            object.draw(this.ctx);
        })
    }

    addNewItem() {
        // let randomItem = this.itemTypes[(Math.floor(Math.random() * this.itemTypes.length))];
        // this.items.push(randomItem);
        this.items.push(new Boba(this));
        this.items.push(new Bee(this));
        // console.log(this.items)
    }



    movementController() {
        window.addEventListener("keydown", this.inputKeyDown.bind(this));
        window.addEventListener("keyup", this.inputKeyUp.bind(this));
    }

    inputKeyDown(e) {
        this.currentPlayer.onKeyDown(e);
    }

    inputKeyUp(e) {
        this.currentPlayer.onKeyUp(e);
    }


}