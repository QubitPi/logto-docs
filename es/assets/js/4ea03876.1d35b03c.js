"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[28459],{1461:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"logto-oss/using-cli/README","title":"Logto CLI","description":"Introducci\xf3n a las herramientas CLI para instalar, mantener y actualizar tu instancia de Logto sin manejar manualmente esas cosas t\xe9cnicas aburridas.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/using-cli/README.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/","permalink":"/es/logto-oss/using-cli/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/using-cli/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"description":"Introducci\xf3n a las herramientas CLI para instalar, mantener y actualizar tu instancia de Logto sin manejar manualmente esas cosas t\xe9cnicas aburridas.","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Despliegue y configuraci\xf3n","permalink":"/es/logto-oss/deployment-and-configuration"},"next":{"title":"Instalar Logto","permalink":"/es/logto-oss/using-cli/install-logto"}}');var r=a(25105),s=a(79621),l=a(3768),o=a(11043);const i={description:"Introducci\xf3n a las herramientas CLI para instalar, mantener y actualizar tu instancia de Logto sin manejar manualmente esas cosas t\xe9cnicas aburridas.",sidebar_position:3},c="Logto CLI",u={},d=[{value:"Instalar CLI globalmente",id:"install-cli-globally",level:3},{value:"CLI local",id:"local-cli",level:3},{value:"Usar CLI con <code>npx</code>",id:"use-cli-by-npx",level:3}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"logto-cli",children:"Logto CLI"})}),"\n",(0,r.jsx)(n.p,{children:"Logto CLI proporciona una manera conveniente de instalar, mantener y actualizar tu instancia de Logto sin manejar manualmente esas cosas t\xe9cnicas aburridas."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Actualmente no distribuimos binarios, por lo que se requiere Node.js ",(0,r.jsx)(n.code,{children:"^18.12.0"})," en el entorno."]})}),"\n",(0,r.jsx)(n.h3,{id:"install-cli-globally",children:"Instalar CLI globalmente"}),"\n",(0,r.jsxs)(n.p,{children:["Instala a trav\xe9s de tu gestor de paquetes preferido para usar el comando ",(0,r.jsx)(n.code,{children:"logto"})," globalmente:"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i @logto/cli -g\n"})})}),(0,r.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn global add @logto/cli\n"})})}),(0,r.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add -g @logto/cli\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Siempre puedes a\xf1adir ",(0,r.jsx)(n.code,{children:"--help"})," para mostrar la informaci\xf3n de ayuda de cada comando:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto --help\nlogto db seed --help\n"})}),"\n",(0,r.jsx)(n.h3,{id:"local-cli",children:"CLI local"}),"\n",(0,r.jsxs)(n.p,{children:["Una versi\xf3n incorporada de CLI se incluye con cada lanzamiento de Logto desde la v1.0.0-beta.11. Supongamos que ya tienes una instancia de Logto en ",(0,r.jsx)(n.code,{children:"~/logto"}),", entonces puedes ejecutar los siguientes comandos:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/logto\nnpm run cli # Invocar el CLI local\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Ten en cuenta que si deseas ejecutar con opciones, necesitas anteponer un ",(0,r.jsx)(n.code,{children:"--"})," ANTES de las opciones para Logto CLI, por ejemplo:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run cli db seed -- --db-url postgresql://your-database-url\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"use-cli-by-npx",children:["Usar CLI con ",(0,r.jsx)(n.code,{children:"npx"})]}),"\n",(0,r.jsxs)(n.p,{children:["Otra forma de usar Logto CLI es ",(0,r.jsx)(n.code,{children:"npx"}),", que puede ejecutar un paquete sin instalaci\xf3n."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli\n"})}),"\n",(0,r.jsx)(n.p,{children:"Esto ser\xe1 \xfatil para invocaciones puntuales, por ejemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db seed --db-url postgresql://your-database-url\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3768:(e,n,a)=>{a.d(n,{A:()=>l});a(58101);var t=a(13526);const r={tabItem:"tabItem_y6LR"};var s=a(25105);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:a,children:n})}},11043:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(58101),r=a(13526),s=a(32571),l=a(55234),o=a(87394),i=a(87276),c=a(31637),u=a(16063);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:a,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(27034);const f={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var x=a(25105);function j(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=o[a].value;r!==t&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function I(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,x.jsx)(I,{...e,children:d(e.children)},String(n))}},79621:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var t=a(58101);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);