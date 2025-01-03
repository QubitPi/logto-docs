"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85760],{52e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"logto-oss/using-cli/manage-database-configs","title":"G\xe9rer les configurations de base de donn\xe9es","description":"Comment g\xe9rer les configurations de base de donn\xe9es via CLI.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/manage-database-configs","permalink":"/fr/logto-oss/using-cli/manage-database-configs","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"description":"Comment g\xe9rer les configurations de base de donn\xe9es via CLI.","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Modification de base de donn\xe9es","permalink":"/fr/logto-oss/using-cli/database-alteration"},"next":{"title":"Traduction","permalink":"/fr/logto-oss/using-cli/translation"}}');var a=t(25105),s=t(79621),o=t(3768),l=t(11043);const i={description:"Comment g\xe9rer les configurations de base de donn\xe9es via CLI.",sidebar_position:4},c="G\xe9rer les configurations de base de donn\xe9es",u={},d=[{value:"Obtenir la configuration par cl\xe9",id:"get-config-by-key",level:2},{value:"D\xe9finir la configuration par cl\xe9",id:"set-config-by-key",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"g\xe9rer-les-configurations-de-base-de-donn\xe9es",children:"G\xe9rer les configurations de base de donn\xe9es"})}),"\n",(0,a.jsx)(n.p,{children:"Logto aide \xe0 maintenir certaines configurations techniques, telles que les cl\xe9s OIDC et Cookie. Avant de pouvoir les g\xe9rer via Admin Console ou Management API, vous pouvez utiliser CLI pour atteindre cet objectif."}),"\n",(0,a.jsx)(n.h2,{id:"get-config-by-key",children:"Obtenir la configuration par cl\xe9"}),"\n",(0,a.jsx)(n.p,{children:"Utilisation :"}),"\n",(0,a.jsxs)(l.A,{groupId:"cmd",children:[(0,a.jsx)(o.A,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto db config get <key> [keys...]\n"})})}),(0,a.jsx)(o.A,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get <key> [keys...]\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Disons que vous voulez obtenir les cl\xe9s priv\xe9es OIDC :"}),"\n",(0,a.jsxs)(l.A,{groupId:"cmd",children:[(0,a.jsx)(o.A,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto db config get oidc.privateKeys\n"})})}),(0,a.jsx)(o.A,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get oidc.privateKeys\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"La sortie sera comme :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'oidc.privateKeys=["\\n-----BEGIN PRIVATE KEY-----\\nMIIJRAIBA..."]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Ex\xe9cutez ",(0,a.jsx)(n.code,{children:"logto db config get --help"})," pour toutes les cl\xe9s disponibles, ou consultez ",(0,a.jsx)(n.a,{href:"/concepts/core-service/configuration/#database-configs",children:"Configuration"})," pour une explication d\xe9taill\xe9e."]}),"\n",(0,a.jsx)(n.h2,{id:"set-config-by-key",children:"D\xe9finir la configuration par cl\xe9"}),"\n",(0,a.jsxs)(l.A,{groupId:"cmd",children:[(0,a.jsx)(o.A,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto db config set <key> [keys...]\n"})})}),(0,a.jsx)(o.A,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config set <key> [keys...]\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Disons que vous voulez d\xe9finir les cl\xe9s Cookie OIDC :"}),"\n",(0,a.jsxs)(l.A,{groupId:"cmd",children:[(0,a.jsx)(o.A,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'logto db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})}),(0,a.jsx)(o.A,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'npx @logto/cli db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Normalement, la valeur \xe0 d\xe9finir doit \xeatre une cha\xeene JSON valide et suivre la d\xe9finition de type pr\xe9d\xe9finie. Ex\xe9cutez ",(0,a.jsx)(n.code,{children:"logto db config set --help"})," pour toutes les cl\xe9s disponibles, ou consultez ",(0,a.jsx)(n.a,{href:"/concepts/core-service/configuration/",children:"Configuration"})," pour une explication d\xe9taill\xe9e."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},3768:(e,n,t)=>{t.d(n,{A:()=>o});t(58101);var r=t(13526);const a={tabItem:"tabItem_y6LR"};var s=t(25105);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11043:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(58101),a=t(13526),s=t(32571),o=t(55234),l=t(87394),i=t(87276),c=t(31637),u=t(16063);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=g(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(27034);const m={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var x=t(25105);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},79621:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(58101);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);