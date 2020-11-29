webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_HeroBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeroBanner */ "./components/HeroBanner.js");
/* harmony import */ var _components_ElevatorPitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ElevatorPitch */ "./components/ElevatorPitch.js");
/* harmony import */ var _components_Portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Portfolio */ "./components/Portfolio.js");
/* harmony import */ var _components_Interests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Interests */ "./components/Interests.js");



var _jsxFileName = "E:\\projects\\gregjwild\\pages\\index.js",
    _this = undefined;






/* Here's what we're rendering in the index */

var Index = function Index(_ref) {
  var posts = _ref.posts,
      title = _ref.title,
      description = _ref.description,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["posts", "title", "description"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: title,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_HeroBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
      strapline: "All things Greg J. Wild, all the time."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ElevatorPitch__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Portfolio__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Interests__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);
/* 
This is a Next function: it fetches data, and returns it as props to the page component.

We're getting data from the siteconfig.json file.
*/

var _c;

$RefreshReg$(_c, "Index");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwb3N0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNkM7QUFBQSxNQUExQ0MsS0FBMEMsUUFBMUNBLEtBQTBDO0FBQUEsTUFBbkNDLEtBQW1DLFFBQW5DQSxLQUFtQztBQUFBLE1BQTVCQyxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxNQUFaQyxLQUFZOztBQUN6RCxzQkFDRSxxRUFBQywwREFBRDtBQUFRLGFBQVMsRUFBRUYsS0FBbkI7QUFBQSw0QkFDSSxxRUFBQyw4REFBRDtBQUFZLGVBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFLSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVZEOztLQUFNRixLOztBQVlTQSxvRUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTYzY2YyNzYyNjk3Njg0M2QwMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSGVyb0Jhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvQmFubmVyXCI7XG5pbXBvcnQgRWxldmF0b3JQaXRjaCBmcm9tIFwiLi4vY29tcG9uZW50cy9FbGV2YXRvclBpdGNoXCI7XG5pbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcnRmb2xpb1wiO1xuaW1wb3J0IEludGVyZXN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRlcmVzdHNcIjtcblxuLyogSGVyZSdzIHdoYXQgd2UncmUgcmVuZGVyaW5nIGluIHRoZSBpbmRleCAqL1xuY29uc3QgSW5kZXggPSAoeyBwb3N0cywgdGl0bGUsIGRlc2NyaXB0aW9uLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e3RpdGxlfT5cbiAgICAgICAgPEhlcm9CYW5uZXIgc3RyYXBsaW5lPVwiQWxsIHRoaW5ncyBHcmVnIEouIFdpbGQsIGFsbCB0aGUgdGltZS5cIi8+XG4gICAgICAgIDxFbGV2YXRvclBpdGNoIC8+XG4gICAgICAgIDxQb3J0Zm9saW8gLz5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgPEludGVyZXN0cyAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbi8qIFxuVGhpcyBpcyBhIE5leHQgZnVuY3Rpb246IGl0IGZldGNoZXMgZGF0YSwgYW5kIHJldHVybnMgaXQgYXMgcHJvcHMgdG8gdGhlIHBhZ2UgY29tcG9uZW50LlxuXG5XZSdyZSBnZXR0aW5nIGRhdGEgZnJvbSB0aGUgc2l0ZWNvbmZpZy5qc29uIGZpbGUuXG4qL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBTaXRlIEluZm9cbiAgY29uc3QgY29uZmlnRGF0YSA9IGF3YWl0IGltcG9ydChgLi4vc2l0ZWNvbmZpZy5qc29uYClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGl0bGU6IGNvbmZpZ0RhdGEuZGVmYXVsdC50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjb25maWdEYXRhLmRlZmF1bHQuZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==