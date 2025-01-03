"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[15421],{28342:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"end-user-flows/enterprise-sso/sp-initiated-sso","title":"SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO)","description":"SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO) \u662f\u9ed8\u8ba4\u4e14\u6bd4 IdP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO) \u66f4\u5b89\u5168\u7684\u65b9\u6cd5\uff0c\u5141\u8bb8\u4f01\u4e1a\u7528\u6237\u4ece Logto \u767b\u5f55\u9875\u9762\u542f\u52a8 SSO \u767b\u5f55\u8fc7\u7a0b\u3002Logto \u652f\u6301 \u7535\u5b50\u90ae\u4ef6\u57df\u63d0\u793a SSO \u548c SSO \u7684\u76f4\u63a5\u767b\u5f55\u53c2\u6570\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/sp-initiated-sso.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/sp-initiated-sso","permalink":"/zh-CN/end-user-flows/enterprise-sso/sp-initiated-sso","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/sp-initiated-sso.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)","permalink":"/zh-CN/end-user-flows/enterprise-sso/"},"next":{"title":"IdP-initiated SSO","permalink":"/zh-CN/end-user-flows/enterprise-sso/idp-initiated-sso"}}');var t=s(25105),r=s(79621);const o={sidebar_position:1},d="SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO)",c={},l=[{value:"\u8bbe\u7f6e SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO)",id:"set-up-sp-initiated-sso",level:2},{value:"SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO) \u4f53\u9a8c",id:"sp-initiated-sso-experience",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"faqs",level:2},{value:"\u6211\u53ef\u4ee5\u4f7f\u7528\u7ec4\u7ec7\u540d\u79f0/\u57df\u800c\u4e0d\u662f\u7535\u5b50\u90ae\u4ef6\u57df\u6765\u91cd\u5b9a\u5411\u5230 IdP \u5417\uff1f",id:"can-i-use-organization-namedomain-instead-of-email-domain-to-redirect-to-the-idp",level:3},{value:"\u6211\u53ef\u4ee5\u5728\u767b\u5f55\u9875\u9762\u4e0a\u663e\u793a\u7279\u5b9a\u7684\u4f01\u4e1a\u8fde\u63a5\u5668\u6309\u94ae\u5417\uff1f",id:"can-i-display-a-specific-enterprise-connector-button-on-the-sign-in-page",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:i,Details:o}=n;return i||p("CloudLink",!0),o||p("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sp-\u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55-sso",children:"SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO)"})}),"\n",(0,t.jsxs)(n.p,{children:["SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO) \u662f\u9ed8\u8ba4\u4e14\u6bd4 ",(0,t.jsx)(n.a,{href:"/end-user-flows/enterprise-sso/idp-initiated-sso",children:"IdP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO)"})," \u66f4\u5b89\u5168\u7684\u65b9\u6cd5\uff0c\u5141\u8bb8\u4f01\u4e1a\u7528\u6237\u4ece Logto \u767b\u5f55\u9875\u9762\u542f\u52a8 SSO \u767b\u5f55\u8fc7\u7a0b\u3002Logto \u652f\u6301 ",(0,t.jsx)(n.a,{href:"#sp-initiated-sso-experience",children:"\u7535\u5b50\u90ae\u4ef6\u57df\u63d0\u793a SSO"})," \u548c ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in#enterprise-sso",children:"SSO \u7684\u76f4\u63a5\u767b\u5f55\u53c2\u6570"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"set-up-sp-initiated-sso",children:"\u8bbe\u7f6e SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO)"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5728\u4f60\u7684\u8eab\u4efd\u7cfb\u7edf\u4e2d\u542f\u7528\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u6fc0\u6d3b\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)\uff0c\u8bf7\u5bfc\u822a\u5230 ",(0,t.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"\u63a7\u5236\u53f0 > \u767b\u5f55\u4f53\u9a8c > \u6ce8\u518c\u548c\u767b\u5f55"})," \u5e76\u5207\u6362\u201c\u542f\u7528\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)\u201d\u8bbe\u7f6e\u3002\u542f\u7528\u540e\uff0c\u201c\u5355\u70b9\u767b\u5f55\u201d\u6309\u94ae\u5c06\u51fa\u73b0\u5728\u4f60\u7684\u767b\u5f55\u9875\u9762\u4e0a\u3002\u5177\u6709\u542f\u7528 SSO \u7684\u7535\u5b50\u90ae\u4ef6\u57df\u7684\u4f01\u4e1a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4ed6\u4eec\u7684\u4f01\u4e1a\u8eab\u4efd\u63d0\u4f9b\u5546\u8bbf\u95ee\u4f60\u7684\u670d\u52a1\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4e3a\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\u521b\u5efa\u4f01\u4e1a\u8fde\u63a5\u5668"})}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\uff0c\u4f60\u9700\u8981\u4e3a\u4f60\u7684\u5ba2\u6237\u96c6\u6210\u6bcf\u4e2a\u4f01\u4e1a\u8eab\u4efd\u63d0\u4f9b\u5546\u3002\u7c7b\u4f3c\u4e8e\u793e\u4ea4\u767b\u5f55\uff0c\u5728 Logto \u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4f01\u4e1a\u8fde\u63a5\u5668\u5e76\u914d\u7f6e\u6240\u9700\u7684\u8bbe\u7f6e\u3002\u5bfc\u822a\u5230 ",(0,t.jsx)(i,{to:"/enterprise-sso",children:"\u63a7\u5236\u53f0 > \u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)"}),"\uff0c\u70b9\u51fb\u201c\u6dfb\u52a0\u4f01\u4e1a\u8fde\u63a5\u5668\u201d\u6309\u94ae\uff0c\u5e76\u6309\u7167\u8bf4\u660e\u8bbe\u7f6e\u8fde\u63a5\u5668\u3002\u53c2\u8003 ",(0,t.jsx)(n.a,{href:"/connectors/enterprise-connectors/",children:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668\u8bbe\u7f6e"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4e3a\u4f01\u4e1a\u8fde\u63a5\u5668\u8bbe\u7f6e\u7535\u5b50\u90ae\u4ef6\u57df"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8eab\u4efd\u901a\u5e38\u901a\u8fc7\u516c\u53f8\u7535\u5b50\u90ae\u4ef6\u57df\u8bc6\u522b\u3002\u5728\u6bcf\u4e2a\u4f01\u4e1a\u8fde\u63a5\u5668\u7684\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u7684 SSO \u4f53\u9a8c\u9009\u9879\u5361\u4e2d\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u76f8\u5173\u7684\u7535\u5b50\u90ae\u4ef6\u57df\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5177\u6709\u6307\u5b9a\u7535\u5b50\u90ae\u4ef6\u57df\u7684\u7528\u6237\u5c06\u88ab\u9650\u5236\u4ec5\u901a\u8fc7\u6b64\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668\u767b\u5f55\uff0c\u800c\u5176\u4ed6\u767b\u5f55\u65b9\u6cd5\uff08\u5982\u7535\u5b50\u90ae\u4ef6\u9a8c\u8bc1\u7801\u3001\u7535\u5b50\u90ae\u4ef6\u5bc6\u7801\u8ba4\u8bc1 (Authentication) \u6216\u793e\u4ea4\u767b\u5f55\uff09\u5c06\u5bf9\u8fd9\u4e9b\u7528\u6237\u7981\u7528\u3002SSO \u8fde\u63a5\u5668\u5c06\u4ec5\u5bf9\u5177\u6709\u6307\u5b9a\u7535\u5b50\u90ae\u4ef6\u57df\u7684\u7528\u6237\u53ef\u89c1\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u516c\u5171\u7535\u5b50\u90ae\u4ef6\u57df\uff08\u4f8b\u5982\uff0cgmail.com\uff0cyahoo.com\uff09\u4e0d\u80fd\u94fe\u63a5\u5230\u4f01\u4e1a\u8fde\u63a5\u5668\u3002"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sp-initiated-sso-experience",children:"SP \u53d1\u8d77\u7684\u5355\u70b9\u767b\u5f55 (SSO) \u4f53\u9a8c"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7528\u6237\u5c1d\u8bd5\u4f7f\u7528\u4e3a SSO \u914d\u7f6e\u7684\u4f01\u4e1a\u7535\u5b50\u90ae\u4ef6\u57df\u767b\u5f55\u65f6\uff0cSSO \u88ab\u6fc0\u6d3b\u3002\u6b64\u8fc7\u7a0b\u7ed5\u8fc7\u4e86\u5bc6\u7801\u7b49\u6807\u51c6\u9a8c\u8bc1\u65b9\u6cd5\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5355\u70b9\u767b\u5f55\u6309\u94ae"}),"\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u542f\u7528\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u767b\u5f55\u65b9\u6cd5\u65f6\uff0c\u201c\u5355\u70b9\u767b\u5f55\u201d\u6309\u94ae\u5c06\u4f5c\u4e3a\u767b\u5f55\u9875\u9762\u4e0a\u7684\u66ff\u4ee3\u767b\u5f55\u9009\u9879\u51fa\u73b0\u3002\u901a\u8fc7\u70b9\u51fb\u6b64\u94fe\u63a5\uff0c\u7528\u6237\u5c06\u88ab\u63d0\u793a\u8f93\u5165\u4ed6\u4eec\u7684\u4f01\u4e1a\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4ee5\u542f\u52a8 SSO \u8fc7\u7a0b\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5355\u4e00\u8fde\u63a5\u5668\uff1a\u5982\u679c\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u57df\u4ec5\u4e0e\u4e00\u4e2a\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668\u5173\u8054\uff0c\u7528\u6237\u5c06\u76f4\u63a5\u91cd\u5b9a\u5411\u5230 IdP \u767b\u5f55\u9875\u9762\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u591a\u4e2a\u8fde\u63a5\u5668\uff1a\u5982\u679c\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u57df\u4e0e\u591a\u4e2a\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668\u5173\u8054\uff0c\u7528\u6237\u5c06\u9996\u5148\u4ece\u5217\u8868\u4e2d\u9009\u62e9\u6240\u9700\u7684 IdP\uff0c\u7136\u540e\u518d\u91cd\u5b9a\u5411\u5230 IdP \u767b\u5f55\u9875\u9762\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u5355\u70b9\u767b\u5f55\u6309\u94ae",src:s(52957).A+"",width:"2377",height:"1320"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u901a\u7528\u7535\u5b50\u90ae\u4ef6\u767b\u5f55"}),"\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u901a\u7528\u6807\u8bc6\u7b26\u767b\u5f55\u8868\u5355\u4e2d\uff08\u542f\u7528\u7535\u5b50\u90ae\u4ef6\u767b\u5f55\u65b9\u6cd5\uff09\uff0c\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u7535\u5b50\u90ae\u4ef6\u57df\u68c0\u6d4b\u9ed8\u8ba4\u542f\u7528\u3002\u5f53\u7528\u6237\u8f93\u5165\u4ed6\u4eec\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u65f6\uff0cLogto \u4f1a\u81ea\u52a8\u8bc6\u522b\u8be5\u57df\u662f\u5426\u4e0e\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668\u5173\u8054\u3002\u5982\u679c\u627e\u5230\u5339\u914d\u9879\uff0c\u9ed8\u8ba4\u767b\u5f55\u8868\u5355\u5c06\u66f4\u65b0\uff1a\u201c\u767b\u5f55\u201d\u6309\u94ae\u66f4\u6539\u4e3a\u201c\u5355\u70b9\u767b\u5f55\u201d\u6309\u94ae\uff0c\u9650\u5236\u7528\u6237\u4ec5\u901a\u8fc7\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668\u767b\u5f55\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u901a\u7528\u7535\u5b50\u90ae\u4ef6\u767b\u5f55",src:s(32049).A+"",width:"2377",height:"1320"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"faqs",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.h3,{id:"can-i-use-organization-namedomain-instead-of-email-domain-to-redirect-to-the-idp",children:"\u6211\u53ef\u4ee5\u4f7f\u7528\u7ec4\u7ec7\u540d\u79f0/\u57df\u800c\u4e0d\u662f\u7535\u5b50\u90ae\u4ef6\u57df\u6765\u91cd\u5b9a\u5411\u5230 IdP \u5417\uff1f"})}),(0,t.jsxs)(n.p,{children:["\u76ee\u524d\uff0cLogto \u9884\u6784\u5efa\u7684\u767b\u5f55\u4f53\u9a8c\u4ec5\u652f\u6301 ",(0,t.jsx)(n.strong,{children:"\u7535\u5b50\u90ae\u4ef6\u57df\u63d0\u793a SSO"}),"\uff0c\u4e0d\u652f\u6301 ",(0,t.jsx)(n.strong,{children:"\u7ec4\u7ec7\u57df\u63d0\u793a SSO"}),"\u3002"]}),(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8def\u7531\u9875\u9762\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"directSignIn:'sso:{connectorId}"})," \u7684\u8ba4\u8bc1 (Authentication) \u53c2\u6570\u3002\u6b64\u9875\u9762\u5c06\u6839\u636e\u5176\u7ec4\u7ec7\u57df\u5c06\u5927\u578b\u4f01\u4e1a\u5ba2\u6237\u91cd\u5b9a\u5411\u5230\u9002\u5f53\u7684 IdP\u3002\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"\u76f4\u63a5\u767b\u5f55\u53c2\u6570"}),"\u7684\u4fe1\u606f\u3002"]})]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.h3,{id:"can-i-display-a-specific-enterprise-connector-button-on-the-sign-in-page",children:"\u6211\u53ef\u4ee5\u5728\u767b\u5f55\u9875\u9762\u4e0a\u663e\u793a\u7279\u5b9a\u7684\u4f01\u4e1a\u8fde\u63a5\u5668\u6309\u94ae\u5417\uff1f"})}),(0,t.jsx)(n.p,{children:"\u4e0d\u540c\u7684\u4f01\u4e1a\u5ba2\u6237\u4f7f\u7528\u4e0d\u540c\u7684\u8eab\u4efd\u63d0\u4f9b\u5546\u6765\u7ba1\u7406\u4ed6\u4eec\u7684\u5458\u5de5\uff0c\u5e76\u8bf7\u6c42\u4e0d\u540c\u7684\u6743\u9650 (OIDC) \u6216\u5c5e\u6027 (SAML)\u3002\u56e0\u6b64\uff0c\u4e0d\u5efa\u8bae\u5728\u901a\u7528\u767b\u5f55\u9875\u9762\u4e0a\u663e\u793a\u9488\u5bf9\u7279\u5b9a\u5ba2\u6237\u7684\u4f01\u4e1a\u8fde\u63a5\u5668\u6309\u94ae\u3002"}),(0,t.jsxs)(n.p,{children:["\u4f46\u662f\uff0c\u5982\u679c\u4f60\u6b63\u5728\u5f00\u53d1\u4e00\u4e2a B2E \u4ea7\u54c1\u5e76\u5e0c\u671b\u4e3a\u7279\u5b9a\u4f01\u4e1a\u5ba2\u6237\u663e\u793a\u4e00\u4e2a\u6309\u94ae\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u767b\u5f55\u9875\u9762\u5e76\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"directSignIn:sso"})," \u6765\u9002\u5f53\u5730\u8def\u7531\u6309\u94ae\u3002\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"\u76f4\u63a5\u767b\u5f55\u53c2\u6570"}),"\u7684\u4fe1\u606f\u3002"]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},52957:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/sso-button-sign-in-93ab8ccddea7963a14afc949ed91a8f7.png"},32049:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/sso-email-sign-in-6d0aa4bc16a703e35c2e80f86b412b0d.png"},79621:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(58101);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);