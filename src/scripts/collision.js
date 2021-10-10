/*
  Maybe move collision detection to our Game file

  In this, we will check for a few types of collisions

  Player vs. Stage/Canvas width, height
  - We have to make sure that the player has a baseline position where he stands/walks/runs
  - This will be some constant y position (a little less than max canvas.height)
  - If player is at baseline, we can set his jumping boolean to false and reset his yVelocity = 0

  We must make sure that the player's x position cannot be < 0 or > 800

  Player vs. Item
  We have to calculate the distance (from center?) of the player vs. item
  If they touch then we will have additional game logic to,
  Increment score points
  Decrement number of lives
  Power ups

  - Check if rectangles intersect with each other



*/