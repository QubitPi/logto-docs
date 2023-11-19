"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[79921],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5565:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],c={sidebar_position:11},s="\ud83d\uddc4\ufe0f Enable central cache",l={unversionedId:"docs/recipes/enable-central-cache/README",id:"docs/recipes/enable-central-cache/README",title:"\ud83d\uddc4\ufe0f Enable central cache",description:"Added in v1.2.0",source:"@site/docs/docs/recipes/enable-central-cache/README.md",sourceDirName:"docs/recipes/enable-central-cache",slug:"/docs/recipes/enable-central-cache/",permalink:"/logto-docs/next/docs/recipes/enable-central-cache/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/enable-central-cache/README.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"\ud83d\udcbe File storage provider",permalink:"/logto-docs/next/docs/recipes/configure-storage-providers/"},next:{title:"\ud83d\udd11 Signing keys",permalink:"/logto-docs/next/docs/recipes/signing-keys-rotation/"}},p={},d=[{value:"Configure the connection",id:"configure-the-connection",level:2},{value:"Check if the cache is working",id:"check-if-the-cache-is-working",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-enable-central-cache"},"\ud83d\uddc4\ufe0f Enable central cache"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Added in v1.2.0")),(0,a.kt)("p",null,"Logto supports using Redis\xae",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," as a central cache for well-known data. By using a central cache, Logto can significantly speed up the end-user experience by reducing the number of database queries needed to generate a response."),(0,a.kt)("p",null,"Typically, the cache can be made public since it is designed for well-known data only. At present, Logto does not store any data requiring authentication or authorization."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To ensure the best security practices, we still advise limiting access to the cache.")),(0,a.kt)("h2",{id:"configure-the-connection"},"Configure the connection"),(0,a.kt)("p",null,"To enable the cache, you will need a Redis 6.0 instance that is up and running. In order for Logto to connect and use the cache, simply set the ",(0,a.kt)("inlineCode",{parentName:"p"},"REDIS_URL")," environment variable to the Redis connection string, which should begin with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.iana.org/assignments/uri-schemes/prov/redis"},'"redis" protocol')," (",(0,a.kt)("inlineCode",{parentName:"p"},"redis://"),") for unsecured connections, or the ",(0,a.kt)("a",{parentName:"p",href:"https://www.iana.org/assignments/uri-schemes/prov/rediss"},'"rediss" protocol')," (",(0,a.kt)("inlineCode",{parentName:"p"},"rediss://"),") for connection over TLS."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"REDIS_URL=rediss://your-redis-username:your-password@your.redis.url.com:6380\n")),(0,a.kt)("p",null,'Please note that most parts of the connection string can be omitted, as shown in the example below, which composes a connection string without the username and port, using the "redis" protocol:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"REDIS_URL=redis://:your-password@your.redis.url.com\n")),(0,a.kt)("p",null,"If the password contains special characters, it needs to be URI-encoded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# If the password is "foo="\nREDIS_URL=redis://:foo%3D@your.redis.url.com\n')),(0,a.kt)("p",null,"In cases where all default values are in use, you can set the variable to a truthy value for convenience:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'REDIS_URL=1 # or "true", "yes"\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://stackexchange.github.io/StackExchange.Redis/Configuration.html"},"StackExchange.Redis")," string is not supported.")),(0,a.kt)("h2",{id:"check-if-the-cache-is-working"},"Check if the cache is working"),(0,a.kt)("p",null,"To check if the cache is properly connected, you should see the following message displayed when Logto starts up:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[CACHE] Connected to Redis\n")),(0,a.kt)("p",null,"Additionally, when the request hits the cache (for example, by accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/.well-known/phrases")," multiple times), the following message will appear in the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[CACHE] Well-known cache hit for ...\n")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Redis is a registered trademark of Redis Ltd. Any rights therein are reserved to Redis Ltd. Any use by Silverhand is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and Silverhand.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);