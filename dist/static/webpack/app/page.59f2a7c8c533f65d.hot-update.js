"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Projects.jsx":
/*!*************************************!*\
  !*** ./src/components/Projects.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_images_hill3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/hill3.svg */ \"(app-pages-browser)/./public/images/hill3.svg\");\n/* harmony import */ var _Title_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title.jsx */ \"(app-pages-browser)/./src/components/Title.jsx\");\n/* harmony import */ var _ProjectLeft_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectLeft.jsx */ \"(app-pages-browser)/./src/components/ProjectLeft.jsx\");\n/* harmony import */ var _ProjectRight_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectRight.jsx */ \"(app-pages-browser)/./src/components/ProjectRight.jsx\");\n/* harmony import */ var _data_projects_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/projects.js */ \"(app-pages-browser)/./src/data/projects.js\");\n/* harmony import */ var _hooks_useMediaQuery_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useMediaQuery.jsx */ \"(app-pages-browser)/./src/hooks/useMediaQuery.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Projects = ()=>{\n    _s();\n    const isMdOrLarger = (0,_hooks_useMediaQuery_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"(min-width: 768px)\"); // md breakpoint is 768px\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-stanley-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: _public_images_hill3_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"hill3\",\n                className: \"w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-[8vh]\",\n                id: \"projects\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    text: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: _data_projects_js__WEBPACK_IMPORTED_MODULE_6__.projects.map((project, index)=>{\n                    const ProjectComponent = isMdOrLarger ? index % 2 === 0 ? _ProjectLeft_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _ProjectRight_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _ProjectLeft_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            y: 30\n                        },\n                        whileInView: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        transition: {\n                            type: \"tween\",\n                            duration: 0.5,\n                            delay: index % 5 * 0.2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectComponent, {\n                            image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: project.image,\n                                alt: project.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 24\n                            }, void 0),\n                            name: project.name,\n                            description: project.description,\n                            website: project.website,\n                            github: project.github,\n                            icons: project.icons.map((Icon, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                                    size: 24\n                                }, idx, false, {\n                                    fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 57\n                                }, void 0))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\stanl\\\\OneDrive\\\\Desktop\\\\Coding\\\\Personal Website\\\\stanleylew5.github.io\\\\src\\\\components\\\\Projects.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"t2yVZtKr/JHgIilLN2PHkjeNfZI=\", false, function() {\n    return [\n        _hooks_useMediaQuery_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDbUI7QUFDbEI7QUFDWTtBQUNFO0FBQ0M7QUFDUTtBQUNoQjtBQUV2QyxNQUFNUSxXQUFXOztJQUNmLE1BQU1DLGVBQWVILG9FQUFhQSxDQUFDLHVCQUF1Qix5QkFBeUI7SUFFbkYscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWCxrREFBS0E7Z0JBQUNZLEtBQUtYLGdFQUFLQTtnQkFBRVksS0FBSTtnQkFBUUYsV0FBVTs7Ozs7OzBCQUN6Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQVdHLElBQUc7MEJBQzNCLDRFQUFDWixrREFBS0E7b0JBQUNhLE1BQU07Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDTDswQkFDRUwsdURBQVFBLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQztvQkFDdEIsTUFBTUMsbUJBQW1CVixlQUNyQlMsUUFBUSxNQUFNLElBQ1pmLHdEQUFXQSxHQUNYQyx5REFBWUEsR0FDZEQsd0RBQVdBO29CQUNmLHFCQUNFLDhEQUFDSSxpREFBTUEsQ0FBQ0csR0FBRzt3QkFDWFUsU0FBUzs0QkFBRUMsU0FBUzs0QkFBR0MsR0FBRzt3QkFBRzt3QkFDN0JDLGFBQWE7NEJBQUVGLFNBQVM7NEJBQUdDLEdBQUc7d0JBQUU7d0JBQ2hDRSxZQUFZOzRCQUNWQyxNQUFNOzRCQUNOQyxVQUFVOzRCQUNWQyxPQUFPLFFBQVMsSUFBSzt3QkFDdkI7a0NBRUUsNEVBQUNSOzRCQUNDUyxxQkFBTyw4REFBQzVCLGtEQUFLQTtnQ0FBQ1ksS0FBS0ssUUFBUVcsS0FBSztnQ0FBRWYsS0FBS0ksUUFBUVksSUFBSTs7Ozs7OzRCQUNuREEsTUFBTVosUUFBUVksSUFBSTs0QkFDbEJDLGFBQWFiLFFBQVFhLFdBQVc7NEJBQ2hDQyxTQUFTZCxRQUFRYyxPQUFPOzRCQUN4QkMsUUFBUWYsUUFBUWUsTUFBTTs0QkFDdEJDLE9BQU9oQixRQUFRZ0IsS0FBSyxDQUFDakIsR0FBRyxDQUFDLENBQUNrQixNQUFNQyxvQkFBUSw4REFBQ0Q7b0NBQWVFLE1BQU07bUNBQVhEOzs7Ozs7Ozs7O3VCQVBsRGpCOzs7OztnQkFXVDs7Ozs7Ozs7Ozs7O0FBSVI7R0F4Q01WOztRQUNpQkYsZ0VBQWFBOzs7S0FEOUJFO0FBMENOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzLmpzeD9jZjVlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGhpbGwzIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2hpbGwzLnN2Z1wiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGUuanN4XCI7XHJcbmltcG9ydCBQcm9qZWN0TGVmdCBmcm9tIFwiLi9Qcm9qZWN0TGVmdC5qc3hcIjtcclxuaW1wb3J0IFByb2plY3RSaWdodCBmcm9tIFwiLi9Qcm9qZWN0UmlnaHQuanN4XCI7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL2RhdGEvcHJvamVjdHMuanNcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIi4uL2hvb2tzL3VzZU1lZGlhUXVlcnkuanN4XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBpc01kT3JMYXJnZXIgPSB1c2VNZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogNzY4cHgpXCIpOyAvLyBtZCBicmVha3BvaW50IGlzIDc2OHB4XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXN0YW5sZXktZ3JheS00MDBcIj5cclxuICAgICAgPEltYWdlIHNyYz17aGlsbDN9IGFsdD1cImhpbGwzXCIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi1bOHZoXVwiIGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICA8VGl0bGUgdGV4dD17XCJQcm9qZWN0c1wifSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgUHJvamVjdENvbXBvbmVudCA9IGlzTWRPckxhcmdlclxyXG4gICAgICAgICAgICA/IGluZGV4ICUgMiA9PT0gMFxyXG4gICAgICAgICAgICAgID8gUHJvamVjdExlZnRcclxuICAgICAgICAgICAgICA6IFByb2plY3RSaWdodFxyXG4gICAgICAgICAgICA6IFByb2plY3RMZWZ0O1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cclxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJ0d2VlblwiLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgICAgZGVsYXk6IChpbmRleCAlIDUpICogMC4yLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8UHJvamVjdENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9ezxJbWFnZSBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD17cHJvamVjdC5uYW1lfSAvPn1cclxuICAgICAgICAgICAgICAgIG5hbWU9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgd2Vic2l0ZT17cHJvamVjdC53ZWJzaXRlfVxyXG4gICAgICAgICAgICAgICAgZ2l0aHViPXtwcm9qZWN0LmdpdGh1Yn1cclxuICAgICAgICAgICAgICAgIGljb25zPXtwcm9qZWN0Lmljb25zLm1hcCgoSWNvbiwgaWR4KSA9PiA8SWNvbiBrZXk9e2lkeH0gc2l6ZT17MjR9IC8+KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiaGlsbDMiLCJUaXRsZSIsIlByb2plY3RMZWZ0IiwiUHJvamVjdFJpZ2h0IiwicHJvamVjdHMiLCJ1c2VNZWRpYVF1ZXJ5IiwibW90aW9uIiwiUHJvamVjdHMiLCJpc01kT3JMYXJnZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJpZCIsInRleHQiLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJQcm9qZWN0Q29tcG9uZW50IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwidHlwZSIsImR1cmF0aW9uIiwiZGVsYXkiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIndlYnNpdGUiLCJnaXRodWIiLCJpY29ucyIsIkljb24iLCJpZHgiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Projects.jsx\n"));

/***/ })

});