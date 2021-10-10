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
    this.width = 80;
    this.height = 120;
    this.step = function(ctx) {

    }
    this.draw = function(ctx) {
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





      updatePlayer function

    */

}