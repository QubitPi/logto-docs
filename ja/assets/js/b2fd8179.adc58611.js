"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[672],{23154:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"end-user-flows/enterprise-sso/enterprise-sso-identity","title":"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3","description":"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ea\u30f3\u30af \\\\","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/enterprise-sso-identity.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/enterprise-sso-identity","permalink":"/ja/end-user-flows/enterprise-sso/enterprise-sso-identity","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/enterprise-sso-identity.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"IdP-initiated SSO","permalink":"/ja/end-user-flows/enterprise-sso/idp-initiated-sso"},"next":{"title":"\u591a\u8981\u7d20\u8a8d\u8a3c (MFA)","permalink":"/ja/end-user-flows/mfa/"}}');var r=s(25105),i=s(79621);const o={sidebar_position:3},d="\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3",c={},l=[{value:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ea\u30f3\u30af",id:"enterprise-sso-account-linking",level:2},{value:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u3092\u4f7f\u7528\u3057\u305f\u591a\u8981\u7d20\u8a8d\u8a3c (MFA)",id:"multi-factor-authentication-mfa-with-enterprise-sso",level:2},{value:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u524a\u9664",id:"deleting-an-enterprise-connector",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3-sso-\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 (SSO) \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3"})}),"\n",(0,r.jsx)(n.h2,{id:"enterprise-sso-account-linking",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ea\u30f3\u30af"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u304c\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u5834\u5408"})}),"\n",(0,r.jsxs)(n.p,{children:["\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u304c\u65b0\u3057\u3044\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u3068\u3001Logto \u306f\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u65b0\u3057\u3044\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u81ea\u52d5\u7684\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,r.jsx)(n.code,{children:"primary email"}),"\u3001",(0,r.jsx)(n.code,{children:"name"}),"\u3001\u304a\u3088\u3073 ",(0,r.jsx)(n.code,{children:"avatar"})," \u306f\u3001IdP \u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3067\u81ea\u52d5\u7684\u306b\u5165\u529b\u3055\u308c\u307e\u3059\u3002\u4ed6\u306e\u8ffd\u52a0\u306e\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e SSO \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u4e0b\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/integrations/saml-sso#step-3-configure-user-attributes-mapping",children:"SAML \u5c5e\u6027\u30de\u30c3\u30d4\u30f3\u30b0"})," \u304c\u6b63\u3057\u304f\u69cb\u6210\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3084\u3001\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306b\u3088\u3063\u3066\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u30ea\u30f3\u30af\u72b6\u6cc1\u304c\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u5834\u5408"})}),"\n",(0,r.jsx)(n.p,{children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u4f5c\u696d\u7528\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c Logto \u306e\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u4e00\u81f4\u3059\u308b\u5834\u5408\u3001Logto \u306f\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u81ea\u52d5\u7684\u306b\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u30e1\u30fc\u30eb\u30c9\u30e1\u30a4\u30f3\u304c\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30b3\u30cd\u30af\u30bf\u30fc\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u308b\u3068\u3001\u6307\u5b9a\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30c9\u30e1\u30a4\u30f3\u3092\u6301\u3064\u3059\u3079\u3066\u306e\u65e2\u5b58\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30b3\u30cd\u30af\u30bf\u30fc\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u3053\u3068\u304c\u5236\u9650\u3055\u308c\u307e\u3059\u3002\u4ee5\u524d\u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u65b9\u6cd5\u306f\u30d6\u30ed\u30c3\u30af\u3055\u308c\u307e\u3059\u3002\u4f8b\uff1a\u30e1\u30fc\u30eb / \u30d1\u30b9\u30ef\u30fc\u30c9\u3001\u30e1\u30fc\u30eb\u8a8d\u8a3c\u30b3\u30fc\u30c9\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3\u65b9\u6cd5\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"multi-factor-authentication-mfa-with-enterprise-sso",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u3092\u4f7f\u7528\u3057\u305f\u591a\u8981\u7d20\u8a8d\u8a3c (MFA)"}),"\n",(0,r.jsxs)(n.p,{children:["\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001MFA \u8981\u4ef6\u306f\u901a\u5e38 IdP \u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002Logto \u3067\u306f\u3001IdP \u304b\u3089\u8a8d\u8a3c\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u4fe1\u983c\u3055\u308c\u3066\u3044\u308b\u3068\u898b\u306a\u3055\u308c\u308b\u305f\u3081\u3001\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u3092\u4ecb\u3057\u3066\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u305f\u3081\u306b ",(0,r.jsx)(n.a,{href:"/end-user-flows/mfa",children:"MFA \u691c\u8a3c"})," \u304c\u30d0\u30a4\u30d1\u30b9\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u304c\u5411\u4e0a\u3057\u307e\u3059\u3002IdP \u5074\u3067 MFA \u4fdd\u8b77\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"deleting-an-enterprise-connector",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u524a\u9664"}),"\n",(0,r.jsx)(n.p,{children:"Logto \u304b\u3089\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u524a\u9664\u3059\u308b\u3068\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u6b8b\u308b"}),"\uff1a\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u524a\u9664\u3055\u308c\u305a\u3001\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3078\u306e\u30ea\u30f3\u30af\u306e\u307f\u304c\u524a\u9664\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6b21\u56de\u30e6\u30fc\u30b6\u30fc\u304c\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u969b"}),"\uff1a\u3053\u308c\u3089\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u6b21\u56de\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001Logto \u3067\u8a2d\u5b9a\u3055\u308c\u305f\u6a19\u6e96\u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u65b9\u6cd5\uff08\u4f8b\uff1a\u30e1\u30fc\u30eb\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\uff09\u306a\u3069\u306e\u4ee3\u66ff\u65b9\u6cd5\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u6c42\u3081\u3089\u308c\u307e\u3059\u3002\u4ee5\u524d\u306b\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u6642\u70b9\u3067\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u4f5c\u6210\u3059\u308b\u3088\u3046\u306b\u6848\u5185\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30e6\u30fc\u30b6\u30fc SSO \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664"}),"\uff1a\u30e6\u30fc\u30b6\u30fc\u306e SSO \u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u304a\u3088\u3073\u95a2\u9023\u3059\u308b\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30c7\u30fc\u30bf\u306f Logto \u304b\u3089\u524a\u9664\u3055\u308c\u307e\u3059\u3002"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(58101);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);