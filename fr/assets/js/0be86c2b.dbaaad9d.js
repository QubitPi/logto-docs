"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[87087],{92027:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"integrations/email/sendgrid-email/README","title":"Configurer la v\xe9rification par e-mail avec SendGrid Email","description":"Le connecteur officiel Logto pour le service d\'e-mail SendGrid.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/sendgrid-email/README.mdx","sourceDirName":"integrations/email/sendgrid-email","slug":"/integrations/sendgrid-email","permalink":"/fr/integrations/sendgrid-email","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/email/sendgrid-email/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/sendgrid-email","sidebar_label":"SendGrid Email","sidebar_custom_props":{"description":"SendGrid est une plateforme de communication pour les e-mails transactionnels et marketing.","logoFilename":"sendgrid.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Postmark","permalink":"/fr/integrations/postmark"},"next":{"title":"SMTP","permalink":"/fr/integrations/smtp"}}');var s=i(25105),t=i(79621),d=i(73303);const c={slug:"/integrations/sendgrid-email",sidebar_label:"SendGrid Email",sidebar_custom_props:{description:"SendGrid est une plateforme de communication pour les e-mails transactionnels et marketing.",logoFilename:"sendgrid.svg"}},o="Configurer la v\xe9rification par e-mail avec SendGrid Email",l={},a=[...d.RM,{value:"Commencer",id:"get-started",level:2},{value:"Enregistrer un compte SendGrid",id:"register-sendgrid-account",level:2},{value:"V\xe9rifier les exp\xe9diteurs",id:"verify-senders",level:2},{value:"Cr\xe9er des cl\xe9s API",id:"create-api-keys",level:2},{value:"Configurer votre connecteur",id:"configure-your-connector",level:2},{value:"Tester le connecteur d&#39;e-mail SendGrid",id:"test-sendgrid-email-connector",level:3},{value:"Types de configuration",id:"config-types",level:3}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configurer-la-v\xe9rification-par-e-mail-avec-sendgrid-email",children:"Configurer la v\xe9rification par e-mail avec SendGrid Email"})}),"\n",(0,s.jsx)(n.p,{children:"Le connecteur officiel Logto pour le service d'e-mail SendGrid."}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Commencer"}),"\n",(0,s.jsxs)(n.p,{children:["SendGrid (c'est-\xe0-dire Twilio SendGrid) est une plateforme de communication client pour les e-mails transactionnels et marketing. Nous pouvons utiliser sa fonction d'envoi d'e-mails pour envoyer un ",(0,s.jsx)(n.em,{children:"code de v\xe9rification"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"register-sendgrid-account",children:"Enregistrer un compte SendGrid"}),"\n",(0,s.jsxs)(n.p,{children:["Cr\xe9ez un nouveau compte sur le ",(0,s.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"site Web de SendGrid"}),". Vous pouvez ignorer cette \xe9tape si vous avez d\xe9j\xe0 un compte."]}),"\n",(0,s.jsx)(n.h2,{id:"verify-senders",children:"V\xe9rifier les exp\xe9diteurs"}),"\n",(0,s.jsxs)(n.p,{children:["Allez sur la ",(0,s.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"page de la console SendGrid"})," et connectez-vous avec votre compte SendGrid."]}),"\n",(0,s.jsx)(n.p,{children:"Les exp\xe9diteurs indiquent les adresses \xe0 partir desquelles notre e-mail de code de v\xe9rification sera envoy\xe9. Pour envoyer des e-mails via le serveur de messagerie SendGrid, vous devez v\xe9rifier au moins un exp\xe9diteur."}),"\n",(0,s.jsxs)(n.p,{children:["\xc0 partir de la ",(0,s.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"page de la console SendGrid"}),', allez dans "Settings" -> "Sender Authentication" depuis la barre lat\xe9rale.']}),"\n",(0,s.jsx)(n.p,{children:'L\'authentification de domaine est recommand\xe9e mais non obligatoire. Vous pouvez cliquer sur "Get started" dans la carte "Authenticate Your Domain" et suivre le guide \xe0 venir pour lier et v\xe9rifier un exp\xe9diteur \xe0 SendGrid.'}),"\n",(0,s.jsx)(n.p,{children:'En cliquant sur le bouton "Verify a Single Sender" dans le panneau, vous vous concentrez maintenant sur un formulaire n\xe9cessitant des informations critiques pour cr\xe9er un exp\xe9diteur. Suivez le guide, remplissez tous ces champs et appuyez sur le bouton "Create".'}),"\n",(0,s.jsx)(n.p,{children:"Apr\xe8s la cr\xe9ation de l'exp\xe9diteur unique, un e-mail avec un lien de v\xe9rification devrait \xeatre envoy\xe9 \xe0 l'adresse e-mail de votre exp\xe9diteur. Allez dans votre bo\xeete de r\xe9ception, trouvez l'e-mail de v\xe9rification et terminez la v\xe9rification de l'exp\xe9diteur unique en cliquant sur le lien donn\xe9 dans l'e-mail. Vous pouvez maintenant envoyer des e-mails via le connecteur SendGrid en utilisant l'exp\xe9diteur que vous venez de v\xe9rifier."}),"\n",(0,s.jsx)(n.h2,{id:"create-api-keys",children:"Cr\xe9er des cl\xe9s API"}),"\n",(0,s.jsxs)(n.p,{children:["Commen\xe7ons par la ",(0,s.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"page de la console SendGrid"}),', allez dans "Settings" -> "API Keys" depuis la barre lat\xe9rale.']}),"\n",(0,s.jsxs)(n.p,{children:['Cliquez sur "Create API Key" dans le coin sup\xe9rieur droit de la page des cl\xe9s API. Tapez le nom de la cl\xe9 API et personnalisez "API Key Permission" selon votre cas d\'utilisation. Un acc\xe8s global ',(0,s.jsx)(n.code,{children:"Full Access"})," ou ",(0,s.jsx)(n.code,{children:"Restricted Access"})," avec un acc\xe8s complet \xe0 Mail Send est requis avant d'envoyer des e-mails avec cette cl\xe9 API."]}),"\n",(0,s.jsxs)(n.p,{children:["La cl\xe9 API vous est pr\xe9sent\xe9e \xe0 l'\xe9cran d\xe8s que vous avez termin\xe9 le processus ",(0,s.jsx)(n.em,{children:"Create API Key"}),". Vous devez enregistrer cette cl\xe9 API quelque part en s\xe9curit\xe9 car c'est la seule chance que vous pouvez la voir."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-your-connector",children:"Configurer votre connecteur"}),"\n",(0,s.jsxs)(n.p,{children:["Remplissez le champ ",(0,s.jsx)(n.code,{children:"apiKey"}),' avec la cl\xe9 API cr\xe9\xe9e dans la section "Cr\xe9er des cl\xe9s API".']}),"\n",(0,s.jsxs)(n.p,{children:["Remplissez les champs ",(0,s.jsx)(n.code,{children:"fromEmail"})," et ",(0,s.jsx)(n.code,{children:"fromName"})," avec l'adresse ",(0,s.jsx)(n.em,{children:"From Address"})," et le ",(0,s.jsx)(n.em,{children:"Nickname"})," des exp\xe9diteurs. Vous pouvez trouver les d\xe9tails de l'exp\xe9diteur sur la ",(0,s.jsx)(n.a,{href:"https://mc.sendgrid.com/senders",children:'page "Sender Management"'}),". ",(0,s.jsx)(n.code,{children:"fromName"})," est OPTIONNEL, vous pouvez donc ignorer de le remplir."]}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez ajouter plusieurs mod\xe8les de connecteur de messagerie SendGrid pour diff\xe9rents cas. Voici un exemple d'ajout d'un mod\xe8le unique :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remplissez le champ ",(0,s.jsx)(n.code,{children:"subject"}),", qui fonctionne comme le titre des e-mails."]}),"\n",(0,s.jsxs)(n.li,{children:["Remplissez le champ ",(0,s.jsx)(n.code,{children:"content"})," avec des contenus de type cha\xeene arbitraire. N'oubliez pas de laisser l'espace r\xe9serv\xe9 ",(0,s.jsx)(n.code,{children:"{{code}}"})," pour le code de v\xe9rification al\xe9atoire."]}),"\n",(0,s.jsxs)(n.li,{children:["Remplissez le champ ",(0,s.jsx)(n.code,{children:"usageType"})," avec ",(0,s.jsx)(n.code,{children:"Register"}),", ",(0,s.jsx)(n.code,{children:"SignIn"}),", ",(0,s.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,s.jsx)(n.code,{children:"Generic"})," pour diff\xe9rents cas d'utilisation."]}),"\n",(0,s.jsxs)(n.li,{children:["Remplissez le champ ",(0,s.jsx)(n.code,{children:"type"})," avec ",(0,s.jsx)(n.code,{children:"text/plain"})," ou ",(0,s.jsx)(n.code,{children:"text/html"})," pour diff\xe9rents types de contenu."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Afin d'activer les flux utilisateur complets, les mod\xe8les avec usageType ",(0,s.jsx)(n.code,{children:"Register"}),", ",(0,s.jsx)(n.code,{children:"SignIn"}),", ",(0,s.jsx)(n.code,{children:"ForgotPassword"})," et ",(0,s.jsx)(n.code,{children:"Generic"})," sont requis."]}),"\n",(0,s.jsx)(n.p,{children:"Voici un exemple de JSON de mod\xe8le de connecteur SendGrid."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsonc",children:'[\n  {\n    "subject": "<register-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (register template)>",\n    "usageType": "Register",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<sign-in-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (sign-in template)>",\n    "usageType": "SignIn",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<forgot-password-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (forgot-password template)>",\n    "usageType": "ForgotPassword",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<generic-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (generic template)>",\n    "usageType": "Generic",\n    "type": "text/plain",\n  },\n]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"test-sendgrid-email-connector",children:"Tester le connecteur d'e-mail SendGrid"}),"\n",(0,s.jsx)(n.p,{children:'Vous pouvez taper une adresse e-mail et cliquer sur "Send" pour voir si les param\xe8tres peuvent fonctionner avant "Save and Done".'}),"\n",(0,s.jsxs)(n.p,{children:["C'est tout. N'oubliez pas de ",(0,s.jsx)(n.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Activer le connecteur dans l'exp\xe9rience de connexion"})]}),"\n",(0,s.jsx)(n.h3,{id:"config-types",children:"Types de configuration"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nom"}),(0,s.jsx)(n.th,{children:"Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"apiKey"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fromEmail"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fromName"}),(0,s.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"templates"}),(0,s.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9s du mod\xe8le"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeurs Enum"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subject"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"content"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"usageType"}),(0,s.jsx)(n.td,{children:"enum string"}),(0,s.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"enum string"}),(0,s.jsx)(n.td,{children:"'text/plain' | 'text/html'"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},73303:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>t});var r=i(25105),s=i(79621);const t=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,r.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var r=i(58101);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);