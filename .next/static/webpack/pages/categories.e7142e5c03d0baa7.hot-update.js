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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Categories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/store */ \"./state/store.js\");\n/* harmony import */ var _components_ProductsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductsContainer */ \"./components/ProductsContainer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Categories() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var q = router.query.category;\n    var products = _state_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getState().products.value.filter(function(e) {\n        return e.category == q;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                lineNumber: 12,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[5%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-3xl\",\n                        children: q\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                        lineNumber: 14,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-auto mr-auto flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductsContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            products: products,\n                            all: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                            lineNumber: 16,\n                            columnNumber: 1\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                        lineNumber: 15,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n                lineNumber: 13,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LEGION\\\\Desktop\\\\stuff2\\\\HTMLandCSS\\\\topshop\\\\pages\\\\categories.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Categories, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Categories;\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW9DO0FBQ0k7QUFDTDtBQUM2QjtBQUNqRCxTQUFTSSxVQUFVLEdBQ2xDOztJQUNJLElBQUlDLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUN4QixJQUFJSyxDQUFDLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRO0lBQzdCLElBQUlDLFFBQVEsR0FBR1AsNkRBQWMsRUFBRSxDQUFDTyxRQUFRLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLFNBQUNDLENBQUMsRUFBSTtRQUFDLE9BQU9BLENBQUMsQ0FBQ0wsUUFBUSxJQUFJRixDQUFDO0lBQUEsQ0FBQyxDQUFDO0lBQ3JGLHFCQUNBLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2QkFBNkI7OzBCQUNoRCw4REFBQ2YsdURBQUc7Ozs7b0JBQU87MEJBQ1gsOERBQUNjLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxTQUFTOztrQ0FDeEIsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxVQUFVO2tDQUFFVCxDQUFDOzs7Ozs0QkFBTztrQ0FDbkMsOERBQUNRLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxzQkFBc0I7a0NBQ3JDLDRFQUFDWixxRUFBaUI7NEJBQUNNLFFBQVEsRUFBSUEsUUFBUTs0QkFBRU8sR0FBRzs7Ozs7Z0NBQUU7Ozs7OzRCQUN4Qzs7Ozs7O29CQUVBOzs7Ozs7WUFDSSxDQUFDO0FBQ1gsQ0FBQztHQWhCdUJaLFVBQVU7O1FBRWpCSCxrREFBUzs7O0FBRkZHLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcmllcy5qcz9hN2JkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0YXRlL3N0b3JlXCI7XHJcbmltcG9ydCBQcm9kdWN0c0NvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0c0NvbnRhaW5lclwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzKClcclxue1xyXG4gICAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IHEgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnk7XHJcbiAgICBsZXQgcHJvZHVjdHMgPSBzdG9yZS5nZXRTdGF0ZSgpLnByb2R1Y3RzLnZhbHVlLmZpbHRlcigoZSk9PiB7cmV0dXJuIGUuY2F0ZWdvcnkgPT0gcX0pXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxyXG48TmF2PjwvTmF2PlxyXG48ZGl2IGNsYXNzTmFtZT1cIm10LVs1JV1cIj5cclxuPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPntxfTwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gbXItYXV0byBmbGV4XCI+XHJcbjxQcm9kdWN0c0NvbnRhaW5lciBwcm9kdWN0cyA9IHtwcm9kdWN0c30gYWxsLz5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuICAgIDwvZGl2PilcclxufSJdLCJuYW1lcyI6WyJOYXYiLCJ1c2VSb3V0ZXIiLCJzdG9yZSIsIlByb2R1Y3RzQ29udGFpbmVyIiwiQ2F0ZWdvcmllcyIsInJvdXRlciIsInEiLCJxdWVyeSIsImNhdGVnb3J5IiwicHJvZHVjdHMiLCJnZXRTdGF0ZSIsInZhbHVlIiwiZmlsdGVyIiwiZSIsImRpdiIsImNsYXNzTmFtZSIsImFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/categories.js\n"));

/***/ })

});