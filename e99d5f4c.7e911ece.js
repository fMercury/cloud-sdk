(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{184:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return d})),r.d(e,"toc",(function(){return f})),r.d(e,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(205)),u=r(210),i=r(207),c={id:"use-typed-odata-v2-and-v4-client-for-java",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},d={unversionedId:"java/features/odata/use-typed-odata-v2-and-v4-client-for-java",id:"java/features/odata/use-typed-odata-v2-and-v4-client-for-java",isDocsHomePage:!1,title:"Redirecting",description:"<Redirect",source:"@site/docs/java/features/odata/redirect-typed-client.mdx",slug:"/java/features/odata/use-typed-odata-v2-and-v4-client-for-java",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v2-and-v4-client-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/odata/redirect-typed-client.mdx",version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1608743347},f=[],s={toc:f};function l(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)(u.Redirect,{to:Object(i.a)("docs/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java"),mdxType:"Redirect"}))}l.isMDXComponent=!0},205:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return v}));var n=r(0),o=r.n(n);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var d=o.a.createContext({}),f=function(t){var e=o.a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=f(t.components);return o.a.createElement(d.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},p=o.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,u=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=f(r),p=n,v=s["".concat(u,".").concat(p)]||s[p]||l[p]||a;return r?o.a.createElement(v,i(i({ref:e},d),{},{components:r})):o.a.createElement(v,i({ref:e},d))}));function v(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,u=new Array(a);u[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,u[1]=i;for(var d=2;d<a;d++)u[d]=r[d];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},207:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return u}));var n=r(21),o=r(208);function a(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var a=void 0===n?{}:n,u=a.forcePrependBaseUrl,i=void 0!==u&&u,c=a.absolute,d=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(i)return e+r;var f=r.startsWith(e)?r:e+r.replace(/^\//,"");return d?t+f:f}(a,r,t,e)}}}function u(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},208:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}))},210:function(t,e,r){"use strict";r.r(e);var n=r(10);r.d(e,"MemoryRouter",(function(){return n.d})),r.d(e,"Prompt",(function(){return n.f})),r.d(e,"Redirect",(function(){return n.g})),r.d(e,"Route",(function(){return n.h})),r.d(e,"Router",(function(){return n.i})),r.d(e,"StaticRouter",(function(){return n.j})),r.d(e,"Switch",(function(){return n.k})),r.d(e,"generatePath",(function(){return n.l})),r.d(e,"matchPath",(function(){return n.m})),r.d(e,"useHistory",(function(){return n.n})),r.d(e,"useLocation",(function(){return n.o})),r.d(e,"useParams",(function(){return n.p})),r.d(e,"useRouteMatch",(function(){return n.q})),r.d(e,"withRouter",(function(){return n.r})),r.d(e,"BrowserRouter",(function(){return n.a})),r.d(e,"HashRouter",(function(){return n.b})),r.d(e,"Link",(function(){return n.c})),r.d(e,"NavLink",(function(){return n.e}))}}]);