"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[12312],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60062:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],s={sidebar_position:5},l="Explore Management API",c={unversionedId:"docs/tutorials/get-started/explore-management-api",id:"docs/tutorials/get-started/explore-management-api",title:"Explore Management API",description:"Although the Admin Console is a useful tool, it may not be suitable for every scenario, as some features are not currently available through it. In these cases, utilizing the Logto management API can be a helpful solution.",source:"@site/docs/docs/tutorials/get-started/explore-management-api.md",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/explore-management-api",permalink:"/next/docs/tutorials/get-started/explore-management-api",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/explore-management-api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Add role-based access control to protect your resources",permalink:"/next/docs/tutorials/get-started/add-rbac"},next:{title:"Join our discord community",permalink:"/next/docs/tutorials/get-started/join-community"}},u={},p=[{value:"Guide",id:"guide",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"explore-management-api"},"Explore Management API"),(0,r.kt)("p",null,"Although the Admin Console is a useful tool, it may not be suitable for every scenario, as some features are not currently available through it. In these cases, utilizing the Logto management API can be a helpful solution."),(0,r.kt)("p",null,"The Logto Management API is a comprehensive collection of APIs that empower administrators to manage a wide range of identity-related tasks, enforce security policies, and comply with regulations and standards. It offers extensive capabilities for Logto's identity-related back-end services, allowing you to use it as a foundation to build upon and customize to suit your specific needs, without requiring additional implementation."),(0,r.kt)("p",null,"Clicking the 'check out' button will take you to the API resource page. The management API is listed at the top of the resource list and cannot be deleted."),(0,r.kt)("p",null,"Before calling and using the management API, it's important to create a ",(0,r.kt)("strong",{parentName:"p"},"machine-to-machine")," app. To do so, navigate to the 'Applications' section and select 'Create Application.' We'll guide you through the process."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"explore-management-api",src:n(60093).Z,width:"2880",height:"1492"})),(0,r.kt)("h2",{id:"guide"},"Guide"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To create a machine-to-machine app in the Admin Console, follow the tutorial ",(0,r.kt)("a",{parentName:"li",href:"/next/docs/tutorials/get-started/create-and-integrate-the-first-app"},"Create and integrate the first application"),"."),(0,r.kt)("li",{parentName:"ol"},"To obtain an access token for the ",(0,r.kt)("inlineCode",{parentName:"li"},"https://[your-tenant-id].logto.app/api")," Management API and the ",(0,r.kt)("inlineCode",{parentName:"li"},"all")," scope (which grants all permissions), follow the instructions in the ",(0,r.kt)("a",{parentName:"li",href:"/next/docs/recipes/integrate-logto/machine-to-machine"},"Machine-to-machine: Auth with Logto")," guide."),(0,r.kt)("li",{parentName:"ol"},"Interact with the Management API using Bearer authorization and the Access Token.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Usually the Access Token has a short expiration. If you have a local cache, remember to check and fetch a new Access Token if needed before sending requests.")),(0,r.kt)("p",null,"To learn more about use cases and how to effectively utilize the management API, please refer to the '",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/interact-with-management-api"},"Interact with Management API"),"' recipe."))}m.isMDXComponent=!0},60093:function(e,t,n){t.Z=n.p+"assets/images/api-resources-225dd948c0a53676065541a7045b8dd0.png"}}]);