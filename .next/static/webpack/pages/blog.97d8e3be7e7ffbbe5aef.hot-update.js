webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/Postcard.js":
/*!********************************!*\
  !*** ./components/Postcard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Postcard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Postcard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Postcard.module.css */ "./components/Postcard.module.css");
/* harmony import */ var _Postcard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Postcard_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\projects\\gregjwild\\components\\Postcard.js";


function Postcard(_ref) {
  var post = _ref.post;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    className: _Postcard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Postcard,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "post-date",
      children: post.frontmatter.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: "/blog/".concat(post.slug)
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: post.frontmatter.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _Postcard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.postSummary,
      children: post.frontmatter.summary
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this)]
  }, post.slug, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = Postcard;

var _c;

$RefreshReg$(_c, "Postcard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Y2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Y2FyZCIsInBvc3QiLCJzdHlsZXMiLCJmcm9udG1hdHRlciIsImRhdGUiLCJwYXRobmFtZSIsInNsdWciLCJ0aXRsZSIsInBvc3RTdW1tYXJ5Iiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUEwQjtBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUN4QyxzQkFDRztBQUFvQixhQUFTLEVBQUVDLDJEQUFNLENBQUNGLFFBQXRDO0FBQUEsNEJBQ0k7QUFBRyxlQUFTLEVBQUMsV0FBYjtBQUFBLGdCQUEwQkMsSUFBSSxDQUFDRSxXQUFMLENBQWlCQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQUVDLGtCQUFRLGtCQUFXSixJQUFJLENBQUNLLElBQWhCO0FBQVYsU0FBWjtBQUFBLCtCQUNJO0FBQUEsb0JBQUlMLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkk7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFPSTtBQUFHLGVBQVMsRUFBRUwsMkRBQU0sQ0FBQ00sV0FBckI7QUFBQSxnQkFBbUNQLElBQUksQ0FBQ0UsV0FBTCxDQUFpQk07QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUEsS0FBU1IsSUFBSSxDQUFDSyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESDtBQVdBO0tBWnVCTixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuOTdkOGUzYmU3ZTdmZmJiZTVhZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb3N0Y2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RjYXJkKHtwb3N0fSkge1xyXG4gcmV0dXJuIChcclxuICAgIDxsaSBrZXk9e3Bvc3Quc2x1Z30gY2xhc3NOYW1lPXtzdHlsZXMuUG9zdGNhcmR9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtZGF0ZVwiPntwb3N0LmZyb250bWF0dGVyLmRhdGV9PC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiBgL2Jsb2cvJHtwb3N0LnNsdWd9YCB9fT5cclxuICAgICAgICAgICAgICAgIDxhPntwb3N0LmZyb250bWF0dGVyLnRpdGxlfTwvYT4gXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFN1bW1hcnl9Pntwb3N0LmZyb250bWF0dGVyLnN1bW1hcnl9PC9wPlxyXG4gICAgPC9saT5cclxuIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=