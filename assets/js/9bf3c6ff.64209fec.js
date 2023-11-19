"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[75459],{49613:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return f}});var n=r(59496);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(h,i(i({ref:e},l),{},{components:r})):n.createElement(h,i({ref:e},l))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98155:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=r(665),o=r(40151),a=(r(59496),r(49613)),i=["components"],c={sidebar_label:"Authenticator app OTP",sidebar_position:2},s="Authenticator app OTP",p={unversionedId:"docs/recipes/multi-factor-auth/authenticator-app-otp",id:"docs/recipes/multi-factor-auth/authenticator-app-otp",title:"Authenticator app OTP",description:"Added in v1.11.0",source:"@site/docs/docs/recipes/multi-factor-auth/authenticator-app-otp.md",sourceDirName:"docs/recipes/multi-factor-auth",slug:"/docs/recipes/multi-factor-auth/authenticator-app-otp",permalink:"/logto-docs/next/docs/recipes/multi-factor-auth/authenticator-app-otp",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/multi-factor-auth/authenticator-app-otp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Authenticator app OTP",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Config MFA",permalink:"/logto-docs/next/docs/recipes/multi-factor-auth/config-mfa"},next:{title:"WebAuthn (Passkey)",permalink:"/logto-docs/next/docs/recipes/multi-factor-auth/webauthn"}},l={},u=[{value:"Concepts",id:"concepts",level:2},{value:"Auth flows",id:"auth-flows",level:2}],d={toc:u};function f(t){var e=t.components,c=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authenticator-app-otp"},"Authenticator app OTP"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Added in v1.11.0")),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"The Authenticator app, also referred to as the Software Token, is one of the most widely adopted MFA methods. It generates temporary, one-time passwords (OTP) to enhance the security of online service authentication. Unlike physical hardware tokens, software tokens are typically applications or plugins that users install on their devices, be it a smartphone or a computer browser. Software tokens can operate locally on a single device or synchronize across various devices, depending on the authenticator's capabilities and individual user settings."),(0,a.kt)("p",null,"Popular examples of software tokens include Google Authenticator, Microsoft Authenticator, Duo, 1Password, Authy, and more."),(0,a.kt)("h2",{id:"auth-flows"},"Auth flows"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Setup Flows")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"QR Code or Secret Key"),": Users receive a QR code or a secret key from your service."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Add account"),": Using their authenticator app, users scan the QR code or manually enter the secret key to add their account."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Dynamic one-time password"),": The authenticator app displays a six-digit code that refreshes every 1-2 minutes for the added account."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Complete MFA setup"),": Users enter this code within its validity into the MFA setup page, completing the setup of Authenticator App OTP for MFA.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OTP set up flow",src:r(44584).Z,width:"3986",height:"1520"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verification flows")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Login attempt"),": During login, users are prompted for MFA."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Retrieve OTP"),": Open their authenticator app to retrieve the OTP for the respective account."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Enter OTP"),": Users enter the OTP displayed in the app within its validity into the 2-step verification page."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Authentication"),": The system verifies the OTP, granting access upon successful validation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OTP verification flow",src:r(64653).Z,width:"2704",height:"1238"})))}f.isMDXComponent=!0},44584:function(t,e,r){e.Z=r.p+"assets/images/otp-set-up-flow-601b6eb43986290ab433ade3d882e87e.webp"},64653:function(t,e,r){e.Z=r.p+"assets/images/otp-verification-flow-904894ff31e095d0dd30814facdf242b.webp"}}]);