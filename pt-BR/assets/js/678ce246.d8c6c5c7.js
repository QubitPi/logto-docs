"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[23126],{30154:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"end-user-flows/consent-screen","title":"Tela de consentimento","description":"O que \xe9 a tela de consentimento? \\\\","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/consent-screen.mdx","sourceDirName":"end-user-flows","slug":"/end-user-flows/consent-screen","permalink":"/pt-BR/end-user-flows/consent-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/consent-screen.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Login direto","permalink":"/pt-BR/end-user-flows/authentication-parameters/direct-sign-in"},"next":{"title":"Logout","permalink":"/pt-BR/end-user-flows/sign-out"}}');var t=s(25105),a=s(79621);const i={sidebar_position:5},r="Tela de consentimento",c={},d=[{value:"O que \xe9 a tela de consentimento?",id:"what-is-consent-screen",level:2},{value:"Quando o usu\xe1rio v\xea a tela de consentimento no Logto?",id:"when-does-user-see-the-consent-screen-in-logto",level:2},{value:"Como configurar a tela de consentimento?",id:"how-to-configure-the-consent-screen",level:2},{value:"Recursos relacionados",id:"related-resources",level:2}];function l(e){const o={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components},{Url:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"tela-de-consentimento",children:"Tela de consentimento"})}),"\n",(0,t.jsx)(o.h2,{id:"what-is-consent-screen",children:"O que \xe9 a tela de consentimento?"}),"\n",(0,t.jsx)(o.p,{children:'Imagine que voc\xea est\xe1 se inscrevendo no Logto usando sua conta do Google. Quando voc\xea clica no bot\xe3o "Entrar com Google", \xe9 redirecionado para a p\xe1gina de login do Google. Ap\xf3s inserir suas credenciais do Google, voc\xea ser\xe1 solicitado a conceder permiss\xe3o ao Logto para acessar as informa\xe7\xf5es da sua conta do Google. Esta \xe9 a tela de consentimento do usu\xe1rio.'}),"\n",(0,t.jsxs)(o.p,{children:["Esta p\xe1gina \xe9 o que chamamos de ",(0,t.jsx)(o.strong,{children:"tela de consentimento"})," ou ",(0,t.jsx)(o.strong,{children:"p\xe1gina de consentimento"})," do usu\xe1rio. \xc9 um fluxo padr\xe3o ",(0,t.jsx)(o.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications",children:"OIDC / OAuth 2.0"})," que permite aos usu\xe1rios conceder permiss\xf5es a ",(0,t.jsx)(o.a,{href:"/integrate-logto/third-party-applications",children:"aplicativos de terceiros"})," para acessar seus dados em seu nome. Seu principal objetivo \xe9 informar os usu\xe1rios sobre a coleta, processamento e uso de seus dados pessoais e buscar seu acordo ou consentimento expl\xedcito para essas atividades."]}),"\n",(0,t.jsxs)(o.p,{children:["Em uma tela de consentimento, os usu\xe1rios geralmente s\xe3o apresentados com ",(0,t.jsx)(o.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding#customize-the-branding-information",children:"informa\xe7\xf5es"})," sobre os tipos de dados que ser\xe3o coletados, como ser\xe3o usados e se ser\xe3o compartilhados com terceiros. Essas informa\xe7\xf5es s\xe3o cruciais para a transpar\xeancia, permitindo que os usu\xe1rios tomem decis\xf5es informadas sobre sua privacidade e seguran\xe7a de dados."]}),"\n",(0,t.jsxs)(o.p,{children:["P\xe1ginas de consentimento s\xe3o particularmente importantes no contexto de regulamenta\xe7\xf5es de privacidade, como o Regulamento Geral sobre a Prote\xe7\xe3o de Dados (",(0,t.jsx)(o.a,{href:"https://gdpr-info.eu/art-4-gdpr/",children:"GDPR"}),") na Uni\xe3o Europeia ou a Lei de Privacidade do Consumidor da Calif\xf3rnia (",(0,t.jsx)(o.a,{href:"https://oag.ca.gov/privacy/ccpa",children:"CCPA"}),") nos Estados Unidos, que exigem que as organiza\xe7\xf5es obtenham consentimento claro e afirmativo dos usu\xe1rios antes de processar suas informa\xe7\xf5es pessoais."]}),"\n",(0,t.jsx)(o.h2,{id:"when-does-user-see-the-consent-screen-in-logto",children:"Quando o usu\xe1rio v\xea a tela de consentimento no Logto?"}),"\n",(0,t.jsxs)(o.p,{children:["Como mencionado anteriormente, a tela de consentimento aparece quando os usu\xe1rios fazem login no Logto usando um provedor de identidade (IdP) de terceiros, como Google, Facebook ou Apple. Nesse cen\xe1rio, o Logto atua como o provedor de servi\xe7os (SP), solicitando acesso \xe0s informa\xe7\xf5es do usu\xe1rio do IdP. A tela de consentimento \xe9 geralmente apresentada quando o ",(0,t.jsx)(o.a,{href:"https://auth.wiki/service-provider",children:"SP"})," e o ",(0,t.jsx)(o.a,{href:"https://auth.wiki/identity-provider",children:"IdP"})," s\xe3o organiza\xe7\xf5es separadas, exigindo autoriza\xe7\xe3o do usu\xe1rio para facilitar o compartilhamento de dados."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Tela de consentimento Logto como SP",src:s(73292).A+"",width:"2750",height:"1328"})}),"\n",(0,t.jsxs)(o.p,{children:["Da mesma forma, no Logto, quando o Logto funciona como o IdP, a tela de consentimento \xe9 exibida quando os usu\xe1rios fazem login em um ",(0,t.jsx)(o.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications",children:(0,t.jsx)(o.strong,{children:"aplicativo de terceiros OIDC / OAuth"})})," integrado ao Logto. Esta tela informa os usu\xe1rios sobre os dados que o aplicativo est\xe1 solicitando e busca sua permiss\xe3o para prosseguir. Os usu\xe1rios podem revisar as permiss\xf5es solicitadas e decidir se concedem autoriza\xe7\xe3o ao aplicativo."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Tela de consentimento Logto como IdP",src:s(11856).A+"",width:"2502",height:"1392"})}),"\n",(0,t.jsx)(o.h2,{id:"how-to-configure-the-consent-screen",children:"Como configurar a tela de consentimento?"}),"\n",(0,t.jsx)(o.p,{children:"O fluxo de consentimento do Logto permite que voc\xea autorize logins de aplicativos de terceiros. Voc\xea pode personalizar a marca e as solicita\xe7\xf5es de permiss\xe3o para cada aplicativo de terceiros OIDC."}),"\n",(0,t.jsxs)(o.p,{children:["Saiba mais sobre como configurar o ",(0,t.jsx)(o.a,{href:"/integrate-logto/third-party-applications/",children:"aplicativo de terceiros"})," e configurar a ",(0,t.jsx)(o.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding/",children:"tela de consentimento"})," no Logto."]}),"\n",(0,t.jsx)(o.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,t.jsx)(n,{href:"https://www.youtube.com/watch?v=sW-C7SRt9OM",children:(0,t.jsx)(o.p,{children:"Transforme seu servi\xe7o em um IdP OIDC seguro equipado com tela de consentimento."})}),"\n",(0,t.jsx)(n,{href:"https://blog.logto.io/user-consent-screen",children:(0,t.jsx)(o.p,{children:"Introdu\xe7\xe3o \xe0 tela de consentimento do usu\xe1rio."})}),"\n",(0,t.jsx)(n,{href:"https://blog.logto.io/introducing-oidc-prompt",children:(0,t.jsx)(o.p,{children:"OIDC Prompt 101: Um guia simples para desenvolvedores"})})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11856:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/consent-screen-logto-as-idp-275ecb52736d0849cb8f1e5587c265d8.png"},73292:(e,o,s)=>{s.d(o,{A:()=>n});const n=s.p+"assets/images/consent-screen-logto-as-sp-adf12fcb5eef8db7f4b989b0376fa629.png"},79621:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>r});var n=s(58101);const t={},a=n.createContext(t);function i(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);