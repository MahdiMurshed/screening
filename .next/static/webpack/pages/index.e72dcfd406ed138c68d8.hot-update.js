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
          if (snake[0].x !== snake[1].x + 1 && snake[0].y !== snake[1].y) {
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
        lineNumber: 228,
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
      lineNumber: 234,
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
      lineNumber: 240,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 233,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTcyZGNmZDQwNmVkMTM4YzY4ZDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxLQUFLLEVBQUUsT0FEUTtBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxLQUFLLEVBQUU7QUFIUSxDQUFqQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFDLENBQU47QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FEVTtBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBRlM7QUFHaEJFLEVBQUFBLEdBQUcsRUFBRTtBQUFFSCxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBSFc7QUFJaEJHLEVBQUFBLE1BQU0sRUFBRTtBQUFFSixJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUpRLENBQWxCOztBQU9BLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJMLENBQWlCLFFBQWpCQSxDQUFpQjtBQUFBLE1BQWRDLENBQWMsUUFBZEEsQ0FBYztBQUFBLE1BQVhLLElBQVcsUUFBWEEsSUFBVzs7QUFDL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRRCxJQUFSO0FB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QSxnQkFPRzZEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBekxEOztHQUFNM0Q7O01BQUFBO0FBMkxOLCtEQUFlLE1BQUFWLG1EQUFPLE9BQUM7QUFBQSxTQUFNeUUsT0FBTyxDQUFDQyxPQUFSLENBQWdCaEUsS0FBaEIsQ0FBTjtBQUFBLENBQUQsRUFBK0I7QUFDbkRpRSxFQUFBQSxHQUFHLEVBQUU7QUFEOEMsQ0FBL0IsQ0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1NuYWtlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENvbmZpZyA9IHtcclxuICBoZWlnaHQ6IDI1LFxyXG4gIHdpZHRoOiAyNSxcclxuICBjZWxsU2l6ZTogMzIsXHJcbn07XHJcblxyXG5jb25zdCBDZWxsVHlwZSA9IHtcclxuICBTbmFrZTogXCJzbmFrZVwiLFxyXG4gIEZvb2Q6IFwiZm9vZFwiLFxyXG4gIEVtcHR5OiBcImVtcHR5XCIsXHJcbn07XHJcblxyXG5jb25zdCBEaXJlY3Rpb24gPSB7XHJcbiAgTGVmdDogeyB4OiAtMSwgeTogMCB9LFxyXG4gIFJpZ2h0OiB7IHg6IDEsIHk6IDAgfSxcclxuICBUb3A6IHsgeDogMCwgeTogLTEgfSxcclxuICBCb3R0b206IHsgeDogMCwgeTogMSB9LFxyXG59O1xyXG5cclxuY29uc3QgQ2VsbCA9ICh7IHgsIHksIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIENlbGxUeXBlLlNuYWtlOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93Z3JlZW5cIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNhc2UgQ2VsbFR5cGUuRm9vZDpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImRhcmtvcmFuZ2VcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICAgICAgICB3aWR0aDogMzIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxDb250YWluZXJ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbGVmdDogeCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB0b3A6IHkgKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgd2lkdGg6IENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICBoZWlnaHQ6IENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsfSBzdHlsZT17Z2V0U3R5bGVzKCl9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFJhbmRvbUNlbGwgPSAoKSA9PiAoe1xyXG4gIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENvbmZpZy53aWR0aCksXHJcbiAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcclxufSk7XHJcblxyXG5jb25zdCBTbmFrZSA9ICgpID0+IHtcclxuICBjb25zdCBnZXREZWZhdWx0U25ha2UgPSAoKSA9PiBbXHJcbiAgICB7IHg6IDgsIHk6IDEyIH0sXHJcbiAgICB7IHg6IDcsIHk6IDEyIH0sXHJcbiAgICB7IHg6IDYsIHk6IDEyIH0sXHJcbiAgXTtcclxuICBjb25zdCBncmlkID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRTbmFrZShnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgIHNldEZvb2QoeyB4OiA0LCB5OiAxMCB9KTtcclxuICAgIHNldFNjb3JlKDApO1xyXG4gIH07XHJcblxyXG4gIC8vIHNuYWtlWzBdIGlzIGhlYWQgYW5kIHNuYWtlW3NuYWtlLmxlbmd0aCAtIDFdIGlzIHRhaWxcclxuICBjb25zdCBbc25ha2UsIHNldFNuYWtlXSA9IHVzZVN0YXRlKGdldERlZmF1bHRTbmFrZSgpKTtcclxuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoRGlyZWN0aW9uLlJpZ2h0KTtcclxuXHJcbiAgY29uc3QgW2Zvb2QsIHNldEZvb2RdID0gdXNlU3RhdGUoeyB4OiA0LCB5OiAxMCB9KTtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAvLyBtb3ZlIHRoZSBzbmFrZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDFcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgcnVuU2luZ2xlU3RlcCA9ICgpID0+IHtcclxuICAgICAgc2V0U25ha2UoKHNuYWtlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlYWQgPSB7IHg6IGhlYWQueCArIGRpcmVjdGlvbi54LCB5OiBoZWFkLnkgKyBkaXJlY3Rpb24ueSB9O1xyXG5cclxuICAgICAgICAvLyBtYWtlIGEgbmV3IHNuYWtlIGJ5IGV4dGVuZGluZyBoZWFkXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL1NwcmVhZF9zeW50YXhcclxuICAgICAgICBjb25zdCBuZXdTbmFrZSA9IFtuZXdIZWFkLCAuLi5zbmFrZV07XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0YWlsXHJcbiAgICAgICAgLy8gJiZcclxuICAgICAgICAvLyAobmV3U25ha2VbMF0ueCA+IENvbmZpZy53aWR0aCB8fCBuZXdTbmFrZVswXS54IDwgMClcclxuICAgICAgICBpZiAoaXNTbmFrZShuZXdIZWFkKSkge1xyXG4gICAgICAgICAgYWxlcnQoYEdhbWUgT3ZlciEgWW91ciBzY29yZSBpcyAke3Njb3JlfWApO1xyXG4gICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChncmlkLmN1cnJlbnQpO1xyXG4gICAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNGb29kKG5ld0hlYWQpKSBuZXdTbmFrZS5wb3AoKTtcclxuICAgICAgICBjb25zdCB0YWlsID0gbmV3U25ha2VbbmV3U25ha2UubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG5ld0hlYWQueCA+PSBDb25maWcud2lkdGgpIHtcclxuICAgICAgICAgIG5ld0hlYWQueCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkLnggPCAwKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnggPSBDb25maWcud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3SGVhZC55ID4gQ29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgICAgbmV3SGVhZC55ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0hlYWQueSA8IDApIHtcclxuICAgICAgICAgIG5ld0hlYWQueSA9IENvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRhaWwueCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgbmV3U25ha2VbMF0ueCA9IENvbmZpZy53aWR0aDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHRhaWwueSA9PT0gQ29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgIC8vICAgbmV3U25ha2VbMF0ueSA9IDA7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3U25ha2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBydW5TaW5nbGVTdGVwKCk7XHJcbiAgICBncmlkLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChydW5TaW5nbGVTdGVwLCA1MDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGdyaWQuY3VycmVudCk7XHJcbiAgfSwgW2RpcmVjdGlvbiwgZm9vZF0pO1xyXG5cclxuICAvLyB1cGRhdGUgc2NvcmUgd2hlbmV2ZXIgaGVhZCB0b3VjaGVzIGEgZm9vZFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgMlwiLCBzbmFrZSk7XHJcbiAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgICBpZiAoaXNGb29kKGhlYWQpKSB7XHJcbiAgICAgIHNldFNjb3JlKChzY29yZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzY29yZSArIDE7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XHJcbiAgICAgICAgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0Rm9vZChuZXdGb29kKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IHNldE5ld0Zvb2QgPSAoKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAvLyAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XHJcbiAgICAvLyAgICAgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBzZXRGb29kKG5ld0Zvb2QpO1xyXG4gICAgLy8gfTtcclxuICAgIC8vIHNldE5ld0Zvb2QoKTtcclxuICAgIC8vIGNvbnN0IHRpbWVyMiA9IHNldEludGVydmFsKHNldE5ld0Zvb2QsIDEwMDAwKTtcclxuXHJcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcjIpO1xyXG4gIH0sIFtzbmFrZSwgZm9vZF0pO1xyXG5cclxuICAvLyBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgLy8gY29uc3QgbmV3SGVhZCA9IHsgeDogaGVhZC54ICsgZGlyZWN0aW9uLngsIHk6IGhlYWQueSArIGRpcmVjdGlvbi55IH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgM1wiLCBzbmFrZSk7XHJcbiAgICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAzLWhhbmRsZSBuYXZpZ2F0aW9uXCIsIHNuYWtlKTtcclxuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgLy8gY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaGVhZCk7XHJcbiAgICAgICAgICAvLyBjb25zdCBuZXdIZWFkID0ge1xyXG4gICAgICAgICAgLy8gICB4OiBoZWFkLnggKyBEaXJlY3Rpb24uVG9wLngsXHJcbiAgICAgICAgICAvLyAgIHk6IGhlYWQueSArIERpcmVjdGlvbi5Ub3AueSxcclxuICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzbmFrZVswXSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzbmFrZVsxXSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzbmFrZVsyXSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdIZWFkKTtcclxuICAgICAgICAgIC8vIGlmICghaXNTbmFrZShuZXdIZWFkKSkge1xyXG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5Ub3ApO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgaWYgKHNuYWtlWzBdLnggIT09IHNuYWtlWzFdLnggKyAxICYmIHNuYWtlWzBdLnkgIT09IHNuYWtlWzFdLnkpIHtcclxuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXHJcbiAgLy8gc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvT3B0aW9uYWxfY2hhaW5pbmdcclxuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IGZvb2QueCA9PT0geCAmJiBmb29kLnkgPT09IHk7XHJcblxyXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+XHJcbiAgICBzbmFrZS5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBbXTtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53aWR0aDsgeCsrKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENvbmZpZy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBsZXQgdHlwZSA9IENlbGxUeXBlLkVtcHR5O1xyXG4gICAgICBpZiAoaXNGb29kKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5Gb29kO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzU25ha2UoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLlNuYWtlO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGxzLnB1c2goPENlbGwga2V5PXtgJHt4fS0ke3l9YH0geD17eH0geT17eX0gdHlwZT17dHlwZX0gLz4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplIH19XHJcbiAgICAgID5cclxuICAgICAgICBTY29yZToge3Njb3JlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogQ29uZmlnLmhlaWdodCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICAgIHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjZWxsc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoU25ha2UpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb25maWciLCJoZWlnaHQiLCJ3aWR0aCIsImNlbGxTaXplIiwiQ2VsbFR5cGUiLCJTbmFrZSIsIkZvb2QiLCJFbXB0eSIsIkRpcmVjdGlvbiIsIkxlZnQiLCJ4IiwieSIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2VsbCIsInR5cGUiLCJnZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2VsbENvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJjZWxsIiwiZ2V0UmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldERlZmF1bHRTbmFrZSIsImdyaWQiLCJyZXNldCIsInNldFNuYWtlIiwic2V0RGlyZWN0aW9uIiwic2V0Rm9vZCIsInNldFNjb3JlIiwic25ha2UiLCJkaXJlY3Rpb24iLCJmb29kIiwic2NvcmUiLCJjb25zb2xlIiwibG9nIiwicnVuU2luZ2xlU3RlcCIsImhlYWQiLCJuZXdIZWFkIiwibmV3U25ha2UiLCJpc1NuYWtlIiwiYWxlcnQiLCJpc0Zvb2QiLCJwb3AiLCJ0YWlsIiwibGVuZ3RoIiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm5ld0Zvb2QiLCJoYW5kbGVOYXZpZ2F0aW9uIiwiZXZlbnQiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbmQiLCJwb3NpdGlvbiIsImNlbGxzIiwicHVzaCIsImNvbnRhaW5lciIsImhlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==