"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[94718],{77274:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>x,contentTitle:()=>h,default:()=>v,frontMatter:()=>g,metadata:()=>n,toc:()=>j});const n=JSON.parse('{"id":"integrate-logto/interact-with-management-api/README","title":"Interagir com a Management API","description":"O que \xe9 a Logto Management API?","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","sourceDirName":"integrate-logto/interact-with-management-api","slug":"/integrate-logto/interact-with-management-api/","permalink":"/pt-BR/integrate-logto/interact-with-management-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Personaliza\xe7\xe3o da tela de consentimento","permalink":"/pt-BR/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"},"next":{"title":"Estrutura de dados da aplica\xe7\xe3o","permalink":"/pt-BR/integrate-logto/application-data-structure"}}');var s=o(25105),t=o(79621);const r=o.p+"assets/images/logto-management-api-resource-14162a031698ad36ac0f8c04ff683ba2.webp",i=o.p+"assets/images/logto-management-api-details-4994334ef32791d9ebc6c9aa298c9ecd.webp";var c=o(36704),d=o(82226),l=o(96688),p=o(45459),u=o(39327),m=o(381);const g={sidebar_position:4},h="Interagir com a Management API",x={},j=[{value:"O que \xe9 a Logto Management API?",id:"what-is-logto-management-api",level:2},{value:"Como acessar a Logto Management API",id:"how-to-access-logto-management-api",level:2},{value:"Criar um aplicativo M2M",id:"create-an-m2m-app",level:3},...m.RM,{value:"Obter um token de acesso",id:"fetch-an-access-token",level:3},{value:"No\xe7\xf5es b\xe1sicas sobre solicita\xe7\xe3o de token de acesso",id:"basics-about-access-token-request",level:4},...c.RM,{value:"Obter token de acesso para a Logto Management API",id:"fetch-access-token-for-logto-management-api",level:4},...d.RM,{value:"Resposta do token de acesso",id:"access-token-response",level:4},...u.RM,{value:"Acessar a Logto Management API usando o token de acesso",id:"access-logto-management-api-using-access-token",level:3},...l.RM,...p.RM,{value:"Cen\xe1rios t\xedpicos para usar a Logto Management API",id:"typical-scenarios-for-using-logto-management-api",level:2},{value:"Implementar perfil de usu\xe1rio por conta pr\xf3pria",id:"implement-user-profile-on-your-own",level:3},{value:"Pesquisa avan\xe7ada de usu\xe1rios",id:"advanced-user-search",level:3},{value:"Implementar gerenciamento de organiza\xe7\xf5es por conta pr\xf3pria",id:"implement-organization-management-on-your-own",level:3},{value:"Dicas para usar a Logto Management API",id:"tips-for-using-logto-management-api",level:2},{value:"Gerenciando respostas de API paginadas",id:"managing-paginated-api-responses",level:3},{value:"Usando cabe\xe7alhos de link",id:"using-link-headers",level:4},{value:"Usando o cabe\xe7alho total-number",id:"using-total-number-header",level:4},{value:"Alterando o n\xfamero da p\xe1gina e o tamanho da p\xe1gina",id:"changing-page-number-and-page-size",level:4},{value:"Limite de taxa",id:"rate-limit",level:3},{value:"Recursos relacionados",id:"related-resources",level:2}];function f(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{CloudLink:o,Url:n}=a;return o||b("CloudLink",!0),n||b("Url",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"interagir-com-a-management-api",children:"Interagir com a Management API"})}),"\n",(0,s.jsx)(a.h2,{id:"what-is-logto-management-api",children:"O que \xe9 a Logto Management API?"}),"\n",(0,s.jsxs)(a.p,{children:["A Logto Management API \xe9 um conjunto abrangente de APIs que oferece aos desenvolvedores controle total sobre sua implementa\xe7\xe3o para atender \xe0s necessidades de seus produtos e pilha tecnol\xf3gica. Ela \xe9 pr\xe9-constru\xedda, listada no ",(0,s.jsx)(o,{to:"/api-resources",children:"Console > API resources > Logto Management API"}),", e n\xe3o pode ser exclu\xedda ou modificada."]}),"\n",(0,s.jsxs)(a.p,{children:["Seu identificador segue o padr\xe3o ",(0,s.jsx)(a.code,{children:"https://[tenant-id].logto.app/api"})]}),"\n",(0,s.jsx)("img",{alt:"Recurso da Logto Management API",src:r}),"\n",(0,s.jsx)("img",{alt:"Detalhes da Logto Management API",src:i}),"\n",(0,s.jsx)(a.p,{children:"Com a Logto Management API, voc\xea pode acessar os robustos servi\xe7os de backend do Logto, que s\xe3o altamente escal\xe1veis e podem ser utilizados em uma variedade de cen\xe1rios. Ela vai al\xe9m do que \xe9 poss\xedvel com as capacidades de baixo c\xf3digo do Admin Console."}),"\n",(0,s.jsx)(a.p,{children:"Algumas APIs frequentemente usadas est\xe3o listadas abaixo:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"User"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-listapplications",children:"Application"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-listlogs",children:"Audit logs"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-listroles",children:"Roles"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-listresources",children:"Resources"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-listconnectors",children:"Connectors"})}),"\n",(0,s.jsx)(a.li,{children:(0,s.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-listorganizations",children:"Organizations"})}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Para saber mais sobre as APIs dispon\xedveis, visite ",(0,s.jsx)(a.a,{href:"https://openapi.logto.io/",children:"https://openapi.logto.io/"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"how-to-access-logto-management-api",children:"Como acessar a Logto Management API"}),"\n",(0,s.jsx)(a.h3,{id:"create-an-m2m-app",children:"Criar um aplicativo M2M"}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:["Se voc\xea n\xe3o est\xe1 familiarizado com o fluxo de autentica\xe7\xe3o M2M (M\xe1quina para M\xe1quina), recomendamos ler ",(0,s.jsx)(a.a,{href:"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow",children:"Entendendo o fluxo de autentica\xe7\xe3o"})," primeiro para entender os conceitos b\xe1sicos."]})}),"\n",(0,s.jsxs)(a.p,{children:["V\xe1 para ",(0,s.jsx)(o,{to:"/applications",children:"Console > Applications"}),', selecione o tipo de aplicativo "Machine-to-machine" e inicie o processo de cria\xe7\xe3o.']}),"\n",(0,s.jsx)(m.Ay,{}),"\n",(0,s.jsx)(a.p,{children:"No m\xf3dulo de atribui\xe7\xe3o de pap\xe9is, voc\xea pode ver que todos os pap\xe9is M2M est\xe3o inclu\xeddos, e os pap\xe9is indicados por um \xedcone do Logto significam que esses pap\xe9is incluem permiss\xf5es da Logto Management API."}),"\n",(0,s.jsx)(a.p,{children:"Agora atribua pap\xe9is M2M que incluem permiss\xf5es da Logto Management API para o seu aplicativo M2M."}),"\n",(0,s.jsx)(a.h3,{id:"fetch-an-access-token",children:"Obter um token de acesso"}),"\n",(0,s.jsx)(a.h4,{id:"basics-about-access-token-request",children:"No\xe7\xf5es b\xe1sicas sobre solicita\xe7\xe3o de token de acesso"}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(a.h4,{id:"fetch-access-token-for-logto-management-api",children:"Obter token de acesso para a Logto Management API"}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(a.h4,{id:"access-token-response",children:"Resposta do token de acesso"}),"\n",(0,s.jsx)(a.p,{children:"Um corpo de resposta de acesso bem-sucedido seria assim:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // Use este token para acessar a Logto Management API\n  "expires_in": 3600, // Expira\xe7\xe3o do token em segundos\n  "token_type": "Bearer", // Tipo de autentica\xe7\xe3o para sua solicita\xe7\xe3o ao usar o token de acesso\n  "scope": "all" // escopo `all` para a Logto Management API\n}\n'})}),"\n",(0,s.jsx)(u.Ay,{}),"\n",(0,s.jsx)(a.h3,{id:"access-logto-management-api-using-access-token",children:"Acessar a Logto Management API usando o token de acesso"}),"\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(p.Ay,{}),"\n",(0,s.jsx)(a.h2,{id:"typical-scenarios-for-using-logto-management-api",children:"Cen\xe1rios t\xedpicos para usar a Logto Management API"}),"\n",(0,s.jsx)(a.p,{children:"Nossos desenvolvedores implementaram muitos recursos adicionais usando a Logto Management API. Acreditamos que nossa API \xe9 altamente escal\xe1vel e pode suportar uma ampla gama de suas necessidades. Aqui est\xe3o alguns exemplos de cen\xe1rios que n\xe3o s\xe3o poss\xedveis com o Logto Admin Console, mas podem ser alcan\xe7ados atrav\xe9s da Logto Management API."}),"\n",(0,s.jsx)(a.h3,{id:"implement-user-profile-on-your-own",children:"Implementar perfil de usu\xe1rio por conta pr\xf3pria"}),"\n",(0,s.jsx)(a.p,{children:"Atualmente, o Logto n\xe3o fornece uma solu\xe7\xe3o de interface de usu\xe1rio pr\xe9-constru\xedda para perfis de usu\xe1rio. Reconhecemos que os perfis de usu\xe1rio est\xe3o intimamente ligados aos atributos de neg\xf3cios e produtos. Enquanto trabalhamos para determinar a melhor abordagem, sugerimos usar nossas APIs para criar sua pr\xf3pria solu\xe7\xe3o. Por exemplo, voc\xea pode utilizar nossa API de intera\xe7\xe3o, API de perfil e API de c\xf3digo de verifica\xe7\xe3o para desenvolver uma solu\xe7\xe3o personalizada que atenda \xe0s suas necessidades."}),"\n",(0,s.jsx)(a.h3,{id:"advanced-user-search",children:"Pesquisa avan\xe7ada de usu\xe1rios"}),"\n",(0,s.jsxs)(a.p,{children:["O Logto Admin Console suporta fun\xe7\xf5es b\xe1sicas de pesquisa e filtragem. Para op\xe7\xf5es de pesquisa avan\xe7ada, como pesquisa difusa, correspond\xeancia exata e sensibilidade a mai\xfasculas e min\xfasculas, confira nossos tutoriais e guias de ",(0,s.jsx)(a.a,{href:"/user-management/advanced-user-search",children:"Pesquisa Avan\xe7ada de Usu\xe1rios"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"implement-organization-management-on-your-own",children:"Implementar gerenciamento de organiza\xe7\xf5es por conta pr\xf3pria"}),"\n",(0,s.jsxs)(a.p,{children:["Se voc\xea estiver usando o recurso de ",(0,s.jsx)(a.a,{href:"/organizations",children:"organiza\xe7\xf5es"})," para construir seu aplicativo multi-tenant, pode precisar da Logto Management API para tarefas como convites para organiza\xe7\xf5es e gerenciamento de membros. Para seu produto SaaS, onde voc\xea tem tanto administradores quanto membros no tenant, a Logto Management API pode ajud\xe1-lo a criar um portal de administra\xe7\xe3o personalizado adaptado \xe0s suas necessidades de neg\xf3cios. Confira ",(0,s.jsx)(a.a,{href:"/end-user-flows/organization-experience/",children:"este"})," para mais detalhes."]}),"\n",(0,s.jsx)(a.h2,{id:"tips-for-using-logto-management-api",children:"Dicas para usar a Logto Management API"}),"\n",(0,s.jsx)(a.h3,{id:"managing-paginated-api-responses",children:"Gerenciando respostas de API paginadas"}),"\n",(0,s.jsx)(a.p,{children:"Algumas das respostas da API podem incluir muitos resultados, os resultados ser\xe3o paginados. O Logto fornece 2 tipos de informa\xe7\xf5es de pagina\xe7\xe3o."}),"\n",(0,s.jsx)(a.h4,{id:"using-link-headers",children:"Usando cabe\xe7alhos de link"}),"\n",(0,s.jsx)(a.p,{children:"Um cabe\xe7alho de resposta paginada ser\xe1 assim:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:'Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"\n'})}),"\n",(0,s.jsx)(a.p,{children:"O cabe\xe7alho de link fornece a URL para a p\xe1gina anterior, pr\xf3xima, primeira e \xfaltima de resultados:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:'A URL para a p\xe1gina anterior \xe9 seguida por rel="prev".'}),"\n",(0,s.jsx)(a.li,{children:'A URL para a pr\xf3xima p\xe1gina \xe9 seguida por rel="next".'}),"\n",(0,s.jsx)(a.li,{children:'A URL para a \xfaltima p\xe1gina \xe9 seguida por rel="last".'}),"\n",(0,s.jsx)(a.li,{children:'A URL para a primeira p\xe1gina \xe9 seguida por rel="first".'}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"using-total-number-header",children:"Usando o cabe\xe7alho total-number"}),"\n",(0,s.jsxs)(a.p,{children:["Al\xe9m dos cabe\xe7alhos de link padr\xe3o, o Logto tamb\xe9m adicionar\xe1 um cabe\xe7alho ",(0,s.jsx)(a.code,{children:"Total-Number"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"Total-Number: 216\n"})}),"\n",(0,s.jsx)(a.p,{children:"Isso seria muito conveniente e \xfatil para mostrar n\xfameros de p\xe1gina."}),"\n",(0,s.jsx)(a.h4,{id:"changing-page-number-and-page-size",children:"Alterando o n\xfamero da p\xe1gina e o tamanho da p\xe1gina"}),"\n",(0,s.jsx)(a.p,{children:"Existem 2 par\xe2metros de consulta opcionais:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"page"}),": indica o n\xfamero da p\xe1gina, come\xe7a a partir de 1, o valor padr\xe3o \xe9 1."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.code,{children:"page_size"}),": indica o n\xfamero de itens por p\xe1gina, o valor padr\xe3o \xe9 20."]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"rate-limit",children:"Limite de taxa"}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"Isso \xe9 apenas para Logto Cloud."})}),"\n",(0,s.jsx)(a.p,{children:"Para garantir a confiabilidade e seguran\xe7a de nossos servi\xe7os para todos os usu\xe1rios, empregamos um firewall geral que monitora e gerencia o tr\xe1fego para nosso site. Embora n\xe3o imponhamos um limite de taxa estrito, recomendamos que os usu\xe1rios limitem sua atividade a aproximadamente 200 solicita\xe7\xf5es a cada 10 segundos para evitar acionar nossas medidas de prote\xe7\xe3o."}),"\n",(0,s.jsx)(a.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,s.jsx)(n,{href:"https://blog.logto.io/management-api",children:(0,s.jsx)(a.p,{children:"Use Logto Management API: Um guia passo a passo"})}),"\n",(0,s.jsx)(n,{href:"https://blog.logto.io/use-postman-to-obtain-m2m-access-token",children:"Obtenha tokens de acesso M2M em minutos com o Postman"})]})}function v(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}function b(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},45459:(e,a,o)=>{o.d(a,{Ay:()=>d,RM:()=>i});var n=o(25105),s=o(79621),t=o(3768),r=o(11043);const i=[];function c(e){const a={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Usando o token de acesso solicitado com o recurso de API de gerenciamento Logto embutido ",(0,n.jsx)(a.code,{children:"https://[your-tenant-id].logto.app/api"})," para obter todos os aplicativos no Logto:"]}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(t.A,{value:"Node.js",label:"Node.js",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Substitua pelo seu endpoint Logto\nconst accessToken = 'eyJhb...2g'; // Token de acesso\n\nconst fetchLogtoApplications = async () => {\n  return await fetch(`${logtoEndpoint}/api/applications`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,n.jsxs)(t.A,{value:"cURL",label:"cURL",children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g'\n"})}),(0,n.jsxs)(a.p,{children:["Lembre-se de substituir os valores reais pelos seus pr\xf3prios. O valor ap\xf3s ",(0,n.jsx)(a.code,{children:"Bearer"})," deve ser o token de acesso (JWT) que voc\xea recebeu."]})]})]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},96688:(e,a,o)=>{o.d(a,{Ay:()=>i,RM:()=>t});var n=o(25105),s=o(79621);const t=[];function r(e){const a={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Voc\xea pode notar que a resposta do token possui um campo ",(0,n.jsx)(a.code,{children:"token_type"}),", que \xe9 fixado como ",(0,n.jsx)(a.code,{children:"Bearer"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Portanto, voc\xea deve colocar o token de acesso no campo ",(0,n.jsx)(a.code,{children:"Authorization"})," dos cabe\xe7alhos HTTP com o formato Bearer (",(0,n.jsx)(a.code,{children:"Bearer YOUR_TOKEN"}),") ao interagir com seu servidor de recurso de API."]})]})}function i(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},36704:(e,a,o)=>{o.d(a,{Ay:()=>c,RM:()=>r});var n=o(25105),s=o(79621);const t=o.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png",r=[];function i(e){const a={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["O aplicativo M2M faz uma solicita\xe7\xe3o ",(0,n.jsx)(a.code,{children:"POST"})," ao endpoint de token para obter um token de acesso, adicionando os seguintes par\xe2metros usando o formato ",(0,n.jsx)(a.code,{children:"application/x-www-form-urlencoded"})," no corpo da entidade da solicita\xe7\xe3o HTTP:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"grant_type"}),": Deve ser definido como ",(0,n.jsx)(a.code,{children:"client_credentials"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"resource"}),": O recurso que voc\xea deseja acessar"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"scope"}),": O escopo da solicita\xe7\xe3o de acesso"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Voc\xea tamb\xe9m precisa incluir as credenciais do seu aplicativo M2M no cabe\xe7alho da solicita\xe7\xe3o para que o endpoint de token autentique seu aplicativo M2M."}),"\n",(0,n.jsxs)(a.p,{children:["Isso \xe9 alcan\xe7ado incluindo as credenciais do aplicativo na forma de ",(0,n.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"autentica\xe7\xe3o b\xe1sica (Basic authentication)"})," no cabe\xe7alho de ",(0,n.jsx)(a.code,{children:"Authorization"})," da solicita\xe7\xe3o, onde o nome de usu\xe1rio \xe9 o App ID e a senha \xe9 o App Secret."]}),"\n",(0,n.jsx)(a.p,{children:"Voc\xea pode encontrar o App ID e o App Secret na p\xe1gina de detalhes do seu aplicativo M2M:"}),"\n",(0,n.jsx)("img",{alt:"App ID e App Secret",src:t,width:"600px"})]})}function c(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},82226:(e,a,o)=>{o.d(a,{Ay:()=>l,RM:()=>c});var n=o(25105),s=o(79621),t=o(3768),r=o(11043);const i=o.p+"assets/images/logto-management-api-4994334ef32791d9ebc6c9aa298c9ecd.png",c=[];function d(e){const a={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:['Logto fornece um recurso embutido "Logto Management API", \xe9 um recurso somente leitura com a permiss\xe3o ',(0,n.jsx)(a.code,{children:"all"})," para acessar Logto Management API, voc\xea pode v\xea-lo na sua lista de recursos de API. O indicador de recurso de API est\xe1 no padr\xe3o ",(0,n.jsx)(a.code,{children:"https://{your-tenant-id}.logto.app/api"}),", e este ser\xe1 o valor do recurso usado no corpo da solicita\xe7\xe3o do token de acesso."]}),"\n",(0,n.jsx)("img",{alt:"Detalhes da Logto Management API",src:i,width:"600px"}),"\n",(0,n.jsxs)(a.p,{children:["Antes de acessar Logto Management API, certifique-se de que seu aplicativo M2M foi atribu\xeddo com pap\xe9is M2M que incluem a permiss\xe3o ",(0,n.jsx)(a.code,{children:"all"}),' deste recurso embutido "Logto Management API".']}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:'Logto tamb\xe9m fornece um papel M2M pr\xe9-configurado "Logto Management API access" para novos locat\xe1rios criados, ao qual a permiss\xe3o all do recurso Logto Management API j\xe1 foi atribu\xedda. Voc\xea pode us\xe1-lo diretamente sem configurar permiss\xf5es manualmente. Este papel pr\xe9-configurado tamb\xe9m pode ser editado e exclu\xeddo conforme necess\xe1rio.'})}),"\n",(0,n.jsx)(a.p,{children:"Agora, componha tudo o que temos e envie a solicita\xe7\xe3o:"}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(t.A,{value:"Node.js",label:"Node.js",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Substitua pelo seu endpoint Logto\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\nconst tenantId = 'your-tenant-id';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: `https://${tenantId}.logto.app/api`,\n      scope: 'all',\n    }).toString(),\n  });\n};\n"})})}),(0,n.jsxs)(t.A,{value:"cURL",label:"cURL",children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://${tenantId}.logto.app/api' \\\n  --data-urlencode 'scope=all'\n"})}),(0,n.jsx)(a.p,{children:"Lembre-se de substituir os valores reais pelos seus pr\xf3prios."})]})]}),"\n",(0,n.jsx)(a.admonition,{type:"caution",children:(0,n.jsxs)(a.p,{children:["Para usu\xe1rios do Logto Cloud: quando voc\xea estiver interagindo com Logto Management API, n\xe3o pode usar dom\xednio personalizado, use o endpoint padr\xe3o do Logto ",(0,n.jsx)(a.code,{children:"https://{your_tenant_id}.logto.app/oidc/token"})," para conceder tokens de acesso."]})})]})}function l(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},39327:(e,a,o)=>{o.d(a,{Ay:()=>i,RM:()=>t});var n=o(25105),s=o(79621);const t=[];function r(e){const a={admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["O Logto atualmente n\xe3o suporta o aplicativo M2M para representar um usu\xe1rio. O ",(0,n.jsx)(a.code,{children:"sub"})," no payload do token de acesso ser\xe1 o ID do aplicativo."]})})}function i(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},381:(e,a,o)=>{o.d(a,{Ay:()=>d,RM:()=>i});var n=o(25105),s=o(79621);const t=o.p+"assets/images/assign-m2m-roles-modal-f4f833eaf1c4b2c59509c918d3985eee.png",r=o.p+"assets/images/assign-m2m-roles-page-6084df6c23aec9c3f331738031f197b2.png",i=[];function c(e){const a={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Durante o processo de cria\xe7\xe3o do aplicativo M2M, voc\xea ser\xe1 direcionado para uma p\xe1gina onde pode atribuir ",(0,n.jsx)(a.a,{href:"/authorization/role-based-access-control/configure-roles#define-role-type",children:"pap\xe9is M2M"})," aos seus aplicativos:"]}),"\n",(0,n.jsx)("img",{alt:"Modal de atribui\xe7\xe3o de pap\xe9is M2M",src:t,width:"600px"}),"\n",(0,n.jsx)(a.p,{children:"Ou voc\xea tamb\xe9m pode atribuir esses pap\xe9is na p\xe1gina de detalhes do aplicativo M2M quando j\xe1 tiver um aplicativo M2M criado:"}),"\n",(0,n.jsx)("img",{alt:"P\xe1gina de atribui\xe7\xe3o de pap\xe9is M2M",src:r,width:"600px"})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3768:(e,a,o)=>{o.d(a,{A:()=>r});o(58101);var n=o(13526);const s={tabItem:"tabItem_y6LR"};var t=o(25105);function r(e){let{children:a,hidden:o,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,r),hidden:o,children:a})}},11043:(e,a,o)=>{o.d(a,{A:()=>M});var n=o(58101),s=o(13526),t=o(32571),r=o(55234),i=o(87394),c=o(87276),d=o(31637),l=o(16063);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:o}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:o,attributes:n,default:s}}=e;return{value:a,label:o,attributes:n,default:s}}))}(o);return function(e){const a=(0,d.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,o])}function m(e){let{value:a,tabValues:o}=e;return o.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:o}=e;const s=(0,r.W6)(),t=function(e){let{queryString:a=!1,groupId:o}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:a,groupId:o});return[(0,c.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(s.location.search);a.set(t,e),s.replace({...s.location,search:a.toString()})}),[t,s])]}function h(e){const{defaultValue:a,queryString:o=!1,groupId:s}=e,t=u(e),[r,c]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:t}))),[d,p]=g({queryString:o,groupId:s}),[h,x]=function(e){let{groupId:a}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,t]=(0,l.Dv)(o);return[s,(0,n.useCallback)((e=>{o&&t.set(e)}),[o,t])]}({groupId:s}),j=(()=>{const e=d??h;return m({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),x(e)}),[p,x,t]),tabValues:t}}var x=o(27034);const j={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var f=o(25105);function v(e){let{className:a,block:o,selectedValue:n,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),l=e=>{const a=e.currentTarget,o=c.indexOf(a),s=i[o].value;s!==n&&(d(a),r(s))},p=e=>{let a=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;a=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;a=c[o]??c[c.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":o},a),children:i.map((e=>{let{value:a,label:o,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>c.push(e),onKeyDown:p,onClick:l,...t,className:(0,s.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":n===a}),children:o??a},a)}))})}function b(e){let{lazy:a,children:o,selectedValue:t}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function A(e){const a=h(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...a,...e}),(0,f.jsx)(b,{...a,...e})]})}function M(e){const a=(0,x.A)();return(0,f.jsx)(A,{...e,children:p(e.children)},String(a))}},79621:(e,a,o)=>{o.d(a,{R:()=>r,x:()=>i});var n=o(58101);const s={},t=n.createContext(s);function r(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);