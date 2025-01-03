"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[70467],{29152:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"integrations/email/aws-ses/README","title":"Configura la verificaci\xf3n por correo electr\xf3nico con AWS Direct Mail","description":"El conector oficial de Logto para el servicio de correo directo de AWS.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/aws-ses/README.mdx","sourceDirName":"integrations/email/aws-ses","slug":"/integrations/aws-ses","permalink":"/es/integrations/aws-ses","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/aws-ses/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/aws-ses","sidebar_label":"AWS Direct Mail","sidebar_custom_props":{"description":"Amazon SES es un proveedor de servicios de correo electr\xf3nico en la nube que se puede integrar en cualquier aplicaci\xf3n para el env\xedo masivo de correos electr\xf3nicos.","logoFilename":"aws.svg","darkLogoFilename":"aws-dark.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Aliyun Direct Mail","permalink":"/es/integrations/aliyun-dm"},"next":{"title":"HTTP Email","permalink":"/es/integrations/http-email"}}');var s=r(25105),c=r(79621),o=r(44255);const a={slug:"/integrations/aws-ses",sidebar_label:"AWS Direct Mail",sidebar_custom_props:{description:"Amazon SES es un proveedor de servicios de correo electr\xf3nico en la nube que se puede integrar en cualquier aplicaci\xf3n para el env\xedo masivo de correos electr\xf3nicos.",logoFilename:"aws.svg",darkLogoFilename:"aws-dark.svg"}},d="Configura la verificaci\xf3n por correo electr\xf3nico con AWS Direct Mail",t={},l=[...o.RM,{value:"Comenzar",id:"get-started",level:2},{value:"Configurar un servicio de correo en la consola de servicios de AWS",id:"configure-a-mail-service-in-the-aws-service-console",level:2},{value:"Registrar cuenta de AWS",id:"register-aws-account",level:3},{value:"Crear una identidad",id:"create-a-identity",level:3},{value:"Configuraci\xf3n del conector",id:"configuration-of-the-connector",level:3},{value:"Probar el conector de Amazon SES",id:"test-the-amazon-ses-connector",level:3},{value:"Configurar tipos",id:"configure-types",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configura-la-verificaci\xf3n-por-correo-electr\xf3nico-con-aws-direct-mail",children:"Configura la verificaci\xf3n por correo electr\xf3nico con AWS Direct Mail"})}),"\n",(0,s.jsx)(n.p,{children:"El conector oficial de Logto para el servicio de correo directo de AWS."}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Comenzar"}),"\n",(0,s.jsx)(n.p,{children:"Amazon SES es un proveedor de servicios de correo electr\xf3nico en la nube que se puede integrar en cualquier aplicaci\xf3n para el env\xedo masivo de correos electr\xf3nicos."}),"\n",(0,s.jsx)(n.p,{children:"El equipo de Logto llama a las APIs de Amazon Simple Email Service, con la ayuda de las cuales los usuarios finales de Logto pueden registrarse e iniciar sesi\xf3n en su cuenta de Logto a trav\xe9s del c\xf3digo de verificaci\xf3n por correo."}),"\n",(0,s.jsx)(n.h2,{id:"configure-a-mail-service-in-the-aws-service-console",children:"Configurar un servicio de correo en la consola de servicios de AWS"}),"\n",(0,s.jsx)(n.h3,{id:"register-aws-account",children:"Registrar cuenta de AWS"}),"\n",(0,s.jsxs)(n.p,{children:["Ve a ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS"})," y registra una cuenta."]}),"\n",(0,s.jsx)(n.h3,{id:"create-a-identity",children:"Crear una identidad"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ve a la Consola de ",(0,s.jsx)(n.code,{children:"Amazon Simple Email Service"})]}),"\n",(0,s.jsxs)(n.li,{children:["Crea una identidad, elige una de las siguientes opciones","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Crear un dominio"}),"\n",(0,s.jsx)(n.li,{children:"Crear una direcci\xf3n de correo electr\xf3nico"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configuration-of-the-connector",children:"Configuraci\xf3n del conector"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Haz clic en tu nombre de usuario en la esquina superior derecha de la consola de Amazon para ingresar a ",(0,s.jsx)(n.code,{children:"Credenciales de seguridad"}),". Si no tienes una, crea una ",(0,s.jsx)(n.code,{children:"AccessKey"})," y gu\xe1rdala cuidadosamente."]}),"\n",(0,s.jsxs)(n.li,{children:["Completa la configuraci\xf3n del conector de ",(0,s.jsx)(n.code,{children:"Amazon Simple Email Service"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Usa el ",(0,s.jsx)(n.code,{children:"AccessKey ID"})," y el ",(0,s.jsx)(n.code,{children:"AccessKey Secret"})," obtenidos en el paso 1 para completar ",(0,s.jsx)(n.code,{children:"accessKeyId"})," y ",(0,s.jsx)(n.code,{children:"accessKeySecret"})," respectivamente."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"region"}),": Completa el campo ",(0,s.jsx)(n.code,{children:"region"})," con la regi\xf3n de la identidad que usas para enviar correos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"emailAddress"}),": La direcci\xf3n de correo electr\xf3nico que usas para enviar correos, en el formato de ",(0,s.jsx)(n.code,{children:"Logto\\<noreply@logto.io>"})," o ",(0,s.jsx)(n.code,{children:"\\<noreply@logto.io>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["los siguientes par\xe1metros son opcionales; la descripci\xf3n de los par\xe1metros se puede encontrar en la ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html",children:"documentaci\xf3n de la API de AWS SES"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"feedbackForwardingEmailAddress"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"feedbackForwardingEmailAddressIdentityArn"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"configurationSetName"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"test-the-amazon-ses-connector",children:"Probar el conector de Amazon SES"}),"\n",(0,s.jsx)(n.p,{children:'Puedes escribir una direcci\xf3n de correo electr\xf3nico y hacer clic en "Enviar" para ver si la configuraci\xf3n funciona antes de "Guardar y Listo".'}),"\n",(0,s.jsxs)(n.p,{children:["Eso es todo. No olvides ",(0,s.jsx)(n.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Habilitar el conector en la experiencia de inicio de sesi\xf3n"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"configure-types",children:"Configurar tipos"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nombre"}),(0,s.jsx)(n.th,{children:"Tipo"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessKeyId"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"accessKeySecret"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"region"}),(0,s.jsx)(n.td,{children:"string"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"emailAddress"}),(0,s.jsx)(n.td,{children:"string (OPCIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"emailAddressIdentityArn"}),(0,s.jsx)(n.td,{children:"string (OPCIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"feedbackForwardingEmailAddress"}),(0,s.jsx)(n.td,{children:"string (OPCIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"feedbackForwardingEmailAddressIdentityArn"}),(0,s.jsx)(n.td,{children:"string (OPCIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"configurationSetName"}),(0,s.jsx)(n.td,{children:"string (OPCIONAL)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"templates"}),(0,s.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propiedades de la plantilla"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valores del enumerador"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subject"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"content"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"N/A"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"usageType"}),(0,s.jsx)(n.td,{children:"enum string"}),(0,s.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},44255:(e,n,r)=>{r.d(n,{Ay:()=>a,RM:()=>c});var i=r(25105),s=r(79621);const c=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,i.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},79621:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(58101);const s={},c=i.createContext(s);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);