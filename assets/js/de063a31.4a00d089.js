"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13509],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),p=r,f=l["".concat(s,".").concat(p)]||l[p]||m[p]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},61706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),a=["components"],c={sidebar_position:1},s="Configure custom domain in Console",u={unversionedId:"docs/recipes/custom-domain/configure-custom-domain-in-console",id:"docs/recipes/custom-domain/configure-custom-domain-in-console",title:"Configure custom domain in Console",description:"To add a new custom domain in the Logto Console, follow these steps:",source:"@site/docs/docs/recipes/custom-domain/configure-custom-domain-in-console.md",sourceDirName:"docs/recipes/custom-domain",slug:"/docs/recipes/custom-domain/configure-custom-domain-in-console",permalink:"/next/docs/recipes/custom-domain/configure-custom-domain-in-console",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/custom-domain/configure-custom-domain-in-console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83c\udf0d Custom domain",permalink:"/next/docs/recipes/custom-domain/"},next:{title:"Use custom domain",permalink:"/next/docs/recipes/custom-domain/use-custom-domain"}},d={},m=[],l={toc:m};function p(e){var t=e.components,c=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-custom-domain-in-console"},"Configure custom domain in Console"),(0,i.kt)("p",null,"To add a new custom domain in the Logto Console, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Navigate to the "Settings" and go to the \u201cDomains\u201d tab.'),(0,i.kt)("li",{parentName:"ol"},"In \u201cCustom Domain\u201d section, enter your domain name and click \u201cadd domain\u201d. ",(0,i.kt)("img",{alt:"Add domain",src:n(67157).Z,width:"2880",height:"1026"})),(0,i.kt)("li",{parentName:"ol"},"Copy the CNAME value in the table, and go to your domain\u2019s DNS provider to add record. ",(0,i.kt)("img",{alt:"Verify",src:n(5787).Z,width:"2880",height:"1212"})),(0,i.kt)("li",{parentName:"ol"},"Wait for the verification and SSL process.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"We will auto-verify your records every 10 seconds until the custom domain is added. Just ensure that the entered domain name or DNS Records are accurate."),(0,i.kt)("li",{parentName:"ol"},"Verification typically takes a few minutes but can take up to 24 hours, depending on the DNS provider. Feel free to navigate away during the process.")))))}p.isMDXComponent=!0},67157:function(e,t,n){t.Z=n.p+"assets/images/add-domain-0f758d4b843a4bdabeccf57123b8af0c.webp"},5787:function(e,t,n){t.Z=n.p+"assets/images/verify-77ee788fa3f390dc7648e0de01407410.webp"}}]);