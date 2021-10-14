import Canvas from "./canvas.js"
import Stage from "./stage.js"

export default class Game {
  constructor() {
    this.kickOff = this.kickOff.bind(this);
    this.animating = true;
    // this.music = new Audio()

    this.canvas = new Canvas();
    this.stage = new Stage(this.canvas.ctx);

    this.playMusic();
  }

  // call for window.requestAnimationFrame which takes it a callback to itself for recursive loop
  // calculate deltaTime
  kickOff() {
    this.canvas = new Canvas(); // grabs the "game-canvas" id
    this.stage = new Stage(this.canvas.ctx)
    this.stage.loadCurrentStage();

    // use this.animation to calculate dt
    this.animation = () => {
      this.canvas.clearCanvas();
      if (this.animating) {
        this.gameOver(); // hacky but fix this
        this.stage.updateEntities();
        this.handleMusicOptions();
        this.interval = window.requestAnimationFrame(this.animation);
      }
    }
    // calls recursively and passes in timeStamp variable
    window.requestAnimationFrame(this.animation)
  }

  pause() {
    // when escape key is hit, we want to effectively stop the animation loop
    this.animating = false;

  }

  gameOver() {
    if (this.stage.score > 50) {
      this.animating = false;
      let gameOverMessages = document.getElementById("game-end");
      gameOverMessages.classList.remove("hidden");
    }
    // stop the game
    // display thank you message
    // display play again button
  }

  playMusic() {
    // should i make a music class?
    this.music = new Audio();
    this.music.src = "src/sounds/champloo2.mp3";
    this.music.loop = true;
    this.music.play();
    this.musicPlaying = true;
  }

  pauseMusic() {
    document.getElementById("play").addEventListener("click", function() {
      console.log('pause!')
      this.music.pause();
    })
  }

  handleMusicOptions() {
    this.pauseMusic();
  }

}





