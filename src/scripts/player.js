// Maybe have this class inherit from a Sprite (shared with Items) or Game class to accept canvas.width/height
// Let's have a rectangle render first

export default class Player {
  constructor(ctx) {
    this.ctx = ctx;
    // player variables
    // position player to the middle of the street
    this.x = 400;
    this.y = 520;
    // this.width = 32;
    // this.height = 32;

    this.spriteWidth = 32;
    this.spriteHeight = 32;
    this.frameX = 0;
    this.frameY = 0;
    // movement
    this.speed = 5;
    this.xVel = 0;
    this.yVel = 0;
    this.friction = 0.6;
    this.gravity = 0.9;
    this.maxVel = 15;
    this.maxJump = 550;
    this.baseline = 520;

    this.moving = false;
    this.jumping = false;
    this.keys = {}; // might use later for multi-keypresses

    this.playerSprite = new Image();
    this.playerSprite.src = "src/images/idle32.png";

    // not totally necessary
    // this.eventListener = this.eventListener.bind(this);
  }

  // draw and render methods

  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  draw() {
    this.drawSprite(this.playerSprite, this.spriteWidth * this.frameX, this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth + 20, this.spriteHeight + 20);
  }

  // mess with later in order to get the framecount just right
  updatePlayerFrame() {
    if (this.frameX < 3) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }


  eventListener() {
    window.addEventListener("keydown", function(event) {
      // muy importante for React
      if (event.defaultPrevented) {
        return; // Do nothing if event already handled
      }

      this.upKey(event);
      this.leftKey(event);
      this.rightKey(event);

      this.xVel *= this.friction;
      this.yVel *= this.gravity;

      event.preventDefault();
    }.bind(this), true);
  }

  upKey(event) {
    if ((event.code === "KeyW" || event.code === "ArrowUp") &&
        !this.jumping) {
          this.jump();
    }
  }

  leftKey(event) {
    if ((event.code === "KeyA" || event.code === "ArrowLeft") &&
        !this.outOfBounds()) {
          this.moveLeft();
    }
  }

  rightKey(event) {
    if ((event.code === "KeyD" || event.code === "ArrowRight") &&
        !this.outOfBounds()) {
          this.moveRight();
    }
  }

  jump() {
    // add gravity
    this.y -= this.maxVel;
    this.yVel = -this.speed * 2;
    this.jumping = true; // need to be true for no double jump
    this.moving = true;

  }

  moveLeft() {
    if (this.xVel < this.maxVel) {
      this.xVel -= 0.5;
      // this.xVel *= this.friction;
    }
    this.x += this.xVel;
    this.moving = true;
    // this.jumping = false;
  }

  moveRight() {
    if (this.xVel > (-1) * this.maxVel) {
      this.yVel += 0.5; // could be ++;
      // this.xVel *= this.friction;
    }
    this.x += this.yVel;
    this.moving = true;
    // this.jumping = false;
  }

  // Low level movement and position methods
  outOfBounds() {
    if (this.x < 0 || this.x > 800 || this.y > 520 || this.y < 0) {
      return true;
    }
    return false;
  }



  // make sure to Math.floor decimal values
  step() {
    // Movement
    if (this.active) {
      // Hori movement
      if (!leftKey && !rightKey || leftKey && rightKey) {
        // Slow down
        this.xVel *= this.friction;
      } else if (rightKey) {
        // move right
        this.xVel++;
      } else if (leftKey) {
        // move left
        this.xVel--;
      }
      // vertical movement
      if (upKey) {
        // check if on ground
        this.yVel -= 15;
      }
      // applies gravity
      this.yVel += 5;
      // correct speed
      if (this.xVel > this.maxVel) {
        this.xVel = this.maxVel;
      } else if (this.xVel < -this.maxVel) {
        this.xVel = -this.maxVel;
      }
      if (this.yVel > this.maxVel) {
        this.yVel = this.maxVel;
      } else if (this.yVel < -this.maxVel) {
        this.yVel = -this.maxVel;
      }

      this.x += this.xVel;
      this.y += this.yVel;
    }
  }

  // dummy hitbox method

}
  // }

  // tester rectangle
  // draw() {
  //   this.ctx.beginPath();
  //   this.ctx.rect(20, 20, 150, 100)
  //   this.ctx.stroke();
  // }