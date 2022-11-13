"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/store */ \"./state/store.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_CartProductCont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CartProductCont */ \"./components/CartProductCont.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Cart(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), empty = ref[0], setEmpty = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (_state_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getState().cart.value.length == 0) setEmpty(true);\n        return _state_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].subscribe(function() {\n            if (_state_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getState().cart.value.length == 0) setEmpty(true);\n        });\n    });\n    if (empty) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[50%] ml-auto mr-auto border border-black rounded-md h-[50vh] flex shadow-lg mt-[15%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-auto mr-auto text-lg mt-[23%] text-xl\",\n                    children: \"You have no items in your cart\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[50%] ml-auto mr-auto border border-black rounded-md shadow-lg flex flex-col mt-[10%] gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col ml-[10%]\",\n                        children: _state_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getState().cart.value.map(function(e, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartProductCont__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                product: e,\n                                count: i\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                                lineNumber: 34,\n                                columnNumber: 66\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border border-red-400 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-green-600 p-3 rounded-md font-semibold ml-auto mr-auto text-white\",\n                            children: \"Confirm\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\cart.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Cart, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Cart;\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWtDO0FBQ0M7QUFDd0I7QUFDaEI7QUFDNUIsU0FBU0ssSUFBSSxDQUFDQyxLQUFLLEVBQ2xDOzs7SUFDSSxJQUF1QkYsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFqQ0csS0FBSyxHQUFhSCxHQUFlLEdBQTVCLEVBQUNJLFFBQVEsR0FBSUosR0FBZSxHQUFuQjtJQUNwQkQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ2IsSUFBR0gsNkRBQWMsRUFBRSxDQUFDVSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxJQUFJLENBQUMsRUFDM0NKLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLE9BQVFSLDhEQUFlLENBQUMsV0FBSTtZQUN4QixJQUFHQSw2REFBYyxFQUFFLENBQUNVLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUMxQ0osUUFBUSxDQUFDLElBQUksQ0FBQztRQUVsQixDQUFDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVGLElBQUdELEtBQUssRUFDUixxQkFDSSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzswQkFDeEMsOERBQUNkLHVEQUFHOzs7O29CQUFPOzBCQUNYLDhEQUFDYSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMseUZBQXlGOzBCQUN4Ryw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDBDQUEwQzs4QkFBQyxnQ0FBOEI7Ozs7O3dCQUFNOzs7OztvQkFDeEY7Ozs7OztZQUVKLENBRVQ7SUFDRCxxQkFDSSw4REFBQ0QsS0FBRztRQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzswQkFDeEMsOERBQUNkLHVEQUFHOzs7O29CQUFPOzBCQUNYLDhEQUFDYSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsK0ZBQWdHOztrQ0FDM0csOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx3QkFBd0I7a0NBQ3RDZiw2REFBYyxFQUFFLENBQUNVLElBQUksQ0FBQ0MsS0FBSyxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEVBQUk7NEJBQUMscUJBQU8sOERBQUNoQixtRUFBZTtnQ0FBQ2lCLE9BQU8sRUFBRUYsQ0FBQztnQ0FBRUcsS0FBSyxFQUFFRixDQUFDOzs7OztxQ0FBRzt3QkFBQSxDQUFDLENBQUM7Ozs7OzRCQUNyRjtrQ0FFTiw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDZCQUE2QjtrQ0FDeEMsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxzRUFBc0U7c0NBQUMsU0FBTzs7Ozs7Z0NBQU07Ozs7OzRCQUNqRzs7Ozs7O29CQUNKOzs7Ozs7WUFFSixDQUNUO0FBQ0wsQ0FBQztHQXZDdUJWLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJ0LmpzP2Y0NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCJcclxuaW1wb3J0IENhcnRQcm9kdWN0Q29udCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJ0UHJvZHVjdENvbnRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydChwcm9wcylcclxue1xyXG4gICAgbGV0IFtlbXB0eSxzZXRFbXB0eV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoc3RvcmUuZ2V0U3RhdGUoKS5jYXJ0LnZhbHVlLmxlbmd0aCA9PSAwKVxyXG4gICBzZXRFbXB0eSh0cnVlKTtcclxuICAgIHJldHVybiAgc3RvcmUuc3Vic2NyaWJlKCgpPT57XHJcbiAgICAgICAgaWYoc3RvcmUuZ2V0U3RhdGUoKS5jYXJ0LnZhbHVlLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIHNldEVtcHR5KHRydWUpXHJcblxyXG4gICAgfSlcclxuICAgfSk7XHJcbiAgIFxyXG4gICAgaWYoZW1wdHkpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPE5hdj48L05hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs1MCVdIG1sLWF1dG8gbXItYXV0byBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgaC1bNTB2aF0gZmxleCBzaGFkb3ctbGcgbXQtWzE1JV1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG8gdGV4dC1sZyBtdC1bMjMlXSB0ZXh0LXhsXCI+WW91IGhhdmUgbm8gaXRlbXMgaW4geW91ciBjYXJ0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxOYXY+PC9OYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNTAlXSBtbC1hdXRvIG1yLWF1dG8gYm9yZGVyIGJvcmRlci1ibGFjayAgcm91bmRlZC1tZCBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCBtdC1bMTAlXSBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1sLVsxMCVdXCI+XHJcbiAgICAgICAgICAgICAgICB7c3RvcmUuZ2V0U3RhdGUoKS5jYXJ0LnZhbHVlLm1hcCgoZSxpKT0+IHtyZXR1cm4gPENhcnRQcm9kdWN0Q29udCBwcm9kdWN0PXtlfSBjb3VudD17aX0vPn0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXIgYm9yZGVyLXJlZC00MDAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmVlbi02MDAgcC0zIHJvdW5kZWQtbWQgZm9udC1zZW1pYm9sZCBtbC1hdXRvIG1yLWF1dG8gdGV4dC13aGl0ZVwiPkNvbmZpcm08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsic3RvcmUiLCJOYXYiLCJDYXJ0UHJvZHVjdENvbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnQiLCJwcm9wcyIsImVtcHR5Iiwic2V0RW1wdHkiLCJnZXRTdGF0ZSIsImNhcnQiLCJ2YWx1ZSIsImxlbmd0aCIsInN1YnNjcmliZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImUiLCJpIiwicHJvZHVjdCIsImNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cart.js\n"));

/***/ })

});