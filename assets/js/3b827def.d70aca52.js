"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[58922],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return v}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),a=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You need to have an Access Token that satisfies the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"It's a valid token"),(0,i.kt)("li",null,"It's issued by your Logto instance"),(0,i.kt)("li",null,"Its audience (`aud`, i.e. the API identifier) points to ",(0,i.kt)("code",null,"https://api.logto.io"),"."),n.children&&(0,i.kt)("li",null,n.children)))}c.isMDXComponent=!0;var s=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Put that token in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," field of HTTP headers with the Bearer format (",(0,i.kt)("inlineCode",{parentName:"p"},"Bearer YOUR_TOKEN"),"), and you are good to go."))}d.isMDXComponent=!0;var u=["components"],m={},k="\ud83e\uddf1 Core Service",h={unversionedId:"docs/references/core/README",id:"version-1.x/docs/references/core/README",title:"\ud83e\uddf1 Core Service",description:"Introduction",source:"@site/versioned_docs/version-1.x/docs/references/core/README.mdx",sourceDirName:"docs/references/core",slug:"/docs/references/core/",permalink:"/logto-docs/docs/references/core/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/references/core/README.mdx",tags:[],version:"1.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udd0c Connectors",permalink:"/logto-docs/docs/references/connectors/"},next:{title:"Configuration",permalink:"/logto-docs/docs/references/core/configuration"}},f={},v=[{value:"Introduction",id:"introduction",level:2},{value:"OIDC Provider",id:"oidc-provider",level:2},{value:"Enabled OpenID features",id:"enabled-openid-features",level:3},{value:"Management API",id:"management-api",level:2},{value:"Authentication",id:"authentication",level:3},{value:"User API",id:"user-api",level:2},{value:"Authentication",id:"authentication-1",level:3},{value:"About refresh token reuse interval",id:"about-refresh-token-reuse-interval",level:3},{value:"Frontend proxies",id:"frontend-proxies",level:2}],g={toc:v};function y(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-core-service"},"\ud83e\uddf1 Core Service"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Core Service")," is a monolith service for critical Logto duties. The source code is in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/core"},(0,i.kt)("inlineCode",{parentName:"a"},"/packages/core")),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Core Service")," and ",(0,i.kt)("em",{parentName:"p"},"SDK core")," are two separate concepts. See ",(0,i.kt)("a",{parentName:"p",href:"/logto-docs/docs/references/sdk-convention/"},"SDK Convention")," for the differences.")),(0,i.kt)("p",null,"To simplify, we divide Core Service into four major modules:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"Description"),(0,i.kt)("td",null,"Mount Path"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"OIDC Provider"),(0,i.kt)("td",null,"An"," ",(0,i.kt)("a",{href:"https://openid.net/specs/openid-connect-core-1_0.html",target:"_blank",rel:"noopener"},"OpenID Provider"),"."),(0,i.kt)("td",null,(0,i.kt)("code",null,"/oidc"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Management API"),(0,i.kt)("td",null,"APIs for managing Logto. The admin role is required."),(0,i.kt)("td",null,(0,i.kt)("code",null,"/api"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Frontend proxies"),(0,i.kt)("td",null,"HTTP proxies or static file serving for frontend projects."),(0,i.kt)("td",null,"See ",(0,i.kt)("a",{href:"#frontend-proxies"},"Frontend proxies")," for details.")))),(0,i.kt)("p",null,"Backend APIs, including OIDC, are built within the ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," package, while frontend proxies depend on the corresponding sibling packages in the Logto monorepo."),(0,i.kt)("h2",{id:"oidc-provider"},"OIDC Provider"),(0,i.kt)("p",null,"Logto uses the amazing certified ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," implementation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/panva/node-oidc-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"node-oidc-provider"))," under the hood. The provider is mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/oidc"),", and you can check relative configurations and files in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/core/src/oidc"},(0,i.kt)("inlineCode",{parentName:"a"},"packages/core/src/oidc")),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you want to directly call OIDC APIs, remember to set header ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type: application/x-www-form-urlencoded"),".")),(0,i.kt)("h3",{id:"enabled-openid-features"},"Enabled OpenID features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html"},"OpenID Connect Core")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OpenID Connect Discovery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html"},"OpenID Connect RP-Initiated Logout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc7009.html"},"OAuth 2.0 Token Revocation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"OAuth 2.0 Resource Indicators"))),(0,i.kt)("h2",{id:"management-api"},"Management API"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Management API")," is a set of APIs that manage and update Logto data. Only users with the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role have access to them."),(0,i.kt)("p",null,"It's mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/api"),". Head to ",(0,i.kt)("a",{parentName:"p",href:"/api"},"API Reference")," to see the details in your browser, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/swagger.json")," for a Swagger result in JSON."),(0,i.kt)("p",null,"To access the API programmatically, see ",(0,i.kt)("a",{parentName:"p",href:"/logto-docs/docs/recipes/interact-with-management-api/"},"\ud83d\ude9d Interact with Management API"),"."),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Admin Console heavily depends on these APIs, while you can also call them manually."),(0,i.kt)(c,{mdxType:"BasicTokenRequirements"},"Its ",(0,i.kt)("code",null,"scope")," includes ",(0,i.kt)("code",null,'"all"'),"."),(0,i.kt)(d,{mdxType:"BearerAuth"}),(0,i.kt)("h2",{id:"user-api"},"User API"),(0,i.kt)("p",null,"We provide a standard OIDC ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"Userinfo Endpoint")," mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/oidc/me"),"."),(0,i.kt)("h3",{id:"authentication-1"},"Authentication"),(0,i.kt)(c,{mdxType:"BasicTokenRequirements"}),(0,i.kt)(d,{mdxType:"BearerAuth"}),(0,i.kt)("h3",{id:"about-refresh-token-reuse-interval"},"About refresh token reuse interval"),(0,i.kt)("p",null,"You may notice Refresh Token has a rotation delay (3s). This delay helps avoid concurrency issues when exchanging the rotating refresh token multiple times within a given timeframe."),(0,i.kt)("p",null,"During the leeway window (in seconds), the consumed refresh token will still be considered as valid."),(0,i.kt)("p",null,"This is useful for distributed apps and serverless apps like Next.js, in which there is no shared memory."),(0,i.kt)("h2",{id:"frontend-proxies"},"Frontend proxies"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"frontend proxy")," is a middleware function that serves a frontend project in an environment-related way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it's development, it proxies HTTP requests to the frontend dev server."),(0,i.kt)("li",{parentName:"ul"},"If it's production, it serves static frontend files directly.")),(0,i.kt)("p",null,"Logto has three frontend proxies:"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"Frontend Package"),(0,i.kt)("td",null,"Mount Path"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Admin Console proxy"),(0,i.kt)("td",null,(0,i.kt)("code",null,"/packages/console")),(0,i.kt)("td",null,(0,i.kt)("code",null,"/console"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Demo app proxy"),(0,i.kt)("td",null,(0,i.kt)("code",null,"/packages/demo-app")),(0,i.kt)("td",null,(0,i.kt)("code",null,"/demo-app"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"UI (sign-in experience) proxy"),(0,i.kt)("td",null,(0,i.kt)("code",null,"/packages/ui")),(0,i.kt)("td",null,(0,i.kt)("code",null,"/"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You may notice that the UI proxy uses the root path. Unlike other proxies, the UI proxy is a fallback proxy which means it only takes effect when no other proxy is matched.")))}y.isMDXComponent=!0}}]);