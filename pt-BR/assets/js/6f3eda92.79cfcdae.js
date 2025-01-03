"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[86575],{25677:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-management/advanced-user-search","title":"Pesquisa avan\xe7ada de usu\xe1rios","description":"Usando diretamente a Management API para aproveitar condi\xe7\xf5es avan\xe7adas de pesquisa de usu\xe1rios.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/user-management/advanced-user-search.mdx","sourceDirName":"user-management","slug":"/user-management/advanced-user-search","permalink":"/pt-BR/user-management/advanced-user-search","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/user-management/advanced-user-search.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Gerenciar usu\xe1rios","permalink":"/pt-BR/user-management/manage-users"},"next":{"title":"Token de acesso pessoal","permalink":"/pt-BR/user-management/personal-access-token"}}');var r=s(25105),o=s(79621);const i={sidebar_position:3},c="Pesquisa avan\xe7ada de usu\xe1rios",d={},l=[{value:"Realizar uma solicita\xe7\xe3o de pesquisa",id:"perform-a-search-request",level:2},{value:"Exemplo",id:"sample",level:3},{value:"Par\xe2metros",id:"parameters",level:3},{value:"Pesquisa difusa b\xe1sica",id:"basic-fuzzy-search",level:3},{value:"Especificar campos",id:"specify-fields",level:3},{value:"Alterando o modo de jun\xe7\xe3o",id:"changing-the-joint-mode",level:3},{value:"Correspond\xeancia exata e sensibilidade a mai\xfasculas e min\xfasculas",id:"exact-match-and-case-sensitivity",level:3},{value:"Express\xe3o regular (RegEx)",id:"regular-expression-regex",level:3},{value:"Sobrescrever o modo de correspond\xeancia",id:"match-mode-override",level:3}];function t(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"pesquisa-avan\xe7ada-de-usu\xe1rios",children:"Pesquisa avan\xe7ada de usu\xe1rios"})}),"\n",(0,r.jsx)(a.p,{children:"Usando diretamente a Management API para aproveitar condi\xe7\xf5es avan\xe7adas de pesquisa de usu\xe1rios."}),"\n",(0,r.jsx)(a.h2,{id:"perform-a-search-request",children:"Realizar uma solicita\xe7\xe3o de pesquisa"}),"\n",(0,r.jsxs)(a.p,{children:["Use ",(0,r.jsx)(a.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:(0,r.jsx)(a.code,{children:"GET /api/users"})})," para pesquisar usu\xe1rios. Note que \xe9 uma Management API que requer autentica\xe7\xe3o como as outras. Veja ",(0,r.jsx)(a.a,{href:"/integrate-logto/interact-with-management-api",children:"Interagir com a Management API"})," para a receita de intera\xe7\xe3o."]}),"\n",(0,r.jsx)(a.h3,{id:"sample",children:"Exemplo"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Solicita\xe7\xe3o"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"curl \\\n  --location \\\n  --request GET \\\n  'http://<your-logto-endpoint>/api/users?search=%25alice%25'\n\n"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Resposta"})}),"\n",(0,r.jsxs)(a.p,{children:["Um array de entidades ",(0,r.jsx)(a.code,{children:"User"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'[\n  {\n    "id": "MgUzzDsyX0iB",\n    "username": "alice_123",\n    "primaryEmail": "alice@some.email.domain",\n    "primaryPhone": null,\n    "name": null,\n    "avatar": null\n    // ...\n  }\n]\n'})}),"\n",(0,r.jsx)(a.h3,{id:"parameters",children:"Par\xe2metros"}),"\n",(0,r.jsx)(a.p,{children:"Uma solicita\xe7\xe3o de pesquisa consiste nas seguintes chaves de par\xe2metro:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["Palavras-chave de pesquisa: ",(0,r.jsx)(a.code,{children:"search"}),", ",(0,r.jsx)(a.code,{children:"search.*"})]}),"\n",(0,r.jsxs)(a.li,{children:["Modo de pesquisa para campos: ",(0,r.jsx)(a.code,{children:"mode"}),", ",(0,r.jsx)(a.code,{children:"mode.*"})," (valor padr\xe3o ",(0,r.jsx)(a.code,{children:"'like'"}),", dispon\xedvel ",(0,r.jsx)(a.code,{children:"['exact', 'like', 'similar_to', 'posix']"}),")"]}),"\n",(0,r.jsxs)(a.li,{children:["Modo de jun\xe7\xe3o: ",(0,r.jsx)(a.code,{children:"joint"})," ou ",(0,r.jsx)(a.code,{children:"jointMode"})," (valor padr\xe3o ",(0,r.jsx)(a.code,{children:"'or'"}),", dispon\xedvel ",(0,r.jsx)(a.code,{children:"['or', 'and']"}),")"]}),"\n",(0,r.jsxs)(a.li,{children:["\xc9 sens\xedvel a mai\xfasculas e min\xfasculas: ",(0,r.jsx)(a.code,{children:"isCaseSensitive"})," (valor padr\xe3o ",(0,r.jsx)(a.code,{children:"false"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Esta API tem ",(0,r.jsx)(a.a,{href:"/integrate-logto/interact-with-management-api/#managing-paginated-api-responses",children:"pagina\xe7\xe3o"})," habilitada."]}),"\n",(0,r.jsxs)(a.p,{children:["Vamos passar por eles atrav\xe9s de alguns exemplos. Todos os par\xe2metros de pesquisa ser\xe3o formatados como um construtor de ",(0,r.jsx)(a.code,{children:"URLSearchParams"}),"."]}),"\n",(0,r.jsx)(a.admonition,{type:"warning",children:(0,r.jsxs)(a.p,{children:["O modo de pesquisa \xe9 definido como ",(0,r.jsx)(a.code,{children:"like"})," por padr\xe3o, que usa ",(0,r.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Approximate_string_matching",children:"Correspond\xeancia aproximada de strings"}),' ("pesquisa difusa").']})}),"\n",(0,r.jsx)(a.admonition,{type:"note",children:(0,r.jsxs)(a.p,{children:['Todos os modos de pesquisa difusa suportam apenas a correspond\xeancia de um valor por campo. Se voc\xea precisar corresponder a v\xe1rios valores para um \xfanico campo, deve usar o modo "exact". Veja ',(0,r.jsx)(a.a,{href:"#exact-match-and-case-sensitivity",children:"Correspond\xeancia exata e sensibilidade a mai\xfasculas e min\xfasculas"})," para detalhes."]})}),"\n",(0,r.jsx)(a.h3,{id:"basic-fuzzy-search",children:"Pesquisa difusa b\xe1sica"}),"\n",(0,r.jsxs)(a.p,{children:["Se voc\xea quiser realizar uma pesquisa difusa em todos os campos dispon\xedveis, basta fornecer um valor para a chave ",(0,r.jsx)(a.code,{children:"search"}),". Ele usar\xe1 ",(0,r.jsxs)(a.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE",children:["o operador ",(0,r.jsx)(a.code,{children:"like"})]})," internamente:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([['search', '%foo%']]);\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Esta pesquisa ir\xe1 iterar sobre todos os campos dispon\xedveis em uma pesquisa de usu\xe1rio, ou seja, ",(0,r.jsx)(a.code,{children:"id"}),", ",(0,r.jsx)(a.code,{children:"primaryEmail"}),", ",(0,r.jsx)(a.code,{children:"primaryPhone"}),", ",(0,r.jsx)(a.code,{children:"username"}),", ",(0,r.jsx)(a.code,{children:"name"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"specify-fields",children:"Especificar campos"}),"\n",(0,r.jsxs)(a.p,{children:["E se voc\xea quiser limitar a pesquisa apenas em ",(0,r.jsx)(a.code,{children:"name"}),"? Para pesquisar algu\xe9m que inclua ",(0,r.jsx)(a.code,{children:"foo"})," no nome, basta usar o s\xedmbolo ",(0,r.jsx)(a.code,{children:"."})," para especificar o campo:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([['search.name', '%foo%']]);\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Lembre-se de que campos aninhados n\xe3o s\xe3o suportados, por exemplo, ",(0,r.jsx)(a.code,{children:"search.name.first"})," resultar\xe1 em um erro."]}),"\n",(0,r.jsx)(a.p,{children:"Voc\xea tamb\xe9m pode especificar v\xe1rios campos ao mesmo tempo:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n]);\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Significa pesquisar usu\xe1rios que t\xeam ",(0,r.jsx)(a.code,{children:"foo"})," no nome ",(0,r.jsx)(a.strong,{children:"OU"})," cujo email termina com ",(0,r.jsx)(a.code,{children:"@gmail.com"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"changing-the-joint-mode",children:"Alterando o modo de jun\xe7\xe3o"}),"\n",(0,r.jsxs)(a.p,{children:["Se voc\xea quiser que a API retorne apenas o resultado que satisfa\xe7a TODAS as condi\xe7\xf5es, defina o modo de jun\xe7\xe3o como ",(0,r.jsx)(a.code,{children:"and"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n  ['joint', 'and'],\n]);\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Significa pesquisar usu\xe1rios que t\xeam ",(0,r.jsx)(a.code,{children:"foo"})," no nome ",(0,r.jsx)(a.strong,{children:"E"})," cujo email termina com ",(0,r.jsx)(a.code,{children:"@gmail.com"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"exact-match-and-case-sensitivity",children:"Correspond\xeancia exata e sensibilidade a mai\xfasculas e min\xfasculas"}),"\n",(0,r.jsxs)(a.p,{children:['Digamos que voc\xea queira pesquisar quem tem o nome exato "Alice". Voc\xea pode definir ',(0,r.jsx)(a.code,{children:"mode.name"})," para usar a correspond\xeancia exata."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['mode.name', 'exact'],\n]);\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Voc\xea pode achar que tem o mesmo efeito ao usar o modo ",(0,r.jsx)(a.code,{children:"like"})," (padr\xe3o) vs. especificar ",(0,r.jsx)(a.code,{children:"exact"}),". Uma diferen\xe7a \xe9 que o modo ",(0,r.jsx)(a.code,{children:"exact"})," usa ",(0,r.jsx)(a.code,{children:"="})," para comparar enquanto ",(0,r.jsx)(a.code,{children:"like"})," usa ",(0,r.jsx)(a.code,{children:"like"})," ou ",(0,r.jsx)(a.code,{children:"ilike"}),". Teoricamente, ",(0,r.jsx)(a.code,{children:"="})," deve ter um desempenho melhor."]}),"\n",(0,r.jsxs)(a.p,{children:["Al\xe9m disso, no modo ",(0,r.jsx)(a.code,{children:"exact"}),", voc\xea pode passar v\xe1rios valores para correspond\xeancia, e eles ser\xe3o conectados com ",(0,r.jsx)(a.code,{children:"or"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n]);\n"})}),"\n",(0,r.jsxs)(a.p,{children:['Isso corresponder\xe1 aos usu\xe1rios com o nome "Alice" ',(0,r.jsx)(a.strong,{children:"OU"}),' "Bob".']}),"\n",(0,r.jsx)(a.p,{children:"Por padr\xe3o, a pesquisa n\xe3o diferencia mai\xfasculas de min\xfasculas. Para ser mais preciso, defina a pesquisa como sens\xedvel a mai\xfasculas e min\xfasculas:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n  ['isCaseSensitive', 'true'],\n]);\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Note que ",(0,r.jsx)(a.code,{children:"isCaseSensitive"})," \xe9 uma configura\xe7\xe3o global. Portanto, TODOS os campos seguir\xe3o isso."]}),"\n",(0,r.jsx)(a.h3,{id:"regular-expression-regex",children:"Express\xe3o regular (RegEx)"}),"\n",(0,r.jsxs)(a.p,{children:["O PostgreSQL suporta dois tipos de express\xf5es regulares, ",(0,r.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP",children:"similar to"})," e ",(0,r.jsx)(a.a,{href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP",children:"posix"}),". Defina ",(0,r.jsx)(a.code,{children:"mode"})," para ",(0,r.jsx)(a.code,{children:"similar_to"})," ou ",(0,r.jsx)(a.code,{children:"posix"})," para pesquisar por express\xf5es regulares:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n]);\n"})}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"Nota: O modo similar_to s\xf3 funciona em pesquisas sens\xedveis a mai\xfasculas e min\xfasculas."}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"match-mode-override",children:"Sobrescrever o modo de correspond\xeancia"}),"\n",(0,r.jsx)(a.p,{children:"Por padr\xe3o, todas as palavras-chave herdar\xe3o o modo de correspond\xeancia da pesquisa geral:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Modo Posix\n  ['joint', 'and'],\n]);\n"})}),"\n",(0,r.jsx)(a.p,{children:"Para sobrescrever para um campo espec\xedfico:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Modo Like\n  ['mode.primaryEmail', 'like'],\n  ['search.phone', '0{3,}'], // Modo Posix\n  ['joint', 'and'],\n]);\n"})})]})}function m(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},79621:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>c});var n=s(58101);const r={},o=n.createContext(r);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);