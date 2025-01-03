"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[90046],{70053:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>t});var s=i(25105),l=i(79621);const t=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5bf9 Logto \u8fde\u63a5\u5668 (Connectors) \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u67e5\u770b ",(0,s.jsx)(n.a,{href:"/connectors",children:"\u914d\u7f6e\u8fde\u63a5\u5668"})," \u6307\u5357\u4ee5\u5f00\u59cb\u4e86\u89e3\u3002"]})})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},33118:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"integrations/social/alipay-web/README","title":"\u8bbe\u7f6e\u652f\u4ed8\u5b9d (Web) \u793e\u4ea4\u767b\u5f55","description":"\u7528\u4e8e Web \u5e94\u7528\u7684\u5b98\u65b9 Logto Alipay \u793e\u4ea4\u767b\u5f55\u8fde\u63a5\u5668\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/social/alipay-web/README.mdx","sourceDirName":"integrations/social/alipay-web","slug":"/integrations/alipay-web","permalink":"/zh-CN/integrations/alipay-web","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/social/alipay-web/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/alipay-web","sidebar_label":"Alipay (Web)","sidebar_custom_props":{"description":"Alipay \u662f\u4e00\u4e2a\u7b2c\u4e09\u65b9\u79fb\u52a8\u548c\u5728\u7ebf\u652f\u4ed8\u5e73\u53f0\u3002","logoFilename":"alipay.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Alipay (Native)","permalink":"/zh-CN/integrations/alipay-native"},"next":{"title":"Apple","permalink":"/zh-CN/integrations/apple"}}');var l=i(25105),t=i(79621),r=i(70053);const c={slug:"/integrations/alipay-web",sidebar_label:"Alipay (Web)",sidebar_custom_props:{description:"Alipay \u662f\u4e00\u4e2a\u7b2c\u4e09\u65b9\u79fb\u52a8\u548c\u5728\u7ebf\u652f\u4ed8\u5e73\u53f0\u3002",logoFilename:"alipay.svg"}},a="\u8bbe\u7f6e\u652f\u4ed8\u5b9d (Web) \u793e\u4ea4\u767b\u5f55",o={},d=[...r.RM,{value:"\u5f00\u59cb",id:"get-started",level:2},{value:"\u6ce8\u518c Alipay \u5f00\u53d1\u8005\u8d26\u53f7",id:"register-alipay-developer-account",level:2},{value:"\u521b\u5efa\u548c\u914d\u7f6e Alipay \u5e94\u7528",id:"create-and-configure-alipay-app",level:2},{value:"\u8bbe\u7f6e Logto Alipay Web \u8fde\u63a5\u5668\u8bbe\u7f6e",id:"set-up-the-logto-alipay-web-connector-settings",level:2},{value:"\u914d\u7f6e\u7c7b\u578b",id:"config-types",level:3},{value:"\u6d4b\u8bd5 Alipay Web \u8fde\u63a5\u5668",id:"test-alipay-web-connector",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"references",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u8bbe\u7f6e\u652f\u4ed8\u5b9d-web-\u793e\u4ea4\u767b\u5f55",children:"\u8bbe\u7f6e\u652f\u4ed8\u5b9d (Web) \u793e\u4ea4\u767b\u5f55"})}),"\n",(0,l.jsx)(n.p,{children:"\u7528\u4e8e Web \u5e94\u7528\u7684\u5b98\u65b9 Logto Alipay \u793e\u4ea4\u767b\u5f55\u8fde\u63a5\u5668\u3002"}),"\n",(0,l.jsx)(r.Ay,{}),"\n",(0,l.jsx)(n.h2,{id:"get-started",children:"\u5f00\u59cb"}),"\n",(0,l.jsx)(n.p,{children:"Alipay Web \u8fde\u63a5\u5668\u4e13\u4e3a\u684c\u9762 Web \u5e94\u7528\u8bbe\u8ba1\u3002\u5b83\u5229\u7528 Alipay \u7684 OAuth 2.0 \u8ba4\u8bc1\u5de5\u4f5c\u6d41\u7a0b\uff0c\u4f7f Alipay \u7528\u6237\u80fd\u591f\u4f7f\u7528\u516c\u5171 Alipay \u7528\u6237\u8d44\u6599\u767b\u5f55\u5176\u4ed6\u5e94\u7528\uff0c\u800c\u65e0\u9700\u7ecf\u5386\u7e41\u7410\u7684\u6ce8\u518c\u8fc7\u7a0b\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"register-alipay-developer-account",children:"\u6ce8\u518c Alipay \u5f00\u53d1\u8005\u8d26\u53f7"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u8d26\u53f7\uff0c\u8bf7",(0,l.jsx)(n.a,{href:"https://certifyweb.alipay.com/certify/reg/guide#/",children:"\u6ce8\u518c\u4e00\u4e2a Alipay \u5f00\u53d1\u8005\u8d26\u53f7"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"create-and-configure-alipay-app",children:"\u521b\u5efa\u548c\u914d\u7f6e Alipay \u5e94\u7528"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u4f7f\u7528\u521a\u6ce8\u518c\u7684\u8d26\u53f7\u767b\u5f55 ",(0,l.jsx)(n.a,{href:"https://open.alipay.com/",children:"Alipay \u63a7\u5236\u53f0"}),"\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u5728\u201c\u6211\u7684\u5e94\u7528\u201d (\u6211\u7684\u5e94\u7528) \u9762\u677f\u4e2d\uff0c\u8f6c\u5230\u201c\u7f51\u9875&\u79fb\u52a8\u5e94\u7528\u201d (\u7f51\u9875&\u79fb\u52a8\u5e94\u7528) \u6807\u7b7e\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u70b9\u51fb\u201c\u7acb\u5373\u521b\u5efa\u201d (\u7acb\u5373\u521b\u5efa) \u6309\u94ae\u5f00\u59cb\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5728\u201c\u5e94\u7528\u540d\u79f0\u201d (\u5e94\u7528\u540d\u79f0) \u4e2d\u6839\u636e\u547d\u540d\u89c4\u8303\u547d\u540d\u4f60\u7684\u5e94\u7528\u5e76\u4e0a\u4f20\u201c\u5e94\u7528\u56fe\u6807\u201d (\u5e94\u7528\u56fe\u6807)\uff0c\u786e\u4fdd\u9009\u62e9\u201c\u7f51\u9875\u5e94\u7528\u201d (\u7f51\u9875\u5e94\u7528) \u4f5c\u4e3a\u201c\u5e94\u7528\u7c7b\u578b\u201d (\u5e94\u7528\u7c7b\u578b)\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u5b8c\u6210\u5e94\u7528\u521b\u5efa\u540e\uff0c\u8fdb\u5165\u6982\u89c8\u9875\u9762\uff0c\u6211\u4eec\u5e94\u8be5\u70b9\u51fb\u201c\u6dfb\u52a0\u80fd\u529b\u201d (\u6dfb\u52a0\u80fd\u529b) \u6765\u6dfb\u52a0\u201c\u7b2c\u4e09\u65b9\u5e94\u7528\u6388\u6743\u201d (\u7b2c\u4e09\u65b9\u5e94\u7528\u6388\u6743)\u3001\u201c\u83b7\u53d6\u4f1a\u5458\u4fe1\u606f\u201d (\u83b7\u53d6\u4f1a\u5458\u4fe1\u606f) \u548c\u201cApp \u652f\u4ed8\u5b9d\u767b\u5f55\u201d (App \u652f\u4ed8\u5b9d\u767b\u5f55)\uff0c\u7136\u540e\u542f\u7528 Alipay \u767b\u5f55\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u524d\u5f80 ",(0,l.jsx)(n.a,{href:"https://b.alipay.com/index2.htm",children:"Alipay \u5ba2\u6237\u4e2d\u5fc3"}),"\uff0c\u5e76\u4f7f\u7528 Alipay \u5f00\u53d1\u8005\u8d26\u53f7\u767b\u5f55\u3002\u70b9\u51fb\u9876\u90e8\u680f\u7684\u201c\u8d26\u53f7\u4e2d\u5fc3\u201d (\u8d26\u53f7\u4e2d\u5fc3)\uff0c\u7136\u540e\u8f6c\u5230\u4fa7\u8fb9\u680f\u5e95\u90e8\u7684\u201cAPPID \u7ed1\u5b9a\u201d (APPID \u7ed1\u5b9a)\u3002\u201c\u6dfb\u52a0\u7ed1\u5b9a\u201d (\u6dfb\u52a0\u7ed1\u5b9a) \u901a\u8fc7\u8f93\u5165\u4f60\u5728\u6b65\u9aa4 4 \u4e2d\u521b\u5efa\u7684\u7f51\u9875\u5e94\u7528\u7684 APPID\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u70b9\u51fb\u201cApp \u652f\u4ed8\u5b9d\u767b\u5f55\u201d\u7684\u201c\u7b7e\u7ea6\u201d\u6309\u94ae\uff0c\u5e76\u6309\u7167\u6307\u5357\u5b8c\u6210\u7b7e\u7ea6\u8fc7\u7a0b\u3002\u5b8c\u6210\u6b64\u6b65\u9aa4\u540e\uff0c\u4f60\u5e94\u8be5\u4f1a\u53d1\u73b0\u6b65\u9aa4 5 \u4e2d\u521a\u6dfb\u52a0\u7684\u80fd\u529b\u751f\u6548\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u8fd4\u56de Alipay \u5f00\u653e\u5e73\u53f0\u63a7\u5236\u53f0\u9875\u9762\uff0c\u4f60\u53ef\u4ee5\u5728\u201c\u5f00\u53d1\u4fe1\u606f\u201d (\u5f00\u53d1\u4fe1\u606f) \u90e8\u5206\u627e\u5230\u201c\u63a5\u53e3\u52a0\u7b7e\u65b9\u5f0f\uff08\u5bc6\u94a5/\u8bc1\u4e66\uff09\u201d (\u63a5\u53e3\u52a0\u7b7e\u65b9\u5f0f\uff08\u5bc6\u94a5/\u8bc1\u4e66\uff09)\u3002\u70b9\u51fb\u201c\u8bbe\u7f6e\u201d (\u8bbe\u7f6e) \u6309\u94ae\uff0c\u4f60\u4f1a\u8fdb\u5165\u4e00\u4e2a\u8bbe\u7f6e\u7b7e\u540d\u65b9\u5f0f\u7684\u9875\u9762\u3002\u201c\u516c\u94a5\u201d (\u516c\u94a5) \u662f\u9996\u9009\u7684\u7b7e\u540d\u6a21\u5f0f\uff0c\u5e76\u5728\u6587\u672c\u8f93\u5165\u6846\u4e2d\u586b\u5199\u4f60\u751f\u6210\u7684\u516c\u94a5\u6587\u4ef6\u7684\u5185\u5bb9\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u901a\u8fc7\u70b9\u51fb Alipay \u63a7\u5236\u53f0\u9875\u9762\u5e95\u90e8\u7684\u201c\u8bbe\u7f6e\u201d (\u8bbe\u7f6e) \u6309\u94ae\u8bbe\u7f6e\u201c\u6388\u6743\u56de\u8c03\u5730\u5740\u201d (\u6388\u6743\u56de\u8c03\u5730\u5740)\u3002",(0,l.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"})," \u662f Logto \u6838\u5fc3\u4e2d\u4f7f\u7528\u7684\u9ed8\u8ba4\u91cd\u5b9a\u5411 URI\u3002",(0,l.jsx)(n.code,{children:"connector_id"})," \u53ef\u4ee5\u5728 Logto \u7ba1\u7406\u63a7\u5236\u53f0\u8fde\u63a5\u5668\u8be6\u60c5\u9875\u9762\u7684\u9876\u90e8\u680f\u627e\u5230\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u5b8c\u6210\u6240\u6709\u8fd9\u4e9b\u6b65\u9aa4\u540e\uff0c\u8fd4\u56de Alipay \u63a7\u5236\u53f0\u9875\u9762\u7684\u53f3\u4e0a\u89d2\uff0c\u70b9\u51fb\u201c\u63d0\u4ea4\u5ba1\u6838\u201d (\u63d0\u4ea4\u5ba1\u6838)\u3002\u4e00\u65e6\u5ba1\u6838\u901a\u8fc7\uff0c\u4f60\u5c31\u53ef\u4ee5\u987a\u5229\u8fdb\u884c Alipay \u767b\u5f55\u6d41\u7a0b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728\u672c\u5730\u673a\u5668\u4e0a\u4f7f\u7528 ",(0,l.jsx)(n.em,{children:"openssl"})," \u751f\u6210\u5bc6\u94a5\u5bf9\uff0c\u901a\u8fc7\u5728\u7ec8\u7aef\u4e2d\u6267\u884c\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -outform PEM -pubout -out public.pem\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Alipay \u5e94\u7528\u8bbe\u7f6e\u7f51\u7ad9\u586b\u5199\u516c\u94a5\u65f6\uff0c\u4f60\u9700\u8981\u79fb\u9664 ",(0,l.jsx)(n.code,{children:"public.pem"})," \u7684\u5934\u90e8\u548c\u5c3e\u90e8\uff0c\u5220\u9664\u6240\u6709\u6362\u884c\u7b26\uff0c\u5e76\u5c06\u5176\u4f59\u5185\u5bb9\u7c98\u8d34\u5230\u201c\u516c\u94a5\u201d\u6587\u672c\u8f93\u5165\u6846\u4e2d\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"set-up-the-logto-alipay-web-connector-settings",children:"\u8bbe\u7f6e Logto Alipay Web \u8fde\u63a5\u5668\u8bbe\u7f6e"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.a,{href:"https://open.alipay.com/dev/workspace",children:"Alipay \u63a7\u5236\u53f0\u5de5\u4f5c\u533a"})," \u4e2d\uff0c\u8f6c\u5230\u201c\u6211\u7684\u5e94\u7528\u201d (\u6211\u7684\u5e94\u7528) \u9762\u677f\u5e76\u70b9\u51fb\u201c\u7f51\u9875&\u79fb\u52a8\u5e94\u7528\u201d (\u7f51\u9875&\u79fb\u52a8\u5e94\u7528) \u6807\u7b7e\uff0c\u4f60\u53ef\u4ee5\u627e\u5230\u6240\u6709\u5e94\u7528\u7684 APPID\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u5728\u4e0a\u4e00\u90e8\u5206\u7684\u6b65\u9aa4 7 \u4e2d\uff0c\u4f60\u5df2\u7ecf\u751f\u6210\u4e86\u4e00\u4e2a\u5305\u542b\u79c1\u94a5\u548c\u516c\u94a5\u7684\u5bc6\u94a5\u5bf9\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u586b\u5199 Logto \u8fde\u63a5\u5668\u8bbe\u7f6e\uff1a","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"appId"})," \u5b57\u6bb5\u4e2d\u586b\u5199\u4f60\u5728\u6b65\u9aa4 1 \u4e2d\u83b7\u5f97\u7684 APPID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"privateKey"})," \u5b57\u6bb5\u4e2d\u586b\u5199\u6b65\u9aa4 2 \u4e2d\u63d0\u5230\u7684\u79c1\u94a5\u6587\u4ef6\u7684\u5185\u5bb9\u3002\u8bf7\u786e\u4fdd\u4f7f\u7528 '\\n' \u66ff\u6362\u6240\u6709\u6362\u884c\u7b26\uff0c\u5e76\u4e14\u4e0d\u8981\u79fb\u9664\u79c1\u94a5\u6587\u4ef6\u4e2d\u7684\u5934\u90e8\u548c\u5c3e\u90e8\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"signType"})," \u5b57\u6bb5\u4e2d\u586b\u5199 'RSA2'\uff0c\u56e0\u4e3a\u6211\u4eec\u5728\u201c\u521b\u5efa\u548c\u914d\u7f6e Alipay \u5e94\u7528\u201d\u7684\u6b65\u9aa4 7 \u4e2d\u9009\u62e9\u4e86 ",(0,l.jsx)(n.code,{children:"\u516c\u94a5"})," \u7b7e\u540d\u6a21\u5f0f\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"charset"})," \u5b57\u6bb5\u4e2d\u586b\u5199 'gbk' \u6216 'utf8'\u3002\u4f60\u53ef\u4ee5\u5c06\u6b64\u5b57\u6bb5\u7559\u7a7a\uff0c\u56e0\u4e3a\u5b83\u662f\u53ef\u9009\u7684\u3002\u9ed8\u8ba4\u503c\u8bbe\u7f6e\u4e3a 'utf8'\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5728 ",(0,l.jsx)(n.code,{children:"scope"})," \u5b57\u6bb5\u4e2d\u586b\u5199 'auth_base' \u6216 'auth_user'\u3002\u4f60\u53ef\u4ee5\u5c06\u6b64\u5b57\u6bb5\u7559\u7a7a\uff0c\u56e0\u4e3a\u5b83\u662f\u53ef\u9009\u7684\u3002\u9ed8\u8ba4\u503c\u8bbe\u7f6e\u4e3a 'auth_user'\u3002\u4f60\u53ef\u4ee5\u67e5\u770b\u4e0d\u540c\u503c\u4e4b\u95f4\u7684",(0,l.jsx)(n.a,{href:"https://opendocs.alipay.com/fw/api/105942",children:"\u533a\u522b"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"config-types",children:"\u914d\u7f6e\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u540d\u79f0"}),(0,l.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u679a\u4e3e\u503c"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"appId"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"N/A"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"privateKey"}),(0,l.jsx)(n.td,{children:"string"}),(0,l.jsx)(n.td,{children:"N/A"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"signType"}),(0,l.jsx)(n.td,{children:"enum string"}),(0,l.jsx)(n.td,{children:"'RSA' | 'RSA2'"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"charset"}),(0,l.jsx)(n.td,{children:"enum string (OPTIONAL)"}),(0,l.jsx)(n.td,{children:"'gbk' | 'utf8' | undefined"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"scope"}),(0,l.jsx)(n.td,{children:"enum string (OPTIONAL)"}),(0,l.jsx)(n.td,{children:"'auth_user' | 'auth_base'"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"test-alipay-web-connector",children:"\u6d4b\u8bd5 Alipay Web \u8fde\u63a5\u5668"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c31\u662f\u8fd9\u6837\u3002\u4e0d\u8981\u5fd8\u8bb0",(0,l.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"\u5728\u767b\u5f55\u4f53\u9a8c\u4e2d\u542f\u7528\u793e\u4ea4\u8fde\u63a5\u5668"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u65e6\u542f\u7528\u4e86 Alipay Web \u8fde\u63a5\u5668\uff0c\u4f60\u53ef\u4ee5\u6784\u5efa\u5e76\u8fd0\u884c\u4f60\u7684 Web \u5e94\u7528\u4ee5\u67e5\u770b\u5176\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"references",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://opendocs.alipay.com/support/01rau6",children:"Alipay \u6587\u6863 - \u63a5\u5165\u51c6\u5907 - \u5982\u4f55\u521b\u5efa\u5e94\u7528"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://opendocs.alipay.com/open/200/105310",children:"Alipay \u6587\u6863 - \u7f51\u9875&\u79fb\u52a8\u5e94\u7528 - \u521b\u5efa\u5e94\u7528"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(58101);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);