"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[45202],{49613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var o=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),d=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=d(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(k,a(a({ref:e},c),{},{components:n})):o.createElement(k,a({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32673:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),a=["components"],l={},s="SocialSessionHelper",d={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session-helper/index",id:"sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session-helper/index",title:"SocialSessionHelper",description:"object SocialSessionHelper",source:"@site/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session-helper/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session-helper",slug:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session-helper/",permalink:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session-helper/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session-helper/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"SocialSession",permalink:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session/"},next:{title:"io.logto.sdk.android.auth.social.alipay",permalink:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.auth.social.alipay/"}},c={},p=[{value:"Functions",id:"functions",level:2}],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"socialsessionhelper"},"SocialSessionHelper"),(0,i.kt)("p",null,"object SocialSessionHelper"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"createSocialSession"),(0,i.kt)("td",{parentName:"tr",align:null},"fun createSocialSession(context: ",(0,i.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", redirectTo: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", callbackUri: ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,i.kt)("a",{parentName:"td",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,i.kt)("a",{parentName:"td",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","): ",(0,i.kt)("a",{parentName:"td",href:"/logto-docs/next/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session/"},"SocialSession"),"?")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"getSupportedSocialConnectorIds"),(0,i.kt)("td",{parentName:"tr",align:null},"fun getSupportedSocialConnectorIds(): ",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,i.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">")))))}m.isMDXComponent=!0}}]);