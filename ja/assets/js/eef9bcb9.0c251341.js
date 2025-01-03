"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[98564],{31553:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"authorization/role-based-access-control/configure-permissions","title":"\u6a29\u9650 (Permissions) \u3092\u8a2d\u5b9a\u3059\u308b","description":"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066 API \u6a29\u9650 (Permissions) \u3092\u8a2d\u5b9a\u3059\u308b \\\\","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-permissions.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/configure-permissions","permalink":"/ja/authorization/role-based-access-control/configure-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-permissions.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1","permalink":"/ja/authorization/role-based-access-control/"},"next":{"title":"\u30ed\u30fc\u30eb\u306e\u8a2d\u5b9a","permalink":"/ja/authorization/role-based-access-control/configure-roles"}}');var t=s(25105),i=s(79621);const n={sidebar_position:1},c="\u6a29\u9650 (Permissions) \u3092\u8a2d\u5b9a\u3059\u308b",a={},d=[{value:"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066 API \u6a29\u9650 (Permissions) \u3092\u8a2d\u5b9a\u3059\u308b",id:"configure-api-permissions-via-logto-console",level:2},{value:"Logto Management API \u3092\u4f7f\u7528\u3057\u3066 API \u6a29\u9650 (Permissions) \u3092\u8a2d\u5b9a\u3059\u308b",id:"configure-api-permissions-via-logto-management-api",level:2}];function l(e){const o={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{CloudLink:s}=o;return s||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"\u6a29\u9650-permissions-\u3092\u8a2d\u5b9a\u3059\u308b",children:"\u6a29\u9650 (Permissions) \u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,t.jsx)(o.h2,{id:"configure-api-permissions-via-logto-console",children:"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066 API \u6a29\u9650 (Permissions) \u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,t.jsxs)(o.p,{children:["\u6a29\u9650 (Permissions) \u306f ",(0,t.jsx)(o.strong,{children:"API \u30ea\u30bd\u30fc\u30b9"})," \u30ec\u30d9\u30eb\u3067\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,t.jsx)(s,{to:"/api-resources",children:"\u30b3\u30f3\u30bd\u30fc\u30eb > API \u30ea\u30bd\u30fc\u30b9"})," \u306b\u79fb\u52d5\u3057\u3001\u7ba1\u7406\u3057\u305f\u3044 API \u30ea\u30bd\u30fc\u30b9\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u300c\u6a29\u9650 (Permissions)\u300d\u30bf\u30d6\u306b\u9032\u307f\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u6a29\u9650 (Permissions) \u306e\u540d\u524d\u3068\u8a73\u7d30\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u6a29\u9650 (Permissions) \u3092\u8b58\u5225\u3057\u7ba1\u7406\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(o.h2,{id:"configure-api-permissions-via-logto-management-api",children:"Logto Management API \u3092\u4f7f\u7528\u3057\u3066 API \u6a29\u9650 (Permissions) \u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,t.jsxs)(o.p,{children:["Logto Management API \u3092\u4f7f\u7528\u3057\u3066\u7ba1\u7406\u3057\u307e\u3059\u3002\u95a2\u9023\u3059\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u547c\u3073\u51fa\u3057\u3092\u884c\u3044\u307e\u3059\u3002\u3053\u306e ",(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"method"}),(0,t.jsx)(o.th,{children:"path"}),(0,t.jsx)(o.th,{children:"description"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"GET"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"/api/resources/{resourceId}/scopes"})}),(0,t.jsx)(o.td,{children:"API \u30ea\u30bd\u30fc\u30b9\u306b\u5b9a\u7fa9\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"POST"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-createresourcescope",children:"/api/resources/{resourceId}/scopes"})}),(0,t.jsx)(o.td,{children:"API \u30ea\u30bd\u30fc\u30b9\u306e\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"DELETE"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-deleteresourcescope",children:"/api/resources/{resourceId}/scopes/{scopeId}"})}),(0,t.jsx)(o.td,{children:"\u6307\u5b9a\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u304b\u3089 API \u30ea\u30bd\u30fc\u30b9\u30b9\u30b3\u30fc\u30d7\u3092\u524a\u9664\u3057\u307e\u3059\u3002"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"PATCH"}),(0,t.jsx)(o.td,{children:(0,t.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-updateresourcescope",children:"/api/resources/{resourceId}/scopes/{scopeId}"})}),(0,t.jsx)(o.td,{children:"\u6307\u5b9a\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306e API \u30ea\u30bd\u30fc\u30b9\u30b9\u30b3\u30fc\u30d7\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u90e8\u5206\u66f4\u65b0\u3092\u884c\u3044\u307e\u3059\u3002"})]})]})]})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},79621:(e,o,s)=>{s.d(o,{R:()=>n,x:()=>c});var r=s(58101);const t={},i=r.createContext(t);function n(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);