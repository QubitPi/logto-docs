"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[781],{70053:(e,n,s)=>{s.d(n,{Ay:()=>a,RM:()=>r});var o=s(25105),t=s(79621);const r=[];function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5bf9 Logto \u8fde\u63a5\u5668 (Connectors) \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u67e5\u770b ",(0,o.jsx)(n.a,{href:"/connectors",children:"\u914d\u7f6e\u8fde\u63a5\u5668"})," \u6307\u5357\u4ee5\u5f00\u59cb\u4e86\u89e3\u3002"]})})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},90736:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"integrations/sms/vonage-sms/README","title":"\u4f7f\u7528 Vonage SMS \u8bbe\u7f6e\u77ed\u4fe1\u9a8c\u8bc1","description":"Logto \u7684 Vonage SMS \u5b98\u65b9\u8fde\u63a5\u5668\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/sms/vonage-sms/README.mdx","sourceDirName":"integrations/sms/vonage-sms","slug":"/integrations/vonage-sms","permalink":"/zh-CN/integrations/vonage-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/sms/vonage-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/vonage-sms","sidebar_label":"Vonage SMS","sidebar_custom_props":{"description":"\u901a\u4fe1 API \u8fde\u63a5\u4e16\u754c\u3002"}},"sidebar":"integrationsSidebar","previous":{"title":"Twilio SMS","permalink":"/zh-CN/integrations/twilio-sms"},"next":{"title":"Microsoft Entra ID (OIDC)","permalink":"/zh-CN/integrations/entra-id-oidc"}}');var t=s(25105),r=s(79621),i=s(70053);const a={slug:"/integrations/vonage-sms",sidebar_label:"Vonage SMS",sidebar_custom_props:{description:"\u901a\u4fe1 API \u8fde\u63a5\u4e16\u754c\u3002"}},c="\u4f7f\u7528 Vonage SMS \u8bbe\u7f6e\u77ed\u4fe1\u9a8c\u8bc1",d={},l=[...i.RM,{value:"\u5f00\u59cb\u4f7f\u7528",id:"get-started",level:2},{value:"\u5728 Vonage \u4e2d\u8bbe\u7f6e",id:"set-up-in-vonage",level:2},{value:"\u5728 Logto \u4e2d\u8bbe\u7f6e",id:"set-up-in-logto",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u4f7f\u7528-vonage-sms-\u8bbe\u7f6e\u77ed\u4fe1\u9a8c\u8bc1",children:"\u4f7f\u7528 Vonage SMS \u8bbe\u7f6e\u77ed\u4fe1\u9a8c\u8bc1"})}),"\n",(0,t.jsx)(n.p,{children:"Logto \u7684 Vonage SMS \u5b98\u65b9\u8fde\u63a5\u5668\u3002"}),"\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"\u5f00\u59cb\u4f7f\u7528"}),"\n",(0,t.jsx)(n.p,{children:"Vonage \u662f\u4e00\u5bb6\u5168\u7403\u901a\u4fe1\u63d0\u4f9b\u5546\uff0c\u63d0\u4f9b\u5f3a\u5927\u7684\u57fa\u4e8e\u4e91\u7684\u901a\u4fe1\u670d\u52a1\uff0c\u5305\u62ec SMS\uff08\u77ed\u6d88\u606f\u670d\u52a1\uff09\u3002Vonage SMS \u8fde\u63a5\u5668\u662f Logto \u56e2\u961f\u63d0\u4f9b\u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u4f7f Logto \u7ec8\u7aef\u7528\u6237\u80fd\u591f\u901a\u8fc7\u77ed\u4fe1\u9a8c\u8bc1\u7801\u6ce8\u518c\u548c\u767b\u5f55\u4ed6\u4eec\u7684 Logto \u8d26\u6237\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"set-up-in-vonage",children:"\u5728 Vonage \u4e2d\u8bbe\u7f6e"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u8fd9\u4e9b\u6b65\u9aa4\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u4f7f\u7528\u6b64\u8fde\u63a5\u5668\uff0c\u4f60\u9700\u8981\u5728 Vonage ",(0,t.jsx)(n.a,{href:"https://developer.vonage.com/en/account/guides/dashboard-management#create-and-configure-a-vonage-account",children:"\u6ce8\u518c\u4e00\u4e2a\u8d26\u6237"}),"\u3002\u8fd9\u5c06\u4e3a\u4f60\u63d0\u4f9b\u4e00\u4e2a API key \u548c secret\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u901a\u8fc7\u6b64\u8fde\u63a5\u5668\u8bbf\u95ee API\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u65e6\u4f60\u6709\u4e86\u8d26\u6237\uff0c\u4f60\u53ef\u4ee5\u5728 Vonage API Dashboard \u7684\u9876\u90e8\u627e\u5230\u4f60\u7684 API key \u548c API secret\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u80fd\u8fd8\u9700\u8981 ",(0,t.jsx)(n.a,{href:"https://developer.vonage.com/en/numbers/guides/number-management#rent-a-virtual-number",children:"\u79df\u7528\u4e00\u4e2a\u865a\u62df\u53f7\u7801"})," \u6765\u53d1\u9001\u77ed\u4fe1\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"https://developer.vonage.com/en/messaging/sms/overview",children:"Vonage SMS API"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"set-up-in-logto",children:"\u5728 Logto \u4e2d\u8bbe\u7f6e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"API Key"}),"\uff1a\u4f60\u7684 Vonage API key\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"API Secret"}),"\uff1a\u4f60\u7684 Vonage API secret\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Brand Name"}),"\uff1a\u4f60\u60f3\u7528\u6765\u53d1\u9001\u77ed\u4fe1\u7684\u54c1\u724c\u540d\u79f0\uff0c\u8fd9\u4e5f\u79f0\u4e3a ",(0,t.jsx)(n.code,{children:"from"})," \u5b57\u6bb5\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1 ",(0,t.jsx)(n.a,{href:"https://developer.vonage.com/en/messaging/sms/guides/custom-sender-id",children:"Sender Identity"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Templates"}),"\uff1a\u4f60\u60f3\u7528\u6765\u53d1\u9001\u77ed\u4fe1\u7684\u6a21\u677f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u6a21\u677f\u6216\u6839\u636e\u9700\u8981\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var o=s(58101);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);