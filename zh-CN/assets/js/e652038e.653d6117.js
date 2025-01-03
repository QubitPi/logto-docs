"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2265],{35644:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"customization/bring-your-ui/README","title":"\u81ea\u5b9a\u4e49\u4f60\u7684 UI","description":"\u9664\u4e86\u9884\u6784\u5efa\u7684 UI \u81ea\u5b9a\u4e49\u9009\u9879\u5916\uff0cLogto \u8fd8\u5141\u8bb8\u4f60\u81ea\u5b9a\u4e49 UI\uff0c\u4ee5\u5b8c\u5168\u66ff\u6362\u5185\u7f6e\u7684\u767b\u5f55\u4f53\u9a8c\u754c\u9762\u3002\u6b64\u529f\u80fd\u4f7f\u4f60\u53ef\u4ee5\u4e0a\u4f20\u5305\u542b\u81ea\u5b9a\u4e49 UI \u8d44\u6e90\uff08HTML\u3001CSS\u3001JavaScript\u3001\u56fe\u50cf\u7b49\uff09\u7684 zip \u6587\u4ef6\uff0c\u5c06\u5176\u6258\u7ba1\u5728 Logto Cloud \u670d\u52a1\u5668\u4e0a\uff0c\u5e76\u5c06\u5176\u7528\u4f5c\u79df\u6237\u7528\u6237\u7684\u767b\u5f55\u4f53\u9a8c\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/customization/bring-your-ui/README.mdx","sourceDirName":"customization/bring-your-ui","slug":"/customization/bring-your-ui/","permalink":"/zh-CN/customization/bring-your-ui/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/customization/bring-your-ui/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u81ea\u5b9a\u4e49 CSS","permalink":"/zh-CN/customization/custom-css"},"next":{"title":"\u5728\u672c\u5730\u8c03\u8bd5\u548c\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49 UI","permalink":"/zh-CN/customization/bring-your-ui/debug-and-test-your-custom-ui-locally"}}');var t=n(25105),s=n(79621);const r={sidebar_position:3},l="\u81ea\u5b9a\u4e49\u4f60\u7684 UI",c={},d=[{value:"\u5728 Logto \u63a7\u5236\u53f0\u4e2d\u63a2\u7d22\u81ea\u5b9a\u4e49 UI \u529f\u80fd",id:"explore-the-custom-ui-feature-in-logto-console",level:2},{value:"\u4ece\u5b98\u65b9\u9879\u76ee\u5f00\u59cb",id:"get-started-with-official-project",level:3},{value:"\u81ea\u5b9a\u4e49 UI \u8d44\u6e90\u8981\u6c42",id:"custom-ui-assets-requirements",level:3},{value:"\u4e0a\u4f20\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u8d44\u6e90",id:"upload-your-custom-ui-assets",level:3},{value:"\u5f00\u53d1\u4f60\u7684\u81ea\u5b9a\u4e49 UI",id:"develop-your-custom-ui",level:2},{value:"\u4e0e\u4f53\u9a8c API \u4ea4\u4e92",id:"interact-with-experience-api",level:3},{value:"\u793a\u4f8b\u9879\u76ee",id:"sample-projects",level:3},{value:"\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5",id:"local-development-and-debugging",level:3},{value:"\u4f7f\u7528 CLI \u4e0a\u4f20\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u8d44\u6e90",id:"upload-your-custom-ui-assets-using-the-cli",level:2},{value:"\u6062\u590d\u5230 Logto \u5185\u7f6e\u767b\u5f55\u4f53\u9a8c",id:"restore-to-logto-built-in-sign-in-experience",level:2},{value:"\u76f8\u5173\u8d44\u6e90",id:"related-resources",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:n,Url:o}=i;return n||h("CloudLink",!0),o||h("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"\u81ea\u5b9a\u4e49\u4f60\u7684-ui",children:"\u81ea\u5b9a\u4e49\u4f60\u7684 UI"})}),"\n",(0,t.jsxs)(i.p,{children:["\u9664\u4e86\u9884\u6784\u5efa\u7684 UI \u81ea\u5b9a\u4e49\u9009\u9879\u5916\uff0cLogto \u8fd8\u5141\u8bb8\u4f60\u81ea\u5b9a\u4e49 UI\uff0c\u4ee5\u5b8c\u5168\u66ff\u6362\u5185\u7f6e\u7684\u767b\u5f55\u4f53\u9a8c\u754c\u9762\u3002\u6b64\u529f\u80fd\u4f7f\u4f60\u53ef\u4ee5\u4e0a\u4f20\u5305\u542b\u81ea\u5b9a\u4e49 UI \u8d44\u6e90\uff08HTML\u3001CSS\u3001JavaScript\u3001\u56fe\u50cf\u7b49\uff09\u7684 zip \u6587\u4ef6\uff0c\u5c06\u5176\u6258\u7ba1\u5728 ",(0,t.jsx)(i.a,{href:"https://cloud.logto.io",children:"Logto Cloud"})," \u670d\u52a1\u5668\u4e0a\uff0c\u5e76\u5c06\u5176\u7528\u4f5c\u79df\u6237\u7528\u6237\u7684",(0,t.jsx)(i.a,{href:"/end-user-flows#authentication-flows",children:"\u767b\u5f55\u4f53\u9a8c"}),"\u3002"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"\u6b64\u529f\u80fd\u8981\u6c42\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u517c\u5bb9\u5355\u9875\u5e94\u7528\u7a0b\u5e8f (SPA)\uff0c\u5e76\u5efa\u8bae\u59cb\u7ec8\u4f7f\u7528\u751f\u4ea7\u6784\u5efa\u4ee5\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002"})}),"\n",(0,t.jsx)(i.h2,{id:"explore-the-custom-ui-feature-in-logto-console",children:"\u5728 Logto \u63a7\u5236\u53f0\u4e2d\u63a2\u7d22\u81ea\u5b9a\u4e49 UI \u529f\u80fd"}),"\n",(0,t.jsx)(i.h3,{id:"get-started-with-official-project",children:"\u4ece\u5b98\u65b9\u9879\u76ee\u5f00\u59cb"}),"\n",(0,t.jsxs)(i.p,{children:["\u542f\u52a8\u81ea\u5b9a\u4e49\u767b\u5f55 UI \u7684\u6700\u5feb\u65b9\u6cd5\u662f\u514b\u9686 ",(0,t.jsx)(i.a,{href:"https://github.com/logto-io/logto/tree/master/packages/experience",children:"Logto \u4f53\u9a8c\u9879\u76ee"}),"\u3002\u8fd9\u662f\u5185\u7f6e\u7684 Logto \u767b\u5f55\u4f53\u9a8c UI\uff0c\u6db5\u76d6\u4e86\u6240\u6709\u529f\u80fd\u548c Logto \u7684\u6700\u4f73\u5b9e\u8df5\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u68c0\u51fa\u4ee3\u7801\u540e\uff0c\u53ea\u9700\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u6784\u5efa\u9879\u76ee\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"pnpm install && pnpm build\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["\u6574\u4e2a Logto \u9879\u76ee\u662f\u4e00\u4e2a ",(0,t.jsx)(i.a,{href:"https://pnpm.io/workspaces",children:"pnpm monorepo"}),"\uff0c\u5982\u679c\u4f60\u60f3\u5355\u72ec\u8fd0\u884c\u4f53\u9a8c\u5305\uff08\u4e0d\u4f7f\u7528 pnpm\uff09\uff0c\u8bf7\u5c06 package.json \u4e2d\u7684 ",(0,t.jsx)(i.code,{children:"workspace:"})," ",(0,t.jsxs)(i.em,{children:["\u4f9d\u8d56\u9879\u66ff\u6362\u4e3a\u7279\u5b9a\u7248\u672c\u53f7\uff08\u5982 ",(0,t.jsx)(i.code,{children:"^1.0.0"}),"\uff09\u3002"]})]})}),"\n",(0,t.jsxs)(i.p,{children:["\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u4f60\u5c06\u5728 ",(0,t.jsx)(i.code,{children:"dist"})," \u76ee\u5f55\u4e2d\u627e\u5230\u6240\u6709\u7f16\u8bd1\u7684\u8d44\u6e90\u3002\u7136\u540e\u521b\u5efa ",(0,t.jsx)(i.code,{children:"dist"})," \u76ee\u5f55\u7684 ZIP \u538b\u7f29\u5305 - \u8be5\u538b\u7f29\u5305\u5c06\u5728\u7a0d\u540e\u4e0a\u4f20\u5230 Logto Cloud\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"custom-ui-assets-requirements",children:"\u81ea\u5b9a\u4e49 UI \u8d44\u6e90\u8981\u6c42"}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u4e0a\u4f20\u81ea\u5b9a\u4e49 UI \u8d44\u6e90\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5b83\u4eec\u7b26\u5408\u4ee5\u4e0b\u8981\u6c42\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u4e0a\u4f20\u7684\u8d44\u6e90\u5e94\u6253\u5305\u4e3a\u4e00\u4e2a zip \u6587\u4ef6\u3002"}),"\n",(0,t.jsxs)(i.li,{children:["zip \u6587\u4ef6\u5e94\u5728\u6839\u76ee\u5f55\u4e2d\u5305\u542b\u4e00\u4e2a ",(0,t.jsx)(i.code,{children:"index.html"})," \u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(i.li,{children:"zip \u6587\u4ef6\u5927\u5c0f\u4e0d\u5e94\u8d85\u8fc7 20MB\u3002"}),"\n",(0,t.jsx)(i.li,{children:"zip \u6587\u4ef6\u4e2d\u4e0d\u5e94\u5305\u542b\u4efb\u4f55\u8d85\u8fc7 10MB \u7684\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(i.li,{children:"zip \u6587\u4ef6\u4e2d\u603b\u6587\u4ef6\u6570\u4e0d\u5e94\u8d85\u8fc7 200 \u4e2a\u3002"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"upload-your-custom-ui-assets",children:"\u4e0a\u4f20\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u8d44\u6e90"}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u6b64\u529f\u80fd\u65f6\u8bf7\u8c28\u614e\uff0c\u56e0\u4e3a\u5b83\u4f1a\u7acb\u5373\u5f71\u54cd\u7528\u6237\u7684\u767b\u5f55\u4f53\u9a8c\u3002"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\u5bfc\u822a\u5230 ",(0,t.jsx)(n,{to:"/sign-in-experience/branding",children:"\u63a7\u5236\u53f0 > \u767b\u5f55\u4f53\u9a8c > \u54c1\u724c > \u81ea\u5b9a\u4e49 UI"}),"\u3002"]}),"\n",(0,t.jsx)(i.li,{children:"\u70b9\u51fb\u9009\u62e9\u6216\u62d6\u653e\u4f60\u5728\u4e0a\u4e00\u6b65\u521b\u5efa\u7684 zip \u6587\u4ef6\uff0c\u4e0a\u4f20\u8fc7\u7a0b\u5c06\u81ea\u52a8\u5f00\u59cb\u3002"}),"\n",(0,t.jsx)(i.li,{children:"\u4e0a\u4f20\u5b8c\u6210\u540e\uff0c\u4fdd\u5b58\u66f4\u6539\uff0c\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u5c06\u7acb\u5373\u751f\u6548\u3002"}),"\n",(0,t.jsxs)(i.li,{children:["\u4f7f\u7528\u81ea\u5b9a\u4e49\u767b\u5f55 UI \u65f6\uff0c\u201c\u767b\u5f55\u9884\u89c8\u201d\u7a97\u53e3\u5c06\u88ab\u7981\u7528\u3002\u4f46\u662f\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u70b9\u51fb\u201c",(0,t.jsx)(i.a,{href:"/customization/live-preview",children:"\u5b9e\u65f6\u9884\u89c8"}),"\u201d\u6309\u94ae\uff0c\u5728\u65b0\u6253\u5f00\u7684\u6d4f\u89c8\u5668\u6807\u7b7e\u9875\u4e2d\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49\u767b\u5f55\u9875\u9762\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"develop-your-custom-ui",children:"\u5f00\u53d1\u4f60\u7684\u81ea\u5b9a\u4e49 UI"}),"\n",(0,t.jsx)(i.h3,{id:"interact-with-experience-api",children:"\u4e0e\u4f53\u9a8c API \u4ea4\u4e92"}),"\n",(0,t.jsxs)(i.p,{children:["\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u9700\u8981\u4e0e ",(0,t.jsx)(i.a,{href:"https://openapi.logto.io/group/endpoint-experience",children:"\u4f53\u9a8c API"})," \u4ea4\u4e92\uff0c\u4ee5\u6267\u884c\u5404\u79cd\u64cd\u4f5c\uff0c\u5982\u767b\u5f55\u3001\u6ce8\u518c\u3001\u91cd\u7f6e\u5bc6\u7801\u3001\u7ed1\u5b9a\u793e\u4ea4\u8d26\u6237\u3001\u542f\u7528 MFA \u7b49\u3002\u4e3a\u4e86\u66f4\u597d\u5730\u7406\u89e3\u7528\u6237\u6d41\u7a0b\u548c\u5b9e\u73b0\u7ec6\u8282\uff0c\u6211\u4eec\u5efa\u8bae\u67e5\u770b\u6211\u4eec\u7684 ",(0,t.jsx)(i.a,{href:"https://github.com/logto-io/rfcs/blob/master/draft/0004-experience-api.md",children:"\u4f53\u9a8c API \u8bbe\u8ba1 RFC"}),"\uff0c\u5176\u4e2d\u63d0\u4f9b\u4e86\u5168\u9762\u7684\u6280\u672f\u89c4\u8303\u548c\u793a\u4f8b\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["\u4f60\u8fd8\u9700\u8981\u901a\u8fc7 ",(0,t.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-getsigninexperienceconfig",children:"\u767b\u5f55\u4f53\u9a8c API \u7aef\u70b9"})," \u8bbf\u95ee\u5176\u4ed6\u767b\u5f55\u4f53\u9a8c\u914d\u7f6e\uff0c\u5982\u54c1\u724c\u989c\u8272\u3001\u516c\u53f8\u6807\u5fd7\u3001favicon\u3001\u5bc6\u7801\u7b56\u7565\u3001\u672c\u5730\u5316\u8bed\u8a00\u77ed\u8bed\uff0c\u751a\u81f3\u81ea\u5b9a\u4e49 CSS\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"sample-projects",children:"\u793a\u4f8b\u9879\u76ee"}),"\n",(0,t.jsxs)(i.p,{children:["\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u793a\u4f8b\u9879\u76ee\uff0c\u5e2e\u52a9\u4f60\u5feb\u901f\u7406\u89e3\u548c\u5f00\u59cb\u5b9e\u73b0\u81ea\u5b9a\u4e49 UI\u3002\u8bf7\u67e5\u770b ",(0,t.jsx)(i.a,{href:"https://github.com/logto-io/experience-samples",children:"Logto \u4f53\u9a8c\u9879\u76ee"})," GitHub \u4ed3\u5e93\u4ee5\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u6b64\u5916\uff0c\u6211\u4eec\u5c06\u7ee7\u7eed\u52aa\u529b\u63d0\u4f9b\u66f4\u591a\u7b80\u5316\u548c\u57fa\u4e8e\u573a\u666f\u7684\u793a\u4f8b\u9879\u76ee\uff0c\u4ee5\u6db5\u76d6\u6700\u5e38\u89c1\u7684\u7528\u4f8b\u3002\u8bf7\u5173\u6ce8\u6211\u4eec\u7684\u672a\u6765\u66f4\u65b0\uff01"}),"\n",(0,t.jsx)(i.h3,{id:"local-development-and-debugging",children:"\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5"}),"\n",(0,t.jsx)(i.p,{children:"\u5bf9\u4e8e\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86 Logto Tunnel CLI \u5de5\u5177\u6765\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u5c06\u4f53\u9a8c API \u8bf7\u6c42\u4ece\u672c\u5730\u673a\u5668\u4ee3\u7406\u5230 Logto Cloud \u7aef\u70b9\u3002"}),"\n",(0,t.jsx)(i.li,{children:"\u5728\u672c\u5730\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u5b9e\u73b0\u3002"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u8fd9\u5141\u8bb8\u7528\u6237\u5728\u4e0a\u4f20\u5230 Logto Cloud \u4e4b\u524d\u5728\u672c\u5730\u6d4b\u8bd5\u548c\u8c03\u8bd5\u81ea\u5b9a\u4e49 UI\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u8bf7\u53c2\u8003 ",(0,t.jsx)(i.a,{href:"/customization/bring-your-ui/debug-and-test-your-custom-ui-locally/",children:"\u5728\u672c\u5730\u8c03\u8bd5\u548c\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49 UI"})," \u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"upload-your-custom-ui-assets-using-the-cli",children:"\u4f7f\u7528 CLI \u4e0a\u4f20\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u8d44\u6e90"}),"\n",(0,t.jsx)(i.p,{children:"\u9664\u4e86\u901a\u8fc7\u63a7\u5236\u53f0\u4e0a\u4f20\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 Logto CLI \u4e0a\u4f20\u81ea\u5b9a\u4e49 UI \u8d44\u6e90\u3002\u8fd9\u5bf9\u4e8e\u81ea\u52a8\u5316\u90e8\u7f72\u5de5\u4f5c\u6d41\u7a0b\u7279\u522b\u6709\u7528\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u8bf7\u53c2\u8003 ",(0,t.jsx)(i.a,{href:"/customization/bring-your-ui/upload-custom-ui-assets-using-cli/",children:"\u4f7f\u7528 CLI \u4e0a\u4f20\u81ea\u5b9a\u4e49 UI \u8d44\u6e90"})," \u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"restore-to-logto-built-in-sign-in-experience",children:"\u6062\u590d\u5230 Logto \u5185\u7f6e\u767b\u5f55\u4f53\u9a8c"}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u4f60\u5e0c\u671b\u6062\u590d\u5230 Logto \u7684\u5185\u7f6e\u767b\u5f55\u4f53\u9a8c\uff0c\u53ea\u9700\u70b9\u51fb\u81ea\u5b9a\u4e49 UI \u5361\u4e0a\u7684\u5220\u9664\u6309\u94ae\u3002\u4fdd\u5b58\u66f4\u6539\u540e\uff0c\u767b\u5f55\u4f53\u9a8c UI \u5c06\u6062\u590d\u4e3a Logto \u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"related-resources",children:"\u76f8\u5173\u8d44\u6e90"}),"\n",(0,t.jsx)(o,{href:"https://github.com/logto-io/rfcs/blob/master/draft/0004-experience-api.md#2-sign-in-with-username--password-and-fulfill-email",children:(0,t.jsx)(i.p,{children:"RFCS: \u4f53\u9a8c API"})}),"\n",(0,t.jsx)(o,{href:"https://github.com/logto-io/experience-samples",children:"\u4f53\u9a8c\u793a\u4f8b"}),"\n",(0,t.jsx)(o,{href:"https://blog.logto.io/bring-your-own-ui",children:"\u5c06\u81ea\u5b9a\u4e49\u767b\u5f55 UI \u5e26\u5230 Logto Cloud"})]})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function h(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var o=n(58101);const t={},s=o.createContext(t);function r(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);