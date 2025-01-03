"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[77255],{32328:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","title":"\u6a29\u9650\u7ba1\u7406","description":"\u3042\u306a\u305f\u306e\u30b5\u30fc\u30d3\u30b9\u304c\u6240\u6709\u3057\u3066\u3044\u306a\u3044\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u8a8d\u8a3c (Authentication) \u3059\u308b\u305f\u3081\u306b Logto \u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u3057\u3066\u7d71\u5408\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30a2\u30d7\u30ea\u306f\u901a\u5e38\u3001\u5916\u90e8\u306e\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u304b\u3089\u63d0\u4f9b\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u614e\u91cd\u306a\u6a29\u9650\u7ba1\u7406\u304c\u5fc5\u8981\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management.mdx","sourceDirName":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications","slug":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","permalink":"/ja/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"OIDC / OAuth \u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3","permalink":"/ja/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/"},"next":{"title":"\u540c\u610f\u753b\u9762\u306e\u30d6\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0","permalink":"/ja/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"}}');var s=n(25105),r=n(79621);const t=n.p+"assets/images/grant-permissions-of-organization-data-f95d12ea1b21642e833e8214480f4e3a.webp",a=n.p+"assets/images/grant-permissions-of-user-data-c91e7739d488c66f8553f60d74ce012f.webp",c={sidebar_position:1},d="\u6a29\u9650\u7ba1\u7406",l={},p=[{value:"OIDC \u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6a29\u9650\u3092\u7ba1\u7406\u3059\u308b",id:"manage-the-permissions-of-your-oidc-third-party-applications",level:2},{value:"\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u306e\u6a29\u9650\u3092\u4ed8\u4e0e\u3059\u308b",id:"grant-permissions-of-user-data",level:3},{value:"\u7d44\u7e54\u30c7\u30fc\u30bf\u306e\u6a29\u9650\u3092\u4ed8\u4e0e\u3059\u308b",id:"grant-permissions-of-organization-data",level:3},{value:"\u6a29\u9650\u306e\u7a2e\u985e",id:"permissions-types",level:2},{value:"\u30e6\u30fc\u30b6\u30fc\u6a29\u9650 (\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30b9\u30b3\u30fc\u30d7)",id:"user-permissions-user-profile-scopes",level:3},{value:"API \u30ea\u30bd\u30fc\u30b9\u6a29\u9650 (API \u30ea\u30bd\u30fc\u30b9\u30b9\u30b3\u30fc\u30d7)",id:"api-resource-permissions-api-resource-scopes",level:3},{value:"\u7d44\u7e54\u6a29\u9650 (\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7)",id:"organization-permissions-organization-scopes",level:3}];function h(i){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...i.components},{CloudLink:n}=e;return n||function(i,e){throw new Error("Expected "+(e?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u6a29\u9650\u7ba1\u7406",children:"\u6a29\u9650\u7ba1\u7406"})}),"\n",(0,s.jsx)(e.p,{children:"\u3042\u306a\u305f\u306e\u30b5\u30fc\u30d3\u30b9\u304c\u6240\u6709\u3057\u3066\u3044\u306a\u3044\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u8a8d\u8a3c (Authentication) \u3059\u308b\u305f\u3081\u306b Logto \u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u3057\u3066\u7d71\u5408\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30a2\u30d7\u30ea\u306f\u901a\u5e38\u3001\u5916\u90e8\u306e\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u304b\u3089\u63d0\u4f9b\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u614e\u91cd\u306a\u6a29\u9650\u7ba1\u7406\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["Logto \u306f\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4ed8\u4e0e\u3055\u308c\u308b\u7279\u5b9a\u306e\u6a29\u9650\u3092\u5236\u5fa1\u3059\u308b\u529b\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001",(0,s.jsx)(e.a,{href:"#user-permissions-user-profile-scopes",children:"\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb"}),"\u3001",(0,s.jsx)(e.a,{href:"#api-resource-permissions-api-resource-scopes",children:"API \u30ea\u30bd\u30fc\u30b9"}),"\u3001\u304a\u3088\u3073 ",(0,s.jsx)(e.a,{href:"#organization-permissions-organization-scopes",children:"\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7"})," \u306e\u7ba1\u7406\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u30d5\u30a1\u30fc\u30b9\u30c8\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u3068\u306f\u7570\u306a\u308a\u3001\u8a31\u53ef\u3055\u308c\u3066\u3044\u306a\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u8981\u6c42\u3059\u308b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u306f\u30a2\u30af\u30bb\u30b9\u3092\u62d2\u5426\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u7279\u5b9a\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u304c\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u524d\u306b\u3001\u540c\u610f\u753b\u9762\u3067\u3053\u308c\u3089\u306e\u6a29\u9650\u3092\u78ba\u8a8d\u3057\u627f\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"manage-the-permissions-of-your-oidc-third-party-applications",children:"OIDC \u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6a29\u9650\u3092\u7ba1\u7406\u3059\u308b"}),"\n",(0,s.jsxs)(e.p,{children:["OIDC \u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,s.jsx)(n,{to:"/applications",children:"\u30b3\u30f3\u30bd\u30fc\u30eb > \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 > \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8a73\u7d30\u30da\u30fc\u30b8"})," \u306b\u79fb\u52d5\u3057\u3001",(0,s.jsx)(e.strong,{children:"\u6a29\u9650"})," \u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3066 ",(0,s.jsx)(e.strong,{children:"\u6a29\u9650\u3092\u8ffd\u52a0"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6a29\u9650\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u57fa\u672c\u7684\u306a\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u306f\u5e38\u306b\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u306e\u8981\u6c42\u306b\u5fc5\u8981\u3067\u3059\u3002\u3055\u3089\u306b\u3001Logto \u306f\u7d44\u7e54\u30ea\u30bd\u30fc\u30b9\u306e\u5272\u308a\u5f53\u3066\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001B2B \u30b5\u30fc\u30d3\u30b9\u306b\u6700\u9069\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"grant-permissions-of-user-data",children:"\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u306e\u6a29\u9650\u3092\u4ed8\u4e0e\u3059\u308b"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"#user-permissions-user-profile-scopes",children:"\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u6a29\u9650"}),"\uff08\u4f8b\uff1a\u30e1\u30fc\u30eb\u3001\u540d\u524d\u3001\u30a2\u30d0\u30bf\u30fc\uff09\u3084 ",(0,s.jsx)(e.a,{href:"#api-resource-permissions-api-resource-scopes",children:"API \u30ea\u30bd\u30fc\u30b9\u6a29\u9650"}),"\uff08\u4f8b\uff1a\u7279\u5b9a\u306e\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u8aad\u307f\u53d6\u308a\u307e\u305f\u306f\u66f8\u304d\u8fbc\u307f\u30a2\u30af\u30bb\u30b9\uff09\u3092\u542b\u3080\u30e6\u30fc\u30b6\u30fc\u30ec\u30d9\u30eb\u306e\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u8981\u6c42\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306e\u540d\u524d\uff08\u4f8b\uff1a\u500b\u4eba\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3001API \u540d\uff09\u304a\u3088\u3073\u7279\u5b9a\u306e\u6a29\u9650\u306e\u8aac\u660e\uff08\u4f8b\uff1a\u3042\u306a\u305f\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\uff09\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306e\u540c\u610f\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u627f\u8a8d"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u6307\u5b9a\u3055\u308c\u305f\u6a29\u9650\u3092\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4ed8\u4e0e\u3059\u308b\u3053\u3068\u306b\u540c\u610f\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:a,alt:"grant permissions of user data"})}),"\n",(0,s.jsx)(e.h3,{id:"grant-permissions-of-organization-data",children:"\u7d44\u7e54\u30c7\u30fc\u30bf\u306e\u6a29\u9650\u3092\u4ed8\u4e0e\u3059\u308b"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"#organization-permissions-organization-scopes",children:"\u7d44\u7e54\u6a29\u9650"}),"\u3084 ",(0,s.jsx)(e.a,{href:"#api-resource-permissions-api-resource-scopes",children:"API \u30ea\u30bd\u30fc\u30b9\u6a29\u9650"}),"\u3092\u542b\u3080\u7d44\u7e54\u30ec\u30d9\u30eb\u306e\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002Logto \u306f API \u30ea\u30bd\u30fc\u30b9\u3092\u7279\u5b9a\u306e\u7d44\u7e54\u30ed\u30fc\u30eb\u306b\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u540c\u610f\u753b\u9762\u3067\u306f\u3001\u7d44\u7e54\u30c7\u30fc\u30bf\u306f\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3068\u306f\u5225\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u8a8d\u53ef (Authorization) \u30d5\u30ed\u30fc\u4e2d\u306b\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u7279\u5b9a\u306e\u7d44\u7e54\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u78ba\u8a8d\u3059\u308b\u524d\u306b\u7d44\u7e54\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u9078\u629e\u3055\u308c\u305f\u7d44\u7e54\u306e\u30c7\u30fc\u30bf\u3068\u95a2\u9023\u3059\u308b\u6a29\u9650\u306b\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("img",{src:t,alt:"grant permissions of organization data"})}),"\n",(0,s.jsx)(e.h2,{id:"permissions-types",children:"\u6a29\u9650\u306e\u7a2e\u985e"}),"\n",(0,s.jsx)(e.h3,{id:"user-permissions-user-profile-scopes",children:"\u30e6\u30fc\u30b6\u30fc\u6a29\u9650 (\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30b9\u30b3\u30fc\u30d7)"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u308c\u3089\u306e\u6a29\u9650\u306f OIDC \u6a19\u6e96\u3067\u3042\u308a\u3001Logto \u306e\u57fa\u672c\u7684\u306a\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30b9\u30b3\u30fc\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u30af\u30ec\u30fc\u30e0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u30af\u30ec\u30fc\u30e0\u306f\u3001ID \u30c8\u30fc\u30af\u30f3\u304a\u3088\u3073 userinfo \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3067\u8fd4\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"profile"}),": OIDC \u6a19\u6e96\u30b9\u30b3\u30fc\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30a2\u30d0\u30bf\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"email"}),": OIDC \u6a19\u6e96\u30b9\u30b3\u30fc\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u30e1\u30fc\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"phone"}),": OIDC \u6a19\u6e96\u30b9\u30b3\u30fc\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u96fb\u8a71\u756a\u53f7\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"custom_data"}),": Logto \u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30b9\u30b3\u30fc\u30d7\u3067\u3001",(0,s.jsx)(e.a,{href:"/user-management/user-data/#custom-data",children:"\u30e6\u30fc\u30b6\u30fc\u306e\u30ab\u30b9\u30bf\u30e0\u30c7\u30fc\u30bf"})," \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"identity"}),": Logto \u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30b9\u30b3\u30fc\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30ea\u30f3\u30af\u3055\u308c\u305f ",(0,s.jsx)(e.a,{href:"/user-management/user-data/#social-identities",children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3"})," \u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"role"}),": Logto \u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30b9\u30b3\u30fc\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306e ",(0,s.jsx)(e.a,{href:"/authorization/role-based-access-control/#roles",children:"\u30ed\u30fc\u30eb"})," \u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"urn:logto:scope:organizations"}),": Logto \u30e6\u30fc\u30b6\u30fc\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u7d44\u7e54\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u6709\u52b9\u5316\u3055\u308c\u3001\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u8981\u6c42\u3055\u308c\u305f\u5834\u5408\u3001\u540c\u610f\u753b\u9762\u306b\u7d44\u7e54\u30bb\u30ec\u30af\u30bf\u30fc\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306f\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u7d44\u7e54\u3092\u78ba\u8a8d\u3057\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306f ",(0,s.jsx)(e.a,{href:"/organizations",children:"\u7d44\u7e54"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"urn:logto:scope:organization_roles"}),": Logto \u30e6\u30fc\u30b6\u30fc\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u7d44\u7e54\u30ed\u30fc\u30eb\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"\u8a8d\u53ef (Authorization) \u30ea\u30af\u30a8\u30b9\u30c8\u3067\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30b9\u30b3\u30fc\u30d7\u3092\u8981\u6c42\u3059\u308b\u3068\u3001\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.h3,{id:"api-resource-permissions-api-resource-scopes",children:"API \u30ea\u30bd\u30fc\u30b9\u6a29\u9650 (API \u30ea\u30bd\u30fc\u30b9\u30b9\u30b3\u30fc\u30d7)"}),"\n",(0,s.jsxs)(e.p,{children:["Logto \u306f API \u30ea\u30bd\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1 (RBAC) \u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002API \u30ea\u30bd\u30fc\u30b9\u306f\u3042\u306a\u305f\u306e\u30b5\u30fc\u30d3\u30b9\u304c\u6240\u6709\u3057\u3001Logto \u306b\u3088\u3063\u3066\u4fdd\u8b77\u3055\u308c\u3066\u3044\u308b\u30ea\u30bd\u30fc\u30b9\u3067\u3059\u3002\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u3042\u306a\u305f\u306e API \u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3059\u308b\u305f\u3081\u306b\u3001\u72ec\u81ea\u306b\u5b9a\u7fa9\u3057\u305f API \u30b9\u30b3\u30fc\u30d7\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306f ",(0,s.jsx)(e.a,{href:"/authorization/role-based-access-control",children:"RBAC"}),"\u3001\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3001\u304a\u3088\u3073 ",(0,s.jsx)(e.a,{href:"/authorization/api-resources/protect-your-api/",children:"API \u3092\u4fdd\u8b77\u3059\u308b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(n,{to:"/api-resources",children:"\u30b3\u30f3\u30bd\u30fc\u30eb > API \u30ea\u30bd\u30fc\u30b9"})," \u3067 API\n\u30ea\u30bd\u30fc\u30b9\u30b9\u30b3\u30fc\u30d7\u3092\u4f5c\u6210\u304a\u3088\u3073\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u306a\u3044 API \u30ea\u30bd\u30fc\u30b9\u30b9\u30b3\u30fc\u30d7\u306f\u3001\u8a8d\u53ef (Authorization) \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u969b\u306b\u7121\u8996\u3055\u308c\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u540c\u610f\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u305a\u3001Logto \u306b\u3088\u3063\u3066\u4ed8\u4e0e\u3055\u308c\u307e\u305b\u3093\u3002"})}),"\n",(0,s.jsx)(e.h3,{id:"organization-permissions-organization-scopes",children:"\u7d44\u7e54\u6a29\u9650 (\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7)"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/authorization/organization-template/#organization-permission",children:"\u7d44\u7e54\u6a29\u9650"})," \u306f\u3001Logto \u7d44\u7e54\u5c02\u7528\u306b\u5b9a\u7fa9\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3067\u3059\u3002\u7d44\u7e54\u60c5\u5831\u3068\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["Logto \u7d44\u7e54\u6a29\u9650\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(e.code,{children:"urn:logto:scope:organizations"})," \u30e6\u30fc\u30b6\u30fc\u30b9\u30b3\u30fc\u30d7\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001\u7d44\u7e54\u6a29\u9650\u306f\u8a8d\u53ef (Authorization) \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u969b\u306b\u7121\u8996\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,s.jsxs)(e.p,{children:["\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u8a2d\u5b9a\u30da\u30fc\u30b8\u3067\u72ec\u81ea\u306e\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306f ",(0,s.jsx)(e.a,{href:"/authorization/organization-template/configure-organization-template/",children:"\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a2d\u5b9a"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7\u306f\u3001\u8a8d\u53ef (Authorization) \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u969b\u306b\u7121\u8996\u3055\u308c\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u540c\u610f\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u305a\u3001Logto \u306b\u3088\u3063\u3066\u4ed8\u4e0e\u3055\u308c\u307e\u305b\u3093\u3002"})})]})}function u(i={}){const{wrapper:e}={...(0,r.R)(),...i.components};return e?(0,s.jsx)(e,{...i,children:(0,s.jsx)(h,{...i})}):h(i)}},79621:(i,e,n)=>{n.d(e,{R:()=>t,x:()=>a});var o=n(58101);const s={},r=o.createContext(s);function t(i){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(s):i.components||s:t(i.components),o.createElement(r.Provider,{value:e},i.children)}}}]);