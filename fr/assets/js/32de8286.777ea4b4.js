"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[25013],{14710:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"authorization/api-resources/README","title":"Ressources API","description":"Les ressources API, \xe9galement appel\xe9es Indicateurs de Ressource, indiquent les services ou ressources cibles \xe0 demander, g\xe9n\xe9ralement une variable au format URI repr\xe9sentant l\'identit\xe9 de la ressource. C\'est un concept cl\xe9 dans le syst\xe8me d\'autorisation de Logto, car il d\xe9finit le point de terminaison que la politique d\'autorisation est con\xe7ue pour prot\xe9ger.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/authorization/api-resources/README.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/","permalink":"/fr/authorization/api-resources/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/authorization/api-resources/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Autorisation","permalink":"/fr/authorization/"},"next":{"title":"Prot\xe9gez votre API","permalink":"/fr/authorization/api-resources/protect-your-api"}}');var n=r(25105),i=r(79621);const o={sidebar_position:1},a="Ressources API",c={},l=[{value:"Indicateur de ressource",id:"resource-indicator",level:2},{value:"Sch\xe9ma de ressource API Logto",id:"logto-api-resource-schema",level:2},{value:"API par d\xe9faut",id:"default-api",level:2},{value:"Enregistrer les ressources API dans Logto",id:"register-the-api-resources-in-logto",level:2},{value:"Ressources connexes",id:"related-resources",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{CloudLink:r,Url:t}=s;return r||p("CloudLink",!0),t||p("Url",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"ressources-api",children:"Ressources API"})}),"\n",(0,n.jsxs)(s.p,{children:["Les ressources API, \xe9galement appel\xe9es ",(0,n.jsx)(s.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Indicateurs de Ressource"}),", indiquent les services ou ressources cibles \xe0 demander, g\xe9n\xe9ralement une variable au format URI repr\xe9sentant l'identit\xe9 de la ressource. C'est un concept cl\xe9 dans le syst\xe8me d'autorisation de Logto, car il d\xe9finit le point de terminaison que la politique d'autorisation est con\xe7ue pour prot\xe9ger."]}),"\n",(0,n.jsx)(s.h2,{id:"resource-indicator",children:"Indicateur de ressource"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Une valeur de ressource indique le service ou la ressource cible auquel l'acc\xe8s est demand\xe9."}),"\n",(0,n.jsxs)(s.li,{children:["Sa valeur ",(0,n.jsx)(s.strong,{children:"DOIT"})," \xeatre un URI absolu."]}),"\n",(0,n.jsxs)(s.li,{children:["L'URI ",(0,n.jsx)(s.strong,{children:"NE DOIT PAS"})," inclure un composant fragment."]}),"\n",(0,n.jsxs)(s.li,{children:["Il ",(0,n.jsx)(s.strong,{children:"NE DEVRAIT PAS"})," inclure un composant de requ\xeate."]}),"\n",(0,n.jsxs)(s.li,{children:["Vous ",(0,n.jsx)(s.strong,{children:"DEVRIEZ"})," fournir l'URI le plus sp\xe9cifique possible pour l'API compl\xe8te ou l'ensemble de ressources qu'il entend acc\xe9der."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"En pratique, un client peut conna\xeetre un URI de base ou l'application ou la ressource avec laquelle interagir. Il serait appropri\xe9 de l'utiliser comme valeur du param\xe8tre de ressource."}),"\n",(0,n.jsx)(s.p,{children:"Par exemple, l'URI de base de la Logto Management API."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"https://tenantId.logto.app/api\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Par d\xe9faut, cette ressource API est pr\xe9enregistr\xe9e dans votre service Logto. Toutes les ",(0,n.jsx)(s.a,{href:"https://openapi.logto.io/",children:"Management API"})," sous cet URI sont prot\xe9g\xe9es par Logto."]}),"\n",(0,n.jsx)(s.h2,{id:"logto-api-resource-schema",children:"Sch\xe9ma de ressource API Logto"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Nom de la propri\xe9t\xe9"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Description de la propri\xe9t\xe9"})}),(0,n.jsx)(s.th,{children:(0,n.jsx)(s.strong,{children:"Requis"})})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Nom de l'API"}),(0,n.jsx)(s.td,{children:"Un nom convivial qui peut vous aider \xe0 identifier la ressource API."}),(0,n.jsx)(s.td,{children:"true"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Identifiant de l'API"}),(0,n.jsxs)(s.td,{children:["La valeur unique de l'",(0,n.jsx)(s.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"Indicateur de Ressource"})," de l'API, avec les restrictions list\xe9es ci-dessus."]}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Logto l'utilisera pour identifier la ressource API demand\xe9e et accorder les jetons d\u2019autorisation en cons\xe9quence."}),(0,n.jsx)(s.td,{children:"true"}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["Temps d'expiration du jeton ",(0,n.jsx)(s.em,{children:"(en secondes)"})]}),(0,n.jsxs)(s.td,{children:["Le temps d'expiration d\xe9fini pour le ",(0,n.jsx)(s.code,{children:"jeton d\u2019acc\xe8s"}),". La valeur d'expiration par d\xe9faut est ",(0,n.jsx)(s.strong,{children:"3600"}),"."]}),(0,n.jsx)(s.td,{children:"false"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"API par d\xe9faut"}),(0,n.jsx)(s.td,{children:"Une seule API par d\xe9faut peut \xeatre d\xe9finie par locataire."}),(0,n.jsx)(s.td,{})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Lorsqu'une API par d\xe9faut est d\xe9sign\xe9e, le param\xe8tre de ressource peut \xeatre omis dans la requ\xeate d'authentification. Les \xe9changes de jetons ult\xe9rieurs utiliseront cette API comme audience par d\xe9faut, entra\xeenant l'\xe9mission de JWTs."}),(0,n.jsx)(s.td,{children:"false"}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["Les requ\xeates avec un ",(0,n.jsx)(s.code,{children:"jeton d\u2019acc\xe8s"})," expir\xe9 doivent \xeatre restreintes. Cela est mis en \u0153uvre pour prot\xe9ger votre API d'un jeton abus\xe9. Plus la valeur est grande, plus un ",(0,n.jsx)(s.code,{children:"jeton d\u2019acc\xe8s"})," \xe9mis survivra longtemps, et plus votre API sera vuln\xe9rable."]})}),"\n",(0,n.jsx)(s.h2,{id:"default-api",children:"API par d\xe9faut"}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Cette fonctionnalit\xe9 est principalement destin\xe9e aux applications qui ne prennent PAS en charge les indicateurs de ressource OIDC, par exemple, les plugins ChatGPT."})}),"\n",(0,n.jsxs)(s.p,{children:["Logto utilise ",(0,n.jsx)(s.a,{href:"https://www.rfc-editor.org/rfc/rfc8707",children:"RFC 8707 : Indicateurs de Ressource pour OAuth 2.0"})," pour mettre en \u0153uvre le contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC). Bien que ce soit l'une des fonctionnalit\xe9s d'OAuth 2.0, elle n'est pas encore largement prise en charge."]}),"\n",(0,n.jsxs)(s.p,{children:["Dans l'impl\xe9mentation de Logto, chaque permission (port\xe9e) d\xe9finie par l'utilisateur doit \xeatre associ\xe9e \xe0 une Ressource API. Sinon, elle sera trait\xe9e comme une permission OpenID Connect (ou OAuth). En g\xe9n\xe9ral, cela n'affecte pas votre processus d'autorisation. Cependant, lors de l'int\xe9gration avec des applications tierces qui ne prennent pas en charge ",(0,n.jsx)(s.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"RFC 8707"})," (par exemple, les plugins ChatGPT), cela peut poser des d\xe9fis puisque la requ\xeate d'autorisation initiale peut ne pas inclure un param\xe8tre ",(0,n.jsx)(s.code,{children:"resource"}),". Par cons\xe9quent, Logto \xe9mettra toujours des Jetons d\u2019Acc\xe8s Opaques."]}),"\n",(0,n.jsx)(s.p,{children:"Pour r\xe9soudre ce probl\xe8me, vous pouvez d\xe9signer une Ressource API comme ressource par d\xe9faut au niveau du locataire. Une fois cela fait :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Logto utilisera la Ressource API par d\xe9faut lorsqu'aucun param\xe8tre ",(0,n.jsx)(s.code,{children:"resource"})," n'est pr\xe9sent dans la ",(0,n.jsx)(s.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"Requ\xeate d\u2019authentification"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Si la port\xe9e ",(0,n.jsx)(s.code,{children:"openid"})," est incluse, un Jeton d\u2019Acc\xe8s Opaque pour le ",(0,n.jsx)(s.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"Point de terminaison Userinfo"})," sera \xe9mis lorsqu'aucun param\xe8tre ",(0,n.jsx)(s.code,{children:"resource"})," n'est pr\xe9sent dans les ",(0,n.jsx)(s.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Requ\xeates de jeton"})," ult\xe9rieures."]}),"\n",(0,n.jsxs)(s.li,{children:["Si la port\xe9e ",(0,n.jsx)(s.code,{children:"openid"})," n'est pas incluse, un Jeton d\u2019Acc\xe8s JWT pour la Ressource API par d\xe9faut sera \xe9mis lorsqu'aucun param\xe8tre ",(0,n.jsx)(s.code,{children:"resource"})," n'est pr\xe9sent dans les ",(0,n.jsx)(s.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest",children:"Requ\xeates de jeton"})," ult\xe9rieures."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"En d\xe9signant une Ressource API par d\xe9faut, vous pouvez assurer une int\xe9gration fluide avec les applications ne prenant pas en charge RFC 8707 tout en maintenant les contr\xf4les d'acc\xe8s appropri\xe9s."}),"\n",(0,n.jsx)(s.h2,{id:"register-the-api-resources-in-logto",children:"Enregistrer les ressources API dans Logto"}),"\n",(0,n.jsxs)(s.p,{children:["Pour obtenir un ",(0,n.jsx)(s.code,{children:"jeton d\u2019acc\xe8s"})," restreint par audience de Logto, enregistrez d'abord vos API backend pour activer les jetons d\u2019acc\xe8s restreints par audience de Logto. Lorsqu'une requ\xeate d'autorisation est re\xe7ue, Logto identifiera les ressources API enregistr\xe9es et accordera l'acc\xe8s en cons\xe9quence."]}),"\n",(0,n.jsxs)(s.p,{children:["Pour enregistrer vos API, acc\xe9dez \xe0 ",(0,n.jsx)(r,{to:"/api-resources",children:"Console > Ressources API"}),". Vous verrez une ressource int\xe9gr\xe9e avec l'identifiant de l'API affich\xe9 comme ",(0,n.jsx)(s.code,{children:"https://[your-tenant-id].logto.app/api"}),". Cette ressource englobe toutes les Management APIs de Logto et garantit qu'elles sont prot\xe9g\xe9es et accessibles uniquement aux utilisateurs autoris\xe9s de Logto."]}),"\n",(0,n.jsxs)(s.p,{children:["Cliquez sur le bouton ",(0,n.jsx)(s.strong,{children:"Cr\xe9er une ressource API"})," et suivez le formulaire interactif pour cr\xe9er vos propres ressources API :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Un ",(0,n.jsx)(s.strong,{children:"nom d'API"})," lisible par l'homme qui peut mieux vous aider \xe0 identifier cette entit\xe9."]}),"\n",(0,n.jsxs)(s.li,{children:["Un ",(0,n.jsx)(s.strong,{children:"identifiant d'API"})," unique au format URI. Il repr\xe9sente l'identit\xe9 de la ressource API."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"La nouvelle API appara\xeetra dans la liste une fois cr\xe9\xe9e. Vous pouvez la g\xe9rer ou la supprimer sur la page des d\xe9tails de l'API en cliquant sur l'entit\xe9."}),"\n",(0,n.jsx)(s.h2,{id:"related-resources",children:"Ressources connexes"}),"\n",(0,n.jsx)(t,{href:"https://blog.logto.io/opaque-token-vs-jwt",children:"Jeton opaque vs JWT"}),"\n",(0,n.jsx)(t,{href:"https://blog.logto.io/when-should-i-use-jwts",children:"Quand devrais-je utiliser des JWTs ?"}),"\n",(0,n.jsx)(t,{href:"https://blog.logto.io/api-authorization-methods",children:"M\xe9thodes d'autorisation API"})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>a});var t=r(58101);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);