"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[36585],{55479:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"introduction/plan-your-architecture/README","title":"Planifiez votre architecture","description":"Pour \xe9tablir les meilleures pratiques en mati\xe8re de conception et planifier votre architecture, consid\xe9rez vos besoins sous diff\xe9rents angles. Concentrez-vous sur l\'objectif final et le flux de travail, pas seulement sur les technologies et fonctionnalit\xe9s sous-jacentes. Voici quelques questions cl\xe9s pour vous guider et vous inspirer dans la construction de l\'architecture id\xe9ale pour votre produit.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/introduction/plan-your-architecture/README.mdx","sourceDirName":"introduction/plan-your-architecture","slug":"/introduction/plan-your-architecture/","permalink":"/fr/introduction/plan-your-architecture/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/introduction/plan-your-architecture/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Configurer Logto OSS","permalink":"/fr/introduction/set-up-logto-oss"},"next":{"title":"Architecture B2C","permalink":"/fr/introduction/plan-your-architecture/b2c"}}');var t=i(25105),r=i(79621);const o={sidebar_position:3},a="Planifiez votre architecture",l={},u=[{value:"Quel est votre mod\xe8le \xe9conomique, et qui sont les parties et parties prenantes cl\xe9s impliqu\xe9es ?",id:"what-is-your-business-model-and-who-are-the-key-parties-and-stakeholders-involved",level:2},{value:"B2C",id:"b2c",level:3},{value:"D\xe9veloppeurs (Vous)",id:"developers-you",level:4},{value:"Vos consommateurs",id:"your-consumers",level:4},{value:"B2B",id:"b2b",level:3},{value:"D\xe9veloppeurs (Vous)",id:"developers-you-1",level:4},{value:"Vos clients (Administrateurs d&#39;Organisation)",id:"your-clients-organization-admins",level:4},{value:"Le personnel, les partenaires ou les consommateurs de vos clients",id:"your-clients-staff-partners-or-consumers",level:4},{value:"Autres",id:"others",level:3},{value:"Distillez vos besoins en mati\xe8re d&#39;authentification",id:"distill-your-auth-needs",level:2},{value:"Avez-vous besoin d&#39;un syst\xe8me d&#39;identit\xe9 universel unique ou de plusieurs syst\xe8mes s\xe9par\xe9s ?",id:"do-you-need-a-single-universal-identity-system-or-multiple-separate-ones",level:2},{value:"Je voudrais construire une application SaaS avec multi-locataires",id:"i-would-like-to-build-a-saas-application-with-multi-tenancy",level:3},{value:"J&#39;ai plusieurs applications",id:"i-have-multiple-applications",level:3},{value:"J&#39;ai plusieurs clients d&#39;entreprise",id:"i-have-multiple-enterprise-customers",level:3}];function d(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"planifiez-votre-architecture",children:"Planifiez votre architecture"})}),"\n",(0,t.jsx)(s.p,{children:"Pour \xe9tablir les meilleures pratiques en mati\xe8re de conception et planifier votre architecture, consid\xe9rez vos besoins sous diff\xe9rents angles. Concentrez-vous sur l'objectif final et le flux de travail, pas seulement sur les technologies et fonctionnalit\xe9s sous-jacentes. Voici quelques questions cl\xe9s pour vous guider et vous inspirer dans la construction de l'architecture id\xe9ale pour votre produit."}),"\n",(0,t.jsx)(s.h2,{id:"what-is-your-business-model-and-who-are-the-key-parties-and-stakeholders-involved",children:"Quel est votre mod\xe8le \xe9conomique, et qui sont les parties et parties prenantes cl\xe9s impliqu\xe9es ?"}),"\n",(0,t.jsxs)(s.p,{children:["En g\xe9n\xe9ral, il existe deux principaux mod\xe8les \xe9conomiques, ",(0,t.jsx)(s.a,{href:"/introduction/plan-your-architecture/b2c",children:"B2C"})," et ",(0,t.jsx)(s.a,{href:"/introduction/plan-your-architecture/b2b",children:"B2B"}),", chacun impliquant diff\xe9rentes parties dans des sc\xe9narios complexes de gestion des identit\xe9s. Comprendre ces parties prenantes cl\xe9s vous aide \xe0 concevoir des syst\xe8mes qui offrent une exp\xe9rience centr\xe9e sur l'utilisateur et abordent tous les aspects de la gestion des identit\xe9s."]}),"\n",(0,t.jsx)(s.h3,{id:"b2c",children:"B2C"}),"\n",(0,t.jsx)(s.p,{children:"Dans les applications B2C, la gestion des identit\xe9s est g\xe9n\xe9ralement simple et implique g\xe9n\xe9ralement seulement deux parties."}),"\n",(0,t.jsx)(s.h4,{id:"developers-you",children:"D\xe9veloppeurs (Vous)"}),"\n",(0,t.jsxs)(s.p,{children:["Cela fait r\xe9f\xe9rence aux ",(0,t.jsx)(s.strong,{children:"administrateurs et collaborateurs de Logto Console"})," \u2014 g\xe9n\xe9ralement vous et votre \xe9quipe de d\xe9veloppement \u2014 qui g\xe8rent et s\xe9curisent le pool d'identit\xe9s des utilisateurs et travaillent directement avec la base de donn\xe9es d'identit\xe9s. Vous pouvez g\xe9rer directement les identit\xe9s des clients dans Logto Console ou effectuer un d\xe9veloppement personnalis\xe9 en utilisant le Logto Management API."]}),"\n",(0,t.jsx)(s.h4,{id:"your-consumers",children:"Vos consommateurs"}),"\n",(0,t.jsx)(s.p,{children:"Vos consommateurs sont des identit\xe9s d'utilisateur stock\xe9es dans le service central et la base de donn\xe9es de Logto. Dans un mod\xe8le B2C, les consommateurs peuvent g\xe9rer leur propre Authentification et leurs informations personnelles."}),"\n",(0,t.jsx)(s.h3,{id:"b2b",children:"B2B"}),"\n",(0,t.jsx)(s.p,{children:"Dans les applications B2B, une autre couche et un autre contexte sont introduits dans cette architecture. Le propri\xe9taire de l'unit\xe9 commerciale (ou Organisation) contr\xf4le qui peut acc\xe9der \xe0 leur instance, comment ils s'authentifient et ce qu'ils peuvent faire. L'Organisation g\xe8re l'identit\xe9 de tous les utilisateurs finaux qui acc\xe8dent \xe0 leur instance."}),"\n",(0,t.jsx)(s.h4,{id:"developers-you-1",children:"D\xe9veloppeurs (Vous)"}),"\n",(0,t.jsxs)(s.p,{children:["Cela fait toujours r\xe9f\xe9rence aux ",(0,t.jsx)(s.strong,{children:"administrateurs et collaborateurs de Logto Console"}),". Bien que les administrateurs d'Organisation puissent g\xe9rer les identit\xe9s, les d\xe9veloppeurs peuvent toujours g\xe9rer directement les identit\xe9s des clients dans Logto Console ou par le biais d'un d\xe9veloppement personnalis\xe9 en utilisant le Logto Management API."]}),"\n",(0,t.jsx)(s.h4,{id:"your-clients-organization-admins",children:"Vos clients (Administrateurs d'Organisation)"}),"\n",(0,t.jsxs)(s.p,{children:['Vos clients sont des unit\xe9s commerciales repr\xe9sentant des "Organisations" dans une application multi-locataires, par exemple, des ',(0,t.jsx)(s.strong,{children:"espaces de travail"})," dans Slack ou Notion. Chaque espace de travail a g\xe9n\xe9ralement plusieurs R\xf4les et un ou plusieurs administrateurs qui g\xe8rent les employ\xe9s ou les utilisateurs. Dans le contenu suivant, nous faisons r\xe9f\xe9rence aux personnes qui PEUVENT g\xe9rer les identit\xe9s des membres en tant qu'\"administrateurs d'Organisation\"."]}),"\n",(0,t.jsx)(s.h4,{id:"your-clients-staff-partners-or-consumers",children:"Le personnel, les partenaires ou les consommateurs de vos clients"}),"\n",(0,t.jsx)(s.p,{children:"Ce sont des identit\xe9s d'utilisateur final, appel\xe9es \"membres\" dans le contexte de l'Organisation, et peuvent \xeatre g\xe9r\xe9es au sein d'une Organisation. Bien que ces identit\xe9s soient s\xe9par\xe9es par Organisations, elles sont toutes agr\xe9g\xe9es sous un syst\xe8me d'identit\xe9 unique."}),"\n",(0,t.jsx)(s.p,{children:"Dans des sc\xe9narios r\xe9els, d'un point de vue produit, il pourrait s'agir de personnel de l'entreprise, de partenaires commerciaux ou m\xeame de consommateurs associ\xe9s \xe0 l'Organisation."}),"\n",(0,t.jsx)(s.h3,{id:"others",children:"Autres"}),"\n",(0,t.jsx)(s.p,{children:"D'autres mod\xe8les, comme B2B2C, peuvent \xe9merger de ces deux en raison de leur complexit\xe9. Cependant, l'approche reste la m\xeame : tous les changements proviennent du m\xeame fondement de base."}),"\n",(0,t.jsx)(s.p,{children:"Dans le prochain chapitre, nous examinerons en d\xe9tail ces deux architectures courantes et mettrons en \xe9vidence les fonctionnalit\xe9s associ\xe9es prises en charge par Logto."}),"\n",(0,t.jsx)(s.h2,{id:"distill-your-auth-needs",children:"Distillez vos besoins en mati\xe8re d'authentification"}),"\n",(0,t.jsx)(s.p,{children:"Une fois que vous comprenez les utilisateurs cl\xe9s et les parties impliqu\xe9es dans votre conception technologique et produit, consid\xe9rez les questions suivantes pour affiner votre architecture d'identit\xe9 et d\xe9terminer vos besoins en mati\xe8re d'Authentification et votre niveau de contr\xf4le :"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Quelles options les clients ont-ils pour l'Authentification et l'exp\xe9rience de connexion ? Celles-ci d\xe9pendent g\xe9n\xe9ralement de votre entreprise, de votre strat\xe9gie d'acquisition et de vos besoins en mati\xe8re de produit."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"par exemple. Quelles fonctionnalit\xe9s sont n\xe9cessaires pour mon application ? Connexion sociale ? Connexion sans mot de passe ?"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Quel niveau de contr\xf4le souhaitez-vous (d\xe9veloppeurs) sur les actions des clients ?"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"par exemple. Les clients peuvent-ils mettre \xe0 jour et maintenir leur profil ? Les clients peuvent-ils activer et d\xe9sactiver eux-m\xeames l'Authentification multi-facteurs (MFA) ? Peuvent-ils choisir des m\xe9thodes de connexion pr\xe9f\xe9r\xe9es ?"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Quels types de personnalisation souhaitez-vous d\xe9l\xe9guer aux Organisations ? Ceux-ci d\xe9pendent du domaine et de l'industrie de votre produit et des besoins sp\xe9cifiques de vos clients, et peuvent varier d'une Organisation \xe0 l'autre."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"par exemple. L'exp\xe9rience de connexion doit-elle varier pour chaque Organisation ? Et si oui, la personnalisation doit-elle se limiter \xe0 la marque, ou doit-elle \xe9galement inclure des diff\xe9rences dans le flux d'Authentification ?"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Quel niveau de contr\xf4le souhaitez-vous que vos administrateurs d'Organisation aient sur les actions de leurs membres ?"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"par exemple. L'administrateur de l'Organisation doit-il pouvoir d\xe9cider si l'Authentification multi-facteurs (MFA) est requise ? L'administrateur doit-il avoir la capacit\xe9 de changer le mot de passe d'un membre ?"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"do-you-need-a-single-universal-identity-system-or-multiple-separate-ones",children:"Avez-vous besoin d'un syst\xe8me d'identit\xe9 universel unique ou de plusieurs syst\xe8mes s\xe9par\xe9s ?"}),"\n",(0,t.jsx)(s.p,{children:"Une autre question cl\xe9 \xe0 garder \xe0 l'esprit est de vous demander si vous ou un segment de votre entreprise ou produit avez besoin d'un syst\xe8me d'identit\xe9 ou de plusieurs syst\xe8mes s\xe9par\xe9s."}),"\n",(0,t.jsx)(s.p,{children:"En g\xe9n\xe9ral, la r\xe9ponse est un syst\xe8me d'identit\xe9 universel unique, ce qui signifie que vous n'avez besoin que d'un seul locataire Logto (ou d'une seule instance de Logto admin console dans OSS). Logto est con\xe7u pour prendre en charge \xe0 la fois plusieurs applications et plusieurs Organisations au sein d'un seul locataire. Un locataire Logto de production est g\xe9n\xe9ralement suffisant pour la plupart des besoins. Voici quelques sc\xe9narios courants auxquels vous pourriez \xeatre confront\xe9 :"}),"\n",(0,t.jsx)(s.h3,{id:"i-would-like-to-build-a-saas-application-with-multi-tenancy",children:"Je voudrais construire une application SaaS avec multi-locataires"}),"\n",(0,t.jsx)(s.p,{children:"Si vous construisez une application SaaS avec le concept d'\"espace de travail\" ou d'\"Organisation\" pour chaque client, vous pouvez utiliser des Organisations pour g\xe9rer l'espace de travail de chaque client au sein d'un seul locataire."}),"\n",(0,t.jsx)(s.p,{children:"Dans ce cas, un utilisateur peut \xeatre membre de plusieurs Organisations. Par exemple, un utilisateur peut avoir un espace de travail personnel et rejoindre l'espace de travail de l'entreprise."}),"\n",(0,t.jsx)(s.h3,{id:"i-have-multiple-applications",children:"J'ai plusieurs applications"}),"\n",(0,t.jsx)(s.p,{children:"Avec Logto, vous pouvez g\xe9rer plusieurs applications au sein d'un seul locataire, ind\xe9pendamment de"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Le type d'application (par exemple, web, mobile, bureau, etc.)"}),"\n",(0,t.jsx)(s.li,{children:"Les cas d'utilisation et les fonctionnalit\xe9s de l'application (par exemple, application de conducteur, application de hailer, etc.)"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"i-have-multiple-enterprise-customers",children:"J'ai plusieurs clients d'entreprise"}),"\n",(0,t.jsx)(s.p,{children:"Vous pouvez utiliser des Organisations avec Enterprise SSO pour g\xe9rer plusieurs clients d'entreprise au sein d'un seul locataire. En configurant les param\xe8tres de domaine de messagerie Enterprise SSO et en utilisant la fonctionnalit\xe9 de provisionnement Just-in-Time, vous pouvez automatiser le processus des utilisateurs avec des comptes Enterprise SSO rejoignant ou se connectant aux Organisations appropri\xe9es."})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},79621:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>a});var n=i(58101);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);