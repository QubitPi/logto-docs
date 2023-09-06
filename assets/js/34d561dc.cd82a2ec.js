"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[78742],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,k=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],c={},s=void 0,d={unversionedId:"sdk/JavaScript/js/functions/function.decodeIdToken",id:"version-1.x/sdk/JavaScript/js/functions/function.decodeIdToken",title:"function.decodeIdToken",description:"decodeIdToken(token): IdTokenClaims",source:"@site/versioned_docs/version-1.x/sdk/JavaScript/js/functions/function.decodeIdToken.md",sourceDirName:"sdk/JavaScript/js/functions",slug:"/sdk/JavaScript/js/functions/function.decodeIdToken",permalink:"/logto-docs/sdk/JavaScript/js/functions/function.decodeIdToken",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/JavaScript/js/functions/function.decodeIdToken.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"function.decodeAccessToken",permalink:"/logto-docs/sdk/JavaScript/js/functions/function.decodeAccessToken"},next:{title:"function.fetchOidcConfig",permalink:"/logto-docs/sdk/JavaScript/js/functions/function.fetchOidcConfig"}},l={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"decodeIdToken"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"token"),"): ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/sdk/JavaScript/js/type-aliases/type-alias.IdTokenClaims"},(0,a.kt)("inlineCode",{parentName:"a"},"IdTokenClaims"))),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"token")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/logto-docs/sdk/JavaScript/js/type-aliases/type-alias.IdTokenClaims"},(0,a.kt)("inlineCode",{parentName:"a"},"IdTokenClaims"))),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/54d7193/packages/js/src/utils/id-token.ts#L83"},"src/utils/id-token.ts:83")))}f.isMDXComponent=!0}}]);