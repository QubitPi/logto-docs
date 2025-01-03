"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[80013],{6654:(e,o,n)=>{n.d(o,{Ay:()=>i,RM:()=>t});var a=n(25105),s=n(79621);const t=[];function r(e){const o={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:['Este guia assume que voc\xea criou um Aplicativo do tipo "',e.type,'" no Console de Administra\xe7\xe3o.']})})}function i(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},44788:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>f,contentTitle:()=>j,default:()=>A,frontMatter:()=>x,metadata:()=>a,toc:()=>b});const a=JSON.parse('{"id":"quick-starts/generic/machine-to-machine/README","title":"M\xe1quina para m\xe1quina: Autentica\xe7\xe3o com Logto","description":"Introdu\xe7\xe3o \\\\","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/quick-starts/generic/machine-to-machine/README.mdx","sourceDirName":"quick-starts/generic/machine-to-machine","slug":"/quick-starts/m2m","permalink":"/pt-BR/quick-starts/m2m","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/quick-starts/generic/machine-to-machine/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/quick-starts/m2m","sidebar_label":"M\xe1quina para m\xe1quina","sidebar_custom_props":{"description":"Permite comunica\xe7\xe3o direta entre m\xe1quinas."}},"sidebar":"quickStartSidebar","previous":{"title":"WordPress","permalink":"/pt-BR/quick-starts/wordpress"},"next":{"title":"Web tradicional","permalink":"/pt-BR/quick-starts/traditional-web"}}');var s=n(25105),t=n(79621),r=n(3768),i=n(11043);const c=n.p+"assets/images/api-identifier-ee920efff60f2af5efc6c726244393c1.png";var d=n(6654),l=n(45459),u=n(96688),p=n(36704),h=n(82226),m=n(39327),g=n(381);const x={slug:"/quick-starts/m2m",sidebar_label:"M\xe1quina para m\xe1quina",sidebar_custom_props:{description:"Permite comunica\xe7\xe3o direta entre m\xe1quinas."}},j="M\xe1quina para m\xe1quina: Autentica\xe7\xe3o com Logto",f={},b=[...d.RM,{value:"Introdu\xe7\xe3o",id:"intro",level:2},...g.RM,{value:"Obter um token de acesso",id:"fetch-an-access-token",level:2},{value:"No\xe7\xf5es b\xe1sicas sobre solicita\xe7\xe3o de token de acesso",id:"basics-about-access-token-request",level:3},...p.RM,{value:"Solicitar um token de acesso",id:"request-an-access-token",level:3},...h.RM,{value:"Resposta do token de acesso",id:"access-token-response",level:3},...m.RM,{value:"Acessar recurso usando token de acesso",id:"access-resource-using-access-token",level:2},...u.RM,...l.RM,{value:"Autentica\xe7\xe3o (Authentication)",id:"authentication",level:2}];function v(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"m\xe1quina-para-m\xe1quina-autentica\xe7\xe3o-com-logto",children:"M\xe1quina para m\xe1quina: Autentica\xe7\xe3o com Logto"})}),"\n",(0,s.jsx)(d.Ay,{type:"Machine-to-machine"}),"\n",(0,s.jsx)(o.h2,{id:"intro",children:"Introdu\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"M\xe1quina para m\xe1quina (M2M) \xe9 uma pr\xe1tica comum para autenticar se voc\xea tem um aplicativo (n\xe3o usu\xe1rio) que precisa se comunicar diretamente com recursos (geralmente, usando um aplicativo M2M n\xe3o precisa de intera\xe7\xf5es do usu\xe1rio, ent\xe3o n\xe3o tem interface de usu\xe1rio). Por exemplo, um servi\xe7o de API que atualiza dados personalizados dos usu\xe1rios no Logto, um servi\xe7o de estat\xedsticas que coleta pedidos di\xe1rios, etc."}),"\n",(0,s.jsx)(o.p,{children:"Como o Logto usa RBAC como sua pol\xedtica de controle de acesso, atribuir pap\xe9is M2M aos aplicativos M2M \xe9 necess\xe1rio para proteger sua API que precisa de comunica\xe7\xe3o direta de servi\xe7o."}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["Para aprender sobre nosso RBAC atual e a diferen\xe7a entre papel de usu\xe1rio e papel M2M, veja ",(0,s.jsx)(o.a,{href:"/authorization/role-based-access-control/configure-roles",children:"Configurar pap\xe9is"})," para saber mais."]})}),"\n",(0,s.jsx)(o.p,{children:"Existem dois casos de uso comuns para usar aplicativos m\xe1quina para m\xe1quina no Logto:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Acessando Logto Management API"}),": Nesse caso, voc\xea precisa atribuir um papel M2M que inclua a permiss\xe3o ",(0,s.jsx)(o.code,{children:"all"})," da Logto Management API integrada ao seu aplicativo M2M."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Acessando seu recurso de API"}),": Nesse caso, voc\xea precisa atribuir pap\xe9is M2M que incluam permiss\xf5es dos seus recursos de API ao seu aplicativo M2M."]}),"\n"]}),"\n",(0,s.jsx)(g.Ay,{}),"\n",(0,s.jsx)(o.p,{children:"Agora, vamos percorrer o processo de ponta a ponta. Para clareza, separaremos os passos para acessar Logto Management API e outros recursos de API. E assumimos que voc\xea j\xe1 criou um aplicativo M2M no Logto."}),"\n",(0,s.jsx)(o.h2,{id:"fetch-an-access-token",children:"Obter um token de acesso"}),"\n",(0,s.jsx)(o.h3,{id:"basics-about-access-token-request",children:"No\xe7\xf5es b\xe1sicas sobre solicita\xe7\xe3o de token de acesso"}),"\n",(0,s.jsx)(p.Ay,{}),"\n",(0,s.jsx)(o.p,{children:"Um exemplo de solicita\xe7\xe3o de token de acesso \xe9:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-http",children:"POST /oidc/token HTTP/1.1\nHost: your.logto.endpoint\nAuthorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=client_credentials\n&resource=https://shopping.api\n&scope=read:products write:products\n"})}),"\n",(0,s.jsx)(o.h3,{id:"request-an-access-token",children:"Solicitar um token de acesso"}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Na demonstra\xe7\xe3o a seguir, substitua ",(0,s.jsx)(o.code,{children:"https://your.logto.endpoint"})," pelo endpoint Logto que voc\xea est\xe1 direcionando. Para Logto Cloud, ser\xe1 ",(0,s.jsx)(o.code,{children:"https://{your-tenant-id}.logto.app"}),"."]})}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(r.A,{value:"Logto Management API",label:"Para Logto Management API",children:(0,s.jsx)(h.Ay,{})}),(0,s.jsxs)(r.A,{value:"API resource",label:"Para seu recurso de API",children:[(0,s.jsxs)(o.p,{children:["Na sua lista de Recursos de API, encontre o identificador de API que o aplicativo precisa acessar. Se voc\xea ainda n\xe3o adicionou o Recurso de API no Logto ou n\xe3o sabe o que \xe9 um Recurso de API, veja ",(0,s.jsx)(o.a,{href:"/authorization/api-resources",children:"Recurso de API"}),"."]}),(0,s.jsx)("img",{alt:"Identificador de API",src:c,width:"600px",style:{paddingBottom:"12px"}}),(0,s.jsxs)(o.p,{children:["Assuma que temos permiss\xf5es ",(0,s.jsx)(o.code,{children:"read:products"})," e ",(0,s.jsx)(o.code,{children:"write:products"}),' sob este recurso de API "Online Shopping".']}),(0,s.jsx)(o.p,{children:"Antes de acessar seu recurso de API, certifique-se de que seu aplicativo M2M foi atribu\xeddo com pap\xe9is M2M que incluem permiss\xf5es do seu recurso de API."}),(0,s.jsx)(o.p,{children:"Agora, componha tudo o que temos e envie a solicita\xe7\xe3o:"}),(0,s.jsxs)(i.A,{children:[(0,s.jsx)(r.A,{value:"Node.js",label:"Node.js",children:(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint';\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: 'https://shopping.api',\n      scope: 'read:products write:products',\n    }).toString(),\n  });\n};\n"})})}),(0,s.jsx)(r.A,{value:"cURL",label:"cURL",children:(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint/oidc/token' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://shopping.api' \\\n  --data-urlencode 'scope=read:products write:products'\n"})})})]})]})]}),"\n",(0,s.jsx)(o.h3,{id:"access-token-response",children:"Resposta do token de acesso"}),"\n",(0,s.jsx)(o.p,{children:"Um corpo de resposta de acesso bem-sucedido seria assim:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // Use este token para acessar o Logto Management API\n  "expires_in": 3600, // Expira\xe7\xe3o do token em segundos\n  "token_type": "Bearer", // Tipo de autentica\xe7\xe3o para sua solicita\xe7\xe3o ao usar o token de acesso\n  "scope": "all" // escopo `all` para Logto Management API\n}\n'})}),"\n",(0,s.jsx)(m.Ay,{}),"\n",(0,s.jsx)(o.h2,{id:"access-resource-using-access-token",children:"Acessar recurso usando token de acesso"}),"\n",(0,s.jsx)(u.Ay,{}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(r.A,{value:"Logto Management API",label:"Interagir com Logto Management API",children:(0,s.jsx)(l.Ay,{})}),(0,s.jsxs)(r.A,{value:"Your API resource",label:"Interagir com seu recurso de API",children:[(0,s.jsxs)(o.p,{children:["Usando o token de acesso solicitado com o recurso de API ",(0,s.jsx)(o.code,{children:"https://shopping.api"})," para obter todos os produtos na API de compras:"]}),(0,s.jsxs)(i.A,{children:[(0,s.jsx)(r.A,{value:"Node.js",label:"Node.js",children:(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",children:"const apiEndpoint = 'https://your.api.endpoint';\nconst accessToken = 'eyJhb...2g'; // Token de Acesso\n\nconst fetchProducts = async () => {\n  return await fetch(`${apiEndpoint}/products`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,s.jsx)(r.A,{value:"cURL",label:"cURL",children:(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.api.endpoint/products' \\\n  --header 'Authorization: Bearer eyJhbG...2 # Token de Acesso\n"})})})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"authentication",children:"Autentica\xe7\xe3o (Authentication)"}),"\n",(0,s.jsxs)(o.p,{children:["Se voc\xea estiver protegendo seus pr\xf3prios Recursos de API al\xe9m do Logto Management API, lembre-se de implementar a autentica\xe7\xe3o para seu recurso. Veja ",(0,s.jsx)(o.a,{href:"/authorization/api-resources/protect-your-api/#validate-authorization-tokens-for-api-requests",children:"Proteger sua API"})," para detalhes."]})]})}function A(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(v,{...e})}):v(e)}},45459:(e,o,n)=>{n.d(o,{Ay:()=>d,RM:()=>i});var a=n(25105),s=n(79621),t=n(3768),r=n(11043);const i=[];function c(e){const o={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["Usando o token de acesso solicitado com o recurso de API de gerenciamento Logto embutido ",(0,a.jsx)(o.code,{children:"https://[your-tenant-id].logto.app/api"})," para obter todos os aplicativos no Logto:"]}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(t.A,{value:"Node.js",label:"Node.js",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Substitua pelo seu endpoint Logto\nconst accessToken = 'eyJhb...2g'; // Token de acesso\n\nconst fetchLogtoApplications = async () => {\n  return await fetch(`${logtoEndpoint}/api/applications`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,a.jsxs)(t.A,{value:"cURL",label:"cURL",children:[(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g'\n"})}),(0,a.jsxs)(o.p,{children:["Lembre-se de substituir os valores reais pelos seus pr\xf3prios. O valor ap\xf3s ",(0,a.jsx)(o.code,{children:"Bearer"})," deve ser o token de acesso (JWT) que voc\xea recebeu."]})]})]})]})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},96688:(e,o,n)=>{n.d(o,{Ay:()=>i,RM:()=>t});var a=n(25105),s=n(79621);const t=[];function r(e){const o={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["Voc\xea pode notar que a resposta do token possui um campo ",(0,a.jsx)(o.code,{children:"token_type"}),", que \xe9 fixado como ",(0,a.jsx)(o.code,{children:"Bearer"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Portanto, voc\xea deve colocar o token de acesso no campo ",(0,a.jsx)(o.code,{children:"Authorization"})," dos cabe\xe7alhos HTTP com o formato Bearer (",(0,a.jsx)(o.code,{children:"Bearer YOUR_TOKEN"}),") ao interagir com seu servidor de recurso de API."]})]})}function i(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},36704:(e,o,n)=>{n.d(o,{Ay:()=>c,RM:()=>r});var a=n(25105),s=n(79621);const t=n.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png",r=[];function i(e){const o={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["O aplicativo M2M faz uma solicita\xe7\xe3o ",(0,a.jsx)(o.code,{children:"POST"})," ao endpoint de token para obter um token de acesso, adicionando os seguintes par\xe2metros usando o formato ",(0,a.jsx)(o.code,{children:"application/x-www-form-urlencoded"})," no corpo da entidade da solicita\xe7\xe3o HTTP:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"grant_type"}),": Deve ser definido como ",(0,a.jsx)(o.code,{children:"client_credentials"})]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"resource"}),": O recurso que voc\xea deseja acessar"]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"scope"}),": O escopo da solicita\xe7\xe3o de acesso"]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea tamb\xe9m precisa incluir as credenciais do seu aplicativo M2M no cabe\xe7alho da solicita\xe7\xe3o para que o endpoint de token autentique seu aplicativo M2M."}),"\n",(0,a.jsxs)(o.p,{children:["Isso \xe9 alcan\xe7ado incluindo as credenciais do aplicativo na forma de ",(0,a.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"autentica\xe7\xe3o b\xe1sica (Basic authentication)"})," no cabe\xe7alho de ",(0,a.jsx)(o.code,{children:"Authorization"})," da solicita\xe7\xe3o, onde o nome de usu\xe1rio \xe9 o App ID e a senha \xe9 o App Secret."]}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea pode encontrar o App ID e o App Secret na p\xe1gina de detalhes do seu aplicativo M2M:"}),"\n",(0,a.jsx)("img",{alt:"App ID e App Secret",src:t,width:"600px"})]})}function c(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},82226:(e,o,n)=>{n.d(o,{Ay:()=>l,RM:()=>c});var a=n(25105),s=n(79621),t=n(3768),r=n(11043);const i=n.p+"assets/images/logto-management-api-4994334ef32791d9ebc6c9aa298c9ecd.png",c=[];function d(e){const o={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:['Logto fornece um recurso embutido "Logto Management API", \xe9 um recurso somente leitura com a permiss\xe3o ',(0,a.jsx)(o.code,{children:"all"})," para acessar Logto Management API, voc\xea pode v\xea-lo na sua lista de recursos de API. O indicador de recurso de API est\xe1 no padr\xe3o ",(0,a.jsx)(o.code,{children:"https://{your-tenant-id}.logto.app/api"}),", e este ser\xe1 o valor do recurso usado no corpo da solicita\xe7\xe3o do token de acesso."]}),"\n",(0,a.jsx)("img",{alt:"Detalhes da Logto Management API",src:i,width:"600px"}),"\n",(0,a.jsxs)(o.p,{children:["Antes de acessar Logto Management API, certifique-se de que seu aplicativo M2M foi atribu\xeddo com pap\xe9is M2M que incluem a permiss\xe3o ",(0,a.jsx)(o.code,{children:"all"}),' deste recurso embutido "Logto Management API".']}),"\n",(0,a.jsx)(o.admonition,{type:"info",children:(0,a.jsx)(o.p,{children:'Logto tamb\xe9m fornece um papel M2M pr\xe9-configurado "Logto Management API access" para novos locat\xe1rios criados, ao qual a permiss\xe3o all do recurso Logto Management API j\xe1 foi atribu\xedda. Voc\xea pode us\xe1-lo diretamente sem configurar permiss\xf5es manualmente. Este papel pr\xe9-configurado tamb\xe9m pode ser editado e exclu\xeddo conforme necess\xe1rio.'})}),"\n",(0,a.jsx)(o.p,{children:"Agora, componha tudo o que temos e envie a solicita\xe7\xe3o:"}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(t.A,{value:"Node.js",label:"Node.js",children:(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Substitua pelo seu endpoint Logto\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\nconst tenantId = 'your-tenant-id';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: `https://${tenantId}.logto.app/api`,\n      scope: 'all',\n    }).toString(),\n  });\n};\n"})})}),(0,a.jsxs)(t.A,{value:"cURL",label:"cURL",children:[(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://${tenantId}.logto.app/api' \\\n  --data-urlencode 'scope=all'\n"})}),(0,a.jsx)(o.p,{children:"Lembre-se de substituir os valores reais pelos seus pr\xf3prios."})]})]}),"\n",(0,a.jsx)(o.admonition,{type:"caution",children:(0,a.jsxs)(o.p,{children:["Para usu\xe1rios do Logto Cloud: quando voc\xea estiver interagindo com Logto Management API, n\xe3o pode usar dom\xednio personalizado, use o endpoint padr\xe3o do Logto ",(0,a.jsx)(o.code,{children:"https://{your_tenant_id}.logto.app/oidc/token"})," para conceder tokens de acesso."]})})]})}function l(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},39327:(e,o,n)=>{n.d(o,{Ay:()=>i,RM:()=>t});var a=n(25105),s=n(79621);const t=[];function r(e){const o={admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:["O Logto atualmente n\xe3o suporta o aplicativo M2M para representar um usu\xe1rio. O ",(0,a.jsx)(o.code,{children:"sub"})," no payload do token de acesso ser\xe1 o ID do aplicativo."]})})}function i(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},381:(e,o,n)=>{n.d(o,{Ay:()=>d,RM:()=>i});var a=n(25105),s=n(79621);const t=n.p+"assets/images/assign-m2m-roles-modal-f4f833eaf1c4b2c59509c918d3985eee.png",r=n.p+"assets/images/assign-m2m-roles-page-6084df6c23aec9c3f331738031f197b2.png",i=[];function c(e){const o={a:"a",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["Durante o processo de cria\xe7\xe3o do aplicativo M2M, voc\xea ser\xe1 direcionado para uma p\xe1gina onde pode atribuir ",(0,a.jsx)(o.a,{href:"/authorization/role-based-access-control/configure-roles#define-role-type",children:"pap\xe9is M2M"})," aos seus aplicativos:"]}),"\n",(0,a.jsx)("img",{alt:"Modal de atribui\xe7\xe3o de pap\xe9is M2M",src:t,width:"600px"}),"\n",(0,a.jsx)(o.p,{children:"Ou voc\xea tamb\xe9m pode atribuir esses pap\xe9is na p\xe1gina de detalhes do aplicativo M2M quando j\xe1 tiver um aplicativo M2M criado:"}),"\n",(0,a.jsx)("img",{alt:"P\xe1gina de atribui\xe7\xe3o de pap\xe9is M2M",src:r,width:"600px"})]})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},3768:(e,o,n)=>{n.d(o,{A:()=>r});n(58101);var a=n(13526);const s={tabItem:"tabItem_y6LR"};var t=n(25105);function r(e){let{children:o,hidden:n,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,r),hidden:n,children:o})}},11043:(e,o,n)=>{n.d(o,{A:()=>M});var a=n(58101),s=n(13526),t=n(32571),r=n(55234),i=n(87394),c=n(87276),d=n(31637),l=n(16063);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:o,children:n}=e;return(0,a.useMemo)((()=>{const e=o??function(e){return u(e).map((e=>{let{props:{value:o,label:n,attributes:a,default:s}}=e;return{value:o,label:n,attributes:a,default:s}}))}(n);return function(e){const o=(0,d.XI)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,n])}function h(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function m(e){let{queryString:o=!1,groupId:n}=e;const s=(0,r.W6)(),t=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:o,groupId:n});return[(0,c.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const o=new URLSearchParams(s.location.search);o.set(t,e),s.replace({...s.location,search:o.toString()})}),[t,s])]}function g(e){const{defaultValue:o,queryString:n=!1,groupId:s}=e,t=p(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:o,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!h({value:o,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:t}))),[d,u]=m({queryString:n,groupId:s}),[g,x]=function(e){let{groupId:o}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(o),[s,t]=(0,l.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:s}),j=(()=>{const e=d??g;return h({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,t]),tabValues:t}}var x=n(27034);const j={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var f=n(25105);function b(e){let{className:o,block:n,selectedValue:a,selectValue:r,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),l=e=>{const o=e.currentTarget,n=c.indexOf(o),s=i[n].value;s!==a&&(d(o),r(s))},u=e=>{let o=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;o=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;o=c[n]??c[c.length-1];break}}o?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},o),children:i.map((e=>{let{value:o,label:n,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===o?0:-1,"aria-selected":a===o,ref:e=>c.push(e),onKeyDown:u,onClick:l,...t,className:(0,s.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":a===o}),children:n??o},o)}))})}function v(e){let{lazy:o,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,o)=>(0,a.cloneElement)(e,{key:o,hidden:e.props.value!==t})))})}function A(e){const o=g(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...o,...e}),(0,f.jsx)(v,{...o,...e})]})}function M(e){const o=(0,x.A)();return(0,f.jsx)(A,{...e,children:u(e.children)},String(o))}},79621:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>i});var a=n(58101);const s={},t=a.createContext(s);function r(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);