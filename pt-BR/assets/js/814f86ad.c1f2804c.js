"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[14817],{99566:(e,o,a)=>{a.d(o,{Ay:()=>r,RM:()=>t});var n=a(25105),i=a(79621);const t=[];function c(e){const o={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,n.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function r(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},43624:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"integrations/social/wechat-web/README","title":"Configurar login social com WeChat (Web)","description":"O conector oficial do Logto para login social com WeChat em aplicativos web.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/social/wechat-web/README.mdx","sourceDirName":"integrations/social/wechat-web","slug":"/integrations/wechat-web","permalink":"/pt-BR/integrations/wechat-web","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/social/wechat-web/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wechat-web","sidebar_label":"WeChat (Web)","sidebar_custom_props":{"description":"WeChat \xe9 um aplicativo de mensagens instant\xe2neas multiplataforma.","logoFilename":"wechat.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"WeChat (Native)","permalink":"/pt-BR/integrations/wechat-native"},"next":{"title":"WeCom","permalink":"/pt-BR/integrations/wecom"}}');var i=a(25105),t=a(79621),c=a(99566);const r={slug:"/integrations/wechat-web",sidebar_label:"WeChat (Web)",sidebar_custom_props:{description:"WeChat \xe9 um aplicativo de mensagens instant\xe2neas multiplataforma.",logoFilename:"wechat.svg"}},s="Configurar login social com WeChat (Web)",l={},d=[...c.RM,{value:"Introdu\xe7\xe3o",id:"get-started",level:2},{value:"Criar um aplicativo web na Plataforma Aberta do WeChat",id:"create-a-web-app-in-the-wechat-open-platform",level:2},{value:"Criar uma conta",id:"create-an-account",level:3},{value:"Criar um aplicativo web",id:"create-a-web-app",level:3},{value:"Informa\xe7\xf5es b\xe1sicas",id:"basic-info",level:4},{value:"Informa\xe7\xf5es do site",id:"website-info",level:4},{value:"Aguardando o resultado da revis\xe3o",id:"waiting-for-the-review-result",level:4},{value:"Configurar seu conector WeChat",id:"configure-your-wechat-connector",level:3},{value:"Testar o conector web do WeChat",id:"test-wechat-web-connector",level:3}];function p(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"configurar-login-social-com-wechat-web",children:"Configurar login social com WeChat (Web)"})}),"\n",(0,i.jsx)(o.p,{children:"O conector oficial do Logto para login social com WeChat em aplicativos web."}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(o.h2,{id:"get-started",children:"Introdu\xe7\xe3o"}),"\n",(0,i.jsxs)(o.p,{children:["Se voc\xea n\xe3o conhece o conceito de conector ou n\xe3o sabe como adicionar este conector \xe0 sua experi\xeancia de login, consulte o ",(0,i.jsx)(o.a,{href:"/connectors/social-connectors",children:"tutorial do Logto"}),"."]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"\u26a0\ufe0f Aten\xe7\xe3o"})}),"\n",(0,i.jsxs)(o.p,{children:["Este conector \xe9 apenas para aplicativos web. Se voc\xea est\xe1 procurando o m\xe9todo para fazer login com WeChat em aplicativos nativos, consulte o ",(0,i.jsx)(o.a,{href:"/integrations/wechat-native",children:"conector nativo do WeChat"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"create-a-web-app-in-the-wechat-open-platform",children:"Criar um aplicativo web na Plataforma Aberta do WeChat"}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["\ud83d\udca1 ",(0,i.jsx)(o.strong,{children:"Dica"})]}),"\n",(0,i.jsx)(o.p,{children:"Voc\xea pode pular algumas se\xe7\xf5es se j\xe1 tiver conclu\xeddo."}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"create-an-account",children:"Criar uma conta"}),"\n",(0,i.jsxs)(o.p,{children:["Abra ",(0,i.jsx)(o.a,{href:"https://open.weixin.qq.com/",children:"https://open.weixin.qq.com/"}),', clique no bot\xe3o "Sign Up" no canto superior direito e conclua o processo de inscri\xe7\xe3o.']}),"\n",(0,i.jsx)(o.h3,{id:"create-a-web-app",children:"Criar um aplicativo web"}),"\n",(0,i.jsx)(o.p,{children:'Fa\xe7a login com a conta que voc\xea acabou de criar. Na aba "Web Application" (\u7f51\u9875\u5e94\u7528), clique no grande bot\xe3o verde "Create a web app" (\u521b\u5efa\u7f51\u9875\u5e94\u7528).'}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"App tabs",src:a(46434).A+"",width:"380",height:"272"})}),"\n",(0,i.jsx)(o.p,{children:"Vamos preencher as informa\xe7\xf5es necess\xe1rias no formul\xe1rio de inscri\xe7\xe3o."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Create a web app",src:a(2187).A+"",width:"2692",height:"700"})}),"\n",(0,i.jsx)(o.h4,{id:"basic-info",children:"Informa\xe7\xf5es b\xe1sicas"}),"\n",(0,i.jsx)(o.p,{children:'A maioria delas \xe9 bastante direta. Ap\xf3s concluir o formul\xe1rio, clique em "Next step" para prosseguir.'}),"\n",(0,i.jsx)(o.h4,{id:"website-info",children:"Informa\xe7\xf5es do site"}),"\n",(0,i.jsxs)(o.p,{children:['Preencha "Authorization callback domain" (\u6388\u6743\u56de\u8c03\u57df) com seu dom\xednio Logto. Por exemplo, ',(0,i.jsx)(o.code,{children:"logto.io"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"waiting-for-the-review-result",children:"Aguardando o resultado da revis\xe3o"}),"\n",(0,i.jsx)(o.p,{children:'Ap\xf3s completar as informa\xe7\xf5es do site, clique em "Submit Review" para continuar. Normalmente, a revis\xe3o \xe9 r\xe1pida, terminando em 1-2 dias.'}),"\n",(0,i.jsx)(o.p,{children:"Suspeitamos que o revisor seja alocado aleatoriamente em cada submiss\xe3o, j\xe1 que o padr\xe3o \xe9 vari\xe1vel. Voc\xea pode ser rejeitado na primeira vez, mas n\xe3o desista! Explique sua situa\xe7\xe3o atual e pergunte ao revisor como modific\xe1-la."}),"\n",(0,i.jsx)(o.h3,{id:"configure-your-wechat-connector",children:"Configurar seu conector WeChat"}),"\n",(0,i.jsxs)(o.p,{children:["Preencha o campo ",(0,i.jsx)(o.code,{children:"clientId"})," e ",(0,i.jsx)(o.code,{children:"clientSecret"})," com o ",(0,i.jsx)(o.em,{children:"Client ID"})," e ",(0,i.jsx)(o.em,{children:"Client Secret"})," que voc\xea obteve das p\xe1ginas de detalhes do aplicativo OAuth."]}),"\n",(0,i.jsxs)(o.p,{children:["Preencha o campo ",(0,i.jsx)(o.code,{children:"scope"})," com 'snsapi_userinfo' ou 'snsapi_base'. Voc\xea pode deixar este campo em branco, pois \xe9 OPCIONAL. O valor padr\xe3o \xe9 'snsapi_userinfo'. Voc\xea pode conferir a ",(0,i.jsx)(o.a,{href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html",children:"diferen\xe7a"})," entre os diferentes valores."]}),"\n",(0,i.jsx)(o.h3,{id:"test-wechat-web-connector",children:"Testar o conector web do WeChat"}),"\n",(0,i.jsxs)(o.p,{children:["\xc9 isso. N\xe3o se esque\xe7a de ",(0,i.jsx)(o.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"Habilitar o conector social na experi\xeancia de login"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"Uma vez que o conector web do WeChat esteja habilitado, voc\xea pode fazer login no seu aplicativo novamente para ver se funciona."})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},46434:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/app-tabs-016b4bb0d2730acc57aabd441b78c6fc.png"},2187:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/create-web-app-01338a007e4132888d5ca5704d6754b4.png"},79621:(e,o,a)=>{a.d(o,{R:()=>c,x:()=>r});var n=a(58101);const i={},t=n.createContext(i);function c(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);