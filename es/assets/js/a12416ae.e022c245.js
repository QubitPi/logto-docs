"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[28444],{26447:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"logto-oss/using-cli/manage-database-configs","title":"Gestionar configuraciones de base de datos","description":"C\xf3mo gestionar configuraciones de base de datos mediante CLI.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/manage-database-configs","permalink":"/es/logto-oss/using-cli/manage-database-configs","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"description":"C\xf3mo gestionar configuraciones de base de datos mediante CLI.","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Alteraci\xf3n de la base de datos","permalink":"/es/logto-oss/using-cli/database-alteration"},"next":{"title":"Traducci\xf3n","permalink":"/es/logto-oss/using-cli/translation"}}');var t=n(25105),r=n(79621),o=n(3768),l=n(11043);const i={description:"C\xf3mo gestionar configuraciones de base de datos mediante CLI.",sidebar_position:4},c="Gestionar configuraciones de base de datos",u={},d=[{value:"Obtener configuraci\xf3n por clave",id:"get-config-by-key",level:2},{value:"Establecer configuraci\xf3n por clave",id:"set-config-by-key",level:2}];function g(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"gestionar-configuraciones-de-base-de-datos",children:"Gestionar configuraciones de base de datos"})}),"\n",(0,t.jsx)(a.p,{children:"Logto ayuda a mantener algunas configuraciones t\xe9cnicas, como claves OIDC y de Cookie. Antes de poder gestionarlas a trav\xe9s de Admin Console o Management API, puedes usar CLI para lograr el objetivo."}),"\n",(0,t.jsx)(a.h2,{id:"get-config-by-key",children:"Obtener configuraci\xf3n por clave"}),"\n",(0,t.jsx)(a.p,{children:"Uso:"}),"\n",(0,t.jsxs)(l.A,{groupId:"cmd",children:[(0,t.jsx)(o.A,{value:"cli",label:"CLI",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"logto db config get <key> [keys...]\n"})})}),(0,t.jsx)(o.A,{value:"npx",label:"npx",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config get <key> [keys...]\n"})})})]}),"\n",(0,t.jsx)(a.p,{children:"Supongamos que quieres obtener las claves privadas de OIDC:"}),"\n",(0,t.jsxs)(l.A,{groupId:"cmd",children:[(0,t.jsx)(o.A,{value:"cli",label:"CLI",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"logto db config get oidc.privateKeys\n"})})}),(0,t.jsx)(o.A,{value:"npx",label:"npx",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config get oidc.privateKeys\n"})})})]}),"\n",(0,t.jsx)(a.p,{children:"La salida ser\xe1 como:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'oidc.privateKeys=["\\n-----BEGIN PRIVATE KEY-----\\nMIIJRAIBA..."]\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Ejecuta ",(0,t.jsx)(a.code,{children:"logto db config get --help"})," para ver todas las claves disponibles, o consulta ",(0,t.jsx)(a.a,{href:"/concepts/core-service/configuration/#database-configs",children:"Configuraci\xf3n"})," para una explicaci\xf3n detallada."]}),"\n",(0,t.jsx)(a.h2,{id:"set-config-by-key",children:"Establecer configuraci\xf3n por clave"}),"\n",(0,t.jsxs)(l.A,{groupId:"cmd",children:[(0,t.jsx)(o.A,{value:"cli",label:"CLI",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"logto db config set <key> [keys...]\n"})})}),(0,t.jsx)(o.A,{value:"npx",label:"npx",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"npx @logto/cli db config set <key> [keys...]\n"})})})]}),"\n",(0,t.jsx)(a.p,{children:"Supongamos que quieres establecer las claves de Cookie de OIDC:"}),"\n",(0,t.jsxs)(l.A,{groupId:"cmd",children:[(0,t.jsx)(o.A,{value:"cli",label:"CLI",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'logto db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})}),(0,t.jsx)(o.A,{value:"npx",label:"npx",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'npx @logto/cli db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})})]}),"\n",(0,t.jsxs)(a.p,{children:["Normalmente, el valor a establecer debe ser una cadena JSON v\xe1lida y seguir la definici\xf3n de tipo predefinida. Ejecuta ",(0,t.jsx)(a.code,{children:"logto db config set --help"})," para ver todas las claves disponibles, o consulta ",(0,t.jsx)(a.a,{href:"/concepts/core-service/configuration/",children:"Configuraci\xf3n"})," para una explicaci\xf3n detallada."]})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},3768:(e,a,n)=>{n.d(a,{A:()=>o});n(58101);var s=n(13526);const t={tabItem:"tabItem_y6LR"};var r=n(25105);function o(e){let{children:a,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,o),hidden:n,children:a})}},11043:(e,a,n)=>{n.d(a,{A:()=>I});var s=n(58101),t=n(13526),r=n(32571),o=n(55234),l=n(87394),i=n(87276),c=n(31637),u=n(16063);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:a,children:n}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:s,default:t}}=e;return{value:a,label:n,attributes:s,default:t}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const t=(0,o.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function b(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=g(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:r}))),[c,d]=h({queryString:n,groupId:t}),[b,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,u.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),m=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(27034);const m={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var x=n(25105);function v(e){let{className:a,block:n,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const a=e.currentTarget,n=i.indexOf(a),t=l[n].value;t!==s&&(c(a),o(t))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;a=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;a=i[n]??i[i.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,t.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":s===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function y(e){const a=b(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...a,...e}),(0,x.jsx)(j,{...a,...e})]})}function I(e){const a=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(a))}},79621:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>l});var s=n(58101);const t={},r=s.createContext(t);function o(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);