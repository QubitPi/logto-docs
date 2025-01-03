"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83716],{8951:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>a,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>j});const s=JSON.parse('{"id":"organizations/just-in-time-provisioning","title":"\u5373\u65f6 (Just-in-Time) \u4f9b\u5e94","description":"\u5728 Logto \u4e2d\uff0c\u5373\u65f6 (Just-in-Time, JIT) \u4f9b\u5e94 \u662f\u4e00\u79cd\u5728\u7528\u6237\u9996\u6b21\u767b\u5f55\u7cfb\u7edf\u65f6\u52a8\u6001\u5206\u914d\u7ec4\u7ec7\u6210\u5458\u8d44\u683c\u548c\u89d2\u8272\u7684\u8fc7\u7a0b\u3002\u4e0e\u9884\u5148\u4e3a\u7528\u6237\u9884\u7f6e\u8d26\u6237\u4e0d\u540c\uff0cJIT \u4f9b\u5e94\u5728\u7528\u6237\u8ba4\u8bc1 (Authentication) \u65f6\u52a8\u6001\u914d\u7f6e\u5fc5\u8981\u7684\u7528\u6237\u8d26\u6237\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/organizations/just-in-time-provisioning.mdx","sourceDirName":"organizations","slug":"/organizations/just-in-time-provisioning","permalink":"/zh-CN/organizations/just-in-time-provisioning","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/organizations/just-in-time-provisioning.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u7ba1\u7406\u7ec4\u7ec7 (Organizations)","permalink":"/zh-CN/organizations/organization-management"},"next":{"title":"\u7ec4\u7ec7 (Organizations)","permalink":"/zh-CN/organizations/"}}');var t=e(25105),r=e(79621);const d=e.p+"assets/images/jit-conflict-20c8c47ff22e7c515772821ffeea1c7d.webp",l=e.p+"assets/images/jit-email-95f7b7cc852ed195e3e970376e758b73.webp",o=e.p+"assets/images/jit-sso-5538460b969a9895cd94f89f4235126d.webp",c={sidebar_position:4},h="\u5373\u65f6 (Just-in-Time) \u4f9b\u5e94",a={},j=[{value:"\u5de5\u4f5c\u539f\u7406",id:"how-it-works",level:2},{value:"JIT \u4f9b\u5e94\u7684\u597d\u5904",id:"benefits-of-jit-provisioning",level:3},{value:"JIT \u4e0e\u76ee\u5f55\u540c\u6b65\u7684\u533a\u522b",id:"differences-between-jit-and-directory-sync",level:3},{value:"Logto \u4e2d\u7684\u5373\u65f6\u4f9b\u5e94",id:"just-in-time-provisioning-in-logto",level:2},{value:"\u4f01\u4e1a SSO \u4f9b\u5e94",id:"enterprise-sso-provisioning",level:3},{value:"\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94",id:"email-domain-provisioning",level:3},{value:"\u542f\u7528\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\u65f6\u7684\u7535\u5b50\u90ae\u4ef6\u767b\u5f55\u4f53\u9a8c",id:"email-sign-in-experience-when-email-domain-provisioning-is-enabled",level:4},{value:"\u542f\u7528\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\u65f6\u7684\u793e\u4ea4\u767b\u5f55\u4f53\u9a8c",id:"social-sign-in-experience-when-email-domain-provisioning-is-enabled",level:4},{value:"\u5904\u7406 JIT \u4f9b\u5e94\u65b9\u6cd5\u4e4b\u95f4\u7684\u6f5c\u5728\u51b2\u7a81",id:"handling-the-potential-conflict-between-jit-provisioning-methods",level:3},{value:"\u9ed8\u8ba4\u7ec4\u7ec7\u89d2\u8272",id:"default-organization-roles",level:2},{value:"\u76f8\u5173\u8d44\u6e90",id:"related-resources",level:2}];function x(n){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components},{CloudLink:e,Url:s}=i;return e||p("CloudLink",!0),s||p("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"\u5373\u65f6-just-in-time-\u4f9b\u5e94",children:"\u5373\u65f6 (Just-in-Time) \u4f9b\u5e94"})}),"\n",(0,t.jsxs)(i.p,{children:["\u5728 Logto \u4e2d\uff0c",(0,t.jsx)(i.a,{href:"https://auth.wiki/jit-provisioning",children:"\u5373\u65f6 (Just-in-Time, JIT) \u4f9b\u5e94"})," \u662f\u4e00\u79cd\u5728\u7528\u6237\u9996\u6b21\u767b\u5f55\u7cfb\u7edf\u65f6\u52a8\u6001\u5206\u914d\u7ec4\u7ec7\u6210\u5458\u8d44\u683c\u548c\u89d2\u8272\u7684\u8fc7\u7a0b\u3002\u4e0e\u9884\u5148\u4e3a\u7528\u6237\u9884\u7f6e\u8d26\u6237\u4e0d\u540c\uff0cJIT \u4f9b\u5e94\u5728\u7528\u6237\u8ba4\u8bc1 (Authentication) \u65f6\u52a8\u6001\u914d\u7f6e\u5fc5\u8981\u7684\u7528\u6237\u8d26\u6237\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"how-it-works",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,t.jsx)(i.p,{children:"\u4ee5\u4e0b\u662f JIT \u4f9b\u5e94\u8fc7\u7a0b\u7684\u9ad8\u7ea7\u6982\u8ff0\uff1a"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"\u7528\u6237\u8ba4\u8bc1 (Authentication)"}),"\uff1a\u7528\u6237\u5c1d\u8bd5\u767b\u5f55\u5e94\u7528\u7a0b\u5e8f\u6216\u670d\u52a1\uff0c\u8eab\u4efd\u63d0\u4f9b\u5546 (Logto) \u5bf9\u7528\u6237\u8fdb\u884c\u8ba4\u8bc1 (Authentication)\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"\u8d26\u6237\u767b\u5f55\u6216\u521b\u5efa"}),"\uff1a\u6839\u636e\u7528\u6237\u7684\u72b6\u6001\uff0cLogto \u8981\u4e48\u767b\u5f55\u7528\u6237\uff0c\u8981\u4e48\u521b\u5efa\u65b0\u8d26\u6237\uff0c\u6216\u5c06\u65b0\u8eab\u4efd\u6dfb\u52a0\u5230\u73b0\u6709\u8d26\u6237\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"\u4f9b\u5e94"}),"\uff1a\u5982\u679c\u7528\u6237\u6216\u5176\u8eab\u4efd\u662f\u65b0\u7684\uff0cLogto \u4f1a\u89e6\u53d1\u4f9b\u5e94\u8fc7\u7a0b\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u4ee5\u4e0b\u662f JIT \u4f9b\u5e94\u7684\u8be6\u7ec6\u6d41\u7a0b\u56fe\uff1a"}),"\n",(0,t.jsxs)(i.p,{children:["JIT \u4f9b\u5e94\u662f ",(0,t.jsx)(i.a,{href:"/introduction/plan-your-architecture/b2b",children:"B2B"})," \u548c\u591a\u79df\u6237\u4ea7\u54c1\u7684\u6709\u7528\u529f\u80fd\u3002\u5b83\u4f7f\u79df\u6237\u6210\u5458\u7684\u5165\u9a7b\u8fc7\u7a0b\u987a\u7545\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u884c\u653f\u5e72\u9884\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5df2\u7ecf\u5165\u9a7b\u4e86\u4e00\u5bb6\u516c\u53f8\uff0c\u5e76\u5e0c\u671b\u5176\u5458\u5de5\u5b89\u5168\u5730\u767b\u5f55\u5230\u4f60\u7684\u4ea7\u54c1\u5e76\u4ee5\u6b63\u786e\u7684\u89d2\u8272\u8bbf\u95ee\u7ec4\u7ec7\uff0c\u6709\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u8ba9\u6211\u4eec\u6765\u63a2\u8ba8 Logto \u63d0\u4f9b\u7684\u53ef\u80fd\u89e3\u51b3\u65b9\u6848\u4ee5\u53ca JIT \u5982\u4f55\u63d0\u4f9b\u5e2e\u52a9\u3002"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u573a\u666f"}),(0,t.jsx)(i.th,{children:"\u7528\u6237\u7c7b\u578b"}),(0,t.jsx)(i.th,{children:"\u81ea\u52a8\u5316"}),(0,t.jsx)(i.th,{children:"\u884c\u4e3a"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7ba1\u7406\u5458\u9080\u8bf7"}),(0,t.jsx)(i.td,{children:"\u65b0\u7528\u6237\u548c\u73b0\u6709\u7528\u6237"}),(0,t.jsx)(i.td,{}),(0,t.jsxs)(i.td,{children:["\u7528\u6237\u53ef\u4ee5",(0,t.jsx)(i.a,{href:"/end-user-flows/organization-experience/invite-organization-members",children:"\u6536\u5230\u7535\u5b50\u90ae\u4ef6\u9080\u8bf7"}),"\u52a0\u5165\u7ec4\u7ec7\u3002"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Management API \u7528\u6237\u521b\u5efa\u6216\u5bfc\u5165"}),(0,t.jsx)(i.td,{children:"\u65b0\u7528\u6237\u548c\u73b0\u6709\u7528\u6237"}),(0,t.jsx)(i.td,{}),(0,t.jsxs)(i.td,{children:["\u7528\u6237\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(i.a,{href:"/end-user-flows/sign-up-and-sign-in/disable-user-registration#implement-an-invitation-only-sign-up-flow",children:"\u9884\u521b\u5efa\u7684\u7528\u6237\u8d26\u6237"}),"\u52a0\u5165\u7ec4\u7ec7\u3002"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"SSO \u5373\u65f6\u4f9b\u5e94"}),(0,t.jsx)(i.td,{children:"\u65b0\u7528\u6237\u548c\u73b0\u6709\u7528\u6237"}),(0,t.jsx)(i.td,{children:"\u2705"}),(0,t.jsxs)(i.td,{children:["\u9996\u6b21\u901a\u8fc7 ",(0,t.jsx)(i.a,{href:"/end-user-flows/enterprise-sso",children:"SSO"})," \u767b\u5f55\u7684\u7528\u6237\u53ef\u4ee5\u52a0\u5165\u7ec4\u7ec7\u3002"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7535\u5b50\u90ae\u4ef6\u57df\u5373\u65f6\u4f9b\u5e94"}),(0,t.jsx)(i.td,{children:"\u65b0\u7528\u6237"}),(0,t.jsx)(i.td,{children:"\u2705"}),(0,t.jsx)(i.td,{children:"\u62e5\u6709\u7279\u5b9a\u9a8c\u8bc1\u57df\u7684\u7528\u6237\u9996\u6b21\u767b\u5f55\u65f6\u53ef\u4ee5\u52a0\u5165\u7ec4\u7ec7\u3002"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u76ee\u5f55\u540c\u6b65"}),(0,t.jsx)(i.td,{children:"\u65b0\u7528\u6237\u548c\u73b0\u6709\u7528\u6237"}),(0,t.jsx)(i.td,{children:"\u2705"}),(0,t.jsx)(i.td,{children:"\u4f7f\u7528 IdP \u7684\u76ee\u5f55\u540c\u6b65\u529f\u80fd\u63d0\u524d\u5728\u5e94\u7528\u4e2d\u9884\u7f6e\u7528\u6237\u3002"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["\u76ee\u524d\uff0cLogto \u652f\u6301 ",(0,t.jsx)(i.strong,{children:"SSO \u5373\u65f6\u4f9b\u5e94"})," \u548c ",(0,t.jsx)(i.strong,{children:"\u7535\u5b50\u90ae\u4ef6\u57df\u5373\u65f6\u4f9b\u5e94"}),"\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"benefits-of-jit-provisioning",children:"JIT \u4f9b\u5e94\u7684\u597d\u5904"}),"\n",(0,t.jsx)(i.p,{children:"JIT \u4f9b\u5e94\u63d0\u4f9b\u4e86\u51e0\u4e2a\u597d\u5904\uff1a"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"\u6548\u7387"}),"\uff1a\u51cf\u5c11\u624b\u52a8\u521b\u5efa\u548c\u7ba1\u7406\u7528\u6237\u8d26\u6237\u7684\u884c\u653f\u8d1f\u62c5\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"\u53ef\u6269\u5c55\u6027"}),"\uff1a\u65e0\u9700\u9884\u5148\u8bbe\u7f6e\u5373\u53ef\u81ea\u52a8\u5904\u7406\u5927\u91cf\u7528\u6237\u7684\u8d26\u6237\u521b\u5efa\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"\u5b9e\u65f6\u6027"}),"\uff1a\u786e\u4fdd\u7528\u6237\u5728\u8ba4\u8bc1 (Authentication) \u540e\u7acb\u5373\u8bbf\u95ee\u8d44\u6e90\uff0c\u65e0\u9700\u5ef6\u8fdf\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u6211\u4eec\u5728\u6700\u5177\u53ef\u6269\u5c55\u6027\u548c\u5b89\u5168\u6027\u7684\u7ea7\u522b\u4e0a\u5b9e\u73b0\u4e86 JIT \u529f\u80fd\uff0c\u4ee5\u7b80\u5316\u548c\u52a0\u901f\u4f60\u7684\u4f9b\u5e94\u8fc7\u7a0b\u3002\u7136\u800c\uff0c\u7531\u4e8e\u4f9b\u5e94\u7cfb\u7edf\u53ef\u80fd\u5f88\u590d\u6742\u5e76\u4e14\u9700\u8981\u6839\u636e\u5ba2\u6237\u7684\u5177\u4f53\u9700\u6c42\u8fdb\u884c\u5b9a\u5236\uff0c\u56e0\u6b64\u7ed3\u5408 Logto \u7684\u9884\u6784\u5efa JIT \u529f\u80fd\u3001\u4f60\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u7cfb\u7edf\u548c Logto Management API \u662f\u81f3\u5173\u91cd\u8981\u7684\u3002\u8fd9\u79cd\u96c6\u6210\u65b9\u6cd5\u5c06\u5e2e\u52a9\u4f60\u6784\u5efa\u4e00\u4e2a\u5f3a\u5927\u800c\u9ad8\u6548\u7684\u4f9b\u5e94\u7cfb\u7edf\u3002"}),"\n",(0,t.jsx)(i.h3,{id:"differences-between-jit-and-directory-sync",children:"JIT \u4e0e\u76ee\u5f55\u540c\u6b65\u7684\u533a\u522b"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"JIT \u4f9b\u5e94"})," \u662f\u7531\u7528\u6237\u53d1\u8d77\u7684\u64cd\u4f5c\u89e6\u53d1\u7684\uff0c\u800c ",(0,t.jsx)(i.strong,{children:"\u76ee\u5f55\u540c\u6b65"})," \u53ef\u4ee5\u662f\u7528\u6237\u53d1\u8d77\u7684\uff0c\u4e5f\u53ef\u4ee5\u662f\u7cfb\u7edf\u53d1\u8d77\u7684\uff08\u8ba1\u5212\u6216\u5b9e\u65f6\uff09\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"JIT \u4f9b\u5e94"})," \u4e0d\u5f3a\u5236\u6267\u884c\u6210\u5458\u8d44\u683c\u6216\u89d2\u8272\u5206\u914d\uff0c\u800c ",(0,t.jsx)(i.strong,{children:"\u76ee\u5f55\u540c\u6b65"})," \u53ef\u4ee5\u5f3a\u5236\u6267\u884c\u3002"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"JIT \u4f9b\u5e94"})," \u66f4\u9002\u5408\u4e8e\u65e0\u8bba\u7528\u6237\u7684\u8eab\u4efd\u6765\u6e90\u5982\u4f55\u7684\u65b0\u7528\u6237\u5165\u9a7b\uff0c\u800c ",(0,t.jsx)(i.strong,{children:"\u76ee\u5f55\u540c\u6b65"})," \u66f4\u9002\u5408\u4e8e\u7ba1\u7406\u7528\u6237\u8d26\u6237\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u7b80\u800c\u8a00\u4e4b\uff0cJIT \u4f9b\u5e94\u662f\u4e00\u79cd\u66f4\u7075\u6d3b\u548c\u7528\u6237\u53cb\u597d\u7684\u7528\u6237\u5165\u9a7b\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u8ba9\u7528\u6237\u81ea\u7531\u52a0\u5165\u6216\u79bb\u5f00\u7ec4\u7ec7\uff0c\u5e76\u8ba9\u4f60\u6839\u636e\u9700\u8981\u5904\u7406\u73b0\u6709\u7528\u6237\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"just-in-time-provisioning-in-logto",children:"Logto \u4e2d\u7684\u5373\u65f6\u4f9b\u5e94"}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"\u5373\u65f6 (Just-in-Time, JIT) \u4f9b\u5e94\u4ec5\u5728\u7528\u6237\u53d1\u8d77\u7684\u64cd\u4f5c\u65f6\u89e6\u53d1\uff0c\u4e0d\u5f71\u54cd\u4e0e Logto Management API \u7684\u4ea4\u4e92\u3002"})}),"\n",(0,t.jsxs)(i.p,{children:["\u5bfc\u822a\u5230 ",(0,t.jsx)(e,{to:"/organizations",children:"\u63a7\u5236\u53f0 > \u7ec4\u7ec7"}),"\u3002\u4f60\u53ef\u4ee5\u5728\u7ec4\u7ec7\u7684\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u4e2d\u8bbe\u7f6e JIT \u4f9b\u5e94\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"enterprise-sso-provisioning",children:"\u4f01\u4e1a SSO \u4f9b\u5e94"}),"\n",(0,t.jsxs)(i.p,{children:["\u5982\u679c\u4f60\u5728 Logto \u4e2d\u8bbe\u7f6e\u4e86 ",(0,t.jsx)(i.a,{href:"/end-user-flows/enterprise-sso",children:"\u4f01\u4e1a SSO"}),"\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4f60\u7684\u7ec4\u7ec7\u4f01\u4e1a SSO \u4ee5\u542f\u7528\u5373\u65f6\u4f9b\u5e94\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u5f53\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00\u65f6\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u65b0\u7528\u6237\u901a\u8fc7\u4f01\u4e1a SSO \u767b\u5f55\uff1b"}),"\n",(0,t.jsx)(i.li,{children:"\u73b0\u6709\u7528\u6237\u9996\u6b21\u901a\u8fc7\u4f01\u4e1a SSO \u767b\u5f55\u3002"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u4ed6\u4eec\u5c06\u81ea\u52a8\u52a0\u5165\u7ec4\u7ec7\u5e76\u83b7\u5f97\u9ed8\u8ba4\u7684\u7ec4\u7ec7\u89d2\u8272\u3002"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:o,width:"100%",alt:"JIT SSO"})}),"\n",(0,t.jsx)(i.h3,{id:"email-domain-provisioning",children:"\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94"}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u4f60\u7684\u5ba2\u6237\u6ca1\u6709\u4e13\u7528\u7684\u4f01\u4e1a SSO\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u7535\u5b50\u90ae\u4ef6\u57df\u8fdb\u884c\u5373\u65f6\u4f9b\u5e94\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u5f53\u7528\u6237\u6ce8\u518c\u65f6\uff0c\u5982\u679c\u5176\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4e0e\u7ec4\u7ec7\u7ea7\u522b\u914d\u7f6e\u7684 JIT \u7535\u5b50\u90ae\u4ef6\u57df\u5339\u914d\uff0c\u4ed6\u4eec\u5c06\u88ab\u4f9b\u5e94\u5230\u76f8\u5e94\u7684\u7ec4\u7ec7\u5e76\u83b7\u5f97\u76f8\u5e94\u7684\u89d2\u8272\u3002"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:l,width:"100%",alt:"JIT email"})}),"\n",(0,t.jsx)(i.p,{children:"\u5730\u5740\u5339\u914d\u53ef\u4ee5\u8bc6\u522b\u6765\u81ea\u6240\u6709\u975e\u4f01\u4e1a SSO \u8eab\u4efd\u6765\u6e90\u7684\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u5305\u62ec\uff1a"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/end-user-flows/sign-up-and-sign-in/sign-up",children:"\u7535\u5b50\u90ae\u4ef6\u6ce8\u518c"}),"\u8ba4\u8bc1 (Authentication)"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"/end-user-flows/sign-up-and-sign-in/social-sign-in",children:"\u793e\u4ea4\u6ce8\u518c"}),"\u8ba4\u8bc1 (Authentication)"]}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"\u4e3a\u4ec0\u4e48\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\u4e0d\u9002\u7528\u4e8e\u73b0\u6709\u7528\u6237\u7684\u767b\u5f55\u8fc7\u7a0b\uff1f"})}),(0,t.jsx)(i.p,{children:"\u73b0\u6709\u7528\u6237\u767b\u5f55\u9700\u8981\u8fdb\u4e00\u6b65\u63a7\u5236\uff0c\u4ee5\u786e\u5b9a\u4ed6\u4eec\u662f\u5426\u53ef\u4ee5\u88ab\u4f9b\u5e94\u5230\u7279\u5b9a\u7ec4\u7ec7\u6216\u6388\u4e88\u89d2\u8272\u3002\u6b64\u8fc7\u7a0b\u662f\u52a8\u6001\u7684\uff0c\u53d6\u51b3\u4e8e\u5177\u4f53\u7684\u7528\u4f8b\u548c\u4e1a\u52a1\u9700\u6c42\uff0c\u4f8b\u5982\u767b\u5f55\u9891\u7387\u548c\u7ec4\u7ec7\u7ea7\u522b\u7684\u7b56\u7565\u3002"}),(0,t.jsx)(i.p,{children:"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4e3a\u73b0\u6709\u7528\u6237\u542f\u7528\u4e86\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\uff0c\u5e76\u4e14\u540e\u6765\u60f3\u8981\u4ee5\u4e0d\u540c\u7684\u89d2\u8272\u5165\u9a7b\u53e6\u4e00\u7ec4\u7528\u6237\uff0c\u4e4b\u524d\u5165\u9a7b\u7684\u7528\u6237\u662f\u5426\u5e94\u8be5\u88ab\u5206\u914d\u4f60\u8bbe\u7f6e\u7684\u65b0\u89d2\u8272\uff1f\u8fd9\u4e3a\u201c\u5373\u65f6\u66f4\u65b0\u201d\u521b\u5efa\u4e86\u4e00\u4e2a\u590d\u6742\u7684\u573a\u666f\u3002\u786e\u5207\u7684\u884c\u4e3a\u901a\u5e38\u53d6\u51b3\u4e8e\u5e94\u7528\u7a0b\u5e8f\u548c IdP \u96c6\u6210\u7684\u914d\u7f6e\u3002\u6211\u4eec\u5c06\u6b64\u63a7\u5236\u6743\u4ea4\u7ed9\u4f60\uff0c\u8ba9\u4f60\u53ef\u4ee5\u81ea\u7531\u8bbe\u8ba1\u4f60\u7684\u4f9b\u5e94\u7cfb\u7edf\uff0c\u5e76\u5904\u7406\u65b0\u8d26\u6237\u521b\u5efa\u548c\u7ec4\u7ec7\u5165\u9a7b\u7684\u6700\u5e38\u89c1\u573a\u666f\u3002"})]}),"\n",(0,t.jsx)(i.h4,{id:"email-sign-in-experience-when-email-domain-provisioning-is-enabled",children:"\u542f\u7528\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\u65f6\u7684\u7535\u5b50\u90ae\u4ef6\u767b\u5f55\u4f53\u9a8c"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u7528\u6237\u72b6\u6001"}),(0,t.jsx)(i.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7528\u6237\u4e0d\u5b58\u5728\u5e76\u901a\u8fc7\u7535\u5b50\u90ae\u4ef6\u6ce8\u518c"}),(0,t.jsx)(i.td,{children:"\u7528\u6237\u88ab\u521b\u5efa\u5e76\u81ea\u52a8\u52a0\u5165\u76f8\u5e94\u7684\u7ec4\u7ec7\u5e76\u83b7\u5f97\u9002\u5f53\u7684\u89d2\u8272\u3002"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7528\u6237\u5b58\u5728\u5e76\u62e5\u6709\u4e0e\u4f9b\u5e94\u7684\u7535\u5b50\u90ae\u4ef6\u57df\u76f8\u540c\u7684\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u5730\u5740"}),(0,t.jsx)(i.td,{children:"\u6b63\u5e38\u7684\u7535\u5b50\u90ae\u4ef6\u767b\u5f55\u4f53\u9a8c\u3002"})]})]})]}),"\n",(0,t.jsx)(i.h4,{id:"social-sign-in-experience-when-email-domain-provisioning-is-enabled",children:"\u542f\u7528\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\u65f6\u7684\u793e\u4ea4\u767b\u5f55\u4f53\u9a8c"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u7528\u6237\u72b6\u6001"}),(0,t.jsx)(i.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7528\u6237\u4e0d\u5b58\u5728\uff0c\u901a\u8fc7\u793e\u4ea4\u8d26\u6237\u4f7f\u7528\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u6ce8\u518c"}),(0,t.jsx)(i.td,{children:"\u7528\u6237\u88ab\u521b\u5efa\u5e76\u81ea\u52a8\u52a0\u5165\u76f8\u5e94\u7684\u7ec4\u7ec7\u5e76\u83b7\u5f97\u9002\u5f53\u7684\u89d2\u8272\u3002"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7528\u6237\u4e0d\u5b58\u5728\uff0c\u901a\u8fc7\u793e\u4ea4\u8d26\u6237\u4f7f\u7528\u672a\u9a8c\u8bc1\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u6ca1\u6709\u7535\u5b50\u90ae\u4ef6\u6ce8\u518c"}),(0,t.jsx)(i.td,{children:"\u6b63\u5e38\u7684\u793e\u4ea4\u6ce8\u518c\u4f53\u9a8c\u3002"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"\u7528\u6237\u5b58\u5728\u5e76\u62e5\u6709\u4e0e\u4f9b\u5e94\u7684\u7535\u5b50\u90ae\u4ef6\u57df\u76f8\u540c\u7684\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u901a\u8fc7\u65b0\u7684\u793e\u4ea4\u8eab\u4efd\u767b\u5f55"}),(0,t.jsx)(i.td,{children:"\u6b63\u5e38\u7684\u793e\u4ea4\u767b\u5f55\u4f53\u9a8c\u3002"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"handling-the-potential-conflict-between-jit-provisioning-methods",children:"\u5904\u7406 JIT \u4f9b\u5e94\u65b9\u6cd5\u4e4b\u95f4\u7684\u6f5c\u5728\u51b2\u7a81"}),"\n",(0,t.jsx)(i.p,{children:"\u5982\u679c\u4f60\u6700\u521d\u8bbe\u7f6e\u4e86\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\uff0c\u540e\u6765\u914d\u7f6e\u4e86\u5177\u6709\u76f8\u540c\u7535\u5b50\u90ae\u4ef6\u57df\u7684\u4f01\u4e1a SSO\uff0c\u4f1a\u53d1\u751f\u4ee5\u4e0b\u60c5\u51b5\uff1a"}),"\n",(0,t.jsx)(i.p,{children:"\u5f53\u7528\u6237\u8f93\u5165\u4ed6\u4eec\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u65f6\uff0c\u4ed6\u4eec\u5c06\u88ab\u91cd\u5b9a\u5411\u5230 SSO \u8eab\u4efd\u63d0\u4f9b\u5546\uff0c\u7ed5\u8fc7\u7535\u5b50\u90ae\u4ef6\u8ba4\u8bc1 (Authentication)\u3002\u8fd9\u610f\u5473\u7740\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\u4e0d\u4f1a\u88ab\u89e6\u53d1\u3002"}),"\n",(0,t.jsx)(i.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5c06\u5728\u914d\u7f6e\u65f6\u663e\u793a\u8b66\u544a\u4fe1\u606f\u3002\u786e\u4fdd\u4f60\u901a\u8fc7\u9009\u62e9\u6b63\u786e\u7684 SSO \u8fde\u63a5\u5668\u6765\u542f\u7528\u4f01\u4e1a SSO \u4f9b\u5e94\uff0c\u800c\u4e0d\u662f\u4f9d\u8d56\u7535\u5b50\u90ae\u4ef6\u57df\u4f9b\u5e94\u3002"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:d,width:"100%",alt:"JIT conflict"})}),"\n",(0,t.jsx)(i.h2,{id:"default-organization-roles",children:"\u9ed8\u8ba4\u7ec4\u7ec7\u89d2\u8272"}),"\n",(0,t.jsxs)(i.p,{children:["\u5728\u7ec4\u7ec7\u4e2d\u4f9b\u5e94\u7528\u6237\u65f6\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4ed6\u4eec\u7684\u9ed8\u8ba4\u7ec4\u7ec7\u89d2\u8272\u3002\u89d2\u8272\u5217\u8868\u6765\u81ea ",(0,t.jsx)(i.a,{href:"/authorization/organization-template#organization-role",children:"\u7ec4\u7ec7\u6a21\u677f"}),"\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u89d2\u8272\u6216\u5c06\u5176\u7559\u7a7a\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"related-resources",children:"\u76f8\u5173\u8d44\u6e90"}),"\n",(0,t.jsx)(s,{href:"https://blog.logto.io/jit-provisioning",children:"\u4e86\u89e3\u5373\u65f6 (Just-in-Time) \u4f9b\u5e94"})]})}function g(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(x,{...n})}):x(n)}function p(n,i){throw new Error("Expected "+(i?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(n,i,e)=>{e.d(i,{R:()=>d,x:()=>l});var s=e(58101);const t={},r=s.createContext(t);function d(n){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function l(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),s.createElement(r.Provider,{value:i},n.children)}}}]);