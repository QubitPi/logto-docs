"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[95435],{99534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"authorization/api-resources/protect-your-api","title":"API \u3092\u4fdd\u8b77\u3059\u308b","description":"\u67d4\u8edf\u3067\u8a73\u7d30\u306a\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30dd\u30ea\u30b7\u30fc\u304c\u5fc5\u8981\u306a\u3044\u5834\u5408\u306f\u3001API \u3092\u76f4\u63a5\u4fdd\u8b77\u3059\u308b\u3060\u3051\u3067\u6e08\u307f\u307e\u3059\u3002\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3092\u30a2\u30d7\u30ea\u306b\u7d71\u5408\u3059\u308b\u65b9\u6cd5\u3092\u3001\u30b7\u30fc\u30b1\u30f3\u30b9\u56f3\u3068\u5fc5\u8981\u306a\u30b9\u30c6\u30c3\u30d7\u3092\u901a\u3058\u3066\u8aac\u660e\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/authorization/api-resources/protect-your-api.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/protect-your-api","permalink":"/ja/authorization/api-resources/protect-your-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/authorization/api-resources/protect-your-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"API \u30ea\u30bd\u30fc\u30b9","permalink":"/ja/authorization/api-resources/"},"next":{"title":"\u30ac\u30a4\u30c9: Python","permalink":"/ja/authorization/api-resources/python"}}');var i=r(25105),s=r(79621);const o={sidebar_position:1},c="API \u3092\u4fdd\u8b77\u3059\u308b",d={},a=[{value:"\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8",id:"authentication-request",level:2},{value:"\u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8",id:"token-request",level:2},{value:"API \u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8",id:"request-to-the-api-resource",level:2},{value:"API \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u53ef\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u3059\u308b",id:"validate-authorization-tokens-for-api-requests",level:2},{value:"JWS \u30c8\u30fc\u30af\u30f3\u306e\u7406\u89e3",id:"understanding-jws-token",level:4},{value:"\u8a8d\u53ef\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u3059\u308b",id:"validate-the-authorization-token",level:4},{value:"\u53c2\u8003",id:"reference",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"api-\u3092\u4fdd\u8b77\u3059\u308b",children:"API \u3092\u4fdd\u8b77\u3059\u308b"})}),"\n",(0,i.jsx)(t.p,{children:"\u67d4\u8edf\u3067\u8a73\u7d30\u306a\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u30dd\u30ea\u30b7\u30fc\u304c\u5fc5\u8981\u306a\u3044\u5834\u5408\u306f\u3001API \u3092\u76f4\u63a5\u4fdd\u8b77\u3059\u308b\u3060\u3051\u3067\u6e08\u307f\u307e\u3059\u3002\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3092\u30a2\u30d7\u30ea\u306b\u7d71\u5408\u3059\u308b\u65b9\u6cd5\u3092\u3001\u30b7\u30fc\u30b1\u30f3\u30b9\u56f3\u3068\u5fc5\u8981\u306a\u30b9\u30c6\u30c3\u30d7\u3092\u901a\u3058\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: 1. \u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8\n    Client->>Logto: GET /oidc/auth\n    Note right of Client: resource=https://resource-server.com/api<br/>\u304a\u3088\u3073\u30aa\u30d7\u30b7\u30e7\u30f3\u306e scope=read write\n    Logto--\x3e>Client: authorization_code \u3092\u8fd4\u3059\n\n    Note over Client,API: 2. \u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\n    Client->>Logto: POST /oidc/token\n    Note right of Client: authorization_code<br/>resource=https://resource-server.com/api<br/>\u304a\u3088\u3073\u30aa\u30d7\u30b7\u30e7\u30f3\u306e scope=read write\n    Logto--\x3e>Client: JWT \u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u8fd4\u3059\n    Note left of Logto: \u30c8\u30fc\u30af\u30f3\u306b\u306f\u4ee5\u4e0b\u304c\u542b\u307e\u308c\u308b\uff1a<br/>- \u30ea\u30bd\u30fc\u30b9\u306b\u5236\u9650\u3055\u308c\u305f\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9<br/>- \u4ed8\u4e0e\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\uff08\u3042\u308b\u5834\u5408\uff09\n\n    Note over Client,API: 3. API \u30ea\u30af\u30a8\u30b9\u30c8\n    Client->>API: Bearer \u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\n    Note over API: JWT \u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\uff1a\n    Note over API: - \u7f72\u540d\u3092\u78ba\u8a8d<br/>- \u767a\u884c\u8005\u3092\u78ba\u8a8d<br/>- \u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3092\u78ba\u8a8d<br/>- \u6709\u52b9\u671f\u9650\u3092\u78ba\u8a8d<br/>- \u30b9\u30b3\u30fc\u30d7\u3092\u78ba\u8a8d\uff08RBAC \u304c\u6709\u52b9\u306a\u5834\u5408\uff09\n    alt \u30c8\u30fc\u30af\u30f3\u304c\u6709\u52b9\n        API--\x3e>Client: \u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\n    else \u30c8\u30fc\u30af\u30f3\u304c\u7121\u52b9\n        API--\x3e>Client: 401 Unauthorized\n    end"}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Logto \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8: ",(0,i.jsx)(t.code,{children:"https://tenant-id.logto.app"})]}),"\n",(0,i.jsxs)(t.li,{children:["\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3: ",(0,i.jsx)(t.code,{children:"https://client.example.org"})]}),"\n",(0,i.jsxs)(t.li,{children:["API \u30ea\u30bd\u30fc\u30b9\u30b5\u30fc\u30d0\u30fc: ",(0,i.jsx)(t.code,{children:"https://resource-server.com/api"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u5b9f\u88c5\u6642\u306b\u306f\u3053\u308c\u3089\u3092\u5b9f\u969b\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u7f6e\u304d\u63db\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"authentication-request",children:"\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8"})," \u306b\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u30ea\u30b9\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u8981\u6c42\u3059\u308b\u53ef\u80fd\u6027\u306e\u3042\u308b\u3059\u3079\u3066\u306e\u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u304c\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"GET https://tenant-id.logto.app/oidc/auth?response_type=code\n    &client_id=s6BhdRkqt3\n    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI\n    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    &resource=https%3A%2F%2Fresource-server.com%2Fapi\n    &scope=read%20write\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Logto \u306f\u3053\u308c\u3089\u306e\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc\u3092\u691c\u8a3c\u3057\u3001\u4fdd\u5b58\u3057\u307e\u3059\u3002\u6307\u5b9a\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u5236\u9650\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3068\u3068\u3082\u306b ",(0,i.jsx)(t.code,{children:"authorization_code"})," \u304c\u4ed8\u4e0e\u3055\u308c\u3001\u8fd4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"Logto SDK \u306e\u8a2d\u5b9a\u4f8b\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const config: LogtoConfig = {\n  // ...other configs\n  resources: ['https://resource-server.com/api'],\n  scopes: ['read', 'write'],\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"token-request",children:"\u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,i.jsxs)(t.p,{children:["\u30ea\u30bd\u30fc\u30b9\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u4e0a\u8a18\u3067\u4ed8\u4e0e\u3055\u308c\u305f ",(0,i.jsx)(t.code,{children:"authorization_code"})," \u3068\u3068\u3082\u306b ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"\u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8"})," \u306b\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u30bf\u30fc\u30b2\u30c3\u30c8 API \u30ea\u30bd\u30fc\u30b9\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u304c\u6307\u5b9a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"POST https://tenant-id.logto.app/oidc/token HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb&code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ&resource=https%3A%2F%2Fresource-server.com%2Fapi\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u8981\u6c42\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u5236\u9650\u3055\u308c\u305f\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3092\u6301\u3064\u6697\u53f7\u5316\u3055\u308c\u305f\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u304c Logto \u306b\u3088\u3063\u3066\u4ed8\u4e0e\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306b\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u53ef (Authorization) \u72b6\u614b\u3092\u8868\u3059\u305f\u3081\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u30ed\u30fc\u30eb\u3001\u30c8\u30fc\u30af\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3068\u6709\u52b9\u671f\u9650\u306a\u3069\u3067\u3059\u3002"}),"\n",(0,i.jsx)(t.p,{children:"Logto SDK \u306e\u30b3\u30fc\u30c9\u4f8b\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const accessToken = await logtoClient.getAccessToken('https://resource-server.com/api');\n"})}),"\n",(0,i.jsx)(t.p,{children:"accessToken \u306e\u30da\u30a4\u30ed\u30fc\u30c9\u306b\u306f\u4ee5\u4e0b\u304c\u542b\u307e\u308c\u307e\u3059\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"{\n  iss: '<your-logto-endpoint>/oidc',\n  aud: 'https://resource-server.com/api',\n  scope: 'read write'\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"request-to-the-api-resource",children:"API \u30ea\u30bd\u30fc\u30b9\u3078\u306e\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,i.jsxs)(t.p,{children:["\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u306f\u3001Authorization \u30d8\u30c3\u30c0\u30fc\u306b\u4e0e\u3048\u3089\u308c\u305f ",(0,i.jsx)(t.code,{children:"access_token"})," \u3092\u63d0\u793a\u3057\u3066 API \u30ea\u30bd\u30fc\u30b9\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"GET https://resource-server.com/api/users\nAuthorization: Bearer eyJhbGciOiJIUz...\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Logto \u306f\u3001API \u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u6a19\u6e96\u306e\u30c8\u30fc\u30af\u30f3\u30d9\u30fc\u30b9\u306e\u8a8d\u53ef (Authorization) \u30d7\u30ed\u30c8\u30b3\u30eb\u306b\u5f93\u3044\u307e\u3059\u3002OAuth 2.0 \u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u3001OAuth 2.0 \u306e ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"\u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"validate-authorization-tokens-for-api-requests",children:"API \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u53ef\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u3059\u308b"}),"\n",(0,i.jsxs)(t.p,{children:["Logto \u306f\u3001\u5404\u8a8d\u53ef\u3055\u308c\u305f API \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u3057\u3066\u6a19\u6e96\u306e ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"JWT"})," \u5f62\u5f0f\u306e\u8a8d\u53ef\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3057\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u6697\u53f7\u5316\u3055\u308c\u3001",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," \u30c8\u30fc\u30af\u30f3\u3068\u3057\u3066\u7f72\u540d\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.h4,{id:"understanding-jws-token",children:"JWS \u30c8\u30fc\u30af\u30f3\u306e\u7406\u89e3"}),"\n",(0,i.jsxs)(t.p,{children:["\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u305f ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," \u30c8\u30fc\u30af\u30f3\u306f\u30013 \u3064\u306e\u90e8\u5206\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\uff1a"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"JOSE \u30d8\u30c3\u30c0\u30fc\uff1a\u30b3\u30fc\u30c9\u30bf\u30a4\u30d7\u3068\u30a8\u30f3\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3092\u5ba3\u8a00"}),"\n",(0,i.jsx)(t.li,{children:"JWS \u30da\u30a4\u30ed\u30fc\u30c9\uff1a\u30c8\u30fc\u30af\u30f3\u306e\u3059\u3079\u3066\u306e\u30af\u30ec\u30fc\u30e0\u3092\u542b\u3080"}),"\n",(0,i.jsxs)(t.li,{children:["JWS \u7f72\u540d\uff1a",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWK"})," \u3067\u7f72\u540d\u3055\u308c\u305f\u7f72\u540d"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Logto \u304c\u767a\u884c\u3059\u308b JWS \u30da\u30a4\u30ed\u30fc\u30c9\u306e\u6a19\u6e96\u30b9\u30ad\u30fc\u30de\uff1a\uff08\u30af\u30ec\u30fc\u30e0\u306f\u30ab\u30b9\u30bf\u30e0 OIDC \u8a2d\u5b9a\u306b\u57fa\u3065\u3044\u3066\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\uff09"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"key"}),(0,i.jsx)(t.th,{children:"description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"jti"}),(0,i.jsx)(t.td,{children:"\u4e00\u610f\u306e JWT ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sub"}),(0,i.jsx)(t.td,{children:"\u30b5\u30d6\u30b8\u30a7\u30af\u30c8\u3001\u901a\u5e38\u306f\u30e6\u30fc\u30b6\u30fc ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"iat"}),(0,i.jsx)(t.td,{children:"\u30c8\u30fc\u30af\u30f3\u304c\u767a\u884c\u3055\u308c\u305f\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exp"}),(0,i.jsx)(t.td,{children:"\u30c8\u30fc\u30af\u30f3\u304c\u671f\u9650\u5207\u308c\u306b\u306a\u308b\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"client_id"}),(0,i.jsx)(t.td,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"iss"}),(0,i.jsx)(t.td,{children:"\u30c8\u30fc\u30af\u30f3\u767a\u884c\u8005\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"aud"}),(0,i.jsx)(t.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"scope"}),(0,i.jsx)(t.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30b9\u30b3\u30fc\u30d7\uff08\u6a29\u9650\uff09"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["\u958b\u767a\u306e\u305f\u3081\u306b\u3001JWT \u30c8\u30fc\u30af\u30f3\u3092\u8996\u899a\u7684\u306b\u691c\u67fb\u3059\u308b\u306b\u306f\u3001",(0,i.jsx)(t.a,{href:"https://www.jstoolset.com/jwt",children:"JWT \u30c7\u30b3\u30fc\u30c0\u30fc\u30c4\u30fc\u30eb"})," \u3092\u8a2a\u308c\u3066\u53d7\u3051\u53d6\u3063\u305f\u30c8\u30fc\u30af\u30f3\u3092\u30c7\u30b3\u30fc\u30c9\u3057\u3066\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u304c\u63d0\u4f9b\u3059\u308b\u516c\u958b\u30aa\u30f3\u30e9\u30a4\u30f3\u30b5\u30fc\u30d3\u30b9\u3067\u3042\u308b\u305f\u3081\u3001\u30c8\u30fc\u30af\u30f3\u304c\u9732\u51fa\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u74b0\u5883\u306e\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3059\u308b\u969b\u306b\u306f\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"]})}),"\n",(0,i.jsx)(t.h4,{id:"validate-the-authorization-token",children:"\u8a8d\u53ef\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u3059\u308b"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2",children:"JWT \u306e\u691c\u8a3c"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515#section-5.2",children:"JWS \u7f72\u540d\u306e\u691c\u8a3c"})}),"\n",(0,i.jsxs)(t.li,{children:["\u30c8\u30fc\u30af\u30f3\u306e\u767a\u884c\u8005\u306f ",(0,i.jsx)(t.code,{children:"https://<your-logto-domain>/oidc"}),"\uff08\u3042\u306a\u305f\u306e Logto \u8a8d\u8a3c\u30b5\u30fc\u30d0\u30fc\u306b\u3088\u3063\u3066\u767a\u884c\uff09"]}),"\n",(0,i.jsx)(t.li,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u306f Logto \u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u767b\u9332\u3055\u308c\u305f\u73fe\u5728\u306e\u53d7\u4fe1\u8005\u306e\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc\u3068\u7b49\u3057\u3044"}),"\n",(0,i.jsx)(t.li,{children:"\u30c8\u30fc\u30af\u30f3\u306f\u6709\u52b9\u671f\u9650\u5185\u3067\u3042\u308b"}),"\n",(0,i.jsxs)(t.li,{children:["\uff08",(0,i.jsx)(t.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"RBAC"})," \u306e\u307f\uff09\u30c8\u30fc\u30af\u30f3\u306b\u306f\u671b\u307e\u3057\u3044 ",(0,i.jsx)(t.code,{children:"scope"})," \u304c\u3042\u308b"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"JWT \u30c8\u30fc\u30af\u30f3\u3092\u7c21\u5358\u306b\u691c\u8a3c\u304a\u3088\u3073\u30c7\u30b3\u30fc\u30c9\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u3055\u307e\u3056\u307e\u306a\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30e9\u30a4\u30d6\u30e9\u30ea\u3084\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u3042\u308a\u307e\u3059\u3002\u4f7f\u7528\u3057\u3066\u3044\u308b\u8a00\u8a9e\u3068\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306b\u57fa\u3065\u3044\u3066\u30011 \u3064\u3092\u9078\u3093\u3067\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d71\u5408\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3044\u304f\u3064\u304b\u306e\u4f8b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/authorization/api-resources/node-express",children:"Node (Express)"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/authorization/api-resources/spring-boot",children:"Spring Boot"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/authorization/api-resources/python",children:"Python"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"reference",children:"\u53c2\u8003"}),"\n",(0,i.jsxs)(t.p,{children:["Logto \u306f\u3001API \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u5b89\u5168\u306b\u3059\u308b\u305f\u3081\u306b\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u306e OAuth 2.0 \u8a8d\u53ef\u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u305d\u306e\u80cc\u5f8c\u306b\u3042\u308b\u6226\u7565\u306b\u8208\u5473\u304c\u3042\u308b\u5834\u5408\u306f\u3001OAuth 2.0 \u306e ",(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"\u4ed5\u69d8"})," \u3092\u53c2\u7167\u3057\u3066\u8a73\u7d30\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},79621:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(58101);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);