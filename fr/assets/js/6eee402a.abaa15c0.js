"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[81317],{44562:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"integrations/email/mailgun/README","title":"Configurer la v\xe9rification par e-mail avec le service de messagerie Mailgun","description":"Le connecteur officiel Logto pour le service de messagerie Mailgun.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/mailgun/README.mdx","sourceDirName":"integrations/email/mailgun","slug":"/integrations/mailgun","permalink":"/fr/integrations/mailgun","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/mailgun/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/mailgun","sidebar_label":"Mailgun","sidebar_custom_props":{"description":"Mailgun est un service de livraison d\'e-mails pour envoyer, recevoir et suivre des e-mails."}},"sidebar":"integrationsSidebar","previous":{"title":"HTTP Email","permalink":"/fr/integrations/http-email"},"next":{"title":"Postmark","permalink":"/fr/integrations/postmark"}}');var r=i(25105),l=i(79621),o=i(73303);const t={slug:"/integrations/mailgun",sidebar_label:"Mailgun",sidebar_custom_props:{description:"Mailgun est un service de livraison d'e-mails pour envoyer, recevoir et suivre des e-mails."}},a="Configurer la v\xe9rification par e-mail avec le service de messagerie Mailgun",c={},u=[...o.RM,{value:"Pr\xe9requis",id:"prerequisites",level:2},{value:"Configuration de base",id:"basic-configuration",level:2},{value:"Livraisons",id:"deliveries",level:2},{value:"Objet de configuration",id:"config-object",level:3},{value:"Types d&#39;utilisation",id:"usage-types",level:3},{value:"Configuration du contenu",id:"content-config",level:3},{value:"Exemple",id:"example",level:3},{value:"Tester le connecteur d&#39;e-mail Mailgun",id:"test-mailgun-email-connector",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configurer-la-v\xe9rification-par-e-mail-avec-le-service-de-messagerie-mailgun",children:"Configurer la v\xe9rification par e-mail avec le service de messagerie Mailgun"})}),"\n",(0,r.jsx)(n.p,{children:"Le connecteur officiel Logto pour le service de messagerie Mailgun."}),"\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Pr\xe9requis"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Un compte ",(0,r.jsx)(n.a,{href:"https://www.mailgun.com/",children:"Mailgun"})]}),"\n",(0,r.jsxs)(n.li,{children:["Une cl\xe9 API de votre compte Mailgun, n\xe9cessitant l'autorisation d'envoyer des messages (e-mails). Voir ",(0,r.jsx)(n.a,{href:"https://help.mailgun.com/hc/en-us/articles/203380100-Where-Can-I-Find-My-API-Key-and-SMTP-Credentials-",children:"Where Can I Find My API Key and SMTP Credentials?"})," pour plus d'informations."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"basic-configuration",children:"Configuration de base"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Remplissez le champ ",(0,r.jsx)(n.code,{children:"endpoint"})," lorsque vous utilisez un autre point de terminaison API Mailgun, par exemple, la r\xe9gion EU devrait \xeatre ",(0,r.jsx)(n.code,{children:"https://api.eu.mailgun.net"}),". La valeur par d\xe9faut est ",(0,r.jsx)(n.code,{children:"https://api.mailgun.net"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Remplissez le champ ",(0,r.jsx)(n.code,{children:"domain"})," avec le domaine que vous avez enregistr\xe9 dans votre compte Mailgun. Cette valeur peut \xeatre trouv\xe9e dans la section ",(0,r.jsx)(n.strong,{children:"Domains"})," du tableau de bord Mailgun. Le domaine doit \xeatre au format ",(0,r.jsx)(n.code,{children:"example.com"}),", sans le pr\xe9fixe ",(0,r.jsx)(n.code,{children:"https://"})," ou ",(0,r.jsx)(n.code,{children:"http://"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Remplissez le champ ",(0,r.jsx)(n.code,{children:"apiKey"})," avec la cl\xe9 API que vous avez g\xe9n\xe9r\xe9e dans votre compte Mailgun."]}),"\n",(0,r.jsxs)(n.li,{children:["Remplissez le champ ",(0,r.jsx)(n.code,{children:"from"})," avec l'adresse e-mail \xe0 partir de laquelle vous souhaitez envoyer des e-mails. Cette adresse e-mail doit \xeatre enregistr\xe9e dans votre compte Mailgun. L'adresse e-mail doit \xeatre au format ",(0,r.jsx)(n.code,{children:"Sender Name <sender@example.com>"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"deliveries",children:"Livraisons"}),"\n",(0,r.jsx)(n.h3,{id:"config-object",children:"Objet de configuration"}),"\n",(0,r.jsx)(n.p,{children:"La section \"Livraisons\" vous permet de configurer le contenu des e-mails \xe0 envoyer dans diff\xe9rents sc\xe9narios. Il s'agit d'une carte cl\xe9-valeur JSON o\xf9 la cl\xe9 est le type d'utilisation et la valeur est un objet contenant la configuration du contenu pour l'e-mail \xe0 envoyer."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "<usage-type>": {\n    // ...\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"usage-types",children:"Types d'utilisation"}),"\n",(0,r.jsx)(n.p,{children:"Les types d'utilisation suivants sont pris en charge :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Register"})," : L'e-mail \xe0 envoyer lorsqu'un utilisateur s'inscrit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SignIn"})," : L'e-mail \xe0 envoyer lorsqu'un utilisateur se connecte."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ForgotPassword"})," : L'e-mail \xe0 envoyer lorsqu'un utilisateur r\xe9initialise son mot de passe."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Generic"})," : L'e-mail \xe0 envoyer lorsqu'un utilisateur effectue une action g\xe9n\xe9rique, par exemple, tester le connecteur d'e-mail."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Remarque"}),"\nSi le type d'utilisation n'est pas sp\xe9cifi\xe9 dans la configuration des livraisons, l'e-mail g\xe9n\xe9rique sera envoy\xe9. Si l'e-mail g\xe9n\xe9rique n'est pas sp\xe9cifi\xe9, le connecteur renverra une erreur."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"content-config",children:"Configuration du contenu"}),"\n",(0,r.jsx)(n.p,{children:"Le connecteur prend en charge \xe0 la fois le contenu HTML direct et le mod\xe8le Mailgun. Vous pouvez utiliser l'un d'eux pour chaque type d'utilisation."}),"\n",(0,r.jsxs)(n.p,{children:["Dans le sujet et le contenu, vous pouvez utiliser l'espace r\xe9serv\xe9 ",(0,r.jsx)(n.code,{children:"{{code}}"})," pour ins\xe9rer le code de v\xe9rification."]}),"\n",(0,r.jsx)(n.p,{children:"Pour utiliser le contenu HTML direct, remplissez les champs suivants :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"subject"})," : Le sujet de l'e-mail \xe0 envoyer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"replyTo"})," : L'adresse e-mail \xe0 utiliser comme adresse de r\xe9ponse."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"html"})," : (Requis) Le contenu HTML de l'e-mail \xe0 envoyer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"text"})," : La version texte brut de l'e-mail \xe0 envoyer."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Pour utiliser le mod\xe8le Mailgun, remplissez les champs suivants :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"subject"})," : Le sujet de l'e-mail \xe0 envoyer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"replyTo"})," : L'adresse e-mail \xe0 utiliser comme adresse de r\xe9ponse."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"template"})," : (Requis) Le nom du mod\xe8le Mailgun \xe0 utiliser."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"variables"})," : Les variables \xe0 transmettre au mod\xe8le Mailgun. Doit \xeatre une carte cl\xe9-valeur JSON car elle sera convertie en cha\xeene avant d'\xeatre envoy\xe9e \xe0 Mailgun. Notez qu'il n'est pas n\xe9cessaire d'inclure la variable ",(0,r.jsx)(n.code,{children:"code"})," car elle sera automatiquement ajout\xe9e par le connecteur."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Voici un exemple de configuration des livraisons :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "Register": {\n    "subject": "{{code}} est votre code de v\xe9rification",\n    "replyTo": "Foo <foo@bar.com>",\n    "html": "<h1>Bienvenue sur Logto</h1><p>Votre code de v\xe9rification est {{code}}.</p>",\n    "text": "Bienvenue sur Logto. Votre code de v\xe9rification est {{code}}."\n  },\n  "SignIn": {\n    "subject": "Bienvenue \xe0 nouveau sur Logto",\n    "replyTo": "Foo <foo@bar.com>",\n    "template": "logto-sign-in",\n    "variables": {\n      "bar": "baz"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"test-mailgun-email-connector",children:"Tester le connecteur d'e-mail Mailgun"}),"\n",(0,r.jsx)(n.p,{children:'Vous pouvez saisir une adresse e-mail et cliquer sur "Envoyer" pour v\xe9rifier si les param\xe8tres fonctionnent avant "Enregistrer et Terminer".'}),"\n",(0,r.jsxs)(n.p,{children:["C'est tout. N'oubliez pas de ",(0,r.jsx)(n.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Activer le connecteur dans l'exp\xe9rience de connexion"})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},73303:(e,n,i)=>{i.d(n,{Ay:()=>t,RM:()=>l});var s=i(25105),r=i(79621);const l=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,s.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function t(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var s=i(58101);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);