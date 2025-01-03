"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99270],{70053:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>o});var t=i(25105),s=i(79621);const o=[];function c(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5bf9 Logto \u8fde\u63a5\u5668 (Connectors) \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u67e5\u770b ",(0,t.jsx)(n.a,{href:"/connectors",children:"\u914d\u7f6e\u8fde\u63a5\u5668"})," \u6307\u5357\u4ee5\u5f00\u59cb\u4e86\u89e3\u3002"]})})}function r(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28980:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"integrations/social/kakao/README","title":"\u8bbe\u7f6e Kakao \u793e\u4ea4\u767b\u5f55","description":"Kakao \u8fde\u63a5\u5668\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u6d01\u7684\u65b9\u5f0f\u6765\u4f7f\u7528 Kakao \u7684 OAuth 2.0 \u8ba4\u8bc1\u7cfb\u7edf\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/social/kakao/README.mdx","sourceDirName":"integrations/social/kakao","slug":"/integrations/kakao","permalink":"/zh-CN/integrations/kakao","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/social/kakao/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/kakao","sidebar_label":"Kakao","sidebar_custom_props":{"description":"Kakao \u662f\u97e9\u56fd\u8457\u540d\u7684\u793e\u4ea4\u7f51\u7edc\u670d\u52a1\u63d0\u4f9b\u5546\u3002"}},"sidebar":"integrationsSidebar","previous":{"title":"Hugging Face","permalink":"/zh-CN/integrations/huggingface"},"next":{"title":"Naver","permalink":"/zh-CN/integrations/naver"}}');var s=i(25105),o=i(79621),c=i(70053);const r={slug:"/integrations/kakao",sidebar_label:"Kakao",sidebar_custom_props:{description:"Kakao \u662f\u97e9\u56fd\u8457\u540d\u7684\u793e\u4ea4\u7f51\u7edc\u670d\u52a1\u63d0\u4f9b\u5546\u3002"}},l="\u8bbe\u7f6e Kakao \u793e\u4ea4\u767b\u5f55",a={},d=[...c.RM,{value:"\u5728 Kakao \u5f00\u53d1\u8005\u63a7\u5236\u53f0\u4e2d\u8bbe\u7f6e\u9879\u76ee",id:"set-up-a-project-in-the-kakao-devlopers-console",level:2},{value:"\u914d\u7f6e Kakao \u767b\u5f55",id:"configure-kakao-login",level:2},{value:"\u6fc0\u6d3b Kakao \u767b\u5f55",id:"activate-kakao-login",level:3},{value:"\u9690\u79c1\u8bbe\u7f6e",id:"privacy-setting",level:3},{value:"\u5b89\u5168\u8bbe\u7f6e\uff08\u53ef\u9009\uff09",id:"security-setting-optional",level:3},{value:"\u914d\u7f6e Logto",id:"configure-logto",level:2},{value:"\u914d\u7f6e\u7c7b\u578b",id:"config-types",level:3},{value:"clientId",id:"clientid",level:4},{value:"clientSecret",id:"clientseceret",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u8bbe\u7f6e-kakao-\u793e\u4ea4\u767b\u5f55",children:"\u8bbe\u7f6e Kakao \u793e\u4ea4\u767b\u5f55"})}),"\n",(0,s.jsx)(n.p,{children:"Kakao \u8fde\u63a5\u5668\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u6d01\u7684\u65b9\u5f0f\u6765\u4f7f\u7528 Kakao \u7684 OAuth 2.0 \u8ba4\u8bc1\u7cfb\u7edf\u3002"}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"set-up-a-project-in-the-kakao-devlopers-console",children:"\u5728 Kakao \u5f00\u53d1\u8005\u63a7\u5236\u53f0\u4e2d\u8bbe\u7f6e\u9879\u76ee"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"https://developers.kakao.com/console/app",children:"Kakao \u5f00\u53d1\u8005\u63a7\u5236\u53f0"})," \u5e76\u4f7f\u7528\u4f60\u7684 Kakao \u8d26\u6237\u767b\u5f55\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:"\u6dfb\u52a0\u5e94\u7528\u7a0b\u5e8f"})," \u6765\u521b\u5efa\u65b0\u9879\u76ee\u6216\u9009\u62e9\u73b0\u6709\u9879\u76ee\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configure-kakao-login",children:"\u914d\u7f6e Kakao \u767b\u5f55"}),"\n",(0,s.jsx)(n.h3,{id:"activate-kakao-login",children:"\u6fc0\u6d3b Kakao \u767b\u5f55"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4ece\u83dc\u5355\u4e2d\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:"\u4ea7\u54c1\u8bbe\u7f6e -> Kakao \u767b\u5f55"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6253\u5f00 ",(0,s.jsx)(n.code,{children:"Kakao \u767b\u5f55\u6fc0\u6d3b"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"Redirect URI"})," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b URL","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (",(0,s.jsx)(n.code,{children:"connector_id"})," \u53ef\u4ee5\u5728 Logto \u7ba1\u7406\u63a7\u5236\u53f0\u8fde\u63a5\u5668\u8be6\u60c5\u9875\u9762\u7684\u9876\u90e8\u680f\u627e\u5230\u3002)"]}),"\n",(0,s.jsxs)(n.li,{children:["\uff08\u8bf7\u5c06 ",(0,s.jsx)(n.code,{children:"YOUR_URL"})," \u66ff\u6362\u4e3a\u4f60\u7684 ",(0,s.jsx)(n.code,{children:"Logto"})," URL\uff0c\u5e76\u6839\u636e\u4f60\u7684\u60c5\u51b5\u9009\u62e9 ",(0,s.jsx)(n.code,{children:"http"})," \u6216 ",(0,s.jsx)(n.code,{children:"https"}),"\u3002\uff09"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"privacy-setting",children:"\u9690\u79c1\u8bbe\u7f6e"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4ece\u83dc\u5355\u4e2d\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:"\u4ea7\u54c1\u8bbe\u7f6e -> Kakao \u767b\u5f55 -> \u540c\u610f\u9879"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06 ",(0,s.jsx)(n.code,{children:"\u6635\u79f0"}),"\u3001",(0,s.jsx)(n.code,{children:"\u5934\u50cf"})," \u548c ",(0,s.jsx)(n.code,{children:"\u90ae\u7bb1"})," \u7684\u72b6\u6001\u66f4\u6539\u4e3a ",(0,s.jsx)(n.strong,{children:"\u5fc5\u9700\u540c\u610f"}),"\uff08\u7531\u4e8e\u9879\u76ee\u8bbe\u7f6e\u7684\u539f\u56e0\uff0c\u4f60\u53ef\u80fd\u65e0\u6cd5\u5c06 ",(0,s.jsx)(n.code,{children:"\u90ae\u7bb1"})," \u66f4\u6539\u4e3a ",(0,s.jsx)(n.strong,{children:"\u5fc5\u9700\u540c\u610f"}),"\u3002\uff09"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"security-setting-optional",children:"\u5b89\u5168\u8bbe\u7f6e\uff08\u53ef\u9009\uff09"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4ece\u83dc\u5355\u4e2d\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:"\u4ea7\u54c1\u8bbe\u7f6e -> Kakao \u767b\u5f55 -> \u5b89\u5168"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u70b9\u51fb ",(0,s.jsx)(n.code,{children:"\u5ba2\u6237\u7aef\u5bc6\u94a5"})," \u4ee5\u751f\u6210\u5bc6\u94a5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5c06 ",(0,s.jsx)(n.code,{children:"\u6fc0\u6d3b\u72b6\u6001"})," \u66f4\u6539\u4e3a\u542f\u7528\u3002\uff08\u5982\u679c\u4f60\u542f\u7528\u4e86\u5b83\uff0c\u5219\u9700\u8981 ",(0,s.jsx)(n.code,{children:"\u5bc6\u94a5"}),"\u3002\uff09"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configure-logto",children:"\u914d\u7f6e Logto"}),"\n",(0,s.jsx)(n.h3,{id:"config-types",children:"\u914d\u7f6e\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u79f0"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientId"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientSecret"}),(0,s.jsx)(n.td,{children:"string?"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"clientId"})," \u662f\u4f60\u9879\u76ee\u7684 ",(0,s.jsx)(n.code,{children:"REST API key"}),"\u3002\n\uff08\u4f60\u53ef\u4ee5\u5728 Kakao \u5f00\u53d1\u8005\u63a7\u5236\u53f0\u7684\u9879\u76ee ",(0,s.jsx)(n.code,{children:"\u6982\u89c8"})," \u4e2d\u627e\u5230\u5b83\u3002\uff09"]}),"\n",(0,s.jsx)(n.h4,{id:"clientseceret",children:"clientSecret"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"clientSecret"})," \u662f\u4f60\u9879\u76ee\u7684 ",(0,s.jsx)(n.code,{children:"Secret Code"}),"\u3002\n\uff08\u8bf7\u67e5\u770b ",(0,s.jsx)(n.a,{href:"#security-setting-optional",children:"\u5b89\u5168\u8bbe\u7f6e\uff08\u53ef\u9009\uff09"}),"\uff09"]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(58101);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);