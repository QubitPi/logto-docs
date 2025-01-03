"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[94997],{70053:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>s});var t=r(25105),i=r(79621);const s=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5bf9 Logto \u8fde\u63a5\u5668 (Connectors) \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u67e5\u770b ",(0,t.jsx)(n.a,{href:"/connectors",children:"\u914d\u7f6e\u8fde\u63a5\u5668"})," \u6307\u5357\u4ee5\u5f00\u59cb\u4e86\u89e3\u3002"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},97864:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"integrations/social/azuread/README","title":"\u8bbe\u7f6e Microsoft Azure AD \u793e\u4ea4\u767b\u5f55","description":"Microsoft Azure AD \u8fde\u63a5\u5668\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u6d01\u7684\u65b9\u5f0f\u6765\u4f7f\u7528 Azure \u7684 OAuth 2.0 \u8ba4\u8bc1\u7cfb\u7edf\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/social/azuread/README.mdx","sourceDirName":"integrations/social/azuread","slug":"/integrations/azuread","permalink":"/zh-CN/integrations/azuread","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/social/azuread/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/azuread","sidebar_label":"Microsoft","sidebar_custom_props":{"description":"Microsoft Azure Active Directory \u662f\u4e00\u4e2a\u9886\u5148\u7684 AD \u63d0\u4f9b\u5546\u3002"}},"sidebar":"integrationsSidebar","previous":{"title":"Apple","permalink":"/zh-CN/integrations/apple"},"next":{"title":"Discord","permalink":"/zh-CN/integrations/discord"}}');var i=r(25105),s=r(79621),o=r(70053);const c={slug:"/integrations/azuread",sidebar_label:"Microsoft",sidebar_custom_props:{description:"Microsoft Azure Active Directory \u662f\u4e00\u4e2a\u9886\u5148\u7684 AD \u63d0\u4f9b\u5546\u3002"}},l="\u8bbe\u7f6e Microsoft Azure AD \u793e\u4ea4\u767b\u5f55",d={},a=[...o.RM,{value:"\u5728 Azure \u95e8\u6237\u4e2d\u8bbe\u7f6e Microsoft Azure AD",id:"set-up-microsoft-azure-ad-in-the-azure-portal",level:2},{value:"\u5728 Logto \u4e2d\u586b\u5199\u914d\u7f6e",id:"fill-in-the-configuration-in-logto",level:2},{value:"Client ID",id:"client-id",level:3},{value:"Client Secret",id:"client-secret",level:3},{value:"Cloud Instance",id:"cloud-instance",level:3},{value:"Tenant ID",id:"tenant-id",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"references",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u8bbe\u7f6e-microsoft-azure-ad-\u793e\u4ea4\u767b\u5f55",children:"\u8bbe\u7f6e Microsoft Azure AD \u793e\u4ea4\u767b\u5f55"})}),"\n",(0,i.jsx)(n.p,{children:"Microsoft Azure AD \u8fde\u63a5\u5668\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u6d01\u7684\u65b9\u5f0f\u6765\u4f7f\u7528 Azure \u7684 OAuth 2.0 \u8ba4\u8bc1\u7cfb\u7edf\u3002"}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"set-up-microsoft-azure-ad-in-the-azure-portal",children:"\u5728 Azure \u95e8\u6237\u4e2d\u8bbe\u7f6e Microsoft Azure AD"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"https://portal.azure.com/#home",children:"Azure \u95e8\u6237"})," \u5e76\u4f7f\u7528\u4f60\u7684 Azure \u8d26\u6237\u767b\u5f55\u3002\u4f60\u9700\u8981\u62e5\u6709\u4e00\u4e2a\u6709\u6548\u7684\u8ba2\u9605\u624d\u80fd\u8bbf\u95ee Microsoft Azure AD\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u70b9\u51fb\u4ed6\u4eec\u63d0\u4f9b\u7684\u670d\u52a1\u4e2d\u7684 ",(0,i.jsx)(n.strong,{children:"Azure Active Directory"}),"\uff0c\u7136\u540e\u4ece\u5de6\u4fa7\u83dc\u5355\u4e2d\u70b9\u51fb ",(0,i.jsx)(n.strong,{children:"App Registrations"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u70b9\u51fb\u9876\u90e8\u7684 ",(0,i.jsx)(n.strong,{children:"New Registration"}),"\uff0c\u8f93\u5165\u63cf\u8ff0\uff0c\u9009\u62e9\u4f60\u7684 ",(0,i.jsx)(n.strong,{children:"\u8bbf\u95ee\u7c7b\u578b"})," \u5e76\u6dfb\u52a0\u4f60\u7684 ",(0,i.jsx)(n.strong,{children:"Redirect URI"}),"\uff0c\u767b\u5f55\u540e\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230\u5e94\u7528\u7a0b\u5e8f\u3002\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u8fd9\u5c06\u662f ",(0,i.jsx)(n.code,{children:"${your_logto_endpoint}/callback/${connector_id}"}),"\u3002\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"https://foo.logto.app/callback/${connector_id}"}),"\u3002\uff08",(0,i.jsx)(n.code,{children:"connector_id"})," \u4e5f\u53ef\u4ee5\u5728 Logto \u7ba1\u7406\u63a7\u5236\u53f0\u8fde\u63a5\u5668\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u7684\u9876\u90e8\u680f\u627e\u5230\uff09","\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u90e8\u5206\u590d\u5236 ",(0,i.jsx)(n.code,{children:"Callback URI"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u9009\u62e9 Web \u4f5c\u4e3a\u5e73\u53f0\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fill-in-the-configuration-in-logto",children:"\u5728 Logto \u4e2d\u586b\u5199\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u540d\u79f0"}),(0,i.jsx)(n.th,{children:"\u7c7b\u578b"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tenantId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cloudInstance"}),(0,i.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"client-id",children:"Client ID"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728 Azure \u95e8\u6237\u4e2d\u65b0\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u7684 ",(0,i.jsx)(n.strong,{children:"Overview"})," \u90e8\u5206\u627e\u5230 ",(0,i.jsx)(n.strong,{children:"Application (client) ID"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"client-secret",children:"Client Secret"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728\u4f60\u65b0\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u70b9\u51fb ",(0,i.jsx)(n.strong,{children:"Certificates & Secrets"})," \u4ee5\u83b7\u53d6\u5ba2\u6237\u7aef\u5bc6\u94a5\uff0c\u5e76\u4ece\u9876\u90e8\u70b9\u51fb ",(0,i.jsx)(n.strong,{children:"New client secret"}),"\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u8f93\u5165\u63cf\u8ff0\u548c\u8fc7\u671f\u65f6\u95f4\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u8fd9\u5c06\u53ea\u663e\u793a\u4f60\u7684\u5ba2\u6237\u7aef\u5bc6\u94a5\u4e00\u6b21\u3002\u5c06 ",(0,i.jsx)(n.strong,{children:"value"})," \u586b\u5199\u5230 Logto \u8fde\u63a5\u5668\u914d\u7f6e\u4e2d\u5e76\u4fdd\u5b58\u5230\u5b89\u5168\u4f4d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cloud-instance",children:"Cloud Instance"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u5e38\u662f ",(0,i.jsx)(n.code,{children:"https://login.microsoftonline.com/"}),"\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/authentication-national-cloud#azure-ad-authentication-endpoints",children:"Azure AD \u8ba4\u8bc1\u7aef\u70b9"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"tenant-id",children:"Tenant ID"}),"\n",(0,i.jsxs)(n.p,{children:["Logto \u5c06\u4f7f\u7528\u6b64\u5b57\u6bb5\u6784\u5efa\u6388\u6743\u7aef\u70b9\u3002\u6b64\u503c\u53d6\u51b3\u4e8e\u4f60\u5728 Azure \u95e8\u6237\u4e2d\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\u65f6\u9009\u62e9\u7684 ",(0,i.jsx)(n.strong,{children:"\u8bbf\u95ee\u7c7b\u578b"}),"\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u9009\u62e9 ",(0,i.jsx)(n.strong,{children:"\u4ec5\u6b64\u7ec4\u7ec7\u76ee\u5f55\u4e2d\u7684\u5e10\u6237"})," \u4f5c\u4e3a\u8bbf\u95ee\u7c7b\u578b\uff0c\u5219\u9700\u8981\u8f93\u5165\u4f60\u7684 ",(0,i.jsx)(n.strong,{children:"{TenantID}"}),"\u3002\u4f60\u53ef\u4ee5\u5728 Azure Active Directory \u7684 ",(0,i.jsx)(n.strong,{children:"Overview"})," \u90e8\u5206\u627e\u5230\u79df\u6237 ID\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u9009\u62e9 ",(0,i.jsx)(n.strong,{children:"\u4efb\u4f55\u7ec4\u7ec7\u76ee\u5f55\u4e2d\u7684\u5e10\u6237"})," \u4f5c\u4e3a\u8bbf\u95ee\u7c7b\u578b\uff0c\u5219\u9700\u8981\u8f93\u5165 ",(0,i.jsx)(n.strong,{children:"organizations"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u9009\u62e9 ",(0,i.jsx)(n.strong,{children:"\u4efb\u4f55\u7ec4\u7ec7\u76ee\u5f55\u6216\u4e2a\u4eba Microsoft \u5e10\u6237\u4e2d\u7684\u5e10\u6237"})," \u4f5c\u4e3a\u8bbf\u95ee\u7c7b\u578b\uff0c\u5219\u9700\u8981\u8f93\u5165 ",(0,i.jsx)(n.strong,{children:"common"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u4f60\u9009\u62e9 ",(0,i.jsx)(n.strong,{children:"\u4ec5\u4e2a\u4eba Microsoft \u5e10\u6237"})," \u4f5c\u4e3a\u8bbf\u95ee\u7c7b\u578b\uff0c\u5219\u9700\u8981\u8f93\u5165 ",(0,i.jsx)(n.strong,{children:"consumers"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"\u53c2\u8003\u8d44\u6599"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview",children:"\u767b\u5f55\u7528\u6237\u7684 Web \u5e94\u7528\u7a0b\u5e8f"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79621:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(58101);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);