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

    // * movement physics
    this.xVel = 0;
    this.yVel = 0;
    this.friction = 0.9;
    this.gravity = 1.1; // changed gravity from 0.9
    this.maxVel = 20;
    this.maxJumpPower = 40;
    this.baseline = 480; // floor or ground that anchors player
    this.keys = []; // using to keep track of number of keypresses and allow for two directions to be recognized at the same time

    // * needed for friction and gravity implementation
    this.moving = false;
    this.jumping = false; // change this later in order to double jump
    // this.numTimesJumped = 0;
    // this.numMaxJumps = 2;
    this.facingRight = true;
    this.currentFrame = 1;

    this.playerSprite = new Image();
    this.playerSprite.src = 'src/images/kevin-spritesheet.png';

    this.jumpSound = new Audio();
    this.jumpSound.volume = 0.2;
    this.jumpSound.src = 'src/sounds/jump.flac';

    // ! character hitboxes - comment out methods later
    this.hbx = this.x + this.width / 2;
    this.hby = this.y + this.height / 2;
    this.hbWidth = 80 / 2; // change this to this.width
    this.hbHeight = 80 / 2; // change this to this.height
  }

  // * draw and render methods
  update() {
    this.movePlayer(this.keys);
    this.yVel += this.gravity;

    this.x += this.xVel;
    this.y += this.yVel;

    this.xVel *= this.friction;
    this.yVel *= this.friction;

    this.outOfBounds();

    if (this.currentFrame === 10) {
      this.handlePlayerFrame();
      this.currentFrame = 0;
    } else {
      this.currentFrame++;
    }

    this.checkIfNotMoving();
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

    // this.drawHitbox(); // ! comment this out to hide HB
  }

  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  // * mess with later in order to get the framecount just right
  handlePlayerFrame() {
    this.frameX < 3 && this.moving ? this.frameX++ : (this.frameX = 0);
  }

  movePlayer(keys) {
    if (keys['KeyW'] || keys['ArrowUp']) this.jump();

    if (keys['KeyA'] || keys['ArrowLeft']) this.moveLeft();

    if (keys['KeyD'] || keys['ArrowRight']) this.moveRight();
  }

  // eventListener() {
  //   window.addEventListener(
  //     'keydown',
  //     function (event) {
  //       this.keys[event.code] = true;
  //       // console.log('keydown')
  //       this.moving = true;
  //       if (event.defaultPrevented) {
  //         return; // Do nothing if event already handled
  //       }

  //       event.preventDefault();
  //     }.bind(this),
  //     true
  //   );

  eventListener() {
    window.addEventListener('keydown', (event) => {
      this.keys[event.code] = true;

      this.moving = true;
      if (event.defaultPrevented) {
        return; // Do nothing if event already handled
      }

      event.preventDefault();
    });

    window.addEventListener('keyup', (event) => {
      // check to see if wad or arrow keys are up

      event.preventDefault();
      delete this.keys[event.code];
      this.moving = false;
    });
  }

  jump() {
    if (!this.jumping) {
      this.yVel -= this.maxJumpPower;
      this.jumpSound.play();
      this.jumping = true; // need to be true for no double jump

      this.facingRight ? (this.frameY = 2) : (this.frameY = 5);
    }
  }

  moveLeft() {
    if (this.xVel > -this.maxVel) this.xVel -= 0.4;
    this.moving = true;
    this.facingRight = false;
    this.frameY = 3;
  }

  moveRight() {
    if (this.xVel < this.maxVel) this.xVel += 0.4;
    this.moving = true;
    this.facingRight = true;
    this.frameY = 0;
  }

  // *  implement wrap
  outOfBounds() {
    if (this.spriteWidth / 2 + this.x < 0) {
      // check for left offscreen
      this.x = 800;
      this.y = this.baseline;
    } else if (this.x > 800) {
      // check for right offscreen
      this.x = 0;
      this.y = this.baseline;
      // this.xVel = 0;
    } else if (this.y > this.baseline) {
      // check if on ground
      this.y = this.baseline;
      this.jumping = false;
    }
  }

  // we might want this function later to handle sprite frame counts for idle animation
  checkIfNotMoving() {
    // if (this.touchingGround() && !this.moving) this.idleDirection();
    if (!this.moving) this.idleDirection();
  }

  idleDirection() {
    this.facingRight ? (this.frameY = 1) : (this.frameY = 4);
  }

  // dummy hitbox method
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
