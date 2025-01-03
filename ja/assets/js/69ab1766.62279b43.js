"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[23057],{97950:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"developers/custom-token-claims/create-script","title":"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b","description":"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3 \u306b \u30ab\u30b9\u30bf\u30e0\u30af\u30ec\u30fc\u30e0\u3092\u8ffd\u52a0\u3059\u308b \u306b\u306f\u3001\u305d\u308c\u3089\u306e\u30af\u30ec\u30fc\u30e0\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u30af\u30ec\u30fc\u30e0\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059 JavaScript \u95a2\u6570\u3068\u3057\u3066\u8a18\u8ff0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/developers/custom-token-claims/create-script.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/create-script","permalink":"/ja/developers/custom-token-claims/create-script","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/developers/custom-token-claims/create-script.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"create-script","title":"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b","sidebar_label":"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u4e00\u822c\u7684\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9","permalink":"/ja/developers/custom-token-claims/common-use-cases"},"next":{"title":"\u30e6\u30fc\u30b6\u30fc\u306a\u308a\u3059\u307e\u3057","permalink":"/ja/developers/user-impersonation"}}');var i=s(25105),r=s(79621);const d={id:"create-script",title:"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b",sidebar_label:"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b",sidebar_position:3},c="\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b",l={},o=[{value:"<code>getCustomJwtClaims()</code> \u95a2\u6570\u3092\u5b9f\u88c5\u3059\u308b",id:"implement-getcustomjwtclaims-function",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 1: \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7de8\u96c6\u3059\u308b",id:"step-1-edit-the-script",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 2: \u5165\u529b\u30d1\u30e9\u30e1\u30fc\u30bf",id:"step-2-input-parameters",level:2},{value:"token",id:"token",level:3},{value:"context (\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u307f\u5229\u7528\u53ef\u80fd)",id:"context-only-available-for-user-access-token",level:3},{value:"environmentVariables",id:"environmentvariables",level:3},{value:"api",id:"api",level:3},{value:"\u30b9\u30c6\u30c3\u30d7 3: \u5916\u90e8\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b",id:"step-3-fetch-external-data",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 4: \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c6\u30b9\u30c8\u3059\u308b",id:"step-4-test-the-script",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b",children:"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})," \u306b ",(0,i.jsx)(n.a,{href:"/developers/custom-token-claims",children:"\u30ab\u30b9\u30bf\u30e0\u30af\u30ec\u30fc\u30e0\u3092\u8ffd\u52a0\u3059\u308b"})," \u306b\u306f\u3001\u305d\u308c\u3089\u306e\u30af\u30ec\u30fc\u30e0\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u30af\u30ec\u30fc\u30e0\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059 ",(0,i.jsx)(n.code,{children:"JavaScript"})," \u95a2\u6570\u3068\u3057\u3066\u8a18\u8ff0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(t,{to:"/customize-jwt",children:"Console > Custom JWT"})," \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u53ef\u80fd\u306a\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u306b\u306f\u30012 \u3064\u306e\u7570\u306a\u308b\u30bf\u30a4\u30d7\u306e\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"}),"\uff1a\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306b\u767a\u884c\u3055\u308c\u308b\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3002\u4f8b\uff1aWeb \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3084\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"}),"\uff1a\u30b5\u30fc\u30d3\u30b9\u307e\u305f\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u767a\u884c\u3055\u308c\u308b\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3002\u4f8b\uff1a",(0,i.jsx)(n.a,{href:"/quick-starts/m2m",children:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"})," \u7528\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7570\u306a\u308b\u30bf\u30a4\u30d7\u306e\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306f\u3001\u7570\u306a\u308b\u30c8\u30fc\u30af\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u6301\u3064\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u5404\u30bf\u30a4\u30d7\u306e\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306b\u5bfe\u3057\u3066\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u3092\u500b\u5225\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u305f\u3044\u4efb\u610f\u306e\u30bf\u30a4\u30d7\u306e\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u9078\u629e\u3057\u3001",(0,i.jsx)(n.strong,{children:"Add custom claims"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u6a5f\u80fd\u306f\u3001\u6b21\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c\u5229\u7528\u3067\u304d\u307e\u3059\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/logto-oss",children:"Logto OSS"})," \u30e6\u30fc\u30b6\u30fc"]}),"\n",(0,i.jsxs)(n.li,{children:["\u958b\u767a\u74b0\u5883\u3092\u6301\u3064 ",(0,i.jsx)(n.a,{href:"/logto-cloud/tenant-settings#development",children:"Logto Cloud \u30c6\u30ca\u30f3\u30c8"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u672c\u756a\u74b0\u5883\u3092\u6301\u3064 Logto Cloud \u6709\u6599\u30c6\u30ca\u30f3\u30c8\uff08",(0,i.jsx)(n.a,{href:"https://logto.io/pricing",children:"Pro \u30c6\u30ca\u30f3\u30c8\u304a\u3088\u3073 Enterprise \u30c6\u30ca\u30f3\u30c8"})," \u3092\u542b\u3080\uff09"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"implement-getcustomjwtclaims-function",children:[(0,i.jsx)(n.code,{children:"getCustomJwtClaims()"})," \u95a2\u6570\u3092\u5b9f\u88c5\u3059\u308b"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Custom JWT"})," \u8a73\u7d30\u30da\u30fc\u30b8\u3067\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f8\u304f\u305f\u3081\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u30a8\u30c7\u30a3\u30bf\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u30af\u30ec\u30fc\u30e0\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059 ",(0,i.jsx)(n.code,{children:"JavaScript"})," \u95a2\u6570\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u8a73\u7d30\u30da\u30fc\u30b8",src:s(35931).A+"",width:"3146",height:"1818"})}),"\n",(0,i.jsx)(n.h2,{id:"step-1-edit-the-script",children:"\u30b9\u30c6\u30c3\u30d7 1: \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7de8\u96c6\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u5de6\u5074\u306e\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002\u7a7a\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u30c7\u30d5\u30a9\u30eb\u30c8\u306e ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," \u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u305d\u3053\u304b\u3089\u59cb\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u95a2\u6570\u3092\u4fee\u6b63\u3057\u3066\u3001\u72ec\u81ea\u306e\u30ab\u30b9\u30bf\u30e0\u30af\u30ec\u30fc\u30e0\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3059\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  return {};\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306e\u30a8\u30c7\u30a3\u30bf\u306f\u3001JavaScript \u8a00\u8a9e\u30b5\u30fc\u30d0\u30fc\u3092\u4f7f\u7528\u3057\u3066\u57fa\u672c\u7684\u306a\u69cb\u6587\u306e\u30cf\u30a4\u30e9\u30a4\u30c8\u3001\u30b3\u30fc\u30c9\u88dc\u5b8c\u3001\u30a8\u30e9\u30fc\u30c1\u30a7\u30c3\u30af\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u5165\u529b\u30d1\u30e9\u30e1\u30fc\u30bf\u306f jsDoc \u30b9\u30bf\u30a4\u30eb\u3067\u9069\u5207\u306b\u578b\u4ed8\u3051\u3055\u308c\u3001\u6587\u66f8\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u306e IntelliSense \u3092\u4f7f\u7528\u3057\u3066\u3001\u5165\u529b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u6b63\u3057\u304f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002\u30da\u30fc\u30b8\u306e\u53f3\u5074\u306b\u8a73\u7d30\u306a\u30d1\u30e9\u30e1\u30fc\u30bf\u5b9a\u7fa9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u3053\u306e\u95a2\u6570\u306f\u30e2\u30b8\u30e5\u30fc\u30eb\u3068\u3057\u3066\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059\u3002\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u95a2\u6570\u3092\u6b63\u3057\u304f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u3001\u95a2\u6570\u540d\u3092 ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," \u306e\u307e\u307e\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-input-parameters",children:"\u30b9\u30c6\u30c3\u30d7 2: \u5165\u529b\u30d1\u30e9\u30e1\u30fc\u30bf"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," \u95a2\u6570\u306f\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5165\u529b\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\u5165\u529b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u6b21\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.h3,{id:"token",children:"token"}),"\n",(0,i.jsx)(n.p,{children:"\u30c8\u30fc\u30af\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002\u3053\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5143\u306e\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u3068\u30e1\u30bf\u30c7\u30fc\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30c8\u30fc\u30af\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u8a73\u7d30\u306a\u578b\u5b9a\u7fa9\u306f\u3001\u30da\u30fc\u30b8\u306e\u53f3\u5074\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u306e IntelliSense \u306f\u3001\u5165\u529b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u3053\u308c\u3089\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u6b63\u3057\u304f\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306e\u3092\u52a9\u3051\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8","\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,i.jsx)(n.th,{children:"\u8aac\u660e"}),(0,i.jsx)(n.th,{children:"\u578b"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jti"})}),(0,i.jsx)(n.td,{children:"\u4e00\u610f\u306e JWT ID"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"aud"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"scope"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30b9\u30b3\u30fc\u30d7"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"clientId"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 ID"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"accountId"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30e6\u30fc\u30b6\u30fc ID"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"expiresWithSession"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u304c\u30bb\u30c3\u30b7\u30e7\u30f3\u3068\u5171\u306b\u671f\u9650\u5207\u308c\u306b\u306a\u308b\u304b\u3069\u3046\u304b"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"grantId"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u73fe\u5728\u306e\u8a8d\u8a3c (Authentication) \u30b0\u30e9\u30f3\u30c8 ID"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"gty"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30b0\u30e9\u30f3\u30c8\u30bf\u30a4\u30d7"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"kind"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"AccessToken"})})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8","\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,i.jsx)(n.th,{children:"\u8aac\u660e"}),(0,i.jsx)(n.th,{children:"\u578b"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jti"})}),(0,i.jsx)(n.td,{children:"\u4e00\u610f\u306e JWT ID"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"aud"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"scope"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30b9\u30b3\u30fc\u30d7"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"clientId"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 ID"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"kind"})}),(0,i.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u7a2e\u985e"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ClientCredentials"})})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"context-only-available-for-user-access-token",children:"context (\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u307f\u5229\u7528\u53ef\u80fd)"}),"\n",(0,i.jsx)(n.p,{children:"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u73fe\u5728\u306e\u8a8d\u53ef (Authorization) \u30d7\u30ed\u30bb\u30b9\u306b\u95a2\u9023\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3068\u30b0\u30e9\u30f3\u30c8\u30c7\u30fc\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u5834\u5408\u3001Logto \u306f\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u8ffd\u52a0\u306e\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u30af\u30ec\u30fc\u30e0\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u3068\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u30b7\u30c3\u30d7\u30c7\u30fc\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"/user-management/user-data",children:"\u30e6\u30fc\u30b6\u30fc"})," \u3068 ",(0,i.jsx)(n.a,{href:"/organizations/organization-data",children:"\u7d44\u7e54"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u30b0\u30e9\u30f3\u30c8\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"}),"\n\u306a\u308a\u3059\u307e\u3057\u30c8\u30fc\u30af\u30f3\u4ea4\u63db\u306b\u3088\u3063\u3066\u4ed8\u4e0e\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u5834\u5408\u3001Logto \u306f\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u8ffd\u52a0\u306e\u30b0\u30e9\u30f3\u30c8\u30c7\u30fc\u30bf\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u30b0\u30e9\u30f3\u30c8\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u30b5\u30d6\u30b8\u30a7\u30af\u30c8\u30c8\u30fc\u30af\u30f3\u304b\u3089\u306e\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"/developers/user-impersonation",children:"\u306a\u308a\u3059\u307e\u3057"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"environmentvariables",children:"environmentVariables"}),"\n",(0,i.jsxs)(n.p,{children:["\u53f3\u5074\u306e ",(0,i.jsx)(n.strong,{children:"Set environment variables"})," \u30bb\u30af\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u5909\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u30cf\u30fc\u30c9\u30b3\u30fc\u30c9\u3057\u305f\u304f\u306a\u3044\u6a5f\u5bc6\u60c5\u5831\u3084\u8a2d\u5b9a\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3067\u304d\u307e\u3059\u3002\u4f8b\uff1aAPI \u30ad\u30fc\u3001\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3001\u307e\u305f\u306f URL\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u3053\u3067\u8a2d\u5b9a\u3057\u305f\u3059\u3079\u3066\u306e\u74b0\u5883\u5909\u6570\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u5165\u529b\u30d1\u30e9\u30e1\u30fc\u30bf\u306e ",(0,i.jsx)(n.code,{children:"environmentVariables"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3001\u3053\u308c\u3089\u306e\u5909\u6570\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"api",children:"api"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"api"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30c8\u30fc\u30af\u30f3\u767a\u884c\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3059\u308b\u8ffd\u52a0\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u306e\u305f\u3081\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u4f7f\u7528\u3067\u304d\u308b\u4e00\u9023\u306e\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u95a2\u6570\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",(0,i.jsx)(n.code,{children:"api"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u6b21\u306e\u95a2\u6570\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"api.denyAccess(message?: string): void\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"api.denyAccess()"})," \u95a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30ab\u30b9\u30bf\u30e0\u30e1\u30c3\u30bb\u30fc\u30b8\u3067\u30c8\u30fc\u30af\u30f3\u767a\u884c\u30d7\u30ed\u30bb\u30b9\u3092\u62d2\u5426\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u30c8\u30fc\u30af\u30f3\u767a\u884c\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3059\u308b\u8ffd\u52a0\u306e\u30a2\u30af\u30bb\u30b9\u691c\u8a3c\u3092\u5f37\u5236\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-fetch-external-data",children:"\u30b9\u30c6\u30c3\u30d7 3: \u5916\u90e8\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u5916\u90e8\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001Node \u306b\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b ",(0,i.jsx)(n.code,{children:"fetch"})," \u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002",(0,i.jsx)(n.code,{children:"fetch"})," \u95a2\u6570\u306f\u3001\u5916\u90e8 API \u306b HTTP \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3046\u305f\u3081\u306e\u30d7\u30ed\u30df\u30b9\u30d9\u30fc\u30b9\u306e\u95a2\u6570\u3067\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const getCustomJwtClaims = async ({ environmentVariables }) => {\n  const response = await fetch('https://api.example.com/data', {\n    headers: {\n      Authorization: `Bearer ${environmentVariables.API_KEY}`,\n    },\n  });\n\n  const data = await response.json();\n\n  return {\n    data,\n  };\n};\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5916\u90e8\u30c7\u30fc\u30bf\u306e\u53d6\u5f97\u306f\u3001\u30c8\u30fc\u30af\u30f3\u767a\u884c\u30d7\u30ed\u30bb\u30b9\u306b\u9045\u5ef6\u3092\u3082\u305f\u3089\u3059\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u5916\u90e8 API \u304c\u4fe1\u983c\u6027\u304c\u9ad8\u304f\u3001\u8981\u4ef6\u3092\u6e80\u305f\u3059\u306e\u306b\u5341\u5206\u306a\u901f\u3055\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),(0,i.jsx)(n.p,{children:"\u3055\u3089\u306b\uff1a"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u5185\u3067\u30a8\u30e9\u30fc\u3068\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u9069\u5207\u306b\u51e6\u7406\u3057\u3001\u30c8\u30fc\u30af\u30f3\u767a\u884c\u30d7\u30ed\u30bb\u30b9\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u9069\u5207\u306a\u8a8d\u8a3c\u30d8\u30c3\u30c0\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u5916\u90e8 API \u3078\u306e\u4e0d\u6b63\u30a2\u30af\u30bb\u30b9\u3092\u9632\u304e\u307e\u3059\u3002"}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"step-4-test-the-script",children:"\u30b9\u30c6\u30c3\u30d7 4: \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c6\u30b9\u30c8\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4fdd\u5b58\u3059\u308b\u524d\u306b\u30c6\u30b9\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30da\u30fc\u30b8\u306e\u53f3\u5074\u306b\u3042\u308b ",(0,i.jsx)(n.strong,{children:"Test context"})," \u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30c6\u30b9\u30c8\u7528\u306e\u30e2\u30c3\u30af\u30c8\u30fc\u30af\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30a8\u30c7\u30a3\u30bf\u306e\u53f3\u4e0a\u9685\u306b\u3042\u308b ",(0,i.jsx)(n.strong,{children:"Run test"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30e2\u30c3\u30af\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u51fa\u529b\u306f ",(0,i.jsx)(n.strong,{children:"Test Result"})," \u30c9\u30ed\u30ef\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u30ab\u30b9\u30bf\u30e0 JWT \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c6\u30b9\u30c8\u3059\u308b",src:s(77896).A+"",width:"2682",height:"1322"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u7d50\u679c\u306f\u3001\u8a2d\u5b9a\u3057\u305f\u30e2\u30c3\u30af\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u305f ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," \u95a2\u6570\u306e\u51fa\u529b\u3067\u3059\uff08",(0,i.jsx)(n.a,{href:"/developers/custom-token-claims/#how-do-custom-token-claims-work",children:"\u30b7\u30fc\u30b1\u30f3\u30b9\u56f3"})," \u306e\u30b9\u30c6\u30c3\u30d7 3 \u3092\u5b8c\u4e86\u3057\u305f\u5f8c\u306b\u5f97\u3089\u308c\u308b\u300c\u8ffd\u52a0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u300d\uff09\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u30c8\u30fc\u30af\u30f3\u767a\u884c\u30d7\u30ed\u30bb\u30b9\u3067\u5b9f\u884c\u3055\u308c\u308b\u3068\u304d\u3001\u5b9f\u969b\u306e\u30c8\u30fc\u30af\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u3068\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0\u30c8\u30fc\u30af\u30f3\u30af\u30ec\u30fc\u30e0\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u4fdd\u5b58\u3055\u308c\u3001\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u767a\u884c\u30d7\u30ed\u30bb\u30b9\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},35931:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/custom-jwt-detail-page-9dc0f24eaf27c30b0b8b505111355be4.png"},77896:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/test-custom-jwt-script-312444d1b749a7a2be2b94f501dda3aa.png"},79621:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(58101);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);