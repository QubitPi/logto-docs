"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[24330],{73303:(e,n,o)=>{o.d(n,{Ay:()=>l,RM:()=>r});var s=o(25105),i=o(79621);const r=[];function t(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,s.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},59770:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"integrations/social/facebook/README","title":"Configurer la connexion sociale avec Facebook","description":"Le connecteur officiel Logto pour la connexion sociale Facebook.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/facebook/README.mdx","sourceDirName":"integrations/social/facebook","slug":"/integrations/facebook","permalink":"/fr/integrations/facebook","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/facebook/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/facebook","sidebar_label":"Facebook","sidebar_custom_props":{"description":"Facebook est une plateforme de m\xe9dias sociaux mondiale avec des milliards d\'utilisateurs."}},"sidebar":"integrationsSidebar","previous":{"title":"Discord","permalink":"/fr/integrations/discord"},"next":{"title":"Feishu","permalink":"/fr/integrations/feishu-web"}}');var i=o(25105),r=o(79621),t=o(73303);const l={slug:"/integrations/facebook",sidebar_label:"Facebook",sidebar_custom_props:{description:"Facebook est une plateforme de m\xe9dias sociaux mondiale avec des milliards d'utilisateurs."}},c="Configurer la connexion sociale avec Facebook",a={},d=[...t.RM,{value:"Commencer",id:"get-started",level:2},{value:"Enregistrer un compte d\xe9veloppeur Facebook",id:"register-a-facebook-developer-account",level:3},{value:"Configurer une application Facebook",id:"set-up-a-facebook-app",level:3},{value:"Composer le JSON du connecteur",id:"compose-the-connector-json",level:2},{value:"Tester la connexion avec les utilisateurs de test de Facebook",id:"test-sign-in-with-facebooks-test-users",level:2},{value:"Publier les param\xe8tres de connexion Facebook",id:"publish-facebook-sign-in-settings",level:2},{value:"Types de configuration",id:"config-types",level:2},{value:"R\xe9f\xe9rences",id:"references",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configurer-la-connexion-sociale-avec-facebook",children:"Configurer la connexion sociale avec Facebook"})}),"\n",(0,i.jsx)(n.p,{children:"Le connecteur officiel Logto pour la connexion sociale Facebook."}),"\n",(0,i.jsx)(t.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Commencer"}),"\n",(0,i.jsx)(n.p,{children:"Le connecteur Facebook fournit un moyen concis pour votre application d'utiliser le syst\xe8me d'Authentification OAuth 2.0 de Facebook."}),"\n",(0,i.jsx)(n.h3,{id:"register-a-facebook-developer-account",children:"Enregistrer un compte d\xe9veloppeur Facebook"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/register/",children:"Inscrivez-vous en tant que d\xe9veloppeur Facebook"})," si vous n'en avez pas d\xe9j\xe0 un"]}),"\n",(0,i.jsx)(n.h3,{id:"set-up-a-facebook-app",children:"Configurer une application Facebook"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Visitez la page ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/apps",children:"Apps"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Cliquez sur votre application existante ou ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app",children:"cr\xe9ez-en une nouvelle"})," si n\xe9cessaire.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types",children:"type d'application"})," s\xe9lectionn\xe9 d\xe9pend de vous, mais il doit avoir le produit ",(0,i.jsx)(n.em,{children:"Facebook Login"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:'Sur la page du tableau de bord de l\'application, faites d\xe9filer jusqu\'\xe0 la section "Ajouter un produit" et cliquez sur le bouton "Configurer" sur la carte "Facebook Login".'}),"\n",(0,i.jsx)(n.li,{children:'Passez la page de d\xe9marrage rapide de Facebook Login, et cliquez sur la barre lat\xe9rale -> "Produits" -> "Facebook Login" -> "Param\xe8tres".'}),"\n",(0,i.jsxs)(n.li,{children:["Dans la page des param\xe8tres de Facebook Login, remplissez ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),' dans le champ "URI de redirection OAuth valides". Le ',(0,i.jsx)(n.code,{children:"connector_id"})," peut \xeatre trouv\xe9 sur la barre sup\xe9rieure de la page des d\xe9tails du connecteur de la Logto Admin Console. Par exemple :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"})," pour la production"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"https://localhost:3001/callback/${connector_id}"})," pour les tests dans l'environnement local"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:'Cliquez sur le bouton "Enregistrer les modifications" en bas \xe0 droite.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"compose-the-connector-json",children:"Composer le JSON du connecteur"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Dans la page du tableau de bord de l\'application Facebook, cliquez sur la barre lat\xe9rale -> "Param\xe8tres" -> "Basique".'}),"\n",(0,i.jsx)(n.li,{children:'Vous verrez l\'"ID de l\'application" et le "Secret de l\'application" sur le panneau.'}),"\n",(0,i.jsx)(n.li,{children:'Cliquez sur le bouton "Afficher" suivant la bo\xeete de saisie du Secret de l\'application pour copier son contenu.'}),"\n",(0,i.jsxs)(n.li,{children:["Remplissez les param\xe8tres du connecteur Logto :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Remplissez le champ ",(0,i.jsx)(n.code,{children:"clientId"})," avec la cha\xeene de l'",(0,i.jsx)(n.em,{children:"ID de l'application"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Remplissez le champ ",(0,i.jsx)(n.code,{children:"clientSecret"})," avec la cha\xeene du ",(0,i.jsx)(n.em,{children:"Secret de l'application"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Remplissez le champ ",(0,i.jsx)(n.code,{children:"scope"})," avec une liste s\xe9par\xe9e par des virgules ou des espaces de ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/permissions/reference",children:"Permissions"})," en cha\xeene. Si vous ne sp\xe9cifiez pas de Port\xe9e, la Port\xe9e par d\xe9faut est ",(0,i.jsx)(n.code,{children:"email,public_profile"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"test-sign-in-with-facebooks-test-users",children:"Tester la connexion avec les utilisateurs de test de Facebook"}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez utiliser les comptes des utilisateurs de test, d\xe9veloppeurs et administrateurs pour tester la connexion avec l'application concern\xe9e en mode ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes",children:"d\xe9veloppement et en direct"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez \xe9galement ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"mettre l'application en direct"})," directement afin que tout utilisateur Facebook puisse se connecter avec l'application."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Dans la page du tableau de bord de l\'application, cliquez sur la barre lat\xe9rale -> "R\xf4les" -> "Utilisateurs de test".'}),"\n",(0,i.jsx)(n.li,{children:'Cliquez sur le bouton "Cr\xe9er des utilisateurs de test" pour cr\xe9er un utilisateur de test.'}),"\n",(0,i.jsx)(n.li,{children:'Cliquez sur le bouton "Options" de l\'utilisateur de test existant, et vous verrez plus d\'op\xe9rations, par exemple, "Changer le nom et le mot de passe".'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"publish-facebook-sign-in-settings",children:"Publier les param\xe8tres de connexion Facebook"}),"\n",(0,i.jsxs)(n.p,{children:["Habituellement, seuls les utilisateurs de test, administrateurs et d\xe9veloppeurs peuvent se connecter avec l'application concern\xe9e en ",(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode",children:"mode d\xe9veloppement"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Pour permettre aux utilisateurs Facebook normaux de se connecter avec l'application dans l'environnement de production, vous devrez peut-\xeatre passer votre application Facebook en ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"mode en direct"})}),", selon le type d'application.\nPar exemple, l'application de type ",(0,i.jsx)(n.em,{children:"business pur"}),' n\'a pas le bouton de basculement "en direct", mais cela ne bloquera pas votre utilisation.']}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Dans la page du tableau de bord de l\'application Facebook, cliquez sur la barre lat\xe9rale -> "Param\xe8tres" -> "Basique".'}),"\n",(0,i.jsx)(n.li,{children:'Remplissez les champs "URL de la politique de confidentialit\xe9" et "Suppression des donn\xe9es utilisateur" sur le panneau si n\xe9cessaire.'}),"\n",(0,i.jsx)(n.li,{children:'Cliquez sur le bouton "Enregistrer les modifications" en bas \xe0 droite.'}),"\n",(0,i.jsx)(n.li,{children:'Cliquez sur le bouton de basculement "En direct" sur la barre sup\xe9rieure de l\'application.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"config-types",children:"Types de configuration"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"R\xe9f\xe9rences"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/",children:"Facebook Login - Documentation - Facebook for Developers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/",children:"Construire manuellement un flux de connexion"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/permissions",children:"Guide des Permissions"})}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},79621:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var s=o(58101);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);