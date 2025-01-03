"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[92163],{77442:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"introduction/set-up-logto-cloud","title":"\u8bbe\u7f6e Logto Cloud","description":"\u672c\u8282\u6db5\u76d6\u57fa\u672c\u8bbe\u7f6e\u6b65\u9aa4\u548c\u5173\u952e\u64cd\u4f5c\uff0c\u4ee5\u6709\u6548\u4ea4\u4ed8\u4f60\u7684\u4ea7\u54c1\u5e76\u7ba1\u7406\u4f60\u7684\u5f00\u53d1\u5de5\u4f5c\u6d41\u7a0b\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/set-up-logto-cloud.mdx","sourceDirName":"introduction","slug":"/introduction/set-up-logto-cloud","permalink":"/zh-CN/introduction/set-up-logto-cloud","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction/set-up-logto-cloud.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"\u672c\u8282\u6db5\u76d6\u57fa\u672c\u8bbe\u7f6e\u6b65\u9aa4\u548c\u5173\u952e\u64cd\u4f5c\uff0c\u4ee5\u6709\u6548\u4ea4\u4ed8\u4f60\u7684\u4ea7\u54c1\u5e76\u7ba1\u7406\u4f60\u7684\u5f00\u53d1\u5de5\u4f5c\u6d41\u7a0b\u3002","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Logto \u4ecb\u7ecd","permalink":"/zh-CN/introduction/"},"next":{"title":"\u8bbe\u7f6e Logto OSS","permalink":"/zh-CN/introduction/set-up-logto-oss"}}');var i=o(25105),r=o(79621);const s={description:"\u672c\u8282\u6db5\u76d6\u57fa\u672c\u8bbe\u7f6e\u6b65\u9aa4\u548c\u5173\u952e\u64cd\u4f5c\uff0c\u4ee5\u6709\u6548\u4ea4\u4ed8\u4f60\u7684\u4ea7\u54c1\u5e76\u7ba1\u7406\u4f60\u7684\u5f00\u53d1\u5de5\u4f5c\u6d41\u7a0b\u3002",sidebar_position:1},d="\u8bbe\u7f6e Logto Cloud",c={},l=[{value:"\u521b\u5efa Logto \u79df\u6237",id:"create-logto-tenant",level:2},{value:"\u9080\u8bf7\u534f\u4f5c\u8005",id:"invite-collaborators",level:2},{value:"\u8f6c\u79fb\u5230\u751f\u4ea7\u79df\u6237",id:"move-to-production-tenant",level:2},{value:"\u4ece\u73b0\u6709\u7cfb\u7edf\u8fc1\u79fb",id:"migrate-from-the-existing-system",level:2}];function a(t){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,r.R)(),...t.components},{CloudLink:o}=e;return o||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u8bbe\u7f6e-logto-cloud",children:"\u8bbe\u7f6e Logto Cloud"})}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u8282\u6db5\u76d6\u57fa\u672c\u8bbe\u7f6e\u6b65\u9aa4\u548c\u5173\u952e\u64cd\u4f5c\uff0c\u4ee5\u6709\u6548\u4ea4\u4ed8\u4f60\u7684\u4ea7\u54c1\u5e76\u7ba1\u7406\u4f60\u7684\u5f00\u53d1\u5de5\u4f5c\u6d41\u7a0b\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"create-logto-tenant",children:"\u521b\u5efa Logto \u79df\u6237"}),"\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\uff0c\u6ce8\u518c\u4e00\u4e2a\u4e1a\u52a1\u5e76\u521b\u5efa\u4e00\u4e2a Logto \u79df\u6237\u3002Logto Cloud \u7684\u79df\u6237\u662f\u4e00\u4e2a\u9694\u79bb\u7684\u73af\u5883\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u7ba1\u7406\u7528\u6237\u8eab\u4efd\u3001\u5e94\u7528\u7a0b\u5e8f\u548c\u6240\u6709\u5176\u4ed6 Logto \u8d44\u6e90\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f60\u7684\u7b2c\u4e00\u4e2a\u79df\u6237\u5c06\u81ea\u52a8\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(e.a,{href:"/logto-cloud/tenant-settings#development",children:(0,i.jsx)(e.strong,{children:"\u5f00\u53d1"})})," \u73af\u5883\u3002\u8fd9\u975e\u5e38\u9002\u5408\u6d4b\u8bd5\u548c\u5f00\u53d1\u76ee\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5\u514d\u8d39\u4f7f\u7528\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u67e5\u770b\u79df\u6237\u8bbe\u7f6e\u5e76",(0,i.jsx)(e.a,{href:"/logto-cloud",children:"\u4e86\u89e3\u66f4\u591a"}),"\u5173\u4e8e Logto \u4e91\u670d\u52a1\u7684\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"invite-collaborators",children:"\u9080\u8bf7\u534f\u4f5c\u8005"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u5165\u804c\u671f\u95f4\uff0c\u4f60\u6709\u673a\u4f1a\u9080\u8bf7\u534f\u4f5c\u8005\u4e00\u8d77\u8fdb\u884c\u5f00\u53d1\u5de5\u4f5c\u3002\u5982\u679c\u4f60\u60f3\u505a\u66f4\u591a\u6216\u7a0d\u540e\u8fdb\u884c\uff0c\u8bf7\u524d\u5f80 ",(0,i.jsx)(o,{to:"/tenant-settings/members",children:"\u79df\u6237\u8bbe\u7f6e > \u6210\u5458"}),"\u3002\u4f60\u5c06\u770b\u5230\u5f53\u524d\u7684\u6210\u5458\uff0c\u5e76\u53ef\u4ee5\u9080\u8bf7\u66f4\u591a\u6210\u5458\u3002\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u5e76\u5206\u914d\u89d2\u8272\uff08\u4f60\u53ef\u4ee5\u6279\u91cf\u8fdb\u884c\uff09\uff0c\u7136\u540e\u53d1\u9001\u9080\u8bf7\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"move-to-production-tenant",children:"\u8f6c\u79fb\u5230\u751f\u4ea7\u79df\u6237"}),"\n",(0,i.jsx)(e.p,{children:"\u4f60\u53ef\u80fd\u9700\u8981\u82b1\u4e00\u4e9b\u65f6\u95f4\u5f00\u53d1\u548c\u6d4b\u8bd5 Logto \u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u4ee5\u5b8c\u6210\u6982\u5ff5\u9a8c\u8bc1\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u4f60\u7684\u9879\u76ee\u5b8c\u6210\u6d4b\u8bd5\u5e76\u51c6\u5907\u8fdb\u5165\u4e0b\u4e00\u4e2a\u9636\u6bb5\u540e\uff0c\u8bb0\u5f97\u521b\u5efa\u4e00\u4e2a\u65b0\u7684",(0,i.jsx)(e.a,{href:"/logto-cloud/tenant-settings#production",children:"\u751f\u4ea7\u7c7b\u578b\u79df\u6237"}),"\uff08\u9700\u8981\u4e00\u4e2a",(0,i.jsx)(e.a,{href:"https://logto.io/pricing",children:"\u514d\u8d39\u6216\u4e13\u4e1a\u79df\u6237"}),"\uff09\u3002\u56e0\u4e3a\u5f00\u53d1\u79df\u6237\u7531\u4e8e\u5176",(0,i.jsx)(e.a,{href:"/logto-cloud/tenant-settings#development",children:"\u9650\u5236\u548c\u7ea6\u675f"}),"\u4e0d\u9002\u5408\u7528\u4e8e\u751f\u4ea7\u3002"]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["\u786e\u4fdd\u5728\u521b\u5efa\u751f\u4ea7\u79df\u6237\u65f6\u7acb\u5373\u8f93\u5165",(0,i.jsx)(e.a,{href:"/logto-cloud/custom-domain",children:"\u81ea\u5b9a\u4e49\u57df"}),"\uff0c\u56e0\u4e3a\u8fd9\u5c06\u5f71\u54cd\u4f60\u7684\u4e0b\u4e00\u6b65\u914d\u7f6e\u3002"]})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u79cd\u8bbe\u7f6e\u5141\u8bb8\u4f60\u7684\u9879\u76ee\u540c\u65f6\u62e5\u6709\u5f00\u53d1\u6d4b\u8bd5\u548c\u751f\u4ea7\u73af\u5883\uff0c\u5e2e\u52a9\u4f60\u987a\u5229\u7ba1\u7406\u5f00\u53d1\u5de5\u4f5c\u6d41\u7a0b\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"migrate-from-the-existing-system",children:"\u4ece\u73b0\u6709\u7cfb\u7edf\u8fc1\u79fb"}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u5904\u7406\u4e00\u4e2a\u73b0\u6709\u9879\u76ee\u5e76\u9700\u8981\u5207\u6362\u8ba4\u8bc1 (Authentication) \u63d0\u4f9b\u5546\uff0cLogto \u652f\u6301\u4ece\u5176\u4ed6\u5e73\u53f0\u8fdb\u884c\u7528\u6237\u8fc1\u79fb\u3002\u4f60\u53ef\u4ee5\u8fc1\u79fb",(0,i.jsx)(e.a,{href:"/user-management/user-data#basic-data",children:"\u57fa\u672c\u6570\u636e"}),"\u3001",(0,i.jsx)(e.a,{href:"/user-management/user-data#custom-data",children:"\u81ea\u5b9a\u4e49\u6570\u636e"}),"\u3001",(0,i.jsx)(e.a,{href:"/user-management/user-data#social-identities",children:"\u793e\u4ea4\u8eab\u4efd"}),"\u548c\u5bc6\u7801\u54c8\u5e0c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.jsx)(e.a,{href:"/zh-CN/user-management/user-migration",children:"\u8fc1\u79fb\u5230 Logto"}),"\u6307\u5357\u3002"]})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(a,{...t})}):a(t)}},79621:(t,e,o)=>{o.d(e,{R:()=>s,x:()=>d});var n=o(58101);const i={},r=n.createContext(i);function s(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);