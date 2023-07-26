"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[75424],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],l={sidebar_position:6},s="\ud83d\ude9d Interact with Management API",c={unversionedId:"docs/recipes/interact-with-management-api/README",id:"docs/recipes/interact-with-management-api/README",title:"\ud83d\ude9d Interact with Management API",description:"What is Logto management API",source:"@site/docs/docs/recipes/interact-with-management-api/README.md",sourceDirName:"docs/recipes/interact-with-management-api",slug:"/docs/recipes/interact-with-management-api/",permalink:"/logto-docs/next/docs/recipes/interact-with-management-api/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/interact-with-management-api/README.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Guide to implement connectors",permalink:"/logto-docs/next/docs/recipes/create-your-connector/connector-implementation-guide"},next:{title:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users",permalink:"/logto-docs/next/docs/recipes/manage-users/"}},p={},u=[{value:"What is Logto management API",id:"what-is-logto-management-api",level:2},{value:"Some typical scenarios",id:"some-typical-scenarios",level:2},{value:"Implement user profile on your own",id:"implement-user-profile-on-your-own",level:3},{value:"Advanced user search",id:"advanced-user-search",level:3},{value:"How to?",id:"how-to",level:2},{value:"Using pagination",id:"using-pagination",level:2},{value:"Using link headers",id:"using-link-headers",level:3},{value:"Using total-number header",id:"using-total-number-header",level:3},{value:"Changing page number and page size",id:"changing-page-number-and-page-size",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-interact-with-management-api"},"\ud83d\ude9d Interact with Management API"),(0,r.kt)("h2",{id:"what-is-logto-management-api"},"What is Logto management API"),(0,r.kt)("p",null,"The Logto Management API is a comprehensive collection of APIs that empower administrators to manage identity-related tasks, enforce security policies, and comply with regulations and standards."),(0,r.kt)("p",null,"With the Logto management API, you can access Logto's robust backend services, which are highly scalable and can be utilized in a multitude of scenarios. It goes beyond what's possible with the Admin Console's low-code capabilities."),(0,r.kt)("p",null,"Some frequently used APIs are listed below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User"),(0,r.kt)("li",{parentName:"ul"},"Application"),(0,r.kt)("li",{parentName:"ul"},"Logs"),(0,r.kt)("li",{parentName:"ul"},"Roles"),(0,r.kt)("li",{parentName:"ul"},"Resources"),(0,r.kt)("li",{parentName:"ul"},"Connectors")),(0,r.kt)("p",null,"To learn more about the APIs that are available, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://docs.logto.io/api"},"https://docs.logto.io/api"),"."),(0,r.kt)("p",null,"Wondering what you can do with the Logto Management API? Here are a few examples of scenarios that are not possible with the Logto Admin Console but can be achieved through the management API."),(0,r.kt)("h2",{id:"some-typical-scenarios"},"Some typical scenarios"),(0,r.kt)("p",null,"Our management API can be leveraged in several scenarios. For instance,"),(0,r.kt)("h3",{id:"implement-user-profile-on-your-own"},"Implement user profile on your own"),(0,r.kt)("p",null,"Logto currently does not provide a pre-built UI solution for user profiles. We recognize that user profiles are closely tied to business and product attributes, which raises questions about the value of offering pre-built solutions, particularly from Logto's perspective. While we work on determining the best approach, we suggest using our APIs to create your own solution. For instance, you can utilize our interaction API, profile API, and verification code API to develop a custom solution that meets your needs."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"/logto-docs/next/docs/recipes/user-profile/"},"User Profile")," for more information."),(0,r.kt)("h3",{id:"advanced-user-search"},"Advanced user search"),(0,r.kt)("p",null,"You can certainly use Logto's user management feature in the console for some tasks, our management API offers additional functions that support more advanced user search scenarios. Check out ",(0,r.kt)("a",{parentName:"p",href:"../manage-users/advanced-user-search/"},"Advanced User Search")," for more information."),(0,r.kt)("p",null,"Our developers have implemented many additional features using our management API. We believe that our API is highly scalable and can support a wide range of your needs. Additionally, we have continued distilling some use cases and incorporated them into our low-code platform to boost productivity and enhance the developer experience."),(0,r.kt)("h2",{id:"how-to"},"How to?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Follow the tutorial ",(0,r.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/tutorials/get-started/create-and-integrate-the-first-app"},"Create and integrate the first application")," to create a Machine to Machine app in Admin Console."),(0,r.kt)("li",{parentName:"ol"},"Follow the guide ",(0,r.kt)("a",{parentName:"li",href:"/logto-docs/next/docs/recipes/integrate-logto/machine-to-machine"},"Machine to Machine: Auth with Logto")," to fetch an Access Token for the API identifier ",(0,r.kt)("inlineCode",{parentName:"li"},"https://tenantid.logto.app/api")," (indicates Management API) and scope ",(0,r.kt)("inlineCode",{parentName:"li"},"all")," (all permissions)."),(0,r.kt)("li",{parentName:"ol"},"Interact with Management API with Bearer authorization using the Access Token.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Usually the Access Token has a short expiration. If you have a local cache, remember to check and fetch a new Access Token if needed before sending requests.")),(0,r.kt)("h2",{id:"using-pagination"},"Using pagination"),(0,r.kt)("p",null,"Some of the API responses may include many results, the results will be paginated. Logto provides 2 kinds of pagination info."),(0,r.kt)("h3",{id:"using-link-headers"},"Using link headers"),(0,r.kt)("p",null,"A paginated response header will be like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"\n')),(0,r.kt)("p",null,"The link header provides the URL for the previous, next, first, and last page of results:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The URL for the previous page is followed by rel="prev".'),(0,r.kt)("li",{parentName:"ul"},'The URL for the next page is followed by rel="next".'),(0,r.kt)("li",{parentName:"ul"},'The URL for the last page is followed by rel="last".'),(0,r.kt)("li",{parentName:"ul"},'The URL for the first page is followed by rel="first".')),(0,r.kt)("h3",{id:"using-total-number-header"},"Using total-number header"),(0,r.kt)("p",null,"In addition to the standard link headers, Logto will also add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Total-Number")," header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Total-Number: 216\n")),(0,r.kt)("p",null,"That would be very convenient and useful to show page numbers."),(0,r.kt)("h3",{id:"changing-page-number-and-page-size"},"Changing page number and page size"),(0,r.kt)("p",null,"There are 2 optional query parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),": indicates the page number, starts from 1, the default value is 1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page_size"),": indicates the number of items per page, the default value is 20.")))}m.isMDXComponent=!0}}]);