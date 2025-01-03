"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[71258],{20266:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"developers/webhooks/webhooks-request","title":"Solicita\xe7\xe3o de Webhooks","description":"Uma vez que um evento de hook v\xe1lido \xe9 emitido, o Logto encontrar\xe1 os webhooks correspondentes e enviar\xe1 uma solicita\xe7\xe3o POST por configura\xe7\xe3o de hook.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/webhooks-request","permalink":"/pt-BR/developers/webhooks/webhooks-request","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"webhooks-request","title":"Solicita\xe7\xe3o de Webhooks","sidebar_label":"Solicita\xe7\xe3o de Webhooks","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Eventos de Webhooks","permalink":"/pt-BR/developers/webhooks/webhooks-events"},"next":{"title":"Webhooks seguros","permalink":"/pt-BR/developers/webhooks/secure-webhooks"}}');var n=s(25105),i=s(79621);const r={id:"webhooks-request",title:"Solicita\xe7\xe3o de Webhooks",sidebar_label:"Solicita\xe7\xe3o de Webhooks",sidebar_position:4},o="Solicita\xe7\xe3o de Webhooks",a={},c=[{value:"Cabe\xe7alhos da solicita\xe7\xe3o",id:"request-headers",level:2},{value:"Corpo da solicita\xe7\xe3o de eventos de hook de intera\xe7\xe3o",id:"interaction-hook-events-request-body",level:2},{value:"Corpo da solicita\xe7\xe3o de eventos de muta\xe7\xe3o de dados",id:"data-mutation-hook-events-request-body",level:2},{value:"Campos padr\xe3o do corpo da solicita\xe7\xe3o",id:"standard-request-body-fields",level:3},{value:"Campos do corpo do contexto da API de intera\xe7\xe3o",id:"interaction-api-context-body-fields",level:3},{value:"Campos do corpo do contexto da Management API",id:"management-api-context-body-fields",level:3},{value:"Campos do corpo do payload de dados",id:"data-payload-body-fields",level:3}];function l(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.header,{children:(0,n.jsx)(d.h1,{id:"solicita\xe7\xe3o-de-webhooks",children:"Solicita\xe7\xe3o de Webhooks"})}),"\n",(0,n.jsx)(d.p,{children:"Uma vez que um evento de hook v\xe1lido \xe9 emitido, o Logto encontrar\xe1 os webhooks correspondentes e enviar\xe1 uma solicita\xe7\xe3o POST por configura\xe7\xe3o de hook."}),"\n",(0,n.jsx)(d.h2,{id:"request-headers",children:"Cabe\xe7alhos da solicita\xe7\xe3o"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Chave"}),(0,n.jsx)(d.th,{children:"Personaliz\xe1vel"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"user-agent"}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"Logto (https://logto.io/)"})," por padr\xe3o."]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"content-type"}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsxs)(d.td,{children:[(0,n.jsx)(d.code,{children:"application/json"})," por padr\xe3o."]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"logto-signature-sha-256"}),(0,n.jsx)(d.td,{}),(0,n.jsxs)(d.td,{children:["a assinatura do corpo da solicita\xe7\xe3o, consulte ",(0,n.jsx)(d.a,{href:"/developers/webhooks/secure-webhooks",children:"securing your webhooks"}),"."]})]})]})]}),"\n",(0,n.jsxs)(d.p,{children:["Voc\xea pode sobrescrever cabe\xe7alhos personaliz\xe1veis ",(0,n.jsx)(d.a,{href:"/developers/webhooks/configure-webhooks/#secure-webhook",children:"customizando cabe\xe7alhos de solicita\xe7\xe3o"})," com a mesma chave."]}),"\n",(0,n.jsx)(d.h2,{id:"interaction-hook-events-request-body",children:"Corpo da solicita\xe7\xe3o de eventos de hook de intera\xe7\xe3o"}),"\n",(0,n.jsxs)(d.p,{children:["Eventos dispon\xedveis: ",(0,n.jsx)(d.code,{children:"PostRegister"}),", ",(0,n.jsx)(d.code,{children:"PostSignIn"}),", ",(0,n.jsx)(d.code,{children:"PostResetPassword"})]}),"\n",(0,n.jsx)(d.p,{children:"O corpo da solicita\xe7\xe3o \xe9 um objeto JSON que cont\xe9m tr\xeas tipos de campo de dados:"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",children:"type UserEntity = {\n  id: string;\n  username?: string;\n  primaryEmail?: string;\n  primaryPhone?: string;\n  name?: string;\n  avatar?: string;\n  customData?: object;\n  identities?: object;\n  lastSignInAt?: string;\n  createdAt?: string;\n  applicationId?: string;\n  isSuspended?: boolean;\n};\n"})}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",children:"type ApplicationEntity = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"hookId"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"O identificador no Logto."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"event"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"Qual evento aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"createdAt"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"O tempo de cria\xe7\xe3o do payload em formato ISO."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"interactionEvent"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"O evento de intera\xe7\xe3o que aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sessionId"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O ID da Sess\xe3o (n\xe3o o ID de Intera\xe7\xe3o) para este evento, se aplic\xe1vel."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"userAgent"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O user-agent para a solicita\xe7\xe3o que aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"userIp"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O endere\xe7o IP para a solicita\xe7\xe3o que aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"userId"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O ID do Usu\xe1rio relacionado para este evento, se aplic\xe1vel."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"user"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"UserEntity"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"A entidade de usu\xe1rio relacionada para este evento, se aplic\xe1vel."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"applicationId"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O ID do Aplicativo relacionado para este evento, se aplic\xe1vel."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"application"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"ApplicationEntity"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"As informa\xe7\xf5es do aplicativo relacionadas para este evento, se aplic\xe1vel."})]})]})]}),"\n",(0,n.jsxs)(d.p,{children:["Consulte as refer\xeancias de ",(0,n.jsx)(d.a,{href:"/user-management/user-data",children:"Usu\xe1rios"})," e ",(0,n.jsx)(d.a,{href:"/integrate-logto/application-data-structure",children:"Aplicativos"})," para explica\xe7\xf5es detalhadas dos campos."]}),"\n",(0,n.jsx)(d.h2,{id:"data-mutation-hook-events-request-body",children:"Corpo da solicita\xe7\xe3o de eventos de muta\xe7\xe3o de dados"}),"\n",(0,n.jsx)(d.h3,{id:"standard-request-body-fields",children:"Campos padr\xe3o do corpo da solicita\xe7\xe3o"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"hookId"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"O identificador no Logto."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"event"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"Qual evento aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"createdAt"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"O tempo de cria\xe7\xe3o do payload em formato ISO."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"userAgent"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O user-agent para a solicita\xe7\xe3o."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"ip"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O endere\xe7o IP para a solicita\xe7\xe3o."})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"interaction-api-context-body-fields",children:"Campos do corpo do contexto da API de intera\xe7\xe3o"}),"\n",(0,n.jsx)(d.p,{children:"Eventos de muta\xe7\xe3o de dados que s\xe3o acionados por chamadas de API de intera\xe7\xe3o do usu\xe1rio."}),"\n",(0,n.jsxs)(d.p,{children:["Eventos dispon\xedveis: ",(0,n.jsx)(d.code,{children:"User.Created"}),", ",(0,n.jsx)(d.code,{children:"User.Data.Updated"})]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"interactionEvent"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O evento de intera\xe7\xe3o que aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sessionId"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O ID da Sess\xe3o (n\xe3o o ID de Intera\xe7\xe3o) para este evento, se aplic\xe1vel."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"applicationId"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O ID do Aplicativo relacionado para este evento, se aplic\xe1vel."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"application"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"ApplicationEntity"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"As informa\xe7\xf5es do aplicativo relacionadas para este evento, se aplic\xe1vel."})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"management-api-context-body-fields",children:"Campos do corpo do contexto da Management API"}),"\n",(0,n.jsx)(d.p,{children:"Eventos de muta\xe7\xe3o de dados que s\xe3o acionados por chamadas da Management API."}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"path"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O caminho da chamada de API que aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"method"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O m\xe9todo da chamada de API que aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"status"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"number"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O c\xf3digo de status da resposta da chamada de API que aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"params"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"object"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"Os par\xe2metros de caminho koa da solicita\xe7\xe3o da chamada de API que aciona este hook."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"matchedRoute"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"string"})}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"A rota koa correspondente da chamada de API que aciona este hook. O Logto usa este campo para corresponder aos eventos de hook habilitados."})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"data-payload-body-fields",children:"Campos do corpo do payload de dados"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"Eventos de Usu\xe1rio"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Evento"}),(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"User.Created"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"UserEntity"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de usu\xe1rio criada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"User.Data.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"UserEntity"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de usu\xe1rio atualizada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"User.Deleted"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"null"}),(0,n.jsx)(d.td,{children:"/"}),(0,n.jsx)(d.td,{})]})]})]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"Eventos de Papel (Role)"})}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",children:"type Role = {\n  id: string;\n  name: string;\n  description: string;\n  type: 'User' | 'MachineToMachine';\n  isDefault: boolean;\n};\n"})}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",children:"type Scope = {\n  id: string;\n  name: string;\n  description: string;\n  resourceId: string;\n  createdAt: number;\n};\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Evento"}),(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Role.Created"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"Role"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de papel criada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Role.Data.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"Role"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de papel atualizada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Role.Deleted"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"null"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Role.Scope.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"Scope[]"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"Os escopos atualizados atribu\xeddos ao papel."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Role.Scope.Updated"}),(0,n.jsx)(d.td,{children:"roleId"}),(0,n.jsx)(d.td,{children:"string"}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O ID do papel ao qual os escopos s\xe3o atribu\xeddos. (Dispon\xedvel apenas quando o evento foi acionado pela cria\xe7\xe3o de novo papel com escopos pr\xe9-atribu\xeddos)"})]})]})]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"Eventos de Permiss\xe3o (Scope)"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Evento"}),(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Scope.Created"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"Scope"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de escopo criada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Scope.Data.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"Scope"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de escopo atualizada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Scope.Deleted"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"null"}),(0,n.jsx)(d.td,{children:"/"}),(0,n.jsx)(d.td,{})]})]})]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"Eventos de Organiza\xe7\xe3o (Organization)"})}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",children:"type Organization = {\n  id: string;\n  name: string;\n  description?: string;\n  customData: object;\n  createdAt: number;\n};\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Evento"}),(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Organization.Created"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"Organization"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de organiza\xe7\xe3o criada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Organization.Data.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"Organization"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de organiza\xe7\xe3o atualizada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Organization.Deleted"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"null"}),(0,n.jsx)(d.td,{children:"/"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Organization.Membership.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"null"}),(0,n.jsx)(d.td,{children:"/"}),(0,n.jsx)(d.td,{})]})]})]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"Eventos de Papel da Organiza\xe7\xe3o (OrganizationRole)"})}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",children:"type OrganizationRole = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-tsx",children:"type OrganizationScope = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Evento"}),(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OrganizationRole.Created"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"OrganizationRole"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de papel da organiza\xe7\xe3o criada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OrganizationRole.Data.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"OrganizationRole"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de papel da organiza\xe7\xe3o atualizada para este evento."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OrganizationRole.Deleted"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"null"}),(0,n.jsx)(d.td,{children:"/"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OrganizationRole.Scope.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"null"}),(0,n.jsx)(d.td,{children:"/"}),(0,n.jsx)(d.td,{})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OrganizationRole.Scope.Updated"}),(0,n.jsx)(d.td,{children:"organizationRoleId"}),(0,n.jsx)(d.td,{children:"string"}),(0,n.jsx)(d.td,{children:"\u2705"}),(0,n.jsx)(d.td,{children:"O ID do papel ao qual os escopos s\xe3o atribu\xeddos. (Dispon\xedvel apenas quando o evento foi acionado pela cria\xe7\xe3o de novo papel com escopos pr\xe9-atribu\xeddos)"})]})]})]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"Eventos de Permiss\xe3o da Organiza\xe7\xe3o (OrganizationScope)"})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Evento"}),(0,n.jsx)(d.th,{children:"Campo"}),(0,n.jsx)(d.th,{children:"Tipo"}),(0,n.jsx)(d.th,{children:"Opcional"}),(0,n.jsx)(d.th,{children:"Notas"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OrganizationScope.Created"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"OrganizationScope"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de escopo da organiza\xe7\xe3o criada."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OrganizationScope.Data.Updated"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"OrganizationScope"}),(0,n.jsx)(d.td,{}),(0,n.jsx)(d.td,{children:"A entidade de escopo da organiza\xe7\xe3o atualizada."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OrganizationScope.Deleted"}),(0,n.jsx)(d.td,{children:"data"}),(0,n.jsx)(d.td,{children:"null"}),(0,n.jsx)(d.td,{children:"/"}),(0,n.jsx)(d.td,{})]})]})]})]})}function h(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},79621:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>o});var t=s(58101);const n={},i=t.createContext(n);function r(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);