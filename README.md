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
- [ ] Life/Hearts/BobaBar

Extra Features:

- [ ] Power-ups: such as freezing the timer, invincibility mode, super speed/super hops
- [ ] Power-up item on the upper left side of the screen
- [ ] A Boba-bar to unleash his untapped potential
- [x] Sounds for jumping/being hurt/power-ups
- [x] Button to toggle sounds on/off
- [x] Background music
  - [ ] User is able to choose the music that they want to play

Other features being considered:

- [x] Enemies in the game or "bad items"
- [ ] Hearts/Life vs. Boba-bar to end the game before the timer runs out
- [x] Rendering and animations for Kevin and Vivian

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



Special Thanks to [@currypanko](https://www.instagram.com/currypanko/) for helping me bring Kevin to life by creating the design and the spritesheet!
