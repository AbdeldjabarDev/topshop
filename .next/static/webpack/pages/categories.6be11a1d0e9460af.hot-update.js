"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/categories",{

/***/ "./pages/categories.js":
/*!*****************************!*\
  !*** ./pages/categories.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Categories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/store */ \"./state/store.js\");\n/* harmony import */ var _components_ProductsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductsContainer */ \"./components/ProductsContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Categories() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var q = router.query.category;\n    var products = _state_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().products.value.filter(function(e) {\n        return e.category == q;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                lineNumber: 12,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[5%] contetnt-center ml-auto mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl ml-[10%] mb-[2%] \",\n                        children: q\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                        lineNumber: 14,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-auto mr-auto flex border border-red-600 w-[80%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductsContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            products: products,\n                            all: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                            lineNumber: 16,\n                            columnNumber: 1\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                        lineNumber: 15,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                lineNumber: 13,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Categories, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Categories;\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9DO0FBQ0k7QUFDTDtBQUM2QjtBQUNqRCxTQUFTSSxVQUFVLEdBQ2xDOztJQUNJLElBQUlDLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUN4QixJQUFJSyxDQUFDLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRO0lBQzdCLElBQUlDLFFBQVEsR0FBR1AsNkRBQWMsRUFBRSxDQUFDTyxRQUFRLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLFNBQUNDLENBQUMsRUFBSTtRQUFDLE9BQU9BLENBQUMsQ0FBQ0wsUUFBUSxJQUFJRixDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQ3JGLHFCQUNBLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2QkFBNkI7OzBCQUNoRCw4REFBQ2YsdURBQUc7Ozs7b0JBQU87MEJBQ1gsOERBQUNjLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5Q0FBeUM7O2tDQUN4RCw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDRCQUE0QjtrQ0FBRVQsQ0FBQzs7Ozs7NEJBQU87a0NBQ3JELDhEQUFDUSxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsb0RBQW9EO2tDQUNuRSw0RUFBQ1oscUVBQWlCOzRCQUFDTSxRQUFRLEVBQUlBLFFBQVE7NEJBQUVPLEdBQUc7Ozs7O2dDQUFFOzs7Ozs0QkFDeEM7Ozs7OztvQkFFQTs7Ozs7O1lBQ0ksQ0FBQztBQUNYLENBQUM7R0FoQnVCWixVQUFVOztRQUVqQkgsa0RBQVM7OztBQUZGRyxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3JpZXMuanM/YTdiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xyXG5pbXBvcnQgUHJvZHVjdHNDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHNDb250YWluZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcmllcygpXHJcbntcclxuICAgIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGxldCBxID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5O1xyXG4gICAgbGV0IHByb2R1Y3RzID0gc3RvcmUuZ2V0U3RhdGUoKS5wcm9kdWN0cy52YWx1ZS5maWx0ZXIoKGUpPT4ge3JldHVybiBlLmNhdGVnb3J5ID09IHF9KVxyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2xcIj5cclxuPE5hdj48L05hdj5cclxuPGRpdiBjbGFzc05hbWU9XCJtdC1bNSVdIGNvbnRldG50LWNlbnRlciBtbC1hdXRvIG1yLWF1dG9cIj5cclxuPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtbC1bMTAlXSBtYi1bMiVdIFwiPntxfTwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBmbGV4IGJvcmRlciBib3JkZXItcmVkLTYwMCB3LVs4MCVdXCI+XHJcbjxQcm9kdWN0c0NvbnRhaW5lciBwcm9kdWN0cyA9IHtwcm9kdWN0c30gYWxsLz5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuICAgIDwvZGl2PilcclxufSJdLCJuYW1lcyI6WyJOYXYiLCJ1c2VSb3V0ZXIiLCJzdG9yZSIsIlByb2R1Y3RzQ29udGFpbmVyIiwiQ2F0ZWdvcmllcyIsInJvdXRlciIsInEiLCJxdWVyeSIsImNhdGVnb3J5IiwicHJvZHVjdHMiLCJnZXRTdGF0ZSIsInZhbHVlIiwiZmlsdGVyIiwiZSIsImRpdiIsImNsYXNzTmFtZSIsImFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/categories.js\n"));

/***/ })

});