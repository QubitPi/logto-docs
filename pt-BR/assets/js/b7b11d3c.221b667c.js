"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[75760],{99566:(e,o,r)=>{r.d(o,{Ay:()=>d,RM:()=>n});var i=r(25105),s=r(79621);const n=[];function t(e){const o={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(o.admonition,{type:"tip",children:(0,i.jsxs)(o.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,i.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},98965:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"integrations/social/oauth2/README","title":"Configurar login social com protocolo OAuth 2.0","description":"O conector oficial do Logto para o protocolo OAuth 2.0.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/social/oauth2/README.mdx","sourceDirName":"integrations/social/oauth2","slug":"/integrations/oauth2","permalink":"/pt-BR/integrations/oauth2","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/social/oauth2/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/oauth2","sidebar_label":"OAuth 2.0 (Social)","sidebar_custom_props":{"description":"O framework de autoriza\xe7\xe3o OAuth 2.0 permite que um aplicativo de terceiros obtenha acesso limitado a um servi\xe7o HTTP.","logoFilename":"oauth.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Naver","permalink":"/pt-BR/integrations/naver"},"next":{"title":"OIDC (Social)","permalink":"/pt-BR/integrations/oidc"}}');var s=r(25105),n=r(79621),t=r(99566);const d={slug:"/integrations/oauth2",sidebar_label:"OAuth 2.0 (Social)",sidebar_custom_props:{description:"O framework de autoriza\xe7\xe3o OAuth 2.0 permite que um aplicativo de terceiros obtenha acesso limitado a um servi\xe7o HTTP.",logoFilename:"oauth.svg"}},a="Configurar login social com protocolo OAuth 2.0",c={},l=[...t.RM,{value:"Introdu\xe7\xe3o",id:"get-started",level:2},{value:"Crie seu aplicativo OAuth",id:"create-your-oauth-app",level:2},{value:"Configure seu conector",id:"configure-your-connector",level:2},{value:"Tipos de configura\xe7\xe3o",id:"config-types",level:2},{value:"Refer\xeancia",id:"reference",level:2}];function p(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"configurar-login-social-com-protocolo-oauth-20",children:"Configurar login social com protocolo OAuth 2.0"})}),"\n",(0,s.jsx)(o.p,{children:"O conector oficial do Logto para o protocolo OAuth 2.0."}),"\n",(0,s.jsx)(t.Ay,{}),"\n",(0,s.jsx)(o.h2,{id:"get-started",children:"Introdu\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"O conector OAuth permite a conex\xe3o do Logto a um provedor de identidade social arbitr\xe1rio que suporta o protocolo OAuth 2.0."}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["\u2139\ufe0f ",(0,s.jsx)(o.strong,{children:"Nota"})]}),"\n",(0,s.jsx)(o.p,{children:"O conector OAuth \xe9 um tipo especial de conector no Logto, voc\xea pode adicionar alguns conectores baseados no protocolo OAuth."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"create-your-oauth-app",children:"Crie seu aplicativo OAuth"}),"\n",(0,s.jsx)(o.p,{children:"Quando voc\xea abre esta p\xe1gina, acreditamos que voc\xea j\xe1 sabe qual provedor de identidade social deseja conectar. A primeira coisa a fazer \xe9 confirmar que o provedor de identidade suporta o protocolo OAuth, que \xe9 um pr\xe9-requisito para configurar um conector v\xe1lido. Em seguida, siga as instru\xe7\xf5es do provedor de identidade para registrar e criar o aplicativo relevante para autoriza\xe7\xe3o OAuth."}),"\n",(0,s.jsx)(o.h2,{id:"configure-your-connector",children:"Configure seu conector"}),"\n",(0,s.jsx)(o.p,{children:'N\xf3s SOMENTE suportamos o tipo de concess\xe3o "Authorization Code" por quest\xf5es de seguran\xe7a e ele se encaixa perfeitamente no cen\xe1rio do Logto.'}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"clientId"})," e ",(0,s.jsx)(o.code,{children:"clientSecret"})," podem ser encontrados na p\xe1gina de detalhes dos seus aplicativos OAuth."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"clientId"}),": O ID do cliente \xe9 um identificador \xfanico que identifica o aplicativo cliente durante o registro com o servidor de autoriza\xe7\xe3o. Este ID \xe9 usado pelo servidor de autoriza\xe7\xe3o para verificar a identidade do aplicativo cliente e associar quaisquer tokens de acesso autorizados a esse aplicativo cliente espec\xedfico."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"clientSecret"}),": O segredo do cliente \xe9 uma chave confidencial emitida para o aplicativo cliente pelo servidor de autoriza\xe7\xe3o durante o registro. O aplicativo cliente usa essa chave secreta para se autenticar com o servidor de autoriza\xe7\xe3o ao solicitar tokens de acesso. O segredo do cliente \xe9 considerado informa\xe7\xe3o confidencial e deve ser mantido seguro o tempo todo."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"tokenEndpointAuthMethod"}),": O m\xe9todo de autentica\xe7\xe3o do endpoint de token \xe9 usado pelo aplicativo cliente para se autenticar com o servidor de autoriza\xe7\xe3o ao solicitar tokens de acesso. Para descobrir m\xe9todos suportados, consulte o campo ",(0,s.jsx)(o.code,{children:"token_endpoint_auth_methods_supported"})," dispon\xedvel no endpoint de descoberta OpenID Connect do provedor de servi\xe7os OAuth 2.0, ou consulte a documenta\xe7\xe3o relevante fornecida pelo provedor de servi\xe7os OAuth 2.0."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"clientSecretJwtSigningAlgorithm (Opcional)"}),": Somente necess\xe1rio quando ",(0,s.jsx)(o.code,{children:"tokenEndpointAuthMethod"})," \xe9 ",(0,s.jsx)(o.code,{children:"client_secret_jwt"}),". O algoritmo de assinatura JWT do segredo do cliente \xe9 usado pelo aplicativo cliente para assinar o JWT que \xe9 enviado ao servidor de autoriza\xe7\xe3o durante a solicita\xe7\xe3o de token."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"scope"}),': O par\xe2metro de escopo \xe9 usado para especificar o conjunto de recursos e permiss\xf5es que o aplicativo cliente est\xe1 solicitando acesso. O par\xe2metro de escopo \xe9 tipicamente definido como uma lista de valores separados por espa\xe7o que representam permiss\xf5es espec\xedficas. Por exemplo, um valor de escopo de "read write" pode indicar que o aplicativo cliente est\xe1 solicitando acesso de leitura e escrita aos dados de um usu\xe1rio.']}),"\n",(0,s.jsxs)(o.p,{children:["Espera-se que voc\xea encontre ",(0,s.jsx)(o.code,{children:"authorizationEndpoint"}),", ",(0,s.jsx)(o.code,{children:"tokenEndpoint"})," e ",(0,s.jsx)(o.code,{children:"userInfoEndpoint"})," na documenta\xe7\xe3o do fornecedor social."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"authenticationEndpoint"}),": Este endpoint \xe9 usado para iniciar o processo de autentica\xe7\xe3o. O processo de autentica\xe7\xe3o geralmente envolve o usu\xe1rio fazer login e conceder autoriza\xe7\xe3o para que o aplicativo cliente acesse seus recursos."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"tokenEndpoint"}),": Este endpoint \xe9 usado pelo aplicativo cliente para obter um token de acesso que pode ser usado para acessar os recursos solicitados. O aplicativo cliente geralmente envia uma solicita\xe7\xe3o ao endpoint de token com um tipo de concess\xe3o e c\xf3digo de autoriza\xe7\xe3o para receber um token de acesso."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"userInfoEndpoint"}),": Este endpoint \xe9 usado pelo aplicativo cliente para obter informa\xe7\xf5es adicionais sobre o usu\xe1rio, como seu nome completo, endere\xe7o de email ou foto de perfil. O endpoint de informa\xe7\xf5es do usu\xe1rio \xe9 geralmente acessado ap\xf3s o aplicativo cliente ter obtido um token de acesso do endpoint de token."]}),"\n",(0,s.jsxs)(o.p,{children:["O Logto tamb\xe9m fornece um campo ",(0,s.jsx)(o.code,{children:"profileMap"})," que os usu\xe1rios podem personalizar o mapeamento dos perfis dos fornecedores sociais, que geralmente n\xe3o s\xe3o padr\xe3o. As chaves s\xe3o os nomes dos campos de perfil de usu\xe1rio padr\xe3o do Logto e os valores correspondentes devem ser os nomes dos campos dos perfis sociais. Na fase atual, o Logto s\xf3 se preocupa com 'id', 'name', 'avatar', 'email' e 'phone' do perfil social, apenas 'id' \xe9 obrigat\xf3rio e os outros s\xe3o campos opcionais."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"responseType"})," e ",(0,s.jsx)(o.code,{children:"grantType"})," podem ser SOMENTE valores FIXOS com o tipo de concess\xe3o de c\xf3digo de autoriza\xe7\xe3o, ent\xe3o os tornamos opcionais e os valores padr\xe3o ser\xe3o preenchidos automaticamente."]}),"\n",(0,s.jsxs)(o.p,{children:["Por exemplo, voc\xea pode encontrar ",(0,s.jsx)(o.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect#an-id-tokens-payload",children:"resposta de perfil de usu\xe1rio do Google"})," e, portanto, seu ",(0,s.jsx)(o.code,{children:"profileMap"})," deve ser assim:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-json",children:'{\n  "id": "sub",\n  "avatar": "picture"\n}\n'})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["\u2139\ufe0f ",(0,s.jsx)(o.strong,{children:"Nota"})]}),"\n",(0,s.jsxs)(o.p,{children:["Fornecemos uma chave ",(0,s.jsx)(o.code,{children:"customConfig"})," OPCIONAL para colocar seus par\xe2metros personalizados.\nCada provedor de identidade social pode ter sua pr\xf3pria variante no protocolo padr\xe3o OAuth. Se o seu provedor de identidade social desejado seguir estritamente o protocolo padr\xe3o OAuth, ent\xe3o voc\xea n\xe3o precisa se preocupar com ",(0,s.jsx)(o.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"config-types",children:"Tipos de configura\xe7\xe3o"}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Nome"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Obrigat\xf3rio"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"authorizationEndpoint"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"true"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"userInfoEndpoint"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"true"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"clientId"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"true"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"clientSecret"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"true"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tokenEndpointResponseType"}),(0,s.jsx)(o.td,{children:"enum"}),(0,s.jsx)(o.td,{children:"false"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"responseType"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"grantType"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tokenEndpoint"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"scope"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"customConfig"}),(0,s.jsx)(o.td,{children:"Record<string, string>"}),(0,s.jsx)(o.td,{children:"false"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"profileMap"}),(0,s.jsx)(o.td,{children:"ProfileMap"}),(0,s.jsx)(o.td,{children:"false"})]})]})]}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Campos do ProfileMap"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Obrigat\xf3rio"}),(0,s.jsx)(o.th,{children:"Valor padr\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"id"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"}),(0,s.jsx)(o.td,{children:"id"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"name"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"}),(0,s.jsx)(o.td,{children:"name"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"avatar"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"}),(0,s.jsx)(o.td,{children:"avatar"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"email"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"}),(0,s.jsx)(o.td,{children:"email"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"phone"}),(0,s.jsx)(o.td,{children:"string"}),(0,s.jsx)(o.td,{children:"false"}),(0,s.jsx)(o.td,{children:"phone"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"reference",children:"Refer\xeancia"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.a,{href:"https://www.rfc-editor.org/rfc/rfc6749",children:"O Framework de Autoriza\xe7\xe3o OAuth 2.0"})}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},79621:(e,o,r)=>{r.d(o,{R:()=>t,x:()=>d});var i=r(58101);const s={},n=i.createContext(s);function t(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);