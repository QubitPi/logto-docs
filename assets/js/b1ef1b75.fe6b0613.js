"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[76871],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,g=u["".concat(p,".").concat(m)]||u[m]||l[m]||s;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51254:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l}});var r=a(665),n=a(40151),s=(a(59496),a(49613)),o=["components"],i={sidebar_label:"Management API",sidebar_position:2},p="Manage users using Management API",d={unversionedId:"docs/recipes/manage-users/management-api",id:"docs/recipes/manage-users/management-api",title:"Manage users using Management API",description:"Management API is a collection of APIs that provide access to the Logto backend service. As previously mentioned, the user API is a critical component of this service and can support a wide range of scenarios.",source:"@site/docs/docs/recipes/manage-users/management-api.md",sourceDirName:"docs/recipes/manage-users",slug:"/docs/recipes/manage-users/management-api",permalink:"/logto-docs/next/docs/recipes/manage-users/management-api",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/manage-users/management-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Management API",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Using Admin Console",permalink:"/logto-docs/next/docs/recipes/manage-users/admin-console"},next:{title:"Advanced User Search",permalink:"/logto-docs/next/docs/recipes/manage-users/advanced-user-search"}},c={},l=[],u={toc:l};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"manage-users-using-management-api"},"Manage users using Management API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/logto-docs/next/docs/references/core/#management-api"},"Management API")," is a collection of APIs that provide access to the Logto backend service. As previously mentioned, the user API is a critical component of this service and can support a wide range of scenarios."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("a",{parentName:"p",href:"/logto-docs/next/docs/references/core/#authentication"},(0,s.kt)("strong",{parentName:"a"},"Authentication"))," is REQUIRED when you're calling Management API.")),(0,s.kt)("p",null,"The user-related ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nAPIs are mounted at ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/users")," except the user activities, i.e., user logs ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/logs?userId=:userId"),"."),(0,s.kt)("p",null,"What Admin Console can do, so do Management API."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Admin Console - User Management"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Management API"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#list-and-search-users"},"List users")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users/get",target:"_blank"}," ",(0,s.kt)("inlineCode",{parentName:"td"},"GET /api/users")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#view-and-update-user-profile"},"View user profile")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/get",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"GET /api/users/:userId")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#view-user-activities"},"View user activities")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Logs/paths/~1api~1logs/get",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"GET /api/logs?userId=:userId")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#add-user"},"Add a user")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users/post",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"POST /api/users")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#view-and-update-user-profile"},"Update user profile")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/patch",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"PATCH /api/users/:userId")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#reset-user-password"},"Reset user password")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"PATCH /api/users/:userId/password")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#delete-user"},"Delete a user")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/delete",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"DELETE /api/users/:userId")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#view-and-update-user-profile"},"Remove social connection")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId~1identities~1:target/delete",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"DELETE /api/users/:userId/identities/:target")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/logto-docs/next/docs/recipes/manage-users/admin-console#suspend-user"},"Suspend User")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId~1password/patch",target:"_blank"},(0,s.kt)("inlineCode",{parentName:"td"},"PATCH /api/users/:userId/is-suspended")))))),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{href:"/api/#tag/Users",target:"_blank"},"API Reference")," for more."))}m.isMDXComponent=!0}}]);