"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[80548],{49613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(59496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,r(r({ref:t},u),{},{components:a})):n.createElement(f,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63661:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(665),i=a(40151),o=(a(59496),a(49613)),r=["components"],l={date:new Date("2023-02-02T00:00:00.000Z"),authors:"gao",tags:["release"]},s="Logto 2023 February Update",c={permalink:"/blog/releases/2023-feb",source:"@site/blog/releases/2023-feb.md",title:"Logto 2023 February Update",description:"Please welcome our first release candidate! Logto is just a few steps away from general availability.",date:"2023-02-02T00:00:00.000Z",formattedDate:"February 2, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.62,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{date:"2023-02-02T00:00:00.000Z",authors:"gao",tags:["release"]},prevItem:{title:"CIAM 102: Authorization & Role-based Access Control",permalink:"/blog/ciam-102-authz-and-rbac"},nextItem:{title:"Logto 2023 New Year Update",permalink:"/blog/releases/2023-jan"}},u={authorsImageUrls:[void 0]},d=[{value:"\ud83d\udca5 Breaking changes \ud83d\udca5",id:"-breaking-changes-",level:2},{value:"\ud83d\udd12 Role-Based Access Control",id:"-role-based-access-control",level:2},{value:"\ud83c\udfc4 Streamlined social sign-in flow",id:"-streamlined-social-sign-in-flow",level:2},{value:"\ud83d\udd22 Send and verify verification codes via Management API",id:"-send-and-verify-verification-codes-via-management-api",level:2},{value:"\u21a9\ufe0f Rollback database alteration state",id:"\ufe0f-rollback-database-alteration-state",level:2}],p={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please welcome our first release candidate! Logto is just a few steps away from general availability.")),(0,o.kt)("h2",{id:"-breaking-changes-"},"\ud83d\udca5 Breaking changes \ud83d\udca5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"core: remove ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /settings")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"PATCH /settings")," API"),(0,o.kt)("li",{parentName:"ul"},"core: add ",(0,o.kt)("inlineCode",{parentName:"li"},"GET /configs/admin-console")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"PATCH /configs/admin-console")," API",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/configs/*")," APIs are config/key-specific now. they may have different logic per key."))),(0,o.kt)("li",{parentName:"ul"},"core: officially remove all deprecated ",(0,o.kt)("inlineCode",{parentName:"li"},"/session")," APIs"),(0,o.kt)("li",{parentName:"ul"},"core: use HTTP/2 to serve TLS (HTTPS) connections"),(0,o.kt)("li",{parentName:"ul"},"cli: change valid ",(0,o.kt)("inlineCode",{parentName:"li"},"logto db config")," keys by removing ",(0,o.kt)("inlineCode",{parentName:"li"},"alterationState")," and adding ",(0,o.kt)("inlineCode",{parentName:"li"},"adminConsole")," since:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'OIDC configs and admin console configs are tenant-level configs (the concept of "tenant" can be ignored until we officially announce it)'),(0,o.kt)("li",{parentName:"ul"},"alteration state is still a system-wide config"))),(0,o.kt)("li",{parentName:"ul"},"for admin access of machine-to-machine applications, now it's required to add scope ",(0,o.kt)("inlineCode",{parentName:"li"},"all")," for client configs to fetch proper Access Token",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.logto.io/docs/recipes/interact-with-management-api/"},"\ud83d\ude9d Interact with Management API")," for details")))),(0,o.kt)("h2",{id:"-role-based-access-control"},"\ud83d\udd12 Role-Based Access Control"),(0,o.kt)("p",null,"We are excited to introduce our latest addition to our product, Role-Based Access Control (RBAC). This powerful feature gives administrators the ability to assign specific roles and permissions to users, ensuring they only have access to the resources and functions they need to do their job."),(0,o.kt)("p",null,"With RBAC, administrators can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define permissions across APIs"),(0,o.kt)("li",{parentName:"ul"},"Create custom roles with specific permissions"),(0,o.kt)("li",{parentName:"ul"},"Assign roles to users and manage their roles"),(0,o.kt)("li",{parentName:"ul"},"Easily manage and update permissions"),(0,o.kt)("li",{parentName:"ul"},"Securely validate permissions to protect APIs")),(0,o.kt)("p",null,"Logto takes a major step forward in security and control with easy access management and authorization of sensitive info, ensuring only authorized users have the right to access. This aligns with our vision to provide an open-source identity solution with features for authentication and authorization, and packed with all the features you need."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using Logto SDKs, please upgrade to the latest version to take advantage of RBAC.")),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/recipes/rbac/"},"RBAC recipe")," for a step-by-step guide. Give it a try and let us know what you think!"),(0,o.kt)("h2",{id:"-streamlined-social-sign-in-flow"},"\ud83c\udfc4 Streamlined social sign-in flow"),(0,o.kt)("p",null,"\ud83d\udca1 Logto now detects a trusted email (or phone number) from the social account during social sign-in."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the email (or phone number) has been registered: Automatically connect the social identity to the existing user account with a single click."),(0,o.kt)("li",{parentName:"ul"},"If the email (or phone number) is not registered: Automatically sync the user profile with the social-provided email (or phone number) if and only if it is marked as a required user profile.")),(0,o.kt)("h2",{id:"-send-and-verify-verification-codes-via-management-api"},"\ud83d\udd22 Send and verify verification codes via Management API"),(0,o.kt)("p",null,"The new Management APIs allow you to reuse connectors to dynamically send and verify verification codes for various purposes, such as validating identity before a user updates their profile or performs a dangerous action."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/verification-code")," to send verification code to a given email or phone"),(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"/api/verification-code/verify")," to verify the code against a given email or phone")),(0,o.kt)("h2",{id:"\ufe0f-rollback-database-alteration-state"},"\u21a9\ufe0f Rollback database alteration state"),(0,o.kt)("p",null,"In case of any issues with the database, you can now use the ",(0,o.kt)("inlineCode",{parentName:"p"},"logto db alteration rollback [target]")," command to roll back all database schemas to a previous version, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"logto db alteration rollback v1.0.0-beta.19"),"."))}m.isMDXComponent=!0}}]);