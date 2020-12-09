(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(194)),i={id:"overview",title:"OData",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","java","typed","client","generate"]},c={unversionedId:"java/features/odata/overview",id:"java/features/odata/overview",isDocsHomePage:!1,title:"OData",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",source:"@site/docs/java/features/odata/overview.mdx",slug:"/java/features/odata/overview",permalink:"/cloud-sdk/docs/java/features/odata/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/odata/overview.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1607520553,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/cloud-sdk/docs/java/getting-started"},next:{title:"Generate a Typed OData Client With the OData Generator",permalink:"/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java"}},l=[{value:"What Is OData?",id:"what-is-odata",children:[]},{value:"What OData Versions Are Supported?",id:"what-odata-versions-are-supported",children:[]},{value:"What Does the SAP Cloud SDK Offer?",id:"what-does-the-sap-cloud-sdk-offer",children:[{value:"Type-Safe OData Client",id:"type-safe-odata-client",children:[]},{value:"Code Generator",id:"code-generator",children:[]},{value:"Connectivity",id:"connectivity",children:[]}]},{value:"Popular Use-Cases for Type-Safe OData Client",id:"popular-use-cases-for-type-safe-odata-client",children:[{value:"You Are Extending an SAP Product or Service, Building a Middle-Ware, Publishing a Cloud App",id:"you-are-extending-an-sap-product-or-service-building-a-middle-ware-publishing-a-cloud-app",children:[]},{value:"Developing and Publishing OData Service",id:"developing-and-publishing-odata-service",children:[]},{value:"Coding Convention and Inter-Operability",id:"coding-convention-and-inter-operability",children:[]},{value:"Advanced Features and Custom Development",id:"advanced-features-and-custom-development",children:[]}]}],s={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-odata"},"What Is OData?"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.odata.org/"}),"OData")," is an open standard for building and consuming RESTful APIs.\nIt defines a query language to send and retrieve data via HTTP and to perform operations on data."),Object(o.b)("p",null,"There are two widely used versions of the protocol: OData v2 and OData v4.\nThe latter comes with extended and improved functionality.\nYou can find full details on OData standards in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.odata.org/documentation/"}),"documentation"),"."),Object(o.b)("h2",{id:"what-odata-versions-are-supported"},"What OData Versions Are Supported?"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"OData protocol version"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SAP Cloud SDK V3"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"use-typed-odata-v2-client-in-sap-cloud-sdk-for-java"}),"OData v2")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"}),"OData v4")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")))),Object(o.b)("h2",{id:"what-does-the-sap-cloud-sdk-offer"},"What Does the SAP Cloud SDK Offer?"),Object(o.b)("p",null,"The SAP Cloud SDK simplifies the consumption of OData services through the following features:"),Object(o.b)("h3",{id:"type-safe-odata-client"},"Type-Safe OData Client"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We provide a type-safe OData client to build and execute OData requests"),Object(o.b)("li",{parentName:"ul"},"For many popular SAP OData services we ship pre-generated type-safe clients.\nIn the SAP universe, they are called the Virtual Data Model or VDM.\nThe most popular type-safe client module contains a collection of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"}),"all OData services of SAP S/4HANA Cloud")),Object(o.b)("li",{parentName:"ul"},"We support both OData v2 and OData v4 protocols in the SAP Cloud SDK for Java.")),Object(o.b)("h3",{id:"code-generator"},"Code Generator"),Object(o.b)("p",null,"If you need a client for an OData service where we do not ship a pre-generated client use our versatile ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"generate-typed-odata-v2-and-v4-client-for-java"}),"code generator")," to convert OData service definition into the type-safe Java client library.\nYou can do it for any service either developed by yourself, provided by SAP, or other third parties."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Service definition usually comes in form of the ",Object(o.b)("inlineCode",{parentName:"li"},".edmx")," file and contains metadata of OData service.\nThe simplest way to obtain it, if you have access to the service, is navigating to the ",Object(o.b)("inlineCode",{parentName:"li"},"http(s)://<service-path>/$metadata")," endpoint.\nYou can generate a client for any third party service or a service that you've built on your own."),Object(o.b)("li",{parentName:"ul"},"You can invoke code generator via our command-line interface (CLI) or Maven plugin")),Object(o.b)("h3",{id:"connectivity"},"Connectivity"),Object(o.b)("p",null,"We simplify connectivity to SAP enabled OData services via type-safe abstractions over ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../connectivity/sdk-connectivity-destination-service"}),"Destinations"),", Authentication, and some other related concepts."),Object(o.b)("h2",{id:"popular-use-cases-for-type-safe-odata-client"},"Popular Use-Cases for Type-Safe OData Client"),Object(o.b)("h3",{id:"you-are-extending-an-sap-product-or-service-building-a-middle-ware-publishing-a-cloud-app"},"You Are Extending an SAP Product or Service, Building a Middle-Ware, Publishing a Cloud App"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Type-safe consumption of OData services."),"\nBy consumption, we mean building and executing API calls against OData service with serialized request data and processing serialized responses.\nAll in a type-safe way.\nYour code focuses on business logic and leaves lower-level tasks to the SAP Cloud SDK."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Converting OData API into a different flavor of REST API."),"\nYou can use the SAP Cloud SDK for Java to build an app that converts your desired REST format to OData calls and vice versa.\nSuch an app may serve as a proxy, integration adaptor, service gateway, etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Serving as a layer to fetch data from and push data to OData services."),"\nInstead of building your query tool you can fetch the data with the SAP Cloud SDK and pass it on to your UX framework, analytics tool, data converter, etc.\nReverse data flow will allow you to push new or modified data to the OData service for processing or persistence.\nIn that manner, the SAP Cloud SDK can help you implement adapters for a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"}),"hexagonal architecture"),".")),Object(o.b)("h3",{id:"developing-and-publishing-odata-service"},"Developing and Publishing OData Service"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Use the SAP Cloud SDK to create a robust automated testing framework."),"\nYou can create a type-safe client for your own OData service with our generator and scale your automated testing capabilities.\nThis comes with the advantage of updating your client code with ease while your service grows and its metadata evolves."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Shipping your client module with the SAP Cloud SDK for Java."),"\nAs a service developer, you're usually interested in an easy way for your customers to consume your service.\nThat's exactly what the SAP Cloud SDK does.\nWhen your service is finished, you can generate an API client with the SAP Cloud SDK and release it to developers using your service.\nAs an SAP service, you can contribute your API definition via our contribution process.\nOnce accepted, your ",Object(o.b)("strong",{parentName:"li"},"pre-generated type-safe client")," will be shipping as a Maven module of the SAP Cloud SDK.")),Object(o.b)("h3",{id:"coding-convention-and-inter-operability"},"Coding Convention and Inter-Operability"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Making sure different teams in your organization coherently consume OData services."),"\nThe SAP Cloud SDK will help you to save developers' time, ensure best coding practices, and knowledge sharing.\nSuch an approach ensures you won't have duplication of work to save the same problem by different teams and guaranteed high levels of interoperability and integration.")),Object(o.b)("h3",{id:"advanced-features-and-custom-development"},"Advanced Features and Custom Development"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Using certain SAP Cloud SDK features for Custom OData service consumption or publishing."),"\nIf the SAP Cloud SDK's features for OData consumption do not cover your use-case end-to-end, you can still benefit from our public utility and helper methods like OData expression builder, non-type safe request builders, and some others.\nMake sure you know what you're doing because the SAP Cloud SDK can't guarantee convenience and correctness in such a case.")))}d.isMDXComponent=!0},194:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,v=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return a?r.a.createElement(v,c(c({ref:t},s),{},{components:a})):r.a.createElement(v,c({ref:t},s))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);