"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[40063],{82504:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"logto-oss/using-cli/manage-connectors","title":"G\xe9rer les connecteurs","description":"G\xe9rer les connecteurs avec Logto CLI.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-connectors.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/manage-connectors","permalink":"/fr/logto-oss/using-cli/manage-connectors","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-connectors.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":"G\xe9rer les connecteurs avec Logto CLI.","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Installer Logto","permalink":"/fr/logto-oss/using-cli/install-logto"},"next":{"title":"Modification de base de donn\xe9es","permalink":"/fr/logto-oss/using-cli/database-alteration"}}');var r=o(25105),c=o(79621),s=o(54402),l=o(3768),i=o(11043);const a={description:"G\xe9rer les connecteurs avec Logto CLI.",sidebar_position:2},d="G\xe9rer les connecteurs",u={},h=[{value:"Lister les connecteurs existants",id:"list-existing-connectors",level:2},{value:"Ajouter des connecteurs",id:"add-connectors",level:2},{value:"Connecteurs officiels",id:"official-connectors",level:3},{value:"Connecteurs tiers",id:"third-party-connectors",level:3},{value:"Lier les connecteurs locaux",id:"link-local-connectors",level:3},{value:"Supprimer des connecteurs",id:"remove-connectors",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"g\xe9rer-les-connecteurs",children:"G\xe9rer les connecteurs"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Pour chaque commande, vous pouvez ajouter ",(0,r.jsx)(n.code,{children:"--path /your/path/to/logto"})," (alias ",(0,r.jsx)(n.code,{children:"-p"}),") pour sp\xe9cifier le chemin de l'instance Logto."]})}),"\n",(0,r.jsxs)(n.p,{children:["Si le r\xe9pertoire de travail est \xe0 la racine d'un projet Logto, vous pouvez ignorer l'utilisation de l'option ",(0,r.jsx)(n.code,{children:"--path"})," car le CLI le d\xe9tectera automatiquement."]}),"\n",(0,r.jsx)(n.h2,{id:"list-existing-connectors",children:"Lister les connecteurs existants"}),"\n",(0,r.jsx)(n.p,{children:"Utilisez la commande ci-dessous pour lister les connecteurs existants qui ont \xe9t\xe9 ajout\xe9s \xe0 votre instance Logto :"}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto connector list\n"})})}),(0,r.jsx)(l.A,{value:"local",label:"Local",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run cli connector list\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector list\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Un exemple de sortie :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"OFFICIAL\n  @logto/connector-alipay-native\n  @logto/connector-aliyun-dm\n  @logto/connector-aliyun-sms\n  @logto/connector-apple\n  @logto/connector-azuread\n\n3RD-PARTY\n  connector-some-third-party\n"})}),"\n",(0,r.jsx)(n.h2,{id:"add-connectors",children:"Ajouter des connecteurs"}),"\n",(0,r.jsx)(n.h3,{id:"official-connectors",children:"Connecteurs officiels"}),"\n",(0,r.jsxs)(n.p,{children:["Tous les connecteurs officiels sont list\xe9s dans ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors",children:"@logto/connectors"}),", sauf ceux dont les noms commencent par ",(0,r.jsx)(n.code,{children:"connector-mock-"})," \xe0 des fins de test."]}),"\n",(0,r.jsx)(s.A,{type:"tip",title:"Appel aux contributeurs !",children:(0,r.jsxs)(n.p,{children:["Chaque connecteur est par d\xe9faut un ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/logto/issues/1861",children:"probl\xe8me de chasseur de primes de niveau 1"}),". N'h\xe9sitez pas \xe0 commenter ou \xe0 cr\xe9er le probl\xe8me GitHub li\xe9 pour reconna\xeetre un connecteur si vous \xeates int\xe9ress\xe9."]})}),"\n",(0,r.jsx)(n.p,{children:"Si vous utilisez la version officielle de Logto (image Docker, Docker Compose, t\xe9l\xe9chargement depuis la page de version GitHub, ou initialisation via CLI), il n'est pas n\xe9cessaire d'ajouter manuellement les connecteurs officiels."}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto connector add --official\n"})})}),(0,r.jsx)(l.A,{value:"local",label:"Local",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run cli connector add --official\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector add --official\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"third-party-connectors",children:"Connecteurs tiers"}),"\n",(0,r.jsxs)(n.p,{children:["Les connecteurs tiers sont ceux cr\xe9\xe9s pour Logto mais NON dans ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors",children:"@logto/connectors"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Le connecteur \xe0 ajouter doit \xeatre un package NPM valide, et le nom du package doit commencer par ",(0,r.jsx)(n.code,{children:"connector-"})," ou ",(0,r.jsx)(n.code,{children:"@some-org/connector-"}),". Par exemple :"]}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto connector add service-a connector-service-b @org/service-c\n# est \xe9quivalent \xe0\nlogto connector add connector-service-a connector-service-b @org/connector-service-c\n"})})}),(0,r.jsx)(l.A,{value:"local",label:"Local",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run cli connector add service-a connector-service-b @org/service-c\n# est \xe9quivalent \xe0\nnpm run cli connector add connector-service-a connector-service-b @org/connector-service-c\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector add service-a connector-service-b @org/service-c\n# est \xe9quivalent \xe0\nnpx @logto/cli connector add connector-service-a connector-service-b @org/connector-service-c\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Les connecteurs sont du code ex\xe9cutable ! Inspectez et examinez tr\xe8s, tr\xe8s attentivement le CODE COMPIL\xc9 (le contenu t\xe9l\xe9charg\xe9 depuis NPM) pour \xe9viter les probl\xe8mes de s\xe9curit\xe9 potentiels si vous essayez d'utiliser un connecteur tiers."})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"N'oubliez pas de red\xe9marrer votre instance Logto pour que les modifications soient prises en compte."})}),"\n",(0,r.jsx)(n.h3,{id:"link-local-connectors",children:"Lier les connecteurs locaux"}),"\n",(0,r.jsxs)(n.p,{children:["Logto est \xe9galement livr\xe9 avec un ensemble de connecteurs pr\xe9construits dans le r\xe9pertoire ",(0,r.jsx)(n.code,{children:"<logto-root>/packages/connectors"})," de votre instance Logto. Ils sont li\xe9s au service principal par d\xe9faut, que vous pouvez relier manuellement pour les mises \xe0 jour (par exemple, ajouter un nouveau connecteur local)."]}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto connector link\n"})})}),(0,r.jsx)(l.A,{value:"local",label:"Local",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run cli connector link\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector link\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Cette commande cr\xe9era des liens symboliques de chaque connecteur dans ",(0,r.jsx)(n.code,{children:"<logto-root>/packages/connectors"})," vers ",(0,r.jsx)(n.code,{children:"<logto-root>/packages/core/connectors"}),". Si un connecteur portant le m\xeame nom existe d\xe9j\xe0 dans ",(0,r.jsx)(n.code,{children:"packages/core/connectors"}),", il sera d'abord supprim\xe9."]}),"\n",(0,r.jsx)(n.h2,{id:"remove-connectors",children:"Supprimer des connecteurs"}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto connector remove connector-service-a @org/connector-service-b\n"})})}),(0,r.jsx)(l.A,{value:"local",label:"Local",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run cli connector remove connector-service-a @org/connector-service-b\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector remove connector-service-a @org/connector-service-b\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"N'oubliez pas de red\xe9marrer votre instance Logto pour que les modifications soient prises en compte."})})]})}function m(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},54402:(e,n,o)=>{o.d(n,{A:()=>I});var t=o(58101),r=o(25105);function c(e){const{mdxAdmonitionTitle:n,rest:o}=function(e){const n=t.Children.toArray(e),o=n.find((e=>t.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),c=n.filter((e=>e!==o)),s=o?.props.children;return{mdxAdmonitionTitle:s,rest:c.length>0?(0,r.jsx)(r.Fragment,{children:c}):null}}(e.children),c=e.title??n;return{...e,...c&&{title:c},children:o}}var s=o(13526),l=o(15759),i=o(74479);function a(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const d={icon:(0,r.jsx)(a,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function u(e){return(0,r.jsx)(i.A,{...d,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function h(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const p={icon:(0,r.jsx)(h,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function m(e){return(0,r.jsx)(i.A,{...p,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function x(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const g={icon:(0,r.jsx)(x,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function v(e){return(0,r.jsx)(i.A,{...g,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function f(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const j={icon:(0,r.jsx)(f,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function b(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const A={icon:(0,r.jsx)(b,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const N={icon:(0,r.jsx)(f,{}),title:(0,r.jsx)(l.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const y={...{note:u,tip:m,info:v,warning:function(e){return(0,r.jsx)(i.A,{...j,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(i.A,{...A,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,r.jsx)(u,{title:"secondary",...e}),important:e=>(0,r.jsx)(v,{title:"important",...e}),success:e=>(0,r.jsx)(m,{title:"success",...e}),caution:function(e){return(0,r.jsx)(i.A,{...N,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}};function I(e){const n=c(e),o=(t=n.type,y[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),y.info));var t;return(0,r.jsx)(o,{...n})}},3768:(e,n,o)=>{o.d(n,{A:()=>s});o(58101);var t=o(13526);const r={tabItem:"tabItem_y6LR"};var c=o(25105);function s(e){let{children:n,hidden:o,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:o,children:n})}},11043:(e,n,o)=>{o.d(n,{A:()=>N});var t=o(58101),r=o(13526),c=o(32571),s=o(55234),l=o(87394),i=o(87276),a=o(31637),d=o(16063);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:r}}=e;return{value:n,label:o,attributes:t,default:r}}))}(o);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:o}=e;const r=(0,s.W6)(),c=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,i.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(r.location.search);n.set(c,e),r.replace({...r.location,search:n.toString()})}),[c,r])]}function x(e){const{defaultValue:n,queryString:o=!1,groupId:r}=e,c=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:c}))),[a,u]=m({queryString:o,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,c]=(0,d.Dv)(o);return[r,(0,t.useCallback)((e=>{o&&c.set(e)}),[o,c])]}({groupId:r}),v=(()=>{const e=a??x;return p({value:e,tabValues:c})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,c]),tabValues:c}}var g=o(27034);const v={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var f=o(25105);function j(e){let{className:n,block:o,selectedValue:t,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:a}=(0,c.a_)(),d=e=>{const n=e.currentTarget,o=i.indexOf(n),r=l[o].value;r!==t&&(a(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=i.indexOf(e.currentTarget)+1;n=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(e.currentTarget)-1;n=i[o]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},n),children:l.map((e=>{let{value:n,label:o,attributes:c}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...c,className:(0,r.A)("tabs__item",v.tabItem,c?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function b(e){let{lazy:n,children:o,selectedValue:c}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===c));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function A(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function N(e){const n=(0,g.A)();return(0,f.jsx)(A,{...e,children:u(e.children)},String(n))}},74479:(e,n,o)=>{o.d(n,{A:()=>a});var t=o(88172),r=o(13526);const c={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb",content:"content_hlIx",title:"title_towL"};var s=o(25105);function l(e){let{type:n,className:o,children:l}=e;return(0,s.jsx)("div",{className:(0,r.A)(t.G.common.admonition,t.G.common.admonitionType(n),c.admonition,o),children:l})}function i(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:c.admonitionContent,children:n}):null}function a(e){const{type:n,title:o,children:t,className:r}=e;return(0,s.jsx)(l,{type:n,className:r,children:(0,s.jsx)(i,{children:(0,s.jsxs)("div",{className:c.content,children:[(0,s.jsxs)("span",{className:c.title,"data-type":"title",children:[o,":"]}),t]})})})}},79621:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(58101);const r={},c=t.createContext(r);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);