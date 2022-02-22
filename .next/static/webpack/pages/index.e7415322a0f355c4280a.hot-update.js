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

  console.log("rendering");

  var getDefaultSnake = function getDefaultSnake() {
    console.log("getDefaultSnake");
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


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(function () {
    return getDefaultSnake();
  }),
      snake = _useState[0],
      setSnake = _useState[1];

  console.log(snake);

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
          if (snake[0].y !== snake[1].y + 1) {
            setDirection(Direction.Top);
          }

          break;

        case "ArrowDown":
          if (snake[0].y + 1 !== snake[1].y) {
            setDirection(Direction.Bottom);
          }

          break;

        case "ArrowLeft":
          if (snake[0].x !== snake[1].x + 1) {
            setDirection(Direction.Left);
          }

          break;

        case "ArrowRight":
          if (snake[0].x + 1 !== snake[1].x) {
            setDirection(Direction.Right);
          }

          break;
      }
    };

    window.addEventListener("keydown", handleNavigation);
    return function () {
      return window.removeEventListener("keydown", handleNavigation);
    };
  }, [snake]); // ?. is called optional chaining
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

_s(Snake, "sDs27tRgl/Y0lR0nNwxS2gr4a+Y=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTc0MTUzMjJhMGYzNTVjNDI4MGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxLQUFLLEVBQUUsT0FEUTtBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxLQUFLLEVBQUU7QUFIUSxDQUFqQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFDLENBQU47QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FEVTtBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBRlM7QUFHaEJFLEVBQUFBLEdBQUcsRUFBRTtBQUFFSCxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBSFc7QUFJaEJHLEVBQUFBLE1BQU0sRUFBRTtBQUFFSixJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUpRLENBQWxCOztBQU9BLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJMLENBQWlCLFFBQWpCQSxDQUFpQjtBQUFBLE1BQWRDLENBQWMsUUFBZEEsQ0FBYztBQUFBLE1BQVhLLElBQVcsUUFBWEEsSUFBVzs7QUFDL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRRCxJQUFSO0FB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LDJFQUFoQjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFQSx3RUFEYjtBQUVFLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlRixNQUFNLENBQUNHO0FBQS9CLE9BRlQ7QUFBQSw0QkFJVXNDLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUNFLGVBQVMsRUFBRTFDLHNFQURiO0FBRUUsV0FBSyxFQUFFO0FBQ0xFLFFBQUFBLE1BQU0sRUFBRUQsTUFBTSxDQUFDQyxNQUFQLEdBQWdCRCxNQUFNLENBQUNHLFFBRDFCO0FBRUxELFFBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxLQUFQLEdBQWVGLE1BQU0sQ0FBQ0c7QUFGeEIsT0FGVDtBQUFBLGdCQU9HNkQ7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0EzTEQ7O0dBQU0zRDs7TUFBQUE7QUE2TE4sK0RBQWUsTUFBQVYsbURBQU8sT0FBQztBQUFBLFNBQU15RSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JoRSxLQUFoQixDQUFOO0FBQUEsQ0FBRCxFQUErQjtBQUNuRGlFLEVBQUFBLEdBQUcsRUFBRTtBQUQ4QyxDQUEvQixDQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ29uZmlnID0ge1xyXG4gIGhlaWdodDogMjUsXHJcbiAgd2lkdGg6IDI1LFxyXG4gIGNlbGxTaXplOiAzMixcclxufTtcclxuXHJcbmNvbnN0IENlbGxUeXBlID0ge1xyXG4gIFNuYWtlOiBcInNuYWtlXCIsXHJcbiAgRm9vZDogXCJmb29kXCIsXHJcbiAgRW1wdHk6IFwiZW1wdHlcIixcclxufTtcclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHtcclxuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXHJcbiAgUmlnaHQ6IHsgeDogMSwgeTogMCB9LFxyXG4gIFRvcDogeyB4OiAwLCB5OiAtMSB9LFxyXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXHJcbn07XHJcblxyXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dncmVlblwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgcGFkZGluZzogMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY2FzZSBDZWxsVHlwZS5Gb29kOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgIGhlaWdodDogMzIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBsZWZ0OiB4ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB3aWR0aDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIGhlaWdodDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9IHN0eWxlPXtnZXRTdHlsZXMoKX0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmFuZG9tQ2VsbCA9ICgpID0+ICh7XHJcbiAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcclxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG59KTtcclxuXHJcbmNvbnN0IFNuYWtlID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicmVuZGVyaW5nXCIpO1xyXG4gIGNvbnN0IGdldERlZmF1bHRTbmFrZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0RGVmYXVsdFNuYWtlXCIpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgeyB4OiA4LCB5OiAxMiB9LFxyXG4gICAgICB7IHg6IDcsIHk6IDEyIH0sXHJcbiAgICAgIHsgeDogNiwgeTogMTIgfSxcclxuICAgIF07XHJcbiAgfTtcclxuICBjb25zdCBncmlkID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRTbmFrZShnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgIHNldEZvb2QoeyB4OiA0LCB5OiAxMCB9KTtcclxuICAgIHNldFNjb3JlKDApO1xyXG4gIH07XHJcblxyXG4gIC8vIHNuYWtlWzBdIGlzIGhlYWQgYW5kIHNuYWtlW3NuYWtlLmxlbmd0aCAtIDFdIGlzIHRhaWxcclxuICBjb25zdCBbc25ha2UsIHNldFNuYWtlXSA9IHVzZVN0YXRlKCgpID0+IGdldERlZmF1bHRTbmFrZSgpKTtcclxuICBjb25zb2xlLmxvZyhzbmFrZSk7XHJcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKERpcmVjdGlvbi5SaWdodCk7XHJcblxyXG4gIGNvbnN0IFtmb29kLCBzZXRGb29kXSA9IHVzZVN0YXRlKHsgeDogNCwgeTogMTAgfSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgLy8gbW92ZSB0aGUgc25ha2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAxXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IHJ1blNpbmdsZVN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNuYWtlKChzbmFrZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgICAgICBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgICAgICAgLy8gbWFrZSBhIG5ldyBzbmFrZSBieSBleHRlbmRpbmcgaGVhZFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9TcHJlYWRfc3ludGF4XHJcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbbmV3SGVhZCwgLi4uc25ha2VdO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGFpbFxyXG4gICAgICAgIC8vICYmXHJcbiAgICAgICAgLy8gKG5ld1NuYWtlWzBdLnggPiBDb25maWcud2lkdGggfHwgbmV3U25ha2VbMF0ueCA8IDApXHJcbiAgICAgICAgaWYgKGlzU25ha2UobmV3SGVhZCkpIHtcclxuICAgICAgICAgIGFsZXJ0KGBHYW1lIE92ZXIhIFlvdXIgc2NvcmUgaXMgJHtzY29yZX1gKTtcclxuICAgICAgICAgIC8vIGNsZWFySW50ZXJ2YWwoZ3JpZC5jdXJyZW50KTtcclxuICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzRm9vZChuZXdIZWFkKSkgbmV3U25ha2UucG9wKCk7XHJcbiAgICAgICAgY29uc3QgdGFpbCA9IG5ld1NuYWtlW25ld1NuYWtlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChuZXdIZWFkLnggPj0gQ29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZC54IDwgMCkge1xyXG4gICAgICAgICAgbmV3SGVhZC54ID0gQ29uZmlnLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld0hlYWQueSA+IENvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAgIG5ld0hlYWQueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkLnkgPCAwKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnkgPSBDb25maWcuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIGlmICh0YWlsLnggPT09IDApIHtcclxuICAgICAgICAvLyAgIG5ld1NuYWtlWzBdLnggPSBDb25maWcud2lkdGg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmICh0YWlsLnkgPT09IENvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAvLyAgIG5ld1NuYWtlWzBdLnkgPSAwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NuYWtlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcnVuU2luZ2xlU3RlcCgpO1xyXG4gICAgZ3JpZC5jdXJyZW50ID0gc2V0SW50ZXJ2YWwocnVuU2luZ2xlU3RlcCwgNTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChncmlkLmN1cnJlbnQpO1xyXG4gIH0sIFtkaXJlY3Rpb24sIGZvb2RdKTtcclxuXHJcbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDJcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgaWYgKGlzRm9vZChoZWFkKSkge1xyXG4gICAgICBzZXRTY29yZSgoc2NvcmUpID0+IHtcclxuICAgICAgICByZXR1cm4gc2NvcmUgKyAxO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xyXG4gICAgICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldEZvb2QobmV3Rm9vZCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBzZXROZXdGb29kID0gKCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgLy8gICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xyXG4gICAgLy8gICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgc2V0Rm9vZChuZXdGb29kKTtcclxuICAgIC8vIH07XHJcbiAgICAvLyBzZXROZXdGb29kKCk7XHJcbiAgICAvLyBjb25zdCB0aW1lcjIgPSBzZXRJbnRlcnZhbChzZXROZXdGb29kLCAxMDAwMCk7XHJcblxyXG4gICAgLy8gcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIyKTtcclxuICB9LCBbc25ha2UsIGZvb2RdKTtcclxuXHJcbiAgLy8gY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gIC8vIGNvbnN0IG5ld0hlYWQgPSB7IHg6IGhlYWQueCArIGRpcmVjdGlvbi54LCB5OiBoZWFkLnkgKyBkaXJlY3Rpb24ueSB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDNcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgMy1oYW5kbGUgbmF2aWdhdGlvblwiLCBzbmFrZSk7XHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgIGlmIChzbmFrZVswXS55ICE9PSBzbmFrZVsxXS55ICsgMSkge1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlRvcCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgIGlmIChzbmFrZVswXS55ICsgMSAhPT0gc25ha2VbMV0ueSkge1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgIGlmIChzbmFrZVswXS54ICE9PSBzbmFrZVsxXS54ICsgMSkge1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgaWYgKHNuYWtlWzBdLnggKyAxICE9PSBzbmFrZVsxXS54KSB7XHJcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuICB9LCBbc25ha2VdKTtcclxuXHJcbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXHJcbiAgLy8gc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvT3B0aW9uYWxfY2hhaW5pbmdcclxuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IGZvb2QueCA9PT0geCAmJiBmb29kLnkgPT09IHk7XHJcblxyXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+XHJcbiAgICBzbmFrZS5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBbXTtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53aWR0aDsgeCsrKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENvbmZpZy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBsZXQgdHlwZSA9IENlbGxUeXBlLkVtcHR5O1xyXG4gICAgICBpZiAoaXNGb29kKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5Gb29kO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzU25ha2UoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLlNuYWtlO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGxzLnB1c2goPENlbGwga2V5PXtgJHt4fS0ke3l9YH0geD17eH0geT17eX0gdHlwZT17dHlwZX0gLz4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplIH19XHJcbiAgICAgID5cclxuICAgICAgICBTY29yZToge3Njb3JlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogQ29uZmlnLmhlaWdodCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICAgIHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjZWxsc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoU25ha2UpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb25maWciLCJoZWlnaHQiLCJ3aWR0aCIsImNlbGxTaXplIiwiQ2VsbFR5cGUiLCJTbmFrZSIsIkZvb2QiLCJFbXB0eSIsIkRpcmVjdGlvbiIsIkxlZnQiLCJ4IiwieSIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2VsbCIsInR5cGUiLCJnZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2VsbENvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJjZWxsIiwiZ2V0UmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJnZXREZWZhdWx0U25ha2UiLCJncmlkIiwicmVzZXQiLCJzZXRTbmFrZSIsInNldERpcmVjdGlvbiIsInNldEZvb2QiLCJzZXRTY29yZSIsInNuYWtlIiwiZGlyZWN0aW9uIiwiZm9vZCIsInNjb3JlIiwicnVuU2luZ2xlU3RlcCIsImhlYWQiLCJuZXdIZWFkIiwibmV3U25ha2UiLCJpc1NuYWtlIiwiYWxlcnQiLCJpc0Zvb2QiLCJwb3AiLCJ0YWlsIiwibGVuZ3RoIiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm5ld0Zvb2QiLCJoYW5kbGVOYXZpZ2F0aW9uIiwiZXZlbnQiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbmQiLCJwb3NpdGlvbiIsImNlbGxzIiwicHVzaCIsImNvbnRhaW5lciIsImhlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==