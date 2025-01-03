"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[77310],{90467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"authorization/organization-template/protect-api-reources","title":"\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067 API \u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b","description":"\u6709\u52b9\u306a JWT \u304c\u5b58\u5728\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b API \u3092\u4fdd\u8b77\u3059\u308b \u306b\u52a0\u3048\u3066\u3001\u7d44\u7e54\u306e\u30ed\u30fc\u30eb\u3092\u9069\u7528\u3057\u3066\u30b9\u30b3\u30fc\u30d7\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u7d44\u7e54\u306e\u30ed\u30fc\u30eb\u304c\u8a8d\u8a3c (Authentication) \u30d5\u30ed\u30fc\u306b\u304a\u3051\u308b\u30b9\u30b3\u30fc\u30d7\u306e\u59d4\u4efb\u3068\u691c\u8a3c\u306b\u3069\u306e\u3088\u3046\u306b\u5f71\u97ff\u3059\u308b\u304b\u306b\u7126\u70b9\u3092\u5f53\u3066\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/authorization/organization-template/protect-api-reources.mdx","sourceDirName":"authorization/organization-template","slug":"/authorization/organization-template/protect-api-reources","permalink":"/ja/authorization/organization-template/protect-api-reources","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/authorization/organization-template/protect-api-reources.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u7d44\u7e54\u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b","permalink":"/ja/authorization/organization-template/protect-organization-resources"},"next":{"title":"\u8a8d\u53ef (Authorization)","permalink":"/ja/authorization/"}}');var i=t(25105),a=t(79621);const r={sidebar_position:3},s="\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067 API \u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b",c={},d=[{value:"\u8ffd\u52a0\u306e <code>organization_id</code> \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"the-additional-organization_id-parameter",level:2},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a2d\u5b9a",id:"client-setup",level:2},{value:"API \u30b5\u30fc\u30d0\u30fc\u306e\u691c\u8a3c",id:"api-server-validation",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067-api-\u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b",children:"\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067 API \u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6709\u52b9\u306a JWT \u304c\u5b58\u5728\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u30ea\u30bd\u30fc\u30b9\u3092\u4fdd\u8b77\u3059\u308b ",(0,i.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"API \u3092\u4fdd\u8b77\u3059\u308b"})," \u306b\u52a0\u3048\u3066\u3001\u7d44\u7e54\u306e\u30ed\u30fc\u30eb\u3092\u9069\u7528\u3057\u3066\u30b9\u30b3\u30fc\u30d7\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u7d44\u7e54\u306e\u30ed\u30fc\u30eb\u304c\u8a8d\u8a3c (Authentication) \u30d5\u30ed\u30fc\u306b\u304a\u3051\u308b\u30b9\u30b3\u30fc\u30d7\u306e\u59d4\u4efb\u3068\u691c\u8a3c\u306b\u3069\u306e\u3088\u3046\u306b\u5f71\u97ff\u3059\u308b\u304b\u306b\u7126\u70b9\u3092\u5f53\u3066\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: \u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\n    Client->>Logto: POST /oidc/token\n    Note right of Client: \u30ea\u30bd\u30fc\u30b9\u3001organization_id\u3001<br/>\u304a\u3088\u3073\u8981\u6c42\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3092\u542b\u3080\n\n    Note over Logto: \u30e6\u30fc\u30b6\u30fc\u304c\u6307\u5b9a\u3055\u308c\u305f<br/>\u7d44\u7e54\u306b\u5c5e\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\n    Logto--\x3e>Client: JWT \u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u8fd4\u3059\n    Note left of Logto: \u30c8\u30fc\u30af\u30f3\u306b\u542b\u307e\u308c\u308b\u3082\u306e\uff1a<br/>- \u6a19\u6e96 JWT \u30af\u30ec\u30fc\u30e0<br/>- organization_id<br/>- \u7d44\u7e54\u306e\u30ed\u30fc\u30eb\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\n\n    Note over Client,API: API \u30ea\u30af\u30a8\u30b9\u30c8\n    Client->>API: Bearer \u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\n\n    Note over API: JWT \u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\uff1a<br/>1. \u6a19\u6e96 JWT \u691c\u8a3c<br/>2. organization_id \u3092\u78ba\u8a8d<br/>3. \u30b9\u30b3\u30fc\u30d7\u3092\u78ba\u8a8d\n\n    alt \u30c8\u30fc\u30af\u30f3\u304c\u7121\u52b9\n        API--\x3e>Client: 401 Unauthorized\n    else \u30c8\u30fc\u30af\u30f3\u304c\u6709\u52b9\n        alt \u6709\u52b9\u306a organization_id \u3068\u30b9\u30b3\u30fc\u30d7\n            API--\x3e>Client: \u4fdd\u8b77\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\n        else \u305d\u308c\u4ee5\u5916\n            API--\x3e>Client: 403 Forbidden\n        end\n    end"}),"\n",(0,i.jsxs)(n.h2,{id:"the-additional-organization_id-parameter",children:["\u8ffd\u52a0\u306e ",(0,i.jsx)(n.code,{children:"organization_id"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u5e38\u306e\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u4ed8\u4e0e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u52a0\u3048\u3066\u3001\u56f3\u3067\u306f\u8ffd\u52a0\u306e ",(0,i.jsx)(n.code,{children:"organization_id"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Logto \u306f\u7279\u5b9a\u306e\u7d44\u7e54\u306e\u30ed\u30fc\u30eb\u306b\u30b9\u30b3\u30fc\u30d7\u3092\u7d5e\u308a\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"client-setup",children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a2d\u5b9a"}),"\n",(0,i.jsxs)(n.p,{children:["Logto \u306e SDK \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001",(0,i.jsx)(n.code,{children:"getAccessToken"})," \u30e1\u30bd\u30c3\u30c9\u306e\u7b2c 2 \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3068\u3057\u3066 ",(0,i.jsx)(n.code,{children:"organization_id"})," \u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const accessToken = await logto.getAccessToken('https://my-resource.com/api', 'org_1');\n\n// \u307e\u305f\u306f\u30af\u30ec\u30fc\u30e0\u3092\u76f4\u63a5\u53d6\u5f97\nconst accessTokenClaims = await logto.getAccessTokenClaims('https://my-resource.com/api', 'org_1');\nconsole.log(accessTokenClaims.organization_id); // 'org_1'\nconsole.log(accessTokenClaims.aud); // 'https://my-resource.com/api'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u305d\u306e\u5f8c\u3001\u3053\u306e\u7d44\u7e54\u306e\u30ed\u30fc\u30eb\u304b\u3089\u7d99\u627f\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u306e\u307f\u304c\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306b\u542b\u307e\u308c\u3001\u8ffd\u52a0\u306e\u30af\u30ec\u30fc\u30e0 ",(0,i.jsx)(n.code,{children:"organization_id"})," \u3082\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"api-server-validation",children:"API \u30b5\u30fc\u30d0\u30fc\u306e\u691c\u8a3c"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u5e38\u306e JWT \u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c\u306b\u52a0\u3048\u3066\u3001",(0,i.jsx)(n.code,{children:"organization_id"})," \u304c\u5b58\u5728\u3057\u6709\u52b9\u3067\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u8ffd\u52a0\u306e\u30ec\u30d9\u30eb\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},79621:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(58101);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);