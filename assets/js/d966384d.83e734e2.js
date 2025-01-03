"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[28155],{9360:(e,o,n)=>{n.d(o,{Ay:()=>l,RM:()=>i});var t=n(25105),s=n(79621);const i=[];function c(e){const o={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["This guide assumes you have basic understanding of Logto Connectors. For those unfamiliar, please refer to the ",(0,t.jsx)(o.a,{href:"/connectors",children:"Connectors"})," guide to get started."]})})}function l(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28779:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"integrations/social/facebook/README","title":"Set up social login with Facebook","description":"The official Logto connector for Facebook social sign-in.","source":"@site/docs/integrations/social/facebook/README.mdx","sourceDirName":"integrations/social/facebook","slug":"/integrations/facebook","permalink":"/integrations/facebook","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/social/facebook/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/facebook","sidebar_label":"Facebook","sidebar_custom_props":{"description":"Facebook is a worldwide social media platform with billions of users."}},"sidebar":"integrationsSidebar","previous":{"title":"Discord","permalink":"/integrations/discord"},"next":{"title":"Feishu","permalink":"/integrations/feishu-web"}}');var s=n(25105),i=n(79621),c=n(9360);const l={slug:"/integrations/facebook",sidebar_label:"Facebook",sidebar_custom_props:{description:"Facebook is a worldwide social media platform with billions of users."}},r="Set up social login with Facebook",a={},d=[...c.RM,{value:"Get started",id:"get-started",level:2},{value:"Register a Facebook developer account",id:"register-a-facebook-developer-account",level:3},{value:"Set up a Facebook app",id:"set-up-a-facebook-app",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:2},{value:"Test sign-in with Facebook&#39;s test users",id:"test-sign-in-with-facebooks-test-users",level:2},{value:"Publish Facebook sign-in settings",id:"publish-facebook-sign-in-settings",level:2},{value:"Config types",id:"config-types",level:2},{value:"References",id:"references",level:2}];function h(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"set-up-social-login-with-facebook",children:"Set up social login with Facebook"})}),"\n",(0,s.jsx)(o.p,{children:"The official Logto connector for Facebook social sign-in."}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(o.h2,{id:"get-started",children:"Get started"}),"\n",(0,s.jsx)(o.p,{children:"The Facebook connector provides a concise way for your application to use Facebook's OAuth 2.0 authentication system."}),"\n",(0,s.jsx)(o.h3,{id:"register-a-facebook-developer-account",children:"Register a Facebook developer account"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/development/register/",children:"Register as a Facebook Developer"})," if you don't already have one"]}),"\n",(0,s.jsx)(o.h3,{id:"set-up-a-facebook-app",children:"Set up a Facebook app"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Visit the ",(0,s.jsx)(o.a,{href:"https://developers.facebook.com/apps",children:"Apps"})," page."]}),"\n",(0,s.jsxs)(o.li,{children:["Click your existing app or ",(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/development/create-an-app",children:"create a new one"})," if needed.","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["The selected ",(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types",children:"app type"})," is up to you, but it should have the product ",(0,s.jsx)(o.em,{children:"Facebook Login"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.li,{children:'On the app dashboard page, scroll to the "Add a product" section and click the "Set up" button on the "Facebook Login" card.'}),"\n",(0,s.jsx)(o.li,{children:'Skip the Facebook Login Quickstart page, and click the sidebar -> "Products" -> "Facebook Login" -> "Settings".'}),"\n",(0,s.jsxs)(o.li,{children:["In the Facebook Login Settings page, fill ",(0,s.jsx)(o.code,{children:"${your_logto_origin}/callback/${connector_id}"}),' in the "Valid OAuth Redirect URIs" field. The ',(0,s.jsx)(o.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page. E.g.:","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"https://logto.dev/callback/${connector_id}"})," for production"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.code,{children:"https://localhost:3001/callback/${connector_id}"})," for testing in the local environment"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:'In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic".'}),"\n",(0,s.jsx)(o.li,{children:'You will see the "App ID" and "App secret" on the panel.'}),"\n",(0,s.jsx)(o.li,{children:'Click the "Show" button following the App secret input box to copy its content.'}),"\n",(0,s.jsxs)(o.li,{children:["Fill out the Logto connector settings:","\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Fill out the ",(0,s.jsx)(o.code,{children:"clientId"})," field with the string from ",(0,s.jsx)(o.em,{children:"App ID"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Fill out the ",(0,s.jsx)(o.code,{children:"clientSecret"})," field with the string from ",(0,s.jsx)(o.em,{children:"App secret"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Fill out the ",(0,s.jsx)(o.code,{children:"scope"})," field with a comma or space separated list of ",(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/permissions/reference",children:"permissions"})," in string. If you do not specify a scope, the default scope is ",(0,s.jsx)(o.code,{children:"email,public_profile"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"test-sign-in-with-facebooks-test-users",children:"Test sign-in with Facebook's test users"}),"\n",(0,s.jsxs)(o.p,{children:["You can use the accounts of the test, developer, and admin users to test sign-in with the related app under both development and live ",(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes",children:"app modes"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["You can also ",(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"take the app live"})," directly so that any Facebook user can sign in with the app."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'In the app dashboard page, click the sidebar -> "Roles" -> "Test Users".'}),"\n",(0,s.jsx)(o.li,{children:'Click the "Create test users" button to create a testing user.'}),"\n",(0,s.jsx)(o.li,{children:'Click the "Options" button of the existing test user, and you will see more operations, e.g., "Change name and password".'}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"publish-facebook-sign-in-settings",children:"Publish Facebook sign-in settings"}),"\n",(0,s.jsxs)(o.p,{children:["Usually, only the test, admin, and developer users can sign in with the related app under ",(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode",children:"development mode"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["To enable normal Facebook users sign-in with the app in the production environment, you maybe need to switch your Facebook app to ",(0,s.jsx)(o.em,{children:(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"live mode"})}),", depending on the app type.\nE.g., the pure ",(0,s.jsx)(o.em,{children:"business type"})," app doesn't have the \"live\" switch button, but it won't block your use."]}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:'In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic".'}),"\n",(0,s.jsx)(o.li,{children:'Fill out the "Privacy Policy URL" and "User data deletion" fields on the panel if required.'}),"\n",(0,s.jsx)(o.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,s.jsx)(o.li,{children:'Click the "Live" switch button on the app top bar.'}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"config-types",children:"Config types"}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Name"}),(0,s.jsx)(o.th,{children:"Type"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"clientId"}),(0,s.jsx)(o.td,{children:"string"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"clientSecret"}),(0,s.jsx)(o.td,{children:"string"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"scope"}),(0,s.jsx)(o.td,{children:"string"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/facebook-login/",children:"Facebook Login - Documentation - Facebook for Developers"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/",children:"Manually Build a Login Flow"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/permissions",children:"Permissions Guide"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79621:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>l});var t=n(58101);const s={},i=t.createContext(s);function c(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);