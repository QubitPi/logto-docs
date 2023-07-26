"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[58748],{49613:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(o),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return o?n.createElement(f,c(c({ref:t},u),{},{components:o})):n.createElement(f,c({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=o[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},74744:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=o(665),r=o(40151),i=(o(59496),o(49613)),c=["components"],a={sidebar_position:1,sidebar_label:"Email connector"},s="Configure Email Connector",l={unversionedId:"docs/recipes/configure-connectors/email-connector/README",id:"docs/recipes/configure-connectors/email-connector/README",title:"Configure Email Connector",description:"Configuring an Email connector allows you to send a one-time password (OTP) to the user's email address ( Magic link will be supported in the future ). Email connector usage is similar to SMS connector, which can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity.",source:"@site/docs/docs/recipes/configure-connectors/email-connector/README.md",sourceDirName:"docs/recipes/configure-connectors/email-connector",slug:"/docs/recipes/configure-connectors/email-connector/",permalink:"/logto-docs/next/docs/recipes/configure-connectors/email-connector/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/email-connector/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Email connector"},sidebar:"docsSidebar",previous:{title:"\ud83e\ude9b Configure connectors",permalink:"/logto-docs/next/docs/recipes/configure-connectors/"},next:{title:"Configure Logto email service",permalink:"/logto-docs/next/docs/recipes/configure-connectors/email-connector/configure-logto-email-service"}},u={},p=[],m={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-email-connector"},"Configure Email Connector"),(0,i.kt)("p",null,"Configuring an Email connector allows you to send a one-time password (OTP) to the user's email address ( Magic link will be supported in the future ). Email connector usage is similar to SMS connector, which can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity."),(0,i.kt)("p",null,"We provide Logto built-in email service for your online usage or onboarding. It is completely free to use and doesn\u2019t require any additional configuration. You just need to customize your basic brand information for email templates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-logto-email"},"Logto email service"))),(0,i.kt)("p",null,"Alternatively, you have the option to connect with other email service providers that Logto offers out-of-box usage. With these providers, you can customize your email templates freely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aws-ses"},"AWS direct mail connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-sendgrid-email"},"SendGrid mail connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-smtp"},"SMTP connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aliyun-dm"},"Aliyun direct mail connector"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add an Email connector on Logto cloud",src:o(12436).Z,width:"2880",height:"1300"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on more connectors! But If you don't see the connector you want, just let us know your needs in Discord or file a Feature Request on GitHub.\nFor those using the Logto Open-Source Version, we offer the flexibility to ",(0,i.kt)("a",{parentName:"p",href:"/logto-docs/next/docs/recipes/create-your-connector/"},"create your own connector")," to extend.")))}d.isMDXComponent=!0},12436:function(e,t,o){t.Z=o.p+"assets/images/add-an-email-connector-in-logto-cloud-e7d5fb0aad5e8773f2d49a215a29f379.webp"}}]);