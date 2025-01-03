"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[92428],{73303:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>i});var o=t(25105),s=t(79621);const i=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,o.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},48682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"integrations/social/wechat-web/README","title":"Configurer la connexion sociale avec WeChat (Web)","description":"Le connecteur officiel Logto pour la connexion sociale WeChat dans les applications web.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/wechat-web/README.mdx","sourceDirName":"integrations/social/wechat-web","slug":"/integrations/wechat-web","permalink":"/fr/integrations/wechat-web","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/wechat-web/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wechat-web","sidebar_label":"WeChat (Web)","sidebar_custom_props":{"description":"WeChat est une application de messagerie instantan\xe9e multiplateforme.","logoFilename":"wechat.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"WeChat (Native)","permalink":"/fr/integrations/wechat-native"},"next":{"title":"WeCom","permalink":"/fr/integrations/wecom"}}');var s=t(25105),i=t(79621),r=t(73303);const a={slug:"/integrations/wechat-web",sidebar_label:"WeChat (Web)",sidebar_custom_props:{description:"WeChat est une application de messagerie instantan\xe9e multiplateforme.",logoFilename:"wechat.svg"}},c="Configurer la connexion sociale avec WeChat (Web)",l={},u=[...r.RM,{value:"Commencer",id:"get-started",level:2},{value:"Cr\xe9er une application web dans la plateforme ouverte WeChat",id:"create-a-web-app-in-the-wechat-open-platform",level:2},{value:"Cr\xe9er un compte",id:"create-an-account",level:3},{value:"Cr\xe9er une application web",id:"create-a-web-app",level:3},{value:"Informations de base",id:"basic-info",level:4},{value:"Informations sur le site web",id:"website-info",level:4},{value:"En attente du r\xe9sultat de l&#39;examen",id:"waiting-for-the-review-result",level:4},{value:"Configurer votre connecteur WeChat",id:"configure-your-wechat-connector",level:3},{value:"Tester le connecteur web WeChat",id:"test-wechat-web-connector",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configurer-la-connexion-sociale-avec-wechat-web",children:"Configurer la connexion sociale avec WeChat (Web)"})}),"\n",(0,s.jsx)(n.p,{children:"Le connecteur officiel Logto pour la connexion sociale WeChat dans les applications web."}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Commencer"}),"\n",(0,s.jsxs)(n.p,{children:["Si vous ne connaissez pas le concept du connecteur ou ne savez pas comment ajouter ce connecteur \xe0 votre Exp\xe9rience de connexion, veuillez consulter le ",(0,s.jsx)(n.a,{href:"/connectors/social-connectors",children:"tutoriel Logto"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u26a0\ufe0f Attention"})}),"\n",(0,s.jsxs)(n.p,{children:["Ce connecteur est uniquement pour les applications web. Si vous recherchez la m\xe9thode pour vous connecter avec WeChat dans des applications natives, veuillez consulter le ",(0,s.jsx)(n.a,{href:"/integrations/wechat-native",children:"connecteur natif WeChat"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-web-app-in-the-wechat-open-platform",children:"Cr\xe9er une application web dans la plateforme ouverte WeChat"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,s.jsx)(n.strong,{children:"Astuce"})]}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez ignorer certaines sections si vous avez d\xe9j\xe0 termin\xe9."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-an-account",children:"Cr\xe9er un compte"}),"\n",(0,s.jsxs)(n.p,{children:["Ouvrez ",(0,s.jsx)(n.a,{href:"https://open.weixin.qq.com/",children:"https://open.weixin.qq.com/"}),', cliquez sur le bouton "Sign Up" dans le coin sup\xe9rieur droit, puis terminez le processus d\'inscription.']}),"\n",(0,s.jsx)(n.h3,{id:"create-a-web-app",children:"Cr\xe9er une application web"}),"\n",(0,s.jsx)(n.p,{children:'Connectez-vous avec le compte que vous venez de cr\xe9er. Dans l\'onglet "Web Application" (\u7f51\u9875\u5e94\u7528), cliquez sur le grand bouton vert "Create a web app" (\u521b\u5efa\u7f51\u9875\u5e94\u7528).'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"App tabs",src:t(40591).A+"",width:"380",height:"272"})}),"\n",(0,s.jsx)(n.p,{children:"Remplissons les informations requises dans le formulaire de demande."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create a web app",src:t(38886).A+"",width:"2692",height:"700"})}),"\n",(0,s.jsx)(n.h4,{id:"basic-info",children:"Informations de base"}),"\n",(0,s.jsx)(n.p,{children:'La plupart d\'entre elles sont assez simples. Apr\xe8s avoir termin\xe9 le formulaire, cliquez sur "Next step" pour continuer.'}),"\n",(0,s.jsx)(n.h4,{id:"website-info",children:"Informations sur le site web"}),"\n",(0,s.jsxs)(n.p,{children:['Remplissez "Domaine de rappel d\'autorisation" (\u6388\u6743\u56de\u8c03\u57df) avec votre domaine Logto. Par exemple, ',(0,s.jsx)(n.code,{children:"logto.io"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"waiting-for-the-review-result",children:"En attente du r\xe9sultat de l'examen"}),"\n",(0,s.jsx)(n.p,{children:'Apr\xe8s avoir compl\xe9t\xe9 les informations du site web, cliquez sur "Submit Review" pour continuer. En g\xe9n\xe9ral, l\'examen est rapide et se termine en 1 \xe0 2 jours.'}),"\n",(0,s.jsx)(n.p,{children:"Nous soup\xe7onnons que le r\xe9viseur est attribu\xe9 al\xe9atoirement \xe0 chaque soumission, car la norme est fluctuante. Vous pouvez \xeatre rejet\xe9 la premi\xe8re fois, mais ne vous d\xe9couragez pas ! Indiquez votre situation actuelle et demandez au r\xe9viseur comment la modifier."}),"\n",(0,s.jsx)(n.h3,{id:"configure-your-wechat-connector",children:"Configurer votre connecteur WeChat"}),"\n",(0,s.jsxs)(n.p,{children:["Remplissez le champ ",(0,s.jsx)(n.code,{children:"clientId"})," et ",(0,s.jsx)(n.code,{children:"clientSecret"})," avec ",(0,s.jsx)(n.em,{children:"Client ID"})," et ",(0,s.jsx)(n.em,{children:"Client Secret"})," que vous avez obtenus \xe0 partir des pages de d\xe9tails de l'application OAuth."]}),"\n",(0,s.jsxs)(n.p,{children:["Remplissez le champ ",(0,s.jsx)(n.code,{children:"scope"})," avec soit 'snsapi_userinfo' soit 'snsapi_base'. Vous pouvez laisser ce champ vide car il est OPTIONNEL. La valeur par d\xe9faut est d\xe9finie sur 'snsapi_userinfo'. Vous pouvez consulter la ",(0,s.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html",children:"diff\xe9rence"})," entre les diff\xe9rentes valeurs."]}),"\n",(0,s.jsx)(n.h3,{id:"test-wechat-web-connector",children:"Tester le connecteur web WeChat"}),"\n",(0,s.jsxs)(n.p,{children:["C'est tout. N'oubliez pas de ",(0,s.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"Activer le connecteur social dans l'exp\xe9rience de connexion"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Une fois le connecteur web WeChat activ\xe9, vous pouvez vous reconnecter \xe0 votre application pour voir si cela fonctionne."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},40591:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/app-tabs-016b4bb0d2730acc57aabd441b78c6fc.png"},38886:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/create-web-app-01338a007e4132888d5ca5704d6754b4.png"},79621:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(58101);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);