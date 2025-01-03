"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[27098],{18410:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"logto-oss/get-started-with-oss","title":"Get started with OSS","description":"Quick start guides for Logto open-source service (OSS) initialization.","source":"@site/docs/logto-oss/get-started-with-oss.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/get-started-with-oss","permalink":"/logto-oss/get-started-with-oss","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/logto-oss/get-started-with-oss.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"Quick start guides for Logto open-source service (OSS) initialization.","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Logto OSS","permalink":"/logto-oss/"},"next":{"title":"Deployment and configuration","permalink":"/logto-oss/deployment-and-configuration"}}');var r=t(25105),s=t(79621),a=t(3768),l=t(11043);const i=t.p+"assets/images/gitpod-running-9ccf680a2482a3146703b6097d62f0a5.png",c={description:"Quick start guides for Logto open-source service (OSS) initialization.",sidebar_position:1},d="Get started with OSS",u={},h=[{value:"GitPod",id:"gitpod",level:2},{value:"Local",id:"local",level:2},{value:"Using an alternative URL for downloading",id:"using-an-alternative-url-for-downloading",level:3},{value:"Configuration (optional)",id:"configuration-optional",level:3},{value:"Create an account",id:"create-an-account",level:2},{value:"Related resources",id:"related-resources",level:2}];function p(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t,Url:n}=o;return t||m("Details",!0),n||m("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"get-started-with-oss",children:"Get started with OSS"})}),"\n",(0,r.jsx)(o.h2,{id:"gitpod",children:"GitPod"}),"\n",(0,r.jsxs)(o.p,{children:["To start an online GitPod workspace for Logto, ",(0,r.jsx)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener",children:"click here"}),". Wait a few moment, you'll see the message like:"]}),"\n",(0,r.jsx)("p",{children:(0,r.jsx)("img",{src:i,alt:"Gitpod is running",width:"720px",style:{borderRadius:"4px"}})}),"\n",(0,r.jsxs)(o.p,{children:["Logto uses port ",(0,r.jsx)(o.code,{children:"3001"})," for its core service and port ",(0,r.jsx)(o.code,{children:"3002"})," for the interactive Admin Console by default."]}),"\n",(0,r.jsxs)(o.p,{children:["To continue your Logto journey, press Ctrl (or Cmd) and click the link that starts with ",(0,r.jsx)(o.code,{children:"https://3002-..."}),". Enjoy!"]}),"\n",(0,r.jsx)(o.h2,{id:"local",children:"Local"}),"\n",(0,r.jsx)(o.p,{children:"The minimum recommended hardware requirements for hosting Logto are:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"vCPU"}),": 2"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Memory"}),": 8 GiB"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Disk"}),": 256 GiB"]}),"\n"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsxs)(a.A,{value:"docker-compose",label:"Docker Compose",children:[(0,r.jsxs)(o.p,{children:["Docker Compose CLI usually comes with ",(0,r.jsx)(o.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"}),"."]}),(0,r.jsx)(o.admonition,{type:"caution",children:(0,r.jsxs)(o.p,{children:["Do not use our docker compose command for production! Since we currently have a built-in Postgres database bundled together with the Logto app in ",(0,r.jsx)(o.code,{children:"docker-compose.yml"}),",\nevery time you re-execute the command a new database instance will be created, and any data persisted previously will be lost."]})}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | docker compose -p logto -f - up\n"})}),(0,r.jsx)(o.p,{children:"After a successful composition, you will see the message like:"})]}),(0,r.jsxs)(a.A,{value:"docker",label:"Docker",children:[(0,r.jsx)("h3",{children:"Step 1"}),(0,r.jsxs)(o.p,{children:["Prepare a ",(0,r.jsx)(o.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),"@^14.0 instance, and using ",(0,r.jsx)(o.a,{href:"/logto-oss/using-cli",children:"Logto CLI"})," to seed a database for Logto:"]}),(0,r.jsxs)(l.A,{groupId:"cmd",children:[(0,r.jsx)(a.A,{value:"cli",label:"CLI",children:(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"logto db seed\n"})})}),(0,r.jsx)(a.A,{value:"npx",label:"npx",children:(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"npx @logto/cli db seed\n"})})})]}),(0,r.jsx)("h3",{children:"Step 2"}),(0,r.jsx)(o.p,{children:"Pull the image:"}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"# ghcr\ndocker pull ghcr.io/logto-io/logto:latest\n# DockerHub\ndocker pull svhd/logto:latest\n"})}),(0,r.jsx)("h3",{children:"Step 3"}),(0,r.jsxs)(o.p,{children:["Map the container ports to Logto core and admin app, e.g., ",(0,r.jsx)(o.code,{children:"3001:3001"})," and ",(0,r.jsx)(o.code,{children:"3002:3002"}),"; and set the following environment variables to the container:"]}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yml",children:"TRUST_PROXY_HEADER: 1 # Set to 1 if you have an HTTPS proxy (e.g. Nginx) in front of Logto\nENDPOINT: https://<your-logto-domain> # (Optional) Replace with your Logto endpoint URL if you are using a custom domain\nADMIN_ENDPOINT: https://<your-logto-admin-domain> # (Optional) Replace with your Logto admin URL if you are using a custom domain\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Replace with your Postgres DSN\n"})}),(0,r.jsx)(o.p,{children:"Run the container with all the environment variables above:"}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"docker run \\\n  --name logto \\\n  -p 3001:3001 \\\n  -p 3002:3002 \\\n  -e TRUST_PROXY_HEADER=1 \\\n  -e ENDPOINT=https://<your-logto-domain> \\\n  -e ADMIN_ENDPOINT=https://<your-logto-admin-domain> \\\n  -e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\n  ghcr.io/logto-io/logto:latest\n"})}),(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["If you are using Docker Hub, use ",(0,r.jsx)(o.code,{children:"svhd/logto:latest"})," instead of ",(0,r.jsx)(o.code,{children:"ghcr.io/logto-io/logto:latest"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Use ",(0,r.jsx)(o.code,{children:"host.docker.internal"})," or ",(0,r.jsx)(o.code,{children:"172.17.0.1"})," in ",(0,r.jsx)(o.code,{children:"DB_URL"})," to refer to the host IP."]}),"\n"]})}),(0,r.jsx)(o.p,{children:"Finally, you will see the message like:"})]}),(0,r.jsxs)(a.A,{value:"npm",label:"npm-init",children:[(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Prerequisites"})}),(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,r.jsx)(o.code,{children:"^18.12.0"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://postgresql.org/",children:"PostgreSQL"})," ",(0,r.jsx)(o.code,{children:"^14.0"})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Install PostgreSQL on Mac"}),(0,r.jsx)(o.p,{children:"In case we would like to test a deployment, we could install a local PostgreSQL on, for example, Mac with homebrew:"}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"brew install postgresql@15\necho 'export PATH=\"/usr/local/opt/postgresql@15/bin:$PATH\"' >> /Users/.../.bash_profile\nbrew services start postgresql@15\n"})}),(0,r.jsx)(o.p,{children:"Let's create a DB with"}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'$ psql postgres\npsql (15.5 (Homebrew))\nType "help" for help.\n\npostgres=# CREATE DATABASE logto;\n'})}),(0,r.jsxs)(o.p,{children:["This database will be accessible via ",(0,r.jsx)(o.code,{children:"postgresql://localhost:5432/logto"})]})]}),"\n"]}),"\n"]}),(0,r.jsx)(o.p,{children:"Higher versions usually work but are not guaranteed."}),(0,r.jsx)(o.p,{children:"We recommend using a new empty database which is dedicated for Logto, while it's not a hard requirement."}),(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Download and start"})}),(0,r.jsx)(o.p,{children:"In your terminal:"}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"npm init @logto@latest\n"})}),(0,r.jsx)(o.p,{children:"Once you complete the init process and start Logto, you will see the message like:"})]})]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-text",children:"Core app is running at http://localhost:3001\nCore app is running at https://your-domain-url\nAdmin app is running at http://localhost:3002\nAdmin app is running at https://your-admin-domain-url\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Heading to ",(0,r.jsx)(o.code,{children:"http://localhost:3002/"})," to continue your Logto journey. Enjoy!"]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(o.h3,{id:"using-an-alternative-url-for-downloading",children:"Using an alternative URL for downloading"})}),(0,r.jsxs)(o.p,{children:["If you want to specify a URL for the Logto zip file, use the ",(0,r.jsx)(o.code,{children:"--download-url"})," option. For example:"]}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"npm init @logto@latest -- --download-url=https://github.com/logto-io/logto/releases/download/v1.2.2/logto.tar.gz\n"})}),(0,r.jsxs)(o.p,{children:["Note the extra ",(0,r.jsx)(o.code,{children:"--"})," is needed for NPM to pass the arguments."]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(o.h3,{id:"configuration-optional",children:"Configuration (optional)"})}),(0,r.jsxs)(o.p,{children:["Logto uses environment variables for configuration, along with ",(0,r.jsx)(o.code,{children:".env"})," file support. See ",(0,r.jsx)(o.a,{href:"/concepts/core-service/configuration",children:"Configuration"})," for detailed usage and full variable list."]})]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsxs)(o.em,{children:["Check out ",(0,r.jsx)(o.a,{href:"/concepts/core-service",children:"Core service"})," if you want more advanced controls or programmatic access to Logto."]})}),"\n",(0,r.jsx)(o.h2,{id:"create-an-account",children:"Create an account"}),"\n",(0,r.jsx)(o.p,{children:'Once you have successfully hosted Logto on your server, click on "Create account" on the welcome page. Keep in mind that the open-source version of Logto only allows for one account creation during the initial launch and does not support multiple accounts. The account creation process is limited to username and password combinations.'}),"\n",(0,r.jsx)(o.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,r.jsx)(n,{href:"https://blog.logto.io/local-https",children:"Dealing with local HTTPS development"})]})}function g(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function m(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3768:(e,o,t)=>{t.d(o,{A:()=>a});t(58101);var n=t(13526);const r={tabItem:"tabItem_y6LR"};var s=t(25105);function a(e){let{children:o,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:t,children:o})}},11043:(e,o,t)=>{t.d(o,{A:()=>y});var n=t(58101),r=t(13526),s=t(32571),a=t(55234),l=t(87394),i=t(87276),c=t(31637),d=t(16063);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:o,children:t}=e;return(0,n.useMemo)((()=>{const e=o??function(e){return u(e).map((e=>{let{props:{value:o,label:t,attributes:n,default:r}}=e;return{value:o,label:t,attributes:n,default:r}}))}(t);return function(e){const o=(0,c.XI)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,t])}function p(e){let{value:o,tabValues:t}=e;return t.some((e=>e.value===o))}function g(e){let{queryString:o=!1,groupId:t}=e;const r=(0,a.W6)(),s=function(e){let{queryString:o=!1,groupId:t}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:o,groupId:t});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const o=new URLSearchParams(r.location.search);o.set(s,e),r.replace({...r.location,search:o.toString()})}),[s,r])]}function m(e){const{defaultValue:o,queryString:t=!1,groupId:r}=e,s=h(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:o,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!p({value:o,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:s}))),[c,u]=g({queryString:t,groupId:r}),[m,x]=function(e){let{groupId:o}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(o),[r,s]=(0,d.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(27034);const j={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var f=t(25105);function b(e){let{className:o,block:t,selectedValue:n,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const o=e.currentTarget,t=i.indexOf(o),r=l[t].value;r!==n&&(c(o),a(r))},u=e=>{let o=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;o=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;o=i[t]??i[i.length-1];break}}o?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},o),children:l.map((e=>{let{value:o,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===o?0:-1,"aria-selected":n===o,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":n===o}),children:t??o},o)}))})}function v(e){let{lazy:o,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(o){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,o)=>(0,n.cloneElement)(e,{key:o,hidden:e.props.value!==s})))})}function w(e){const o=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...o,...e}),(0,f.jsx)(v,{...o,...e})]})}function y(e){const o=(0,x.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(o))}},79621:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>l});var n=t(58101);const r={},s=n.createContext(r);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);