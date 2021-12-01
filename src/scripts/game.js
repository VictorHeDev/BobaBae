import Canvas from './canvas.js';
import Stage from './stage.js';

export default class Game {
  constructor() {
    this.kickOff = this.kickOff.bind(this);
    this.animating = true;
    this.lastTime = 1;

    this.canvas = new Canvas();
    this.stage = new Stage(this.canvas.ctx);

    this.bgMusic = new Audio();
    // this.bgMusic.src = 'src/sounds/champloo2.wav';
    this.bgMusic.src = 'src/sounds/lostfi-galactic-strings.mp3';
    this.bgMusic.volume = 0.2;
    this.bgMusic.loop = true;

    this.handleMusicOptions();

    this.handleMusicOptions = this.handleMusicOptions.bind(this);
    this.bgMusic.play();

    this.animate = this.animate.bind(this);
    this.fpsInterval = 1000 / 60;
    this.then = performance.now();
  }

  // call for window.requestAnimationFrame which takes it a callback to itself for recursive loop
  // calculate deltaTime
  // kickOff() {
  //   this.canvas = new Canvas(); // grabs the "game-canvas" id
  //   this.stage = new Stage(this.canvas.ctx);
  //   this.stage.loadCurrentStage();

  //   // use this.animation to calculate dt
  //   this.animation = (timeStamp) => {
  //     const deltaTime = timeStamp - this.lastTime;
  //     // console.log(timeStamp);

  //     this.lastTime = timeStamp;
  //     let setFps = 1000 / 60; // hard coding fps

  //     // console.log(deltaTime); // runs at about 16

  //     if (this.animating && deltaTime > setFps) {
  //       this.lastTime = timeStamp - (deltaTime % setFps);
  //       this.gameOver(); // hacky but fix this
  //       this.canvas.clearCanvas();
  //       this.stage.updateEntities(deltaTime);

  //       this.interval = window.requestAnimationFrame(this.animation);
  //     }
  //   };
  //   // calls recursively and passes in timeStamp variable
  //   window.requestAnimationFrame(this.animation);
  // }

  kickOff() {
    this.canvas = new Canvas(); // grabs the "game-canvas" id
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
      this.checkGameOver(); // hacky but fix this
      this.canvas.clearCanvas();
      this.stage.updateEntities(deltaTime);
    }
  }

  pause() {
    // when escape key is hit, we want to effectively stop the animation loop
    this.animating = false;
  }

  checkGameOver() {
    if (this.stage.currentCountDown() <= 0) {
      this.animating = false;
      let gameOverMessages = document.getElementById('game-end');
      gameOverMessages.classList.remove('hidden');
      this.bgMusic.muted = true;
    }
  }

  // maybe move music functions to index so user can toggle the music without init Game first
  playPauseMusic() {
    let playPauseBtn = document.getElementById('play-pause');
    playPauseBtn.addEventListener('click', (playPause) => {
      playPause.preventDefault();
      // console.log(this.music);
      if (this.bgMusic.paused) {
        // console.log('play?');
        this.bgMusic.play();
        this.stage.currentPlayer.jumpSound.muted = false;
        playPauseBtn.innerHTML = 'Pause';
      } else {
        this.bgMusic.pause();
        this.stage.currentPlayer.jumpSound.muted = true;

        playPauseBtn.innerHTML = 'Play';
      }
    });
  }

  handleMusicOptions() {
    this.playPauseMusic();
  }
}
