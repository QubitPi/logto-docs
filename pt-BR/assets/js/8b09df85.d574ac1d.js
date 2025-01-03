"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11291],{758:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"end-user-flows/sign-up-and-sign-in/disable-user-registration","title":"Desativar registro de usu\xe1rio","description":"Em algumas circunst\xe2ncias, voc\xea pode querer restringir o registro de usu\xe1rios para seu aplicativo. Logto permite que voc\xea desative o registro de usu\xe1rios an\xf4nimos e restrinja o login de usu\xe1rios apenas para aqueles convidados por um administrador.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/disable-user-registration.mdx","sourceDirName":"end-user-flows/sign-up-and-sign-in","slug":"/end-user-flows/sign-up-and-sign-in/disable-user-registration","permalink":"/pt-BR/end-user-flows/sign-up-and-sign-in/disable-user-registration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/disable-user-registration.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Termos e privacidade","permalink":"/pt-BR/end-user-flows/sign-up-and-sign-in/terms-and-privacy"},"next":{"title":"SSO corporativo (Enterprise SSO)","permalink":"/pt-BR/end-user-flows/enterprise-sso/"}}');var n=i(25105),a=i(79621);const s={sidebar_position:6},t="Desativar registro de usu\xe1rio",d={},u=[{value:"Implementar um fluxo de registro apenas por convite",id:"implement-an-invitation-only-sign-up-flow",level:2},{value:"Op\xe7\xe3o 1: Convidar usu\xe1rios por email",id:"option-1-invite-users-via-email",level:3},{value:"Op\xe7\xe3o 2: Notificar usu\xe1rios sobre registro manual",id:"option-2-notify-users-on-manual-registration",level:3},{value:"Experi\xeancia do usu\xe1rio para registro apenas por convite",id:"user-experience-for-invitation-only-sign-up",level:2},{value:"Recursos relacionados",id:"related-resources",level:2}];function l(e){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{CloudLink:i,Url:r}=o;return i||p("CloudLink",!0),r||p("Url",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"desativar-registro-de-usu\xe1rio",children:"Desativar registro de usu\xe1rio"})}),"\n",(0,n.jsx)(o.p,{children:"Em algumas circunst\xe2ncias, voc\xea pode querer restringir o registro de usu\xe1rios para seu aplicativo. Logto permite que voc\xea desative o registro de usu\xe1rios an\xf4nimos e restrinja o login de usu\xe1rios apenas para aqueles convidados por um administrador."}),"\n",(0,n.jsx)(o.p,{children:"Para desativar o registro de usu\xe1rios finais, siga estas etapas:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Navegue at\xe9 a p\xe1gina ",(0,n.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Console > Experi\xeancia de login > Registro e login"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Na se\xe7\xe3o ",(0,n.jsx)(o.strong,{children:"Op\xe7\xf5es avan\xe7adas"}),", desative o interruptor ",(0,n.jsx)(o.strong,{children:"Habilitar registro de usu\xe1rio"})," para desativar o registro de usu\xe1rio. (Habilitado por padr\xe3o)"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Uma vez que o registro de usu\xe1rio \xe9 desativado:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'O link "Criar conta" \xe9 removido da p\xe1gina de login.'}),"\n",(0,n.jsx)(o.li,{children:"A p\xe1gina de registro \xe9 desativada, e os usu\xe1rios que a visitarem ser\xe3o redirecionados para a p\xe1gina de login."}),"\n",(0,n.jsx)(o.li,{children:'O fluxo de registro social e SSO corporativo tamb\xe9m \xe9 desativado. Usu\xe1rios com contas sociais n\xe3o registradas receber\xe3o um erro de "conta n\xe3o encontrada" ap\xf3s a autentica\xe7\xe3o social.'}),"\n",(0,n.jsx)(o.li,{children:"O recurso de vincula\xe7\xe3o de conta social ainda est\xe1 dispon\xedvel para usu\xe1rios que possuem uma conta de email ou n\xfamero de telefone correspondente no sistema."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"implement-an-invitation-only-sign-up-flow",children:"Implementar um fluxo de registro apenas por convite"}),"\n",(0,n.jsx)(o.p,{children:"Logto n\xe3o fornece um fluxo de convite embutido. No entanto, voc\xea pode facilmente implementar um fluxo de registro apenas por convite utilizando a Management API de usu\xe1rios no Logto."}),"\n",(0,n.jsx)(o.h3,{id:"option-1-invite-users-via-email",children:"Op\xe7\xe3o 1: Convidar usu\xe1rios por email"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Desative o registro de usu\xe1rio no ",(0,n.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Console > Experi\xeancia de login"}),"."]}),"\n",(0,n.jsx)(o.li,{children:"Crie um formul\xe1rio de registro de usu\xe1rio baseado em convite personalizado em seu aplicativo."}),"\n",(0,n.jsx)(o.li,{children:"Envie um email de convite para o usu\xe1rio com um link de convite \xfanico."}),"\n",(0,n.jsxs)(o.li,{children:["Quando o usu\xe1rio clicar no link de registro, fa\xe7a com que seu aplicativo chame a ",(0,n.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-createuser",children:"Logto Management API"})," para criar a conta do usu\xe1rio."]}),"\n",(0,n.jsxs)(o.li,{children:["Ap\xf3s a cria\xe7\xe3o da conta do usu\xe1rio, redirecione-o para a p\xe1gina de login ou redefini\xe7\xe3o de senha do Logto para completar o registro. Veja ",(0,n.jsx)(o.a,{href:"/end-user-flows/authentication-parameters/",children:"Par\xe2metros de autentica\xe7\xe3o"})," para orienta\xe7\xf5es sobre como personalizar a primeira tela e pr\xe9-preencher o email do usu\xe1rio para agilizar o processo de login."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"option-2-notify-users-on-manual-registration",children:"Op\xe7\xe3o 2: Notificar usu\xe1rios sobre registro manual"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Desative o registro de usu\xe1rio no Console do Logto."}),"\n",(0,n.jsxs)(o.li,{children:["Crie manualmente contas de usu\xe1rio no ",(0,n.jsx)(i,{to:"/users",children:"Console > Gerenciamento de usu\xe1rios"})," ou via ",(0,n.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-createuser",children:"Management API"}),"."]}),"\n",(0,n.jsx)(o.li,{children:"Notifique os usu\xe1rios por email que suas contas foram criadas."}),"\n",(0,n.jsxs)(o.li,{children:["Redirecione os usu\xe1rios para a p\xe1gina de login ou redefini\xe7\xe3o de senha do Logto para completar o registro. Veja ",(0,n.jsx)(o.a,{href:"/end-user-flows/authentication-parameters/",children:"Par\xe2metros de autentica\xe7\xe3o"})," para orienta\xe7\xf5es sobre como personalizar a primeira tela e pr\xe9-preencher o email do usu\xe1rio para agilizar o processo de login."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"user-experience-for-invitation-only-sign-up",children:"Experi\xeancia do usu\xe1rio para registro apenas por convite"}),"\n",(0,n.jsx)(o.p,{children:"Quando o registro de usu\xe1rio \xe9 desativado, os usu\xe1rios que visitarem a p\xe1gina de registro ser\xe3o redirecionados para a p\xe1gina de login. O usu\xe1rio s\xf3 pode ser criado por um administrador ou usando a Management API. Dependendo das configura\xe7\xf5es de m\xe9todo de registro e login que voc\xea configurou, os usu\xe1rios podem ter uma experi\xeancia diferente ao fazer login:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Login com email ou n\xfamero de telefone via c\xf3digo de verifica\xe7\xe3o"}),": Crie a conta do usu\xe1rio com um ",(0,n.jsx)(o.strong,{children:"Endere\xe7o de email"})," ou ",(0,n.jsx)(o.strong,{children:"N\xfamero de telefone"}),". Habilite o m\xe9todo de login por c\xf3digo de verifica\xe7\xe3o de email ou n\xfamero de telefone. Uma vez que o usu\xe1rio \xe9 criado, ele pode fazer login diretamente com seu email ou n\xfamero de telefone usando o m\xe9todo de autentica\xe7\xe3o por c\xf3digo de verifica\xe7\xe3o."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Login social com email ou n\xfamero de telefone espec\xedfico"}),": Crie a conta do usu\xe1rio com um ",(0,n.jsx)(o.strong,{children:"Endere\xe7o de email"})," ou ",(0,n.jsx)(o.strong,{children:"N\xfamero de telefone"})," associado \xe0 sua conta social. Crie e habilite a conex\xe3o social para o provedor social espec\xedfico. Habilite o recurso de ",(0,n.jsx)(o.a,{href:"/end-user-flows/sign-up-and-sign-in/social-sign-in#account-linking",children:(0,n.jsx)(o.strong,{children:"Vincula\xe7\xe3o autom\xe1tica de conta"})})," para vincular automaticamente a identidade social com a conta do usu\xe1rio com base no email ou n\xfamero de telefone correspondente. Uma vez que o usu\xe1rio \xe9 criado, ele pode fazer login diretamente com sua conta social que corresponde ao email ou n\xfamero de telefone."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Nome de usu\xe1rio / Email / N\xfamero de telefone com Senha"}),": Crie uma conta de usu\xe1rio com um ",(0,n.jsx)(o.strong,{children:"Nome de usu\xe1rio"}),", ",(0,n.jsx)(o.strong,{children:"Endere\xe7o de email"})," ou ",(0,n.jsx)(o.strong,{children:"N\xfamero de telefone"}),", e habilite o identificador correspondente para login baseado em senha.","\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Com uma senha pr\xe9-definida: Defina uma senha durante a cria\xe7\xe3o da conta e compartilhe-a de forma segura com o usu\xe1rio. O usu\xe1rio pode ent\xe3o fazer login diretamente usando seu nome de usu\xe1rio, email ou n\xfamero de telefone junto com a senha pr\xe9-definida, e redefinir a senha se desejar."}),"\n",(0,n.jsxs)(o.li,{children:["Sem uma senha pr\xe9-definida: Crie a conta sem uma senha e solicite ao usu\xe1rio que defina uma ao ativar a conta. (Um ",(0,n.jsx)(o.strong,{children:"Endere\xe7o de email"})," ou ",(0,n.jsx)(o.strong,{children:"N\xfamero de telefone"})," \xe9 necess\xe1rio para o fluxo de redefini\xe7\xe3o de senha.) Ap\xf3s criar o usu\xe1rio, redirecione-o para a p\xe1gina de redefini\xe7\xe3o de senha com seu email ou n\xfamero de telefone pr\xe9-preenchido. Para orienta\xe7\xf5es sobre como redirecionar usu\xe1rios para a p\xe1gina de redefini\xe7\xe3o de senha com detalhes pr\xe9-preenchidos, consulte os ",(0,n.jsx)(o.a,{href:"/end-user-flows/authentication-parameters/",children:"Par\xe2metros de autentica\xe7\xe3o"}),". Uma vez que o usu\xe1rio define uma nova senha, ele pode fazer login diretamente com seu nome de usu\xe1rio, email ou n\xfamero de telefone e a nova senha."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,n.jsx)(r,{href:"https://blog.logto.io/invitation-only-sign-up",children:(0,n.jsx)(o.p,{children:"Blog: Como configurar registro apenas por convite no Logto"})})]})}function c(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function p(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,o,i)=>{i.d(o,{R:()=>s,x:()=>t});var r=i(58101);const n={},a=r.createContext(n);function s(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);