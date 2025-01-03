"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5793],{72987:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"authorization/api-resources/node-express","title":"\u6307\u5357\uff1aNode (Express)","description":"\u6b65\u9aa4 1\uff1a\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6 Bearer \u4ee4\u724c \\\\","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/authorization/api-resources/node-express.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/node-express","permalink":"/zh-CN/authorization/api-resources/node-express","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/authorization/api-resources/node-express.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u6307\u5357\uff1aPython","permalink":"/zh-CN/authorization/api-resources/python"},"next":{"title":"\u6307\u5357\uff1aSpring Boot","permalink":"/zh-CN/authorization/api-resources/spring-boot"}}');var t=o(25105),s=o(79621);const i={sidebar_position:3},a="\u6307\u5357\uff1aNode (Express)",d={},c=[{value:"\u6b65\u9aa4 1\uff1a\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6 Bearer \u4ee4\u724c",id:"step-1-extract-the-bearer-token-from-request-header",level:2},{value:"\u6b65\u9aa4 2\uff1a\u4ee4\u724c\u9a8c\u8bc1",id:"step-2-token-validation",level:2},{value:"\u5b89\u88c5 <code>jose</code> \u4f5c\u4e3a\u4f60\u7684\u4f9d\u8d56",id:"install-jose-as-your-dependency",level:3},{value:"\u83b7\u53d6 Logto \u7684 OIDC \u914d\u7f6e",id:"retrieve-logtos-oidc-configurations",level:3},{value:"\u6dfb\u52a0\u8ba4\u8bc1 (Authentication) \u4e2d\u95f4\u4ef6",id:"add-auth-middleware",level:3},{value:"\u5c06\u4e2d\u95f4\u4ef6\u5e94\u7528\u4e8e\u4f60\u7684 API",id:"apply-middleware-to-your-api",level:2},{value:"\u76f8\u5173\u8d44\u6e90",id:"related-resources",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Url:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u6307\u5357node-express",children:"\u6307\u5357\uff1aNode (Express)"})}),"\n",(0,t.jsx)(n.h2,{id:"step-1-extract-the-bearer-token-from-request-header",children:"\u6b65\u9aa4 1\uff1a\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6 Bearer \u4ee4\u724c"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e2a\u6388\u6743 (Authorization) \u8bf7\u6c42\u5e94\u5305\u542b\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"Authorization"})," \u5934\uff0c\u5176\u5185\u5bb9\u4e3a ",(0,t.jsx)(n.code,{children:"Bearer <access_token>"}),"\u3002\u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6\u6388\u6743\u4ee4\u724c\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// auth_middleware.ts\n\nimport { IncomingHttpHeaders } from 'http';\n\nconst extractBearerTokenFromHeaders = ({ authorization }: IncomingHttpHeaders) => {\n  const bearerTokenIdentifier = 'Bearer';\n\n  if (!authorization) {\n    throw new Error({ code: 'auth.authorization_header_missing', status: 401 });\n  }\n\n  if (!authorization.startsWith(bearerTokenIdentifier)) {\n    throw new Error({ code: 'auth.authorization_token_type_not_supported', status: 401 });\n  }\n\n  return authorization.slice(bearerTokenIdentifier.length + 1);\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-token-validation",children:"\u6b65\u9aa4 2\uff1a\u4ee4\u724c\u9a8c\u8bc1"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u6f14\u793a\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://github.com/panva/jose",children:"jose"})," \u5305\u6765\u9a8c\u8bc1\u4ee4\u724c\u7684\u7b7e\u540d\u3001\u8fc7\u671f\u72b6\u6001\u548c\u6240\u9700\u58f0\u660e\u3002"]}),"\n",(0,t.jsxs)(n.h3,{id:"install-jose-as-your-dependency",children:["\u5b89\u88c5 ",(0,t.jsx)(n.code,{children:"jose"})," \u4f5c\u4e3a\u4f60\u7684\u4f9d\u8d56"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i jose --save\n"})}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-logtos-oidc-configurations",children:"\u83b7\u53d6 Logto \u7684 OIDC \u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u5c06\u9700\u8981\u4e00\u4e2a JWK \u516c\u94a5\u96c6\u548c\u4ee4\u724c\u53d1\u884c\u8005\u6765\u9a8c\u8bc1\u63a5\u6536\u5230\u7684 JWS \u4ee4\u724c\u7684\u7b7e\u540d\u548c\u6765\u6e90\u3002\u6240\u6709\u6700\u65b0\u7684\u516c\u5171 Logto \u6388\u6743 (Authorization) \u914d\u7f6e\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"})," \u627e\u5230\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"https://tenant-id.logto.app/oidc/.well-known/openid-configuration"}),"\u3002\u5e76\u5728\u54cd\u5e94\u4f53\u4e2d\u627e\u5230\u4ee5\u4e0b\u4e24\u4e2a\u5b57\u6bb5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jwks_uri": "https://tenant-id.logto.app/oidc/jwks",\n  "issuer": "https://tenant-id.logto.app/oidc"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"add-auth-middleware",children:"\u6dfb\u52a0\u8ba4\u8bc1 (Authentication) \u4e2d\u95f4\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["Jose \u7684 ",(0,t.jsx)(n.code,{children:"jwtVerify"})," \u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u4f60\u9a8c\u8bc1\u4ee4\u724c\u7684 JWS \u683c\u5f0f\u3001\u4ee4\u724c\u7b7e\u540d\u3001\u53d1\u884c\u8005\u3001\u53d7\u4f17\u548c\u8fc7\u671f\u72b6\u6001\u3002\u5982\u679c\u9a8c\u8bc1\u5931\u8d25\uff0c\u5c06\u629b\u51fa\u5f02\u5e38\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 (RBAC)"}),"\uff0c\u8fd8\u9700\u8981\u8fdb\u884c\u6743\u9650 (Scope) \u9a8c\u8bc1\u3002"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// auth-middleware.ts\n\nimport { createRemoteJWKSet, jwtVerify } from 'jose';\n\n//...\n\nexport const verifyAuthFromRequest = async (req, res, next) => {\n  // \u63d0\u53d6\u4ee4\u724c\n  const token = extractBearerTokenFromHeaders(req.headers);\n\n  const { payload } = await jwtVerify(\n    token, // \u4ece\u8bf7\u6c42\u5934\u4e2d\u63d0\u53d6\u7684\u539f\u59cb Bearer \u4ee4\u724c\n    createRemoteJWKSet(new URL('https://<your-logto-domain>/oidc/jwks')), // \u4f7f\u7528\u4ece Logto \u670d\u52a1\u5668\u67e5\u8be2\u7684 jwks_uri \u751f\u6210 jwks\n    {\n      // \u4ee4\u724c\u7684\u9884\u671f\u53d1\u884c\u8005\uff0c\u5e94\u7531 Logto \u670d\u52a1\u5668\u53d1\u884c\n      issuer: 'https://<your-logto-domain>/oidc',\n      // \u9884\u671f\u7684\u53d7\u4f17\u4ee4\u724c\uff0c\u5e94\u4e3a\u5f53\u524d API \u7684\u8d44\u6e90\u6307\u793a\u5668\n      audience: '<your request listener resource indicator>',\n    }\n  );\n\n  // \u5982\u679c\u4f60\u4f7f\u7528 RBAC\n  assert(payload.scope.includes('some_scope'));\n\n  // \u81ea\u5b9a\u4e49 payload \u903b\u8f91\n  userId = payload.sub;\n\n  return next();\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"apply-middleware-to-your-api",children:"\u5c06\u4e2d\u95f4\u4ef6\u5e94\u7528\u4e8e\u4f60\u7684 API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { verifyAuthFromRequest } from '/middleware/auth-middleware.ts';\n\napp.get('/user/:id', verifyAuthFromRequest, (req, res, next) => {\n  // \u81ea\u5b9a\u4e49\u4ee3\u7801\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"\u76f8\u5173\u8d44\u6e90"}),"\n",(0,t.jsx)(o,{href:"https://blog.logto.io/protect-your-express-js-api",children:(0,t.jsx)(n.p,{children:"\u4f7f\u7528 JWT \u548c Logto \u4fdd\u62a4\u4f60\u7684 Express.js API"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},79621:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(58101);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);