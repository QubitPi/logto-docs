"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[67415],{87222:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"developers/webhooks/configure-webhooks","title":"Configurer les Webhooks","description":"Configurez les webhooks dans Logto Console pour obtenir une int\xe9gration transparente et recevoir des notifications d\'\xe9v\xe9nements en temps r\xe9el pour votre application. Profitez d\'une configuration facile, d\'une s\xe9curit\xe9 renforc\xe9e et d\'options pratiques de surveillance de la sant\xe9.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/webhooks/configure-webhooks.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/configure-webhooks","permalink":"/fr/developers/webhooks/configure-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/developers/webhooks/configure-webhooks.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"configure-webhooks","title":"Configurer les Webhooks","sidebar_label":"Configurer les Webhooks","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Webhooks","permalink":"/fr/developers/webhooks/"},"next":{"title":"\xc9v\xe9nements Webhooks","permalink":"/fr/developers/webhooks/webhooks-events"}}');var s=r(25105),t=r(79621);const i={id:"configure-webhooks",title:"Configurer les Webhooks",sidebar_label:"Configurer les Webhooks",sidebar_position:2},u="Configurer les webhooks",a={},l=[{value:"Cr\xe9er un webhook",id:"create-a-webhook",level:2},{value:"S\xe9curiser le webhook",id:"secure-webhook",level:2},{value:"Tester le webhook",id:"test-webhook",level:2},{value:"Surveiller l&#39;\xe9tat de sant\xe9 du Webhook",id:"monitor-webhook-health-status",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{CloudLink:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"configurer-les-webhooks",children:"Configurer les webhooks"})}),"\n",(0,s.jsx)(o.p,{children:"Configurez les webhooks dans Logto Console pour obtenir une int\xe9gration transparente et recevoir des notifications d'\xe9v\xe9nements en temps r\xe9el pour votre application. Profitez d'une configuration facile, d'une s\xe9curit\xe9 renforc\xe9e et d'options pratiques de surveillance de la sant\xe9."}),"\n",(0,s.jsx)(o.h2,{id:"create-a-webhook",children:"Cr\xe9er un webhook"}),"\n",(0,s.jsx)(o.p,{children:"Tout d'abord, cr\xe9ez un point de terminaison webhook qui sera appel\xe9 par le Logto Agent. Ce point de terminaison doit \xeatre impl\xe9ment\xe9 sur votre serveur et capable de recevoir des requ\xeates HTTP."}),"\n",(0,s.jsx)(o.p,{children:"Pour cr\xe9er un nouveau webhook dans Logto Console, suivez ces \xe9tapes :"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Cr\xe9er un webhook"})," : Acc\xe9dez \xe0 ",(0,s.jsx)(n,{to:"/webhooks",children:"Console > Webhooks"}),' et cliquez sur le bouton "Cr\xe9er un webhook".']}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nom"})," : Fournissez un nom pour le webhook. Il est pour votre propre r\xe9f\xe9rence afin de d\xe9finir le sc\xe9nario d'utilisation."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"URL du point de terminaison"})," : Entrez l'",(0,s.jsx)(o.code,{children:"Endpoint URL"}),", qui est l'URL de votre serveur qui recevra les requ\xeates POST du webhook lorsque l'\xe9v\xe9nement se produira. Pour des raisons de s\xe9curit\xe9, l'URL doit \xeatre accessible publiquement via HTTPS et ne doit pas \xeatre une URL de localhost."]}),"\n",(0,s.jsxs)(o.admonition,{type:"note",children:[(0,s.jsx)(o.p,{children:'Votre serveur doit r\xe9pondre aux requ\xeates du webhook Logto avec une r\xe9ponse HTTP 200 ("OK") juste apr\xe8s avoir re\xe7u la requ\xeate pour notifier que la requ\xeate a \xe9t\xe9 re\xe7ue.'}),(0,s.jsx)(o.p,{children:"Attendre que le traitement logique de l'\xe9v\xe9nement Webhook correspondant soit termin\xe9 avant de r\xe9pondre pourrait entra\xeener un d\xe9lai d'expiration du Webhook."}),(0,s.jsx)(o.p,{children:"Ne retournez aucune r\xe9ponse autre que 200 au webhook Logto. Si une erreur se produit lors du traitement de l'\xe9v\xe9nement, g\xe9rez-la sur votre propre serveur."})]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"\xc9v\xe9nement"})," : Dans la fen\xeatre modale qui appara\xeet, s\xe9lectionnez les ",(0,s.jsx)(o.a,{href:"/developers/webhooks/webhooks-events",children:"\xe9v\xe9nements"})," souhait\xe9s qui d\xe9clencheront ce webhook. Il est recommand\xe9 de choisir un nombre r\xe9duit d'\xe9v\xe9nements qui r\xe9pondent \xe0 vos besoins pour \xe9viter de surcharger la r\xe9ception du serveur. Vous pouvez modifier les \xe9v\xe9nements s\xe9lectionn\xe9s \xe0 tout moment apr\xe8s la cr\xe9ation du webhook."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Cr\xe9er un webhook",src:r(28191).A+"",width:"2530",height:"2084"})}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"D\xe9sactiver / R\xe9activer"})," : Par d\xe9faut, le webhook est activ\xe9 imm\xe9diatement apr\xe8s sa cr\xe9ation. Si vous souhaitez suspendre temporairement le webhook, vous pouvez le d\xe9sactiver ou le r\xe9activer en utilisant le menu \"Trois points\" situ\xe9 dans le coin sup\xe9rieur droit de l'en-t\xeate apr\xe8s l'avoir cr\xe9\xe9."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"secure-webhook",children:"S\xe9curiser le webhook"}),"\n",(0,s.jsx)(o.p,{children:"Une fois que votre serveur est pr\xeat \xe0 recevoir des requ\xeates webhook, vous voudrez peut-\xeatre vous assurer qu'il peut g\xe9rer les requ\xeates en toute s\xe9curit\xe9. Logto g\xe9n\xe8re une signature pour chaque charge utile de requ\xeate webhook, ce qui vous permet de v\xe9rifier que la requ\xeate provient de Logto."}),"\n",(0,s.jsx)(o.p,{children:"Apr\xe8s avoir cr\xe9\xe9 un nouveau webhook, vous avez des options pour renforcer sa s\xe9curit\xe9 :"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Cl\xe9 de signature"})," : Logto g\xe9n\xe8re une signature de hachage unique, connue sous le nom de Cl\xe9 de signature, pour chaque webhook. Vous pouvez inclure cette cl\xe9 en tant qu'en-t\xeate de requ\xeate dans votre impl\xe9mentation de point de terminaison. V\xe9rifier la cl\xe9 de signature garantit que la charge utile du webhook provient de Logto et n'a pas \xe9t\xe9 alt\xe9r\xe9e par des sources non autoris\xe9es. Lisez ",(0,s.jsx)(o.a,{href:"/developers/webhooks/secure-webhooks/",children:"s\xe9curiser vos webhooks"})," pour en savoir plus sur le code."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"En-t\xeate personnalis\xe9"})," : Vous avez la possibilit\xe9 d'inclure des en-t\xeates personnalis\xe9s dans la charge utile du webhook pour fournir un contexte ou des m\xe9tadonn\xe9es suppl\xe9mentaires. Cette fonctionnalit\xe9 vous permet d'ajouter des informations pertinentes qui peuvent aider \xe0 traiter efficacement les donn\xe9es du webhook."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"En utilisant la Cl\xe9 de signature et en envisageant l'inclusion d'en-t\xeates personnalis\xe9s, vous pouvez renforcer la s\xe9curit\xe9 de vos webhooks et garantir l'int\xe9grit\xe9 et l'authenticit\xe9 des charges utiles re\xe7ues."}),"\n",(0,s.jsx)(o.h2,{id:"test-webhook",children:"Tester le webhook"}),"\n",(0,s.jsx)(o.p,{children:"Pour tester la connexion entre Logto et vos services, cliquez simplement sur le bouton \"Envoyer une charge utile de test\". Logto enverra alors une charge utile d'exemple pour chaque \xe9v\xe9nement s\xe9lectionn\xe9 \xe0 votre URL de point de terminaison. Ces requ\xeates de test contiennent des donn\xe9es anonymes et ne sont pas enregistr\xe9es dans l'historique des requ\xeates r\xe9centes."}),"\n",(0,s.jsx)(o.p,{children:"Ce test garantit que votre webhook est correctement configur\xe9 pour recevoir et traiter les charges utiles de Logto. Il vous permet de valider l'int\xe9gration avant de d\xe9ployer le webhook dans un environnement en direct."}),"\n",(0,s.jsx)(o.h2,{id:"monitor-webhook-health-status",children:"Surveiller l'\xe9tat de sant\xe9 du Webhook"}),"\n",(0,s.jsx)(o.p,{children:"Logto fournit des outils pratiques pour surveiller l'\xe9tat de sant\xe9 de vos webhooks et enqu\xeater en d\xe9tail sur tout probl\xe8me potentiel :"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"\xc9tat de sant\xe9"}),"\nLa liste des webhooks dans Logto affiche l'\xe9tat de sant\xe9 de chaque webhook, y compris le taux de r\xe9ussite et le nombre total de requ\xeates effectu\xe9es au cours des derni\xe8res 24 heures. Ces informations vous donnent un aper\xe7u des performances du webhook."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Journaux de requ\xeates ind\xe9pendants"}),"\nDans la section \"Requ\xeates r\xe9centes\" de chaque webhook, vous pouvez acc\xe9der aux journaux de requ\xeates des derni\xe8res 24 heures. Chaque requ\xeate est enregistr\xe9e individuellement, vous permettant de voir les d\xe9tails de chaque requ\xeate et d'enqu\xeater sur d'\xe9ventuelles erreurs ou anomalies."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"R\xe9essai automatique"}),"\nEn cas d'\xe9chec de livraison (lorsque le statut de r\xe9ponse du webhook est sup\xe9rieur ou \xe9gal \xe0 500), Logto r\xe9essaie automatiquement la livraison jusqu'\xe0 trois fois. Soyez assur\xe9 que plusieurs r\xe9essais de la m\xeame requ\xeate ne g\xe9n\xe9reront qu'une seule entr\xe9e de journal, \xe9vitant ainsi toute duplication inutile."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"En tirant parti de ces fonctionnalit\xe9s de surveillance, vous pouvez suivre efficacement la sant\xe9 de vos webhooks, examiner les journaux de requ\xeates et garantir la fiabilit\xe9 et les performances de vos int\xe9grations de webhooks."})]})}function c(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28191:(e,o,r)=>{r.d(o,{A:()=>n});const n=r.p+"assets/images/create-webhook-page-b86c280030fa18c8d6dd2e9697286c73.png"},79621:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>u});var n=r(58101);const s={},t=n.createContext(s);function i(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function u(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);