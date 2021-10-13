// Maybe have this class inherit from a Sprite (shared with Items) or Game class to accept canvas.width/height
// Let's have a rectangle render first

export default class Player {
  constructor(ctx) {
    this.ctx = ctx;
    // player variables
    // position player to the middle of the street
    this.x = 400;
    this.y = 300; // regular is 520 but I might keep this because I want the player to start with falling from the sky because it's funny
    // this.width = 32;
    // this.height = 32;

    this.spriteWidth = 32;
    this.spriteHeight = 32;
    this.frameX = 0;
    this.frameY = 0;

    // movement
    this.xVel = 0;
    this.yVel = 0;
    this.friction = 0.9;
    this.gravity = 1.1; // changed gravity from 0.9
    this.maxVel = 20;
    this.maxJumpPower = 25;
    this.baseline = 520; // floor or ground that anchors player

    // needed for friction and gravity implementation
    this.moving = false;
    this.jumping = false; // change this later in order to double jump
    // this.numTimesJumped = 0;
    // this.numMaxJumps = 2;
    this.keys = []; // using to keep track of number of keypresses and allow for two directions to be recognized at the same time

    this.hbx = (this.x + this.spriteWidth / 2);
    this.hby = (this.y + this.spriteHeight / 2);
    this.hbWidth = 32 / 2;
    this.hbHeight = 32 / 2;

    this.playerSprite = new Image();
    this.playerSprite.src = "src/images/idle32.png";

    // not totally necessary
    // this.eventListener = this.eventListener.bind(this);
  }

  // draw and render methods

  update() {
    // need to figure out the order of operations for this thing
    this.movePlayer(this.keys);
    // maybe move this outside or within animation loop
    // or throw within player update function
    this.x += this.xVel;
    this.xVel *= this.friction;

    this.y += this.yVel;
    this.yVel += this.gravity;

    this.outOfBounds();
  }

  draw() {
    this.drawSprite(
      this.playerSprite,
      this.spriteWidth * this.frameX,
      this.spriteHeight * this.frameY,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.spriteWidth + 20,
      this.spriteHeight + 20
    );

    this.drawHitbox();
  }

  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  // mess with later in order to get the framecount just right
  updatePlayerFrame() {
    if (this.frameX < 3) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }

  movePlayer(keys) {
    if (keys["KeyW"] || keys["ArrowUp"]) {
      this.jump();
      console.log("up");
      // changed from measuring jumping as a boolean to double jumping based on falling frames
    }

    if (keys["KeyA"] || keys["ArrowLeft"]) {
      this.moveLeft();
      console.log("left");
    }

    if (keys["KeyD"] || keys["ArrowRight"]) {
      this.moveRight();
      console.log("right");
    }
  }

  eventListener() {
    window.addEventListener(
      "keydown",
      function (event) {
        this.keys[event.code] = true;
        // console.log('keydown')
        if (event.defaultPrevented) {
          return; // Do nothing if event already handled
        }

        event.preventDefault();
      }.bind(this),
      true
    );

    window.addEventListener(
      "keyup",
      function (event) {
        // check to see if wad or arrow keys are up
        // then add friction and gravity
        event.preventDefault();
        // console.log('keyup')
        delete this.keys[event.code];
        this.moving = false; // hmm. ...
      }.bind(this),
      true
    );
  }

  jump() {
    if (!this.jumping) {
      this.yVel -= this.maxJumpPower;
      this.jumping = true; // need to be true for no double jump
    }
    // this.moving = true;
  }

  moveLeft() {
    if (this.xVel > -this.maxVel) this.xVel -= 0.5;
  }

  moveRight() {
    if (this.xVel < this.maxVel) this.xVel += 0.5;
  }

  // Low level movement and position methods
  outOfBounds() {
    if (this.x < 0) {
      // check for left offscreen
      this.x = 0;
      this.xVel = 0;
    } else if (this.x > 800 - this.spriteWidth) {
      // check for right offscreen
      this.x = 800 - this.spriteWidth;
      this.xVel = 0;
    } else if (this.y > this.baseline) {
      // check if on ground
      this.y = this.baseline;
      this.jumping = false;
    }
  }

  // we might want this function later to handle sprite frame counts for idle animation
  notMoving() {
    if (xVel === 0 && yVel === 0) {
      this.moving = false;
      this.jumping = false;
      // idle sprite animation
    }
  }

  // dummy hitbox method
  //   tester rectangle
  // okay hitbox example that I'm semi happy with
  drawHitbox() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.x + this.spriteWidth / 2,
      this.y + this.spriteHeight / 2,
      this.spriteWidth / 2,
      this.spriteHeight
    );
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();
  }
}

// controlNumJumps() {
//   if (this.y > 520) {
//     this.y = 520;
//     this.yVel = 0;
//     this.numTimesJumped = 0;
//   }
// }
