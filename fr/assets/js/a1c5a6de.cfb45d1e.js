"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[75545],{61518:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-management/advanced-user-search","title":"Recherche avanc\xe9e d\'utilisateurs","description":"Utilisez directement Management API pour exploiter des conditions de recherche avanc\xe9es d\'utilisateurs.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-management/advanced-user-search.mdx","sourceDirName":"user-management","slug":"/user-management/advanced-user-search","permalink":"/fr/user-management/advanced-user-search","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/user-management/advanced-user-search.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"G\xe9rer les utilisateurs","permalink":"/fr/user-management/manage-users"},"next":{"title":"Jeton d\u2019acc\xe8s personnel","permalink":"/fr/user-management/personal-access-token"}}');var a=n(25105),i=n(79621);const c={sidebar_position:3},l="Recherche avanc\xe9e d'utilisateurs",o={},d=[{value:"Effectuer une requ\xeate de recherche",id:"perform-a-search-request",level:2},{value:"Exemple",id:"sample",level:3},{value:"Param\xe8tres",id:"parameters",level:3},{value:"Recherche floue de base",id:"basic-fuzzy-search",level:3},{value:"Sp\xe9cifier les champs",id:"specify-fields",level:3},{value:"Changer le mode de jointure",id:"changing-the-joint-mode",level:3},{value:"Correspondance exacte et sensibilit\xe9 \xe0 la casse",id:"exact-match-and-case-sensitivity",level:3},{value:"Expression r\xe9guli\xe8re (RegEx)",id:"regular-expression-regex",level:3},{value:"Remplacement du mode de correspondance",id:"match-mode-override",level:3}];function t(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"recherche-avanc\xe9e-dutilisateurs",children:"Recherche avanc\xe9e d'utilisateurs"})}),"\n",(0,a.jsx)(s.p,{children:"Utilisez directement Management API pour exploiter des conditions de recherche avanc\xe9es d'utilisateurs."}),"\n",(0,a.jsx)(s.h2,{id:"perform-a-search-request",children:"Effectuer une requ\xeate de recherche"}),"\n",(0,a.jsxs)(s.p,{children:["Utilisez ",(0,a.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:(0,a.jsx)(s.code,{children:"GET /api/users"})})," pour rechercher des utilisateurs. Notez qu'il s'agit d'une Management API qui n\xe9cessite une authentification comme les autres. Voir ",(0,a.jsx)(s.a,{href:"/integrate-logto/interact-with-management-api",children:"Interagir avec Management API"})," pour la recette d'interaction."]}),"\n",(0,a.jsx)(s.h3,{id:"sample",children:"Exemple"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Requ\xeate"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl \\\n  --location \\\n  --request GET \\\n  'http://<your-logto-endpoint>/api/users?search=%25alice%25'\n\n"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"R\xe9ponse"})}),"\n",(0,a.jsxs)(s.p,{children:["Un tableau d'entit\xe9s ",(0,a.jsx)(s.code,{children:"User"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'[\n  {\n    "id": "MgUzzDsyX0iB",\n    "username": "alice_123",\n    "primaryEmail": "alice@some.email.domain",\n    "primaryPhone": null,\n    "name": null,\n    "avatar": null\n    // ...\n  }\n]\n'})}),"\n",(0,a.jsx)(s.h3,{id:"parameters",children:"Param\xe8tres"}),"\n",(0,a.jsx)(s.p,{children:"Une requ\xeate de recherche se compose des cl\xe9s de param\xe8tres suivantes :"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Mots-cl\xe9s de recherche : ",(0,a.jsx)(s.code,{children:"search"}),", ",(0,a.jsx)(s.code,{children:"search.*"})]}),"\n",(0,a.jsxs)(s.li,{children:["Mode de recherche pour les champs : ",(0,a.jsx)(s.code,{children:"mode"}),", ",(0,a.jsx)(s.code,{children:"mode.*"})," (valeur par d\xe9faut ",(0,a.jsx)(s.code,{children:"'like'"}),", disponibles ",(0,a.jsx)(s.code,{children:"['exact', 'like', 'similar_to', 'posix']"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["Mode de jointure : ",(0,a.jsx)(s.code,{children:"joint"})," ou ",(0,a.jsx)(s.code,{children:"jointMode"})," (valeur par d\xe9faut ",(0,a.jsx)(s.code,{children:"'or'"}),", disponibles ",(0,a.jsx)(s.code,{children:"['or', 'and']"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["Sensibilit\xe9 \xe0 la casse : ",(0,a.jsx)(s.code,{children:"isCaseSensitive"})," (valeur par d\xe9faut ",(0,a.jsx)(s.code,{children:"false"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Cette API a la ",(0,a.jsx)(s.a,{href:"/integrate-logto/interact-with-management-api/#managing-paginated-api-responses",children:"pagination"})," activ\xe9e."]}),"\n",(0,a.jsxs)(s.p,{children:["Passons-les en revue \xe0 travers quelques exemples. Tous les param\xe8tres de recherche seront format\xe9s comme un constructeur de ",(0,a.jsx)(s.code,{children:"URLSearchParams"}),"."]}),"\n",(0,a.jsx)(s.admonition,{type:"warning",children:(0,a.jsxs)(s.p,{children:["Le mode de recherche est d\xe9fini sur ",(0,a.jsx)(s.code,{children:"like"})," par d\xe9faut, qui utilise la ",(0,a.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Approximate_string_matching",children:"correspondance approximative de cha\xeenes"}),' ("recherche floue").']})}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:['Tous les modes de recherche floue ne prennent en charge la correspondance qu\'avec une seule valeur par champ. Si vous devez faire correspondre plusieurs valeurs pour un seul champ, vous devez utiliser le mode "exact". Voir ',(0,a.jsx)(s.a,{href:"#exact-match-and-case-sensitivity",children:"Correspondance exacte et sensibilit\xe9 \xe0 la casse"})," pour plus de d\xe9tails."]})}),"\n",(0,a.jsx)(s.h3,{id:"basic-fuzzy-search",children:"Recherche floue de base"}),"\n",(0,a.jsxs)(s.p,{children:["Si vous souhaitez effectuer une recherche floue sur tous les champs disponibles, fournissez simplement une valeur pour la cl\xe9 ",(0,a.jsx)(s.code,{children:"search"}),". Cela utilisera ",(0,a.jsxs)(s.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE",children:["l'op\xe9rateur ",(0,a.jsx)(s.code,{children:"like"})]})," en interne :"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([['search', '%foo%']]);\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Cette recherche parcourra tous les champs disponibles dans une recherche d'utilisateur, c'est-\xe0-dire ",(0,a.jsx)(s.code,{children:"id"}),", ",(0,a.jsx)(s.code,{children:"primaryEmail"}),", ",(0,a.jsx)(s.code,{children:"primaryPhone"}),", ",(0,a.jsx)(s.code,{children:"username"}),", ",(0,a.jsx)(s.code,{children:"name"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"specify-fields",children:"Sp\xe9cifier les champs"}),"\n",(0,a.jsxs)(s.p,{children:["Que faire si vous souhaitez limiter la recherche au champ ",(0,a.jsx)(s.code,{children:"name"})," uniquement ? Pour rechercher quelqu'un qui inclut ",(0,a.jsx)(s.code,{children:"foo"})," dans son nom, utilisez simplement le symbole ",(0,a.jsx)(s.code,{children:"."})," pour sp\xe9cifier le champ :"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([['search.name', '%foo%']]);\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Rappelez-vous que les champs imbriqu\xe9s ne sont pas pris en charge, par exemple ",(0,a.jsx)(s.code,{children:"search.name.first"})," entra\xeenera une erreur."]}),"\n",(0,a.jsx)(s.p,{children:"Vous pouvez \xe9galement sp\xe9cifier plusieurs champs en m\xeame temps :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n]);\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Cela signifie rechercher des utilisateurs qui ont ",(0,a.jsx)(s.code,{children:"foo"})," dans le nom ",(0,a.jsx)(s.strong,{children:"OU"})," dont l'email se termine par ",(0,a.jsx)(s.code,{children:"@gmail.com"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"changing-the-joint-mode",children:"Changer le mode de jointure"}),"\n",(0,a.jsxs)(s.p,{children:["Si vous souhaitez que l'API ne retourne que le r\xe9sultat qui satisfait TOUTES les conditions, d\xe9finissez le mode de jointure sur ",(0,a.jsx)(s.code,{children:"and"})," :"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n  ['joint', 'and'],\n]);\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Cela signifie rechercher des utilisateurs qui ont ",(0,a.jsx)(s.code,{children:"foo"})," dans le nom ",(0,a.jsx)(s.strong,{children:"ET"})," dont l'email se termine par ",(0,a.jsx)(s.code,{children:"@gmail.com"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"exact-match-and-case-sensitivity",children:"Correspondance exacte et sensibilit\xe9 \xe0 la casse"}),"\n",(0,a.jsxs)(s.p,{children:['Disons que vous voulez rechercher dont le nom est exactement "Alice". Vous pouvez d\xe9finir ',(0,a.jsx)(s.code,{children:"mode.name"})," pour utiliser la correspondance exacte."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['mode.name', 'exact'],\n]);\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Vous pouvez constater qu'il a le m\xeame effet lorsque vous utilisez le mode ",(0,a.jsx)(s.code,{children:"like"})," (par d\xe9faut) par rapport \xe0 la sp\xe9cification ",(0,a.jsx)(s.code,{children:"exact"}),". Une diff\xe9rence est que le mode ",(0,a.jsx)(s.code,{children:"exact"})," utilise ",(0,a.jsx)(s.code,{children:"="})," pour comparer tandis que ",(0,a.jsx)(s.code,{children:"like"})," utilise ",(0,a.jsx)(s.code,{children:"like"})," ou ",(0,a.jsx)(s.code,{children:"ilike"}),". Th\xe9oriquement, ",(0,a.jsx)(s.code,{children:"="})," devrait avoir de meilleures performances."]}),"\n",(0,a.jsxs)(s.p,{children:["De plus, en mode ",(0,a.jsx)(s.code,{children:"exact"}),", vous pouvez passer plusieurs valeurs pour la correspondance, et elles seront connect\xe9es avec ",(0,a.jsx)(s.code,{children:"or"})," :"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n]);\n"})}),"\n",(0,a.jsxs)(s.p,{children:['Cela correspondra aux utilisateurs avec le nom "Alice" ',(0,a.jsx)(s.strong,{children:"OU"}),' "Bob".']}),"\n",(0,a.jsx)(s.p,{children:"Par d\xe9faut, la recherche n'est pas sensible \xe0 la casse. Pour \xeatre plus pr\xe9cis, d\xe9finissez la recherche comme sensible \xe0 la casse :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n  ['isCaseSensitive', 'true'],\n]);\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Notez que ",(0,a.jsx)(s.code,{children:"isCaseSensitive"})," est une configuration globale. Ainsi, CHAQUE champ le suivra."]}),"\n",(0,a.jsx)(s.h3,{id:"regular-expression-regex",children:"Expression r\xe9guli\xe8re (RegEx)"}),"\n",(0,a.jsxs)(s.p,{children:["PostgreSQL prend en charge deux types d'expressions r\xe9guli\xe8res, ",(0,a.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP",children:"similar to"})," et ",(0,a.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP",children:"posix"}),". D\xe9finissez ",(0,a.jsx)(s.code,{children:"mode"})," sur ",(0,a.jsx)(s.code,{children:"similar_to"})," ou ",(0,a.jsx)(s.code,{children:"posix"})," pour rechercher par expressions r\xe9guli\xe8res :"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n]);\n"})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Notez que le mode similar_to ne fonctionne que dans les recherches sensibles \xe0 la casse."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"match-mode-override",children:"Remplacement du mode de correspondance"}),"\n",(0,a.jsx)(s.p,{children:"Par d\xe9faut, tous les mots-cl\xe9s h\xe9riteront du mode de correspondance de la recherche g\xe9n\xe9rale :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Mode Posix\n  ['joint', 'and'],\n]);\n"})}),"\n",(0,a.jsx)(s.p,{children:"Pour remplacer pour un champ sp\xe9cifique :"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Mode Like\n  ['mode.primaryEmail', 'like'],\n  ['search.phone', '0{3,}'], // Mode Posix\n  ['joint', 'and'],\n]);\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},79621:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var r=n(58101);const a={},i=r.createContext(a);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);