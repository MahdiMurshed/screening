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

      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {
        x: x,
        y: y,
        type: type
      }, "".concat(x, "-").concat(y), false, {
        fileName: _jsxFileName,
        lineNumber: 231,
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
      lineNumber: 237,
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
      lineNumber: 243,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 236,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQ3ZmVlYTY4NDU5NGI2MjNiYjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxLQUFLLEVBQUUsT0FEUTtBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxLQUFLLEVBQUU7QUFIUSxDQUFqQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFDLENBQU47QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FEVTtBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBRlM7QUFHaEJFLEVBQUFBLEdBQUcsRUFBRTtBQUFFSCxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBSFc7QUFJaEJHLEVBQUFBLE1BQU0sRUFBRTtBQUFFSixJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUpRLENBQWxCOztBQU9BLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJMLENBQWlCLFFBQWpCQSxDQUFpQjtBQUFBLE1BQWRDLENBQWMsUUFBZEEsQ0FBYztBQUFBLE1BQVhLLElBQVcsUUFBWEEsSUFBVzs7QUFDL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRRCxJQUFSO0FBQ0UsV0FBS1osUUFBUSxDQUFDQyxLQUFkO0FBQ0UsZUFBTztBQUNMYSxVQUFBQSxlQUFlLEVBQUUsYUFEWjtBQUVMQyxVQUFBQSxZQUFZLEVBQUUsQ0FGVDtBQUdMQyxVQUFBQSxPQUFPLEVBQUU7QUFISixTQUFQOztBQU1GLFdBQUtoQixRQUFRLENBQUNFLElBQWQ7QUFDRSxlQUFPO0FBQ0xZLFVBQUFBLGVBQWUsRUFBRSxZQURaO0FBRUxDLFVBQUFBLFlBQVksRUFBRSxFQUZUO0FBR0xqQixVQUFBQSxLQUFLLEVBQUUsRUFIRjtBQUlMRCxVQUFBQSxNQUFNLEVBQUU7QUFKSCxTQUFQOztBQU9GO0FBQ0UsZUFBTyxFQUFQO0FBakJKO0FBbUJELEdBcEJEOztBQXFCQSxzQkFDRTtBQUNFLGFBQVMsRUFBRUYsK0VBRGI7QUFFRSxTQUFLLEVBQUU7QUFDTHVCLE1BQUFBLElBQUksRUFBRVosQ0FBQyxHQUFHVixNQUFNLENBQUNHLFFBRFo7QUFFTG9CLE1BQUFBLEdBQUcsRUFBRVosQ0FBQyxHQUFHWCxNQUFNLENBQUNHLFFBRlg7QUFHTEQsTUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNHLFFBSFQ7QUFJTEYsTUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNHO0FBSlYsS0FGVDtBQUFBLDJCQVNFO0FBQUssZUFBUyxFQUFFSixzRUFBaEI7QUFBNkIsV0FBSyxFQUFFa0IsU0FBUztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FuQ0Q7O0tBQU1GOztBQXFDTixJQUFNVSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsU0FBTztBQUMzQmYsSUFBQUEsQ0FBQyxFQUFFZ0IsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQjVCLE1BQU0sQ0FBQ0UsS0FBbEMsQ0FEd0I7QUFFM0JTLElBQUFBLENBQUMsRUFBRWUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQjVCLE1BQU0sQ0FBQ0UsS0FBbEM7QUFGd0IsR0FBUDtBQUFBLENBQXRCOztBQUtBLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEJ3QixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaOztBQUNBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQSxXQUFPLENBQ0w7QUFBRXBCLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRTtBQUFYLEtBREssRUFFTDtBQUFFRCxNQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxNQUFBQSxDQUFDLEVBQUU7QUFBWCxLQUZLLEVBR0w7QUFBRUQsTUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsTUFBQUEsQ0FBQyxFQUFFO0FBQVgsS0FISyxDQUFQO0FBS0QsR0FQRDs7QUFRQSxNQUFNcUIsSUFBSSxHQUFHbEMsNkNBQU0sRUFBbkI7O0FBQ0EsTUFBTW1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEJDLElBQUFBLFFBQVEsQ0FBQ0gsZUFBZSxFQUFoQixDQUFSO0FBQ0FJLElBQUFBLFlBQVksQ0FBQzNCLFNBQVMsQ0FBQ0ksS0FBWCxDQUFaO0FBQ0F3QixJQUFBQSxPQUFPLENBQUM7QUFBRTFCLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRTtBQUFYLEtBQUQsQ0FBUDtBQUNBMEIsSUFBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUjtBQUNELEdBTEQsQ0FYa0IsQ0FrQmxCOzs7QUFsQmtCLGtCQW1CUXhDLCtDQUFRLENBQUM7QUFBQSxXQUFNa0MsZUFBZSxFQUFyQjtBQUFBLEdBQUQsQ0FuQmhCO0FBQUEsTUFtQlhPLEtBbkJXO0FBQUEsTUFtQkpKLFFBbkJJOztBQUFBLG1CQW9CZ0JyQywrQ0FBUSxDQUFDVyxTQUFTLENBQUNJLEtBQVgsQ0FwQnhCO0FBQUEsTUFvQlgyQixTQXBCVztBQUFBLE1Bb0JBSixZQXBCQTs7QUFBQSxtQkFzQk10QywrQ0FBUSxDQUFDO0FBQUVhLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBQUQsQ0F0QmQ7QUFBQSxNQXNCWDZCLElBdEJXO0FBQUEsTUFzQkxKLE9BdEJLOztBQUFBLG1CQXVCUXZDLCtDQUFRLENBQUMsQ0FBRCxDQXZCaEI7QUFBQSxNQXVCWDRDLEtBdkJXO0FBQUEsTUF1QkpKLFFBdkJJLGtCQXlCbEI7OztBQUVBekMsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RpQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCUSxLQUE1Qjs7QUFDQSxRQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJSLE1BQUFBLFFBQVEsQ0FBQyxVQUFDSSxLQUFELEVBQVc7QUFDbEIsWUFBTUssSUFBSSxHQUFHTCxLQUFLLENBQUMsQ0FBRCxDQUFsQjtBQUNBLFlBQU1NLE9BQU8sR0FBRztBQUFFbEMsVUFBQUEsQ0FBQyxFQUFFaUMsSUFBSSxDQUFDakMsQ0FBTCxHQUFTNkIsU0FBUyxDQUFDN0IsQ0FBeEI7QUFBMkJDLFVBQUFBLENBQUMsRUFBRWdDLElBQUksQ0FBQ2hDLENBQUwsR0FBUzRCLFNBQVMsQ0FBQzVCO0FBQWpELFNBQWhCLENBRmtCLENBSWxCO0FBQ0E7O0FBQ0EsWUFBTWtDLFFBQVEsSUFBSUQsT0FBSixnTEFBZ0JOLEtBQWhCLEVBQWQsQ0FOa0IsQ0FRbEI7QUFDQTtBQUNBOztBQUNBLFlBQUlRLE9BQU8sQ0FBQ0YsT0FBRCxDQUFYLEVBQXNCO0FBQ3BCRyxVQUFBQSxLQUFLLG9DQUE2Qk4sS0FBN0IsRUFBTCxDQURvQixDQUVwQjs7QUFDQVIsVUFBQUEsS0FBSztBQUNOOztBQUVELFlBQUksQ0FBQ2UsTUFBTSxDQUFDSixPQUFELENBQVgsRUFBc0JDLFFBQVEsQ0FBQ0ksR0FBVDtBQUN0QixZQUFNQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDTSxNQUFULEdBQWtCLENBQW5CLENBQXJCOztBQUNBLFlBQUlQLE9BQU8sQ0FBQ2xDLENBQVIsSUFBYVYsTUFBTSxDQUFDRSxLQUF4QixFQUErQjtBQUM3QjBDLFVBQUFBLE9BQU8sQ0FBQ2xDLENBQVIsR0FBWSxDQUFaO0FBQ0QsU0FGRCxNQUVPLElBQUlrQyxPQUFPLENBQUNsQyxDQUFSLEdBQVksQ0FBaEIsRUFBbUI7QUFDeEJrQyxVQUFBQSxPQUFPLENBQUNsQyxDQUFSLEdBQVlWLE1BQU0sQ0FBQ0UsS0FBbkI7QUFDRDs7QUFFRCxZQUFJMEMsT0FBTyxDQUFDakMsQ0FBUixHQUFZWCxNQUFNLENBQUNDLE1BQXZCLEVBQStCO0FBQzdCMkMsVUFBQUEsT0FBTyxDQUFDakMsQ0FBUixHQUFZLENBQVo7QUFDRCxTQUZELE1BRU8sSUFBSWlDLE9BQU8sQ0FBQ2pDLENBQVIsR0FBWSxDQUFoQixFQUFtQjtBQUN4QmlDLFVBQUFBLE9BQU8sQ0FBQ2pDLENBQVIsR0FBWVgsTUFBTSxDQUFDQyxNQUFuQjtBQUNELFNBN0JpQixDQThCbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxlQUFPNEMsUUFBUDtBQUNELE9BdENPLENBQVI7QUF1Q0QsS0F4Q0Q7O0FBMENBSCxJQUFBQSxhQUFhO0FBQ2JWLElBQUFBLElBQUksQ0FBQ29CLE9BQUwsR0FBZUMsV0FBVyxDQUFDWCxhQUFELEVBQWdCLEdBQWhCLENBQTFCO0FBRUEsV0FBTztBQUFBLGFBQU1ZLGFBQWEsQ0FBQ3RCLElBQUksQ0FBQ29CLE9BQU4sQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FoRFEsRUFnRE4sQ0FBQ2IsU0FBRCxFQUFZQyxJQUFaLENBaERNLENBQVQsQ0EzQmtCLENBNkVsQjs7QUFDQTVDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkaUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QlEsS0FBNUI7QUFDQSxRQUFNSyxJQUFJLEdBQUdMLEtBQUssQ0FBQyxDQUFELENBQWxCOztBQUNBLFFBQUlVLE1BQU0sQ0FBQ0wsSUFBRCxDQUFWLEVBQWtCO0FBQ2hCTixNQUFBQSxRQUFRLENBQUMsVUFBQ0ksS0FBRCxFQUFXO0FBQ2xCLGVBQU9BLEtBQUssR0FBRyxDQUFmO0FBQ0QsT0FGTyxDQUFSO0FBSUEsVUFBSWMsT0FBTyxHQUFHOUIsYUFBYSxFQUEzQjs7QUFDQSxhQUFPcUIsT0FBTyxDQUFDUyxPQUFELENBQWQsRUFBeUI7QUFDdkJBLFFBQUFBLE9BQU8sR0FBRzlCLGFBQWEsRUFBdkI7QUFDRDs7QUFFRFcsTUFBQUEsT0FBTyxDQUFDbUIsT0FBRCxDQUFQO0FBQ0QsS0FkYSxDQWVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNELEdBMUJRLEVBMEJOLENBQUNqQixLQUFELEVBQVFFLElBQVIsQ0ExQk0sQ0FBVCxDQTlFa0IsQ0EwR2xCO0FBQ0E7O0FBRUE1QyxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGlDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJRLEtBQTVCOztBQUNBLFFBQU1rQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNsQzVCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFaLEVBQThDUSxLQUE5Qzs7QUFDQSxjQUFRbUIsS0FBSyxDQUFDQyxHQUFkO0FBQ0UsYUFBSyxTQUFMO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBdkIsVUFBQUEsWUFBWSxDQUFDM0IsU0FBUyxDQUFDSyxHQUFYLENBQVo7QUFFQTs7QUFFRixhQUFLLFdBQUw7QUFDRXNCLFVBQUFBLFlBQVksQ0FBQzNCLFNBQVMsQ0FBQ00sTUFBWCxDQUFaO0FBQ0E7O0FBRUYsYUFBSyxXQUFMO0FBQ0VxQixVQUFBQSxZQUFZLENBQUMzQixTQUFTLENBQUNDLElBQVgsQ0FBWjtBQUVBOztBQUVGLGFBQUssWUFBTDtBQUNFMEIsVUFBQUEsWUFBWSxDQUFDM0IsU0FBUyxDQUFDSSxLQUFYLENBQVo7QUFDQTtBQTVCSjtBQThCRCxLQWhDRDs7QUFpQ0ErQyxJQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DSixnQkFBbkM7QUFFQSxXQUFPO0FBQUEsYUFBTUcsTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ0wsZ0JBQXRDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0F0Q1EsRUFzQ04sRUF0Q00sQ0FBVCxDQTdHa0IsQ0FxSmxCO0FBQ0E7O0FBQ0EsTUFBTVIsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxRQUFHdEMsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsUUFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsV0FBYzZCLElBQUksQ0FBQzlCLENBQUwsS0FBV0EsQ0FBWCxJQUFnQjhCLElBQUksQ0FBQzdCLENBQUwsS0FBV0EsQ0FBekM7QUFBQSxHQUFmOztBQUVBLE1BQU1tQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFFBQUdwQyxDQUFILFNBQUdBLENBQUg7QUFBQSxRQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSxXQUNkMkIsS0FBSyxDQUFDd0IsSUFBTixDQUFXLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNyRCxDQUFULEtBQWVBLENBQWYsSUFBb0JxRCxRQUFRLENBQUNwRCxDQUFULEtBQWVBLENBQWpEO0FBQUEsS0FBWCxDQURjO0FBQUEsR0FBaEI7O0FBR0EsTUFBTXFELEtBQUssR0FBRyxFQUFkOztBQUNBLE9BQUssSUFBSXRELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdWLE1BQU0sQ0FBQ0UsS0FBM0IsRUFBa0NRLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxNQUFNLENBQUNDLE1BQTNCLEVBQW1DVSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLFVBQUlLLElBQUksR0FBR1osUUFBUSxDQUFDRyxLQUFwQjs7QUFDQSxVQUFJeUMsTUFBTSxDQUFDO0FBQUV0QyxRQUFBQSxDQUFDLEVBQURBLENBQUY7QUFBS0MsUUFBQUEsQ0FBQyxFQUFEQTtBQUFMLE9BQUQsQ0FBVixFQUFzQjtBQUNwQkssUUFBQUEsSUFBSSxHQUFHWixRQUFRLENBQUNFLElBQWhCO0FBQ0QsT0FGRCxNQUVPLElBQUl3QyxPQUFPLENBQUM7QUFBRXBDLFFBQUFBLENBQUMsRUFBREEsQ0FBRjtBQUFLQyxRQUFBQSxDQUFDLEVBQURBO0FBQUwsT0FBRCxDQUFYLEVBQXVCO0FBQzVCSyxRQUFBQSxJQUFJLEdBQUdaLFFBQVEsQ0FBQ0MsS0FBaEI7QUFDRDs7QUFDRDJELE1BQUFBLEtBQUssQ0FBQ0MsSUFBTixlQUFXLDhEQUFDLElBQUQ7QUFBd0IsU0FBQyxFQUFFdkQsQ0FBM0I7QUFBOEIsU0FBQyxFQUFFQyxDQUFqQztBQUFvQyxZQUFJLEVBQUVLO0FBQTFDLG1CQUFjTixDQUFkLGNBQW1CQyxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7QUFDRDtBQUNGOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFWiwyRUFBaEI7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRUEsd0VBRGI7QUFFRSxXQUFLLEVBQUU7QUFBRUcsUUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNFLEtBQVAsR0FBZUYsTUFBTSxDQUFDRztBQUEvQixPQUZUO0FBQUEsNEJBSVVzQyxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0U7QUFDRSxlQUFTLEVBQUUxQyxzRUFEYjtBQUVFLFdBQUssRUFBRTtBQUNMRSxRQUFBQSxNQUFNLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQkQsTUFBTSxDQUFDRyxRQUQxQjtBQUVMRCxRQUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlRixNQUFNLENBQUNHO0FBRnhCLE9BRlQ7QUFBQSxnQkFPRzZEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBNUxEOztHQUFNM0Q7O01BQUFBO0FBOExOLCtEQUFlLE1BQUFWLG1EQUFPLE9BQUM7QUFBQSxTQUFNeUUsT0FBTyxDQUFDQyxPQUFSLENBQWdCaEUsS0FBaEIsQ0FBTjtBQUFBLENBQUQsRUFBK0I7QUFDbkRpRSxFQUFBQSxHQUFHLEVBQUU7QUFEOEMsQ0FBL0IsQ0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1NuYWtlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENvbmZpZyA9IHtcclxuICBoZWlnaHQ6IDI1LFxyXG4gIHdpZHRoOiAyNSxcclxuICBjZWxsU2l6ZTogMzIsXHJcbn07XHJcblxyXG5jb25zdCBDZWxsVHlwZSA9IHtcclxuICBTbmFrZTogXCJzbmFrZVwiLFxyXG4gIEZvb2Q6IFwiZm9vZFwiLFxyXG4gIEVtcHR5OiBcImVtcHR5XCIsXHJcbn07XHJcblxyXG5jb25zdCBEaXJlY3Rpb24gPSB7XHJcbiAgTGVmdDogeyB4OiAtMSwgeTogMCB9LFxyXG4gIFJpZ2h0OiB7IHg6IDEsIHk6IDAgfSxcclxuICBUb3A6IHsgeDogMCwgeTogLTEgfSxcclxuICBCb3R0b206IHsgeDogMCwgeTogMSB9LFxyXG59O1xyXG5cclxuY29uc3QgQ2VsbCA9ICh7IHgsIHksIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIENlbGxUeXBlLlNuYWtlOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93Z3JlZW5cIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNhc2UgQ2VsbFR5cGUuRm9vZDpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImRhcmtvcmFuZ2VcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICAgICAgICB3aWR0aDogMzIsXHJcbiAgICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNlbGxDb250YWluZXJ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgbGVmdDogeCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB0b3A6IHkgKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgd2lkdGg6IENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICBoZWlnaHQ6IENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZWxsfSBzdHlsZT17Z2V0U3R5bGVzKCl9PjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFJhbmRvbUNlbGwgPSAoKSA9PiAoe1xyXG4gIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENvbmZpZy53aWR0aCksXHJcbiAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcclxufSk7XHJcblxyXG5jb25zdCBTbmFrZSA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInJlbmRlcmluZ1wiKTtcclxuICBjb25zdCBnZXREZWZhdWx0U25ha2UgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImdldERlZmF1bHRTbmFrZVwiKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHsgeDogOCwgeTogMTIgfSxcclxuICAgICAgeyB4OiA3LCB5OiAxMiB9LFxyXG4gICAgICB7IHg6IDYsIHk6IDEyIH0sXHJcbiAgICBdO1xyXG4gIH07XHJcbiAgY29uc3QgZ3JpZCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0U25ha2UoZ2V0RGVmYXVsdFNuYWtlKCkpO1xyXG4gICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICBzZXRGb29kKHsgeDogNCwgeTogMTAgfSk7XHJcbiAgICBzZXRTY29yZSgwKTtcclxuICB9O1xyXG5cclxuICAvLyBzbmFrZVswXSBpcyBoZWFkIGFuZCBzbmFrZVtzbmFrZS5sZW5ndGggLSAxXSBpcyB0YWlsXHJcbiAgY29uc3QgW3NuYWtlLCBzZXRTbmFrZV0gPSB1c2VTdGF0ZSgoKSA9PiBnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKERpcmVjdGlvbi5SaWdodCk7XHJcblxyXG4gIGNvbnN0IFtmb29kLCBzZXRGb29kXSA9IHVzZVN0YXRlKHsgeDogNCwgeTogMTAgfSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgLy8gbW92ZSB0aGUgc25ha2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAxXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IHJ1blNpbmdsZVN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNuYWtlKChzbmFrZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgICAgICBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgICAgICAgLy8gbWFrZSBhIG5ldyBzbmFrZSBieSBleHRlbmRpbmcgaGVhZFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9TcHJlYWRfc3ludGF4XHJcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbbmV3SGVhZCwgLi4uc25ha2VdO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGFpbFxyXG4gICAgICAgIC8vICYmXHJcbiAgICAgICAgLy8gKG5ld1NuYWtlWzBdLnggPiBDb25maWcud2lkdGggfHwgbmV3U25ha2VbMF0ueCA8IDApXHJcbiAgICAgICAgaWYgKGlzU25ha2UobmV3SGVhZCkpIHtcclxuICAgICAgICAgIGFsZXJ0KGBHYW1lIE92ZXIhIFlvdXIgc2NvcmUgaXMgJHtzY29yZX1gKTtcclxuICAgICAgICAgIC8vIGNsZWFySW50ZXJ2YWwoZ3JpZC5jdXJyZW50KTtcclxuICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzRm9vZChuZXdIZWFkKSkgbmV3U25ha2UucG9wKCk7XHJcbiAgICAgICAgY29uc3QgdGFpbCA9IG5ld1NuYWtlW25ld1NuYWtlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChuZXdIZWFkLnggPj0gQ29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZC54IDwgMCkge1xyXG4gICAgICAgICAgbmV3SGVhZC54ID0gQ29uZmlnLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld0hlYWQueSA+IENvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAgIG5ld0hlYWQueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkLnkgPCAwKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnkgPSBDb25maWcuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIGlmICh0YWlsLnggPT09IDApIHtcclxuICAgICAgICAvLyAgIG5ld1NuYWtlWzBdLnggPSBDb25maWcud2lkdGg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmICh0YWlsLnkgPT09IENvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAvLyAgIG5ld1NuYWtlWzBdLnkgPSAwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NuYWtlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcnVuU2luZ2xlU3RlcCgpO1xyXG4gICAgZ3JpZC5jdXJyZW50ID0gc2V0SW50ZXJ2YWwocnVuU2luZ2xlU3RlcCwgNTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChncmlkLmN1cnJlbnQpO1xyXG4gIH0sIFtkaXJlY3Rpb24sIGZvb2RdKTtcclxuXHJcbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDJcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgaWYgKGlzRm9vZChoZWFkKSkge1xyXG4gICAgICBzZXRTY29yZSgoc2NvcmUpID0+IHtcclxuICAgICAgICByZXR1cm4gc2NvcmUgKyAxO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xyXG4gICAgICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldEZvb2QobmV3Rm9vZCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBzZXROZXdGb29kID0gKCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgLy8gICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xyXG4gICAgLy8gICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgc2V0Rm9vZChuZXdGb29kKTtcclxuICAgIC8vIH07XHJcbiAgICAvLyBzZXROZXdGb29kKCk7XHJcbiAgICAvLyBjb25zdCB0aW1lcjIgPSBzZXRJbnRlcnZhbChzZXROZXdGb29kLCAxMDAwMCk7XHJcblxyXG4gICAgLy8gcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIyKTtcclxuICB9LCBbc25ha2UsIGZvb2RdKTtcclxuXHJcbiAgLy8gY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gIC8vIGNvbnN0IG5ld0hlYWQgPSB7IHg6IGhlYWQueCArIGRpcmVjdGlvbi54LCB5OiBoZWFkLnkgKyBkaXJlY3Rpb24ueSB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDNcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgMy1oYW5kbGUgbmF2aWdhdGlvblwiLCBzbmFrZSk7XHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgIC8vIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhlYWQpO1xyXG4gICAgICAgICAgLy8gY29uc3QgbmV3SGVhZCA9IHtcclxuICAgICAgICAgIC8vICAgeDogaGVhZC54ICsgRGlyZWN0aW9uLlRvcC54LFxyXG4gICAgICAgICAgLy8gICB5OiBoZWFkLnkgKyBEaXJlY3Rpb24uVG9wLnksXHJcbiAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc25ha2VbMF0pO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc25ha2VbMV0pO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc25ha2VbMl0pO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3SGVhZCk7XHJcbiAgICAgICAgICAvLyBpZiAoIWlzU25ha2UobmV3SGVhZCkpIHtcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uVG9wKTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5Cb3R0b20pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uTGVmdCk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyA/LiBpcyBjYWxsZWQgb3B0aW9uYWwgY2hhaW5pbmdcclxuICAvLyBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9PcHRpb25hbF9jaGFpbmluZ1xyXG4gIGNvbnN0IGlzRm9vZCA9ICh7IHgsIHkgfSkgPT4gZm9vZC54ID09PSB4ICYmIGZvb2QueSA9PT0geTtcclxuXHJcbiAgY29uc3QgaXNTbmFrZSA9ICh7IHgsIHkgfSkgPT5cclxuICAgIHNuYWtlLmZpbmQoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbi54ID09PSB4ICYmIHBvc2l0aW9uLnkgPT09IHkpO1xyXG5cclxuICBjb25zdCBjZWxscyA9IFtdO1xyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgQ29uZmlnLndpZHRoOyB4KyspIHtcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ29uZmlnLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGxldCB0eXBlID0gQ2VsbFR5cGUuRW1wdHk7XHJcbiAgICAgIGlmIChpc0Zvb2QoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLkZvb2Q7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNTbmFrZSh7IHgsIHkgfSkpIHtcclxuICAgICAgICB0eXBlID0gQ2VsbFR5cGUuU25ha2U7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbHMucHVzaCg8Q2VsbCBrZXk9e2Ake3h9LSR7eX1gfSB4PXt4fSB5PXt5fSB0eXBlPXt0eXBlfSAvPik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFNjb3JlOiB7c2NvcmV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBDb25maWcuaGVpZ2h0ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgICAgd2lkdGg6IENvbmZpZy53aWR0aCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NlbGxzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljKCgpID0+IFByb21pc2UucmVzb2x2ZShTbmFrZSksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsIkNvbmZpZyIsImhlaWdodCIsIndpZHRoIiwiY2VsbFNpemUiLCJDZWxsVHlwZSIsIlNuYWtlIiwiRm9vZCIsIkVtcHR5IiwiRGlyZWN0aW9uIiwiTGVmdCIsIngiLCJ5IiwiUmlnaHQiLCJUb3AiLCJCb3R0b20iLCJDZWxsIiwidHlwZSIsImdldFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjZWxsQ29udGFpbmVyIiwibGVmdCIsInRvcCIsImNlbGwiLCJnZXRSYW5kb21DZWxsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImdldERlZmF1bHRTbmFrZSIsImdyaWQiLCJyZXNldCIsInNldFNuYWtlIiwic2V0RGlyZWN0aW9uIiwic2V0Rm9vZCIsInNldFNjb3JlIiwic25ha2UiLCJkaXJlY3Rpb24iLCJmb29kIiwic2NvcmUiLCJydW5TaW5nbGVTdGVwIiwiaGVhZCIsIm5ld0hlYWQiLCJuZXdTbmFrZSIsImlzU25ha2UiLCJhbGVydCIsImlzRm9vZCIsInBvcCIsInRhaWwiLCJsZW5ndGgiLCJjdXJyZW50Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibmV3Rm9vZCIsImhhbmRsZU5hdmlnYXRpb24iLCJldmVudCIsImtleSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmluZCIsInBvc2l0aW9uIiwiY2VsbHMiLCJwdXNoIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9