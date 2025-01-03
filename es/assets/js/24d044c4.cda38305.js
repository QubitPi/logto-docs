"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46448],{9733:(e,n,i)=>{i.d(n,{Ay:()=>t,RM:()=>s});var a=i(25105),o=i(79621);const s=[];function c(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Para obtener m\xe1s informaci\xf3n sobre SSO y c\xf3mo configurar SSO en Logto, por favor consulta la documentaci\xf3n de ",(0,a.jsx)(n.a,{href:"/connectors/enterprise-connectors",children:"SSO empresarial (SAML & OIDC)"})," para comenzar."]})})}function t(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},65659:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"integrations/sso/okta/README","title":"Configura el inicio de sesi\xf3n \xfanico con Okta","description":"Con un m\xednimo esfuerzo de configuraci\xf3n, este conector permite la integraci\xf3n con Okta para SSO empresarial.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/sso/okta/README.mdx","sourceDirName":"integrations/sso/okta","slug":"/integrations/okta","permalink":"/es/integrations/okta","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/sso/okta/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/okta","sidebar_label":"Okta","sidebar_custom_props":{"description":"Centraliza la gesti\xf3n de identidades para clientes, empleados y socios.","darkLogoFilename":"okta-dark.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"OIDC (Enterprise)","permalink":"/es/integrations/oidc-sso"},"next":{"title":"SAML (Enterprise)","permalink":"/es/integrations/saml-sso"}}');var o=i(25105),s=i(79621),c=i(9733);const t={slug:"/integrations/okta",sidebar_label:"Okta",sidebar_custom_props:{description:"Centraliza la gesti\xf3n de identidades para clientes, empleados y socios.",darkLogoFilename:"okta-dark.svg"}},r="Configura el inicio de sesi\xf3n \xfanico con Okta",l={},d=[...c.RM,{value:"Paso 1: Crea una aplicaci\xf3n OIDC en el portal de administraci\xf3n de Okta",id:"step-1-create-an-oidc-application-on-okta-admin-portal",level:2},{value:"Paso 2: Configura los ajustes de la aplicaci\xf3n",id:"step-2-configure-the-application-settings",level:2},{value:"Paso 3: Configura el conector de Logto con las credenciales del cliente",id:"step-3-set-up-logto-connector-with-the-client-credentials",level:2},{value:"Paso 4: Alcances adicionales (Opcional)",id:"step-4-additional-scopes-optional",level:2},{value:"Paso 5: Establece dominios de correo electr\xf3nico y habilita el conector SSO",id:"step-5-set-email-domains-and-enable-the-sso-connector",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configura-el-inicio-de-sesi\xf3n-\xfanico-con-okta",children:"Configura el inicio de sesi\xf3n \xfanico con Okta"})}),"\n",(0,o.jsx)(n.p,{children:"Con un m\xednimo esfuerzo de configuraci\xf3n, este conector permite la integraci\xf3n con Okta para SSO empresarial."}),"\n",(0,o.jsx)(c.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"step-1-create-an-oidc-application-on-okta-admin-portal",children:"Paso 1: Crea una aplicaci\xf3n OIDC en el portal de administraci\xf3n de Okta"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Visita el portal de administraci\xf3n de Okta e inicia sesi\xf3n como administrador."}),"\n",(0,o.jsxs)(n.li,{children:["Navega a la p\xe1gina ",(0,o.jsx)(n.code,{children:"Applications"}),"/",(0,o.jsx)(n.code,{children:"Applications"})," usando el men\xfa lateral."]}),"\n",(0,o.jsxs)(n.li,{children:["Haz clic en el bot\xf3n ",(0,o.jsx)(n.code,{children:"Create App Integration"})," para crear una nueva aplicaci\xf3n OIDC."]}),"\n",(0,o.jsxs)(n.li,{children:["Selecciona la opci\xf3n ",(0,o.jsx)(n.code,{children:"OIDC - OpenID Connect"})," como el ",(0,o.jsx)(n.code,{children:"Sign-in method"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Selecciona la opci\xf3n ",(0,o.jsx)(n.code,{children:"Web Application"})," como el ",(0,o.jsx)(n.code,{children:"Application type"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Okta create application.webp",src:i(56929).A+"",width:"3264",height:"2162"})}),"\n",(0,o.jsxs)(n.p,{children:["Haz clic en el bot\xf3n ",(0,o.jsx)(n.code,{children:"Next"})," para continuar."]}),"\n",(0,o.jsx)(n.h2,{id:"step-2-configure-the-application-settings",children:"Paso 2: Configura los ajustes de la aplicaci\xf3n"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Proporciona un ",(0,o.jsx)(n.code,{children:"App integration name"}),". Se usar\xe1 como el identificador de tu aplicaci\xf3n OIDC."]}),"\n",(0,o.jsxs)(n.li,{children:["A\xf1ade un nuevo ",(0,o.jsx)(n.code,{children:"Sign-in redirect URIs"})," usando la URL de callback del conector SSO de Logto."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Este es el URI al que Okta redirigir\xe1 el navegador del usuario despu\xe9s de una autenticaci\xf3n exitosa. Despu\xe9s de que un usuario se autentique exitosamente con el IdP, el IdP redirige el navegador del usuario de vuelta a este URI designado junto con un c\xf3digo de autorizaci\xf3n. Logto completar\xe1 el proceso de autenticaci\xf3n basado en el c\xf3digo de autorizaci\xf3n recibido de este URI."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Okta application settings.webp",src:i(62286).A+"",width:"3264",height:"2070"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Asigna usuarios a la aplicaci\xf3n."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Basado en los ajustes de ",(0,o.jsx)(n.code,{children:"Assignments"}),", puedes elegir asignar la aplicaci\xf3n a todos los usuarios o a usuarios/grupos espec\xedficos."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Okta assign users.webp",src:i(99170).A+"",width:"3264",height:"2070"})}),"\n",(0,o.jsxs)(n.p,{children:["Haz clic en el bot\xf3n ",(0,o.jsx)(n.code,{children:"Save"})," para guardar los ajustes de la aplicaci\xf3n."]}),"\n",(0,o.jsx)(n.h2,{id:"step-3-set-up-logto-connector-with-the-client-credentials",children:"Paso 3: Configura el conector de Logto con las credenciales del cliente"}),"\n",(0,o.jsx)(n.p,{children:"Despu\xe9s de crear exitosamente la aplicaci\xf3n OIDC, ser\xe1s redirigido a la p\xe1gina de detalles de la aplicaci\xf3n."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Okta client credentials.webp",src:i(82870).A+"",width:"3264",height:"2066"})}),"\n",(0,o.jsxs)(n.p,{children:["Copia el ",(0,o.jsx)(n.code,{children:"client ID"})," y el ",(0,o.jsx)(n.code,{children:"client secret"})," y rellena los campos correspondientes en la pesta\xf1a ",(0,o.jsx)(n.code,{children:"Connection"})," del conector SSO de Logto."]}),"\n",(0,o.jsxs)(n.p,{children:["Usa tu dominio de Okta como el ",(0,o.jsx)(n.code,{children:"issuer"}),". Ejemplo: ",(0,o.jsx)(n.code,{children:"https://dev-12345678.okta.com"}),". Una vez que hayas completado todos los campos, haz clic en el bot\xf3n ",(0,o.jsx)(n.code,{children:"Save"})," para guardar los ajustes del conector."]}),"\n",(0,o.jsxs)(n.p,{children:["Si el enlace del ",(0,o.jsx)(n.code,{children:"issuer"})," que proporcionaste es v\xe1lido, ver\xe1s una lista completa de configuraciones del IdP de Okta analizadas que se muestran debajo del campo ",(0,o.jsx)(n.code,{children:"issuer"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"step-4-additional-scopes-optional",children:"Paso 4: Alcances adicionales (Opcional)"}),"\n",(0,o.jsxs)(n.p,{children:["Usa el campo ",(0,o.jsx)(n.code,{children:"Scope"})," para a\xf1adir alcances adicionales a tu solicitud OAuth. Esto te permitir\xe1 solicitar m\xe1s informaci\xf3n del servidor OAuth de Okta. Por favor, consulta la ",(0,o.jsx)(n.a,{href:"https://developer.okta.com/docs/reference/api/oidc/#scopes",children:"documentaci\xf3n de Okta"})," para m\xe1s detalles sobre los alcances disponibles."]}),"\n",(0,o.jsxs)(n.p,{children:["Independientemente de los ajustes de alcance personalizados, Logto siempre enviar\xe1 los alcances ",(0,o.jsx)(n.code,{children:"openid"}),", ",(0,o.jsx)(n.code,{children:"profile"})," y ",(0,o.jsx)(n.code,{children:"email"})," al IdP. Esto es para asegurar que Logto pueda recuperar correctamente la informaci\xf3n de identidad y la direcci\xf3n de correo electr\xf3nico del usuario."]}),"\n",(0,o.jsx)(n.h2,{id:"step-5-set-email-domains-and-enable-the-sso-connector",children:"Paso 5: Establece dominios de correo electr\xf3nico y habilita el conector SSO"}),"\n",(0,o.jsxs)(n.p,{children:["Proporciona los ",(0,o.jsx)(n.code,{children:"email domains"})," de tu organizaci\xf3n en la pesta\xf1a ",(0,o.jsx)(n.code,{children:"SSO experience"})," del conector de Logto. Esto habilitar\xe1 el conector SSO como un m\xe9todo de autenticaci\xf3n para esos usuarios."]}),"\n",(0,o.jsx)(n.p,{children:"Los usuarios con direcciones de correo electr\xf3nico en los dominios especificados ser\xe1n redirigidos para usar tu conector SSO como su \xfanico m\xe9todo de autenticaci\xf3n."}),"\n",(0,o.jsxs)(n.p,{children:["Para m\xe1s detalles sobre la creaci\xf3n de integraci\xf3n OIDC con Okta, por favor consulta ",(0,o.jsx)(n.a,{href:"https://help.okta.com/oie/en-us/content/topics/apps/apps_app_integration_wizard_oidc.htm",children:"Create OIDC App Integrations"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},62286:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/okta_application_settings-2b81185c3c2ccfc2fec6ef227f2fb196.webp"},99170:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/okta_assign_users-35db3f5189be0ecb9d72f26479f8083f.webp"},82870:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/okta_client_credentials-3c7ed5c2777cf5863a7f099ec964ed61.webp"},56929:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/okta_create_application-4482e3014b50e42c4f2ea27616dbc0f1.webp"},79621:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var a=i(58101);const o={},s=a.createContext(o);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);