"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39297],{57283:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"end-user-flows/sign-up-and-sign-in/social-sign-in","title":"\u793e\u4ea4\u767b\u5f55","description":"\u793e\u4ea4\u767b\u5f55\u662f\u4e00\u79cd\u5e7f\u6cdb\u4f7f\u7528\u7684\u8ba4\u8bc1 (Authentication) \u65b9\u6cd5\uff0c\u5141\u8bb8\u7528\u6237\u4f7f\u7528\u4ed6\u4eec\u73b0\u6709\u7684\u793e\u4ea4\u5a92\u4f53\u8d26\u6237\uff08\u5982 Google\u3001Facebook\u3001Twitter \u548c LinkedIn\uff09\u8fdb\u884c\u767b\u5f55\u548c\u6ce8\u518c\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/social-sign-in.mdx","sourceDirName":"end-user-flows/sign-up-and-sign-in","slug":"/end-user-flows/sign-up-and-sign-in/social-sign-in","permalink":"/zh-CN/end-user-flows/sign-up-and-sign-in/social-sign-in","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/social-sign-in.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u90ae\u7bb1 / \u624b\u673a\u53f7 / \u7528\u6237\u540d\u767b\u5f55","permalink":"/zh-CN/end-user-flows/sign-up-and-sign-in/sign-in"},"next":{"title":"\u91cd\u7f6e\u5bc6\u7801","permalink":"/zh-CN/end-user-flows/sign-up-and-sign-in/reset-password"}}');var o=i(25105),t=i(79621);const r={sidebar_position:3},l="\u793e\u4ea4\u767b\u5f55",c={},a=[{value:"\u5b9e\u73b0\u793e\u4ea4\u767b\u5f55",id:"implement-social-sign-in",level:2},{value:"\u793e\u4ea4\u767b\u5f55\u7684\u7528\u6237\u4f53\u9a8c",id:"user-experience-of-social-sign-in",level:2},{value:"Google One-tap",id:"google-one-tap",level:3},{value:"\u8d26\u6237\u5173\u8054",id:"account-linking",level:2},{value:"\u6536\u96c6\u989d\u5916\u7684\u7528\u6237\u8d44\u6599\u6570\u636e",id:"collect-additional-user-profile-data",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"faqs",level:2},{value:"\u5982\u4f55\u5728\u6211\u7684\u7f51\u7ad9\u4e0a\u6dfb\u52a0\u793e\u4ea4\u767b\u5f55\u6309\u94ae\u5e76\u76f4\u63a5\u4f7f\u7528\u793e\u4ea4\u767b\u5f55\uff1f",id:"how-to-add-social-login-buttons-and-directly-sign-in-with-social-on-my-website",level:3},{value:"\u4e3a\u4ec0\u4e48\u5728\u4f7f\u7528\u793e\u4ea4\u6ce8\u518c\u540e\u6211\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u6ca1\u6709\u586b\u5145\uff1f",id:"why-my-emails-or-phone-numbers-are-not-populated-after-signing-up-with-social",level:3},{value:"\u76f8\u5173\u8d44\u6e90",id:"related-resources",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components},{CloudLink:s,Details:r,Url:l}=e;return s||x("CloudLink",!0),r||x("Details",!0),l||x("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u793e\u4ea4\u767b\u5f55",children:"\u793e\u4ea4\u767b\u5f55"})}),"\n",(0,o.jsx)(e.p,{children:"\u793e\u4ea4\u767b\u5f55\u662f\u4e00\u79cd\u5e7f\u6cdb\u4f7f\u7528\u7684\u8ba4\u8bc1 (Authentication) \u65b9\u6cd5\uff0c\u5141\u8bb8\u7528\u6237\u4f7f\u7528\u4ed6\u4eec\u73b0\u6709\u7684\u793e\u4ea4\u5a92\u4f53\u8d26\u6237\uff08\u5982 Google\u3001Facebook\u3001Twitter \u548c LinkedIn\uff09\u8fdb\u884c\u767b\u5f55\u548c\u6ce8\u518c\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u793e\u4ea4\u767b\u5f55\u7684\u597d\u5904\uff1a"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u7b80\u5316\u7684\u6ce8\u518c\u6d41\u7a0b"}),"\uff1a\u793e\u4ea4\u767b\u5f55\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u5355\u51fb\u5373\u53ef\u6ce8\u518c\u6216\u767b\u5f55\uff0c\u65e0\u9700\u521b\u5efa\u65b0\u8d26\u6237\u6216\u8bb0\u4f4f\u53e6\u4e00\u4e2a\u5bc6\u7801\u3002\u8fd9\u51cf\u5c11\u4e86\u6469\u64e6\u5e76\u63d0\u9ad8\u4e86\u7528\u6237\u53c2\u4e0e\u5ea6\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u589e\u52a0\u7684\u4fe1\u4efb\u548c\u5b89\u5168\u6027"}),"\uff1a\u901a\u8fc7\u5229\u7528\u50cf Google \u6216 Facebook \u8fd9\u6837\u5df2\u5efa\u7acb\u7684\u3001\u503c\u5f97\u4fe1\u8d56\u7684\u5e73\u53f0\uff0c\u7528\u6237\u5bf9\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u66f4\u6709\u4fe1\u5fc3\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u7528\u6237\u6570\u636e\u4e30\u5bcc"}),"\uff1a\u793e\u4ea4\u767b\u5f55\u4f7f\u4f60\u80fd\u591f\u4ece\u793e\u4ea4\u5e73\u53f0\u6536\u96c6\u989d\u5916\u7684\u4e2a\u4eba\u8d44\u6599\u4fe1\u606f\uff0c\u5982\u59d3\u540d\u3001\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3001\u4e2a\u4eba\u8d44\u6599\u56fe\u7247\u7b49\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"implement-social-sign-in",children:"\u5b9e\u73b0\u793e\u4ea4\u767b\u5f55"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u914d\u7f6e\u4f60\u7684\u793e\u4ea4\u8fde\u63a5\u5668"}),"\uff1a",(0,o.jsx)("br",{}),"\n\u5bfc\u822a\u5230 ",(0,o.jsx)(s,{to:"/connectors/social",children:"\u63a7\u5236\u53f0 > \u8fde\u63a5\u5668 > \u793e\u4ea4\u8fde\u63a5\u5668"}),"\u3002\u70b9\u51fb\u201c\u6dfb\u52a0\u793e\u4ea4\u8fde\u63a5\u5668\u201d\u6309\u94ae\uff0c\u627e\u5230\u4f60\u60f3\u8981\u6dfb\u52a0\u7684\u793e\u4ea4\u8fde\u63a5\u5668\uff08\u4f8b\u5982 Google \u6216 Github\uff09\u3002\u6709\u5173\u6dfb\u52a0 ",(0,o.jsx)(e.a,{href:"/connectors/social-connectors/",children:"\u793e\u4ea4\u8fde\u63a5\u5668"})," \u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u6211\u4eec\u7684\u6587\u6863\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u6dfb\u52a0\u793e\u4ea4\u767b\u5f55\u6309\u94ae"}),"\uff1a",(0,o.jsx)("br",{}),"\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u65b0\u6dfb\u52a0\u7684\u793e\u4ea4\u8fde\u63a5\u5668\u4e0d\u4f1a\u5728\u7ec8\u7aef\u7528\u6237\u767b\u5f55\u9875\u9762\u4e0a\u663e\u793a\u3002\u8981\u5728\u767b\u5f55\u9875\u9762\u4e0a\u6dfb\u52a0\u793e\u4ea4\u767b\u5f55\u6309\u94ae\uff0c\u4f60\u9700\u8981\u5728\u767b\u5f55\u4f53\u9a8c\u8bbe\u7f6e\u4e2d\u542f\u7528\u793e\u4ea4\u8fde\u63a5\u5668\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u5bfc\u822a\u5230 ",(0,o.jsx)(s,{to:"/sign-in-experience/sign-up-and-sign-in",children:"\u63a7\u5236\u53f0 > \u767b\u5f55\u4f53\u9a8c > \u6ce8\u518c\u548c\u767b\u5f55"}),"\u3002\u70b9\u51fb\u201c\u6dfb\u52a0\u793e\u4ea4\u8fde\u63a5\u5668\u201d\u6309\u94ae\uff0c\u5728\u4f60\u7684\u6ce8\u518c\u548c\u767b\u5f55\u9875\u9762\u4e0a\u96c6\u6210\u793e\u4ea4\u767b\u5f55\u6309\u94ae\u3002\u4f7f\u7528\u62d6\u653e\u529f\u80fd\u5728 UI \u4e0a\u6392\u5217\u5b83\u4eec\u7684\u987a\u5e8f\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u8bbe\u7f6e\u8d26\u6237\u5173\u8054\u9009\u9879"}),"\uff1a",(0,o.jsx)("br",{}),"\n\u5bf9\u4e8e\u4f7f\u7528 ",(0,o.jsx)(e.a,{href:"/user-management/user-data#social-identities",children:"\u793e\u4ea4\u8eab\u4efd"})," \u6ce8\u518c\u7684\u65b0\u7528\u6237\uff0cLogto \u5141\u8bb8\u5c06\u4ed6\u4eec\u7684\u793e\u4ea4\u8d26\u6237\u94fe\u63a5\u5230 Logto \u7cfb\u7edf\u4e2d\u7684\u73b0\u6709\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u8d26\u6237\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u793e\u4ea4\u6ce8\u518c\u8fc7\u7a0b\u4e2d\u4f1a\u5411\u7528\u6237\u663e\u793a\u76f8\u5173\u7684 ",(0,o.jsx)(e.a,{href:"#account-linking",children:"\u8d26\u6237\u5173\u8054"})," \u9875\u9762\uff0c\u5141\u8bb8\u4ed6\u4eec\u5c06\u793e\u4ea4\u8d26\u6237\u94fe\u63a5\u5230\u73b0\u6709\u8d26\u6237\u6216\u521b\u5efa\u65b0\u8d26\u6237\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u4e3a\u7b80\u5316\u6b64\u8fc7\u7a0b\uff0c\u4f60\u53ef\u4ee5\u5728\u767b\u5f55\u4f53\u9a8c\u8bbe\u7f6e\u4e2d\u542f\u7528 ",(0,o.jsx)(e.strong,{children:"\u81ea\u52a8\u8d26\u6237\u5173\u8054"})," \u9009\u9879\u3002\u5982\u679c\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u5339\u914d\uff0c\u8fd9\u5c06\u81ea\u52a8\u5c06\u793e\u4ea4\u8d26\u6237\u94fe\u63a5\u5230\u73b0\u6709\u8d26\u6237\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u4fdd\u5b58\u66f4\u6539"}),"\uff1a",(0,o.jsx)("br",{}),"\n\u4ed4\u7ec6\u68c0\u67e5\u4f60\u7684\u66f4\u6539\u5e76\u4fdd\u5b58\u4ee5\u5e94\u7528\u914d\u7f6e\u3002"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"user-experience-of-social-sign-in",children:"\u793e\u4ea4\u767b\u5f55\u7684\u7528\u6237\u4f53\u9a8c"}),"\n",(0,o.jsx)(e.p,{children:"\u901a\u8fc7\u793e\u4ea4\u767b\u5f55\uff0cLogto \u4e2d\u7684\u6ce8\u518c\u548c\u767b\u5f55\u8fc7\u7a0b\u4e3a\u7528\u6237\u7b80\u5316\u3002"}),"\n",(0,o.jsx)(e.mermaid,{value:"sequenceDiagram\n    actor user as \u7528\u6237\n    participant app as \u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\n    participant experience as \u767b\u5f55\u9875\u9762\n    participant logto as Logto \u6838\u5fc3\u670d\u52a1\n    participant social as \u793e\u4ea4\u8eab\u4efd\u63d0\u4f9b\u5546\n\n    user->>app: \u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\n    app->>experience: \u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\u9762\n    user->>experience: \u70b9\u51fb\u793e\u4ea4\u767b\u5f55\u6309\u94ae\n    experience->>Logto: \u8bf7\u6c42\u4f7f\u7528\u793e\u4ea4\u8fde\u63a5\u5668\u767b\u5f55\n    Logto--\x3e>experience: \u8fd4\u56de\u793e\u4ea4\u63d0\u4f9b\u5546\u7684\u8ba4\u8bc1 (Authentication) URL\n    experience->>social: \u91cd\u5b9a\u5411\u5230\u793e\u4ea4\u63d0\u4f9b\u5546\u7684\u8ba4\u8bc1 (Authentication) \u9875\u9762\n    user->>social: \u8f93\u5165\u793e\u4ea4\u51ed\u636e\n    social--\x3e>experience: \u8ba4\u8bc1 (Authentication) \u7528\u6237\u5e76\u91cd\u5b9a\u5411\u56de Logto \u767b\u5f55\u9875\u9762\n    experience->>Logto: \u9a8c\u8bc1\u793e\u4ea4\u8ba4\u8bc1 (Authentication) \u6570\u636e\u548c\u7528\u6237\u8eab\u4efd\n    Logto->>app: \u8ba4\u8bc1 (Authentication) \u7528\u6237\u5e76\u91cd\u5b9a\u5411\u56de\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u4f7f\u7528\u793e\u4ea4\u767b\u5f55"}),"\uff1a\u7528\u6237\u70b9\u51fb\u663e\u793a\u5728\u767b\u5f55\u9875\u9762\u4e0a\u7684\u793e\u4ea4\u767b\u5f55\u6309\u94ae\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u91cd\u5b9a\u5411"}),"\uff1a\u7528\u6237\u88ab\u91cd\u5b9a\u5411\u5230\u793e\u4ea4\u8eab\u4efd\u63d0\u4f9b\u5546\u7684\u8ba4\u8bc1 (Authentication) \u9875\u9762\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u793e\u4ea4\u8ba4\u8bc1 (Authentication)"}),"\uff1a\u7528\u6237\u8f93\u5165\u4ed6\u4eec\u7684\u793e\u4ea4\u51ed\u636e\u5e76\u901a\u8fc7\u793e\u4ea4\u63d0\u4f9b\u5546\u8fdb\u884c\u8ba4\u8bc1 (Authentication)\u3002\u5982\u679c\u7528\u6237\u5df2\u7ecf\u767b\u5f55\u5230\u793e\u4ea4\u63d0\u4f9b\u5546\uff0c\u4ed6\u4eec\u53ef\u80fd\u4f1a\u81ea\u52a8\u8ba4\u8bc1 (Authentication)\u3002\u5982\u679c\u68c0\u6d4b\u5230\u591a\u4e2a\u767b\u5f55\u4f1a\u8bdd\uff0c\u7528\u6237\u53ef\u80fd\u4f1a\u88ab\u63d0\u793a\u9009\u62e9\u6b63\u786e\u7684\u8d26\u6237\uff08\u4f8b\u5982\uff0c\u591a\u4e2a Google \u8d26\u6237\uff09\u3002","\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Google \u7684\u201cprompt\u201d\u53c2\u6570\u53ef\u4ee5\u5728 Google \u8fde\u63a5\u5668\u4e2d\u8bbe\u7f6e\uff0c\u5141\u8bb8\u4f60\u81ea\u5b9a\u4e49 Google \u767b\u5f55\u7684\u8d26\u6237\u9009\u62e9\u548c\u7528\u6237\u6388\u6743\u9875\u9762\u4f53\u9a8c\u3002"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u8fd4\u56de Logto"}),"\uff1a\u8ba4\u8bc1 (Authentication) \u6210\u529f\u540e\uff0c\u793e\u4ea4\u63d0\u4f9b\u5546\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u56de Logto \u767b\u5f55\u9875\u9762\uff0c\u5e76\u9644\u5e26\u8ba4\u8bc1 (Authentication) \u6570\u636e\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u793e\u4ea4\u8eab\u4efd\u9a8c\u8bc1"}),"\uff1aLogto \u9a8c\u8bc1\u793e\u4ea4\u8ba4\u8bc1 (Authentication) \u6570\u636e\u548c\u7528\u6237\u8eab\u4efd\u3002\u5982\u679c\u6ca1\u6709\u4e0e\u793e\u4ea4\u8eab\u4efd\u5173\u8054\u7684\u7528\u6237\u8d26\u6237\u5b58\u5728\uff0c\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u8d26\u6237\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"\u7528\u6237\u8ba4\u8bc1 (Authentication)"}),"\uff1aLogto \u8ba4\u8bc1 (Authentication) \u7528\u6237\u5e76\u5c06\u5176\u91cd\u5b9a\u5411\u56de\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u4ee5\u5b8c\u6210\u8ba4\u8bc1 (Authentication) \u8fc7\u7a0b\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"google-one-tap",children:"Google One-tap"}),"\n",(0,o.jsxs)(e.p,{children:["Logto \u8fd8\u652f\u6301 Google \u8fde\u63a5\u5668\u7684 ",(0,o.jsx)(e.a,{href:"https://developers.google.com/identity/gsi/web/guides/features",children:"Google One-tap"})," \u767b\u5f55\u65b9\u6cd5\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u5355\u51fb\u5373\u53ef\u767b\u5f55\u3002\u6b64\u529f\u80fd\u8fdb\u4e00\u6b65\u7b80\u5316\u4e86\u767b\u5f55\u8fc7\u7a0b\uff0c\u65e0\u9700\u7528\u6237\u91cd\u5b9a\u5411\u5230 Google \u8ba4\u8bc1 (Authentication) \u9875\u9762\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u8981\u542f\u7528 Google One-tap \u767b\u5f55\uff0c\u8bf7\u6309\u7167 ",(0,o.jsx)(e.a,{href:"/integrations/google",children:"Google \u8fde\u63a5\u5668"})," \u8bbe\u7f6e\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002\u542f\u7528\u540e\uff0c\u5f53\u7528\u6237\u8fdb\u5165\u767b\u5f55\u9875\u9762\u65f6\uff0c\u5c06\u770b\u5230\u201c\u4f7f\u7528 Google \u767b\u5f55\u201d\u5f39\u51fa\u7a97\u53e3\u3002\u70b9\u51fb\u540e\uff0c\u4ed6\u4eec\u5c06\u81ea\u52a8\u4f7f\u7528\u5176 Google \u8d26\u6237\u8fdb\u884c\u8ba4\u8bc1 (Authentication) \u5e76\u91cd\u5b9a\u5411\u56de\u5e94\u7528\u7a0b\u5e8f\u3002"]}),"\n",(0,o.jsx)(e.mermaid,{value:"sequenceDiagram\nactor user as \u7528\u6237\n    participant app as \u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\n    participant experience as \u767b\u5f55\u9875\u9762\n    participant logto as Logto \u6838\u5fc3\u670d\u52a1\n\n    user->>app: \u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\n    app->>experience: \u91cd\u5b9a\u5411\u5230\u767b\u5f55\u9875\u9762\n    user->>experience: \u70b9\u51fb\u201c\u4f7f\u7528 Google \u767b\u5f55\u201d\u6309\u94ae\n    experience->>Logto: \u8bf7\u6c42\u4f7f\u7528 Google \u8ba4\u8bc1 (Authentication) \u767b\u5f55\n    Logto->>app: \u8ba4\u8bc1 (Authentication) \u7528\u6237\u5e76\u91cd\u5b9a\u5411\u56de\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"\u5728\u767b\u5f55\u4f53\u9a8c\u4e2d\u542f\u7528 Google One-tap",src:i(27081).A+"",width:"2868",height:"1346"})}),"\n",(0,o.jsx)(e.h2,{id:"account-linking",children:"\u8d26\u6237\u5173\u8054"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u4e0a\u6240\u8ff0\uff0cLogto \u5141\u8bb8\u7528\u6237\u5c06\u5176\u793e\u4ea4\u8d26\u6237\u94fe\u63a5\u5230 Logto \u7cfb\u7edf\u4e2d\u7684\u73b0\u6709\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u8d26\u6237\u3002\u6b64\u8fc7\u7a0b\u5bf9\u4e8e\u5728\u4e0d\u540c\u7684\u8ba4\u8bc1 (Authentication) \u65b9\u6cd5\u548c\u8eab\u4efd\u63d0\u4f9b\u5546\u4e4b\u95f4\u7ef4\u62a4\u7edf\u4e00\u7684\u7528\u6237\u8d26\u6237\u81f3\u5173\u91cd\u8981\u3002"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u65b0\u8d26\u6237\u521b\u5efa"}),"\uff1a\n\u5f53\u7528\u6237\u4f7f\u7528 Logto \u7cfb\u7edf\u4e2d\u4e0d\u5b58\u5728\u7684 ",(0,o.jsx)(e.a,{href:"/user-management/user-data#social-identities",children:"\u793e\u4ea4\u8eab\u4efd"})," \u767b\u5f55\uff0c\u5e76\u4e14\u63d0\u4f9b\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u4e0e\u4efb\u4f55\u73b0\u6709\u7528\u6237\u8d26\u6237\u4e0d\u5339\u914d\u65f6\uff0c\u5c06\u76f4\u63a5\u5728 Logto \u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u8d26\u6237\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u73b0\u6709\u8d26\u6237\u5173\u8054"}),"\uff1a\n\u5982\u679c\u793e\u4ea4\u8eab\u4efd\u63d0\u4f9b\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u5df2\u4e0e Logto \u4e2d\u7684\u73b0\u6709\u8d26\u6237\u5173\u8054\uff0c\u6211\u4eec\u63d0\u4f9b\u7075\u6d3b\u7684\u8d26\u6237\u5173\u8054\u8fc7\u7a0b\u3002"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u81ea\u52a8\u8d26\u6237\u5173\u8054"}),"\uff1a\u5982\u679c\u5728\u4f60\u7684 ",(0,o.jsx)(s,{to:"/sign-in-experience/sign-up-and-sign-in",children:"\u767b\u5f55\u4f53\u9a8c"})," \u8bbe\u7f6e\u4e2d\u542f\u7528\u4e86\u201c\u81ea\u52a8\u8d26\u6237\u5173\u8054\u201d\u9009\u9879\uff0cLogto \u5c06\u6839\u636e\u5339\u914d\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u81ea\u52a8\u5c06\u793e\u4ea4\u8d26\u6237\u94fe\u63a5\u5230\u73b0\u6709\u8d26\u6237\u3002\u7528\u6237\u4e0d\u4f1a\u88ab\u63d0\u793a\u94fe\u63a5\u8d26\u6237\uff0c\u5e76\u5c06\u7acb\u5373\u767b\u5f55\u5230\u5176\u73b0\u6709\u8d26\u6237\u3002\u793e\u4ea4\u8d26\u6237\u5c06\u88ab\u94fe\u63a5\uff0c\u5141\u8bb8\u7528\u6237\u5728\u672a\u6765\u4f7f\u7528\u4efb\u4e00\u65b9\u6cd5\u767b\u5f55\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"\u624b\u52a8\u8d26\u6237\u5173\u8054"}),"\uff1a\u5982\u679c\u201c\u81ea\u52a8\u8d26\u6237\u5173\u8054\u201d\u9009\u9879\u88ab\u7981\u7528\uff0c\u7528\u6237\u5c06\u5728\u767b\u5f55\u8fc7\u7a0b\u4e2d\u88ab\u63d0\u793a\u5c06\u5176\u793e\u4ea4\u8d26\u6237\u94fe\u63a5\u5230\u73b0\u6709\u8d26\u6237\u3002\u4ed6\u4eec\u53ef\u4ee5\u9009\u62e9\u94fe\u63a5\u8d26\u6237\u6216\u521b\u5efa\u65b0\u8d26\u6237\u3002"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"\u793e\u4ea4\u8d26\u6237\u5173\u8054",src:i(67231).A+"",width:"4574",height:"1560"})}),"\n",(0,o.jsx)(e.mermaid,{value:"flowchart TD\nA[\u4f7f\u7528\u793e\u4ea4\u8eab\u4efd\u8ba4\u8bc1 (Authentication)] --\x3e B{{\u793e\u4ea4\u8eab\u4efd\u5728 Logto \u4e2d\u5b58\u5728\u5417\uff1f}}\nB -- \u662f --\x3e C[\u4f7f\u7528\u73b0\u6709\u8d26\u6237\u767b\u5f55]\nB -- \u5426 --\x3e D{{\u7535\u5b50\u90ae\u4ef6/\u7535\u8bdd\u5339\u914d\u4efb\u4f55\u73b0\u6709\u8d26\u6237\u5417\uff1f}}\nD -- \u662f --\x3e E{{\u542f\u7528\u4e86\u81ea\u52a8\u8d26\u6237\u5173\u8054\u5417\uff1f}}\nE -- \u662f --\x3e G[\u5c06\u793e\u4ea4\u8eab\u4efd\u94fe\u63a5\u5230\u73b0\u6709\u8d26\u6237]\nG --\x3e C\nD -- \u5426 --\x3e H[\u521b\u5efa\u65b0\u8d26\u6237\u5e76\u767b\u5f55]\nE -- \u5426 --\x3e I{{\u94fe\u63a5\u793e\u4ea4\u8d26\u6237\u5417\uff1f}}\nI -- \u662f --\x3e G\nI -- \u5426 --\x3e H"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.admonition,{type:"note",children:[(0,o.jsx)(e.p,{children:"\u5982\u679c\u5728\u793e\u4ea4\u6ce8\u518c\u8fc7\u7a0b\u4e2d\u627e\u5230\u4e00\u4e2a\u76f8\u5173\u8d26\u6237\uff0c\u5176\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u4e0e\u73b0\u6709\u8d26\u6237\u5339\u914d\uff0c\u5e76\u4e14\u7528\u6237\u9009\u62e9\u4e0d\u94fe\u63a5\u8d26\u6237\uff0c\u5219\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u5c06\u4e0d\u4f1a\u540c\u6b65\u5230 Logto \u4e2d\u7684\u65b0\u8d26\u6237\u3002\u8fd9\u786e\u4fdd\u4e86\u7535\u5b50\u90ae\u4ef6\u548c\u7535\u8bdd\u53f7\u7801\u5728\u6240\u6709\u7528\u6237\u8d26\u6237\u4e2d\u4fdd\u6301\u552f\u4e00\u3002"}),(0,o.jsxs)(e.p,{children:["\u5982\u679c\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u662f\u5fc5\u9700\u7684\u6ce8\u518c\u6807\u8bc6\u7b26\uff0c\u7528\u6237\u5c06\u5728\u6ce8\u518c\u8fc7\u7a0b\u4e2d\u88ab\u63d0\u793a\u63d0\u4f9b\u53e6\u4e00\u4e2a\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.jsx)(e.a,{href:"#collect-additional-user-profile-data",children:"\u6536\u96c6\u989d\u5916\u7684\u7528\u6237\u8d44\u6599"}),"\u3002"]})]}),"\n",(0,o.jsx)(e.h2,{id:"collect-additional-user-profile-data",children:"\u6536\u96c6\u989d\u5916\u7684\u7528\u6237\u8d44\u6599\u6570\u636e"}),"\n",(0,o.jsxs)(e.p,{children:["\u5728\u793e\u4ea4\u6ce8\u518c\u8fc7\u7a0b\u4e2d\uff0c\u6839\u636e\u4f60\u914d\u7f6e\u7684\u5fc5\u9700\u6ce8\u518c\u6807\u8bc6\u7b26\uff08",(0,o.jsx)(e.strong,{children:"\u7535\u5b50\u90ae\u4ef6\u5730\u5740"}),"\u3001",(0,o.jsx)(e.strong,{children:"\u7535\u8bdd\u53f7\u7801"}),"\u548c",(0,o.jsx)(e.strong,{children:"\u7528\u6237\u540d"}),"\uff09\u8bbe\u7f6e\uff0c\u7528\u6237\u53ef\u80fd\u4f1a\u88ab\u63d0\u793a\u5728\u901a\u8fc7\u793e\u4ea4\u63d0\u4f9b\u5546\u8ba4\u8bc1 (Authentication) \u540e\u63d0\u4f9b\u989d\u5916\u7684\u9a8c\u8bc1\u4fe1\u606f\u4ee5\u5b8c\u6210\u6ce8\u518c\u6216\u767b\u5f55\u8fc7\u7a0b\u3002"]}),"\n",(0,o.jsxs)(e.p,{children:["\u4f8b\u5982\uff0c",(0,o.jsx)(e.strong,{children:"\u7535\u5b50\u90ae\u4ef6\u5730\u5740"}),"\u5df2\u88ab\u8bbe\u7f6e\u4e3a\u6ce8\u518c\u6807\u8bc6\u7b26\uff1a"]}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u4f7f\u7528\u63d0\u4f9b\u5df2\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7684\u793e\u4ea4\u8eab\u4efd\u6ce8\u518c"})}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u793e\u4ea4\u8eab\u4efd\u63d0\u4f9b\u4e86\u5df2\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u7528\u6237\u5c06\u81ea\u52a8\u4f7f\u7528\u793e\u4ea4\u8eab\u4efd\u6ce8\u518c\uff0c\u5e76\u4e14\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u5c06\u540c\u6b65\u5230\u7528\u6237\u8d44\u6599\u3002"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u4f7f\u7528\u672a\u63d0\u4f9b\u5df2\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7684\u793e\u4ea4\u8eab\u4efd\u6ce8\u518c"})}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u793e\u4ea4\u8eab\u4efd\u672a\u63d0\u4f9b\u5df2\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u7528\u6237\u5c06\u5728\u6ce8\u518c\u8fc7\u7a0b\u4e2d\u88ab\u63d0\u793a\u63d0\u4f9b\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002\u7528\u6237\u5fc5\u987b\u901a\u8fc7\u8f93\u5165\u53d1\u9001\u5230\u63d0\u4f9b\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7684\u9a8c\u8bc1\u7801\u6765\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002"}),"\n",(0,o.jsx)(e.mermaid,{value:"flowchart TD\n   A[\u4f7f\u7528\u793e\u4ea4\u8eab\u4efd\u8ba4\u8bc1 (Authentication)] --\x3e B{{\u9700\u8981\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4e14\u7f3a\u5931\u5417\uff1f}}\n   B -- \u662f --\x3e C[\u8f93\u5165\u7535\u5b50\u90ae\u4ef6\u5730\u5740]\n   C --\x3e D[\u8f93\u5165\u9a8c\u8bc1\u7801]\n   D --\x3e E[\u6ce8\u518c\u6210\u529f]\n   B -- \u5426 --\x3e E"}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"\u4f7f\u7528\u63d0\u4f9b\u5df2\u6ce8\u518c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7684\u793e\u4ea4\u8eab\u4efd\u6ce8\u518c"})}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c\u793e\u4ea4\u8eab\u4efd\u63d0\u4f9b\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u5df2\u5728 Logto \u7cfb\u7edf\u4e2d\u6ce8\u518c\uff0c\u7528\u6237\u5c06\u5728\u6ce8\u518c\u8fc7\u7a0b\u4e2d\u88ab\u63d0\u793a\u5c06\u793e\u4ea4\u8d26\u6237\u94fe\u63a5\u5230\u73b0\u6709\u8d26\u6237\u6216\u521b\u5efa\u65b0\u8d26\u6237\u3002\u5982\u679c\u7528\u6237\u9009\u62e9\u521b\u5efa\u65b0\u8d26\u6237\uff0c\u4ed6\u4eec\u5c06\u88ab\u63d0\u793a\u63d0\u4f9b\u65b0\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u5e76\u8fdb\u884c\u9a8c\u8bc1\u3002"}),"\n",(0,o.jsx)(e.mermaid,{value:"   flowchart TD\n    A[\u4f7f\u7528\u793e\u4ea4\u8eab\u4efd\u8ba4\u8bc1 (Authentication)] --\x3e B{{\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u5339\u914d\u4efb\u4f55\u73b0\u6709\u8d26\u6237\u5417\uff1f}}\n    B -- \u662f --\x3e C{{\u94fe\u63a5\u793e\u4ea4\u8d26\u6237\u5417\uff1f}}\n    C -- \u662f --\x3e D[\u5c06\u793e\u4ea4\u8eab\u4efd\u94fe\u63a5\u5230\u73b0\u6709\u8d26\u6237]\n    D --\x3e E[\u767b\u5f55\u6210\u529f]\n    C -- \u5426 --\x3e F[\u8f93\u5165\u65b0\u7535\u5b50\u90ae\u4ef6\u5730\u5740]\n    F --\x3e G[\u8f93\u5165\u9a8c\u8bc1\u7801]\n    G --\x3e E\n    B -- \u5426 --\x3e E"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"faqs",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(e.h3,{id:"how-to-add-social-login-buttons-and-directly-sign-in-with-social-on-my-website",children:"\u5982\u4f55\u5728\u6211\u7684\u7f51\u7ad9\u4e0a\u6dfb\u52a0\u793e\u4ea4\u767b\u5f55\u6309\u94ae\u5e76\u76f4\u63a5\u4f7f\u7528\u793e\u4ea4\u767b\u5f55\uff1f"})}),(0,o.jsxs)(e.p,{children:["Logto \u5141\u8bb8\u4f60\u5728\u7f51\u7ad9\u4e0a\u6dfb\u52a0\u793e\u4ea4\u767b\u5f55\u6309\u94ae\uff0c\u5e76\u76f4\u63a5\u542f\u52a8\u793e\u4ea4\u767b\u5f55\u8fc7\u7a0b\uff0c\u800c\u65e0\u9700\u663e\u793a\u9ed8\u8ba4\u7684\u767b\u5f55\u8868\u5355\u3002\u67e5\u770b\u6211\u4eec\u7684 ",(0,o.jsx)(e.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"\u76f4\u63a5\u767b\u5f55"})," \u6307\u5357\u4ee5\u83b7\u53d6\u8be6\u7ec6\u8bf4\u660e\u3002"]})]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(e.h3,{id:"why-my-emails-or-phone-numbers-are-not-populated-after-signing-up-with-social",children:"\u4e3a\u4ec0\u4e48\u5728\u4f7f\u7528\u793e\u4ea4\u6ce8\u518c\u540e\u6211\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u6ca1\u6709\u586b\u5145\uff1f"})}),(0,o.jsxs)(e.p,{children:["\u5728 Logto \u4e2d\uff0c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u548c\u7535\u8bdd\u53f7\u7801\u53ef\u4ee5\u7528\u4f5c\u767b\u5f55\u6807\u8bc6\u7b26\uff0c\u4ee5\u552f\u4e00\u6807\u8bc6\u7528\u6237\u3002\u53ea\u6709\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u548c\u7535\u8bdd\u53f7\u7801\u624d\u88ab\u63a5\u53d7\u4e3a\u6807\u8bc6\u7b26\u3002\u5982\u679c\u793e\u4ea4\u8eab\u4efd\u672a\u63d0\u4f9b ",(0,o.jsx)(e.code,{children:"email_verified"})," \u6216 ",(0,o.jsx)(e.code,{children:"phone_number_verified"})," \u58f0\u660e\uff0c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6216\u7535\u8bdd\u53f7\u7801\u5c06\u4e0d\u4f1a\u540c\u6b65\u5230\u7528\u6237\u8d44\u6599\u4e2d\u3002\u4f60\u4ecd\u7136\u53ef\u4ee5\u5728\u7528\u6237\u8d44\u6599\u7684\u793e\u4ea4\u8eab\u4efd\u6570\u636e\u4e0b\u627e\u5230\u5b83\u4eec\u3002"]}),(0,o.jsx)(e.p,{children:"\u652f\u6301\u672a\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u4f5c\u4e3a\u7528\u6237\u8d44\u6599\u5c06\u5f88\u5feb\u63a8\u51fa\u3002"})]}),"\n",(0,o.jsx)(e.h2,{id:"related-resources",children:"\u76f8\u5173\u8d44\u6e90"}),"\n",(0,o.jsx)(l,{href:"https://www.youtube.com/watch?v=sv60N9eW8Ew",children:"\u793e\u4ea4\u767b\u5f55\u4f53\u9a8c"}),"\n",(0,o.jsx)(l,{href:"https://blog.logto.io/maximize-google-sign-in-conversions",children:(0,o.jsx)(e.p,{children:"\u901a\u8fc7 6 \u79cd\u914d\u7f6e\u6700\u5927\u5316 Google \u767b\u5f55\u8f6c\u6362"})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}function x(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},67231:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/sign-in-social-linking-38460f448b59a088227b3ad0936446f6.png"},27081:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/social-sign-in-enable-google-one-tab-b1cea8c8c75be9f5d1c599669967ad32.png"},79621:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var s=i(58101);const o={},t=s.createContext(o);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);