"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[54280],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return r?o.createElement(y,i(i({ref:t},l),{},{components:r})):o.createElement(y,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55842:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var o=r(665),n=r(40151),c=(r(59496),r(49613)),i=["components"],a={sidebar_position:5},s="\ud83e\uddd1\u200d\ud83d\udd2c Create your connector",u={unversionedId:"docs/recipes/create-your-connector/README",id:"docs/recipes/create-your-connector/README",title:"\ud83e\uddd1\u200d\ud83d\udd2c Create your connector",description:"Currently, Logto has provided many widely used social sign-in connectors such as WeChat, Alipay, Google, Facebook, etc., and SMS/Email connectors such as AliCloud, SendGrid, and Twilio.",source:"@site/docs/docs/recipes/create-your-connector/README.md",sourceDirName:"docs/recipes/create-your-connector",slug:"/docs/recipes/create-your-connector/",permalink:"/next/docs/recipes/create-your-connector/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/create-your-connector/README.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Custom social connector with standard protocol",permalink:"/next/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols"},next:{title:"Connector file structure",permalink:"/next/docs/recipes/create-your-connector/connector-file-structure"}},l={},p=[],d={toc:p};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"-create-your-connector"},"\ud83e\uddd1\u200d\ud83d\udd2c Create your connector"),(0,c.kt)("p",null,"Currently, Logto has provided many widely used social sign-in connectors such as WeChat, Alipay, Google, Facebook, etc., and SMS/Email connectors such as AliCloud, SendGrid, and Twilio."),(0,c.kt)("p",null,"Here is an architecture diagram illustrating how connectors work with Logto core service."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Connector Framework",src:r(11120).Z,width:"3467",height:"2982"})),(0,c.kt)("p",null,"They should be able to satisfy most users' needs at this stage, but ",(0,c.kt)("em",{parentName:"p"},"we will keep making progress"),". \ud83d\udd25"),(0,c.kt)("p",null,"While we're working on more connectors, you can also develop your connectors. You are encouraged to share your connectors with the whole community."),(0,c.kt)("p",null,"Let's see how to contribute to the Logto project by starting with building a connector. \u2615"))}f.isMDXComponent=!0},11120:function(e,t,r){t.Z=r.p+"assets/images/architecture-c628f67a8d13433c5e7101f6aaf525b3.png"}}]);