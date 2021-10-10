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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = new _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // this.canvas.loadCurrentStage();\n\n  /*\n    call for window.requestAnimationFrame which takes it a callback to itself for recursive loop\n   */\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFFQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQU1DLE1BQU0sR0FBRyxJQUFJSCwwREFBSixFQUFmLENBRGtELENBR2xEOztBQUVBO0FBQ0Y7QUFDQTtBQUdDLENBVkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2JhLWJhZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzLmpzXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIC8vIHRoaXMuY2FudmFzLmxvYWRDdXJyZW50U3RhZ2UoKTtcblxuICAvKlxuICAgIGNhbGwgZm9yIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgd2hpY2ggdGFrZXMgaXQgYSBjYWxsYmFjayB0byBpdHNlbGYgZm9yIHJlY3Vyc2l2ZSBsb29wXG5cbiAgKi9cblxufSkiXSwibmFtZXMiOlsiQ2FudmFzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Canvas; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Maybe I should make canvas width and height constants\n// In this file all we want to do is retrieve the attributes of the canvas and clear it upon each call to our game loop (in another file)\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    this.canvas = document.getElementById(\"my-canvas\");\n    this.canvas.width = 800;\n    this.canvas.height = 600;\n    this.ctx = this.canvas.getContext(\"2d\");\n  }\n\n  _createClass(Canvas, [{\n    key: \"clearCanvas\",\n    value: function clearCanvas() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    } // // maybe move this later\n    // loadCurrentStage() {\n    //   this.background = new Image();\n    //   this.background.src = \"src/images/cyberpunk-bg.png\";\n    //   this.renderBackground();\n    //   // render score\n    // }\n    // renderBackground() {\n    //   this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);\n    // }\n\n  }]);\n\n  return Canvas;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7SUFDcUJBO0FBQ25CLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZDtBQUNBLFNBQUtGLE1BQUwsQ0FBWUcsS0FBWixHQUFvQixHQUFwQjtBQUNBLFNBQUtILE1BQUwsQ0FBWUksTUFBWixHQUFxQixHQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLTCxNQUFMLENBQVlNLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNEOzs7O1dBRUQsdUJBQWM7QUFDWixXQUFLRCxHQUFMLENBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS1AsTUFBTCxDQUFZRyxLQUFyQyxFQUE0QyxLQUFLSCxNQUFMLENBQVlJLE1BQXhEO0FBQ0QsTUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvYmEtYmFlLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzPzdiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBNYXliZSBJIHNob3VsZCBtYWtlIGNhbnZhcyB3aWR0aCBhbmQgaGVpZ2h0IGNvbnN0YW50c1xuLy8gSW4gdGhpcyBmaWxlIGFsbCB3ZSB3YW50IHRvIGRvIGlzIHJldHJpZXZlIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBjYW52YXMgYW5kIGNsZWFyIGl0IHVwb24gZWFjaCBjYWxsIHRvIG91ciBnYW1lIGxvb3AgKGluIGFub3RoZXIgZmlsZSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1jYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSA4MDA7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG5cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgLy8gLy8gbWF5YmUgbW92ZSB0aGlzIGxhdGVyXG4gIC8vIGxvYWRDdXJyZW50U3RhZ2UoKSB7XG4gIC8vICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gIC8vICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwic3JjL2ltYWdlcy9jeWJlcnB1bmstYmcucG5nXCI7XG4gIC8vICAgdGhpcy5yZW5kZXJCYWNrZ3JvdW5kKCk7XG4gIC8vICAgLy8gcmVuZGVyIHNjb3JlXG4gIC8vIH1cblxuICAvLyByZW5kZXJCYWNrZ3JvdW5kKCkge1xuICAvLyAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmQsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAvLyB9XG59Il0sIm5hbWVzIjpbIkNhbnZhcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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