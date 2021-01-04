(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),o=n(7),r=(n(0),n(205)),a=n(207),c={title:"On-Premise Connectivity",sidebar_label:"On-Premise Systems",description:"How to connect to SAP S/4HANA On-Premise systems using the SAP Cloud SDK",keywords:["sap","cloud","sdk","On-Premise","connectivity","JavaScript","TypeScript"]},s={unversionedId:"js/features/connectivity/on-premise",id:"js/features/connectivity/on-premise",isDocsHomePage:!1,title:"On-Premise Connectivity",description:"How to connect to SAP S/4HANA On-Premise systems using the SAP Cloud SDK",source:"@site/docs/js/features/connectivity/on-premise.mdx",slug:"/js/features/connectivity/on-premise",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/on-premise.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1609755752,sidebar_label:"On-Premise Systems",sidebar:"someSidebar",previous:{title:"Generic HTTP Client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client"},next:{title:"OpenAPI Overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview"}},l=[{value:"Why On-Premise Systems Are Different",id:"why-on-premise-systems-are-different",children:[]},{value:"Implementation Details",id:"implementation-details",children:[{value:"Connectivity Service",id:"connectivity-service",children:[]},{value:"Principal Propagation",id:"principal-propagation",children:[]},{value:"Multiple Cloud Connectors",id:"multiple-cloud-connectors",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"why-on-premise-systems-are-different"},"Why On-Premise Systems Are Different"),Object(r.b)("p",null,"The crucial problem with SAP S/4HANA On-Premise systems is, that they are not exposed to the internet.\nTypically, they are located within a company's internal network.\nThe SAP Cloud SDK has some useful features that allow you to connect to On-Premise systems."),Object(r.b)("p",null,"Since this isolation contradicts to modern requirements of data availability, SAP has introduced the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector"}),"Cloud Connector"),".\nThe Cloud Connector works like a reverse proxy opening a connection between some allowlisted service endpoints of the On-Premise system, and the connected Cloud Foundry account.\nOnly applications running in the connected Cloud Foundry account can access the services.\nApplications that are supposed to access On-Premise systems need a binding to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.cloudfoundry.org/the-foundry/sap-cloud-platform-service-connectivity/"}),"connectivity service"),"."),Object(r.b)("img",{alt:"Destination in CF",src:Object(a.a)("img/on-premise-connectivity.png"),class:"center",width:"100%"}),Object(r.b)("h2",{id:"implementation-details"},"Implementation Details"),Object(r.b)("h3",{id:"connectivity-service"},"Connectivity Service"),Object(r.b)("p",null,"As a first step, the SAP Cloud SDK ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/destination"}),"looks up the destination"),".\nIf the ",Object(r.b)("inlineCode",{parentName:"p"},"Proxy Type")," of the destination is ",Object(r.b)("inlineCode",{parentName:"p"},"OnPremise")," the SAP Cloud SDK will try to establish a connection via the Cloud Connector."),Object(r.b)("p",null,"As mentioned above, the application needs a service binding to the connectivity service.\nA service binding leads to client credentials in the ",Object(r.b)("inlineCode",{parentName:"p"},"VCAP")," environment variable.\nThe environment variables are accessible for the application at runtime.\nThe SAP Cloud SDK uses the client credentials and if given the tenant id of the JWT to obtain a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://help.sap.com/viewer/8d8be6a74e4e49589a546c02ee193741/latest/en-US/f1eff1dd7907469491989b3a36e6a7c6.html"}),"client credentials grant."),"\nIf multiple connectivity services bindings exist, the SAP Cloud SDK uses the first entry per default."),Object(r.b)("p",null,"The SAP Cloud SDK takes the client grant to call the connectivity service and receives the host, password, and authorization of the connectivity proxy.\nThen the SAP Cloud SDK creates an HTTP agent considering this proxy and the necessary ",Object(r.b)("inlineCode",{parentName:"p"},"Proxy-Authorization")," headers.\nThe proxy is the entry point to the Cloud Connector instance connected the account.\nThe proxy is only reachable from the Cloud Foundry space, so you cannot use that flow for applications running outside of Cloud Foundry.\nThe final destination containing the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/proxy"}),"proxy information")," will look like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JSON"}),'{\nurl: "https://my.onPremise.System.url.com",\nheaders: {...},    //contains authorization headers for the SAP S/4HANA system\nproxyConfiguration?: {\n  host: "connectivity.service.proxy.host"\n  port: 1234\n  protocol: "http"\n  headers?: {\n      Proxy-Authorization: "AuthHeaderForTheProxy"\n    };,\n  }\n}\n')),Object(r.b)("p",null,"and will be used by the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/generic-http-client"}),"HTTP client")," of the SAP Cloud SDK to execute the request.\nWe would like to mention two minor aspects of the SAP Cloud SDK."),Object(r.b)("h3",{id:"principal-propagation"},"Principal Propagation"),Object(r.b)("p",null,"In case the ",Object(r.b)("inlineCode",{parentName:"p"},"Authentication")," property on the destination is ",Object(r.b)("inlineCode",{parentName:"p"},"PrincipalPropagation")," the SAP Cloud SDK adds the ",Object(r.b)("inlineCode",{parentName:"p"},"SAP-Connectivity-Authentication")," header to the request.\nThe header contains user information included in the ",Object(r.b)("inlineCode",{parentName:"p"},"JWT")," and enables user propagation from the cloud application to the SAP S/4HANA system."),Object(r.b)("h3",{id:"multiple-cloud-connectors"},"Multiple Cloud Connectors"),Object(r.b)("p",null,"If you have multiple Cloud Connectors connected to your account, the ",Object(r.b)("inlineCode",{parentName:"p"},"LocationId")," defines which one of these to use for the request.\nIn case the destination contains a ",Object(r.b)("inlineCode",{parentName:"p"},"LocationId")," property, the SAP Cloud SDK adds the ",Object(r.b)("inlineCode",{parentName:"p"},"SAP-Connectivity-SCC-Location_ID")," header to the request."))}d.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,b=d["".concat(a,".").concat(h)]||d[h]||p[h]||r;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var i=n(21),o=n(208);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,a=r.forcePrependBaseUrl,c=void 0!==a&&a,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},208:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))}}]);