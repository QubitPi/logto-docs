"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29243],{83084:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-management/personal-access-token","title":"\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3","description":"\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3 (PAT) \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u8cc7\u683c\u60c5\u5831\u3084\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u4f7f\u7528\u305b\u305a\u306b \u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3 \u3092\u5b89\u5168\u306b\u63d0\u4f9b\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002\u3053\u308c\u306f\u3001CI/CD\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u3001\u307e\u305f\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-management/personal-access-token.mdx","sourceDirName":"user-management","slug":"/user-management/personal-access-token","permalink":"/ja/user-management/personal-access-token","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/user-management/personal-access-token.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u9ad8\u5ea6\u306a\u30e6\u30fc\u30b6\u30fc\u691c\u7d22","permalink":"/ja/user-management/advanced-user-search"},"next":{"title":"\u30e6\u30fc\u30b6\u30fc\u79fb\u884c","permalink":"/ja/user-management/user-migration"}}');var o=s(25105),i=s(79621);const r={sidebar_position:4},c="\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3",a={},l=[{value:"\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u7ba1\u7406",id:"managing-personal-access-tokens",level:2},{value:"Console \u3092\u4f7f\u7528\u3059\u308b",id:"using-console",level:3},{value:"Management API \u3092\u4f7f\u7528\u3059\u308b",id:"using-management-api",level:3},{value:"PAT \u3092\u4f7f\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u4ed8\u4e0e\u3059\u308b",id:"use-pats-to-grant-access-tokens",level:2},{value:"\u30ea\u30af\u30a8\u30b9\u30c8",id:"request",level:3},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9",id:"response",level:3},{value:"\u30c8\u30fc\u30af\u30f3\u4ea4\u63db\u306e\u4f8b",id:"example-token-exchange",level:3},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components},{CloudLink:s,Url:t}=n;return s||p("CloudLink",!0),t||p("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9-\u30c8\u30fc\u30af\u30f3",children:"\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})}),"\n",(0,o.jsxs)(n.p,{children:["\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3 (PAT) \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u8cc7\u683c\u60c5\u5831\u3084\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u4f7f\u7528\u305b\u305a\u306b ",(0,o.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})," \u3092\u5b89\u5168\u306b\u63d0\u4f9b\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002\u3053\u308c\u306f\u3001CI/CD\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u3001\u307e\u305f\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"managing-personal-access-tokens",children:"\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u7ba1\u7406"}),"\n",(0,o.jsx)(n.h3,{id:"using-console",children:"Console \u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(s,{to:"/users",children:"Console > \u30e6\u30fc\u30b6\u30fc\u7ba1\u7406"})," \u306e\u30e6\u30fc\u30b6\u30fc\u8a73\u7d30\u30da\u30fc\u30b8\u3067\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9\n\u30c8\u30fc\u30af\u30f3\u3092\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002\u300c\u8a8d\u8a3c (Authentication)\u300d\u30ab\u30fc\u30c9\u3067\u3001\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9\n\u30c8\u30fc\u30af\u30f3\u306e\u30ea\u30b9\u30c8\u3092\u8868\u793a\u3057\u3001\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"using-management-api",children:"Management API \u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/",children:"Management API"})," \u3092\u8a2d\u5b9a\u3057\u305f\u5f8c\u3001",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listuserpersonalaccesstokens",children:"API \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3001\u30ea\u30b9\u30c8\u3001\u524a\u9664\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"use-pats-to-grant-access-tokens",children:"PAT \u3092\u4f7f\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u4ed8\u4e0e\u3059\u308b"}),"\n",(0,o.jsx)(n.p,{children:"PAT \u3092\u4f5c\u6210\u3057\u305f\u5f8c\u3001\u30c8\u30fc\u30af\u30f3\u4ea4\u63db\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u4ed8\u4e0e\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"request",children:"\u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,o.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001HTTP POST \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u7279\u5225\u306a\u30b0\u30e9\u30f3\u30c8\u30bf\u30a4\u30d7\u3067\u30c6\u30ca\u30f3\u30c8\u306e ",(0,o.jsx)(n.a,{href:"/integrate-logto/application-data-structure#token-endpoint",children:"\u30c8\u30fc\u30af\u30f3\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"})," \u306b ",(0,o.jsx)(n.a,{href:"https://auth.wiki/authorization-code-flow#token-exchange-request",children:"\u30c8\u30fc\u30af\u30f3\u4ea4\u63db\u30ea\u30af\u30a8\u30b9\u30c8"})," \u3092\u884c\u3044\u307e\u3059\u3002\u6b21\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c ",(0,o.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," \u5f62\u5f0f\u3067 HTTP \u30ea\u30af\u30a8\u30b9\u30c8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30dc\u30c7\u30a3\u306b\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"client_id"}),": \u5fc5\u9808\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 ID\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"grant_type"}),": \u5fc5\u9808\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u5024\u306f ",(0,o.jsx)(n.code,{children:"urn:ietf:params:oauth:grant-type:token-exchange"})," \u3067\u3001\u30c8\u30fc\u30af\u30f3\u4ea4\u63db\u304c\u884c\u308f\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"resource"}),": \u4efb\u610f\u3002\u4ed6\u306e\u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u540c\u69d8\u306e\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"scope"}),": \u4efb\u610f\u3002\u4ed6\u306e\u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u540c\u69d8\u306e\u8981\u6c42\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"subject_token"}),": \u5fc5\u9808\u3002\u30e6\u30fc\u30b6\u30fc\u306e PAT\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"subject_token_type"}),": \u5fc5\u9808\u3002",(0,o.jsx)(n.code,{children:"subject_token"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3067\u63d0\u4f9b\u3055\u308c\u308b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30c8\u30fc\u30af\u30f3\u306e\u30bf\u30a4\u30d7\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u5024\u306f ",(0,o.jsx)(n.code,{children:"urn:logto:token-type:personal_access_token"})," \u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"response",children:"\u30ec\u30b9\u30dd\u30f3\u30b9"}),"\n",(0,o.jsxs)(n.p,{children:["\u30c8\u30fc\u30af\u30f3\u4ea4\u63db\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u6210\u529f\u3059\u308b\u3068\u3001\u30c6\u30ca\u30f3\u30c8\u306e\u30c8\u30fc\u30af\u30f3\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8868\u3059\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u8fd4\u3057\u307e\u3059\u3002\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u306f\u3001",(0,o.jsx)(n.code,{children:"application/json"})," \u5f62\u5f0f\u3067 HTTP \u30ec\u30b9\u30dd\u30f3\u30b9\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30dc\u30c7\u30a3\u306b\u6b21\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"access_token"}),": \u5fc5\u9808\u3002\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3067\u3001",(0,o.jsx)(n.code,{children:"authorization_code"})," \u3084 ",(0,o.jsx)(n.code,{children:"refresh_token"})," \u306a\u3069\u306e\u4ed6\u306e\u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8\u3068\u540c\u3058\u3067\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"issued_token_type"}),": \u5fc5\u9808\u3002\u767a\u884c\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u306e\u30bf\u30a4\u30d7\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u5024\u306f ",(0,o.jsx)(n.code,{children:"urn:ietf:params:oauth:token-type:access_token"})," \u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"token_type"}),": \u5fc5\u9808\u3002\u30c8\u30fc\u30af\u30f3\u306e\u30bf\u30a4\u30d7\u3002\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u5024\u306f ",(0,o.jsx)(n.code,{children:"Bearer"})," \u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"expires_in"}),": \u5fc5\u9808\u3002\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u6709\u52b9\u671f\u9593\uff08\u79d2\uff09\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"scope"}),": \u4efb\u610f\u3002\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u30b9\u30b3\u30fc\u30d7\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-token-exchange",children:"\u30c8\u30fc\u30af\u30f3\u4ea4\u63db\u306e\u4f8b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"POST /oidc/token HTTP/1.1\nHost: tenant.logto.app\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Basic <base64(client-id:client-secret)>\n\ngrant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Atoken-exchange\n&scope=profile\n&subject_token=pat_W51arOqe7nynW75nWhvYogyc\n&subject_token_type=urn%3Alogto%3Atoken-type%3Apersonal_access_token\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "access_token": "eyJhbGci...zg",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "profile"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u30da\u30a4\u30ed\u30fc\u30c9\u306e\u4f8b\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "jti": "iFtbZBeh2M1cTTBuKbHk4",\n  "sub": "123",\n  "iss": "https://tenant.logto.app/oidc",\n  "exp": 1672531200,\n  "iat": 1672527600,\n  "scope": "profile",\n  "client_id": "client-id"\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"related-resources",children:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,o.jsx)(t,{href:"https://blog.logto.io/pat-and-api-keys",children:(0,o.jsx)(n.p,{children:"\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3001\u30de\u30b7\u30f3\u9593\u901a\u4fe1 (M2M) \u8a8d\u8a3c (Authentication)\u3001\u304a\u3088\u3073 API \u30ad\u30fc\u306e\u5b9a\u7fa9\u3068\u305d\u306e\n\u5b9f\u969b\u306e\u30b7\u30ca\u30ea\u30aa"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(58101);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);