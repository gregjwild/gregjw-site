(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"5Yp1":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("Ff2n"),a=n("nKUr"),o=n("8Kt/"),i=n.n(o),c=n("YFqc"),s=n.n(c),u=n("FZLu"),l=n.n(u);function f(){return Object(a.jsxs)("header",{className:l.a.header,children:[Object(a.jsx)("h1",{children:"Greg J. Wild"}),Object(a.jsxs)("nav",{children:[Object(a.jsx)(s.a,{href:"/",children:Object(a.jsx)("a",{className:l.a.navItem,children:"Home"})}),Object(a.jsx)(s.a,{href:"/blog",children:Object(a.jsx)("a",{className:l.a.navItem,children:"Blog"})})]})]})}var d=n("vRNQ"),p=n.n(d);function h(e){var t=e.children,n=e.pageTitle;Object(r.a)(e,["children","pageTitle"]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(i.a,{children:[Object(a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(a.jsx)("title",{children:n}),Object(a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",rel:"stylesheet"}),Object(a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"})]}),Object(a.jsx)(f,{}),Object(a.jsx)("main",{className:p.a.main,children:Object(a.jsx)("section",{children:Object(a.jsx)("div",{children:t})})}),Object(a.jsxs)("footer",{className:p.a.footer,children:[Object(a.jsxs)("p",{children:["This work is licensed under a ",Object(a.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:" Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License."}),"i.e. feel free to use it, modify it, and share it, but please attribute it to me, and use this license yourself. If by some small chance you think there's a way to monetize anything, let's talk!"]}),Object(a.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:Object(a.jsx)("img",{alt:"Creative Commons Licence",style:{borderWidth:0},src:"https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"})})]})]})}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var u=d[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],f=r[u]||new Set;f.has(l)?o=!1:(f.add(l),r[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FZLu:function(e,t,n){e.exports={header:"Header_header__260ft",navItem:"Header_navItem__27E-S"}},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),a=n&&n.pathname||"/",o=i.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),u=o.href,h=o.as,m=e.children,v=e.replace,y=e.shallow,b=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var j=i.Children.only(m),O=j&&"object"===typeof j&&j.ref,x=i.default.useRef(),w={ref:i.default.useCallback((function(e){(x.current&&(x.current(),x.current=void 0),t&&l&&e&&e.tagName&&(0,c.isLocalURL)(u))&&(f[u+"%"+h]||(x.current=d(e,(function(){p(n,u,h,{locale:"undefined"!==typeof g?g:n&&n.locale})}))));O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[t,O,u,h,n,g]),onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,u,h,v,y,b,g)}};return t&&(w.onMouseEnter=function(e){(0,c.isLocalURL)(u)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),p(n,u,h,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(w.href=(0,c.addBasePath)((0,c.addLocale)(h,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(j,w)};t.default=h},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vRNQ:function(e,t,n){e.exports={header:"Home_header__3vlZW",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD"}}}]);