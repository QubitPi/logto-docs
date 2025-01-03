"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[948],{9360:(e,t,n)=>{n.d(t,{Ay:()=>c,RM:()=>a});var i=n(25105),o=n(79621);const a=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["This guide assumes you have basic understanding of Logto Connectors. For those unfamiliar, please refer to the ",(0,i.jsx)(t.a,{href:"/connectors",children:"Connectors"})," guide to get started."]})})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},36793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"integrations/social/wechat-web/README","title":"Set up social login with WeChat (Web)","description":"The official Logto connector for WeChat social sign-in in web apps.","source":"@site/docs/integrations/social/wechat-web/README.mdx","sourceDirName":"integrations/social/wechat-web","slug":"/integrations/wechat-web","permalink":"/integrations/wechat-web","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/social/wechat-web/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wechat-web","sidebar_label":"WeChat (Web)","sidebar_custom_props":{"description":"WeChat is a cross-platform instant messaging app.","logoFilename":"wechat.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"WeChat (Native)","permalink":"/integrations/wechat-native"},"next":{"title":"WeCom","permalink":"/integrations/wecom"}}');var o=n(25105),a=n(79621),s=n(9360);const c={slug:"/integrations/wechat-web",sidebar_label:"WeChat (Web)",sidebar_custom_props:{description:"WeChat is a cross-platform instant messaging app.",logoFilename:"wechat.svg"}},r="Set up social login with WeChat (Web)",h={},l=[...s.RM,{value:"Get started",id:"get-started",level:2},{value:"Create a web app in the WeChat Open Platform",id:"create-a-web-app-in-the-wechat-open-platform",level:2},{value:"Create an account",id:"create-an-account",level:3},{value:"Create a web app",id:"create-a-web-app",level:3},{value:"Basic info",id:"basic-info",level:4},{value:"Website info",id:"website-info",level:4},{value:"Waiting for the review result",id:"waiting-for-the-review-result",level:4},{value:"Configure your WeChat connector",id:"configure-your-wechat-connector",level:3},{value:"Test WeChat web connector",id:"test-wechat-web-connector",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"set-up-social-login-with-wechat-web",children:"Set up social login with WeChat (Web)"})}),"\n",(0,o.jsx)(t.p,{children:"The official Logto connector for WeChat social sign-in in web apps."}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,o.jsxs)(t.p,{children:["If you don't know the concept of the connector or don't know how to add this connector to your Sign-in experience, please see ",(0,o.jsx)(t.a,{href:"/connectors/social-connectors",children:"Logto tutorial"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["This connector is for web apps only. If you are looking for the method for signing in with WeChat in native apps, please see ",(0,o.jsx)(t.a,{href:"/integrations/wechat-native",children:"WeChat native connector"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"create-a-web-app-in-the-wechat-open-platform",children:"Create a web app in the WeChat Open Platform"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You can skip some sections if you have already finished."})}),"\n",(0,o.jsx)(t.h3,{id:"create-an-account",children:"Create an account"}),"\n",(0,o.jsxs)(t.p,{children:["Open ",(0,o.jsx)(t.a,{href:"https://open.weixin.qq.com/",children:"https://open.weixin.qq.com/"}),', click the "Sign Up" button in the upper-right corner, then finish the sign-up process.']}),"\n",(0,o.jsx)(t.h3,{id:"create-a-web-app",children:"Create a web app"}),"\n",(0,o.jsx)(t.p,{children:'Sign in with the account you just created. In the "Web Application" (\u7f51\u9875\u5e94\u7528) tab, click the big green button "Create a web app" (\u521b\u5efa\u7f51\u9875\u5e94\u7528).'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"App tabs",src:n(70154).A+"",width:"380",height:"272"})}),"\n",(0,o.jsx)(t.p,{children:"Let's fill out the required info in the application form."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Create a web app",src:n(54851).A+"",width:"2692",height:"700"})}),"\n",(0,o.jsx)(t.h4,{id:"basic-info",children:"Basic info"}),"\n",(0,o.jsx)(t.p,{children:'Most of them are pretty straightforward. After finishing the form, click "Next step" to move on.'}),"\n",(0,o.jsx)(t.h4,{id:"website-info",children:"Website info"}),"\n",(0,o.jsxs)(t.p,{children:['Fill "Authorization callback domain" (\u6388\u6743\u56de\u8c03\u57df) with your Logto domain. E.g., ',(0,o.jsx)(t.code,{children:"logto.io"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"waiting-for-the-review-result",children:"Waiting for the review result"}),"\n",(0,o.jsx)(t.p,{children:'After completing the website info, click "Submit Review" to continue. Usually, the review goes fast, which will end within 1-2 days.'}),"\n",(0,o.jsx)(t.p,{children:"We suspect the reviewer is allocated randomly on each submission since the standard is floating. You may get rejected the first time, but don't give up! State your status quo and ask the reviewer how to modify it."}),"\n",(0,o.jsx)(t.h3,{id:"configure-your-wechat-connector",children:"Configure your WeChat connector"}),"\n",(0,o.jsxs)(t.p,{children:["Fill out the ",(0,o.jsx)(t.code,{children:"clientId"})," and ",(0,o.jsx)(t.code,{children:"clientSecret"})," field with ",(0,o.jsx)(t.em,{children:"Client ID"})," and ",(0,o.jsx)(t.em,{children:"Client Secret"})," you've got from OAuth app detail pages."]}),"\n",(0,o.jsxs)(t.p,{children:["Fill out the ",(0,o.jsx)(t.code,{children:"scope"})," field with either 'snsapi_userinfo' or 'snsapi_base'. You can leave this field blank as it is OPTIONAL. The default value is set to be 'snsapi_userinfo'. You can check out the ",(0,o.jsx)(t.a,{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html",children:"difference"})," between different values."]}),"\n",(0,o.jsx)(t.h3,{id:"test-wechat-web-connector",children:"Test WeChat web connector"}),"\n",(0,o.jsxs)(t.p,{children:["That's it. Don't forget to ",(0,o.jsx)(t.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"Enable social connector in sign-in experience"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Once WeChat web connector is enabled, you can sign in to your app again to see if it works."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},70154:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/app-tabs-016b4bb0d2730acc57aabd441b78c6fc.png"},54851:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/create-web-app-01338a007e4132888d5ca5704d6754b4.png"},79621:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(58101);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);