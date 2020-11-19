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
      className: "post-summary",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Y2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Y2FyZCIsInBvc3QiLCJzdHlsZXMiLCJmcm9udG1hdHRlciIsImRhdGUiLCJwYXRobmFtZSIsInNsdWciLCJ0aXRsZSIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FBMEI7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDeEMsc0JBQ0c7QUFBb0IsYUFBUyxFQUFFQywyREFBTSxDQUFDRixRQUF0QztBQUFBLDRCQUNJO0FBQUcsZUFBUyxFQUFDLFdBQWI7QUFBQSxnQkFBMEJDLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRTtBQUFFQyxrQkFBUSxrQkFBV0osSUFBSSxDQUFDSyxJQUFoQjtBQUFWLFNBQVo7QUFBQSwrQkFDSTtBQUFBLG9CQUFJTCxJQUFJLENBQUNFLFdBQUwsQ0FBaUJJO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBT0k7QUFBRyxlQUFTLEVBQUMsY0FBYjtBQUFBLGdCQUE2Qk4sSUFBSSxDQUFDRSxXQUFMLENBQWlCSztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQSxLQUFTUCxJQUFJLENBQUNLLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBV0E7S0FadUJOLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4wMDg2NzQzNGFjNjI1MDA5ZTJlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bvc3RjYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdGNhcmQoe3Bvc3R9KSB7XHJcbiByZXR1cm4gKFxyXG4gICAgPGxpIGtleT17cG9zdC5zbHVnfSBjbGFzc05hbWU9e3N0eWxlcy5Qb3N0Y2FyZH0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+e3Bvc3QuZnJvbnRtYXR0ZXIuZGF0ZX08L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvYmxvZy8ke3Bvc3Quc2x1Z31gIH19PlxyXG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QuZnJvbnRtYXR0ZXIudGl0bGV9PC9hPiBcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0LXN1bW1hcnlcIj57cG9zdC5mcm9udG1hdHRlci5zdW1tYXJ5fTwvcD5cclxuICAgIDwvbGk+XHJcbiApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9