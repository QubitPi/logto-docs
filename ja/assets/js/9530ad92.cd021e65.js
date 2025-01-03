"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[23782],{51625:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"developers/webhooks/webhooks-request","title":"Webhooks \u30ea\u30af\u30a8\u30b9\u30c8","description":"\u6709\u52b9\u306a\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3059\u308b\u3068\u3001Logto \u306f\u5bfe\u5fdc\u3059\u308b Webhook \u3092\u898b\u3064\u3051\u3001\u30d5\u30c3\u30af\u8a2d\u5b9a\u3054\u3068\u306b POST \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/webhooks-request","permalink":"/ja/developers/webhooks/webhooks-request","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"webhooks-request","title":"Webhooks \u30ea\u30af\u30a8\u30b9\u30c8","sidebar_label":"Webhooks \u30ea\u30af\u30a8\u30b9\u30c8","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Webhooks \u30a4\u30d9\u30f3\u30c8","permalink":"/ja/developers/webhooks/webhooks-events"},"next":{"title":"Webhook \u3092\u5b89\u5168\u306b\u3059\u308b","permalink":"/ja/developers/webhooks/secure-webhooks"}}');var t=s(25105),r=s(79621);const i={id:"webhooks-request",title:"Webhooks \u30ea\u30af\u30a8\u30b9\u30c8",sidebar_label:"Webhooks \u30ea\u30af\u30a8\u30b9\u30c8",sidebar_position:4},l="Webhooks \u30ea\u30af\u30a8\u30b9\u30c8",c={},h=[{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc",id:"request-headers",level:2},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3",id:"interaction-hook-events-request-body",level:2},{value:"\u30c7\u30fc\u30bf\u5909\u66f4\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3",id:"data-mutation-hook-events-request-body",level:2},{value:"\u6a19\u6e96\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9",id:"standard-request-body-fields",level:3},{value:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3 API \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9",id:"interaction-api-context-body-fields",level:3},{value:"Management API \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9",id:"management-api-context-body-fields",level:3},{value:"\u30c7\u30fc\u30bf\u30da\u30a4\u30ed\u30fc\u30c9\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9",id:"data-payload-body-fields",level:3}];function x(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.header,{children:(0,t.jsx)(d.h1,{id:"webhooks-\u30ea\u30af\u30a8\u30b9\u30c8",children:"Webhooks \u30ea\u30af\u30a8\u30b9\u30c8"})}),"\n",(0,t.jsx)(d.p,{children:"\u6709\u52b9\u306a\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3059\u308b\u3068\u3001Logto \u306f\u5bfe\u5fdc\u3059\u308b Webhook \u3092\u898b\u3064\u3051\u3001\u30d5\u30c3\u30af\u8a2d\u5b9a\u3054\u3068\u306b POST \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(d.h2,{id:"request-headers",children:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Key"}),(0,t.jsx)(d.th,{children:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u53ef\u80fd"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"user-agent"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsxs)(d.td,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f ",(0,t.jsx)(d.code,{children:"Logto (https://logto.io/)"}),"\u3002"]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"content-type"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsxs)(d.td,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f ",(0,t.jsx)(d.code,{children:"application/json"}),"\u3002"]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"logto-signature-sha-256"}),(0,t.jsx)(d.td,{}),(0,t.jsxs)(d.td,{children:["\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306e\u7f72\u540d\u3001",(0,t.jsx)(d.a,{href:"/developers/webhooks/secure-webhooks",children:"Webhook \u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4fdd\u8b77"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})]})]}),"\n",(0,t.jsxs)(d.p,{children:["\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u53ef\u80fd\u306a\u30d8\u30c3\u30c0\u30fc\u306f\u3001\u540c\u3058\u30ad\u30fc\u3067 ",(0,t.jsx)(d.a,{href:"/developers/webhooks/configure-webhooks/#secure-webhook",children:"\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"})," \u3059\u308b\u3053\u3068\u3067\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(d.h2,{id:"interaction-hook-events-request-body",children:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3"}),"\n",(0,t.jsxs)(d.p,{children:["\u5229\u7528\u53ef\u80fd\u306a\u30a4\u30d9\u30f3\u30c8\uff1a",(0,t.jsx)(d.code,{children:"PostRegister"}),"\u3001",(0,t.jsx)(d.code,{children:"PostSignIn"}),"\u3001",(0,t.jsx)(d.code,{children:"PostResetPassword"})]}),"\n",(0,t.jsx)(d.p,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306f\u30013 \u7a2e\u985e\u306e\u30c7\u30fc\u30bf\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u542b\u3080 JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\uff1a"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type UserEntity = {\n  id: string;\n  username?: string;\n  primaryEmail?: string;\n  primaryPhone?: string;\n  name?: string;\n  avatar?: string;\n  customData?: object;\n  identities?: object;\n  lastSignInAt?: string;\n  createdAt?: string;\n  applicationId?: string;\n  isSuspended?: boolean;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type ApplicationEntity = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hookId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Logto \u5185\u306e\u8b58\u5225\u5b50\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"event"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"createdAt"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"ISO \u5f62\u5f0f\u3067\u306e\u30da\u30a4\u30ed\u30fc\u30c9\u306e\u4f5c\u6210\u6642\u9593\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"interactionEvent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sessionId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u30bb\u30c3\u30b7\u30e7\u30f3 ID\uff08\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3 ID \u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff09\u3001\u8a72\u5f53\u3059\u308b\u5834\u5408\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userAgent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30e6\u30fc\u30b6\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userIp"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u306e IP \u30a2\u30c9\u30ec\u30b9\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u9023\u3059\u308b\u30e6\u30fc\u30b6\u30fc ID\u3001\u8a72\u5f53\u3059\u308b\u5834\u5408\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"user"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"UserEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u9023\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3001\u8a72\u5f53\u3059\u308b\u5834\u5408\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"applicationId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u9023\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 ID\u3001\u8a72\u5f53\u3059\u308b\u5834\u5408\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"application"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ApplicationEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u9023\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u60c5\u5831\u3001\u8a72\u5f53\u3059\u308b\u5834\u5408\u3002"})]})]})]}),"\n",(0,t.jsxs)(d.p,{children:["\u8a73\u7d30\u306a\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u8aac\u660e\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(d.a,{href:"/user-management/user-data",children:"\u30e6\u30fc\u30b6\u30fc"})," \u304a\u3088\u3073 ",(0,t.jsx)(d.a,{href:"/integrate-logto/application-data-structure",children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"})," \u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(d.h2,{id:"data-mutation-hook-events-request-body",children:"\u30c7\u30fc\u30bf\u5909\u66f4\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3"}),"\n",(0,t.jsx)(d.h3,{id:"standard-request-body-fields",children:"\u6a19\u6e96\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hookId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"Logto \u5185\u306e\u8b58\u5225\u5b50\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"event"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"createdAt"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"ISO \u5f62\u5f0f\u3067\u306e\u30da\u30a4\u30ed\u30fc\u30c9\u306e\u4f5c\u6210\u6642\u9593\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userAgent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u30e6\u30fc\u30b6\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ip"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u306e IP \u30a2\u30c9\u30ec\u30b9\u3002"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"interaction-api-context-body-fields",children:"\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3 API \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9"}),"\n",(0,t.jsx)(d.p,{children:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3 API \u547c\u3073\u51fa\u3057\u306b\u3088\u3063\u3066\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u308b\u30c7\u30fc\u30bf\u5909\u66f4\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u3002"}),"\n",(0,t.jsxs)(d.p,{children:["\u5229\u7528\u53ef\u80fd\u306a\u30a4\u30d9\u30f3\u30c8\uff1a",(0,t.jsx)(d.code,{children:"User.Created"}),"\u3001",(0,t.jsx)(d.code,{children:"User.Data.Updated"})]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"interactionEvent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sessionId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u30bb\u30c3\u30b7\u30e7\u30f3 ID\uff08\u30a4\u30f3\u30bf\u30e9\u30af\u30b7\u30e7\u30f3 ID \u3067\u306f\u3042\u308a\u307e\u305b\u3093\uff09\u3001\u8a72\u5f53\u3059\u308b\u5834\u5408\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"applicationId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u9023\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 ID\u3001\u8a72\u5f53\u3059\u308b\u5834\u5408\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"application"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ApplicationEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u9023\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u60c5\u5831\u3001\u8a72\u5f53\u3059\u308b\u5834\u5408\u3002"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"management-api-context-body-fields",children:"Management API \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9"}),"\n",(0,t.jsx)(d.p,{children:"Management API \u547c\u3073\u51fa\u3057\u306b\u3088\u3063\u3066\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u308b\u30c7\u30fc\u30bf\u5909\u66f4\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u3002"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"path"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b API \u547c\u3073\u51fa\u3057\u306e\u30d1\u30b9\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"method"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b API \u547c\u3073\u51fa\u3057\u306e\u30e1\u30bd\u30c3\u30c9\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"status"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"number"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b API \u547c\u3073\u51fa\u3057\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30c6\u30fc\u30bf\u30b9\u30b3\u30fc\u30c9\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"params"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"object"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b API \u547c\u3073\u51fa\u3057\u306e\u30ea\u30af\u30a8\u30b9\u30c8 koa \u30d1\u30b9\u30d1\u30e9\u30e1\u30fc\u30bf\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"matchedRoute"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30d5\u30c3\u30af\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b API \u547c\u3073\u51fa\u3057\u306e koa \u30de\u30c3\u30c1\u3057\u305f\u30eb\u30fc\u30c8\u3002Logto \u306f\u3053\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3057\u3066\u6709\u52b9\u306a\u30d5\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u3092\u30de\u30c3\u30c1\u3057\u307e\u3059\u3002"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"data-payload-body-fields",children:"\u30c7\u30fc\u30bf\u30da\u30a4\u30ed\u30fc\u30c9\u30dc\u30c7\u30a3\u30d5\u30a3\u30fc\u30eb\u30c9"}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30d9\u30f3\u30c8"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30a4\u30d9\u30f3\u30c8"}),(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"UserEntity"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"UserEntity"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u66f4\u65b0\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u30ed\u30fc\u30eb\u30a4\u30d9\u30f3\u30c8"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Role = {\n  id: string;\n  name: string;\n  description: string;\n  type: 'User' | 'MachineToMachine';\n  isDefault: boolean;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Scope = {\n  id: string;\n  name: string;\n  description: string;\n  resourceId: string;\n  createdAt: number;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30a4\u30d9\u30f3\u30c8"}),(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Role"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210\u3055\u308c\u305f\u30ed\u30fc\u30eb\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Role"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u66f4\u65b0\u3055\u308c\u305f\u30ed\u30fc\u30eb\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Scope.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope[]"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u30ed\u30fc\u30eb\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u66f4\u65b0\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Scope.Updated"}),(0,t.jsx)(d.td,{children:"roleId"}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u30b9\u30b3\u30fc\u30d7\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30ed\u30fc\u30eb ID\u3002\uff08\u4e8b\u524d\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3067\u65b0\u3057\u3044\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u30a4\u30d9\u30f3\u30c8\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u305f\u5834\u5408\u306e\u307f\u5229\u7528\u53ef\u80fd\uff09"})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u6a29\u9650 (\u30b9\u30b3\u30fc\u30d7) \u30a4\u30d9\u30f3\u30c8"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30a4\u30d9\u30f3\u30c8"}),(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u66f4\u65b0\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u7d44\u7e54\u30a4\u30d9\u30f3\u30c8"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Organization = {\n  id: string;\n  name: string;\n  description?: string;\n  customData: object;\n  createdAt: number;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30a4\u30d9\u30f3\u30c8"}),(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Organization"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210\u3055\u308c\u305f\u7d44\u7e54\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Organization"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u66f4\u65b0\u3055\u308c\u305f\u7d44\u7e54\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Membership.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u7d44\u7e54\u30ed\u30fc\u30eb\u30a4\u30d9\u30f3\u30c8"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type OrganizationRole = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type OrganizationScope = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30a4\u30d9\u30f3\u30c8"}),(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationRole"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u4f5c\u6210\u3055\u308c\u305f\u7d44\u7e54\u30ed\u30fc\u30eb\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationRole"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u66f4\u65b0\u3055\u308c\u305f\u7d44\u7e54\u30ed\u30fc\u30eb\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Scope.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Scope.Updated"}),(0,t.jsx)(d.td,{children:"organizationRoleId"}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u30b9\u30b3\u30fc\u30d7\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30ed\u30fc\u30eb ID\u3002\uff08\u4e8b\u524d\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3067\u65b0\u3057\u3044\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u30a4\u30d9\u30f3\u30c8\u304c\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u305f\u5834\u5408\u306e\u307f\u5229\u7528\u53ef\u80fd\uff09"})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u7d44\u7e54\u6a29\u9650 (\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7) \u30a4\u30d9\u30f3\u30c8"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"\u30a4\u30d9\u30f3\u30c8"}),(0,t.jsx)(d.th,{children:"\u30d5\u30a3\u30fc\u30eb\u30c9"}),(0,t.jsx)(d.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(d.th,{children:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),(0,t.jsx)(d.th,{children:"\u5099\u8003"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationScope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u4f5c\u6210\u3055\u308c\u305f\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationScope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u66f4\u65b0\u3055\u308c\u305f\u7d44\u7e54\u30b9\u30b3\u30fc\u30d7\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},79621:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>l});var n=s(58101);const t={},r=n.createContext(t);function i(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);