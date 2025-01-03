"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[80214],{60106:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-management/personal-access-token","title":"Token de acesso pessoal","description":"Tokens de acesso pessoal (PATs) fornecem uma maneira segura para os usu\xe1rios concederem token de acesso sem usar suas credenciais e login interativo. Isso \xe9 \xfatil para CI/CD, scripts ou aplicativos que precisam acessar recursos programaticamente.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/user-management/personal-access-token.mdx","sourceDirName":"user-management","slug":"/user-management/personal-access-token","permalink":"/pt-BR/user-management/personal-access-token","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/user-management/personal-access-token.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Pesquisa avan\xe7ada de usu\xe1rios","permalink":"/pt-BR/user-management/advanced-user-search"},"next":{"title":"Migra\xe7\xe3o de usu\xe1rios","permalink":"/pt-BR/user-management/user-migration"}}');var a=s(25105),t=s(79621);const r={sidebar_position:4},i="Token de acesso pessoal",c={},d=[{value:"Gerenciando tokens de acesso pessoal",id:"managing-personal-access-tokens",level:2},{value:"Usando o Console",id:"using-console",level:3},{value:"Usando Management API",id:"using-management-api",level:3},{value:"Usar PATs para conceder tokens de acesso",id:"use-pats-to-grant-access-tokens",level:2},{value:"Solicita\xe7\xe3o",id:"request",level:3},{value:"Resposta",id:"response",level:3},{value:"Exemplo de troca de token",id:"example-token-exchange",level:3},{value:"Recursos relacionados",id:"related-resources",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components},{CloudLink:s,Url:n}=o;return s||u("CloudLink",!0),n||u("Url",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"token-de-acesso-pessoal",children:"Token de acesso pessoal"})}),"\n",(0,a.jsxs)(o.p,{children:["Tokens de acesso pessoal (PATs) fornecem uma maneira segura para os usu\xe1rios concederem ",(0,a.jsx)(o.a,{href:"https://auth.wiki/access-token",children:"token de acesso"})," sem usar suas credenciais e login interativo. Isso \xe9 \xfatil para CI/CD, scripts ou aplicativos que precisam acessar recursos programaticamente."]}),"\n",(0,a.jsx)(o.h2,{id:"managing-personal-access-tokens",children:"Gerenciando tokens de acesso pessoal"}),"\n",(0,a.jsx)(o.h3,{id:"using-console",children:"Usando o Console"}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea pode gerenciar tokens de acesso pessoal na p\xe1gina de Detalhes do Usu\xe1rio do ",(0,a.jsx)(s,{to:"/users",children:"Console > Gerenciamento de usu\xe1rios"}),'. No cart\xe3o "Autentica\xe7\xe3o", voc\xea pode ver a lista de tokens de acesso pessoal e criar novos.']}),"\n",(0,a.jsx)(o.h3,{id:"using-management-api",children:"Usando Management API"}),"\n",(0,a.jsxs)(o.p,{children:["Ap\xf3s configurar o ",(0,a.jsx)(o.a,{href:"/integrate-logto/interact-with-management-api/",children:"Management API"}),", voc\xea pode usar os ",(0,a.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listuserpersonalaccesstokens",children:"endpoints da API"})," para criar, listar e excluir tokens de acesso pessoal."]}),"\n",(0,a.jsx)(o.h2,{id:"use-pats-to-grant-access-tokens",children:"Usar PATs para conceder tokens de acesso"}),"\n",(0,a.jsx)(o.p,{children:"Ap\xf3s criar um PAT, voc\xea pode us\xe1-lo para conceder tokens de acesso ao seu aplicativo usando o endpoint de troca de token."}),"\n",(0,a.jsx)(o.h3,{id:"request",children:"Solicita\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O aplicativo faz uma ",(0,a.jsx)(o.a,{href:"https://auth.wiki/authorization-code-flow#token-exchange-request",children:"solicita\xe7\xe3o de troca de token"})," para o ",(0,a.jsx)(o.a,{href:"/integrate-logto/application-data-structure#token-endpoint",children:"endpoint de token"})," do locat\xe1rio com um tipo de concess\xe3o especial usando o m\xe9todo HTTP POST. Os seguintes par\xe2metros s\xe3o inclu\xeddos no corpo da entidade da solicita\xe7\xe3o HTTP usando o formato ",(0,a.jsx)(o.code,{children:"application/x-www-form-urlencoded"}),"."]}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"client_id"}),": OBRIGAT\xd3RIO. O ID do cliente do aplicativo."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"grant_type"}),": OBRIGAT\xd3RIO. O valor deste par\xe2metro deve ser ",(0,a.jsx)(o.code,{children:"urn:ietf:params:oauth:grant-type:token-exchange"}),", indicando que uma troca de token est\xe1 sendo realizada."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"resource"}),": OPCIONAL. O indicador de recurso, o mesmo que outras solicita\xe7\xf5es de token."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"scope"}),": OPCIONAL. Os escopos solicitados, o mesmo que outras solicita\xe7\xf5es de token."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"subject_token"}),": OBRIGAT\xd3RIO. O PAT do usu\xe1rio."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"subject_token_type"}),": OBRIGAT\xd3RIO. O tipo do token de seguran\xe7a fornecido no par\xe2metro ",(0,a.jsx)(o.code,{children:"subject_token"}),". O valor deste par\xe2metro deve ser ",(0,a.jsx)(o.code,{children:"urn:logto:token-type:personal_access_token"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"response",children:"Resposta"}),"\n",(0,a.jsxs)(o.p,{children:["Se a solicita\xe7\xe3o de troca de token for bem-sucedida, o endpoint de token do locat\xe1rio retorna um token de acesso que representa a identidade do usu\xe1rio. A resposta inclui os seguintes par\xe2metros no corpo da entidade da resposta HTTP usando o formato ",(0,a.jsx)(o.code,{children:"application/json"}),"."]}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"access_token"}),": OBRIGAT\xd3RIO. O token de acesso do usu\xe1rio, que \xe9 o mesmo que outras solicita\xe7\xf5es de token, como ",(0,a.jsx)(o.code,{children:"authorization_code"})," ou ",(0,a.jsx)(o.code,{children:"refresh_token"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"issued_token_type"}),": OBRIGAT\xd3RIO. O tipo do token emitido. O valor deste par\xe2metro deve ser ",(0,a.jsx)(o.code,{children:"urn:ietf:params:oauth:token-type:access_token"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"token_type"}),": OBRIGAT\xd3RIO. O tipo do token. O valor deste par\xe2metro deve ser ",(0,a.jsx)(o.code,{children:"Bearer"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"expires_in"}),": OBRIGAT\xd3RIO. O tempo de vida em segundos do token de acesso."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.code,{children:"scope"}),": OPCIONAL. Os escopos do token de acesso."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"example-token-exchange",children:"Exemplo de troca de token"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"POST /oidc/token HTTP/1.1\nHost: tenant.logto.app\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Basic <base64(client-id:client-secret)>\n\ngrant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Atoken-exchange\n&scope=profile\n&subject_token=pat_W51arOqe7nynW75nWhvYogyc\n&subject_token_type=urn%3Alogto%3Atoken-type%3Apersonal_access_token\n"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "access_token": "eyJhbGci...zg",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "profile"\n}\n'})}),"\n",(0,a.jsx)(o.p,{children:"O exemplo de payload do token de acesso:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'{\n  "jti": "iFtbZBeh2M1cTTBuKbHk4",\n  "sub": "123",\n  "iss": "https://tenant.logto.app/oidc",\n  "exp": 1672531200,\n  "iat": 1672527600,\n  "scope": "profile",\n  "client_id": "client-id"\n}\n'})}),"\n",(0,a.jsx)(o.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,a.jsx)(n,{href:"https://blog.logto.io/pat-and-api-keys",children:(0,a.jsx)(o.p,{children:"Tokens de Acesso Pessoal, Autentica\xe7\xe3o M\xe1quina para M\xe1quina e defini\xe7\xe3o de Chaves de API e seus\ncen\xe1rios do mundo real"})})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function u(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>i});var n=s(58101);const a={},t=n.createContext(a);function r(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);