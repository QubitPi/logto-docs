"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29036],{16048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(11527),i=t(17279);const s={slug:"do-you-need-to-build-auth",authors:"gao",tags:["auth","dev","authentication","authorization"]},a="Do you need to build your own auth for apps?",r={permalink:"/blog/do-you-need-to-build-auth",source:"@site/blog/2023-02-16-do-you-need-to-build-auth/index.md",title:"Do you need to build your own auth for apps?",description:"Although article is inspired from personal dev experience and I tried my best to keep things objective, it's still non-negligible that I'm one of the creators of Logto (an auth product).",date:"2023-02-16T00:00:00.000Z",tags:[{label:"auth",permalink:"/blog/tags/auth"},{label:"dev",permalink:"/blog/tags/dev"},{label:"authentication",permalink:"/blog/tags/authentication"},{label:"authorization",permalink:"/blog/tags/authorization"}],readingTime:6.18,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{slug:"do-you-need-to-build-auth",authors:"gao",tags:["auth","dev","authentication","authorization"]},unlisted:!1,prevItem:{title:"Logto 2023 February Update (Extended)",permalink:"/blog/releases/2023-feb-extended"},nextItem:{title:"CIAM 102: Authorization & Role-based Access Control",permalink:"/blog/ciam-102-authz-and-rbac"}},l={authorsImageUrls:[void 0]},d=[{value:"Intro",id:"intro",level:2},{value:"Example: An online bookstore",id:"example-an-online-bookstore",level:2},{value:"Choose authentication methods",id:"choose-authentication-methods",level:3},{value:"Design and implement sign-in experience",id:"design-and-implement-sign-in-experience",level:3},{value:"Security and token exchange",id:"security-and-token-exchange",level:3},{value:"Authorization model",id:"authorization-model",level:3},{value:"Make the decision",id:"make-the-decision",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.admonition,{title:"Prologue",type:"note",children:[(0,o.jsx)(n.p,{children:"Although article is inspired from personal dev experience and I tried my best to keep things objective, it's still non-negligible that I'm one of the creators of Logto (an auth product)."}),(0,o.jsx)(n.p,{children:"I would like to point out this first for a better reading experience."})]}),"\n",(0,o.jsx)(n.p,{children:'I\u2019ve seen a lot of developers asking questions like \u201cShould I build my own auth for my app?\u201d. While the answer cannot be a simple "Yes" or "No", I\u2019d like to write an article to breakdown the implementation and demonstrate the pros and cons to help you decide.'}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"TL;DR"})," If you're still learning, auth will be a good challenge. If you want full control, it's worth building your own auth system. Otherwise, it's necessary to find an existing solution that fits your needs."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsx)(n.p,{children:"As a developer, I have built many applications during my career. Regardless of the programming language, there is a common foundation I always need to construct: user auth."}),"\n",(0,o.jsx)(n.p,{children:"It was a negligible part since everything was straightforward going back to 20 years ago:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Implement a registration and sign-in system with username and password."}),"\n",(0,o.jsx)(n.li,{children:"Create a mechanism to maintain a user's session."}),"\n",(0,o.jsx)(n.li,{children:"About security? MD5 is the answer."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'That\u2019s it. Then I could focus on \u201cthe real business\u201d. Didn\'t hear about MD5? You missed out on the "good times" of software development. Nowadays, developers face more challenges when building sign-in/up.'}),"\n",(0,o.jsx)(n.p,{children:"It sounds alarmist, but let me go through with an example."}),"\n",(0,o.jsx)(n.h2,{id:"example-an-online-bookstore",children:"Example: An online bookstore"}),"\n",(0,o.jsx)(n.p,{children:"Let\u2019s say you are trying to build an online bookstore with an API service and a web frontend app."}),"\n",(0,o.jsx)(n.p,{children:"First, the scope of \u201cauth\u201d should be defined. Auth can be explained as authentication and authorization, and they have totally different definitions and use cases:"}),"\n",(0,o.jsx)(n.admonition,{title:"\ud83e\udd14 About Auth",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Authentication (AuthN) answers the question \u201cWhich identity do you own?\u201d"}),"\n",(0,o.jsx)(n.li,{children:"Authorization (AuthZ) answers the question \u201cWhat can you do?\u201d"}),"\n"]})}),"\n",(0,o.jsxs)(n.p,{children:["I wrote an article ",(0,o.jsx)(n.a,{href:"/blog/ciam-101-intro-authn-sso",children:"CIAM 101: Authentication, Identity, SSO"})," to discuss these concepts in detail."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-authentication-methods",children:"Choose authentication methods"}),"\n",(0,o.jsx)(n.p,{children:"Let\u2019s start with \u201cauthentication\u201d, which is user sign-in in our example. Besides the username-and-password method, here are some trending methods people are adopting for a better user conversion and security:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Passwordless, i.e. dynamic verification code (via email or sms)"}),"\n",(0,o.jsx)(n.li,{children:"Social sign-in (Google, Facebook, etc.)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The choice of method depends on the business decision, while we can take a look on the tech effort:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"For passwordless, you need to find a vendor to send verification codes via email or sms; then integrate with your API service (new APIs may needed)."}),"\n",(0,o.jsxs)(n.li,{children:["For social sign-in, you must adhere to the integration guidelines of the social identity provider(s) you wish to use. Additionally, you must create a mapping between your bookstore's user IDs and the identity provider's.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For example, when a user signs in with a Gmail account ",(0,o.jsx)(n.code,{children:"foo@gmail.com"}),", you can link this email address to the user ",(0,o.jsx)(n.code,{children:"foo"})," in the bookstore. This process helps you to build a unified identity system and allows the user to modify or unlink their social identity in the future."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"design-and-implement-sign-in-experience",children:"Design and implement sign-in experience"}),"\n",(0,o.jsx)(n.p,{children:"After you decide authentication methods, a graceful and smooth sign-in experience for your end-users is the next target. The conversion here is fundamental but crucial to the business since it's a natural way to leave the persisted customer data."}),"\n",(0,o.jsx)(n.p,{children:"When I was working for Airbnb, there was a whole team dedicated to optimize the sign-in experience for multiple platforms. They conducted numerous A/B tests to determine which combination had the highest conversion rate."}),"\n",(0,o.jsx)(n.p,{children:"It\u2019s not practical to do so when a business is getting started. But we still need to try our best to make every piece right. Which platforms would you like to run the bookstore? You may start with mobile, web, or both. The exact design will depend on the authentication methods you choose:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Username and password: The easiest one, just several input boxes and buttons."}),"\n",(0,o.jsx)(n.li,{children:"Passwordless: Enter phone / email, then send and verify a dynamic code."}),"\n",(0,o.jsx)(n.li,{children:"Social sign-in: Read the docs from the chosen social identity provider, follow the visual guideline, handle the redirect logic, and finally link the social identity with the bookstore identity."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"More things to consider to make it better:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Do you need to combine the sign-in and registration process for a specific method?"}),"\n",(0,o.jsx)(n.li,{children:"Do you need a \u201cforgot password\u201d flow to allow customers to reset their passwords independently?"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If you opt for native development, the workload will almost double for one additional platform."}),"\n",(0,o.jsx)(n.h3,{id:"security-and-token-exchange",children:"Security and token exchange"}),"\n",(0,o.jsx)(n.p,{children:"Security can be a hidden iceberg. It\u2019ll be great if you are familiar with OpenID Connect or OAuth 2.0, since they are widely used and battle-tested. OpenID Connect is relatively new but is designed for \u201cuser authentication\u201d, which is a great fit for an online bookstore."}),"\n",(0,o.jsx)(n.p,{children:"Without delving into the details of the standards, there are still some things to consider:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Which encryption method should be used for passwords?"}),"\n",(0,o.jsx)(n.li,{children:"What is the process for standard authentication and authorization?"}),"\n",(0,o.jsx)(n.li,{children:"How does token exchange work (Access Token, Refresh Token, ID Token, etc.)?"}),"\n",(0,o.jsx)(n.li,{children:"How can signing keys be used in tokens and how can the signature be validated to protect resources?"}),"\n",(0,o.jsx)(n.li,{children:"How can client and server attacks be prevented?"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Finally, you can land a good sign-in experience and deliver it to your customers."}),"\n",(0,o.jsx)(n.h3,{id:"authorization-model",children:"Authorization model"}),"\n",(0,o.jsx)(n.p,{children:"As a bookstore, you need to separate resources for customers and sellers. For example, customers can browse all books, while sellers can manage their on-sale books. It's OK to start with simple if-else checks; however, as the business grows, you may need to leverage a more flexible model such as Role-based Access Control (RBAC) or Attribute-based Access Control (ABAC)."}),"\n",(0,o.jsxs)(n.p,{children:["I also wrote an article ",(0,o.jsx)(n.a,{href:"/blog/ciam-102-authz-and-rbac",children:"CIAM 102: Authorization & Role-based Access Control"})," to demonstrate basic authorization concepts and the RBAC model."]}),"\n",(0,o.jsx)(n.h2,{id:"make-the-decision",children:"Make the decision"}),"\n",(0,o.jsx)(n.p,{children:"You can see auth is not an \u201call or nothing\u201d problem, since it involves multiple technical components and you or your team may have different tech expertise in these areas. It's important to break it down into smaller parts to gain a better understanding of the status quo."}),"\n",(0,o.jsx)(n.p,{children:"To make the decision, I'll ask myself the following questions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"How urgent is the project?"}),"\n",(0,o.jsx)(n.li,{children:"How much effort do I expect to put into auth versus the business?"}),"\n",(0,o.jsx)(n.li,{children:"What\u2019s the priority of user experience, security, and maintainability?"}),"\n",(0,o.jsx)(n.li,{children:"Which part(s) do I need full control of? How familiar should I become with them?"}),"\n",(0,o.jsx)(n.li,{children:"If I go with some frameworks / solutions, are they good enough for customization or extension?"}),"\n",(0,o.jsx)(n.li,{children:"If the business grows, will I need to introduce a new authentication model?"}),"\n",(0,o.jsx)(n.li,{children:"If I find a suitable vendor, is it safe enough to use? Do I need a withdrawal plan if anything happens to the vendor?"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"On the other hand, if you're still learning or honing your programming skills, auth can be a great stepping stone on the path to becoming a full-stack developer. It covers almost all components needed for an app."})}),"\n",(0,o.jsx)(n.p,{children:"With the questions in mind, I discovered two facts:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Crafting a reliable authentication system is highly complex."}),"\n",(0,o.jsx)(n.li,{children:"Existing vendors cannot meet all the necessary criteria."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"So I decided to start a dedicated project (Logto) for auth, and embrace the open-source community from day one."}),"\n",(0,o.jsx)(n.p,{children:"Hope this article helps."})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},17279:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(50959);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);