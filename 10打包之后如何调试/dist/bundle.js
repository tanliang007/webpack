/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _arguments = arguments;\n\nvar _ = __webpack_require__(1);\n\nvar _2 = _interopRequireDefault(_);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//一些es6 代码\nvar link = function link() {\n\tvar height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;\n\tvar color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'red';\n\tvar url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'http://azat.co';\n\n\tconsole.log(height, color, url);\n};\n\nvar first = 'tanliang';\nvar name = 'Your name is ' + first;\n\nvar a = function a() {\n\tconsole.log(_arguments);\n};\na();\n\nvar baseModel = function () {\n\tfunction baseModel(options, data) {\n\t\t_classCallCheck(this, baseModel);\n\n\t\t// class constructor，node.js 5.6暂时不支持options = {}, data = []这样传参\n\t\tthis.name = 'Base';\n\t\tthis.url = 'http://azat.co/api';\n\t\tthis.data = data;\n\t\tthis.options = options;\n\t}\n\n\t_createClass(baseModel, [{\n\t\tkey: 'getName',\n\t\tvalue: function getName() {\n\t\t\t// class method\n\t\t\tconsole.log('Class name: ' + this.name);\n\t\t}\n\t}]);\n\n\treturn baseModel;\n}();\n\nconsole.log(new baseModel());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZW50cnkuanM/OGQyNCJdLCJuYW1lcyI6WyJsaW5rIiwiaGVpZ2h0IiwiY29sb3IiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZmlyc3QiLCJuYW1lIiwiYSIsImJhc2VNb2RlbCIsIm9wdGlvbnMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTtBQUNBLElBQUlBLE9BQU8sU0FBUEEsSUFBTyxHQUE2RDtBQUFBLEtBQXBEQyxNQUFvRCx1RUFBM0MsRUFBMkM7QUFBQSxLQUF2Q0MsS0FBdUMsdUVBQS9CLEtBQStCO0FBQUEsS0FBeEJDLEdBQXdCLHVFQUFsQixnQkFBa0I7O0FBQ3JFQyxTQUFRQyxHQUFSLENBQVlKLE1BQVosRUFBb0JDLEtBQXBCLEVBQTBCQyxHQUExQjtBQUNGLENBRkQ7O0FBSUEsSUFBTUcsUUFBTSxVQUFaO0FBQ0EsSUFBSUMseUJBQXVCRCxLQUEzQjs7QUFFQSxJQUFNRSxJQUFFLFNBQUZBLENBQUUsR0FBSTtBQUNYSixTQUFRQyxHQUFSO0FBQ0MsQ0FGRjtBQUdDRzs7SUFFTUMsUztBQUNMLG9CQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQjtBQUFBOztBQUFFO0FBQzVCLE9BQUtKLElBQUwsR0FBWSxNQUFaO0FBQ0EsT0FBS0osR0FBTCxHQUFXLG9CQUFYO0FBQ0EsT0FBS1EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0M7Ozs7NEJBRVM7QUFBRTtBQUNWTixXQUFRQyxHQUFSLGtCQUEyQixLQUFLRSxJQUFoQztBQUNEOzs7Ozs7QUFFSEgsUUFBUUMsR0FBUixDQUFZLElBQUlJLFNBQUosRUFBWiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICcuL2Nzcy8xLmNzcyc7XG5cbi8v5LiA5LqbZXM2IOS7o+eggVxudmFyIGxpbmsgPSBmdW5jdGlvbihoZWlnaHQgPSA1MCwgY29sb3IgPSAncmVkJywgdXJsID0gJ2h0dHA6Ly9hemF0LmNvJykge1xuXHQgIGNvbnNvbGUubG9nKGhlaWdodCwgY29sb3IsdXJsKVxufVxuXG5jb25zdCBmaXJzdD0ndGFubGlhbmcnXG52YXIgbmFtZSA9IGBZb3VyIG5hbWUgaXMgJHtmaXJzdH1gO1xuXG5jb25zdCBhPSgpPT57XG5cdGNvbnNvbGUubG9nKGFyZ3VtZW50cylcblx0fVxuXHRhKCApXG5cblx0Y2xhc3MgYmFzZU1vZGVsIHtcblx0XHRjb25zdHJ1Y3RvcihvcHRpb25zLCBkYXRhKSB7IC8vIGNsYXNzIGNvbnN0cnVjdG9y77yMbm9kZS5qcyA1LjbmmoLml7bkuI3mlK/mjIFvcHRpb25zID0ge30sIGRhdGEgPSBbXei/meagt+S8oOWPglxuXHRcdFx0dGhpcy5uYW1lID0gJ0Jhc2UnO1xuXHRcdFx0dGhpcy51cmwgPSAnaHR0cDovL2F6YXQuY28vYXBpJztcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdCB9XG5cdCBcblx0XHRcdGdldE5hbWUoKSB7IC8vIGNsYXNzIG1ldGhvZFxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBDbGFzcyBuYW1lOiAke3RoaXMubmFtZX1gKTtcblx0XHRcdH1cblx0fVxuXHRjb25zb2xlLmxvZyhuZXcgYmFzZU1vZGVsKCkpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VudHJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzLzEuY3NzPzMwMTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzLzEuY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);