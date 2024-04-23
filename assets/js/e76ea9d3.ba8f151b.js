"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29180],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var o=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),s=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=s(n),k=r,m=u["".concat(c,".").concat(k)]||u[k]||p[k]||a;return n?o.createElement(m,i(i({ref:e},d),{},{components:n})):o.createElement(m,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60637:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={},c="getAccessToken",s={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor",id:"version-1.x/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor",title:"getAccessToken",description:"fun getAccessToken(completion: Completion&lt;LogtoException, AccessToken&gt;)",source:"@site/versioned_docs/version-1.x/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client",slug:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor",permalink:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-access-token-constructor.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoClient",permalink:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/"},next:{title:"getIdTokenClaims",permalink:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/get-id-token-claims"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Parameters",id:"parameters-1",level:2}],u={toc:p};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getaccesstoken"},"getAccessToken"),(0,a.kt)("p",null,"fun getAccessToken(completion: ",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", ",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.type/-access-token/"},"AccessToken"),">",")"),(0,a.kt)("p",null,"Get Access Token"),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"completion"),(0,a.kt)("td",{parentName:"tr",align:null},"the completion which handles the result.")))),(0,a.kt)("p",null,"fun getAccessToken(resource: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, completion: ",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),", ",(0,a.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.type/-access-token/"},"AccessToken"),">",")"),(0,a.kt)("p",null,"Get Access Token"),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},"the related resource of the retrieving Access Token.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"completion"),(0,a.kt)("td",{parentName:"tr",align:null},"the completion which handles the retrieved result.")))))}k.isMDXComponent=!0}}]);