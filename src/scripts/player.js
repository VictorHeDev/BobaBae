// Maybe have this class inherit from a Sprite (shared with Items) or Game class to accept canvas.width/height
// Let's have a rectangle render first

export default class Player {
  constructor(ctx) {
    this.ctx = ctx;
    // * player variables - position player to the middle of the street
    this.x = 400;
    this.y = 300; // regular is 520 but I might keep this because I want the player to start with falling from the sky because it's funny

    // *  change the width and height to scale player sprite
    this.width = 52 * 1.2;
    this.height = 70 * 1.2;

    // * Having to do with the actual spritesheet
    this.spriteWidth = 52;
    this.spriteHeight = 70;
    this.frameX = 0;
    this.frameY = 0;

    // movement
    this.xVel = 0;
    this.yVel = 0;
    this.friction = 0.9;
    this.gravity = 1.1; // changed gravity from 0.9
    this.maxVel = 20;
    this.maxJumpPower = 40;
    this.baseline = 480; // floor or ground that anchors player

    // needed for friction and gravity implementation
    this.moving = false;
    this.jumping = false; // change this later in order to double jump
    // this.numTimesJumped = 0;
    // this.numMaxJumps = 2;
    this.keys = []; // using to keep track of number of keypresses and allow for two directions to be recognized at the same time

    this.frameCounter = 0;
    this.hbx = this.x + this.width / 2;
    this.hby = this.y + this.height / 2;
    this.hbWidth = 80 / 2; // change this to this.width
    this.hbHeight = 80 / 2; // change this to this.height

    this.playerSprite = new Image();
    this.playerSprite.src = 'src/images/kevin-spritesheet.png';

    this.jumpSound = new Audio();
    this.jumpSound.src = 'src/sounds/jump.flac';

    // not totally necessary
    // this.eventListener = this.eventListener.bind(this);

    this.currentFrame = 1;
  }

  // draw and render methods

  update(deltaTime) {
    // need to figure out the order of operations for this thing
    // place this.frameX or this.frameY++ in here later to control animations
    this.movePlayer(this.keys);
    this.yVel += this.gravity;
    // maybe move this outside or within animation loop
    // or throw within player update function
    this.x += this.xVel;
    this.y += this.yVel;

    this.xVel *= this.friction;
    this.yVel *= this.friction;

    this.outOfBounds();

    if (this.currentFrame === 8) {
      this.handlePlayerFrame(deltaTime);
      this.currentFrame = 0;
    } else {
      this.currentFrame++;
    }
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
      this.width,
      this.height
    );

    // this.drawHitbox(); // comment this out to hide HB
  }

  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  // mess with later in order to get the framecount just right
  handlePlayerFrame(deltaTime) {
    // console.log(deltaTime);

    if (this.frameX < 3 && this.moving) {
      this.frameX++;
      // this.frameX = deltaTime
    } else {
      this.frameX = 0;
      // this.frameY = 1;
    }
  }

  movePlayer(keys) {
    if (keys['KeyW'] || keys['ArrowUp']) {
      this.jump();
      // console.log("up");
      // changed from measuring jumping as a boolean to double jumping based on falling frames
    }

    if (keys['KeyA'] || keys['ArrowLeft']) {
      this.moveLeft();
      // console.log("left");
    }

    if (keys['KeyD'] || keys['ArrowRight']) {
      this.moveRight();
      // console.log("right");
    }
  }

  eventListener() {
    window.addEventListener(
      'keydown',
      function (event) {
        this.keys[event.code] = true;
        // console.log('keydown')
        this.moving = true;
        if (event.defaultPrevented) {
          return; // Do nothing if event already handled
        }

        event.preventDefault();
      }.bind(this),
      true
    );

    window.addEventListener(
      'keyup',
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
      this.jumpSound.play();
      this.jumping = true; // need to be true for no double jump
      this.moving = true;

      this.frameY = 2;
    }
  }

  moveLeft() {
    if (this.xVel > -this.maxVel) this.xVel -= 0.4;
    this.moving = true;

    this.frameY = 3;
  }

  moveRight() {
    if (this.xVel < this.maxVel) this.xVel += 0.4;
    this.moving = true;

    this.frameY = 0;
  }

  // Low level movement and position methods
  outOfBounds() {
    if (this.x < 0) {
      // check for left offscreen
      this.x = 0;
      this.xVel = 0;
      this.y = this.baseline; // TODO yea that's a tmr problem
    } else if (this.x > 800 - this.width) {
      // check for right offscreen
      this.x = 800 - this.width;
      this.y = this.baseline; // TODO char goes straight down at edge :(
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
    this.ctx.rect(this.x + this.width / 4, this.y, this.width / 2, this.height);
    this.ctx.strokeStyle = 'red';
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
