"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[56858],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(665),o=n(40151),i=(n(59496),n(49613)),a=["components"],s={sidebar_position:1.1},c="Design Strategy",l={unversionedId:"docs/references/sdk-convention/design-strategy",id:"version-1.x/docs/references/sdk-convention/design-strategy",title:"Design Strategy",description:"- Every programming language should have an isolated git repository named $.",source:"@site/versioned_docs/version-1.x/docs/references/sdk-convention/design-strategy.md",sourceDirName:"docs/references/sdk-convention",slug:"/docs/references/sdk-convention/design-strategy",permalink:"/docs/references/sdk-convention/design-strategy",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/references/sdk-convention/design-strategy.md",tags:[],version:"1.x",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"docsSidebar",previous:{title:"\ud83d\udcc3 SDK Convention",permalink:"/docs/references/sdk-convention/"},next:{title:"Core",permalink:"/docs/references/sdk-convention/core-sdk-convention"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"design-strategy"},"Design Strategy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every programming language should have an isolated git repository named ",(0,i.kt)("inlineCode",{parentName:"li"},"${language}"),"."),(0,i.kt)("li",{parentName:"ul"},"Each programming language repository should be a mono repo."),(0,i.kt)("li",{parentName:"ul"},"Both SDKs and their associated sample projects should be placed under this repository.")),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"js (core)"),(0,i.kt)("li",{parentName:"ul"},"react"),(0,i.kt)("li",{parentName:"ul"},"react-sample"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Kotlin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kotlin (core)"),(0,i.kt)("li",{parentName:"ul"},"android"),(0,i.kt)("li",{parentName:"ul"},"android-sample"))))}m.isMDXComponent=!0}}]);