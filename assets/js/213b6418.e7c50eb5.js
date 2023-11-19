"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[62594],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(g,l(l({ref:t},c),{},{components:n})):o.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21522:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var o=n(45924),a="tabItem_ojA4",r=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n,children:t})}},36884:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(59496),a=n(45924),r=n(32173),l=n(5734),i=n(27236),s=n(34857),u=n(55635);function c(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,l.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,i._X)(s),(0,o.useCallback)((function(e){if(s){var t=new URLSearchParams(r.location.search);t.set(s,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[s,r])]}function g(e){var t,n,a,r,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,c=e.groupId,g=p(e),h=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:g})})),f=h[0],k=h[1],b=m({queryString:s,groupId:c}),v=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=w[0],C=w[1],T=function(){var e=null!=v?v:N;return d({value:e,tabValues:g})?e:null}();return(0,o.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),C(e)}),[y,C,g]),tabValues:g}}var h=n(62607),f="tabList_by9y",k="tabItem_Dr3M",b=n(4637);function v(e){var t=e.className,n=e.block,o=e.selectedValue,l=e.selectValue,i=e.tabValues,s=[],u=(0,r.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=s.indexOf(t),a=i[n].value;a!==o&&(u(t),l(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var o,a=s.indexOf(e.currentTarget)+1;n=null!=(o=s[a])?o:s[0];break;case"ArrowLeft":var r,l=s.indexOf(e.currentTarget)-1;n=null!=(r=s[l])?r:s[s.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:c},r,{className:(0,a.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=r.find((function(e){return e.props.value===a}));return l?(0,o.cloneElement)(l,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=g(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,b.jsx)(v,Object.assign({},e,t)),(0,b.jsx)(y,Object.assign({},e,t))]})}function N(e){var t=(0,h.Z)();return(0,b.jsx)(w,Object.assign({},e),String(t))}},42370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return g}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),l=n(21522),i=n(36884),s=n.p+"assets/images/gitpod-running-9ccf680a2482a3146703b6097d62f0a5.png",u=["components"],c={},p="\u26a1 Get started",d={unversionedId:"docs/tutorials/get-started/README",id:"version-1.x/docs/tutorials/get-started/README",title:"\u26a1 Get started",description:"There are some nuanced differences in accessing the admin console between the open-source versions and Logto Cloud.",source:"@site/versioned_docs/version-1.x/docs/tutorials/get-started/README.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/",permalink:"/logto-docs/docs/tutorials/get-started/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/tutorials/get-started/README.mdx",tags:[],version:"1.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc81 Introduction",permalink:"/logto-docs/"},next:{title:"Check out the live preview",permalink:"/logto-docs/docs/tutorials/get-started/check-out-the-live-preview"}},m={},g=[{value:"Logto Cloud",id:"logto-cloud",level:2},{value:"Open-Source",id:"open-source",level:2},{value:"Launch Logto",id:"launch-logto",level:3},{value:"Local",id:"local",level:3},{value:"Quick troubleshooting",id:"quick-troubleshooting",level:3},{value:"Create an account",id:"create-an-account",level:3},{value:"Get started",id:"get-started",level:2}],h={toc:g};function f(e){var t=e.components,c=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-get-started"},"\u26a1 Get started"),(0,r.kt)("p",null,"There are some nuanced differences in accessing the admin console between the open-source versions and Logto Cloud."),(0,r.kt)("h2",{id:"logto-cloud"},"Logto Cloud"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.logto.io/"},"Logto Cloud")," is a Software-as-a-Service (SaaS) version of Logto. It offers users more options for account creation and basic cloud operations than the open-source version."),(0,r.kt)("p",null,"Users can sign up and sign in using Google, GitHub, email with a password, or a verification code. Once you've entered the cloud, you can manage your resources and profile information within the platform."),(0,r.kt)("p",null,"During sign-up, you'll go through an onboarding flow that helps Logto understand your needs and preferences to personalize your experience. Although it only takes a few steps, the onboarding flow can be incredibly helpful in quickly getting started and successfully building authentication and authorization."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Get started",src:n(53623).Z,width:"2880",height:"1800"})),(0,r.kt)("h2",{id:"open-source"},"Open-Source"),(0,r.kt)("h3",{id:"launch-logto"},"Launch Logto"),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener"},"Click here"),"\xa0",(0,r.kt)("span",null,"to start a GitPod workspace for Logto. Wait a few moment, you'll see the message like:")),(0,r.kt)("p",null,(0,r.kt)("img",{src:s,alt:"Gitpod is running",width:"720px"})),(0,r.kt)("p",null,"Logto uses port ",(0,r.kt)("inlineCode",{parentName:"p"},"3001")," for its core service and port ",(0,r.kt)("inlineCode",{parentName:"p"},"3002")," for the interactive Admin Console by default."),(0,r.kt)("p",null,"To continue your Logto journey, press Ctrl (or Cmd) and click the link that starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"https://3002-..."),". Enjoy!"),(0,r.kt)("h3",{id:"local"},"Local"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker-compose",label:"Docker Compose",mdxType:"TabItem"},(0,r.kt)("p",null,"Docker Compose CLI usually comes with ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not use our docker compose command for production! Since we currently have a built-in Postgres database bundled together with the Logto app in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),",\nevery time you re-execute the command a new database instance will be created, and any data persisted previously will be lost.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | docker compose -p logto -f - up\n")),(0,r.kt)("p",null,"After a successful composition, you will see the message like:")),(0,r.kt)(l.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,r.kt)("h3",null,"Step 1"),(0,r.kt)("p",null,"Prepare a ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),"@^14.0 instance, and using ",(0,r.kt)("a",{href:"/docs/tutorials/using-cli/"},"Logto CLI")," to seed a database for Logto:"),(0,r.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"logto db seed\n"))),(0,r.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db seed\n")))),(0,r.kt)("h3",null,"Step 2"),(0,r.kt)("p",null,"Pull the image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# ghcr\ndocker pull ghcr.io/logto-io/logto:latest\n# DockerHub\ndocker pull svhd/logto:latest\n")),(0,r.kt)("h3",null,"Step 3"),(0,r.kt)("p",null,"Map the container ports to Logto core and admin app, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"3001:3001")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"3002:3002"),"; and set the following environment variables to the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"TRUST_PROXY_HEADER: 1 # Set to 1 if you have an HTTPS proxy (e.g. Nginx) in front of Logto\nENDPOINT: https://<your-logto-domain> # (Optional) Replace with your Logto endpoint URL if you are using a custom domain\nADMIN_ENDPOINT: https://<your-logto-admin-domain> # (Optional) Replace with your Logto admin URL if you are using a custom domain\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Replace with your Postgres DSN\n")),(0,r.kt)("p",null,"Run the container with all the environment variables above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --name logto \\\n  -p 3001:3001 \\\n  -p 3002:3002 \\\n  -e TRUST_PROXY_HEADER=1 \\\n  -e ENDPOINT=https://<your-logto-domain> \\\n  -e ADMIN_ENDPOINT=https://<your-logto-admin-domain> \\\n  -e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\n  ghcr.io/logto-io/logto:latest\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If you are using Docker Hub, use ",(0,r.kt)("inlineCode",{parentName:"li"},"svhd/logto:latest")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"ghcr.io/logto-io/logto:latest"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"host.docker.internal")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"172.17.0.1")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"DB_URL")," to refer to the host IP."))),(0,r.kt)("p",null,"Finally, you will see the message like:")),(0,r.kt)(l.Z,{value:"npm",label:"npm-init",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," ",(0,r.kt)("inlineCode",{parentName:"p"},"^18.12.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://postgresql.org/"},"PostgreSQL")," ",(0,r.kt)("inlineCode",{parentName:"p"},"^14.0")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Install PostgreSQL on Mac"),(0,r.kt)("p",{parentName:"li"},"In case we would like to test a deployment, we could install a local PostgreSQL on, for example, Mac with homebrew:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"brew install postgresql@15\necho 'export PATH=\"/usr/local/opt/postgresql@15/bin:$PATH\"' >> /Users/.../.bash_profile\nbrew services start postgresql@15\n")),(0,r.kt)("p",{parentName:"li"},"Let's create a DB with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ psql postgres\npsql (15.5 (Homebrew))\nType "help" for help.\n\npostgres=# CREATE DATABASE logto;\n')),(0,r.kt)("p",{parentName:"li"},"This database will be accessible via ",(0,r.kt)("inlineCode",{parentName:"p"},"postgresql://localhost:5432/logto"))))),(0,r.kt)("p",null,"Higher versions usually work but are not guaranteed."),(0,r.kt)("p",null,"We recommend using a new empty database which is dedicated for Logto, while it","'","s not a hard requirement."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download and start")),(0,r.kt)("p",null,"In your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @logto@latest\n")),(0,r.kt)("p",null,"Once you complete the init process and start Logto, you will see the message like:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Core app is running at http://localhost:3001\nCore app is running at https://your-domain-url\nAdmin app is running at http://localhost:3002\nAdmin app is running at https://your-admin-domain-url\n")),(0,r.kt)("p",null,"Heading to ",(0,r.kt)("a",{target:"_blank",href:"http://localhost:3002/",rel:"noopener"},"http://localhost:3002/")," to continue your Logto journey. Enjoy!"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Using an alternative URL for downloading"),(0,r.kt)("p",null,"If you want to specify a URL for the Logto zip file, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--download-url")," option. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm init @logto@latest -- --download-url=https://github.com/logto-io/logto/releases/download/v1.2.2/logto.tar.gz\n")),(0,r.kt)("p",null,"Note the extra ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," is needed for NPM to pass the arguments.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Configuration (optional)"),(0,r.kt)("p",null,"Logto uses environment variables for configuration, along with ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file support. See ",(0,r.kt)("a",{parentName:"p",href:"/logto-docs/docs/references/core/configuration"},"Configuration")," for detailed usage and full variable list.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Check out ",(0,r.kt)("a",{parentName:"em",href:"/logto-docs/docs/references/core/"},"Core Service")," if you want more advanced controls or programmatic access to Logto.")),(0,r.kt)("h3",{id:"quick-troubleshooting"},"Quick troubleshooting"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"My browser cannot load Admin Console (showing error ",(0,r.kt)("code",null,"Crypto.subtle is unavailable..."),")"),(0,r.kt)("p",null,"Admin Console uses ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"},"Web Crypto API"),", which requires ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"},"secure contexts"),", i.e. HTTPS or HTTP with ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,r.kt)("p",null,"If you use HTTP with an IP address or custom domain, then the browser cannot load Admin Console.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"I'm using a custom domain, but my browser cannot load Admin Console (showing error"," ",(0,r.kt)("code",null,'"code": "oidc.invalid_redirect_uri"'),")"),(0,r.kt)("p",null,"If you are using a custom domain rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", you need to set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"ENDPOINT")," to the Logto URL. It is because of the strict requirement of Redirect URI in OIDC. See ",(0,r.kt)("a",{parentName:"p",href:"/logto-docs/docs/references/core/configuration#general"},"Configuration")," for details.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"I'm using an HTTPS proxy (e.g., Nginx) in front of Logto, but I failed on sign-in (showing error"," ",(0,r.kt)("code",null,"TypeError: Failed to fetch"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, make sure you have set the node environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"TRUST_PROXY_HEADER")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),". See ",(0,r.kt)("a",{parentName:"li",href:"/logto-docs/docs/references/core/configuration#using-a-https-proxy"},"Configuration")," for details."),(0,r.kt)("li",{parentName:"ul"},"Also, you need to set ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Proto")," header to ",(0,r.kt)("inlineCode",{parentName:"li"},"https")," in your proxy config. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies"},"Trusting TLS offloading proxies")," for details."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"I'm facing CORS issues."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," is not specified, ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:[admin-port]")," will be allowed to perform Cross-Origin Resource Sharing (CORS) in Logto."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," is specified, only requests from the origin of ",(0,r.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," will be allowed."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is this again? ",(0,r.kt)("code",null,"Error: Invalid id token")),(0,r.kt)("p",null,"If you are not messing up with your tokens, then in most cases this is caused by a mismatch of your server time and client time. Sync the time on both your server and client and try again.")),(0,r.kt)("h3",{id:"create-an-account"},"Create an account"),(0,r.kt)("p",null,'Once you have successfully hosted Logto on your server, click on "Create Account" on the welcome page. Keep in mind that the open-source version of Logto only allows for one account creation during the initial launch and does not support multiple accounts. The account creation process is limited to username and password combinations.'),(0,r.kt)("h2",{id:"get-started"},"Get started"),(0,r.kt)("p",null,'After creating your account, you will be automatically redirected to the "Get Started" tab, which provides a quick overview of what Logto can do. The onboarding items provided include both actionable resources that can be immediately utilized, as well as those that may require some level of preparation beforehand.'),(0,r.kt)("p",null,'Our doc tutorial will follow the same order as what you see in the "Get Started" tab. Overall, these items are meant to be explored and leveraged to help you achieve success.'),(0,r.kt)("p",null,"Depending on whether you are an open-source user, an individual developer, or an enterprise user, you may see different recommendations and guiding content. It's important to note that these recommendations are not feature differentiations between segments but rather suggestions to help you navigate and make the most of Logto."),(0,r.kt)("p",null,"One of our goals is to ensure that the features are available to everyone, regardless of whether they are using the open-source or cloud version."),(0,r.kt)("p",null,"Let's review each item and explore what you can do in Logto!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Get started",src:n(18475).Z,width:"2880",height:"1800"})))}f.isMDXComponent=!0},53623:function(e,t,n){t.Z=n.p+"assets/images/create-account-db1359ac0d641d2ae0cc78f2bf15393e.png"},18475:function(e,t,n){t.Z=n.p+"assets/images/get-started-6eb7e93247b08651506e34f62ae8a28c.png"}}]);