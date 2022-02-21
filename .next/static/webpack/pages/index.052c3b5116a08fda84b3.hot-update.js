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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDUyYzNiNTExNmEwOGZkYTg0YjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsTUFBTSxFQUFFLEVBREs7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLEVBRk07QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBSEcsQ0FBZjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxLQUFLLEVBQUUsT0FEUTtBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxLQUFLLEVBQUU7QUFIUSxDQUFqQjtBQU1BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFDLENBQU47QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FEVTtBQUVoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQUVGLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRTtBQUFYLEdBRlM7QUFHaEJFLEVBQUFBLEdBQUcsRUFBRTtBQUFFSCxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFaLEdBSFc7QUFJaEJHLEVBQUFBLE1BQU0sRUFBRTtBQUFFSixJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUU7QUFBWDtBQUpRLENBQWxCOztBQU9BLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUEsTUFBakJMLENBQWlCLFFBQWpCQSxDQUFpQjtBQUFBLE1BQWRDLENBQWMsUUFBZEEsQ0FBYztBQUFBLE1BQVhLLElBQVcsUUFBWEEsSUFBVzs7QUFDL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFRRCxJQUFSO0FB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REFBZSxNQUFBVixtREFBTyxPQUFDO0FBQUEsU0FBTXlFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmhFLEtBQWhCLENBQU47QUFBQSxDQUFELEVBQStCO0FBQ25EaUUsRUFBQUEsR0FBRyxFQUFFO0FBRDhDLENBQS9CLENBQXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9TbmFrZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDb25maWcgPSB7XHJcbiAgaGVpZ2h0OiAyNSxcclxuICB3aWR0aDogMjUsXHJcbiAgY2VsbFNpemU6IDMyLFxyXG59O1xyXG5cclxuY29uc3QgQ2VsbFR5cGUgPSB7XHJcbiAgU25ha2U6IFwic25ha2VcIixcclxuICBGb29kOiBcImZvb2RcIixcclxuICBFbXB0eTogXCJlbXB0eVwiLFxyXG59O1xyXG5cclxuY29uc3QgRGlyZWN0aW9uID0ge1xyXG4gIExlZnQ6IHsgeDogLTEsIHk6IDAgfSxcclxuICBSaWdodDogeyB4OiAxLCB5OiAwIH0sXHJcbiAgVG9wOiB7IHg6IDAsIHk6IC0xIH0sXHJcbiAgQm90dG9tOiB7IHg6IDAsIHk6IDEgfSxcclxufTtcclxuXHJcbmNvbnN0IENlbGwgPSAoeyB4LCB5LCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBDZWxsVHlwZS5TbmFrZTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd2dyZWVuXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjYXNlIENlbGxUeXBlLkZvb2Q6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJkYXJrb3JhbmdlXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxyXG4gICAgICAgICAgd2lkdGg6IDMyLFxyXG4gICAgICAgICAgaGVpZ2h0OiAzMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jZWxsQ29udGFpbmVyfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGxlZnQ6IHggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgdG9wOiB5ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHdpZHRoOiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0gc3R5bGU9e2dldFN0eWxlcygpfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSYW5kb21DZWxsID0gKCkgPT4gKHtcclxuICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG4gIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENvbmZpZy53aWR0aCksXHJcbn0pO1xyXG5cclxuY29uc3QgU25ha2UgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJyZW5kZXJpbmdcIik7XHJcbiAgY29uc3QgZ2V0RGVmYXVsdFNuYWtlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJnZXREZWZhdWx0U25ha2VcIik7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7IHg6IDgsIHk6IDEyIH0sXHJcbiAgICAgIHsgeDogNywgeTogMTIgfSxcclxuICAgICAgeyB4OiA2LCB5OiAxMiB9LFxyXG4gICAgXTtcclxuICB9O1xyXG4gIGNvbnN0IGdyaWQgPSB1c2VSZWYoKTtcclxuICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgIHNldFNuYWtlKGdldERlZmF1bHRTbmFrZSgpKTtcclxuICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgc2V0Rm9vZCh7IHg6IDQsIHk6IDEwIH0pO1xyXG4gICAgc2V0U2NvcmUoMCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gc25ha2VbMF0gaXMgaGVhZCBhbmQgc25ha2Vbc25ha2UubGVuZ3RoIC0gMV0gaXMgdGFpbFxyXG4gIGNvbnN0IFtzbmFrZSwgc2V0U25ha2VdID0gdXNlU3RhdGUoZ2V0RGVmYXVsdFNuYWtlKCkpO1xyXG4gIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShEaXJlY3Rpb24uUmlnaHQpO1xyXG5cclxuICBjb25zdCBbZm9vZCwgc2V0Rm9vZF0gPSB1c2VTdGF0ZSh7IHg6IDQsIHk6IDEwIH0pO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vIG1vdmUgdGhlIHNuYWtlXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgMVwiLCBzbmFrZSk7XHJcbiAgICBjb25zdCBydW5TaW5nbGVTdGVwID0gKCkgPT4ge1xyXG4gICAgICBzZXRTbmFrZSgoc25ha2UpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgICAgICAgY29uc3QgbmV3SGVhZCA9IHsgeDogaGVhZC54ICsgZGlyZWN0aW9uLngsIHk6IGhlYWQueSArIGRpcmVjdGlvbi55IH07XHJcblxyXG4gICAgICAgIC8vIG1ha2UgYSBuZXcgc25ha2UgYnkgZXh0ZW5kaW5nIGhlYWRcclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvU3ByZWFkX3N5bnRheFxyXG4gICAgICAgIGNvbnN0IG5ld1NuYWtlID0gW25ld0hlYWQsIC4uLnNuYWtlXTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRhaWxcclxuICAgICAgICAvLyAmJlxyXG4gICAgICAgIC8vIChuZXdTbmFrZVswXS54ID4gQ29uZmlnLndpZHRoIHx8IG5ld1NuYWtlWzBdLnggPCAwKVxyXG4gICAgICAgIGlmIChpc1NuYWtlKG5ld0hlYWQpKSB7XHJcbiAgICAgICAgICBhbGVydChgR2FtZSBPdmVyISBZb3VyIHNjb3JlIGlzICR7c2NvcmV9YCk7XHJcbiAgICAgICAgICAvLyBjbGVhckludGVydmFsKGdyaWQuY3VycmVudCk7XHJcbiAgICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0Zvb2QobmV3SGVhZCkpIG5ld1NuYWtlLnBvcCgpO1xyXG4gICAgICAgIGNvbnN0IHRhaWwgPSBuZXdTbmFrZVtuZXdTbmFrZS5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAobmV3SGVhZC54ID49IENvbmZpZy53aWR0aCkge1xyXG4gICAgICAgICAgbmV3SGVhZC54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld0hlYWQueCA8IDApIHtcclxuICAgICAgICAgIG5ld0hlYWQueCA9IENvbmZpZy53aWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdIZWFkLnkgPiBDb25maWcuaGVpZ2h0KSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZC55IDwgMCkge1xyXG4gICAgICAgICAgbmV3SGVhZC55ID0gQ29uZmlnLmhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAodGFpbC54ID09PSAwKSB7XHJcbiAgICAgICAgLy8gICBuZXdTbmFrZVswXS54ID0gQ29uZmlnLndpZHRoO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAodGFpbC55ID09PSBDb25maWcuaGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gICBuZXdTbmFrZVswXS55ID0gMDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTbmFrZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJ1blNpbmdsZVN0ZXAoKTtcclxuICAgIGdyaWQuY3VycmVudCA9IHNldEludGVydmFsKHJ1blNpbmdsZVN0ZXAsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoZ3JpZC5jdXJyZW50KTtcclxuICB9LCBbZGlyZWN0aW9uLCBmb29kXSk7XHJcblxyXG4gIC8vIHVwZGF0ZSBzY29yZSB3aGVuZXZlciBoZWFkIHRvdWNoZXMgYSBmb29kXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAyXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgIGlmIChpc0Zvb2QoaGVhZCkpIHtcclxuICAgICAgc2V0U2NvcmUoKHNjb3JlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNjb3JlICsgMTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcclxuICAgICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRGb29kKG5ld0Zvb2QpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3Qgc2V0TmV3Rm9vZCA9ICgpID0+IHtcclxuICAgIC8vICAgY29uc3QgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgIC8vICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcclxuICAgIC8vICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHNldEZvb2QobmV3Rm9vZCk7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gc2V0TmV3Rm9vZCgpO1xyXG4gICAgLy8gY29uc3QgdGltZXIyID0gc2V0SW50ZXJ2YWwoc2V0TmV3Rm9vZCwgMTAwMDApO1xyXG5cclxuICAgIC8vIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyMik7XHJcbiAgfSwgW3NuYWtlLCBmb29kXSk7XHJcblxyXG4gIC8vIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAvLyBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAzXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDMtaGFuZGxlIG5hdmlnYXRpb25cIiwgc25ha2UpO1xyXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAvLyBjb25zdCBoZWFkID0gc25ha2VbMF07XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoZWFkKTtcclxuICAgICAgICAgIC8vIGNvbnN0IG5ld0hlYWQgPSB7XHJcbiAgICAgICAgICAvLyAgIHg6IGhlYWQueCArIERpcmVjdGlvbi5Ub3AueCxcclxuICAgICAgICAgIC8vICAgeTogaGVhZC55ICsgRGlyZWN0aW9uLlRvcC55LFxyXG4gICAgICAgICAgLy8gfTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzBdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzFdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlWzJdKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0hlYWQpO1xyXG4gICAgICAgICAgLy8gaWYgKCFpc1NuYWtlKG5ld0hlYWQpKSB7XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlRvcCk7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uQm90dG9tKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkxlZnQpO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXHJcbiAgLy8gc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvT3B0aW9uYWxfY2hhaW5pbmdcclxuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IGZvb2QueCA9PT0geCAmJiBmb29kLnkgPT09IHk7XHJcblxyXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+XHJcbiAgICBzbmFrZS5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBbXTtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53aWR0aDsgeCsrKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENvbmZpZy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBsZXQgdHlwZSA9IENlbGxUeXBlLkVtcHR5O1xyXG4gICAgICBpZiAoaXNGb29kKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5Gb29kO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzU25ha2UoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLlNuYWtlO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGxzLnB1c2goPENlbGwga2V5PXtgJHt4fS0ke3l9YH0geD17eH0geT17eX0gdHlwZT17dHlwZX0gLz4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplIH19XHJcbiAgICAgID5cclxuICAgICAgICBTY29yZToge3Njb3JlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogQ29uZmlnLmhlaWdodCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICAgIHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjZWxsc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoU25ha2UpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb25maWciLCJoZWlnaHQiLCJ3aWR0aCIsImNlbGxTaXplIiwiQ2VsbFR5cGUiLCJTbmFrZSIsIkZvb2QiLCJFbXB0eSIsIkRpcmVjdGlvbiIsIkxlZnQiLCJ4IiwieSIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2VsbCIsInR5cGUiLCJnZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2VsbENvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJjZWxsIiwiZ2V0UmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJnZXREZWZhdWx0U25ha2UiLCJncmlkIiwicmVzZXQiLCJzZXRTbmFrZSIsInNldERpcmVjdGlvbiIsInNldEZvb2QiLCJzZXRTY29yZSIsInNuYWtlIiwiZGlyZWN0aW9uIiwiZm9vZCIsInNjb3JlIiwicnVuU2luZ2xlU3RlcCIsImhlYWQiLCJuZXdIZWFkIiwibmV3U25ha2UiLCJpc1NuYWtlIiwiYWxlcnQiLCJpc0Zvb2QiLCJwb3AiLCJ0YWlsIiwibGVuZ3RoIiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm5ld0Zvb2QiLCJoYW5kbGVOYXZpZ2F0aW9uIiwiZXZlbnQiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbmQiLCJwb3NpdGlvbiIsImNlbGxzIiwicHVzaCIsImNvbnRhaW5lciIsImhlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==