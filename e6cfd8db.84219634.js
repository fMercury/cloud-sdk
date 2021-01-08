(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var o=a(3),r=a(7),n=(a(0),a(203)),i={id:"video-tutorial-about-calling-odata-v4-services-via-type-safe-client",title:"Video Tutorial: Use the Type-Safe OData v4 Client",sidebar_label:"Use OData v4 Client",description:"You will learn how to make calls to OData v4 services in a fluent and type-safe way by leveraging type-safe client provided by sap cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c={unversionedId:"java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client",id:"java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client",isDocsHomePage:!1,title:"Video Tutorial: Use the Type-Safe OData v4 Client",description:"You will learn how to make calls to OData v4 services in a fluent and type-safe way by leveraging type-safe client provided by sap cloud SDK for Java.",source:"@site/docs/java/video/use-odata-v4-client.mdx",slug:"/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/video/use-odata-v4-client.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1610106095,sidebar_label:"Use OData v4 Client",sidebar:"someSidebar",previous:{title:"Video Tutorial: Generate Your Type-Safe OData Client",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloud-sdk-for-java"},next:{title:"Troubleshooting Frequent Problems",permalink:"/cloud-sdk/docs/java/sdk-java-troubleshooting-frequent-problems"}},l=[{value:"Looking for More?",id:"looking-for-more",children:[]}],s={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Let's imaging you're building an app in the SAP Cloud Platform.\nYour app calls OData v4 APIs from one or many SAP services exposed by SAP S/4HANA, SAP SuccessFactors, SAP Cloud for Customer, and others.\nOData v4 is a complex protocol based on REST that has a pretty steep learning curve.\nEvery service is unique and can choose what API features to expose.\nYou can shorten your path to success by leveraging a type-safe OData v4 client from the SAP Cloud SDK for Java and discover available APIs directly from your IDE."),Object(n.b)("p",null,"To simplify it, we recorded this Community Call session about using a type-safe client for Java.\nEnjoy the hands-on experience delivered by SAP Cloud SDK developers!"),Object(n.b)("div",{class:"sdk-video-container"},Object(n.b)("iframe",{class:"sdk-video",src:"https://youtube.com/embed/p_JTapzii_I?start=937",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h2",{id:"looking-for-more"},"Looking for More?"),Object(n.b)("p",null,"Check out our ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"}),"docs for OData v4 client"),"."))}u.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},v=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(a),v=o,f=d["".concat(i,".").concat(v)]||d[v]||p[v]||n;return a?r.a.createElement(f,c(c({ref:t},s),{},{components:a})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<n;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}v.displayName="MDXCreateElement"}}]);