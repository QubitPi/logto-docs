"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[35542],{91023:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"developers/signing-keys","title":"\u7b7e\u540d\u5bc6\u94a5","description":"Logto OIDC \u7b7e\u540d\u5bc6\u94a5\uff0c\u4e5f\u79f0\u4e3a \\"OIDC \u79c1\u94a5\\" \u548c \\"OIDC cookie \u5bc6\u94a5\\"\uff0c\u662f\u7528\u4e8e\u5728 Logto \u767b\u5f55\u4f1a\u8bdd\u4e2d\u7b7e\u7f72 JWT \u4ee4\u724c\uff08\u8bbf\u95ee\u4ee4\u724c \u548c ID \u4ee4\u724c\uff09\u548c\u6d4f\u89c8\u5668 cookie \u7684\u7b7e\u540d\u5bc6\u94a5\u3002\u8fd9\u4e9b\u7b7e\u540d\u5bc6\u94a5\u662f\u5728\u521d\u59cb\u5316 Logto \u6570\u636e\u5e93\u65f6\u751f\u6210\u7684\uff08\u5f00\u6e90\uff09\u6216\u521b\u5efa\u65b0\u79df\u6237\u65f6\u751f\u6210\u7684\uff08\u4e91\u7aef\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 CLI\uff08\u5f00\u6e90\uff09\u3001Management API \u6216\u63a7\u5236\u53f0 UI \u8fdb\u884c\u7ba1\u7406\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/signing-keys.mdx","sourceDirName":"developers","slug":"/developers/signing-keys","permalink":"/zh-CN/developers/signing-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/signing-keys.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"signing-keys","title":"\u7b7e\u540d\u5bc6\u94a5","sidebar_label":"\u7b7e\u540d\u5bc6\u94a5","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u7528\u6237\u6a21\u62df","permalink":"/zh-CN/developers/user-impersonation"},"next":{"title":"Webhook","permalink":"/zh-CN/developers/webhooks/"}}');var i=o(25105),t=o(79621);const r={id:"signing-keys",title:"\u7b7e\u540d\u5bc6\u94a5",sidebar_label:"\u7b7e\u540d\u5bc6\u94a5",sidebar_position:4},l="\u7b7e\u540d\u5bc6\u94a5",d={},c=[{value:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"how-it-works",level:2},{value:"\u4ece\u63a7\u5236\u53f0 UI \u65cb\u8f6c\u7b7e\u540d\u5bc6\u94a5",id:"rotate-signing-keys-from-console-ui",level:2},{value:"\u76f8\u5173\u8d44\u6e90",id:"related-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{CloudLink:o,Url:s}=n;return o||x("CloudLink",!0),s||x("Url",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u7b7e\u540d\u5bc6\u94a5",children:"\u7b7e\u540d\u5bc6\u94a5"})}),"\n",(0,i.jsxs)(n.p,{children:["Logto ",(0,i.jsx)(n.a,{href:"https://auth.wiki/signing-key",children:"OIDC \u7b7e\u540d\u5bc6\u94a5"}),'\uff0c\u4e5f\u79f0\u4e3a "OIDC \u79c1\u94a5" \u548c "OIDC cookie \u5bc6\u94a5"\uff0c\u662f\u7528\u4e8e\u5728 Logto ',(0,i.jsx)(n.a,{href:"/end-user-flows/sign-out#sign-in-session",children:"\u767b\u5f55\u4f1a\u8bdd"}),"\u4e2d\u7b7e\u7f72 JWT \u4ee4\u724c\uff08",(0,i.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"\u8bbf\u95ee\u4ee4\u724c"})," \u548c ",(0,i.jsx)(n.a,{href:"https://auth.wiki/id-token",children:"ID \u4ee4\u724c"}),"\uff09\u548c\u6d4f\u89c8\u5668 cookie \u7684\u7b7e\u540d\u5bc6\u94a5\u3002\u8fd9\u4e9b\u7b7e\u540d\u5bc6\u94a5\u662f\u5728\u521d\u59cb\u5316 Logto \u6570\u636e\u5e93\u65f6\u751f\u6210\u7684\uff08",(0,i.jsx)(n.a,{href:"/logto-oss",children:"\u5f00\u6e90"}),"\uff09\u6216\u521b\u5efa\u65b0\u79df\u6237\u65f6\u751f\u6210\u7684\uff08",(0,i.jsx)(n.a,{href:"/logto-cloud",children:"\u4e91\u7aef"}),"\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.a,{href:"/logto-oss/using-cli",children:"CLI"}),"\uff08\u5f00\u6e90\uff09\u3001Management API \u6216\u63a7\u5236\u53f0 UI \u8fdb\u884c\u7ba1\u7406\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cLogto \u4f7f\u7528\u692d\u5706\u66f2\u7ebf (EC) \u7b97\u6cd5\u751f\u6210\u6570\u5b57\u7b7e\u540d\u3002\u7136\u800c\uff0c\u8003\u8651\u5230\u7528\u6237\u7ecf\u5e38\u9700\u8981\u9a8c\u8bc1 JWT \u7b7e\u540d\uff0c\u800c\u8bb8\u591a\u65e7\u5de5\u5177\u4e0d\u652f\u6301 EC \u7b97\u6cd5\uff08\u4ec5\u652f\u6301 RSA\uff09\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u65cb\u8f6c\u79c1\u94a5\u7684\u529f\u80fd\uff0c\u5e76\u5141\u8bb8\u7528\u6237\u9009\u62e9\u7b7e\u540d\u7b97\u6cd5\uff08\u5305\u62ec RSA \u548c EC\uff09\u3002\u8fd9\u786e\u4fdd\u4e86\u4e0e\u4f7f\u7528\u8fc7\u65f6\u7b7e\u540d\u9a8c\u8bc1\u5de5\u5177\u7684\u670d\u52a1\u7684\u517c\u5bb9\u6027\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\u7406\u8bba\u4e0a\uff0c\u7b7e\u540d\u5bc6\u94a5\u4e0d\u5e94\u6cc4\u9732\u4e14\u6ca1\u6709\u8fc7\u671f\u65f6\u95f4\uff0c\u8fd9\u610f\u5473\u7740\u4e0d\u9700\u8981\u65cb\u8f6c\u5b83\u4eec\u3002\u7136\u800c\uff0c\u5b9a\u671f\u5728\u4e00\u5b9a\u65f6\u95f4\u540e\u65cb\u8f6c\u7b7e\u540d\u5bc6\u94a5\u53ef\u4ee5\u589e\u5f3a\u5b89\u5168\u6027\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OIDC \u79c1\u94a5"}),"\n\u5728\u521d\u59cb\u5316 Logto \u5b9e\u4f8b\u65f6\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u5bf9\u516c\u94a5\u548c\u79c1\u94a5\uff0c\u5e76\u5728\u5e95\u5c42 OIDC \u63d0\u4f9b\u5546\u4e2d\u6ce8\u518c\u3002\u56e0\u6b64\uff0c\u5f53 Logto \u53d1\u5e03\u65b0\u7684 JWT \u4ee4\u724c\uff08\u8bbf\u95ee\u4ee4\u724c\u6216 ID \u4ee4\u724c\uff09\u65f6\uff0c\u4ee4\u724c\u4f1a\u7528\u79c1\u94a5\u7b7e\u540d\u3002\u540c\u65f6\uff0c\u4efb\u4f55\u63a5\u6536\u5230 JWT \u4ee4\u724c\u7684\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u90fd\u53ef\u4ee5\u4f7f\u7528\u914d\u5bf9\u7684\u516c\u94a5\u9a8c\u8bc1\u4ee4\u724c\u7b7e\u540d\uff0c\u4ee5\u786e\u4fdd\u4ee4\u724c\u672a\u88ab\u4efb\u4f55\u7b2c\u4e09\u65b9\u7be1\u6539\u3002\u79c1\u94a5\u5728 Logto \u670d\u52a1\u5668\u4e0a\u53d7\u5230\u4fdd\u62a4\u3002\u7136\u800c\uff0c\u6b63\u5982\u5176\u540d\u79f0\u6240\u793a\uff0c\u516c\u94a5\u662f\u516c\u5f00\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7 OIDC \u7aef\u70b9\u7684 ",(0,i.jsx)(n.code,{children:"/oidc/jwks"})," \u63a5\u53e3\u8bbf\u95ee\u3002\u751f\u6210\u79c1\u94a5\u65f6\u53ef\u4ee5\u6307\u5b9a\u7b7e\u540d\u5bc6\u94a5\u7b97\u6cd5\uff0cLogto \u9ed8\u8ba4\u4f7f\u7528 EC\uff08\u692d\u5706\u66f2\u7ebf\uff09\u7b97\u6cd5\u3002\u7ba1\u7406\u5458\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u65cb\u8f6c\u79c1\u94a5\u5c06\u9ed8\u8ba4\u7b97\u6cd5\u66f4\u6539\u4e3a RSA\uff08Rivest-Shamir-Adleman\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OIDC cookie \u5bc6\u94a5"}),'\n\u5f53\u7528\u6237\u542f\u52a8\u767b\u5f55\u6216\u6ce8\u518c\u6d41\u7a0b\u65f6\uff0c\u670d\u52a1\u5668\u4e0a\u4f1a\u521b\u5efa\u4e00\u4e2a "OIDC \u4f1a\u8bdd"\uff0c\u4ee5\u53ca\u4e00\u7ec4\u6d4f\u89c8\u5668 cookie\u3002\u901a\u8fc7\u8fd9\u4e9b cookie\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u8bf7\u6c42 Logto Experience API \u4ee3\u8868\u7528\u6237\u6267\u884c\u4e00\u7cfb\u5217\u4ea4\u4e92\uff0c\u4f8b\u5982\u767b\u5f55\u3001\u6ce8\u518c\u548c\u91cd\u7f6e\u5bc6\u7801\u3002\u7136\u800c\uff0c\u4e0e JWT \u4ee4\u724c\u4e0d\u540c\uff0ccookie \u4ec5\u7531 Logto OIDC \u670d\u52a1\u672c\u8eab\u7b7e\u540d\u548c\u9a8c\u8bc1\uff0c\u4e0d\u9700\u8981\u975e\u5bf9\u79f0\u52a0\u5bc6\u63aa\u65bd\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u6ca1\u6709\u7528\u4e8e cookie \u7b7e\u540d\u5bc6\u94a5\u7684\u914d\u5bf9\u516c\u94a5\uff0c\u4e5f\u6ca1\u6709\u975e\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u3002']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"rotate-signing-keys-from-console-ui",children:"\u4ece\u63a7\u5236\u53f0 UI \u65cb\u8f6c\u7b7e\u540d\u5bc6\u94a5"}),"\n",(0,i.jsx)(n.p,{children:'Logto \u5f15\u5165\u4e86 "\u7b7e\u540d\u5bc6\u94a5\u65cb\u8f6c" \u529f\u80fd\uff0c\u5141\u8bb8\u4f60\u5728\u79df\u6237\u4e2d\u521b\u5efa\u65b0\u7684 OIDC \u79c1\u94a5\u548c cookie \u5bc6\u94a5\u3002'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5bfc\u822a\u5230 ",(0,i.jsx)(o,{to:"/signing-keys",children:"\u63a7\u5236\u53f0 > \u7b7e\u540d\u5bc6\u94a5"}),"\u3002\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u7ba1\u7406 OIDC \u79c1\u94a5\u548c OIDC cookie \u5bc6\u94a5\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'\u8981\u65cb\u8f6c\u7b7e\u540d\u5bc6\u94a5\uff0c\u70b9\u51fb "\u65cb\u8f6c\u79c1\u94a5" \u6216 "\u65cb\u8f6c cookie \u5bc6\u94a5" \u6309\u94ae\u3002\u5728\u65cb\u8f6c\u79c1\u94a5\u65f6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u66f4\u6539\u7b7e\u540d\u7b97\u6cd5\u3002'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u5217\u51fa\u6240\u6709\u6b63\u5728\u4f7f\u7528\u7684\u7b7e\u540d\u5bc6\u94a5\u7684\u8868\u683c\u3002\u6ce8\u610f\uff1a\u4f60\u53ef\u4ee5\u5220\u9664\u4ee5\u524d\u7684\u5bc6\u94a5\uff0c\u4f46\u4e0d\u80fd\u5220\u9664\u5f53\u524d\u7684\u5bc6\u94a5\u3002"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u72b6\u6001"}),(0,i.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5f53\u524d"}),(0,i.jsx)(n.td,{children:"\u8868\u793a\u6b64\u5bc6\u94a5\u5f53\u524d\u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u548c API \u4e2d\u5904\u4e8e\u6d3b\u52a8\u4f7f\u7528\u72b6\u6001\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u4ee5\u524d"}),(0,i.jsx)(n.td,{children:"\u6307\u7684\u662f\u4e00\u4e2a\u4ee5\u524d\u4f7f\u7528\u8fc7\u4f46\u5df2\u88ab\u65cb\u8f6c\u51fa\u7684\u5bc6\u94a5\u3002\u4f7f\u7528\u6b64\u7b7e\u540d\u5bc6\u94a5\u7684\u73b0\u6709\u4ee4\u724c\u4ecd\u7136\u6709\u6548\u3002"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8bf7\u8bb0\u4f4f\uff0c\u65cb\u8f6c\u6d89\u53ca\u4ee5\u4e0b\u4e09\u4e2a\u64cd\u4f5c\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u521b\u5efa\u65b0\u7684\u7b7e\u540d\u5bc6\u94a5"}),"\uff1a\u8fd9\u5c06\u8981\u6c42\u4f60\u7684\u6240\u6709 ",(0,i.jsx)(n.strong,{children:"\u5e94\u7528\u7a0b\u5e8f"})," \u548c ",(0,i.jsx)(n.strong,{children:"API"})," \u91c7\u7528\u65b0\u7684\u7b7e\u540d\u5bc6\u94a5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u65cb\u8f6c\u5f53\u524d\u5bc6\u94a5"}),'\uff1a\u73b0\u6709\u5bc6\u94a5\u5c06\u5728\u65cb\u8f6c\u540e\u88ab\u6307\u5b9a\u4e3a "\u4ee5\u524d"\uff0c\u5e76\u4e14\u4e0d\u4f1a\u88ab\u65b0\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u548c API \u4f7f\u7528\u3002\u7136\u800c\uff0c\u7528\u6b64\u5bc6\u94a5\u7b7e\u540d\u7684\u4ee4\u724c\u4ecd\u7136\u6709\u6548\u3002']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u79fb\u9664\u4ee5\u524d\u7684\u5bc6\u94a5"}),'\uff1a\u6807\u8bb0\u4e3a "\u4ee5\u524d" \u7684\u5bc6\u94a5\u5c06\u88ab\u64a4\u9500\u5e76\u4ece\u8868\u4e2d\u79fb\u9664\u3002']}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"\u5207\u52ff\u8fde\u7eed\u65cb\u8f6c\u7b7e\u540d\u5bc6\u94a5\uff08\u4e24\u6b21\u6216\u66f4\u591a\u6b21\uff09\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u4f1a\u4f7f\u6240\u6709\u5df2\u53d1\u884c\u7684\u4ee4\u724c\u5931\u6548\u3002"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e OSS \u7528\u6237\uff0c\u65cb\u8f6c\u7b7e\u540d\u5bc6\u94a5\u540e\uff0c\u9700\u8981\u91cd\u542f Logto \u5b9e\u4f8b\u4ee5\u4f7f\u65b0\u7b7e\u540d\u5bc6\u94a5\u751f\u6548\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e\u4e91\u7aef\u7528\u6237\uff0c\u65b0\u7b7e\u540d\u5bc6\u94a5\u5728\u65cb\u8f6c\u540e\u7acb\u5373\u751f\u6548\uff0c\u4f46\u8bf7\u786e\u4fdd\u4e0d\u8981\u8fde\u7eed\u591a\u6b21\u65cb\u8f6c\u7b7e\u540d\u5bc6\u94a5\u3002"}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"\u76f8\u5173\u8d44\u6e90"}),"\n",(0,i.jsx)(s,{href:"https://blog.logto.io/introduction-to-ec-and-rsa-signing-algorithms-in-jwt",children:(0,i.jsx)(n.p,{children:"JWT \u4e2d\u7684 EC \u548c RSA \u7b7e\u540d\u7b97\u6cd5\u4ecb\u7ecd"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var s=o(58101);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);