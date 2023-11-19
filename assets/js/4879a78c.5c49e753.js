"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[69048],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=o,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36888:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(665),o=r(40151),a=(r(59496),r(49613)),i=["components"],l={sidebar_position:1},c="\ud83d\udd17 Integrate Logto in your application",s={unversionedId:"docs/recipes/integrate-logto/README",id:"docs/recipes/integrate-logto/README",title:"\ud83d\udd17 Integrate Logto in your application",description:"We provide a bunch of SDKs to let you integrate Logto with your clients with ease. If the list doesn't cover your desired platform / framework, please file a feature request or contribute a new SDK.",source:"@site/docs/docs/recipes/integrate-logto/README.md",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/",permalink:"/logto-docs/next/docs/recipes/integrate-logto/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Rotate signing keys",permalink:"/logto-docs/next/docs/tutorials/using-cli/rotate-signing-keys"},next:{title:"Android",permalink:"/logto-docs/next/docs/recipes/integrate-logto/android/"}},p={},u=[{value:"Native App",id:"native-app",level:2},{value:"Single Page App",id:"single-page-app",level:2},{value:"Traditional Web",id:"traditional-web",level:2},{value:"Machine-to-machine",id:"machine-to-machine",level:2}],d={toc:u};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-integrate-logto-in-your-application"},"\ud83d\udd17 Integrate Logto in your application"),(0,a.kt)("p",null,"We provide a bunch of SDKs to let you integrate Logto with your clients with ease. If the list doesn't cover your desired platform / framework, please file a feature request or contribute a new SDK."),(0,a.kt)("h2",{id:"native-app"},"Native App"),(0,a.kt)("p",null,"An app that runs in a native environment."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/ios/"},"iOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/android/"},"Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/flutter/"},"Flutter"))),(0,a.kt)("p",null,"Usually, Native apps need to talk to an API (resource). Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/next/docs/recipes/protect-your-api/"},"Protect your API")," for authenticating in your API."),(0,a.kt)("h2",{id:"single-page-app"},"Single Page App"),(0,a.kt)("p",null,"An app that runs in a web browser and dynamically updates data in place."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/vanilla-js/"},"Vanilla JS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/react/"},"React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/vue"},"Vue"))),(0,a.kt)("p",null,"Usually, SPAs need to talk to an API (resource). Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/next/docs/recipes/protect-your-api/"},"Protect your API")," for authenticating in your API."),(0,a.kt)("h2",{id:"traditional-web"},"Traditional Web"),(0,a.kt)("p",null,"An app that renders and updates pages by the web server alone. E.g., server-side rending."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/traditional"},"Traditional Web general guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/next-js"},"Next.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/next-js-13/"},"Next.js 13 App Router")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/express/"},"Express")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/go/"},"Go"))),(0,a.kt)("h2",{id:"machine-to-machine"},"Machine-to-machine"),(0,a.kt)("p",null,"An app (usually without UI) that directly talks to resources."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/machine-to-machine"},"Machine-to-machine"))))}g.isMDXComponent=!0}}]);