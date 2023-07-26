"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[27555],{49613:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var o=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=o.createContext({}),s=function(t){var e=o.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(n),k=a,u=m["".concat(d,".").concat(k)]||m[k]||p[k]||r;return n?o.createElement(u,i(i({ref:e},c),{},{components:n})):o.createElement(u,i({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8352:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={},d="WebSocialSession",s={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.web/-web-social-session/index",id:"version-1.x/sdk/Kotlin/android/io.logto.sdk.android.auth.social.web/-web-social-session/index",title:"WebSocialSession",description:"class WebSocialSession(val context String, val callbackUri Completion&lt;SocialException, String&gt;) : SocialSession",source:"@site/versioned_docs/version-1.x/sdk/Kotlin/android/io.logto.sdk.android.auth.social.web/-web-social-session/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.auth.social.web/-web-social-session",slug:"/sdk/Kotlin/android/io.logto.sdk.android.auth.social.web/-web-social-session/",permalink:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social.web/-web-social-session/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/Kotlin/android/io.logto.sdk.android.auth.social.web/-web-social-session/index.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Companion",permalink:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social.web/-web-social-result-activity/-companion/"},next:{title:"io.logto.sdk.android.auth.social.wechat",permalink:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social.wechat/"}},c={},p=[{value:"Constructors",id:"constructors",level:2},{value:"Functions",id:"functions",level:2},{value:"Properties",id:"properties",level:2}],m={toc:p};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"websocialsession"},"WebSocialSession"),(0,r.kt)("p",null,"class WebSocialSession(val context: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", val redirectTo: ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val callbackUri: ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val completion: ",(0,r.kt)("a",{parentName:"p",href:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,r.kt)("a",{parentName:"p",href:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",") : ",(0,r.kt)("a",{parentName:"p",href:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-session/"},"SocialSession")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WebSocialSession"),(0,r.kt)("td",{parentName:"tr",align:null},"fun WebSocialSession(context: ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", redirectTo: ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", callbackUri: ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,r.kt)("a",{parentName:"td",href:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,r.kt)("a",{parentName:"td",href:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",")")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,r.kt)("td",{parentName:"tr",align:null},"fun handleResult(data: ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/net/Uri.html"},"Uri"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},"open override fun start()")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackUri"),(0,r.kt)("td",{parentName:"tr",align:null},"open override val callbackUri: ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"completion"),(0,r.kt)("td",{parentName:"tr",align:null},"open override val completion: ",(0,r.kt)("a",{parentName:"td",href:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.completion/-completion/"},"Completion"),"<",(0,r.kt)("a",{parentName:"td",href:"/logto-docs/sdk/Kotlin/android/io.logto.sdk.android.auth.social/-social-exception/"},"SocialException"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"open override val context: ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirectTo"),(0,r.kt)("td",{parentName:"tr",align:null},"open override val redirectTo: ",(0,r.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}k.isMDXComponent=!0}}]);