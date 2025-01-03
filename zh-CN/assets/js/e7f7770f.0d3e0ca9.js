"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[28118],{83978:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"concepts/opaque-token","title":"\u4e0d\u900f\u660e\u4ee4\u724c (Opaque token)","description":"\u5728\u8ba4\u8bc1\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u8d44\u6e90\uff0cLogto \u5c06\u7b7e\u53d1\u4e00\u4e2a\u4e0d\u900f\u660e\u8bbf\u95ee\u4ee4\u724c\uff0c\u800c\u4e0d\u662f JWT\u3002\u4e0d\u900f\u660e\u4ee4\u724c\u662f\u4e00\u4e2a\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u6bd4 JWT \u77ed\u5f97\u591a\uff1a","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/concepts/opaque-token.mdx","sourceDirName":"concepts","slug":"/concepts/opaque-token","permalink":"/zh-CN/concepts/opaque-token","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/concepts/opaque-token.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"\u914d\u7f6e","permalink":"/zh-CN/concepts/core-service/configuration"},"next":{"title":"\u6982\u5ff5","permalink":"/zh-CN/concepts/"}}');var c=o(25105),s=o(79621);const i={sidebar_position:6},r="\u4e0d\u900f\u660e\u4ee4\u724c (Opaque token)",d={},l=[];function a(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u4e0d\u900f\u660e\u4ee4\u724c-opaque-token",children:"\u4e0d\u900f\u660e\u4ee4\u724c (Opaque token)"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8ba4\u8bc1\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u8d44\u6e90\uff0cLogto \u5c06\u7b7e\u53d1\u4e00\u4e2a\u4e0d\u900f\u660e\u8bbf\u95ee\u4ee4\u724c\uff0c\u800c\u4e0d\u662f JWT\u3002\u4e0d\u900f\u660e\u4ee4\u724c\u662f\u4e00\u4e2a\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u6bd4 JWT \u77ed\u5f97\u591a\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "some-random-string", // \u4e0d\u900f\u660e\u4ee4\u724c\n  "expires_in": 3600,\n  "id_token": "eyJhbGc...aBc", // JWT\n  "scope": "openid profile email",\n  "token_type": "Bearer"\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0d\u900f\u660e\u4ee4\u724c\u53ef\u7528\u4e8e\u8c03\u7528 ",(0,c.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"userinfo endpoint"})," \u5e76\u8bbf\u95ee\u9700\u8981\u8ba4\u8bc1\u7684\u53d7\u4fdd\u62a4\u8d44\u6e90\u3002\u7531\u4e8e\u5b83\u4e0d\u662f JWT\uff0c\u8d44\u6e90\u670d\u52a1\u5668\u5982\u4f55\u9a8c\u8bc1\u5b83\uff1f"]}),"\n",(0,c.jsxs)(n.p,{children:["Logto \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,c.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7662.html",children:"introspection endpoint"}),"\uff0c\u53ef\u7528\u4e8e\u9a8c\u8bc1\u4e0d\u900f\u660e\u4ee4\u724c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cintrospection endpoint \u662f ",(0,c.jsx)(n.code,{children:"/oidc/token/introspection"}),"\uff0c\u5e76\u63a5\u53d7 ",(0,c.jsx)(n.code,{children:"POST"})," \u8bf7\u6c42\u3002\u4ee5\u4e0b\u53c2\u6570\u662f\u5fc5\u9700\u7684\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"token"}),": \u8981\u9a8c\u8bc1\u7684\u4e0d\u900f\u660e\u4ee4\u724c"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u8be5 endpoint \u8fd8\u9700\u8981\u5ba2\u6237\u7aef\u8ba4\u8bc1\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u4e4b\u4e00\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["HTTP Basic \u8ba4\u8bc1\uff1a\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"Authorization"})," \u5934\uff0c\u503c\u4e3a ",(0,c.jsx)(n.code,{children:"Basic <base64-encoded-credentials>"}),"\u3002\u51ed\u636e\u5fc5\u987b\u662f\u7528\u5192\u53f7\uff08",(0,c.jsx)(n.code,{children:":"}),"\uff09\u5206\u9694\u7684\u5ba2\u6237\u7aef ID \u548c\u5ba2\u6237\u7aef\u5bc6\u94a5\uff0c\u5e76\u8fdb\u884c base64 \u7f16\u7801\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["HTTP POST \u8ba4\u8bc1\uff1a\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"client_id"})," \u548c ",(0,c.jsx)(n.code,{children:"client_secret"})," \u53c2\u6570\uff1a","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"client_id"}),": \u8bf7\u6c42\u4ee4\u724c\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u5ba2\u6237\u7aef ID"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"client_secret"}),": \u8bf7\u6c42\u4ee4\u724c\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u5ba2\u6237\u7aef\u5bc6\u94a5"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u5ba2\u6237\u7aef ID\uff08\u5e94\u7528 ID\uff09\u548c\u5ba2\u6237\u7aef\u5bc6\u94a5\uff08\u5e94\u7528\u5bc6\u94a5\uff09\u53ef\u4ee5\u662f Logto \u4e2d\u4efb\u4f55\u201c\u4f20\u7edf web\u201d\u6216\u201c\u673a\u5668\u5bf9\u673a\u5668\u201d\u5e94\u7528\u7a0b\u5e8f\u7684\u5e94\u7528\u51ed\u636e\u3002\u5982\u679c\u51ed\u636e\u65e0\u6548\uff0cintrospection endpoint \u5c06\u8fd4\u56de\u9519\u8bef\u3002"}),"\n",(0,c.jsx)(n.p,{children:"introspection endpoint \u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4ee4\u724c\u58f0\u660e\u7684 JSON \u5bf9\u8c61\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "active": true, // \u4ee4\u724c\u662f\u5426\u6709\u6548\n  "sub": "1234567890" // \u4ee4\u724c\u7684\u4e3b\u4f53\uff08\u7528\u6237 ID\uff09\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4ee4\u724c\u65e0\u6548\uff0c",(0,c.jsx)(n.code,{children:"active"})," \u5b57\u6bb5\u5c06\u4e3a ",(0,c.jsx)(n.code,{children:"false"}),"\uff0c\u5e76\u4e14 ",(0,c.jsx)(n.code,{children:"sub"})," \u5b57\u6bb5\u5c06\u88ab\u7701\u7565\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f introspection \u8bf7\u6c42\u7684\u975e\u89c4\u8303\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://[tenant-id].logto.app/oidc/token/introspection' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'token=some-random-string' \\\n  --data-urlencode 'client_id=1234567890' \\\n  --data-urlencode 'client_secret=1234567890'\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8bb0\u5f97\u5c06 ",(0,c.jsx)(n.code,{children:"[tenant-id]"})," \u66ff\u6362\u4e3a\u4f60\u7684\u79df\u6237 ID\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},79621:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(58101);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);