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
  const getDefaultSnake = () => [{
    x: 8,
    y: 12
  }, {
    x: 7,
    y: 12
  }, {
    x: 6,
    y: 12
  }];

  const grid = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(); // snake[0] is head and snake[snake.length - 1] is tail

  const {
    0: snake,
    1: setSnake
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getDefaultSnake());
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
    const runSingleStep = () => {
      setSnake(snake => {
        const head = snake[0];
        const newHead = {
          x: head.x + direction.x,
          y: head.y + direction.y
        }; // make a new snake by extending head
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        const newSnake = [newHead, ...snake]; // remove tail

        if (!isFood(newHead)) newSnake.pop();
        return newSnake;
      });
    };

    runSingleStep();
    const timer = setInterval(runSingleStep, 500);
    return () => clearInterval(timer);
  }, [direction, food]); // update score whenever head touches a food

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
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
    }
  }, [snake]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleNavigation = event => {
      switch (event.key) {
        case "ArrowUp":
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
    return () => window.removeEventListener("keydown", handleNavigation);
  }, []); // ?. is called optional chaining
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
        lineNumber: 163,
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
      lineNumber: 169,
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
      lineNumber: 175,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBLGVBREY7QUFtQkQsQ0F4SEQ7O0FBMEhBLGlFQUFlL0QsbURBQU8sQ0FBQyxNQUFNbUUsT0FBTyxDQUFDQyxPQUFSLENBQWdCMUQsS0FBaEIsQ0FBUCxFQUErQjtBQUNuRDJELEVBQUFBLEdBQUcsRUFBRTtBQUQ4QyxDQUEvQixDQUF0Qjs7Ozs7Ozs7OztBQzNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NuYWtlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc25ha2UvLi9zdHlsZXMvU25ha2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zbmFrZS9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3NuYWtlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zbmFrZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9TbmFrZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDb25maWcgPSB7XHJcbiAgaGVpZ2h0OiAyNSxcclxuICB3aWR0aDogMjUsXHJcbiAgY2VsbFNpemU6IDMyLFxyXG59O1xyXG5cclxuY29uc3QgQ2VsbFR5cGUgPSB7XHJcbiAgU25ha2U6IFwic25ha2VcIixcclxuICBGb29kOiBcImZvb2RcIixcclxuICBFbXB0eTogXCJlbXB0eVwiLFxyXG59O1xyXG5cclxuY29uc3QgRGlyZWN0aW9uID0ge1xyXG4gIExlZnQ6IHsgeDogLTEsIHk6IDAgfSxcclxuICBSaWdodDogeyB4OiAxLCB5OiAwIH0sXHJcbiAgVG9wOiB7IHg6IDAsIHk6IC0xIH0sXHJcbiAgQm90dG9tOiB7IHg6IDAsIHk6IDEgfSxcclxufTtcclxuXHJcbmNvbnN0IENlbGwgPSAoeyB4LCB5LCB0eXBlIH0pID0+IHtcclxuICBjb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBDZWxsVHlwZS5TbmFrZTpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd2dyZWVuXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjYXNlIENlbGxUeXBlLkZvb2Q6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJkYXJrb3JhbmdlXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxyXG4gICAgICAgICAgd2lkdGg6IDMyLFxyXG4gICAgICAgICAgaGVpZ2h0OiAzMixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jZWxsQ29udGFpbmVyfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGxlZnQ6IHggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgdG9wOiB5ICogQ29uZmlnLmNlbGxTaXplLFxyXG4gICAgICAgIHdpZHRoOiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgaGVpZ2h0OiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VsbH0gc3R5bGU9e2dldFN0eWxlcygpfT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSYW5kb21DZWxsID0gKCkgPT4gKHtcclxuICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDb25maWcud2lkdGgpLFxyXG4gIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENvbmZpZy53aWR0aCksXHJcbn0pO1xyXG5cclxuY29uc3QgU25ha2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2V0RGVmYXVsdFNuYWtlID0gKCkgPT4gW1xyXG4gICAgeyB4OiA4LCB5OiAxMiB9LFxyXG4gICAgeyB4OiA3LCB5OiAxMiB9LFxyXG4gICAgeyB4OiA2LCB5OiAxMiB9LFxyXG4gIF07XHJcbiAgY29uc3QgZ3JpZCA9IHVzZVJlZigpO1xyXG5cclxuICAvLyBzbmFrZVswXSBpcyBoZWFkIGFuZCBzbmFrZVtzbmFrZS5sZW5ndGggLSAxXSBpcyB0YWlsXHJcbiAgY29uc3QgW3NuYWtlLCBzZXRTbmFrZV0gPSB1c2VTdGF0ZShnZXREZWZhdWx0U25ha2UoKSk7XHJcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKERpcmVjdGlvbi5SaWdodCk7XHJcblxyXG4gIGNvbnN0IFtmb29kLCBzZXRGb29kXSA9IHVzZVN0YXRlKHsgeDogNCwgeTogMTAgfSk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgLy8gbW92ZSB0aGUgc25ha2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcnVuU2luZ2xlU3RlcCA9ICgpID0+IHtcclxuICAgICAgc2V0U25ha2UoKHNuYWtlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgICAgIGNvbnN0IG5ld0hlYWQgPSB7IHg6IGhlYWQueCArIGRpcmVjdGlvbi54LCB5OiBoZWFkLnkgKyBkaXJlY3Rpb24ueSB9O1xyXG5cclxuICAgICAgICAvLyBtYWtlIGEgbmV3IHNuYWtlIGJ5IGV4dGVuZGluZyBoZWFkXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvT3BlcmF0b3JzL1NwcmVhZF9zeW50YXhcclxuICAgICAgICBjb25zdCBuZXdTbmFrZSA9IFtuZXdIZWFkLCAuLi5zbmFrZV07XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0YWlsXHJcbiAgICAgICAgaWYgKCFpc0Zvb2QobmV3SGVhZCkpIG5ld1NuYWtlLnBvcCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U25ha2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBydW5TaW5nbGVTdGVwKCk7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKHJ1blNpbmdsZVN0ZXAsIDUwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH0sIFtkaXJlY3Rpb24sIGZvb2RdKTtcclxuXHJcbiAgLy8gdXBkYXRlIHNjb3JlIHdoZW5ldmVyIGhlYWQgdG91Y2hlcyBhIGZvb2RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZCA9IHNuYWtlWzBdO1xyXG4gICAgaWYgKGlzRm9vZChoZWFkKSkge1xyXG4gICAgICBzZXRTY29yZSgoc2NvcmUpID0+IHtcclxuICAgICAgICByZXR1cm4gc2NvcmUgKyAxO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBuZXdGb29kID0gZ2V0UmFuZG9tQ2VsbCgpO1xyXG4gICAgICB3aGlsZSAoaXNTbmFrZShuZXdGb29kKSkge1xyXG4gICAgICAgIG5ld0Zvb2QgPSBnZXRSYW5kb21DZWxsKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldEZvb2QobmV3Rm9vZCk7XHJcbiAgICB9XHJcbiAgfSwgW3NuYWtlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICAgIHNldERpcmVjdGlvbihEaXJlY3Rpb24uVG9wKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICBzZXREaXJlY3Rpb24oRGlyZWN0aW9uLkJvdHRvbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgc2V0RGlyZWN0aW9uKERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVOYXZpZ2F0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZU5hdmlnYXRpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gPy4gaXMgY2FsbGVkIG9wdGlvbmFsIGNoYWluaW5nXHJcbiAgLy8gc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9PcGVyYXRvcnMvT3B0aW9uYWxfY2hhaW5pbmdcclxuICBjb25zdCBpc0Zvb2QgPSAoeyB4LCB5IH0pID0+IGZvb2QueCA9PT0geCAmJiBmb29kLnkgPT09IHk7XHJcblxyXG4gIGNvbnN0IGlzU25ha2UgPSAoeyB4LCB5IH0pID0+XHJcbiAgICBzbmFrZS5maW5kKChwb3NpdGlvbikgPT4gcG9zaXRpb24ueCA9PT0geCAmJiBwb3NpdGlvbi55ID09PSB5KTtcclxuXHJcbiAgY29uc3QgY2VsbHMgPSBbXTtcclxuICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53aWR0aDsgeCsrKSB7XHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENvbmZpZy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBsZXQgdHlwZSA9IENlbGxUeXBlLkVtcHR5O1xyXG4gICAgICBpZiAoaXNGb29kKHsgeCwgeSB9KSkge1xyXG4gICAgICAgIHR5cGUgPSBDZWxsVHlwZS5Gb29kO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzU25ha2UoeyB4LCB5IH0pKSB7XHJcbiAgICAgICAgdHlwZSA9IENlbGxUeXBlLlNuYWtlO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGxzLnB1c2goPENlbGwga2V5PXtgJHt4fS0ke3l9YH0geD17eH0geT17eX0gdHlwZT17dHlwZX0gLz4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogQ29uZmlnLndpZHRoICogQ29uZmlnLmNlbGxTaXplIH19XHJcbiAgICAgID5cclxuICAgICAgICBTY29yZToge3Njb3JlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogQ29uZmlnLmhlaWdodCAqIENvbmZpZy5jZWxsU2l6ZSxcclxuICAgICAgICAgIHdpZHRoOiBDb25maWcud2lkdGggKiBDb25maWcuY2VsbFNpemUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjZWxsc31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoU25ha2UpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNuYWtlX2NvbnRhaW5lcl9fMWhldWpcIixcblx0XCJoZWFkZXJcIjogXCJTbmFrZV9oZWFkZXJfXzNreUZ6XCIsXG5cdFwiZ3JpZFwiOiBcIlNuYWtlX2dyaWRfXzJZMVJzXCIsXG5cdFwiY2VsbENvbnRhaW5lclwiOiBcIlNuYWtlX2NlbGxDb250YWluZXJfXzMxU0hFXCIsXG5cdFwiY2VsbFwiOiBcIlNuYWtlX2NlbGxfXzF5RE1qXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJDb25maWciLCJoZWlnaHQiLCJ3aWR0aCIsImNlbGxTaXplIiwiQ2VsbFR5cGUiLCJTbmFrZSIsIkZvb2QiLCJFbXB0eSIsIkRpcmVjdGlvbiIsIkxlZnQiLCJ4IiwieSIsIlJpZ2h0IiwiVG9wIiwiQm90dG9tIiwiQ2VsbCIsInR5cGUiLCJnZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY2VsbENvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJjZWxsIiwiZ2V0UmFuZG9tQ2VsbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldERlZmF1bHRTbmFrZSIsImdyaWQiLCJzbmFrZSIsInNldFNuYWtlIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwiZm9vZCIsInNldEZvb2QiLCJzY29yZSIsInNldFNjb3JlIiwicnVuU2luZ2xlU3RlcCIsImhlYWQiLCJuZXdIZWFkIiwibmV3U25ha2UiLCJpc0Zvb2QiLCJwb3AiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm5ld0Zvb2QiLCJpc1NuYWtlIiwiaGFuZGxlTmF2aWdhdGlvbiIsImV2ZW50Iiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaW5kIiwicG9zaXRpb24iLCJjZWxscyIsInB1c2giLCJjb250YWluZXIiLCJoZWFkZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=