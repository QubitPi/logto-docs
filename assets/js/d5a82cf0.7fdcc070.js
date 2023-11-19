"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[38696],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81190:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(665),i=r(40151),o=(r(59496),r(49613)),a=["components"],s={sidebar_label:"Config MFA",sidebar_position:1},l="Configure MFA",c={unversionedId:"docs/recipes/multi-factor-auth/config-mfa",id:"version-1.x/docs/recipes/multi-factor-auth/config-mfa",title:"Configure MFA",description:"Added in v1.11.0",source:"@site/versioned_docs/version-1.x/docs/recipes/multi-factor-auth/config-mfa.md",sourceDirName:"docs/recipes/multi-factor-auth",slug:"/docs/recipes/multi-factor-auth/config-mfa",permalink:"/logto-docs/docs/recipes/multi-factor-auth/config-mfa",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/multi-factor-auth/config-mfa.md",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_label:"Config MFA",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\udee1\ufe0f Multi-factor auth",permalink:"/logto-docs/docs/recipes/multi-factor-auth/"},next:{title:"Authenticator app OTP",permalink:"/logto-docs/docs/recipes/multi-factor-auth/authenticator-app-otp"}},u={},p=[{value:"Configure MFA in Logto",id:"configure-mfa-in-logto",level:2},{value:"Universal authentication flows for MFA",id:"universal-authentication-flows-for-mfa",level:2},{value:"MFA set-up flows",id:"mfa-set-up-flows",level:3},{value:"MFA sign-in flow",id:"mfa-sign-in-flow",level:3}],f={toc:p};function d(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-mfa"},"Configure MFA"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Added in v1.11.0")),(0,o.kt)("h2",{id:"configure-mfa-in-logto"},"Configure MFA in Logto"),(0,o.kt)("p",null,"To configure your MFA in the Logto Console, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Navigate to the "Multi-factor auth" in the Logto Console.'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Enable the Factors for 2-step verification")," available for users. You have the following options:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Primary factors"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../authenticator-app-otp"},"Authenticator App OTP"),": This is the most common and widely accepted method."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../webauthn"},"WebAuthn (Passkey)"),": A high-security option suitable for web products supporting device biometrics or security keys, etc., ensuring robust protection."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Backup factors"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../backup-code"},"Backup code"),": This serves as a backup option when users can't verify any of the primary factors mentioned above. Enabling this option reduces friction for users' access successfully."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Select a 2-step verification policy")," after enabling factors. There are two choices:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"User-controlled MFA"),": Users can enable or disable MFA on their own.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"After saving changes, during new users\u2019 sign-up or old users\u2019 first sign-in, users can choose to set up MFA voluntarily or skip it, and this set-up flow will only occur once per user."),(0,o.kt)("li",{parentName:"ul"},"Or the user can enable/disable it in the User Account Settings of your apps which can be integrated by Logto ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/explore-management-api"},"Management API"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Mandatory MFA"),": Users are always required to use MFA at sign-in.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Users must set up MFA the first time at sign-in or sign-up, and use it for all future sign-ins."),(0,o.kt)("li",{parentName:"ul"},"Users can also change it in the User Account Settings of your apps which can be integrated by Logto ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/explore-management-api"},"Management API"),".")))))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Config MFA",src:r(98462).Z,width:"3010",height:"1456"})),(0,o.kt)("h2",{id:"universal-authentication-flows-for-mfa"},"Universal authentication flows for MFA"),(0,o.kt)("p",null,"When MFA is enabled, the second-step verification flow will typically operate after the first-step verification. The MFA set-up flow will also take place after users have set up their first verification factors, such as a password or email verification code."),(0,o.kt)("h3",{id:"mfa-set-up-flows"},"MFA set-up flows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Users will set up the primary factors (Authenticator app OTP or Passkey) after registering or signing in with the first factor.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If multiple primary factors are provided, users need to select their preferred primary factor and set it up."),(0,o.kt)("li",{parentName:"ul"},"If only a single primary factor is provided, users will be asked to set it up directly."))),(0,o.kt)("li",{parentName:"ol"},"Users can save backup codes if this option is enabled.")),(0,o.kt)("p",null,"If the Mandatory MFA policy is configured, users must set up MFA. If the user-controlled MFA policy is configured, users can skip these flows, and they will only occur once."),(0,o.kt)("p",null,"If MFA is removed for some users, don't worry. Logto will prompt them to set up MFA again during their next sign-in."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MFA set-up flows",src:r(24477).Z,width:"4108",height:"3018"})),(0,o.kt)("h3",{id:"mfa-sign-in-flow"},"MFA sign-in flow"),(0,o.kt)("p",null,"Users who have already set up MFA will be asked to verify the second factor after verifying the first factor during sign-in. The verification method will depend on the configuration in the Logto Console and the user settings."),(0,o.kt)("p",null,"If a user has set up only one factor, they will verify it directly."),(0,o.kt)("p",null,"If a user has set up multiple factors as 2FA, they will need to choose one to verify. For user convenience, during the next sign-in, they will be directly redirected to the last-used factor for a faster sign-in process."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"MFA sign-in flow",src:r(28131).Z,width:"4108",height:"2546"})))}d.isMDXComponent=!0},98462:function(e,t,r){t.Z=r.p+"assets/images/config-mfa-0cb50b342c37a3c463725af83142fa49.webp"},24477:function(e,t,r){t.Z=r.p+"assets/images/mfa-set-up-flows-4285dcb004dc2186db1436141a68acb7.webp"},28131:function(e,t,r){t.Z=r.p+"assets/images/mfa-sign-in-flow-6aa61ab4ec6e98ef2ad6148017dfedd9.webp"}}]);