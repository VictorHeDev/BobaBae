/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = new _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  console.log(canvas); // rendering a rectangle. Delete this later\n\n  var player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas.ctx); // calling step -> 30 FPS. Refactor later using requestAnimationFrame for smoother animations\n\n  var gameLoop = setInterval(step, 1000 / 30); // Can move this Game class to it's own file later\n  // side note, will the reference to this within Game class be what we expect because this is currently within an arrow function?\n  // class Game {\n  //   constructor() {\n  //     this.startGameLoop = this.startGameLoop.bind(this);\n  //   }\n  //   startGameLoop() {\n  //   }\n  // }\n  // this.canvas.loadCurrentStage();\n\n  /*\n    call for window.requestAnimationFrame which takes it a callback to itself for recursive loop\n   */\n  // DELETE LATER\n  // called in our gameLoop\n\n  function step() {\n    // console.log(player);\n    // step player\n    player.step(canvas.ctx); // draw everything\n\n    draw(canvas.ctx);\n  }\n\n  function draw(ctx) {\n    // invoke or not?\n    canvas.ctx.fillStyle = \"green\";\n    canvas.clearCanvas(); // draw the player\n\n    player.draw(canvas.ctx);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQU1DLE1BQU0sR0FBRyxJQUFJSiwwREFBSixFQUFmO0FBQ0FLLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaLEVBRmtELENBSWxEOztBQUNBLE1BQUlHLE1BQU0sR0FBRyxJQUFJTiwwREFBSixDQUFXRyxNQUFNLENBQUNJLEdBQWxCLENBQWIsQ0FMa0QsQ0FNbEQ7O0FBQ0EsTUFBSUMsUUFBUSxHQUFHQyxXQUFXLENBQUNDLElBQUQsRUFBTyxPQUFLLEVBQVosQ0FBMUIsQ0FQa0QsQ0FTbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBRUE7O0FBRUE7QUFDRjtBQUNBO0FBR0M7QUFDQTs7QUFDQyxXQUFTQSxJQUFULEdBQWdCO0FBQ2Q7QUFDQTtBQUNBSixJQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWVAsTUFBTSxDQUFDSSxHQUFuQixFQUhjLENBS2Q7O0FBQ0FJLElBQUFBLElBQUksQ0FBQ1IsTUFBTSxDQUFDSSxHQUFSLENBQUo7QUFDRDs7QUFFRCxXQUFTSSxJQUFULENBQWNKLEdBQWQsRUFBbUI7QUFDakI7QUFDQUosSUFBQUEsTUFBTSxDQUFDSSxHQUFQLENBQVdLLFNBQVgsR0FBdUIsT0FBdkI7QUFDQVQsSUFBQUEsTUFBTSxDQUFDVSxXQUFQLEdBSGlCLENBS2pCOztBQUNBUCxJQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWVIsTUFBTSxDQUFDSSxHQUFuQjtBQUNEO0FBRUYsQ0FsREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2JhLWJhZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW52YXMgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXMuanNcIlxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllci5qc1wiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcbiAgY29uc29sZS5sb2coY2FudmFzKTtcblxuICAvLyByZW5kZXJpbmcgYSByZWN0YW5nbGUuIERlbGV0ZSB0aGlzIGxhdGVyXG4gIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKGNhbnZhcy5jdHgpO1xuICAvLyBjYWxsaW5nIHN0ZXAgLT4gMzAgRlBTLiBSZWZhY3RvciBsYXRlciB1c2luZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHNtb290aGVyIGFuaW1hdGlvbnNcbiAgbGV0IGdhbWVMb29wID0gc2V0SW50ZXJ2YWwoc3RlcCwgMTAwMC8zMCk7XG5cbiAgLy8gQ2FuIG1vdmUgdGhpcyBHYW1lIGNsYXNzIHRvIGl0J3Mgb3duIGZpbGUgbGF0ZXJcbiAgLy8gc2lkZSBub3RlLCB3aWxsIHRoZSByZWZlcmVuY2UgdG8gdGhpcyB3aXRoaW4gR2FtZSBjbGFzcyBiZSB3aGF0IHdlIGV4cGVjdCBiZWNhdXNlIHRoaXMgaXMgY3VycmVudGx5IHdpdGhpbiBhbiBhcnJvdyBmdW5jdGlvbj9cbiAgLy8gY2xhc3MgR2FtZSB7XG4gIC8vICAgY29uc3RydWN0b3IoKSB7XG4gIC8vICAgICB0aGlzLnN0YXJ0R2FtZUxvb3AgPSB0aGlzLnN0YXJ0R2FtZUxvb3AuYmluZCh0aGlzKTtcbiAgLy8gICB9XG5cbiAgLy8gICBzdGFydEdhbWVMb29wKCkge1xuXG5cbiAgLy8gICB9XG5cbiAgLy8gfVxuXG4gIC8vIHRoaXMuY2FudmFzLmxvYWRDdXJyZW50U3RhZ2UoKTtcblxuICAvKlxuICAgIGNhbGwgZm9yIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2hpY2ggdGFrZXMgaXQgYSBjYWxsYmFjayB0byBpdHNlbGYgZm9yIHJlY3Vyc2l2ZSBsb29wXG5cbiAgKi9cblxuIC8vIERFTEVURSBMQVRFUlxuIC8vIGNhbGxlZCBpbiBvdXIgZ2FtZUxvb3BcbiAgZnVuY3Rpb24gc3RlcCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuICAgIC8vIHN0ZXAgcGxheWVyXG4gICAgcGxheWVyLnN0ZXAoY2FudmFzLmN0eCk7XG5cbiAgICAvLyBkcmF3IGV2ZXJ5dGhpbmdcbiAgICBkcmF3KGNhbnZhcy5jdHgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhdyhjdHgpIHtcbiAgICAvLyBpbnZva2Ugb3Igbm90P1xuICAgIGNhbnZhcy5jdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuXG4gICAgLy8gZHJhdyB0aGUgcGxheWVyXG4gICAgcGxheWVyLmRyYXcoY2FudmFzLmN0eCk7XG4gIH1cblxufSlcbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJQbGF5ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJjb25zb2xlIiwibG9nIiwicGxheWVyIiwiY3R4IiwiZ2FtZUxvb3AiLCJzZXRJbnRlcnZhbCIsInN0ZXAiLCJkcmF3IiwiZmlsbFN0eWxlIiwiY2xlYXJDYW52YXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Canvas; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Maybe I should make canvas width and height constants\n// In this file all we want to do is retrieve the attributes of the canvas and clear it upon each call to our game loop (in another file)\n// Might want to edit this later so we have this class do more things such as creating the canvas and hiding it\n// or even rendering another canvas in order to display a menu for starting the game, pausing, or game over\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    this.canvas = document.getElementById(\"my-canvas\");\n    this.canvas.width = 800;\n    this.canvas.height = 600;\n    this.ctx = this.canvas.getContext(\"2d\");\n  }\n\n  _createClass(Canvas, [{\n    key: \"clearCanvas\",\n    value: function clearCanvas() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    } // // maybe move this later\n    // loadCurrentStage() {\n    //   this.background = new Image();\n    //   this.background.src = \"src/images/cyberpunk-bg.png\";\n    //   this.renderBackground();\n    //   // render score\n    // }\n    // renderBackground() {\n    //   this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);\n    // }\n\n  }]);\n\n  return Canvas;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRXFCQTtBQUNuQixvQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWQ7QUFDQSxTQUFLRixNQUFMLENBQVlHLEtBQVosR0FBb0IsR0FBcEI7QUFDQSxTQUFLSCxNQUFMLENBQVlJLE1BQVosR0FBcUIsR0FBckI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0wsTUFBTCxDQUFZTSxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFDRDs7OztXQUVELHVCQUFjO0FBRVosV0FBS0QsR0FBTCxDQUFTRSxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtQLE1BQUwsQ0FBWUcsS0FBckMsRUFBNEMsS0FBS0gsTUFBTCxDQUFZSSxNQUF4RDtBQUNELE1BRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2JhLWJhZS8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcz83YmRlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gTWF5YmUgSSBzaG91bGQgbWFrZSBjYW52YXMgd2lkdGggYW5kIGhlaWdodCBjb25zdGFudHNcbi8vIEluIHRoaXMgZmlsZSBhbGwgd2Ugd2FudCB0byBkbyBpcyByZXRyaWV2ZSB0aGUgYXR0cmlidXRlcyBvZiB0aGUgY2FudmFzIGFuZCBjbGVhciBpdCB1cG9uIGVhY2ggY2FsbCB0byBvdXIgZ2FtZSBsb29wIChpbiBhbm90aGVyIGZpbGUpXG4vLyBNaWdodCB3YW50IHRvIGVkaXQgdGhpcyBsYXRlciBzbyB3ZSBoYXZlIHRoaXMgY2xhc3MgZG8gbW9yZSB0aGluZ3Mgc3VjaCBhcyBjcmVhdGluZyB0aGUgY2FudmFzIGFuZCBoaWRpbmcgaXRcbi8vIG9yIGV2ZW4gcmVuZGVyaW5nIGFub3RoZXIgY2FudmFzIGluIG9yZGVyIHRvIGRpc3BsYXkgYSBtZW51IGZvciBzdGFydGluZyB0aGUgZ2FtZSwgcGF1c2luZywgb3IgZ2FtZSBvdmVyXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1jYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG5cbiAgY2xlYXJDYW52YXMoKSB7XG5cbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICAvLyAvLyBtYXliZSBtb3ZlIHRoaXMgbGF0ZXJcbiAgLy8gbG9hZEN1cnJlbnRTdGFnZSgpIHtcbiAgLy8gICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgLy8gICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCJzcmMvaW1hZ2VzL2N5YmVycHVuay1iZy5wbmdcIjtcbiAgLy8gICB0aGlzLnJlbmRlckJhY2tncm91bmQoKTtcbiAgLy8gICAvLyByZW5kZXIgc2NvcmVcbiAgLy8gfVxuXG4gIC8vIHJlbmRlckJhY2tncm91bmQoKSB7XG4gIC8vICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIC8vIH1cbn0iXSwibmFtZXMiOlsiQ2FudmFzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Player; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Maybe have this class inherit from a Sprite (shared with Items) or Game class to accept canvas.width/height\n// Let's have a rectangle render first\nvar Player = // DELETE CTX\nfunction Player(ctx) {\n  _classCallCheck(this, Player);\n\n  this.ctx = ctx; // can change canvas dimensions later for more dynamic practices\n\n  this.canvasWidth = 800;\n  this.canvasHeight = 600; // player variables\n  // position player to the middle of the street\n\n  this.x = 400;\n  this.y = 600;\n  this.width = 80;\n  this.height = 120;\n\n  this.step = function (ctx) {};\n\n  this.draw = function (ctx) {\n    ctx.fillStyle = \"green\";\n    ctx.fillRect(this.x, this.y, this.width, this.height);\n  };\n}\n/* check for:\n  height\n  width\n  starting pos: x and y\n   - velocity: x and y starting at 0\n    - controls movement left and right\n  - jumping: boolean we set to false first, because we don't want to enable double jumping ... or do we?\n\n  updatePlayer function\n */\n;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtJQUNxQkEsU0FDbkI7QUFDQSxnQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLE9BQUtBLEdBQUwsR0FBV0EsR0FBWCxDQURlLENBRWY7O0FBQ0EsT0FBS0MsV0FBTCxHQUFtQixHQUFuQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsR0FBcEIsQ0FKZSxDQU1mO0FBQ0E7O0FBQ0EsT0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxPQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsT0FBS0MsTUFBTCxHQUFjLEdBQWQ7O0FBQ0EsT0FBS0MsSUFBTCxHQUFZLFVBQVNQLEdBQVQsRUFBYyxDQUV6QixDQUZEOztBQUdBLE9BQUtRLElBQUwsR0FBWSxVQUFTUixHQUFULEVBQWM7QUFDeEJBLElBQUFBLEdBQUcsQ0FBQ1MsU0FBSixHQUFnQixPQUFoQjtBQUNBVCxJQUFBQSxHQUFHLENBQUNVLFFBQUosQ0FBYSxLQUFLUCxDQUFsQixFQUFxQixLQUFLQyxDQUExQixFQUE2QixLQUFLQyxLQUFsQyxFQUF5QyxLQUFLQyxNQUE5QztBQUNELEdBSEQ7QUFNRDtBQUNDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9iYS1iYWUvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYXliZSBoYXZlIHRoaXMgY2xhc3MgaW5oZXJpdCBmcm9tIGEgU3ByaXRlIChzaGFyZWQgd2l0aCBJdGVtcykgb3IgR2FtZSBjbGFzcyB0byBhY2NlcHQgY2FudmFzLndpZHRoL2hlaWdodFxuLy8gTGV0J3MgaGF2ZSBhIHJlY3RhbmdsZSByZW5kZXIgZmlyc3RcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIC8vIERFTEVURSBDVFhcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgLy8gY2FuIGNoYW5nZSBjYW52YXMgZGltZW5zaW9ucyBsYXRlciBmb3IgbW9yZSBkeW5hbWljIHByYWN0aWNlc1xuICAgIHRoaXMuY2FudmFzV2lkdGggPSA4MDA7XG4gICAgdGhpcy5jYW52YXNIZWlnaHQgPSA2MDA7XG5cbiAgICAvLyBwbGF5ZXIgdmFyaWFibGVzXG4gICAgLy8gcG9zaXRpb24gcGxheWVyIHRvIHRoZSBtaWRkbGUgb2YgdGhlIHN0cmVldFxuICAgIHRoaXMueCA9IDQwMDtcbiAgICB0aGlzLnkgPSA2MDA7XG4gICAgdGhpcy53aWR0aCA9IDgwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMTIwO1xuICAgIHRoaXMuc3RlcCA9IGZ1bmN0aW9uKGN0eCkge1xuXG4gICAgfVxuICAgIHRoaXMuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgfVxuXG5cbiAgfVxuICAgIC8qIGNoZWNrIGZvcjpcbiAgICAgIGhlaWdodFxuICAgICAgd2lkdGhcbiAgICAgIHN0YXJ0aW5nIHBvczogeCBhbmQgeVxuXG4gICAgICAtIHZlbG9jaXR5OiB4IGFuZCB5IHN0YXJ0aW5nIGF0IDBcbiAgICAgICAgLSBjb250cm9scyBtb3ZlbWVudCBsZWZ0IGFuZCByaWdodFxuICAgICAgLSBqdW1waW5nOiBib29sZWFuIHdlIHNldCB0byBmYWxzZSBmaXJzdCwgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIGVuYWJsZSBkb3VibGUganVtcGluZyAuLi4gb3IgZG8gd2U/XG5cblxuXG5cblxuICAgICAgdXBkYXRlUGxheWVyIGZ1bmN0aW9uXG5cbiAgICAqL1xuXG59Il0sIm5hbWVzIjpbIlBsYXllciIsImN0eCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInN0ZXAiLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2JhLWJhZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;