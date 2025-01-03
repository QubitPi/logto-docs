"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[14392],{94942:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"developers/custom-token-claims/README","title":"Custom token claims","description":"Introduction \\\\","source":"@site/docs/developers/custom-token-claims/README.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/","permalink":"/developers/custom-token-claims/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/developers/custom-token-claims/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Developer","permalink":"/developers/"},"next":{"title":"Common use cases","permalink":"/developers/custom-token-claims/common-use-cases"}}');var s=o(25105),i=o(79621);const a={sidebar_position:2},r="Custom token claims",c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How do custom token claims work?",id:"how-do-custom-token-claims-work",level:2},{value:"Related resources",id:"related-resources",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Url:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"custom-token-claims",children:"Custom token claims"})}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://auth.wiki/access-token",children:"Access tokens"})," play a critical role in the authentication and authorization process, carrying the subject's identity information and permissions, and are passed between the ",(0,s.jsx)(t.a,{href:"/concepts/core-service",children:"Logto server"})," (serve as auth server or identity provider, IdP), your web service server (resource provider), and client applications (clients)."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://auth.wiki/claim",children:"Token claims"})," are the key-value pairs that provide information about an entity or the token itself. The claims may include user information, token expiration time, permissions, and other metadata that are relevant to the authentication (link to auth.wiki) and authorization (link to auth.wiki) process."]}),"\n",(0,s.jsx)(t.p,{children:"There are two types of access tokens in Logto:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"JSON Web Token:"})," ",(0,s.jsx)(t.a,{href:"https://auth.wiki/jwt",children:"JSON Web Token (JWT)"})," is a popular format that encodes claims in a way that is both secure and readable by clients. Common claims like ",(0,s.jsx)(t.code,{children:"sub"}),", ",(0,s.jsx)(t.code,{children:"iss"}),", ",(0,s.jsx)(t.code,{children:"aud"})," etc are used in line with the OAuth 2.0 protocol (See ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4",children:"this link"})," for more details). JWT tokens allow consumers to directly access claims without additional validation steps. In Logto, access tokens are issued in JWT format by default when a client inits authorization requests of specific resources or organizations."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Opaque token:"})," An ",(0,s.jsx)(t.a,{href:"http://localhost:3000/concepts/opaque-token",children:"opaque token"})," is not self-contained and always requires an additional validation step via the ",(0,s.jsx)(t.a,{href:"https://auth.wiki/token-introspection",children:"token introspection"})," endpoint. Despite their non-transparent format, opaque tokens can help to get claims and be transmitted securely between parties. Token claims are securely stored in the Logto server and accessed by the client applications via the token introspection endpoint. Access tokens are issued in opaque format when no specific resource or organization is included in the authorization request. These tokens are primarily used for accessing the OIDC ",(0,s.jsx)(t.code,{children:"userinfo"})," endpoint and other general purposes."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In many cases, standard claims aren't sufficient to meet the specific needs of your applications, whether you're using JWT or opaque tokens. To address this, Logto provides the flexibility to add customize claims within access tokens. With this feature, you can include additional information for your business logic, all securely transmitted in the tokens and retrievable via introspection in the case of opaque tokens."}),"\n",(0,s.jsx)(t.h2,{id:"how-do-custom-token-claims-work",children:"How do custom token claims work?"}),"\n",(0,s.jsxs)(t.p,{children:["Logto allows you to insert custom claims into the ",(0,s.jsx)(t.code,{children:"access token"})," through a callback function ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"}),". You may provide your implementation of the ",(0,s.jsx)(t.code,{children:"getCustomJwtClaims"})," function to return an object of custom claims. The return value will be merged with the original token payload and signed to generate the final access token."]}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n  participant U as User or user agent\n  participant IdP as Logto (identity provider)\n  participant SP as Service Provider\n\n  autonumber\n  U ->> IdP: Auth request (with credentials)\n  activate IdP\n  IdP--\x3e>IdP: Validate credentials &<br/>generate raw access token payload\n  rect var(--mermaid-rect-fill)\n  note over IdP: Custom token claims\n  IdP->>IdP: Run custom token claims script (`getCustomJwtClaims`) &<br/>get extra token claims\n  end\n  IdP--\x3e>IdP: Merge raw access token payload and extra token claims\n  IdP--\x3e>IdP: Sign & encrypt payload to get access token\n  deactivate IdP\n  IdP--\x3e>U: Issue JWT-format access token\n  par Get service via API\n  U->>SP: service request (with JWT access token)\n  SP--\x3e>U: service response\n  end"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Logto build-in token claims can NOT be overridden or modified. Custom claims will be added to the token as additional claims. If any custom claims conflict with the built-in claims, those custom claims will be ignored."})}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,s.jsx)(o,{href:"https://blog.logto.io/glance-on-custom-jwt-access-token-claims",children:(0,s.jsx)(t.p,{children:"Add custom claims for JWT access tokens with Logto to boost your authorization"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},79621:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(58101);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);