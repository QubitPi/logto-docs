"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[70446],{68405:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"end-user-flows/enterprise-sso/enterprise-sso-identity","title":"Identidad SSO empresarial","description":"Vinculaci\xf3n de cuentas SSO empresariales \\\\","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/enterprise-sso-identity.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/enterprise-sso-identity","permalink":"/es/end-user-flows/enterprise-sso/enterprise-sso-identity","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/enterprise-sso-identity.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"IdP-initiated SSO","permalink":"/es/end-user-flows/enterprise-sso/idp-initiated-sso"},"next":{"title":"Autenticaci\xf3n multifactor","permalink":"/es/end-user-flows/mfa/"}}');var o=i(25105),r=i(79621);const a={sidebar_position:3},t="Identidad SSO empresarial",d={},c=[{value:"Vinculaci\xf3n de cuentas SSO empresariales",id:"enterprise-sso-account-linking",level:2},{value:"Autenticaci\xf3n multifactor (MFA) con SSO empresarial",id:"multi-factor-authentication-mfa-with-enterprise-sso",level:2},{value:"Eliminaci\xf3n de un conector empresarial",id:"deleting-an-enterprise-connector",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"identidad-sso-empresarial",children:"Identidad SSO empresarial"})}),"\n",(0,o.jsx)(n.h2,{id:"enterprise-sso-account-linking",children:"Vinculaci\xf3n de cuentas SSO empresariales"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Nuevos usuarios inician sesi\xf3n con SSO empresarial"})}),"\n",(0,o.jsxs)(n.p,{children:["Cuando un nuevo usuario se registra con una nueva identidad SSO empresarial, Logto crear\xe1 autom\xe1ticamente una nueva cuenta de usuario asociada con la identidad empresarial. El ",(0,o.jsx)(n.code,{children:"correo electr\xf3nico principal"}),", ",(0,o.jsx)(n.code,{children:"nombre"})," y ",(0,o.jsx)(n.code,{children:"avatar"})," se completar\xe1n autom\xe1ticamente con los datos proporcionados por el IdP. Otros datos adicionales del perfil del usuario se almacenar\xe1n bajo el perfil de identidad SSO del usuario."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["La situaci\xf3n de vinculaci\xf3n del perfil podr\xeda ser diferente cuando el ",(0,o.jsx)(n.a,{href:"/integrations/saml-sso#step-3-configure-user-attributes-mapping",children:"mapeo de atributos SAML"})," no est\xe1 configurado correctamente o el proveedor de identidad no proporciona el correo electr\xf3nico del usuario."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Usuarios existentes inician sesi\xf3n con SSO empresarial"})}),"\n",(0,o.jsx)(n.p,{children:"Si la direcci\xf3n de correo electr\xf3nico asociada con la identidad SSO empresarial coincide con una cuenta de usuario existente en Logto, Logto vincular\xe1 autom\xe1ticamente la identidad SSO empresarial a la cuenta de usuario existente."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Una vez que un dominio de correo electr\xf3nico se ha asociado con un conector SSO empresarial, todos los usuarios existentes con el dominio de correo electr\xf3nico especificado estar\xe1n restringidos a iniciar sesi\xf3n con el conector SSO empresarial. Sus m\xe9todos de inicio de sesi\xf3n anteriores ser\xe1n bloqueados. Por ejemplo, m\xe9todos de inicio de sesi\xf3n por correo electr\xf3nico / contrase\xf1a, c\xf3digo de verificaci\xf3n por correo electr\xf3nico y m\xe9todos de inicio de sesi\xf3n social."})}),"\n",(0,o.jsx)(n.h2,{id:"multi-factor-authentication-mfa-with-enterprise-sso",children:"Autenticaci\xf3n multifactor (MFA) con SSO empresarial"}),"\n",(0,o.jsxs)(n.p,{children:["Al usar SSO empresarial, los requisitos de MFA generalmente son gestionados por el IdP. En Logto, todas las identidades autenticadas desde el IdP se consideran confiables, por lo que se omite la ",(0,o.jsx)(n.a,{href:"/end-user-flows/mfa",children:"validaci\xf3n de MFA"})," para los usuarios que inician sesi\xf3n a trav\xe9s de SSO empresarial para mejorar la experiencia del usuario. Es esencial asegurarse de que la protecci\xf3n MFA est\xe9 habilitada en el lado del ",(0,o.jsx)(n.a,{href:"/end-user-flows/enterprise-sso#key-components-of-enterprise-sso",children:"IdP"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"deleting-an-enterprise-connector",children:"Eliminaci\xf3n de un conector empresarial"}),"\n",(0,o.jsx)(n.p,{children:"Cuando eliminas un conector empresarial de Logto:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Las cuentas de usuario permanecen"}),": Las cuentas de usuario no se eliminan; solo se elimina su v\xednculo con el proveedor de identidad empresarial."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"La pr\xf3xima vez que los usuarios inicien sesi\xf3n"}),": La pr\xf3xima vez que estos usuarios intenten iniciar sesi\xf3n, se les pedir\xe1 que utilicen un m\xe9todo alternativo, como el m\xe9todo de inicio de sesi\xf3n est\xe1ndar configurado en Logto (por ejemplo, correo electr\xf3nico y contrase\xf1a). Si no han establecido previamente una contrase\xf1a, se les guiar\xe1 para crear una en este momento."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Eliminaci\xf3n del perfil de identidad SSO del usuario"}),": La identidad SSO del usuario, as\xed como los datos del perfil asociados, se eliminar\xe1n de Logto."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>t});var s=i(58101);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);