"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[22011],{24008:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"authorization/role-based-access-control/configure-permissions","title":"Configurar permiss\xf5es","description":"Configurar permiss\xf5es de API via Logto Console \\\\","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-permissions.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/configure-permissions","permalink":"/pt-BR/authorization/role-based-access-control/configure-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-permissions.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Controle de acesso baseado em papel","permalink":"/pt-BR/authorization/role-based-access-control/"},"next":{"title":"Configurar pap\xe9is","permalink":"/pt-BR/authorization/role-based-access-control/configure-roles"}}');var i=r(25105),n=r(79621);const t={sidebar_position:1},a="Configurar permiss\xf5es",c={},d=[{value:"Configurar permiss\xf5es de API via Logto Console",id:"configure-api-permissions-via-logto-console",level:2},{value:"Configurar permiss\xf5es de API via Logto Management API",id:"configure-api-permissions-via-logto-management-api",level:2}];function p(e){const o={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{CloudLink:r}=o;return r||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"configurar-permiss\xf5es",children:"Configurar permiss\xf5es"})}),"\n",(0,i.jsx)(o.h2,{id:"configure-api-permissions-via-logto-console",children:"Configurar permiss\xf5es de API via Logto Console"}),"\n",(0,i.jsxs)(o.p,{children:["As permiss\xf5es s\xe3o definidas no n\xedvel ",(0,i.jsx)(o.strong,{children:"do recurso de API (API resource)"}),". Navegue at\xe9 o ",(0,i.jsx)(r,{to:"/api-resources",children:"Console > Recursos de API"}),', clique no recurso de API que voc\xea deseja gerenciar e, em seguida, v\xe1 para a aba "Permiss\xf5es".']}),"\n",(0,i.jsx)(o.p,{children:"\xc9 importante fornecer um nome e detalhes para a permiss\xe3o, pois isso facilitar\xe1 a identifica\xe7\xe3o e o gerenciamento das permiss\xf5es."}),"\n",(0,i.jsx)(o.h2,{id:"configure-api-permissions-via-logto-management-api",children:"Configurar permiss\xf5es de API via Logto Management API"}),"\n",(0,i.jsxs)(o.p,{children:["Gerencie usando o Logto Management API. Fa\xe7a uma chamada para o endpoint relativo. Confira esta ",(0,i.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"refer\xeancia"}),"."]}),"\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"m\xe9todo"}),(0,i.jsx)(o.th,{children:"caminho"}),(0,i.jsx)(o.th,{children:"descri\xe7\xe3o"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"GET"}),(0,i.jsx)(o.td,{children:(0,i.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"/api/resources/{resourceId}/scopes"})}),(0,i.jsx)(o.td,{children:"Obter escopos definidos para um recurso de API."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"POST"}),(0,i.jsx)(o.td,{children:(0,i.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-createresourcescope",children:"/api/resources/{resourceId}/scopes"})}),(0,i.jsx)(o.td,{children:"Criar um novo escopo para um recurso de API."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"DELETE"}),(0,i.jsx)(o.td,{children:(0,i.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-deleteresourcescope",children:"/api/resources/{resourceId}/scopes/{scopeId}"})}),(0,i.jsx)(o.td,{children:"Excluir um escopo de recurso de API do recurso fornecido."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"PATCH"}),(0,i.jsx)(o.td,{children:(0,i.jsx)(o.a,{href:"https://openapi.logto.io/operation/operation-updateresourcescope",children:"/api/resources/{resourceId}/scopes/{scopeId}"})}),(0,i.jsx)(o.td,{children:"Atualizar um escopo de recurso de API para o recurso fornecido. Este m\xe9todo realiza uma atualiza\xe7\xe3o parcial."})]})]})]})]})}function l(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},79621:(e,o,r)=>{r.d(o,{R:()=>t,x:()=>a});var s=r(58101);const i={},n=s.createContext(i);function t(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);