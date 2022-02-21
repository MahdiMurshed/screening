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
    var runSingleStep = function runSingleStep() {
      setSnake(function (snake) {
        var head = snake[0];
        var newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y
        }; // make a new snake by extending head
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        var newSnake = [newHead].concat((0,C_Users_User_web_Next_linkedIn_screening_screening_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(snake)); // remove tail

        if (isSnake(newHead) && (newSnake[0].x > Config.width || newSnake[0].x < 0)) {
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

  }, [snake, food]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var handleNavigation = function handleNavigation(event) {
      switch (event.key) {
        case "ArrowUp":
          setDirection(function (prev) {
            console.log(prev);
            return setDirection(Direction.Top);
          });
          break;

        case "ArrowDown":
          //if (direction !== Direction.Top) setDirection(Direction.Bottom);
          setDirection(Direction.Bottom);
          break;

        case "ArrowLeft":
          setDirection(function (prev) {
            console.log(prev.x === 1 && prev.y === 0);
            console.log(Direction.Left);
            if (prev.x !== 1 && prev.y !== 0) return Direction.Left;
            return setDirection(Direction.Right);
          });
          break;

        case "ArrowRight":
          setDirection(function (prev) {
            console.log(prev.x === 1 && prev.y === 0);
            console.log(Direction.Right);
            if (prev.x !== 1 && prev.y !== 0) return Direction.Right;
            return setDirection(Direction.Left);
          });
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
        lineNumber: 223,
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
      lineNumber: 229,
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
      lineNumber: 235,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 228,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzQ3NDUxN2I0M2RiZTYwZWI2NGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxLQUFLLEVBQUUsT0FEUTtBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxLQUFLLEVBQUU7QUFIUSxDQUFqQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFDLENBQU47QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FEVTtBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBRlM7QUFHaEJFLEVBQUFBLEdBQUcsRUFBRTtBQUFFSCxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBSFc7QUFJaEJHLEVBQUFBLE1BQU0sRUFBRTtBQUFFSixJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUpRLENBQWxCOztBQU9BLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJMLENBQWlCLFFBQWpCQSxDQUFpQjtBQUFBLE1BQWRDLENBQWMsUUFBZEEsQ0FBYztBQUFBLE1BQVhLLElBQVcsUUFBWEEsSUFBVzs7QUFDL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRRCxJQUFSO0FB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RTtBQUFLLGFBQVMsRUFBRVosMkVBQWhCO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVBLHdFQURiO0FBRUUsV0FBSyxFQUFFO0FBQUVHLFFBQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxLQUFQLEdBQWVGLE1BQU0sQ0FBQ0c7QUFBL0IsT0FGVDtBQUFBLDRCQUlVb0MsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQ0UsZUFBUyxFQUFFeEMsc0VBRGI7QUFFRSxXQUFLLEVBQUU7QUFDTEUsUUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsR0FBZ0JELE1BQU0sQ0FBQ0csUUFEMUI7QUFFTEQsUUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNFLEtBQVAsR0FBZUYsTUFBTSxDQUFDRztBQUZ4QixPQUZUO0FBQUEsZ0JBT0c4RDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXBMRDs7R0FBTTVEOztNQUFBQTtBQXNMTiwrREFBZSxNQUFBVixtREFBTyxPQUFDO0FBQUEsU0FBTTBFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmpFLEtBQWhCLENBQU47QUFBQSxDQUFELEVBQStCO0FBQ25Ea0UsRUFBQUEsR0FBRyxFQUFFO0FBRDhDLENBQS9CLENBQXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9TbmFrZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDb25maWcgPSB7XHJcbiAgaGVpZ2h0OiAyNSxcclxuICB3aWR0aDogMjUsXHJcbiAgY2VsbFNpemU6IDMyLFxyXG59O1xyXG5cclxuY29uc3QgQ2VsbFR5cGUgPSB7XHJcbiAgU25ha2U6IFwic25ha2VcIixcclxuICBGb29kOiBcImZvb2RcIixcclxuICBFbXB0eTogXCJlbXB0eVwiLFxyXG59O1xyXG5cclxuY29uc3QgRGlyZWN0aW9uID0ge1xyXG4gIExlZnQ6IHsgeDogLTEsIHk6IDAgfSxcclxuICBSaWdodDogeyB4OiAxLCB5OiAwIH0sXHJcbiAgVG9wOiB7IHg6IDAsIHk6IC0xIH0sXHJcbiAgQm90dG9tOiB7IHg6IDAsIHk6IDEgfSxcclxufTtcclxuXHJcbmNvbnN0IENlbGwgPSAoeyB4LCB5LCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBDZWxsVHlwZS5TbmFrZTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd2dyZWVuXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjYXNlIENlbGxUeXBlLkZvb2Q6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJkYXJrb3JhbmdlXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxyXG4gICAgICAgICAgd2lkdGg6IDMyLFxyXG4gICAgICAgICAgaGVpZ2h0OiAzMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jZWxsQ29udGFpbmVyfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGxlZnQ6IHggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgdG9wOiB5ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHdpZHRoOiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0gc3R5bGU9e2dldFN0eWxlcygpfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSYW5kb21DZWxsID0gKCkgPT4gKHtcclxuICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG4gIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENvbmZpZy53aWR0aCksXHJcbn0pO1xyXG5cclxuY29uc3QgU25ha2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2V0RGVmYXVsdFNuYWtlID0gKCkgPT4gW1xyXG4gICAgeyB4OiA4LCB5OiAxMiB9LFxyXG4gICAgeyB4OiA3LCB5OiAxMiB9LFxyXG4gICAgeyB4OiA2LCB5OiAxMiB9LFxyXG4gIF07XHJcbiAgY29uc3QgZ3JpZCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0U25ha2UoZ2V0RGVmYXVsdFNuYWtlKCkpO1xyXG4gICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICBzZXRGb29kKHsgeDogNCwgeTogMTAgfSk7XHJcbiAgICBzZXRTY29yZSgwKTtcclxuICB9O1xyXG5cclxuICAvLyBzbmFrZVswXSBpcyBoZWFkIGFuZCBzbmFrZVtzbmFrZS5sZW5ndGggLSAxXSBpcyB0YWlsXHJcbiAgY29uc3QgW3NuYWtlLCBzZXRTbmFrZV0gPSB1c2VTdGF0ZShnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKERpcmVjdGlvbi5SaWdodCk7XHJcblxyXG4gIGNvbnN0IFtmb29kLCBzZXRGb29kXSA9IHVzZVN0YXRlKHsgeDogNCwgeTogMTAgfSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgLy8gbW92ZSB0aGUgc25ha2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJ1blNpbmdsZVN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNuYWtlKChzbmFrZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgICAgICBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgICAgICAgLy8gbWFrZSBhIG5ldyBzbmFrZSBieSBleHRlbmRpbmcgaGVhZFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9TcHJlYWRfc3ludGF4XHJcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbbmV3SGVhZCwgLi4uc25ha2VdO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGFpbFxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGlzU25ha2UobmV3SGVhZCkgJiZcclxuICAgICAgICAgIChuZXdTbmFrZVswXS54ID4gQ29uZmlnLndpZHRoIHx8IG5ld1NuYWtlWzBdLnggPCAwKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYWxlcnQoYEdhbWUgT3ZlciEgWW91ciBzY29yZSBpcyAke3Njb3JlfWApO1xyXG4gICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChncmlkLmN1cnJlbnQpO1xyXG4gICAgICAgICAgcmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNGb29kKG5ld0hlYWQpKSBuZXdTbmFrZS5wb3AoKTtcclxuICAgICAgICBjb25zdCB0YWlsID0gbmV3U25ha2VbbmV3U25ha2UubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKG5ld0hlYWQueCA+PSBDb25maWcud2lkdGgpIHtcclxuICAgICAgICAgIG5ld0hlYWQueCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkLnggPCAwKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnggPSBDb25maWcud2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3SGVhZC55ID4gQ29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgICAgbmV3SGVhZC55ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0hlYWQueSA8IDApIHtcclxuICAgICAgICAgIG5ld0hlYWQueSA9IENvbmZpZy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRhaWwueCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgbmV3U25ha2VbMF0ueCA9IENvbmZpZy53aWR0aDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHRhaWwueSA9PT0gQ29uZmlnLmhlaWdodCkge1xyXG4gICAgICAgIC8vICAgbmV3U25ha2VbMF0ueSA9IDA7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3U25ha2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBydW5TaW5nbGVTdGVwKCk7XHJcbiAgICBncmlkLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChydW5TaW5nbGVTdGVwLCA1MDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGdyaWQuY3VycmVudCk7XHJcbiAgfSwgW2RpcmVjdGlvbiwgZm9vZF0pO1xyXG5cclxuICAvLyB1cGRhdGUgc2NvcmUgd2hlbmV2ZXIgaGVhZCB0b3VjaGVzIGEgZm9vZFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgICBpZiAoaXNGb29kKGhlYWQpKSB7XHJcbiAgICAgIHNldFNjb3JlKChzY29yZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBzY29yZSArIDE7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XHJcbiAgICAgICAgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0Rm9vZChuZXdGb29kKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IHNldE5ld0Zvb2QgPSAoKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAvLyAgIHdoaWxlIChpc1NuYWtlKG5ld0Zvb2QpKSB7XHJcbiAgICAvLyAgICAgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBzZXRGb29kKG5ld0Zvb2QpO1xyXG4gICAgLy8gfTtcclxuICAgIC8vIHNldE5ld0Zvb2QoKTtcclxuICAgIC8vIGNvbnN0IHRpbWVyMiA9IHNldEludGVydmFsKHNldE5ld0Zvb2QsIDEwMDAwKTtcclxuXHJcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcjIpO1xyXG4gIH0sIFtzbmFrZSwgZm9vZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oKHByZXYpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJldik7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlRvcCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICAvL2lmIChkaXJlY3Rpb24gIT09IERpcmVjdGlvbi5Ub3ApIHNldERpcmVjdGlvbihEaXJlY3Rpb24uQm90dG9tKTtcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uQm90dG9tKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oKHByZXYpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJldi54ID09PSAxICYmIHByZXYueSA9PT0gMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKERpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICAgICAgaWYgKHByZXYueCAhPT0gMSAmJiBwcmV2LnkgIT09IDApIHJldHVybiBEaXJlY3Rpb24uTGVmdDtcclxuICAgICAgICAgICAgcmV0dXJuIHNldERpcmVjdGlvbihEaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgIHNldERpcmVjdGlvbigocHJldikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmV2LnggPT09IDEgJiYgcHJldi55ID09PSAwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICAgICAgaWYgKHByZXYueCAhPT0gMSAmJiBwcmV2LnkgIT09IDApIHJldHVybiBEaXJlY3Rpb24uUmlnaHQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXHJcbiAgLy8gc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvT3B0aW9uYWxfY2hhaW5pbmdcclxuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IGZvb2QueCA9PT0geCAmJiBmb29kLnkgPT09IHk7XHJcblxyXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+IHtcclxuICAgIHJldHVybiBzbmFrZS5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjZWxscyA9IFtdO1xyXG4gIGZvciAobGV0IHggPSAwOyB4IDwgQ29uZmlnLndpZHRoOyB4KyspIHtcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ29uZmlnLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGxldCB0eXBlID0gQ2VsbFR5cGUuRW1wdHk7XHJcbiAgICAgIGlmIChpc0Zvb2QoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLkZvb2Q7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNTbmFrZSh7IHgsIHkgfSkpIHtcclxuICAgICAgICB0eXBlID0gQ2VsbFR5cGUuU25ha2U7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbHMucHVzaCg8Q2VsbCBrZXk9e2Ake3h9LSR7eX1gfSB4PXt4fSB5PXt5fSB0eXBlPXt0eXBlfSAvPik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFNjb3JlOiB7c2NvcmV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBDb25maWcuaGVpZ2h0ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgICAgd2lkdGg6IENvbmZpZy53aWR0aCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NlbGxzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljKCgpID0+IFByb21pc2UucmVzb2x2ZShTbmFrZSksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsIkNvbmZpZyIsImhlaWdodCIsIndpZHRoIiwiY2VsbFNpemUiLCJDZWxsVHlwZSIsIlNuYWtlIiwiRm9vZCIsIkVtcHR5IiwiRGlyZWN0aW9uIiwiTGVmdCIsIngiLCJ5IiwiUmlnaHQiLCJUb3AiLCJCb3R0b20iLCJDZWxsIiwidHlwZSIsImdldFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjZWxsQ29udGFpbmVyIiwibGVmdCIsInRvcCIsImNlbGwiLCJnZXRSYW5kb21DZWxsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0RGVmYXVsdFNuYWtlIiwiZ3JpZCIsInJlc2V0Iiwic2V0U25ha2UiLCJzZXREaXJlY3Rpb24iLCJzZXRGb29kIiwic2V0U2NvcmUiLCJzbmFrZSIsImRpcmVjdGlvbiIsImZvb2QiLCJzY29yZSIsInJ1blNpbmdsZVN0ZXAiLCJoZWFkIiwibmV3SGVhZCIsIm5ld1NuYWtlIiwiaXNTbmFrZSIsImFsZXJ0IiwiaXNGb29kIiwicG9wIiwidGFpbCIsImxlbmd0aCIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJuZXdGb29kIiwiaGFuZGxlTmF2aWdhdGlvbiIsImV2ZW50Iiwia2V5IiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbmQiLCJwb3NpdGlvbiIsImNlbGxzIiwicHVzaCIsImNvbnRhaW5lciIsImhlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==