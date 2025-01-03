"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[60791],{38513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"authorization/api-resources/README","title":"API \u30ea\u30bd\u30fc\u30b9","description":"API \u30ea\u30bd\u30fc\u30b9\u3001\u5225\u540d \u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc \u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u308b\u30bf\u30fc\u30b2\u30c3\u30c8\u30b5\u30fc\u30d3\u30b9\u307e\u305f\u306f\u30ea\u30bd\u30fc\u30b9\u3092\u793a\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8868\u3059 URI \u5f62\u5f0f\u306e\u5909\u6570\u3067\u3059\u3002\u3053\u308c\u306f Logto \u306e\u8a8d\u53ef (Authorization) \u30b7\u30b9\u30c6\u30e0\u306b\u304a\u3051\u308b\u91cd\u8981\u306a\u6982\u5ff5\u3067\u3042\u308a\u3001\u8a8d\u53ef\u30dd\u30ea\u30b7\u30fc\u304c\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/authorization/api-resources/README.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/","permalink":"/ja/authorization/api-resources/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/authorization/api-resources/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u8a8d\u53ef (Authorization)","permalink":"/ja/authorization/"},"next":{"title":"API \u3092\u4fdd\u8b77\u3059\u308b","permalink":"/ja/authorization/api-resources/protect-your-api"}}');var o=t(25105),s=t(79621);const i={sidebar_position:1},c="API \u30ea\u30bd\u30fc\u30b9",d={},l=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc",id:"resource-indicator",level:2},{value:"Logto API \u30ea\u30bd\u30fc\u30b9\u30b9\u30ad\u30fc\u30de",id:"logto-api-resource-schema",level:2},{value:"\u30c7\u30d5\u30a9\u30eb\u30c8 API",id:"default-api",level:2},{value:"Logto \u306b API \u30ea\u30bd\u30fc\u30b9\u3092\u767b\u9332\u3059\u308b",id:"register-the-api-resources-in-logto",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"related-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:t,Url:r}=n;return t||j("CloudLink",!0),r||j("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"api-\u30ea\u30bd\u30fc\u30b9",children:"API \u30ea\u30bd\u30fc\u30b9"})}),"\n",(0,o.jsxs)(n.p,{children:["API \u30ea\u30bd\u30fc\u30b9\u3001\u5225\u540d ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc"})," \u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u3055\u308c\u308b\u30bf\u30fc\u30b2\u30c3\u30c8\u30b5\u30fc\u30d3\u30b9\u307e\u305f\u306f\u30ea\u30bd\u30fc\u30b9\u3092\u793a\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u30ea\u30bd\u30fc\u30b9\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8868\u3059 URI \u5f62\u5f0f\u306e\u5909\u6570\u3067\u3059\u3002\u3053\u308c\u306f Logto \u306e\u8a8d\u53ef (Authorization) \u30b7\u30b9\u30c6\u30e0\u306b\u304a\u3051\u308b\u91cd\u8981\u306a\u6982\u5ff5\u3067\u3042\u308a\u3001\u8a8d\u53ef\u30dd\u30ea\u30b7\u30fc\u304c\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"resource-indicator",children:"\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u30ea\u30bd\u30fc\u30b9\u5024\u306f\u3001\u30a2\u30af\u30bb\u30b9\u304c\u8981\u6c42\u3055\u308c\u3066\u3044\u308b\u30bf\u30fc\u30b2\u30c3\u30c8\u30b5\u30fc\u30d3\u30b9\u307e\u305f\u306f\u30ea\u30bd\u30fc\u30b9\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u305d\u306e\u5024\u306f\u7d76\u5bfe URI \u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,o.jsx)(n.li,{children:"URI \u306f\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u3093\u3067\u306f\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u30af\u30a8\u30ea\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u3080\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u30a2\u30af\u30bb\u30b9\u3057\u3088\u3046\u3068\u3059\u308b\u5b8c\u5168\u306a API \u307e\u305f\u306f\u30ea\u30bd\u30fc\u30b9\u30bb\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u3001\u53ef\u80fd\u306a\u9650\u308a\u5177\u4f53\u7684\u306a URI \u3092\u63d0\u4f9b\u3059\u308b\u3079\u304d\u3067\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u5b9f\u969b\u306b\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u5bfe\u8a71\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u305f\u306f\u30ea\u30bd\u30fc\u30b9\u306e\u30d9\u30fc\u30b9 URI \u3092\u77e5\u3063\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u305d\u308c\u3092\u30ea\u30bd\u30fc\u30b9\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u5024\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u306e\u304c\u9069\u5207\u3067\u3059\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\uff1aLogto Management API \u306e\u30d9\u30fc\u30b9 URI\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"https://tenantId.logto.app/api\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u3053\u306e API \u30ea\u30bd\u30fc\u30b9\u306f Logto \u30b5\u30fc\u30d3\u30b9\u306b\u4e8b\u524d\u767b\u9332\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e URI \u306e\u4e0b\u306b\u3042\u308b\u3059\u3079\u3066\u306e ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/",children:"Management API"})," \u306f Logto \u306b\u3088\u3063\u3066\u4fdd\u8b77\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"logto-api-resource-schema",children:"Logto API \u30ea\u30bd\u30fc\u30b9\u30b9\u30ad\u30fc\u30de"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u540d"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8aac\u660e"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"\u5fc5\u9808"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"API \u540d"}),(0,o.jsx)(n.td,{children:"API \u30ea\u30bd\u30fc\u30b9\u3092\u8b58\u5225\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u30e6\u30fc\u30b6\u30fc\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u306a\u540d\u524d\u3002"}),(0,o.jsx)(n.td,{children:"true"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"API \u8b58\u5225\u5b50"}),(0,o.jsxs)(n.td,{children:["\u4e0a\u8a18\u306e\u5236\u9650\u4ed8\u304d\u306e\u4e00\u610f\u306e API ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc"})," \u5024\u3002"]}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Logto \u306f\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u8981\u6c42\u3055\u308c\u305f API \u30ea\u30bd\u30fc\u30b9\u3092\u8b58\u5225\u3057\u3001\u8a8d\u53ef\u30c8\u30fc\u30af\u30f3\u3092\u9069\u5207\u306b\u4ed8\u4e0e\u3057\u307e\u3059\u3002"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u30c8\u30fc\u30af\u30f3\u306e\u6709\u52b9\u671f\u9650\uff08\u79d2\u5358\u4f4d\uff09"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})," \u306e\u6709\u52b9\u671f\u9650\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u6709\u52b9\u671f\u9650\u306f ",(0,o.jsx)(n.strong,{children:"3600"})," \u3067\u3059\u3002"]}),(0,o.jsx)(n.td,{children:"false"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8 API"}),(0,o.jsx)(n.td,{children:"\u30c6\u30ca\u30f3\u30c8\u3054\u3068\u306b\u30bc\u30ed\u307e\u305f\u306f 1 \u3064\u306e\u30c7\u30d5\u30a9\u30eb\u30c8 API \u306e\u307f\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8 API \u304c\u6307\u5b9a\u3055\u308c\u308b\u3068\u3001\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u30ea\u30bd\u30fc\u30b9\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3092\u7701\u7565\u3067\u304d\u307e\u3059\u3002\u5f8c\u7d9a\u306e\u30c8\u30fc\u30af\u30f3\u4ea4\u63db\u3067\u306f\u3001\u305d\u306e API \u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u3001JWT \u304c\u767a\u884c\u3055\u308c\u307e\u3059\u3002"}),(0,o.jsx)(n.td,{children:"false"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u671f\u9650\u5207\u308c\u306e ",(0,o.jsx)(n.code,{children:"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})," \u3092\u6301\u3064\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u5236\u9650\u3055\u308c\u308b\u3079\u304d\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u4e71\u7528\u3055\u308c\u305f\u30c8\u30fc\u30af\u30f3\u304b\u3089 API \u3092\u4fdd\u8b77\u3059\u308b\u305f\u3081\u306b\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u8a2d\u5b9a\u3055\u308c\u305f\u5024\u304c\u5927\u304d\u3044\u307b\u3069\u3001\u767a\u884c\u3055\u308c\u305f ",(0,o.jsx)(n.code,{children:"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})," \u306f\u9577\u304f\u751f\u5b58\u3057\u3001API \u306f\u3088\u308a\u8106\u5f31\u306b\u306a\u308a\u307e\u3059\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"default-api",children:"\u30c7\u30d5\u30a9\u30eb\u30c8 API"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"\u3053\u306e\u6a5f\u80fd\u306f\u3001\u4e3b\u306b OIDC \u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u4f8b\uff1aChatGPT \u30d7\u30e9\u30b0\u30a4\u30f3\u5411\u3051\u306b\u610f\u56f3\u3055\u308c\u3066\u3044\u307e\u3059\u3002"})}),"\n",(0,o.jsxs)(n.p,{children:["Logto \u306f ",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707",children:"RFC 8707: OAuth 2.0 \u306e\u30ea\u30bd\u30fc\u30b9\u30a4\u30f3\u30b8\u30b1\u30fc\u30bf\u30fc"})," \u3092\u6d3b\u7528\u3057\u3066\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1 (RBAC) \u3092\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f OAuth 2.0 \u306e\u6a5f\u80fd\u306e\u4e00\u3064\u3067\u3059\u304c\u3001\u307e\u3060\u5e83\u304f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["Logto \u306e\u5b9f\u88c5\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u306e\u6a29\u9650 (\u30b9\u30b3\u30fc\u30d7) \u306f\u3059\u3079\u3066 API \u30ea\u30bd\u30fc\u30b9\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u3001OpenID Connect (\u307e\u305f\u306f OAuth) \u6a29\u9650\u3068\u3057\u3066\u6271\u308f\u308c\u307e\u3059\u3002\u4e00\u822c\u7684\u306b\u3001\u3053\u308c\u306f\u8a8d\u53ef\u30d7\u30ed\u30bb\u30b9\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001",(0,o.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"RFC 8707"})," \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30a2\u30d7\u30ea\u3068\u7d71\u5408\u3059\u308b\u969b\u306b\u306f\u3001\u521d\u671f\u306e\u8a8d\u53ef\u30ea\u30af\u30a8\u30b9\u30c8\u306b ",(0,o.jsx)(n.code,{children:"resource"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u554f\u984c\u304c\u751f\u3058\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u7d50\u679c\u3001Logto \u306f\u5e38\u306b\u4e0d\u900f\u660e\u306a\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u3053\u306e\u554f\u984c\u306b\u5bfe\u51e6\u3059\u308b\u305f\u3081\u306b\u3001API \u30ea\u30bd\u30fc\u30b9\u3092\u30c6\u30ca\u30f3\u30c8\u30ec\u30d9\u30eb\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u4e00\u5ea6\u8a2d\u5b9a\u3055\u308c\u308b\u3068\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Logto \u306f\u3001",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"\u8a8d\u8a3c\u30ea\u30af\u30a8\u30b9\u30c8"})," \u306b ",(0,o.jsx)(n.code,{children:"resource"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e API \u30ea\u30bd\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"openid"})," \u30b9\u30b3\u30fc\u30d7\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u5f8c\u7d9a\u306e ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"\u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8"})," \u306b ",(0,o.jsx)(n.code,{children:"resource"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"})," \u306e\u305f\u3081\u306e\u4e0d\u900f\u660e\u306a\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u304c\u767a\u884c\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"openid"})," \u30b9\u30b3\u30fc\u30d7\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u5f8c\u7d9a\u306e ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"\u30c8\u30fc\u30af\u30f3\u30ea\u30af\u30a8\u30b9\u30c8"})," \u306b ",(0,o.jsx)(n.code,{children:"resource"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e API \u30ea\u30bd\u30fc\u30b9\u306e\u305f\u3081\u306e JWT \u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u304c\u767a\u884c\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e API \u30ea\u30bd\u30fc\u30b9\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001RFC 8707 \u30b5\u30dd\u30fc\u30c8\u304c\u6b20\u3051\u3066\u3044\u308b\u30a2\u30d7\u30ea\u3068\u306e\u30b9\u30e0\u30fc\u30ba\u306a\u7d71\u5408\u3092\u78ba\u4fdd\u3057\u306a\u304c\u3089\u3001\u9069\u5207\u306a\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\u3092\u7dad\u6301\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"register-the-api-resources-in-logto",children:"Logto \u306b API \u30ea\u30bd\u30fc\u30b9\u3092\u767b\u9332\u3059\u308b"}),"\n",(0,o.jsxs)(n.p,{children:["Logto \u304b\u3089\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u5236\u9650\u4ed8\u304d ",(0,o.jsx)(n.code,{children:"\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3"})," \u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u30d0\u30c3\u30af\u30a8\u30f3\u30c9 API \u3092\u767b\u9332\u3057\u3066 Logto \u306e\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u5236\u9650\u4ed8\u304d\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002\u8a8d\u53ef\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u53d7\u4fe1\u3055\u308c\u308b\u3068\u3001Logto \u306f\u767b\u9332\u3055\u308c\u305f API \u30ea\u30bd\u30fc\u30b9\u3092\u8b58\u5225\u3057\u3001\u9069\u5207\u306b\u30a2\u30af\u30bb\u30b9\u3092\u8a31\u53ef\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["API \u3092\u767b\u9332\u3059\u308b\u306b\u306f\u3001",(0,o.jsx)(t,{to:"/api-resources",children:"Console > API \u30ea\u30bd\u30fc\u30b9"})," \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002API \u8b58\u5225\u5b50\u304c ",(0,o.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"})," \u3068\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u7d44\u307f\u8fbc\u307f\u30ea\u30bd\u30fc\u30b9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u30ea\u30bd\u30fc\u30b9\u306f Logto \u306e\u3059\u3079\u3066\u306e Management API \u3092\u5305\u542b\u3057\u3001Logto \u306e\u8a8d\u53ef\u3055\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u306e\u307f\u304c\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u4fdd\u8b77\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Create API resource"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u30d5\u30a9\u30fc\u30e0\u306b\u5f93\u3063\u3066\u72ec\u81ea\u306e API \u30ea\u30bd\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\uff1a"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u3053\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8b58\u5225\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u4eba\u9593\u304c\u8aad\u307f\u3084\u3059\u3044 ",(0,o.jsx)(n.strong,{children:"API \u540d"}),"\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["URI \u5f62\u5f0f\u306e\u4e00\u610f\u306e ",(0,o.jsx)(n.strong,{children:"API \u8b58\u5225\u5b50"}),"\u3002\u3053\u308c\u306f API \u30ea\u30bd\u30fc\u30b9\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8868\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u65b0\u3057\u3044 API \u306f\u4f5c\u6210\u3055\u308c\u308b\u3068\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 API \u8a73\u7d30\u30da\u30fc\u30b8\u3067\u7ba1\u7406\u307e\u305f\u306f\u524a\u9664\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"related-resources",children:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,o.jsx)(r,{href:"https://blog.logto.io/opaque-token-vs-jwt",children:"\u4e0d\u900f\u660e\u30c8\u30fc\u30af\u30f3 vs JWT"}),"\n",(0,o.jsx)(r,{href:"https://blog.logto.io/when-should-i-use-jwts",children:"JWT \u3092\u4f7f\u7528\u3059\u308b\u3079\u304d\u6642\u306f\uff1f"}),"\n",(0,o.jsx)(r,{href:"https://blog.logto.io/api-authorization-methods",children:"API \u8a8d\u53ef (Authorization) \u65b9\u6cd5"})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(58101);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);