"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[34640],{63436:(e,o,n)=>{n.d(o,{Ay:()=>r,RM:()=>c});var s=n(25105),t=n(79621);const c=[];function i(e){const o={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["SSO \u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u3084 Logto \u3067\u306e SSO \u306e\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(o.a,{href:"/connectors/enterprise-connectors",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) (SAML & OIDC)"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u59cb\u3081\u3066\u304f\u3060\u3055\u3044\u3002"]})})}function r(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},12658:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"integrations/sso/google-workspace/README","title":"Google Workspace \u3092\u4f7f\u7528\u3057\u3066\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u8a2d\u5b9a\u3059\u308b","description":"\u6700\u5c0f\u9650\u306e\u8a2d\u5b9a\u4f5c\u696d\u3067\u3001\u3053\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u306f Microsoft Entra ID \u3068\u7d71\u5408\u3057\u3066\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) \u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","sourceDirName":"integrations/sso/google-workspace","slug":"/integrations/google-workspace","permalink":"/ja/integrations/google-workspace","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/google-workspace","sidebar_label":"Google Workspace","sidebar_custom_props":{"description":"Google \u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u5185\u3067\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9\u306e\u7d71\u4e00\u3055\u308c\u305f\u5b89\u5168\u306a\u7ba1\u7406\u3002","logoFilename":"google.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Microsoft Entra ID (SAML)","permalink":"/ja/integrations/entra-id-saml"},"next":{"title":"OIDC (Enterprise)","permalink":"/ja/integrations/oidc-sso"}}');var t=n(25105),c=n(79621),i=n(63436);const r={slug:"/integrations/google-workspace",sidebar_label:"Google Workspace",sidebar_custom_props:{description:"Google \u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u5185\u3067\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30bb\u30b9\u306e\u7d71\u4e00\u3055\u308c\u305f\u5b89\u5168\u306a\u7ba1\u7406\u3002",logoFilename:"google.svg"}},l="Google Workspace \u3092\u4f7f\u7528\u3057\u3066\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",d={},a=[...i.RM,{value:"\u30b9\u30c6\u30c3\u30d7 1: Google Cloud Platform \u3067\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"step-1-create-a-new-project-on-google-cloud-platform",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 2: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u540c\u610f\u753b\u9762\u3092\u8a2d\u5b9a\u3059\u308b",id:"step-2-config-the-consent-screen-for-your-application",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 3: \u65b0\u3057\u3044 OAuth \u8cc7\u683c\u60c5\u5831\u3092\u4f5c\u6210\u3059\u308b",id:"step-3-create-a-new-oauth-credential",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 4: \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8cc7\u683c\u60c5\u5831\u3092\u4f7f\u7528\u3057\u3066 Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a\u3059\u308b",id:"step-4-set-up-logto-connector-with-the-client-credentials",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 5: \u8ffd\u52a0\u306e\u30b9\u30b3\u30fc\u30d7 (\u30aa\u30d7\u30b7\u30e7\u30f3)",id:"step-5-additional-scopes-optional",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 6: \u30e1\u30fc\u30eb\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u3001SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b",id:"step-6-set-email-domains-and-enable-the-sso-connector",level:2}];function h(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"google-workspace-\u3092\u4f7f\u7528\u3057\u3066\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",children:"Google Workspace \u3092\u4f7f\u7528\u3057\u3066\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,t.jsx)(o.p,{children:"\u6700\u5c0f\u9650\u306e\u8a2d\u5b9a\u4f5c\u696d\u3067\u3001\u3053\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u306f Microsoft Entra ID \u3068\u7d71\u5408\u3057\u3066\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) \u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(o.h2,{id:"step-1-create-a-new-project-on-google-cloud-platform",children:"\u30b9\u30c6\u30c3\u30d7 1: Google Cloud Platform \u3067\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(o.p,{children:["Google Workspace \u3092\u8a8d\u8a3c (Authentication) \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u524d\u306b\u3001",(0,t.jsx)(o.a,{href:"https://console.developers.google.com/",children:"Google API Console"})," \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3057\u3066 OAuth 2.0 \u8cc7\u683c\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3059\u3067\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u30b9\u30ad\u30c3\u30d7\u3067\u304d\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u3001Google \u7d44\u7e54\u306e\u4e0b\u3067\u65b0\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"step-2-config-the-consent-screen-for-your-application",children:"\u30b9\u30c6\u30c3\u30d7 2: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u540c\u610f\u753b\u9762\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,t.jsx)(o.p,{children:"\u65b0\u3057\u3044 OIDC \u8cc7\u683c\u60c5\u5831\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u540c\u610f\u753b\u9762\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/apis/credentials/consent",children:"OAuth \u540c\u610f\u753b\u9762"})," \u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001",(0,t.jsx)(o.code,{children:"Internal"})," \u30e6\u30fc\u30b6\u30fc\u30bf\u30a4\u30d7\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001OAuth \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u7d44\u7e54\u5185\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c\u5229\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace consent screen user type.webp",src:n(9423).A+"",width:"2604",height:"1363"})}),"\n",(0,t.jsxs)(o.ol,{start:"2",children:["\n",(0,t.jsxs)(o.li,{children:["\u30da\u30fc\u30b8\u306e\u6307\u793a\u306b\u5f93\u3063\u3066 ",(0,t.jsx)(o.code,{children:"Consent Screen"})," \u8a2d\u5b9a\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u6b21\u306e\u6700\u4f4e\u9650\u306e\u60c5\u5831\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d"}),": \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u540d\u524d\u3002\u3053\u308c\u306f\u540c\u610f\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"\u30b5\u30dd\u30fc\u30c8\u30e1\u30fc\u30eb"}),": \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b5\u30dd\u30fc\u30c8\u30e1\u30fc\u30eb\u3002\u3053\u308c\u306f\u540c\u610f\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace consent screen settings.webp",src:n(67432).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(o.ol,{start:"3",children:["\n",(0,t.jsxs)(o.li,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,t.jsx)(o.code,{children:"Scopes"})," \u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u60c5\u5831\u3068\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092 IdP \u304b\u3089\u9069\u5207\u306b\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u3001Logto SSO \u30b3\u30cd\u30af\u30bf\u30fc\u306f IdP \u304b\u3089\u6b21\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u4ed8\u4e0e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace consent screen scopes.webp",src:n(66128).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"openid"}),": \u3053\u306e\u30b9\u30b3\u30fc\u30d7\u306f OIDC \u8a8d\u8a3c (Authentication) \u306b\u5fc5\u8981\u3067\u3059\u3002ID \u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u3001IdP \u306e userInfo \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"profile"}),": \u30e6\u30fc\u30b6\u30fc\u306e\u57fa\u672c\u7684\u306a\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"email"}),": \u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Save"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u540c\u610f\u753b\u9762\u306e\u8a2d\u5b9a\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"step-3-create-a-new-oauth-credential",children:"\u30b9\u30c6\u30c3\u30d7 3: \u65b0\u3057\u3044 OAuth \u8cc7\u683c\u60c5\u5831\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Credentials"})," \u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001",(0,t.jsx)(o.code,{children:"Create Credentials"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089 ",(0,t.jsx)(o.code,{children:"OAuth client ID"})," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u306e\u65b0\u3057\u3044 OAuth \u8cc7\u683c\u60c5\u5831\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace create credentials.webp",src:n(87222).A+"",width:"2604",height:"1363"})}),"\n",(0,t.jsx)(o.p,{children:"\u6b21\u306e\u60c5\u5831\u3092\u5165\u529b\u3057\u3066 OAuth \u8cc7\u683c\u60c5\u5831\u306e\u8a2d\u5b9a\u3092\u7d9a\u884c\u3057\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace credentials config.webp",src:n(67830).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u3068\u3057\u3066 ",(0,t.jsx)(o.code,{children:"Web application"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:["\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,t.jsx)(o.code,{children:"Name"})," \u3092\u5165\u529b\u3057\u307e\u3059\u3002\u4f8b\u3068\u3057\u3066 ",(0,t.jsx)(o.code,{children:"Logto SSO Connector"}),"\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5c06\u6765\u8cc7\u683c\u60c5\u5831\u3092\u8b58\u5225\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Authorized redirect URIs"})," \u306b Logto \u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u3092\u5165\u529b\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001Google \u304c\u8a8d\u8a3c (Authentication) \u306b\u6210\u529f\u3057\u305f\u5f8c\u306b\u30e6\u30fc\u30b6\u30fc\u306e\u30d6\u30e9\u30a6\u30b6\u3092\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3059\u308b URI \u3067\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c IdP \u3067\u306e\u8a8d\u8a3c (Authentication) \u306b\u6210\u529f\u3059\u308b\u3068\u3001IdP \u306f\u30e6\u30fc\u30b6\u30fc\u306e\u30d6\u30e9\u30a6\u30b6\u3092\u3053\u306e\u6307\u5b9a\u3055\u308c\u305f URI \u306b\u8a8d\u53ef\u30b3\u30fc\u30c9\u3068\u5171\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u307e\u3059\u3002Logto \u306f\u3053\u306e URI \u304b\u3089\u53d7\u3051\u53d6\u3063\u305f\u8a8d\u53ef\u30b3\u30fc\u30c9\u306b\u57fa\u3065\u3044\u3066\u8a8d\u8a3c (Authentication) \u30d7\u30ed\u30bb\u30b9\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Authorized JavaScript origins"})," \u306b Logto \u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u306e\u30aa\u30ea\u30b8\u30f3\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Logto \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u307f\u304c Google OAuth \u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Create"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 OAuth \u8cc7\u683c\u60c5\u5831\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"step-4-set-up-logto-connector-with-the-client-credentials",children:"\u30b9\u30c6\u30c3\u30d7 4: \u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8cc7\u683c\u60c5\u5831\u3092\u4f7f\u7528\u3057\u3066 Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,t.jsx)(o.p,{children:"OAuth \u8cc7\u683c\u60c5\u5831\u3092\u6b63\u5e38\u306b\u4f5c\u6210\u3057\u305f\u5f8c\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 ID \u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u542b\u3080\u30d7\u30ed\u30f3\u30d7\u30c8\u30e2\u30fc\u30c0\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace client credentials.webp",src:n(82089).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Client ID"})," \u3068 ",(0,t.jsx)(o.code,{children:"Client secret"})," \u3092\u30b3\u30d4\u30fc\u3057\u3001Logto \u306e SSO \u30b3\u30cd\u30af\u30bf\u30fc\u306e ",(0,t.jsx)(o.code,{children:"Connection"})," \u30bf\u30d6\u306b\u5bfe\u5fdc\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u3053\u308c\u3067\u3001Logto \u306b Google Workspace SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6b63\u5e38\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,t.jsx)(o.h2,{id:"step-5-additional-scopes-optional",children:"\u30b9\u30c6\u30c3\u30d7 5: \u8ffd\u52a0\u306e\u30b9\u30b3\u30fc\u30d7 (\u30aa\u30d7\u30b7\u30e7\u30f3)"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Scope"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001OAuth \u30ea\u30af\u30a8\u30b9\u30c8\u306b\u8ffd\u52a0\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Google OAuth \u30b5\u30fc\u30d0\u30fc\u304b\u3089\u3088\u308a\u591a\u304f\u306e\u60c5\u5831\u3092\u8981\u6c42\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(o.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Google OAuth Scopes"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:["\u30ab\u30b9\u30bf\u30e0\u30b9\u30b3\u30fc\u30d7\u8a2d\u5b9a\u306b\u95a2\u4fc2\u306a\u304f\u3001Logto \u306f\u5e38\u306b ",(0,t.jsx)(o.code,{children:"openid"}),"\u3001",(0,t.jsx)(o.code,{children:"profile"}),"\u3001\u304a\u3088\u3073 ",(0,t.jsx)(o.code,{children:"email"})," \u30b9\u30b3\u30fc\u30d7\u3092 IdP \u306b\u9001\u4fe1\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001Logto \u304c\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u60c5\u5831\u3068\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u9069\u5207\u306b\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"step-6-set-email-domains-and-enable-the-sso-connector",children:"\u30b9\u30c6\u30c3\u30d7 6: \u30e1\u30fc\u30eb\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u3001SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\n",(0,t.jsxs)(o.p,{children:["Logto \u306e\u30b3\u30cd\u30af\u30bf\u30fc ",(0,t.jsx)(o.code,{children:"SSO experience"})," \u30bf\u30d6\u306b\u7d44\u7e54\u306e ",(0,t.jsx)(o.code,{children:"email domains"})," \u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001SSO \u30b3\u30cd\u30af\u30bf\u30fc\u304c\u3053\u308c\u3089\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u8a8d\u8a3c (Authentication) \u65b9\u6cd5\u3068\u3057\u3066\u6709\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u6307\u5b9a\u3055\u308c\u305f\u30c9\u30e1\u30a4\u30f3\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u552f\u4e00\u306e\u8a8d\u8a3c (Authentication) \u65b9\u6cd5\u3068\u3057\u3066 SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(o.p,{children:["Google Workspace SSO \u30b3\u30cd\u30af\u30bf\u30fc\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(o.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect",children:"Google OpenID Connector"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function p(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},82089:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_client_credentials-04b46e076f40fb0bd433529cb59d6f46.webp"},66128:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_consent_screen_scopes-eb352a52b1f1056877a6b93edf68a0bb.webp"},67432:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_consent_screen_settings-e7eb6c977bb7d90015b38d1d9f84673e.webp"},9423:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_consent_screen_user_type-f5da0e8e1d400973d4702ce1f553fd27.webp"},87222:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_create_credentials-4b2f8a7bd881d99886aa1131503ea227.webp"},67830:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_credentials_config-0a4787d6350ce1a7c3e0c337bb0726c6.webp"},79621:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>r});var s=n(58101);const t={},c=s.createContext(t);function i(e){const o=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:o},e.children)}}}]);