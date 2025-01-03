"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[78550],{44255:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>c});var o=i(25105),r=i(79621);const c=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,o.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},25660:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"integrations/social/naver/README","title":"Configura el inicio de sesi\xf3n social con Naver","description":"El conector de Naver proporciona una forma concisa para que tu aplicaci\xf3n utilice el sistema de autenticaci\xf3n OAuth 2.0 de Naver.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/naver/README.mdx","sourceDirName":"integrations/social/naver","slug":"/integrations/naver","permalink":"/es/integrations/naver","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/naver/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/naver","sidebar_label":"Naver","sidebar_custom_props":{"description":"Naver es el proveedor de servicios de internet m\xe1s importante en Corea del Sur."}},"sidebar":"integrationsSidebar","previous":{"title":"Kakao","permalink":"/es/integrations/kakao"},"next":{"title":"OAuth 2.0 (Social)","permalink":"/es/integrations/oauth2"}}');var r=i(25105),c=i(79621),s=i(44255);const l={slug:"/integrations/naver",sidebar_label:"Naver",sidebar_custom_props:{description:"Naver es el proveedor de servicios de internet m\xe1s importante en Corea del Sur."}},a="Configura el inicio de sesi\xf3n social con Naver",t={},d=[...s.RM,{value:"Sitio para Desarrolladores Solo con Soporte en Coreano Ahora",id:"developer-site-only-korean-support-now",level:2},{value:"Para la Producci\xf3n",id:"for-the-production",level:2},{value:"Configura un proyecto en los Naver Developers",id:"set-up-a-project-in-the-naver-developers",level:2},{value:"Nombre de la Aplicaci\xf3n (\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984)",id:"application-name-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uc774\ub984",level:3},{value:"Uso de API (\uc0ac\uc6a9 API)",id:"api-usage-\uc0ac\uc6a9-api",level:3},{value:"Entorno de Servicio de API Abierta de Inicio de Sesi\xf3n (\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd)",id:"sign-in-open-api-service-environment-\ub85c\uadf8\uc778-\uc624\ud508-api-\uc11c\ube44\uc2a4-\ud658\uacbd",level:3},{value:"PC Web (PC \uc6f9)",id:"pc-web-pc-\uc6f9",level:4},{value:"Mobile Web (Mobile \uc6f9)",id:"mobile-web-mobile-\uc6f9",level:4},{value:"Configurar Logto",id:"configure-logto",level:2},{value:"Tipos de configuraci\xf3n",id:"config-types",level:3},{value:"clientId",id:"clientid",level:4},{value:"clientSecret",id:"clientseceret",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"configura-el-inicio-de-sesi\xf3n-social-con-naver",children:"Configura el inicio de sesi\xf3n social con Naver"})}),"\n",(0,r.jsx)(n.p,{children:"El conector de Naver proporciona una forma concisa para que tu aplicaci\xf3n utilice el sistema de autenticaci\xf3n OAuth 2.0 de Naver."}),"\n",(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"developer-site-only-korean-support-now",children:"Sitio para Desarrolladores Solo con Soporte en Coreano Ahora"}),"\n",(0,r.jsxs)(n.p,{children:["Actualmente, el sitio de ",(0,r.jsx)(n.code,{children:"Naver Developers"})," solo admite coreano. Por favor, considera usar un traductor."]}),"\n",(0,r.jsx)(n.h2,{id:"for-the-production",children:"Para la Producci\xf3n"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Para la producci\xf3n, debes obtener una revisi\xf3n del equipo de Naver.\nDe lo contrario, solo los usuarios registrados pueden iniciar sesi\xf3n.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Puedes agregar un probador desde el men\xfa ",(0,r.jsx)(n.code,{children:"\ub9f4\ubc84\uad00\ub9ac(Member Manage)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Para obtener una revisi\xf3n, por favor verifica ",(0,r.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \uc0c1\ud0dc(Application Development Status)"}),"\ndesde ",(0,r.jsx)(n.code,{children:"API \uc124\uc815(API Setting)"})," en la configuraci\xf3n de tu proyecto de aplicaci\xf3n."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"set-up-a-project-in-the-naver-developers",children:"Configura un proyecto en los Naver Developers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Visita los ",(0,r.jsx)(n.a,{href:"https://developers.naver.com/main/",children:"Naver Developers"})," e inicia sesi\xf3n con tu cuenta de Naver."]}),"\n",(0,r.jsxs)(n.li,{children:["Haz clic en ",(0,r.jsx)(n.strong,{children:"Application -> \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub4f1\ub85d"})," desde el men\xfa para crear un nuevo proyecto."]}),"\n",(0,r.jsx)(n.li,{children:"Sigue las instrucciones a continuaci\xf3n para crear la aplicaci\xf3n."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"application-name-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uc774\ub984",children:"Nombre de la Aplicaci\xf3n (\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Escribe el nombre de tu aplicaci\xf3n en ",(0,r.jsx)(n.code,{children:"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984"})," (Este nombre se muestra mientras un usuario inicia sesi\xf3n)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"api-usage-\uc0ac\uc6a9-api",children:"Uso de API (\uc0ac\uc6a9 API)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Elige ",(0,r.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login)"})," para ",(0,r.jsx)(n.code,{children:"\uc0ac\uc6a9 API(API Usage)"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Marca ",(0,r.jsx)(n.code,{children:"\uc774\uba54\uc77c \uc8fc\uc18c(Email Address), \ubcc4\uba85(Nickname), \ud504\ub85c\ud544 \uc0ac\uc9c4(Profile Image)"})," como ",(0,r.jsx)(n.code,{children:"\ud544\uc218(Necessary)"})," desde ",(0,r.jsx)(n.code,{children:"\uad8c\ud55c(Role)"})," (Puedes marcar ",(0,r.jsx)(n.code,{children:"\ucd94\uac00(Add)"})," como opcional estas opciones, pero no podr\xe1s obtener la informaci\xf3n del usuario)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sign-in-open-api-service-environment-\ub85c\uadf8\uc778-\uc624\ud508-api-\uc11c\ube44\uc2a4-\ud658\uacbd",children:"Entorno de Servicio de API Abierta de Inicio de Sesi\xf3n (\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Para ",(0,r.jsx)(n.code,{children:"\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd(Sign in Open API Service Environment)"}),", agrega dos entornos ",(0,r.jsx)(n.code,{children:"PC\uc6f9(PC Web)"})," y ",(0,r.jsx)(n.code,{children:"\ubaa8\ubc14\uc77c\uc6f9(Mobile Web)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"pc-web-pc-\uc6f9",children:"PC Web (PC \uc6f9)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Para ",(0,r.jsx)(n.code,{children:"\uc11c\ube44\uc2a4 URL(Service URL)"}),", escribe ",(0,r.jsx)(n.code,{children:"http(s)://YOUR_URL"})," (ej. ",(0,r.jsx)(n.a,{href:"https://logto.io",children:"https://logto.io"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Para ",(0,r.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login) Callback URL"}),", escribe ",(0,r.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (ej. ",(0,r.jsx)(n.a,{href:"https://logto.io/callback/$%7Bconnector_id%7D",children:"https://logto.io/callback/${connector_id}"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"mobile-web-mobile-\uc6f9",children:"Mobile Web (Mobile \uc6f9)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Para ",(0,r.jsx)(n.code,{children:"\uc11c\ube44\uc2a4 URL(Service URL)"}),", escribe ",(0,r.jsx)(n.code,{children:"http(s)://YOUR_URL"})," (ej. ",(0,r.jsx)(n.a,{href:"https://logto.io",children:"https://logto.io"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Para ",(0,r.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login) Callback URL"}),", escribe ",(0,r.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (ej. ",(0,r.jsx)(n.a,{href:"https://logto.io/callback/$%7Bconnector_id%7D",children:"https://logto.io/callback/${connector_id}"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,r.jsx)(n.strong,{children:"Precauci\xf3n"})]}),"\n",(0,r.jsxs)(n.p,{children:["El ",(0,r.jsx)(n.code,{children:"connector_id"})," se puede encontrar en la barra superior de la p\xe1gina de detalles del conector en la Consola de Administraci\xf3n de Logto."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configure-logto",children:"Configurar Logto"}),"\n",(0,r.jsx)(n.h3,{id:"config-types",children:"Tipos de configuraci\xf3n"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipo"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientSecret"}),(0,r.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"clientId"})," es el ",(0,r.jsx)(n.code,{children:"Client ID"})," de tu proyecto.\n(Puedes encontrarlo en ",(0,r.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc815\ubcf4(Application Info)"})," de tu proyecto en los desarrolladores de Naver)."]}),"\n",(0,r.jsx)(n.h4,{id:"clientseceret",children:"clientSecret"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"clientSecret"})," es el ",(0,r.jsx)(n.code,{children:"Client Secret"})," de tu proyecto.\n(Puedes encontrarlo en ",(0,r.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc815\ubcf4(Application Info)"})," de tu proyecto en los desarrolladores de Naver)."]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(58101);const r={},c=o.createContext(r);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);