"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[96493],{10543:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"end-user-flows/account-settings/by-account-api","title":"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306b\u3088\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a","description":"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3076","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/account-settings/by-account-api.mdx","sourceDirName":"end-user-flows/account-settings","slug":"/end-user-flows/account-settings/by-account-api","permalink":"/ja/end-user-flows/account-settings/by-account-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/end-user-flows/account-settings/by-account-api.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3076","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Management API \u306b\u3088\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a","permalink":"/ja/end-user-flows/account-settings/by-management-api"},"next":{"title":"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u691c\u8a3c","permalink":"/ja/end-user-flows/security-verification/"}}');var a=i(25105),o=i(79621);const t={description:"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u3092\u7ba1\u7406\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3076",sidebar_position:2},r="\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306b\u3088\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a",s={},d=[{value:"Logto \u30a2\u30ab\u30a6\u30f3\u30c8 API \u3068\u306f",id:"what-is-logto-account-api",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5",id:"how-to-enable-account-api",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u65b9\u6cd5",id:"how-to-access-account-api",level:2},{value:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b",id:"fetch-an-access-token",level:3},{value:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",id:"access-account-api-using-access-token",level:3},{value:"\u57fa\u672c\u7684\u306a\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u7ba1\u7406\u3059\u308b",id:"manage-basic-account-information",level:2},{value:"\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b",id:"retrieve-user-account-information",level:3},{value:"\u57fa\u672c\u7684\u306a\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u66f4\u65b0\u3059\u308b",id:"update-basic-account-information",level:3},{value:"\u8b58\u5225\u5b50\u3068\u305d\u306e\u4ed6\u306e\u6a5f\u5bc6\u60c5\u5831\u3092\u7ba1\u7406\u3059\u308b",id:"manage-identifiers-and-other-sensitive-information",level:2},{value:"\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9 ID \u3092\u53d6\u5f97\u3059\u308b",id:"get-a-verification-record-id",level:3},{value:"\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u78ba\u8a8d\u3059\u308b",id:"verify-the-users-password",level:4},{value:"\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u306b\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u9001\u4fe1\u3057\u3066\u78ba\u8a8d\u3059\u308b",id:"verify-by-sending-a-verification-code-to-the-users-email-or-phone",level:4},{value:"\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9 ID \u3092\u4f7f\u7528\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b",id:"send-request-with-verification-record-id",level:3},{value:"\u65b0\u3057\u3044\u30e1\u30fc\u30eb\u3092\u66f4\u65b0\u307e\u305f\u306f\u30ea\u30f3\u30af\u3059\u308b",id:"update-or-link-new-email",level:3},{value:"\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u3092\u524a\u9664\u3059\u308b",id:"remove-the-users-email",level:3},{value:"\u96fb\u8a71\u3092\u7ba1\u7406\u3059\u308b",id:"manage-phone",level:3},{value:"\u65b0\u3057\u3044\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u30ea\u30f3\u30af\u3059\u308b",id:"link-a-new-social-connection",level:3},{value:"\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u524a\u9664\u3059\u308b",id:"remove-a-social-connection",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u30a2\u30ab\u30a6\u30f3\u30c8-api-\u306b\u3088\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a",children:"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306b\u3088\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u8a2d\u5b9a"})}),"\n",(0,a.jsx)(n.h2,{id:"what-is-logto-account-api",children:"Logto \u30a2\u30ab\u30a6\u30f3\u30c8 API \u3068\u306f"}),"\n",(0,a.jsx)(n.p,{children:"Logto \u30a2\u30ab\u30a6\u30f3\u30c8 API \u306f\u3001\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u304c Management API \u3092\u7d4c\u7531\u305b\u305a\u306b\u76f4\u63a5 API \u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u5305\u62ec\u7684\u306a API \u30bb\u30c3\u30c8\u3067\u3059\u3002\u4ee5\u4e0b\u304c\u305d\u306e\u30cf\u30a4\u30e9\u30a4\u30c8\u3067\u3059\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u76f4\u63a5\u30a2\u30af\u30bb\u30b9\uff1a\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306f\u3001\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u304c\u81ea\u5206\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u76f4\u63a5\u30a2\u30af\u30bb\u30b9\u3057\u3066\u7ba1\u7406\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3001Management API \u306e\u4e2d\u7d99\u3092\u5fc5\u8981\u3068\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u7ba1\u7406\uff1a\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u30e1\u30fc\u30eb\u3001\u96fb\u8a71\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u306a\u3069\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u60c5\u5831\u3092\u66f4\u65b0\u3059\u308b\u80fd\u529b\u3092\u542b\u3081\u3001\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u8a2d\u5b9a\u3092\u5b8c\u5168\u306b\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002MFA \u3068 SSO \u306e\u30b5\u30dd\u30fc\u30c8\u306f\u8fd1\u65e5\u4e2d\u306b\u63d0\u4f9b\u4e88\u5b9a\u3067\u3059\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u30b0\u30ed\u30fc\u30d0\u30eb\u30a2\u30af\u30bb\u30b9\u5236\u5fa1\uff1a\u7ba1\u7406\u8005\u306f\u30a2\u30af\u30bb\u30b9\u8a2d\u5b9a\u3092\u5b8c\u5168\u306b\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u5236\u5fa1\u3067\u304d\u3001\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(n.li,{children:["\u30b7\u30fc\u30e0\u30ec\u30b9\u306a\u8a8d\u53ef (Authorization)\uff1a\u8a8d\u53ef (Authorization) \u306f\u3053\u308c\u307e\u3067\u306b\u306a\u304f\u7c21\u5358\u3067\u3059\uff01",(0,a.jsx)(n.code,{children:"client.getAccessToken()"})," \u3092\u4f7f\u7528\u3057\u3066 OP (Logto) \u306e\u4e0d\u900f\u660e\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3057\u3001\u305d\u308c\u3092 ",(0,a.jsx)(n.code,{children:"Bearer <access_token>"})," \u3068\u3057\u3066 Authorization \u30d8\u30c3\u30c0\u30fc\u306b\u6dfb\u4ed8\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Logto \u30a2\u30ab\u30a6\u30f3\u30c8 API \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001Logto \u3068\u5b8c\u5168\u306b\u7d71\u5408\u3055\u308c\u305f\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u30da\u30fc\u30b8\u306e\u3088\u3046\u306a\u30ab\u30b9\u30bf\u30e0\u30a2\u30ab\u30a6\u30f3\u30c8\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u306b\u4e00\u822c\u7684\u306a\u4f7f\u7528\u4f8b\u3092\u793a\u3057\u307e\u3059\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u53d6\u5f97"}),"\n",(0,a.jsx)(n.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0"}),"\n",(0,a.jsx)(n.li,{children:"\u30e6\u30fc\u30b6\u30fc\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u66f4\u65b0"}),"\n",(0,a.jsx)(n.li,{children:"\u30e1\u30fc\u30eb\u3001\u96fb\u8a71\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u542b\u3080\u30e6\u30fc\u30b6\u30fc\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u66f4\u65b0"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5229\u7528\u53ef\u80fd\u306a API \u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u306f\u3001",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-my-account",children:"Logto \u30a2\u30ab\u30a6\u30f3\u30c8 API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})," \u3068 ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-verifications",children:"Logto \u691c\u8a3c API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-enable-account-api",children:"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5"}),"\n",(0,a.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306f\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001",(0,a.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," \u3092\u4f7f\u7528\u3057\u3066\u30b0\u30ed\u30fc\u30d0\u30eb\u8a2d\u5b9a\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["API \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8 ",(0,a.jsx)(n.code,{children:"/api/account-center"})," \u3092\u4f7f\u7528\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8\u30bb\u30f3\u30bf\u30fc\u306e\u8a2d\u5b9a\u3092\u53d6\u5f97\u304a\u3088\u3073\u66f4\u65b0\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3092\u6709\u52b9\u307e\u305f\u306f\u7121\u52b9\u306b\u3057\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/account-center \\\n  -H \'authorization: Bearer <access_token for Logto Management API>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"enabled":true,"fields":{"username":"Edit"}}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"enabled"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3092\u6709\u52b9\u307e\u305f\u306f\u7121\u52b9\u306b\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u3001",(0,a.jsx)(n.code,{children:"fields"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u5024\u306f ",(0,a.jsx)(n.code,{children:"Off"}),"\u3001",(0,a.jsx)(n.code,{children:"Edit"}),"\u3001",(0,a.jsx)(n.code,{children:"ReadOnly"})," \u306e\u3044\u305a\u308c\u304b\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306f ",(0,a.jsx)(n.code,{children:"Off"})," \u3067\u3059\u3002\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30ea\u30b9\u30c8\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"}),": \u540d\u524d\u30d5\u30a3\u30fc\u30eb\u30c9\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"avatar"}),": \u30a2\u30d0\u30bf\u30fc\u30d5\u30a3\u30fc\u30eb\u30c9\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"profile"}),": \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u305d\u306e\u30b5\u30d6\u30d5\u30a3\u30fc\u30eb\u30c9\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"username"}),": \u30e6\u30fc\u30b6\u30fc\u30cd\u30fc\u30e0\u30d5\u30a3\u30fc\u30eb\u30c9\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"email"}),": \u30e1\u30fc\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"phone"}),": \u96fb\u8a71\u30d5\u30a3\u30fc\u30eb\u30c9\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"password"}),": \u30d1\u30b9\u30ef\u30fc\u30c9\u30d5\u30a3\u30fc\u30eb\u30c9\u3002\u53d6\u5f97\u6642\u306b\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\u306f ",(0,a.jsx)(n.code,{children:"true"})," \u3092\u8fd4\u3057\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f ",(0,a.jsx)(n.code,{children:"false"})," \u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"social"}),": \u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["API \u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-account-center",children:"Logto Management API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-access-account-api",children:"\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u65b9\u6cd5"}),"\n",(0,a.jsx)(n.h3,{id:"fetch-an-access-token",children:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,a.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b SDK \u3092\u8a2d\u5b9a\u3057\u305f\u5f8c\u3001",(0,a.jsx)(n.code,{children:"client.getAccessToken()"})," \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30c8\u30fc\u30af\u30f3\u306f\u3001\u4e0d\u900f\u660e\u30c8\u30fc\u30af\u30f3\u3067\u3042\u308a\u3001\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u516c\u5f0f SDK \u3092\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,a.jsx)(n.code,{children:"/oidc/token"})," \u3078\u306e\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u30b0\u30e9\u30f3\u30c8\u30ea\u30af\u30a8\u30b9\u30c8\u3067 ",(0,a.jsx)(n.code,{children:"resource"})," \u3092\u7a7a\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"access-account-api-using-access-token",children:"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30ab\u30a6\u30f3\u30c8 API \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b"}),"\n",(0,a.jsxs)(n.p,{children:["\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3068\u3084\u308a\u53d6\u308a\u3059\u308b\u969b\u306b\u306f\u3001HTTP \u30d8\u30c3\u30c0\u30fc\u306e ",(0,a.jsx)(n.code,{children:"Authorization"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092 Bearer \u5f62\u5f0f (",(0,a.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),") \u3067\u914d\u7f6e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u4f8b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl https://[tenant-id].logto.app/api/my-account \\\n  -H 'authorization: Bearer <access_token>'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"manage-basic-account-information",children:"\u57fa\u672c\u7684\u306a\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u7ba1\u7406\u3059\u308b"}),"\n",(0,a.jsx)(n.h3,{id:"retrieve-user-account-information",children:"\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl https://[tenant-id].logto.app/api/my-account \\\n  -H 'authorization: Bearer <access_token>'\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "id": "...",\n  "username": "...",\n  "name": "...",\n  "avatar": "..."\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u30bb\u30f3\u30bf\u30fc\u306e\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u7570\u306a\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"update-basic-account-information",children:"\u57fa\u672c\u7684\u306a\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u66f4\u65b0\u3059\u308b"}),"\n",(0,a.jsx)(n.p,{children:"\u57fa\u672c\u7684\u306a\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u30cd\u30fc\u30e0\u3001\u540d\u524d\u3001\u30a2\u30d0\u30bf\u30fc\u3001\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u30e6\u30fc\u30b6\u30fc\u30cd\u30fc\u30e0\u3001\u540d\u524d\u3001\u30a2\u30d0\u30bf\u30fc\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u3001",(0,a.jsx)(n.code,{children:"PATCH /api/my-account"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/my-account \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"username":"...","name":"...","avatar":"..."}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u3001",(0,a.jsx)(n.code,{children:"PATCH /api/my-account/profile"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/my-account/profile \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"familyName":"...","givenName":"..."}\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"manage-identifiers-and-other-sensitive-information",children:"\u8b58\u5225\u5b50\u3068\u305d\u306e\u4ed6\u306e\u6a5f\u5bc6\u60c5\u5831\u3092\u7ba1\u7406\u3059\u308b"}),"\n",(0,a.jsx)(n.p,{children:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u4e0a\u306e\u7406\u7531\u304b\u3089\u3001\u8b58\u5225\u5b50\u3084\u305d\u306e\u4ed6\u306e\u6a5f\u5bc6\u60c5\u5831\u3092\u542b\u3080\u64cd\u4f5c\u306b\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8 API \u3067\u5225\u306e\u8a8d\u53ef (Authorization) \u30ec\u30a4\u30e4\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"get-a-verification-record-id",children:"\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9 ID \u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,a.jsx)(n.p,{children:"\u307e\u305a\u3001\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9 ID \u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u8b58\u5225\u5b50\u3092\u66f4\u65b0\u3059\u308b\u969b\u306b\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9 ID \u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u78ba\u8a8d\u3059\u308b\u304b\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u306b\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h4,{id:"verify-the-users-password",children:"\u30e6\u30fc\u30b6\u30fc\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u78ba\u8a8d\u3059\u308b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X POST https://[tenant-id].logto.app/api/verifications/password \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'content-type: application/json' \\\n  --data-raw '{\"password\":\"...\"}'\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "verificationRecordId": "...",\n  "expiresAt": "..."\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"verify-by-sending-a-verification-code-to-the-users-email-or-phone",children:"\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u307e\u305f\u306f\u96fb\u8a71\u306b\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u9001\u4fe1\u3057\u3066\u78ba\u8a8d\u3059\u308b"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,a.jsx)(n.a,{href:"/connectors/email-connectors/",children:"\u30e1\u30fc\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a"}),"\u3059\u308b\u304b\u3001",(0,a.jsx)(n.a,{href:"/connectors/sms-connectors/",children:"SMS \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a"}),"\u3057\u3001",(0,a.jsx)(n.code,{children:"UserPermissionValidation"})," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,a.jsx)(n.p,{children:"\u30e1\u30fc\u30eb\u3092\u4f8b\u306b\u3068\u308b\u3068\u3001\u65b0\u3057\u3044\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3066\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9 ID \u3092\u53d6\u5f97\u3057\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://[tenant-id].logto.app/api/verifications/verification-code \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"identifier":{"type":"email","value":"..."}}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "verificationRecordId": "...",\n  "expiresAt": "..."\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u53d7\u3051\u53d6\u3063\u305f\u3089\u3001\u305d\u308c\u3092\u4f7f\u7528\u3057\u3066\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9\u306e\u691c\u8a3c\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u66f4\u65b0\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/verifications/verification-code/verify \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"identifier":{"type":"email","value":"..."},"verificationId":"...","code":"123456"}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9 ID \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u306e\u8b58\u5225\u5b50\u3092\u66f4\u65b0\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"send-request-with-verification-record-id",children:"\u691c\u8a3c\u30ec\u30b3\u30fc\u30c9 ID \u3092\u4f7f\u7528\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b"}),"\n",(0,a.jsxs)(n.p,{children:["\u30e6\u30fc\u30b6\u30fc\u306e\u8b58\u5225\u5b50\u3092\u66f4\u65b0\u3059\u308b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u969b\u306b\u306f\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u30fc\u306b ",(0,a.jsx)(n.code,{children:"logto-verification-id"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6dfb\u4ed8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"update-or-link-new-email",children:"\u65b0\u3057\u3044\u30e1\u30fc\u30eb\u3092\u66f4\u65b0\u307e\u305f\u306f\u30ea\u30f3\u30af\u3059\u308b"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,a.jsx)(n.a,{href:"/connectors/email-connectors/",children:"\u30e1\u30fc\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a"}),"\u3057\u3001",(0,a.jsx)(n.code,{children:"BindNewIdentifier"})," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,a.jsx)(n.p,{children:"\u65b0\u3057\u3044\u30e1\u30fc\u30eb\u3092\u66f4\u65b0\u307e\u305f\u306f\u30ea\u30f3\u30af\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u30e1\u30fc\u30eb\u306e\u6240\u6709\u6a29\u3092\u8a3c\u660e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"POST /api/verifications/verification-code"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u547c\u3073\u51fa\u3057\u3066\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://[tenant-id].logto.app/api/verifications/verification-code \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"identifier":{"type":"email","value":"..."}}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u306f ",(0,a.jsx)(n.code,{children:"verificationId"})," \u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u30e1\u30fc\u30eb\u3067\u691c\u8a3c\u30b3\u30fc\u30c9\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\u305d\u308c\u3092\u4f7f\u7528\u3057\u3066\u30e1\u30fc\u30eb\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/verifications/verification-code/verify \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"identifier":{"type":"email","value":"..."},"verificationId":"...","code":"..."}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u30b3\u30fc\u30c9\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u3092\u66f4\u65b0\u3067\u304d\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u30dc\u30c7\u30a3\u306b ",(0,a.jsx)(n.code,{children:"verificationId"})," \u3092 ",(0,a.jsx)(n.code,{children:"newIdentifierVerificationRecordId"})," \u3068\u3057\u3066\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X PATCH https://[tenant-id].logto.app/api/my-account/primary-email \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'logto-verification-id: <verification_record_id>' \\\n  -H 'content-type: application/json' \\\n  --data-raw '{\"email\":\"...\",\"newIdentifierVerificationRecordId\":\"...\"}'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"remove-the-users-email",children:"\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u3092\u524a\u9664\u3059\u308b"}),"\n",(0,a.jsxs)(n.p,{children:["\u30e6\u30fc\u30b6\u30fc\u306e\u30e1\u30fc\u30eb\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001",(0,a.jsx)(n.code,{children:"DELETE /api/my-account/primary-email"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X DELETE https://[tenant-id].logto.app/api/my-account/primary-email \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'logto-verification-id: <verification_record_id>'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"manage-phone",children:"\u96fb\u8a71\u3092\u7ba1\u7406\u3059\u308b"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u3053\u306e\u65b9\u6cd5\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,a.jsx)(n.a,{href:"/connectors/sms-connectors/",children:"SMS \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a"}),"\u3057\u3001",(0,a.jsx)(n.code,{children:"BindNewIdentifier"})," \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,a.jsxs)(n.p,{children:["\u30e1\u30fc\u30eb\u306e\u66f4\u65b0\u3068\u540c\u69d8\u306b\u3001",(0,a.jsx)(n.code,{children:"PATCH /api/my-account/primary-phone"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044\u96fb\u8a71\u3092\u66f4\u65b0\u307e\u305f\u306f\u30ea\u30f3\u30af\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001",(0,a.jsx)(n.code,{children:"DELETE /api/my-account/primary-phone"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u306e\u96fb\u8a71\u3092\u524a\u9664\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"link-a-new-social-connection",children:"\u65b0\u3057\u3044\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u30ea\u30f3\u30af\u3059\u308b"}),"\n",(0,a.jsx)(n.p,{children:"\u65b0\u3057\u3044\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u30ea\u30f3\u30af\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u8a8d\u53ef (Authorization) URL \u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://[tenant-id].logto.app/api/verifications/social \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"connectorId":"...","redirectUri":"...","state":"..."}\'\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"connectorId"}),": ",(0,a.jsx)(n.a,{href:"/connectors/social-connectors/",children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc"}),"\u306e ID\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"redirectUri"}),": \u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a8d\u53ef (Authorization) \u3057\u305f\u5f8c\u306e\u30ea\u30c0\u30a4\u30ec\u30af\u30c8 URI\u3002\u3053\u306e URL \u306b\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u3092\u30db\u30b9\u30c8\u3057\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state"}),": \u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a8d\u53ef (Authorization) \u3057\u305f\u5f8c\u306b\u8fd4\u3055\u308c\u308b\u72b6\u614b\u3067\u3001CSRF \u653b\u6483\u3092\u9632\u3050\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30e9\u30f3\u30c0\u30e0\u306a\u6587\u5b57\u5217\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u306f ",(0,a.jsx)(n.code,{children:"verificationRecordId"})," \u304c\u542b\u307e\u308c\u3066\u304a\u308a\u3001\u5f8c\u3067\u4f7f\u7528\u3059\u308b\u305f\u3081\u306b\u4fdd\u6301\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a8d\u53ef (Authorization) \u3057\u305f\u5f8c\u3001",(0,a.jsx)(n.code,{children:"redirectUri"})," \u306b ",(0,a.jsx)(n.code,{children:"state"})," \u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u542b\u3080\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001",(0,a.jsx)(n.code,{children:"POST /api/verifications/social/verify"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://[tenant-id].logto.app/api/verifications/social/verify \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"connectorData":"...","verificationRecordId":"..."}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"connectorData"})," \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8a8d\u53ef (Authorization) \u3057\u305f\u5f8c\u306b\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u304b\u3089\u8fd4\u3055\u308c\u308b\u30c7\u30fc\u30bf\u3067\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u30da\u30fc\u30b8\u306e ",(0,a.jsx)(n.code,{children:"redirectUri"})," \u304b\u3089\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u89e3\u6790\u3057\u3066\u53d6\u5f97\u3057\u3001\u305d\u308c\u3092 JSON \u3068\u3057\u3066 ",(0,a.jsx)(n.code,{children:"connectorData"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u3068\u3057\u3066\u30e9\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6700\u5f8c\u306b\u3001",(0,a.jsx)(n.code,{children:"PATCH /api/my-account/identities"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u30ea\u30f3\u30af\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X PATCH https://[tenant-id].logto.app/api/my-account/identities \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'logto-verification-id: <verification_record_id>' \\\n  -H 'content-type: application/json' \\\n  --data-raw '{\"newIdentifierVerificationRecordId\":\"...\"}'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"remove-a-social-connection",children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u524a\u9664\u3059\u308b"}),"\n",(0,a.jsxs)(n.p,{children:["\u30bd\u30fc\u30b7\u30e3\u30eb\u63a5\u7d9a\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001",(0,a.jsx)(n.code,{children:"DELETE /api/my-account/identities"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X DELETE https://[tenant-id].logto.app/api/my-account/identities/[connector_target_id] \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'logto-verification-id: <verification_record_id>'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var c=i(58101);const a={},o=c.createContext(a);function t(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);