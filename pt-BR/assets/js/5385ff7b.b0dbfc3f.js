"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[23441],{63884:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"end-user-flows/security-verification/by-management-api","title":"Implementar verifica\xe7\xe3o de seguran\xe7a pela Management API","description":"Verifica\xe7\xe3o de senha \\\\","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/security-verification/by-management-api.mdx","sourceDirName":"end-user-flows/security-verification","slug":"/end-user-flows/security-verification/by-management-api","permalink":"/pt-BR/end-user-flows/security-verification/by-management-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/end-user-flows/security-verification/by-management-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Verifica\xe7\xe3o de seguran\xe7a","permalink":"/pt-BR/end-user-flows/security-verification/"},"next":{"title":"Experi\xeancia da organiza\xe7\xe3o","permalink":"/pt-BR/end-user-flows/organization-experience/"}}');var r=a(25105),o=a(79621);const t={sidebar_position:1},s="Implementar verifica\xe7\xe3o de seguran\xe7a pela Management API",d={},c=[{value:"Verifica\xe7\xe3o de senha",id:"password-verification",level:2},{value:"Verifica\xe7\xe3o de c\xf3digo \xfanico por email / SMS",id:"emailsms-one-time-code-verification",level:2}];function l(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"implementar-verifica\xe7\xe3o-de-seguran\xe7a-pela-management-api",children:"Implementar verifica\xe7\xe3o de seguran\xe7a pela Management API"})}),"\n",(0,r.jsx)(i.h2,{id:"password-verification",children:"Verifica\xe7\xe3o de senha"}),"\n",(0,r.jsx)(i.p,{children:"Quando os usu\xe1rios tentam alterar sua senha, o sistema deve solicitar que eles insiram novamente sua senha atual para verificar sua identidade. Esta etapa garante que apenas o titular autorizado da conta possa alterar a senha, evitando o acesso n\xe3o autorizado \xe0 conta."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-verifyuserpassword",children:"/api/users/{userId}/password/verify"})}),(0,r.jsx)(i.td,{children:"Verificar a senha atual do usu\xe1rio pelo ID do usu\xe1rio."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"emailsms-one-time-code-verification",children:"Verifica\xe7\xe3o de c\xf3digo \xfanico por email / SMS"}),"\n",(0,r.jsx)(i.p,{children:"Envie um c\xf3digo de verifica\xe7\xe3o para o email ou n\xfamero de telefone do usu\xe1rio e solicite que ele insira o c\xf3digo para confirmar sua identidade. Esses endpoints podem ser usados para verificar a identidade de um usu\xe1rio ou para confirmar a propriedade de um email ou n\xfamero de telefone espec\xedfico. Esta etapa de verifica\xe7\xe3o \xe9 altamente recomendada quando um usu\xe1rio tenta vincular um novo endere\xe7o de email ou n\xfamero de telefone \xe0 sua conta, garantindo a autenticidade das informa\xe7\xf5es fornecidas."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"m\xe9todo"}),(0,r.jsx)(i.th,{children:"caminho"}),(0,r.jsx)(i.th,{children:"descri\xe7\xe3o"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-createverificationcode",children:"/api/verification/verification-codes"})}),(0,r.jsx)(i.td,{children:"Enviar c\xf3digo de verifica\xe7\xe3o por email ou n\xfamero de telefone."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"POST"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"https://openapi.logto.io/operation/operation-verifyverificationcode",children:"/api/verification/verification-codes/verify"})}),(0,r.jsx)(i.td,{children:"Verificar email ou n\xfamero de telefone pelo c\xf3digo de verifica\xe7\xe3o."})]})]})]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},79621:(e,i,a)=>{a.d(i,{R:()=>t,x:()=>s});var n=a(58101);const r={},o=n.createContext(r);function t(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);