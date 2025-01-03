"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39429],{11077:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"integrations/email/aws-ses/README","title":"Configurer la v\xe9rification par e-mail avec AWS Direct Mail","description":"Le connecteur officiel Logto pour le service de messagerie directe AWS.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/aws-ses/README.mdx","sourceDirName":"integrations/email/aws-ses","slug":"/integrations/aws-ses","permalink":"/fr/integrations/aws-ses","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/aws-ses/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/aws-ses","sidebar_label":"AWS Direct Mail","sidebar_custom_props":{"description":"Amazon SES est un fournisseur de services de messagerie cloud qui peut s\'int\xe9grer \xe0 toute application pour l\'envoi d\'e-mails en masse.","logoFilename":"aws.svg","darkLogoFilename":"aws-dark.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Aliyun Direct Mail","permalink":"/fr/integrations/aliyun-dm"},"next":{"title":"HTTP Email","permalink":"/fr/integrations/http-email"}}');var i=s(25105),t=s(79621),c=s(73303);const l={slug:"/integrations/aws-ses",sidebar_label:"AWS Direct Mail",sidebar_custom_props:{description:"Amazon SES est un fournisseur de services de messagerie cloud qui peut s'int\xe9grer \xe0 toute application pour l'envoi d'e-mails en masse.",logoFilename:"aws.svg",darkLogoFilename:"aws-dark.svg"}},o="Configurer la v\xe9rification par e-mail avec AWS Direct Mail",d={},a=[...c.RM,{value:"Commencer",id:"get-started",level:2},{value:"Configurer un service de messagerie dans la console de service AWS",id:"configure-a-mail-service-in-the-aws-service-console",level:2},{value:"Enregistrer un compte AWS",id:"register-aws-account",level:3},{value:"Cr\xe9er une identit\xe9",id:"create-a-identity",level:3},{value:"Configuration du connecteur",id:"configuration-of-the-connector",level:3},{value:"Tester le connecteur Amazon SES",id:"test-the-amazon-ses-connector",level:3},{value:"Configurer les types",id:"configure-types",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configurer-la-v\xe9rification-par-e-mail-avec-aws-direct-mail",children:"Configurer la v\xe9rification par e-mail avec AWS Direct Mail"})}),"\n",(0,i.jsx)(n.p,{children:"Le connecteur officiel Logto pour le service de messagerie directe AWS."}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Commencer"}),"\n",(0,i.jsx)(n.p,{children:"Amazon SES est un fournisseur de services de messagerie cloud qui peut s'int\xe9grer \xe0 toute application pour l'envoi d'e-mails en masse."}),"\n",(0,i.jsx)(n.p,{children:"L'\xe9quipe Logto appelle les API Amazon Simple Email Service, gr\xe2ce auxquelles les utilisateurs finaux de Logto peuvent s'inscrire et se connecter \xe0 leur compte Logto via un code de v\xe9rification par e-mail."}),"\n",(0,i.jsx)(n.h2,{id:"configure-a-mail-service-in-the-aws-service-console",children:"Configurer un service de messagerie dans la console de service AWS"}),"\n",(0,i.jsx)(n.h3,{id:"register-aws-account",children:"Enregistrer un compte AWS"}),"\n",(0,i.jsxs)(n.p,{children:["Allez sur ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS"})," et enregistrez un compte."]}),"\n",(0,i.jsx)(n.h3,{id:"create-a-identity",children:"Cr\xe9er une identit\xe9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Allez sur la console ",(0,i.jsx)(n.code,{children:"Amazon Simple Email Service"})]}),"\n",(0,i.jsxs)(n.li,{children:["Cr\xe9ez une identit\xe9, choisissez l'une des options suivantes","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Cr\xe9er un domaine"}),"\n",(0,i.jsx)(n.li,{children:"Cr\xe9er une adresse e-mail"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configuration-of-the-connector",children:"Configuration du connecteur"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Cliquez sur votre nom d'utilisateur dans le coin sup\xe9rieur droit de la console Amazon pour entrer dans ",(0,i.jsx)(n.code,{children:"Security Credentials"}),". Si vous n'en avez pas, cr\xe9ez un ",(0,i.jsx)(n.code,{children:"AccessKey"})," et enregistrez-le soigneusement."]}),"\n",(0,i.jsxs)(n.li,{children:["Compl\xe9tez les param\xe8tres du connecteur ",(0,i.jsx)(n.code,{children:"Amazon Simple Email Service"})," :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Utilisez l'",(0,i.jsx)(n.code,{children:"AccessKey ID"})," et l'",(0,i.jsx)(n.code,{children:"AccessKey Secret"})," obtenus \xe0 l'\xe9tape 1 pour remplir respectivement ",(0,i.jsx)(n.code,{children:"accessKeyId"})," et ",(0,i.jsx)(n.code,{children:"accessKeySecret"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"region"})," : Remplissez le champ ",(0,i.jsx)(n.code,{children:"region"})," avec la r\xe9gion de l'identit\xe9 que vous utilisez pour envoyer des e-mails."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"emailAddress"})," : L'adresse e-mail que vous utilisez pour envoyer des e-mails, au format ",(0,i.jsx)(n.code,{children:"Logto\\<noreply@logto.io>"})," ou ",(0,i.jsx)(n.code,{children:"\\<noreply@logto.io>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["les param\xe8tres suivants sont optionnels ; la description des param\xe8tres peut \xeatre trouv\xe9e dans la ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html",children:"documentation de l'API AWS SES"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feedbackForwardingEmailAddress"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feedbackForwardingEmailAddressIdentityArn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"configurationSetName"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"test-the-amazon-ses-connector",children:"Tester le connecteur Amazon SES"}),"\n",(0,i.jsx)(n.p,{children:'Vous pouvez saisir une adresse e-mail et cliquer sur "Envoyer" pour voir si les param\xe8tres fonctionnent avant de "Sauvegarder et Terminer".'}),"\n",(0,i.jsxs)(n.p,{children:["C'est tout. N'oubliez pas de ",(0,i.jsx)(n.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Activer le connecteur dans l'exp\xe9rience de connexion"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"configure-types",children:"Configurer les types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nom"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessKeyId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessKeySecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"region"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emailAddress"}),(0,i.jsx)(n.td,{children:"string (OPTIONNEL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emailAddressIdentityArn"}),(0,i.jsx)(n.td,{children:"string (OPTIONNEL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"feedbackForwardingEmailAddress"}),(0,i.jsx)(n.td,{children:"string (OPTIONNEL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"feedbackForwardingEmailAddressIdentityArn"}),(0,i.jsx)(n.td,{children:"string (OPTIONNEL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"configurationSetName"}),(0,i.jsx)(n.td,{children:"string (OPTIONNEL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"templates"}),(0,i.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9s du mod\xe8le"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeurs \xe9num\xe9r\xe9es"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usageType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},73303:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>t});var r=s(25105),i=s(79621);const t=[];function c(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,r.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var r=s(58101);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);