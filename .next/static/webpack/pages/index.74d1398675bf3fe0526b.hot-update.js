"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Snake.module.css */ "./styles/Snake.module.css");
/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5__);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().cellContainer),
    style: {
      left: x * Config.cellSize,
      top: y * Config.cellSize,
      width: Config.cellSize,
      height: Config.cellSize
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().cell),
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

  var grid = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();

  var reset = function reset() {
    setSnake(getDefaultSnake());
    setDirection(Direction.Right);
    setFood({
      x: 4,
      y: 10
    });
    setScore(0);
  }; // snake[0] is head and snake[snake.length - 1] is tail


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(getDefaultSnake()),
      snake = _useState[0],
      setSnake = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Direction.Right),
      direction = _useState2[0],
      setDirection = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    x: 4,
    y: 10
  }),
      food = _useState3[0],
      setFood = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
      score = _useState4[0],
      setScore = _useState4[1]; // move the snake


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
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

        if (newHead.x === newSnake[1].x && newHead.y === newSnake[1].y) {
          head = ((0,C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("head"), newSnake[0]);
          newHead = ((0,C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("newHead"), {
            x: head.x + direction.x,
            y: head.y + direction.y
          });
          newSnake = ((0,C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("newSnake"), [newHead].concat((0,C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(newSnake)));
        } else if (isSnake(newHead)) {
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

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
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

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
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
          setDirection(Direction.Left);
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

      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Cell, {
        x: x,
        y: y,
        type: type
      }, "".concat(x, "-").concat(y), false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 18
      }, _this));
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
      style: {
        width: Config.width * Config.cellSize
      },
      children: ["Score: ", score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),
      style: {
        height: Config.height * Config.cellSize,
        width: Config.width * Config.cellSize
      },
      children: cells
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 240,
    columnNumber: 5
  }, _this);
};

_s(Snake, "RHHDYRBgFCtzyh1XO+KMVB/vb/g=");

_c2 = Snake;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c3 = function _c3() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzRkMTM5ODY3NWJmM2ZlMDUyNmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1LLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxNQUFNLEVBQUUsRUFESztBQUViQyxFQUFBQSxLQUFLLEVBQUUsRUFGTTtBQUdiQyxFQUFBQSxRQUFRLEVBQUU7QUFIRyxDQUFmO0FBTUEsSUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLEVBQUFBLEtBQUssRUFBRSxPQURRO0FBRWZDLEVBQUFBLElBQUksRUFBRSxNQUZTO0FBR2ZDLEVBQUFBLEtBQUssRUFBRTtBQUhRLENBQWpCO0FBTUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBTjtBQUFTQyxJQUFBQSxDQUFDLEVBQUU7QUFBWixHQURVO0FBRWhCQyxFQUFBQSxLQUFLLEVBQUU7QUFBRUYsSUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsSUFBQUEsQ0FBQyxFQUFFO0FBQVgsR0FGUztBQUdoQkUsRUFBQUEsR0FBRyxFQUFFO0FBQUVILElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFDO0FBQVosR0FIVztBQUloQkcsRUFBQUEsTUFBTSxFQUFFO0FBQUVKLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYO0FBSlEsQ0FBbEI7O0FBT0EsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBb0I7QUFBQSxNQUFqQkwsQ0FBaUIsUUFBakJBLENBQWlCO0FBQUEsTUFBZEMsQ0FBYyxRQUFkQSxDQUFjO0FBQUEsTUFBWEssSUFBVyxRQUFYQSxJQUFXOztBQUMvQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFlBQVFELElBQVI7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QSx3RUFEYjtBQUVFLFdBQUssRUFBRTtBQUFFRyxRQUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlRixNQUFNLENBQUNHO0FBQS9CLE9BRlQ7QUFBQSw0QkFJVXNDLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUNFLGVBQVMsRUFBRTFDLHNFQURiO0FBRUUsV0FBSyxFQUFFO0FBQ0xFLFFBQUFBLE1BQU0sRUFBRUQsTUFBTSxDQUFDQyxNQUFQLEdBQWdCRCxNQUFNLENBQUNHLFFBRDFCO0FBRUxELFFBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxLQUFQLEdBQWVGLE1BQU0sQ0FBQ0c7QUFGeEIsT0FGVDtBQUFBLGdCQU9HNkQ7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FoTUQ7O0dBQU0zRDs7TUFBQUE7QUFrTU4sK0RBQWUsTUFBQVYsbURBQU8sT0FBQztBQUFBLFNBQU15RSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JoRSxLQUFoQixDQUFOO0FBQUEsQ0FBRCxFQUErQjtBQUNuRGlFLEVBQUFBLEdBQUcsRUFBRTtBQUQ4QyxDQUEvQixDQUF0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ29uZmlnID0ge1xyXG4gIGhlaWdodDogMjUsXHJcbiAgd2lkdGg6IDI1LFxyXG4gIGNlbGxTaXplOiAzMixcclxufTtcclxuXHJcbmNvbnN0IENlbGxUeXBlID0ge1xyXG4gIFNuYWtlOiBcInNuYWtlXCIsXHJcbiAgRm9vZDogXCJmb29kXCIsXHJcbiAgRW1wdHk6IFwiZW1wdHlcIixcclxufTtcclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHtcclxuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXHJcbiAgUmlnaHQ6IHsgeDogMSwgeTogMCB9LFxyXG4gIFRvcDogeyB4OiAwLCB5OiAtMSB9LFxyXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXHJcbn07XHJcblxyXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dncmVlblwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgcGFkZGluZzogMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY2FzZSBDZWxsVHlwZS5Gb29kOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgIGhlaWdodDogMzIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBsZWZ0OiB4ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB3aWR0aDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIGhlaWdodDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9IHN0eWxlPXtnZXRTdHlsZXMoKX0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmFuZG9tQ2VsbCA9ICgpID0+ICh7XHJcbiAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcclxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG59KTtcclxuXHJcbmNvbnN0IFNuYWtlID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicmVuZGVyaW5nXCIpO1xyXG4gIGNvbnN0IGdldERlZmF1bHRTbmFrZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0RGVmYXVsdFNuYWtlXCIpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgeyB4OiA4LCB5OiAxMiB9LFxyXG4gICAgICB7IHg6IDcsIHk6IDEyIH0sXHJcbiAgICAgIHsgeDogNiwgeTogMTIgfSxcclxuICAgIF07XHJcbiAgfTtcclxuICBjb25zdCBncmlkID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRTbmFrZShnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgIHNldEZvb2QoeyB4OiA0LCB5OiAxMCB9KTtcclxuICAgIHNldFNjb3JlKDApO1xyXG4gIH07XHJcblxyXG4gIC8vIHNuYWtlWzBdIGlzIGhlYWQgYW5kIHNuYWtlW3NuYWtlLmxlbmd0aCAtIDFdIGlzIHRhaWxcclxuICBjb25zdCBbc25ha2UsIHNldFNuYWtlXSA9IHVzZVN0YXRlKGdldERlZmF1bHRTbmFrZSgpKTtcclxuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoRGlyZWN0aW9uLlJpZ2h0KTtcclxuXHJcbiAgY29uc3QgW2Zvb2QsIHNldEZvb2RdID0gdXNlU3RhdGUoeyB4OiA0LCB5OiAxMCB9KTtcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAvLyBtb3ZlIHRoZSBzbmFrZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDFcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgcnVuU2luZ2xlU3RlcCA9ICgpID0+IHtcclxuICAgICAgc2V0U25ha2UoKHNuYWtlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlYWQgPSB7IHg6IGhlYWQueCArIGRpcmVjdGlvbi54LCB5OiBoZWFkLnkgKyBkaXJlY3Rpb24ueSB9O1xyXG5cclxuICAgICAgICAvLyBtYWtlIGEgbmV3IHNuYWtlIGJ5IGV4dGVuZGluZyBoZWFkXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL1NwcmVhZF9zeW50YXhcclxuICAgICAgICBjb25zdCBuZXdTbmFrZSA9IFtuZXdIZWFkLCAuLi5zbmFrZV07XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0YWlsXHJcbiAgICAgICAgLy8gJiZcclxuICAgICAgICAvLyAobmV3U25ha2VbMF0ueCA+IENvbmZpZy53aWR0aCB8fCBuZXdTbmFrZVswXS54IDwgMClcclxuICAgICAgICBpZiAobmV3SGVhZC54ID09PSBuZXdTbmFrZVsxXS54ICYmIG5ld0hlYWQueSA9PT0gbmV3U25ha2VbMV0ueSkge1xyXG4gICAgICAgICAgaGVhZCA9IG5ld1NuYWtlWzBdO1xyXG4gICAgICAgICAgbmV3SGVhZCA9IHsgeDogaGVhZC54ICsgZGlyZWN0aW9uLngsIHk6IGhlYWQueSArIGRpcmVjdGlvbi55IH07XHJcbiAgICAgICAgICBuZXdTbmFrZSA9IFtuZXdIZWFkLCAuLi5uZXdTbmFrZV07XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1NuYWtlKG5ld0hlYWQpKSB7XHJcbiAgICAgICAgICBhbGVydChgR2FtZSBPdmVyISBZb3VyIHNjb3JlIGlzICR7c2NvcmV9YCk7XHJcbiAgICAgICAgICAvLyBjbGVhckludGVydmFsKGdyaWQuY3VycmVudCk7XHJcbiAgICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0Zvb2QobmV3SGVhZCkpIG5ld1NuYWtlLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IHRhaWwgPSBuZXdTbmFrZVtuZXdTbmFrZS5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAobmV3SGVhZC54ID49IENvbmZpZy53aWR0aCkge1xyXG4gICAgICAgICAgbmV3SGVhZC54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0hlYWQueCA8IDApIHtcclxuICAgICAgICAgIG5ld0hlYWQueCA9IENvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdIZWFkLnkgPiBDb25maWcuaGVpZ2h0KSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZC55IDwgMCkge1xyXG4gICAgICAgICAgbmV3SGVhZC55ID0gQ29uZmlnLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAodGFpbC54ID09PSAwKSB7XHJcbiAgICAgICAgLy8gICBuZXdTbmFrZVswXS54ID0gQ29uZmlnLndpZHRoO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAodGFpbC55ID09PSBDb25maWcuaGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gICBuZXdTbmFrZVswXS55ID0gMDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJ1blNpbmdsZVN0ZXAoKTtcclxuICAgIGdyaWQuY3VycmVudCA9IHNldEludGVydmFsKHJ1blNpbmdsZVN0ZXAsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoZ3JpZC5jdXJyZW50KTtcclxuICB9LCBbZGlyZWN0aW9uLCBmb29kXSk7XHJcblxyXG4gIC8vIHVwZGF0ZSBzY29yZSB3aGVuZXZlciBoZWFkIHRvdWNoZXMgYSBmb29kXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAyXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgIGlmIChpc0Zvb2QoaGVhZCkpIHtcclxuICAgICAgc2V0U2NvcmUoKHNjb3JlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNjb3JlICsgMTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcclxuICAgICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRGb29kKG5ld0Zvb2QpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3Qgc2V0TmV3Rm9vZCA9ICgpID0+IHtcclxuICAgIC8vICAgY29uc3QgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgIC8vICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcclxuICAgIC8vICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHNldEZvb2QobmV3Rm9vZCk7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gc2V0TmV3Rm9vZCgpO1xyXG4gICAgLy8gY29uc3QgdGltZXIyID0gc2V0SW50ZXJ2YWwoc2V0TmV3Rm9vZCwgMTAwMDApO1xyXG5cclxuICAgIC8vIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyMik7XHJcbiAgfSwgW3NuYWtlLCBmb29kXSk7XHJcblxyXG4gIC8vIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAvLyBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAzXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDMtaGFuZGxlIG5hdmlnYXRpb25cIiwgc25ha2UpO1xyXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAvLyBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoZWFkKTtcclxuICAgICAgICAgIC8vIGNvbnN0IG5ld0hlYWQgPSB7XHJcbiAgICAgICAgICAvLyAgIHg6IGhlYWQueCArIERpcmVjdGlvbi5Ub3AueCxcclxuICAgICAgICAgIC8vICAgeTogaGVhZC55ICsgRGlyZWN0aW9uLlRvcC55LFxyXG4gICAgICAgICAgLy8gfTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzBdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzFdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzJdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0hlYWQpO1xyXG4gICAgICAgICAgLy8gaWYgKCFpc1NuYWtlKG5ld0hlYWQpKSB7XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlRvcCk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uQm90dG9tKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkxlZnQpO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXHJcbiAgLy8gc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvT3B0aW9uYWxfY2hhaW5pbmdcclxuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IGZvb2QueCA9PT0geCAmJiBmb29kLnkgPT09IHk7XHJcblxyXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+XHJcbiAgICBzbmFrZS5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBbXTtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53aWR0aDsgeCsrKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENvbmZpZy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBsZXQgdHlwZSA9IENlbGxUeXBlLkVtcHR5O1xyXG4gICAgICBpZiAoaXNGb29kKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5Gb29kO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzU25ha2UoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLlNuYWtlO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGxzLnB1c2goPENlbGwga2V5PXtgJHt4fS0ke3l9YH0geD17eH0geT17eX0gdHlwZT17dHlwZX0gLz4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplIH19XHJcbiAgICAgID5cclxuICAgICAgICBTY29yZToge3Njb3JlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogQ29uZmlnLmhlaWdodCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICAgIHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjZWxsc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoU25ha2UpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb25maWciLCJoZWlnaHQiLCJ3aWR0aCIsImNlbGxTaXplIiwiQ2VsbFR5cGUiLCJTbmFrZSIsIkZvb2QiLCJFbXB0eSIsIkRpcmVjdGlvbiIsIkxlZnQiLCJ4IiwieSIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2VsbCIsInR5cGUiLCJnZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2VsbENvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJjZWxsIiwiZ2V0UmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJnZXREZWZhdWx0U25ha2UiLCJncmlkIiwicmVzZXQiLCJzZXRTbmFrZSIsInNldERpcmVjdGlvbiIsInNldEZvb2QiLCJzZXRTY29yZSIsInNuYWtlIiwiZGlyZWN0aW9uIiwiZm9vZCIsInNjb3JlIiwicnVuU2luZ2xlU3RlcCIsImhlYWQiLCJuZXdIZWFkIiwibmV3U25ha2UiLCJpc1NuYWtlIiwiYWxlcnQiLCJpc0Zvb2QiLCJwb3AiLCJ0YWlsIiwibGVuZ3RoIiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm5ld0Zvb2QiLCJoYW5kbGVOYXZpZ2F0aW9uIiwiZXZlbnQiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbmQiLCJwb3NpdGlvbiIsImNlbGxzIiwicHVzaCIsImNvbnRhaW5lciIsImhlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==