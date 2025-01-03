"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[91482],{69722:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"quick-starts/database/supabase/README","title":"\u3042\u306a\u305f\u306e Supabase \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a8d\u8a3c (Authentication) \u3092\u8ffd\u52a0\u3059\u308b","description":"Supabase \u306e\u57fa\u672c \\\\","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/quick-starts/database/supabase/README.mdx","sourceDirName":"quick-starts/database/supabase","slug":"/quick-starts/supabase","permalink":"/ja/quick-starts/supabase","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/quick-starts/database/supabase/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/quick-starts/supabase","sidebar_label":"Supabase","sidebar_custom_props":{"description":"Logto \u3092 Supabase \u3068\u7d71\u5408\u3059\u308b\u3002","logoFilename":"supabase.svg"}},"sidebar":"quickStartSidebar","previous":{"title":"Hasura","permalink":"/ja/quick-starts/hasura"},"next":{"title":"OIDC (\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea)","permalink":"/ja/quick-starts/third-party-oidc"}}');var a=t(25105),r=t(79621);const o={slug:"/quick-starts/supabase",sidebar_label:"Supabase",sidebar_custom_props:{description:"Logto \u3092 Supabase \u3068\u7d71\u5408\u3059\u308b\u3002",logoFilename:"supabase.svg"}},i="\u3042\u306a\u305f\u306e Supabase \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a8d\u8a3c (Authentication) \u3092\u8ffd\u52a0\u3059\u308b",c={},d=[{value:"Supabase \u306e\u57fa\u672c",id:"supabase-basics",level:2},{value:"Supabase \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u8ffd\u52a0\u3059\u308b",id:"add-user-data-to-the-supabase-requests",level:3},{value:"\u884c\u30ec\u30d9\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3059\u308b",id:"create-row-level-security-policy",level:3},{value:"Logto \u3068\u306e\u57fa\u672c\u7684\u306a\u7d71\u5408\u30d7\u30ed\u30bb\u30b9",id:"basic-integration-process-with-logto",level:3},{value:"Logto \u306e\u7d71\u5408",id:"logto-integration",level:2},{value:"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u307e\u305f\u306f SPA",id:"native-app-or-spa",level:3},{value:"\u5f93\u6765\u306e\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea",id:"traditional-web-app",level:3},{value:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea",id:"machine-to-machine-app",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"\u3042\u306a\u305f\u306e-supabase-\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a8d\u8a3c-authentication-\u3092\u8ffd\u52a0\u3059\u308b",children:"\u3042\u306a\u305f\u306e Supabase \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u8a8d\u8a3c (Authentication) \u3092\u8ffd\u52a0\u3059\u308b"})}),"\n",(0,a.jsx)(s.h2,{id:"supabase-basics",children:"Supabase \u306e\u57fa\u672c"}),"\n",(0,a.jsxs)(s.p,{children:["Supabase \u306f\u3001\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u3092\u5236\u5fa1\u3059\u308b\u305f\u3081\u306b ",(0,a.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/ddl-rowsecurity.html",children:"Postgres \u306e\u884c\u30ec\u30d9\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"})," \u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u7c21\u5358\u306b\u8a00\u3048\u3070\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3057\u3066\u884c\u30ec\u30d9\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3001\u8ab0\u304c\u30c6\u30fc\u30d6\u30eb\u5185\u306e\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308a\u3001\u66f8\u304d\u8fbc\u307f\u3001\u66f4\u65b0\u3067\u304d\u308b\u304b\u3092\u5236\u9650\u3057\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u300cposts\u300d\u3068\u3044\u3046\u540d\u524d\u306e\u30c6\u30fc\u30d6\u30eb\u304c\u3042\u308a\u3001\u6b21\u306e\u3088\u3046\u306a\u5185\u5bb9\u304c\u3042\u308b\u3068\u4eee\u5b9a\u3057\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Posts table",src:t(71050).A+"",width:"2000",height:"339"})}),"\n",(0,a.jsxs)(s.p,{children:["\u30c6\u30fc\u30d6\u30eb\u5185\u306e ",(0,a.jsx)(s.code,{children:"user_id"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001\u5404\u6295\u7a3f\u30c7\u30fc\u30bf\u304c\u3069\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u5c5e\u3057\u3066\u3044\u308b\u304b\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002",(0,a.jsx)(s.code,{children:"user_id"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u57fa\u3065\u3044\u3066\u3001\u5404\u30e6\u30fc\u30b6\u30fc\u304c\u81ea\u5206\u306e\u6295\u7a3f\u30c7\u30fc\u30bf\u306b\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u5236\u9650\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u305f\u3060\u3057\u3001\u3053\u308c\u3092\u5b9f\u88c5\u3059\u308b\u524d\u306b\u3001Supabase \u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3044\u308b\u73fe\u5728\u306e\u30e6\u30fc\u30b6\u30fc\u3092\u8b58\u5225\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h3,{id:"add-user-data-to-the-supabase-requests",children:"Supabase \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u8ffd\u52a0\u3059\u308b"}),"\n",(0,a.jsx)(s.p,{children:"Supabase \u306e JWT \u30b5\u30dd\u30fc\u30c8\u306e\u304a\u304b\u3052\u3067\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c Supabase \u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u969b\u306b\u3001Supabase \u304c\u63d0\u4f9b\u3059\u308b JWT \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u542b\u3080 JWT \u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u3053\u306e JWT \u3092\u30ea\u30af\u30a8\u30b9\u30c8\u6642\u306e\u8a8d\u8a3c (Authentication) \u30d8\u30c3\u30c0\u30fc\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u308b\u3068\u3001Supabase \u306f\u81ea\u52d5\u7684\u306b JWT \u306e\u6709\u52b9\u6027\u3092\u78ba\u8a8d\u3057\u3001\u305d\u306e\u5f8c\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.p,{children:"\u307e\u305a\u3001Supabase \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u300c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a2d\u5b9a\u300d\u304b\u3089 Supabase \u304c\u63d0\u4f9b\u3059\u308b JWT \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Supabase API settings page",src:t(1643).A+"",width:"2000",height:"1018"})}),"\n",(0,a.jsx)(s.p,{children:"\u6b21\u306b\u3001Supabase SDK \u3092\u4f7f\u7528\u3057\u3066 Supabase \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u884c\u3046\u969b\u306b\u3001\u3053\u306e\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066 JWT \u3092\u751f\u6210\u3057\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u8a8d\u8a3c (Authentication) \u30d8\u30c3\u30c0\u30fc\u3068\u3057\u3066\u6dfb\u4ed8\u3057\u307e\u3059\u3002\uff08\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u5185\u3067\u884c\u308f\u308c\u3001JWT \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306f\u7b2c\u4e09\u8005\u306b\u516c\u958b\u3055\u308c\u308b\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff09\u3002"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"import { createClient } from '@supabase/supabase-js';\nimport { sign } from 'jsonwebtoken';\n\n/*\n * \u6ce8\u610f:\n * SUPABASE_URL\u3001SUPABASE_ANON_KEY \u306f JWT \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u898b\u3064\u3051\u305f\u5834\u6240\u3068\u540c\u3058\u5834\u6240\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n */\nconst SUPABASE_URL = process.env.SUPABASE_URL;\nconst SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;\n\nconst SUPABASE_JWT_SECRET = process.env.SUPABASE_JWT_SECRET;\n\nexport const getSupabaseClient = (userId) => {\n  const jwtPayload = {\n    userId,\n  };\n\n  const jwt = sign(jwtPayload, SUPABASE_JWT_SECRET, {\n    expiresIn: '1h', // \u30c7\u30e2\u7528\n  });\n\n  const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {\n    global: {\n      headers: {\n        Authorization: `Bearer ${jwt}`,\n      },\n    },\n  });\n\n  return client;\n};\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u6b21\u306b\u3001Supabase \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e SQL \u30a8\u30c7\u30a3\u30bf\u306b\u79fb\u52d5\u3057\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u904b\u3070\u308c\u308b userId \u3092\u53d6\u5f97\u3059\u308b\u95a2\u6570\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Create get user ID function",src:t(10046).A+"",width:"2000",height:"1054"})}),"\n",(0,a.jsx)(s.p,{children:"\u753b\u50cf\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\uff1a"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"create or replace function auth.user_id() returns text as $$\n  select nullif(current_setting('request.jwt.claims', true)::json->>'userId', '')::text;\n$$ language sql stable;\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u30b3\u30fc\u30c9\u304c\u793a\u3059\u3088\u3046\u306b\u3001Supabase \u3067\u306f\u3001\u751f\u6210\u3057\u305f JWT \u306e\u30da\u30a4\u30ed\u30fc\u30c9\u3092 ",(0,a.jsx)(s.code,{children:"request.jwt.claims"})," \u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u30da\u30a4\u30ed\u30fc\u30c9\u5185\u306e ",(0,a.jsx)(s.code,{children:"userId"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001\u8a2d\u5b9a\u3057\u305f\u5024\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u3053\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001Supabase \u306f\u73fe\u5728\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u3092\u7279\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h3,{id:"create-row-level-security-policy",children:"\u884c\u30ec\u30d9\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,a.jsxs)(s.p,{children:["\u6b21\u306b\u3001posts \u30c6\u30fc\u30d6\u30eb\u306e ",(0,a.jsx)(s.code,{children:"user_id"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u57fa\u3065\u3044\u3066\u3001\u5404\u30e6\u30fc\u30b6\u30fc\u304c\u81ea\u5206\u306e\u6295\u7a3f\u30c7\u30fc\u30bf\u306b\u306e\u307f\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u5236\u9650\u3059\u308b\u884c\u30ec\u30d9\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Supabase \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30c6\u30fc\u30d6\u30eb\u30a8\u30c7\u30a3\u30bf\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001posts \u30c6\u30fc\u30d6\u30eb\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u30c6\u30fc\u30d6\u30eb\u306e\u4e0a\u90e8\u306b\u3042\u308b\u300cAdd RLS Policy\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u8868\u793a\u3055\u308c\u305f\u30a6\u30a3\u30f3\u30c9\u30a6\u3067\u300cCreate policy\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.li,{children:"\u30dd\u30ea\u30b7\u30fc\u540d\u3092\u5165\u529b\u3057\u3001SELECT \u30dd\u30ea\u30b7\u30fc\u30b3\u30de\u30f3\u30c9\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(s.li,{children:["\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u306e ",(0,a.jsx)(s.code,{children:"using"})," \u30d6\u30ed\u30c3\u30af\u306b\u6b21\u3092\u5165\u529b\u3057\u307e\u3059\uff1a"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sql",children:"auth.user_id() = user_id\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Create RLS policy",src:t(86551).A+"",width:"2000",height:"2330"})}),"\n",(0,a.jsx)(s.p,{children:"\u3053\u306e\u3088\u3046\u306a\u30dd\u30ea\u30b7\u30fc\u3092\u6d3b\u7528\u3059\u308b\u3053\u3068\u3067\u3001Supabase \u5185\u3067\u306e\u30c7\u30fc\u30bf\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u304c\u5b9f\u73fe\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["\u5b9f\u969b\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u3001\u30c7\u30fc\u30bf\u306e\u633f\u5165\u3084\u5909\u66f4\u306a\u3069\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5236\u9650\u3059\u308b\u305f\u3081\u306b\u3055\u307e\u3056\u307e\u306a\u30dd\u30ea\u30b7\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u3053\u308c\u306f\u3053\u306e\u8a18\u4e8b\u306e\u7bc4\u56f2\u3092\u8d85\u3048\u3066\u3044\u307e\u3059\u3002\u884c\u30ec\u30d9\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 (RLS) \u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,a.jsx)(s.a,{href:"https://supabase.com/docs/guides/database/postgres/row-level-security",children:"Postgres \u884c\u30ec\u30d9\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30fc\u30bf\u3092\u4fdd\u8b77\u3059\u308b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(s.h3,{id:"basic-integration-process-with-logto",children:"Logto \u3068\u306e\u57fa\u672c\u7684\u306a\u7d71\u5408\u30d7\u30ed\u30bb\u30b9"}),"\n",(0,a.jsx)(s.p,{children:"\u524d\u8ff0\u306e\u3088\u3046\u306b\u3001Supabase \u306f\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u306b RLS \u3092\u5229\u7528\u3057\u3066\u3044\u308b\u305f\u3081\u3001Logto\uff08\u307e\u305f\u306f\u4ed6\u306e\u8a8d\u8a3c (Authentication) \u30b5\u30fc\u30d3\u30b9\uff09\u3068\u306e\u7d71\u5408\u306e\u9375\u306f\u3001\u8a8d\u53ef\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u30e6\u30fc\u30b6\u30fc ID \u3092\u53d6\u5f97\u3057\u3001\u305d\u308c\u3092 Supabase \u306b\u9001\u4fe1\u3059\u308b\u3053\u3068\u306b\u3042\u308a\u307e\u3059\u3002\u30d7\u30ed\u30bb\u30b9\u5168\u4f53\u306f\u4ee5\u4e0b\u306e\u56f3\u3067\u793a\u3055\u308c\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(s.mermaid,{value:"sequenceDiagram\n\tParticipant U as \u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\n\tParticipant Logto\n\tParticipant B as \u30a2\u30d7\u30ea\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\n\tParticipant Supabase\n\n\tU->>Logto: Logto \u3067\u30b5\u30a4\u30f3\u30a4\u30f3\n\tLogto--\x3e>U: `access_token`\n\tU->>B: `access_token` \u3067\u30c7\u30fc\u30bf\u3092\u30ea\u30af\u30a8\u30b9\u30c8\n\tB->>B: `access_token` \u304b\u3089 `user_id` \u3092\u53d6\u5f97\n\tB->>B: `user_id` \u3068 `Supabase JWT secret` \u3067 jwt \u3092\u751f\u6210\n\tB->>Supabase: jwt \u3067\u30c7\u30fc\u30bf\u3092\u30ea\u30af\u30a8\u30b9\u30c8\n\tSupabase--\x3e>B: \u5fdc\u7b54\u30c7\u30fc\u30bf\n\tB--\x3e>U: \u5fdc\u7b54\u30c7\u30fc\u30bf"}),"\n",(0,a.jsx)(s.p,{children:"\u6b21\u306b\u3001\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u56f3\u306b\u57fa\u3065\u3044\u3066 Logto \u3092 Supabase \u3068\u7d71\u5408\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"logto-integration",children:"Logto \u306e\u7d71\u5408"}),"\n",(0,a.jsx)(s.p,{children:"Logto \u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3084\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306e\u7d71\u5408\u30ac\u30a4\u30c9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["\u4e00\u822c\u7684\u306b\u3001\u3053\u308c\u3089\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3084\u8a00\u8a9e\u3067\u69cb\u7bc9\u3055\u308c\u305f\u30a2\u30d7\u30ea\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3001SPA\uff08\u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8\u30a2\u30d7\u30ea\uff09\u3001\u5f93\u6765\u306e\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u3001M2M\uff08\u30de\u30b7\u30f3\u9593\u901a\u4fe1\uff09\u30a2\u30d7\u30ea\u306a\u3069\u306e\u30ab\u30c6\u30b4\u30ea\u306b\u5206\u985e\u3055\u308c\u307e\u3059\u3002\u4f7f\u7528\u3057\u3066\u3044\u308b\u6280\u8853\u30b9\u30bf\u30c3\u30af\u306b\u57fa\u3065\u3044\u3066\u3001",(0,a.jsx)(s.a,{href:"/quick-starts",children:"Logto \u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8"})," \u30da\u30fc\u30b8\u3092\u8a2a\u308c\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b Logto \u3092\u7d71\u5408\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7a2e\u985e\u306b\u57fa\u3065\u3044\u3066\u3001\u4ee5\u4e0b\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b Logto \u3092\u7d71\u5408\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.h3,{id:"native-app-or-spa",children:"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u307e\u305f\u306f SPA"}),"\n",(0,a.jsx)(s.p,{children:"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3068 SPA \u306e\u4e21\u65b9\u306f\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u3001\u30ed\u30b0\u30a4\u30f3\u5f8c\u306b\u53d6\u5f97\u3057\u305f\u8cc7\u683c\u60c5\u5831\uff08\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\uff09\u306f\u30c7\u30d0\u30a4\u30b9\u4e0a\u306b\u30ed\u30fc\u30ab\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.p,{children:"\u3057\u305f\u304c\u3063\u3066\u3001\u30a2\u30d7\u30ea\u3092 Supabase \u3068\u7d71\u5408\u3059\u308b\u969b\u306b\u306f\u3001\u5404\u30e6\u30fc\u30b6\u30fc\u306e\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u6a5f\u5bc6\u60c5\u5831\uff08Supabase JWT \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306a\u3069\uff09\u3092\u516c\u958b\u3067\u304d\u306a\u3044\u305f\u3081\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u3092\u901a\u3058\u3066 Supabase \u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["React \u3068 Express \u3092\u4f7f\u7528\u3057\u3066 SPA \u3092\u69cb\u7bc9\u3057\u3066\u3044\u308b\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002",(0,a.jsx)(s.a,{href:"/quick-starts/react",children:"Logto React SDK \u30ac\u30a4\u30c9"})," \u306b\u5f93\u3063\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b Logto \u3092\u7d71\u5408\u3057\u307e\u3057\u305f\uff08",(0,a.jsx)(s.a,{href:"https://github.com/logto-io/js/tree/master/packages/react-sample",children:"react \u30b5\u30f3\u30d7\u30eb"})," \u306e\u30b3\u30fc\u30c9\u3092\u53c2\u7167\u3067\u304d\u307e\u3059\uff09\u3002\u3055\u3089\u306b\u3001",(0,a.jsx)(s.a,{href:"/authorization/api-resources/node-express",children:"Node (Express) \u3067 API \u3092\u4fdd\u8b77\u3059\u308b"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u5f93\u3063\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u30fc\u306b Logto \u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u6b21\u306b\u3001Logto \u304b\u3089\u53d6\u5f97\u3057\u305f\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u30c7\u30fc\u30bf\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"import { useLogto } from '@logto/react';\nimport { useState, useEffect } from 'react';\nimport PostList from './PostList';\n\nconst endpoint = '<https://www.mysite.com/api/posts>';\nconst resource = '<https://www.mysite.com/api>';\n\nfunction PostPage() {\n  const { isAuthenticated, getAccessToken } = useLogto();\n  const [posts, setPosts] = useState();\n\n  useEffect(() => {\n    const fetchPosts = async () => {\n      const response = await fetch(endpoint, {\n        headers: {\n          Authorization: `Bearer ${await getAccessToken(resource)}`,\n        },\n      });\n      setPosts(response.json());\n    };\n\n    if (isAuthenticated) {\n      void fetchPosts();\n    }\n  }, [isAuthenticated, getAccessToken]);\n\n  return <PostList posts={posts} />;\n}\n\nexport default PostPage;\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d0\u30fc\u3067\u306f\u3001\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u306e ID \u3092\u3059\u3067\u306b\u62bd\u51fa\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"// auth-middleware.ts\nimport { createRemoteJWKSet, jwtVerify } from 'jose';\n\n//...\n\nexport const verifyAuthFromRequest = async (ctx, next) => {\n  // \u30c8\u30fc\u30af\u30f3\u3092\u62bd\u51fa\n  const token = extractBearerTokenFromHeaders(ctx.request.headers);\n\n  const { payload } = await jwtVerify(\n    token, // \u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc\u304b\u3089\u62bd\u51fa\u3055\u308c\u305f\u751f\u306e Bearer \u30c8\u30fc\u30af\u30f3\n    createRemoteJWKSet(new URL('https://<your-logto-domain>/oidc/jwks')), // Logto \u30b5\u30fc\u30d0\u30fc\u304b\u3089\u53d6\u5f97\u3057\u305f jwks_uri \u3092\u4f7f\u7528\u3057\u3066 jwks \u3092\u751f\u6210\n    {\n      // \u30c8\u30fc\u30af\u30f3\u306e\u767a\u884c\u8005\u3001Logto \u30b5\u30fc\u30d0\u30fc\u306b\u3088\u3063\u3066\u767a\u884c\u3055\u308c\u308b\u3079\u304d\n      issuer: 'https://<your-logto-domain>/oidc',\n      // \u30c8\u30fc\u30af\u30f3\u306e\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3001\u73fe\u5728\u306e API \u306e\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc\u3067\u3042\u308b\u3079\u304d\n      audience: '<your request listener resource indicator>',\n    }\n  );\n\n  // RBAC \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\n  assert(payload.scope.includes('some_scope'));\n\n  // \u30ab\u30b9\u30bf\u30e0\u30da\u30a4\u30ed\u30fc\u30c9\u30ed\u30b8\u30c3\u30af\n  ctx.auth = {\n    userId: payload.sub,\n  };\n\n  return next();\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u3053\u308c\u3067\u3001\u4e0a\u8a18\u3067\u8aac\u660e\u3057\u305f ",(0,a.jsx)(s.code,{children:"getSupabaseClient"})," \u3092\u4f7f\u7528\u3057\u3066\u3001Supabase \u3078\u306e\u5f8c\u7d9a\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u4f7f\u7528\u3059\u308b JWT \u306b ",(0,a.jsx)(s.code,{children:"userId"})," \u3092\u6dfb\u4ed8\u3067\u304d\u307e\u3059\u3002\u3042\u308b\u3044\u306f\u3001Supabase \u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u305f\u3081\u306b Supabase \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u30df\u30c9\u30eb\u30a6\u30a7\u30a2\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"export const withSupabaseClient = async (ctx, next) => {\n  ctx.supabase = getSupabaseClient(ctx.auth.userId);\n\n  return next();\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u305d\u306e\u5f8c\u306e\u51e6\u7406\u30d5\u30ed\u30fc\u3067\u306f\u3001",(0,a.jsx)(s.code,{children:"ctx.supabase"})," \u3092\u76f4\u63a5\u547c\u3073\u51fa\u3057\u3066 Supabase \u3068\u3084\u308a\u53d6\u308a\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"const fetchPosts = async (ctx) => {\n  const { data } = await ctx.supabase.from('posts').select('*');\n\n  return data;\n};\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001Supabase \u306f\u4ee5\u524d\u306b\u8a2d\u5b9a\u3057\u305f\u30dd\u30ea\u30b7\u30fc\u306b\u57fa\u3065\u3044\u3066\u3001\u73fe\u5728\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u5c5e\u3059\u308b\u6295\u7a3f\u30c7\u30fc\u30bf\u306e\u307f\u3092\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h3,{id:"traditional-web-app",children:"\u5f93\u6765\u306e\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea"}),"\n",(0,a.jsx)(s.p,{children:"\u5f93\u6765\u306e\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u3068\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u307e\u305f\u306f SPA \u306e\u4e3b\u306a\u9055\u3044\u306f\u3001\u5f93\u6765\u306e\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u306f\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u306e\u307f\u30da\u30fc\u30b8\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304a\u3088\u3073\u66f4\u65b0\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u8cc7\u683c\u60c5\u5831\u306f\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u30fc\u306b\u3088\u3063\u3066\u76f4\u63a5\u7ba1\u7406\u3055\u308c\u307e\u3059\u304c\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3084 SPA \u3067\u306f\u30e6\u30fc\u30b6\u30fc\u306e\u30c7\u30d0\u30a4\u30b9\u4e0a\u306b\u5b58\u5728\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.p,{children:"Supabase \u3067\u5f93\u6765\u306e\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u306b Logto \u3092\u7d71\u5408\u3059\u308b\u969b\u306b\u306f\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u304b\u3089\u76f4\u63a5\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u306e ID \u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["Next.js \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f8b\u306b\u3068\u308b\u3068\u3001",(0,a.jsx)(s.a,{href:"/quick-starts/next-app-router",children:"Next.js SDK \u30ac\u30a4\u30c9"})," \u306b\u5f93\u3063\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b Logto \u3092\u7d71\u5408\u3057\u305f\u5f8c\u3001Logto SDK \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3001Supabase \u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u305f\u3081\u306e\u5bfe\u5fdc\u3059\u308b JWT \u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"import { getLogtoContext } from '@logto/next-server-actions';\nimport { logtoConfig } from '@/logto';\nimport { getSupabaseClient } from '@/utils';\nimport PostList from './PostList';\n\nexport default async function PostPage() {\n  const { claims } = await getLogtoContext(logtoConfig);\n\n  // `claims` \u306e `sub` \u5024\u304c\u30e6\u30fc\u30b6\u30fc ID \u3067\u3059\u3002\n  const supabase = getSupabaseClient(claims.sub);\n\n  const { data: posts } = await supabase.from('posts').select('*');\n\n  return <PostList posts={posts} />;\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"machine-to-machine-app",children:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea"}),"\n",(0,a.jsx)(s.p,{children:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1 (M2M) \u306f\u3001\u30a2\u30d7\u30ea\u304c\u30ea\u30bd\u30fc\u30b9\u30b5\u30fc\u30d0\u30fc\u3068\u76f4\u63a5\u901a\u4fe1\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306b\u3088\u304f\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u6bce\u65e5\u306e\u6295\u7a3f\u3092\u53d6\u5f97\u3059\u308b\u9759\u7684\u30b5\u30fc\u30d3\u30b9\u306a\u3069\u3067\u3059\u3002"}),"\n",(0,a.jsxs)(s.p,{children:["\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea\u306e\u8a8d\u8a3c (Authentication) \u306b\u306f\u3001",(0,a.jsx)(s.a,{href:"/quick-starts/m2m",children:"\u30de\u30b7\u30f3\u9593\u901a\u4fe1: Logto \u3067\u8a8d\u8a3c (Authentication)"})," \u30ac\u30a4\u30c9\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002Supabase \u3068\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea\u306e\u7d71\u5408\u306f\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3084 SPA \u3068\u540c\u69d8\u3067\u3059\uff08\u300c",(0,a.jsx)(s.a,{href:"#native-app-or-spa",children:"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u307e\u305f\u306f SPA"}),"\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\uff09\u3002Logto \u304b\u3089\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u3001\u305d\u308c\u3092\u4fdd\u8b77\u3055\u308c\u305f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9 API \u3092\u901a\u3058\u3066\u691c\u8a3c\u3059\u308b\u3053\u3068\u304c\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u305f\u3060\u3057\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3084 SPA \u306f\u901a\u5e38\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u5411\u3051\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u53d6\u5f97\u3057\u305f\u30e6\u30fc\u30b6\u30fc ID \u306f\u30e6\u30fc\u30b6\u30fc\u81ea\u4f53\u3092\u8868\u3057\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u30de\u30b7\u30f3\u9593\u901a\u4fe1\u30a2\u30d7\u30ea\u306e\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u81ea\u4f53\u3092\u8868\u3057\u3001\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u306e ",(0,a.jsx)(s.code,{children:"sub"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u3067\u306f\u306a\u304f M2M \u30a2\u30d7\u30ea\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 ID \u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u958b\u767a\u4e2d\u306b\u306f\u3001\u3069\u306e\u30c7\u30fc\u30bf\u304c M2M \u30a2\u30d7\u30ea\u5411\u3051\u3067\u3042\u308b\u304b\u3092\u533a\u5225\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u3055\u3089\u306b\u3001\u7279\u5b9a\u306e M2M \u30a2\u30d7\u30ea\u304c RLS \u5236\u9650\u3092\u30d0\u30a4\u30d1\u30b9\u3057\u3066 Supabase \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u306f\u3001Supabase \u306e ",(0,a.jsx)(s.code,{children:"service_role"})," \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066 Supabase \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u500b\u3005\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u305f\u3081\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u884c\u30ec\u30d9\u30eb\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u306b\u5236\u9650\u3055\u308c\u305a\u306b\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u7ba1\u7406\u30bf\u30b9\u30af\u3084\u81ea\u52d5\u5316\u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"service_role"})," \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306f\u3001JWT \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3068\u540c\u3058\u30da\u30fc\u30b8\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Service role secret",src:t(79541).A+"",width:"2000",height:"948"})}),"\n",(0,a.jsxs)(s.p,{children:["Supabase \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b ",(0,a.jsx)(s.code,{children:"service_role"})," \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u3053\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5185\u306e\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",children:"import { createClient } from '@supabase/supabase-js';\n\n// ...\nconst SUPABASE_SERVICE_ROLE_SECRET = process.env.SUPABASE_SERVICE_ROLE_SECRET;\n\nconst client = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_SECRET, {\n  // ...options\n});\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},10046:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/create-get-user-id-function-a82403fda6b70a5ee944d2ddc6058fdd.webp"},86551:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/create-rls-policy-d25a9bcf6966e995cd80e49dbd1a5739.webp"},71050:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/posts-table-d61708b17c77e0f3e3c23edad626b553.webp"},79541:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/service-role-secret-b671423defc58517bd481227b24da422.webp"},1643:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/supabase-api-settings-b81e56237542563029e32cffc158bead.webp"},79621:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(58101);const a={},r=n.createContext(a);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);