"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[69389],{73393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"authorization/api-resources/protect-your-api","title":"Prot\xe9gez votre API","description":"Si vous n\'avez pas besoin de politiques de contr\xf4le d\'acc\xe8s flexibles et granulaires, vous pouvez simplement prot\xe9ger votre API directement. Nous vous guiderons \xe0 travers un diagramme de s\xe9quence et les \xe9tapes n\xe9cessaires pour int\xe9grer le contr\xf4le d\'acc\xe8s dans votre application.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/authorization/api-resources/protect-your-api.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/protect-your-api","permalink":"/fr/authorization/api-resources/protect-your-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/authorization/api-resources/protect-your-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Ressources API","permalink":"/fr/authorization/api-resources/"},"next":{"title":"Guide : Python","permalink":"/fr/authorization/api-resources/python"}}');var s=r(25105),i=r(79621);const o={sidebar_position:1},a="Prot\xe9gez votre API",c={},d=[{value:"Requ\xeate d\u2019authentification",id:"authentication-request",level:2},{value:"Requ\xeate de jeton",id:"token-request",level:2},{value:"Requ\xeate \xe0 la ressource API",id:"request-to-the-api-resource",level:2},{value:"Valider les jetons d\u2019autorisation pour les requ\xeates API",id:"validate-authorization-tokens-for-api-requests",level:2},{value:"Comprendre le jeton JWS",id:"understanding-jws-token",level:4},{value:"Valider le jeton d\u2019autorisation",id:"validate-the-authorization-token",level:4},{value:"R\xe9f\xe9rence",id:"reference",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"prot\xe9gez-votre-api",children:"Prot\xe9gez votre API"})}),"\n",(0,s.jsx)(t.p,{children:"Si vous n'avez pas besoin de politiques de contr\xf4le d'acc\xe8s flexibles et granulaires, vous pouvez simplement prot\xe9ger votre API directement. Nous vous guiderons \xe0 travers un diagramme de s\xe9quence et les \xe9tapes n\xe9cessaires pour int\xe9grer le contr\xf4le d'acc\xe8s dans votre application."}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: 1. Requ\xeate d\u2019authentification\n    Client->>Logto: GET /oidc/auth\n    Note right of Client: avec resource=https://resource-server.com/api<br/>et port\xe9e optionnelle=read write\n    Logto--\x3e>Client: Retourne authorization_code\n\n    Note over Client,API: 2. Requ\xeate de jeton\n    Client->>Logto: POST /oidc/token\n    Note right of Client: avec authorization_code<br/>resource=https://resource-server.com/api<br/>et port\xe9e optionnelle=read write\n    Logto--\x3e>Client: Retourne JWT jeton d\u2019acc\xe8s\n    Note left of Logto: Le jeton contient :<br/>- Audience restreinte \xe0 la ressource<br/>- Port\xe9es accord\xe9es (le cas \xe9ch\xe9ant)\n\n    Note over Client,API: 3. Requ\xeate API\n    Client->>API: Requ\xeate avec jeton Bearer\n    Note over API: Valider le jeton JWT :\n    Note over API: - V\xe9rifier la signature<br/>- V\xe9rifier l\u2019\xe9metteur<br/>- V\xe9rifier l\u2019audience<br/>- V\xe9rifier l\u2019expiration<br/>- V\xe9rifier les port\xe9es (si RBAC activ\xe9)\n    alt Jeton valide\n        API--\x3e>Client: Ressource prot\xe9g\xe9e\n    else Jeton invalide\n        API--\x3e>Client: 401 Non autoris\xe9\n    end"}),"\n",(0,s.jsx)(t.p,{children:"Dans ce tutoriel"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Point de terminaison Logto : ",(0,s.jsx)(t.code,{children:"https://tenant-id.logto.app"})]}),"\n",(0,s.jsxs)(t.li,{children:["Application cliente : ",(0,s.jsx)(t.code,{children:"https://client.example.org"})]}),"\n",(0,s.jsxs)(t.li,{children:["Serveur de ressources API : ",(0,s.jsx)(t.code,{children:"https://resource-server.com/api"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Vous devez remplacer ceux-ci par vos points de terminaison r\xe9els lors de la mise en \u0153uvre."}),"\n",(0,s.jsx)(t.h2,{id:"authentication-request",children:"Requ\xeate d\u2019authentification"}),"\n",(0,s.jsxs)(t.p,{children:["Fournissez une liste de param\xe8tres d'indicateur de ressource dans une ",(0,s.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Requ\xeate d\u2019authentification"}),". Cela indiquera toutes les ressources prot\xe9g\xe9es que l'utilisateur peut demander."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"GET https://tenant-id.logto.app/oidc/auth?response_type=code\n    &client_id=s6BhdRkqt3\n    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI\n    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    &resource=https%3A%2F%2Fresource-server.com%2Fapi\n    &scope=read%20write\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Logto validera et stockera ces indicateurs de ressource. Un ",(0,s.jsx)(t.code,{children:"authorization_code"})," sera accord\xe9 et retourn\xe9 avec des port\xe9es restreintes \xe0 ces ressources sp\xe9cifi\xe9es."]}),"\n",(0,s.jsx)(t.p,{children:"Exemple de configuration du SDK Logto :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"const config: LogtoConfig = {\n  // ...autres configurations\n  resources: ['https://resource-server.com/api'],\n  scopes: ['read', 'write'],\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"token-request",children:"Requ\xeate de jeton"}),"\n",(0,s.jsxs)(t.p,{children:["Lorsque le param\xe8tre de ressource est pr\xe9sent dans une ",(0,s.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Requ\xeate de jeton"})," avec le ",(0,s.jsx)(t.code,{children:"authorization_code"})," accord\xe9 ci-dessus, il sp\xe9cifiera l'audience de la ressource API cible du jeton d\u2019acc\xe8s demand\xe9."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"POST https://tenant-id.logto.app/oidc/token HTTP/1.1\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code&redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb&code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ&resource=https%3A%2F%2Fresource-server.com%2Fapi\n"})}),"\n",(0,s.jsx)(t.p,{children:"Un jeton d\u2019acc\xe8s chiffr\xe9 avec l'audience restreinte \xe0 cette ressource demand\xe9e sera accord\xe9 par Logto. Le jeton contient toutes les donn\xe9es n\xe9cessaires pour repr\xe9senter le statut d'autorisation de la requ\xeate. Par exemple, l'identit\xe9 et le r\xf4le de l'utilisateur de la requ\xeate, l'audience du jeton et le temps d'expiration."}),"\n",(0,s.jsx)(t.p,{children:"Exemple de code du SDK Logto :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"const accessToken = await logtoClient.getAccessToken('https://resource-server.com/api');\n"})}),"\n",(0,s.jsx)(t.p,{children:"La charge utile de accessToken contiendra :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"{\n  iss: '<your-logto-endpoint>/oidc',\n  aud: 'https://resource-server.com/api',\n  scope: 'read write'\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"request-to-the-api-resource",children:"Requ\xeate \xe0 la ressource API"}),"\n",(0,s.jsxs)(t.p,{children:["L'utilisateur client a envoy\xe9 une requ\xeate \xe0 la ressource API en pr\xe9sentant le ",(0,s.jsx)(t.code,{children:"access_token"})," donn\xe9 dans l'en-t\xeate Authorization."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"GET https://resource-server.com/api/users\nAuthorization: Bearer eyJhbGciOiJIUz...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Logto suit le protocole standard d'autorisation bas\xe9 sur les jetons pour prot\xe9ger vos ressources API. Pour en savoir plus sur OAuth 2.0, veuillez vous r\xe9f\xe9rer au ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"document officiel"})," d'OAuth 2.0."]}),"\n",(0,s.jsx)(t.h2,{id:"validate-authorization-tokens-for-api-requests",children:"Valider les jetons d\u2019autorisation pour les requ\xeates API"}),"\n",(0,s.jsxs)(t.p,{children:["Logto \xe9met un jeton d\u2019autorisation au format standard ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519",children:"JWT"})," pour chaque requ\xeate API autoris\xe9e. Le jeton est chiffr\xe9 et sign\xe9 en tant que jeton ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"understanding-jws-token",children:"Comprendre le jeton JWS"}),"\n",(0,s.jsxs)(t.p,{children:["Un jeton ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," encod\xe9 est construit avec trois parties :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"En-t\xeate JOSE : D\xe9clare le type de code et l'algorithme de codage"}),"\n",(0,s.jsx)(t.li,{children:"Charge utile JWS : Inclut toutes les revendications du jeton"}),"\n",(0,s.jsxs)(t.li,{children:["Signature JWS : Signature sign\xe9e avec ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWK"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Un sch\xe9ma standard de la charge utile JWS \xe9mise par Logto : (les revendications peuvent varier, en fonction de votre configuration OIDC personnalis\xe9e)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"cl\xe9"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"jti"}),(0,s.jsx)(t.td,{children:"ID unique du JWT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sub"}),(0,s.jsx)(t.td,{children:"sujet, g\xe9n\xe9ralement user-id"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"iat"}),(0,s.jsx)(t.td,{children:"horodatage du jeton \xe9mis \xe0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exp"}),(0,s.jsx)(t.td,{children:"horodatage du jeton expirant \xe0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"client_id"}),(0,s.jsx)(t.td,{children:"identifiant de l'application"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"iss"}),(0,s.jsx)(t.td,{children:"identit\xe9 de l\u2019\xe9metteur du jeton"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"aud"}),(0,s.jsx)(t.td,{children:"audience du jeton"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"scope"}),(0,s.jsx)(t.td,{children:"port\xe9es (permissions) du jeton"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Pour le d\xe9veloppement, pour inspecter visuellement un jeton JWT, vous pouvez visiter un ",(0,s.jsx)(t.a,{href:"https://www.jstoolset.com/jwt",children:"outil de d\xe9codage JWT"})," pour d\xe9coder et v\xe9rifier les jetons que vous avez re\xe7us. Soyez prudent ou n'utilisez jamais les jetons d'un environnement de production. Comme il s'agit d'un service en ligne public fourni par un tiers, votre jeton peut \xeatre expos\xe9."]})}),"\n",(0,s.jsx)(t.h4,{id:"validate-the-authorization-token",children:"Valider le jeton d\u2019autorisation"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2",children:"Validation d'un JWT"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515#section-5.2",children:"Validation de la signature JWS"})}),"\n",(0,s.jsxs)(t.li,{children:["L'\xe9metteur du jeton est ",(0,s.jsx)(t.code,{children:"https://<your-logto-domain>/oidc"})," (\xe9mis par votre serveur d'authentification Logto)"]}),"\n",(0,s.jsx)(t.li,{children:"L'audience du jeton est \xe9gale \xe0 l'indicateur de ressource du r\xe9cepteur actuel enregistr\xe9 dans la console d'administration Logto"}),"\n",(0,s.jsx)(t.li,{children:"Le jeton est dans son temps d'expiration"}),"\n",(0,s.jsxs)(t.li,{children:["(",(0,s.jsx)(t.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"RBAC"})," uniquement) Le jeton a la ",(0,s.jsx)(t.code,{children:"scope"})," souhait\xe9e"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Il existe diverses biblioth\xe8ques et packages open-source qui peuvent vous aider \xe0 valider et d\xe9coder facilement un jeton JWT. Vous pouvez en choisir un et l'int\xe9grer \xe0 votre application backend en fonction du langage et du framework que vous utilisez. Veuillez consulter certains des exemples que nous avons :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/authorization/api-resources/node-express",children:"Node (Express)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/authorization/api-resources/spring-boot",children:"Spring Boot"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/authorization/api-resources/python",children:"Python"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"reference",children:"R\xe9f\xe9rence"}),"\n",(0,s.jsxs)(t.p,{children:["Logto utilise le protocole d'autorisation OAuth 2.0 bas\xe9 sur le code pour s\xe9curiser votre requ\xeate API. Si vous \xeates int\xe9ress\xe9 par la strat\xe9gie qui le sous-tend, r\xe9f\xe9rez-vous \xe0 la ",(0,s.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"sp\xe9cification"})," d'OAuth 2.0 pour plus de d\xe9tails."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},79621:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(58101);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);