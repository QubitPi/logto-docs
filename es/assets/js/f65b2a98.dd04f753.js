"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[52602],{35103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"logto-oss/using-cli/migrate-from-env","title":"Migrar configuraciones desde env","description":"Puedes omitir esta p\xe1gina si tu versi\xf3n de Logto es mayor o igual a v1.0.0-beta.11.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/using-cli/migrate-from-env.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/migrate-from-env","permalink":"/es/logto-oss/using-cli/migrate-from-env","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/using-cli/migrate-from-env.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Traducci\xf3n","permalink":"/es/logto-oss/using-cli/translation"},"next":{"title":"Rotar claves de firma (OSS)","permalink":"/es/logto-oss/using-cli/rotate-signing-keys"}}');var a=t(25105),o=t(79621),s=t(3768),i=t(11043);const l={sidebar_position:6},c="Migrar configuraciones desde env",u={},d=[];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"migrar-configuraciones-desde-env",children:"Migrar configuraciones desde env"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Puedes omitir esta p\xe1gina si tu versi\xf3n de Logto es mayor o igual a ",(0,a.jsx)(n.code,{children:"v1.0.0-beta.11"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"Gestionar demasiadas variables de entorno no es eficiente ni flexible, y es dif\xedcil mantener una \xfanica fuente de verdad cuando tienes m\xfaltiples contenedores en ejecuci\xf3n."}),"\n",(0,a.jsx)(n.p,{children:"Por eso decidimos mover todas las configuraciones t\xe9cnicas posibles a la base de datos, incluidas las claves relacionadas con OIDC."}),"\n",(0,a.jsxs)(n.p,{children:["Para que sea fluido, aseg\xfarate de tener un archivo ",(0,a.jsx)(n.code,{children:".env"})," original, o ejecuta el comando en un entorno que tenga las siguientes variables:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"OIDC_PRIVATE_KEYS=some_secret_key # O OIDC_PRIVATE_KEY_PATHS\nOIDC_COOKIE_KEYS=key1,key2\nDB_URL=postgresql://localhost:5432/logto\n"})}),"\n",(0,a.jsx)(n.p,{children:"Luego ejecuta el siguiente comando:"}),"\n",(0,a.jsxs)(i.A,{groupId:"cmd",children:[(0,a.jsx)(s.A,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto db seed oidc\n# O\nlogto db seed oidc --env /your/path/to/.env\n"})})}),(0,a.jsx)(s.A,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db seed oidc\n# O\nnpx @logto/cli db seed oidc --env /your/path/to/.env\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Si todo va bien, ver\xe1s un mensaje como:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"[info] Read config oidc.privateKeys from env\n[info] Read config oidc.cookieKeys from env\n[info] Generated config oidc.refreshTokenReuseInterval\n[info] \u2714 Seed OIDC config\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A partir de ahora, puedes eliminar de manera segura ",(0,a.jsx)(n.code,{children:"OIDC_PRIVATE_KEYS"})," y ",(0,a.jsx)(n.code,{children:"OIDC_COOKIE_KEYS"})," de las variables de entorno. Recuerda reiniciar tu instancia de Logto para que los cambios se reflejen."]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},3768:(e,n,t)=>{t.d(n,{A:()=>s});t(58101);var r=t(13526);const a={tabItem:"tabItem_y6LR"};var o=t(25105);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11043:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(58101),a=t(13526),o=t(32571),s=t(55234),i=t(87394),l=t(87276),c=t(31637),u=t(16063);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=g({queryString:t,groupId:a}),[f,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=t(27034);const b={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var v=t(25105);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function I(e){const n=(0,h.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},79621:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(58101);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);