"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[89750],{49613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(c,".").concat(m)]||l[m]||p[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}l.displayName="MDXCreateElement"},96462:function(e,t,r){r.d(t,{ZP:function(){return c}});var o=r(665),n=r(40151),a=(r(59496),r(49613)),i=["components"],s={toc:[{value:"Retrieve Logto&#39;s OIDC configurations",id:"retrieve-logtos-oidc-configurations",level:3}]};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"retrieve-logtos-oidc-configurations"},"Retrieve Logto's OIDC configurations"),(0,a.kt)("p",null,"You will need a JWK public key set and the token issuer to verify the signature and source of the received JWS token. All the latest public Logto Authorization Configurations can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-logto-domain>/oidc/.well-known/openid-configuration"),"."),(0,a.kt)("p",null,"e.g. Call ",(0,a.kt)("inlineCode",{parentName:"p"},"https://logto.dev/oidc/.well-known/openid-configuration"),". And locate the following two fields in the response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jwks_uri": "https://logto.dev/oidc/jwks",\n  "issuer": "https://logto.dev/oidc"\n}\n')))}c.isMDXComponent=!0},27297:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var o=r(665),n=r(40151),a=(r(59496),r(49613)),i=r(96462),s=["components"],c={sidebar_label:"Node (Express)"},u="Protect your API on Node (Express)",d={unversionedId:"docs/recipes/protect-your-api/node",id:"version-1.x/docs/recipes/protect-your-api/node",title:"Protect your API on Node (Express)",description:"Make sure to register your api resource in Logto Admin Console before continuing.",source:"@site/versioned_docs/version-1.x/docs/recipes/protect-your-api/node.mdx",sourceDirName:"docs/recipes/protect-your-api",slug:"/docs/recipes/protect-your-api/node",permalink:"/logto-docs/docs/recipes/protect-your-api/node",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/protect-your-api/node.mdx",tags:[],version:"1.x",frontMatter:{sidebar_label:"Node (Express)"},sidebar:"docsSidebar",previous:{title:"\u2694\ufe0f Protect your API",permalink:"/logto-docs/docs/recipes/protect-your-api/"},next:{title:"Python",permalink:"/logto-docs/docs/recipes/protect-your-api/python"}},p={},l=[{value:"Extract the Bearer Token from request header",id:"extract-the-bearer-token-from-request-header",level:2},{value:"Token validation",id:"token-validation",level:2},{value:"Install <code>jose</code> as your dependency",id:"install-jose-as-your-dependency",level:3},{value:"Add auth middleware",id:"add-auth-middleware",level:3},{value:"Apply middleware to your API",id:"apply-middleware-to-your-api",level:2}],m={toc:l};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"protect-your-api-on-node-express"},"Protect your API on Node (Express)"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure to ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console"},"register your api resource in Logto Admin Console")," before continuing.")),(0,a.kt)("h2",{id:"extract-the-bearer-token-from-request-header"},"Extract the Bearer Token from request header"),(0,a.kt)("p",null,"A authorized request should contain an ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header with ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer <access_token>")," as its content. Extract the Authorization Token from the request header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// auth_middleware.ts\n\nimport { IncomingHttpHeaders } from 'http';\n\nconst extractBearerTokenFromHeaders = ({ authorization }: IncomingHttpHeaders) => {\n  if (!authorization) {\n    throw new Error({ code: 'auth.authorization_header_missing', status: 401 });\n  }\n\n  if (!authorization.startsWith('Bearer')) {\n    throw new Error({ code: 'auth.authorization_token_type_not_supported', status: 401 });\n  }\n\n  return authorization.slice(bearerTokenIdentifier.length + 1);\n};\n")),(0,a.kt)("h2",{id:"token-validation"},"Token validation"),(0,a.kt)("p",null,"For demonstration, we use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/panva/jose"},"jose")," package to validate the token's signature, expiration status, and required claims."),(0,a.kt)("h3",{id:"install-jose-as-your-dependency"},"Install ",(0,a.kt)("inlineCode",{parentName:"h3"},"jose")," as your dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i jose --save\n")),(0,a.kt)(i.ZP,{mdxType:"RetrieveOidcConfiguration"}),(0,a.kt)("h3",{id:"add-auth-middleware"},"Add auth middleware"),(0,a.kt)("p",null,"Jose's ",(0,a.kt)("inlineCode",{parentName:"p"},"jwtVerify")," method may helps you to verify the token's JWS format, token signature, issuer, audience and the expiration status. A exception will be thrown if validation failed."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/rbac"},"\ud83d\udd10 RBAC"),", scope validation is also required.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// auth-middleware.ts\n\nimport { createRemoteJWKSet, jwtVerify } from 'jose';\n\n//...\n\nexport const verifyAuthFromRequest = async (req, res, next) => {\n  // Extract the token\n  const token = extractBearerTokenFromHeaders(req.headers);\n\n  const { payload } = await jwtVerify(\n    token, // The raw Bearer Token extracted from the request header\n    createRemoteJWKSet('https://<your-logto-domain>/oidc/jwks'), // generate a jwks using jwks_uri inquired from Logto server\n    {\n      // expected issuer of the token, should be issued by the Logto server\n      issuer: 'https://<your-logto-domain>/oidc',\n      // expected audience token, should be the resource indicator of the current API\n      audience: '<your request listener resource indicator>',\n    }\n  );\n\n  // if you are using RBAC\n  assert(payload.scope.includes('some_scope'));\n\n  // custom payload logic\n  userId = payload.sub;\n\n  return next();\n};\n")),(0,a.kt)("h2",{id:"apply-middleware-to-your-api"},"Apply middleware to your API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { verifyAuthFromRequest } from '/middleware/auth-middleware.ts';\n\napp.get('/user/:id', verifyAuthFromRequest, (req, res, next) => {\n  // Custom code\n});\n")))}f.isMDXComponent=!0}}]);