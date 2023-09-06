"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[41562],{49613:function(e,o,n){n.d(o,{Zo:function(){return u},kt:function(){return f}});var t=n(59496);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function c(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?c(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),l=function(e){var o=t.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},u=function(e){var o=l(e.components);return t.createElement(s.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return n?t.createElement(g,i(i({ref:o},u),{},{components:n})):t.createElement(g,i({ref:o},u))}));function f(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var s in o)hasOwnProperty.call(o,s)&&(a[s]=o[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1443:function(e,o,n){n.r(o),n.d(o,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var t=n(665),r=n(40151),c=(n(59496),n(49613)),i=["components"],a={sidebar_label:"Social connector",sidebar_position:3},s="Configure Social Connector",l={unversionedId:"docs/recipes/configure-connectors/social-connector/README",id:"version-1.x/docs/recipes/configure-connectors/social-connector/README",title:"Configure Social Connector",description:"Configuring social connectors allows users to easily sign in using their existing social media accounts, without entering a password or basic profile information. This can help increase the registration conversion rate for your website or app. At Logto, we're constantly improving our social connector's capabilities to support new platforms and enhance the user experience.",source:"@site/versioned_docs/version-1.x/docs/recipes/configure-connectors/social-connector/README.md",sourceDirName:"docs/recipes/configure-connectors/social-connector",slug:"/docs/recipes/configure-connectors/social-connector/",permalink:"/logto-docs/docs/recipes/configure-connectors/social-connector/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/configure-connectors/social-connector/README.md",tags:[],version:"1.x",sidebarPosition:3,frontMatter:{sidebar_label:"Social connector",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"SMS connector",permalink:"/logto-docs/docs/recipes/configure-connectors/configure-sms-connector"},next:{title:"Configure popular social connector",permalink:"/logto-docs/docs/recipes/configure-connectors/social-connector/configure-popular-social-connector"}},u={},p=[{value:"<strong>Related Readings</strong>",id:"related-readings",level:2}],d={toc:p};function f(e){var o=e.components,n=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"configure-social-connector"},"Configure Social Connector"),(0,c.kt)("p",null,"Configuring social connectors allows users to easily sign in using their existing social media accounts, without entering a password or basic profile information. This can help increase the registration conversion rate for your website or app. At Logto, we're constantly improving our social connector's capabilities to support new platforms and enhance the user experience."),(0,c.kt)("p",null,"Logto offers two types of social connectors:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Common Social Connectors"),": Google, Apple, Facebook, GitHub, Discord, Wechat, Alipay, Kakao, Naver, Azure Active Directory."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Standard Connectors"),": OIDC, OAuth 2.0, SAML.")),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"If the social connector you need isn't among our Common Social Connectors, you can create your own using the Standard Connector protocol. Check out our \u201c",(0,c.kt)("a",{parentName:"p",href:"/logto-docs/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols"},"Custom Social Connector with Standard Protocol"),"\u201d guide to learn more.\nIf the Standard Connector still doesn't meet your needs, don't hesitate to contact us. For those using the Logto Open-Source Version, you can even ",(0,c.kt)("a",{parentName:"p",href:"/logto-docs/docs/recipes/create-your-connector/"},"Write your connector (OSS)"),".")),(0,c.kt)("h2",{id:"related-readings"},(0,c.kt)("strong",{parentName:"h2"},"Related Readings")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"See ",(0,c.kt)("a",{parentName:"li",href:"/logto-docs/docs/recipes/customize-sie/configure-sign-in-methods"},"Configure sign-in method")," by adding connectors to bring your social connector into use.")))}f.isMDXComponent=!0}}]);