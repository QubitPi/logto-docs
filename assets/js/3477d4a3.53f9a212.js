"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[32771],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82019:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],s={sidebar_position:1.1},c="Design Strategy",l={unversionedId:"docs/references/sdk-convention/design-strategy",id:"docs/references/sdk-convention/design-strategy",title:"Design Strategy",description:"- Every programming language should have an isolated git repository named $.",source:"@site/docs/docs/references/sdk-convention/design-strategy.md",sourceDirName:"docs/references/sdk-convention",slug:"/docs/references/sdk-convention/design-strategy",permalink:"/logto-docs/next/docs/references/sdk-convention/design-strategy",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/sdk-convention/design-strategy.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"docsSidebar",previous:{title:"\ud83d\udcc3 SDK Convention",permalink:"/logto-docs/next/docs/references/sdk-convention/"},next:{title:"Core",permalink:"/logto-docs/next/docs/references/sdk-convention/core-sdk-convention"}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"design-strategy"},"Design Strategy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every programming language should have an isolated git repository named ",(0,a.kt)("inlineCode",{parentName:"li"},"${language}"),"."),(0,a.kt)("li",{parentName:"ul"},"Each programming language repository should be a mono repo."),(0,a.kt)("li",{parentName:"ul"},"Both SDKs and their associated sample projects should be placed under this repository.")),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"js (core)"),(0,a.kt)("li",{parentName:"ul"},"react"),(0,a.kt)("li",{parentName:"ul"},"react-sample"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Kotlin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kotlin (core)"),(0,a.kt)("li",{parentName:"ul"},"android"),(0,a.kt)("li",{parentName:"ul"},"android-sample"))))}m.isMDXComponent=!0}}]);