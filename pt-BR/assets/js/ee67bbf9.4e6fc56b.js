"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[12947],{83333:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"integrate-logto/integrate-logto-into-your-application/understand-authentication-flow","title":"Compreender o fluxo de autentica\xe7\xe3o","description":"Logto \xe9 constru\xeddo com base nos padr\xf5es OAuth 2.0 e OpenID Connect (OIDC). Compreender esses padr\xf5es de autentica\xe7\xe3o tornar\xe1 o processo de integra\xe7\xe3o mais suave e direto.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow.mdx","sourceDirName":"integrate-logto/integrate-logto-into-your-application","slug":"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow","permalink":"/pt-BR/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Integrar Logto ao seu aplicativo","permalink":"/pt-BR/integrate-logto/integrate-logto-into-your-application/"},"next":{"title":"Aplicativo Protegido","permalink":"/pt-BR/integrate-logto/protected-app"}}');var i=t(25105),n=t(79621);const r={},s="Compreender o fluxo de autentica\xe7\xe3o",c={},d=[{value:"Fluxo de autentica\xe7\xe3o do usu\xe1rio",id:"user-authentication-flow",level:3},{value:"Fluxo de autentica\xe7\xe3o m\xe1quina para m\xe1quina",id:"machine-to-machine-authentication-flow",level:3},{value:"Recursos relacionados",id:"related-resources",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Url:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"compreender-o-fluxo-de-autentica\xe7\xe3o",children:"Compreender o fluxo de autentica\xe7\xe3o"})}),"\n",(0,i.jsxs)(o.p,{children:["Logto \xe9 constru\xeddo com base nos padr\xf5es ",(0,i.jsx)(o.a,{href:"https://auth.wiki/oauth-2.0",children:"OAuth 2.0"})," e ",(0,i.jsx)(o.a,{href:"https://auth.wiki/openid-connect",children:"OpenID Connect (OIDC)"}),". Compreender esses padr\xf5es de autentica\xe7\xe3o tornar\xe1 o processo de integra\xe7\xe3o mais suave e direto."]}),"\n",(0,i.jsx)(o.h3,{id:"user-authentication-flow",children:"Fluxo de autentica\xe7\xe3o do usu\xe1rio"}),"\n",(0,i.jsx)(o.p,{children:"Veja o que acontece quando um usu\xe1rio faz login com Logto:"}),"\n",(0,i.jsx)(o.mermaid,{value:"sequenceDiagram\n    autonumber\n    participant User\n    participant Application\n    participant Logto\n\n    User->>Application: Clicar no bot\xe3o de login\n    Application->>Logto: Iniciar login e redirecionar para a p\xe1gina de login do Logto\n    User->>Logto: Inserir credenciais para autentica\xe7\xe3o\n    Logto->>Application: Completar login e redirecionar de volta\n    Application->>Logto: Processar callback e solicitar token de acesso e informa\xe7\xf5es do usu\xe1rio\n    Logto->>Application: Retornar token de acesso e informa\xe7\xf5es do usu\xe1rio\n    Application->>User: Login bem-sucedido"}),"\n",(0,i.jsx)(o.p,{children:"Neste fluxo, v\xe1rios conceitos-chave s\xe3o essenciais para o processo de integra\xe7\xe3o:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Application"}),": Isso representa seu aplicativo no Logto. Voc\xea criar\xe1 uma configura\xe7\xe3o de aplicativo no Logto Console para estabelecer uma conex\xe3o entre seu aplicativo real e os servi\xe7os Logto. Saiba mais sobre ",(0,i.jsx)(o.a,{href:"/integrate-logto/application-data-structure/#introduction",children:"Application"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Redirect URI"}),": Ap\xf3s os usu\xe1rios completarem a autentica\xe7\xe3o na p\xe1gina de login do Logto, Logto os redireciona de volta para seu aplicativo atrav\xe9s deste URI. Voc\xea precisar\xe1 configurar o Redirect URI nas configura\xe7\xf5es do seu Application. Para mais detalhes, veja ",(0,i.jsx)(o.a,{href:"/integrate-logto/application-data-structure/#redirect-uris",children:"Redirect URIs"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"Handle sign-in callback"}),": Quando Logto redireciona os usu\xe1rios de volta para seu aplicativo, seu app precisa processar os dados de autentica\xe7\xe3o e solicitar tokens de acesso e informa\xe7\xf5es do usu\xe1rio. N\xe3o se preocupe - o Logto SDK cuida disso automaticamente."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Esta vis\xe3o geral cobre o essencial para uma integra\xe7\xe3o r\xe1pida. Para uma compreens\xe3o mais profunda, confira nosso guia ",(0,i.jsx)(o.a,{href:"/concepts/sign-in-experience/",children:"Sign-in experience explained"}),"."]}),"\n",(0,i.jsx)(o.h3,{id:"machine-to-machine-authentication-flow",children:"Fluxo de autentica\xe7\xe3o m\xe1quina para m\xe1quina"}),"\n",(0,i.jsxs)(o.p,{children:["Logto fornece o tipo de ",(0,i.jsx)(o.a,{href:"/quick-starts/m2m",children:"aplicativo m\xe1quina para m\xe1quina (M2M)"})," para habilitar a autentica\xe7\xe3o direta entre servi\xe7os, com base no ",(0,i.jsx)(o.a,{href:"https://auth.wiki/client-credentials-flow",children:"fluxo de credenciais do cliente OAuth 2.0"}),":"]}),"\n",(0,i.jsx)(o.mermaid,{value:"sequenceDiagram\n    participant Service A\n    participant Logto\n    participant Service B\n\n    Service A->>Logto: Solicitar token de acesso com credenciais do cliente\n    Logto->>Service A: Retornar token de acesso\n    Service A->>Service B: Solicita\xe7\xe3o de API com token de acesso\n    Service B->>Logto: Validar token\n    Logto->>Service B: Resultado da valida\xe7\xe3o do token\n    Service B->>Service A: Resposta da API"}),"\n",(0,i.jsx)(o.p,{children:"Este fluxo de autentica\xe7\xe3o m\xe1quina para m\xe1quina (M2M) \xe9 projetado para aplicativos que precisam se comunicar diretamente com recursos sem intera\xe7\xe3o do usu\xe1rio (portanto, sem UI), como um servi\xe7o de API atualizando dados de usu\xe1rio no Logto ou um servi\xe7o de estat\xedsticas extraindo pedidos di\xe1rios."}),"\n",(0,i.jsxs)(o.p,{children:["Neste fluxo, os servi\xe7os se autenticam usando credenciais do cliente - uma combina\xe7\xe3o de ",(0,i.jsx)(o.a,{href:"/integrate-logto/application-data-structure/#application-id",children:"Application ID"})," e ",(0,i.jsx)(o.a,{href:"/integrate-logto/application-data-structure/#application-secret",children:"Application Secret"})," que identifica e autentica exclusivamente o servi\xe7o. Essas credenciais servem como a identidade do servi\xe7o ao solicitar ",(0,i.jsx)(o.a,{href:"https://auth.wiki/access-token",children:"tokens de acesso"})," do Logto."]}),"\n",(0,i.jsx)(o.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,i.jsx)(t,{href:"https://blog.logto.io/secure-cloud-apps-with-oauth-and-openid-connect",children:(0,i.jsx)(o.p,{children:"Blog: Proteja aplicativos baseados em nuvem com OAuth 2.0 e OpenID Connect"})}),"\n",(0,i.jsx)(t,{href:"https://blog.logto.io/sso-is-better",children:(0,i.jsx)(o.p,{children:"Por que a autentica\xe7\xe3o \xfanica (SSO) para m\xfaltiplos aplicativos \xe9 melhor"})}),"\n",(0,i.jsx)(t,{href:"https://blog.logto.io/centralized-identity-system",children:(0,i.jsx)(o.p,{children:"Por que voc\xea precisa de um sistema de identidade centralizado para um neg\xf3cio com m\xfaltiplos\naplicativos"})})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},79621:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>s});var a=t(58101);const i={},n=a.createContext(i);function r(e){const o=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);