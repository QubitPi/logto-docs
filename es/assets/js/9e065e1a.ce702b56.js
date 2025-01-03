"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[97179],{43104:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"end-user-flows/enterprise-sso/README","title":"SSO empresarial","description":"Single sign-on (SSO) permite a los usuarios iniciar sesi\xf3n en m\xfaltiples aplicaciones con un solo conjunto de credenciales. Simplifica el proceso de autenticaci\xf3n para los usuarios empresariales, especialmente para las plataformas SaaS de la fuerza laboral actual.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/README.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/","permalink":"/es/end-user-flows/enterprise-sso/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Desactivar el registro de usuarios","permalink":"/es/end-user-flows/sign-up-and-sign-in/disable-user-registration"},"next":{"title":"SSO iniciado por SP","permalink":"/es/end-user-flows/enterprise-sso/sp-initiated-sso"}}');var o=s(25105),r=s(79621);const a={sidebar_position:2},t="SSO empresarial",c={},d=[{value:"Componentes clave del SSO empresarial",id:"key-components-of-enterprise-sso",level:2},{value:"Flujo de trabajo de SSO compatible",id:"supported-sso-workflow",level:2},{value:"Protocolos de SSO compatibles",id:"supported-sso-protocols",level:2},{value:"Preguntas frecuentes",id:"faqs",level:2},{value:"\xbfC\xf3mo agregar botones de conector SSO e iniciar sesi\xf3n directamente con el proveedor SSO en mi sitio web?",id:"how-to-add-sso-connector-buttons-and-directly-sign-in-with-sso-provider-on-my-website",level:3},{value:"Recursos relacionados",id:"related-resources",level:2}];function l(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:n,Url:a}=i;return n||u("Details",!0),a||u("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"sso-empresarial",children:"SSO empresarial"})}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://auth.wiki/single-sign-on",children:"Single sign-on (SSO)"})," permite a los usuarios iniciar sesi\xf3n en m\xfaltiples aplicaciones con un solo conjunto de credenciales. Simplifica el proceso de autenticaci\xf3n para los usuarios empresariales, especialmente para las plataformas SaaS de la fuerza laboral actual."]}),"\n",(0,o.jsxs)(i.p,{children:["Logto mejora la experiencia de SSO al proporcionar una amplia gama de conectores de SSO empresarial que puedes configurar e integrar f\xe1cilmente con tus aplicaciones, por ejemplo, ",(0,o.jsx)(i.a,{href:"/integrations/google-workspace",children:"Google Workspace"}),", ",(0,o.jsx)(i.a,{href:"/integrations/entra-id-saml",children:"Microsoft Azure AD"}),", ",(0,o.jsx)(i.a,{href:"/integrations/okta",children:"Okta"}),", y m\xe1s."]}),"\n",(0,o.jsx)(i.h2,{id:"key-components-of-enterprise-sso",children:"Componentes clave del SSO empresarial"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Proveedor de identidad (IdP)"}),": Un servicio que verifica las identidades de los usuarios y gestiona sus credenciales de inicio de sesi\xf3n. Despu\xe9s de confirmar la identidad de un usuario, el IdP genera tokens de autenticaci\xf3n o afirmaciones y permite al usuario acceder a varias aplicaciones o servicios sin necesidad de iniciar sesi\xf3n nuevamente. Esencialmente, es el sistema de referencia para gestionar las identidades y permisos de los empleados en tu empresa. Ejemplos: Okta, Azure AD, Google Workspace, LastPass, OneLogin, Ping Identity, Cyberark, etc. ",(0,o.jsx)(i.a,{href:"https://auth.wiki/identity-provider",children:"Aprende m\xe1s sobre IdP"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Proveedor de servicios (SP)"}),": Un sistema o aplicaci\xf3n que requiere autenticaci\xf3n de usuario y depende del Proveedor de Identidad (IdP) para la autenticaci\xf3n. El SP recibe tokens de autenticaci\xf3n o afirmaciones del IdP, otorgando acceso a sus recursos sin requerir credenciales de inicio de sesi\xf3n separadas. Ejemplos: Slack, Shopify, Dropbox, Figma, Notion, etc... y tu servicio. ",(0,o.jsx)(i.a,{href:"https://auth.wiki/service-provider",children:"Aprende m\xe1s sobre SP"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"Identidad empresarial"}),": Generalmente identificada por su uso de un dominio de correo electr\xf3nico de la empresa para iniciar sesi\xf3n. Esta cuenta de correo electr\xf3nico empresarial finalmente pertenece a la empresa."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"supported-sso-workflow",children:"Flujo de trabajo de SSO compatible"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/end-user-flows/enterprise-sso/idp-initiated-sso",children:(0,o.jsx)(i.strong,{children:"SSO iniciado por IdP"})}),": En el SSO iniciado por IdP, el Proveedor de Identidad (IdP) controla principalmente el proceso de inicio de sesi\xf3n \xfanico. Este proceso comienza cuando un usuario inicia sesi\xf3n en la plataforma del IdP, como un portal de la empresa o un panel de identidad centralizado. Una vez autenticado, el IdP genera un token de autenticaci\xf3n o afirmaci\xf3n, que luego se utiliza para otorgar al usuario acceso a m\xfaltiples servicios o aplicaciones conectadas (SP) sin requerir inicios de sesi\xf3n adicionales.\n",(0,o.jsx)(i.img,{alt:"SSO iniciado por IdP",src:s(86162).A+"",width:"2704",height:"560"})]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/end-user-flows/enterprise-sso/sp-initiated-sso",children:(0,o.jsx)(i.strong,{children:"SSO iniciado por SP"})}),": En el SSO iniciado por SP, el Proveedor de Servicios (SP) toma la iniciativa en iniciar y gestionar el proceso de inicio de sesi\xf3n \xfanico, a menudo preferido en escenarios B2B. Este escenario ocurre cuando un usuario intenta acceder a un servicio o aplicaci\xf3n espec\xedfica (el SP) y es redirigido a su IdP para la autenticaci\xf3n. Tras un inicio de sesi\xf3n exitoso en el IdP, se env\xeda un token de autenticaci\xf3n de vuelta al SP, otorgando acceso al usuario. Logto admite SSO iniciado por SP para tus servicios B2B.\n",(0,o.jsx)(i.img,{alt:"SSO iniciado por SP",src:s(80670).A+"",width:"2704",height:"560"})]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"supported-sso-protocols",children:"Protocolos de SSO compatibles"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/integrations/saml-sso",children:(0,o.jsx)(i.strong,{children:"SAML"})}),": ",(0,o.jsx)(i.a,{href:"https://auth.wiki/saml",children:"Security Assertion Markup Language (SAML)"})," es un est\xe1ndar abierto basado en XML para intercambiar datos de autenticaci\xf3n y autorizaci\xf3n entre un IdP y un SP. Este protocolo es particularmente h\xe1bil para manejar requisitos de seguridad a nivel empresarial complejos."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"/integrations/oidc-sso",children:(0,o.jsx)(i.strong,{children:"OIDC"})}),": ",(0,o.jsx)(i.a,{href:"https://auth.wiki/openid-connect",children:"OpenID Connect (OIDC)"})," es una capa de identidad simple construida sobre el protocolo OAuth 2.0. Emplea JSON / REST para la comunicaci\xf3n, lo que lo hace m\xe1s ligero y mejor adaptado para arquitecturas de aplicaciones modernas, incluidas aplicaciones m\xf3viles y de una sola p\xe1gina (SPAs)."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"faqs",children:"Preguntas frecuentes"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.h3,{id:"how-to-add-sso-connector-buttons-and-directly-sign-in-with-sso-provider-on-my-website",children:"\xbfC\xf3mo agregar botones de conector SSO e iniciar sesi\xf3n directamente con el proveedor SSO en mi sitio web?"})}),(0,o.jsxs)(i.p,{children:["Logto te permite agregar botones de inicio de sesi\xf3n social a tu sitio web e iniciar el proceso de inicio de sesi\xf3n SSO directamente sin mostrar el formulario de inicio de sesi\xf3n predeterminado. Consulta nuestra gu\xeda de ",(0,o.jsx)(i.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"Inicio de sesi\xf3n directo"})," para obtener instrucciones detalladas."]})]}),"\n",(0,o.jsx)(i.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,o.jsx)(a,{href:"https://www.youtube.com/watch?v=-mD8Sfab7sI&t=12s",children:" Experiencia de SSO empresarial"}),"\n",(0,o.jsx)(a,{href:"https://blog.logto.io/idp-vs-sp-initiated-sso",children:(0,o.jsx)(i.p,{children:"SSO iniciado por IdP vs SSO iniciado por SP"})}),"\n",(0,o.jsx)(a,{href:"https://blog.logto.io/enterprise-sso",children:(0,o.jsx)(i.p,{children:"SSO empresarial: Qu\xe9 es, c\xf3mo funciona y por qu\xe9 es importante"})}),"\n",(0,o.jsx)(a,{href:"https://blog.logto.io/single-sign-on",children:"El arte del inicio de sesi\xf3n \xfanico"})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},86162:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/idp-initiated-sso-fa28df4b9ccb0be62e3a5de9d8ee08bc.png"},80670:(e,i,s)=>{s.d(i,{A:()=>n});const n=s.p+"assets/images/sp-initiated-sso-8314b0882ae25cc5d39ba6beb466a367.png"},79621:(e,i,s)=>{s.d(i,{R:()=>a,x:()=>t});var n=s(58101);const o={},r=n.createContext(o);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);