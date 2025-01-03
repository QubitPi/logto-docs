"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[58862],{30834:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"user-management/user-migration","title":"\u30e6\u30fc\u30b6\u30fc\u79fb\u884c","description":"Logto \u306f\u3001\u4ed6\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u624b\u52d5\u3067\u79fb\u884c\u3059\u308b\u3053\u3068\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001Management API \u3092\u4ecb\u3057\u3066\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3068\u3001\u79fb\u884c\u524d\u306b\u8003\u616e\u3059\u3079\u304d\u4e8b\u9805\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-management/user-migration.mdx","sourceDirName":"user-management","slug":"/user-management/user-migration","permalink":"/ja/user-management/user-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/user-management/user-migration.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"\u30d1\u30fc\u30bd\u30ca\u30eb\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3","permalink":"/ja/user-management/personal-access-token"},"next":{"title":"\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406","permalink":"/ja/user-management/"}}');var t=r(25105),o=r(79621);const i={sidebar_position:5},a="\u30e6\u30fc\u30b6\u30fc\u79fb\u884c",c={},l=[{value:"\u30e6\u30fc\u30b6\u30fc\u30b9\u30ad\u30fc\u30de",id:"user-schema",level:2},{value:"\u30d1\u30b9\u30ef\u30fc\u30c9\u30cf\u30c3\u30b7\u30e5",id:"password-hashing",level:2},{value:"\u79fb\u884c\u624b\u9806",id:"steps-to-migrate",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Url:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u30e6\u30fc\u30b6\u30fc\u79fb\u884c",children:"\u30e6\u30fc\u30b6\u30fc\u79fb\u884c"})}),"\n",(0,t.jsx)(n.p,{children:"Logto \u306f\u3001\u4ed6\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u624b\u52d5\u3067\u79fb\u884c\u3059\u308b\u3053\u3068\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001Management API \u3092\u4ecb\u3057\u3066\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u65b9\u6cd5\u3068\u3001\u79fb\u884c\u524d\u306b\u8003\u616e\u3059\u3079\u304d\u4e8b\u9805\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"user-schema",children:"\u30e6\u30fc\u30b6\u30fc\u30b9\u30ad\u30fc\u30de"}),"\n",(0,t.jsxs)(n.p,{children:["\u59cb\u3081\u308b\u524d\u306b\u3001Logto \u306e ",(0,t.jsx)(n.a,{href:"/user-management/user-data/#user-profile",children:"\u30e6\u30fc\u30b6\u30fc\u30b9\u30ad\u30fc\u30de"})," \u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u30e6\u30fc\u30b6\u30fc\u30b9\u30ad\u30fc\u30de\u306b\u306f\u3001\u6b21\u306e 3 \u3064\u306e\u90e8\u5206\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u57fa\u672c\u30c7\u30fc\u30bf"}),"\uff1a\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u304b\u3089\u306e\u57fa\u672c\u60c5\u5831\u3067\u3001\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u30c7\u30fc\u30bf\u3068\u4e00\u81f4\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30ab\u30b9\u30bf\u30e0\u30c7\u30fc\u30bf"}),"\uff1a\u8ffd\u52a0\u306e\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3001\u57fa\u672c\u30c7\u30fc\u30bf\u306b\u4e00\u81f4\u3057\u306a\u3044\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3"}),"\uff1a\u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3\u304b\u3089\u53d6\u5f97\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u304b\u3089 ",(0,t.jsx)(n.strong,{children:"\u57fa\u672c\u30c7\u30fc\u30bf"})," \u3068 ",(0,t.jsx)(n.strong,{children:"\u30ab\u30b9\u30bf\u30e0\u30c7\u30fc\u30bf"})," \u306b\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u4e00\u81f4\u3055\u305b\u308b\u305f\u3081\u306e\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3\u306e\u5834\u5408\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u8ffd\u52a0\u306e\u624b\u9806\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createuseridentity",children:"Link social identity to user"})," \u306e API \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"password-hashing",children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u30cf\u30c3\u30b7\u30e5"}),"\n",(0,t.jsxs)(n.p,{children:["Logto \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30cf\u30c3\u30b7\u30e5\u3059\u308b\u305f\u3081\u306b ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Argon2",children:"Argon2"})," \u3092\u4f7f\u7528\u3057\u3001\u79fb\u884c\u306e\u4fbf\u5b9c\u306e\u305f\u3081\u306b ",(0,t.jsx)(n.code,{children:"MD5"}),"\u3001",(0,t.jsx)(n.code,{children:"SHA1"}),"\u3001",(0,t.jsx)(n.code,{children:"SHA256"}),"\u3001",(0,t.jsx)(n.code,{children:"Bcrypt"})," \u306a\u3069\u306e\u4ed6\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306f\u5b89\u5168\u3067\u306f\u306a\u3044\u3068\u8003\u3048\u3089\u308c\u3066\u304a\u308a\u3001\u5bfe\u5fdc\u3059\u308b\u30d1\u30b9\u30ef\u30fc\u30c9\u30cf\u30c3\u30b7\u30e5\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u6700\u521d\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u306b\u6210\u529f\u3057\u305f\u969b\u306b Argon2 \u306b\u79fb\u884c\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7279\u5b9a\u306e\u30cf\u30c3\u30b7\u30e5\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001",(0,t.jsx)(n.a,{href:"https://logto.io/contact",children:"\u3053\u3061\u3089\u304b\u3089\u3054\u9023\u7d61\u304f\u3060\u3055\u3044"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"steps-to-migrate",children:"\u79fb\u884c\u624b\u9806"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u306e\u6e96\u5099"}),"\n\u307e\u305a\u3001\u65e2\u5b58\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u3001Logto \u306e\u30e6\u30fc\u30b6\u30fc\u30b9\u30ad\u30fc\u30de\u306b\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092 JSON \u5f62\u5f0f\u3067\u6e96\u5099\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u306e\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "username": "user1",\n    "passwordDigest": "password-encrypted",\n    "passwordAlgorithm": "SHA256"\n  },\n  {\n    "username": "user2",\n    "passwordDigest": "password-encrypted",\n    "passwordAlgorithm": "SHA256"\n  }\n]\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Logto \u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210"}),"\nLogto \u306b\u30c6\u30ca\u30f3\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Logto Cloud \u307e\u305f\u306f Logto OSS \u306e\u3044\u305a\u308c\u304b\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u307e\u3060\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,t.jsx)(n.a,{href:"/introduction/set-up-logto-cloud/#create-logto-tenant",children:"Logto Cloud \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})," \u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Management API \u306e\u63a5\u7d9a\u8a2d\u5b9a"}),"\nManagement API \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\u958b\u767a\u74b0\u5883\u3067\u306e\u63a5\u7d9a\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"}),"\n\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u4e00\u3064\u305a\u3064\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u6e96\u5099\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createuser",children:"create user"})," API \u3092\u547c\u3073\u51fa\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f8b\u3067\u3059\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const users = require('./users.json');\n\nconst importUsers = async () => {\n  for (const user of users) {\n    try {\n      await fetch('https://[tenant_id].logto.app/api/users', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          Authorization: 'Bearer [your-access-token]',\n        },\n        body: JSON.stringify(user),\n      });\n      // \u30ec\u30fc\u30c8\u5236\u9650\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u5c11\u3057\u5f85\u6a5f\n      await new Promise((resolve) => setTimeout(resolve, 200));\n    } catch (error) {\n      console.error(`\u30e6\u30fc\u30b6\u30fc ${user.username} \u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f: ${error.message}`);\n    }\n  }\n};\n\nimportUsers();\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["API \u30dd\u30a4\u30f3\u30c8\u306b\u306f\u30ec\u30fc\u30c8\u5236\u9650\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30ec\u30fc\u30c8\u5236\u9650\u3092\u907f\u3051\u308b\u305f\u3081\u306b\u5404\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u9593\u306b\u5f85\u6a5f\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/#rate-limit",children:"\u30ec\u30fc\u30c8\u5236\u9650"})," \u30da\u30fc\u30b8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5927\u91cf\u306e\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\uff0810\u4e07\u4ee5\u4e0a\uff09\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u30ec\u30fc\u30c8\u5236\u9650\u3092\u5897\u3084\u3059\u305f\u3081\u306b ",(0,t.jsx)(n.a,{href:"https://logto.io/contact",children:"\u3053\u3061\u3089\u304b\u3089\u3054\u9023\u7d61\u304f\u3060\u3055\u3044"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,t.jsx)(r,{href:"https://blog.logto.io/general-migration-guide",children:(0,t.jsx)(n.p,{children:"\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092 Logto \u306b\u79fb\u884c\u3059\u308b\u305f\u3081\u306e\u4e00\u822c\u7684\u306a\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},79621:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(58101);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);