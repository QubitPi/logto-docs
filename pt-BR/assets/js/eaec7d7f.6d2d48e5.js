"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[84323],{68073:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"logto-oss/using-cli/database-alteration","title":"Altera\xe7\xe3o de banco de dados","description":"Como implantar altera\xe7\xe3o de banco de dados.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/using-cli/database-alteration.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/database-alteration","permalink":"/pt-BR/logto-oss/using-cli/database-alteration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/using-cli/database-alteration.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"description":"Como implantar altera\xe7\xe3o de banco de dados.","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Gerenciar conectores","permalink":"/pt-BR/logto-oss/using-cli/manage-connectors"},"next":{"title":"Gerenciar configura\xe7\xf5es de banco de dados","permalink":"/pt-BR/logto-oss/using-cli/manage-database-configs"}}');var n=r(25105),s=r(79621),t=r(3768),l=r(11043);const i={description:"Como implantar altera\xe7\xe3o de banco de dados.",sidebar_position:3},c="Altera\xe7\xe3o de banco de dados",d={},u=[{value:"Determinar a vers\xe3o a ser implantada",id:"determine-the-version-to-deploy",level:2},{value:"Reverter altera\xe7\xf5es",id:"rollback-alterations",level:2},{value:"Para colaboradores",id:"for-contributors",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"altera\xe7\xe3o-de-banco-de-dados",children:"Altera\xe7\xe3o de banco de dados"})}),"\n",(0,n.jsx)(a.p,{children:"Ao desenvolver novas funcionalidades ou refatorar as existentes, \xe0s vezes \xe9 inevit\xe1vel alterar esquemas de banco de dados."}),"\n",(0,n.jsx)(a.p,{children:"As coisas podem parecer assustadoras, pois, como usu\xe1rio, geralmente voc\xea precisa:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Verificar duas vezes a diferen\xe7a entre duas ou mais vers\xf5es"}),"\n",(0,n.jsx)(a.li,{children:"Alterar o banco de dados de maneira segura e compat\xedvel com vers\xf5es anteriores"}),"\n",(0,n.jsx)(a.li,{children:"Estar preparado para falhas potenciais, como ter um script de revers\xe3o"}),"\n",(0,n.jsx)(a.li,{children:"Substituir gradualmente as inst\xe2ncias do Logto em execu\xe7\xe3o pela nova vers\xe3o"}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Ei, n\xf3s tamb\xe9m somos desenvolvedores e sabemos que \xe9 desagrad\xe1vel fazer todas essas coisas arriscadas, mas obrigat\xf3rias."})," Ent\xe3o, por que n\xe3o deixamos isso para algu\xe9m que n\xe3o cometer\xe1 erros, como um CLI?"]}),"\n",(0,n.jsx)(a.p,{children:"A partir de agora, seu processo de atualiza\xe7\xe3o ser\xe1:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Execute ",(0,n.jsx)(a.code,{children:"logto db alt deploy"})," de qualquer lugar que possa acessar o banco de dados"]}),"\n",(0,n.jsx)(a.li,{children:"Substitua gradualmente as inst\xe2ncias do Logto em execu\xe7\xe3o pela nova vers\xe3o"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Vamos come\xe7ar!"}),"\n",(0,n.jsx)(a.h2,{id:"determine-the-version-to-deploy",children:"Determinar a vers\xe3o a ser implantada"}),"\n",(0,n.jsxs)(a.p,{children:["Se voc\xea tiver o Logto CLI instalado globalmente, \xe9 ",(0,n.jsx)(a.strong,{children:"altamente recomendado"})," atualizar o CLI para a vers\xe3o mais recente antes de implantar para obter todas as altera\xe7\xf5es de banco de dados dispon\xedveis. Em seguida, execute o comando:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"cmd",children:[(0,n.jsx)(t.A,{value:"cli",label:"CLI",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"logto db alteration deploy\n"})})}),(0,n.jsx)(t.A,{value:"npx",label:"npx",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy\n"})})})]}),"\n",(0,n.jsx)(a.p,{children:"Se o seu banco de dados estiver atualizado, voc\xea ver\xe1 a mensagem abaixo:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"[info] Found 0 alteration to deploy\n"})}),"\n",(0,n.jsx)(a.p,{children:"Se voc\xea tiver altera\xe7\xf5es n\xe3o implantadas, o CLI pedir\xe1 que voc\xea escolha a vers\xe3o desejada:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"? Choose the alteration target version (Use arrow keys)\n> 1.2.0\n  1.0.0\n"})}),"\n",(0,n.jsx)(a.p,{children:"Teoricamente, a vers\xe3o a ser implantada deve corresponder \xe0 vers\xe3o da sua inst\xe2ncia do Logto. Enquanto isso, voc\xea pode usar o comando com uma vers\xe3o alvo:"}),"\n",(0,n.jsxs)(l.A,{groupId:"cmd",children:[(0,n.jsx)(t.A,{value:"cli",label:"CLI",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"logto db alteration deploy 1.2.0\n"})})}),(0,n.jsx)(t.A,{value:"npx",label:"npx",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy 1.2.0\n"})})})]}),"\n",(0,n.jsxs)(a.p,{children:["\xc9 \xfatil quando voc\xea gostaria de fazer a altera\xe7\xe3o em um pipeline n\xe3o-TTY, apenas lembre-se de passar a URL do banco de dados usando ",(0,n.jsx)(a.code,{children:"--db-url"}),". Veja ",(0,n.jsx)(a.a,{href:"/logto-oss/deployment-and-configuration/",children:"Implanta\xe7\xe3o e configura\xe7\xe3o"})," para configurar um trabalho de altera\xe7\xe3o em seu cluster."]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:"Para cada script de altera\xe7\xe3o, o Logto CLI executar\xe1 todo o script em uma transa\xe7\xe3o. Portanto, se uma implanta\xe7\xe3o falhar, voc\xea pode facilmente continuar com o mesmo comando ap\xf3s corrigir o problema."})}),"\n",(0,n.jsx)(a.h2,{id:"rollback-alterations",children:"Reverter altera\xe7\xf5es"}),"\n",(0,n.jsxs)(a.p,{children:["Nossos scripts de altera\xe7\xe3o tamb\xe9m v\xeam com um script ",(0,n.jsx)(a.code,{children:"down"})," que pode reverter as altera\xe7\xf5es. Para reverter o status do banco de dados para uma vers\xe3o espec\xedfica, substitua ",(0,n.jsx)(a.code,{children:"1.0.0"})," pela sua vers\xe3o alvo e execute o comando abaixo:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"cmd",children:[(0,n.jsx)(t.A,{value:"cli",label:"CLI",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"logto db alteration rollback 1.0.0\n"})})}),(0,n.jsx)(t.A,{value:"npx",label:"npx",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db alteration rollback 1.0.0\n"})})})]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["Voc\xea pode encontrar todos os scripts de altera\xe7\xe3o ",(0,n.jsx)(a.a,{href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations",children:"neste diret\xf3rio"}),"."]})}),"\n",(0,n.jsx)(a.h2,{id:"for-contributors",children:"Para colaboradores"}),"\n",(0,n.jsx)(a.p,{children:'O branch master do reposit\xf3rio Logto pode conter scripts de altera\xe7\xe3o n\xe3o publicados. Voc\xea pode precisar implantar manualmente as altera\xe7\xf5es "next" executando:'}),"\n",(0,n.jsxs)(l.A,{groupId:"cmd",children:[(0,n.jsx)(t.A,{value:"cli",label:"CLI",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"logto db alteration deploy next\n"})})}),(0,n.jsx)(t.A,{value:"npx",label:"npx",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy next\n"})})})]}),"\n",(0,n.jsx)(a.p,{children:"Se voc\xea estiver desenvolvendo uma funcionalidade que requer altera\xe7\xf5es no banco de dados, al\xe9m de atualizar o esquema do banco de dados, voc\xea tamb\xe9m precisa fornecer um script no seguinte formato:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"next-[timestamp]-what-to-do.ts\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Verifique ",(0,n.jsx)(a.a,{href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations",children:"este diret\xf3rio"})," para refer\xeancia."]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},3768:(e,a,r)=>{r.d(a,{A:()=>t});r(58101);var o=r(13526);const n={tabItem:"tabItem_y6LR"};var s=r(25105);function t(e){let{children:a,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(n.tabItem,t),hidden:r,children:a})}},11043:(e,a,r)=>{r.d(a,{A:()=>I});var o=r(58101),n=r(13526),s=r(32571),t=r(55234),l=r(87394),i=r(87276),c=r(31637),d=r(16063);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:r}=e;return(0,o.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:r,attributes:o,default:n}}=e;return{value:a,label:r,attributes:o,default:n}}))}(r);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function m(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:r}=e;const n=(0,t.W6)(),s=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,i.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(n.location.search);a.set(s,e),n.replace({...n.location,search:a.toString()})}),[s,n])]}function b(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,s=p(e),[t,i]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:s}))),[c,u]=h({queryString:r,groupId:n}),[b,g]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,s]=(0,d.Dv)(r);return[n,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),x=(()=>{const e=c??b;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:t,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=r(27034);const x={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var v=r(25105);function f(e){let{className:a,block:r,selectedValue:o,selectValue:t,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const a=e.currentTarget,r=i.indexOf(a),n=l[r].value;n!==o&&(c(a),t(n))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;a=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;a=i[r]??i[i.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},a),children:l.map((e=>{let{value:a,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,n.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":o===a}),children:r??a},a)}))})}function j(e){let{lazy:a,children:r,selectedValue:s}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function y(e){const a=b(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,v.jsx)(f,{...a,...e}),(0,v.jsx)(j,{...a,...e})]})}function I(e){const a=(0,g.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(a))}},79621:(e,a,r)=>{r.d(a,{R:()=>t,x:()=>l});var o=r(58101);const n={},s=o.createContext(n);function t(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);