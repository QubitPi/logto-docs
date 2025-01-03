"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[15542],{22716:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"end-user-flows/sign-up-and-sign-in/disable-user-registration","title":"\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3059\u308b","description":"\u7279\u5b9a\u306e\u72b6\u6cc1\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u5236\u9650\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002Logto \u3067\u306f\u3001\u533f\u540d\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3057\u3001\u7ba1\u7406\u8005\u306b\u3088\u3063\u3066\u62db\u5f85\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u308b\u3088\u3046\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/disable-user-registration.mdx","sourceDirName":"end-user-flows/sign-up-and-sign-in","slug":"/end-user-flows/sign-up-and-sign-in/disable-user-registration","permalink":"/ja/end-user-flows/sign-up-and-sign-in/disable-user-registration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/disable-user-registration.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"\u5229\u7528\u898f\u7d04\u3068\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc","permalink":"/ja/end-user-flows/sign-up-and-sign-in/terms-and-privacy"},"next":{"title":"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO)","permalink":"/ja/end-user-flows/enterprise-sso/"}}');var r=i(25105),o=i(79621);const t={sidebar_position:6},l="\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3059\u308b",d={},c=[{value:"\u62db\u5f85\u5236\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u30d5\u30ed\u30fc\u3092\u5b9f\u88c5\u3059\u308b",id:"implement-an-invitation-only-sign-up-flow",level:2},{value:"\u30aa\u30d7\u30b7\u30e7\u30f3 1: \u30e1\u30fc\u30eb\u3067\u30e6\u30fc\u30b6\u30fc\u3092\u62db\u5f85\u3059\u308b",id:"option-1-invite-users-via-email",level:3},{value:"\u30aa\u30d7\u30b7\u30e7\u30f3 2: \u624b\u52d5\u767b\u9332\u6642\u306b\u30e6\u30fc\u30b6\u30fc\u306b\u901a\u77e5\u3059\u308b",id:"option-2-notify-users-on-manual-registration",level:3},{value:"\u62db\u5f85\u5236\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u306e\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13",id:"user-experience-for-invitation-only-sign-up",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"related-resources",level:2}];function a(n){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...n.components},{CloudLink:i,Url:s}=e;return i||u("CloudLink",!0),s||u("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3059\u308b",children:"\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3059\u308b"})}),"\n",(0,r.jsx)(e.p,{children:"\u7279\u5b9a\u306e\u72b6\u6cc1\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u5236\u9650\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002Logto \u3067\u306f\u3001\u533f\u540d\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3057\u3001\u7ba1\u7406\u8005\u306b\u3088\u3063\u3066\u62db\u5f85\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u308b\u3088\u3046\u306b\u5236\u9650\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"\u30b3\u30f3\u30bd\u30fc\u30eb > \u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13 > \u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3068\u30b5\u30a4\u30f3\u30a4\u30f3"})," \u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u8a73\u7d30\u30aa\u30d7\u30b7\u30e7\u30f3"})," \u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001",(0,r.jsx)(e.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u6709\u52b9\u306b\u3059\u308b"})," \u30b9\u30a4\u30c3\u30c1\u3092\u30aa\u30d5\u306b\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3057\u307e\u3059\u3002\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u6709\u52b9\uff09"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u7121\u52b9\u306b\u306a\u308b\u3068\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u30da\u30fc\u30b8\u304b\u3089\u300c\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u300d\u30ea\u30f3\u30af\u304c\u524a\u9664\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u30da\u30fc\u30b8\u304c\u7121\u52b9\u306b\u306a\u308a\u3001\u8a2a\u554f\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u306f\u30b5\u30a4\u30f3\u30a4\u30f3\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u304a\u3088\u3073\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u30d5\u30ed\u30fc\u3082\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002\u672a\u767b\u9332\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u8a8d\u8a3c\u5f8c\u306b\u300c\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u300d\u30a8\u30e9\u30fc\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u30b7\u30b9\u30c6\u30e0\u5185\u306b\u4e00\u81f4\u3059\u308b\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306b\u306f\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30ea\u30f3\u30af\u30a2\u30ab\u30a6\u30f3\u30c8\u6a5f\u80fd\u304c\u5f15\u304d\u7d9a\u304d\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"implement-an-invitation-only-sign-up-flow",children:"\u62db\u5f85\u5236\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u30d5\u30ed\u30fc\u3092\u5b9f\u88c5\u3059\u308b"}),"\n",(0,r.jsx)(e.p,{children:"Logto \u306f\u7d44\u307f\u8fbc\u307f\u306e\u62db\u5f85\u30d5\u30ed\u30fc\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u305b\u3093\u304c\u3001Logto \u306e\u30e6\u30fc\u30b6\u30fc Management API \u3092\u5229\u7528\u3057\u3066\u3001\u62db\u5f85\u5236\u306e\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u30d5\u30ed\u30fc\u3092\u7c21\u5358\u306b\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"option-1-invite-users-via-email",children:"\u30aa\u30d7\u30b7\u30e7\u30f3 1: \u30e1\u30fc\u30eb\u3067\u30e6\u30fc\u30b6\u30fc\u3092\u62db\u5f85\u3059\u308b"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"\u30b3\u30f3\u30bd\u30fc\u30eb > \u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13"})," \u3067\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u306b\u30ab\u30b9\u30bf\u30e0\u306e\u62db\u5f85\u30d9\u30fc\u30b9\u306e\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u30d5\u30a9\u30fc\u30e0\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u30e6\u30fc\u30b6\u30fc\u306b\u4e00\u610f\u306e\u62db\u5f85\u30ea\u30f3\u30af\u3092\u542b\u3080\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u30e6\u30fc\u30b6\u30fc\u304c\u767b\u9332\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c ",(0,r.jsx)(e.a,{href:"https://openapi.logto.io/operation/operation-createuser",children:"Logto Management API"})," \u3092\u547c\u3073\u51fa\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u305f\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u3092 Logto \u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u307e\u305f\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u3066\u767b\u9332\u3092\u5b8c\u4e86\u3055\u305b\u307e\u3059\u3002\u30b5\u30a4\u30f3\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u3092\u7c21\u7d20\u5316\u3059\u308b\u305f\u3081\u306b\u3001\u6700\u521d\u306e\u753b\u9762\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u3092\u4e8b\u524d\u5165\u529b\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(e.a,{href:"/end-user-flows/authentication-parameters/",children:"\u8a8d\u8a3c\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"option-2-notify-users-on-manual-registration",children:"\u30aa\u30d7\u30b7\u30e7\u30f3 2: \u624b\u52d5\u767b\u9332\u6642\u306b\u30e6\u30fc\u30b6\u30fc\u306b\u901a\u77e5\u3059\u308b"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u3092\u7121\u52b9\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(i,{to:"/users",children:"\u30b3\u30f3\u30bd\u30fc\u30eb > \u30e6\u30fc\u30b6\u30fc\u7ba1\u7406"})," \u307e\u305f\u306f ",(0,r.jsx)(e.a,{href:"https://openapi.logto.io/operation/operation-createuser",children:"Management\nAPI"}),"\n\u3092\u4f7f\u7528\u3057\u3066\u624b\u52d5\u3067\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u30e6\u30fc\u30b6\u30fc\u306b\u30e1\u30fc\u30eb\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u305f\u3053\u3068\u3092\u901a\u77e5\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u30e6\u30fc\u30b6\u30fc\u3092 Logto \u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u307e\u305f\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u3066\u767b\u9332\u3092\u5b8c\u4e86\u3055\u305b\u307e\u3059\u3002\u30b5\u30a4\u30f3\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u3092\u7c21\u7d20\u5316\u3059\u308b\u305f\u3081\u306b\u3001\u6700\u521d\u306e\u753b\u9762\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u3092\u4e8b\u524d\u5165\u529b\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(e.a,{href:"/end-user-flows/authentication-parameters/",children:"\u8a8d\u8a3c\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"user-experience-for-invitation-only-sign-up",children:"\u62db\u5f85\u5236\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u306e\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13"}),"\n",(0,r.jsx)(e.p,{children:"\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u30da\u30fc\u30b8\u3092\u8a2a\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306f\u30b5\u30a4\u30f3\u30a4\u30f3\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u7ba1\u7406\u8005\u306b\u3088\u3063\u3066\u3001\u307e\u305f\u306f Management API \u3092\u4f7f\u7528\u3057\u3066\u306e\u307f\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u8a2d\u5b9a\u3057\u305f\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u304a\u3088\u3073\u30b5\u30a4\u30f3\u30a4\u30f3\u65b9\u6cd5\u306b\u5fdc\u3058\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30b5\u30a4\u30f3\u30a4\u30f3\u6642\u306b\u7570\u306a\u308b\u4f53\u9a13\u3092\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u306b\u3088\u308b\u8a8d\u8a3c\u30b3\u30fc\u30c9\u3067\u306e\u30b5\u30a4\u30f3\u30a4\u30f3"}),"\uff1a",(0,r.jsx)(e.strong,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),"\u307e\u305f\u306f",(0,r.jsx)(e.strong,{children:"\u96fb\u8a71\u756a\u53f7"}),"\u3067\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u306e\u8a8d\u8a3c\u30b3\u30fc\u30c9\u30b5\u30a4\u30f3\u30a4\u30f3\u65b9\u6cd5\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u8a8d\u8a3c\u30b3\u30fc\u30c9\u8a8d\u8a3c\u65b9\u6cd5\u3092\u4f7f\u7528\u3057\u3066\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u3067\u76f4\u63a5\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u7279\u5b9a\u306e\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u3067\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3"}),"\uff1a\u30bd\u30fc\u30b7\u30e3\u30eb\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f",(0,r.jsx)(e.strong,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),"\u307e\u305f\u306f",(0,r.jsx)(e.strong,{children:"\u96fb\u8a71\u756a\u53f7"}),"\u3067\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u7279\u5b9a\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u4f5c\u6210\u3057\u3066\u6709\u52b9\u306b\u3057\u307e\u3059\u3002\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u306b\u57fa\u3065\u3044\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u81ea\u52d5\u7684\u306b\u30ea\u30f3\u30af\u3059\u308b\u305f\u3081\u306b\u3001",(0,r.jsx)(e.a,{href:"/end-user-flows/sign-up-and-sign-in/social-sign-in#account-linking",children:(0,r.jsx)(e.strong,{children:"\u81ea\u52d5\u30a2\u30ab\u30a6\u30f3\u30c8\u30ea\u30f3\u30af"})})," \u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u306b\u4e00\u81f4\u3059\u308b\u30bd\u30fc\u30b7\u30e3\u30eb\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u76f4\u63a5\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u540d / \u30e1\u30fc\u30eb / \u96fb\u8a71\u756a\u53f7\u3068\u30d1\u30b9\u30ef\u30fc\u30c9"}),"\uff1a",(0,r.jsx)(e.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u540d"}),"\u3001",(0,r.jsx)(e.strong,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),"\u3001\u307e\u305f\u306f",(0,r.jsx)(e.strong,{children:"\u96fb\u8a71\u756a\u53f7"}),"\u3067\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u30d9\u30fc\u30b9\u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u306e\u305f\u3081\u306b\u5bfe\u5fdc\u3059\u308b\u8b58\u5225\u5b50\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e8b\u524d\u8a2d\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\uff1a\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210\u6642\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u3001\u305d\u308c\u3092\u30e6\u30fc\u30b6\u30fc\u306b\u5b89\u5168\u306b\u5171\u6709\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u4e8b\u524d\u8a2d\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u540d\u3001\u30e1\u30fc\u30eb\u3001\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u3067\u76f4\u63a5\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30ea\u30bb\u30c3\u30c8\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u4e8b\u524d\u8a2d\u5b9a\u3055\u308c\u305f\u30d1\u30b9\u30ef\u30fc\u30c9\u306a\u3057\u3067\uff1a\u30d1\u30b9\u30ef\u30fc\u30c9\u306a\u3057\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6709\u52b9\u5316\u6642\u306b\u30e6\u30fc\u30b6\u30fc\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3088\u3046\u4fc3\u3057\u307e\u3059\u3002\uff08\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u30d5\u30ed\u30fc\u306b\u306f",(0,r.jsx)(e.strong,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),"\u307e\u305f\u306f",(0,r.jsx)(e.strong,{children:"\u96fb\u8a71\u756a\u53f7"}),"\u304c\u5fc5\u8981\u3067\u3059\u3002\uff09\u30e6\u30fc\u30b6\u30fc\u3092\u4f5c\u6210\u3057\u305f\u5f8c\u3001\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u3092\u4e8b\u524d\u5165\u529b\u3057\u3066\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u307e\u3059\u3002\u4e8b\u524d\u5165\u529b\u3055\u308c\u305f\u8a73\u7d30\u3067\u30e6\u30fc\u30b6\u30fc\u3092\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(e.a,{href:"/end-user-flows/authentication-parameters/",children:"\u8a8d\u8a3c\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u3001\u30e1\u30fc\u30eb\u3001\u307e\u305f\u306f\u96fb\u8a71\u756a\u53f7\u3068\u65b0\u3057\u3044\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u76f4\u63a5\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"related-resources",children:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,r.jsx)(s,{href:"https://blog.logto.io/invitation-only-sign-up",children:(0,r.jsx)(e.p,{children:"\u30d6\u30ed\u30b0: Logto \u3067\u62db\u5f85\u5236\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5"})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>l});var s=i(58101);const r={},o=s.createContext(r);function t(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);