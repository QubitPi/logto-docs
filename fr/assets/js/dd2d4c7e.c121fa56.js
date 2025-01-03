"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1370],{2009:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"integrations/email/aliyun-dm/README","title":"Configurer la v\xe9rification par e-mail avec Aliyun Direct Mail","description":"Le connecteur officiel Logto pour le service de messagerie directe d\'Aliyun.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/aliyun-dm/README.mdx","sourceDirName":"integrations/email/aliyun-dm","slug":"/integrations/aliyun-dm","permalink":"/fr/integrations/aliyun-dm","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/aliyun-dm/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/aliyun-dm","sidebar_label":"Aliyun Direct Mail","sidebar_custom_props":{"description":"Aliyun fournit des services de cloud computing aux entreprises en ligne.","logoFilename":"aliyun.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"WeCom","permalink":"/fr/integrations/wecom"},"next":{"title":"AWS Direct Mail","permalink":"/fr/integrations/aws-ses"}}');var r=i(25105),l=i(79621),t=i(73303);const c={slug:"/integrations/aliyun-dm",sidebar_label:"Aliyun Direct Mail",sidebar_custom_props:{description:"Aliyun fournit des services de cloud computing aux entreprises en ligne.",logoFilename:"aliyun.svg"}},o="Configurer la v\xe9rification par e-mail avec Aliyun Direct Mail",a={},d=[...t.RM,{value:"Commencer",id:"get-started",level:2},{value:"Configurer un service de messagerie dans la console Aliyun DirectMail",id:"set-up-an-email-service-in-aliyun-directmail-console",level:2},{value:"Cr\xe9er un compte Aliyun",id:"create-an-aliyun-account",level:3},{value:"Activer et configurer Aliyun Direct Mail",id:"enable-and-configure-aliyun-direct-mail",level:3},{value:"Composer le JSON du connecteur",id:"compose-the-connector-json",level:2},{value:"Tester le connecteur Aliyun DM",id:"test-aliyun-dm-connector",level:3},{value:"Types de configuration",id:"config-types",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configurer-la-v\xe9rification-par-e-mail-avec-aliyun-direct-mail",children:"Configurer la v\xe9rification par e-mail avec Aliyun Direct Mail"})}),"\n",(0,r.jsx)(n.p,{children:"Le connecteur officiel Logto pour le service de messagerie directe d'Aliyun."}),"\n",(0,r.jsx)(t.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"get-started",children:"Commencer"}),"\n",(0,r.jsx)(n.p,{children:"Aliyun est un fournisseur de services cloud majeur en Asie, offrant de nombreux services cloud, y compris DM (messagerie directe). Le connecteur Aliyun DM est un plugin fourni par l'\xe9quipe Logto pour appeler les API de service Aliyun DM, gr\xe2ce auquel les utilisateurs finaux de Logto peuvent s'inscrire et se connecter \xe0 leur compte Logto via un code de v\xe9rification par e-mail (ou en d'autres termes, un code de v\xe9rification)."}),"\n",(0,r.jsx)(n.h2,{id:"set-up-an-email-service-in-aliyun-directmail-console",children:"Configurer un service de messagerie dans la console Aliyun DirectMail"}),"\n",(0,r.jsx)(n.h3,{id:"create-an-aliyun-account",children:"Cr\xe9er un compte Aliyun"}),"\n",(0,r.jsxs)(n.p,{children:["Rendez-vous sur ",(0,r.jsx)(n.a,{href:"https://aliyun.com/",children:"Aliyun"})," et cr\xe9ez votre compte Aliyun si vous n'en avez pas."]}),"\n",(0,r.jsx)(n.h3,{id:"enable-and-configure-aliyun-direct-mail",children:"Activer et configurer Aliyun Direct Mail"}),"\n",(0,r.jsxs)(n.p,{children:["Acc\xe9dez \xe0 la ",(0,r.jsx)(n.a,{href:"https://www.aliyun.com/product/directmail",children:"page de la console du service DM"}),' et connectez-vous. Activez le service Direct Mail en cliquant sur le bouton "Apply to enable" (\u7533\u8bf7\u5f00\u901a) en haut \xe0 gauche de la page et commencez le processus de configuration.']}),"\n",(0,r.jsxs)(n.p,{children:["\xc0 partir de la ",(0,r.jsx)(n.a,{href:"https://dm.console.aliyun.com/",children:"page de la console d'administration DM"}),", vous devez :"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Aller \xe0 "Email Domains" (\u53d1\u4fe1\u57df\u540d) dans la barre lat\xe9rale et ajouter un "New Domain" (\u65b0\u5efa\u57df\u540d) en suivant les instructions.'}),"\n",(0,r.jsx)(n.li,{children:'Personnaliser "Sender Addresses" (\u53d1\u4fe1\u5730\u5740) et "Email Tags" (\u90ae\u4ef6\u6807\u7b7e) respectivement.'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Apr\xe8s avoir termin\xe9 la configuration, il existe deux mani\xe8res diff\xe9rentes de tester :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Allez \xe0 la ",(0,r.jsx)(n.a,{href:"https://dm.console.aliyun.com/",children:"page d'aper\xe7u de DirectMail"}),', trouvez "Operation Guide" (\u64cd\u4f5c\u5f15\u5bfc) en bas de la page, et cliquez sur "Send Emails" (\u53d1\u9001\u90ae\u4ef6). Vous trouverez tous les diff\xe9rents types de m\xe9thodes de test.']}),"\n",(0,r.jsx)(n.li,{children:'Suivez le chemin "Send Emails" (\u53d1\u9001\u90ae\u4ef6) -> "Email Tasks" (\u53d1\u9001\u90ae\u4ef6) dans la barre lat\xe9rale pour cr\xe9er une t\xe2che de test.'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"compose-the-connector-json",children:"Composer le JSON du connecteur"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Depuis la ",(0,r.jsx)(n.a,{href:"https://dm.console.aliyun.com/",children:"page de la console d'administration DM"}),', survolez votre avatar dans le coin sup\xe9rieur droit et allez \xe0 "AccessKey Management" (AccessKey \u7ba1\u7406), puis cliquez sur "Create AccessKey" (\u521b\u5efa AccessKey). Vous obtiendrez une paire "AccessKey ID" et "AccessKey Secret" apr\xe8s avoir termin\xe9 la v\xe9rification de s\xe9curit\xe9. Veuillez les conserver correctement.']}),"\n",(0,r.jsxs)(n.li,{children:['Allez \xe0 l\'onglet "Sender Addresses" (\u53d1\u4fe1\u5730\u5740) ou "Email Tags" (\u90ae\u4ef6\u6807\u7b7e) que vous venez de visiter depuis la ',(0,r.jsx)(n.a,{href:"https://dm.console.aliyun.com/",children:"page de la console d'administration DM"}),", vous pouvez facilement trouver ",(0,r.jsx)(n.em,{children:"Sender Address"})," ou ",(0,r.jsx)(n.em,{children:"Email Tag"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Remplissez les param\xe8tres du connecteur Aliyun DM :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Remplissez les champs ",(0,r.jsx)(n.code,{children:"accessKeyId"})," et ",(0,r.jsx)(n.code,{children:"accessKeySecret"})," avec les paires de cl\xe9s d'acc\xe8s que vous avez obtenues \xe0 l'\xe9tape 1."]}),"\n",(0,r.jsxs)(n.li,{children:["Remplissez le champ ",(0,r.jsx)(n.code,{children:"accountName"})," et ",(0,r.jsx)(n.code,{children:"fromAlias"}),' avec "Sender Address" et "Email Tag" trouv\xe9s \xe0 l\'\xe9tape 2. Tous les mod\xe8les partageront ce nom de signature. (Vous pouvez laisser ',(0,r.jsx)(n.code,{children:"fromAlias"})," vide car il est OPTIONNEL.)"]}),"\n",(0,r.jsxs)(n.li,{children:["Vous pouvez ajouter plusieurs mod\xe8les de connecteur DM pour diff\xe9rents cas. Voici un exemple d'ajout d'un seul mod\xe8le :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Remplissez le champ ",(0,r.jsx)(n.code,{children:"subject"}),", qui servira de titre \xe0 l'e-mail envoy\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:["Remplissez le champ ",(0,r.jsx)(n.code,{children:"content"})," avec des contenus de type cha\xeene arbitraire. N'oubliez pas de laisser l'espace r\xe9serv\xe9 ",(0,r.jsx)(n.code,{children:"{{code}}"})," pour le code de v\xe9rification al\xe9atoire."]}),"\n",(0,r.jsxs)(n.li,{children:["Remplissez le champ ",(0,r.jsx)(n.code,{children:"usageType"})," avec soit ",(0,r.jsx)(n.code,{children:"Register"}),", ",(0,r.jsx)(n.code,{children:"SignIn"}),", ",(0,r.jsx)(n.code,{children:"ForgotPassword"})," ou ",(0,r.jsx)(n.code,{children:"Generic"})," pour diff\xe9rents cas d'utilisation. (",(0,r.jsx)(n.code,{children:"usageType"})," est une propri\xe9t\xe9 Logto pour identifier le cas d'utilisation appropri\xe9.) Afin d'activer les flux utilisateur complets, des mod\xe8les avec ",(0,r.jsx)(n.code,{children:"usageType"})," ",(0,r.jsx)(n.code,{children:"Register"}),", ",(0,r.jsx)(n.code,{children:"SignIn"}),", ",(0,r.jsx)(n.code,{children:"ForgotPassword"})," et ",(0,r.jsx)(n.code,{children:"Generic"})," sont requis."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"test-aliyun-dm-connector",children:"Tester le connecteur Aliyun DM"}),"\n",(0,r.jsx)(n.p,{children:'Vous pouvez taper une adresse e-mail et cliquer sur "Send" pour voir si les param\xe8tres fonctionnent avant de "Save and Done".'}),"\n",(0,r.jsxs)(n.p,{children:["C'est tout. N'oubliez pas de ",(0,r.jsx)(n.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Activer le connecteur dans l'exp\xe9rience de connexion"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"config-types",children:"Types de configuration"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nom"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessKeyId"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accessKeySecret"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"accountName"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fromAlias"}),(0,r.jsx)(n.td,{children:"string (OPTIONNEL)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"templates"}),(0,r.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9s du mod\xe8le"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeurs \xe9num\xe9r\xe9es"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subject"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"content"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"usageType"}),(0,r.jsx)(n.td,{children:"enum string"}),(0,r.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},73303:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>l});var s=i(25105),r=i(79621);const l=[];function t(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,s.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(58101);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);