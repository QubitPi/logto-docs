"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[59676],{75158:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"organizations/just-in-time-provisioning","title":"Just-in-Time provisioning","description":"In Logto, Just-in-Time (JIT) provisioning is a process used to assign organization memberships and roles to users on-the-fly as they sign in to the system for the first time. Instead of pre-provisioning accounts for users in advance, JIT provisioning configures the necessary user accounts dynamically when a user authenticates.","source":"@site/docs/organizations/just-in-time-provisioning.mdx","sourceDirName":"organizations","slug":"/organizations/just-in-time-provisioning","permalink":"/organizations/just-in-time-provisioning","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/organizations/just-in-time-provisioning.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Manage organization","permalink":"/organizations/organization-management"},"next":{"title":"Organizations","permalink":"/organizations/"}}');var o=n(25105),t=n(79621);const r=n.p+"assets/images/jit-conflict-20c8c47ff22e7c515772821ffeea1c7d.webp",a=n.p+"assets/images/jit-email-95f7b7cc852ed195e3e970376e758b73.webp",d=n.p+"assets/images/jit-sso-5538460b969a9895cd94f89f4235126d.webp",l={sidebar_position:4},c="Just-in-Time provisioning",h={},g=[{value:"How it works",id:"how-it-works",level:2},{value:"Benefits of JIT provisioning",id:"benefits-of-jit-provisioning",level:3},{value:"Differences between JIT and directory sync",id:"differences-between-jit-and-directory-sync",level:3},{value:"Just-in-time provisioning in Logto",id:"just-in-time-provisioning-in-logto",level:2},{value:"Enterprise SSO provisioning",id:"enterprise-sso-provisioning",level:3},{value:"Email domain provisioning",id:"email-domain-provisioning",level:3},{value:"Email sign-in experience when email domain provisioning is enabled",id:"email-sign-in-experience-when-email-domain-provisioning-is-enabled",level:4},{value:"Social sign-in experience when email domain provisioning is enabled",id:"social-sign-in-experience-when-email-domain-provisioning-is-enabled",level:4},{value:"Handling the potential conflict between JIT provisioning methods",id:"handling-the-potential-conflict-between-jit-provisioning-methods",level:3},{value:"Default organization roles",id:"default-organization-roles",level:2},{value:"Related resources",id:"related-resources",level:2}];function p(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{CloudLink:n,Url:s}=i;return n||m("CloudLink",!0),s||m("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"just-in-time-provisioning",children:"Just-in-Time provisioning"})}),"\n",(0,o.jsxs)(i.p,{children:["In Logto, ",(0,o.jsx)(i.a,{href:"https://auth.wiki/jit-provisioning",children:"Just-in-Time (JIT) provisioning"})," is a process used to assign organization memberships and roles to users on-the-fly as they sign in to the system for the first time. Instead of pre-provisioning accounts for users in advance, JIT provisioning configures the necessary user accounts dynamically when a user authenticates."]}),"\n",(0,o.jsx)(i.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsx)(i.p,{children:"Here\u2019s a high-level overview of the JIT provisioning process:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"User authentication"}),": The user attempts to sign in to an application or service, and the identity provider (Logto) authenticates the user."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Account sign-in or creation"}),": Depending on the user\u2019s status, Logto either signs in the user, creates a new account, or add a new identity to an existing account."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Provisioning"}),": If the user or their identity is new, Logto triggers the provisioning process."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"Here's a detailed flowchart of JIT provisioning:"}),"\n",(0,o.jsxs)(i.p,{children:["JIT provisioning is a useful feature for ",(0,o.jsx)(i.a,{href:"/introduction/plan-your-architecture/b2b",children:"B2B"})," and multi-tenancy products. It makes onboarding tenant members smooth and requires no administrative involvement."]}),"\n",(0,o.jsx)(i.p,{children:"For example, if you\u2019ve onboarded a business and want its employees to securely sign into your product and join the organization with the correct role access, there are several ways to achieve this. Let\u2019s explore the possible solutions Logto provides and how JIT can help."}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Scenario"}),(0,o.jsx)(i.th,{children:"User types"}),(0,o.jsx)(i.th,{children:"Automated"}),(0,o.jsx)(i.th,{children:"Behavior"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"Admin invite"}),(0,o.jsx)(i.td,{children:"New and existing"}),(0,o.jsx)(i.td,{}),(0,o.jsxs)(i.td,{children:["Users can ",(0,o.jsx)(i.a,{href:"/end-user-flows/organization-experience/invite-organization-members",children:"receive an email invitation"})," to join the organization."]})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"Management API user creation or import"}),(0,o.jsx)(i.td,{children:"New and existing"}),(0,o.jsx)(i.td,{}),(0,o.jsxs)(i.td,{children:["Users can use a ",(0,o.jsx)(i.a,{href:"/end-user-flows/sign-up-and-sign-in/disable-user-registration#implement-an-invitation-only-sign-up-flow",children:"pre-created user account"})," to join the organization."]})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"SSO just-in-time provisioning"}),(0,o.jsx)(i.td,{children:"New and existing"}),(0,o.jsx)(i.td,{children:"\u2705"}),(0,o.jsxs)(i.td,{children:["Users who signs in with ",(0,o.jsx)(i.a,{href:"/end-user-flows/enterprise-sso",children:"SSO"})," for the first time can join the organization."]})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"Email domain just-in-time provisioning"}),(0,o.jsx)(i.td,{children:"New"}),(0,o.jsx)(i.td,{children:"\u2705"}),(0,o.jsx)(i.td,{children:"Users with specific verified domains who signs in for the first time can join the organization."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"Directory sync"}),(0,o.jsx)(i.td,{children:"New and existing"}),(0,o.jsx)(i.td,{children:"\u2705"}),(0,o.jsx)(i.td,{children:"Use the IdP\u2019s directory sync functionality to pre-provision users in the app in advance."})]})]})]}),"\n",(0,o.jsxs)(i.p,{children:["Currently, Logto supports ",(0,o.jsx)(i.strong,{children:"SSO just-in-time provisioning"})," and ",(0,o.jsx)(i.strong,{children:"email domain just-in-time provisioning"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"benefits-of-jit-provisioning",children:"Benefits of JIT provisioning"}),"\n",(0,o.jsx)(i.p,{children:"JIT provisioning offers several benefits:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Efficiency"}),": Reduces the administrative overhead of manually creating and managing user accounts."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Scalability"}),": Automatically handles account creation for large numbers of users without prior setup."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Real-time"}),": Ensures users can access resources as soon as they authenticate, without delays."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"We have implemented the JIT features at their most scalable and secure level to simplify and speed up the provisioning process for you. However, since provisioning systems can be complex and tailored to your clients\u2019 specific needs, it is essential to combine Logto\u2019s pre-built JIT features, your careful system design, and the Logto Management API. This integrated approach will help you build a robust and efficient provisioning system."}),"\n",(0,o.jsx)(i.h3,{id:"differences-between-jit-and-directory-sync",children:"Differences between JIT and directory sync"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"JIT provisioning"})," is triggered by user-initiated actions, while ",(0,o.jsx)(i.strong,{children:"Directory sync"})," can be both user-initiated and system-initiated (scheduled or real-time)."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"JIT provisioning"})," does not enforce the membership or role assignment, while ",(0,o.jsx)(i.strong,{children:"Directory sync"})," can enforce them."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"JIT provisioning"})," is more suitable for onboarding new users regardless of the user\u2019s identity source, while ",(0,o.jsx)(i.strong,{children:"Directory sync"})," is more suitable for managed user accounts."]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"In short, JIT provisioning is a more flexible and user-friendly approach to onboarding users, as it can give users the freedom to join or leave organizations and let you handle the existing users at your discretion."}),"\n",(0,o.jsx)(i.h2,{id:"just-in-time-provisioning-in-logto",children:"Just-in-time provisioning in Logto"}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"Just-in-time (JIT) provisioning only triggers for user-initiated actions and does not affect interactions with the Logto Management API."})}),"\n",(0,o.jsxs)(i.p,{children:["Navigate to ",(0,o.jsx)(n,{to:"/organizations",children:"Console > Organizations"}),". You can set the JIT provisioning in the details page of an organization."]}),"\n",(0,o.jsx)(i.h3,{id:"enterprise-sso-provisioning",children:"Enterprise SSO provisioning"}),"\n",(0,o.jsxs)(i.p,{children:["If you have ",(0,o.jsx)(i.a,{href:"/end-user-flows/enterprise-sso",children:"Enterprise SSO"})," set up in Logto, you can select your organization enterprise SSO to enable just-in-time provisioning."]}),"\n",(0,o.jsx)(i.p,{children:"When one of the following conditions is met:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"New users sign in through enterprise SSO;"}),"\n",(0,o.jsx)(i.li,{children:"Existing users sign in through enterprise SSO for the first time."}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"They will automatically join the organization and get default organization roles."}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:d,width:"100%",alt:"JIT SSO"})}),"\n",(0,o.jsx)(i.h3,{id:"email-domain-provisioning",children:"Email domain provisioning"}),"\n",(0,o.jsx)(i.p,{children:"If your client doesn\u2019t have a dedicated enterprise SSO, you can still use email domains for just-in-time provisioning."}),"\n",(0,o.jsx)(i.p,{children:"When a user signs up, if their verified email address match the configured JIT email domains at the organization level, they will be provisioned to the appropriate organizations with the corresponding roles."}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:a,width:"100%",alt:"JIT email"})}),"\n",(0,o.jsx)(i.p,{children:"The address matching can recognize the verified email address from all non-enterprise SSO identity sources, including:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/end-user-flows/sign-up-and-sign-in/sign-up",children:"Email sign-up"})," authentication"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/end-user-flows/sign-up-and-sign-in/social-sign-in",children:"Social sign-up"})," authentication"]}),"\n"]}),"\n",(0,o.jsxs)(i.admonition,{type:"note",children:[(0,o.jsx)(i.p,{children:(0,o.jsx)(i.strong,{children:"Why doesn\u2019t email domain provisioning apply to the existing user sign-in process?"})}),(0,o.jsx)(i.p,{children:"Existing user sign-in requires further control to determine if they can be provisioned to a specific organization or granted a role. This process is dynamic and depends on specific use cases and business needs, such as sign-in frequency and organization-level policies."}),(0,o.jsx)(i.p,{children:"For example, if you enable email domain provisioning for an existing user and later want to onboard another group of users with a different role, should the previously onboarded user be assigned the new role you set up? This creates a complex scenario for \u201cjust-in-time updates\u201d. The exact behavior often depends on how the application and IdP integration are configured. We give this control to you, allowing you to design your provisioning system freely and handle the most frequent scenarios for new account creation and organization onboarding."})]}),"\n",(0,o.jsx)(i.h4,{id:"email-sign-in-experience-when-email-domain-provisioning-is-enabled",children:"Email sign-in experience when email domain provisioning is enabled"}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"User status"}),(0,o.jsx)(i.th,{children:"Description"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"User does not exist and signs up with email"}),(0,o.jsx)(i.td,{children:"User is created and automatically joins the corresponding organization with appropriate roles."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"User exists with the same verified email address as provisioned email domains"}),(0,o.jsx)(i.td,{children:"Normal email sign-in experience."})]})]})]}),"\n",(0,o.jsx)(i.h4,{id:"social-sign-in-experience-when-email-domain-provisioning-is-enabled",children:"Social sign-in experience when email domain provisioning is enabled"}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"User status"}),(0,o.jsx)(i.th,{children:"Description"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"User does not exist, signs up with social account using a verified email"}),(0,o.jsx)(i.td,{children:"User is created and automatically joins the corresponding organization with appropriate roles."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"User does not exist, signs up with social account using an unverified email or no email"}),(0,o.jsx)(i.td,{children:"Normal social sign-up experience."})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"User exists with the same verified email address as provisioned email domains, signs in through a new social identity"}),(0,o.jsx)(i.td,{children:"Normal social sign-in experience."})]})]})]}),"\n",(0,o.jsx)(i.h3,{id:"handling-the-potential-conflict-between-jit-provisioning-methods",children:"Handling the potential conflict between JIT provisioning methods"}),"\n",(0,o.jsx)(i.p,{children:"If you initially set up email domain provisioning and later configure an enterprise SSO with the same email domain, here's what happens:"}),"\n",(0,o.jsx)(i.p,{children:"When a user enters their email address, they will be redirected to the SSO identity provider, bypassing the email authentication. This means the email domain provisioning won\u2019t be triggered."}),"\n",(0,o.jsx)(i.p,{children:"To address this, we will show a warning message when configuration. Ensure you handle this case by selecting the correct SSO connector to enable enterprise SSO provisioning, and do not rely on email domain provisioning."}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:r,width:"100%",alt:"JIT conflict"})}),"\n",(0,o.jsx)(i.h2,{id:"default-organization-roles",children:"Default organization roles"}),"\n",(0,o.jsxs)(i.p,{children:["When provisioning users in an organization, you can set their default organization roles. The role list comes from the ",(0,o.jsx)(i.a,{href:"/authorization/organization-template#organization-role",children:"organization template"}),", and you can choose a role or leave it empty."]}),"\n",(0,o.jsx)(i.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,o.jsx)(s,{href:"https://blog.logto.io/jit-provisioning",children:"Understand Just-in-Time provisioning"})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function m(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(58101);const o={},t=s.createContext(o);function r(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);