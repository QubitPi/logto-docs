"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19304],{9360:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>s});var t=i(25105),o=i(79621);const s=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["This guide assumes you have basic understanding of Logto Connectors. For those unfamiliar, please refer to the ",(0,t.jsx)(n.a,{href:"/connectors",children:"Connectors"})," guide to get started."]})})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4209:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"integrations/social/feishu-web/README","title":"Set up social sign-in with Feishu","description":"Feishu Web: An advanced enterprise collaboration and management platform, offering seamless office collaboration and aligning team goals to fully activate organizations and individuals.","source":"@site/docs/integrations/social/feishu-web/README.mdx","sourceDirName":"integrations/social/feishu-web","slug":"/integrations/feishu-web","permalink":"/integrations/feishu-web","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/social/feishu-web/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/feishu-web","sidebar_label":"Feishu","sidebar_custom_props":{"description":"Feishu is an enterprise collaboration platform developed by ByteDance.","logoFilename":"feishu.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Facebook","permalink":"/integrations/facebook"},"next":{"title":"GitHub","permalink":"/integrations/github"}}');var o=i(25105),s=i(79621),a=i(9360);const r={slug:"/integrations/feishu-web",sidebar_label:"Feishu",sidebar_custom_props:{description:"Feishu is an enterprise collaboration platform developed by ByteDance.",logoFilename:"feishu.svg"}},c="Set up social sign-in with Feishu",l={},d=[...a.RM,{value:"Getting started with Feishu social sign-in",id:"getting-started-with-feishu-social-sign-in",level:2},{value:"Register a Feishu developer account",id:"register-a-feishu-developer-account",level:2},{value:"Create an application",id:"create-an-application",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"set-up-social-sign-in-with-feishu",children:"Set up social sign-in with Feishu"})}),"\n",(0,o.jsx)(n.p,{children:"Feishu Web: An advanced enterprise collaboration and management platform, offering seamless office collaboration and aligning team goals to fully activate organizations and individuals."}),"\n",(0,o.jsx)(a.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"getting-started-with-feishu-social-sign-in",children:"Getting started with Feishu social sign-in"}),"\n",(0,o.jsx)(n.p,{children:"The Feishu web connector is designed for desktop web applications and uses the OAuth 2.0 authentication process."}),"\n",(0,o.jsx)(n.h2,{id:"register-a-feishu-developer-account",children:"Register a Feishu developer account"}),"\n",(0,o.jsxs)(n.p,{children:["If you do not have a Feishu developer account, please register on the ",(0,o.jsx)(n.a,{href:"https://open.feishu.cn/app",children:"Feishu Open Platform"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application",children:"Create an application"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.a,{href:"https://open.feishu.cn/app",children:"Developer Console"}),', click "Create Custom App".']}),"\n",(0,o.jsx)(n.li,{children:'Fill in the application name, description, select an icon, and click "Create" button.'}),"\n",(0,o.jsxs)(n.li,{children:['In the left sidebar, click "Security Settings", fill in the "Redirect URL" as ',(0,o.jsx)(n.code,{children:"${logto_endpoint}/callback/${connector_id}"}),". The corresponding value can be found in the ",(0,o.jsx)(n.code,{children:"Callback URI"})," field on the Feishu connector details page in the Logto Console."]}),"\n",(0,o.jsx)(n.li,{children:'In "Credentials & Basic Info", you can obtain the "App ID" and "App Secret".'}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:'For non-enterprise internal use, you also need to click "Create a version" button in "Version Management and Release" page.\nThe "App ID" and "App Secret" will only take effect after the application status changes to "Enabled."'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(58101);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);