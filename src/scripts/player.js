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
    this.speed = 5
    this.xVel = 0;
    this.yVel = 0;
    this.friction = 0.6;
    this.gravity = 0.9;
    this.maxVel = 15;

    this.moving = false;
    this.jumping = false;
    this.keys = [];

    this.playerSprite = new Image();
    this.playerSprite.src = "src/images/idle32.png";

    // not totally necessary
    // this.eventListener = this.eventListener.bind(this);
  }

  outOfBounds() {
    if (this.x < 0 || this.x > 800) {
      return true;
    }
    return false;
  }

  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  draw() {
    this.drawSprite(this.playerSprite, this.spriteWidth * this.frameX, this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth + 20, this.spriteHeight + 20);
  }

  // tester rectangle
  // draw() {
  //   this.ctx.beginPath();
  //   this.ctx.rect(20, 20, 150, 100)
  //   this.ctx.stroke();
  //   // debugger
  // }

  // may have to change this later because of choppy movement
  // eventListener() {
  //   window.addEventListener("keydown", function(event) {
  //     // muy importante for React
  //     if (event.defaultPrevented) {
  //       return; // Do nothing if event already handled
  //     }
  //     switch(event.code) {
  //       // should take out arrow down later
  //       case "KeyS":
  //       case "ArrowDown":
  //         // Handle "back"
  //         this.y += this.speed;
  //         this.frameY = 0;
  //         break;
  //       case "KeyW":
  //       case "ArrowUp":
  //         // Handle "forward"
  //         this.y -= this.speed;
  //         this.frameY = 0;
  //         break;
  //       case "KeyA":
  //       case "ArrowLeft":
  //         // Handle "turn left"
  //         this.x -= this.speed;
  //         this.frameY = 0
  //         break;
  //       case "KeyD":
  //       case "ArrowRight":
  //         // Handle "turn right"
  //         this.x += this.speed;
  //         this.frameY = 0;
  //         break;
  //       }


  //     event.preventDefault();
  //   }.bind(this), true);
  // }


  // window.addEventListener("keydown", function(e) {
  //   keys[e.keyCode] = true;
  //   player.moving = true;
  // });

  // window.addEventListener("keyup", function(e) {
  //   delete keys[e.keyCode];
  //   player.moving = false;
  // });

  // movePlayer() {
  //   // up arrow, write jump function later
  //   if (keys[38] && player.y > 100) {
  //     player.y -= player.speed;
  //     // check sprite directions
  //     player.frameY = 0;
  //   }

  //   if (keys[37] && player.x > 0) {
  //     player.x -= player.speed;
  //     player.frameY = 0;
  //   }

  //   if (keys[40]) {
  //     player.y += player.speed;
  //     player.frameY = 0;
  //   }

  //   if (keys[39]) {
  //     player.x += player.speed;
  //     player.frameY = 0;
  //   }
  // }

  // mess with later in order to get the framecount just right
  updatePlayerFrame() {
    if (this.frameX < 3) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }

  onKeyDown(e) {
    this.keys[e.code] = true;
    this.moving = true;
  }

  onKeyUp(e) {
    delete this.keys[e.code];
    this.moving = false;
  }

  move() {
    if (this.keys["a"] && this.x > 0) {
      // sprite frameCount stuff

      this.x -= this.speed;
      this.moving = true;
      this.jumping = false;
    }

    if (this.keys["d"] && this.x < 800) {
      // more frameCount stuff
      this.x += this.speed;
      this.moving = true;
      this.jumping = false;
    }

    if ((this.keys["w"] || this.keys[" "]) && (!this.jumping)) {
      this.y -= this.maxVel; // jump height
      this.jumping = true;
      this.moving = true;
      delete this.keys[" "];
    }

    if (!this.keys[" "] && this.y < (520 + 15)) {
      this.y *= this.gravity // 3
    }
  }
}


  // make sure to Math.floor decimal values
  // step(ctx) {
  //   // Movement
  //   if (this.active) {
  //     // Hori movement
  //     if (!leftKey && !rightKey || leftKey && rightKey) {
  //       // Slow down
  //       this.xVel *= this.friction;
  //     } else if (rightKey) {
  //       // move right
  //       this.xVel++;
  //     } else if (leftKey) {
  //       // move left
  //       this.xVel--;
  //     }
  //     // vertical movement
  //     if (upKey) {
  //       // check if on ground
  //       this.yVel -= 15;
  //     }
  //     // applies gravity
  //     this.yVel += 5;
  //     // correct speed
  //     if (this.xVel > this.maxVel) {
  //       this.xVel = this.maxVel;
  //     } else if (this.xVel < -this.maxVel) {
  //       this.xVel = -this.maxVel;
  //     }
  //     if (this.yVel > this.maxVel) {
  //       this.yVel = this.maxVel;
  //     } else if (this.yVel < -this.maxVel) {
  //       this.yVel = -this.maxVel;
  //     }

  //     this.x += this.xVel;
  //     this.y += this.yVel;
  //   }

  // }

/* check for:
  height
  width
  starting pos: x and y

  - velocity: x and y starting at 0
    - controls movement left and right
  - jumping: boolean we set to false first, because we don't want to enable double jumping ... or do we?

  updatePlayer function

*/

