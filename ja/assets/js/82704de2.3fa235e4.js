"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7349],{83190:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"end-user-flows/mfa/authenticator-app-otp","title":"\u8a8d\u8a3c\u30a2\u30d7\u30ea OTP","description":"\u6982\u5ff5","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/mfa/authenticator-app-otp.md","sourceDirName":"end-user-flows/mfa","slug":"/end-user-flows/mfa/authenticator-app-otp","permalink":"/ja/end-user-flows/mfa/authenticator-app-otp","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/mfa/authenticator-app-otp.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"MFA \u3092\u8a2d\u5b9a\u3059\u308b","permalink":"/ja/end-user-flows/mfa/configure-mfa"},"next":{"title":"Passkeys (WebAuthn)","permalink":"/ja/end-user-flows/mfa/webauthn"}}');var i=n(25105),o=n(79621);const r={sidebar_position:2},a="\u8a8d\u8a3c\u30a2\u30d7\u30ea OTP",c={},l=[{value:"\u6982\u5ff5",id:"concepts",level:2},{value:"\u8a8d\u8a3c (Authentication) \u30d5\u30ed\u30fc",id:"authentication-flows",level:2},{value:"\u8a8d\u8a3c\u30a2\u30d7\u30ea OTP \u8a2d\u5b9a\u30d5\u30ed\u30fc",id:"authentication-app-otp-setup-flows",level:3},{value:"\u8a8d\u8a3c\u30a2\u30d7\u30ea OTP \u691c\u8a3c\u30d5\u30ed\u30fc",id:"authentication-app-otp-verification-flows",level:3}];function d(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u8a8d\u8a3c\u30a2\u30d7\u30ea-otp",children:"\u8a8d\u8a3c\u30a2\u30d7\u30ea OTP"})}),"\n",(0,i.jsx)(e.h2,{id:"concepts",children:"\u6982\u5ff5"}),"\n",(0,i.jsxs)(e.p,{children:["\u8a8d\u8a3c\u30a2\u30d7\u30ea\u3001\u307e\u305f\u306f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30c8\u30fc\u30af\u30f3\u3068\u3082\u547c\u3070\u308c\u308b\u3082\u306e\u306f\u3001\u6700\u3082\u5e83\u304f\u63a1\u7528\u3055\u308c\u3066\u3044\u308b ",(0,i.jsx)(e.a,{href:"https://auth.wiki/mfa",children:"MFA"})," \u65b9\u6cd5\u306e\u4e00\u3064\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u4e00\u6642\u7684\u306a ",(0,i.jsx)(e.a,{href:"https://auth.wiki/otp",children:"\u30ef\u30f3\u30bf\u30a4\u30e0\u30d1\u30b9\u30ef\u30fc\u30c9 (OTP)"})," \u3092\u751f\u6210\u3057\u3066\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u30b5\u30fc\u30d3\u30b9\u306e\u8a8d\u8a3c (Authentication) \u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u5f37\u5316\u3057\u307e\u3059\u3002\u7269\u7406\u7684\u306a\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30c8\u30fc\u30af\u30f3\u3068\u306f\u7570\u306a\u308a\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30c8\u30fc\u30af\u30f3\u306f\u901a\u5e38\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3\u3084\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30d6\u30e9\u30a6\u30b6\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3059\u3002\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30c8\u30fc\u30af\u30f3\u306f\u3001\u5358\u4e00\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u30ed\u30fc\u30ab\u30eb\u306b\u52d5\u4f5c\u3059\u308b\u304b\u3001\u8a8d\u8a3c\u30a2\u30d7\u30ea\u306e\u6a5f\u80fd\u3068\u500b\u3005\u306e\u30e6\u30fc\u30b6\u30fc\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u3055\u307e\u3056\u307e\u306a\u30c7\u30d0\u30a4\u30b9\u9593\u3067\u540c\u671f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u30c8\u30fc\u30af\u30f3\u306e\u4e00\u822c\u7684\u306a\u4f8b\u306b\u306f\u3001Google Authenticator\u3001Microsoft Authenticator\u3001Duo\u30011Password\u3001Authy \u306a\u3069\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"authentication-flows",children:"\u8a8d\u8a3c (Authentication) \u30d5\u30ed\u30fc"}),"\n",(0,i.jsx)(e.h3,{id:"authentication-app-otp-setup-flows",children:"\u8a8d\u8a3c\u30a2\u30d7\u30ea OTP \u8a2d\u5b9a\u30d5\u30ed\u30fc"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"QR \u30b3\u30fc\u30c9\u307e\u305f\u306f\u79d8\u5bc6\u30ad\u30fc"}),": \u30e6\u30fc\u30b6\u30fc\u306f\u30b5\u30fc\u30d3\u30b9\u304b\u3089 QR \u30b3\u30fc\u30c9\u307e\u305f\u306f\u79d8\u5bc6\u30ad\u30fc\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u8ffd\u52a0"}),": \u8a8d\u8a3c\u30a2\u30d7\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306f QR \u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3\u3059\u308b\u304b\u3001\u79d8\u5bc6\u30ad\u30fc\u3092\u624b\u52d5\u3067\u5165\u529b\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u52d5\u7684\u30ef\u30f3\u30bf\u30a4\u30e0\u30d1\u30b9\u30ef\u30fc\u30c9"}),": \u8a8d\u8a3c\u30a2\u30d7\u30ea\u306f\u3001\u8ffd\u52a0\u3055\u308c\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u305f\u3081\u306b 1\uff5e2 \u5206\u3054\u3068\u306b\u66f4\u65b0\u3055\u308c\u308b 6 \u6841\u306e\u30b3\u30fc\u30c9\u3092\u8868\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"MFA \u8a2d\u5b9a\u5b8c\u4e86"}),": \u30e6\u30fc\u30b6\u30fc\u306f\u3001\u3053\u306e\u30b3\u30fc\u30c9\u3092\u6709\u52b9\u671f\u9650\u5185\u306b MFA \u8a2d\u5b9a\u30da\u30fc\u30b8\u306b\u5165\u529b\u3057\u3001\u8a8d\u8a3c\u30a2\u30d7\u30ea OTP \u306e MFA \u8a2d\u5b9a\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"OTP \u8a2d\u5b9a\u30d5\u30ed\u30fc",src:n(41348).A+"",width:"3986",height:"1520"})}),"\n",(0,i.jsx)(e.h3,{id:"authentication-app-otp-verification-flows",children:"\u8a8d\u8a3c\u30a2\u30d7\u30ea OTP \u691c\u8a3c\u30d5\u30ed\u30fc"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u30ed\u30b0\u30a4\u30f3\u8a66\u884c"}),": \u30ed\u30b0\u30a4\u30f3\u6642\u306b\u3001\u30e6\u30fc\u30b6\u30fc\u306f MFA \u3092\u6c42\u3081\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"OTP \u306e\u53d6\u5f97"}),": \u8a8d\u8a3c\u30a2\u30d7\u30ea\u3092\u958b\u3044\u3066\u3001\u8a72\u5f53\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u306e OTP \u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"OTP \u306e\u5165\u529b"}),": \u30e6\u30fc\u30b6\u30fc\u306f\u3001\u30a2\u30d7\u30ea\u306b\u8868\u793a\u3055\u308c\u305f OTP \u3092\u6709\u52b9\u671f\u9650\u5185\u306b 2 \u6bb5\u968e\u8a8d\u8a3c\u30da\u30fc\u30b8\u306b\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8a8d\u8a3c (Authentication)"}),": \u30b7\u30b9\u30c6\u30e0\u306f OTP \u3092\u691c\u8a3c\u3057\u3001\u6210\u529f\u3057\u305f\u5834\u5408\u306b\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"OTP \u691c\u8a3c\u30d5\u30ed\u30fc",src:n(91854).A+"",width:"2704",height:"1238"})})]})}function h(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},41348:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/otp-set-up-flow-69a6e5fe60cccaad368240770c1da3a9.png"},91854:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/otp-verification-flow-49801a8f920430d2f6e315eaef445545.png"},79621:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var s=n(58101);const i={},o=s.createContext(i);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);