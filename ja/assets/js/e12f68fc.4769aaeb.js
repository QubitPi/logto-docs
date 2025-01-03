"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37854],{42306:(e,n,s)=>{s.d(n,{Ay:()=>c,RM:()=>r});var i=s(25105),t=s(79621);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001Logto \u30b3\u30cd\u30af\u30bf\u30fc\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u77e5\u8b58\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u3082\u3057\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,i.jsx)(n.a,{href:"/connectors",children:"\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u8a2d\u5b9a"})," \u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u59cb\u3081\u3066\u304f\u3060\u3055\u3044\u3002"]})})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},51630:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"integrations/sms/twilio-sms/README","title":"Twilio SMS \u3092\u4f7f\u7528\u3057\u3066 SMS \u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3059\u308b","description":"Twilio \u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u7528\u306e\u516c\u5f0f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/integrations/sms/twilio-sms/README.mdx","sourceDirName":"integrations/sms/twilio-sms","slug":"/integrations/twilio-sms","permalink":"/ja/integrations/twilio-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/integrations/sms/twilio-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/twilio-sms","sidebar_label":"Twilio SMS","sidebar_custom_props":{"description":"Twilio \u306f\u96fb\u8a71\u3084\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u305f\u3081\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u53ef\u80fd\u306a\u901a\u4fe1\u30c4\u30fc\u30eb\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002","logoFilename":"twilio.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Tencent Short Message","permalink":"/ja/integrations/tencent-sms"},"next":{"title":"Vonage SMS","permalink":"/ja/integrations/vonage-sms"}}');var t=s(25105),r=s(79621),o=s(42306);const c={slug:"/integrations/twilio-sms",sidebar_label:"Twilio SMS",sidebar_custom_props:{description:"Twilio \u306f\u96fb\u8a71\u3084\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u305f\u3081\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u53ef\u80fd\u306a\u901a\u4fe1\u30c4\u30fc\u30eb\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002",logoFilename:"twilio.svg"}},l="Twilio SMS \u3092\u4f7f\u7528\u3057\u3066 SMS \u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3059\u308b",d={},h=[...o.RM,{value:"\u306f\u3058\u3081\u306b",id:"get-started",level:2},{value:"Twilio \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3059\u308b",id:"register-twilio-account",level:2},{value:"\u9001\u4fe1\u8005\u306e\u96fb\u8a71\u756a\u53f7\u3092\u8a2d\u5b9a\u3059\u308b",id:"set-up-senders-phone-numbers",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u8cc7\u683c\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b",id:"get-account-credentials",level:2},{value:"\u30b3\u30cd\u30af\u30bf\u30fc JSON \u3092\u4f5c\u6210\u3059\u308b",id:"compose-the-connector-json",level:2},{value:"Twilio SMS \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b",id:"test-twilio-sms-connector",level:3},{value:"\u8a2d\u5b9a\u30bf\u30a4\u30d7",id:"config-types",level:3},{value:"\u53c2\u8003",id:"reference",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"twilio-sms-\u3092\u4f7f\u7528\u3057\u3066-sms-\u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3059\u308b",children:"Twilio SMS \u3092\u4f7f\u7528\u3057\u3066 SMS \u8a8d\u8a3c\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,t.jsx)(n.p,{children:"Twilio \u30b7\u30e7\u30fc\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u7528\u306e\u516c\u5f0f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3067\u3059\u3002"}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"\u306f\u3058\u3081\u306b"}),"\n",(0,t.jsx)(n.p,{children:"Twilio \u306f\u3001\u96fb\u8a71\u306e\u767a\u4fe1\u3068\u53d7\u4fe1\u3001\u30c6\u30ad\u30b9\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9001\u4fe1\u3068\u53d7\u4fe1\u3001\u305d\u306e\u4ed6\u306e\u901a\u4fe1\u6a5f\u80fd\u306e\u305f\u3081\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u53ef\u80fd\u306a\u901a\u4fe1\u30c4\u30fc\u30eb\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u79c1\u305f\u3061\u306f\u305d\u306e Web \u30b5\u30fc\u30d3\u30b9 API \u3092\u901a\u3058\u3066\u300c\u8a8d\u8a3c\u30b3\u30fc\u30c9\u300d\u30c6\u30ad\u30b9\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"register-twilio-account",children:"Twilio \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.twilio.com",children:"Twilio"})," \u3067\u65b0\u3057\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\uff08\u3059\u3067\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u306e\u5834\u5408\u306f\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002\uff09"]}),"\n",(0,t.jsx)(n.h2,{id:"set-up-senders-phone-numbers",children:"\u9001\u4fe1\u8005\u306e\u96fb\u8a71\u756a\u53f7\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio \u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8"})," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001Twilio \u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u300cPhone Numbers\u300d->\u300cManage\u300d->\u300cBuy a number\u300d\u304b\u3089\u96fb\u8a71\u756a\u53f7\u3092\u8cfc\u5165\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"\u30d2\u30f3\u30c8"})]}),"\n",(0,t.jsx)(n.p,{children:"\u7279\u5b9a\u306e\u56fd\u3084\u5730\u57df\u3067 SMS \u30b5\u30fc\u30d3\u30b9\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u4ed6\u306e\u5730\u57df\u304b\u3089\u756a\u53f7\u3092\u9078\u629e\u3057\u3066\u56de\u907f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u52b9\u306a\u756a\u53f7\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001\u300cMessaging\u300d->\u300cServices\u300d\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u65b0\u3057\u3044\u30e1\u30c3\u30bb\u30fc\u30b8\u30b5\u30fc\u30d3\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u306a\u30b5\u30fc\u30d3\u30b9\u540d\u3092\u4ed8\u3051\u3001\u30b5\u30fc\u30d3\u30b9\u76ee\u7684\u3068\u3057\u3066 ",(0,t.jsx)(n.em,{children:"Notify my users"})," \u3092\u9078\u629e\u3057\u307e\u3059\u3002\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001",(0,t.jsx)(n.em,{children:"Sender Type"})," \u3068\u3057\u3066 ",(0,t.jsx)(n.code,{children:"Phone Number"})," \u3092\u9078\u629e\u3057\u3001\u5148\u307b\u3069\u53d6\u5f97\u3057\u305f\u96fb\u8a71\u756a\u53f7\u3092\u9001\u4fe1\u8005\u3068\u3057\u3066\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5404\u96fb\u8a71\u756a\u53f7\u306f 1 \u3064\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u306b\u306e\u307f\u30ea\u30f3\u30af\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-account-credentials",children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u8cc7\u683c\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6a5f\u80fd\u3055\u305b\u308b\u305f\u3081\u306b API \u306e\u8cc7\u683c\u60c5\u5831\u304c\u5fc5\u8981\u3067\u3059\u3002",(0,t.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio \u30b3\u30f3\u30bd\u30fc\u30eb\u30da\u30fc\u30b8"})," \u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u53f3\u4e0a\u306e\u300cAccount\u300d\u30e1\u30cb\u30e5\u30fc\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u300cAPI keys & tokens\u300d\u30da\u30fc\u30b8\u306b\u79fb\u52d5\u3057\u3066 ",(0,t.jsx)(n.code,{children:"Account SID"})," \u3068 ",(0,t.jsx)(n.code,{children:"Auth token"})," \u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u30b5\u30a4\u30c9\u30d0\u30fc\u304b\u3089\u300cMessaging\u300d->\u300cServices\u300d\u8a2d\u5b9a\u30da\u30fc\u30b8\u306b\u623b\u308a\u3001\u30b5\u30fc\u30d3\u30b9\u306e ",(0,t.jsx)(n.code,{children:"Sid"})," \u3092\u898b\u3064\u3051\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"compose-the-connector-json",children:"\u30b3\u30cd\u30af\u30bf\u30fc JSON \u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"accountSID"}),"\u3001",(0,t.jsx)(n.em,{children:"authToken"}),"\u3001",(0,t.jsx)(n.em,{children:"fromMessagingServiceSID"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3001\u5bfe\u5fdc\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u306e ",(0,t.jsx)(n.code,{children:"Account SID"}),"\u3001",(0,t.jsx)(n.code,{children:"Auth token"}),"\u3001",(0,t.jsx)(n.code,{children:"Sid"})," \u3092\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7570\u306a\u308b\u30b1\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u8907\u6570\u306e SMS \u30b3\u30cd\u30af\u30bf\u30fc\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u5358\u4e00\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u4f8b\u3067\u3059\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"content"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u4efb\u610f\u306e\u6587\u5b57\u5217\u578b\u306e\u5185\u5bb9\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u30e9\u30f3\u30c0\u30e0\u306a\u8a8d\u8a3c\u30b3\u30fc\u30c9\u306e\u305f\u3081\u306b ",(0,t.jsx)(n.code,{children:"{{code}}"})," \u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30fc\u3092\u5fd8\u308c\u305a\u306b\u6b8b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"usageType"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u306f\u3001\u7570\u306a\u308b\u4f7f\u7528\u30b1\u30fc\u30b9\u306b\u5fdc\u3058\u3066 ",(0,t.jsx)(n.code,{children:"Register"}),"\u3001",(0,t.jsx)(n.code,{children:"SignIn"}),"\u3001",(0,t.jsx)(n.code,{children:"ForgotPassword"}),"\u3001",(0,t.jsx)(n.code,{children:"Generic"})," \u306e\u3044\u305a\u308c\u304b\u3092\u5165\u529b\u3057\u307e\u3059\u3002\u5b8c\u5168\u306a\u30e6\u30fc\u30b6\u30fc\u30d5\u30ed\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u306b\u306f\u3001",(0,t.jsx)(n.code,{children:"Register"}),"\u3001",(0,t.jsx)(n.code,{children:"SignIn"}),"\u3001",(0,t.jsx)(n.code,{children:"ForgotPassword"}),"\u3001",(0,t.jsx)(n.code,{children:"Generic"})," \u306e usageType \u3092\u6301\u3064\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"test-twilio-sms-connector",children:"Twilio SMS \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b"}),"\n",(0,t.jsx)(n.p,{children:"\u300c\u4fdd\u5b58\u3057\u3066\u5b8c\u4e86\u300d\u3059\u308b\u524d\u306b\u3001\u96fb\u8a71\u756a\u53f7\u3092\u5165\u529b\u3057\u3066\u300c\u9001\u4fe1\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u8a2d\u5b9a\u304c\u6a5f\u80fd\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u308c\u3067\u5b8c\u4e86\u3067\u3059\u3002",(0,t.jsx)(n.a,{href:"/connectors/sms-connectors/#enable-phone-number-sign-up-or-sign-in",children:"\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u3067\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b"})," \u306e\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"config-types",children:"\u8a2d\u5b9a\u30bf\u30a4\u30d7"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u524d"}),(0,t.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accountSID"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"authToken"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fromMessagingServiceSID"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"templates"}),(0,t.jsx)(n.td,{children:"Templates[]"})]})]})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,t.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(n.th,{children:"\u5217\u6319\u5024"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"content"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"usageType"}),(0,t.jsx)(n.td,{children:"enum string"}),(0,t.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.twilio.com/docs/api/errors",children:"Twilio - \u30a8\u30e9\u30fc\u3068\u8b66\u544a\u306e\u8f9e\u66f8"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(58101);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);