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
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    x: 4,
    y: 10
  });
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
        const tail = newSnake[newSnake.length - 1];

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

    if (isFood(head)) {
      setScore(score => {
        return score + 1;
      });
      let newFood = getRandomCell();

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

  const isFood = ({
    x,
    y
  }) => food.x === x && food.y === y;

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
        lineNumber: 230,
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
      lineNumber: 236,
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
      lineNumber: 242,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 235,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUJELENBM0xEOztBQTZMQSxpRUFBZXJFLG1EQUFPLENBQUMsTUFBTXlFLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmhFLEtBQWhCLENBQVAsRUFBK0I7QUFDbkRpRSxFQUFBQSxHQUFHLEVBQUU7QUFEOEMsQ0FBL0IsQ0FBdEI7Ozs7Ozs7Ozs7QUM5UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NuYWtlLy4vc3R5bGVzL1NuYWtlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc25ha2UvZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly9zbmFrZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc25ha2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQ29uZmlnID0ge1xyXG4gIGhlaWdodDogMjUsXHJcbiAgd2lkdGg6IDI1LFxyXG4gIGNlbGxTaXplOiAzMixcclxufTtcclxuXHJcbmNvbnN0IENlbGxUeXBlID0ge1xyXG4gIFNuYWtlOiBcInNuYWtlXCIsXHJcbiAgRm9vZDogXCJmb29kXCIsXHJcbiAgRW1wdHk6IFwiZW1wdHlcIixcclxufTtcclxuXHJcbmNvbnN0IERpcmVjdGlvbiA9IHtcclxuICBMZWZ0OiB7IHg6IC0xLCB5OiAwIH0sXHJcbiAgUmlnaHQ6IHsgeDogMSwgeTogMCB9LFxyXG4gIFRvcDogeyB4OiAwLCB5OiAtMSB9LFxyXG4gIEJvdHRvbTogeyB4OiAwLCB5OiAxIH0sXHJcbn07XHJcblxyXG5jb25zdCBDZWxsID0gKHsgeCwgeSwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgQ2VsbFR5cGUuU25ha2U6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dncmVlblwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgcGFkZGluZzogMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY2FzZSBDZWxsVHlwZS5Gb29kOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya29yYW5nZVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcclxuICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgIGhlaWdodDogMzIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbENvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBsZWZ0OiB4ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHRvcDogeSAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICB3aWR0aDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIGhlaWdodDogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbGx9IHN0eWxlPXtnZXRTdHlsZXMoKX0+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UmFuZG9tQ2VsbCA9ICgpID0+ICh7XHJcbiAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ29uZmlnLndpZHRoKSxcclxuICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG59KTtcclxuXHJcbmNvbnN0IFNuYWtlID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicmVuZGVyaW5nXCIpO1xyXG4gIGNvbnN0IGdldERlZmF1bHRTbmFrZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0RGVmYXVsdFNuYWtlXCIpO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgeyB4OiA4LCB5OiAxMiB9LFxyXG4gICAgICB7IHg6IDcsIHk6IDEyIH0sXHJcbiAgICAgIHsgeDogNiwgeTogMTIgfSxcclxuICAgIF07XHJcbiAgfTtcclxuICBjb25zdCBncmlkID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRTbmFrZShnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgIHNldEZvb2QoeyB4OiA0LCB5OiAxMCB9KTtcclxuICAgIHNldFNjb3JlKDApO1xyXG4gIH07XHJcblxyXG4gIC8vIHNuYWtlWzBdIGlzIGhlYWQgYW5kIHNuYWtlW3NuYWtlLmxlbmd0aCAtIDFdIGlzIHRhaWxcclxuICBjb25zdCBbc25ha2UsIHNldFNuYWtlXSA9IHVzZVN0YXRlKCgpID0+IGdldERlZmF1bHRTbmFrZSgpKTtcclxuICBjb25zb2xlLmxvZyhzbmFrZSk7XHJcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKERpcmVjdGlvbi5SaWdodCk7XHJcblxyXG4gIGNvbnN0IFtmb29kLCBzZXRGb29kXSA9IHVzZVN0YXRlKHsgeDogNCwgeTogMTAgfSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgLy8gbW92ZSB0aGUgc25ha2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXNlIGVmZmVjdCAxXCIsIHNuYWtlKTtcclxuICAgIGNvbnN0IHJ1blNpbmdsZVN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgIHNldFNuYWtlKChzbmFrZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBzbmFrZVswXTtcclxuICAgICAgICBjb25zdCBuZXdIZWFkID0geyB4OiBoZWFkLnggKyBkaXJlY3Rpb24ueCwgeTogaGVhZC55ICsgZGlyZWN0aW9uLnkgfTtcclxuXHJcbiAgICAgICAgLy8gbWFrZSBhIG5ldyBzbmFrZSBieSBleHRlbmRpbmcgaGVhZFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL09wZXJhdG9ycy9TcHJlYWRfc3ludGF4XHJcbiAgICAgICAgY29uc3QgbmV3U25ha2UgPSBbbmV3SGVhZCwgLi4uc25ha2VdO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGFpbFxyXG4gICAgICAgIC8vICYmXHJcbiAgICAgICAgLy8gKG5ld1NuYWtlWzBdLnggPiBDb25maWcud2lkdGggfHwgbmV3U25ha2VbMF0ueCA8IDApXHJcbiAgICAgICAgaWYgKGlzU25ha2UobmV3SGVhZCkpIHtcclxuICAgICAgICAgIGFsZXJ0KGBHYW1lIE92ZXIhIFlvdXIgc2NvcmUgaXMgJHtzY29yZX1gKTtcclxuICAgICAgICAgIC8vIGNsZWFySW50ZXJ2YWwoZ3JpZC5jdXJyZW50KTtcclxuICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWlzRm9vZChuZXdIZWFkKSkgbmV3U25ha2UucG9wKCk7XHJcbiAgICAgICAgY29uc3QgdGFpbCA9IG5ld1NuYWtlW25ld1NuYWtlLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChuZXdIZWFkLnggPj0gQ29uZmlnLndpZHRoKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3SGVhZC54IDwgMCkge1xyXG4gICAgICAgICAgbmV3SGVhZC54ID0gQ29uZmlnLndpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld0hlYWQueSA+IENvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAgIG5ld0hlYWQueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdIZWFkLnkgPCAwKSB7XHJcbiAgICAgICAgICBuZXdIZWFkLnkgPSBDb25maWcuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIGlmICh0YWlsLnggPT09IDApIHtcclxuICAgICAgICAvLyAgIG5ld1NuYWtlWzBdLnggPSBDb25maWcud2lkdGg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmICh0YWlsLnkgPT09IENvbmZpZy5oZWlnaHQpIHtcclxuICAgICAgICAvLyAgIG5ld1NuYWtlWzBdLnkgPSAwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NuYWtlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcnVuU2luZ2xlU3RlcCgpO1xyXG4gICAgZ3JpZC5jdXJyZW50ID0gc2V0SW50ZXJ2YWwocnVuU2luZ2xlU3RlcCwgNTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChncmlkLmN1cnJlbnQpO1xyXG4gIH0sIFtkaXJlY3Rpb24sIGZvb2RdKTtcclxuXHJcbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDJcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgaWYgKGlzRm9vZChoZWFkKSkge1xyXG4gICAgICBzZXRTY29yZSgoc2NvcmUpID0+IHtcclxuICAgICAgICByZXR1cm4gc2NvcmUgKyAxO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xyXG4gICAgICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldEZvb2QobmV3Rm9vZCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBzZXROZXdGb29kID0gKCkgPT4ge1xyXG4gICAgLy8gICBjb25zdCBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgLy8gICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xyXG4gICAgLy8gICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgc2V0Rm9vZChuZXdGb29kKTtcclxuICAgIC8vIH07XHJcbiAgICAvLyBzZXROZXdGb29kKCk7XHJcbiAgICAvLyBjb25zdCB0aW1lcjIgPSBzZXRJbnRlcnZhbChzZXROZXdGb29kLCAxMDAwMCk7XHJcblxyXG4gICAgLy8gcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIyKTtcclxuICB9LCBbc25ha2UsIGZvb2RdKTtcclxuXHJcbiAgLy8gY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gIC8vIGNvbnN0IG5ld0hlYWQgPSB7IHg6IGhlYWQueCArIGRpcmVjdGlvbi54LCB5OiBoZWFkLnkgKyBkaXJlY3Rpb24ueSB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJ1c2UgZWZmZWN0IDNcIiwgc25ha2UpO1xyXG4gICAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVzZSBlZmZlY3QgMy1oYW5kbGUgbmF2aWdhdGlvblwiLCBzbmFrZSk7XHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgIGlmIChzbmFrZVswXS55ICE9PSBzbmFrZVsxXS55ICsgMSkge1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLlRvcCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICAgIGlmIChzbmFrZVswXS55ICsgMSAhPT0gc25ha2VbMV0ueSkge1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICAgIGlmIChzbmFrZVswXS54ICE9PSBzbmFrZVsxXS54ICsgMSkge1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgaWYgKHNuYWtlWzBdLnggKyAxICE9PSBzbmFrZVsxXS54KSB7XHJcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlTmF2aWdhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuICB9LCBbc25ha2VdKTtcclxuXHJcbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXHJcbiAgLy8gc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvT3B0aW9uYWxfY2hhaW5pbmdcclxuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IGZvb2QueCA9PT0geCAmJiBmb29kLnkgPT09IHk7XHJcblxyXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+XHJcbiAgICBzbmFrZS5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBbXTtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53aWR0aDsgeCsrKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENvbmZpZy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBsZXQgdHlwZSA9IENlbGxUeXBlLkVtcHR5O1xyXG4gICAgICBpZiAoaXNGb29kKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5Gb29kO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzU25ha2UoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLlNuYWtlO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGxzLnB1c2goPENlbGwga2V5PXtgJHt4fS0ke3l9YH0geD17eH0geT17eX0gdHlwZT17dHlwZX0gLz4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplIH19XHJcbiAgICAgID5cclxuICAgICAgICBTY29yZToge3Njb3JlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogQ29uZmlnLmhlaWdodCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICAgIHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjZWxsc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoU25ha2UpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNuYWtlX2NvbnRhaW5lcl9fMWhldWpcIixcblx0XCJoZWFkZXJcIjogXCJTbmFrZV9oZWFkZXJfXzNreUZ6XCIsXG5cdFwiZ3JpZFwiOiBcIlNuYWtlX2dyaWRfXzJZMVJzXCIsXG5cdFwiY2VsbENvbnRhaW5lclwiOiBcIlNuYWtlX2NlbGxDb250YWluZXJfXzMxU0hFXCIsXG5cdFwiY2VsbFwiOiBcIlNuYWtlX2NlbGxfXzF5RE1qXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb25maWciLCJoZWlnaHQiLCJ3aWR0aCIsImNlbGxTaXplIiwiQ2VsbFR5cGUiLCJTbmFrZSIsIkZvb2QiLCJFbXB0eSIsIkRpcmVjdGlvbiIsIkxlZnQiLCJ4IiwieSIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2VsbCIsInR5cGUiLCJnZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2VsbENvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJjZWxsIiwiZ2V0UmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJnZXREZWZhdWx0U25ha2UiLCJncmlkIiwicmVzZXQiLCJzZXRTbmFrZSIsInNldERpcmVjdGlvbiIsInNldEZvb2QiLCJzZXRTY29yZSIsInNuYWtlIiwiZGlyZWN0aW9uIiwiZm9vZCIsInNjb3JlIiwicnVuU2luZ2xlU3RlcCIsImhlYWQiLCJuZXdIZWFkIiwibmV3U25ha2UiLCJpc1NuYWtlIiwiYWxlcnQiLCJpc0Zvb2QiLCJwb3AiLCJ0YWlsIiwibGVuZ3RoIiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm5ld0Zvb2QiLCJoYW5kbGVOYXZpZ2F0aW9uIiwiZXZlbnQiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbmQiLCJwb3NpdGlvbiIsImNlbGxzIiwicHVzaCIsImNvbnRhaW5lciIsImhlYWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==