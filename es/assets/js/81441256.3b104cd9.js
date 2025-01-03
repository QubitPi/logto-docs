"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3082],{44255:(e,i,n)=>{n.d(i,{Ay:()=>c,RM:()=>t});var s=n(25105),o=n(79621);const t=[];function a(e){const i={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,s.jsx)(i.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function c(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},98252:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"integrations/social/github/README","title":"Configura el inicio de sesi\xf3n social con GitHub","description":"El conector oficial de Logto para el inicio de sesi\xf3n social de GitHub.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/github/README.mdx","sourceDirName":"integrations/social/github","slug":"/integrations/github","permalink":"/es/integrations/github","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/github/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/github","sidebar_label":"GitHub","sidebar_custom_props":{"darkLogoFilename":"github-dark.svg","description":"GitHub es una comunidad en l\xednea para el desarrollo de software y control de versiones."}},"sidebar":"integrationsSidebar","previous":{"title":"Feishu","permalink":"/es/integrations/feishu-web"},"next":{"title":"Google","permalink":"/es/integrations/google"}}');var o=n(25105),t=n(79621),a=n(44255);const c={slug:"/integrations/github",sidebar_label:"GitHub",sidebar_custom_props:{darkLogoFilename:"github-dark.svg",description:"GitHub es una comunidad en l\xednea para el desarrollo de software y control de versiones."}},r="Configura el inicio de sesi\xf3n social con GitHub",l={},d=[...a.RM,{value:"Comenzar",id:"get-started",level:2},{value:"Iniciar sesi\xf3n con cuenta de GitHub",id:"sign-in-with-github-account",level:2},{value:"Crear y configurar la aplicaci\xf3n OAuth",id:"create-and-configure-oauth-app",level:2},{value:"Gesti\xf3n de aplicaciones OAuth",id:"managing-oauth-apps",level:2},{value:"Configura tu conector",id:"configure-your-connector",level:2},{value:"Tipos de configuraci\xf3n",id:"config-types",level:3},{value:"Probar el conector de GitHub",id:"test-github-connector",level:2},{value:"Referencia",id:"reference",level:2}];function u(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"configura-el-inicio-de-sesi\xf3n-social-con-github",children:"Configura el inicio de sesi\xf3n social con GitHub"})}),"\n",(0,o.jsx)(i.p,{children:"El conector oficial de Logto para el inicio de sesi\xf3n social de GitHub."}),"\n",(0,o.jsx)(a.Ay,{}),"\n",(0,o.jsx)(i.h2,{id:"get-started",children:"Comenzar"}),"\n",(0,o.jsx)(i.p,{children:"El conector de GitHub permite a los usuarios finales iniciar sesi\xf3n en tu aplicaci\xf3n utilizando sus propias cuentas de GitHub a trav\xe9s del protocolo de autenticaci\xf3n OAuth 2.0 de GitHub."}),"\n",(0,o.jsx)(i.h2,{id:"sign-in-with-github-account",children:"Iniciar sesi\xf3n con cuenta de GitHub"}),"\n",(0,o.jsxs)(i.p,{children:["Ve al ",(0,o.jsx)(i.a,{href:"https://github.com/",children:"sitio web de GitHub"})," e inicia sesi\xf3n con tu cuenta de GitHub. Puedes registrar una nueva cuenta si no tienes una."]}),"\n",(0,o.jsx)(i.h2,{id:"create-and-configure-oauth-app",children:"Crear y configurar la aplicaci\xf3n OAuth"}),"\n",(0,o.jsxs)(i.p,{children:["Sigue la gu\xeda de ",(0,o.jsx)(i.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app",children:"creaci\xf3n de una aplicaci\xf3n OAuth"})," y registra una nueva aplicaci\xf3n."]}),"\n",(0,o.jsxs)(i.p,{children:["Nombra tu nueva aplicaci\xf3n OAuth en ",(0,o.jsx)(i.strong,{children:"Application name"})," y completa la ",(0,o.jsx)(i.strong,{children:"Homepage URL"})," de la aplicaci\xf3n. Puedes dejar el campo ",(0,o.jsx)(i.strong,{children:"Application description"})," en blanco y personalizar ",(0,o.jsx)(i.strong,{children:"Authorization callback URL"})," como ",(0,o.jsx)(i.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". El ",(0,o.jsx)(i.code,{children:"connector_id"})," se puede encontrar en la barra superior de la p\xe1gina de detalles del conector en la Consola de Administraci\xf3n de Logto."]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:'Nota: Si encuentras el mensaje de error "The redirect_uri MUST match the registered callback URL for this application." al iniciar sesi\xf3n, intenta alinear la URL de devoluci\xf3n de llamada de autorizaci\xf3n de tu aplicaci\xf3n OAuth de GitHub y la URL de redirecci\xf3n de tu aplicaci\xf3n Logto (por supuesto, incluyendo el protocolo) para resolver el problema.'}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Sugerimos no marcar la casilla antes de ",(0,o.jsx)(i.strong,{children:"Enable Device Flow"}),", o los usuarios que inicien sesi\xf3n con GitHub en dispositivos m\xf3viles deber\xe1n confirmar la acci\xf3n de inicio de sesi\xf3n inicial en la aplicaci\xf3n de GitHub. Muchos usuarios de GitHub no instalan la aplicaci\xf3n m\xf3vil de GitHub en sus tel\xe9fonos, lo que podr\xeda bloquear el flujo de inicio de sesi\xf3n. Por favor, ignora nuestra sugerencia si esperas que los usuarios finales confirmen su flujo de inicio de sesi\xf3n. Consulta los detalles del ",(0,o.jsx)(i.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow",children:"flujo de dispositivos"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"managing-oauth-apps",children:"Gesti\xf3n de aplicaciones OAuth"}),"\n",(0,o.jsxs)(i.p,{children:["Ve a la ",(0,o.jsx)(i.a,{href:"https://github.com/settings/developers",children:"p\xe1gina de aplicaciones OAuth"})," y puedes agregar, editar o eliminar aplicaciones OAuth existentes. Tambi\xe9n puedes encontrar el ",(0,o.jsx)(i.code,{children:"Client ID"})," y generar ",(0,o.jsx)(i.code,{children:"Client secrets"})," en las p\xe1ginas de detalles de la aplicaci\xf3n OAuth."]}),"\n",(0,o.jsx)(i.h2,{id:"configure-your-connector",children:"Configura tu conector"}),"\n",(0,o.jsxs)(i.p,{children:["Completa el campo ",(0,o.jsx)(i.code,{children:"clientId"})," y ",(0,o.jsx)(i.code,{children:"clientSecret"})," con el ",(0,o.jsx)(i.em,{children:"Client ID"})," y ",(0,o.jsx)(i.em,{children:"Client Secret"})," que obtuviste de las p\xe1ginas de detalles de la aplicaci\xf3n OAuth mencionadas en la secci\xf3n anterior."]}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"scope"})," es una lista delimitada por espacios de ",(0,o.jsx)(i.a,{href:"https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps",children:"alcances"}),". Si no se proporciona, el alcance por defecto ser\xe1 ",(0,o.jsx)(i.code,{children:"read:user"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"config-types",children:"Tipos de configuraci\xf3n"}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Nombre"}),(0,o.jsx)(i.th,{children:"Tipo"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"clientId"}),(0,o.jsx)(i.td,{children:"string"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"clientSecret"}),(0,o.jsx)(i.td,{children:"string"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"scope"}),(0,o.jsx)(i.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(i.h2,{id:"test-github-connector",children:"Probar el conector de GitHub"}),"\n",(0,o.jsxs)(i.p,{children:["Eso es todo. El conector de GitHub deber\xeda estar disponible ahora. No olvides ",(0,o.jsx)(i.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"habilitar el conector social en la experiencia de inicio de sesi\xf3n"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"reference",children:"Referencia"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps",children:"GitHub - Developers - Apps"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app",children:"GitHub - Developers - Apps - Creating an OAuth App"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},79621:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>c});var s=n(58101);const o={},t=s.createContext(o);function a(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);