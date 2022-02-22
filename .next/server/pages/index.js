(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Snake.module.css */ "./styles/Snake.module.css");
/* harmony import */ var _styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\User\\web\\Next\\linkedIn\\screening\\screening\\pages\\index.js";



const Config = {
  height: 25,
  width: 25,
  cellSize: 32
};
const CellType = {
  Snake: "snake",
  Food: "food",
  Empty: "empty"
};
const Direction = {
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

const Cell = ({
  x,
  y,
  type
}) => {
  const getStyles = () => {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().cellContainer),
    style: {
      left: x * Config.cellSize,
      top: y * Config.cellSize,
      width: Config.cellSize,
      height: Config.cellSize
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().cell),
      style: getStyles()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

const getRandomCell = () => ({
  x: Math.floor(Math.random() * Config.width),
  y: Math.floor(Math.random() * Config.width)
});

const Snake = () => {
  console.log("rendering");

  const getDefaultSnake = () => {
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

  const getFood = () => {
    console.log("getFood");
    return [{
      x: 4,
      y: 10
    }];
  };

  const grid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  const reset = () => {
    setSnake(getDefaultSnake());
    setDirection(Direction.Right);
    setFood({
      x: 4,
      y: 10
    });
    setScore(0);
  }; // snake[0] is head and snake[snake.length - 1] is tail


  const {
    0: snake,
    1: setSnake
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => getDefaultSnake());
  console.log(snake);
  const {
    0: direction,
    1: setDirection
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Direction.Right);
  const {
    0: food,
    1: setFood
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => getFood());
  const {
    0: score,
    1: setScore
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // move the snake

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log("use effect 1", snake);

    const runSingleStep = () => {
      setSnake(snake => {
        const head = snake[0];
        const newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y
        }; // make a new snake by extending head
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        const newSnake = [newHead, ...snake]; // remove tail
        // &&
        // (newSnake[0].x > Config.width || newSnake[0].x < 0)

        if (isSnake(newHead)) {
          alert(`Game Over! Your score is ${score}`); // clearInterval(grid.current);

          reset();
        }

        if (!isFood(newHead)) newSnake.pop();

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
    return () => clearInterval(grid.current);
  }, [direction, food]); // update score whenever head touches a food

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log("use effect 2", snake);
    const head = snake[0];
    const found = isFood(head);

    if (found) {
      setScore(score => {
        return score + 1;
      });
      let newFood = getRandomCell();

      while (isSnake(newFood)) {
        newFood = getRandomCell();
      }

      const id = food.indexOf(found);
      const newFoods = food.splice(id, 1);
      setFood([...newFoods, newFood]);
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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log("use effect 3", snake);

    const handleNavigation = event => {
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
    return () => window.removeEventListener("keydown", handleNavigation);
  }, [snake]); // ?. is called optional chaining
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  // const isFood = ({ x, y }) => food.x === x && food.y === y;

  const isFood = ({
    x,
    y
  }) => snake.find(position => position.x === x && position.y === y);

  const isSnake = ({
    x,
    y
  }) => snake.find(position => position.x === x && position.y === y);

  const cells = [];

  for (let x = 0; x < Config.width; x++) {
    for (let y = 0; y < Config.height; y++) {
      let type = CellType.Empty;

      if (isFood({
        x,
        y
      })) {
        type = CellType.Food;
      } else if (isSnake({
        x,
        y
      })) {
        type = CellType.Snake;
      }

      cells.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {
        x: x,
        y: y,
        type: type
      }, `${x}-${y}`, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 18
      }, undefined));
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
      style: {
        width: Config.width * Config.cellSize
      },
      children: ["Score: ", score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Snake_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),
      style: {
        height: Config.height * Config.cellSize,
        width: Config.width * Config.cellSize
      },
      children: cells
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 244,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(Snake), {
  ssr: false
}));

/***/ }),

/***/ "./styles/Snake.module.css":
/*!*********************************!*\
  !*** ./styles/Snake.module.css ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Snake_container__1heuj",
	"header": "Snake_header__3kyFz",
	"grid": "Snake_grid__2Y1Rs",
	"cellContainer": "Snake_cellContainer__31SHE",
	"cell": "Snake_cell__1yDMj"
};


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDRztBQUEvQixPQUZUO0FBQUEsNEJBSVV1QyxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQ0UsZUFBUyxFQUFFM0Msc0VBRGI7QUFFRSxXQUFLLEVBQUU7QUFDTEUsUUFBQUEsTUFBTSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsR0FBZ0JELE1BQU0sQ0FBQ0csUUFEMUI7QUFFTEQsUUFBQUEsS0FBSyxFQUFFRixNQUFNLENBQUNFLEtBQVAsR0FBZUYsTUFBTSxDQUFDRztBQUZ4QixPQUZUO0FBQUEsZ0JBT0dpRTtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQkQsQ0FwTUQ7O0FBc01BLGlFQUFlekUsbURBQU8sQ0FBQyxNQUFNNkUsT0FBTyxDQUFDQyxPQUFSLENBQWdCcEUsS0FBaEIsQ0FBUCxFQUErQjtBQUNuRHFFLEVBQUFBLEdBQUcsRUFBRTtBQUQ4QyxDQUEvQixDQUF0Qjs7Ozs7Ozs7OztBQ3ZRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NuYWtlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zbmFrZS9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3NuYWtlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zbmFrZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9TbmFrZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDb25maWcgPSB7XHJcbiAgaGVpZ2h0OiAyNSxcclxuICB3aWR0aDogMjUsXHJcbiAgY2VsbFNpemU6IDMyLFxyXG59O1xyXG5cclxuY29uc3QgQ2VsbFR5cGUgPSB7XHJcbiAgU25ha2U6IFwic25ha2VcIixcclxuICBGb29kOiBcImZvb2RcIixcclxuICBFbXB0eTogXCJlbXB0eVwiLFxyXG59O1xyXG5cclxuY29uc3QgRGlyZWN0aW9uID0ge1xyXG4gIExlZnQ6IHsgeDogLTEsIHk6IDAgfSxcclxuICBSaWdodDogeyB4OiAxLCB5OiAwIH0sXHJcbiAgVG9wOiB7IHg6IDAsIHk6IC0xIH0sXHJcbiAgQm90dG9tOiB7IHg6IDAsIHk6IDEgfSxcclxufTtcclxuXHJcbmNvbnN0IENlbGwgPSAoeyB4LCB5LCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBDZWxsVHlwZS5TbmFrZTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd2dyZWVuXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjYXNlIENlbGxUeXBlLkZvb2Q6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJkYXJrb3JhbmdlXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxyXG4gICAgICAgICAgd2lkdGg6IDMyLFxyXG4gICAgICAgICAgaGVpZ2h0OiAzMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jZWxsQ29udGFpbmVyfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGxlZnQ6IHggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgdG9wOiB5ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHdpZHRoOiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0gc3R5bGU9e2dldFN0eWxlcygpfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSYW5kb21DZWxsID0gKCkgPT4gKHtcclxuICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG4gIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENvbmZpZy53aWR0aCksXHJcbn0pO1xyXG5cclxuY29uc3QgU25ha2UgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJyZW5kZXJpbmdcIik7XHJcbiAgY29uc3QgZ2V0RGVmYXVsdFNuYWtlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJnZXREZWZhdWx0U25ha2VcIik7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7IHg6IDgsIHk6IDEyIH0sXHJcbiAgICAgIHsgeDogNywgeTogMTIgfSxcclxuICAgICAgeyB4OiA2LCB5OiAxMiB9LFxyXG4gICAgXTtcclxuICB9O1xyXG4gIGNvbnN0IGdldEZvb2QgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImdldEZvb2RcIik7XHJcbiAgICByZXR1cm4gW3sgeDogNCwgeTogMTAgfV07XHJcbiAgfTtcclxuICBjb25zdCBncmlkID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRTbmFrZShnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgIHNldEZvb2QoeyB4OiA0LCB5OiAxMCB9KTtcclxuICAgIHNldFNjb3JlKDApO1xyXG4gIH07XHJcblxyXG4gIC8vIHNuYWtlWzBdIGlzIGhlYWQgYW5kIHNuYWtlW3NuYWtlLmxlbmd0aCAtIDFdIGlzIHRhaWxcclxuICBjb25zdCBbc25ha2UsIHNldFNuYWtlXSA9IHVzZVN0YXRlKCgpID0+IGdldERlZmF1bHRTbmFrZSgpKTtcclxuICBjb25zb2xlLmxvZyhzbmFrZSk7XHJcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKERpcmVjdGlvbi5SaWdodCk7XHJcblxyXG4gIGNvbnN0IFtmb29kLCBzZXRGb29kXSA9IHVzZVN0YXRlKCgpID0+IGdldEZvb2QoKSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgLy8gbW92ZSB0aGUgc25ha2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAxXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IHJ1blNpbmdsZVN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNuYWtlKChzbmFrZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgICAgICBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgICAgICAgLy8gbWFrZSBhIG5ldyBzbmFrZSBieSBleHRlbmRpbmcgaGVhZFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9TcHJlYWRfc3ludGF4XHJcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbbmV3SGVhZCwgLi4uc25ha2VdO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGFpbFxyXG4gICAgICAgIC8vICYmXHJcbiAgICAgICAgLy8gKG5ld1NuYWtlWzBdLnggPiBDb25maWcud2lkdGggfHwgbmV3U25ha2VbMF0ueCA8IDApXHJcbiAgICAgICAgaWYgKGlzU25ha2UobmV3SGVhZCkpIHtcclxuICAgICAgICAgIGFsZXJ0KGBHYW1lIE92ZXIhIFlvdXIgc2NvcmUgaXMgJHtzY29yZX1gKTtcclxuICAgICAgICAgIC8vIGNsZWFySW50ZXJ2YWwoZ3JpZC5jdXJyZW50KTtcclxuICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzRm9vZChuZXdIZWFkKSkgbmV3U25ha2UucG9wKCk7XHJcblxyXG4gICAgICAgIGlmIChuZXdIZWFkLnggPj0gQ29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZC54IDwgMCkge1xyXG4gICAgICAgICAgbmV3SGVhZC54ID0gQ29uZmlnLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld0hlYWQueSA+IENvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAgIG5ld0hlYWQueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkLnkgPCAwKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnkgPSBDb25maWcuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIGlmICh0YWlsLnggPT09IDApIHtcclxuICAgICAgICAvLyAgIG5ld1NuYWtlWzBdLnggPSBDb25maWcud2lkdGg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmICh0YWlsLnkgPT09IENvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAvLyAgIG5ld1NuYWtlWzBdLnkgPSAwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NuYWtlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcnVuU2luZ2xlU3RlcCgpO1xyXG4gICAgZ3JpZC5jdXJyZW50ID0gc2V0SW50ZXJ2YWwocnVuU2luZ2xlU3RlcCwgNTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChncmlkLmN1cnJlbnQpO1xyXG4gIH0sIFtkaXJlY3Rpb24sIGZvb2RdKTtcclxuXHJcbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDJcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgY29uc3QgZm91bmQgPSBpc0Zvb2QoaGVhZCk7XHJcbiAgICBpZiAoZm91bmQpIHtcclxuICAgICAgc2V0U2NvcmUoKHNjb3JlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNjb3JlICsgMTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcclxuICAgICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGlkID0gZm9vZC5pbmRleE9mKGZvdW5kKTtcclxuICAgICAgY29uc3QgbmV3Rm9vZHMgPSBmb29kLnNwbGljZShpZCwgMSk7XHJcblxyXG4gICAgICBzZXRGb29kKFsuLi5uZXdGb29kcywgbmV3Rm9vZF0pO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3Qgc2V0TmV3Rm9vZCA9ICgpID0+IHtcclxuICAgIC8vICAgY29uc3QgbmV3Rm9vZCA9IGdldFJhbmRvbUNlbGwoKTtcclxuICAgIC8vICAgd2hpbGUgKGlzU25ha2UobmV3Rm9vZCkpIHtcclxuICAgIC8vICAgICBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHNldEZvb2QobmV3Rm9vZCk7XHJcbiAgICAvLyB9O1xyXG4gICAgLy8gc2V0TmV3Rm9vZCgpO1xyXG4gICAgLy8gY29uc3QgdGltZXIyID0gc2V0SW50ZXJ2YWwoc2V0TmV3Rm9vZCwgMTAwMDApO1xyXG5cclxuICAgIC8vIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyMik7XHJcbiAgfSwgW3NuYWtlLCBmb29kXSk7XHJcblxyXG4gIC8vIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAvLyBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAzXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IGhhbmRsZU5hdmlnYXRpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDMtaGFuZGxlIG5hdmlnYXRpb25cIiwgc25ha2UpO1xyXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICBpZiAoc25ha2VbMF0ueSAhPT0gc25ha2VbMV0ueSArIDEpIHtcclxuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5Ub3ApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICBpZiAoc25ha2VbMF0ueSArIDEgIT09IHNuYWtlWzFdLnkpIHtcclxuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5Cb3R0b20pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICBpZiAoc25ha2VbMF0ueCAhPT0gc25ha2VbMV0ueCArIDEpIHtcclxuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgIGlmIChzbmFrZVswXS54ICsgMSAhPT0gc25ha2VbMV0ueCkge1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XHJcbiAgfSwgW3NuYWtlXSk7XHJcblxyXG4gIC8vID8uIGlzIGNhbGxlZCBvcHRpb25hbCBjaGFpbmluZ1xyXG4gIC8vIHNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL09wdGlvbmFsX2NoYWluaW5nXHJcbiAgLy8gY29uc3QgaXNGb29kID0gKHsgeCwgeSB9KSA9PiBmb29kLnggPT09IHggJiYgZm9vZC55ID09PSB5O1xyXG4gIGNvbnN0IGlzRm9vZCA9ICh7IHgsIHkgfSkgPT5cclxuICAgIHNuYWtlLmZpbmQoKHBvc2l0aW9uKSA9PiBwb3NpdGlvbi54ID09PSB4ICYmIHBvc2l0aW9uLnkgPT09IHkpO1xyXG5cclxuICBjb25zdCBpc1NuYWtlID0gKHsgeCwgeSB9KSA9PlxyXG4gICAgc25ha2UuZmluZCgocG9zaXRpb24pID0+IHBvc2l0aW9uLnggPT09IHggJiYgcG9zaXRpb24ueSA9PT0geSk7XHJcblxyXG4gIGNvbnN0IGNlbGxzID0gW107XHJcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBDb25maWcud2lkdGg7IHgrKykge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBDb25maWcuaGVpZ2h0OyB5KyspIHtcclxuICAgICAgbGV0IHR5cGUgPSBDZWxsVHlwZS5FbXB0eTtcclxuICAgICAgaWYgKGlzRm9vZCh7IHgsIHkgfSkpIHtcclxuICAgICAgICB0eXBlID0gQ2VsbFR5cGUuRm9vZDtcclxuICAgICAgfSBlbHNlIGlmIChpc1NuYWtlKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5TbmFrZTtcclxuICAgICAgfVxyXG4gICAgICBjZWxscy5wdXNoKDxDZWxsIGtleT17YCR7eH0tJHt5fWB9IHg9e3h9IHk9e3l9IHR5cGU9e3R5cGV9IC8+KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IENvbmZpZy53aWR0aCAqIENvbmZpZy5jZWxsU2l6ZSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgU2NvcmU6IHtzY29yZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IENvbmZpZy5oZWlnaHQgKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgICB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2VsbHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFNuYWtlKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTbmFrZV9jb250YWluZXJfXzFoZXVqXCIsXG5cdFwiaGVhZGVyXCI6IFwiU25ha2VfaGVhZGVyX18za3lGelwiLFxuXHRcImdyaWRcIjogXCJTbmFrZV9ncmlkX18yWTFSc1wiLFxuXHRcImNlbGxDb250YWluZXJcIjogXCJTbmFrZV9jZWxsQ29udGFpbmVyX18zMVNIRVwiLFxuXHRcImNlbGxcIjogXCJTbmFrZV9jZWxsX18xeURNalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiZHluYW1pYyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiQ29uZmlnIiwiaGVpZ2h0Iiwid2lkdGgiLCJjZWxsU2l6ZSIsIkNlbGxUeXBlIiwiU25ha2UiLCJGb29kIiwiRW1wdHkiLCJEaXJlY3Rpb24iLCJMZWZ0IiwieCIsInkiLCJSaWdodCIsIlRvcCIsIkJvdHRvbSIsIkNlbGwiLCJ0eXBlIiwiZ2V0U3R5bGVzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImNlbGxDb250YWluZXIiLCJsZWZ0IiwidG9wIiwiY2VsbCIsImdldFJhbmRvbUNlbGwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIiwiZ2V0RGVmYXVsdFNuYWtlIiwiZ2V0Rm9vZCIsImdyaWQiLCJyZXNldCIsInNldFNuYWtlIiwic2V0RGlyZWN0aW9uIiwic2V0Rm9vZCIsInNldFNjb3JlIiwic25ha2UiLCJkaXJlY3Rpb24iLCJmb29kIiwic2NvcmUiLCJydW5TaW5nbGVTdGVwIiwiaGVhZCIsIm5ld0hlYWQiLCJuZXdTbmFrZSIsImlzU25ha2UiLCJhbGVydCIsImlzRm9vZCIsInBvcCIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJmb3VuZCIsIm5ld0Zvb2QiLCJpZCIsImluZGV4T2YiLCJuZXdGb29kcyIsInNwbGljZSIsImhhbmRsZU5hdmlnYXRpb24iLCJldmVudCIsImtleSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmluZCIsInBvc2l0aW9uIiwiY2VsbHMiLCJwdXNoIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9