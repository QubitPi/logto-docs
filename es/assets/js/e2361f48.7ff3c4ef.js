"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[55148],{72594:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>t});const o=JSON.parse('{"id":"end-user-flows/enterprise-sso/sp-initiated-sso","title":"SSO iniciado por SP","description":"El SSO iniciado por SP, el m\xe9todo predeterminado y m\xe1s seguro que el SSO iniciado por IdP, permite a los usuarios empresariales iniciar el proceso de inicio de sesi\xf3n SSO desde la p\xe1gina de inicio de sesi\xf3n de Logto. Logto admite tanto el SSO con solicitud de dominio de correo electr\xf3nico como el par\xe1metro de inicio de sesi\xf3n directo para SSO.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/sp-initiated-sso.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/sp-initiated-sso","permalink":"/es/end-user-flows/enterprise-sso/sp-initiated-sso","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/sp-initiated-sso.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"SSO empresarial","permalink":"/es/end-user-flows/enterprise-sso/"},"next":{"title":"IdP-initiated SSO","permalink":"/es/end-user-flows/enterprise-sso/idp-initiated-sso"}}');var s=n(25105),r=n(79621);const a={sidebar_position:1},c="SSO iniciado por SP",d={},t=[{value:"Configura el SSO iniciado por SP",id:"set-up-sp-initiated-sso",level:2},{value:"Experiencia de SSO iniciado por SP",id:"sp-initiated-sso-experience",level:2},{value:"Preguntas frecuentes",id:"faqs",level:2},{value:"\xbfPuedo usar el Nombre/Dominio de la Organizaci\xf3n en lugar del Dominio de Correo Electr\xf3nico para redirigir al IdP?",id:"can-i-use-organization-namedomain-instead-of-email-domain-to-redirect-to-the-idp",level:3},{value:"\xbfPuedo mostrar un bot\xf3n de Conector Empresarial espec\xedfico en la p\xe1gina de inicio de sesi\xf3n?",id:"can-i-display-a-specific-enterprise-connector-button-on-the-sign-in-page",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:o,Details:a}=i;return o||u("CloudLink",!0),a||u("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"sso-iniciado-por-sp",children:"SSO iniciado por SP"})}),"\n",(0,s.jsxs)(i.p,{children:["El SSO iniciado por SP, el m\xe9todo predeterminado y m\xe1s seguro que el ",(0,s.jsx)(i.a,{href:"/end-user-flows/enterprise-sso/idp-initiated-sso",children:"SSO iniciado por IdP"}),", permite a los usuarios empresariales iniciar el proceso de inicio de sesi\xf3n SSO desde la p\xe1gina de inicio de sesi\xf3n de Logto. Logto admite tanto el ",(0,s.jsx)(i.a,{href:"#sp-initiated-sso-experience",children:"SSO con solicitud de dominio de correo electr\xf3nico"})," como el ",(0,s.jsx)(i.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in#enterprise-sso",children:"par\xe1metro de inicio de sesi\xf3n directo para SSO"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"set-up-sp-initiated-sso",children:"Configura el SSO iniciado por SP"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Habilita el SSO empresarial"})," en tu sistema de identidad"]}),"\n",(0,s.jsxs)(i.p,{children:["Para activar el SSO empresarial, navega a la ",(0,s.jsx)(o,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Consola > Experiencia de inicio de sesi\xf3n > Registro e inicio de sesi\xf3n"}),' y activa la configuraci\xf3n "Habilitar SSO empresarial". Una vez habilitado, aparecer\xe1 un bot\xf3n de "Inicio de sesi\xf3n \xfanico" en tu p\xe1gina de inicio de sesi\xf3n. Los usuarios empresariales con dominios de correo electr\xf3nico habilitados para SSO pueden acceder a tus servicios a trav\xe9s de sus proveedores de identidad empresariales.']}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Crea conectores empresariales"})," para diferentes clientes"]}),"\n",(0,s.jsxs)(i.p,{children:["A continuaci\xf3n, necesitas integrar cada proveedor de identidad empresarial para tus clientes. Similar al inicio de sesi\xf3n social, crea un nuevo conector empresarial en Logto y configura los ajustes necesarios. Navega a la ",(0,s.jsx)(o,{to:"/enterprise-sso",children:"Consola > SSO empresarial"}),', haz clic en el bot\xf3n "Agregar conector empresarial" y sigue las instrucciones para configurar el conector. Consulta la ',(0,s.jsx)(i.a,{href:"/connectors/enterprise-connectors/",children:"configuraci\xf3n del conector SSO empresarial"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Configura dominios de correo electr\xf3nico"})," para el conector empresarial"]}),"\n",(0,s.jsx)(i.p,{children:"Las identidades de SSO empresarial generalmente se reconocen por un dominio de correo electr\xf3nico de la empresa. En la pesta\xf1a de Experiencia de SSO de la p\xe1gina de detalles de cada conector empresarial, puedes especificar los dominios de correo electr\xf3nico asociados."}),"\n",(0,s.jsx)(i.p,{children:"Los usuarios con los dominios de correo electr\xf3nico especificados estar\xe1n restringidos a iniciar sesi\xf3n exclusivamente a trav\xe9s de este conector SSO empresarial, mientras que otros m\xe9todos de inicio de sesi\xf3n, como c\xf3digos de verificaci\xf3n por correo electr\xf3nico, autenticaci\xf3n por correo electr\xf3nico y contrase\xf1a, o inicio de sesi\xf3n social, estar\xe1n deshabilitados para estos usuarios. El conector SSO ser\xe1 visible solo para usuarios con los dominios de correo electr\xf3nico especificados."}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"Los dominios de correo electr\xf3nico p\xfablicos (por ejemplo, gmail.com, yahoo.com) no pueden vincularse a un conector empresarial."})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"sp-initiated-sso-experience",children:"Experiencia de SSO iniciado por SP"}),"\n",(0,s.jsx)(i.p,{children:"El SSO se activa cuando los usuarios intentan iniciar sesi\xf3n utilizando un dominio de correo electr\xf3nico empresarial configurado para SSO. Este proceso omite los m\xe9todos de verificaci\xf3n est\xe1ndar como las contrase\xf1as."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Bot\xf3n de inicio de sesi\xf3n \xfanico"}),":"]}),"\n",(0,s.jsx)(i.p,{children:'Cuando el m\xe9todo de inicio de sesi\xf3n SSO empresarial est\xe1 habilitado, aparecer\xe1 un bot\xf3n de "Inicio de sesi\xf3n \xfanico" como una opci\xf3n alternativa de inicio de sesi\xf3n en la p\xe1gina de inicio de sesi\xf3n. Al hacer clic en este enlace, se solicita a los usuarios que ingresen su direcci\xf3n de correo electr\xf3nico empresarial para iniciar el proceso de SSO.'}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Conector \xfanico: Si solo un conector SSO empresarial est\xe1 asociado con el dominio de correo electr\xf3nico del usuario, el usuario es redirigido directamente a la p\xe1gina de inicio de sesi\xf3n del IdP."}),"\n",(0,s.jsx)(i.li,{children:"M\xfaltiples conectores: Si m\xfaltiples conectores SSO empresariales est\xe1n asociados con el dominio de correo electr\xf3nico del usuario, el usuario primero seleccionar\xe1 el IdP deseado de una lista antes de ser redirigido a la p\xe1gina de inicio de sesi\xf3n del IdP."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Bot\xf3n de inicio de sesi\xf3n \xfanico",src:n(44053).A+"",width:"2377",height:"1320"})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Inicio de sesi\xf3n universal por correo electr\xf3nico"}),":"]}),"\n",(0,s.jsx)(i.p,{children:'En el formulario de inicio de sesi\xf3n de identificador universal (con el m\xe9todo de inicio de sesi\xf3n por correo electr\xf3nico habilitado), la detecci\xf3n de dominio de correo electr\xf3nico SSO empresarial est\xe1 habilitada por defecto. Cuando los usuarios ingresan su direcci\xf3n de correo electr\xf3nico, Logto identifica autom\xe1ticamente si un conector SSO empresarial est\xe1 asociado con ese dominio. Si se encuentra una coincidencia, el formulario de inicio de sesi\xf3n predeterminado se actualiza: el bot\xf3n "Iniciar sesi\xf3n" cambia a un bot\xf3n de "Inicio de sesi\xf3n \xfanico", restringiendo al usuario a iniciar sesi\xf3n con el/los conector(es) SSO empresarial(es).'}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Inicio de sesi\xf3n universal por correo electr\xf3nico",src:n(12937).A+"",width:"2377",height:"1320"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"faqs",children:"Preguntas frecuentes"}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(i.h3,{id:"can-i-use-organization-namedomain-instead-of-email-domain-to-redirect-to-the-idp",children:"\xbfPuedo usar el Nombre/Dominio de la Organizaci\xf3n en lugar del Dominio de Correo Electr\xf3nico para redirigir al IdP?"})}),(0,s.jsxs)(i.p,{children:["Actualmente, la experiencia de inicio de sesi\xf3n preconstruida de Logto solo admite ",(0,s.jsx)(i.strong,{children:"SSO con solicitud de dominio de correo electr\xf3nico"}),", no ",(0,s.jsx)(i.strong,{children:"SSO con solicitud de dominio de organizaci\xf3n"}),"."]}),(0,s.jsxs)(i.p,{children:["Puedes crear una p\xe1gina de enrutamiento personalizada en tu lado del cliente utilizando los par\xe1metros de autenticaci\xf3n con ",(0,s.jsx)(i.code,{children:"directSignIn:'sso:{connectorId}"}),". Esta p\xe1gina redirigir\xe1 a los grandes clientes empresariales al IdP apropiado seg\xfan su dominio de organizaci\xf3n. Aprende m\xe1s sobre el ",(0,s.jsx)(i.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"par\xe1metro de inicio de sesi\xf3n directo"}),"."]})]}),"\n",(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(i.h3,{id:"can-i-display-a-specific-enterprise-connector-button-on-the-sign-in-page",children:"\xbfPuedo mostrar un bot\xf3n de Conector Empresarial espec\xedfico en la p\xe1gina de inicio de sesi\xf3n?"})}),(0,s.jsx)(i.p,{children:"Diferentes clientes empresariales utilizan diferentes proveedores de identidad para gestionar a sus empleados y solicitan diferentes alcances (OIDC) o atributos (SAML). Por lo tanto, no se recomienda mostrar un bot\xf3n de conector empresarial destinado a un cliente espec\xedfico en una p\xe1gina de inicio de sesi\xf3n gen\xe9rica."}),(0,s.jsxs)(i.p,{children:["Sin embargo, si est\xe1s desarrollando un producto B2E y deseas mostrar un bot\xf3n para un cliente empresarial espec\xedfico, puedes crear una p\xe1gina de inicio de sesi\xf3n personalizada y usar ",(0,s.jsx)(i.code,{children:"directSignIn:sso"})," para enrutar el bot\xf3n adecuadamente. Aprende m\xe1s sobre el ",(0,s.jsx)(i.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"par\xe1metro de inicio de sesi\xf3n directo"}),"."]})]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44053:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/sso-button-sign-in-93ab8ccddea7963a14afc949ed91a8f7.png"},12937:(e,i,n)=>{n.d(i,{A:()=>o});const o=n.p+"assets/images/sso-email-sign-in-6d0aa4bc16a703e35c2e80f86b412b0d.png"},79621:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>c});var o=n(58101);const s={},r=o.createContext(s);function a(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);