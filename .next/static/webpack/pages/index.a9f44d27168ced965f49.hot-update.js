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
          console.log(snake[0].x, snake[1].x + 1);

          if (snake[0].x !== snake[1].x + 1) {
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
        lineNumber: 233,
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
      lineNumber: 239,
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
      lineNumber: 245,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 238,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTlmNDRkMjcxNjhjZWQ5NjVmNDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxLQUFLLEVBQUUsT0FEUTtBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxLQUFLLEVBQUU7QUFIUSxDQUFqQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFDLENBQU47QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FEVTtBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBRlM7QUFHaEJFLEVBQUFBLEdBQUcsRUFBRTtBQUFFSCxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBSFc7QUFJaEJHLEVBQUFBLE1BQU0sRUFBRTtBQUFFSixJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUpRLENBQWxCOztBQU9BLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJMLENBQWlCLFFBQWpCQSxDQUFpQjtBQUFBLE1BQWRDLENBQWMsUUFBZEEsQ0FBYztBQUFBLE1BQVhLLElBQVcsUUFBWEEsSUFBVzs7QUFDL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRRCxJQUFSO0FB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LE1BQU0sRUFBRUQsTUFBTSxDQUFDQyxNQUFQLEdBQWdCRCxNQUFNLENBQUNHLFFBRDFCO0FBRUxELFFBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxLQUFQLEdBQWVGLE1BQU0sQ0FBQ0c7QUFGeEIsT0FGVDtBQUFBLGdCQU9HNkQ7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0E5TEQ7O0dBQU0zRDs7TUFBQUE7QUFnTU4sK0RBQWUsTUFBQVYsbURBQU8sT0FBQztBQUFBLFNBQU15RSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JoRSxLQUFoQixDQUFOO0FBQUEsQ0FBRCxFQUErQjtBQUNuRGlFLEVBQUFBLEdBQUcsRUFBRTtBQUQ4QyxDQUEvQixDQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ29uZmlnID0ge1xyXG4gIGhlaWdodDogMjUsXHJcbiAgd2lkdGg6IDI1LFxyXG4gIGNlbGxTaXplOiAzMixcclxufTtcclxuXHJcbmNvbnN0IENlbGxUeXBlID0ge1xyXG4gIFNuYWtlOiBcInNuYWtlXCIsXHJcbiAgRm9vZDogXCJmb29kXCIsXHJcbiAgRW1wdHk6IFwiZW1wdHlcIixcclxufTtcclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHtcclxuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXHJcbiAgUmlnaHQ6IHsgeDogMSwgeTogMCB9LFxyXG4gIFRvcDogeyB4OiAwLCB5OiAtMSB9LFxyXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXHJcbn07XHJcblxyXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dncmVlblwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgcGFkZGluZzogMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY2FzZSBDZWxsVHlwZS5Gb29kOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgIGhlaWdodDogMzIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBsZWZ0OiB4ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB3aWR0aDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIGhlaWdodDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9IHN0eWxlPXtnZXRTdHlsZXMoKX0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmFuZG9tQ2VsbCA9ICgpID0+ICh7XHJcbiAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcclxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG59KTtcclxuXHJcbmNvbnN0IFNuYWtlID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicmVuZGVyaW5nXCIpO1xyXG4gIGNvbnN0IGdldERlZmF1bHRTbmFrZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0RGVmYXVsdFNuYWtlXCIpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgeyB4OiA4LCB5OiAxMiB9LFxyXG4gICAgICB7IHg6IDcsIHk6IDEyIH0sXHJcbiAgICAgIHsgeDogNiwgeTogMTIgfSxcclxuICAgIF07XHJcbiAgfTtcclxuICBjb25zdCBncmlkID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRTbmFrZShnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgIHNldEZvb2QoeyB4OiA0LCB5OiAxMCB9KTtcclxuICAgIHNldFNjb3JlKDApO1xyXG4gIH07XHJcblxyXG4gIC8vIHNuYWtlWzBdIGlzIGhlYWQgYW5kIHNuYWtlW3NuYWtlLmxlbmd0aCAtIDFdIGlzIHRhaWxcclxuICBjb25zdCBbc25ha2UsIHNldFNuYWtlXSA9IHVzZVN0YXRlKGdldERlZmF1bHRTbmFrZSgpKTtcclxuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoRGlyZWN0aW9uLlJpZ2h0KTtcclxuXHJcbiAgY29uc3QgW2Zvb2QsIHNldEZvb2RdID0gdXNlU3RhdGUoeyB4OiA0LCB5OiAxMCB9KTtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAvLyBtb3ZlIHRoZSBzbmFrZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDFcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgcnVuU2luZ2xlU3RlcCA9ICgpID0+IHtcclxuICAgICAgc2V0U25ha2UoKHNuYWtlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlYWQgPSB7IHg6IGhlYWQueCArIGRpcmVjdGlvbi54LCB5OiBoZWFkLnkgKyBkaXJlY3Rpb24ueSB9O1xyXG5cclxuICAgICAgICAvLyBtYWtlIGEgbmV3IHNuYWtlIGJ5IGV4dGVuZGluZyBoZWFkXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL1NwcmVhZF9zeW50YXhcclxuICAgICAgICBjb25zdCBuZXdTbmFrZSA9IFtuZXdIZWFkLCAuLi5zbmFrZV07XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0YWlsXHJcbiAgICAgICAgLy8gJiZcclxuICAgICAgICAvLyAobmV3U25ha2VbMF0ueCA+IENvbmZpZy53aWR0aCB8fCBuZXdTbmFrZVswXS54IDwgMClcclxuICAgICAgICBpZiAoaXNTbmFrZShuZXdIZWFkKSkge1xyXG4gICAgICAgICAgYWxlcnQoYEdhbWUgT3ZlciEgWW91ciBzY29yZSBpcyAke3Njb3JlfWApO1xyXG4gICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChncmlkLmN1cnJlbnQpO1xyXG4gICAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNGb29kKG5ld0hlYWQpKSBuZXdTbmFrZS5wb3AoKTtcclxuICAgICAgICBjb25zdCB0YWlsID0gbmV3U25ha2VbbmV3U25ha2UubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG5ld0hlYWQueCA+PSBDb25maWcud2lkdGgpIHtcclxuICAgICAgICAgIG5ld0hlYWQueCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkLnggPCAwKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnggPSBDb25maWcud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3SGVhZC55ID4gQ29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgICAgbmV3SGVhZC55ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0hlYWQueSA8IDApIHtcclxuICAgICAgICAgIG5ld0hlYWQueSA9IENvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRhaWwueCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgbmV3U25ha2VbMF0ueCA9IENvbmZpZy53aWR0aDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHRhaWwueSA9PT0gQ29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgIC8vICAgbmV3U25ha2VbMF0ueSA9IDA7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3U25ha2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBydW5TaW5nbGVTdGVwKCk7XHJcbiAgICBncmlkLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChydW5TaW5nbGVTdGVwLCA1MDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGdyaWQuY3VycmVudCk7XHJcbiAgfSwgW2RpcmVjdGlvbiwgZm9vZF0pO1xyXG5cclxuICAvLyB1cGRhdGUgc2NvcmUgd2hlbmV2ZXIgaGVhZCB0b3VjaGVzIGEgZm9vZFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgMlwiLCBzbmFrZSk7XHJcbiAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgICBpZiAoaXNGb29kKGhlYWQpKSB7XHJcbiAgICAgIHNldFNjb3JlKChzY29yZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzY29yZSArIDE7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XHJcbiAgICAgICAgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0Rm9vZChuZXdGb29kKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IHNldE5ld0Zvb2QgPSAoKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAvLyAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XHJcbiAgICAvLyAgICAgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBzZXRGb29kKG5ld0Zvb2QpO1xyXG4gICAgLy8gfTtcclxuICAgIC8vIHNldE5ld0Zvb2QoKTtcclxuICAgIC8vIGNvbnN0IHRpbWVyMiA9IHNldEludGVydmFsKHNldE5ld0Zvb2QsIDEwMDAwKTtcclxuXHJcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcjIpO1xyXG4gIH0sIFtzbmFrZSwgZm9vZF0pO1xyXG5cclxuICAvLyBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgLy8gY29uc3QgbmV3SGVhZCA9IHsgeDogaGVhZC54ICsgZGlyZWN0aW9uLngsIHk6IGhlYWQueSArIGRpcmVjdGlvbi55IH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgM1wiLCBzbmFrZSk7XHJcbiAgICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAzLWhhbmRsZSBuYXZpZ2F0aW9uXCIsIHNuYWtlKTtcclxuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgLy8gY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaGVhZCk7XHJcbiAgICAgICAgICAvLyBjb25zdCBuZXdIZWFkID0ge1xyXG4gICAgICAgICAgLy8gICB4OiBoZWFkLnggKyBEaXJlY3Rpb24uVG9wLngsXHJcbiAgICAgICAgICAvLyAgIHk6IGhlYWQueSArIERpcmVjdGlvbi5Ub3AueSxcclxuICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzbmFrZVswXSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzbmFrZVsxXSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzbmFrZVsyXSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdIZWFkKTtcclxuICAgICAgICAgIC8vIGlmICghaXNTbmFrZShuZXdIZWFkKSkge1xyXG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5Ub3ApO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgY29uc29sZS5sb2coc25ha2VbMF0ueCwgc25ha2VbMV0ueCArIDEpO1xyXG4gICAgICAgICAgaWYgKHNuYWtlWzBdLnggIT09IHNuYWtlWzFdLnggKyAxKSB7XHJcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uTGVmdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vID8uIGlzIGNhbGxlZCBvcHRpb25hbCBjaGFpbmluZ1xyXG4gIC8vIHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL09wdGlvbmFsX2NoYWluaW5nXHJcbiAgY29uc3QgaXNGb29kID0gKHsgeCwgeSB9KSA9PiBmb29kLnggPT09IHggJiYgZm9vZC55ID09PSB5O1xyXG5cclxuICBjb25zdCBpc1NuYWtlID0gKHsgeCwgeSB9KSA9PlxyXG4gICAgc25ha2UuZmluZCgocG9zaXRpb24pID0+IHBvc2l0aW9uLnggPT09IHggJiYgcG9zaXRpb24ueSA9PT0geSk7XHJcblxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBDb25maWcud2lkdGg7IHgrKykge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBDb25maWcuaGVpZ2h0OyB5KyspIHtcclxuICAgICAgbGV0IHR5cGUgPSBDZWxsVHlwZS5FbXB0eTtcclxuICAgICAgaWYgKGlzRm9vZCh7IHgsIHkgfSkpIHtcclxuICAgICAgICB0eXBlID0gQ2VsbFR5cGUuRm9vZDtcclxuICAgICAgfSBlbHNlIGlmIChpc1NuYWtlKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5TbmFrZTtcclxuICAgICAgfVxyXG4gICAgICBjZWxscy5wdXNoKDxDZWxsIGtleT17YCR7eH0tJHt5fWB9IHg9e3h9IHk9e3l9IHR5cGU9e3R5cGV9IC8+KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IENvbmZpZy53aWR0aCAqIENvbmZpZy5jZWxsU2l6ZSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgU2NvcmU6IHtzY29yZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IENvbmZpZy5oZWlnaHQgKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgICB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2VsbHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFNuYWtlKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZHluYW1pYyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiQ29uZmlnIiwiaGVpZ2h0Iiwid2lkdGgiLCJjZWxsU2l6ZSIsIkNlbGxUeXBlIiwiU25ha2UiLCJGb29kIiwiRW1wdHkiLCJEaXJlY3Rpb24iLCJMZWZ0IiwieCIsInkiLCJSaWdodCIsIlRvcCIsIkJvdHRvbSIsIkNlbGwiLCJ0eXBlIiwiZ2V0U3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImNlbGxDb250YWluZXIiLCJsZWZ0IiwidG9wIiwiY2VsbCIsImdldFJhbmRvbUNlbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiZ2V0RGVmYXVsdFNuYWtlIiwiZ3JpZCIsInJlc2V0Iiwic2V0U25ha2UiLCJzZXREaXJlY3Rpb24iLCJzZXRGb29kIiwic2V0U2NvcmUiLCJzbmFrZSIsImRpcmVjdGlvbiIsImZvb2QiLCJzY29yZSIsInJ1blNpbmdsZVN0ZXAiLCJoZWFkIiwibmV3SGVhZCIsIm5ld1NuYWtlIiwiaXNTbmFrZSIsImFsZXJ0IiwiaXNGb29kIiwicG9wIiwidGFpbCIsImxlbmd0aCIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJuZXdGb29kIiwiaGFuZGxlTmF2aWdhdGlvbiIsImV2ZW50Iiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaW5kIiwicG9zaXRpb24iLCJjZWxscyIsInB1c2giLCJjb250YWluZXIiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=