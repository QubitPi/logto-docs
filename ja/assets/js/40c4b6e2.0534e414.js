"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83507],{63436:(e,n,s)=>{s.d(n,{Ay:()=>a,RM:()=>r});var i=s(25105),t=s(79621);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["SSO \u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u3084 Logto \u3067\u306e SSO \u306e\u8a2d\u5b9a\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"/connectors/enterprise-connectors",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) (SAML & OIDC)"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u59cb\u3081\u3066\u304f\u3060\u3055\u3044\u3002"]})})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},26654:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"integrations/sso/entra-id-saml/README","title":"Microsoft Entra ID (SAML) \u3092\u4f7f\u7528\u3057\u3066\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u8a2d\u5b9a\u3059\u308b","description":"\u6700\u5c0f\u9650\u306e\u8a2d\u5b9a\u4f5c\u696d\u3067\u3001\u3053\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066 Microsoft Entra ID\uff08\u4ee5\u524d\u306e Azure AD\uff09\u3068\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) \u3092\u7d71\u5408\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/integrations/sso/entra-id-saml/README.mdx","sourceDirName":"integrations/sso/entra-id-saml","slug":"/integrations/entra-id-saml","permalink":"/ja/integrations/entra-id-saml","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/integrations/sso/entra-id-saml/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/entra-id-saml","sidebar_label":"Microsoft Entra ID (SAML)","sidebar_custom_props":{"description":"\u4ee5\u524d\u306e Azure AD\u3001\u5305\u62ec\u7684\u306a\u30af\u30e9\u30a6\u30c9\u30d9\u30fc\u30b9\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3002","logoFilename":"entra-id.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Microsoft Entra ID (OIDC)","permalink":"/ja/integrations/entra-id-oidc"},"next":{"title":"Google Workspace","permalink":"/ja/integrations/google-workspace"}}');var t=s(25105),r=s(79621),o=s(63436);const a={slug:"/integrations/entra-id-saml",sidebar_label:"Microsoft Entra ID (SAML)",sidebar_custom_props:{description:"\u4ee5\u524d\u306e Azure AD\u3001\u5305\u62ec\u7684\u306a\u30af\u30e9\u30a6\u30c9\u30d9\u30fc\u30b9\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3002",logoFilename:"entra-id.svg"}},d="Microsoft Entra ID (SAML) \u3092\u4f7f\u7528\u3057\u3066\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",c={},l=[...o.RM,{value:"\u30b9\u30c6\u30c3\u30d7 1: Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b",id:"step-1-create-an-azure-ad-sso-application",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 2: Logto \u3067 SAML SSO \u3092\u8a2d\u5b9a\u3059\u308b",id:"step-2-configure-saml-sso-at-logto",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 3: \u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u8a2d\u5b9a\u3059\u308b",id:"step-3-configure-user-attributes-mapping",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 4: Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u5272\u308a\u5f53\u3066\u308b",id:"step-4-assign-users-to-the-azure-ad-sso-application",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 5: \u30e1\u30fc\u30eb\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u3001SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b",id:"step-5-set-email-domains-and-enable-the-sso-connector",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"microsoft-entra-id-saml-\u3092\u4f7f\u7528\u3057\u3066\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",children:"Microsoft Entra ID (SAML) \u3092\u4f7f\u7528\u3057\u3066\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u5c0f\u9650\u306e\u8a2d\u5b9a\u4f5c\u696d\u3067\u3001\u3053\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066 Microsoft Entra ID\uff08\u4ee5\u524d\u306e Azure AD\uff09\u3068\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) \u3092\u7d71\u5408\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"step-1-create-an-azure-ad-sso-application",children:"\u30b9\u30c6\u30c3\u30d7 1: Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsx)(n.p,{children:"Azure AD \u5074\u3067 SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3067\u3001Azure AD SSO \u7d71\u5408\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://portal.azure.com/",children:"Azure \u30dd\u30fc\u30bf\u30eb"})," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u7ba1\u7406\u8005\u3068\u3057\u3066\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Microsoft Entra ID"})," \u30b5\u30fc\u30d3\u30b9\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc\u304b\u3089 ",(0,t.jsx)(n.code,{children:"Enterprise applications"})," \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002",(0,t.jsx)(n.code,{children:"New application"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001",(0,t.jsx)(n.code,{children:"Create your own application"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure AD create application.webp",src:s(69441).A+"",width:"2084",height:"1463"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d\u3092\u5165\u529b\u3057\u3001",(0,t.jsx)(n.code,{children:"Integrate any other application you don't find in the gallery (Non-gallery)"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Setup single sign-on"})," > ",(0,t.jsx)(n.code,{children:"SAML"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure AD set up SSO.webp",src:s(32625).A+"",width:"2084",height:"1462"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u6307\u793a\u306b\u5f93\u3063\u3066\u3001\u6700\u521d\u306e\u30b9\u30c6\u30c3\u30d7\u3068\u3057\u3066\u3001Logto \u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u308b\u6b21\u306e\u60c5\u5831\u3092\u4f7f\u7528\u3057\u3066\u57fa\u672c\u7684\u306a SAML \u8a2d\u5b9a\u3092\u5165\u529b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure AD SP config",src:s(66882).A+"",width:"2084",height:"1461"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Audience URI(SP Entity ID)"}),": Logto \u30b5\u30fc\u30d3\u30b9\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3068\u3057\u3066\u6a5f\u80fd\u3057\u3001IdP \u3078\u306e\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8\u4e2d\u306b SP \u306e EntityId \u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002\u3053\u306e\u8b58\u5225\u5b50\u306f\u3001IdP \u3068 Logto \u9593\u3067\u306e SAML \u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u3084\u305d\u306e\u4ed6\u306e\u8a8d\u8a3c\u95a2\u9023\u30c7\u30fc\u30bf\u306e\u5b89\u5168\u306a\u4ea4\u63db\u306b\u304a\u3044\u3066\u91cd\u8981\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ACS URL"}),": \u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u30b3\u30f3\u30b7\u30e5\u30fc\u30de\u30fc\u30b5\u30fc\u30d3\u30b9 (ACS) URL \u306f\u3001POST \u30ea\u30af\u30a8\u30b9\u30c8\u3067 SAML \u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u304c\u9001\u4fe1\u3055\u308c\u308b\u5834\u6240\u3067\u3059\u3002\u3053\u306e URL \u306f\u3001IdP \u304c SAML \u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u3092 Logto \u306b\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001Logto \u304c\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u60c5\u5831\u3092\u542b\u3080 SAML \u5fdc\u7b54\u3092\u53d7\u4fe1\u3057\u6d88\u8cbb\u3059\u308b\u3053\u3068\u3092\u671f\u5f85\u3059\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URL \u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Save"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u7d9a\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-configure-saml-sso-at-logto",children:"\u30b9\u30c6\u30c3\u30d7 2: Logto \u3067 SAML SSO \u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["SAML SSO \u7d71\u5408\u3092\u6a5f\u80fd\u3055\u305b\u308b\u306b\u306f\u3001IdP \u30e1\u30bf\u30c7\u30fc\u30bf\u3092 Logto \u306b\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Logto \u5074\u306b\u623b\u308a\u3001Azure AD SSO \u30b3\u30cd\u30af\u30bf\u30fc\u306e ",(0,t.jsx)(n.code,{children:"Connection"})," \u30bf\u30d6\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["Logto \u306f\u3001IdP \u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e 3 \u3064\u306e\u7570\u306a\u308b\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,t.jsx)(n.code,{children:"metadata URL"})," \u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u3067\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,t.jsx)(n.code,{children:"SAML Certificates section"})," \u304b\u3089 ",(0,t.jsx)(n.code,{children:"App Federation Metadata Url"})," \u3092\u30b3\u30d4\u30fc\u3057\u3001Logto \u306e ",(0,t.jsx)(n.code,{children:"Metadata URL"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure AD Metadata URL.webp",src:s(76107).A+"",width:"2084",height:"1462"})}),"\n",(0,t.jsx)(n.p,{children:"Logto \u306f URL \u304b\u3089\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3001SAML SSO \u7d71\u5408\u3092\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"step-3-configure-user-attributes-mapping",children:"\u30b9\u30c6\u30c3\u30d7 3: \u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,t.jsx)(n.p,{children:"Logto \u306f\u3001IdP \u304b\u3089\u8fd4\u3055\u308c\u308b\u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u3092 Logto \u306e\u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u67d4\u8edf\u306a\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Logto \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 IdP \u304b\u3089\u6b21\u306e\u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u3092\u540c\u671f\u3057\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["id: \u30e6\u30fc\u30b6\u30fc\u306e\u4e00\u610f\u306e\u8b58\u5225\u5b50\u3002Logto \u306f SAML \u5fdc\u7b54\u304b\u3089 ",(0,t.jsx)(n.code,{children:"nameID"})," \u30af\u30ec\u30fc\u30e0\u3092\u8aad\u307f\u53d6\u308a\u3001\u30e6\u30fc\u30b6\u30fc SSO \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3 ID \u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["email: \u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3002Logto \u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 SAML \u5fdc\u7b54\u304b\u3089 ",(0,t.jsx)(n.code,{children:"email"})," \u30af\u30ec\u30fc\u30e0\u3092\u8aad\u307f\u53d6\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30d7\u30e9\u30a4\u30de\u30ea\u30e1\u30fc\u30eb\u3068\u3057\u3066\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"name: \u30e6\u30fc\u30b6\u30fc\u306e\u540d\u524d\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u30de\u30c3\u30d4\u30f3\u30b0\u306e\u30ed\u30b8\u30c3\u30af\u306f\u3001Azure AD \u5074\u307e\u305f\u306f Logto \u5074\u306e\u3044\u305a\u308c\u304b\u3067\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"AzureAD \u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u3092 Logto \u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u306b Logto \u5074\u3067\u30de\u30c3\u30d4\u30f3\u30b0\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,t.jsx)(n.code,{children:"Attributes & Claims"})," \u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6b21\u306e\u5c5e\u6027\u540d\uff08\u540d\u524d\u7a7a\u9593\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u4ed8\u304d\uff09\u3092\u30b3\u30d4\u30fc\u3057\u3001Logto \u306e\u5bfe\u5fdc\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u8cbc\u308a\u4ed8\u3051\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"})," \uff08\u63a8\u5968\uff1a\u3053\u306e\u5c5e\u6027\u5024\u30de\u30c3\u30d7\u3092 ",(0,t.jsx)(n.code,{children:"user.displayname"})," \u306b\u66f4\u65b0\u3057\u3066\u3001\u3088\u308a\u826f\u3044\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u3092\u63d0\u4f9b\u3057\u307e\u3059\uff09"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure AD default attribute mapping.webp",src:s(42927).A+"",width:"6252",height:"3504"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"AzureAD \u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u3092 AzureAD \u5074\u3067 Logto \u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,t.jsx)(n.code,{children:"Attributes & Claims"})," \u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Edit"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001Logto \u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u8a2d\u5b9a\u306b\u57fa\u3065\u3044\u3066 ",(0,t.jsx)(n.code,{children:"Additional claims"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u66f4\u65b0\u3057\u307e\u3059\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Logto \u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u8a2d\u5b9a\u306b\u57fa\u3065\u3044\u3066\u30af\u30ec\u30fc\u30e0\u540d\u306e\u5024\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u540d\u524d\u7a7a\u9593\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u524a\u9664\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Save"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u7d9a\u884c\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6b21\u306e\u8a2d\u5b9a\u3067\u7d42\u4e86\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure AD_Logto attribute mapping.webp",src:s(32517).A+"",width:"6252",height:"3162"})}),"\n",(0,t.jsxs)(n.p,{children:["Azure AD \u5074\u3067\u8ffd\u52a0\u306e\u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002Logto \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e ",(0,t.jsx)(n.code,{children:"sso_identity"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u4e0b\u306b IdP \u304b\u3089\u8fd4\u3055\u308c\u305f\u5143\u306e\u30e6\u30fc\u30b6\u30fc\u5c5e\u6027\u306e\u8a18\u9332\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"step-4-assign-users-to-the-azure-ad-sso-application",children:"\u30b9\u30c6\u30c3\u30d7 4: Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u5272\u308a\u5f53\u3066\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e ",(0,t.jsx)(n.code,{children:"Users and groups"})," \u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002",(0,t.jsx)(n.code,{children:"Add user/group"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30e6\u30fc\u30b6\u30fc\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002Azure AD SSO \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c\u3001Azure AD SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u901a\u3058\u3066\u8a8d\u8a3c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Azure AD assign users.webp",src:s(44226).A+"",width:"6705",height:"2931"})}),"\n",(0,t.jsx)(n.h2,{id:"step-5-set-email-domains-and-enable-the-sso-connector",children:"\u30b9\u30c6\u30c3\u30d7 5: \u30e1\u30fc\u30eb\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u3001SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["Logto \u306e\u30b3\u30cd\u30af\u30bf\u30fc ",(0,t.jsx)(n.code,{children:"SSO experience"})," \u30bf\u30d6\u3067\u7d44\u7e54\u306e ",(0,t.jsx)(n.code,{children:"email domains"})," \u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u3053\u308c\u3089\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u5bfe\u3059\u308b\u8a8d\u8a3c\u65b9\u6cd5\u3068\u3057\u3066 SSO \u30b3\u30cd\u30af\u30bf\u30fc\u304c\u6709\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6307\u5b9a\u3055\u308c\u305f\u30c9\u30e1\u30a4\u30f3\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u552f\u4e00\u306e\u8a8d\u8a3c\u65b9\u6cd5\u3068\u3057\u3066 SAML SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Azure AD SSO \u7d71\u5408\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001Azure AD \u306e\u516c\u5f0f ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso",children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},44226:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure_ad_assign_users-8997b6906f1d43ddd66069d053cc429d.webp"},69441:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure_ad_create_application-53a2881e548a2da0b8da4aa413fffaf6.webp"},42927:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure_ad_default_attribute_mapping-ef77c6b868372f41ae3a35d0f0e78e1b.webp"},32517:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure_ad_logto_attribute_mapping-06c15edd5383d728d128338558e0c63b.webp"},76107:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure_ad_metadata_url-a2a6ca0844e0c42a80f36a0fc6c115b9.webp"},32625:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure_ad_set_up_single_sign_on-43a54d9878b88ef6473961b222377b47.webp"},66882:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/azure_ad_sp_config-fceb6b9a77f55d69d13b6ae94a9fc773.webp"},79621:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(58101);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);