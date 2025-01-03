"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51551],{42113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/email/http-mail/README","title":"Set up email verification via HTTP call","description":"The official Logto connector for HTTP email.","source":"@site/docs/integrations/email/http-mail/README.mdx","sourceDirName":"integrations/email/http-mail","slug":"/integrations/http-email","permalink":"/integrations/http-email","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/email/http-mail/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/http-email","sidebar_label":"HTTP Email","sidebar_custom_props":{"description":"Send email via HTTP call."}},"sidebar":"integrationsSidebar","previous":{"title":"AWS Direct Mail","permalink":"/integrations/aws-ses"},"next":{"title":"Mailgun","permalink":"/integrations/mailgun"}}');var o=n(25105),a=n(79621),l=n(9360);const s={slug:"/integrations/http-email",sidebar_label:"HTTP Email",sidebar_custom_props:{description:"Send email via HTTP call."}},r="Set up email verification via HTTP call",c={},d=[...l.RM,{value:"Get started",id:"get-started",level:2},{value:"Set up HTTP email connector",id:"set-up-http-email-connector",level:2},{value:"Payload",id:"payload",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"set-up-email-verification-via-http-call",children:"Set up email verification via HTTP call"})}),"\n",(0,o.jsx)(t.p,{children:"The official Logto connector for HTTP email."}),"\n",(0,o.jsx)(l.Ay,{}),"\n",(0,o.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,o.jsx)(t.p,{children:"The HTTP email connector allows you to send emails via HTTP call. To use the HTTP email connector, you'll need to have your own email service that expose an HTTP API for sending emails. Logto will call this API when it needs to send an email. For example, when a user registers, Logto will call the HTTP API to send a verification email."}),"\n",(0,o.jsx)(t.h2,{id:"set-up-http-email-connector",children:"Set up HTTP email connector"}),"\n",(0,o.jsx)(t.p,{children:"To use the HTTP email connector, you need to set up an HTTP endpoint that Logto can call. And an optional authorization token for the endpoint."}),"\n",(0,o.jsx)(t.h2,{id:"payload",children:"Payload"}),"\n",(0,o.jsx)(t.p,{children:"The HTTP email connector will send the following payload to the endpoint when it needs to send an email:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "to": "foo@logto.io",\n  "type": "SignIn",\n  "payload": {\n    "code": "123456"\n  }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can find all of the types in ",(0,o.jsx)(t.a,{href:"/connectors/email-connectors/built-in-email-service/#unified-email-templates",children:"Email template"}),", and the full type definition of ",(0,o.jsx)(t.code,{children:"SendMessageData"})," in ",(0,o.jsx)(t.a,{href:"https://github.com/logto-io/logto/tree/master/packages/toolkit/connector-kit/src/types/passwordless.ts",children:"connector-kit"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9360:(e,t,n)=>{n.d(t,{Ay:()=>s,RM:()=>a});var i=n(25105),o=n(79621);const a=[];function l(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["This guide assumes you have basic understanding of Logto Connectors. For those unfamiliar, please refer to the ",(0,i.jsx)(t.a,{href:"/connectors",children:"Connectors"})," guide to get started."]})})}function s(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},79621:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var i=n(58101);const o={},a=i.createContext(o);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);