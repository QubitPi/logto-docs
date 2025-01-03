"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20112],{62464:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"end-user-flows/organization-experience/invite-organization-members","title":"\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u3092\u62db\u5f85\u3059\u308b","description":"\u30de\u30eb\u30c1\u7d44\u7e54\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u3001\u4e00\u822c\u7684\u306a\u8981\u4ef6\u306e\u4e00\u3064\u306f\u3001\u30e1\u30f3\u30d0\u30fc\u3092\u7d44\u7e54\u306b\u62db\u5f85\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3053\u306e\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306e\u624b\u9806\u3068\u6280\u8853\u7684\u306a\u8a73\u7d30\u3092\u8aac\u660e\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/invite-organization-members.mdx","sourceDirName":"end-user-flows/organization-experience","slug":"/end-user-flows/organization-experience/invite-organization-members","permalink":"/ja/end-user-flows/organization-experience/invite-organization-members","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/invite-organization-members.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"\u7d44\u7e54\u3092\u4f5c\u6210\u3059\u308b","permalink":"/ja/end-user-flows/organization-experience/create-organization"},"next":{"title":"\u7d44\u7e54\u7ba1\u7406","permalink":"/ja/end-user-flows/organization-experience/organization-management"}}');var r=i(25105),t=i(79621);const s={sidebar_position:2},a="\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u3092\u62db\u5f85\u3059\u308b",c={},l=[{value:"\u30d5\u30ed\u30fc\u306e\u6982\u8981",id:"flow-overview",level:2},{value:"\u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b",id:"create-organization-roles",level:2},{value:"\u30e1\u30fc\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a\u3059\u308b",id:"configure-your-email-connector",level:2},{value:"Logto Management API \u3067\u62db\u5f85\u3092\u51e6\u7406\u3059\u308b",id:"handle-invitations-with-logto-management-api",level:2},{value:"\u7d44\u7e54\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1 (RBAC) \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u3092\u7ba1\u7406\u3059\u308b",id:"use-organization-role-based-access-control-rbac-to-manage-user-permissions",level:2},{value:"\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u5185\u306e\u30b9\u30b3\u30fc\u30d7\u66f4\u65b0\u3092\u51e6\u7406\u3059\u308b",id:"handle-scope-updates-in-organization-tokens",level:2},{value:"\u65e2\u5b58\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u53d6\u308a\u6d88\u3059",id:"revoking-existing-scopes",level:3},{value:"\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u4ed8\u4e0e\u3059\u308b",id:"granting-new-scopes",level:3},{value:"\u8a8d\u8a3c\u30b7\u30b9\u30c6\u30e0\u3067\u65e2\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u4ed8\u4e0e\u3059\u308b",id:"grant-new-scopes-that-already-defined-in-your-auth-system",level:4},{value:"\u8a8d\u8a3c\u30b7\u30b9\u30c6\u30e0\u306b\u65b0\u305f\u306b\u5c0e\u5165\u3055\u308c\u305f\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u4ed8\u4e0e\u3059\u308b",id:"grant-new-scopes-that-are-newly-introduced-your-auth-system",level:4},{value:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u6a29\u9650\u30c1\u30a7\u30c3\u30af\u3068\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u306e\u66f4\u65b0\u3092\u5b9f\u88c5\u3059\u308b",id:"implement-real-time-permission-check-and-update-organization-token",level:3},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"related-resources",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components},{Url:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u3092\u62db\u5f85\u3059\u308b",children:"\u7d44\u7e54\u30e1\u30f3\u30d0\u30fc\u3092\u62db\u5f85\u3059\u308b"})}),"\n",(0,r.jsx)(e.p,{children:"\u30de\u30eb\u30c1\u7d44\u7e54\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u3001\u4e00\u822c\u7684\u306a\u8981\u4ef6\u306e\u4e00\u3064\u306f\u3001\u30e1\u30f3\u30d0\u30fc\u3092\u7d44\u7e54\u306b\u62db\u5f85\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3053\u306e\u6a5f\u80fd\u3092\u5b9f\u88c5\u3059\u308b\u305f\u3081\u306e\u624b\u9806\u3068\u6280\u8853\u7684\u306a\u8a73\u7d30\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"flow-overview",children:"\u30d5\u30ed\u30fc\u306e\u6982\u8981"}),"\n",(0,r.jsx)(e.p,{children:"\u5168\u4f53\u306e\u30d7\u30ed\u30bb\u30b9\u306f\u4ee5\u4e0b\u306e\u56f3\u3067\u793a\u3055\u308c\u3066\u3044\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(e.mermaid,{value:"sequenceDiagram\n\tParticipant U as \u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\n  Participant A as \u7d44\u7e54\u7ba1\u7406\u8005\n  Participant C as \u3042\u306a\u305f\u306e\u30de\u30eb\u30c1\u7d44\u7e54\u30a2\u30d7\u30ea\n\tParticipant L as Logto\n\n  A ->> C: \u62db\u5f85\u8005\u306e\u30e1\u30fc\u30eb\u3068\u30ed\u30fc\u30eb\u3092\u5165\u529b\n  C ->> L: Management API \u3092\u4f7f\u7528\u3057\u3066\u7d44\u7e54\u62db\u5f85\u3092\u4f5c\u6210\n  L --\x3e> C: \u62db\u5f85 ID \u3092\u8fd4\u3059\n  C ->> C: \u62db\u5f85 ID \u3092\u4f7f\u7528\u3057\u3066\u62db\u5f85\u30ea\u30f3\u30af\u3092\u4f5c\u6210\n  C ->> L: \u62db\u5f85\u30ea\u30f3\u30af\u3092\u542b\u3080\u62db\u5f85\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u3092\u30ea\u30af\u30a8\u30b9\u30c8\n  L --\x3e> U: \u62db\u5f85\u30ea\u30f3\u30af\u3092\u542b\u3080\u62db\u5f85\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\n  U ->> C: \u62db\u5f85\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3001<br />\u62db\u5f85\u3092\u53d7\u3051\u5165\u308c\u308b\u304b\u62d2\u5426\u3059\u308b\n  C ->> L: Management API \u3092\u4f7f\u7528\u3057\u3066\u62db\u5f85\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u66f4\u65b0"}),"\n",(0,r.jsx)(e.h2,{id:"create-organization-roles",children:"\u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,r.jsxs)(e.p,{children:["\u30e1\u30f3\u30d0\u30fc\u3092\u7d44\u7e54\u306b\u62db\u5f85\u3059\u308b\u524d\u306b\u3001\u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306a\u624b\u9806\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(e.a,{href:"/authorization/organization-template/configure-organization-template",children:"\u7d44\u7e54\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8a2d\u5b9a"}),"\u30ac\u30a4\u30c9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001\u5178\u578b\u7684\u306a\u7d44\u7e54\u30ed\u30fc\u30eb\u3068\u3057\u3066 ",(0,r.jsx)(e.code,{children:"admin"})," \u3068 ",(0,r.jsx)(e.code,{children:"member"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"admin"})," \u30ed\u30fc\u30eb\u306f\u7d44\u7e54\u5185\u306e\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u30d5\u30eb\u30a2\u30af\u30bb\u30b9\u3092\u6301\u3061\u3001",(0,r.jsx)(e.code,{children:"member"})," \u30ed\u30fc\u30eb\u306f\u5236\u9650\u3055\u308c\u305f\u30a2\u30af\u30bb\u30b9\u3092\u6301\u3061\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u5404\u30ed\u30fc\u30eb\u306f\u6b21\u306e\u3088\u3046\u306a\u6a29\u9650\u30bb\u30c3\u30c8\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"admin"})," \u30ed\u30fc\u30eb\uff1a","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"read:data"})," - \u3059\u3079\u3066\u306e\u7d44\u7e54\u30c7\u30fc\u30bf\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u8aad\u307f\u53d6\u308a\u30a2\u30af\u30bb\u30b9\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"write:data"})," - \u3059\u3079\u3066\u306e\u7d44\u7e54\u30c7\u30fc\u30bf\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u66f8\u304d\u8fbc\u307f\u30a2\u30af\u30bb\u30b9\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"delete:data"})," - \u3059\u3079\u3066\u306e\u7d44\u7e54\u30c7\u30fc\u30bf\u30ea\u30bd\u30fc\u30b9\u306e\u524a\u9664\u30a2\u30af\u30bb\u30b9\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"invite:member"})," - \u7d44\u7e54\u3078\u306e\u30e1\u30f3\u30d0\u30fc\u62db\u5f85\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"manage:member"})," - \u7d44\u7e54\u5185\u306e\u30e1\u30f3\u30d0\u30fc\u7ba1\u7406\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"delete:member"})," - \u7d44\u7e54\u304b\u3089\u306e\u30e1\u30f3\u30d0\u30fc\u524a\u9664\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"member"})," \u30ed\u30fc\u30eb\uff1a","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"read:data"})," - \u3059\u3079\u3066\u306e\u7d44\u7e54\u30c7\u30fc\u30bf\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u8aad\u307f\u53d6\u308a\u30a2\u30af\u30bb\u30b9\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"write:data"})," - \u3059\u3079\u3066\u306e\u7d44\u7e54\u30c7\u30fc\u30bf\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u66f8\u304d\u8fbc\u307f\u30a2\u30af\u30bb\u30b9\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"invite:member"})," - \u7d44\u7e54\u3078\u306e\u30e1\u30f3\u30d0\u30fc\u62db\u5f85\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u308c\u306f ",(0,r.jsx)(e.a,{href:"https://cloud.logto.io/",children:"Logto Console"})," \u3067\u7c21\u5358\u306b\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001",(0,r.jsx)(e.a,{href:"https://openapi.logto.io/operation/operation-createorganizationrole",children:"Logto Management API"})," \u3092\u4f7f\u7528\u3057\u3066\u30d7\u30ed\u30b0\u30e9\u30e0\u7684\u306b\u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"configure-your-email-connector",children:"\u30e1\u30fc\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,r.jsxs)(e.p,{children:["\u62db\u5f85\u306f\u30e1\u30fc\u30eb\u3067\u9001\u4fe1\u3055\u308c\u308b\u305f\u3081\u3001",(0,r.jsx)(e.a,{href:"/connectors/email-connectors",children:"\u30e1\u30fc\u30eb\u30b3\u30cd\u30af\u30bf\u30fc"})," \u304c\u9069\u5207\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u62db\u5f85\u3092\u9001\u4fe1\u3059\u308b\u306b\u306f\u3001\u65b0\u305f\u306b\u5c0e\u5165\u3055\u308c\u305f ",(0,r.jsx)(e.a,{href:"/connectors/email-connectors/email-templates#email-template-types",children:"\u30e1\u30fc\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"})," \u4f7f\u7528\u30bf\u30a4\u30d7 - ",(0,r.jsx)(e.code,{children:"OrganizationInvitation"})," \u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"OrganizationInvitation"})," \u4f7f\u7528\u30bf\u30a4\u30d7\u306e\u30b5\u30f3\u30d7\u30eb\u30e1\u30fc\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "subject": "Welcome to my organization",\n  "content": "<p>Join my organization by this <a href=\\"{{link}}\\" target=\\"_blank\\">link</a>.</p>",\n  "usageType": "OrganizationInvitation",\n  "type": "text/html"\n}\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u30e1\u30fc\u30eb\u30b3\u30f3\u30c6\u30f3\u30c4\u5185\u306e ",(0,r.jsx)(e.code,{children:"{{link}}"})," \u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u306f\u3001\u30e1\u30fc\u30eb\u9001\u4fe1\u6642\u306b\u5b9f\u969b\u306e\u62db\u5f85\u30ea\u30f3\u30af\u306b\u7f6e\u304d\u63db\u3048\u3089\u308c\u307e\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001",(0,r.jsx)(e.code,{children:"https://your-app.com/invitation/accept/{your-invitation-id}"})," \u306b\u306a\u308b\u3068\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.p,{children:["Logto Cloud \u306e\u7d44\u307f\u8fbc\u307f\u300cLogto \u30e1\u30fc\u30eb\u30b5\u30fc\u30d3\u30b9\u300d\u306f\u73fe\u5728 ",(0,r.jsx)(e.code,{children:"OrganizationInvitation"})," \u4f7f\u7528\u30bf\u30a4\u30d7\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u4ee3\u308f\u308a\u306b\u3001\u30e1\u30fc\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\uff08\u4f8b\uff1aSendgrid\uff09\u3092\u8a2d\u5b9a\u3057\u3001",(0,r.jsx)(e.code,{children:"OrganizationInvitation"})," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})}),"\n",(0,r.jsx)(e.h2,{id:"handle-invitations-with-logto-management-api",children:"Logto Management API \u3067\u62db\u5f85\u3092\u51e6\u7406\u3059\u308b"}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.p,{children:["\u307e\u3060 Logto Management API \u3092\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.jsx)(e.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API \u3068\u9023\u643a\u3059\u308b"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(e.p,{children:"\u7d44\u7e54\u6a5f\u80fd\u306b\u306f\u62db\u5f85\u95a2\u9023\u306e Management API \u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e API \u3092\u4f7f\u7528\u3057\u3066\u3001\u6b21\u306e\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"POST /api/organization-invitations"})," \u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u5272\u308a\u5f53\u3066\u3066\u7d44\u7e54\u62db\u5f85\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"POST /api/organization-invitations/{id}/message"})," \u62db\u5f85\u8005\u306b\u30e1\u30fc\u30eb\u3067\u7d44\u7e54\u62db\u5f85\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002\n\u6ce8\uff1a\u3053\u306e API \u30da\u30a4\u30ed\u30fc\u30c9\u306f ",(0,r.jsx)(e.code,{children:"link"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001\u62db\u5f85 ID \u306b\u57fa\u3065\u3044\u3066\u62db\u5f85\u30ea\u30f3\u30af\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "link": "https://your-app.com/invitation/accept/{your-invitation-id}"\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u305d\u308c\u306b\u5fdc\u3058\u3066\u3001\u62db\u5f85\u8005\u304c\u62db\u5f85\u30ea\u30f3\u30af\u3092\u901a\u3058\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u79fb\u52d5\u3057\u305f\u3068\u304d\u306b\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u3092\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"GET /api/organization-invitations"})," & ",(0,r.jsx)(e.code,{children:"GET /api/organization-invitations/{id}"})," \u3059\u3079\u3066\u306e\u62db\u5f85\u307e\u305f\u306f\u7279\u5b9a\u306e\u62db\u5f85\u3092 ID \u3067\u53d6\u5f97\u3057\u307e\u3059\u3002\n\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u3067\u3001\u3053\u308c\u3089\u306e API \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u304c\u53d7\u3051\u53d6\u3063\u305f\u3059\u3079\u3066\u306e\u62db\u5f85\u307e\u305f\u306f\u62db\u5f85\u306e\u8a73\u7d30\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"PUT /api/organization-invitations/{id}/status"})," \u62db\u5f85\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u66f4\u65b0\u3057\u3066\u62db\u5f85\u3092\u53d7\u3051\u5165\u308c\u308b\u304b\u62d2\u5426\u3057\u307e\u3059\u3002\n\u3053\u306e API \u3092\u4f7f\u7528\u3057\u3066\u3001\u62db\u5f85\u306b\u5bfe\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u5fdc\u7b54\u3092\u51e6\u7406\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0a\u8a18\u306e\u3059\u3079\u3066\u306e API \u306f\u6709\u52b9\u306a\u300c\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u300d\u3092\u5fc5\u8981\u3068\u3059\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.jsx)(e.a,{href:"/authorization/organization-template/protect-organization-resources#step-2-fetch-organization-token",children:"\u3053\u306e\u30ac\u30a4\u30c9"})," \u3092\u78ba\u8a8d\u3057\u3066\u3001\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3093\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"use-organization-role-based-access-control-rbac-to-manage-user-permissions",children:"\u7d44\u7e54\u30ed\u30fc\u30eb\u30d9\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u5236\u5fa1 (RBAC) \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u3092\u7ba1\u7406\u3059\u308b"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u8a18\u306e\u8a2d\u5b9a\u306b\u3088\u308a\u3001\u30e1\u30fc\u30eb\u3067\u62db\u5f85\u3092\u9001\u4fe1\u3057\u3001\u62db\u5f85\u8005\u306f\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30ed\u30fc\u30eb\u3067\u7d44\u7e54\u306b\u53c2\u52a0\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7570\u306a\u308b\u7d44\u7e54\u30ed\u30fc\u30eb\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u5185\u3067\u7570\u306a\u308b\u30b9\u30b3\u30fc\u30d7\uff08\u6a29\u9650\uff09\u3092\u6301\u3061\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u3068\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u30b5\u30fc\u30d3\u30b9\u306e\u4e21\u65b9\u304c\u3053\u308c\u3089\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u78ba\u8a8d\u3057\u3066\u3001\u8868\u793a\u53ef\u80fd\u306a\u6a5f\u80fd\u3068\u8a31\u53ef\u3055\u308c\u305f\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u6c7a\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"handle-scope-updates-in-organization-tokens",children:"\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u5185\u306e\u30b9\u30b3\u30fc\u30d7\u66f4\u65b0\u3092\u51e6\u7406\u3059\u308b"}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.p,{children:["\u30a2\u30d7\u30ea\u3068\u7d44\u7e54\u3092\u7d71\u5408\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(e.a,{href:"/authorization/organization-template/protect-organization-resources",children:"\u7d71\u5408\u30ac\u30a4\u30c9"})," \u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsx)(e.p,{children:"\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u5185\u306e\u30b9\u30b3\u30fc\u30d7\u66f4\u65b0\u3092\u7ba1\u7406\u3059\u308b\u306b\u306f\uff1a"}),"\n",(0,r.jsx)(e.h3,{id:"revoking-existing-scopes",children:"\u65e2\u5b58\u306e\u30b9\u30b3\u30fc\u30d7\u3092\u53d6\u308a\u6d88\u3059"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b\u3048\u3070\u3001\u7ba1\u7406\u8005\u3092\u975e\u7ba1\u7406\u8005\u30e1\u30f3\u30d0\u30fc\u306b\u964d\u683c\u3059\u308b\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u30b9\u30b3\u30fc\u30d7\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3092\u30af\u30ea\u30a2\u3057\u3001\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5\u30c8\u30fc\u30af\u30f3\u3067\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u7e2e\u5c0f\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u306f\u3001\u65b0\u305f\u306b\u767a\u884c\u3055\u308c\u305f\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u306b\u5373\u5ea7\u306b\u53cd\u6620\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"granting-new-scopes",children:"\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u4ed8\u4e0e\u3059\u308b"}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u308c\u306f\u3055\u3089\u306b 2 \u3064\u306e\u30b7\u30ca\u30ea\u30aa\u306b\u5206\u3051\u3089\u308c\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(e.h4,{id:"grant-new-scopes-that-already-defined-in-your-auth-system",children:"\u8a8d\u8a3c\u30b7\u30b9\u30c6\u30e0\u3067\u65e2\u306b\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u4ed8\u4e0e\u3059\u308b"}),"\n",(0,r.jsx)(e.p,{children:"\u30b9\u30b3\u30fc\u30d7\u306e\u53d6\u308a\u6d88\u3057\u3068\u540c\u69d8\u306b\u3001\u65b0\u305f\u306b\u4ed8\u4e0e\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u304c\u8a8d\u8a3c\u30b5\u30fc\u30d0\u30fc\u306b\u65e2\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u65b0\u3057\u3044\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3059\u308b\u3060\u3051\u3067\u3001\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u304c\u5373\u5ea7\u306b\u53cd\u6620\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"grant-new-scopes-that-are-newly-introduced-your-auth-system",children:"\u8a8d\u8a3c\u30b7\u30b9\u30c6\u30e0\u306b\u65b0\u305f\u306b\u5c0e\u5165\u3055\u308c\u305f\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u3092\u4ed8\u4e0e\u3059\u308b"}),"\n",(0,r.jsxs)(e.p,{children:["\u3053\u306e\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u518d\u30ed\u30b0\u30a4\u30f3\u307e\u305f\u306f\u518d\u540c\u610f\u30d7\u30ed\u30bb\u30b9\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001Logto SDK \u306e ",(0,r.jsx)(e.code,{children:"signIn"})," \u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/authorization/organization-template/protect-organization-resources/#fetch-the-organization-token",children:"\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u306e\u767a\u884c"})," \u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u5b66\u3073\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"implement-real-time-permission-check-and-update-organization-token",children:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u6a29\u9650\u30c1\u30a7\u30c3\u30af\u3068\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u306e\u66f4\u65b0\u3092\u5b9f\u88c5\u3059\u308b"}),"\n",(0,r.jsx)(e.p,{children:"Logto \u306f\u3001\u7d44\u7e54\u5185\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u30e6\u30fc\u30b6\u30fc\u6a29\u9650\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306e Management API \u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"GET /api/organizations/{id}/users/{userId}/scopes"})," (",(0,r.jsx)(e.a,{href:"https://openapi.logto.io/operation/operation-listorganizationuserscopes",children:"API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"}),")"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u305d\u306e\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u5185\u306e\u30b9\u30b3\u30fc\u30d7\u3068\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u6a29\u9650\u3092\u6bd4\u8f03\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u6607\u683c\u307e\u305f\u306f\u964d\u683c\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u964d\u683c\u3055\u308c\u305f\u5834\u5408\u3001\u30ad\u30e3\u30c3\u30b7\u30e5\u3055\u308c\u305f\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3092\u30af\u30ea\u30a2\u3059\u308b\u3060\u3051\u3067\u3001SDK \u306f\u81ea\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3092\u6301\u3064\u65b0\u3057\u3044\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const { clearAccessToken } = useLogto();\n\n...\n// \u53d6\u5f97\u3057\u305f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b9\u30b3\u30fc\u30d7\u304c\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u30b9\u30b3\u30fc\u30d7\u3088\u308a\u5c11\u306a\u3044\u5834\u5408\nawait clearAccessToken();\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u3053\u308c\u306b\u306f\u518d\u30ed\u30b0\u30a4\u30f3\u3084\u518d\u540c\u610f\u30d7\u30ed\u30bb\u30b9\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002\u65b0\u3057\u3044\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u306f Logto SDK \u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u767a\u884c\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u8a8d\u8a3c\u30b7\u30b9\u30c6\u30e0\u306b\u65b0\u3057\u3044\u30b9\u30b3\u30fc\u30d7\u304c\u5c0e\u5165\u3055\u308c\u305f\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3092\u66f4\u65b0\u3059\u308b\u305f\u3081\u306b\u518d\u30ed\u30b0\u30a4\u30f3\u307e\u305f\u306f\u518d\u540c\u610f\u30d7\u30ed\u30bb\u30b9\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u307e\u3059\u3002React SDK \u3092\u4f8b\u306b\u3068\u308a\u307e\u3059\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const { clearAllTokens, signIn } = useLogto();\n\n...\n// \u53d6\u5f97\u3057\u305f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b9\u30b3\u30fc\u30d7\u304c\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u30b9\u30b3\u30fc\u30d7\u3088\u308a\u65b0\u3057\u304f\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3092\u6301\u3064\u5834\u5408\nawait clearAllTokens();\nsignIn({\n  redirectUri: '<your-sign-in-redirect-uri>',\n  prompt: 'consent',\n});\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u306f\u3001\u540c\u610f\u753b\u9762\u3078\u306e\u30da\u30fc\u30b8\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u3001\u66f4\u65b0\u3055\u308c\u305f\u30b9\u30b3\u30fc\u30d7\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306e\u7d44\u7e54\u30c8\u30fc\u30af\u30f3\u3068\u5171\u306b\u30a2\u30d7\u30ea\u306b\u81ea\u52d5\u7684\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"related-resources",children:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"}),"\n",(0,r.jsx)(i,{href:"https://blog.logto.io/implement-user-collaboration-in-your-app",children:(0,r.jsx)(e.p,{children:"\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u30a2\u30d7\u30ea\u5185\u3067\u306e\u30e6\u30fc\u30b6\u30fc\u30b3\u30e9\u30dc\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5\u65b9\u6cd5"})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},79621:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>a});var o=i(58101);const r={},t=o.createContext(r);function s(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);