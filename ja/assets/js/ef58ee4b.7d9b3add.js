"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[89229],{59877:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"logto-cloud/custom-domain","title":"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3","description":"\u3042\u306a\u305f\u306e Logto \u30c6\u30ca\u30f3\u30c8\u306b\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u7121\u6599\u30c9\u30e1\u30a4\u30f3 {}.app.logto \u304c\u4ed8\u5c5e\u3057\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u3001auth.example.com \u306e\u3088\u3046\u306a\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u3068\u30d6\u30e9\u30f3\u30c9\u8a8d\u77e5\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/logto-cloud/custom-domain.mdx","sourceDirName":"logto-cloud","slug":"/logto-cloud/custom-domain","permalink":"/ja/logto-cloud/custom-domain","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/logto-cloud/custom-domain.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"custom-domain","title":"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u30c6\u30ca\u30f3\u30c8\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406","permalink":"/ja/logto-cloud/tenant-member-management"},"next":{"title":"\u8acb\u6c42\u3068\u4fa1\u683c\u8a2d\u5b9a","permalink":"/ja/logto-cloud/billing-and-pricing"}}');var s=o(25105),t=o(79621);const c={id:"custom-domain",title:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3",sidebar_position:4},l="\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3",d={},r=[{value:"\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b",id:"configure-custom-domain-in-console",level:2},{value:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",id:"troubleshooting",level:2},{value:"SSL \u8a3c\u660e\u66f8\u306e\u554f\u984c",id:"ssl-certificate-issues",level:3},{value:"&quot;The hostname is associated with a held zone&quot; \u30a8\u30e9\u30fc",id:"the-hostname-is-associated-with-a-held-zone-error",level:3},{value:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3059\u308b",id:"use-custom-domain",level:2},{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e SDK \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u66f4\u65b0\u3059\u308b",id:"updating-the-sdk-endpoint-for-applications",level:3},{value:"\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4fee\u6b63\u3059\u308b",id:"modifying-auth-endpoints-for-other-applications",level:3},{value:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u3092\u66f4\u65b0\u3059\u308b",id:"updating-the-social-connectors-callback-uri",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{CloudLink:i,Details:c}=n;return i||u("CloudLink",!0),c||u("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3",children:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3042\u306a\u305f\u306e Logto \u30c6\u30ca\u30f3\u30c8\u306b\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u7121\u6599\u30c9\u30e1\u30a4\u30f3 ",(0,s.jsx)(n.code,{children:"{{tenant-id}}.app.logto"})," \u304c\u4ed8\u5c5e\u3057\u3066\u3044\u307e\u3059\u3002\u3057\u304b\u3057\u3001",(0,s.jsx)(n.code,{children:"auth.example.com"})," \u306e\u3088\u3046\u306a\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u3068\u30d6\u30e9\u30f3\u30c9\u8a8d\u77e5\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u306f\u3001\u4ee5\u4e0b\u306e\u6a5f\u80fd\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/end-user-flows/sign-up-and-sign-in",children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u304a\u3088\u3073\u767b\u9332\u30da\u30fc\u30b8"})," \u306e URL"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/end-user-flows/mfa/webauthn",children:"\u30d1\u30b9\u30ad\u30fc"})," \u30ea\u30f3\u30af\u306e URL\uff08\u30e6\u30fc\u30b6\u30fc\u304c\u30d1\u30b9\u30ad\u30fc\u3092\u30ea\u30f3\u30af\u3057\u305f\u5f8c\u306b\u30c9\u30e1\u30a4\u30f3\u3092\u5909\u66f4\u3059\u308b\u3068\u3001\u8a8d\u8a3c\u304c\u30d6\u30ed\u30c3\u30af\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\uff09\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/connectors/social-connectors",children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc"})," \u307e\u305f\u306f ",(0,s.jsx)(n.a,{href:"/connectors/enterprise-connectors",children:"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba SSO \u30b3\u30cd\u30af\u30bf\u30fc"})," \u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068 Logto \u3092\u7d71\u5408\u3059\u308b\u305f\u3081\u306e ",(0,s.jsx)(n.a,{href:"/integrate-logto/application-data-structure#openid-provider-configuration-endpoint",children:"SDK \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u30b5\u30fc\u30d3\u30b9\u3092\u516c\u958b\u3057\u305f\u5f8c\u306b\u30c9\u30e1\u30a4\u30f3\u3092\u5909\u66f4\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3084\u7d71\u5408\u304c\u53e4\u3044\u30c9\u30e1\u30a4\u30f3\u3092\u53c2\u7167\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u554f\u984c\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30b9\u30e0\u30fc\u30ba\u306a\u79fb\u884c\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u3001",(0,s.jsx)(n.strong,{children:"\u672c\u756a\u30c6\u30ca\u30f3\u30c8\u306e\u4f5c\u6210\u6642\u306b\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"configure-custom-domain-in-console",children:"\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u65b0\u3057\u3044\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(i,{to:"/tenant-settings/domains",children:"\u30b3\u30f3\u30bd\u30fc\u30eb > \u8a2d\u5b9a > \u30c9\u30e1\u30a4\u30f3"})," \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u300c\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3001\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u5165\u529b\u3057\u3001\u300c\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0",src:o(80065).A+"",width:"2880",height:"1026"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u30c6\u30fc\u30d6\u30eb\u5185\u306e CNAME \u5024\u3092\u30b3\u30d4\u30fc\u3057\u3001\u30c9\u30e1\u30a4\u30f3\u306e DNS \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306b\u79fb\u52d5\u3057\u3066\u30ec\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u51e6\u7406\u4e2d",src:o(47501).A+"",width:"2880",height:"1212"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u691c\u8a3c\u3068 SSL \u30d7\u30ed\u30bb\u30b9\u3092\u5f85\u3061\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u304c\u8ffd\u52a0\u3055\u308c\u308b\u307e\u3067\u300110 \u79d2\u3054\u3068\u306b\u81ea\u52d5\u7684\u306b\u30ec\u30b3\u30fc\u30c9\u3092\u691c\u8a3c\u3057\u307e\u3059\u3002\u5165\u529b\u3057\u305f\u30c9\u30e1\u30a4\u30f3\u540d\u307e\u305f\u306f DNS \u30ec\u30b3\u30fc\u30c9\u304c\u6b63\u78ba\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u691c\u8a3c\u306f\u901a\u5e38\u6570\u5206\u3067\u5b8c\u4e86\u3057\u307e\u3059\u304c\u3001DNS \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306b\u3088\u3063\u3066\u306f\u6700\u5927 24 \u6642\u9593\u304b\u304b\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u30d7\u30ed\u30bb\u30b9\u4e2d\u306b\u4ed6\u306e\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.h3,{id:"ssl-certificate-issues",children:"SSL \u8a3c\u660e\u66f8\u306e\u554f\u984c"})}),(0,s.jsx)(n.p,{children:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u969b\u306b SSL \u8a3c\u660e\u66f8\u306e\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3001\u305d\u308c\u306f DNS \u8a2d\u5b9a\u306e CAA \u30ec\u30b3\u30fc\u30c9\u306b\u95a2\u9023\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002CAA \u30ec\u30b3\u30fc\u30c9\u306f\u3001\u3069\u306e\u8a3c\u660e\u66f8\u6a5f\u95a2 (CA) \u304c\u3042\u306a\u305f\u306e\u30c9\u30e1\u30a4\u30f3\u306e\u8a3c\u660e\u66f8\u3092\u767a\u884c\u3059\u308b\u6a29\u9650\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"}),(0,s.jsxs)(n.p,{children:["CAA \u30ec\u30b3\u30fc\u30c9\u306b\u95a2\u9023\u3059\u308b SSL \u8a3c\u660e\u66f8\u306e\u554f\u984c\u3092\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u3057\u3066\u89e3\u6c7a\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.a,{href:"https://developers.cloudflare.com/ssl/edge-certificates/caa-records/",children:"Cloudflare \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.h3,{id:"the-hostname-is-associated-with-a-held-zone-error",children:'"The hostname is associated with a held zone" \u30a8\u30e9\u30fc'})}),(0,s.jsxs)(n.p,{children:['\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u969b\u306b "The hostname is associated with a held zone, please contact the owner to have the hold removed" \u3068\u3044\u3046\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u3001\u305d\u308c\u306f\u30c9\u30e1\u30a4\u30f3\u304c\u3059\u3067\u306b Cloudflare \u30be\u30fc\u30f3\u306b\u3042\u308a\u3001\u300c\u30be\u30fc\u30f3\u30db\u30fc\u30eb\u30c9\u300d\u30b9\u30c6\u30fc\u30bf\u30b9\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u3053\u306e\u554f\u984c\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u306f\u3001',(0,s.jsx)(n.a,{href:"https://developers.cloudflare.com/fundamentals/setup/account/account-security/zone-holds/",children:"Cloudflare \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,s.jsx)(n.p,{children:"\u3053\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u306b\u306f\u3001\u30be\u30fc\u30f3\u30db\u30fc\u30eb\u30c9\u3092\u89e3\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Cloudflare \u3067\u306e\u30be\u30fc\u30f3\u30db\u30fc\u30eb\u30c9\u306e\u89e3\u9664\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001\u4e0a\u8a18\u306e\u30ea\u30f3\u30af\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})]}),"\n",(0,s.jsx)(n.h2,{id:"use-custom-domain",children:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u8a2d\u5b9a\u3092\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u540d\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u306e Logto \u30c9\u30e1\u30a4\u30f3\u540d\u306e\u4e21\u65b9\u304c\u30c6\u30ca\u30f3\u30c8\u3067\u5229\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u7279\u5b9a\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u304c ",(0,s.jsx)(n.code,{children:"auth.example.com"})," \u3067\u3042\u308b\u3068\u4eee\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f",src:o(48420).A+"",width:"2880",height:"1178"})})]}),"\n",(0,s.jsx)(n.h3,{id:"updating-the-sdk-endpoint-for-applications",children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e SDK \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u66f4\u65b0\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"Logto SDK \u306e\u521d\u671f\u5316\u30b3\u30fc\u30c9\u3092\u5909\u66f4\u3057\u3001\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30c9\u30e1\u30a4\u30f3\u540d\u3092\u4fee\u6b63\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const client = new LogtoClient({\n  ...,// \u4ed6\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\n  endpoint: 'https://auth.example.com',\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"modifying-auth-endpoints-for-other-applications",children:"\u4ed6\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4fee\u6b63\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"Logto SDK \u3092\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3042\u308b\u5834\u5408\u3001\u305d\u306e\u8a8d\u8a3c\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8a8d\u8a3c\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001\u6b21\u306e well-known URL \u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://auth.example.com/oidc/.well-known/openid-configuration\n"})}),"\n",(0,s.jsx)(n.h3,{id:"updating-the-social-connectors-callback-uri",children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u3092\u66f4\u65b0\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u306f\u81ea\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002\u30bd\u30fc\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u958b\u767a\u8005\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u79fb\u52d5\u3057\u3066\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30fc\u304c\u30ab\u30b9\u30bf\u30e0\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u306f\u65b0\u3057\u3044\u30c9\u30e1\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u958b\u767a\u8005\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u79fb\u52d5\u3057\u3066\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u3092\u624b\u52d5\u3067\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},48420:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/custom-domain-added-6493bb65f39cff5d6d8c7a5bdccf413b.jpeg"},47501:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/custom-domain-processing-28ff46a3d867e7c069203c6f02cbdb13.jpeg"},80065:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/custom-domain-section-755de162507f83d2a1d99fe8e2db0ebe.jpeg"},79621:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>l});var i=o(58101);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);