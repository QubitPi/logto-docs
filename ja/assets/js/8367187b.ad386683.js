"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[48421],{4536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"developers/audit-logs","title":"\u76e3\u67fb\u30ed\u30b0","description":"Logto \u306e\u76e3\u67fb\u30ed\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3084\u30a4\u30d9\u30f3\u30c8\u3092\u7c21\u5358\u306b\u76e3\u8996\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u3084\u30d8\u30eb\u30b9\u30c1\u30a7\u30c3\u30af\u306e\u30d3\u30b8\u30cd\u30b9\u30b7\u30ca\u30ea\u30aa\u306b\u5f37\u529b\u306a\u57fa\u76e4\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/developers/audit-logs.mdx","sourceDirName":"developers","slug":"/developers/audit-logs","permalink":"/ja/developers/audit-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/developers/audit-logs.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"audit-logs","title":"\u76e3\u67fb\u30ed\u30b0","sidebar_label":"\u76e3\u67fb\u30ed\u30b0","sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Webhook \u3092\u5b89\u5168\u306b\u3059\u308b","permalink":"/ja/developers/webhooks/secure-webhooks"},"next":{"title":"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0 SDK \u306e\u898f\u7d04","permalink":"/ja/developers/sdk-conventions/"}}');var i=n(25105),o=n(79621);const l={id:"audit-logs",title:"\u76e3\u67fb\u30ed\u30b0",sidebar_label:"\u76e3\u67fb\u30ed\u30b0",sidebar_position:6},r="\u76e3\u67fb\u30ed\u30b0",d={},a=[{value:"\u3059\u3079\u3066\u306e\u30ed\u30b0\u3092\u8868\u793a\u3059\u308b",id:"view-all-logs",level:2},{value:"\u30c6\u30ca\u30f3\u30c8\u30ec\u30d9\u30eb\u3067\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e\u30ad\u30e3\u30d7\u30c1\u30e3",id:"capture-user-activity-at-the-tenant-level",level:2},{value:"\u30e6\u30fc\u30b6\u30fc\u30ec\u30d9\u30eb\u3067\u306e\u8a73\u7d30\u306a\u5206\u6790\u306e\u5b9f\u884c",id:"perform-a-detailed-analysis-at-the-user-level",level:2},{value:"\u3088\u304f\u3042\u308b\u8cea\u554f",id:"faqs",level:2},{value:"\u81ea\u5df1\u30db\u30b9\u30c8\u578b Logto \u3092\u4f7f\u7528\u3057\u3066\u304a\u308a\u3001\u76e3\u67fb\u30ed\u30b0\u3092\u53d6\u5f97\u3059\u308b\u306e\u306b\u6570\u79d2\u304b\u304b\u308a\u307e\u3059\u3002\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u6539\u5584\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f",id:"im-using-self-hosted-logto-and-it-takes-seconds-to-get-the-audit-logs-how-can-i-improve-the-performance",level:3}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components},{CloudLink:s,Details:l}=t;return s||u("CloudLink",!0),l||u("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\u76e3\u67fb\u30ed\u30b0",children:"\u76e3\u67fb\u30ed\u30b0"})}),"\n",(0,i.jsx)(t.p,{children:"Logto \u306e\u76e3\u67fb\u30ed\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u3084\u30a4\u30d9\u30f3\u30c8\u3092\u7c21\u5358\u306b\u76e3\u8996\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30e6\u30fc\u30b6\u30fc\u7ba1\u7406\u3084\u30d8\u30eb\u30b9\u30c1\u30a7\u30c3\u30af\u306e\u30d3\u30b8\u30cd\u30b9\u30b7\u30ca\u30ea\u30aa\u306b\u5f37\u529b\u306a\u57fa\u76e4\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"view-all-logs",children:"\u3059\u3079\u3066\u306e\u30ed\u30b0\u3092\u8868\u793a\u3059\u308b"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(s,{to:"/audit-logs",children:"Console > \u76e3\u67fb\u30ed\u30b0"})," \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002Logto \u306f\u8a8d\u8a3c\n(Authentication)\n\u30a4\u30d9\u30f3\u30c8\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3066\u30c6\u30fc\u30d6\u30eb\u306b\u6574\u7406\u3057\u307e\u3059\u3002\u30a4\u30d9\u30f3\u30c8\u540d\u3001\u30e6\u30fc\u30b6\u30fc\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3092\u8ffd\u8de1\u3057\u307e\u3059\u3002\u30a4\u30d9\u30f3\u30c8\u540d\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u540d\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3057\u3066\u7d50\u679c\u3092\u7d5e\u308a\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u7279\u5b9a\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u8ffd\u52a0\u306e\u8a73\u7d30\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"\u76e3\u67fb\u30ed\u30b0\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u8a8d\u8a3c (Authentication) \u30d7\u30ed\u30bb\u30b9\u4e2d\u306b\u767a\u751f\u3059\u308b\u30ed\u30b0\u306e\u307f\u304c\u542b\u307e\u308c\u3001Management API \u64cd\u4f5c\u306e\u30ed\u30b0\u306f\u8a18\u9332\u3055\u308c\u307e\u305b\u3093\u3002"})}),"\n",(0,i.jsx)(t.h2,{id:"capture-user-activity-at-the-tenant-level",children:"\u30c6\u30ca\u30f3\u30c8\u30ec\u30d9\u30eb\u3067\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e\u30ad\u30e3\u30d7\u30c1\u30e3"}),"\n",(0,i.jsx)(t.p,{children:"Logto \u306e\u30ed\u30b0\u306f\u5305\u62ec\u7684\u306a\u8a73\u7d30\u3092\u63d0\u4f9b\u3057\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u5bb9\u6613\u3055\u3068\u9867\u5ba2\u306e\u5b89\u5168\u6027\u3092\u78ba\u4fdd\u3057\u307e\u3059\u3002\u6b21\u306e\u60c5\u5831\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3066\u8a18\u9332\u3057\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u30a4\u30d9\u30f3\u30c8\u306e\u7a2e\u985e\uff08\u76e3\u67fb\u30ed\u30b0\u30a4\u30d9\u30f3\u30c8\u306e\u5b8c\u5168\u306a\u30ea\u30b9\u30c8\u306f ",(0,i.jsx)(t.a,{href:"https://github.com/logto-io/logto/blob/master/packages/console/src/consts/logs.ts",children:"\u3053\u3061\u3089"})," \u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\uff09"]}),"\n",(0,i.jsx)(t.li,{children:"\u95a2\u4e0e\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,i.jsx)(t.li,{children:"IP \u30a2\u30c9\u30ec\u30b9"}),"\n",(0,i.jsx)(t.li,{children:"\u95a2\u4e0e\u3059\u308b\u30e6\u30fc\u30b6\u30fc"}),"\n",(0,i.jsx)(t.li,{children:"\u30ed\u30b0 ID"}),"\n",(0,i.jsx)(t.li,{children:"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"}),"\n",(0,i.jsx)(t.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u3053\u308c\u3089\u306e\u30a4\u30d9\u30f3\u30c8\u8a18\u9332\u3092\u7dad\u6301\u3059\u308b\u3053\u3068\u3067\u3001\u7d44\u7e54\u306f\u6f5c\u5728\u7684\u306a\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ea\u30b9\u30af\u3092\u52b9\u679c\u7684\u306b\u691c\u51fa\u3057\u3001\u30b7\u30b9\u30c6\u30e0\u3078\u306e\u4e0d\u6b63\u30a2\u30af\u30bb\u30b9\u3092\u9632\u3050\u305f\u3081\u306b\u8fc5\u901f\u306b\u5bfe\u51e6\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"\u76e3\u67fb\u30ed\u30b0\u6210\u529f\u8a73\u7d30\u30da\u30fc\u30b8",src:n(45513).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(t.h2,{id:"perform-a-detailed-analysis-at-the-user-level",children:"\u30e6\u30fc\u30b6\u30fc\u30ec\u30d9\u30eb\u3067\u306e\u8a73\u7d30\u306a\u5206\u6790\u306e\u5b9f\u884c"}),"\n",(0,i.jsx)(t.p,{children:"\u7ba1\u7406\u8005\u306f\u3001\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u95a2\u9023\u3059\u308b\u30ed\u30b0\u306e\u8a73\u7d30\u306a\u5206\u6790\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u3001\u7279\u5b9a\u306e\u30a4\u30d9\u30f3\u30c8\u306b\u95a2\u3059\u308b\u5305\u62ec\u7684\u306a\u8abf\u67fb\u3092\u5bb9\u6613\u306b\u3057\u307e\u3059\u3002\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d7\u30ed\u30bb\u30b9\u306f\u7c21\u5358\u3067\u30e6\u30fc\u30b6\u30fc\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u3067\u3059\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u30e6\u30fc\u30b6\u30fc\u56fa\u6709\u306e\u30ed\u30b0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u624b\u9806\u306b\u5f93\u3044\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(s,{to:"/users",children:"Console > \u30e6\u30fc\u30b6\u30fc\u7ba1\u7406"})," \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.li,{children:"\u5e0c\u671b\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u3092\u9078\u629e\u3057\u3001\u8a73\u7d30\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u300c\u30e6\u30fc\u30b6\u30fc\u30ed\u30b0\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u7d50\u679c\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u306f\u3001\u305d\u306e\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u3088\u3063\u3066\u5b9f\u884c\u304a\u3088\u3073\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u305f\u30ed\u30b0\u30a4\u30d9\u30f3\u30c8\u306e\u307f\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"\u7279\u5b9a\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u95a2\u9023\u3059\u308b\u76e3\u67fb\u30ed\u30b0",src:n(59900).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(t.h2,{id:"faqs",children:"\u3088\u304f\u3042\u308b\u8cea\u554f"}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(t.h3,{id:"im-using-self-hosted-logto-and-it-takes-seconds-to-get-the-audit-logs-how-can-i-improve-the-performance",children:"\u81ea\u5df1\u30db\u30b9\u30c8\u578b Logto \u3092\u4f7f\u7528\u3057\u3066\u304a\u308a\u3001\u76e3\u67fb\u30ed\u30b0\u3092\u53d6\u5f97\u3059\u308b\u306e\u306b\u6570\u79d2\u304b\u304b\u308a\u307e\u3059\u3002\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u6539\u5584\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f"})}),(0,i.jsx)(t.p,{children:"OSS \u30e6\u30fc\u30b6\u30fc\u306f\u3001\u53e4\u3044\u76e3\u67fb\u30ed\u30b0\u3092\u5b9a\u671f\u7684\u306b\u30af\u30ea\u30fc\u30f3\u30a2\u30c3\u30d7\u3059\u308b\u305f\u3081\u306b cronjob \u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},45513:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/audit-log-success-details-page-fbb90ca85a82a1e481d0882221fbcef9.png"},59900:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/audit-logs-related-to-specific-user-4efa2ebe2b4460700099620364bb83fa.png"},79621:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(58101);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);