"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6074],{50547:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"authorization/role-based-access-control/protect-api-resources-with-rbac","title":"Proteger recursos de API com RBAC","description":"Al\xe9m de Proteger sua API, que protege recursos garantindo que um JWT v\xe1lido esteja presente, o Controle de Acesso Baseado em Papel (RBAC) tamb\xe9m pode ser aplicado.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/protect-api-resources-with-rbac.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/protect-api-resources-with-rbac","permalink":"/pt-BR/authorization/role-based-access-control/protect-api-resources-with-rbac","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/protect-api-resources-with-rbac.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Configurar pap\xe9is","permalink":"/pt-BR/authorization/role-based-access-control/configure-roles"},"next":{"title":"Modelo de organiza\xe7\xe3o","permalink":"/pt-BR/authorization/organization-template/"}}');var a=s(25105),n=s(79621);const i={sidebar_position:3},t="Proteger recursos de API com RBAC",d={},c=[{value:"Diagrama de fluxo de autoriza\xe7\xe3o",id:"authorization-flow-diagram",level:2},{value:"Opcional: Lidar com mudan\xe7a de permiss\xe3o do usu\xe1rio",id:"optional-handle-user-permission-change",level:2},{value:"Nenhuma nova permiss\xe3o introduzida no sistema",id:"no-new-permissions-introduced-into-the-system",level:3},{value:"Nova permiss\xe3o \xe9 introduzida no sistema e atribu\xedda a um usu\xe1rio",id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-user",level:3},{value:"Recursos relacionados",id:"related-resources",level:2}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components},{Url:s}=o;return s||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"proteger-recursos-de-api-com-rbac",children:"Proteger recursos de API com RBAC"})}),"\n",(0,a.jsxs)(o.p,{children:["Al\xe9m de ",(0,a.jsx)(o.a,{href:"/authorization/api-resources/protect-your-api",children:"Proteger sua API"}),", que protege recursos garantindo que um JWT v\xe1lido esteja presente, o Controle de Acesso Baseado em Papel (RBAC) tamb\xe9m pode ser aplicado."]}),"\n",(0,a.jsx)(o.p,{children:"Neste artigo, vamos nos concentrar em como o RBAC afeta a delega\xe7\xe3o e valida\xe7\xe3o de escopos no seu fluxo de autentica\xe7\xe3o."}),"\n",(0,a.jsx)(o.h2,{id:"authorization-flow-diagram",children:"Diagrama de fluxo de autoriza\xe7\xe3o"}),"\n",(0,a.jsx)(o.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: Autentica\xe7\xe3o & Solicita\xe7\xe3o de Token\n    Client->>Logto: GET /oidc/auth & POST /oidc/token\n    Note right of Client: com recurso e escopos solicitados\n\n    Note over Logto: Filtrar escopos solicitados com base<br/>na pol\xedtica RBAC do usu\xe1rio\n    Logto--\x3e>Client: Retorna token de acesso JWT\n    Note left of Logto: Token cont\xe9m:<br/>- Reivindica\xe7\xf5es padr\xe3o do JWT<br/>- Escopos concedidos (filtrados por RBAC)\n\n    Note over Client,API: Solicita\xe7\xe3o de API\n    Client->>API: Solicita\xe7\xe3o com token Bearer\n\n    Note over API: Validar token JWT:<br/>- Valida\xe7\xe3o padr\xe3o do JWT<br/>- Verificar escopos concedidos\n\n    alt Token Inv\xe1lido\n        API--\x3e>Client: 401 N\xe3o autorizado\n    else Token V\xe1lido\n        alt Escopos necess\xe1rios n\xe3o est\xe3o nos escopos concedidos\n            API--\x3e>Client: 403 Proibido\n        else Tem escopos necess\xe1rios\n            API--\x3e>Client: Recurso Protegido\n        end\n    end"}),"\n",(0,a.jsx)(o.p,{children:"Como voc\xea pode ver no diagrama, a principal diferen\xe7a em rela\xe7\xe3o \xe0 prote\xe7\xe3o b\xe1sica de API \xe9 o tratamento dos escopos. Em vez de conceder diretamente todos os escopos solicitados, o Logto agora os filtra com base na pol\xedtica RBAC do usu\xe1rio. O token JWT conter\xe1 apenas os escopos que o usu\xe1rio recebeu atrav\xe9s de seus pap\xe9is. No lado da API, ap\xf3s validar a autenticidade do token, h\xe1 uma verifica\xe7\xe3o adicional para garantir que o token contenha os escopos necess\xe1rios para o recurso solicitado."}),"\n",(0,a.jsx)(o.h2,{id:"optional-handle-user-permission-change",children:"Opcional: Lidar com mudan\xe7a de permiss\xe3o do usu\xe1rio"}),"\n",(0,a.jsx)(o.p,{children:"As permiss\xf5es do usu\xe1rio podem ser alteradas durante uma sess\xe3o \u2014 por exemplo, eles podem receber novos pap\xe9is ou ter permiss\xf5es de papel existentes modificadas. Nesses cen\xe1rios, detectar essas mudan\xe7as e atualizar a interface do usu\xe1rio do aplicativo pode ser necess\xe1rio."}),"\n",(0,a.jsx)(o.p,{children:"O que acontece quando as permiss\xf5es de um usu\xe1rio mudam? Existem dois casos."}),"\n",(0,a.jsx)(o.h3,{id:"no-new-permissions-introduced-into-the-system",children:"Nenhuma nova permiss\xe3o introduzida no sistema"}),"\n",(0,a.jsx)(o.p,{children:"Os tokens de acesso atuais permanecer\xe3o v\xe1lidos at\xe9 expirarem, mesmo ap\xf3s as permiss\xf5es de um usu\xe1rio serem alteradas. No entanto, novas permiss\xf5es ser\xe3o refletidas em tokens de acesso subsequentes, e quaisquer permiss\xf5es revogadas ser\xe3o omitidas."}),"\n",(0,a.jsxs)(o.p,{children:["Aqui est\xe3o algumas ",(0,a.jsx)(o.strong,{children:"a\xe7\xf5es recomendadas"}),":"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Op\xe7\xe3o 1: Use tempos curtos de expira\xe7\xe3o de token de acesso"})}),"\n",(0,a.jsxs)(o.p,{children:["Tokens de acesso de curta dura\xe7\xe3o garantem atualiza\xe7\xf5es mais frequentes das permiss\xf5es do usu\xe1rio. Configure as configura\xe7\xf5es de expira\xe7\xe3o de token nas configura\xe7\xf5es do ",(0,a.jsx)(o.a,{href:"/authorization/api-resources/#logto-api-resource-schema",children:"Recurso de API"})," do Console. A desvantagem \xe9 que isso aumentar\xe1 o uso de tokens."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Op\xe7\xe3o 2: Verifique dinamicamente as permiss\xf5es"})}),"\n",(0,a.jsxs)(o.p,{children:["Chame periodicamente os endpoints do ",(0,a.jsx)(o.a,{href:"/integrate-logto/interact-with-management-api",children:"Logto Management API"})," (por exemplo, SWR) ou use t\xe9cnicas como WebSocket para implementar conex\xf5es de longa dura\xe7\xe3o para buscar dinamicamente as permiss\xf5es do usu\xe1rio. Ao detectar mudan\xe7as, limpe o token de acesso existente e os tokens rec\xe9m-emitidos refletir\xe3o automaticamente as mudan\xe7as de permiss\xe3o. - API: User-role - API: Role-permission"]}),"\n",(0,a.jsxs)(o.p,{children:["Quando mudan\xe7as de permiss\xe3o forem detectadas, limpe o token de acesso do armazenamento primeiro e, em seguida, chame o m\xe9todo ",(0,a.jsx)(o.code,{children:"getAccessToken()"})," do SDK para adquirir um novo. O novo token de acesso emitido deve refletir as mudan\xe7as de permiss\xe3o."]}),"\n",(0,a.jsx)(o.h3,{id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-user",children:"Nova permiss\xe3o \xe9 introduzida no sistema e atribu\xedda a um usu\xe1rio"}),"\n",(0,a.jsx)(o.p,{children:"Isso acontece quando novas permiss\xf5es s\xe3o introduzidas no seu sistema. Nesse caso, voc\xea precisar\xe1 primeiro incluir os novos escopos de permiss\xe3o introduzidos ao inicializar o cliente Logto. Por exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"new LogtoClient({\n  appId: 'your-app-id',\n  redirectUrl: 'your-redirect-url',\n  resources: ['your-api-resource'],\n  scopes: [\n    // ... seus escopos de permiss\xe3o existentes,\n    'new-scope',\n  ],\n});\n"})}),"\n",(0,a.jsx)(o.p,{children:"Em segundo lugar, cada um dos seus aplicativos cliente precisa re-consentir ou re-login dos usu\xe1rios para receber a mudan\xe7a de permiss\xe3o. Ent\xe3o, o novo escopo de permiss\xe3o ser\xe1 refletido em novos tokens de acesso."}),"\n",(0,a.jsx)(o.p,{children:"Exemplo de c\xf3digo para re-consentimento:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"signIn({ redirectUrl: 'your-redirect-url', prompt: 'consent' });\n"})}),"\n",(0,a.jsx)(o.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,a.jsx)(s,{href:"https://blog.logto.io/logto-x-cloudflare-workers",children:(0,a.jsx)(o.p,{children:"Logto x Cloudflare Workers: Como proteger seus workers do acesso p\xfablico?"})}),"\n",(0,a.jsx)(s,{href:"https://blog.logto.io/secure-api-for-machine-to-machine",children:(0,a.jsx)(o.p,{children:"Proteja seus recursos de API para comunica\xe7\xe3o m\xe1quina para m\xe1quina"})})]})}function l(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},79621:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>t});var r=s(58101);const a={},n=r.createContext(a);function i(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);