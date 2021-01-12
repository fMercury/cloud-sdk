(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(3),i=n(7),r=(n(0),n(203)),a=n(204),c={id:"how-to-write-documentation",title:"Documentation Guidelines",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Documentation How To",description:"Writing is an art!",keywords:["sap","cloud","sdk"],image:null},s={unversionedId:"dzen/how-to-write-documentation",id:"dzen/how-to-write-documentation",isDocsHomePage:!1,title:"Documentation Guidelines",description:"Writing is an art!",source:"@site/docs/dzen/how-to-write-docs.mdx",slug:"/dzen/how-to-write-documentation",permalink:"/cloud-sdk/docs/dzen/how-to-write-documentation",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/dzen/how-to-write-docs.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1610485642,sidebar_label:"Documentation How To"},l=[{value:"SAP Cloud SDK Documentation Guidelines",id:"sap-cloud-sdk-documentation-guidelines",children:[]},{value:"Markdown Hints",id:"markdown-hints",children:[]},{value:"Take Ownership",id:"take-ownership",children:[]},{value:"General Notes on Writing",id:"general-notes-on-writing",children:[{value:"Basic Recommendations About Writing",id:"basic-recommendations-about-writing",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sap-cloud-sdk-documentation-guidelines"},"SAP Cloud SDK Documentation Guidelines"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you can write code, you can write docs.")),Object(r.b)("h2",{id:"markdown-hints"},"Markdown Hints"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start your page with ",Object(r.b)("inlineCode",{parentName:"li"},"H2")," because ",Object(r.b)("inlineCode",{parentName:"li"},"H1")," is for ",Object(r.b)("inlineCode",{parentName:"li"},"title")," specified in the ",Object(r.b)("inlineCode",{parentName:"li"},"meta-header")),Object(r.b)("li",{parentName:"ul"},"If you need ",Object(r.b)("inlineCode",{parentName:"li"},"Tabs")," or other react components, hoist them to the top of the page after the ",Object(r.b)("inlineCode",{parentName:"li"},"meta-header")),Object(r.b)("li",{parentName:"ul"},"Consider creating snippets for your editor for the most used components like: ",Object(r.b)("inlineCode",{parentName:"li"},"meta-header"),", ",Object(r.b)("inlineCode",{parentName:"li"},"admonitions"),", ",Object(r.b)("inlineCode",{parentName:"li"},"tabs"),", etc"),Object(r.b)("li",{parentName:"ul"},"Run docs locally to ensure your page looks nice.\nSome design ideas in your head may look different with additional context.")),Object(r.b)("h2",{id:"take-ownership"},"Take Ownership"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you see a typo, fix it and make a pull request"),Object(r.b)("li",{parentName:"ul"},"If updating your or someone else's article takes less than 10-15 minutes - just do it."),Object(r.b)("li",{parentName:"ul"},"If something can't be fixed by you - notify the author or the respective team.")),Object(r.b)("h2",{id:"general-notes-on-writing"},"General Notes on Writing"),Object(r.b)("p",null,"People who do not write frequently often struggle with putting words on paper.\nIt's normal.\nA mental-ease will come with practice."),Object(r.b)("h3",{id:"basic-recommendations-about-writing"},"Basic Recommendations About Writing"),Object(r.b)("h4",{id:"write-as-you-speak"},"Write as You Speak"),Object(r.b)("p",null,"Imagine you're explaining what the SAP Cloud SDK does to a friend with enough tech background but without SAP context."),Object(r.b)("p",null,"Many people think writing is different from speaking.\nNot that much.\nSpeaking is the most natural way to transfer information for humans.\nWrite as if you're chatting to someone, answering questions, or asking questions to yourself.\nThen edit where there's a lack of structure."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Such texts are much easier to read and comprehend than those written in cumbersome and complicated ways.")),Object(r.b)("h4",{id:"use-simple-words"},"Use Simple Words"),Object(r.b)("p",null,"Don't try to out-smart yourself.\nUse the most common and simple words to get your point across.\nCheck what others use, if you are not sure.\nBe consistent.\nGoogle a couple of options if in doubt.\nBe careful with acronyms, they may be unknown."),Object(r.b)("h4",{id:"more-active-case"},"More Active Case"),Object(r.b)("p",null,"Passive voice:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Resilience is increased when using circuit breakers.")),Object(r.b)("p",null,"Active voice:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Circuit breakers increase resilience.")),Object(r.b)("p",null,"Active voice helps the reader identify actor, action, and cause.\nYou should prefer the active voice when writing documentation.\nPassive voice can be acceptable when used sparingly."),Object(r.b)("h4",{id:"use-short-sentences"},"Use Short Sentences"),Object(r.b)("p",null,"Make sentences as long as needed, but as short as possible.\nIf you have a second subordinate clause, you should think about splitting the sentence."),Object(r.b)("h4",{id:"use-examples"},"Use Examples"),Object(r.b)("p",null,"Examples are more helpful than abstract terms following each other.\nA good example helps connecting dots between concepts and builds stronger understanding."),Object(r.b)("h4",{id:"build-upon-the-context"},"Build Upon the Context"),Object(r.b)("p",null,"Similar to defining a function for a code, reusing context allows us to reuse already introduced concepts.\nIt makes the explanation more concise, easy to read, and allows for scalable writing.\nMake sure there's just enough context introduced and provide links or reminders where it might be lacking."),Object(r.b)("h4",{id:"use-spelling-and-grammar-checking"},"Use Spelling and Grammar Checking"),Object(r.b)("p",null,"Linting, code style, static analysis, and typos - writing is no different from coding here.\nI found 16 issues in this document after checking it with the free version of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.grammarly.com/"}),"Grammarly"),"."),Object(r.b)("h4",{id:"steal-relentlessly"},'"Steal" Relentlessly'),Object(r.b)("p",null,"Think about if someone has already documented what you now want to document.\nUse it as an example!\nTake parts of it if relevant.\nBe mindful and check copyrights if copying too much.\nBookmark a couple of favorite documentation web-sites and visit them for inspiration.\nThink of Google Cloud SDK, Graph QL, React, etc."),Object(r.b)("h4",{id:"ask-for-review"},"Ask for Review"),Object(r.b)("p",null,"Open a pull request and let us help you."),Object(r.b)("h4",{id:"avoid-variant-reading"},"Avoid Variant Reading"),Object(r.b)("p",null,"Make sure you'll be understood one way and one way only.\nFor example, try to understand and make a single interpretation for ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_ControlInformationtypeodatatype"}),"odata.type meta field"),".\nDon't spend too much time on it."),Object(r.b)("h4",{id:"minimum-viable-product"},"Minimum Viable Product"),Object(r.b)("p",null,"Don't be hard on yourself.\nMake something imperfect and improve with every iteration.\nAny documentation is better than no documentation.\nUse feedback to iterate.\nInvolve collaborators.\nNone of us are professional writers."),Object(r.b)("h4",{id:"inverted-pyramid-style"},"Inverted Pyramid Style"),Object(r.b)("p",null,"Think a bit before getting to the text editor.\nOr start with an outline.\nSame as with structuring your class methods and variables it makes eventual writing much simpler and often faster.\nHere's a method from the journalism world called ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)"}),"inverted pyramid"),".\nIt might be useful for documentation, in the same way, it's useful for news."),Object(r.b)("img",{alt:"Inverted Pyramid of writing",src:Object(a.a)("img/docs/inverted-pyramid.png")}))}d.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(a,".").concat(p)]||d[p]||b[p]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var o=n(21),i=n(205);function r(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,a=r.forcePrependBaseUrl,c=void 0!==a&&a,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},205:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}))}}]);