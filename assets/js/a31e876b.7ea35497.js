"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8094],{6940:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"concepts/authn-vs-authz","title":"Authentication vs. authorization","description":"The difference between authentication and authorization can be summarized as follows:","source":"@site/docs/concepts/authn-vs-authz.mdx","sourceDirName":"concepts","slug":"/concepts/authn-vs-authz","permalink":"/concepts/authn-vs-authz","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/concepts/authn-vs-authz.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Sign-in experience","permalink":"/concepts/sign-in-experience"},"next":{"title":"Logto core service","permalink":"/concepts/core-service/"}}');var s=i(25105),o=i(79621);const r={sidebar_position:2},a="Authentication vs. authorization",c={},h=[{value:"Authentication",id:"authentication",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2},{value:"I need to specify which users can sign in to an application",id:"i-need-to-specify-which-users-can-sign-in-to-an-application",level:3},{value:"I need my users to sign in to an organization",id:"i-need-my-users-to-sign-in-to-an-organization",level:3},{value:"Our customers need custom branding for their sign-in pages",id:"our-customers-need-custom-branding-for-their-sign-in-pages",level:3}];function l(n){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"authentication-vs-authorization",children:"Authentication vs. authorization"})}),"\n",(0,s.jsxs)(e.p,{children:["The difference between ",(0,s.jsx)(e.strong,{children:"authentication"})," and ",(0,s.jsx)(e.strong,{children:"authorization"})," can be summarized as follows:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Authentication"})," answers the question \u201cWhich identity do you own?\u201d"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Authorization"})," answers the question \u201cWhat can you do?\u201d"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"For a complete customer identity and access management (CIAM) introduction, you can refer to our CIAM series:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://blog.logto.io/ciam-101-intro-authn-sso/",children:"CIAM 101: Authentication, Identity, SSO"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://blog.logto.io/ciam-102-authz-and-rbac/",children:"CIAM 102: Authorization & Role-based Access Control"})}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(e.p,{children:"Logto supports various interactive and non-interactive authentication methods, for example:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Sign-in experience"}),": The authentication process for end-users."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Machine-to-machine (M2M) authentication"}),": The authentication process for services or applications."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"The ultimate goal of authentication is dramatically simple: to verify and get the unique identifier of the entity (in Logto, a user or an application)."}),"\n",(0,s.jsx)(e.h2,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsx)(e.p,{children:"In Logto, authorization is done through role-based access control (RBAC). It gives you the complete control to manage the access of your users or M2M applications to the following:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"API resources"}),": A global entity that represents by an absolute URI."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Organizations"}),": A group of users or applications."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Organization API resources"}),": An API resource that belongs to an organization."]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"To learn more about these concepts, you can refer to the following resources:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/authorization/role-based-access-control",children:"Role-based access control (RBAC)"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/organizations",children:"Organizations (Multi-tenancy)"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Here's a visual representation of the relationship between these concepts:"}),"\n",(0,s.jsx)(e.mermaid,{value:"graph TD\n  subgraph Resources\n    R(API resources)\n    O(Organizations)\n    OR(Organization API resources)\n  end\n\n  subgraph Identities\n    U(Users)\n    A(M2M applications)\n  end"}),"\n",(0,s.jsx)(e.p,{children:'In a nutshell, authorization is about defining the rules that determine what entities in the "Identities" group can access the entities in the "Resources" group.'}),"\n",(0,s.jsx)(e.h2,{id:"frequently-asked-questions",children:"Frequently asked questions"}),"\n",(0,s.jsx)(e.h3,{id:"i-need-to-specify-which-users-can-sign-in-to-an-application",children:"I need to specify which users can sign in to an application"}),"\n",(0,s.jsx)(e.p,{children:"Due to the nature of single sign-on (SSO), Logto currently does not support using applications as resources. Instead, you can define API resources and permissions to control access to your resources."}),"\n",(0,s.jsx)(e.h3,{id:"i-need-my-users-to-sign-in-to-an-organization",children:"I need my users to sign in to an organization"}),"\n",(0,s.jsx)(e.p,{children:"As mentioned earlier, authentication involves verifying the identity of an entity, while access control is handled through authorization. Therefore:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Determining which organization(s) a user belongs to is an authorization concern."}),"\n",(0,s.jsx)(e.li,{children:"The sign-in process is an authentication concern."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:'This means that there is no concept of "signing in to an organization" in Logto. Once a user is authenticated, they can be authorized to access all resources (including organization resources) based on the defined permissions.'}),"\n",(0,s.jsx)(e.p,{children:"This model is efficient and clear, as it separates the concerns of authentication and authorization. All modern SaaS applications, such as GitHub and Notion, follow this model."}),"\n",(0,s.jsxs)(e.p,{children:["However, there are some cases where you need to establish 1-1 mappings between user sources and organizations. In this case, ",(0,s.jsx)(e.a,{href:"/end-user-flows/enterprise-sso",children:"enterprise SSO"})," and ",(0,s.jsx)(e.a,{href:"/organizations/just-in-time-provisioning",children:"organization Just-in-Time (JIT) provisioning"})," can be helpful."]}),"\n",(0,s.jsx)(e.h3,{id:"our-customers-need-custom-branding-for-their-sign-in-pages",children:"Our customers need custom branding for their sign-in pages"}),"\n",(0,s.jsxs)(e.p,{children:["Please check out ",(0,s.jsx)(e.a,{href:"/customization/match-your-brand/#app-specific-branding",children:"app-specific branding"})," and ",(0,s.jsx)(e.a,{href:"/customization/match-your-brand/#organization-specific-branding",children:"organization-specific branding"})," for related configurations."]})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},79621:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var t=i(58101);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);