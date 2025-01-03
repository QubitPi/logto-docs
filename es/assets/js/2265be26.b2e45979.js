"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[38859],{12314:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>b,frontMatter:()=>m,metadata:()=>o,toc:()=>j});const o=JSON.parse('{"id":"integrate-logto/interact-with-management-api/README","title":"Interactuar con Management API","description":"\xbfQu\xe9 es Logto Management API?","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","sourceDirName":"integrate-logto/interact-with-management-api","slug":"/integrate-logto/interact-with-management-api/","permalink":"/es/integrate-logto/interact-with-management-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrate-logto/interact-with-management-api/README.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Personalizaci\xf3n de la pantalla de consentimiento","permalink":"/es/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding"},"next":{"title":"Estructura de datos de la aplicaci\xf3n","permalink":"/es/integrate-logto/application-data-structure"}}');var t=a(25105),s=a(79621);const r=a.p+"assets/images/logto-management-api-resource-14162a031698ad36ac0f8c04ff683ba2.webp",i=a.p+"assets/images/logto-management-api-details-4994334ef32791d9ebc6c9aa298c9ecd.webp";var l=a(62513),c=a(17571),d=a(55013),u=a(62606),p=a(5516),g=a(79964);const m={sidebar_position:4},h="Interactuar con Management API",x={},j=[{value:"\xbfQu\xe9 es Logto Management API?",id:"what-is-logto-management-api",level:2},{value:"C\xf3mo acceder a Logto Management API",id:"how-to-access-logto-management-api",level:2},{value:"Crear una aplicaci\xf3n M2M",id:"create-an-m2m-app",level:3},...g.RM,{value:"Obtener un token de acceso",id:"fetch-an-access-token",level:3},{value:"Conceptos b\xe1sicos sobre la solicitud de token de acceso",id:"basics-about-access-token-request",level:4},...l.RM,{value:"Obtener token de acceso para Logto Management API",id:"fetch-access-token-for-logto-management-api",level:4},...c.RM,{value:"Respuesta del token de acceso",id:"access-token-response",level:4},...p.RM,{value:"Acceder a Logto Management API usando el token de acceso",id:"access-logto-management-api-using-access-token",level:3},...d.RM,...u.RM,{value:"Escenarios t\xedpicos para usar Logto Management API",id:"typical-scenarios-for-using-logto-management-api",level:2},{value:"Implementar el perfil de usuario por tu cuenta",id:"implement-user-profile-on-your-own",level:3},{value:"B\xfasqueda avanzada de usuarios",id:"advanced-user-search",level:3},{value:"Implementar la gesti\xf3n de organizaciones por tu cuenta",id:"implement-organization-management-on-your-own",level:3},{value:"Consejos para usar Logto Management API",id:"tips-for-using-logto-management-api",level:2},{value:"Gestionar respuestas de API paginadas",id:"managing-paginated-api-responses",level:3},{value:"Usando encabezados de enlace",id:"using-link-headers",level:4},{value:"Usando el encabezado de n\xfamero total",id:"using-total-number-header",level:4},{value:"Cambiar el n\xfamero de p\xe1gina y el tama\xf1o de p\xe1gina",id:"changing-page-number-and-page-size",level:4},{value:"L\xedmite de tasa",id:"rate-limit",level:3},{value:"Recursos relacionados",id:"related-resources",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:a,Url:o}=n;return a||v("CloudLink",!0),o||v("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interactuar-con-management-api",children:"Interactuar con Management API"})}),"\n",(0,t.jsx)(n.h2,{id:"what-is-logto-management-api",children:"\xbfQu\xe9 es Logto Management API?"}),"\n",(0,t.jsxs)(n.p,{children:["El Logto Management API es un conjunto completo de APIs que brinda a los desarrolladores control total sobre su implementaci\xf3n para adaptarse a las necesidades de su producto y pila tecnol\xf3gica. Est\xe1 preconstruido, listado en el ",(0,t.jsx)(a,{to:"/api-resources",children:"Consola > Recursos de API > Logto Management API"}),", y no se puede eliminar ni modificar."]}),"\n",(0,t.jsxs)(n.p,{children:["Su identificador sigue el patr\xf3n ",(0,t.jsx)(n.code,{children:"https://[tenant-id].logto.app/api"})]}),"\n",(0,t.jsx)("img",{alt:"Recurso de Logto Management API",src:r}),"\n",(0,t.jsx)("img",{alt:"Detalles de Logto Management API",src:i}),"\n",(0,t.jsx)(n.p,{children:"Con el Logto Management API, puedes acceder a los robustos servicios de backend de Logto, que son altamente escalables y pueden ser utilizados en una multitud de escenarios. Va m\xe1s all\xe1 de lo que es posible con las capacidades de bajo c\xf3digo de la Consola de Administraci\xf3n."}),"\n",(0,t.jsx)(n.p,{children:"Algunas APIs de uso frecuente se enumeran a continuaci\xf3n:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"User"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listapplications",children:"Application"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listlogs",children:"Audit logs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listroles",children:"Roles"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listresources",children:"Resources"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listconnectors",children:"Connectors"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listorganizations",children:"Organizations"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Para obtener m\xe1s informaci\xf3n sobre las APIs disponibles, visita ",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/",children:"https://openapi.logto.io/"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-access-logto-management-api",children:"C\xf3mo acceder a Logto Management API"}),"\n",(0,t.jsx)(n.h3,{id:"create-an-m2m-app",children:"Crear una aplicaci\xf3n M2M"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Si no est\xe1s familiarizado con el flujo de autenticaci\xf3n M2M (M\xe1quina a M\xe1quina), te recomendamos leer primero ",(0,t.jsx)(n.a,{href:"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow",children:"Comprender el flujo de autenticaci\xf3n"})," para entender los conceptos b\xe1sicos."]})}),"\n",(0,t.jsxs)(n.p,{children:["Ve a ",(0,t.jsx)(a,{to:"/applications",children:"Consola > Aplicaciones"}),', selecciona el tipo de aplicaci\xf3n "M\xe1quina a m\xe1quina" y comienza el proceso de creaci\xf3n.']}),"\n",(0,t.jsx)(g.Ay,{}),"\n",(0,t.jsx)(n.p,{children:"En el m\xf3dulo de asignaci\xf3n de roles, puedes ver que se incluyen todos los roles M2M, y los roles indicados por un icono de Logto significan que estos roles incluyen permisos de Logto Management API."}),"\n",(0,t.jsx)(n.p,{children:"Ahora asigna roles M2M que incluyan permisos de Logto Management API para tu aplicaci\xf3n M2M."}),"\n",(0,t.jsx)(n.h3,{id:"fetch-an-access-token",children:"Obtener un token de acceso"}),"\n",(0,t.jsx)(n.h4,{id:"basics-about-access-token-request",children:"Conceptos b\xe1sicos sobre la solicitud de token de acceso"}),"\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h4,{id:"fetch-access-token-for-logto-management-api",children:"Obtener token de acceso para Logto Management API"}),"\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(n.h4,{id:"access-token-response",children:"Respuesta del token de acceso"}),"\n",(0,t.jsx)(n.p,{children:"Un cuerpo de respuesta de acceso exitoso ser\xeda como:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // Usa este token para acceder a Logto Management API\n  "expires_in": 3600, // Expiraci\xf3n del token en segundos\n  "token_type": "Bearer", // Tipo de autenticaci\xf3n para tu solicitud al usar el token de acceso\n  "scope": "all" // alcance `all` para Logto Management API\n}\n'})}),"\n",(0,t.jsx)(p.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"access-logto-management-api-using-access-token",children:"Acceder a Logto Management API usando el token de acceso"}),"\n",(0,t.jsx)(d.Ay,{}),"\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"typical-scenarios-for-using-logto-management-api",children:"Escenarios t\xedpicos para usar Logto Management API"}),"\n",(0,t.jsx)(n.p,{children:"Nuestros desarrolladores han implementado muchas caracter\xedsticas adicionales usando Logto Management API. Creemos que nuestra API es altamente escalable y puede soportar una amplia gama de tus necesidades. Aqu\xed hay algunos ejemplos de escenarios que no son posibles con la Consola de Administraci\xf3n de Logto pero que se pueden lograr a trav\xe9s de Logto Management API."}),"\n",(0,t.jsx)(n.h3,{id:"implement-user-profile-on-your-own",children:"Implementar el perfil de usuario por tu cuenta"}),"\n",(0,t.jsx)(n.p,{children:"Logto actualmente no proporciona una soluci\xf3n de interfaz de usuario preconstruida para perfiles de usuario. Reconocemos que los perfiles de usuario est\xe1n estrechamente ligados a los atributos de negocio y producto. Mientras trabajamos en determinar el mejor enfoque, sugerimos usar nuestras APIs para crear tu propia soluci\xf3n. Por ejemplo, puedes utilizar nuestra API de interacci\xf3n, API de perfil y API de c\xf3digo de verificaci\xf3n para desarrollar una soluci\xf3n personalizada que satisfaga tus necesidades."}),"\n",(0,t.jsx)(n.h3,{id:"advanced-user-search",children:"B\xfasqueda avanzada de usuarios"}),"\n",(0,t.jsxs)(n.p,{children:["La Consola de Administraci\xf3n de Logto admite funciones b\xe1sicas de b\xfasqueda y filtrado. Para opciones de b\xfasqueda avanzada como b\xfasqueda difusa, coincidencia exacta y sensibilidad a may\xfasculas, consulta nuestros tutoriales y gu\xedas de ",(0,t.jsx)(n.a,{href:"/user-management/advanced-user-search",children:"B\xfasqueda Avanzada de Usuarios"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"implement-organization-management-on-your-own",children:"Implementar la gesti\xf3n de organizaciones por tu cuenta"}),"\n",(0,t.jsxs)(n.p,{children:["Si est\xe1s utilizando la funci\xf3n de ",(0,t.jsx)(n.a,{href:"/organizations",children:"organizaciones"})," para construir tu aplicaci\xf3n multi-tenant, podr\xedas necesitar Logto Management API para tareas como invitaciones a organizaciones y gesti\xf3n de miembros. Para tu producto SaaS, donde tienes tanto administradores como miembros en el tenant, Logto Management API puede ayudarte a crear un portal de administraci\xf3n personalizado adaptado a las necesidades de tu negocio. Consulta ",(0,t.jsx)(n.a,{href:"/end-user-flows/organization-experience/",children:"esto"})," para m\xe1s detalles."]}),"\n",(0,t.jsx)(n.h2,{id:"tips-for-using-logto-management-api",children:"Consejos para usar Logto Management API"}),"\n",(0,t.jsx)(n.h3,{id:"managing-paginated-api-responses",children:"Gestionar respuestas de API paginadas"}),"\n",(0,t.jsx)(n.p,{children:"Algunas de las respuestas de API pueden incluir muchos resultados, los resultados se paginar\xe1n. Logto proporciona 2 tipos de informaci\xf3n de paginaci\xf3n."}),"\n",(0,t.jsx)(n.h4,{id:"using-link-headers",children:"Usando encabezados de enlace"}),"\n",(0,t.jsx)(n.p,{children:"Un encabezado de respuesta paginada ser\xe1 como:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"\n'})}),"\n",(0,t.jsx)(n.p,{children:"El encabezado de enlace proporciona la URL para la p\xe1gina anterior, siguiente, primera y \xfaltima de resultados:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'La URL para la p\xe1gina anterior est\xe1 seguida por rel="prev".'}),"\n",(0,t.jsx)(n.li,{children:'La URL para la p\xe1gina siguiente est\xe1 seguida por rel="next".'}),"\n",(0,t.jsx)(n.li,{children:'La URL para la \xfaltima p\xe1gina est\xe1 seguida por rel="last".'}),"\n",(0,t.jsx)(n.li,{children:'La URL para la primera p\xe1gina est\xe1 seguida por rel="first".'}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"using-total-number-header",children:"Usando el encabezado de n\xfamero total"}),"\n",(0,t.jsxs)(n.p,{children:["Adem\xe1s de los encabezados de enlace est\xe1ndar, Logto tambi\xe9n agregar\xe1 un encabezado ",(0,t.jsx)(n.code,{children:"Total-Number"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Total-Number: 216\n"})}),"\n",(0,t.jsx)(n.p,{children:"Eso ser\xeda muy conveniente y \xfatil para mostrar n\xfameros de p\xe1gina."}),"\n",(0,t.jsx)(n.h4,{id:"changing-page-number-and-page-size",children:"Cambiar el n\xfamero de p\xe1gina y el tama\xf1o de p\xe1gina"}),"\n",(0,t.jsx)(n.p,{children:"Hay 2 par\xe1metros de consulta opcionales:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"page"}),": indica el n\xfamero de p\xe1gina, comienza desde 1, el valor predeterminado es 1."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"page_size"}),": indica el n\xfamero de elementos por p\xe1gina, el valor predeterminado es 20."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"rate-limit",children:"L\xedmite de tasa"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Esto es solo para Logto Cloud."})}),"\n",(0,t.jsx)(n.p,{children:"Para garantizar la fiabilidad y seguridad de nuestros servicios para todos los usuarios, empleamos un firewall general que monitorea y gestiona el tr\xe1fico a nuestro sitio web. Aunque no imponemos un l\xedmite de tasa estricto, recomendamos que los usuarios limiten su actividad a aproximadamente 200 solicitudes cada 10 segundos para evitar activar nuestras medidas de protecci\xf3n."}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,t.jsx)(o,{href:"https://blog.logto.io/management-api",children:(0,t.jsx)(n.p,{children:"Usa Logto Management API: Una gu\xeda paso a paso"})}),"\n",(0,t.jsx)(o,{href:"https://blog.logto.io/use-postman-to-obtain-m2m-access-token",children:"Obt\xe9n tokens de acceso M2M en minutos con Postman"})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}function v(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62606:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>i});var o=a(25105),t=a(79621),s=a(3768),r=a(11043);const i=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Usando el token de acceso solicitado con el recurso de API de Logto Management incorporado ",(0,o.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"})," para obtener todas las aplicaciones en Logto:"]}),"\n",(0,o.jsxs)(r.A,{children:[(0,o.jsx)(s.A,{value:"Node.js",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Reemplaza con tu endpoint de Logto\nconst accessToken = 'eyJhb...2g'; // Token de acceso\n\nconst fetchLogtoApplications = async () => {\n  return await fetch(`${logtoEndpoint}/api/applications`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,o.jsxs)(s.A,{value:"cURL",label:"cURL",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g'\n"})}),(0,o.jsxs)(n.p,{children:["Recuerda reemplazar los valores reales con los tuyos propios. El valor despu\xe9s de ",(0,o.jsx)(n.code,{children:"Bearer"})," debe ser el token de acceso (JWT) que recibiste."]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},55013:(e,n,a)=>{a.d(n,{Ay:()=>i,RM:()=>s});var o=a(25105),t=a(79621);const s=[];function r(e){const n={code:"code",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Es posible que notes que la respuesta del token tiene un campo ",(0,o.jsx)(n.code,{children:"token_type"}),", que est\xe1 fijado a ",(0,o.jsx)(n.code,{children:"Bearer"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Por lo tanto, debes colocar el token de acceso en el campo ",(0,o.jsx)(n.code,{children:"Authorization"})," de los encabezados HTTP con el formato Bearer (",(0,o.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),") cuando est\xe9s interactuando con tu servidor de recursos de API."]})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},62513:(e,n,a)=>{a.d(n,{Ay:()=>l,RM:()=>r});var o=a(25105),t=a(79621);const s=a.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png",r=[];function i(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["La aplicaci\xf3n M2M realiza una solicitud ",(0,o.jsx)(n.code,{children:"POST"})," al endpoint de token para obtener un token de acceso a\xf1adiendo los siguientes par\xe1metros utilizando el formato ",(0,o.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," en el cuerpo de la entidad de la solicitud HTTP:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"grant_type"}),": Debe establecerse en ",(0,o.jsx)(n.code,{children:"client_credentials"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"resource"}),": El recurso al que deseas acceder"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"scope"}),": El alcance de la solicitud de acceso"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Tambi\xe9n necesitas incluir las credenciales de tu aplicaci\xf3n M2M en el encabezado de la solicitud para que el endpoint de token autentique tu aplicaci\xf3n M2M."}),"\n",(0,o.jsxs)(n.p,{children:["Esto se logra incluyendo las credenciales de la aplicaci\xf3n en el formulario de ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"autenticaci\xf3n b\xe1sica"})," en el encabezado de ",(0,o.jsx)(n.code,{children:"Authorization"})," de la solicitud, donde el nombre de usuario es el App ID y la contrase\xf1a es el App Secret."]}),"\n",(0,o.jsx)(n.p,{children:"Puedes encontrar el App ID y el App Secret en la p\xe1gina de detalles de tu aplicaci\xf3n M2M:"}),"\n",(0,o.jsx)("img",{alt:"App ID and App Secret",src:s,width:"600px"})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},17571:(e,n,a)=>{a.d(n,{Ay:()=>d,RM:()=>l});var o=a(25105),t=a(79621),s=a(3768),r=a(11043);const i=a.p+"assets/images/logto-management-api-4994334ef32791d9ebc6c9aa298c9ecd.png",l=[];function c(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:['Logto proporciona un recurso incorporado "Logto Management API", es un recurso de solo lectura con el permiso ',(0,o.jsx)(n.code,{children:"all"})," para acceder a Logto Management API, puedes verlo en tu lista de recursos de API. El indicador de API del recurso sigue el patr\xf3n ",(0,o.jsx)(n.code,{children:"https://{your-tenant-id}.logto.app/api"}),", y este ser\xe1 tu valor de recurso utilizado en el cuerpo de la solicitud del token de acceso."]}),"\n",(0,o.jsx)("img",{alt:"Detalles de Logto Management API",src:i,width:"600px"}),"\n",(0,o.jsxs)(n.p,{children:["Antes de acceder a Logto Management API, aseg\xfarate de que tu aplicaci\xf3n M2M haya sido asignada con roles M2M que incluyan el permiso ",(0,o.jsx)(n.code,{children:"all"}),' de este recurso incorporado "Logto Management API".']}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:['Logto tambi\xe9n proporciona un rol M2M preconfigurado "Logto Management API access" para los nuevos inquilinos creados, al cual ya se le ha asignado el permiso ',(0,o.jsx)(n.code,{children:"all"})," del recurso Logto Management API. Puedes usarlo directamente sin configurar manualmente los permisos. Este rol preconfigurado tambi\xe9n puede ser editado y eliminado seg\xfan sea necesario."]})}),"\n",(0,o.jsx)(n.p,{children:"Ahora, comp\xf3n todo lo que tenemos y env\xeda la solicitud:"}),"\n",(0,o.jsxs)(r.A,{children:[(0,o.jsx)(s.A,{value:"Node.js",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Reemplaza con tu endpoint de Logto\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\nconst tenantId = 'your-tenant-id';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: `https://${tenantId}.logto.app/api`,\n      scope: 'all',\n    }).toString(),\n  });\n};\n"})})}),(0,o.jsxs)(s.A,{value:"cURL",label:"cURL",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://${tenantId}.logto.app/api' \\\n  --data-urlencode 'scope=all'\n"})}),(0,o.jsx)(n.p,{children:"Recuerda reemplazar los valores reales con los tuyos propios."})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Para los usuarios de Logto Cloud: cuando interact\xfaes con Logto Management API, no puedes usar un dominio personalizado, utiliza el endpoint predeterminado de Logto ",(0,o.jsx)(n.code,{children:"https://{your_tenant_id}.logto.app/oidc/token"})," para otorgar tokens de acceso."]})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5516:(e,n,a)=>{a.d(n,{Ay:()=>i,RM:()=>s});var o=a(25105),t=a(79621);const s=[];function r(e){const n={admonition:"admonition",code:"code",p:"p",...(0,t.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Logto actualmente no admite que la aplicaci\xf3n M2M represente a un usuario. El ",(0,o.jsx)(n.code,{children:"sub"})," en la carga \xfatil del token de acceso ser\xe1 el ID de la aplicaci\xf3n."]})})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},79964:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>i});var o=a(25105),t=a(79621);const s=a.p+"assets/images/assign-m2m-roles-modal-f4f833eaf1c4b2c59509c918d3985eee.png",r=a.p+"assets/images/assign-m2m-roles-page-6084df6c23aec9c3f331738031f197b2.png",i=[];function l(e){const n={a:"a",p:"p",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Durante el proceso de creaci\xf3n de la aplicaci\xf3n M2M, ser\xe1s dirigido a una p\xe1gina donde puedes asignar ",(0,o.jsx)(n.a,{href:"/authorization/role-based-access-control/configure-roles#define-role-type",children:"roles M2M"})," a tus aplicaciones:"]}),"\n",(0,o.jsx)("img",{alt:"Asignar roles M2M modal",src:s,width:"600px"}),"\n",(0,o.jsx)(n.p,{children:"O tambi\xe9n puedes asignar estos roles en la p\xe1gina de detalles de la aplicaci\xf3n M2M cuando ya tengas una aplicaci\xf3n M2M creada:"}),"\n",(0,o.jsx)("img",{alt:"Asignar roles M2M p\xe1gina",src:r,width:"600px"})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3768:(e,n,a)=>{a.d(n,{A:()=>r});a(58101);var o=a(13526);const t={tabItem:"tabItem_y6LR"};var s=a(25105);function r(e){let{children:n,hidden:a,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(t.tabItem,r),hidden:a,children:n})}},11043:(e,n,a)=>{a.d(n,{A:()=>y});var o=a(58101),t=a(13526),s=a(32571),r=a(55234),i=a(87394),l=a(87276),c=a(31637),d=a(16063);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:o,default:t}}=e;return{value:n,label:a,attributes:o,default:t}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=p(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:a,groupId:t}),[h,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Dv)(a);return[t,(0,o.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),j=(()=>{const e=c??h;return g({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=a(27034);const j={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var f=a(25105);function b(e){let{className:n,block:a,selectedValue:o,selectValue:r,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),t=i[a].value;t!==o&&(c(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function A(e){const n=h(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,f.jsx)(A,{...e,children:u(e.children)},String(n))}},79621:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>i});var o=a(58101);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);