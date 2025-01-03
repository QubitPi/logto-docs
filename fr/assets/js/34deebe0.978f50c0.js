"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[77393],{73303:(e,s,n)=>{n.d(s,{Ay:()=>l,RM:()=>t});var i=n(25105),r=n(79621);const t=[];function o(e){const s={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,i.jsx)(s.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11445:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/sms/aliyun-sms/README","title":"Configurer la v\xe9rification par SMS avec Aliyun Short Message Service","description":"Le connecteur officiel Logto pour le service de messages courts Aliyun.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/sms/aliyun-sms/README.mdx","sourceDirName":"integrations/sms/aliyun-sms","slug":"/integrations/aliyun-sms","permalink":"/fr/integrations/aliyun-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/sms/aliyun-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/aliyun-sms","sidebar_label":"Aliyun Short Message","sidebar_custom_props":{"description":"Aliyun fournit des services de cloud computing aux entreprises en ligne.","logoFilename":"aliyun.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"SMTP","permalink":"/fr/integrations/smtp"},"next":{"title":"GatewayAPI SMS","permalink":"/fr/integrations/gatewayapi"}}');var r=n(25105),t=n(79621),o=n(73303);const l={slug:"/integrations/aliyun-sms",sidebar_label:"Aliyun Short Message",sidebar_custom_props:{description:"Aliyun fournit des services de cloud computing aux entreprises en ligne.",logoFilename:"aliyun.svg"}},c="Configurer la v\xe9rification par SMS avec Aliyun Short Message Service",a={},d=[...o.RM,{value:"Commencer",id:"get-started",level:2},{value:"Configurer un service de messages courts dans la console SMS Aliyun",id:"set-up-a-short-message-service-in-aliyun-sms-console",level:2},{value:"Cr\xe9er un compte Aliyun",id:"create-an-aliyun-account",level:3},{value:"Activer et configurer le service de messages courts Aliyun",id:"enable-and-configure-aliyun-short-message-service",level:3},{value:"Composer le JSON du connecteur",id:"compose-the-connector-json",level:2},{value:"Tester le connecteur SMS Aliyun",id:"test-aliyun-sms-connector",level:3},{value:"Types de configuration",id:"config-types",level:3},{value:"R\xe9f\xe9rences",id:"references",level:2}];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"configurer-la-v\xe9rification-par-sms-avec-aliyun-short-message-service",children:"Configurer la v\xe9rification par SMS avec Aliyun Short Message Service"})}),"\n",(0,r.jsx)(s.p,{children:"Le connecteur officiel Logto pour le service de messages courts Aliyun."}),"\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(s.h2,{id:"get-started",children:"Commencer"}),"\n",(0,r.jsx)(s.p,{children:"Aliyun est un fournisseur de services cloud majeur en Asie, offrant de nombreux services cloud, y compris le SMS (service de messages courts). Le connecteur SMS Aliyun est un plugin fourni par l'\xe9quipe Logto pour appeler le service SMS Aliyun, gr\xe2ce auquel les utilisateurs finaux de Logto peuvent s'inscrire et se connecter \xe0 leur compte Logto via un code de v\xe9rification par SMS."}),"\n",(0,r.jsx)(s.h2,{id:"set-up-a-short-message-service-in-aliyun-sms-console",children:"Configurer un service de messages courts dans la console SMS Aliyun"}),"\n",(0,r.jsx)(s.h3,{id:"create-an-aliyun-account",children:"Cr\xe9er un compte Aliyun"}),"\n",(0,r.jsxs)(s.p,{children:["Allez sur le ",(0,r.jsx)(s.a,{href:"https://cn.aliyun.com/",children:"site web d'Aliyun"})," et enregistrez votre compte Aliyun si vous n'en avez pas."]}),"\n",(0,r.jsx)(s.h3,{id:"enable-and-configure-aliyun-short-message-service",children:"Activer et configurer le service de messages courts Aliyun"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Connectez-vous avec votre compte Aliyun sur le ",(0,r.jsx)(s.a,{href:"https://cn.aliyun.com/",children:"site web d'Aliyun"})," et allez sur la ",(0,r.jsx)(s.a,{href:"https://www.aliyun.com/product/sms",children:"page de la console du service SMS"}),"."]}),"\n",(0,r.jsx)(s.li,{children:'Cliquez sur le bouton "Open for free" (\u514d\u8d39\u5f00\u901a) en haut \xe0 gauche de la page du service SMS et commencez le processus de configuration.'}),"\n",(0,r.jsx)(s.li,{children:'Lisez et acceptez l\'"Accord d\'activation du service SMS" (\u77ed\u4fe1\u670d\u52a1\u5f00\u901a\u6761\u6b3e) et cliquez sur "Subscribe to a service" (\u5f00\u901a\u670d\u52a1) pour continuer.'}),"\n",(0,r.jsxs)(s.li,{children:["Vous \xeates maintenant sur la ",(0,r.jsx)(s.a,{href:"https://dysms.console.aliyun.com/overview",children:"page de la console du service SMS"}),', allez soit sur le bouton "Mainland China" (\u56fd\u5185\u6d88\u606f) soit "Outside Mainland China" (\u56fd\u9645/\u6e2f\u6fb3\u53f0\u6d88\u606f) dans la barre lat\xe9rale selon votre cas d\'utilisation.']}),"\n",(0,r.jsxs)(s.li,{children:["Ajoutez une signature et un mod\xe8le en suivant les directives, et fournissez les documents ou informations requis pour la r\xe9vision.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'N\'oubliez pas de s\xe9lectionner "Verification Code Message" (\u9a8c\u8bc1\u7801) comme "Scenario" (\u9002\u7528\u573a\u666f) lors de la saisie de la demande de signature et \xe9galement "Verification Code Message" (\u9a8c\u8bc1\u7801) pour "Type" (\u6a21\u677f\u7c7b\u578b) lors de la demande de r\xe9vision du mod\xe8le car nous utilisons ces signatures et mod\xe8les pour envoyer le code de v\xe9rification. Actuellement, nous ne prenons pas en charge l\'envoi de messages SMS autres que ceux li\xe9s aux codes de v\xe9rification.'}),"\n",(0,r.jsxs)(s.li,{children:["Utilisez \xe9galement ",(0,r.jsx)(s.code,{children:"{{code}}"})," comme espace r\xe9serv\xe9 l\xe0 o\xf9 vous souhaitez placer votre code de v\xe9rification num\xe9rique dans le contenu du mod\xe8le."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Apr\xe8s avoir soumis votre demande de signature et de mod\xe8le SMS, vous devez attendre qu'elle prenne effet. \xc0 ce stade, nous pouvons revenir \xe0 la ",(0,r.jsx)(s.a,{href:"https://dysms.console.aliyun.com/overview",children:"page de la console du service SMS"})," et envoyer un SMS de test. Si vos signatures et mod\xe8les sont pr\xeats \xe0 \xeatre utilis\xe9s, vous pouvez les essayer directement ; s'ils ne sont pas encore effectifs, Aliyun fournit \xe9galement des mod\xe8les de test.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Vous devrez peut-\xeatre recharger un petit montant d'argent avant d'envoyer des messages de test."}),"\n",(0,r.jsxs)(s.li,{children:["Il peut \xe9galement vous \xeatre demand\xe9 de lier un num\xe9ro de t\xe9l\xe9phone de test avant d'envoyer des messages de test. Pour plus de d\xe9tails, allez \xe0 l'onglet \"Quick Start\" (\u5feb\u901f\u5b66\u4e60) dans la barre lat\xe9rale de la ",(0,r.jsx)(s.a,{href:"https://dysms.console.aliyun.com/overview",children:"page de la console du service SMS"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"compose-the-connector-json",children:"Composer le JSON du connecteur"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Depuis la ",(0,r.jsx)(s.a,{href:"https://dysms.console.aliyun.com/overview",children:"page de la console du service SMS"}),', survolez votre avatar dans le coin sup\xe9rieur droit et allez \xe0 "AccessKey Management" (AccessKey \u7ba1\u7406), et cliquez sur "Create AccessKey" (\u521b\u5efa AccessKey). Vous obtiendrez une paire "AccessKey ID" et "AccessKey Secret" apr\xe8s avoir termin\xe9 la v\xe9rification de s\xe9curit\xe9. Veuillez les conserver correctement.']}),"\n",(0,r.jsxs)(s.li,{children:['Allez \xe0 l\'onglet "Mainland China" (\u56fd\u5185\u6d88\u606f) ou "Outside Mainland China" (\u56fd\u9645/\u6e2f\u6fb3\u53f0\u6d88\u606f) que vous venez de visiter, vous pouvez facilement trouver "Signature" (\u7b7e\u540d\u540d\u79f0) et "Template Code" (\u6a21\u677f CODE).',"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'Si vous souhaitez utiliser la signature et le mod\xe8le uniquement pour les tests, allez plut\xf4t \xe0 l\'onglet "Quick Start" (\u5feb\u901f\u5b66\u4e60), et vous les trouverez sous "Signature & Templates (For Test Only)".'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Remplissez les param\xe8tres du connecteur SMS Aliyun :","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Remplissez les champs ",(0,r.jsx)(s.code,{children:"accessKeyId"})," et ",(0,r.jsx)(s.code,{children:"accessKeySecret"})," avec les paires de cl\xe9s d'acc\xe8s que vous avez obtenues \xe0 l'\xe9tape 1."]}),"\n",(0,r.jsxs)(s.li,{children:["Remplissez le champ ",(0,r.jsx)(s.code,{children:"signName"}),' avec "Signature" (\u7b7e\u540d\u540d\u79f0) mentionn\xe9e \xe0 l\'\xe9tape 2. Tous les mod\xe8les partageront ce nom de signature.']}),"\n",(0,r.jsxs)(s.li,{children:["Vous pouvez ajouter plusieurs mod\xe8les de connecteur SMS pour diff\xe9rents cas. Voici un exemple d'ajout d'un seul mod\xe8le :","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Remplissez le champ ",(0,r.jsx)(s.code,{children:"templateCode"}),', qui est la fa\xe7on dont vous pouvez contr\xf4ler le contexte SMS, avec "Template Code" (\u6a21\u677f CODE) de l\'\xe9tape 2.']}),"\n",(0,r.jsxs)(s.li,{children:["Remplissez le champ ",(0,r.jsx)(s.code,{children:"usageType"})," avec soit ",(0,r.jsx)(s.code,{children:"Register"}),", ",(0,r.jsx)(s.code,{children:"SignIn"}),", ",(0,r.jsx)(s.code,{children:"ForgotPassword"})," ou ",(0,r.jsx)(s.code,{children:"Generic"})," pour diff\xe9rents cas d'utilisation. (",(0,r.jsx)(s.code,{children:"usageType"})," est une propri\xe9t\xe9 Logto pour identifier le cas d'utilisation appropri\xe9.) Afin d'activer tous les flux utilisateur, les mod\xe8les avec usageType ",(0,r.jsx)(s.code,{children:"Register"}),", ",(0,r.jsx)(s.code,{children:"SignIn"}),", ",(0,r.jsx)(s.code,{children:"ForgotPassword"})," et ",(0,r.jsx)(s.code,{children:"Generic"})," sont requis."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"test-aliyun-sms-connector",children:"Tester le connecteur SMS Aliyun"}),"\n",(0,r.jsx)(s.p,{children:'Vous pouvez taper un num\xe9ro de t\xe9l\xe9phone et cliquer sur "Send" pour voir si les param\xe8tres fonctionnent avant de "Save and Done".'}),"\n",(0,r.jsxs)(s.p,{children:["C'est tout. N'oubliez pas de ",(0,r.jsx)(s.a,{href:"/connectors/sms-connectors/#enable-phone-number-sign-up-or-sign-in",children:"Activer le connecteur dans l'exp\xe9rience de connexion"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"config-types",children:"Types de configuration"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nom"}),(0,r.jsx)(s.th,{children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessKeyId"}),(0,r.jsx)(s.td,{children:"string"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"accessKeySecret"}),(0,r.jsx)(s.td,{children:"string"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"signName"}),(0,r.jsx)(s.td,{children:"string"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"templates"}),(0,r.jsx)(s.td,{children:"Template[]"})]})]})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propri\xe9t\xe9s du mod\xe8le"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Valeurs \xe9num\xe9r\xe9es"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"templateCode"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"N/A"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"usageType"}),(0,r.jsx)(s.td,{children:"enum string"}),(0,r.jsx)(s.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"references",children:"R\xe9f\xe9rences"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://dysms.console.aliyun.com/quickstart",children:"Aliyun SMS - Quick Start"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79621:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(58101);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);