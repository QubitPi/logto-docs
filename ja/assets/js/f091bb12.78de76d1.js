"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[58766],{57937:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"quick-starts/README","title":"Introduction","description":"Welcome to Logto quick starts. This documentation contains useful guides for integrating Logto into your application.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/quick-starts/README.md","sourceDirName":"quick-starts","slug":"/quick-starts/","permalink":"/ja/quick-starts/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/quick-starts/README.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Introduction"},"sidebar":"quickStartSidebar","next":{"title":"Android (Kotlin / Java)","permalink":"/ja/quick-starts/android"}}');var s=n(25105),r=n(79621),i=n(80994);const a={sidebar_label:"Introduction"},c="Introduction",l={},u=[];function d(t){const e={h1:"h1",header:"header",hr:"hr",p:"p",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,s.jsx)(e.p,{children:"Welcome to Logto quick starts. This documentation contains useful guides for integrating Logto into your application."}),"\n",(0,s.jsx)(e.p,{children:"Most of guides uses Logto official SDKs. Please don't hesitate to contact us if you have any questions."}),"\n",(0,s.jsx)(e.hr,{}),"\n","\n",(0,s.jsx)(i.A,{path:"quick-starts"})]})}function m(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},80994:(t,e,n)=>{n.d(e,{A:()=>g});var o=n(63715),s=n(10728),r=n(16117);const i="gallery_quUO",a="categoryLabel_e2Fz",c="list_pn7N",l="link_nE2A",u="logo_cMIT",d="title_bbn1",m="subtitle_ppeR";var p=n(25105);const h=t=>t?String(t):void 0,g=t=>{let{path:e}=t;const n=(0,r.R)(),g=n+`/${e}/`,f=(0,o.t)();if(!f)return null;const b=f.items.reduce(((t,e)=>{if("link"!==e.type)return t;if(e.unlisted||e.href===g)return t;if("#"===e.href)return[...t,{label:e.label+(e.customProps?.additionalLabel?` ${String(e.customProps.additionalLabel)}`:""),description:h(e.customProps?.description),items:[]}];if(!e.href.startsWith(g))return t;const n=t.at(-1);return n?[...t.slice(0,-1),{...n,items:[...n.items,{label:e.label,href:e.href,logoFilename:h(e.customProps?.logoFilename)??`${e.href.slice(g.length)}.svg`,darkLogoFilename:h(e.customProps?.darkLogoFilename),description:h(e.customProps?.description)}]}]:t}),[]);return(0,p.jsx)("section",{className:i,children:b.map((t=>(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:a,children:t.label}),(0,p.jsx)("section",{className:c,children:t.items.map((t=>(0,p.jsxs)("a",{href:t.href,className:l,title:t.description,children:[(0,p.jsx)(s.A,{className:u,alt:"Logo",sources:{light:`${n}/img/logo/${t.logoFilename}`,dark:`${n}/img/logo/${t.darkLogoFilename??t.logoFilename}`},onError:t=>{let{currentTarget:e}=t;e.src=n+"/img/logo/broken-image.svg"}}),(0,p.jsx)("span",{className:d,children:t.label}),(0,p.jsx)("span",{className:m,children:t.description})]},t.href)))})]},t.label)))})}},16117:(t,e,n)=>{n.d(e,{R:()=>s});var o=n(27875);const s=()=>{const{i18n:t}=(0,o.A)();return"en"===t.currentLocale?"":`/${t.currentLocale}`}},79621:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>a});var o=n(58101);const s={},r=o.createContext(s);function i(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);