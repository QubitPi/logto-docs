"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9395],{27665:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"integrations/email/smtp/README","title":"Configura la verificaci\xf3n por correo electr\xf3nico con SMTP","description":"El conector oficial de Logto para SMTP.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/smtp/README.mdx","sourceDirName":"integrations/email/smtp","slug":"/integrations/smtp","permalink":"/es/integrations/smtp","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/smtp/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/smtp","sidebar_label":"SMTP","sidebar_custom_props":{"description":"El SMTP es un protocolo de comunicaci\xf3n est\xe1ndar de internet para la transmisi\xf3n de correo electr\xf3nico."}},"sidebar":"integrationsSidebar","previous":{"title":"SendGrid Email","permalink":"/es/integrations/sendgrid-email"},"next":{"title":"Aliyun Short Message","permalink":"/es/integrations/aliyun-sms"}}');var i=r(25105),o=r(79621),t=r(44255);const c={slug:"/integrations/smtp",sidebar_label:"SMTP",sidebar_custom_props:{description:"El SMTP es un protocolo de comunicaci\xf3n est\xe1ndar de internet para la transmisi\xf3n de correo electr\xf3nico."}},a="Configura la verificaci\xf3n por correo electr\xf3nico con SMTP",d={},l=[...t.RM,{value:"Comenzar",id:"get-started",level:2},{value:"Configurar el conector SMTP",id:"set-up-smtp-connector",level:2},{value:"Configuraci\xf3n para el uso de Gmail",id:"set-up-for-gmail-use",level:3},{value:"Integraci\xf3n con la API SMTP de SendGrid",id:"integrate-with-sendgrid-smtp-api",level:3},{value:"Configuraci\xf3n con cuenta de correo directo de Aliyun",id:"configure-with-aliyun-direct-mail-account",level:3},{value:"Probar el conector SMTP",id:"test-smtp-connector",level:3},{value:"Tipos de configuraci\xf3n",id:"config-types",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configura-la-verificaci\xf3n-por-correo-electr\xf3nico-con-smtp",children:"Configura la verificaci\xf3n por correo electr\xf3nico con SMTP"})}),"\n",(0,i.jsx)(n.p,{children:"El conector oficial de Logto para SMTP."}),"\n",(0,i.jsx)(t.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Comenzar"}),"\n",(0,i.jsx)(n.p,{children:"El SMTP (Protocolo Simple de Transferencia de Correo) es un protocolo de comunicaci\xf3n est\xe1ndar de internet para la transmisi\xf3n de correo electr\xf3nico. Los servidores de correo y otros agentes de transferencia de mensajes utilizan SMTP para enviar y recibir mensajes."}),"\n",(0,i.jsx)(n.h2,{id:"set-up-smtp-connector",children:"Configurar el conector SMTP"}),"\n",(0,i.jsx)(n.p,{children:"SMTP es un protocolo de transmisi\xf3n que no es exclusivo de algunos proveedores de servicios de correo electr\xf3nico espec\xedficos, sino que puede funcionar con todos los proveedores."}),"\n",(0,i.jsx)(n.p,{children:"Ahora estamos ofreciendo gu\xedas sobre c\xf3mo usar el conector SMTP para enviar correos electr\xf3nicos siguiendo a los proveedores para tu mejor comprensi\xf3n:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Gmail"})," es el proveedor de servicios de correo electr\xf3nico m\xe1s popular en todo el mundo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Correo directo de Aliyun"})," y ",(0,i.jsx)(n.em,{children:"correo de SendGrid"}),". Algunos de ustedes podr\xedan estar familiarizados con estos dos proveedores de servicios de correo electr\xf3nico porque el equipo de Logto proporcion\xf3 conectores correspondientes; es probable que tengan una idea general de ellos."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Esperamos que puedas resolver la configuraci\xf3n de otros proveedores de correo electr\xf3nico con los siguientes ejemplos ","\ud83d\ude80"]}),"\n",(0,i.jsx)(n.h3,{id:"set-up-for-gmail-use",children:"Configuraci\xf3n para el uso de Gmail"}),"\n",(0,i.jsxs)(n.p,{children:["Puedes obtener una nueva cuenta de Gmail en ",(0,i.jsx)(n.a,{href:"https://mail.google.com/",children:"Gmail"}),", o puedes usar una cuenta existente si tienes una."]}),"\n",(0,i.jsxs)(n.p,{children:["Un ",(0,i.jsx)(n.a,{href:"https://support.google.com/a/answer/176600",children:"post oficial de Gmail"})," muestra c\xf3mo determinar los valores de las propiedades requeridas para operar Gmail a trav\xe9s de un conector SMTP."]}),"\n",(0,i.jsx)(n.h3,{id:"integrate-with-sendgrid-smtp-api",children:"Integraci\xf3n con la API SMTP de SendGrid"}),"\n",(0,i.jsxs)(n.p,{children:["Inicialmente, asumimos que ya tienes una cuenta de SendGrid. Si no, crea una nueva cuenta en el ",(0,i.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"sitio web de SendGrid"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Puedes encontrar una gu\xeda paso a paso sobre ",(0,i.jsx)(n.a,{href:"https://docs.sendgrid.com/for-developers/sending-email/integrating-with-the-smtp-api",children:'"Integraci\xf3n con la API SMTP"'}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Los desarrolladores pueden acceder a los detalles del ",(0,i.jsx)(n.em,{children:"remitente"})," en la ",(0,i.jsx)(n.a,{href:"https://mc.sendgrid.com/senders",children:'"Gesti\xf3n de remitentes"'}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"configure-with-aliyun-direct-mail-account",children:"Configuraci\xf3n con cuenta de correo directo de Aliyun"}),"\n",(0,i.jsxs)(n.p,{children:["Inicia sesi\xf3n en el ",(0,i.jsx)(n.a,{href:"https://cn.aliyun.com/",children:"sitio web de Aliyun"}),". Registra una nueva cuenta si no tienes una."]}),"\n",(0,i.jsxs)(n.p,{children:["Sigue la ",(0,i.jsx)(n.a,{href:"https://www.alibabacloud.com/help/en/directmail/latest/send-emails-using-smtp",children:"gu\xeda para enviar correos electr\xf3nicos usando SMTP"})," y completa esas 'tareas' para obtener las configuraciones e informaci\xf3n requeridas."]}),"\n",(0,i.jsxs)(n.p,{children:["Puedes ir a la ",(0,i.jsx)(n.a,{href:"https://www.alibabacloud.com/help/en/directmail/latest/smtp-service-address",children:"p\xe1gina de direcci\xf3n del servicio SMTP"})," para elegir un host de direcci\xf3n de servicio SMTP y n\xfamero de puerto adecuados."]}),"\n",(0,i.jsxs)(n.p,{children:['Para verificar "Direcciones de remitente", puedes encontrar la entrada en el panel de navegaci\xf3n lateral en la ',(0,i.jsx)(n.a,{href:"https://dm.console.aliyun.com/",children:"consola de DirectMail"}),". Deber\xedas ver ",(0,i.jsx)(n.code,{children:"Direcci\xf3n del remitente"})," y ",(0,i.jsx)(n.code,{children:"Contrase\xf1a SMTP"})," aqu\xed."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,i.jsxs)(n.p,{children:['Solo se proporciona una plantilla de muestra en los casos anteriores para simplificar las cosas. Deber\xedas agregar m\xe1s plantillas para otros casos de uso.\nDebes cambiar los valores envueltos con "<" y ">" de acuerdo con la configuraci\xf3n de tu cuenta de Gmail, SendGrid o Aliyun y elegir mantener otros campos sin "<" y ">".\nAgrega ',(0,i.jsx)(n.code,{children:"{{code}}"})," como un marcador de posici\xf3n en el contenido de las plantillas para mostrar un c\xf3digo de verificaci\xf3n aleatorio al enviar correos electr\xf3nicos."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"test-smtp-connector",children:"Probar el conector SMTP"}),"\n",(0,i.jsx)(n.p,{children:'Puedes escribir una direcci\xf3n de correo electr\xf3nico y hacer clic en "Enviar" para ver si la configuraci\xf3n puede funcionar antes de "Guardar y Listo".'}),"\n",(0,i.jsxs)(n.p,{children:["Eso es todo. No olvides ",(0,i.jsx)(n.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Habilitar el conector en la experiencia de inicio de sesi\xf3n"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Tipos de configuraci\xf3n"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nombre"}),(0,i.jsx)(n.th,{children:"Tipo"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"host"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"port"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromEmail"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"templates"}),(0,i.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedades de la plantilla"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valores del enum"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usageType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"contentType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'text/plain' | 'text/html'"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Opciones de autenticaci\xf3n de nombre de usuario y contrase\xf1a"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nombre"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valores del enum"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"user"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pass"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"enum string (OPCIONAL)"}),(0,i.jsx)(n.td,{children:"'login'"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Tambi\xe9n puedes configurar ",(0,i.jsx)(n.a,{href:"https://nodemailer.com/smtp/oauth2/",children:"Opciones de autenticaci\xf3n OAuth2"})," y otras configuraciones avanzadas. Consulta ",(0,i.jsx)(n.a,{href:"https://nodemailer.com/smtp/",children:"aqu\xed"})," para m\xe1s detalles."]}),"\n",(0,i.jsx)(n.p,{children:"Dimos un ejemplo de configuraci\xf3n con todos los par\xe1metros configurables en el cuadro de texto para ayudarte a configurar tu propia configuraci\xf3n. (Eres responsable de la configuraci\xf3n, algunos valores son para fines de demostraci\xf3n y pueden no ajustarse a tu caso de uso.)"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},44255:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>o});var s=r(25105),i=r(79621);const o=[];function t(e){const n={a:"a",admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,s.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},79621:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var s=r(58101);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);