"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[33404],{10611:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"logto-oss/central-cache","title":"Cache central","description":"Logto prend en charge l\'utilisation de Redis\xae comme cache central pour les donn\xe9es bien connues. En utilisant un cache central, Logto peut acc\xe9l\xe9rer consid\xe9rablement l\'Exp\xe9rience utilisateur en r\xe9duisant le nombre de requ\xeates \xe0 la base de donn\xe9es n\xe9cessaires pour g\xe9n\xe9rer une r\xe9ponse.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/central-cache.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/central-cache","permalink":"/fr/logto-oss/central-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/central-cache.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Traduire CLI","permalink":"/fr/logto-oss/translate-cli"},"next":{"title":"Fournisseur de stockage de fichiers","permalink":"/fr/logto-oss/file-storage-provider"}}');var r=s(25105),i=s(79621);const t={sidebar_position:5},c="Cache central",a={},l=[{value:"Configurer la connexion",id:"configure-the-connection",level:2},{value:"V\xe9rifier si le cache fonctionne",id:"check-if-the-cache-is-working",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cache-central",children:"Cache central"})}),"\n",(0,r.jsxs)(n.p,{children:["Logto prend en charge l'utilisation de Redis\xae",(0,r.jsx)(n.sup,{children:(0,r.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," comme cache central pour les donn\xe9es bien connues. En utilisant un cache central, Logto peut acc\xe9l\xe9rer consid\xe9rablement l'Exp\xe9rience utilisateur en r\xe9duisant le nombre de requ\xeates \xe0 la base de donn\xe9es n\xe9cessaires pour g\xe9n\xe9rer une r\xe9ponse."]}),"\n",(0,r.jsx)(n.p,{children:"En g\xe9n\xe9ral, le cache peut \xeatre rendu public puisqu'il est con\xe7u uniquement pour les donn\xe9es bien connues. \xc0 l'heure actuelle, Logto ne stocke aucune donn\xe9e n\xe9cessitant une Authentification ou une Autorisation."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Pour garantir les meilleures pratiques de s\xe9curit\xe9, nous conseillons tout de m\xeame de limiter l'acc\xe8s au cache."})}),"\n",(0,r.jsx)(n.h2,{id:"configure-the-connection",children:"Configurer la connexion"}),"\n",(0,r.jsxs)(n.p,{children:["Pour activer le cache, vous aurez besoin d'une instance Redis 6.0 en cours d'ex\xe9cution. Pour que Logto puisse se connecter et utiliser le cache, il suffit de d\xe9finir la variable d'environnement ",(0,r.jsx)(n.code,{children:"REDIS_URL"})," sur la cha\xeene de connexion Redis, qui doit commencer par le ",(0,r.jsx)(n.a,{href:"https://www.iana.org/assignments/uri-schemes/prov/redis",children:'protocole "redis"'})," (",(0,r.jsx)(n.code,{children:"redis://"}),") pour les connexions non s\xe9curis\xe9es, ou le ",(0,r.jsx)(n.a,{href:"https://www.iana.org/assignments/uri-schemes/prov/rediss",children:'protocole "redis"'})," (",(0,r.jsx)(n.code,{children:"redis://"}),") pour la connexion via TLS."]}),"\n",(0,r.jsx)(n.p,{children:"Par exemple :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"REDIS_URL=redis://your-redis-username:your-password@your.redis.url.com:6380\n"})}),"\n",(0,r.jsx)(n.p,{children:"Veuillez noter que la plupart des parties de la cha\xeene de connexion peuvent \xeatre omises, comme le montre l'exemple ci-dessous, qui compose une cha\xeene de connexion sans le nom d'utilisateur et le port, en utilisant le protocole \"redis\" :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"REDIS_URL=redis://:your-password@your.redis.url.com\n"})}),"\n",(0,r.jsx)(n.p,{children:"Si le mot de passe contient des caract\xe8res sp\xe9ciaux, il doit \xeatre encod\xe9 en URI :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Si le mot de passe est "foo="\nREDIS_URL=redis://:foo%3D@your.redis.url.com\n'})}),"\n",(0,r.jsx)(n.p,{children:"Dans les cas o\xf9 toutes les valeurs par d\xe9faut sont utilis\xe9es, vous pouvez d\xe9finir la variable sur une valeur vraie pour plus de commodit\xe9 :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'REDIS_URL=1 # ou "true", "yes"\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["La cha\xeene ",(0,r.jsx)(n.a,{href:"https://stackexchange.github.io/StackExchange.Redis/Configuration.html",children:"StackExchange.Redis"})," n'est pas prise en charge."]})}),"\n",(0,r.jsx)(n.h2,{id:"check-if-the-cache-is-working",children:"V\xe9rifier si le cache fonctionne"}),"\n",(0,r.jsx)(n.p,{children:"Pour v\xe9rifier si le cache est correctement connect\xe9, vous devriez voir le message suivant affich\xe9 lorsque Logto d\xe9marre :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[CACHE] Connected to Redis\n"})}),"\n",(0,r.jsxs)(n.p,{children:["De plus, lorsque la requ\xeate atteint le cache (par exemple, en acc\xe9dant plusieurs fois \xe0 ",(0,r.jsx)(n.code,{children:"GET /api/.well-known/phrases"}),"), le message suivant appara\xeetra dans la console :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[CACHE] Well-known cache hit for ...\n"})}),"\n","\n",(0,r.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,r.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,r.jsxs)(n.p,{children:["Redis est une marque d\xe9pos\xe9e de Redis Ltd. Tous les droits y aff\xe9rents sont r\xe9serv\xe9s \xe0 Redis Ltd. Toute utilisation par Silverhand est \xe0 des fins de r\xe9f\xe9rence uniquement et n'indique aucun parrainage, approbation ou affiliation entre Redis et Silverhand. ",(0,r.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var o=s(58101);const r={},i=o.createContext(r);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);