# Boba-Bae

## [Open the Live Link](https://victorhedev.github.io/BobaBae/)

Hello Player! Boba-Bae was inspired by the SAT/SAD/SAR FaceBook communities. The goal of the game is to move our main character, **Kevin Nguyen**, around the screen and to collect meme'd items to achieve a new high score. The score at the end of the round will determine if Kevin's girlfriend, **Vivian Tran**, is still mad at him. Check out the value of each item in the game's instructions! Collect as many _items_ as possible to appease your lovely girlfriend! (Based loosely on a true story.)

## Weekly Plan

Below will loosely outline my plans on a day-to-day basis on how to actually research, build, and style the game.

### Day 0 - Create repo

Main goals:

- [x] Create first draft of README.md file
- [x] Create wireframe

![First draft of wireframe](Boba-Bae%20v1.drawio.png?raw=true 'Boba Bae wireframe')

### Day 1 - Conceptualization

Research HTML canvas, gather assets such as background image, sprites for characters, and think about how to create menus for the loading screen. On a high level, I want the game to have:
Basics:

- [x] Main character who can move around using "WASD" or arrow keys
- [x] Timer that counts down from 1 minute for a single round (using built in JS Datetime obj)
- [x] Score that increments when Kevin collects an item
- [ ] ~~Life/Hearts/BobaBar~~

Extra Features:

- [x] Sounds for jumping/being hurt/power-ups
- [x] Button to toggle sounds on/off
- [x] Background music
- [ ] ~~Power-ups: such as freezing the timer, invincibility mode, super speed/super hops~~
- [ ] ~~Power-up item on the upper left side of the screen~~
- [ ] ~~A Boba-bar to unleash his untapped potential~~

Other features being considered:

- [x] Enemies in the game or "bad items"
- [x] Rendering and animations for Kevin and Vivian
- [ ] ~~Hearts/Life vs. Boba-bar to end the game before the timer runs out~~

### Day 2 - Research

Day 2 will be devoted to research on how to set up canvas and how to render a playable screen with the correct dimensions on the webpage. I will need to configure Webpack and initialize my files on either Day 2 or Day 3. Find/create a CSS reset file and create a template for my HTML file. Research how to animate the character sprites, collectable items, timer, and background image. How can I link events to DOM input/output? By using keyup/down events.

Main goals:

- [x] Canvas API
- [x] Animations
- [x] Curating assets

### Day 3 - Initial creation of classes and their properties

Create classes for the character, items, background, timer, and score. How can I render the objects onto the canvas? Can I create some basic animations first and bind the keys to the character's movements?

Main goals:

- [x] Render canvas
- [x] Render background (static vs. moving image)
- [x] Render character
  - [x] Character movement associated with "WASD" keys (bind movement to key up and down events)
  - [x] No collision detection yet
  - [x] Jumping is a plus
- [x] Create initial methods for items

### Day 4, 5 - Main bulk of coding and handling logic

The goal for the next two days is to handle most of the actual gameplay and logic. That means creating the gravity & friction logic for the items, Kevin's jumping animation, decrementing lives/hearts/Boba-bar, and collision logic. We have to make sure that Kevin can only stay within the contents of the screen and he can either stay at a baseline position or jump. We might want to create additional ledges for him to jump on top of for a more dynamic gaming experience.

Main goals:

- [x] Movement logic
- [x] Gravity logic
- [x] Collision logic

### Day 6 - Implementing MVP features

Main goals:

- [x] CSS reset file
- [x] Menu descriptions & general HTML skeleton
- [x] Click or key events to start/end the game
- [x] Add personal links with Favicon
- [x] Add sound effects
- [x] Have an option to toggle on/off sound effects

### Day 7 - Polish up

Main goals:

- [x] Think about the viability of the extra features and see if I am able to implement them
  - [x] Clear local storage
  - [x] Power-up display on upper-left of the screen
  - [x] Power-up animations
  - [x] Additional rounds
- [x] Adding high score and name to Firebase database
- [x] Finish up styling and deploy the website
- [x] Meme

### End of Sprint Considerations

The spritesheet was finalized after the week sprint period, so changes to the requestAnimationFrame (animation loop) had to be changed. Difficulties that I ran into during this project were issues related to receiving User input for Kevin's movement, maintaining smooth movement during the animation loop, and creating dynamic hitboxes between the items and Kevin.

`Movement`

```js
  //  player.js
  handlePlayerFrame() {
    this.frameX < 3 && this.moving ? this.frameX++ : (this.frameX = 0);
  }

  movePlayer(keys) {
    if (keys['KeyW'] || keys['ArrowUp']) this.jump();

    if (keys['KeyA'] || keys['ArrowLeft']) this.moveLeft();

    if (keys['KeyD'] || keys['ArrowRight']) this.moveRight();
  }

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
      this.jumping = true;

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
```

This first code snippet details how I implemented movement and handled the "keyup" and "keydown" events. The this.keys is actually an array that holds the key when the event fires. Upon the release of a key, it deletes the element from the array. This also fixes the problem of allowing Kevin to control his movement _while in the air_. Additionally, the User's key inputs are not overridden when pressing multiple keys at once. In a different iteration of the game, for example, if the User was running "Right" with an arrow key press, and pressed "Up", his "Right" press (which he/she is still holding down) would be overridden. This led to a bad gaming experience because upon landing, the User who is still holding down the "Right" arrow key is unable to move "Right" unless he/she presses the key again.

`Animation Loop`

```js
  // game.js
  kickOff() {
    this.canvas = new Canvas();
    this.stage = new Stage(this.canvas.ctx);
    this.stage.loadCurrentStage();

    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate);
    let now = performance.now();
    const deltaTime = now - this.then;

    if (this.animating && deltaTime > this.fpsInterval) {
      this.then = now - (deltaTime % this.fpsInterval);
      this.checkGameOver();
      this.canvas.clearCanvas();
      this.stage.updateEntities(deltaTime);
    }
  }

```

This second code snippet details the recursive animation loop that is run when the game is played. An earlier iteration of the game loop was implemented when Kevin was still a static image. After receiving the full spritesheet later, I noticed that Kevin's animations were looping too quickly! This is because computers and monitors have various speeds. For example, if I was playing this game on a 60 Hz monitor and my friend, Larry, was playing on a 120 Hz monitor, Kevin's movment on Larry's end will be twice mine! So instead of having Kevin zoom across the screen (doubly fast on Larry's monitor), I implemented a way to slow down the FPS(Frames per Second). This is done through calculating the "deltaTime" which is the amount of time between one frame and the next. By utilizing the deltaTime and passing that value to the Items and Player, the game still runs smoothly across different screens. Special considerations were also made when animating Kevin because his running animations are only 4 frames long.

`Dynamic Hitboxes`

```js
  // player.js
  drawHitbox() {
    this.ctx.beginPath();
    this.ctx.rect(this.x + this.width / 4, this.y, this.width / 2, this.height);
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();
  }

  // item.js
  drawHitbox(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  // stage.js
    playerItemCollisionDetection() {
    this.items.forEach((item) => {
      // for each obj, check their x and y coordinates
      // compare them to the player's x and y coordinates
      // if they intersect then collision detected

      let playerHBX = this.currentPlayer.x + this.currentPlayer.width / 4;
      let playerHBY = this.currentPlayer.y;
      let playerHBXWidth = this.currentPlayer.width / 2;
      let playerHBYHeight = this.currentPlayer.height;

      let itemHBX = item.x;
      let itemHBY = item.y;
      let itemHBXWidth = item.width;
      let itemHBYHeight = item.height;

      if (
        playerHBX > itemHBX + itemHBXWidth ||
        playerHBX + playerHBXWidth < itemHBX ||
        playerHBY > itemHBY + itemHBYHeight ||
        playerHBY + playerHBYHeight < itemHBY
      ) {
        // no collision
      } else {
        // collision detected
        this.incrementScore(item);
        // console.log('collision!')
      }
    });
```

Lastly, this code snippet details how the hitboxes are created and calculated between the player and the different items falling from the sky. This leverages the draw ability to draw shapes using the Canvas API and then calculates the positions of items and the player at a given time. Collisions will trigger the item to disappear and for the score to be changed.

![Kevin](src/images/static-kevin.png 'Boba Bae Kevin')

Special Thanks to [@currypanko](https://www.instagram.com/currypanko/) for helping me bring Kevin to life by creating the design and the spritesheet!
