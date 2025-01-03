"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[76674],{64918:(e,t,o)=>{o.d(t,{Ay:()=>a,RM:()=>s});var n=o(25105),i=o(79621);const s=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For more information about SSO and how to configure SSO in Logto, please check out the ",(0,n.jsx)(t.a,{href:"/connectors/enterprise-connectors",children:"Enterprise SSO (SAML & OIDC)"})," documentation to get started."]})})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},28348:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"integrations/sso/oidc/README","title":"Set up Single Sign-On with OpenID Connect (OIDC)","description":"With minimal configuration efforts, this connector allows integration with any OIDC-based Identity Provider (IdP).","source":"@site/docs/integrations/sso/oidc/README.mdx","sourceDirName":"integrations/sso/oidc","slug":"/integrations/oidc-sso","permalink":"/integrations/oidc-sso","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/sso/oidc/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/oidc-sso","sidebar_label":"OIDC (Enterprise)","sidebar_custom_props":{"description":"Modern protocol built on OAuth 2.0 for identity verification in web and mobile apps.","logoFilename":"oidc.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Google Workspace","permalink":"/integrations/google-workspace"},"next":{"title":"Okta","permalink":"/integrations/okta"}}');var i=o(25105),s=o(79621),r=o(64918);const a={slug:"/integrations/oidc-sso",sidebar_label:"OIDC (Enterprise)",sidebar_custom_props:{description:"Modern protocol built on OAuth 2.0 for identity verification in web and mobile apps.",logoFilename:"oidc.svg"}},c="Set up Single Sign-On with OpenID Connect (OIDC)",d={},l=[...r.RM,{value:"Step 1: Create an OIDC application on your IdP",id:"step-1-create-an-oidc-application-on-your-idp",level:2},{value:"Step 2: Configure OIDC SSO on Logto",id:"step-2-configure-oidc-sso-on-logto",level:2},{value:"Step 3: Set email domains and enable the SSO connector",id:"step-3-set-email-domains-and-enable-the-sso-connector",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"set-up-single-sign-on-with-openid-connect-oidc",children:"Set up Single Sign-On with OpenID Connect (OIDC)"})}),"\n",(0,i.jsx)(t.p,{children:"With minimal configuration efforts, this connector allows integration with any OIDC-based Identity Provider (IdP)."}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(t.h2,{id:"step-1-create-an-oidc-application-on-your-idp",children:"Step 1: Create an OIDC application on your IdP"}),"\n",(0,i.jsx)(t.p,{children:"Initiate the OIDC SSO integration by creating an application on the IdP side. You will need to provide the following configurations from the Logto server."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Callback URI"}),": The Logto Callback URI, also known as the Redirect URI or Reply URL, is a specific endpoint or URL that the IdP uses to redirect the user's browser after successful authentication. After a user successfully authenticates with the IdP, the IdP redirects the user's browser back to this designated URI along with an authorization code. Logto will complete the authentication process based on authorization code received from this URI."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Fill in the Logto Callback URI in your IdP OIDC application settings form and continue to create the application. (Most of the OIDC IdPs provide a wide range of application types to choose from. To create a web-based SSO connector on Logto, please choose the ",(0,i.jsx)(t.code,{children:"Web Application"})," type.)"]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-configure-oidc-sso-on-logto",children:"Step 2: Configure OIDC SSO on Logto"}),"\n",(0,i.jsxs)(t.p,{children:["After successfully creating an OIDC application on the IdP side, you will need to provide the IdP configurations back to Logto. Navigate to the ",(0,i.jsx)(t.code,{children:"Connection"})," tab, and fill in the following configurations:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client ID"}),": A unique identifier assigned to your OIDC application by the IdP. This identifier is used by Logto to identify and authenticate the application during the OIDC flow."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client Secret"}),": A confidential secret shared between Logto and the IdP. This secret is used to authenticate the OIDC application and secure the communication between Logto and the IdP."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Issuer"}),": The issuer URL, a unique identifier for the IdP, specifying the location where the OIDC identity provider can be found. It is a crucial part of the OIDC configuration as it helps Logto discover the necessary endpoints.\nTo make the configuration process easier. Logto will automatically fetch the required OIDC endpoints and configurations. This is done by utilizing the issuer you provided and making a call to the IdP's OIDC discover endpoints. It is imperative to ensure that the issuer endpoint is valid and accurately configured to enable Logto to retrieve the required information correctly.\nAfter a successful fetch request, you should be able to see the parsed IdP configurations under the issuers section."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Scope"}),": A space-separated list of strings defining the desired permissions or access levels requested by Logto during the OIDC authentication process. The scope parameter allows you to specify what information and access Logto is requesting from the IdP.\nThe scope parameter is optional. Regardless of the custom scope settings, Logto will always send the ",(0,i.jsx)(t.code,{children:"openid"}),", ",(0,i.jsx)(t.code,{children:"profile"})," and ",(0,i.jsx)(t.code,{children:"email"})," scopes to the IdP.\nThis is to ensure that Logto can retrieve the user's identity information and email address properly from the IdP. You may add additional scopes to the scope parameter to request for more information from the IdP."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-3-set-email-domains-and-enable-the-sso-connector",children:"Step 3: Set email domains and enable the SSO connector"}),"\n",(0,i.jsxs)(t.p,{children:["Provide the ",(0,i.jsx)(t.code,{children:"email domains"})," of your organization on Logto\u2019s connector ",(0,i.jsx)(t.code,{children:"SSO experience"})," tab. This will enable the SSO connector as an authentication method for those users."]}),"\n",(0,i.jsx)(t.p,{children:"Users with email addresses in the specified domains will be redirected to use your SSO connector as their only authentication method."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79621:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(58101);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);