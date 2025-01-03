"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[53473],{33867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"end-user-flows/authentication-parameters/README","title":"\u8ba4\u8bc1 (Authentication) \u53c2\u6570","description":"\u5728\u6807\u51c6\u7684 OIDC \u767b\u5f55\u6d41\u7a0b\u4e2d\uff0c\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u53d1\u8d77\u4e00\u4e2a\u8ba4\u8bc1\u8bf7\u6c42\uff0c\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230 Logto \u6258\u7ba1\u7684\u901a\u7528\u767b\u5f55\u4f53\u9a8c\u7f51\u9875\u3002\u6839\u636e\u4f60\u7684\u767b\u5f55\u4f53\u9a8c\u8bbe\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u6807\u8bc6\u7b26\u3001\u9a8c\u8bc1\u65b9\u6cd5\u4ee5\u53ca\u7b2c\u4e09\u65b9\u793e\u4ea4\u6216\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668\u8fdb\u884c\u767b\u5f55\u6216\u6ce8\u518c\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/README.mdx","sourceDirName":"end-user-flows/authentication-parameters","slug":"/end-user-flows/authentication-parameters/","permalink":"/zh-CN/end-user-flows/authentication-parameters/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/README.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u5907\u4efd\u4ee3\u7801","permalink":"/zh-CN/end-user-flows/mfa/backup-codes"},"next":{"title":"\u9996\u5c4f\u53c2\u6570","permalink":"/zh-CN/end-user-flows/authentication-parameters/first-screen"}}');var s=n(25105),o=n(79621);const i={sidebar_position:4},c="\u8ba4\u8bc1 (Authentication) \u53c2\u6570",a={},l=[{value:"\u76f8\u5173\u8d44\u6e90",id:"related-resources",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Url:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u8ba4\u8bc1-authentication-\u53c2\u6570",children:"\u8ba4\u8bc1 (Authentication) \u53c2\u6570"})}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u6807\u51c6\u7684 OIDC \u767b\u5f55\u6d41\u7a0b\u4e2d\uff0c\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u53d1\u8d77\u4e00\u4e2a\u8ba4\u8bc1\u8bf7\u6c42\uff0c\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230 Logto \u6258\u7ba1\u7684\u901a\u7528\u767b\u5f55\u4f53\u9a8c\u7f51\u9875\u3002\u6839\u636e\u4f60\u7684\u767b\u5f55\u4f53\u9a8c\u8bbe\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5404\u79cd\u6807\u8bc6\u7b26\u3001\u9a8c\u8bc1\u65b9\u6cd5\u4ee5\u53ca\u7b2c\u4e09\u65b9\u793e\u4ea4\u6216\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668\u8fdb\u884c\u767b\u5f55\u6216\u6ce8\u518c\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u9664\u4e86\u6807\u51c6\u7684 ",(0,s.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC \u8ba4\u8bc1 (Authentication) \u53c2\u6570"}),"\u4e4b\u5916\uff0c\u6211\u4eec\u7684\u4ea7\u54c1\u5f15\u5165\u4e86\u51e0\u4e2a\u81ea\u5b9a\u4e49\u8ba4\u8bc1 (Authentication) \u53c2\u6570\uff0c\u5141\u8bb8\u4f60\u4e3a\u7ec8\u7aef\u7528\u6237\u5b9a\u5236\u6240\u9700\u7684\u767b\u5f55\u4f53\u9a8c\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u5728\u4f60\u5e0c\u671b\u4e3a\u4e0d\u540c\u7528\u6237\u7fa4\u4f53\u5f3a\u5236\u6267\u884c\u7279\u5b9a\u767b\u5f55\u6d41\u7a0b\u65f6\u7279\u522b\u6709\u7528\u3002\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u65b0\u7528\u6237\u76f4\u63a5\u6ce8\u518c"}),"\uff1a\u5bf9\u4e8e\u4e00\u4e2a\u6709\u9488\u5bf9\u6027\u7684\u6ce8\u518c\u6d3b\u52a8\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u65b0\u7528\u6237\u76f4\u63a5\u5f15\u5bfc\u5230\u6ce8\u518c\u9875\u9762\uff0c\u7ed5\u8fc7\u9ed8\u8ba4\u7684\u767b\u5f55\u8868\u5355\uff0c\u4ee5\u786e\u4fdd\u65e0\u7f1d\u7684\u5165\u804c\u4f53\u9a8c\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u4ece\u8ba2\u9605\u94fe\u63a5\u9884\u586b\u7535\u5b50\u90ae\u4ef6\u6ce8\u518c"}),"\uff1a\u5982\u679c\u4f60\u901a\u8fc7\u81ea\u6258\u7ba1\u7684\u8ba2\u9605\u8868\u5355\u6536\u96c6\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u8fd9\u4e9b\u53c2\u6570\u5141\u8bb8\u4f60\u5c06\u65b0\u8ba2\u9605\u8005\u91cd\u5b9a\u5411\u5230\u6ce8\u518c\u9875\u9762\uff0c\u5e76\u9884\u586b\u7535\u5b50\u90ae\u4ef6\u5b57\u6bb5\uff0c\u4f7f\u4ed6\u4eec\u80fd\u591f\u8f7b\u677e\u5b8c\u6210\u6ce8\u518c\u8fc7\u7a0b\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u76f4\u63a5\u5bc6\u7801\u91cd\u7f6e\u94fe\u63a5"}),"\uff1a\u5bf9\u4e8e\u9700\u8981\u8bbe\u7f6e\u65b0\u5bc6\u7801\u7684\u65b0\u7528\u6237\uff0c\u53d1\u9001\u7ed9\u4ed6\u4eec\u4e00\u4e2a\u76f4\u63a5\u94fe\u63a5\uff0c\u5e76\u5c06\u4ed6\u4eec\u91cd\u5b9a\u5411\u5230\u5bc6\u7801\u91cd\u7f6e\u9875\u9762\uff0c\u5e76\u9884\u586b\u7535\u5b50\u90ae\u4ef6\u5b57\u6bb5\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u5373\u65f6\u793e\u4ea4\u767b\u5f55"}),"\uff1a\u5982\u679c\u4f60\u5728\u7f51\u7ad9\u4e0a\u76f4\u63a5\u63d0\u4f9b\u793e\u4ea4\u5a92\u4f53\u767b\u5f55\u6309\u94ae\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u53c2\u6570\u8df3\u8fc7\u9ed8\u8ba4\u7684\u767b\u5f55\u8868\u5355\uff0c\u8ba9\u7528\u6237\u76f4\u63a5\u901a\u8fc7\u4ed6\u4eec\u9009\u62e9\u7684\u793e\u4ea4\u63d0\u4f9b\u5546\u8fdb\u884c\u8ba4\u8bc1\u3002"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"\u4f01\u4e1a\u5ba2\u6237\u76f4\u63a5 SSO \u767b\u5f55"}),"\uff1a\u5bf9\u4e8e\u670d\u52a1\u591a\u4e2a\u4f01\u4e1a\u5ba2\u6237\u7684\u4ea7\u54c1\uff0c\u8fd9\u4e9b\u53c2\u6570\u5141\u8bb8\u4f60\u663e\u793a\u4e00\u4e2a\u4e13\u7528\u7684 SSO \u6309\u94ae\uff0c\u901a\u8fc7\u7279\u5b9a\u7684 SSO \u63d0\u4f9b\u5546\u767b\u5f55\u7528\u6237\uff0c\u8df3\u8fc7\u901a\u7528\u767b\u5f55\u8868\u5355\uff0c\u4e3a\u6bcf\u4e2a\u7ec4\u7ec7\u63d0\u4f9b\u65e0\u7f1d\u4f53\u9a8c\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u7ee7\u7eed\u9605\u8bfb\u4ee5\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u8ba4\u8bc1 (Authentication) \u53c2\u6570\u7684\u4fe1\u606f\uff0c\u4ee5\u4fbf\u4e3a\u4f60\u7684\u7528\u6237\u5b9a\u5236 ",(0,s.jsx)(t.a,{href:"/end-user-flows/authentication-parameters/first-screen",children:"\u7b2c\u4e00\u4e2a\u5c4f\u5e55"})," \u6216\u542f\u7528 ",(0,s.jsx)(t.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in",children:"\u76f4\u63a5\u767b\u5f55"})," \u4f53\u9a8c\u3002"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"\u76f8\u5173\u8d44\u6e90"}),"\n",(0,s.jsx)(n,{href:"https://blog.logto.io/embed-login-or-registration-forms-securely-on-your-site",children:(0,s.jsx)(t.p,{children:"\u5b89\u5168\u5730\u5728\u4f60\u7684\u7f51\u7ad9\u4e0a\u5d4c\u5165\u767b\u5f55\u6216\u6ce8\u518c\u8868\u5355"})}),"\n",(0,s.jsx)(n,{href:"https://blog.logto.io/authentication-parameters",children:"\u63d0\u5347\u5ba2\u6237\u5165\u804c\u4f53\u9a8c\u7684\u5c0f\u6280\u5de7"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},79621:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(58101);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);