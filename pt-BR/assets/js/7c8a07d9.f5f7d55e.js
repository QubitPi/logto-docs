"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[91470],{10473:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"logto-oss/using-cli/manage-database-configs","title":"Gerenciar configura\xe7\xf5es de banco de dados","description":"Como gerenciar configura\xe7\xf5es de banco de dados via CLI.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/manage-database-configs","permalink":"/pt-BR/logto-oss/using-cli/manage-database-configs","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"description":"Como gerenciar configura\xe7\xf5es de banco de dados via CLI.","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Altera\xe7\xe3o de banco de dados","permalink":"/pt-BR/logto-oss/using-cli/database-alteration"},"next":{"title":"Tradu\xe7\xe3o","permalink":"/pt-BR/logto-oss/using-cli/translation"}}');var o=n(25105),s=n(79621),t=n(3768),i=n(11043);const l={description:"Como gerenciar configura\xe7\xf5es de banco de dados via CLI.",sidebar_position:4},c="Gerenciar configura\xe7\xf5es de banco de dados",u={},d=[{value:"Obter configura\xe7\xe3o por chave",id:"get-config-by-key",level:2},{value:"Definir configura\xe7\xe3o por chave",id:"set-config-by-key",level:2}];function g(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"gerenciar-configura\xe7\xf5es-de-banco-de-dados",children:"Gerenciar configura\xe7\xf5es de banco de dados"})}),"\n",(0,o.jsx)(a.p,{children:"Logto ajuda a manter algumas configura\xe7\xf5es t\xe9cnicas, como chaves OIDC e Cookie. Antes de podermos gerenci\xe1-las via Admin Console ou Management API, voc\xea pode usar CLI para alcan\xe7ar esse objetivo."}),"\n",(0,o.jsx)(a.h2,{id:"get-config-by-key",children:"Obter configura\xe7\xe3o por chave"}),"\n",(0,o.jsx)(a.p,{children:"Uso:"}),"\n",(0,o.jsxs)(i.A,{groupId:"cmd",children:[(0,o.jsx)(t.A,{value:"cli",label:"CLI",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"logto db config get <key> [keys...]\n"})})}),(0,o.jsx)(t.A,{value:"npx",label:"npx",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config get <key> [keys...]\n"})})})]}),"\n",(0,o.jsx)(a.p,{children:"Digamos que voc\xea queira obter as chaves privadas OIDC:"}),"\n",(0,o.jsxs)(i.A,{groupId:"cmd",children:[(0,o.jsx)(t.A,{value:"cli",label:"CLI",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"logto db config get oidc.privateKeys\n"})})}),(0,o.jsx)(t.A,{value:"npx",label:"npx",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config get oidc.privateKeys\n"})})})]}),"\n",(0,o.jsx)(a.p,{children:"A sa\xedda ser\xe1 como:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'oidc.privateKeys=["\\n-----BEGIN PRIVATE KEY-----\\nMIIJRAIBA..."]\n'})}),"\n",(0,o.jsxs)(a.p,{children:["Execute ",(0,o.jsx)(a.code,{children:"logto db config get --help"})," para todas as chaves dispon\xedveis, ou veja ",(0,o.jsx)(a.a,{href:"/concepts/core-service/configuration/#database-configs",children:"Configura\xe7\xe3o"})," para explica\xe7\xe3o detalhada."]}),"\n",(0,o.jsx)(a.h2,{id:"set-config-by-key",children:"Definir configura\xe7\xe3o por chave"}),"\n",(0,o.jsxs)(i.A,{groupId:"cmd",children:[(0,o.jsx)(t.A,{value:"cli",label:"CLI",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"logto db config set <key> [keys...]\n"})})}),(0,o.jsx)(t.A,{value:"npx",label:"npx",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config set <key> [keys...]\n"})})})]}),"\n",(0,o.jsx)(a.p,{children:"Digamos que voc\xea queira definir as chaves de Cookie OIDC:"}),"\n",(0,o.jsxs)(i.A,{groupId:"cmd",children:[(0,o.jsx)(t.A,{value:"cli",label:"CLI",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'logto db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})}),(0,o.jsx)(t.A,{value:"npx",label:"npx",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'npx @logto/cli db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})})]}),"\n",(0,o.jsxs)(a.p,{children:["Normalmente, o valor a ser definido deve ser uma string JSON v\xe1lida e seguir a defini\xe7\xe3o de tipo pr\xe9-definida. Execute ",(0,o.jsx)(a.code,{children:"logto db config set --help"})," para todas as chaves dispon\xedveis, ou veja ",(0,o.jsx)(a.a,{href:"/concepts/core-service/configuration/",children:"Configura\xe7\xe3o"})," para explica\xe7\xe3o detalhada."]})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},3768:(e,a,n)=>{n.d(a,{A:()=>t});n(58101);var r=n(13526);const o={tabItem:"tabItem_y6LR"};var s=n(25105);function t(e){let{children:a,hidden:n,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,t),hidden:n,children:a})}},11043:(e,a,n)=>{n.d(a,{A:()=>I});var r=n(58101),o=n(13526),s=n(32571),t=n(55234),i=n(87394),l=n(87276),c=n(31637),u=n(16063);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:r,default:o}}=e;return{value:a,label:n,attributes:r,default:o}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const o=(0,t.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(o.location.search);a.set(s,e),o.replace({...o.location,search:a.toString()})}),[s,o])]}function b(e){const{defaultValue:a,queryString:n=!1,groupId:o}=e,s=g(e),[t,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:s}))),[c,d]=h({queryString:n,groupId:o}),[b,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[o,s]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),m=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&l(m)}),[m]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(27034);const m={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var v=n(25105);function x(e){let{className:a,block:n,selectedValue:r,selectValue:t,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const a=e.currentTarget,n=l.indexOf(a),o=i[n].value;o!==r&&(c(a),t(o))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=l[n]??l[l.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:s}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function y(e){const a=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...a,...e}),(0,v.jsx)(j,{...a,...e})]})}function I(e){const a=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(a))}},79621:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>i});var r=n(58101);const o={},s=r.createContext(o);function t(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);