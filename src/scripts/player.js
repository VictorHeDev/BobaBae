// Maybe have this class inherit from a Sprite (shared with Items) or Game class to accept canvas.width/height
// Let's have a rectangle render first
export default class Player {
  // DELETE CTX
  constructor(ctx) {
    this.ctx = ctx;
    // can change canvas dimensions later for more dynamic practices
    this.canvasWidth = 800;
    this.canvasHeight = 600;

    // player variables
    // position player to the middle of the street
    this.x = 400;
    this.y = 600;
    this.width = 32;
    this.height = 32;

    this.xVel = 0;
    this.yVel = 0;
    this.friction = 0.6;
    // this.gravity = 0.9;
    this.maxVel = 10;
    this.jumping = false;

    this.image = new Image();
    this.image.src = "../images/idle32.png";
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

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }


}

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

