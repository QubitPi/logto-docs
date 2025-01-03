"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[30153],{17451:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>e,toc:()=>h});const e=JSON.parse('{"id":"concepts/authn-vs-authz","title":"\u8a8d\u8a3c (Authentication) \u3068\u8a8d\u53ef (Authorization)","description":"\u8a8d\u8a3c (Authentication) \u3068 \u8a8d\u53ef (Authorization) \u306e\u9055\u3044\u306f\u6b21\u306e\u3088\u3046\u306b\u8981\u7d04\u3067\u304d\u307e\u3059\uff1a","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/concepts/authn-vs-authz.mdx","sourceDirName":"concepts","slug":"/concepts/authn-vs-authz","permalink":"/ja/concepts/authn-vs-authz","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/concepts/authn-vs-authz.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13","permalink":"/ja/concepts/sign-in-experience"},"next":{"title":"Logto core service","permalink":"/ja/concepts/core-service/"}}');var s=t(25105),o=t(79621);const r={sidebar_position:2},c="\u8a8d\u8a3c (Authentication) \u3068\u8a8d\u53ef (Authorization)",a={},h=[{value:"\u8a8d\u8a3c (Authentication)",id:"authentication",level:2},{value:"\u8a8d\u53ef (Authorization)",id:"authorization",level:2},{value:"\u3088\u304f\u3042\u308b\u8cea\u554f",id:"frequently-asked-questions",level:2},{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u308b\u30e6\u30fc\u30b6\u30fc\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",id:"i-need-to-specify-which-users-can-sign-in-to-an-application",level:3},{value:"\u30e6\u30fc\u30b6\u30fc\u304c\u7d44\u7e54\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059",id:"i-need-my-users-to-sign-in-to-an-organization",level:3},{value:"\u9867\u5ba2\u306f\u30b5\u30a4\u30f3\u30a4\u30f3\u30da\u30fc\u30b8\u306b\u30ab\u30b9\u30bf\u30e0\u30d6\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u3092\u5fc5\u8981\u3068\u3057\u3066\u3044\u307e\u3059",id:"our-customers-need-custom-branding-for-their-sign-in-pages",level:3}];function l(n){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"\u8a8d\u8a3c-authentication-\u3068\u8a8d\u53ef-authorization",children:"\u8a8d\u8a3c (Authentication) \u3068\u8a8d\u53ef (Authorization)"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8a8d\u8a3c (Authentication)"})," \u3068 ",(0,s.jsx)(i.strong,{children:"\u8a8d\u53ef (Authorization)"})," \u306e\u9055\u3044\u306f\u6b21\u306e\u3088\u3046\u306b\u8981\u7d04\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u8a8d\u8a3c (Authentication)"})," \u306f\u300c\u3069\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u6240\u6709\u3057\u3066\u3044\u307e\u3059\u304b\uff1f\u300d\u3068\u3044\u3046\u8cea\u554f\u306b\u7b54\u3048\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u8a8d\u53ef (Authorization)"})," \u306f\u300c\u4f55\u304c\u3067\u304d\u307e\u3059\u304b\uff1f\u300d\u3068\u3044\u3046\u8cea\u554f\u306b\u7b54\u3048\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u5b8c\u5168\u306a\u9867\u5ba2\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u30a2\u30af\u30bb\u30b9\u7ba1\u7406 (CIAM) \u306e\u7d39\u4ecb\u306b\u3064\u3044\u3066\u306f\u3001CIAM \u30b7\u30ea\u30fc\u30ba\u3092\u53c2\u7167\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://blog.logto.io/ciam-101-intro-authn-sso/",children:"CIAM 101: \u8a8d\u8a3c (Authentication)\u3001\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3001\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO)"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://blog.logto.io/ciam-102-authz-and-rbac/",children:"CIAM 102: \u8a8d\u53ef (Authorization) \u3068\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1 (RBAC)"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"authentication",children:"\u8a8d\u8a3c (Authentication)"}),"\n",(0,s.jsx)(i.p,{children:"Logto \u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u304a\u3088\u3073\u975e\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u8a8d\u8a3c (Authentication) \u65b9\u6cd5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u4f8b\u3048\u3070\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13"}),"\uff1a\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306e\u305f\u3081\u306e\u8a8d\u8a3c (Authentication) \u30d7\u30ed\u30bb\u30b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1 (M2M) \u8a8d\u8a3c (Authentication)"}),"\uff1a\u30b5\u30fc\u30d3\u30b9\u307e\u305f\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306e\u8a8d\u8a3c (Authentication) \u30d7\u30ed\u30bb\u30b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u8a8d\u8a3c (Authentication) \u306e\u7a76\u6975\u306e\u76ee\u6a19\u306f\u975e\u5e38\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u3059\uff1a\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\uff08Logto \u3067\u306f\u30e6\u30fc\u30b6\u30fc\u307e\u305f\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\uff09\u306e\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3092\u78ba\u8a8d\u3057\u53d6\u5f97\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"authorization",children:"\u8a8d\u53ef (Authorization)"}),"\n",(0,s.jsx)(i.p,{children:"Logto \u3067\u306f\u3001\u8a8d\u53ef (Authorization) \u306f\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1 (RBAC) \u3092\u901a\u3058\u3066\u884c\u308f\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u6b21\u306e\u30a2\u30af\u30bb\u30b9\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u5b8c\u5168\u306a\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"API \u30ea\u30bd\u30fc\u30b9"}),"\uff1a\u7d76\u5bfe URI \u3067\u8868\u3055\u308c\u308b\u30b0\u30ed\u30fc\u30d0\u30eb\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u7d44\u7e54 (Organizations)"}),"\uff1a\u30e6\u30fc\u30b6\u30fc\u307e\u305f\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b0\u30eb\u30fc\u30d7\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u7d44\u7e54 API \u30ea\u30bd\u30fc\u30b9"}),"\uff1a\u7d44\u7e54\u306b\u5c5e\u3059\u308b API \u30ea\u30bd\u30fc\u30b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u3053\u308c\u3089\u306e\u6982\u5ff5\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u77e5\u308b\u306b\u306f\u3001\u6b21\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/authorization/role-based-access-control",children:"\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1 (RBAC)"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/organizations",children:"\u7d44\u7e54 (\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30b7\u30fc)"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u3053\u308c\u3089\u306e\u6982\u5ff5\u9593\u306e\u95a2\u4fc2\u3092\u8996\u899a\u7684\u306b\u8868\u73fe\u3057\u305f\u3082\u306e\u304c\u3053\u3061\u3089\u3067\u3059\uff1a"}),"\n",(0,s.jsx)(i.mermaid,{value:"graph TD\n  subgraph Resources\n    R(API \u30ea\u30bd\u30fc\u30b9)\n    O(\u7d44\u7e54)\n    OR(\u7d44\u7e54 API \u30ea\u30bd\u30fc\u30b9)\n  end\n\n  subgraph Identities\n    U(\u30e6\u30fc\u30b6\u30fc)\n    A(M2M \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3)\n  end"}),"\n",(0,s.jsx)(i.p,{children:"\u8981\u3059\u308b\u306b\u3001\u8a8d\u53ef (Authorization) \u306f\u300cIdentities\u300d\u30b0\u30eb\u30fc\u30d7\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u300cResources\u300d\u30b0\u30eb\u30fc\u30d7\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u6c7a\u5b9a\u3059\u308b\u30eb\u30fc\u30eb\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"frequently-asked-questions",children:"\u3088\u304f\u3042\u308b\u8cea\u554f"}),"\n",(0,s.jsx)(i.h3,{id:"i-need-to-specify-which-users-can-sign-in-to-an-application",children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u308b\u30e6\u30fc\u30b6\u30fc\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,s.jsx)(i.p,{children:"\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) \u306e\u6027\u8cea\u4e0a\u3001Logto \u306f\u73fe\u5728\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u4ee3\u308f\u308a\u306b\u3001API \u30ea\u30bd\u30fc\u30b9\u3068\u6a29\u9650\u3092\u5b9a\u7fa9\u3057\u3066\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.h3,{id:"i-need-my-users-to-sign-in-to-an-organization",children:"\u30e6\u30fc\u30b6\u30fc\u304c\u7d44\u7e54\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059"}),"\n",(0,s.jsx)(i.p,{children:"\u524d\u8ff0\u306e\u3088\u3046\u306b\u3001\u8a8d\u8a3c (Authentication) \u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u3042\u308a\u3001\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u306f\u8a8d\u53ef (Authorization) \u306b\u3088\u3063\u3066\u51e6\u7406\u3055\u308c\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u3069\u306e\u7d44\u7e54\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\u3092\u6c7a\u5b9a\u3059\u308b\u3053\u3068\u306f\u3001\u8a8d\u53ef (Authorization) \u306e\u554f\u984c\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u30d7\u30ed\u30bb\u30b9\u306f\u3001\u8a8d\u8a3c (Authentication) \u306e\u554f\u984c\u3067\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u3053\u308c\u306f\u3001Logto \u306b\u306f\u300c\u7d44\u7e54\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u300d\u3068\u3044\u3046\u6982\u5ff5\u304c\u306a\u3044\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u8a8d\u8a3c (Authentication) \u3055\u308c\u308b\u3068\u3001\u5b9a\u7fa9\u3055\u308c\u305f\u6a29\u9650\u306b\u57fa\u3065\u3044\u3066\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\uff08\u7d44\u7e54\u30ea\u30bd\u30fc\u30b9\u3092\u542b\u3080\uff09\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u6a29\u9650\u304c\u4e0e\u3048\u3089\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u3053\u306e\u30e2\u30c7\u30eb\u306f\u3001\u8a8d\u8a3c (Authentication) \u3068\u8a8d\u53ef (Authorization) \u306e\u554f\u984c\u3092\u5206\u96e2\u3059\u308b\u305f\u3081\u3001\u52b9\u7387\u7684\u3067\u660e\u78ba\u3067\u3059\u3002GitHub \u3084 Notion \u306a\u3069\u306e\u3059\u3079\u3066\u306e\u6700\u65b0\u306e SaaS \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u3053\u306e\u30e2\u30c7\u30eb\u306b\u5f93\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u305f\u3060\u3057\u3001\u30e6\u30fc\u30b6\u30fc\u30bd\u30fc\u30b9\u3068\u7d44\u7e54\u306e\u9593\u306b 1 \u5bfe 1 \u306e\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u78ba\u7acb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001",(0,s.jsx)(i.a,{href:"/end-user-flows/enterprise-sso",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO)"})," \u3068 ",(0,s.jsx)(i.a,{href:"/organizations/just-in-time-provisioning",children:"\u7d44\u7e54\u306e\u30b8\u30e3\u30b9\u30c8\u30a4\u30f3\u30bf\u30a4\u30e0 (JIT) \u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0"})," \u304c\u5f79\u7acb\u3061\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.h3,{id:"our-customers-need-custom-branding-for-their-sign-in-pages",children:"\u9867\u5ba2\u306f\u30b5\u30a4\u30f3\u30a4\u30f3\u30da\u30fc\u30b8\u306b\u30ab\u30b9\u30bf\u30e0\u30d6\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u3092\u5fc5\u8981\u3068\u3057\u3066\u3044\u307e\u3059"}),"\n",(0,s.jsxs)(i.p,{children:["\u95a2\u9023\u3059\u308b\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(i.a,{href:"/customization/match-your-brand/#app-specific-branding",children:"\u30a2\u30d7\u30ea\u56fa\u6709\u306e\u30d6\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0"})," \u3068 ",(0,s.jsx)(i.a,{href:"/customization/match-your-brand/#organization-specific-branding",children:"\u7d44\u7e54\u56fa\u6709\u306e\u30d6\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function u(n={}){const{wrapper:i}={...(0,o.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},79621:(n,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var e=t(58101);const s={},o=e.createContext(s);function r(n){const i=e.useContext(o);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),e.createElement(o.Provider,{value:i},n.children)}}}]);