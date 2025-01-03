"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[92293],{25214:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"logto-oss/central-cache","title":"\u4e2d\u592e\u30ad\u30e3\u30c3\u30b7\u30e5","description":"Logto \u306f\u3001Redis\xae \u3092\u65e2\u77e5\u30c7\u30fc\u30bf\u306e\u4e2d\u592e\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u4e2d\u592e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001Logto \u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30af\u30a8\u30ea\u306e\u6570\u3092\u6e1b\u3089\u3057\u3001\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306e\u4f53\u9a13\u3092\u5927\u5e45\u306b\u9ad8\u901f\u5316\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/logto-oss/central-cache.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/central-cache","permalink":"/ja/logto-oss/central-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/logto-oss/central-cache.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Translate CLI","permalink":"/ja/logto-oss/translate-cli"},"next":{"title":"\u30d5\u30a1\u30a4\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc","permalink":"/ja/logto-oss/file-storage-provider"}}');var r=s(25105),t=s(79621);const i={sidebar_position:5},c="\u4e2d\u592e\u30ad\u30e3\u30c3\u30b7\u30e5",a={},d=[{value:"\u63a5\u7d9a\u306e\u8a2d\u5b9a",id:"configure-the-connection",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u6a5f\u80fd\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b",id:"check-if-the-cache-is-working",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u4e2d\u592e\u30ad\u30e3\u30c3\u30b7\u30e5",children:"\u4e2d\u592e\u30ad\u30e3\u30c3\u30b7\u30e5"})}),"\n",(0,r.jsxs)(n.p,{children:["Logto \u306f\u3001Redis\xae",(0,r.jsx)(n.sup,{children:(0,r.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," \u3092\u65e2\u77e5\u30c7\u30fc\u30bf\u306e\u4e2d\u592e\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u4e2d\u592e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001Logto \u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30af\u30a8\u30ea\u306e\u6570\u3092\u6e1b\u3089\u3057\u3001\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u306e\u4f53\u9a13\u3092\u5927\u5e45\u306b\u9ad8\u901f\u5316\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u306f\u65e2\u77e5\u30c7\u30fc\u30bf\u5c02\u7528\u306b\u8a2d\u8a08\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u516c\u958b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u73fe\u6642\u70b9\u3067\u306f\u3001Logto \u306f\u8a8d\u8a3c (Authentication) \u307e\u305f\u306f\u8a8d\u53ef (Authorization) \u3092\u5fc5\u8981\u3068\u3059\u308b\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u6700\u826f\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"configure-the-connection",children:"\u63a5\u7d9a\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(n.p,{children:["\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u7a3c\u50cd\u4e2d\u306e Redis 6.0 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002Logto \u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u63a5\u7d9a\u3057\u3066\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u306f\u3001",(0,r.jsx)(n.code,{children:"REDIS_URL"})," \u74b0\u5883\u5909\u6570\u3092 Redis \u63a5\u7d9a\u6587\u5b57\u5217\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u63a5\u7d9a\u6587\u5b57\u5217\u306f\u3001\u975e\u30bb\u30ad\u30e5\u30a2\u63a5\u7d9a\u306e\u5834\u5408\u306f ",(0,r.jsx)(n.a,{href:"https://www.iana.org/assignments/uri-schemes/prov/redis",children:'"redis" \u30d7\u30ed\u30c8\u30b3\u30eb'})," (",(0,r.jsx)(n.code,{children:"redis://"}),") \u3067\u59cb\u307e\u308a\u3001TLS \u7d4c\u7531\u306e\u63a5\u7d9a\u306e\u5834\u5408\u306f ",(0,r.jsx)(n.a,{href:"https://www.iana.org/assignments/uri-schemes/prov/rediss",children:'"redis" \u30d7\u30ed\u30c8\u30b3\u30eb'})," (",(0,r.jsx)(n.code,{children:"redis://"}),") \u3067\u59cb\u307e\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"REDIS_URL=redis://your-redis-username:your-password@your.redis.url.com:6380\n"})}),"\n",(0,r.jsx)(n.p,{children:'\u63a5\u7d9a\u6587\u5b57\u5217\u306e\u307b\u3068\u3093\u3069\u306e\u90e8\u5206\u306f\u7701\u7565\u53ef\u80fd\u3067\u3059\u3002\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30dd\u30fc\u30c8\u3092\u7701\u7565\u3057\u3001"redis" \u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u7528\u3057\u3066\u63a5\u7d9a\u6587\u5b57\u5217\u3092\u69cb\u6210\u3057\u3066\u3044\u307e\u3059\uff1a'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"REDIS_URL=redis://:your-password@your.redis.url.com\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u306b\u7279\u6b8a\u6587\u5b57\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001URI \u30a8\u30f3\u30b3\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# \u30d1\u30b9\u30ef\u30fc\u30c9\u304c "foo=" \u306e\u5834\u5408\nREDIS_URL=redis://:foo%3D@your.redis.url.com\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u3059\u3079\u3066\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u4fbf\u5b9c\u4e0a\u3001\u5909\u6570\u3092\u771f\u5024\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'REDIS_URL=1 # \u307e\u305f\u306f "true", "yes"\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://stackexchange.github.io/StackExchange.Redis/Configuration.html",children:"StackExchange.Redis"})," \u6587\u5b57\u5217\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"check-if-the-cache-is-working",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u6a5f\u80fd\u3057\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b"}),"\n",(0,r.jsx)(n.p,{children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u6b63\u3057\u304f\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001Logto \u306e\u8d77\u52d5\u6642\u306b\u6b21\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[CACHE] Connected to Redis\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3055\u3089\u306b\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u30d2\u30c3\u30c8\u3057\u305f\u5834\u5408\uff08\u4f8b\u3048\u3070\u3001",(0,r.jsx)(n.code,{children:"GET /api/.well-known/phrases"})," \u306b\u8907\u6570\u56de\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\uff09\u3001\u6b21\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u8868\u793a\u3055\u308c\u307e\u3059\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[CACHE] Well-known cache hit for ...\n"})}),"\n","\n",(0,r.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,r.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,r.jsxs)(n.p,{children:["Redis \u306f Redis Ltd. \u306e\u767b\u9332\u5546\u6a19\u3067\u3059\u3002\u3053\u308c\u306b\u95a2\u3059\u308b\u6a29\u5229\u306f\u3059\u3079\u3066 Redis Ltd. \u306b\u5e30\u5c5e\u3057\u307e\u3059\u3002Silverhand \u306b\u3088\u308b\u4f7f\u7528\u306f\u53c2\u7167\u76ee\u7684\u306e\u307f\u3067\u3042\u308a\u3001Redis \u3068 Silverhand \u306e\u9593\u306b\u30b9\u30dd\u30f3\u30b5\u30fc\u30b7\u30c3\u30d7\u3001\u627f\u8a8d\u3001\u307e\u305f\u306f\u63d0\u643a\u3092\u793a\u3059\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 ",(0,r.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var o=s(58101);const r={},t=o.createContext(r);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);