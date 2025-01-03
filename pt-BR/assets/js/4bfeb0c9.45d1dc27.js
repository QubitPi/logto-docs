"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[91348],{26727:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"logto-oss/get-started-with-oss","title":"Comece com OSS","description":"Guias de in\xedcio r\xe1pido para a inicializa\xe7\xe3o do servi\xe7o open-source (OSS) do Logto.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/get-started-with-oss.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/get-started-with-oss","permalink":"/pt-BR/logto-oss/get-started-with-oss","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/get-started-with-oss.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"Guias de in\xedcio r\xe1pido para a inicializa\xe7\xe3o do servi\xe7o open-source (OSS) do Logto.","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Logto OSS","permalink":"/pt-BR/logto-oss/"},"next":{"title":"Implanta\xe7\xe3o e configura\xe7\xe3o","permalink":"/pt-BR/logto-oss/deployment-and-configuration"}}');var n=r(25105),s=r(79621),t=r(3768),i=r(11043);const l=r.p+"assets/images/gitpod-running-9ccf680a2482a3146703b6097d62f0a5.png",c={description:"Guias de in\xedcio r\xe1pido para a inicializa\xe7\xe3o do servi\xe7o open-source (OSS) do Logto.",sidebar_position:1},d="Comece com OSS",u={},p=[{value:"GitPod",id:"gitpod",level:2},{value:"Local",id:"local",level:2},{value:"Usando uma URL alternativa para download",id:"using-an-alternative-url-for-downloading",level:3},{value:"Configura\xe7\xe3o (opcional)",id:"configuration-optional",level:3},{value:"Criar uma conta",id:"create-an-account",level:2},{value:"Recursos relacionados",id:"related-resources",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:r,Url:a}=o;return r||g("Details",!0),a||g("Url",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"comece-com-oss",children:"Comece com OSS"})}),"\n",(0,n.jsx)(o.h2,{id:"gitpod",children:"GitPod"}),"\n",(0,n.jsxs)(o.p,{children:["Para iniciar um espa\xe7o de trabalho online do GitPod para Logto, ",(0,n.jsx)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener",children:"clique aqui"}),". Aguarde alguns momentos, voc\xea ver\xe1 a mensagem como:"]}),"\n",(0,n.jsx)("p",{children:(0,n.jsx)("img",{src:l,alt:"Gitpod est\xe1 em execu\xe7\xe3o",width:"720px",style:{borderRadius:"4px"}})}),"\n",(0,n.jsxs)(o.p,{children:["Logto usa a porta ",(0,n.jsx)(o.code,{children:"3001"})," para seu servi\xe7o principal e a porta ",(0,n.jsx)(o.code,{children:"3002"})," para o Console de Administra\xe7\xe3o interativo por padr\xe3o."]}),"\n",(0,n.jsxs)(o.p,{children:["Para continuar sua jornada com Logto, pressione Ctrl (ou Cmd) e clique no link que come\xe7a com ",(0,n.jsx)(o.code,{children:"https://3002-..."}),". Aproveite!"]}),"\n",(0,n.jsx)(o.h2,{id:"local",children:"Local"}),"\n",(0,n.jsx)(o.p,{children:"Os requisitos m\xednimos recomendados de hardware para hospedar Logto s\xe3o:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"vCPU"}),": 2"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Mem\xf3ria"}),": 8 GiB"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Disco"}),": 256 GiB"]}),"\n"]}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(t.A,{value:"docker-compose",label:"Docker Compose",children:[(0,n.jsxs)(o.p,{children:["Docker Compose CLI geralmente vem com ",(0,n.jsx)(o.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"}),"."]}),(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsxs)(o.p,{children:["N\xe3o use nosso comando docker compose para produ\xe7\xe3o! Como atualmente temos um banco de dados Postgres embutido junto com o aplicativo Logto em ",(0,n.jsx)(o.code,{children:"docker-compose.yml"}),",\ntoda vez que voc\xea reexecutar o comando, uma nova inst\xe2ncia de banco de dados ser\xe1 criada, e qualquer dado persistido anteriormente ser\xe1 perdido."]})}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | docker compose -p logto -f - up\n"})}),(0,n.jsx)(o.p,{children:"Ap\xf3s uma composi\xe7\xe3o bem-sucedida, voc\xea ver\xe1 a mensagem como:"})]}),(0,n.jsxs)(t.A,{value:"docker",label:"Docker",children:[(0,n.jsx)("h3",{children:"Passo 1"}),(0,n.jsxs)(o.p,{children:["Prepare uma inst\xe2ncia do ",(0,n.jsx)(o.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),"@^14.0 e use o ",(0,n.jsx)(o.a,{href:"/logto-oss/using-cli",children:"Logto CLI"})," para semear um banco de dados para Logto:"]}),(0,n.jsxs)(i.A,{groupId:"cmd",children:[(0,n.jsx)(t.A,{value:"cli",label:"CLI",children:(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"logto db seed\n"})})}),(0,n.jsx)(t.A,{value:"npx",label:"npx",children:(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"npx @logto/cli db seed\n"})})})]}),(0,n.jsx)("h3",{children:"Passo 2"}),(0,n.jsx)(o.p,{children:"Puxe a imagem:"}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"# ghcr\ndocker pull ghcr.io/logto-io/logto:latest\n# DockerHub\ndocker pull svhd/logto:latest\n"})}),(0,n.jsx)("h3",{children:"Passo 3"}),(0,n.jsxs)(o.p,{children:["Mapeie as portas do cont\xeainer para o n\xfacleo do Logto e o aplicativo de administra\xe7\xe3o, por exemplo, ",(0,n.jsx)(o.code,{children:"3001:3001"})," e ",(0,n.jsx)(o.code,{children:"3002:3002"}),"; e defina as seguintes vari\xe1veis de ambiente para o cont\xeainer:"]}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-yml",children:"TRUST_PROXY_HEADER: 1 # Defina como 1 se voc\xea tiver um proxy HTTPS (por exemplo, Nginx) na frente do Logto\nENDPOINT: https://<your-logto-domain> # (Opcional) Substitua pela URL do seu endpoint Logto se estiver usando um dom\xednio personalizado\nADMIN_ENDPOINT: https://<your-logto-admin-domain> # (Opcional) Substitua pela URL do seu admin Logto se estiver usando um dom\xednio personalizado\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Substitua pelo seu DSN do Postgres\n"})}),(0,n.jsx)(o.p,{children:"Execute o cont\xeainer com todas as vari\xe1veis de ambiente acima:"}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker run \\\n  --name logto \\\n  -p 3001:3001 \\\n  -p 3002:3002 \\\n  -e TRUST_PROXY_HEADER=1 \\\n  -e ENDPOINT=https://<your-logto-domain> \\\n  -e ADMIN_ENDPOINT=https://<your-logto-admin-domain> \\\n  -e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\n  ghcr.io/logto-io/logto:latest\n"})}),(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Se voc\xea estiver usando o Docker Hub, use ",(0,n.jsx)(o.code,{children:"svhd/logto:latest"})," em vez de ",(0,n.jsx)(o.code,{children:"ghcr.io/logto-io/logto:latest"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Use ",(0,n.jsx)(o.code,{children:"host.docker.internal"})," ou ",(0,n.jsx)(o.code,{children:"172.17.0.1"})," em ",(0,n.jsx)(o.code,{children:"DB_URL"})," para se referir ao IP do host."]}),"\n"]})}),(0,n.jsx)(o.p,{children:"Finalmente, voc\xea ver\xe1 a mensagem como:"})]}),(0,n.jsxs)(t.A,{value:"npm",label:"npm-init",children:[(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Pr\xe9-requisitos"})}),(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,n.jsx)(o.code,{children:"^18.12.0"})]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"https://postgresql.org/",children:"PostgreSQL"})," ",(0,n.jsx)(o.code,{children:"^14.0"})]}),"\n"]}),(0,n.jsx)(o.p,{children:"Vers\xf5es superiores geralmente funcionam, mas n\xe3o s\xe3o garantidas."}),(0,n.jsx)(o.p,{children:"Recomendamos usar um novo banco de dados vazio dedicado ao Logto, embora n\xe3o seja um requisito r\xedgido."}),(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Download e in\xedcio"})}),(0,n.jsx)(o.p,{children:"No seu terminal:"}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"npm init @logto@latest\n"})}),(0,n.jsx)(o.p,{children:"Uma vez que voc\xea complete o processo de inicializa\xe7\xe3o e inicie o Logto, voc\xea ver\xe1 a mensagem como:"})]})]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-text",children:"O aplicativo principal est\xe1 em execu\xe7\xe3o em http://localhost:3001\nO aplicativo principal est\xe1 em execu\xe7\xe3o em https://your-domain-url\nO aplicativo de administra\xe7\xe3o est\xe1 em execu\xe7\xe3o em http://localhost:3002\nO aplicativo de administra\xe7\xe3o est\xe1 em execu\xe7\xe3o em https://your-admin-domain-url\n"})}),"\n",(0,n.jsxs)(o.p,{children:["V\xe1 para ",(0,n.jsx)(o.code,{children:"http://localhost:3002/"})," para continuar sua jornada com Logto. Aproveite!"]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(o.h3,{id:"using-an-alternative-url-for-downloading",children:"Usando uma URL alternativa para download"})}),(0,n.jsxs)(o.p,{children:["Se voc\xea quiser especificar uma URL para o arquivo zip do Logto, use a op\xe7\xe3o ",(0,n.jsx)(o.code,{children:"--download-url"}),". Por exemplo:"]}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"npm init @logto@latest -- --download-url=https://github.com/logto-io/logto/releases/download/v1.2.2/logto.tar.gz\n"})}),(0,n.jsxs)(o.p,{children:["Note que o extra ",(0,n.jsx)(o.code,{children:"--"})," \xe9 necess\xe1rio para o NPM passar os argumentos."]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(o.h3,{id:"configuration-optional",children:"Configura\xe7\xe3o (opcional)"})}),(0,n.jsxs)(o.p,{children:["Logto usa vari\xe1veis de ambiente para configura\xe7\xe3o, junto com suporte a arquivos ",(0,n.jsx)(o.code,{children:".env"}),". Veja ",(0,n.jsx)(o.a,{href:"/concepts/core-service/configuration",children:"Configura\xe7\xe3o"})," para uso detalhado e lista completa de vari\xe1veis."]})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsxs)(o.em,{children:["Confira ",(0,n.jsx)(o.a,{href:"/concepts/core-service",children:"Core service"})," se voc\xea quiser controles mais avan\xe7ados ou acesso program\xe1tico ao Logto."]})}),"\n",(0,n.jsx)(o.h2,{id:"create-an-account",children:"Criar uma conta"}),"\n",(0,n.jsx)(o.p,{children:'Depois de hospedar com sucesso o Logto no seu servidor, clique em "Criar conta" na p\xe1gina de boas-vindas. Lembre-se de que a vers\xe3o open-source do Logto permite apenas a cria\xe7\xe3o de uma conta durante o lan\xe7amento inicial e n\xe3o suporta m\xfaltiplas contas. O processo de cria\xe7\xe3o de conta \xe9 limitado a combina\xe7\xf5es de nome de usu\xe1rio e senha.'}),"\n",(0,n.jsx)(o.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,n.jsx)(a,{href:"https://blog.logto.io/local-https",children:"Lidando com desenvolvimento local HTTPS"})]})}function m(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function g(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3768:(e,o,r)=>{r.d(o,{A:()=>t});r(58101);var a=r(13526);const n={tabItem:"tabItem_y6LR"};var s=r(25105);function t(e){let{children:o,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,t),hidden:r,children:o})}},11043:(e,o,r)=>{r.d(o,{A:()=>y});var a=r(58101),n=r(13526),s=r(32571),t=r(55234),i=r(87394),l=r(87276),c=r(31637),d=r(16063);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:o,children:r}=e;return(0,a.useMemo)((()=>{const e=o??function(e){return u(e).map((e=>{let{props:{value:o,label:r,attributes:a,default:n}}=e;return{value:o,label:r,attributes:a,default:n}}))}(r);return function(e){const o=(0,c.XI)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,r])}function h(e){let{value:o,tabValues:r}=e;return r.some((e=>e.value===o))}function m(e){let{queryString:o=!1,groupId:r}=e;const n=(0,t.W6)(),s=function(e){let{queryString:o=!1,groupId:r}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:o,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const o=new URLSearchParams(n.location.search);o.set(s,e),n.replace({...n.location,search:o.toString()})}),[s,n])]}function g(e){const{defaultValue:o,queryString:r=!1,groupId:n}=e,s=p(e),[t,l]=(0,a.useState)((()=>function(e){let{defaultValue:o,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!h({value:o,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:s}))),[c,u]=m({queryString:r,groupId:n}),[g,x]=function(e){let{groupId:o}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(o),[n,s]=(0,d.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),j=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=r(27034);const j={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var v=r(25105);function b(e){let{className:o,block:r,selectedValue:a,selectValue:t,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const o=e.currentTarget,r=l.indexOf(o),n=i[r].value;n!==a&&(c(o),t(n))},u=e=>{let o=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;o=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;o=l[r]??l[l.length-1];break}}o?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},o),children:i.map((e=>{let{value:o,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===o?0:-1,"aria-selected":a===o,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,n.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===o}),children:r??o},o)}))})}function f(e){let{lazy:o,children:r,selectedValue:s}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(o){const e=t.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,o)=>(0,a.cloneElement)(e,{key:o,hidden:e.props.value!==s})))})}function w(e){const o=g(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...o,...e}),(0,v.jsx)(f,{...o,...e})]})}function y(e){const o=(0,x.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(o))}},79621:(e,o,r)=>{r.d(o,{R:()=>t,x:()=>i});var a=r(58101);const n={},s=a.createContext(n);function t(e){const o=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);