import Canvas from './canvas.js';
import Stage from './stage.js';

export default class Game {
  constructor() {
    this.kickOff = this.kickOff.bind(this);
    this.animating = true;

    this.canvas = new Canvas();
    this.stage = new Stage(this.canvas.ctx);

    // should i make a music class?
    // perhaps move this into playMusic method
    this.music = new Audio();
    this.music.src = 'src/sounds/champloo2.wav';
    this.music.volume = 0.3;
    this.music.loop = true;

    this.handleMusicOptions();

    this.handleMusicOptions = this.handleMusicOptions.bind(this);
    this.music.play();
  }

  // call for window.requestAnimationFrame which takes it a callback to itself for recursive loop
  // calculate deltaTime
  kickOff() {
    this.canvas = new Canvas(); // grabs the "game-canvas" id
    this.stage = new Stage(this.canvas.ctx);
    this.stage.loadCurrentStage();

    // use this.animation to calculate dt
    this.animation = (timeStamp) => {
      const deltaTime = timeStamp - lastTime;

      lastTime = timeStamp;
      let setFps = 1000 / 60; // hard coding fps

      // console.log(deltaTime); // runs at about 16

      if (this.animating && deltaTime > setFps) {
        lastTime = timeStamp - (deltaTime % setFps);
        this.gameOver(); // hacky but fix this
        this.canvas.clearCanvas();
        this.stage.updateEntities(deltaTime);
        // this.stage.drawEntities()
        // this.handleMusicOptions(); // take out of animation loop
        this.interval = window.requestAnimationFrame(this.animation);
      }
    };
    // calls recursively and passes in timeStamp variable
    window.requestAnimationFrame(this.animation);
  }

  pause() {
    // when escape key is hit, we want to effectively stop the animation loop
    this.animating = false;
  }

  gameOver() {
    if (this.stage.score > 80) {
      this.animating = false;
      let gameOverMessages = document.getElementById('game-end');
      gameOverMessages.classList.remove('hidden');
    }
  }

  // maybe move music functions to index so user can toggle the music without init Game first
  playPauseMusic() {
    let playPauseBtn = document.getElementById('play-pause');
    playPauseBtn.addEventListener('click', (playPause) => {
      playPause.preventDefault();
      console.log(this.music);
      if (this.music.paused) {
        // console.log('play?');
        this.music.play();
        playPauseBtn.innerHTML = 'Pause';
      } else {
        this.music.pause();
        // console.log('paused?');
        playPauseBtn.innerHTML = 'Play';
      }
    });
  }

  // needs fixing
  muteMusic() {
    let muteBtn = document.getElementById('mute-unmute');
    muteBtn.addEventListener('click', (mute) => {
      mute.preventDefault();
      if (this.music.muted) {
        this.music.muted = false;
        muteBtn.innerHTML = 'Mute';
      } else {
        this.music.muted = true;
        muteBtn.innerHTML = 'Unmute';
      }
    });
  }

  handleMusicOptions() {
    this.playPauseMusic();
    this.muteMusic();
  }

  // kickOff(fps) {
  //   fpsInterval = 1000 / fps;
  //   then = performance.now();
  //   startTime = then;

  //   this.animate();
  // }

  // animate() {
  //   requestAnimationFrame(this.kickOff);
  //   this.canvas = new Canvas();
  //   this.stage = new Stage(this.canvas.ctx);
  //   this.stage.loadCurrentStage();

  //   now = performance.now();
  //   elapsed = now - then;

  //   if (elapsed > fpsInterval) {
  //     then = now - (elapsed % fpsInterval);
  //     this.canvas.clearCanvas();
  //     this.stage.updateEntities();
  //   }
  // }

  // kickOff() {
  //   let fps = 30;
  //   let fpsInterval = 1000 / fps;
  //   let then = performance.now();

  //   this.canvas = new Canvas(); // grabs the "game-canvas" id
  //   this.stage = new Stage(this.canvas.ctx);
  //   this.stage.loadCurrentStage();

  //   // use this.animation to calculate dt
  //   this.animation = () => {
  //     let now = performance.now();
  //     let elapsed = now - then;

  //     if (elapsed > fpsInterval && this.animating) {
  //       then = now - (elapsed % fpsInterval);
  //       this.canvas.clearCanvas();
  //       this.stage.updateEntities();
  //       // console.log('banana');

  //       requestAnimationFrame(this.animation);
  //     }
  //     // this.canvas.clearCanvas();

  //     // if (this.animating) {
  //     //   this.gameOver(); // hacky but fix this
  //     //   this.stage.updateEntities();
  //     //   // this.handleMusicOptions(); // take out of animation loop
  //     //   this.interval = window.requestAnimationFrame(this.animation);
  //     // }
  //   };

  //   requestAnimationFrame(this.kickOff);
  //   // console.log('apple');

  //   // calls recursively and passes in timeStamp variable
  //   window.requestAnimationFrame(this.animation);
  // }
}

// let fps, fpsInterval, startTime, now, then, elapsed;

let lastTime = 1;
