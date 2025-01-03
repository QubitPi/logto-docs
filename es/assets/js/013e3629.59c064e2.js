"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[14982],{60426:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"user-management/personal-access-token","title":"Token de acceso personal","description":"Los tokens de acceso personal (PATs) proporcionan una forma segura para que los usuarios otorguen un token de acceso sin usar sus credenciales e inicio de sesi\xf3n interactivo. Esto es \xfatil para CI/CD, scripts o aplicaciones que necesitan acceder a recursos de manera program\xe1tica.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/user-management/personal-access-token.mdx","sourceDirName":"user-management","slug":"/user-management/personal-access-token","permalink":"/es/user-management/personal-access-token","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/user-management/personal-access-token.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"B\xfasqueda avanzada de usuarios","permalink":"/es/user-management/advanced-user-search"},"next":{"title":"Migraci\xf3n de usuarios","permalink":"/es/user-management/user-migration"}}');var a=s(25105),t=s(79621);const i={sidebar_position:4},r="Token de acceso personal",c={},d=[{value:"Gesti\xf3n de tokens de acceso personal",id:"managing-personal-access-tokens",level:2},{value:"Usando la Consola",id:"using-console",level:3},{value:"Usando Management API",id:"using-management-api",level:3},{value:"Usar PATs para otorgar tokens de acceso",id:"use-pats-to-grant-access-tokens",level:2},{value:"Solicitud",id:"request",level:3},{value:"Respuesta",id:"response",level:3},{value:"Ejemplo de intercambio de tokens",id:"example-token-exchange",level:3},{value:"Recursos relacionados",id:"related-resources",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components},{CloudLink:s,Url:o}=n;return s||p("CloudLink",!0),o||p("Url",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"token-de-acceso-personal",children:"Token de acceso personal"})}),"\n",(0,a.jsxs)(n.p,{children:["Los tokens de acceso personal (PATs) proporcionan una forma segura para que los usuarios otorguen un ",(0,a.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"token de acceso"})," sin usar sus credenciales e inicio de sesi\xf3n interactivo. Esto es \xfatil para CI/CD, scripts o aplicaciones que necesitan acceder a recursos de manera program\xe1tica."]}),"\n",(0,a.jsx)(n.h2,{id:"managing-personal-access-tokens",children:"Gesti\xf3n de tokens de acceso personal"}),"\n",(0,a.jsx)(n.h3,{id:"using-console",children:"Usando la Consola"}),"\n",(0,a.jsxs)(n.p,{children:["Puedes gestionar los tokens de acceso personal en la p\xe1gina de Detalles del Usuario de la ",(0,a.jsx)(s,{to:"/users",children:"Consola > Gesti\xf3n de usuarios"}),'. En la tarjeta "Autenticaci\xf3n", puedes ver la lista de tokens de acceso personal y crear nuevos.']}),"\n",(0,a.jsx)(n.h3,{id:"using-management-api",children:"Usando Management API"}),"\n",(0,a.jsxs)(n.p,{children:["Despu\xe9s de configurar el ",(0,a.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/",children:"Management API"}),", puedes usar los ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listuserpersonalaccesstokens",children:"endpoints de API"})," para crear, listar y eliminar tokens de acceso personal."]}),"\n",(0,a.jsx)(n.h2,{id:"use-pats-to-grant-access-tokens",children:"Usar PATs para otorgar tokens de acceso"}),"\n",(0,a.jsx)(n.p,{children:"Despu\xe9s de crear un PAT, puedes usarlo para otorgar tokens de acceso a tu aplicaci\xf3n utilizando el endpoint de intercambio de tokens."}),"\n",(0,a.jsx)(n.h3,{id:"request",children:"Solicitud"}),"\n",(0,a.jsxs)(n.p,{children:["La aplicaci\xf3n realiza una ",(0,a.jsx)(n.a,{href:"https://auth.wiki/authorization-code-flow#token-exchange-request",children:"solicitud de intercambio de tokens"})," al ",(0,a.jsx)(n.a,{href:"/integrate-logto/application-data-structure#token-endpoint",children:"endpoint de token"})," del inquilino con un tipo de concesi\xf3n especial usando el m\xe9todo HTTP POST. Los siguientes par\xe1metros se incluyen en el cuerpo de la entidad de la solicitud HTTP utilizando el formato ",(0,a.jsx)(n.code,{children:"application/x-www-form-urlencoded"}),"."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"client_id"}),": REQUERIDO. El ID del cliente de la aplicaci\xf3n."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"grant_type"}),": REQUERIDO. El valor de este par\xe1metro debe ser ",(0,a.jsx)(n.code,{children:"urn:ietf:params:oauth:grant-type:token-exchange"}),", lo que indica que se est\xe1 realizando un intercambio de tokens."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"resource"}),": OPCIONAL. El indicador de recurso, igual que otras solicitudes de token."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"scope"}),": OPCIONAL. Los alcances solicitados, igual que otras solicitudes de token."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"subject_token"}),": REQUERIDO. El PAT del usuario."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"subject_token_type"}),": REQUERIDO. El tipo de token de seguridad proporcionado en el par\xe1metro ",(0,a.jsx)(n.code,{children:"subject_token"}),". El valor de este par\xe1metro debe ser ",(0,a.jsx)(n.code,{children:"urn:logto:token-type:personal_access_token"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"response",children:"Respuesta"}),"\n",(0,a.jsxs)(n.p,{children:["Si la solicitud de intercambio de tokens es exitosa, el endpoint de token del inquilino devuelve un token de acceso que representa la identidad del usuario. La respuesta incluye los siguientes par\xe1metros en el cuerpo de la entidad de la respuesta HTTP utilizando el formato ",(0,a.jsx)(n.code,{children:"application/json"}),"."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"access_token"}),": REQUERIDO. El token de acceso del usuario, que es el mismo que otras solicitudes de token como ",(0,a.jsx)(n.code,{children:"authorization_code"})," o ",(0,a.jsx)(n.code,{children:"refresh_token"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"issued_token_type"}),": REQUERIDO. El tipo de token emitido. El valor de este par\xe1metro debe ser ",(0,a.jsx)(n.code,{children:"urn:ietf:params:oauth:token-type:access_token"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"token_type"}),": REQUERIDO. El tipo de token. El valor de este par\xe1metro debe ser ",(0,a.jsx)(n.code,{children:"Bearer"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"expires_in"}),": REQUERIDO. La duraci\xf3n en segundos del token de acceso."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"scope"}),": OPCIONAL. Los alcances del token de acceso."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example-token-exchange",children:"Ejemplo de intercambio de tokens"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"POST /oidc/token HTTP/1.1\nHost: tenant.logto.app\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Basic <base64(client-id:client-secret)>\n\ngrant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Atoken-exchange\n&scope=profile\n&subject_token=pat_W51arOqe7nynW75nWhvYogyc\n&subject_token_type=urn%3Alogto%3Atoken-type%3Apersonal_access_token\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "access_token": "eyJhbGci...zg",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "profile"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"El ejemplo de carga \xfatil del token de acceso:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jti": "iFtbZBeh2M1cTTBuKbHk4",\n  "sub": "123",\n  "iss": "https://tenant.logto.app/oidc",\n  "exp": 1672531200,\n  "iat": 1672527600,\n  "scope": "profile",\n  "client_id": "client-id"\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,a.jsx)(o,{href:"https://blog.logto.io/pat-and-api-keys",children:(0,a.jsx)(n.p,{children:"Tokens de Acceso Personal, Autenticaci\xf3n M\xe1quina a M\xe1quina y definici\xf3n de Claves de API y sus\nescenarios del mundo real"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var o=s(58101);const a={},t=o.createContext(a);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);