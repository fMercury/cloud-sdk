(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{194:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||s;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),s=(n(0),n(194)),o={},i={unversionedId:"js/features/odata/v2/select",id:"js/features/odata/v2/select",isDocsHomePage:!1,title:"select",description:"When reading entities, the API offers select( ... ) on the builders.",source:"@site/docs/js/features/odata/v2/select.mdx",slug:"/js/features/odata/v2/select",permalink:"/cloud-sdk/docs/js/features/odata/v2/select",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v2/select.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1607520553},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"When reading entities, the API offers ",Object(s.b)("inlineCode",{parentName:"p"},"select( ... )")," on the builders.\nThrough it, the query parameters ",Object(s.b)("inlineCode",{parentName:"p"},"$select")," and ",Object(s.b)("inlineCode",{parentName:"p"},"$expand")," are set.\nIt restricts the response to the given selection of properties in the request."),Object(s.b)("p",null,"The properties that can be selected or expanded are represented via static fields on the entity class.\nSo there will be a field for each property.\nE.g. the business partner entity has ",Object(s.b)("inlineCode",{parentName:"p"},"BusinessPartner.FIRST_NAME")," as a representation of a property and ",Object(s.b)("inlineCode",{parentName:"p"},"BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS")," as a representation of a navigation property."),Object(s.b)("p",null,"A navigation property means that there is a relation between a business partner and their addresses.\nIn this case, one business partner can have multiple addresses.\nIn SAP S/4HANA, navigation properties typically start with ",Object(s.b)("inlineCode",{parentName:"p"},"TO_"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.LAST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(destination);\n")),Object(s.b)("p",null,"The above translates to the following query parameters:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"$select=FirstName,LastName,to_BusinessPartnerAddress/*&$expand=to_BusinessPartnerAddress\n")),Object(s.b)("p",null,"One can also select properties of the expanded navigation property:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS.select(\n      BusinessPartnerAddress.ADDRESS_ID,\n      BusinessPartnerAddress.CITY_CODE\n    )\n  )\n  .execute(destination);\n")),Object(s.b)("p",null,"The above translates to the following query parameters:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"$select=FirstName,to_BusinessPartnerAddress/AddressID,to_BusinessPartnerAddress/CityCode&$expand=to_BusinessPartnerAddress\n")))}p.isMDXComponent=!0}}]);