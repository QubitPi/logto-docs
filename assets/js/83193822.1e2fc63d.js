"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[96841],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(59496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),p=s(n),g=o,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,l(l({ref:e},u),{},{components:n})):r.createElement(f,l({ref:e},u))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54946:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var r=n(665),o=n(40151),i=(n(59496),n(49613)),l=["components"],a={},c="GenerateUtils",s={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-generate-utils/index",id:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-generate-utils/index",title:"GenerateUtils",description:"object GenerateUtils",source:"@site/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-generate-utils/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.util/-generate-utils",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-generate-utils/",permalink:"/logto-docs/next/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-generate-utils/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-generate-utils/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"verifyAndParseCodeFromCallbackUri",permalink:"/logto-docs/next/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-callback-uri-utils/verify-and-parse-code-from-callback-uri"},next:{title:"ScopeUtils",permalink:"/logto-docs/next/sdk/Kotlin/kotlin/io.logto.sdk.core.util/-scope-utils/"}},u={},d=[{value:"Functions",id:"functions",level:2}],p={toc:d};function g(t){var e=t.components,n=(0,o.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"generateutils"},"GenerateUtils"),(0,i.kt)("p",null,"object GenerateUtils"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"generateCodeChallenge"),(0,i.kt)("td",{parentName:"tr",align:null},"fun generateCodeChallenge(codeVerifier: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"generateCodeVerifier"),(0,i.kt)("td",{parentName:"tr",align:null},"fun generateCodeVerifier(): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"generateState"),(0,i.kt)("td",{parentName:"tr",align:null},"fun generateState(): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}g.isMDXComponent=!0}}]);