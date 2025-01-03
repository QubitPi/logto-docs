"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[92700],{49173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"end-user-flows/account-settings/README","title":"Account settings","description":"Logto provides a two collection of account settings APIs to allow users to manage their account and profiles stored in Logto.","source":"@site/docs/end-user-flows/account-settings/README.mdx","sourceDirName":"end-user-flows/account-settings","slug":"/end-user-flows/account-settings/","permalink":"/end-user-flows/account-settings/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/account-settings/README.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"sidebar_custom_props":{"sublist_label":"Account flows"}},"sidebar":"docsSidebar","previous":{"title":"Sign-out","permalink":"/end-user-flows/sign-out"},"next":{"title":"Account settings by Management API","permalink":"/end-user-flows/account-settings/by-management-api"}}');var o=n(25105),a=n(79621),i=n(47464);const r={sidebar_position:7,sidebar_custom_props:{sublist_label:"Account flows"}},c="Account settings",l={},u=[{value:"User Management APIs",id:"user-management-apis",level:2},{value:"Account APIs",id:"account-apis",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components},{DocCardList:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("DocCardList",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"account-settings",children:"Account settings"})}),"\n",(0,o.jsx)(t.p,{children:"Logto provides a two collection of account settings APIs to allow users to manage their account and profiles stored in Logto."}),"\n",(0,o.jsx)(t.h2,{id:"user-management-apis",children:"User Management APIs"}),"\n",(0,o.jsx)(t.p,{children:"Logto Management APIs provides the most comprehensive functionality to manage users and their profile data. You may implement a self-hosted user management system or end-user account settings page using these APIs."}),"\n",(0,o.jsx)(n,{items:[{type:"link",label:"Use Logto Management APIs",href:"/end-user-flows/account-settings/by-management-api",description:"Learn more about how to use the user Management APIs to build your own account settings page.",customProps:{icon:(0,o.jsx)(i.A,{})}}]}),"\n",(0,o.jsx)(t.h2,{id:"account-apis",children:"Account APIs"}),"\n",(0,o.jsx)(t.p,{children:"Apart from the Management APIs, Logto also provides a set of end-user account APIs to allow end-users directly manage their account settings and profile data. Unlike the Management APIs, the account APIs are designed to be used in the end-user context with detailed user permission control. You can use the account APIs directly in your client-side application to build a user-friendly account settings page."}),"\n",(0,o.jsx)(n,{items:[{type:"link",label:"Use Logto Account APIs",href:"/end-user-flows/account-settings/by-account-api",description:"Learn more about how to use the user Account APIs to build your own account settings page.",customProps:{icon:(0,o.jsx)(i.A,{})}}]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},47464:(e,t,n)=>{n.d(t,{A:()=>i});var s,o=n(58101);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},a.apply(null,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",viewBox:"0 0 20 20","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,s||(s=o.createElement("path",{fill:"currentColor",d:"m17.767 7.958-1.575-.525.741-1.483a.83.83 0 0 0-.158-.95L15 3.225a.83.83 0 0 0-.958-.158l-1.484.741-.525-1.575a.83.83 0 0 0-.783-.566h-2.5a.83.83 0 0 0-.792.566l-.525 1.575-1.483-.741a.83.83 0 0 0-.95.158L3.225 5a.83.83 0 0 0-.158.958l.741 1.484-1.575.525a.83.83 0 0 0-.566.783v2.5a.83.83 0 0 0 .566.792l1.575.525-.741 1.483a.83.83 0 0 0 .158.95L5 16.775a.83.83 0 0 0 .958.158l1.484-.741.525 1.575a.83.83 0 0 0 .791.566h2.5a.83.83 0 0 0 .792-.566l.525-1.575 1.483.741a.83.83 0 0 0 .942-.158L16.775 15a.83.83 0 0 0 .158-.958l-.741-1.484 1.575-.525a.83.83 0 0 0 .566-.783v-2.5a.83.83 0 0 0-.566-.792m-1.1 2.692-1 .333a1.666 1.666 0 0 0-.967 2.35l.475.95-.917.917-.925-.5a1.667 1.667 0 0 0-2.325.967l-.333 1H9.35l-.333-1a1.667 1.667 0 0 0-2.35-.967l-.95.475-.917-.917.5-.925a1.667 1.667 0 0 0-.967-2.35l-1-.333v-1.3l1-.333a1.667 1.667 0 0 0 .967-2.35l-.475-.925.917-.917.925.475a1.667 1.667 0 0 0 2.35-.967l.333-1h1.3l.333 1a1.666 1.666 0 0 0 2.35.967l.95-.475.917.917-.5.925a1.667 1.667 0 0 0 .967 2.325l1 .333zM10 6.667a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m0 5a1.667 1.667 0 1 1 0-3.334 1.667 1.667 0 0 1 0 3.334"})))}},79621:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(58101);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);