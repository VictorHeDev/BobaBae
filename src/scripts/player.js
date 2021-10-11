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
    this.speed = 9
    this.moving = false;

    this.playerSprite = new Image();
    this.playerSprite.src = "src/images/idle32.png";
    this.eventListener = this.eventListener.bind(this);

    // this.frameX = 0;
    // this.frameY = 0;
    // this.xVel = 0;
    // this.yVel = 0;
    // this.friction = 0.6;
    // this.gravity = 0.9;
    // this.maxVel = 10;
    // this.jumping = false;
  }

  update() {
    // write helper functions to calculate current pos
    // check if they are off screen or not

  }

  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  draw() {
    this.drawSprite(this.playerSprite, this.spriteWidth * this.frameX, this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth + 20, this.spriteHeight + 20);
  }

  // draw() {
  //   this.ctx.beginPath();
  //   this.ctx.rect(20, 20, 150, 100)
  //   this.ctx.stroke();
  //   // debugger
  // }

  // bounds/outofbounds

  // may have to change this later because of choppy movement
  eventListener() {
    window.addEventListener("keydown", function(event) {
      // muy importante for React
      if (event.defaultPrevented) {
        return; // Do nothing if event already handled
      }
      switch(event.code) {
        case "KeyS":
        case "ArrowDown":
          // Handle "back"
          this.y += this.speed;
          break;
        case "KeyW":
        case "ArrowUp":
          // Handle "forward"
          this.y -= this.speed;
          this.frameY = 0;
          break;
        case "KeyA":
        case "ArrowLeft":
          // Handle "turn left"
          this.x -= this.speed;
          this.frameY = 0
          break;
        case "KeyD":
        case "ArrowRight":
          // Handle "turn right"
          this.x += this.speed;
          this.frameY = 0;
          break;
        }

      event.preventDefault();
    }.bind(this), true);
  }

  // mess with later in order to get the framecount just right
  updatePlayerFrame() {
    if (this.frameX < 3) {
      this.frameX++;
    } else {
      this.frameX = 0;
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

  // update() {

  // }


/* check for:
  height
  width
  starting pos: x and y

  - velocity: x and y starting at 0
    - controls movement left and right
  - jumping: boolean we set to false first, because we don't want to enable double jumping ... or do we?

export out update and draw functions within player class



  updatePlayer function

*/

