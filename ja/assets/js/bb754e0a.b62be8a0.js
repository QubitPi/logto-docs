"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[79163],{68090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"end-user-flows/organization-experience/create-organization","title":"\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b","description":"\u591a\u6570\u306e\u9867\u5ba2\u306b\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3059\u308b \u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u30a2\u30d7\u30ea\uff08\u4f8b\uff1a\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8 SaaS \u30a2\u30d7\u30ea\uff09\u3092\u69cb\u7bc9\u3057\u3066\u3044\u308b\u3068\u60f3\u50cf\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5404\u9867\u5ba2\u306f\u5c02\u7528\u306e\u30c6\u30ca\u30f3\u30c8\u3092\u6240\u6709\u3057\u3066\u3044\u307e\u3059\u3002\u65b0\u3057\u3044\u9867\u5ba2\u304c\u5230\u7740\u3059\u308b\u3068\u3001\u65b0\u3057\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u81ea\u5206\u306e\u30d3\u30b8\u30cd\u30b9\u7528\u306e\u65b0\u3057\u3044\u30c6\u30ca\u30f3\u30c8\u3082\u4f5c\u6210\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/create-organization.mdx","sourceDirName":"end-user-flows/organization-experience","slug":"/end-user-flows/organization-experience/create-organization","permalink":"/ja/end-user-flows/organization-experience/create-organization","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/create-organization.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u7d44\u7e54\u4f53\u9a13","permalink":"/ja/end-user-flows/organization-experience/"},"next":{"title":"\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u3092\u62db\u5f85\u3059\u308b","permalink":"/ja/end-user-flows/organization-experience/invite-organization-members"}}');var i=t(25105),r=t(79621);const a={sidebar_position:1},s="\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b",c={},l=[{value:"\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b",id:"create-your-organizations",level:2},{value:"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4ecb\u3057\u3066\u4f5c\u6210",id:"create-via-logto-console",level:3},{value:"Logto Management API \u3092\u4ecb\u3057\u3066\u4f5c\u6210",id:"create-via-logto-management-api",level:3},{value:"\u30e6\u30fc\u30b6\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u306e\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c",id:"validating-organization-token-in-user-request",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"related-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{CloudLink:t,Url:o}=n;return t||h("CloudLink",!0),o||h("Url",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b",children:"\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b"})}),"\n",(0,i.jsxs)(n.p,{children:["\u591a\u6570\u306e\u9867\u5ba2\u306b\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3059\u308b ",(0,i.jsx)(n.a,{href:"https://auth.wiki/multi-tenancy",children:"\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u30a2\u30d7\u30ea"}),"\uff08\u4f8b\uff1a\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8 SaaS \u30a2\u30d7\u30ea\uff09\u3092\u69cb\u7bc9\u3057\u3066\u3044\u308b\u3068\u60f3\u50cf\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5404\u9867\u5ba2\u306f\u5c02\u7528\u306e\u30c6\u30ca\u30f3\u30c8\u3092\u6240\u6709\u3057\u3066\u3044\u307e\u3059\u3002\u65b0\u3057\u3044\u9867\u5ba2\u304c\u5230\u7740\u3059\u308b\u3068\u3001\u65b0\u3057\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u81ea\u5206\u306e\u30d3\u30b8\u30cd\u30b9\u7528\u306e\u65b0\u3057\u3044\u30c6\u30ca\u30f3\u30c8\u3082\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3061\u3087\u3046\u3069\u3042\u306a\u305f\u304c ",(0,i.jsx)(n.a,{href:"https://cloud.logto.io/",children:"Logto Cloud"})," \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3057\u3001\u81ea\u5206\u306e Logto \u30c6\u30ca\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u308b\u3088\u3046\u306b\u3001Logto \u306e\u300c",(0,i.jsx)(n.a,{href:"/organizations",children:"\u7d44\u7e54 (Organizations)"}),"\u300d\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30d7\u30ea\u306b\u540c\u3058\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"create-your-organizations",children:"\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u306e\u305f\u3081\u306b\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306f 2 \u3064\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"create-via-logto-console",children:"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4ecb\u3057\u3066\u4f5c\u6210"}),"\n",(0,i.jsxs)(n.p,{children:["Logto \u30b3\u30f3\u30bd\u30fc\u30eb UI \u3092\u901a\u3058\u3066\u624b\u52d5\u3067\u7d44\u7e54\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,i.jsx)(t,{to:"/organizations",children:"Console > Organizations"})," \u306b\u79fb\u52d5\u3057\u3066\u7d44\u7e54\u3092\u4f5c\u6210\u3057\u3001\u30e1\u30f3\u30d0\u30fc\u3068\u30ed\u30fc\u30eb\u3092\u5272\u308a\u5f53\u3066\u3001\u7d44\u7e54\u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13 UI \u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u540c\u3058 ",(0,i.jsx)(n.a,{href:"/authorization/organization-template/configure-organization-template#create-organization-role",children:"\u30ed\u30fc\u30eb"})," \u3068 ",(0,i.jsx)(n.a,{href:"/authorization/organization-template/configure-organization-template#create-organization-permission",children:"\u6a29\u9650"})," \u8a2d\u5b9a\u3092\u5171\u6709\u3059\u308b\u985e\u4f3c\u306e\u7d44\u7e54\u3092\u4e00\u62ec\u4f5c\u6210\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u300c",(0,i.jsx)(n.a,{href:"/authorization/organization-template",children:"\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"}),"\u300d\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"create-via-logto-management-api",children:"Logto Management API \u3092\u4ecb\u3057\u3066\u4f5c\u6210"}),"\n",(0,i.jsxs)(n.p,{children:["\u30b3\u30f3\u30bd\u30fc\u30eb UI \u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u306e\u3082\u826f\u3044\u3067\u3059\u304c\u3001\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u304c\u81ea\u5206\u3067\u7d44\u7e54\u3092\u4f5c\u6210\u3057\u3001",(0,i.jsx)(n.strong,{children:"\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea"}),"\u5185\u3067\u7d44\u7e54\u3092\u7ba1\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u306f\u3001Logto Management API \u306e\u52a9\u3051\u3092\u501f\u308a\u3066\u3001\u3053\u308c\u3089\u306e\u6a5f\u80fd\u3092\u30a2\u30d7\u30ea\u306b\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Logto Management API \u306b\u6163\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001\u307e\u305a\u3053\u308c\u3089\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u5fc5\u305a\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002"}),(0,i.jsx)(o,{href:"/concepts/core-service/#management-api",children:"Management API"}),(0,i.jsx)(o,{href:"/integrate-logto/interact-with-management-api",children:"Management API \u3068\u5bfe\u8a71\u3059\u308b"})]}),"\n",(0,i.jsx)(n.p,{children:"API \u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u30fc\u3092\u30de\u30b7\u30f3\u9593\u901a\u4fe1 (M2M) \u30e1\u30ab\u30cb\u30ba\u30e0\u3092\u901a\u3058\u3066 Logto Management API \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u63a5\u7d9a\u3057\u3001M2M \u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u305f\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["Management API \u3092\u4f7f\u7528\u3057\u3066\u7d44\u7e54\u3092\u4f5c\u6210\u3057\u307e\u3059\uff08",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createorganization",children:"API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),"\uff09\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations \\\n -H "Authorization: Bearer $M2M_ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"tenantId":"string","name":"string","description":"string","customData":{},"isMfaRequired":false,"branding":{"logoUrl":"string","darkLogoUrl":"string","favicon":"string","darkFavicon":"string"},"createdAt":1234567890}\'\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u4f8b (201)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "tenantId": "string",\n  "id": "string",\n  "name": "string",\n  "description": "string",\n  "customData": {},\n  "isMfaRequired": false,\n  "branding": {\n    "logoUrl": "string",\n    "darkLogoUrl": "string",\n    "favicon": "string",\n    "darkFavicon": "string"\n  },\n  "createdAt": 1234567890\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6b21\u306b\u3001\u30a2\u30d7\u30ea\u7528\u306e\u72ec\u81ea\u306e API \u3092\u5b9f\u88c5\u3067\u304d\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u5185\u3067\u300c\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b\u300d\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u3068\u304d\u306b\u3001\u6a29\u9650\u3092\u78ba\u8a8d\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u691c\u8a3c\u3057\u3001Logto Management API \u3092\u547c\u3073\u51fa\u3057\u3066\u6b8b\u308a\u306e\u4f5c\u696d\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"validating-organization-token-in-user-request",children:"\u30e6\u30fc\u30b6\u30fc\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u306e\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c"}),"\n",(0,i.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u5185\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u7d44\u7e54\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u969b\u306b\u306f\u3001\u901a\u5e38\u306e\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306e\u4ee3\u308f\u308a\u306b\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u306f\u3001\u7d44\u7e54\u306e\u6a29\u9650\u3092\u542b\u3080\u7279\u5225\u306a\u7a2e\u985e\u306e ",(0,i.jsx)(n.a,{href:"https://auth.wiki/jwt",children:"JWT"})," \u3067\u3059\u3002\u305d\u3057\u3066\u3001\u4ed6\u306e JWT ",(0,i.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})," \u3068\u540c\u69d8\u306b\u3001\u30c8\u30fc\u30af\u30f3\u306e\u30af\u30ec\u30fc\u30e0\u3092\u30c7\u30b3\u30fc\u30c9\u3057\u3001\u6a29\u9650\u30c1\u30a7\u30c3\u30af\u306e\u305f\u3081\u306b\u300c\u30b9\u30b3\u30fc\u30d7\u300d\u30af\u30ec\u30fc\u30e0\u3092\u691c\u8a3c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u3053\u308c\u3089\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,i.jsx)(o,{href:"/authorization/organization-template/protect-organization-resources",children:(0,i.jsx)(n.p,{children:"\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3092\u691c\u8a3c\u3059\u308b"})}),"\n",(0,i.jsx)(o,{href:"/authorization/api-resources/protect-your-api",children:"API \u3092\u4fdd\u8b77\u3059\u308b"}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,i.jsx)(o,{href:"https://blog.logto.io/implement-multi-tenancy",children:(0,i.jsx)(n.p,{children:"Postgres \u3092\u4f7f\u7528\u3057\u305f\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30b7\u30fc\u306e\u5b9f\u88c5"})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(58101);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);