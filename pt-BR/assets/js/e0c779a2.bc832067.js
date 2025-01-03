"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[43147],{19312:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"logto-oss/using-cli/manage-connectors","title":"Gerenciar conectores","description":"Gerenciar conectores pelo Logto CLI.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-connectors.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/manage-connectors","permalink":"/pt-BR/logto-oss/using-cli/manage-connectors","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-connectors.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":"Gerenciar conectores pelo Logto CLI.","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Instalar Logto","permalink":"/pt-BR/logto-oss/using-cli/install-logto"},"next":{"title":"Altera\xe7\xe3o de banco de dados","permalink":"/pt-BR/logto-oss/using-cli/database-alteration"}}');var t=o(25105),r=o(79621),a=o(54402),s=o(3768),i=o(11043);const l={description:"Gerenciar conectores pelo Logto CLI.",sidebar_position:2},d="Gerenciar conectores",u={},h=[{value:"Listar conectores existentes",id:"list-existing-connectors",level:2},{value:"Adicionar conectores",id:"add-connectors",level:2},{value:"Conectores oficiais",id:"official-connectors",level:3},{value:"Conectores de terceiros",id:"third-party-connectors",level:3},{value:"Vincular conectores locais",id:"link-local-connectors",level:3},{value:"Remover conectores",id:"remove-connectors",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"gerenciar-conectores",children:"Gerenciar conectores"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Para cada comando, voc\xea pode adicionar ",(0,t.jsx)(n.code,{children:"--path /your/path/to/logto"})," (alias ",(0,t.jsx)(n.code,{children:"-p"}),") para especificar o caminho da inst\xe2ncia do Logto."]})}),"\n",(0,t.jsxs)(n.p,{children:["Se o diret\xf3rio de trabalho estiver na raiz de um projeto Logto, voc\xea pode pular o uso da op\xe7\xe3o ",(0,t.jsx)(n.code,{children:"--path"}),", pois o CLI ir\xe1 detect\xe1-lo automaticamente."]}),"\n",(0,t.jsx)(n.h2,{id:"list-existing-connectors",children:"Listar conectores existentes"}),"\n",(0,t.jsx)(n.p,{children:"Use o comando abaixo para listar os conectores existentes que foram adicionados \xe0 sua inst\xe2ncia Logto:"}),"\n",(0,t.jsxs)(i.A,{groupId:"cmd",children:[(0,t.jsx)(s.A,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector list\n"})})}),(0,t.jsx)(s.A,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector list\n"})})}),(0,t.jsx)(s.A,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector list\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Um exemplo de sa\xedda:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"OFFICIAL\n  @logto/connector-alipay-native\n  @logto/connector-aliyun-dm\n  @logto/connector-aliyun-sms\n  @logto/connector-apple\n  @logto/connector-azuread\n\n3RD-PARTY\n  connector-some-third-party\n"})}),"\n",(0,t.jsx)(n.h2,{id:"add-connectors",children:"Adicionar conectores"}),"\n",(0,t.jsx)(n.h3,{id:"official-connectors",children:"Conectores oficiais"}),"\n",(0,t.jsxs)(n.p,{children:["Todos os conectores oficiais est\xe3o listados em ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors",children:"@logto/connectors"}),", exceto aqueles nomes que come\xe7am com ",(0,t.jsx)(n.code,{children:"connector-mock-"})," para fins de teste."]}),"\n",(0,t.jsx)(a.A,{type:"tip",title:"Convoca\xe7\xe3o para colaboradores!",children:(0,t.jsxs)(n.p,{children:["Todo conector \xe9 uma ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/issues/1861",children:"Quest\xe3o de Ca\xe7ador de Recompensas N\xedvel 1"})," por padr\xe3o. Sinta-se \xe0 vontade para comentar ou criar a quest\xe3o relacionada no GitHub para reconhecer um conector se voc\xea estiver interessado."]})}),"\n",(0,t.jsx)(n.p,{children:"Se voc\xea estiver usando a vers\xe3o oficial do Logto (imagem Docker, Docker Compose, download da p\xe1gina de lan\xe7amento do GitHub ou inicializa\xe7\xe3o via CLI), n\xe3o h\xe1 necessidade de adicionar manualmente conectores oficiais."}),"\n",(0,t.jsxs)(i.A,{groupId:"cmd",children:[(0,t.jsx)(s.A,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector add --official\n"})})}),(0,t.jsx)(s.A,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector add --official\n"})})}),(0,t.jsx)(s.A,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector add --official\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"third-party-connectors",children:"Conectores de terceiros"}),"\n",(0,t.jsxs)(n.p,{children:["Conectores de terceiros s\xe3o aqueles feitos para Logto, mas N\xc3O est\xe3o em ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors",children:"@logto/connectors"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["O conector a ser adicionado deve ser um pacote NPM v\xe1lido, e o nome do pacote deve come\xe7ar com ",(0,t.jsx)(n.code,{children:"connector-"})," ou ",(0,t.jsx)(n.code,{children:"@some-org/connector-"}),". Por exemplo:"]}),"\n",(0,t.jsxs)(i.A,{groupId:"cmd",children:[(0,t.jsx)(s.A,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector add service-a connector-service-b @org/service-c\n# \xe9 igual a\nlogto connector add connector-service-a connector-service-b @org/connector-service-c\n"})})}),(0,t.jsx)(s.A,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector add service-a connector-service-b @org/service-c\n# \xe9 igual a\nnpm run cli connector add connector-service-a connector-service-b @org/connector-service-c\n"})})}),(0,t.jsx)(s.A,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector add service-a connector-service-b @org/service-c\n# \xe9 igual a\nnpx @logto/cli connector add connector-service-a connector-service-b @org/connector-service-c\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Conectores s\xe3o c\xf3digos execut\xe1veis! Inspecione e revise o C\xd3DIGO COMPILADO (o conte\xfado baixado do NPM) muito, muito cuidadosamente para evitar poss\xedveis problemas de seguran\xe7a se voc\xea estiver tentando usar um conector de terceiros."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Lembre-se de reiniciar sua inst\xe2ncia Logto para que as altera\xe7\xf5es sejam refletidas."})}),"\n",(0,t.jsx)(n.h3,{id:"link-local-connectors",children:"Vincular conectores locais"}),"\n",(0,t.jsxs)(n.p,{children:["O Logto tamb\xe9m vem com um conjunto de conectores pr\xe9-constru\xeddos no ",(0,t.jsx)(n.code,{children:"<logto-root>/packages/connectors"})," do diret\xf3rio da sua inst\xe2ncia Logto. Eles est\xe3o vinculados ao servi\xe7o principal por padr\xe3o, o que voc\xea pode vincular manualmente novamente para atualiza\xe7\xf5es (por exemplo, adicionar um novo conector local)."]}),"\n",(0,t.jsxs)(i.A,{groupId:"cmd",children:[(0,t.jsx)(s.A,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector link\n"})})}),(0,t.jsx)(s.A,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector link\n"})})}),(0,t.jsx)(s.A,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector link\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Este comando criar\xe1 links simb\xf3licos de cada conector em ",(0,t.jsx)(n.code,{children:"<logto-root>/packages/connectors"})," para ",(0,t.jsx)(n.code,{children:"<logto-root>/packages/core/connectors"}),". Se um conector com o mesmo nome j\xe1 existir em ",(0,t.jsx)(n.code,{children:"packages/core/connectors"}),", ele ser\xe1 removido primeiro."]}),"\n",(0,t.jsx)(n.h2,{id:"remove-connectors",children:"Remover conectores"}),"\n",(0,t.jsxs)(i.A,{groupId:"cmd",children:[(0,t.jsx)(s.A,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector remove connector-service-a @org/connector-service-b\n"})})}),(0,t.jsx)(s.A,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector remove connector-service-a @org/connector-service-b\n"})})}),(0,t.jsx)(s.A,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector remove connector-service-a @org/connector-service-b\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Lembre-se de reiniciar sua inst\xe2ncia Logto para que as altera\xe7\xf5es sejam refletidas."})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},54402:(e,n,o)=>{o.d(n,{A:()=>I});var c=o(58101),t=o(25105);function r(e){const{mdxAdmonitionTitle:n,rest:o}=function(e){const n=c.Children.toArray(e),o=n.find((e=>c.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==o)),a=o?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,t.jsx)(t.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:o}}var a=o(13526),s=o(15759),i=o(74479);function l(e){return(0,t.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const d={icon:(0,t.jsx)(l,{}),title:(0,t.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function u(e){return(0,t.jsx)(i.A,{...d,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function h(e){return(0,t.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const m={icon:(0,t.jsx)(h,{}),title:(0,t.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(e){return(0,t.jsx)(i.A,{...m,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function x(e){return(0,t.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const g={icon:(0,t.jsx)(x,{}),title:(0,t.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function v(e){return(0,t.jsx)(i.A,{...g,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function j(e){return(0,t.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const f={icon:(0,t.jsx)(j,{}),title:(0,t.jsx)(s.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function b(e){return(0,t.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const A={icon:(0,t.jsx)(b,{}),title:(0,t.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const N={icon:(0,t.jsx)(j,{}),title:(0,t.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const y={...{note:u,tip:p,info:v,warning:function(e){return(0,t.jsx)(i.A,{...f,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,t.jsx)(i.A,{...A,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,t.jsx)(u,{title:"secondary",...e}),important:e=>(0,t.jsx)(v,{title:"important",...e}),success:e=>(0,t.jsx)(p,{title:"success",...e}),caution:function(e){return(0,t.jsx)(i.A,{...N,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function I(e){const n=r(e),o=(c=n.type,y[c]||(console.warn(`No admonition component found for admonition type "${c}". Using Info as fallback.`),y.info));var c;return(0,t.jsx)(o,{...n})}},3768:(e,n,o)=>{o.d(n,{A:()=>a});o(58101);var c=o(13526);const t={tabItem:"tabItem_y6LR"};var r=o(25105);function a(e){let{children:n,hidden:o,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,c.A)(t.tabItem,a),hidden:o,children:n})}},11043:(e,n,o)=>{o.d(n,{A:()=>N});var c=o(58101),t=o(13526),r=o(32571),a=o(55234),s=o(87394),i=o(87276),l=o(31637),d=o(16063);function u(e){return c.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,c.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,c.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:c,default:t}}=e;return{value:n,label:o,attributes:c,default:t}}))}(o);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function m(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const t=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,i.aZ)(r),(0,c.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function x(e){const{defaultValue:n,queryString:o=!1,groupId:t}=e,r=h(e),[a,i]=(0,c.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const c=o.find((e=>e.default))??o[0];if(!c)throw new Error("Unexpected error: 0 tabValues");return c.value}({defaultValue:n,tabValues:r}))),[l,u]=p({queryString:o,groupId:t}),[x,g]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,d.Dv)(o);return[t,(0,c.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:t}),v=(()=>{const e=l??x;return m({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:a,selectValue:(0,c.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var g=o(27034);const v={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var j=o(25105);function f(e){let{className:n,block:o,selectedValue:c,selectValue:a,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,o=i.indexOf(n),t=s[o].value;t!==c&&(l(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=i.indexOf(e.currentTarget)+1;n=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(e.currentTarget)-1;n=i[o]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":o},n),children:s.map((e=>{let{value:n,label:o,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,t.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":c===n}),children:o??n},n)}))})}function b(e){let{lazy:n,children:o,selectedValue:r}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,c.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,c.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function A(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function N(e){const n=(0,g.A)();return(0,j.jsx)(A,{...e,children:u(e.children)},String(n))}},74479:(e,n,o)=>{o.d(n,{A:()=>l});var c=o(88172),t=o(13526);const r={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb",content:"content_hlIx",title:"title_towL"};var a=o(25105);function s(e){let{type:n,className:o,children:s}=e;return(0,a.jsx)("div",{className:(0,t.A)(c.G.common.admonition,c.G.common.admonitionType(n),r.admonition,o),children:s})}function i(e){let{children:n}=e;return n?(0,a.jsx)("div",{className:r.admonitionContent,children:n}):null}function l(e){const{type:n,title:o,children:c,className:t}=e;return(0,a.jsx)(s,{type:n,className:t,children:(0,a.jsx)(i,{children:(0,a.jsxs)("div",{className:r.content,children:[(0,a.jsxs)("span",{className:r.title,"data-type":"title",children:[o,":"]}),c]})})})}},79621:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var c=o(58101);const t={},r=c.createContext(t);function a(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);