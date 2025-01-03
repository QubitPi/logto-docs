"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[61333],{44255:(e,n,i)=>{i.d(n,{Ay:()=>t,RM:()=>o});var s=i(25105),r=i(79621);const o=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,s.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function t(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},24889:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"integrations/social/oidc/README","title":"Configura el inicio de sesi\xf3n social con OpenID Connect (OIDC)","description":"El conector oficial de Logto para el protocolo OpenID Connect (OIDC).","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/oidc/README.mdx","sourceDirName":"integrations/social/oidc","slug":"/integrations/oidc","permalink":"/es/integrations/oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/oidc/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/oidc","sidebar_label":"OIDC (Social)","sidebar_custom_props":{"description":"OpenID Connect 1.0 es una capa de identidad simple sobre el protocolo OAuth 2.0."}},"sidebar":"integrationsSidebar","previous":{"title":"OAuth 2.0 (Social)","permalink":"/es/integrations/oauth2"},"next":{"title":"WeChat (Native)","permalink":"/es/integrations/wechat-native"}}');var r=i(25105),o=i(79621),d=i(44255);const t={slug:"/integrations/oidc",sidebar_label:"OIDC (Social)",sidebar_custom_props:{description:"OpenID Connect 1.0 es una capa de identidad simple sobre el protocolo OAuth 2.0."}},c="Configura el inicio de sesi\xf3n social con OpenID Connect (OIDC)",a={},l=[...d.RM,{value:"Comenzar",id:"get-started",level:2},{value:"Crea tu aplicaci\xf3n OIDC",id:"create-your-oidc-app",level:2},{value:"Configura tu conector",id:"configure-your-connector",level:2},{value:"Tipos de configuraci\xf3n",id:"config-types",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configura-el-inicio-de-sesi\xf3n-social-con-openid-connect-oidc",children:"Configura el inicio de sesi\xf3n social con OpenID Connect (OIDC)"})}),"\n",(0,r.jsx)(n.p,{children:"El conector oficial de Logto para el protocolo OpenID Connect (OIDC)."}),"\n",(0,r.jsx)(d.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"get-started",children:"Comenzar"}),"\n",(0,r.jsx)(n.p,{children:"El conector OIDC permite la conexi\xf3n de Logto a un proveedor de identidad social arbitrario que soporte el protocolo OIDC."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,r.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,r.jsx)(n.p,{children:"El conector OIDC es un tipo especial de conector en Logto, puedes a\xf1adir algunos conectores basados en OIDC."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"create-your-oidc-app",children:"Crea tu aplicaci\xf3n OIDC"}),"\n",(0,r.jsx)(n.p,{children:"Cuando abres esta p\xe1gina, creemos que ya sabes a qu\xe9 proveedor de identidad social deseas conectarte. Lo primero que debes hacer es confirmar que el proveedor de identidad soporta el protocolo OIDC, lo cual es un requisito previo para configurar un conector v\xe1lido. Luego, sigue las instrucciones del proveedor de identidad para registrar y crear la aplicaci\xf3n relevante para la autorizaci\xf3n OIDC."}),"\n",(0,r.jsx)(n.h2,{id:"configure-your-connector",children:"Configura tu conector"}),"\n",(0,r.jsx)(n.p,{children:'SOLO admitimos el tipo de concesi\xf3n "Authorization Code" por razones de seguridad y se adapta perfectamente al escenario de Logto.'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"clientId"})," y ",(0,r.jsx)(n.code,{children:"clientSecret"})," se pueden encontrar en la p\xe1gina de detalles de tus aplicaciones OIDC."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"clientId"}),": El ID de cliente es un identificador \xfanico que identifica la aplicaci\xf3n cliente durante el registro con el servidor de autorizaci\xf3n. Este ID es utilizado por el servidor de autorizaci\xf3n para verificar la identidad de la aplicaci\xf3n cliente y asociar cualquier token de acceso autorizado con esa aplicaci\xf3n cliente espec\xedfica."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"clientSecret"}),": El secreto de cliente es una clave confidencial que se emite a la aplicaci\xf3n cliente por el servidor de autorizaci\xf3n durante el registro. La aplicaci\xf3n cliente utiliza esta clave secreta para autenticarse con el servidor de autorizaci\xf3n al solicitar tokens de acceso. El secreto de cliente se considera informaci\xf3n confidencial y debe mantenerse seguro en todo momento."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"tokenEndpointAuthMethod"}),": El m\xe9todo de autenticaci\xf3n del endpoint de token es utilizado por la aplicaci\xf3n cliente para autenticarse con el servidor de autorizaci\xf3n al solicitar tokens de acceso. Para descubrir los m\xe9todos admitidos, consulta el campo ",(0,r.jsx)(n.code,{children:"token_endpoint_auth_methods_supported"})," disponible en el endpoint de descubrimiento de OpenID Connect del proveedor de servicios OAuth 2.0, o consulta la documentaci\xf3n relevante proporcionada por el proveedor de servicios OAuth 2.0."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"clientSecretJwtSigningAlgorithm (Opcional)"}),": Solo se requiere cuando ",(0,r.jsx)(n.code,{children:"tokenEndpointAuthMethod"})," es ",(0,r.jsx)(n.code,{children:"client_secret_jwt"}),". El algoritmo de firma JWT del secreto de cliente es utilizado por la aplicaci\xf3n cliente para firmar el JWT que se env\xeda al servidor de autorizaci\xf3n durante la solicitud de token."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"scope"}),': El par\xe1metro de alcance se utiliza para especificar el conjunto de recursos y permisos a los que la aplicaci\xf3n cliente est\xe1 solicitando acceso. El par\xe1metro de alcance se define t\xedpicamente como una lista de valores separados por espacios que representan permisos espec\xedficos. Por ejemplo, un valor de alcance de "read write" podr\xeda indicar que la aplicaci\xf3n cliente est\xe1 solicitando acceso de lectura y escritura a los datos de un usuario.']}),"\n",(0,r.jsxs)(n.p,{children:["Se espera que encuentres ",(0,r.jsx)(n.code,{children:"authorizationEndpoint"}),", ",(0,r.jsx)(n.code,{children:"tokenEndpoint"}),", ",(0,r.jsx)(n.code,{children:"jwksUri"})," y ",(0,r.jsx)(n.code,{children:"issuer"})," como informaci\xf3n de configuraci\xf3n del Proveedor de OpenID. Deber\xedan estar disponibles en la documentaci\xf3n del proveedor social."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"authenticationEndpoint"}),": Este endpoint se utiliza para iniciar el proceso de autenticaci\xf3n. El proceso de autenticaci\xf3n generalmente implica que el usuario inicie sesi\xf3n y otorgue autorizaci\xf3n para que la aplicaci\xf3n cliente acceda a sus recursos."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"tokenEndpoint"}),": Este endpoint es utilizado por la aplicaci\xf3n cliente para obtener un token de ID que se puede usar para acceder a los recursos solicitados. La aplicaci\xf3n cliente generalmente env\xeda una solicitud al endpoint de token con un tipo de concesi\xf3n y un c\xf3digo de autorizaci\xf3n para recibir un token de ID."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"jwksUri"}),": Esta es la URL del endpoint donde se puede obtener el Conjunto de Claves Web JSON (JWKS) del proveedor de identidad social (abreviado como IdP). El JWKS es un conjunto de claves criptogr\xe1ficas que el IdP utiliza para firmar y verificar JSON Web Tokens (JWTs) que se emiten durante el proceso de autenticaci\xf3n. El ",(0,r.jsx)(n.code,{children:"jwksUri"})," es utilizado por la parte confiable (RP) para obtener las claves p\xfablicas utilizadas por el IdP para firmar los JWTs, de modo que la RP pueda verificar la autenticidad e integridad de los JWTs recibidos del IdP."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"issuer"}),": Este es el identificador \xfanico del IdP que es utilizado por la RP para verificar los JWTs recibidos del IdP. Se incluye en los JWTs como el ",(0,r.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"reclamo"})," ",(0,r.jsx)(n.code,{children:"iss"})," (el token de ID siempre es un JWT). El valor del emisor debe coincidir con la URL del servidor de autorizaci\xf3n del IdP, y debe ser un URI en el que la RP conf\xede. Cuando la RP recibe un JWT, verifica el reclamo ",(0,r.jsx)(n.code,{children:"iss"})," para asegurarse de que fue emitido por un IdP confiable y que el JWT est\xe1 destinado a ser utilizado con la RP."]}),"\n",(0,r.jsxs)(n.p,{children:["Juntos, ",(0,r.jsx)(n.code,{children:"jwksUri"})," y ",(0,r.jsx)(n.code,{children:"issuer"})," proporcionan un mecanismo seguro para que la RP verifique la identidad del usuario final durante el proceso de autenticaci\xf3n. Al usar las claves p\xfablicas obtenidas del ",(0,r.jsx)(n.code,{children:"jwksUri"}),", la RP puede verificar la autenticidad e integridad de los JWTs emitidos por el IdP. El valor del emisor asegura que la RP solo acepte JWTs que fueron emitidos por un IdP confiable y que los JWTs est\xe9n destinados a ser utilizados con la RP."]}),"\n",(0,r.jsxs)(n.p,{children:["Dado que siempre se requiere una solicitud de autenticaci\xf3n, se proporciona un ",(0,r.jsx)(n.code,{children:"authRequestOptionalConfig"})," para envolver todas las configuraciones opcionales, puedes encontrar detalles en ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". Tambi\xe9n puedes notar que ",(0,r.jsx)(n.code,{children:"nonce"})," falta en esta configuraci\xf3n. Dado que ",(0,r.jsx)(n.code,{children:"nonce"})," debe ser id\xe9ntico para cada solicitud, colocamos la generaci\xf3n de ",(0,r.jsx)(n.code,{children:"nonce"})," en la implementaci\xf3n del c\xf3digo. \xa1As\xed que no te preocupes por ello! Los mencionados anteriormente ",(0,r.jsx)(n.code,{children:"jwksUri"})," y ",(0,r.jsx)(n.code,{children:"issuer"})," tambi\xe9n est\xe1n incluidos en ",(0,r.jsx)(n.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Puede que te preguntes por qu\xe9 un protocolo OIDC est\xe1ndar admite tanto los flujos impl\xedcitos como los h\xedbridos, pero el conector de Logto solo admite el flujo de autorizaci\xf3n. Se ha determinado que los flujos impl\xedcitos e h\xedbridos son menos seguros que el flujo de autorizaci\xf3n. Debido al enfoque de Logto en la seguridad, solo admite el flujo de autorizaci\xf3n para el nivel m\xe1s alto de seguridad para sus usuarios, a pesar de su naturaleza ligeramente menos conveniente."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"responseType"})," y ",(0,r.jsx)(n.code,{children:"grantType"}),' solo pueden ser valores FIJOS con el flujo "Authorization Code", por lo que los hacemos opcionales y los valores predeterminados se completar\xe1n autom\xe1ticamente.']}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,r.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,r.jsxs)(n.p,{children:["Para todos los tipos de flujo, proporcionamos una clave ",(0,r.jsx)(n.code,{children:"customConfig"})," OPCIONAL para colocar tus par\xe1metros personalizados.\nCada proveedor de identidad social podr\xeda tener su propia variante en el protocolo est\xe1ndar OIDC. Si tu proveedor de identidad social deseado se adhiere estrictamente al protocolo est\xe1ndar OIDC, entonces no necesitas preocuparte por ",(0,r.jsx)(n.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"config-types",children:"Tipos de configuraci\xf3n"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientSecret"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"authorizationEndpoint"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tokenEndpoint"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idTokenVerificationConfig"}),(0,r.jsx)(n.td,{children:"IdTokenVerificationConfig"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"authRequestOptionalConfig"}),(0,r.jsx)(n.td,{children:"AuthRequestOptionalConfig"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"customConfig"}),(0,r.jsx)(n.td,{children:"Record<string, string>"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedades de AuthRequestOptionalConfig"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"responseType"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tokenEndpoint"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"responseMode"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"display"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prompt"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxAge"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uiLocales"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idTokenHint"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"loginHint"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"acrValues"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedades de IdTokenVerificationConfig"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Requerido"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jwksUri"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"issuer"}),(0,r.jsx)(n.td,{children:"string | string[]"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"audience"}),(0,r.jsx)(n.td,{children:"string | string[]"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"algorithms"}),(0,r.jsx)(n.td,{children:"string[]"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clockTolerance"}),(0,r.jsx)(n.td,{children:"string | number"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"crit"}),(0,r.jsx)(n.td,{children:"Record<string, string | boolean>"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"currentDate"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxTokenAge"}),(0,r.jsx)(n.td,{children:"string | number"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subject"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"typ"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Consulta ",(0,r.jsx)(n.a,{href:"https://github.com/panva/jose/blob/main/docs/jwt/verify/interfaces/JWTVerifyOptions.md",children:"aqu\xed"})," para encontrar m\xe1s detalles sobre ",(0,r.jsx)(n.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>t});var s=i(58101);const r={},o=s.createContext(r);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);