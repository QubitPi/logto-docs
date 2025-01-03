"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[66996],{76561:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"authorization/api-resources/node-express","title":"Guia: Node (Express)","description":"Passo 1: Extraia o Token Bearer do cabe\xe7alho da solicita\xe7\xe3o \\\\","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/api-resources/node-express.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/node-express","permalink":"/pt-BR/authorization/api-resources/node-express","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/api-resources/node-express.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Guia: Python","permalink":"/pt-BR/authorization/api-resources/python"},"next":{"title":"Guia: Spring Boot","permalink":"/pt-BR/authorization/api-resources/spring-boot"}}');var n=a(25105),t=a(79621);const s={sidebar_position:3},i="Guia: Node (Express)",d={},c=[{value:"Passo 1: Extraia o Token Bearer do cabe\xe7alho da solicita\xe7\xe3o",id:"step-1-extract-the-bearer-token-from-request-header",level:2},{value:"Passo 2: Valida\xe7\xe3o do token",id:"step-2-token-validation",level:2},{value:"Instale <code>jose</code> como sua depend\xeancia",id:"install-jose-as-your-dependency",level:3},{value:"Recupere as configura\xe7\xf5es OIDC do Logto",id:"retrieve-logtos-oidc-configurations",level:3},{value:"Adicione middleware de autentica\xe7\xe3o",id:"add-auth-middleware",level:3},{value:"Aplique middleware \xe0 sua API",id:"apply-middleware-to-your-api",level:2},{value:"Recursos relacionados",id:"related-resources",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Url:a}=o;return a||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"guia-node-express",children:"Guia: Node (Express)"})}),"\n",(0,n.jsx)(o.h2,{id:"step-1-extract-the-bearer-token-from-request-header",children:"Passo 1: Extraia o Token Bearer do cabe\xe7alho da solicita\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["Uma solicita\xe7\xe3o autorizada deve conter um cabe\xe7alho ",(0,n.jsx)(o.code,{children:"Authorization"})," com ",(0,n.jsx)(o.code,{children:"Bearer <access_token>"})," como seu conte\xfado. Extraia o Token de Autoriza\xe7\xe3o do cabe\xe7alho da solicita\xe7\xe3o:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"// auth_middleware.ts\n\nimport { IncomingHttpHeaders } from 'http';\n\nconst extractBearerTokenFromHeaders = ({ authorization }: IncomingHttpHeaders) => {\n  const bearerTokenIdentifier = 'Bearer';\n\n  if (!authorization) {\n    throw new Error({ code: 'auth.authorization_header_missing', status: 401 });\n  }\n\n  if (!authorization.startsWith(bearerTokenIdentifier)) {\n    throw new Error({ code: 'auth.authorization_token_type_not_supported', status: 401 });\n  }\n\n  return authorization.slice(bearerTokenIdentifier.length + 1);\n};\n"})}),"\n",(0,n.jsx)(o.h2,{id:"step-2-token-validation",children:"Passo 2: Valida\xe7\xe3o do token"}),"\n",(0,n.jsxs)(o.p,{children:["Para demonstra\xe7\xe3o, usamos o pacote ",(0,n.jsx)(o.a,{href:"https://github.com/panva/jose",children:"jose"})," para validar a assinatura do token, status de expira\xe7\xe3o e reivindica\xe7\xf5es necess\xe1rias."]}),"\n",(0,n.jsxs)(o.h3,{id:"install-jose-as-your-dependency",children:["Instale ",(0,n.jsx)(o.code,{children:"jose"})," como sua depend\xeancia"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"npm i jose --save\n"})}),"\n",(0,n.jsx)(o.h3,{id:"retrieve-logtos-oidc-configurations",children:"Recupere as configura\xe7\xf5es OIDC do Logto"}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea precisar\xe1 de um conjunto de chaves p\xfablicas JWK e do emissor do token para verificar a assinatura e a origem do token JWS recebido. Todas as \xfaltimas Configura\xe7\xf5es de Autoriza\xe7\xe3o P\xfablica do Logto podem ser encontradas em ",(0,n.jsx)(o.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Por exemplo, chame ",(0,n.jsx)(o.code,{children:"https://tenant-id.logto.app/oidc/.well-known/openid-configuration"}),". E localize os seguintes dois campos no corpo da resposta:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "jwks_uri": "https://tenant-id.logto.app/oidc/jwks",\n  "issuer": "https://tenant-id.logto.app/oidc"\n}\n'})}),"\n",(0,n.jsx)(o.h3,{id:"add-auth-middleware",children:"Adicione middleware de autentica\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O m\xe9todo ",(0,n.jsx)(o.code,{children:"jwtVerify"})," do Jose pode ajud\xe1-lo a verificar o formato JWS do token, assinatura do token, emissor, p\xfablico e o status de expira\xe7\xe3o. Uma exce\xe7\xe3o ser\xe1 lan\xe7ada se a valida\xe7\xe3o falhar."]}),"\n",(0,n.jsx)(o.admonition,{type:"warning",children:(0,n.jsxs)(o.p,{children:["Se voc\xea usar ",(0,n.jsx)(o.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"controle de acesso baseado em papel (RBAC)"}),", a valida\xe7\xe3o de escopo tamb\xe9m \xe9 necess\xe1ria."]})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"// auth-middleware.ts\n\nimport { createRemoteJWKSet, jwtVerify } from 'jose';\n\n//...\n\nexport const verifyAuthFromRequest = async (req, res, next) => {\n  // Extraia o token\n  const token = extractBearerTokenFromHeaders(req.headers);\n\n  const { payload } = await jwtVerify(\n    token, // O Token Bearer bruto extra\xeddo do cabe\xe7alho da solicita\xe7\xe3o\n    createRemoteJWKSet(new URL('https://<your-logto-domain>/oidc/jwks')), // gera um jwks usando jwks_uri consultado do servidor Logto\n    {\n      // emissor esperado do token, deve ser emitido pelo servidor Logto\n      issuer: 'https://<your-logto-domain>/oidc',\n      // token de p\xfablico esperado, deve ser o indicador de recurso da API atual\n      audience: '<your request listener resource indicator>',\n    }\n  );\n\n  // se voc\xea estiver usando RBAC\n  assert(payload.scope.includes('some_scope'));\n\n  // l\xf3gica personalizada de payload\n  userId = payload.sub;\n\n  return next();\n};\n"})}),"\n",(0,n.jsx)(o.h2,{id:"apply-middleware-to-your-api",children:"Aplique middleware \xe0 sua API"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { verifyAuthFromRequest } from '/middleware/auth-middleware.ts';\n\napp.get('/user/:id', verifyAuthFromRequest, (req, res, next) => {\n  // C\xf3digo personalizado\n});\n"})}),"\n",(0,n.jsx)(o.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,n.jsx)(a,{href:"https://blog.logto.io/protect-your-express-js-api",children:(0,n.jsx)(o.p,{children:"Proteja sua API Express.js com JWT e Logto"})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},79621:(e,o,a)=>{a.d(o,{R:()=>s,x:()=>i});var r=a(58101);const n={},t=r.createContext(n);function s(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);