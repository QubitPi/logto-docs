"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3273],{14775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"developers/custom-token-claims/README","title":"\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e (Claims)","description":"\u4ecb\u7ecd \\\\","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/custom-token-claims/README.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/","permalink":"/zh-CN/developers/custom-token-claims/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/custom-token-claims/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"\u5f00\u53d1\u8005","permalink":"/zh-CN/developers/"},"next":{"title":"\u5e38\u89c1\u7528\u4f8b","permalink":"/zh-CN/developers/custom-token-claims/common-use-cases"}}');var s=n(25105),i=n(79621);const r={sidebar_position:2},c="\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e (Claims)",d={},a=[{value:"\u4ecb\u7ecd",id:"introduction",level:2},{value:"\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e\u5982\u4f55\u5de5\u4f5c\uff1f",id:"how-do-custom-token-claims-work",level:2},{value:"\u76f8\u5173\u8d44\u6e90",id:"related-resources",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Url:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e-claims",children:"\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e (Claims)"})}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"\u4ecb\u7ecd"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://auth.wiki/access-token",children:"\u8bbf\u95ee\u4ee4\u724c (Access tokens)"})," \u5728\u8ba4\u8bc1 (Authentication) \u548c\u6388\u6743 (Authorization) \u8fc7\u7a0b\u4e2d\u8d77\u7740\u5173\u952e\u4f5c\u7528\uff0c\u643a\u5e26\u4e3b\u4f53\u7684\u8eab\u4efd\u4fe1\u606f\u548c\u6743\u9650\uff0c\u5e76\u5728 ",(0,s.jsx)(t.a,{href:"/concepts/core-service",children:"Logto \u670d\u52a1\u5668"}),"\uff08\u4f5c\u4e3a\u8ba4\u8bc1\u670d\u52a1\u5668\u6216\u8eab\u4efd\u63d0\u4f9b\u5546 (IdP)\uff09\u3001\u4f60\u7684 Web \u670d\u52a1\u670d\u52a1\u5668\uff08\u8d44\u6e90\u63d0\u4f9b\u5546\uff09\u548c\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09\u4e4b\u95f4\u4f20\u9012\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://auth.wiki/claim",children:"\u4ee4\u724c\u58f0\u660e (Token claims)"})," \u662f\u63d0\u4f9b\u6709\u5173\u5b9e\u4f53\u6216\u4ee4\u724c\u672c\u8eab\u4fe1\u606f\u7684\u952e\u503c\u5bf9\u3002\u58f0\u660e\u53ef\u80fd\u5305\u62ec\u7528\u6237\u4fe1\u606f\u3001\u4ee4\u724c\u8fc7\u671f\u65f6\u95f4\u3001\u6743\u9650\u548c\u4e0e\u8ba4\u8bc1 (Authentication) \u548c\u6388\u6743 (Authorization) \u8fc7\u7a0b\u76f8\u5173\u7684\u5176\u4ed6\u5143\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u5728 Logto \u4e2d\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u8bbf\u95ee\u4ee4\u724c\uff1a"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"JSON Web Token:"})," ",(0,s.jsx)(t.a,{href:"https://auth.wiki/jwt",children:"JSON Web Token (JWT)"})," \u662f\u4e00\u79cd\u6d41\u884c\u7684\u683c\u5f0f\uff0c\u5b83\u4ee5\u4e00\u79cd\u65e2\u5b89\u5168\u53c8\u53ef\u88ab\u5ba2\u6237\u7aef\u8bfb\u53d6\u7684\u65b9\u5f0f\u7f16\u7801\u58f0\u660e\u3002\u5e38\u89c1\u7684\u58f0\u660e\u5982 ",(0,s.jsx)(t.code,{children:"sub"}),"\u3001",(0,s.jsx)(t.code,{children:"iss"}),"\u3001",(0,s.jsx)(t.code,{children:"aud"})," \u7b49\u4e0e OAuth 2.0 \u534f\u8bae\u4e00\u81f4\uff08\u8be6\u89c1 ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4",children:"\u6b64\u94fe\u63a5"}),"\uff09\u3002JWT \u4ee4\u724c\u5141\u8bb8\u6d88\u8d39\u8005\u76f4\u63a5\u8bbf\u95ee\u58f0\u660e\u800c\u65e0\u9700\u989d\u5916\u7684\u9a8c\u8bc1\u6b65\u9aa4\u3002\u5728 Logto \u4e2d\uff0c\u5f53\u5ba2\u6237\u7aef\u521d\u59cb\u5316\u7279\u5b9a\u8d44\u6e90\u6216\u7ec4\u7ec7\u7684\u6388\u6743\u8bf7\u6c42\u65f6\uff0c\u8bbf\u95ee\u4ee4\u724c\u9ed8\u8ba4\u4ee5 JWT \u683c\u5f0f\u53d1\u5e03\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u4e0d\u900f\u660e\u4ee4\u724c (Opaque token):"})," ",(0,s.jsx)(t.a,{href:"http://localhost:3000/concepts/opaque-token",children:"\u4e0d\u900f\u660e\u4ee4\u724c (Opaque token)"})," \u4e0d\u662f\u81ea\u5305\u542b\u7684\uff0c\u603b\u662f\u9700\u8981\u901a\u8fc7 ",(0,s.jsx)(t.a,{href:"https://auth.wiki/token-introspection",children:"\u4ee4\u724c\u5185\u7701 (token introspection)"})," \u7aef\u70b9\u8fdb\u884c\u989d\u5916\u7684\u9a8c\u8bc1\u6b65\u9aa4\u3002\u5c3d\u7ba1\u5176\u683c\u5f0f\u4e0d\u900f\u660e\uff0c\u4e0d\u900f\u660e\u4ee4\u724c\u53ef\u4ee5\u5e2e\u52a9\u83b7\u53d6\u58f0\u660e\u5e76\u5728\u5404\u65b9\u4e4b\u95f4\u5b89\u5168\u4f20\u8f93\u3002\u4ee4\u724c\u58f0\u660e\u5b89\u5168\u5730\u5b58\u50a8\u5728 Logto \u670d\u52a1\u5668\u4e2d\uff0c\u5e76\u901a\u8fc7\u4ee4\u724c\u5185\u7701\u7aef\u70b9\u7531\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u3002\u5f53\u6388\u6743\u8bf7\u6c42\u4e2d\u4e0d\u5305\u542b\u7279\u5b9a\u8d44\u6e90\u6216\u7ec4\u7ec7\u65f6\uff0c\u8bbf\u95ee\u4ee4\u724c\u4ee5\u4e0d\u900f\u660e\u683c\u5f0f\u53d1\u5e03\u3002\u8fd9\u4e9b\u4ee4\u724c\u4e3b\u8981\u7528\u4e8e\u8bbf\u95ee OIDC ",(0,s.jsx)(t.code,{children:"userinfo"})," \u7aef\u70b9\u548c\u5176\u4ed6\u4e00\u822c\u7528\u9014\u3002"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u6807\u51c6\u58f0\u660e\u4e0d\u8db3\u4ee5\u6ee1\u8db3\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u7279\u5b9a\u9700\u6c42\uff0c\u65e0\u8bba\u4f60\u4f7f\u7528\u7684\u662f JWT \u8fd8\u662f\u4e0d\u900f\u660e\u4ee4\u724c\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cLogto \u63d0\u4f9b\u4e86\u5728\u8bbf\u95ee\u4ee4\u724c\u4e2d\u6dfb\u52a0\u81ea\u5b9a\u4e49\u58f0\u660e\u7684\u7075\u6d3b\u6027\u3002\u901a\u8fc7\u6b64\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5305\u542b\u4e1a\u52a1\u903b\u8f91\u7684\u9644\u52a0\u4fe1\u606f\uff0c\u6240\u6709\u4fe1\u606f\u90fd\u5728\u4ee4\u724c\u4e2d\u5b89\u5168\u4f20\u8f93\uff0c\u5e76\u5728\u4e0d\u900f\u660e\u4ee4\u724c\u7684\u60c5\u51b5\u4e0b\u901a\u8fc7\u5185\u7701\u68c0\u7d22\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"how-do-custom-token-claims-work",children:"\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e\u5982\u4f55\u5de5\u4f5c\uff1f"}),"\n",(0,s.jsxs)(t.p,{children:["Logto \u5141\u8bb8\u4f60\u901a\u8fc7\u56de\u8c03\u51fd\u6570 ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"})," \u5c06\u81ea\u5b9a\u4e49\u58f0\u660e\u63d2\u5165\u5230 ",(0,s.jsx)(t.code,{children:"\u8bbf\u95ee\u4ee4\u724c"})," \u4e2d\u3002\u4f60\u53ef\u4ee5\u63d0\u4f9b ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"})," \u51fd\u6570\u7684\u5b9e\u73b0\u6765\u8fd4\u56de\u4e00\u4e2a\u81ea\u5b9a\u4e49\u58f0\u660e\u7684\u5bf9\u8c61\u3002\u8fd4\u56de\u503c\u5c06\u4e0e\u539f\u59cb\u4ee4\u724c\u8d1f\u8f7d\u5408\u5e76\u5e76\u7b7e\u540d\u4ee5\u751f\u6210\u6700\u7ec8\u7684\u8bbf\u95ee\u4ee4\u724c\u3002"]}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n  participant U as \u7528\u6237\u6216\u7528\u6237\u4ee3\u7406\n  participant IdP as Logto\uff08\u8eab\u4efd\u63d0\u4f9b\u5546\uff09\n  participant SP as \u670d\u52a1\u63d0\u4f9b\u5546\n\n  autonumber\n  U ->> IdP: \u8ba4\u8bc1\u8bf7\u6c42\uff08\u5e26\u51ed\u8bc1\uff09\n  activate IdP\n  IdP--\x3e>IdP: \u9a8c\u8bc1\u51ed\u8bc1 &<br/>\u751f\u6210\u539f\u59cb\u8bbf\u95ee\u4ee4\u724c\u8d1f\u8f7d\n  rect var(--mermaid-rect-fill)\n  note over IdP: \u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e\n  IdP->>IdP: \u8fd0\u884c\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e\u811a\u672c (`getCustomJwtClaims`) &<br/>\u83b7\u53d6\u989d\u5916\u7684\u4ee4\u724c\u58f0\u660e\n  end\n  IdP--\x3e>IdP: \u5408\u5e76\u539f\u59cb\u8bbf\u95ee\u4ee4\u724c\u8d1f\u8f7d\u548c\u989d\u5916\u7684\u4ee4\u724c\u58f0\u660e\n  IdP--\x3e>IdP: \u7b7e\u540d & \u52a0\u5bc6\u8d1f\u8f7d\u4ee5\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c\n  deactivate IdP\n  IdP--\x3e>U: \u53d1\u5e03 JWT \u683c\u5f0f\u7684\u8bbf\u95ee\u4ee4\u724c\n  par \u901a\u8fc7 API \u83b7\u53d6\u670d\u52a1\n  U->>SP: \u670d\u52a1\u8bf7\u6c42\uff08\u5e26 JWT \u8bbf\u95ee\u4ee4\u724c\uff09\n  SP--\x3e>U: \u670d\u52a1\u54cd\u5e94\n  end"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Logto \u5185\u7f6e\u7684\u4ee4\u724c\u58f0\u660e\u4e0d\u80fd\u88ab\u8986\u76d6\u6216\u4fee\u6539\u3002\u81ea\u5b9a\u4e49\u58f0\u660e\u5c06\u4f5c\u4e3a\u9644\u52a0\u58f0\u660e\u6dfb\u52a0\u5230\u4ee4\u724c\u4e2d\u3002\u5982\u679c\u4efb\u4f55\u81ea\u5b9a\u4e49\u58f0\u660e\u4e0e\u5185\u7f6e\u58f0\u660e\u51b2\u7a81\uff0c\u8fd9\u4e9b\u81ea\u5b9a\u4e49\u58f0\u660e\u5c06\u88ab\u5ffd\u7565\u3002"})}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"\u76f8\u5173\u8d44\u6e90"}),"\n",(0,s.jsx)(n,{href:"https://blog.logto.io/glance-on-custom-jwt-access-token-claims",children:(0,s.jsx)(t.p,{children:"\u4f7f\u7528 Logto \u4e3a JWT \u8bbf\u95ee\u4ee4\u724c\u6dfb\u52a0\u81ea\u5b9a\u4e49\u58f0\u660e\u4ee5\u589e\u5f3a\u4f60\u7684\u6388\u6743 (Authorization)"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},79621:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(58101);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);