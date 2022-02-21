"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Snake.module.css */ "./styles/Snake.module.css");
/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\User\\web\\Next\\linkedIn\\screening\\screening\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var Config = {
  height: 25,
  width: 25,
  cellSize: 32
};
var CellType = {
  Snake: "snake",
  Food: "food",
  Empty: "empty"
};
var Direction = {
  Left: {
    x: -1,
    y: 0
  },
  Right: {
    x: 1,
    y: 0
  },
  Top: {
    x: 0,
    y: -1
  },
  Bottom: {
    x: 0,
    y: 1
  }
};

var Cell = function Cell(_ref) {
  var x = _ref.x,
      y = _ref.y,
      type = _ref.type;

  var getStyles = function getStyles() {
    switch (type) {
      case CellType.Snake:
        return {
          backgroundColor: "yellowgreen",
          borderRadius: 8,
          padding: 2
        };

      case CellType.Food:
        return {
          backgroundColor: "darkorange",
          borderRadius: 20,
          width: 32,
          height: 32
        };

      default:
        return {};
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().cellContainer),
    style: {
      left: x * Config.cellSize,
      top: y * Config.cellSize,
      width: Config.cellSize,
      height: Config.cellSize
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().cell),
      style: getStyles()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_c = Cell;

var getRandomCell = function getRandomCell() {
  return {
    x: Math.floor(Math.random() * Config.width),
    y: Math.floor(Math.random() * Config.width)
  };
};

var Snake = function Snake() {
  _s();

  var getDefaultSnake = function getDefaultSnake() {
    return [{
      x: 8,
      y: 12
    }, {
      x: 7,
      y: 12
    }, {
      x: 6,
      y: 12
    }];
  };

  var grid = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var reset = function reset() {
    setSnake(getDefaultSnake());
    setDirection(Direction.Right);
    setFood({
      x: 4,
      y: 10
    });
    setScore(0);
  }; // snake[0] is head and snake[snake.length - 1] is tail


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(getDefaultSnake()),
      snake = _useState[0],
      setSnake = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Direction.Right),
      direction = _useState2[0],
      setDirection = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    x: 4,
    y: 10
  }),
      food = _useState3[0],
      setFood = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      score = _useState4[0],
      setScore = _useState4[1]; // move the snake


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    console.log("use effect 1", snake);

    var runSingleStep = function runSingleStep() {
      setSnake(function (snake) {
        var head = snake[0];
        var newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y
        }; // make a new snake by extending head
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        var newSnake = [newHead].concat((0,C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(snake)); // remove tail
        // &&
        // (newSnake[0].x > Config.width || newSnake[0].x < 0)

        if (isSnake(newHead)) {
          alert("Game Over! Your score is ".concat(score)); // clearInterval(grid.current);

          reset();
        }

        if (!isFood(newHead)) newSnake.pop();
        var tail = newSnake[newSnake.length - 1];

        if (newHead.x >= Config.width) {
          newHead.x = 0;
        } else if (newHead.x < 0) {
          newHead.x = Config.width;
        }

        if (newHead.y > Config.height) {
          newHead.y = 0;
        } else if (newHead.y < 0) {
          newHead.y = Config.height;
        } // else if (tail.x === 0) {
        //   newSnake[0].x = Config.width;
        // }
        // if (tail.y === Config.height) {
        //   newSnake[0].y = 0;
        // }


        return newSnake;
      });
    };

    runSingleStep();
    grid.current = setInterval(runSingleStep, 500);
    return function () {
      return clearInterval(grid.current);
    };
  }, [direction, food]); // update score whenever head touches a food

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    console.log("use effect 2", snake);
    var head = snake[0];

    if (isFood(head)) {
      setScore(function (score) {
        return score + 1;
      });
      var newFood = getRandomCell();

      while (isSnake(newFood)) {
        newFood = getRandomCell();
      }

      setFood(newFood);
    } // const setNewFood = () => {
    //   const newFood = getRandomCell();
    //   while (isSnake(newFood)) {
    //     newFood = getRandomCell();
    //   }
    //   setFood(newFood);
    // };
    // setNewFood();
    // const timer2 = setInterval(setNewFood, 10000);
    // return () => clearInterval(timer2);

  }, [snake, food]); // const head = snake[0];
  // const newHead = { x: head.x + direction.x, y: head.y + direction.y };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    console.log("use effect 3", snake);

    var handleNavigation = function handleNavigation(event) {
      console.log("use effect 3-handle navigation", snake);

      switch (event.key) {
        case "ArrowUp":
          // const head = snake[0];
          // console.log(head);
          // const newHead = {
          //   x: head.x + Direction.Top.x,
          //   y: head.y + Direction.Top.y,
          // };
          // console.log(snake[0]);
          // console.log(snake[1]);
          // console.log(snake[2]);
          // console.log(newHead);
          // if (!isSnake(newHead)) {
          setDirection(Direction.Top);
          break;

        case "ArrowDown":
          setDirection(Direction.Bottom);
          break;

        case "ArrowLeft":
          if (snake[0].x !== snake[1].x + 1) {
            setDirection(Direction.Left);
          } else {
            setDirection(Direction.Left);
          }

          break;

        case "ArrowRight":
          setDirection(Direction.Right);
          break;
      }
    };

    window.addEventListener("keydown", handleNavigation);
    return function () {
      return window.removeEventListener("keydown", handleNavigation);
    };
  }, []); // ?. is called optional chaining
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

  var isFood = function isFood(_ref2) {
    var x = _ref2.x,
        y = _ref2.y;
    return food.x === x && food.y === y;
  };

  var isSnake = function isSnake(_ref3) {
    var x = _ref3.x,
        y = _ref3.y;
    return snake.find(function (position) {
      return position.x === x && position.y === y;
    });
  };

  var cells = [];

  for (var x = 0; x < Config.width; x++) {
    for (var y = 0; y < Config.height; y++) {
      var type = CellType.Empty;

      if (isFood({
        x: x,
        y: y
      })) {
        type = CellType.Food;
      } else if (isSnake({
        x: x,
        y: y
      })) {
        type = CellType.Snake;
      }

      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {
        x: x,
        y: y,
        type: type
      }, "".concat(x, "-").concat(y), false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 18
      }, _this));
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      style: {
        width: Config.width * Config.cellSize
      },
      children: ["Score: ", score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),
      style: {
        height: Config.height * Config.cellSize,
        width: Config.width * Config.cellSize
      },
      children: cells
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 235,
    columnNumber: 5
  }, _this);
};

_s(Snake, "RHHDYRBgFCtzyh1XO+KMVB/vb/g=");

_c2 = Snake;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c3 = function _c3() {
  return Promise.resolve(Snake);
}, {
  ssr: false
}));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Cell");
$RefreshReg$(_c2, "Snake");
$RefreshReg$(_c3, "%default%$dynamic");
$RefreshReg$(_c4, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjY4MWY4MDlhM2ZlZDFlOGI2MTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxLQUFLLEVBQUUsT0FEUTtBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxLQUFLLEVBQUU7QUFIUSxDQUFqQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFDLENBQU47QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FEVTtBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBRlM7QUFHaEJFLEVBQUFBLEdBQUcsRUFBRTtBQUFFSCxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBSFc7QUFJaEJHLEVBQUFBLE1BQU0sRUFBRTtBQUFFSixJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUpRLENBQWxCOztBQU9BLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJMLENBQWlCLFFBQWpCQSxDQUFpQjtBQUFBLE1BQWRDLENBQWMsUUFBZEEsQ0FBYztBQUFBLE1BQVhLLElBQVcsUUFBWEEsSUFBVzs7QUFDL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRRCxJQUFSO0FB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O0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0EzTEQ7O0dBQU0zRDs7TUFBQUE7QUE2TE4sK0RBQWUsTUFBQVYsbURBQU8sT0FBQztBQUFBLFNBQU15RSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JoRSxLQUFoQixDQUFOO0FBQUEsQ0FBRCxFQUErQjtBQUNuRGlFLEVBQUFBLEdBQUcsRUFBRTtBQUQ4QyxDQUEvQixDQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ29uZmlnID0ge1xyXG4gIGhlaWdodDogMjUsXHJcbiAgd2lkdGg6IDI1LFxyXG4gIGNlbGxTaXplOiAzMixcclxufTtcclxuXHJcbmNvbnN0IENlbGxUeXBlID0ge1xyXG4gIFNuYWtlOiBcInNuYWtlXCIsXHJcbiAgRm9vZDogXCJmb29kXCIsXHJcbiAgRW1wdHk6IFwiZW1wdHlcIixcclxufTtcclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHtcclxuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXHJcbiAgUmlnaHQ6IHsgeDogMSwgeTogMCB9LFxyXG4gIFRvcDogeyB4OiAwLCB5OiAtMSB9LFxyXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXHJcbn07XHJcblxyXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dncmVlblwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgcGFkZGluZzogMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY2FzZSBDZWxsVHlwZS5Gb29kOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgIGhlaWdodDogMzIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBsZWZ0OiB4ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB3aWR0aDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIGhlaWdodDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9IHN0eWxlPXtnZXRTdHlsZXMoKX0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmFuZG9tQ2VsbCA9ICgpID0+ICh7XHJcbiAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcclxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG59KTtcclxuXHJcbmNvbnN0IFNuYWtlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdldERlZmF1bHRTbmFrZSA9ICgpID0+IFtcclxuICAgIHsgeDogOCwgeTogMTIgfSxcclxuICAgIHsgeDogNywgeTogMTIgfSxcclxuICAgIHsgeDogNiwgeTogMTIgfSxcclxuICBdO1xyXG4gIGNvbnN0IGdyaWQgPSB1c2VSZWYoKTtcclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIHNldFNuYWtlKGdldERlZmF1bHRTbmFrZSgpKTtcclxuICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgc2V0Rm9vZCh7IHg6IDQsIHk6IDEwIH0pO1xyXG4gICAgc2V0U2NvcmUoMCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gc25ha2VbMF0gaXMgaGVhZCBhbmQgc25ha2Vbc25ha2UubGVuZ3RoIC0gMV0gaXMgdGFpbFxyXG4gIGNvbnN0IFtzbmFrZSwgc2V0U25ha2VdID0gdXNlU3RhdGUoZ2V0RGVmYXVsdFNuYWtlKCkpO1xyXG4gIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShEaXJlY3Rpb24uUmlnaHQpO1xyXG5cclxuICBjb25zdCBbZm9vZCwgc2V0Rm9vZF0gPSB1c2VTdGF0ZSh7IHg6IDQsIHk6IDEwIH0pO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vIG1vdmUgdGhlIHNuYWtlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgMVwiLCBzbmFrZSk7XHJcbiAgICBjb25zdCBydW5TaW5nbGVTdGVwID0gKCkgPT4ge1xyXG4gICAgICBzZXRTbmFrZSgoc25ha2UpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgICAgICAgY29uc3QgbmV3SGVhZCA9IHsgeDogaGVhZC54ICsgZGlyZWN0aW9uLngsIHk6IGhlYWQueSArIGRpcmVjdGlvbi55IH07XHJcblxyXG4gICAgICAgIC8vIG1ha2UgYSBuZXcgc25ha2UgYnkgZXh0ZW5kaW5nIGhlYWRcclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvU3ByZWFkX3N5bnRheFxyXG4gICAgICAgIGNvbnN0IG5ld1NuYWtlID0gW25ld0hlYWQsIC4uLnNuYWtlXTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRhaWxcclxuICAgICAgICAvLyAmJlxyXG4gICAgICAgIC8vIChuZXdTbmFrZVswXS54ID4gQ29uZmlnLndpZHRoIHx8IG5ld1NuYWtlWzBdLnggPCAwKVxyXG4gICAgICAgIGlmIChpc1NuYWtlKG5ld0hlYWQpKSB7XHJcbiAgICAgICAgICBhbGVydChgR2FtZSBPdmVyISBZb3VyIHNjb3JlIGlzICR7c2NvcmV9YCk7XHJcbiAgICAgICAgICAvLyBjbGVhckludGVydmFsKGdyaWQuY3VycmVudCk7XHJcbiAgICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0Zvb2QobmV3SGVhZCkpIG5ld1NuYWtlLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IHRhaWwgPSBuZXdTbmFrZVtuZXdTbmFrZS5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAobmV3SGVhZC54ID49IENvbmZpZy53aWR0aCkge1xyXG4gICAgICAgICAgbmV3SGVhZC54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0hlYWQueCA8IDApIHtcclxuICAgICAgICAgIG5ld0hlYWQueCA9IENvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdIZWFkLnkgPiBDb25maWcuaGVpZ2h0KSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZC55IDwgMCkge1xyXG4gICAgICAgICAgbmV3SGVhZC55ID0gQ29uZmlnLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAodGFpbC54ID09PSAwKSB7XHJcbiAgICAgICAgLy8gICBuZXdTbmFrZVswXS54ID0gQ29uZmlnLndpZHRoO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAodGFpbC55ID09PSBDb25maWcuaGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gICBuZXdTbmFrZVswXS55ID0gMDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJ1blNpbmdsZVN0ZXAoKTtcclxuICAgIGdyaWQuY3VycmVudCA9IHNldEludGVydmFsKHJ1blNpbmdsZVN0ZXAsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoZ3JpZC5jdXJyZW50KTtcclxuICB9LCBbZGlyZWN0aW9uLCBmb29kXSk7XHJcblxyXG4gIC8vIHVwZGF0ZSBzY29yZSB3aGVuZXZlciBoZWFkIHRvdWNoZXMgYSBmb29kXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAyXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgIGlmIChpc0Zvb2QoaGVhZCkpIHtcclxuICAgICAgc2V0U2NvcmUoKHNjb3JlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNjb3JlICsgMTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcclxuICAgICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRGb29kKG5ld0Zvb2QpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3Qgc2V0TmV3Rm9vZCA9ICgpID0+IHtcclxuICAgIC8vICAgY29uc3QgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgIC8vICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcclxuICAgIC8vICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHNldEZvb2QobmV3Rm9vZCk7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gc2V0TmV3Rm9vZCgpO1xyXG4gICAgLy8gY29uc3QgdGltZXIyID0gc2V0SW50ZXJ2YWwoc2V0TmV3Rm9vZCwgMTAwMDApO1xyXG5cclxuICAgIC8vIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyMik7XHJcbiAgfSwgW3NuYWtlLCBmb29kXSk7XHJcblxyXG4gIC8vIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAvLyBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAzXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDMtaGFuZGxlIG5hdmlnYXRpb25cIiwgc25ha2UpO1xyXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAvLyBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoZWFkKTtcclxuICAgICAgICAgIC8vIGNvbnN0IG5ld0hlYWQgPSB7XHJcbiAgICAgICAgICAvLyAgIHg6IGhlYWQueCArIERpcmVjdGlvbi5Ub3AueCxcclxuICAgICAgICAgIC8vICAgeTogaGVhZC55ICsgRGlyZWN0aW9uLlRvcC55LFxyXG4gICAgICAgICAgLy8gfTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzBdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzFdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzJdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0hlYWQpO1xyXG4gICAgICAgICAgLy8gaWYgKCFpc1NuYWtlKG5ld0hlYWQpKSB7XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlRvcCk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uQm90dG9tKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICBpZiAoc25ha2VbMF0ueCAhPT0gc25ha2VbMV0ueCArIDEpIHtcclxuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uTGVmdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vID8uIGlzIGNhbGxlZCBvcHRpb25hbCBjaGFpbmluZ1xyXG4gIC8vIHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL09wdGlvbmFsX2NoYWluaW5nXHJcbiAgY29uc3QgaXNGb29kID0gKHsgeCwgeSB9KSA9PiBmb29kLnggPT09IHggJiYgZm9vZC55ID09PSB5O1xyXG5cclxuICBjb25zdCBpc1NuYWtlID0gKHsgeCwgeSB9KSA9PlxyXG4gICAgc25ha2UuZmluZCgocG9zaXRpb24pID0+IHBvc2l0aW9uLnggPT09IHggJiYgcG9zaXRpb24ueSA9PT0geSk7XHJcblxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBDb25maWcud2lkdGg7IHgrKykge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBDb25maWcuaGVpZ2h0OyB5KyspIHtcclxuICAgICAgbGV0IHR5cGUgPSBDZWxsVHlwZS5FbXB0eTtcclxuICAgICAgaWYgKGlzRm9vZCh7IHgsIHkgfSkpIHtcclxuICAgICAgICB0eXBlID0gQ2VsbFR5cGUuRm9vZDtcclxuICAgICAgfSBlbHNlIGlmIChpc1NuYWtlKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5TbmFrZTtcclxuICAgICAgfVxyXG4gICAgICBjZWxscy5wdXNoKDxDZWxsIGtleT17YCR7eH0tJHt5fWB9IHg9e3h9IHk9e3l9IHR5cGU9e3R5cGV9IC8+KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IENvbmZpZy53aWR0aCAqIENvbmZpZy5jZWxsU2l6ZSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgU2NvcmU6IHtzY29yZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IENvbmZpZy5oZWlnaHQgKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgICB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2VsbHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFNuYWtlKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZHluYW1pYyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiQ29uZmlnIiwiaGVpZ2h0Iiwid2lkdGgiLCJjZWxsU2l6ZSIsIkNlbGxUeXBlIiwiU25ha2UiLCJGb29kIiwiRW1wdHkiLCJEaXJlY3Rpb24iLCJMZWZ0IiwieCIsInkiLCJSaWdodCIsIlRvcCIsIkJvdHRvbSIsIkNlbGwiLCJ0eXBlIiwiZ2V0U3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImNlbGxDb250YWluZXIiLCJsZWZ0IiwidG9wIiwiY2VsbCIsImdldFJhbmRvbUNlbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXREZWZhdWx0U25ha2UiLCJncmlkIiwicmVzZXQiLCJzZXRTbmFrZSIsInNldERpcmVjdGlvbiIsInNldEZvb2QiLCJzZXRTY29yZSIsInNuYWtlIiwiZGlyZWN0aW9uIiwiZm9vZCIsInNjb3JlIiwiY29uc29sZSIsImxvZyIsInJ1blNpbmdsZVN0ZXAiLCJoZWFkIiwibmV3SGVhZCIsIm5ld1NuYWtlIiwiaXNTbmFrZSIsImFsZXJ0IiwiaXNGb29kIiwicG9wIiwidGFpbCIsImxlbmd0aCIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJuZXdGb29kIiwiaGFuZGxlTmF2aWdhdGlvbiIsImV2ZW50Iiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaW5kIiwicG9zaXRpb24iLCJjZWxscyIsInB1c2giLCJjb250YWluZXIiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=