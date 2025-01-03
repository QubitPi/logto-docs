"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1678],{73303:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>t});var s=i(25105),o=i(79621);const t=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,s.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},6571:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"integrations/social/feishu-web/README","title":"Configurer la connexion sociale avec Feishu","description":"Feishu Web : Une plateforme avanc\xe9e de collaboration et de gestion d\'entreprise, offrant une collaboration bureautique sans faille et alignant les objectifs de l\'\xe9quipe pour activer pleinement les organisations et les individus.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/feishu-web/README.mdx","sourceDirName":"integrations/social/feishu-web","slug":"/integrations/feishu-web","permalink":"/fr/integrations/feishu-web","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/feishu-web/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/feishu-web","sidebar_label":"Feishu","sidebar_custom_props":{"description":"Feishu est une plateforme de collaboration d\'entreprise d\xe9velopp\xe9e par ByteDance.","logoFilename":"feishu.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Facebook","permalink":"/fr/integrations/facebook"},"next":{"title":"GitHub","permalink":"/fr/integrations/github"}}');var o=i(25105),t=i(79621),r=i(73303);const a={slug:"/integrations/feishu-web",sidebar_label:"Feishu",sidebar_custom_props:{description:"Feishu est une plateforme de collaboration d'entreprise d\xe9velopp\xe9e par ByteDance.",logoFilename:"feishu.svg"}},l="Configurer la connexion sociale avec Feishu",c={},u=[...r.RM,{value:"Commencer avec la connexion sociale Feishu",id:"getting-started-with-feishu-social-sign-in",level:2},{value:"Enregistrer un compte d\xe9veloppeur Feishu",id:"register-a-feishu-developer-account",level:2},{value:"Cr\xe9er une application",id:"create-an-application",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configurer-la-connexion-sociale-avec-feishu",children:"Configurer la connexion sociale avec Feishu"})}),"\n",(0,o.jsx)(n.p,{children:"Feishu Web : Une plateforme avanc\xe9e de collaboration et de gestion d'entreprise, offrant une collaboration bureautique sans faille et alignant les objectifs de l'\xe9quipe pour activer pleinement les organisations et les individus."}),"\n",(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"getting-started-with-feishu-social-sign-in",children:"Commencer avec la connexion sociale Feishu"}),"\n",(0,o.jsx)(n.p,{children:"Le connecteur Feishu Web est con\xe7u pour les applications Web de bureau et utilise le processus d'authentification OAuth 2.0."}),"\n",(0,o.jsx)(n.h2,{id:"register-a-feishu-developer-account",children:"Enregistrer un compte d\xe9veloppeur Feishu"}),"\n",(0,o.jsxs)(n.p,{children:["Si vous n'avez pas encore de compte d\xe9veloppeur Feishu, veuillez vous inscrire sur la ",(0,o.jsx)(n.a,{href:"https://open.feishu.cn/app",children:"Feishu Open Platform"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application",children:"Cr\xe9er une application"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Dans la ",(0,o.jsx)(n.a,{href:"https://open.feishu.cn/app",children:"Console D\xe9veloppeur"}),', cliquez sur "Cr\xe9er une application personnalis\xe9e".']}),"\n",(0,o.jsx)(n.li,{children:'Remplissez le nom de l\'application, la description, s\xe9lectionnez une ic\xf4ne et cliquez sur le bouton "Cr\xe9er".'}),"\n",(0,o.jsxs)(n.li,{children:['Dans la barre lat\xe9rale gauche, cliquez sur "Param\xe8tres de s\xe9curit\xe9" et remplissez l\'"URL de redirection" comme ',(0,o.jsx)(n.code,{children:"${logto_endpoint}/callback/${connector_id}"}),". La valeur correspondante peut \xeatre trouv\xe9e dans le champ ",(0,o.jsx)(n.code,{children:"Callback URI"})," sur la page de d\xe9tails du connecteur Feishu dans la Console Logto."]}),"\n",(0,o.jsx)(n.li,{children:'Dans "Informations d\'identification et informations de base", vous pouvez obtenir l\'"App ID" et l\'"App Secret".'}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:'Pour une utilisation non interne \xe0 l\'entreprise, vous devez \xe9galement cliquer sur le bouton "Cr\xe9er une version" sur la page "Gestion et publication des versions". L\'"App ID" et l\'"App Secret" ne seront effectifs qu\'apr\xe8s que le statut de l\'application ait chang\xe9 pour "Activ\xe9".'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(58101);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);