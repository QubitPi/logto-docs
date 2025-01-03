"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[88648],{42306:(e,n,s)=>{s.d(n,{Ay:()=>t,RM:()=>r});var i=s(25105),l=s(79621);const r=[];function c(e){const n={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001Logto \u30b3\u30cd\u30af\u30bf\u30fc\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u77e5\u8b58\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u3082\u3057\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,i.jsx)(n.a,{href:"/connectors",children:"\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u8a2d\u5b9a"})," \u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u59cb\u3081\u3066\u304f\u3060\u3055\u3044\u3002"]})})}function t(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},56064:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"integrations/sms/aliyun-sms/README","title":"Aliyun Short Message Service \u3092\u4f7f\u7528\u3057\u3066 SMS \u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3059\u308b","description":"Aliyun \u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u306e\u516c\u5f0f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/integrations/sms/aliyun-sms/README.mdx","sourceDirName":"integrations/sms/aliyun-sms","slug":"/integrations/aliyun-sms","permalink":"/ja/integrations/aliyun-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/integrations/sms/aliyun-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/aliyun-sms","sidebar_label":"Aliyun Short Message","sidebar_custom_props":{"description":"Aliyun \u306f\u30aa\u30f3\u30e9\u30a4\u30f3\u30d3\u30b8\u30cd\u30b9\u5411\u3051\u306b\u30af\u30e9\u30a6\u30c9\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002","logoFilename":"aliyun.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"SMTP","permalink":"/ja/integrations/smtp"},"next":{"title":"GatewayAPI SMS","permalink":"/ja/integrations/gatewayapi"}}');var l=s(25105),r=s(79621),c=s(42306);const t={slug:"/integrations/aliyun-sms",sidebar_label:"Aliyun Short Message",sidebar_custom_props:{description:"Aliyun \u306f\u30aa\u30f3\u30e9\u30a4\u30f3\u30d3\u30b8\u30cd\u30b9\u5411\u3051\u306b\u30af\u30e9\u30a6\u30c9\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",logoFilename:"aliyun.svg"}},d="Aliyun Short Message Service \u3092\u4f7f\u7528\u3057\u3066 SMS \u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3059\u308b",o={},h=[...c.RM,{value:"\u306f\u3058\u3081\u306b",id:"get-started",level:2},{value:"Aliyun SMS \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u3092\u8a2d\u5b9a\u3059\u308b",id:"set-up-a-short-message-service-in-aliyun-sms-console",level:2},{value:"Aliyun \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"create-an-aliyun-account",level:3},{value:"Aliyun \u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u3092\u6709\u52b9\u5316\u304a\u3088\u3073\u8a2d\u5b9a\u3059\u308b",id:"enable-and-configure-aliyun-short-message-service",level:3},{value:"\u30b3\u30cd\u30af\u30bf\u30fc JSON \u3092\u4f5c\u6210\u3059\u308b",id:"compose-the-connector-json",level:2},{value:"Aliyun SMS \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b",id:"test-aliyun-sms-connector",level:3},{value:"\u8a2d\u5b9a\u30bf\u30a4\u30d7",id:"config-types",level:3},{value:"\u53c2\u8003\u8cc7\u6599",id:"references",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"aliyun-short-message-service-\u3092\u4f7f\u7528\u3057\u3066-sms-\u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3059\u308b",children:"Aliyun Short Message Service \u3092\u4f7f\u7528\u3057\u3066 SMS \u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,l.jsx)(n.p,{children:"Aliyun \u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u306e\u516c\u5f0f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3002"}),"\n",(0,l.jsx)(c.Ay,{}),"\n",(0,l.jsx)(n.h2,{id:"get-started",children:"\u306f\u3058\u3081\u306b"}),"\n",(0,l.jsx)(n.p,{children:"Aliyun \u306f\u30a2\u30b8\u30a2\u306e\u4e3b\u8981\u306a\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3067\u3042\u308a\u3001SMS\uff08\u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\uff09\u3092\u542b\u3080\u591a\u304f\u306e\u30af\u30e9\u30a6\u30c9\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002Aliyun SMS \u30b3\u30cd\u30af\u30bf\u30fc\u306f\u3001Logto \u30c1\u30fc\u30e0\u304c\u63d0\u4f9b\u3059\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u3067\u3001Aliyun SMS \u30b5\u30fc\u30d3\u30b9\u3092\u547c\u3073\u51fa\u3059\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Logto \u306e\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306f SMS \u8a8d\u8a3c\u30b3\u30fc\u30c9\u3092\u4ecb\u3057\u3066 Logto \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u767b\u9332\u304a\u3088\u3073\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"set-up-a-short-message-service-in-aliyun-sms-console",children:"Aliyun SMS \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,l.jsx)(n.h3,{id:"create-an-aliyun-account",children:"Aliyun \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://cn.aliyun.com/",children:"Aliyun \u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u307e\u3060\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u767b\u9332\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"enable-and-configure-aliyun-short-message-service",children:"Aliyun \u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u3092\u6709\u52b9\u5316\u304a\u3088\u3073\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://cn.aliyun.com/",children:"Aliyun \u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8"}),"\u3067 Aliyun \u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3001",(0,l.jsx)(n.a,{href:"https://www.aliyun.com/product/sms",children:"SMS \u30b5\u30fc\u30d3\u30b9\u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8"}),"\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"SMS \u30b5\u30fc\u30d3\u30b9\u30da\u30fc\u30b8\u306e\u5de6\u4e0a\u306b\u3042\u308b\u300c\u7121\u6599\u958b\u901a\u300d(\u514d\u8d39\u5f00\u901a) \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u8a2d\u5b9a\u30d7\u30ed\u30bb\u30b9\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u300cSMS \u30b5\u30fc\u30d3\u30b9\u958b\u901a\u6761\u6b3e\u300d(\u77ed\u4fe1\u670d\u52a1\u5f00\u901a\u6761\u6b3e) \u3092\u8aad\u307f\u3001\u540c\u610f\u3057\u3066\u300c\u30b5\u30fc\u30d3\u30b9\u3092\u958b\u901a\u300d(\u5f00\u901a\u670d\u52a1) \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u6b21\u306b\u9032\u307f\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u73fe\u5728 ",(0,l.jsx)(n.a,{href:"https://dysms.console.aliyun.com/overview",children:"SMS \u30b5\u30fc\u30d3\u30b9\u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8"})," \u306b\u3044\u307e\u3059\u3002\u4f7f\u7528\u30b1\u30fc\u30b9\u306b\u5fdc\u3058\u3066\u3001\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u300c\u56fd\u5185\u6d88\u606f\u300d\u307e\u305f\u306f\u300c\u56fd\u9645/\u6e2f\u6fb3\u53f0\u6d88\u606f\u300d\u30dc\u30bf\u30f3\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u306b\u5f93\u3063\u3066\u7f72\u540d\u3068\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3057\u3001\u30ec\u30d3\u30e5\u30fc\u306b\u5fc5\u8981\u306a\u8cc7\u6599\u307e\u305f\u306f\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u7f72\u540d\u7533\u8acb\u3092\u8a18\u5165\u3059\u308b\u969b\u306b\u306f\u300c\u691c\u8a3c\u30b3\u30fc\u30c9\u30e1\u30c3\u30bb\u30fc\u30b8\u300d(\u9a8c\u8bc1\u7801) \u3092\u300c\u30b7\u30ca\u30ea\u30aa\u300d(\u9002\u7528\u573a\u666f) \u3068\u3057\u3066\u9078\u629e\u3057\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30ec\u30d3\u30e5\u30fc\u3092\u7533\u8acb\u3059\u308b\u969b\u306b\u306f\u300c\u30bf\u30a4\u30d7\u300d(\u6a21\u677f\u7c7b\u578b) \u3068\u3057\u3066\u300c\u691c\u8a3c\u30b3\u30fc\u30c9\u30e1\u30c3\u30bb\u30fc\u30b8\u300d(\u9a8c\u8bc1\u7801) \u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u3089\u306e\u7f72\u540d\u3068\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u3067\u3059\u3002\u73fe\u5728\u3001\u691c\u8a3c\u30b3\u30fc\u30c9\u95a2\u9023\u306e\u30c6\u30ad\u30b9\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u4ee5\u5916\u306e SMS \u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9001\u4fe1\u306f\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5185\u5bb9\u306b\u30c7\u30b8\u30bf\u30eb\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u914d\u7f6e\u3057\u305f\u3044\u5834\u6240\u306b\u306f ",(0,l.jsx)(n.code,{children:"{{code}}"})," \u3092\u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["SMS \u7f72\u540d\u3068\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u7533\u8acb\u3092\u63d0\u51fa\u3057\u305f\u5f8c\u3001\u305d\u308c\u304c\u6709\u52b9\u306b\u306a\u308b\u306e\u3092\u5f85\u3064\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u6642\u70b9\u3067\u3001",(0,l.jsx)(n.a,{href:"https://dysms.console.aliyun.com/overview",children:"SMS \u30b5\u30fc\u30d3\u30b9\u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8"})," \u306b\u623b\u308a\u3001\u30c6\u30b9\u30c8 SMS \u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002\u7f72\u540d\u3068\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u4f7f\u7528\u53ef\u80fd\u3067\u3042\u308c\u3070\u3001\u76f4\u63a5\u8a66\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u3060\u6709\u52b9\u3067\u306a\u3044\u5834\u5408\u3001Aliyun \u306f\u30c6\u30b9\u30c8\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3082\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30c6\u30b9\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u524d\u306b\u3001\u5c11\u984d\u306e\u30c1\u30e3\u30fc\u30b8\u304c\u5fc5\u8981\u306a\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u30c6\u30b9\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u524d\u306b\u3001\u30c6\u30b9\u30c8\u7528\u306e\u96fb\u8a71\u756a\u53f7\u3092\u30d0\u30a4\u30f3\u30c9\u3059\u308b\u3088\u3046\u6c42\u3081\u3089\u308c\u308b\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,l.jsx)(n.a,{href:"https://dysms.console.aliyun.com/overview",children:"SMS \u30b5\u30fc\u30d3\u30b9\u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8"})," \u306e\u30b5\u30a4\u30c9\u30d0\u30fc\u304b\u3089\u300c\u5feb\u901f\u5b66\u4e60\u300d\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"compose-the-connector-json",children:"\u30b3\u30cd\u30af\u30bf\u30fc JSON \u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://dysms.console.aliyun.com/overview",children:"SMS \u30b5\u30fc\u30d3\u30b9\u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8"})," \u304b\u3089\u3001\u53f3\u4e0a\u306e\u30a2\u30d0\u30bf\u30fc\u306b\u30ab\u30fc\u30bd\u30eb\u3092\u5408\u308f\u305b\u3066\u300cAccessKey \u7ba1\u7406\u300d(AccessKey \u7ba1\u7406) \u306b\u79fb\u52d5\u3057\u3001\u300cAccessKey \u3092\u4f5c\u6210\u300d(\u521b\u5efa AccessKey) \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u691c\u8a3c\u3092\u5b8c\u4e86\u3059\u308b\u3068\u3001\u300cAccessKey ID\u300d\u3068\u300cAccessKey Secret\u300d\u306e\u30da\u30a2\u304c\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u3092\u9069\u5207\u306b\u4fdd\u7ba1\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5148\u307b\u3069\u8a2a\u308c\u305f\u300c\u56fd\u5185\u6d88\u606f\u300d\u307e\u305f\u306f\u300c\u56fd\u9645/\u6e2f\u6fb3\u53f0\u6d88\u606f\u300d\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3001\u300c\u7f72\u540d\u300d(\u7b7e\u540d\u540d\u79f0) \u3068\u300c\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30b3\u30fc\u30c9\u300d(\u6a21\u677f CODE) \u3092\u7c21\u5358\u306b\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30c6\u30b9\u30c8\u5c02\u7528\u306e\u7f72\u540d\u3068\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u300c\u5feb\u901f\u5b66\u4e60\u300d\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3001\u300c\u7f72\u540d\u3068\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\uff08\u30c6\u30b9\u30c8\u5c02\u7528\uff09\u300d\u306e\u4e0b\u306b\u305d\u308c\u3089\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Aliyun SMS \u30b3\u30cd\u30af\u30bf\u30fc\u306e\u8a2d\u5b9a\u3092\u8a18\u5165\u3057\u307e\u3059\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30b9\u30c6\u30c3\u30d7 1 \u3067\u53d6\u5f97\u3057\u305f\u30a2\u30af\u30bb\u30b9\u30ad\u30fc\u306e\u30da\u30a2\u3067 ",(0,l.jsx)(n.code,{children:"accessKeyId"})," \u3068 ",(0,l.jsx)(n.code,{children:"accessKeySecret"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8a18\u5165\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u30b9\u30c6\u30c3\u30d7 2 \u3067\u8a00\u53ca\u3055\u308c\u305f\u300c\u7f72\u540d\u300d(\u7b7e\u540d\u540d\u79f0) \u3067 ",(0,l.jsx)(n.code,{children:"signName"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8a18\u5165\u3057\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3053\u306e\u7f72\u540d\u540d\u3092\u5171\u6709\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7570\u306a\u308b\u30b1\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u8907\u6570\u306e SMS \u30b3\u30cd\u30af\u30bf\u30fc\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u5358\u4e00\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u30b9\u30c6\u30c3\u30d7 2 \u304b\u3089\u306e\u300c\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30b3\u30fc\u30c9\u300d(\u6a21\u677f CODE) \u3067\u3001SMS \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u5236\u5fa1\u3059\u308b ",(0,l.jsx)(n.code,{children:"templateCode"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8a18\u5165\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7570\u306a\u308b\u4f7f\u7528\u30b1\u30fc\u30b9\u306b\u5bfe\u3057\u3066 ",(0,l.jsx)(n.code,{children:"usageType"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092 ",(0,l.jsx)(n.code,{children:"Register"}),"\u3001",(0,l.jsx)(n.code,{children:"SignIn"}),"\u3001",(0,l.jsx)(n.code,{children:"ForgotPassword"}),"\u3001\u307e\u305f\u306f ",(0,l.jsx)(n.code,{children:"Generic"})," \u306e\u3044\u305a\u308c\u304b\u3067\u8a18\u5165\u3057\u307e\u3059\u3002 (",(0,l.jsx)(n.code,{children:"usageType"})," \u306f\u9069\u5207\u306a\u4f7f\u7528\u30b1\u30fc\u30b9\u3092\u8b58\u5225\u3059\u308b\u305f\u3081\u306e Logto \u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3059\u3002) \u5b8c\u5168\u306a\u30e6\u30fc\u30b6\u30fc\u30d5\u30ed\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u306b\u3001",(0,l.jsx)(n.code,{children:"Register"}),"\u3001",(0,l.jsx)(n.code,{children:"SignIn"}),"\u3001",(0,l.jsx)(n.code,{children:"ForgotPassword"}),"\u3001\u304a\u3088\u3073 ",(0,l.jsx)(n.code,{children:"Generic"})," \u306e usageType \u3092\u6301\u3064\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"test-aliyun-sms-connector",children:"Aliyun SMS \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b"}),"\n",(0,l.jsx)(n.p,{children:"\u96fb\u8a71\u756a\u53f7\u3092\u5165\u529b\u3057\u3001\u300c\u9001\u4fe1\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u8a2d\u5b9a\u304c\u6a5f\u80fd\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u300c\u4fdd\u5b58\u3057\u3066\u5b8c\u4e86\u300d\u3059\u308b\u524d\u306b\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u4ee5\u4e0a\u3067\u3059\u3002",(0,l.jsx)(n.a,{href:"/connectors/sms-connectors/#enable-phone-number-sign-up-or-sign-in",children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u3067\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\u306e\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"config-types",children:"\u8a2d\u5b9a\u30bf\u30a4\u30d7"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u540d\u524d"}),(0,l.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accessKeyId"}),(0,l.jsx)(n.td,{children:"string"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"accessKeySecret"}),(0,l.jsx)(n.td,{children:"string"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"signName"}),(0,l.jsx)(n.td,{children:"string"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"templates"}),(0,l.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,l.jsx)(n.th,{children:"\u5217\u6319\u5024"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"templateCode"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"N/A"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"usageType"}),(0,l.jsx)(n.td,{children:"enum string"}),(0,l.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"\u53c2\u8003\u8cc7\u6599"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://dysms.console.aliyun.com/quickstart",children:"Aliyun SMS - \u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var i=s(58101);const l={},r=i.createContext(l);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);