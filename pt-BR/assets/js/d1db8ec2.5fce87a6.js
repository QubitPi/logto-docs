"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[96890],{11733:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"connectors/sms-connectors/sms-templates","title":"Modelos de SMS","description":"Logto fornece quatro modelos diferentes para personalizar o conte\xfado de SMS, que s\xe3o categorizados com base no tipo de uso: Registro, Login, EsqueceuSenha e Gen\xe9rico. \xc9 altamente recomend\xe1vel que voc\xea use diferentes modelos para v\xe1rios casos de uso, ou pode atingir o limite de taxa, levando a uma interrup\xe7\xe3o tempor\xe1ria do seu servi\xe7o.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/connectors/sms-connectors/sms-templates.mdx","sourceDirName":"connectors/sms-connectors","slug":"/connectors/sms-connectors/sms-templates","permalink":"/pt-BR/connectors/sms-connectors/sms-templates","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/connectors/sms-connectors/sms-templates.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"sms-templates","title":"Modelos de SMS","sidebar_label":"Modelos de SMS","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Conectores SMS","permalink":"/pt-BR/connectors/sms-connectors/"},"next":{"title":"Conectores sociais","permalink":"/pt-BR/connectors/social-connectors"}}');var t=s(25105),r=s(79621);const i={id:"sms-templates",title:"Modelos de SMS",sidebar_label:"Modelos de SMS",sidebar_position:2},d=void 0,a={},c=[{value:"Tipos de modelos de SMS e exemplos",id:"sms-template-types-and-examples",level:2}];function l(e){const o={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Logto fornece quatro modelos diferentes para personalizar o conte\xfado de SMS, que s\xe3o categorizados com base no tipo de uso: Registro, Login, EsqueceuSenha e Gen\xe9rico. \xc9 altamente recomend\xe1vel que voc\xea use diferentes modelos para v\xe1rios casos de uso, ou pode atingir o limite de taxa, levando a uma interrup\xe7\xe3o tempor\xe1ria do seu servi\xe7o."}),"\n",(0,t.jsx)(o.h2,{id:"sms-template-types-and-examples",children:"Tipos de modelos de SMS e exemplos"}),"\n",(0,t.jsx)(o.p,{children:"Aqui est\xe3o alguns exemplos apenas para refer\xeancia:"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Uso"}),(0,t.jsx)(o.th,{children:"Cen\xe1rio"}),(0,t.jsx)(o.th,{children:"Exemplo de Modelo"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Registro"}),(0,t.jsx)(o.td,{children:"Usu\xe1rios criam uma conta usando seu email e a verificam inserindo um c\xf3digo de verifica\xe7\xe3o enviado pelo Logto para seu email."}),(0,t.jsxs)(o.td,{children:["Seu c\xf3digo de verifica\xe7\xe3o de inscri\xe7\xe3o do Logto \xe9 ",(0,t.jsx)(o.code,{children:"{{code}}"}),". O c\xf3digo permanecer\xe1 ativo por 10 minutos."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Login"}),(0,t.jsx)(o.td,{children:"Usu\xe1rios fazem login usando seu email e verificam inserindo o c\xf3digo de verifica\xe7\xe3o em vez de inserir uma senha."}),(0,t.jsxs)(o.td,{children:["Seu c\xf3digo de verifica\xe7\xe3o de login do Logto \xe9 ",(0,t.jsx)(o.code,{children:"{{code}}"}),". O c\xf3digo permanecer\xe1 ativo por 10 minutos."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"EsqueceuSenha"}),(0,t.jsx)(o.td,{children:"Se os usu\xe1rios esquecerem sua senha durante o login, eles podem optar por verificar sua identidade usando o email que j\xe1 verificaram com Logto."}),(0,t.jsxs)(o.td,{children:["Seu c\xf3digo de verifica\xe7\xe3o de altera\xe7\xe3o de senha do Logto \xe9 ",(0,t.jsx)(o.code,{children:"{{code}}"}),". O c\xf3digo permanecer\xe1 ativo por 10 minutos."]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Gen\xe9rico"}),(0,t.jsx)(o.td,{children:"Este modelo pode ser usado como uma op\xe7\xe3o de backup geral para v\xe1rios cen\xe1rios, incluindo testar configura\xe7\xf5es de conectores e assim por diante."}),(0,t.jsxs)(o.td,{children:["Seu c\xf3digo de verifica\xe7\xe3o do Logto \xe9 ",(0,t.jsx)(o.code,{children:"{{code}}"}),". O c\xf3digo permanecer\xe1 ativo por 10 minutos."]})]})]})]}),"\n",(0,t.jsx)(o.p,{children:"\xc9 importante entender esses par\xe2metros:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"O c\xf3digo de verifica\xe7\xe3o \xe9 v\xe1lido por 10 minutos. Atualmente, n\xe3o suportamos personaliza\xe7\xe3o no tempo de expira\xe7\xe3o."}),"\n",(0,t.jsxs)(o.li,{children:["Logto substituir\xe1 o espa\xe7o reservado ",(0,t.jsx)(o.code,{children:"{{code}}"})," no modelo de SMS por um c\xf3digo de verifica\xe7\xe3o. Portanto, certifique-se de que o modelo tenha um espa\xe7o reservado reservado."]}),"\n"]}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"Alguns pa\xedses e regi\xf5es podem n\xe3o permitir o envio de conte\xfado n\xe3o aprovado via SMS devido a requisitos de conformidade. Os modelos de SMS precisam ser registrados e aprovados pelo provedor de SMS antes de serem usados. Nesses casos, o conte\xfado pode ser indexado pelo ID do modelo para o modelo correspondente."})})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},79621:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>d});var n=s(58101);const t={},r=n.createContext(t);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);