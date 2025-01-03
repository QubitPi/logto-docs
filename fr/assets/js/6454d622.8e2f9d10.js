"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21348],{70972:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"developers/custom-token-claims/README","title":"Revendications de jetons personnalis\xe9s","description":"Introduction \\\\","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/custom-token-claims/README.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/","permalink":"/fr/developers/custom-token-claims/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/developers/custom-token-claims/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"D\xe9veloppeur","permalink":"/fr/developers/"},"next":{"title":"Cas d\'utilisation courants","permalink":"/fr/developers/custom-token-claims/common-use-cases"}}');var o=s(25105),i=s(79621);const r={sidebar_position:2},a="Revendications de jetons personnalis\xe9s",c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Comment fonctionnent les revendications de jetons personnalis\xe9es ?",id:"how-do-custom-token-claims-work",level:2},{value:"Ressources connexes",id:"related-resources",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Url:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"revendications-de-jetons-personnalis\xe9s",children:"Revendications de jetons personnalis\xe9s"})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["Les ",(0,o.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"jetons d\u2019acc\xe8s"})," jouent un r\xf4le crucial dans le processus d'authentification et d'autorisation, transportant les informations d'identit\xe9 et les permissions du sujet, et sont transmis entre le ",(0,o.jsx)(n.a,{href:"/concepts/core-service",children:"serveur Logto"})," (servant de serveur d'authentification ou de fournisseur d'identit\xe9, IdP), votre serveur de service web (fournisseur de ressources), et les applications clientes (clients)."]}),"\n",(0,o.jsxs)(n.p,{children:["Les ",(0,o.jsx)(n.a,{href:"https://auth.wiki/claim",children:"revendications de jetons"})," sont les paires cl\xe9-valeur qui fournissent des informations sur une entit\xe9 ou le jeton lui-m\xeame. Les revendications peuvent inclure des informations sur l'utilisateur, le temps d'expiration du jeton, les permissions, et d'autres m\xe9tadonn\xe9es pertinentes pour le processus d'authentification (lien vers auth.wiki) et d'autorisation (lien vers auth.wiki)."]}),"\n",(0,o.jsx)(n.p,{children:"Il existe deux types de jetons d\u2019acc\xe8s dans Logto :"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"JSON Web Token :"})," Le ",(0,o.jsx)(n.a,{href:"https://auth.wiki/jwt",children:"JSON Web Token (JWT)"})," est un format populaire qui encode les revendications d'une mani\xe8re \xe0 la fois s\xe9curis\xe9e et lisible par les clients. Des revendications courantes comme ",(0,o.jsx)(n.code,{children:"sub"}),", ",(0,o.jsx)(n.code,{children:"iss"}),", ",(0,o.jsx)(n.code,{children:"aud"}),", etc. sont utilis\xe9es conform\xe9ment au protocole OAuth 2.0 (Voir ",(0,o.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4",children:"ce lien"})," pour plus de d\xe9tails). Les jetons JWT permettent aux consommateurs d'acc\xe9der directement aux revendications sans \xe9tapes de validation suppl\xe9mentaires. Dans Logto, les jetons d\u2019acc\xe8s sont \xe9mis par d\xe9faut au format JWT lorsqu'un client initie des requ\xeates d'autorisation de ressources ou d'organisations sp\xe9cifiques."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Jeton opaque :"})," Un ",(0,o.jsx)(n.a,{href:"http://localhost:3000/concepts/opaque-token",children:"jeton opaque"})," n'est pas autonome et n\xe9cessite toujours une \xe9tape de validation suppl\xe9mentaire via le point de terminaison ",(0,o.jsx)(n.a,{href:"https://auth.wiki/token-introspection",children:"token introspection"}),". Malgr\xe9 leur format non transparent, les jetons opaques peuvent aider \xe0 obtenir des revendications et \xeatre transmis en toute s\xe9curit\xe9 entre les parties. Les revendications de jetons sont stock\xe9es en toute s\xe9curit\xe9 dans le serveur Logto et accessibles par les applications clientes via le point de terminaison d'introspection de jeton. Les jetons d\u2019acc\xe8s sont \xe9mis au format opaque lorsqu'aucune ressource ou organisation sp\xe9cifique n'est incluse dans la requ\xeate d'autorisation. Ces jetons sont principalement utilis\xe9s pour acc\xe9der au point de terminaison OIDC ",(0,o.jsx)(n.code,{children:"userinfo"})," et \xe0 d'autres fins g\xe9n\xe9rales."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Dans de nombreux cas, les revendications standard ne suffisent pas \xe0 r\xe9pondre aux besoins sp\xe9cifiques de vos applications, que vous utilisiez des jetons JWT ou opaques. Pour r\xe9pondre \xe0 cela, Logto offre la flexibilit\xe9 d'ajouter des revendications personnalis\xe9es dans les jetons d\u2019acc\xe8s. Avec cette fonctionnalit\xe9, vous pouvez inclure des informations suppl\xe9mentaires pour votre logique m\xe9tier, toutes transmises en toute s\xe9curit\xe9 dans les jetons et r\xe9cup\xe9rables via l'introspection dans le cas des jetons opaques."}),"\n",(0,o.jsx)(n.h2,{id:"how-do-custom-token-claims-work",children:"Comment fonctionnent les revendications de jetons personnalis\xe9es ?"}),"\n",(0,o.jsxs)(n.p,{children:["Logto vous permet d'ins\xe9rer des revendications personnalis\xe9es dans le ",(0,o.jsx)(n.code,{children:"jeton d\u2019acc\xe8s"})," via une fonction de rappel ",(0,o.jsx)(n.code,{children:"getCustomJwtClaims"}),". Vous pouvez fournir votre impl\xe9mentation de la fonction ",(0,o.jsx)(n.code,{children:"getCustomJwtClaims"})," pour retourner un objet de revendications personnalis\xe9es. La valeur de retour sera fusionn\xe9e avec la charge utile du jeton original et sign\xe9e pour g\xe9n\xe9rer le jeton d\u2019acc\xe8s final."]}),"\n",(0,o.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant U as Utilisateur ou agent utilisateur\n  participant IdP as Logto (fournisseur d'identit\xe9)\n  participant SP as Fournisseur de services\n\n  autonumber\n  U ->> IdP: Requ\xeate d'authentification (avec identifiants)\n  activate IdP\n  IdP--\x3e>IdP: Valider les identifiants &<br/>g\xe9n\xe9rer la charge utile brute du jeton d\u2019acc\xe8s\n  rect var(--mermaid-rect-fill)\n  note over IdP: Revendications de jetons personnalis\xe9es\n  IdP->>IdP: Ex\xe9cuter le script de revendications de jetons personnalis\xe9es (`getCustomJwtClaims`) &<br/>obtenir des revendications de jetons suppl\xe9mentaires\n  end\n  IdP--\x3e>IdP: Fusionner la charge utile brute du jeton d\u2019acc\xe8s et les revendications de jetons suppl\xe9mentaires\n  IdP--\x3e>IdP: Signer & chiffrer la charge utile pour obtenir le jeton d\u2019acc\xe8s\n  deactivate IdP\n  IdP--\x3e>U: \xc9mettre le jeton d\u2019acc\xe8s au format JWT\n  par Obtenir le service via l'API\n  U->>SP: requ\xeate de service (avec jeton d\u2019acc\xe8s JWT)\n  SP--\x3e>U: r\xe9ponse de service\n  end"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Les revendications de jetons int\xe9gr\xe9es \xe0 Logto ne peuvent PAS \xeatre remplac\xe9es ou modifi\xe9es. Les revendications personnalis\xe9es seront ajout\xe9es au jeton en tant que revendications suppl\xe9mentaires. Si des revendications personnalis\xe9es entrent en conflit avec les revendications int\xe9gr\xe9es, ces revendications personnalis\xe9es seront ignor\xe9es."})}),"\n",(0,o.jsx)(n.h2,{id:"related-resources",children:"Ressources connexes"}),"\n",(0,o.jsx)(s,{href:"https://blog.logto.io/glance-on-custom-jwt-access-token-claims",children:(0,o.jsx)(n.p,{children:"Ajoutez des revendications personnalis\xe9es pour les jetons d\u2019acc\xe8s JWT avec Logto pour renforcer\nvotre autorisation"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(58101);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);