# Boba-Bae

Hello Player! Boba-Bae was inspired by the SAT/SAD/SAR FaceBook communities. The goal of the game is to move our main character, **Kevin Nguyen**, around the screen and to collect meme'd items to achieve a new high score. The score at the end of the round will determine if Kevin's girlfriend, **Vivian Tran**, is still mad at him. Collect as many *boba tokens* as possible to appease your lovely girlfriend! (Based loosely on a true story.)


## Weekly Plan

Below will loosely outline my plans on a day-to-day basis on how to actually research, build, and style the game.


### Day 0 - Create repo
Main goals:
- Create first draft of README.md file
- Create wireframe

![First draft of wireframe](Boba-Bae%20v1.drawio.png?raw=true "Boba Bae wireframe")

### Day 1 - Conceptualization
Research canvas, gather assets such as background image, sprites for characters, think about menus. Create the wireframe. On a high level, I want the game to have:
Basics:
- Main character who can move around using "WASD" or arrow keys
- Timer that counts down from 1 minute for a single round
- Score that increments when Kevin collects an item
- Life/Hearts

Extra Features:
- Power-ups: such as freezing the timer, invincibility mode, super speed/super hops
- Power-up item on the upper left side of the screen
- A Boba-bar to unleash his untapped potential
- Sounds for jumping/being hurt/power-ups
- Button to toggle sounds on/off
- Background music
  - User is able to choose the music that they want to play

Other features being considered:
- Enemies in the game vs. "bad items"
- Hearts/Life vs. Boba-bar to end the game before the timer runs out
- Rendering and animations for Kevin and Vivian

### Day 2 - Research
Day 2 will be devoted to research about how to set up canvas and how to render a playable screen with the correct dimensions on the webpage. I will need to configure Webpack and initialize my files on either Day 2 or Day 2. Find/create a CSS reset file and create a template for my HTML file. Research how to animate the character sprites, collectable items, timer, and background image. How can I link events to DOM input/output?

Main goals:
- Canvas API
- Animations
- Curating assets

### Day 3 - Initial creation of classes and their properties
Create classes for the character, items, background, timer, and score. How can I render the objects onto the canvas? Can I create some basic animations first and bind the keys to the character's movements?

Main goals:
- Render canvas
- Render background (moving image)
- Render character
  - Character movement associated with "WASD" keys (bind movement to key up and down events)
- Create initial methods for objects


### Day 4, 5 - Main bulk of coding and handling logic
The goal for the next two days is to handle most of the actual gameplay and logic. That means creating the gravity logic for the items, Kevin's jumping animation, decrementing lives/hearts/Boba-bar, and collision logic. We have to make sure that Kevin can only stay within the contents of the screen and he can either stay at a baseline position or jump. We might want to create additional ledges for him to jump on top of for a more dynamic gaming experience.

Main goals:
- Gravity logic
- Collision logic

### Day 6 - Implementing bonus features
Main goals:
- Sound assets and toggle on/off
- Power-up display on upper-left of the screen
  - Power-up animations
- Additional rounds
- Adding high score and name to Firebase database
- Styling using CSS, menu options, instructions, personal links

### Day 7 - Polish up
Main goals:
- Think about the viability of the extra features and see if I am able to implement them
- Finish up styling and deploy the website
- Meme