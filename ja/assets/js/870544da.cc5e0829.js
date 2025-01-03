"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4992],{90479:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"organizations/organization-management","title":"\u7d44\u7e54\u306e\u7ba1\u7406","description":"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u958b\u767a\u8005\u304c Logto Console \u307e\u305f\u306f Logto Management API \u3092\u4ecb\u3057\u3066\u7d44\u7e54\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u5185\u3067\u7d44\u7e54\u7ba1\u7406\u8005\u304c\u30e1\u30f3\u30d0\u30fc\u3092\u81ea\u5df1\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u7d44\u7e54\u4f53\u9a13\u306e\u958b\u767a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u306f\u3001\u3053\u306e\u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/organizations/organization-management.mdx","sourceDirName":"organizations","slug":"/organizations/organization-management","permalink":"/ja/organizations/organization-management","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/organizations/organization-management.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u7d44\u7e54\u30c7\u30fc\u30bf\u69cb\u9020","permalink":"/ja/organizations/organization-data"},"next":{"title":"\u30b8\u30e3\u30b9\u30c8\u30a4\u30f3\u30bf\u30a4\u30e0 (JIT) \u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0","permalink":"/ja/organizations/just-in-time-provisioning"}}');var a=i(25105),t=i(79621);const r={sidebar_position:3},s="\u7d44\u7e54\u306e\u7ba1\u7406",l={},c=[{value:"Logto Console \u3092\u4ecb\u3057\u3066\u7ba1\u7406",id:"manage-via-logto-console",level:2},{value:"\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b",id:"create-an-organization",level:3},{value:"\u57fa\u672c\u8a2d\u5b9a",id:"basic-settings",level:3},{value:"\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u306b MFA \u3092\u8981\u6c42\u3059\u308b",id:"require-mfa-for-organization-members",level:3},{value:"\u30b8\u30e3\u30b9\u30c8\u30a4\u30f3\u30bf\u30a4\u30e0 \u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0",id:"just-in-time-provisioning",level:3},{value:"\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u306e\u7ba1\u7406",id:"manage-organization-members",level:3},{value:"\u7d44\u7e54\u306e M2M \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7ba1\u7406",id:"manage-organization-m2m-applications",level:3},{value:"Logto Management API \u3092\u4ecb\u3057\u3066\u7ba1\u7406",id:"manage-via-logto-management-api",level:2}];function d(n){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...n.components},{CloudLink:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"\u7d44\u7e54\u306e\u7ba1\u7406",children:"\u7d44\u7e54\u306e\u7ba1\u7406"})}),"\n",(0,a.jsxs)(e.p,{children:["\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u958b\u767a\u8005\u304c Logto Console \u307e\u305f\u306f Logto Management API \u3092\u4ecb\u3057\u3066\u7d44\u7e54\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u5185\u3067\u7d44\u7e54\u7ba1\u7406\u8005\u304c\u30e1\u30f3\u30d0\u30fc\u3092\u81ea\u5df1\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u7d44\u7e54\u4f53\u9a13\u306e\u958b\u767a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u306f\u3001",(0,a.jsx)(e.a,{href:"/end-user-flows/organization-experience/organization-management",children:"\u3053\u306e\u30ac\u30a4\u30c9"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"manage-via-logto-console",children:"Logto Console \u3092\u4ecb\u3057\u3066\u7ba1\u7406"}),"\n",(0,a.jsx)(e.h3,{id:"create-an-organization",children:"\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(i,{to:"/organizations",children:"Console > Organizations"})," \u306b\u79fb\u52d5\u3057\u3001\u300cCreate\norganization\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"basic-settings",children:"\u57fa\u672c\u8a2d\u5b9a"}),"\n",(0,a.jsx)(e.p,{children:"\u7d44\u7e54\u306e\u540d\u524d\u3001\u8aac\u660e\u3001\u30ed\u30b4\u306a\u3069\u306e\u57fa\u672c\u5c5e\u6027\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"require-mfa-for-organization-members",children:"\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u306b MFA \u3092\u8981\u6c42\u3059\u308b"}),"\n",(0,a.jsx)(e.p,{children:"\u7d44\u7e54\u306e\u3059\u3079\u3066\u306e\u30e1\u30f3\u30d0\u30fc\u306b MFA \u3092\u6709\u52b9\u306b\u3059\u308b\u3088\u3046\u8981\u6c42\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u7d44\u7e54\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306b\u3059\u3079\u3066\u306e\u30e1\u30f3\u30d0\u30fc\u304c\u8ffd\u52a0\u306e\u4fdd\u8b77\u5c64\u3092\u6301\u3064\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u305f\u3081\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u5bfe\u7b56\u3067\u3059\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u3053\u306e\u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u7d44\u7e54\u306e\u8a73\u7d30\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001\u300cMulti-factor authentication (MFA)\u300d\u30c8\u30b0\u30eb\u30b9\u30a4\u30c3\u30c1\u3092\u30aa\u30f3\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsxs)(e.p,{children:["\u3053\u306e\u6a5f\u80fd\u3092\u6b63\u5e38\u306b\u52d5\u4f5c\u3055\u305b\u308b\u306b\u306f\u3001",(0,a.jsx)(e.a,{href:"/end-user-flows/mfa",children:"\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u306e MFA \u65b9\u6cd5\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})}),"\n",(0,a.jsxs)(e.p,{children:["\u6709\u52b9\u306b\u3059\u308b\u3068\u3001MFA \u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u30e1\u30f3\u30d0\u30fc\u306f\u3001MFA \u3092\u8a2d\u5b9a\u3059\u308b\u307e\u3067 ",(0,a.jsx)(e.a,{href:"/authorization/organization-template/protect-organization-resources#step-2-fetch-organization-token",children:"\u7d44\u7e54\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})," \u3092\u4ea4\u63db\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u6ce8\u610f\u70b9\uff1a"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u3053\u306e\u6a5f\u80fd\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c MFA \u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u306e\u307f\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u4ea4\u63db\u3059\u308b\u969b\u306b\u30e6\u30fc\u30b6\u30fc\u306b MFA \u306e\u4f7f\u7528\u3092\u5f37\u5236\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u3053\u306e\u6a5f\u80fd\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u4f7f\u7528\u3067\u304d\u308b MFA \u65b9\u6cd5\u3092\u5236\u9650\u3057\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"just-in-time-provisioning",children:"\u30b8\u30e3\u30b9\u30c8\u30a4\u30f3\u30bf\u30a4\u30e0 \u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://auth.wiki/jit-provisioning",children:"\u30b8\u30e3\u30b9\u30c8\u30a4\u30f3\u30bf\u30a4\u30e0 \u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0"})," \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u306b\u521d\u3081\u3066\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u305f\u3068\u304d\u306b\u81ea\u52d5\u7684\u306b\u7d44\u7e54\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002Logto \u3067\u306f\u3001",(0,a.jsx)(e.a,{href:"/end-user-flows/enterprise-sso",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO)"})," \u3068\u30e1\u30fc\u30eb\u30c9\u30e1\u30a4\u30f3\u30d9\u30fc\u30b9\u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u7279\u5b9a\u306e\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba IdP \u3092\u901a\u3058\u3066\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u3001\u307e\u305f\u306f\u7279\u5b9a\u306e\u30c9\u30e1\u30a4\u30f3\u3092\u6301\u3064\u30e1\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u306a\u3069\u3001\u7279\u5b9a\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u81ea\u52d5\u7684\u306b\u7d44\u7e54\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u7d44\u7e54\u306b\u521d\u3081\u3066\u53c2\u52a0\u3059\u308b\u30e1\u30f3\u30d0\u30fc\u306b\u5bfe\u3057\u3066\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u30b8\u30e3\u30b9\u30c8\u30a4\u30f3\u30bf\u30a4\u30e0 \u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u306e\u8a73\u7d30\u3068\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.jsx)(e.a,{href:"/organizations/just-in-time-provisioning",children:"\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"manage-organization-members",children:"\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u306e\u7ba1\u7406"}),"\n",(0,a.jsx)(e.p,{children:"\u30e6\u30fc\u30b6\u30fc\u306f 1 \u3064\u4ee5\u4e0a\u306e\u30ed\u30fc\u30eb\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u7d44\u7e54\u306b\u30e1\u30f3\u30d0\u30fc\u3092\u8ffd\u52a0\u3059\u308b\u969b\u3001\u8907\u6570\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u30ed\u30fc\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5272\u308a\u5f53\u3066\u3092\u7a7a\u767d\u306e\u307e\u307e\u306b\u3059\u308b\u3068\u3001\u8ffd\u52a0\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306b\u306f\u30ed\u30fc\u30eb\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(i,{to:"/users",children:"Console > User management > User details page"})," \u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u3069\u306e\u7d44\u7e54\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\u3001\u304a\u3088\u3073\u3069\u306e\u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"manage-organization-m2m-applications",children:"\u7d44\u7e54\u306e M2M \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7ba1\u7406"}),"\n",(0,a.jsxs)(e.p,{children:["\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3082\u7d44\u7e54\u306b\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306b\u30ed\u30fc\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b\u3088\u3046\u306b\u3001",(0,a.jsx)(e.a,{href:"/organizations/understand-how-organizations-work#organization-m2m-application",children:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ed\u30fc\u30eb\u3092\u5272\u308a\u5f53\u3066\u308b"}),"\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(i,{to:"/applications",children:"Console > Applications > Application details page"})," \u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3069\u306e\u7d44\u7e54\u3068\u95a2\u9023\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u304b\u3001\u304a\u3088\u3073\u3069\u306e\u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(e.h2,{id:"manage-via-logto-management-api",children:"Logto Management API \u3092\u4ecb\u3057\u3066\u7ba1\u7406"}),"\n",(0,a.jsxs)(e.p,{children:["Logto Console \u3067\u3067\u304d\u308b\u3053\u3068\u306f\u3059\u3079\u3066\u3001",(0,a.jsx)(e.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," \u3092\u901a\u3058\u3066\u884c\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001\u4ee5\u4e0b\u304c\u542b\u307e\u308c\u307e\u3059\u304c\u3001\u3053\u308c\u306b\u9650\u5b9a\u3055\u308c\u307e\u305b\u3093\uff1a"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"\u7d44\u7e54\u306e\u4f5c\u6210\u3001\u524a\u9664\u3001\u7de8\u96c6\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u7ba1\u7406\uff1a\u7d44\u7e54\u306e\u6a29\u9650\u3068\u30ed\u30fc\u30eb\u306e\u4f5c\u6210\u3001\u524a\u9664\u3001\u7de8\u96c6\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u7d44\u7e54\u3078\u306e\u30e1\u30f3\u30d0\u30fc\u306e\u8ffd\u52a0\u307e\u305f\u306f\u524a\u9664\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u30e6\u30fc\u30b6\u30fc\u306e\u7d44\u7e54\u30ed\u30fc\u30eb\u306e\u5272\u308a\u5f53\u3066\u307e\u305f\u306f\u524a\u9664\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u7d44\u7e54\u3078\u306e\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8ffd\u52a0\u307e\u305f\u306f\u524a\u9664\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7d44\u7e54\u30ed\u30fc\u30eb\u306e\u5272\u308a\u5f53\u3066\u307e\u305f\u306f\u524a\u9664\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Management API \u3092\u4f7f\u7528\u3057\u3066\u3001\u3088\u308a\u591a\u304f\u306e\u7d44\u7e54\u30ec\u30d9\u30eb\u306e\u4f53\u9a13\u3068\u7ba1\u7406\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u306e\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3082\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,a.jsx)(e.a,{href:"/end-user-flows/organization-experience",children:"\u8a73\u7d30\u306f\u3053\u3061\u3089"})]}),"\n",(0,a.jsxs)(e.p,{children:["\u5b8c\u5168\u306a\u6a5f\u80fd\u4e00\u89a7\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.jsx)(e.a,{href:"https://openapi.logto.io/group/endpoint-organizations",children:"API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function g(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},79621:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>s});var o=i(58101);const a={},t=o.createContext(a);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);