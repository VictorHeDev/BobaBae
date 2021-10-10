/* set up keyListener logic here

  notice that event.keyCode is NOW DEPRECIATED
  use window.addEventListener("keydown", e) <- takes in e callback function
  use window.addEventListener("keyup", e)

  key down logic:
  case 38: up key, start jumping animation

  case 37: left key, change player direction to left
    player.yVelocity += 0.5 (see game loop function below for friction as well. Same thing, different places.)
  case 39: right key, change player direction to right
    player.xVelocity -= 0.5
  check if the event.type === "keydown" and confirm true or false


key up logic:
check which key was released (left or right) and change speed to 0
gradual slow for sliding -> fast stop for snappier movement

within the game loop function,
if the player is already jumping (keyup) then we want to set player.jumping = true to now allow him to jump again, and decrement his y-velocity by a certain amount
if going left, x-velocity -=0.5
if going left, x-velocity +=0.5

simulate gravity by,
adding y velocity for every frame += 1.5
reset x pos -> player.x += player.xVelocity
reset x pos -> player.y += player.yVelocity

simulate friction by, (gradual stop)
player.xVelocity *=0.9
- player.yVelocity *=0.9 <- WORLD GRAVITY (global function?)!
  - influenced by player.yVelocity





*/