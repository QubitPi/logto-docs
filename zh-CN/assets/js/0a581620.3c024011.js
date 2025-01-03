"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11378],{66734:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"developers/webhooks/configure-webhooks","title":"\u914d\u7f6e Webhook","description":"\u5728 Logto \u63a7\u5236\u53f0\u4e2d\u914d\u7f6e Webhook\uff0c\u4ee5\u5b9e\u73b0\u65e0\u7f1d\u96c6\u6210\u5e76\u63a5\u6536\u5e94\u7528\u7a0b\u5e8f\u7684\u5b9e\u65f6\u4e8b\u4ef6\u901a\u77e5\u3002\u4eab\u53d7\u7b80\u5355\u7684\u914d\u7f6e\u3001\u589e\u5f3a\u7684\u5b89\u5168\u6027\u548c\u4fbf\u6377\u7684\u5065\u5eb7\u76d1\u63a7\u9009\u9879\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/webhooks/configure-webhooks.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/configure-webhooks","permalink":"/zh-CN/developers/webhooks/configure-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/webhooks/configure-webhooks.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"configure-webhooks","title":"\u914d\u7f6e Webhook","sidebar_label":"\u914d\u7f6e Webhook","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Webhook","permalink":"/zh-CN/developers/webhooks/"},"next":{"title":"Webhooks events","permalink":"/zh-CN/developers/webhooks/webhooks-events"}}');var h=n(25105),r=n(79621);const t={id:"configure-webhooks",title:"\u914d\u7f6e Webhook",sidebar_label:"\u914d\u7f6e Webhook",sidebar_position:2},i="\u914d\u7f6e Webhook",l={},d=[{value:"\u521b\u5efa Webhook",id:"create-a-webhook",level:2},{value:"\u4fdd\u62a4 Webhook",id:"secure-webhook",level:2},{value:"\u6d4b\u8bd5 Webhook",id:"test-webhook",level:2},{value:"\u76d1\u63a7 Webhook \u5065\u5eb7\u72b6\u6001",id:"monitor-webhook-health-status",level:2}];function c(o){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...o.components},{CloudLink:s}=e;return s||function(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.header,{children:(0,h.jsx)(e.h1,{id:"\u914d\u7f6e-webhook",children:"\u914d\u7f6e Webhook"})}),"\n",(0,h.jsx)(e.p,{children:"\u5728 Logto \u63a7\u5236\u53f0\u4e2d\u914d\u7f6e Webhook\uff0c\u4ee5\u5b9e\u73b0\u65e0\u7f1d\u96c6\u6210\u5e76\u63a5\u6536\u5e94\u7528\u7a0b\u5e8f\u7684\u5b9e\u65f6\u4e8b\u4ef6\u901a\u77e5\u3002\u4eab\u53d7\u7b80\u5355\u7684\u914d\u7f6e\u3001\u589e\u5f3a\u7684\u5b89\u5168\u6027\u548c\u4fbf\u6377\u7684\u5065\u5eb7\u76d1\u63a7\u9009\u9879\u3002"}),"\n",(0,h.jsx)(e.h2,{id:"create-a-webhook",children:"\u521b\u5efa Webhook"}),"\n",(0,h.jsx)(e.p,{children:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a\u5c06\u7531 Logto Agent \u8c03\u7528\u7684 Webhook \u7aef\u70b9\u3002\u6b64\u7aef\u70b9\u5e94\u5728\u4f60\u7684\u670d\u52a1\u5668\u4e0a\u5b9e\u73b0\uff0c\u5e76\u80fd\u591f\u63a5\u6536 HTTP \u8bf7\u6c42\u3002"}),"\n",(0,h.jsx)(e.p,{children:"\u8981\u5728 Logto \u63a7\u5236\u53f0\u4e2d\u521b\u5efa\u65b0\u7684 Webhook\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n",(0,h.jsxs)(e.ol,{children:["\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u521b\u5efa Webhook"}),"\uff1a\u5bfc\u822a\u5230 ",(0,h.jsx)(s,{to:"/webhooks",children:"\u63a7\u5236\u53f0 > Webhooks"})," \u5e76\u70b9\u51fb\u201c\u521b\u5efa Webhook\u201d\u6309\u94ae\u3002"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u540d\u79f0"}),"\uff1a\u4e3a Webhook \u63d0\u4f9b\u4e00\u4e2a\u540d\u79f0\u3002\u8fd9\u662f\u4e3a\u4e86\u4f60\u81ea\u5df1\u5b9a\u4e49\u4f7f\u7528\u573a\u666f\u7684\u53c2\u8003\u3002"]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u7aef\u70b9 URL"}),"\uff1a\u8f93\u5165 ",(0,h.jsx)(e.code,{children:"Endpoint URL"}),"\uff0c\u8fd9\u662f\u4f60\u7684\u670d\u52a1\u5668\u5728\u4e8b\u4ef6\u53d1\u751f\u65f6\u63a5\u6536 Webhook POST \u8bf7\u6c42\u7684 URL\u3002\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u8be5 URL \u5fc5\u987b\u901a\u8fc7 HTTPS \u516c\u5f00\u8bbf\u95ee\uff0c\u5e76\u4e14\u4e0d\u5e94\u662f\u672c\u5730\u4e3b\u673a URL\u3002"]}),"\n",(0,h.jsxs)(e.admonition,{type:"note",children:[(0,h.jsx)(e.p,{children:"\u4f60\u7684\u670d\u52a1\u5668\u5e94\u5728\u63a5\u6536\u5230\u8bf7\u6c42\u540e\u7acb\u5373\u4ee5 HTTP 200\uff08\u201cOK\u201d\uff09\u54cd\u5e94 Logto Webhook \u8bf7\u6c42\uff0c\u4ee5\u901a\u77e5\u8bf7\u6c42\u5df2\u88ab\u63a5\u6536\u3002"}),(0,h.jsx)(e.p,{children:"\u7b49\u5f85\u76f8\u5e94 Webhook \u4e8b\u4ef6\u7684\u903b\u8f91\u5904\u7406\u5b8c\u6210\u540e\u518d\u54cd\u5e94\u53ef\u80fd\u4f1a\u5bfc\u81f4 Webhook \u8d85\u65f6\u3002"}),(0,h.jsx)(e.p,{children:"\u4e0d\u8981\u5411 Logto Webhook \u8fd4\u56de 200 \u4ee5\u5916\u7684\u4efb\u4f55\u54cd\u5e94\u3002\u5982\u679c\u5728\u5904\u7406\u4e8b\u4ef6\u65f6\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u5728\u4f60\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\u5904\u7406\u3002"})]}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u4e8b\u4ef6"}),"\uff1a\u5728\u51fa\u73b0\u7684\u6a21\u6001\u4e2d\uff0c\u9009\u62e9\u5c06\u89e6\u53d1\u6b64 Webhook \u7684\u6240\u9700",(0,h.jsx)(e.a,{href:"/developers/webhooks/webhooks-events",children:"\u4e8b\u4ef6"}),"\u3002\u5efa\u8bae\u9009\u62e9\u6ee1\u8db3\u4f60\u8981\u6c42\u7684\u8f83\u5c11\u6570\u91cf\u7684\u4e8b\u4ef6\uff0c\u4ee5\u907f\u514d\u670d\u52a1\u5668\u63a5\u6536\u8fc7\u591a\u8bf7\u6c42\u3002\u521b\u5efa Webhook \u540e\uff0c\u4f60\u53ef\u4ee5\u968f\u65f6\u66f4\u6539\u6240\u9009\u4e8b\u4ef6\u3002"]}),"\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.img,{alt:"\u521b\u5efa Webhook",src:n(57851).A+"",width:"2530",height:"2084"})}),"\n"]}),"\n",(0,h.jsxs)(e.li,{children:["\n",(0,h.jsxs)(e.p,{children:[(0,h.jsx)(e.strong,{children:"\u7981\u7528 / \u6fc0\u6d3b"}),"\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cWebhook \u5728\u521b\u5efa\u540e\u7acb\u5373\u6fc0\u6d3b\u3002\u5982\u679c\u4f60\u60f3\u6682\u65f6\u6682\u505c Webhook\uff0c\u53ef\u4ee5\u4f7f\u7528\u521b\u5efa\u540e\u4f4d\u4e8e\u6807\u9898\u53f3\u4e0a\u89d2\u7684\u201c\u4e09\u70b9\u201d\u83dc\u5355\u7981\u7528\u6216\u91cd\u65b0\u6fc0\u6d3b\u5b83\u3002"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.h2,{id:"secure-webhook",children:"\u4fdd\u62a4 Webhook"}),"\n",(0,h.jsx)(e.p,{children:"\u4e00\u65e6\u4f60\u7684\u670d\u52a1\u5668\u51c6\u5907\u597d\u63a5\u6536 Webhook \u8bf7\u6c42\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u786e\u4fdd\u5b83\u80fd\u591f\u5b89\u5168\u5730\u5904\u7406\u8bf7\u6c42\u3002Logto \u4e3a\u6bcf\u4e2a Webhook \u8bf7\u6c42\u8d1f\u8f7d\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\uff0c\u8fd9\u4f7f\u4f60\u80fd\u591f\u9a8c\u8bc1\u8bf7\u6c42\u6765\u81ea Logto\u3002"}),"\n",(0,h.jsx)(e.p,{children:"\u521b\u5efa\u65b0\u7684 Webhook \u540e\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u589e\u5f3a\u5176\u5b89\u5168\u6027\uff1a"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"\u7b7e\u540d\u5bc6\u94a5"}),"\uff1aLogto \u4e3a\u6bcf\u4e2a Webhook \u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684\u54c8\u5e0c\u7b7e\u540d\uff0c\u79f0\u4e3a\u7b7e\u540d\u5bc6\u94a5\u3002\u4f60\u53ef\u4ee5\u5728\u7aef\u70b9\u5b9e\u73b0\u4e2d\u5c06\u6b64\u5bc6\u94a5\u4f5c\u4e3a\u8bf7\u6c42\u5934\u5305\u542b\u3002\u9a8c\u8bc1\u7b7e\u540d\u5bc6\u94a5\u53ef\u786e\u4fdd Webhook \u8d1f\u8f7d\u6765\u81ea Logto\uff0c\u5e76\u4e14\u672a\u88ab\u672a\u7ecf\u6388\u6743\u7684\u6765\u6e90\u7be1\u6539\u3002\u9605\u8bfb",(0,h.jsx)(e.a,{href:"/developers/webhooks/secure-webhooks/",children:"\u4fdd\u62a4\u4f60\u7684 Webhook"}),"\u4ee5\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4ee3\u7801\u7684\u4fe1\u606f\u3002"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49\u5934"}),"\uff1a\u4f60\u53ef\u4ee5\u9009\u62e9\u5728 Webhook \u8d1f\u8f7d\u4e2d\u5305\u542b\u81ea\u5b9a\u4e49\u5934\uff0c\u4ee5\u63d0\u4f9b\u989d\u5916\u7684\u4e0a\u4e0b\u6587\u6216\u5143\u6570\u636e\u3002\u6b64\u529f\u80fd\u5141\u8bb8\u4f60\u6dfb\u52a0\u76f8\u5173\u4fe1\u606f\uff0c\u4ee5\u6709\u6548\u5730\u5904\u7406 Webhook \u6570\u636e\u3002"]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"\u901a\u8fc7\u5229\u7528\u7b7e\u540d\u5bc6\u94a5\u5e76\u8003\u8651\u5305\u542b\u81ea\u5b9a\u4e49\u5934\uff0c\u4f60\u53ef\u4ee5\u589e\u5f3a Webhook \u7684\u5b89\u5168\u6027\uff0c\u5e76\u786e\u4fdd\u63a5\u6536\u5230\u7684\u8d1f\u8f7d\u7684\u5b8c\u6574\u6027\u548c\u771f\u5b9e\u6027\u3002"}),"\n",(0,h.jsx)(e.h2,{id:"test-webhook",children:"\u6d4b\u8bd5 Webhook"}),"\n",(0,h.jsx)(e.p,{children:"\u8981\u6d4b\u8bd5 Logto \u4e0e\u4f60\u7684\u670d\u52a1\u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u53ea\u9700\u70b9\u51fb\u201c\u53d1\u9001\u6d4b\u8bd5\u8d1f\u8f7d\u201d\u6309\u94ae\u3002Logto \u5c06\u4e3a\u6bcf\u4e2a\u9009\u5b9a\u7684\u4e8b\u4ef6\u5411\u4f60\u7684\u7aef\u70b9 URL \u53d1\u9001\u4e00\u4e2a\u793a\u4f8b\u8d1f\u8f7d\u3002\u8fd9\u4e9b\u6d4b\u8bd5\u8bf7\u6c42\u5305\u542b\u533f\u540d\u6570\u636e\uff0c\u5e76\u4e14\u4e0d\u4f1a\u8bb0\u5f55\u5728\u6700\u8fd1\u7684\u8bf7\u6c42\u5386\u53f2\u4e2d\u3002"}),"\n",(0,h.jsx)(e.p,{children:"\u6b64\u6d4b\u8bd5\u53ef\u786e\u4fdd\u4f60\u7684 Webhook \u5df2\u6b63\u786e\u8bbe\u7f6e\u4e3a\u63a5\u6536\u548c\u5904\u7406\u6765\u81ea Logto \u7684\u8d1f\u8f7d\u3002\u5b83\u5141\u8bb8\u4f60\u5728\u5c06 Webhook \u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u4e4b\u524d\u9a8c\u8bc1\u96c6\u6210\u3002"}),"\n",(0,h.jsx)(e.h2,{id:"monitor-webhook-health-status",children:"\u76d1\u63a7 Webhook \u5065\u5eb7\u72b6\u6001"}),"\n",(0,h.jsx)(e.p,{children:"Logto \u63d0\u4f9b\u4e86\u4fbf\u6377\u7684\u5de5\u5177\u6765\u76d1\u63a7\u4f60\u7684 Webhook \u7684\u5065\u5eb7\u72b6\u6001\uff0c\u5e76\u8be6\u7ec6\u8c03\u67e5\u4efb\u4f55\u6f5c\u5728\u95ee\u9898\uff1a"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"\u5065\u5eb7\u72b6\u6001"}),"\nLogto \u4e2d\u7684 Webhook \u5217\u8868\u663e\u793a\u6bcf\u4e2a Webhook \u7684\u5065\u5eb7\u72b6\u6001\uff0c\u5305\u62ec\u8fc7\u53bb 24 \u5c0f\u65f6\u5185\u7684\u6210\u529f\u7387\u548c\u8bf7\u6c42\u603b\u6570\u3002\u6b64\u4fe1\u606f\u4e3a\u4f60\u63d0\u4f9b\u4e86 Webhook \u6027\u80fd\u7684\u6982\u89c8\u3002"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"\u72ec\u7acb\u8bf7\u6c42\u65e5\u5fd7"}),"\n\u5728\u6bcf\u4e2a Webhook \u7684\u201c\u6700\u8fd1\u8bf7\u6c42\u201d\u90e8\u5206\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee\u8fc7\u53bb 24 \u5c0f\u65f6\u7684\u8bf7\u6c42\u65e5\u5fd7\u3002\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u5355\u72ec\u8bb0\u5f55\uff0c\u5141\u8bb8\u4f60\u67e5\u770b\u6bcf\u4e2a\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e76\u8c03\u67e5\u4efb\u4f55\u6f5c\u5728\u7684\u9519\u8bef\u6216\u5f02\u5e38\u3002"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.strong,{children:"\u81ea\u52a8\u91cd\u8bd5"}),"\n\u5982\u679c\u4ea4\u4ed8\u5931\u8d25\uff08\u5f53 Webhook \u54cd\u5e94\u72b6\u6001\u5927\u4e8e\u6216\u7b49\u4e8e 500 \u65f6\uff09\uff0cLogto \u4f1a\u81ea\u52a8\u91cd\u8bd5\u4ea4\u4ed8\u6700\u591a\u4e09\u6b21\u3002\u8bf7\u653e\u5fc3\uff0c\u540c\u4e00\u8bf7\u6c42\u7684\u591a\u6b21\u91cd\u8bd5\u53ea\u4f1a\u751f\u6210\u4e00\u4e2a\u65e5\u5fd7\u6761\u76ee\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u590d\u3002"]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"\u901a\u8fc7\u5229\u7528\u8fd9\u4e9b\u76d1\u63a7\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u6709\u6548\u5730\u8ddf\u8e2a Webhook \u7684\u5065\u5eb7\u72b6\u51b5\uff0c\u68c0\u67e5\u8bf7\u6c42\u65e5\u5fd7\uff0c\u5e76\u786e\u4fdd Webhook \u96c6\u6210\u7684\u53ef\u9760\u6027\u548c\u6027\u80fd\u3002"})]})}function b(o={}){const{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,h.jsx)(e,{...o,children:(0,h.jsx)(c,{...o})}):c(o)}},57851:(o,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/create-webhook-page-b86c280030fa18c8d6dd2e9697286c73.png"},79621:(o,e,n)=>{n.d(e,{R:()=>t,x:()=>i});var s=n(58101);const h={},r=s.createContext(h);function t(o){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function i(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(h):o.components||h:t(o.components),s.createElement(r.Provider,{value:e},o.children)}}}]);