"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[62998],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,g=f["".concat(a,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},55679:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(665),o=r(40151),i=(r(59496),r(49613)),c=["components"],l={},a=void 0,u={unversionedId:"sdk/Swift/LogtoClient/Structs/LogtoError",id:"sdk/Swift/LogtoClient/Structs/LogtoError",title:"LogtoError",description:"STRUCT",source:"@site/docs/sdk/Swift/LogtoClient/Structs/LogtoError.md",sourceDirName:"sdk/Swift/LogtoClient/Structs",slug:"/sdk/Swift/LogtoClient/Structs/LogtoError",permalink:"/logto-docs/next/sdk/Swift/LogtoClient/Structs/LogtoError",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/LogtoClient/Structs/LogtoError.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoConfig",permalink:"/logto-docs/next/sdk/Swift/LogtoClient/Structs/LogtoConfig"},next:{title:"LogtoClientErrorTypes",permalink:"/logto-docs/next/sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>type</code>",id:"type",level:3},{value:"<code>innerError</code>",id:"innererror",level:3}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STRUCT")),(0,i.kt)("h1",{id:"logtoerror"},(0,i.kt)("inlineCode",{parentName:"h1"},"LogtoError")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public struct LogtoError<T>: LocalizedError\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let type: T\n")),(0,i.kt)("h3",{id:"innererror"},(0,i.kt)("inlineCode",{parentName:"h3"},"innerError")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let innerError: Error?\n")))}d.isMDXComponent=!0}}]);