"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[93459],{19611:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"customization/bring-your-ui/README","title":"\u72ec\u81ea\u306e UI \u3092\u6301\u3061\u8fbc\u3080","description":"Logto \u3067\u306f\u3001\u7d44\u307f\u8fbc\u307f\u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u5b8c\u5168\u306b\u7f6e\u304d\u63db\u3048\u308b\u305f\u3081\u306b\u3001\u72ec\u81ea\u306e UI \u3092\u6301\u3061\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u4e8b\u524d\u306b\u69cb\u7bc9\u3055\u308c\u305f UI \u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u52a0\u3048\u3066\u63d0\u4f9b\u3055\u308c\u308b\u6a5f\u80fd\u3067\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\uff08HTML\u3001CSS\u3001JavaScript\u3001\u753b\u50cf\u306a\u3069\uff09\u3092\u542b\u3080 zip \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u305d\u308c\u3092 Logto Cloud \u30b5\u30fc\u30d0\u30fc\u3067\u30db\u30b9\u30c8\u3057\u3001\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u306e \u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13 \u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/customization/bring-your-ui/README.mdx","sourceDirName":"customization/bring-your-ui","slug":"/customization/bring-your-ui/","permalink":"/ja/customization/bring-your-ui/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/customization/bring-your-ui/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u30ab\u30b9\u30bf\u30e0 CSS","permalink":"/ja/customization/custom-css"},"next":{"title":"\u30ab\u30b9\u30bf\u30e0 UI \u3092\u30ed\u30fc\u30ab\u30eb\u3067\u30c7\u30d0\u30c3\u30b0\u304a\u3088\u3073\u30c6\u30b9\u30c8\u3059\u308b","permalink":"/ja/customization/bring-your-ui/debug-and-test-your-custom-ui-locally"}}');var t=n(25105),s=n(79621);const r={sidebar_position:3},l="\u72ec\u81ea\u306e UI \u3092\u6301\u3061\u8fbc\u3080",c={},d=[{value:"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30ab\u30b9\u30bf\u30e0 UI \u6a5f\u80fd\u3092\u63a2\u308b",id:"explore-the-custom-ui-feature-in-logto-console",level:2},{value:"\u516c\u5f0f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u59cb\u3081\u308b",id:"get-started-with-official-project",level:3},{value:"\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u306e\u8981\u4ef6",id:"custom-ui-assets-requirements",level:3},{value:"\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",id:"upload-your-custom-ui-assets",level:3},{value:"\u30ab\u30b9\u30bf\u30e0 UI \u3092\u958b\u767a\u3059\u308b",id:"develop-your-custom-ui",level:2},{value:"Experience API \u3068\u9023\u643a\u3059\u308b",id:"interact-with-experience-api",level:3},{value:"\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"sample-projects",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u3068\u30c7\u30d0\u30c3\u30b0",id:"local-development-and-debugging",level:3},{value:"CLI \u3092\u4f7f\u7528\u3057\u3066\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b",id:"upload-your-custom-ui-assets-using-the-cli",level:2},{value:"Logto \u306e\u7d44\u307f\u8fbc\u307f\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u306b\u623b\u3059",id:"restore-to-logto-built-in-sign-in-experience",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"related-resources",level:2}];function u(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:n,Url:o}=i;return n||p("CloudLink",!0),o||p("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"\u72ec\u81ea\u306e-ui-\u3092\u6301\u3061\u8fbc\u3080",children:"\u72ec\u81ea\u306e UI \u3092\u6301\u3061\u8fbc\u3080"})}),"\n",(0,t.jsxs)(i.p,{children:["Logto \u3067\u306f\u3001\u7d44\u307f\u8fbc\u307f\u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u5b8c\u5168\u306b\u7f6e\u304d\u63db\u3048\u308b\u305f\u3081\u306b\u3001\u72ec\u81ea\u306e UI \u3092\u6301\u3061\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u4e8b\u524d\u306b\u69cb\u7bc9\u3055\u308c\u305f UI \u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u52a0\u3048\u3066\u63d0\u4f9b\u3055\u308c\u308b\u6a5f\u80fd\u3067\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\uff08HTML\u3001CSS\u3001JavaScript\u3001\u753b\u50cf\u306a\u3069\uff09\u3092\u542b\u3080 zip \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3001\u305d\u308c\u3092 ",(0,t.jsx)(i.a,{href:"https://cloud.logto.io",children:"Logto Cloud"})," \u30b5\u30fc\u30d0\u30fc\u3067\u30db\u30b9\u30c8\u3057\u3001\u30c6\u30ca\u30f3\u30c8\u30e6\u30fc\u30b6\u30fc\u306e ",(0,t.jsx)(i.a,{href:"/end-user-flows#authentication-flows",children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13"})," \u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001\u30ab\u30b9\u30bf\u30e0 UI \u304c\u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 (SPA) \u4e92\u63db\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6700\u9069\u306a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5f97\u308b\u305f\u3081\u306b\u3001\u5e38\u306b\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u30d3\u30eb\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"})}),"\n",(0,t.jsx)(i.h2,{id:"explore-the-custom-ui-feature-in-logto-console",children:"Logto \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30ab\u30b9\u30bf\u30e0 UI \u6a5f\u80fd\u3092\u63a2\u308b"}),"\n",(0,t.jsx)(i.h3,{id:"get-started-with-official-project",children:"\u516c\u5f0f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u59cb\u3081\u308b"}),"\n",(0,t.jsxs)(i.p,{children:["\u30ab\u30b9\u30bf\u30e0\u30b5\u30a4\u30f3\u30a4\u30f3 UI \u3092\u958b\u59cb\u3059\u308b\u6700\u901f\u306e\u65b9\u6cd5\u306f\u3001",(0,t.jsx)(i.a,{href:"https://github.com/logto-io/logto/tree/master/packages/experience",children:"Logto \u4f53\u9a13\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})," \u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3068 Logto \u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3092\u30ab\u30d0\u30fc\u3059\u308b\u7d44\u307f\u8fbc\u307f\u306e Logto \u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13 UI \u3067\u3059\u3002\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u30b3\u30fc\u30c9\u3092\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u3057\u305f\u5f8c\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"pnpm install && pnpm build\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsxs)(i.p,{children:["Logto \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5168\u4f53\u306f ",(0,t.jsx)(i.a,{href:"https://pnpm.io/workspaces",children:"pnpm monorepo"})," \u3067\u3059\u3002\u4f53\u9a13\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5358\u72ec\u3067\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\uff08pnpm \u3092\u4f7f\u7528\u305b\u305a\u306b\uff09\u3001package.json \u306e ",(0,t.jsx)(i.code,{children:"workspace:"})," ",(0,t.jsxs)(i.em,{children:["\u4f9d\u5b58\u95a2\u4fc2\u3092\u7279\u5b9a\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\uff08\u4f8b\uff1a",(0,t.jsx)(i.code,{children:"^1.0.0"}),"\uff09\u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}),"\n",(0,t.jsxs)(i.p,{children:["\u30d3\u30eb\u30c9\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30a2\u30bb\u30c3\u30c8\u304c ",(0,t.jsx)(i.code,{children:"dist"})," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001",(0,t.jsx)(i.code,{children:"dist"})," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e ZIP \u30a2\u30fc\u30ab\u30a4\u30d6\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u306f\u5f8c\u3067 Logto Cloud \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"custom-ui-assets-requirements",children:"\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u306e\u8981\u4ef6"}),"\n",(0,t.jsx)(i.p,{children:"\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u524d\u306b\u3001\u6b21\u306e\u8981\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u30a2\u30bb\u30c3\u30c8\u306f\u5358\u4e00\u306e zip \u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u30d1\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(i.li,{children:["zip \u30d5\u30a1\u30a4\u30eb\u306b\u306f\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b ",(0,t.jsx)(i.code,{children:"index.html"})," \u30d5\u30a1\u30a4\u30eb\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.li,{children:"zip \u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u306f 20MB \u3092\u8d85\u3048\u3066\u306f\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(i.li,{children:"zip \u30d5\u30a1\u30a4\u30eb\u306b\u306f 10MB \u3092\u8d85\u3048\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3081\u3066\u306f\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(i.li,{children:"zip \u30d5\u30a1\u30a4\u30eb\u306b\u306f\u5408\u8a08 200 \u30d5\u30a1\u30a4\u30eb\u3092\u8d85\u3048\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3081\u3066\u306f\u306a\u308a\u307e\u305b\u3093\u3002"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"upload-your-custom-ui-assets",children:"\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"\u3053\u306e\u6a5f\u80fd\u3092\u672c\u756a\u74b0\u5883\u3067\u4f7f\u7528\u3059\u308b\u969b\u306f\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u306b\u5373\u5ea7\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u305f\u3081\u3067\u3059\u3002"})}),"\n","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(n,{to:"/sign-in-experience/branding",children:"\u30b3\u30f3\u30bd\u30fc\u30eb > \u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13 > \u30d6\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0 > \u72ec\u81ea\u306e UI \u3092\u6301\u3061\u8fbc\u3080"})," \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.li,{children:"\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u4f5c\u6210\u3057\u305f zip \u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3059\u308b\u304b\u3001\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7\u3057\u3066\u3001\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u30d7\u30ed\u30bb\u30b9\u3092\u81ea\u52d5\u7684\u306b\u958b\u59cb\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.li,{children:"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u5909\u66f4\u3092\u4fdd\u5b58\u3057\u3001\u30ab\u30b9\u30bf\u30e0 UI \u304c\u5373\u5ea7\u306b\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(i.li,{children:["\u30ab\u30b9\u30bf\u30e0\u30b5\u30a4\u30f3\u30a4\u30f3 UI \u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u300c\u30b5\u30a4\u30f3\u30a4\u30f3\u30d7\u30ec\u30d3\u30e5\u30fc\u300d\u30a6\u30a3\u30f3\u30c9\u30a6\u306f\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002\u305f\u3060\u3057\u3001",(0,t.jsx)(i.a,{href:"/customization/live-preview",children:"\u30e9\u30a4\u30d6\u30d7\u30ec\u30d3\u30e5\u30fc"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u65b0\u3057\u304f\u958b\u3044\u305f\u30d6\u30e9\u30a6\u30b6\u30bf\u30d6\u3067\u30ab\u30b9\u30bf\u30e0\u30b5\u30a4\u30f3\u30a4\u30f3\u30da\u30fc\u30b8\u3092\u30c6\u30b9\u30c8\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"develop-your-custom-ui",children:"\u30ab\u30b9\u30bf\u30e0 UI \u3092\u958b\u767a\u3059\u308b"}),"\n",(0,t.jsx)(i.h3,{id:"interact-with-experience-api",children:"Experience API \u3068\u9023\u643a\u3059\u308b"}),"\n",(0,t.jsxs)(i.p,{children:["\u30ab\u30b9\u30bf\u30e0 UI \u306f\u3001\u30b5\u30a4\u30f3\u30a4\u30f3\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u30ea\u30bb\u30c3\u30c8\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u3001MFA \u306e\u6709\u52b9\u5316\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b ",(0,t.jsx)(i.a,{href:"https://openapi.logto.io/group/endpoint-experience",children:"Experience API"})," \u3068\u9023\u643a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u30d5\u30ed\u30fc\u3068\u5b9f\u88c5\u306e\u8a73\u7d30\u3092\u3088\u308a\u3088\u304f\u7406\u89e3\u3059\u308b\u305f\u3081\u306b\u3001\u5305\u62ec\u7684\u306a\u6280\u8853\u4ed5\u69d8\u3068\u4f8b\u3092\u63d0\u4f9b\u3059\u308b ",(0,t.jsx)(i.a,{href:"https://github.com/logto-io/rfcs/blob/master/draft/0004-experience-api.md",children:"Experience API \u8a2d\u8a08 RFC"})," \u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(i.p,{children:["\u307e\u305f\u3001\u30d6\u30e9\u30f3\u30c9\u30ab\u30e9\u30fc\u3001\u4f1a\u793e\u306e\u30ed\u30b4\u3001\u30d5\u30a1\u30d3\u30b3\u30f3\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u30dd\u30ea\u30b7\u30fc\u3001\u30ed\u30fc\u30ab\u30e9\u30a4\u30ba\u3055\u308c\u305f\u8a00\u8a9e\u30d5\u30ec\u30fc\u30ba\u3001\u30ab\u30b9\u30bf\u30e0 CSS \u306a\u3069\u3001\u4ed6\u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u8a2d\u5b9a\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306f ",(0,t.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-getsigninexperienceconfig",children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13 API \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"})," \u3092\u901a\u3058\u3066\u884c\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(i.h3,{id:"sample-projects",children:"\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,t.jsxs)(i.p,{children:["\u30ab\u30b9\u30bf\u30e0 UI \u3092\u8fc5\u901f\u306b\u7406\u89e3\u3057\u5b9f\u88c5\u3092\u958b\u59cb\u3059\u308b\u305f\u3081\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(i.a,{href:"https://github.com/logto-io/experience-samples",children:"Logto Experience \u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})," GitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(i.p,{children:"\u3055\u3089\u306b\u3001\u6700\u3082\u4e00\u822c\u7684\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3092\u30ab\u30d0\u30fc\u3059\u308b\u305f\u3081\u306b\u3001\u3088\u308a\u7c21\u7565\u5316\u3055\u308c\u305f\u30b7\u30ca\u30ea\u30aa\u30d9\u30fc\u30b9\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u63d0\u4f9b\u3059\u308b\u305f\u3081\u306b\u4f5c\u696d\u3092\u7d9a\u3051\u3066\u3044\u307e\u3059\u3002\u4eca\u5f8c\u306e\u66f4\u65b0\u3092\u304a\u697d\u3057\u307f\u306b\uff01"}),"\n",(0,t.jsx)(i.h3,{id:"local-development-and-debugging",children:"\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u3068\u30c7\u30d0\u30c3\u30b0"}),"\n",(0,t.jsx)(i.p,{children:"\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u3068\u30c7\u30d0\u30c3\u30b0\u306e\u305f\u3081\u306b\u3001Logto Tunnel CLI \u30c4\u30fc\u30eb\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u304b\u3089 Logto Cloud \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3078\u306e Experience API \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30d7\u30ed\u30ad\u30b7\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.li,{children:"\u30ab\u30b9\u30bf\u30e0 UI \u5b9f\u88c5\u3092\u30ed\u30fc\u30ab\u30eb\u3067\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u3053\u308c\u306b\u3088\u308a\u3001Logto Cloud \u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u524d\u306b\u30ab\u30b9\u30bf\u30e0 UI \u3092\u30ed\u30fc\u30ab\u30eb\u3067\u30c6\u30b9\u30c8\u304a\u3088\u3073\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(i.a,{href:"/customization/bring-your-ui/debug-and-test-your-custom-ui-locally/",children:"\u30ab\u30b9\u30bf\u30e0 UI \u3092\u30ed\u30fc\u30ab\u30eb\u3067\u30c7\u30d0\u30c3\u30b0\u304a\u3088\u3073\u30c6\u30b9\u30c8\u3059\u308b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"upload-your-custom-ui-assets-using-the-cli",children:"CLI \u3092\u4f7f\u7528\u3057\u3066\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,t.jsx)(i.p,{children:"\u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u901a\u3058\u3066\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u306b\u52a0\u3048\u3066\u3001Logto CLI \u3092\u4f7f\u7528\u3057\u3066\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u81ea\u52d5\u5316\u3055\u308c\u305f\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306b\u7279\u306b\u4fbf\u5229\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(i.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(i.a,{href:"/customization/bring-your-ui/upload-custom-ui-assets-using-cli/",children:"CLI \u3092\u4f7f\u7528\u3057\u3066\u30ab\u30b9\u30bf\u30e0 UI \u30a2\u30bb\u30c3\u30c8\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(i.h2,{id:"restore-to-logto-built-in-sign-in-experience",children:"Logto \u306e\u7d44\u307f\u8fbc\u307f\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u306b\u623b\u3059"}),"\n",(0,t.jsx)(i.p,{children:"Logto \u306e\u7d44\u307f\u8fbc\u307f\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u306b\u623b\u3057\u305f\u3044\u5834\u5408\u306f\u3001Bring your UI \u30ab\u30fc\u30c9\u306e\u524a\u9664\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u5909\u66f4\u3092\u4fdd\u5b58\u3059\u308b\u3068\u3001\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13 UI \u306f Logto \u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306b\u623b\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(i.h2,{id:"related-resources",children:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,t.jsx)(o,{href:"https://github.com/logto-io/rfcs/blob/master/draft/0004-experience-api.md#2-sign-in-with-username--password-and-fulfill-email",children:(0,t.jsx)(i.p,{children:"RFCS: Experience API"})}),"\n",(0,t.jsx)(o,{href:"https://github.com/logto-io/experience-samples",children:"Experience samples"}),"\n",(0,t.jsx)(o,{href:"https://blog.logto.io/bring-your-own-ui",children:"Bring your own sign-in UI to Logto Cloud"})]})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function p(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var o=n(58101);const t={},s=o.createContext(t);function r(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);