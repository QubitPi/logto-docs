"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[68832],{49613:function(t,e,o){o.d(e,{Zo:function(){return s},kt:function(){return k}});var n=o(59496);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var c=n.createContext({}),d=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},s=function(t){var e=d(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(o),k=r,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return o?n.createElement(m,l(l({ref:e},s),{},{components:o})):n.createElement(m,l({ref:e},s))}));function k(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<a;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},90016:function(t,e,o){o.r(e),o.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=o(665),r=o(40151),a=(o(59496),o(49613)),l=["components"],i={},c="getAccessToken",d={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor",id:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor",title:"getAccessToken",description:"fun getAccessToken(completion: Completion&lt;LogtoException, AccessToken&gt;)",source:"@site/docs/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client",slug:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor",permalink:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoClient",permalink:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/"},next:{title:"getIdTokenClaims",permalink:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-id-token-claims"}},s={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Parameters",id:"parameters-1",level:2}],u={toc:p};function k(t){var e=t.components,o=(0,r.Z)(t,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getaccesstoken"},"getAccessToken"),(0,a.kt)("p",null,"fun getAccessToken(completion: ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.type/-access-token/"},"AccessToken"),">",")"),(0,a.kt)("p",null,"Get Access Token"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"completion"),(0,a.kt)("td",{parentName:"tr",align:null},"the completion which handles the result.")))),(0,a.kt)("p",null,"fun getAccessToken(resource: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, completion: ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.type/-access-token/"},"AccessToken"),">",")"),(0,a.kt)("p",null,"Get Access Token"),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},"the related resource of the retrieving Access Token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"completion"),(0,a.kt)("td",{parentName:"tr",align:null},"the completion which handles the retrieved result.")))))}k.isMDXComponent=!0}}]);