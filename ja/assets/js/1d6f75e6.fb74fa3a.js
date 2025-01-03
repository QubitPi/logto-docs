"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85565],{42306:(e,i,n)=>{n.d(i,{Ay:()=>t,RM:()=>a});var l=n(25105),s=n(79621);const a=[];function r(e){const i={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,l.jsx)(i.admonition,{type:"tip",children:(0,l.jsxs)(i.p,{children:["\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001Logto \u30b3\u30cd\u30af\u30bf\u30fc\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u77e5\u8b58\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u3082\u3057\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,l.jsx)(i.a,{href:"/connectors",children:"\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u8a2d\u5b9a"})," \u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u59cb\u3081\u3066\u304f\u3060\u3055\u3044\u3002"]})})}function t(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},68687:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"integrations/social/alipay-native/README","title":"Alipay \u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30ed\u30b0\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b (\u30cd\u30a4\u30c6\u30a3\u30d6)","description":"\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3067\u306e Alipay \u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3\u7528\u306e\u516c\u5f0f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/integrations/social/alipay-native/README.mdx","sourceDirName":"integrations/social/alipay-native","slug":"/integrations/alipay-native","permalink":"/ja/integrations/alipay-native","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/integrations/social/alipay-native/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/alipay-native","sidebar_label":"Alipay (Native)","sidebar_custom_props":{"description":"Alipay \u306f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e2\u30d0\u30a4\u30eb\u304a\u3088\u3073\u30aa\u30f3\u30e9\u30a4\u30f3\u6c7a\u6e08\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002","logoFilename":"alipay.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Introduction","permalink":"/ja/integrations/"},"next":{"title":"Alipay (Web)","permalink":"/ja/integrations/alipay-web"}}');var s=n(25105),a=n(79621),r=n(42306);const t={slug:"/integrations/alipay-native",sidebar_label:"Alipay (Native)",sidebar_custom_props:{description:"Alipay \u306f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30e2\u30d0\u30a4\u30eb\u304a\u3088\u3073\u30aa\u30f3\u30e9\u30a4\u30f3\u6c7a\u6e08\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002",logoFilename:"alipay.svg"}},c="Alipay \u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30ed\u30b0\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b (\u30cd\u30a4\u30c6\u30a3\u30d6)",o={},d=[...r.RM,{value:"\u306f\u3058\u3081\u306b",id:"get-started",level:2},{value:"Alipay \u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3059\u308b",id:"register-alipay-developer-account",level:2},{value:"Alipay \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u3066\u8a2d\u5b9a\u3059\u308b",id:"create-and-configure-alipay-app",level:2},{value:"Logto Alipay \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u8a2d\u5b9a\u3092\u884c\u3046",id:"set-up-the-logto-alipay-native-connector-settings",level:2},{value:"\u8a2d\u5b9a\u30bf\u30a4\u30d7",id:"config-types",level:3},{value:"\u30a2\u30d7\u30ea\u3067 Alipay \u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b",id:"enable-alipay-native-sign-in-in-your-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Alipay \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b",id:"test-alipay-native-connector",level:3},{value:"\u53c2\u8003\u8cc7\u6599",id:"references",level:2}];function p(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"alipay-\u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30ed\u30b0\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b-\u30cd\u30a4\u30c6\u30a3\u30d6",children:"Alipay \u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30ed\u30b0\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b (\u30cd\u30a4\u30c6\u30a3\u30d6)"})}),"\n",(0,s.jsx)(i.p,{children:"\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3067\u306e Alipay \u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3\u7528\u306e\u516c\u5f0f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3002"}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(i.h2,{id:"get-started",children:"\u306f\u3058\u3081\u306b"}),"\n",(0,s.jsx)(i.p,{children:"Alipay \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u306f\u3001\u30e2\u30d0\u30a4\u30eb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u4e0a\u3067 Logto SDK \u3068\u5bc6\u63a5\u306b\u9023\u643a\u3057\u307e\u3059\u3002Alipay \u306e OAuth 2.0 \u8a8d\u8a3c (Authentication) \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u6d3b\u7528\u3057\u3001Alipay \u30e6\u30fc\u30b6\u30fc\u304c\u9762\u5012\u306a\u767b\u9332\u30d7\u30ed\u30bb\u30b9\u3092\u7d4c\u305a\u306b\u516c\u958b\u3055\u308c\u305f Alipay \u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u3066\u4ed6\u306e\u30a2\u30d7\u30ea\u306b\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"register-alipay-developer-account",children:"Alipay \u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3059\u308b"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://certifyweb.alipay.com/certify/reg/guide#/",children:"Alipay \u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332"})," \u3057\u307e\u3059\uff08\u307e\u3060\u304a\u6301\u3061\u3067\u306a\u3044\u5834\u5408\uff09\u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"create-and-configure-alipay-app",children:"Alipay \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u3066\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://open.alipay.com/",children:"Alipay \u30b3\u30f3\u30bd\u30fc\u30eb"})," \u306b\u3001\u767b\u9332\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.li,{children:"\u300c\u30de\u30a4\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u300d(\u6211\u7684\u5e94\u7528) \u30d1\u30cd\u30eb\u306e\u300cWeb & Mobile Apps\u300d(\u7f51\u9875&\u79fb\u52a8\u5e94\u7528) \u30bf\u30d6\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u300c\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u300d(\u7acb\u5373\u521b\u5efa) \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a2d\u5b9a\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u300c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d\u300d(\u5e94\u7528\u540d\u79f0) \u306b\u547d\u540d\u898f\u5247\u306b\u5f93\u3063\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d\u3092\u5165\u529b\u3057\u3001\u300c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a2\u30a4\u30b3\u30f3\u300d(\u5e94\u7528\u56fe\u6807) \u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u300c\u30a2\u30d7\u30ea\u30bf\u30a4\u30d7\u300d(\u5e94\u7528\u7c7b\u578b) \u3068\u3057\u3066\u300c\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u300d(\u79fb\u52a8\u5e94\u7528) \u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002iOS \u30a2\u30d7\u30ea\u3092\u69cb\u7bc9\u3059\u308b\u5834\u5408\u306f\u3001\u30e6\u30cb\u30fc\u30af\u306a\u300c\u30d0\u30f3\u30c9\u30eb ID\u300d\u304c\u5fc5\u8981\u3067\u3059\u3002\u307e\u305f\u3001Android \u30a2\u30d7\u30ea\u306b\u306f\u300c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7f72\u540d\u300d(\u5e94\u7528\u7b7e\u540d) \u3068\u300c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u300d(\u5e94\u7528\u5305\u540d) \u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u6982\u8981\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001\u300c\u80fd\u529b\u3092\u8ffd\u52a0\u300d(\u6dfb\u52a0\u80fd\u529b) \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u300c\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8a8d\u53ef\u300d(\u7b2c\u4e09\u65b9\u5e94\u7528\u6388\u6743)\u3001\u300c\u4f1a\u54e1\u60c5\u5831\u306e\u53d6\u5f97\u300d(\u83b7\u53d6\u4f1a\u5458\u4fe1\u606f)\u3001\u300c\u30a2\u30d7\u30ea Alipay \u30ed\u30b0\u30a4\u30f3\u300d(App \u652f\u4ed8\u5b9d\u767b\u5f55) \u3092\u8ffd\u52a0\u3057\u3001Alipay \u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://b.alipay.com/index2.htm",children:"Alipay \u30ab\u30b9\u30bf\u30de\u30fc\u30bb\u30f3\u30bf\u30fc"})," \u306b\u79fb\u52d5\u3057\u3001Alipay \u958b\u767a\u8005\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002\u30c8\u30c3\u30d7\u30d0\u30fc\u306e\u300c\u30a2\u30ab\u30a6\u30f3\u30c8\u30bb\u30f3\u30bf\u30fc\u300d(\u8d26\u53f7\u4e2d\u5fc3) \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30b5\u30a4\u30c9\u30d0\u30fc\u306e\u4e0b\u90e8\u306b\u3042\u308b\u300cAPPID \u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u300d(APPID \u7ed1\u5b9a) \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u30b9\u30c6\u30c3\u30d7 4 \u3067\u4f5c\u6210\u3057\u305f\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e APPID \u3092\u5165\u529b\u3057\u3066\u300c\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u3092\u8ffd\u52a0\u300d(\u6dfb\u52a0\u7ed1\u5b9a) \u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.li,{children:"\u300c\u30a2\u30d7\u30ea Alipay \u30ed\u30b0\u30a4\u30f3\u300d\u306e\u300c\u7f72\u540d\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30ac\u30a4\u30c9\u306b\u5f93\u3063\u3066\u7f72\u540d\u30d7\u30ed\u30bb\u30b9\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002\u3053\u306e\u30b9\u30c6\u30c3\u30d7\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30b9\u30c6\u30c3\u30d7 5 \u3067\u8ffd\u52a0\u3057\u305f\u80fd\u529b\u304c\u6709\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.li,{children:"Alipay \u30aa\u30fc\u30d7\u30f3\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8\u306b\u623b\u308a\u3001\u300c\u958b\u767a\u60c5\u5831\u300d(\u5f00\u53d1\u4fe1\u606f) \u30bb\u30af\u30b7\u30e7\u30f3\u306e\u300c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u7f72\u540d\u65b9\u6cd5\u300d(\u63a5\u53e3\u52a0\u7b7e\u65b9\u5f0f\uff08\u5bc6\u94a5/\u8bc1\u4e66\uff09) \u3092\u898b\u3064\u3051\u307e\u3059\u3002\u300c\u8a2d\u5b9a\u300d(\u8bbe\u7f6e) \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u7f72\u540d\u65b9\u6cd5\u3092\u8a2d\u5b9a\u3059\u308b\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u300c\u516c\u958b\u9375\u300d(\u516c\u94a5) \u304c\u63a8\u5968\u3055\u308c\u308b\u7f72\u540d\u30e2\u30fc\u30c9\u3067\u3042\u308a\u3001\u751f\u6210\u3057\u305f\u516c\u958b\u9375\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3092\u30c6\u30ad\u30b9\u30c8\u5165\u529b\u30dc\u30c3\u30af\u30b9\u306b\u5165\u529b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.li,{children:["Alipay \u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8\u306e\u4e0b\u90e8\u306b\u3042\u308b\u300c\u8a2d\u5b9a\u300d(\u8bbe\u7f6e) \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u300c\u8a8d\u53ef\u30ea\u30c0\u30a4\u30ec\u30af\u30c8 URI\u300d(\u6388\u6743\u56de\u8c03\u5730\u5740) \u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,s.jsx)(i.code,{children:"${your_logto_origin}/callback/${connector_id}"})," \u306f Logto \u30b3\u30a2\u3067\u4f7f\u7528\u3055\u308c\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ea\u30c0\u30a4\u30ec\u30af\u30c8 URI \u3067\u3059\u3002",(0,s.jsx)(i.code,{children:"connector_id"})," \u306f Logto \u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u8a73\u7d30\u30da\u30fc\u30b8\u306e\u30c8\u30c3\u30d7\u30d0\u30fc\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.li,{children:"\u3053\u308c\u3089\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u3059\u3079\u3066\u5b8c\u4e86\u3057\u305f\u3089\u3001Alipay \u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8\u306e\u53f3\u4e0a\u9685\u306b\u623b\u308a\u3001\u300c\u30ec\u30d3\u30e5\u30fc\u306e\u305f\u3081\u306b\u9001\u4fe1\u300d(\u63d0\u4ea4\u5ba1\u6838) \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u30ec\u30d3\u30e5\u30fc\u304c\u627f\u8a8d\u3055\u308c\u308b\u3068\u3001\u30b9\u30e0\u30fc\u30ba\u306a Alipay \u30b5\u30a4\u30f3\u30a4\u30f3\u30d5\u30ed\u30fc\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["\u2139\ufe0f ",(0,s.jsx)(i.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,s.jsxs)(i.p,{children:["\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u3067\u6b21\u306e\u30b3\u30fc\u30c9\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u30bf\u30fc\u30df\u30ca\u30eb\u3067\u5b9f\u884c\u3057\u3066\u3001",(0,s.jsx)(i.em,{children:"openssl"})," \u3092\u4f7f\u7528\u3057\u3066\u30ad\u30fc\u30da\u30a2\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -outform PEM -pubout -out public.pem\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Alipay \u30a2\u30d7\u30ea\u8a2d\u5b9a\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u516c\u958b\u9375\u3092\u5165\u529b\u3059\u308b\u969b\u306b\u306f\u3001",(0,s.jsx)(i.code,{children:"public.pem"})," \u306e\u30d8\u30c3\u30c0\u30fc\u3068\u30d5\u30c3\u30bf\u30fc\u3092\u524a\u9664\u3057\u3001\u3059\u3079\u3066\u306e\u6539\u884c\u6587\u5b57\u3092\u524a\u9664\u3057\u3066\u3001\u6b8b\u308a\u306e\u5185\u5bb9\u3092\u300c\u516c\u958b\u9375\u300d\u306e\u30c6\u30ad\u30b9\u30c8\u5165\u529b\u30dc\u30c3\u30af\u30b9\u306b\u8cbc\u308a\u4ed8\u3051\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"set-up-the-logto-alipay-native-connector-settings",children:"Logto Alipay \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u8a2d\u5b9a\u3092\u884c\u3046"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://open.alipay.com/dev/workspace",children:"Alipay \u30b3\u30f3\u30bd\u30fc\u30eb\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"})," \u306b\u79fb\u52d5\u3057\u3001\u300c\u30de\u30a4\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u300d(\u6211\u7684\u5e94\u7528) \u30d1\u30cd\u30eb\u3067\u300cWeb & Mobile Apps\u300d(\u7f51\u9875&\u79fb\u52a8\u5e94\u7528) \u30bf\u30d6\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e APPID \u3092\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.li,{children:"\u524d\u306e\u90e8\u5206\u306e\u30b9\u30c6\u30c3\u30d7 7 \u3067\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ad\u30fc\u3068\u516c\u958b\u9375\u3092\u542b\u3080\u30ad\u30fc\u30da\u30a2\u3092\u3059\u3067\u306b\u751f\u6210\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.li,{children:["Logto \u30b3\u30cd\u30af\u30bf\u30fc\u8a2d\u5b9a\u3092\u5165\u529b\u3057\u307e\u3059\uff1a","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\u30b9\u30c6\u30c3\u30d7 1 \u3067\u53d6\u5f97\u3057\u305f APPID \u3092 ",(0,s.jsx)(i.code,{children:"appId"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u30b9\u30c6\u30c3\u30d7 2 \u3067\u8a00\u53ca\u3057\u305f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ad\u30fc\u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3092 ",(0,s.jsx)(i.code,{children:"privateKey"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u5165\u529b\u3057\u307e\u3059\u3002\u3059\u3079\u3066\u306e\u6539\u884c\u6587\u5b57\u3092 '\\n' \u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ad\u30fc\u30d5\u30a1\u30a4\u30eb\u306e\u30d8\u30c3\u30c0\u30fc\u3068\u30d5\u30c3\u30bf\u30fc\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u300cAlipay \u30a2\u30d7\u30ea\u306e\u4f5c\u6210\u3068\u8a2d\u5b9a\u300d\u306e\u30b9\u30c6\u30c3\u30d7 7 \u3067\u9078\u629e\u3057\u305f ",(0,s.jsx)(i.code,{children:"Public key"})," \u7f72\u540d\u30e2\u30fc\u30c9\u306b\u3088\u308a\u3001",(0,s.jsx)(i.code,{children:"signType"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b 'RSA2' \u3092\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"config-types",children:"\u8a2d\u5b9a\u30bf\u30a4\u30d7"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\u540d\u524d"}),(0,s.jsx)(i.th,{children:"\u30bf\u30a4\u30d7"}),(0,s.jsx)(i.th,{children:"\u5217\u6319\u5024"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"appId"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"N/A"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"privateKey"}),(0,s.jsx)(i.td,{children:"string"}),(0,s.jsx)(i.td,{children:"N/A"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"signType"}),(0,s.jsx)(i.td,{children:"enum string"}),(0,s.jsx)(i.td,{children:"'RSA' | 'RSA2'"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"enable-alipay-native-sign-in-in-your-app",children:"\u30a2\u30d7\u30ea\u3067 Alipay \u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\n",(0,s.jsx)(i.h3,{id:"ios",children:"iOS"}),"\n",(0,s.jsxs)(i.p,{children:["\u30a2\u30d7\u30ea\u306b ",(0,s.jsx)(i.a,{href:"/quick-starts/swift",children:"Logto iOS SDK"})," \u3092\u7d71\u5408\u3057\u3066\u3044\u308b\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u975e\u5e38\u306b\u7c21\u5358\u3067\u3001Alipay SDK \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3080\u5fc5\u8981\u3055\u3048\u3042\u308a\u307e\u305b\u3093\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["1. ",(0,s.jsx)(i.code,{children:"LogtoSocialPluginAlipay"})," \u3092 Xcode \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b"]})}),"\n",(0,s.jsx)(i.p,{children:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u8ffd\u52a0",src:n(10643).A+"",width:"1086",height:"306"})}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["\u2139\ufe0f ",(0,s.jsx)(i.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,s.jsxs)(i.p,{children:["\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u306f Alipay \u306e\u300c\u6975\u7c21\u7248 SDK\u300d(\u6781\u7b80\u7248 SDK) \u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u5f8c\u3001",(0,s.jsx)(i.code,{children:"import AFServiceSDK"})," \u3092\u76f4\u63a5\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["2. \u30d7\u30e9\u30b0\u30a4\u30f3\u3092 ",(0,s.jsx)(i.code,{children:"LogtoClient"})," \u306e\u521d\u671f\u5316\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u8ffd\u52a0\u3059\u308b"]})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-swift",children:'let logtoClient = LogtoClient(\n  useConfig: config,\n  socialPlugins: [LogtoSocialPluginAlipay(callbackScheme: "your-scheme")]\n)\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u3053\u3053\u3067 ",(0,s.jsx)(i.code,{children:"callbackScheme"})," \u306f\u3001\u30a2\u30d7\u30ea\u306b\u30ca\u30d3\u30b2\u30fc\u30c8\u3067\u304d\u308b ",(0,s.jsx)(i.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"\u30ab\u30b9\u30bf\u30e0 URL \u30b9\u30ad\u30fc\u30e0"})," \u306e 1 \u3064\u3067\u3059\u3002"]}),"\n",(0,s.jsx)(i.h3,{id:"android",children:"Android"}),"\n",(0,s.jsxs)(i.p,{children:["\u30a2\u30d7\u30ea\u306b ",(0,s.jsx)(i.a,{href:"/quick-starts/android",children:"Logto Android SDK"})," \u3092\u7d71\u5408\u3057\u3066\u3044\u308b\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u975e\u5e38\u306b\u7c21\u5358\u3067\u3001Alipay SDK \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3080\u5fc5\u8981\u3055\u3048\u3042\u308a\u307e\u305b\u3093\uff1a"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"1. Alipay \u306e\u300c\u6975\u7c21\u7248 SDK\u300d\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://github.com/logto-io/social-sdks/blob/master/alipay/android/alipaySdk-15.7.9-20200727142846.aar",children:"Logto 3rd-party Social SDKs"})," \u304b\u3089 Alipay \u306e\u300c\u6975\u7c21\u7248 SDK\u300d(\u6781\u7b80\u7248 SDK) \u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e ",(0,s.jsx)(i.code,{children:"app/libs"})," \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u8ffd\u52a0\u3057\u307e\u3059\uff1a"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"project-path/app/libs/alipaySdk-15.7.9-20200727142846.aar\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"2. Alipay \u306e\u300c\u6975\u7c21\u7248 SDK\u300d\u3092\u4f9d\u5b58\u95a2\u4fc2\u3068\u3057\u3066\u8ffd\u52a0\u3059\u308b"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"build.gradle"})," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304d\u307e\u3059\uff1a"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"project-path/app/build.gradle\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u4f9d\u5b58\u95a2\u4fc2\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-kotlin",children:"dependencies {\n  // ...\n  implementation(files(\"./libs/alipaySdk-15.7.9-20200727142846.aar\"))  // kotlin-script\n  // \u307e\u305f\u306f\n  implementation files('./libs/alipaySdk-15.7.9-20200727142846.aar')  // groovy-script\n}\n"})}),"\n",(0,s.jsx)(i.h3,{id:"test-alipay-native-connector",children:"Alipay \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b"}),"\n",(0,s.jsxs)(i.p,{children:["\u3053\u308c\u3067\u5b8c\u4e86\u3067\u3059\u3002",(0,s.jsx)(i.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u3067\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b"})," \u306e\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"Alipay \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u304c\u6709\u52b9\u306b\u306a\u308b\u3068\u3001\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3057\u3001\u52d5\u4f5c\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"references",children:"\u53c2\u8003\u8cc7\u6599"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://opendocs.alipay.com/support/01rau6",children:"Alipay \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8 - \u30a2\u30af\u30bb\u30b9\u6e96\u5099 - \u30a2\u30d7\u30ea\u306e\u4f5c\u6210\u65b9\u6cd5"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://opendocs.alipay.com/open/200/105310",children:"Alipay \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8 - Web & Mobile Apps - \u30a2\u30d7\u30ea\u306e\u4f5c\u6210"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},10643:(e,i,n)=>{n.d(i,{A:()=>l});const l=n.p+"assets/images/add-framework-46af6de4ae4a8b92382c7e57e3454036.png"},79621:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>t});var l=n(58101);const s={},a=l.createContext(s);function r(e){const i=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:i},e.children)}}}]);