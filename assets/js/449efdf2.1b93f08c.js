"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64921],{49613:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return m}});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return o?n.createElement(f,a(a({ref:t},l),{},{components:o})):n.createElement(f,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},93459:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=o(665),r=o(40151),i=(o(59496),o(49613)),a=["components"],c={sidebar_position:2},s="Use custom domain",u={unversionedId:"docs/recipes/custom-domain/use-custom-domain",id:"docs/recipes/custom-domain/use-custom-domain",title:"Use custom domain",description:"Once you've configured your settings, both your custom domain name and the default Logto domain name will be available for your tenant. However, certain configurations are required to activate your custom domain name.",source:"@site/docs/docs/recipes/custom-domain/use-custom-domain.md",sourceDirName:"docs/recipes/custom-domain",slug:"/docs/recipes/custom-domain/use-custom-domain",permalink:"/logto-docs/next/docs/recipes/custom-domain/use-custom-domain",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/custom-domain/use-custom-domain.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure custom domain in Console",permalink:"/logto-docs/next/docs/recipes/custom-domain/configure-custom-domain-in-console"},next:{title:"\ud83d\ude80 Deployment",permalink:"/logto-docs/next/docs/recipes/deployment/"}},l={},p=[{value:"Updating the SDK Endpoint for Applications",id:"updating-the-sdk-endpoint-for-applications",level:2},{value:"Modifying Auth Endpoints for Other Applications",id:"modifying-auth-endpoints-for-other-applications",level:2},{value:"Updating the Social Connector&#39;s Callback URI",id:"updating-the-social-connectors-callback-uri",level:2}],d={toc:p};function m(e){var t=e.components,c=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-custom-domain"},"Use custom domain"),(0,i.kt)("p",null,"Once you've configured your settings, both your custom domain name and the default Logto domain name will be available for your tenant. However, certain configurations are required to activate your custom domain name."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In this article, we assume that your custom domain is ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.example.com"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example domain",src:o(19204).Z,width:"2880",height:"1178"})),(0,i.kt)("h2",{id:"updating-the-sdk-endpoint-for-applications"},"Updating the SDK Endpoint for Applications"),(0,i.kt)("p",null,"Alter your initialization code for the Logto SDK by modifying the domain name of the endpoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const client = new LogtoClient({\n  ..., // other options\n  endpoint: 'https://auth.example.com',\n});\n")),(0,i.kt)("h2",{id:"modifying-auth-endpoints-for-other-applications"},"Modifying Auth Endpoints for Other Applications"),(0,i.kt)("p",null,"If you have applications that aren't using the Logto SDK, it's necessary to update their auth endpoints."),(0,i.kt)("p",null,"You can locate the auth endpoints at the well-known URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://auth.example.com/oidc/.well-known/openid-configuration\n")),(0,i.kt)("h2",{id:"updating-the-social-connectors-callback-uri"},"Updating the Social Connector's Callback URI"),(0,i.kt)("p",null,"The social connector's callback URI will be updated automatically if your users are using the custom domain. You need to go to the social provider's developer console to update the callback URI."),(0,i.kt)("p",null,"When your users are using the custom domain, the social connector's callback URI will be using the new domain. Therefore, you need to navigate to the social provider's developer console to manually update the callback URI."))}m.isMDXComponent=!0},19204:function(e,t,o){t.Z=o.p+"assets/images/example-domain-f2adacab2881a41b3e2668222e770bc7.webp"}}]);