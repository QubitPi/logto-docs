"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[26482],{91350:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"developers/custom-token-claims/common-use-cases","title":"Casos de uso comuns","description":"Nesta se\xe7\xe3o, forneceremos alguns exemplos para ajud\xe1-lo a entender alguns cen\xe1rios onde reivindica\xe7\xf5es de token personalizadas podem ser \xfateis, oferecendo algumas refer\xeancias. Desta forma, quando voc\xea encontrar dificuldades no gerenciamento de acesso, poder\xe1 avaliar se as reivindica\xe7\xf5es de token personalizadas podem lhe trazer conveni\xeancia.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/custom-token-claims/common-use-cases.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/common-use-cases","permalink":"/pt-BR/developers/custom-token-claims/common-use-cases","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/custom-token-claims/common-use-cases.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"common-use-cases","title":"Casos de uso comuns","sidebar_label":"Casos de uso comuns","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Reivindica\xe7\xf5es de token personalizadas","permalink":"/pt-BR/developers/custom-token-claims/"},"next":{"title":"Criar um script de reivindica\xe7\xf5es de token personalizadas","permalink":"/pt-BR/developers/custom-token-claims/create-script"}}');var r=s(25105),n=s(79621);const i={id:"common-use-cases",title:"Casos de uso comuns",sidebar_label:"Casos de uso comuns",sidebar_position:2},c="Casos de uso comuns",d={},t=[{value:"Tornar o controle de acesso baseado em atributos (ABAC) poss\xedvel",id:"make-attribute-based-access-control-abac-possible",level:2},{value:"Bloquear manualmente a emiss\xe3o de tokens",id:"manually-block-token-issuance",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"casos-de-uso-comuns",children:"Casos de uso comuns"})}),"\n",(0,r.jsxs)(o.p,{children:["Nesta se\xe7\xe3o, forneceremos alguns exemplos para ajud\xe1-lo a entender alguns cen\xe1rios onde ",(0,r.jsx)(o.a,{href:"/developers/custom-token-claims",children:"reivindica\xe7\xf5es de token personalizadas"})," podem ser \xfateis, oferecendo algumas refer\xeancias. Desta forma, quando voc\xea encontrar dificuldades no gerenciamento de acesso, poder\xe1 avaliar se as reivindica\xe7\xf5es de token personalizadas podem lhe trazer conveni\xeancia."]}),"\n",(0,r.jsx)(o.h2,{id:"make-attribute-based-access-control-abac-possible",children:"Tornar o controle de acesso baseado em atributos (ABAC) poss\xedvel"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://auth.wiki/abac",children:"Controle de acesso baseado em atributos (ABAC)"})," \xe9 um modelo de controle de acesso que utiliza atributos (como pap\xe9is de usu\xe1rio, propriedades de recursos e condi\xe7\xf5es ambientais) para tomar decis\xf5es de controle de acesso. \xc9 uma maneira flex\xedvel e din\xe2mica de gerenciar o acesso a recursos protegidos."]}),"\n",(0,r.jsx)(o.p,{children:"Suponha que voc\xea esteja construindo um aplicativo, e o lan\xe7amento do aplicativo seja dividido em duas fases: beta p\xfablico e lan\xe7amento oficial. Mesmo ap\xf3s o lan\xe7amento oficial do aplicativo, voc\xea deseja que os usu\xe1rios antigos que participaram do beta p\xfablico continuem usando os recursos pagos."}),"\n",(0,r.jsxs)(o.p,{children:["Ap\xf3s o lan\xe7amento oficial do aplicativo, voc\xea utiliza o recurso de ",(0,r.jsx)(o.a,{href:"/authorization/role-based-access-control",children:"controle de acesso baseado em papel (RBAC)"})," do Logto para implementar o controle de acesso para o uso de recursos pagos. Para verificar facilmente se um usu\xe1rio j\xe1 estava usando o aplicativo durante a fase beta p\xfablica, voc\xea pode usar o m\xe9todo ",(0,r.jsx)(o.code,{children:"getCustomJwtClaims()"})," para adicionar uma reivindica\xe7\xe3o ",(0,r.jsx)(o.code,{children:"createdAt"})," no payload do token."]}),"\n",(0,r.jsx)(o.p,{children:"Ent\xe3o, ao fazer o controle de acesso em suas APIs protegidas, voc\xea precisa permitir tokens de acesso que atendam a uma das seguintes condi\xe7\xf5es:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Com o contexto RBAC, tendo o escopo para acessar recursos pagos."}),"\n",(0,r.jsxs)(o.li,{children:["O ",(0,r.jsx)(o.code,{children:"createdAt"})," \xe9 anterior ao hor\xe1rio de t\xe9rmino da fase beta p\xfablica."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Se n\xe3o houver o recurso de reivindica\xe7\xf5es de token personalizadas, ao verificar permiss\xf5es para ",(0,r.jsx)(o.a,{href:"/authorization/api-resources",children:"recursos de API protegidos"}),", \xe9 necess\xe1rio chamar a Logto Management API para verificar se o usu\xe1rio com o token de acesso atual possui as permiss\xf5es correspondentes ao papel exigido por um determinado recurso de API."]}),"\n",(0,r.jsxs)(o.p,{children:["Em um cen\xe1rio semelhante, suponha que seu aplicativo exiba desejos de anivers\xe1rio na p\xe1gina de login se o anivers\xe1rio do usu\xe1rio estiver se aproximando. Voc\xea pode usar reivindica\xe7\xf5es de token personalizadas para adicionar um campo de anivers\xe1rio ao ",(0,r.jsx)(o.a,{href:"/user-management/personal-access-token#example-token-exchange",children:"payload do token"}),", que pode ser usado para determinar se deve exibir uma mensagem espec\xedfica."]}),"\n",(0,r.jsx)(o.h2,{id:"manually-block-token-issuance",children:"Bloquear manualmente a emiss\xe3o de tokens"}),"\n",(0,r.jsxs)(o.p,{children:["Suponha que Joe esteja executando um jogo online e use Logto como um sistema de ",(0,r.jsx)(o.a,{href:"https://auth.wiki/iam",children:"gerenciamento de identidade e acesso (IAM)"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Assuma que este jogo requer recargas para comprar tempo de jogo. Joe registra o saldo de cada usu\xe1rio em seu servi\xe7o de jogo e deduz continuamente do saldo \xe0 medida que o tempo de jogo se acumula. Joe quer for\xe7ar os jogadores a se desconectarem quando o saldo de sua conta se esgotar para incentiv\xe1-los a recarregar."}),"\n",(0,r.jsx)(o.p,{children:"Neste ponto, Joe tamb\xe9m pode usar o recurso de reivindica\xe7\xf5es de token personalizadas fornecido pelo Logto para alcan\xe7ar isso:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["No script, uma chamada de API externa ",(0,r.jsx)(o.a,{href:"/developers/custom-token-claims/create-script/#step-3-fetch-external-data",children:"buscar dados externos"})," pode ser usada para recuperar o saldo atual do jogador do servidor de jogos de Joe."]}),"\n",(0,r.jsxs)(o.li,{children:["Se o saldo for menor ou igual a 0, o m\xe9todo ",(0,r.jsx)(o.a,{href:"/developers/custom-token-claims/create-script/#api",children:(0,r.jsx)(o.code,{children:"api.denyAccess()"})})," pode ser usado para bloquear a emiss\xe3o de tokens."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Neste momento, como um novo token de acesso v\xe1lido n\xe3o pode ser obtido, o jogador ser\xe1 for\xe7ado a se desconectar do jogo."})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},79621:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>c});var a=s(58101);const r={},n=a.createContext(r);function i(e){const o=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);