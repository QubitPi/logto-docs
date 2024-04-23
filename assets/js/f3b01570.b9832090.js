"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[48225],{83637:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(n.p,{children:["We recommend to read ",(0,s.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/rbac/",children:"\ud83d\udd10 Role-Based Access Control (RBAC)"})," first to understand the basic concepts of Logto RBAC and how to set up API resources properly."]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},20516:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[{value:"Checkpoint: Test your application",id:"checkpoint-test-your-application",level:3}];function r(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"checkpoint-test-your-application",children:"Checkpoint: Test your application"}),"\n",(0,s.jsx)(n.p,{children:"Now, you can test your application:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Run your application, you will see the sign-in button."}),"\n",(0,s.jsx)(n.li,{children:"Click the sign-in button, the SDK will init the sign-in process and redirect you to the Logto sign-in page."}),"\n",(0,s.jsx)(n.li,{children:"After you signed in, you will be redirected back to your application and see the user data with sign-out button."}),"\n",(0,s.jsx)(n.li,{children:"Click the sign-out button to clear local storage and sign out."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},22002:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Once you have set up the API resources, you can add them when configuring Logto in your app:"}),"\n",e.configResourcesCode,"\n",(0,s.jsx)(n.p,{children:"Each API resource has its own permissions (scopes)."}),"\n",(0,s.jsxs)(n.p,{children:["For example, the ",(0,s.jsx)(n.code,{children:"https://shopping.your-app.com/api"})," resource has the ",(0,s.jsx)(n.code,{children:"shopping:read"})," and ",(0,s.jsx)(n.code,{children:"shopping:write"})," permissions, and the ",(0,s.jsx)(n.code,{children:"https://store.your-app.com/api"})," resource has the ",(0,s.jsx)(n.code,{children:"store:read"})," and ",(0,s.jsx)(n.code,{children:"store:write"})," permissions."]}),"\n",(0,s.jsx)(n.p,{children:"To request these permissions, you can add them when configuring Logto in your app:"}),"\n",e.configResourcesWithScopesCode,"\n",(0,s.jsxs)(n.p,{children:["You may notice that scopes are defined separately from API resources. This is because ",(0,s.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Resource Indicators for OAuth 2.0"})," specifies the final scopes for the request will be the cartesian product of all the scopes at all the target services."]}),"\n",e.configResourcesWithSharedScopesCode&&(0,s.jsxs)(s.Fragment,{children:["Thus, in the above case, scopes can be simplified from the definition in Logto, both of the API resources can have `read` and `write` scopes without the prefix. Then, in the Logto config:",e.configResourcesWithSharedScopesCode,"For every API resource, it will request for both `read` and `write` scopes."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["It is fine to request scopes that are not defined in the API resources. For example, you can request the ",(0,s.jsx)(n.code,{children:"email"})," scope even if the API resources don't have the ",(0,s.jsx)(n.code,{children:"email"})," scope available. Unavailable scopes will be safely ignored."]})}),"\n",(0,s.jsx)(n.p,{children:"After the successful sign-in, Logto will issue proper scopes to API resources according to the user's roles."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},62212:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={a:"a",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/recipes/customize-sie/",children:"Customize sign-in experience"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"Protect your API"})}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},9246:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={a:"a",code:"code",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Here's the list of supported scopes and the corresponding claims:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"openid"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Claim name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sub"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The unique identifier of the user"}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"profile"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Claim name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The full name of the user"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"username"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The username of the user"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"picture"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The profile picture URL of the user"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"email"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Claim name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"email"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The email address of the user"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"email_verified"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Whether the email address has been verified"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"phone"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Claim name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"phone_number"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The phone number of the user"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"phone_number_verified"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Whether the phone number has been verified"}),(0,s.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"custom_data"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Claim name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"custom_data"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:"The custom data of the user"}),(0,s.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"identities"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Claim name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"identities"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object"})}),(0,s.jsx)(n.td,{children:"The linked identities of the user"}),(0,s.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"urn:logto:scope:organizations"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Claim name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"organizations"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsx)(n.td,{children:"The organization IDs the user belongs to"}),(0,s.jsx)(n.td,{children:"No"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"organization_data"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object[]"})}),(0,s.jsx)(n.td,{children:"The organization data the user belongs to"}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"urn:logto:scope:organization_roles"})})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Claim name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Needs userinfo?"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"organization_roles"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string[]"})}),(0,s.jsxs)(n.td,{children:["The organization roles the user belongs to with the format of ",(0,s.jsx)(n.code,{children:"<organization_id>:<role_name>"})]}),(0,s.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:['Considering performance and the data size, if "Needs userinfo?" is "Yes", it means the claim will not show up in the ID token, but will be returned in the ',(0,s.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"userinfo endpoint"})," response."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},10128:(e,n,t)=>{t.d(n,{ZP:()=>d,d$:()=>r});var s=t(11527),o=t(17279),i=t(9246);const r=[...i.d$];function c(e){const n={a:"a",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Logto uses OIDC ",(0,s.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Claims",children:"scopes and claims conventions"})," to define the scopes and claims for retrieving user information from the ID token and OIDC ",(0,s.jsx)("a",{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"userinfo endpoint"}),'. Both of the "scope" and the "claim" are terms from the OAuth 2.0 and OpenID Connect (OIDC) specifications.']}),"\n",(0,s.jsxs)(n.p,{children:["In short, when you request a scope, you will get the corresponding claims in the user information. For example, if you request the ",(0,s.jsx)(n.code,{children:"email"})," scope, you will get the ",(0,s.jsx)(n.code,{children:"email"})," and ",(0,s.jsx)(n.code,{children:"email_verified"})," data of the user."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, Logto SDK will always request three scopes: ",(0,s.jsx)(n.code,{children:"openid"}),", ",(0,s.jsx)(n.code,{children:"profile"}),". And ",(0,s.jsx)(n.code,{children:"offline_access"}),", and there is no way to remove these default scopes. But you can add more scopes when configuring Logto:"]}),"\n",e.configScopesCode,"\n",(0,s.jsx)(i.ZP,{})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},38816:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,s.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,s.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,s.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,s.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},87590:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Add the following URI to the ",(0,s.jsx)(n.code,{children:"Redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://<your-web-app-uri>/Callback\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,s.jsx)(n.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the ",(0,s.jsx)(n.strong,{children:"Logto redirect URI"})," and the ",(0,s.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,s.jsx)(n.strong,{children:"application redirect URI"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Logto redirect URI"})," has a default value of ",(0,s.jsx)(n.code,{children:"/Callback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,s.jsx)(n.code,{children:"CallbackPath"})," property for ",(0,s.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.CallbackPath = "/SomeOtherCallbackPath";\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["No need to set the ",(0,s.jsx)(n.strong,{children:"application redirect URI"})," in the Logto application details page."]})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},31369:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Add the following URI to the ",(0,s.jsx)(n.code,{children:"Post sign-out redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://<your-web-app-uri>/SignedOutCallback\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note this is different from the redirect URI we'll use later in ",(0,s.jsx)(n.code,{children:"AuthenticationProperties"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// Just for reference, we will demonstrate how to use it later\nnew AuthenticationProperties\n{\n  RedirectUri = "/"\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the ",(0,s.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," and the ",(0,s.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,s.jsx)(n.strong,{children:"application post sign-out redirect URI"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default value of ",(0,s.jsx)(n.code,{children:"/SignedOutCallback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,s.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,s.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["No need to set the ",(0,s.jsx)(n.strong,{children:"application post sign-out redirect URI"})," in the Logto application details page."]})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},31464:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Sometimes you may need to fetch the access token or ID token for API calls. You can use the ",(0,s.jsx)(n.code,{children:"GetTokenAsync"})," method to fetch the tokens:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessToken);\nvar idToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.IdToken);\n"})}),"\n",(0,s.jsx)(n.p,{children:"No need to worry about the token expiration, the authentication middleware will automatically refresh the tokens when necessary."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Although the authentication middleware will automatically refresh the tokens, the claims in the user object will not be updated due to the limitation of the underlying OpenID Connect authentication handler.\nThis can be resolved once we write our own authentication handler."})}),"\n",(0,s.jsxs)(n.p,{children:["Note the access token above is an opaque token for the userinfo endpoint in OpenID Connect, which is not a JWT token. If you have specified the API resource, you need to use ",(0,s.jsx)(n.code,{children:"LogtoParameters.Tokens.AccessTokenForResource"})," to fetch the access token for the API resource:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"var accessToken = await HttpContext.GetTokenAsync(LogtoParameters.Tokens.AccessTokenForResource);\n"})}),"\n",(0,s.jsx)(n.p,{children:"This token will be a JWT token with the API resource as the audience."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},75852:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,s.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,s.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},87442:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},46649:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>d});var s=t(11527),o=t(17279),i=t(10128);function r(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"builder.Services.AddLogtoAuthentication(options =>\n{\n  // ...\n  options.Scopes = new string[] {\n    LogtoParameters.Scopes.Email,\n    LogtoParameters.Scopes.Phone\n  }\n});\n"})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}const d=[...i.d$];function a(e){return(0,s.jsx)(i.ZP,{configScopesCode:(0,s.jsx)(c,{})})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a()}},47348:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Considering performance and the data size, Logto doesn't include all the claims in the ID token, such as ",(0,s.jsx)(n.code,{children:"custom_data"})," which could be a large JSON object. To fetch these claims, you need to set the ",(0,s.jsx)(n.code,{children:"GetClaimsFromUserInfoEndpoint"})," property to ",(0,s.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"builder.Services.AddLogtoAuthentication(options =>\n{\n  // ...\n  options.GetClaimsFromUserInfoEndpoint = true;\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Currently, the following claims are not included in the ID token:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LogtoParameters.Claims.CustomData"})," (use ",(0,s.jsx)(n.code,{children:"LogtoParameters.Scopes.CustomData"})," to fetch)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"LogtoParameters.Claims.Identities"})," (use ",(0,s.jsx)(n.code,{children:"LogtoParameters.Scopes.Identities"})," to fetch)"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},64384:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["To know if the user is authenticated, you can check the ",(0,s.jsx)(n.code,{children:"User.Identity?.IsAuthenticated"})," property."]}),"\n",(0,s.jsxs)(n.p,{children:["To get the user profile claims, you can use the ",(0,s.jsx)(n.code,{children:"User.Claims"})," property:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"var claims = User.Claims;\n\n// Get the user ID\nvar userId = claims.FirstOrDefault(c => c.Type == LogtoParameters.Claims.Subject)?.Value;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://github.com/logto-io/csharp/tree/master/src/Logto.AspNetCore.Authentication/docs/api/Logto/AspNetCore/Authentication/LogtoParameters/Claims/index.md",children:(0,s.jsx)(n.code,{children:"LogtoParameters.Claims"})})," for the list of claim names and their meanings."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},52365:(e,n,t)=>{t.d(n,{ZP:()=>p,d$:()=>l});var s=t(11527),o=t(17279),i=t(22002);function r(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // ...\n  options.Resource = "https://<your-api-resource-indicator>";\n});\n'})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}function d(e){const n={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // ...\n  options.Resource = "https://shopping.your-app.com/api";\n  options.Scopes = new string[] {\n    "openid",\n    "profile",\n    "offline_access",\n    "read",\n    "write"\n  };\n});\n'})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}const l=[...i.d$];function h(e){return(0,s.jsx)(i.ZP,{configResourcesCode:(0,s.jsx)(c,{}),configResourcesWithScopesCode:(0,s.jsx)(a,{})})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h()}},66236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>A,frontMatter:()=>b,metadata:()=>w,toc:()=>I});var s=t(11527),o=t(17279),i=t(83637),r=t(20516),c=t(62212),d=t(38816),a=t(87590),l=t(31369),h=t(31464),p=t(75852),u=t(87442),x=t(46649),j=t(47348),g=t(64384),m=t(52365),f=t(30735);const b={slug:"/sdk/dotnet-core/razor",sidebar_label:".NET Core (Razor Pages)",sidebar_custom_props:{logoFilename:"dotnet-core.svg"}},y=".NET Core: Integrate Logto with Razor Pages",w={id:"sdk/web/dotnet-razor/README",title:".NET Core: Integrate Logto with Razor Pages",description:"Prerequisites",source:"@site/docs/sdk/web/dotnet-razor/README.mdx",sourceDirName:"sdk/web/dotnet-razor",slug:"/sdk/dotnet-core/razor",permalink:"/sdk/dotnet-core/razor",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/web/dotnet-razor/README.mdx",tags:[],version:"current",frontMatter:{slug:"/sdk/dotnet-core/razor",sidebar_label:".NET Core (Razor Pages)",sidebar_custom_props:{logoFilename:"dotnet-core.svg"}},sidebar:"sdkSidebar",previous:{title:".NET Core (MVC)",permalink:"/sdk/dotnet-core/mvc"},next:{title:"Express",permalink:"/sdk/express"}},v={},I=[...p.d$,{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},...u.d$,{value:"Integration",id:"integration",level:2},{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...d.d$,{value:"Add sign-in redirect URI",id:"add-sign-in-redirect-uri",level:3},...a.d$,{value:"Add sign-out redirect URI",id:"add-sign-out-redirect-uri",level:3},...l.d$,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...f.d$,...r.d$,{value:"The user object",id:"the-user-object",level:2},...g.d$,{value:"Scopes and claims",id:"scopes-and-claims",level:2},...x.d$,{value:"Special ID token claims",id:"special-id-token-claims",level:3},...j.d$,{value:"API resources",id:"api-resources",level:2},...i.d$,{value:"Configure API resource in your app",id:"configure-api-resource-in-your-app",level:3},...m.d$,{value:"Fetch tokens",id:"fetch-tokens",level:2},...h.d$,{value:"Further readings",id:"further-readings",level:2},...c.d$];function P(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"net-core-integrate-logto-with-razor-pages",children:".NET Core: Integrate Logto with Razor Pages"}),"\n",(0,s.jsx)(p.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://cloud.logto.io",children:"Logto Cloud"})," account or a self-hosted Logto (Check out the ",(0,s.jsx)(n.a,{href:"../../../docs/tutorials/get-started/",children:"\u26a1 Get started"})," guide to create one if you don't have)."]}),"\n",(0,s.jsx)(n.li,{children:"A Logto traditional web application created."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(u.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,s.jsx)(n.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,s.jsx)(d.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"add-sign-in-redirect-uri",children:"Add sign-in redirect URI"}),"\n",(0,s.jsx)(a.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"add-sign-out-redirect-uri",children:"Add sign-out redirect URI"}),"\n",(0,s.jsx)(l.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,s.jsx)(f.ZP,{}),"\n",(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"the-user-object",children:"The user object"}),"\n",(0,s.jsx)(g.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"scopes-and-claims",children:"Scopes and claims"}),"\n",(0,s.jsx)(x.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"special-id-token-claims",children:"Special ID token claims"}),"\n",(0,s.jsx)(j.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"api-resources",children:"API resources"}),"\n",(0,s.jsx)(i.ZP,{}),"\n",(0,s.jsx)(n.h3,{id:"configure-api-resource-in-your-app",children:"Configure API resource in your app"}),"\n",(0,s.jsx)(m.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"fetch-tokens",children:"Fetch tokens"}),"\n",(0,s.jsx)(h.ZP,{}),"\n",(0,s.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,s.jsx)(c.ZP,{})]})}function A(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(P,{...e})}):P(e)}},30735:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>i});var s=t(11527),o=t(17279);const i=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["First, add the handler methods to your ",(0,s.jsx)(n.code,{children:"PageModel"}),", for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'public class IndexModel : PageModel\n{\n  public async Task OnPostSignInAsync()\n  {\n    await HttpContext.ChallengeAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n\n  public async Task OnPostSignOutAsync()\n  {\n    await HttpContext.SignOutAsync(new AuthenticationProperties\n    {\n      RedirectUri = "/"\n    });\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then, add the buttons to your Razor page:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cshtml",children:'<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n<form method="post">\n  @if (User.Identity?.IsAuthenticated == true) {\n    <button type="submit" asp-page-handler="SignOut">Sign out</button>\n  } else {\n    <button type="submit" asp-page-handler="SignIn">Sign in</button>\n  }\n</form>\n'})}),"\n",(0,s.jsx)(n.p,{children:'It will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},17279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(50959);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);