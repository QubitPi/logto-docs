"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[92690],{26538:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"developers/webhooks/webhooks-request","title":"Webhooks \u8bf7\u6c42","description":"\u4e00\u65e6\u6709\u6548\u7684 hook \u4e8b\u4ef6\u88ab\u89e6\u53d1\uff0cLogto \u5c06\u627e\u5230\u76f8\u5e94\u7684 webhooks\uff0c\u5e76\u6839\u636e\u6bcf\u4e2a hook \u914d\u7f6e\u53d1\u9001\u4e00\u4e2a POST \u8bf7\u6c42\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/webhooks-request","permalink":"/zh-CN/developers/webhooks/webhooks-request","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"webhooks-request","title":"Webhooks \u8bf7\u6c42","sidebar_label":"Webhooks \u8bf7\u6c42","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Webhooks events","permalink":"/zh-CN/developers/webhooks/webhooks-events"},"next":{"title":"\u5b89\u5168 Webhook","permalink":"/zh-CN/developers/webhooks/secure-webhooks"}}');var t=s(25105),r=s(79621);const i={id:"webhooks-request",title:"Webhooks \u8bf7\u6c42",sidebar_label:"Webhooks \u8bf7\u6c42",sidebar_position:4},l="Webhooks \u8bf7\u6c42",h={},c=[{value:"\u8bf7\u6c42\u5934",id:"request-headers",level:2},{value:"\u4ea4\u4e92 hook \u4e8b\u4ef6\u8bf7\u6c42\u4f53",id:"interaction-hook-events-request-body",level:2},{value:"\u6570\u636e\u53d8\u66f4 hook \u4e8b\u4ef6\u8bf7\u6c42\u4f53",id:"data-mutation-hook-events-request-body",level:2},{value:"\u6807\u51c6\u8bf7\u6c42\u4f53\u5b57\u6bb5",id:"standard-request-body-fields",level:3},{value:"\u4ea4\u4e92 API \u4e0a\u4e0b\u6587\u4f53\u5b57\u6bb5",id:"interaction-api-context-body-fields",level:3},{value:"\u7ba1\u7406 API \u4e0a\u4e0b\u6587\u4f53\u5b57\u6bb5",id:"management-api-context-body-fields",level:3},{value:"\u6570\u636e\u8d1f\u8f7d\u4f53\u5b57\u6bb5",id:"data-payload-body-fields",level:3}];function x(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.header,{children:(0,t.jsx)(d.h1,{id:"webhooks-\u8bf7\u6c42",children:"Webhooks \u8bf7\u6c42"})}),"\n",(0,t.jsx)(d.p,{children:"\u4e00\u65e6\u6709\u6548\u7684 hook \u4e8b\u4ef6\u88ab\u89e6\u53d1\uff0cLogto \u5c06\u627e\u5230\u76f8\u5e94\u7684 webhooks\uff0c\u5e76\u6839\u636e\u6bcf\u4e2a hook \u914d\u7f6e\u53d1\u9001\u4e00\u4e2a POST \u8bf7\u6c42\u3002"}),"\n",(0,t.jsx)(d.h2,{id:"request-headers",children:"\u8bf7\u6c42\u5934"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Key"}),(0,t.jsx)(d.th,{children:"Customizable"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"user-agent"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsxs)(d.td,{children:["\u9ed8\u8ba4\u662f ",(0,t.jsx)(d.code,{children:"Logto (https://logto.io/)"}),"\u3002"]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"content-type"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsxs)(d.td,{children:["\u9ed8\u8ba4\u662f ",(0,t.jsx)(d.code,{children:"application/json"}),"\u3002"]})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"logto-signature-sha-256"}),(0,t.jsx)(d.td,{}),(0,t.jsxs)(d.td,{children:["\u8bf7\u6c42\u4f53\u7684\u7b7e\u540d\uff0c\u53c2\u8003 ",(0,t.jsx)(d.a,{href:"/developers/webhooks/secure-webhooks",children:"\u4fdd\u62a4\u4f60\u7684 webhooks"}),"\u3002"]})]})]})]}),"\n",(0,t.jsxs)(d.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u76f8\u540c\u7684 key ",(0,t.jsx)(d.a,{href:"/developers/webhooks/configure-webhooks/#secure-webhook",children:"\u81ea\u5b9a\u4e49\u8bf7\u6c42"})," \u5934\u6765\u8986\u76d6\u53ef\u81ea\u5b9a\u4e49\u7684\u5934\u3002"]}),"\n",(0,t.jsx)(d.h2,{id:"interaction-hook-events-request-body",children:"\u4ea4\u4e92 hook \u4e8b\u4ef6\u8bf7\u6c42\u4f53"}),"\n",(0,t.jsxs)(d.p,{children:["\u53ef\u7528\u4e8b\u4ef6\uff1a",(0,t.jsx)(d.code,{children:"PostRegister"}),"\uff0c",(0,t.jsx)(d.code,{children:"PostSignIn"}),"\uff0c",(0,t.jsx)(d.code,{children:"PostResetPassword"})]}),"\n",(0,t.jsx)(d.p,{children:"\u8bf7\u6c42\u4f53\u662f\u4e00\u4e2a\u5305\u542b\u4e09\u79cd\u7c7b\u578b\u6570\u636e\u5b57\u6bb5\u7684 JSON \u5bf9\u8c61\uff1a"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type UserEntity = {\n  id: string;\n  username?: string;\n  primaryEmail?: string;\n  primaryPhone?: string;\n  name?: string;\n  avatar?: string;\n  customData?: object;\n  identities?: object;\n  lastSignInAt?: string;\n  createdAt?: string;\n  applicationId?: string;\n  isSuspended?: boolean;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type ApplicationEntity = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hookId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u5728 Logto \u4e2d\u7684\u6807\u8bc6\u7b26\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"event"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684\u4e8b\u4ef6\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"createdAt"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u8d1f\u8f7d\u7684\u521b\u5efa\u65f6\u95f4\uff0cISO \u683c\u5f0f\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"interactionEvent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684\u4ea4\u4e92\u4e8b\u4ef6\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sessionId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u7684\u4f1a\u8bdd ID\uff08\u4e0d\u662f\u4ea4\u4e92 ID\uff09\uff0c\u5982\u679c\u9002\u7528\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userAgent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684\u8bf7\u6c42\u7684 user-agent\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userIp"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684\u8bf7\u6c42\u7684 IP \u5730\u5740\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u76f8\u5173\u7684\u7528\u6237 ID\uff0c\u5982\u679c\u9002\u7528\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"user"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"UserEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u76f8\u5173\u7684\u7528\u6237\u5b9e\u4f53\uff0c\u5982\u679c\u9002\u7528\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"applicationId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u76f8\u5173\u7684\u5e94\u7528 ID\uff0c\u5982\u679c\u9002\u7528\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"application"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ApplicationEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u76f8\u5173\u7684\u5e94\u7528\u4fe1\u606f\uff0c\u5982\u679c\u9002\u7528\u3002"})]})]})]}),"\n",(0,t.jsxs)(d.p,{children:["\u53c2\u89c1 ",(0,t.jsx)(d.a,{href:"/user-management/user-data",children:"\u7528\u6237"})," \u548c ",(0,t.jsx)(d.a,{href:"/integrate-logto/application-data-structure",children:"\u5e94\u7528"})," \u53c2\u8003\u4ee5\u83b7\u53d6\u8be6\u7ec6\u7684\u5b57\u6bb5\u89e3\u91ca\u3002"]}),"\n",(0,t.jsx)(d.h2,{id:"data-mutation-hook-events-request-body",children:"\u6570\u636e\u53d8\u66f4 hook \u4e8b\u4ef6\u8bf7\u6c42\u4f53"}),"\n",(0,t.jsx)(d.h3,{id:"standard-request-body-fields",children:"\u6807\u51c6\u8bf7\u6c42\u4f53\u5b57\u6bb5"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"hookId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u5728 Logto \u4e2d\u7684\u6807\u8bc6\u7b26\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"event"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684\u4e8b\u4ef6\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"createdAt"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u8d1f\u8f7d\u7684\u521b\u5efa\u65f6\u95f4\uff0cISO \u683c\u5f0f\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"userAgent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u8bf7\u6c42\u7684 user-agent\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ip"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u8bf7\u6c42\u7684 IP \u5730\u5740\u3002"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"interaction-api-context-body-fields",children:"\u4ea4\u4e92 API \u4e0a\u4e0b\u6587\u4f53\u5b57\u6bb5"}),"\n",(0,t.jsx)(d.p,{children:"\u7531\u7528\u6237\u4ea4\u4e92 API \u8c03\u7528\u89e6\u53d1\u7684\u6570\u636e\u53d8\u66f4 hook \u4e8b\u4ef6\u3002"}),"\n",(0,t.jsxs)(d.p,{children:["\u53ef\u7528\u4e8b\u4ef6\uff1a",(0,t.jsx)(d.code,{children:"User.Created"}),"\uff0c",(0,t.jsx)(d.code,{children:"User.Data.Updated"})]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"interactionEvent"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684\u4ea4\u4e92\u4e8b\u4ef6\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sessionId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u7684\u4f1a\u8bdd ID\uff08\u4e0d\u662f\u4ea4\u4e92 ID\uff09\uff0c\u5982\u679c\u9002\u7528\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"applicationId"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u76f8\u5173\u7684\u5e94\u7528 ID\uff0c\u5982\u679c\u9002\u7528\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"application"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"ApplicationEntity"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u76f8\u5173\u7684\u5e94\u7528\u4fe1\u606f\uff0c\u5982\u679c\u9002\u7528\u3002"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"management-api-context-body-fields",children:"\u7ba1\u7406 API \u4e0a\u4e0b\u6587\u4f53\u5b57\u6bb5"}),"\n",(0,t.jsx)(d.p,{children:"\u7531\u7ba1\u7406 API \u8c03\u7528\u89e6\u53d1\u7684\u6570\u636e\u53d8\u66f4 hook \u4e8b\u4ef6\u3002"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"path"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684 API \u8c03\u7528\u8def\u5f84\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"method"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684 API \u8c03\u7528\u65b9\u6cd5\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"status"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"number"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684 API \u8c03\u7528\u7684\u54cd\u5e94\u72b6\u6001\u7801\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"params"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"object"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684 API \u8c03\u7528\u7684\u8bf7\u6c42 koa \u8def\u5f84\u53c2\u6570\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"matchedRoute"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"string"})}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u89e6\u53d1\u6b64 hook \u7684 API \u8c03\u7528\u7684 koa \u5339\u914d\u8def\u7531\u3002Logto \u4f7f\u7528\u6b64\u5b57\u6bb5\u6765\u5339\u914d\u542f\u7528\u7684 hook \u4e8b\u4ef6\u3002"})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"data-payload-body-fields",children:"\u6570\u636e\u8d1f\u8f7d\u4f53\u5b57\u6bb5"}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u7528\u6237\u4e8b\u4ef6"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Event"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"UserEntity"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u521b\u5efa\u7684\u7528\u6237\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"UserEntity"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u66f4\u65b0\u7684\u7528\u6237\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"User.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u89d2\u8272\u4e8b\u4ef6"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Role = {\n  id: string;\n  name: string;\n  description: string;\n  type: 'User' | 'MachineToMachine';\n  isDefault: boolean;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Scope = {\n  id: string;\n  name: string;\n  description: string;\n  resourceId: string;\n  createdAt: number;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Event"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Role"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u521b\u5efa\u7684\u89d2\u8272\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Role"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u66f4\u65b0\u7684\u89d2\u8272\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Scope.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope[]"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u5206\u914d\u7ed9\u89d2\u8272\u7684\u66f4\u65b0\u6743\u9650\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Role.Scope.Updated"}),(0,t.jsx)(d.td,{children:"roleId"}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u5206\u914d\u6743\u9650\u7684\u89d2\u8272 ID\u3002\uff08\u4ec5\u5728\u4e8b\u4ef6\u7531\u521b\u5efa\u5177\u6709\u9884\u5206\u914d\u6743\u9650\u7684\u65b0\u89d2\u8272\u89e6\u53d1\u65f6\u53ef\u7528\uff09"})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u6743\u9650\uff08Scope\uff09\u4e8b\u4ef6"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Event"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u521b\u5efa\u7684\u6743\u9650\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Scope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u66f4\u65b0\u7684\u6743\u9650\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Scope.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u7ec4\u7ec7\u4e8b\u4ef6"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type Organization = {\n  id: string;\n  name: string;\n  description?: string;\n  customData: object;\n  createdAt: number;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Event"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Organization"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u521b\u5efa\u7684\u7ec4\u7ec7\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"Organization"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u66f4\u65b0\u7684\u7ec4\u7ec7\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"Organization.Membership.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u7ec4\u7ec7\u89d2\u8272\u4e8b\u4ef6"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type OrganizationRole = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-tsx",children:"type OrganizationScope = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Event"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationRole"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u521b\u5efa\u7684\u7ec4\u7ec7\u89d2\u8272\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationRole"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u6b64\u4e8b\u4ef6\u66f4\u65b0\u7684\u7ec4\u7ec7\u89d2\u8272\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Scope.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationRole.Scope.Updated"}),(0,t.jsx)(d.td,{children:"organizationRoleId"}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"\u2705"}),(0,t.jsx)(d.td,{children:"\u5206\u914d\u6743\u9650\u7684\u89d2\u8272 ID\u3002\uff08\u4ec5\u5728\u4e8b\u4ef6\u7531\u521b\u5efa\u5177\u6709\u9884\u5206\u914d\u6743\u9650\u7684\u65b0\u89d2\u8272\u89e6\u53d1\u65f6\u53ef\u7528\uff09"})]})]})]}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"\u7ec4\u7ec7\u6743\u9650\uff08OrganizationScope\uff09\u4e8b\u4ef6"})}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Event"}),(0,t.jsx)(d.th,{children:"Field"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Optional"}),(0,t.jsx)(d.th,{children:"Notes"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Created"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationScope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u521b\u5efa\u7684\u7ec4\u7ec7\u6743\u9650\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Data.Updated"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"OrganizationScope"}),(0,t.jsx)(d.td,{}),(0,t.jsx)(d.td,{children:"\u66f4\u65b0\u7684\u7ec4\u7ec7\u6743\u9650\u5b9e\u4f53\u3002"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"OrganizationScope.Deleted"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{})]})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},79621:(e,d,s)=>{s.d(d,{R:()=>i,x:()=>l});var n=s(58101);const t={},r=n.createContext(t);function i(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);