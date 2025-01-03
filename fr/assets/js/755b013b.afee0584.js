"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[68800],{3545:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"end-user-flows/authentication-parameters/first-screen","title":"Param\xe8tres de l\'\xe9cran de d\xe9marrage","description":"Un ensemble de param\xe8tres d\'authentification personnalis\xe9s qui vous permettent d\'adapter l\'exp\xe9rience de l\'\xe9cran de d\xe9marrage souhait\xe9e pour les utilisateurs finaux.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/first-screen.mdx","sourceDirName":"end-user-flows/authentication-parameters","slug":"/end-user-flows/authentication-parameters/first-screen","permalink":"/fr/end-user-flows/authentication-parameters/first-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/first-screen.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Param\xe8tres d\'authentification","permalink":"/fr/end-user-flows/authentication-parameters/"},"next":{"title":"Connexion directe","permalink":"/fr/end-user-flows/authentication-parameters/direct-sign-in"}}');var s=n(25105),t=n(79621);const a={sidebar_position:1},o="Param\xe8tres de l'\xe9cran de d\xe9marrage",l={},d=[{value:"first_screen",id:"first_screen",level:2},{value:"identifier",id:"identifier",level:2},{value:"login_hint",id:"login_hint",level:2},{value:"Support SDK",id:"sdk-support",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"param\xe8tres-de-l\xe9cran-de-d\xe9marrage",children:"Param\xe8tres de l'\xe9cran de d\xe9marrage"})}),"\n",(0,s.jsx)(i.p,{children:"Un ensemble de param\xe8tres d'authentification personnalis\xe9s qui vous permettent d'adapter l'exp\xe9rience de l'\xe9cran de d\xe9marrage souhait\xe9e pour les utilisateurs finaux."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"first_screen"})," : Sp\xe9cifie le premier \xe9cran que l'utilisateur verra."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"identifier"})," : Sp\xe9cifie les types d'identifiants que le formulaire de connexion ou d'inscription acceptera."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"login_hint"})," : Remplit le champ identifiant avec l'adresse e-mail ou le nom d'utilisateur de l'utilisateur. (C'est un param\xe8tre standard OIDC)"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"first_screen",children:"first_screen"}),"\n",(0,s.jsxs)(i.p,{children:["Le param\xe8tre ",(0,s.jsx)(i.code,{children:"first_screen"})," est le param\xe8tre cl\xe9 qui d\xe9termine le premier \xe9cran que les utilisateurs verront lorsqu'ils seront redirig\xe9s vers la page de connexion de Logto. Par d\xe9faut, le formulaire de connexion universel sera affich\xe9. Utilisez ce param\xe8tre pour personnaliser le premier \xe9cran en fonction des besoins de votre application. Les valeurs prises en charge sont :"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"sign_in"})," : Affiche le formulaire de connexion. (Par d\xe9faut)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"register"})," : Affiche le formulaire d'inscription."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"reset_password"})," : Affiche le formulaire de r\xe9initialisation du mot de passe."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"single_sign_on"})," : Affiche le formulaire de connexion SSO d\u2019entreprise. (Une adresse e-mail sera demand\xe9e pour d\xe9terminer les fournisseurs SSO activ\xe9s)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"identifier:sign-in"})," : Affiche un formulaire de connexion sp\xe9cifique \xe0 un identifiant. Le type d'identifiant peut \xeatre sp\xe9cifi\xe9 \xe0 l'aide du param\xe8tre ",(0,s.jsx)(i.code,{children:"identifier"}),". Ceci est utile lorsque vous avez plusieurs m\xe9thodes de connexion par identifiant activ\xe9es."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"identifier:register"})," : Affiche un formulaire d'inscription sp\xe9cifique \xe0 un identifiant. Le type d'identifiant peut \xeatre sp\xe9cifi\xe9 \xe0 l'aide du param\xe8tre ",(0,s.jsx)(i.code,{children:"identifier"}),". Ceci est utile lorsque vous avez plusieurs m\xe9thodes d'inscription par identifiant activ\xe9es."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Param\xe8tre de l&#39;\xe9cran de d\xe9marrage",src:n(7326).A+"",width:"3708",height:"3104"})}),"\n",(0,s.jsx)(i.p,{children:"Par exemple, envoyer les utilisateurs directement au formulaire de connexion SSO d\u2019entreprise :"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=single_sign_on'\n"})}),"\n",(0,s.jsx)(i.h2,{id:"identifier",children:"identifier"}),"\n",(0,s.jsxs)(i.p,{children:["Le param\xe8tre ",(0,s.jsx)(i.code,{children:"identifier"})," est utilis\xe9 pour sp\xe9cifier les types d'identifiants que le formulaire de connexion ou d'inscription acceptera. Ce param\xe8tre n'est applicable que lorsque le param\xe8tre ",(0,s.jsx)(i.code,{children:"first_screen"})," est d\xe9fini sur ",(0,s.jsx)(i.code,{children:"identifier:sign-in"}),", ",(0,s.jsx)(i.code,{children:"identifier:register"}),", ou ",(0,s.jsx)(i.code,{children:"reset_password"}),". Les valeurs prises en charge sont : ",(0,s.jsx)(i.code,{children:"username"}),", ",(0,s.jsx)(i.code,{children:"email"}),", et ",(0,s.jsx)(i.code,{children:"phone"}),". S\xe9parez plusieurs valeurs par un espace vide pour autoriser plusieurs types d'identifiants."]}),"\n",(0,s.jsx)(i.p,{children:"Par exemple, envoyer les utilisateurs directement \xe0 la page d'inscription par e-mail ou num\xe9ro de t\xe9l\xe9phone :"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=identifier:register&identifier=email phone'\n"})}),"\n",(0,s.jsx)(i.p,{children:"Tous les types d'identifiants sp\xe9cifi\xe9s dans ce param\xe8tre doivent \xeatre activ\xe9s dans vos param\xe8tres de connexion ou d'inscription dans la Logto Console."}),"\n",(0,s.jsx)(i.p,{children:"Tout type d'identifiant non pris en charge ou d\xe9sactiv\xe9 sera ignor\xe9. Si tous les identifiants sp\xe9cifi\xe9s ne sont pas pris en charge, la configuration par d\xe9faut de l'exp\xe9rience de connexion sera utilis\xe9e."}),"\n",(0,s.jsx)(i.h2,{id:"login_hint",children:"login_hint"}),"\n",(0,s.jsxs)(i.p,{children:["Le param\xe8tre ",(0,s.jsx)(i.code,{children:"login_hint"}),", d\xe9fini dans la sp\xe9cification standard ",(0,s.jsx)(i.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint",children:"OpenID Connect"}),", est utilis\xe9 pour pr\xe9-remplir le formulaire de connexion avec l'identifiant de l'utilisateur (tel qu'un e-mail, un num\xe9ro de t\xe9l\xe9phone ou un nom d'utilisateur). Avec Logto, il peut \xeatre combin\xe9 avec d'autres param\xe8tres d'\xe9cran de connexion pour am\xe9liorer l'exp\xe9rience utilisateur. Ce param\xe8tre est particuli\xe8rement utile si vous avez un formulaire de pr\xe9-authentification personnalis\xe9 qui collecte l'identifiant de l'utilisateur \xe0 l'avance, lui permettant de ne pas avoir \xe0 le ressaisir lors de la connexion."]}),"\n",(0,s.jsx)(i.p,{children:"Par exemple, pr\xe9-remplir l'adresse e-mail collect\xe9e dans le formulaire de connexion :"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=identifier:sign_in&identifier=email&login_hint=example@logto.io\n"})}),"\n",(0,s.jsx)(i.h2,{id:"sdk-support",children:"Support SDK"}),"\n",(0,s.jsxs)(i.p,{children:["Dans les SDK Logto pris en charge, vous pouvez d\xe9finir les param\xe8tres lors de l'appel de la m\xe9thode ",(0,s.jsx)(i.code,{children:"signIn"})," :"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"logtoClient.signIn({\n  redirectUri: 'https://your-app.com/callback',\n  firstScreen: 'identifier:register',\n  identifier: ['email', 'phone'],\n  loginHint: 'example@logto.io',\n});\n"})}),"\n",(0,s.jsxs)(i.admonition,{type:"note",children:[(0,s.jsxs)(i.p,{children:["Nous ajoutons progressivement la prise en charge des param\xe8tres ",(0,s.jsx)(i.code,{children:"first_screen"}),", ",(0,s.jsx)(i.code,{children:"identifier"}),", et ",(0,s.jsx)(i.code,{children:"login_hint"})," \xe0 tous les SDK Logto. Si vous ne les voyez pas dans votre SDK, veuillez ouvrir un probl\xe8me ou nous contacter."]}),(0,s.jsxs)(i.p,{children:["Pour les utilisateurs de ",(0,s.jsx)(i.a,{href:"/logto-oss",children:"Logto OSS"}),", ces param\xe8tres sont pris en charge depuis la version 1.15.0. Si vous utilisez une version ant\xe9rieure, veuillez ",(0,s.jsx)(i.a,{href:"/logto-oss/upgrading-oss-version",children:"mettre \xe0 niveau"})," vers la derni\xe8re version."]})]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7326:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/first-screen-parameter-13bd87e8ba0235b1f5092d04faa17239.png"},79621:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var r=n(58101);const s={},t=r.createContext(s);function a(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);