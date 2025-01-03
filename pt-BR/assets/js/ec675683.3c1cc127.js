"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[35972],{2258:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"developers/sdk-conventions/platform-sdk-convention","title":"Conven\xe7\xe3o do SDK da Plataforma","description":"O SDK da Plataforma fornece uma maneira padr\xe3o de integrar o cliente com o servi\xe7o Logto na plataforma espec\xedfica e acelera o processo de integra\xe7\xe3o.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/sdk-conventions/platform-sdk-conventions.mdx","sourceDirName":"developers/sdk-conventions","slug":"/developers/sdk-conventions/platform-sdk-convention","permalink":"/pt-BR/developers/sdk-conventions/platform-sdk-convention","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/sdk-conventions/platform-sdk-conventions.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"platform-sdk-convention","title":"Conven\xe7\xe3o do SDK da Plataforma","sidebar_label":"Conven\xe7\xe3o do SDK da Plataforma","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Conven\xe7\xe3o do Core SDK","permalink":"/pt-BR/developers/sdk-conventions/core-sdk-convention"},"next":{"title":"Desenvolvedor","permalink":"/pt-BR/developers/"}}');var r=o(25105),d=o(79621);const i={id:"platform-sdk-convention",title:"Conven\xe7\xe3o do SDK da Plataforma",sidebar_label:"Conven\xe7\xe3o do SDK da Plataforma",sidebar_position:4},c="Conven\xe7\xe3o do SDK da Plataforma",l={},t=[{value:"Tipos b\xe1sicos",id:"basic-types",level:2},{value:"LogtoConfig",id:"logtoconfig",level:3},{value:"AccessToken",id:"accesstoken",level:3},{value:"LogtoClient",id:"logtoclient",level:2},{value:"Propriedades",id:"properties",level:3},{value:"logtoConfig",id:"logtoconfig-1",level:3},{value:"oidcConfig",id:"oidcconfig",level:3},{value:"accessTokenMap",id:"accesstokenmap",level:3},{value:"refreshToken",id:"refreshtoken",level:3},{value:"idToken",id:"idtoken",level:3},{value:"M\xe9todos",id:"methods",level:3},{value:"constructor",id:"constructor",level:3},{value:"isAuthenticated",id:"isauthenticated",level:3},{value:"SignIn",id:"signin",level:3},{value:"SignOut",id:"signout",level:3},{value:"getAccessToken",id:"getaccesstoken",level:3},{value:"getIdTokenClaims",id:"getidtokenclaims",level:3}];function a(e){const s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{Details:o}=s;return o||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"conven\xe7\xe3o-do-sdk-da-plataforma",children:"Conven\xe7\xe3o do SDK da Plataforma"})}),"\n",(0,r.jsx)(s.p,{children:"O SDK da Plataforma fornece uma maneira padr\xe3o de integrar o cliente com o servi\xe7o Logto na plataforma espec\xedfica e acelera o processo de integra\xe7\xe3o."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["O SDK da Plataforma encapsula ",(0,r.jsx)(s.a,{href:"/developers/sdk-conventions/core-sdk-convention",children:"o n\xfacleo"})," com implementa\xe7\xe3o espec\xedfica da plataforma."]}),"\n",(0,r.jsx)(s.li,{children:"O SDK da Plataforma deve fornecer tipos b\xe1sicos que tornem o SDK mais f\xe1cil de usar."}),"\n",(0,r.jsxs)(s.li,{children:["O SDK da Plataforma deve ser exportado como uma classe chamada ",(0,r.jsx)(s.code,{children:"LogtoClient"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"basic-types",children:"Tipos b\xe1sicos"}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"logtoconfig",children:"LogtoConfig"})}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nome"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Obrigat\xf3rio"}),(0,r.jsx)(s.th,{children:"Valor Padr\xe3o"}),(0,r.jsx)(s.th,{children:"Notas"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"endpoint"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"O endpoint do servi\xe7o OIDC."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"appId"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"\u2705"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"O ID do aplicativo vem do aplicativo que registramos no Logto Service."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"scopes"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string[]"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"[openid, offline_access, profile]"})}),(0,r.jsxs)(s.td,{children:["Este campo sempre cont\xe9m ",(0,r.jsx)(s.code,{children:"openid"}),", ",(0,r.jsx)(s.code,{children:"offline_access"})," e ",(0,r.jsx)(s.code,{children:"profile"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"resources"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string[]"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Os indicadores de recursos protegidos que queremos usar."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"prompt"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"consent"})}),(0,r.jsxs)(s.td,{children:["O valor do prompt usado em ",(0,r.jsx)(s.code,{children:"generateSignInUri"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"usingPersistStorage"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"boolean"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"true"})}),(0,r.jsx)(s.td,{children:"Decidir armazenar credenciais na m\xe1quina local ou n\xe3o."})]})]})]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"*Notas"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Voc\xea pode estender este ",(0,r.jsx)(s.code,{children:"LogtoConfig"})," se precisar."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"usingPersistStorage"})," \xe9 fornecido apenas em SDKs de cliente. Ex.: iOS, Android e SPA."]}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"accesstoken",children:"AccessToken"})}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nome"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Notas"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"token"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"scope"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"expiresAt"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"Timestamp em segundos"})]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"logtoclient",children:"LogtoClient"}),"\n",(0,r.jsx)(s.h3,{id:"properties",children:"Propriedades"}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"logtoconfig-1",children:"logtoConfig"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"LogtoConfig"})})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"oidcconfig",children:"oidcConfig"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"OidcConfigResponse?"})})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"accesstokenmap",children:"accessTokenMap"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Map<string, AccessToken>"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Chave"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["A chave deve ser constru\xedda com ",(0,r.jsx)(s.code,{children:"scope"})," e ",(0,r.jsx)(s.code,{children:"resource"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Os valores em ",(0,r.jsx)(s.code,{children:"scope"})," devem ser ordenados alfabeticamente e unidos com espa\xe7o."]}),"\n",(0,r.jsxs)(s.li,{children:["A chave deve ser constru\xedda no padr\xe3o: ",(0,r.jsx)(s.code,{children:"${scope}@${resource}"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Se o ",(0,r.jsx)(s.code,{children:"scope"})," ou ",(0,r.jsx)(s.code,{children:"resource"})," for nulo ou vazio, seu valor deve ser tratado como vazio."]}),"\n"]}),(0,r.jsxs)(s.p,{children:["Ex.: ",(0,r.jsx)(s.code,{children:'"offline_access openid read:usr@https://logto.dev/api"'}),", ",(0,r.jsx)(s.code,{children:'"@https://logto.dev/api"'}),", ",(0,r.jsx)(s.code,{children:'"openid@"'}),", ",(0,r.jsx)(s.code,{children:'"@"'}),"."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Valor"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"AccessToken"}),", que usa a propriedade ",(0,r.jsx)(s.code,{children:"expiresAt"})," para indicar o momento exato em que um token de acesso expira."]}),"\n"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notas"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["O ",(0,r.jsx)(s.code,{children:"scope"})," sempre ser\xe1 um valor nulo, pois n\xe3o suportamos escopos personalizados no Logto V1."]}),"\n",(0,r.jsxs)(s.li,{children:["Ao construir a chave do token de acesso para armazenar um token de acesso:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"scope"})," sempre ser\xe1 um valor nulo."]}),"\n",(0,r.jsxs)(s.li,{children:["se o token de acesso n\xe3o for um jwt, trate o ",(0,r.jsx)(s.code,{children:"resource"})," como um valor nulo."]}),"\n",(0,r.jsxs)(s.li,{children:["se o token de acesso for um jwt, decodifique o token de acesso e use o valor da reivindica\xe7\xe3o ",(0,r.jsx)(s.code,{children:"aud"})," do payload como a parte ",(0,r.jsx)(s.code,{children:"resource"})," da chave do token de acesso."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"refreshtoken",children:"refreshToken"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string?"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notas"})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"refreshToken"})," ser\xe1 definido ou atualizado nas circunst\xe2ncias abaixo:"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Carregar ",(0,r.jsx)(s.code,{children:"refreshToken"})," do armazenamento."]}),"\n",(0,r.jsxs)(s.li,{children:["O servidor retorna um ",(0,r.jsx)(s.code,{children:"refreshToken"})," na resposta ao buscar o token com sucesso."]}),"\n",(0,r.jsxs)(s.li,{children:["Sair (ser\xe1 definido como ",(0,r.jsx)(s.code,{children:"null"}),")."]}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"idtoken",children:"idToken"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string?"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notas"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"idToken"})," deve ser verificado se vier do backend."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"idToken"})," ser\xe1 definido ou atualizado nas circunst\xe2ncias abaixo:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Carregar ",(0,r.jsx)(s.code,{children:"idToken"})," do armazenamento."]}),"\n",(0,r.jsxs)(s.li,{children:["O servidor retorna um ",(0,r.jsx)(s.code,{children:"idToken"})," na resposta ao buscar o token com sucesso."]}),"\n",(0,r.jsxs)(s.li,{children:["Sair (ser\xe1 definido como ",(0,r.jsx)(s.code,{children:"null"}),")."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h3,{id:"methods",children:"M\xe9todos"}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"constructor",children:"constructor"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Par\xe2metros"})}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"logtoConfig"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"LogtoConfig"})})]})})]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo de Retorno"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"LogtoClient"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notas"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Voc\xea pode adicionar par\xe2metros extras se precisar."}),"\n",(0,r.jsxs)(s.li,{children:["Se o uso de armazenamento persistente estiver habilitado em logtoConfig, o SDK da plataforma fornecer\xe1 as seguintes funcionalidades:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Armazenar dados persistentes com uma chave \xfanica baseada em ",(0,r.jsx)(s.code,{children:"clientId"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Carregar ",(0,r.jsx)(s.code,{children:"refreshToken"})," e ",(0,r.jsx)(s.code,{children:"idToken"})," da m\xe1quina local na inicializa\xe7\xe3o."]}),"\n",(0,r.jsxs)(s.li,{children:["Armazenar ",(0,r.jsx)(s.code,{children:"refreshToken"})," e ",(0,r.jsx)(s.code,{children:"idToken"})," localmente em ",(0,r.jsx)(s.code,{children:"Core.fetchTokenByAuthorizationCode"})," e ",(0,r.jsx)(s.code,{children:"Core.fetchTokenByRefreshToken"}),"."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"isauthenticated",children:"isAuthenticated"})}),(0,r.jsxs)(s.p,{children:["Para saber se um usu\xe1rio est\xe1 autenticado ou n\xe3o.",(0,r.jsx)(s.br,{}),"\n","Isso tamb\xe9m pode ser definido como um getter."]}),(0,r.jsx)(s.p,{children:"Um usu\xe1rio \xe9 tratado como autenticado quando:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Obtivemos um Token de ID com sucesso."}),"\n",(0,r.jsx)(s.li,{children:"Carregamos um Token de ID da m\xe1quina local."}),"\n"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Par\xe2metros"})}),(0,r.jsx)(s.p,{children:"Nenhum."}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo de Retorno"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"boolean"})})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"signin",children:"SignIn"})}),(0,r.jsx)(s.p,{children:"Este m\xe9todo deve iniciar um fluxo de login e o SDK da plataforma deve cuidar de todas as etapas que uma autoriza\xe7\xe3o precisa para ser conclu\xedda, incluindo o processo de redirecionamento de login."}),(0,r.jsx)(s.p,{children:"O usu\xe1rio ser\xe1 autenticado ap\xf3s este m\xe9todo ser chamado com sucesso."}),(0,r.jsx)(s.p,{children:"O processo de login depender\xe1 das Fun\xe7\xf5es do Core SDK:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"generateSignInUri"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"verifyAndParseCodeFromCallbackUri"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"fetchTokenByAuthorizationCode"})}),"\n"]}),(0,r.jsx)(s.p,{children:"Notas:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Como generateSignInUri inclui os recursos que precisamos, n\xe3o precisamos passar o recurso para a fun\xe7\xe3o fetchTokenByAuthorizationCode."}),"\n"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Par\xe2metros"})}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"redirectUri"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo de Retorno"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Lan\xe7a"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Qualquer erro que ocorra durante este processo de login."}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"signout",children:"SignOut"})}),(0,r.jsx)(s.p,{children:"O processo de logout deve seguir os passos:"}),(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Limpar armazenamento local, cookies, dados persistentes ou algo mais."}),"\n",(0,r.jsxs)(s.li,{children:["Revogar o token de atualiza\xe7\xe3o obtido via ",(0,r.jsx)(s.code,{children:"Core.revoke"})," (o servi\xe7o Logto revogar\xe1 todos os tokens relacionados se o token de atualiza\xe7\xe3o for revogado)."]}),"\n",(0,r.jsx)(s.li,{children:"Redirecionar o usu\xe1rio para o endpoint de logout do Logto, a menos que o passo 1 limpe a sess\xe3o da p\xe1gina de login."}),"\n"]}),(0,r.jsx)(s.p,{children:"Notas:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["No passo 2, ",(0,r.jsx)(s.code,{children:"Core.revoke"})," \xe9 uma chamada ass\xedncrona e n\xe3o bloquear\xe1 o processo de logout, mesmo que falhe."]}),"\n",(0,r.jsxs)(s.li,{children:["O passo 3 depende de ",(0,r.jsx)(s.code,{children:"Core.generateSignOutUri"})," para gerar o endpoint de logout do Logto."]}),"\n"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Par\xe2metros"})}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Obrigat\xf3rio"}),(0,r.jsx)(s.th,{children:"Valor Padr\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"postLogoutRedirectUri"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"null"})})]})})]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo de Retorno"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Lan\xe7a"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Qualquer erro que ocorra durante este processo de logout."}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"getaccesstoken",children:"getAccessToken"})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"getAccessToken"})," recupera um ",(0,r.jsx)(s.code,{children:"AccessToken"})," por ",(0,r.jsx)(s.code,{children:"resource"})," e ",(0,r.jsx)(s.code,{children:"scope"})," de ",(0,r.jsx)(s.code,{children:"accessTokenMap"})," e retorna o valor ",(0,r.jsx)(s.code,{children:"token"})," desse ",(0,r.jsx)(s.code,{children:"AccessToken"}),"."]}),(0,r.jsxs)(s.p,{children:["Definimos o ",(0,r.jsx)(s.code,{children:"scope"})," como ",(0,r.jsx)(s.code,{children:"null"})," ao construir a chave do ",(0,r.jsx)(s.code,{children:"accessTokenMap"}),", pois n\xe3o suportamos escopos personalizados no Logto V1."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Notas"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Se n\xe3o conseguir encontrar um ",(0,r.jsx)(s.code,{children:"AccessToken"})," correspondente, execute uma a\xe7\xe3o ",(0,r.jsx)(s.code,{children:"Core.fetchTokenByRefreshToken"})," para buscar o token necess\xe1rio."]}),"\n",(0,r.jsxs)(s.li,{children:["Se o ",(0,r.jsx)(s.code,{children:"accessToken"})," n\xe3o estiver expirado, retorne o valor ",(0,r.jsx)(s.code,{children:"token"})," dentro dele."]}),"\n",(0,r.jsxs)(s.li,{children:["Se o ",(0,r.jsx)(s.code,{children:"accessToken"})," estiver expirado, execute uma a\xe7\xe3o ",(0,r.jsx)(s.code,{children:"Core.fetchTokenByRefreshToken"})," para recuperar um novo ",(0,r.jsx)(s.code,{children:"accessToken"}),", atualize o ",(0,r.jsx)(s.code,{children:"accessTokenMap"})," local e retorne o novo valor ",(0,r.jsx)(s.code,{children:"token"})," dentro dele."]}),"\n",(0,r.jsxs)(s.li,{children:["Se ",(0,r.jsx)(s.code,{children:"Core.fetchTokenByRefreshToken"})," falhar, informe o usu\xe1rio sobre a exce\xe7\xe3o ocorrida."]}),"\n",(0,r.jsx)(s.li,{children:"Se n\xe3o conseguir encontrar o refreshToken, informe o usu\xe1rio sobre uma exce\xe7\xe3o n\xe3o autorizada."}),"\n",(0,r.jsxs)(s.li,{children:["Somente obtendo um ",(0,r.jsx)(s.code,{children:"refreshToken"})," ap\xf3s o login, podemos executar uma a\xe7\xe3o ",(0,r.jsx)(s.code,{children:"Core.fetchTokenByRefreshToken"}),"."]}),"\n"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Par\xe2metros"})}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Obrigat\xf3rio"}),(0,r.jsx)(s.th,{children:"Valor Padr\xe3o"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"resource"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"null"})})]})})]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo de Retorno"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Lan\xe7a"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"O usu\xe1rio n\xe3o est\xe1 autenticado."}),"\n",(0,r.jsxs)(s.li,{children:["O ",(0,r.jsx)(s.code,{children:"resource"})," de entrada n\xe3o est\xe1 definido no ",(0,r.jsx)(s.code,{children:"logtoConfig"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Nenhum token de atualiza\xe7\xe3o encontrado antes de ",(0,r.jsx)(s.code,{children:"Core.fetchTokenByRefreshToken"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Core.fetchTokenByRefreshToken"})," falhou."]}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(s.h3,{id:"getidtokenclaims",children:"getIdTokenClaims"})}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"getIdTokenClaims"})," retorna um objeto que carrega as reivindica\xe7\xf5es da propriedade ",(0,r.jsx)(s.code,{children:"idToken"}),"."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Par\xe2metros"})}),(0,r.jsx)(s.p,{children:"Nenhum."}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Tipo de Retorno"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"IdTokenClaims"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Lan\xe7a"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"O usu\xe1rio n\xe3o est\xe1 autenticado."}),"\n"]})]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},79621:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>c});var n=o(58101);const r={},d=n.createContext(r);function i(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);