"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11225],{90990:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"logto-cloud/custom-domain","title":"Dominio personalizado","description":"Tu inquilino de Logto viene con un dominio gratuito predeterminado {}.app.logto. Sin embargo, puedes mejorar la experiencia del usuario y el reconocimiento de marca utilizando un dominio personalizado, como auth.example.com.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/logto-cloud/custom-domain.mdx","sourceDirName":"logto-cloud","slug":"/logto-cloud/custom-domain","permalink":"/es/logto-cloud/custom-domain","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/logto-cloud/custom-domain.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"custom-domain","title":"Dominio personalizado","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Gesti\xf3n de miembros del inquilino","permalink":"/es/logto-cloud/tenant-member-management"},"next":{"title":"Facturaci\xf3n y precios","permalink":"/es/logto-cloud/billing-and-pricing"}}');var a=i(25105),s=i(79621);const r={id:"custom-domain",title:"Dominio personalizado",sidebar_position:4},d="Dominio personalizado",l={},t=[{value:"Configurar dominio personalizado en la Consola",id:"configure-custom-domain-in-console",level:2},{value:"Soluci\xf3n de problemas",id:"troubleshooting",level:2},{value:"Problemas con el certificado SSL",id:"ssl-certificate-issues",level:3},{value:"Error &quot;The hostname is associated with a held zone&quot;",id:"the-hostname-is-associated-with-a-held-zone-error",level:3},{value:"Usar dominio personalizado",id:"use-custom-domain",level:2},{value:"Actualizando el endpoint del SDK para aplicaciones",id:"updating-the-sdk-endpoint-for-applications",level:3},{value:"Modificando los endpoints de autenticaci\xf3n para otras aplicaciones",id:"modifying-auth-endpoints-for-other-applications",level:3},{value:"Actualizando el URI de callback del conector social",id:"updating-the-social-connectors-callback-uri",level:3}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:n,Details:r}=o;return n||p("CloudLink",!0),r||p("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"dominio-personalizado",children:"Dominio personalizado"})}),"\n",(0,a.jsxs)(o.p,{children:["Tu inquilino de Logto viene con un dominio gratuito predeterminado ",(0,a.jsx)(o.code,{children:"{{tenant-id}}.app.logto"}),". Sin embargo, puedes mejorar la experiencia del usuario y el reconocimiento de marca utilizando un dominio personalizado, como ",(0,a.jsx)(o.code,{children:"auth.example.com"}),"."]}),"\n",(0,a.jsx)(o.p,{children:"Tu dominio personalizado se utiliza para varias funciones:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["URLs de ",(0,a.jsx)(o.a,{href:"/end-user-flows/sign-up-and-sign-in",children:"p\xe1gina de inicio de sesi\xf3n y registro"})]}),"\n",(0,a.jsxs)(o.li,{children:["URLs de vinculaci\xf3n de ",(0,a.jsx)(o.a,{href:"/end-user-flows/mfa/webauthn",children:"Passkey"})," (Cambiar el dominio despu\xe9s de que los usuarios hayan vinculado Passkeys puede bloquear su autenticaci\xf3n)."]}),"\n",(0,a.jsxs)(o.li,{children:["URIs de callback para ",(0,a.jsx)(o.a,{href:"/connectors/social-connectors",children:"conectores sociales"})," o ",(0,a.jsx)(o.a,{href:"/connectors/enterprise-connectors",children:"conectores de SSO empresarial"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.a,{href:"/integrate-logto/application-data-structure#openid-provider-configuration-endpoint",children:"Endpoint de SDK"})," para integrar Logto con tu aplicaci\xf3n."]}),"\n"]}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:["Cambiar el dominio despu\xe9s de publicar tu servicio puede causar problemas porque el c\xf3digo de tu aplicaci\xf3n y las integraciones podr\xedan seguir haciendo referencia al dominio antiguo. Para asegurar una transici\xf3n sin problemas, ",(0,a.jsx)(o.strong,{children:"configura tu dominio personalizado al principio"})," durante la creaci\xf3n de un inquilino de Producci\xf3n."]})}),"\n",(0,a.jsx)(o.h2,{id:"configure-custom-domain-in-console",children:"Configurar dominio personalizado en la Consola"}),"\n",(0,a.jsx)(o.p,{children:"Para agregar un nuevo dominio personalizado en la Consola de Logto, sigue estos pasos:"}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Navega a ",(0,a.jsx)(n,{to:"/tenant-settings/domains",children:"Console > Settings > Domains"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsx)(o.p,{children:'En la secci\xf3n "Custom Domain", ingresa el nombre de tu dominio y haz clic en "add domain".'}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Agregar dominio",src:i(56684).A+"",width:"2880",height:"1026"})}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsx)(o.p,{children:"Copia el valor de CNAME en la tabla y ve al proveedor de DNS de tu dominio para agregar el registro."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Procesamiento de dominio personalizado",src:i(35730).A+"",width:"2880",height:"1212"})}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsx)(o.p,{children:"Espera la verificaci\xf3n y el proceso de SSL."}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsx)(o.li,{children:"Verificaremos autom\xe1ticamente tus registros cada 10 segundos hasta que se agregue el dominio personalizado. Solo aseg\xfarate de que el nombre de dominio ingresado o los registros DNS sean precisos."}),"\n",(0,a.jsx)(o.li,{children:"La verificaci\xf3n generalmente toma unos minutos, pero puede tardar hasta 24 horas, dependiendo del proveedor de DNS. Si\xe9ntete libre de navegar fuera durante el proceso."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"troubleshooting",children:"Soluci\xf3n de problemas"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(o.h3,{id:"ssl-certificate-issues",children:"Problemas con el certificado SSL"})}),(0,a.jsx)(o.p,{children:"Si encuentras problemas con el certificado SSL al configurar tu dominio personalizado, puede estar relacionado con los registros CAA en tu configuraci\xf3n de DNS. Los registros CAA especifican qu\xe9 Autoridades de Certificaci\xf3n (CAs) est\xe1n autorizadas para emitir certificados para tu dominio."}),(0,a.jsxs)(o.p,{children:["Para solucionar y resolver problemas de certificados SSL relacionados con los registros CAA, consulta la ",(0,a.jsx)(o.a,{href:"https://developers.cloudflare.com/ssl/edge-certificates/caa-records/",children:"documentaci\xf3n de Cloudflare"})," sobre Registros CAA."]})]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)(o.h3,{id:"the-hostname-is-associated-with-a-held-zone-error",children:'Error "The hostname is associated with a held zone"'})}),(0,a.jsxs)(o.p,{children:['Si encuentras el mensaje de error "The hostname is associated with a held zone, please contact the owner to have the hold removed" al agregar un dominio personalizado, significa que el dominio ya est\xe1 en la zona de Cloudflare y est\xe1 configurado en estado "Zone Hold". Consulta esta ',(0,a.jsx)(o.a,{href:"https://developers.cloudflare.com/fundamentals/setup/account/account-security/zone-holds/",children:"documentaci\xf3n de Cloudflare"})," para m\xe1s informaci\xf3n."]}),(0,a.jsx)(o.p,{children:"Para resolver este problema, necesitar\xe1s liberar la retenci\xf3n de la zona. Sigue el enlace anterior para obtener instrucciones sobre c\xf3mo liberar la retenci\xf3n de la zona en Cloudflare."})]}),"\n",(0,a.jsx)(o.h2,{id:"use-custom-domain",children:"Usar dominio personalizado"}),"\n",(0,a.jsx)(o.p,{children:"Una vez que hayas configurado tus ajustes, tanto tu nombre de dominio personalizado como el nombre de dominio predeterminado de Logto estar\xe1n disponibles para tu inquilino. Sin embargo, se requieren ciertas configuraciones para activar tu nombre de dominio personalizado."}),"\n",(0,a.jsxs)(o.admonition,{type:"note",children:[(0,a.jsxs)(o.p,{children:["En este art\xedculo, asumimos que tu dominio personalizado es ",(0,a.jsx)(o.code,{children:"auth.example.com"}),"."]}),(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Dominio personalizado agregado",src:i(65133).A+"",width:"2880",height:"1178"})})]}),"\n",(0,a.jsx)(o.h3,{id:"updating-the-sdk-endpoint-for-applications",children:"Actualizando el endpoint del SDK para aplicaciones"}),"\n",(0,a.jsx)(o.p,{children:"Modifica tu c\xf3digo de inicializaci\xf3n para el SDK de Logto cambiando el nombre de dominio del endpoint."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-typescript",children:"const client = new LogtoClient({\n  ...,// otras opciones\n  endpoint: 'https://auth.example.com',\n});\n"})}),"\n",(0,a.jsx)(o.h3,{id:"modifying-auth-endpoints-for-other-applications",children:"Modificando los endpoints de autenticaci\xf3n para otras aplicaciones"}),"\n",(0,a.jsx)(o.p,{children:"Si tienes aplicaciones que no est\xe1n utilizando el SDK de Logto, es necesario actualizar sus endpoints de autenticaci\xf3n."}),"\n",(0,a.jsx)(o.p,{children:"Puedes localizar los endpoints de autenticaci\xf3n en la URL bien conocida:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"https://auth.example.com/oidc/.well-known/openid-configuration\n"})}),"\n",(0,a.jsx)(o.h3,{id:"updating-the-social-connectors-callback-uri",children:"Actualizando el URI de callback del conector social"}),"\n",(0,a.jsx)(o.p,{children:"El URI de callback del conector social se actualizar\xe1 autom\xe1ticamente si tus usuarios est\xe1n utilizando el dominio personalizado. Necesitas ir a la consola de desarrolladores del proveedor social para actualizar el URI de callback."}),"\n",(0,a.jsx)(o.p,{children:"Cuando tus usuarios est\xe9n utilizando el dominio personalizado, el URI de callback del conector social utilizar\xe1 el nuevo dominio. Por lo tanto, necesitas navegar a la consola de desarrolladores del proveedor social para actualizar manualmente el URI de callback."})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function p(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},65133:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/custom-domain-added-6493bb65f39cff5d6d8c7a5bdccf413b.jpeg"},35730:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/custom-domain-processing-28ff46a3d867e7c069203c6f02cbdb13.jpeg"},56684:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/custom-domain-section-755de162507f83d2a1d99fe8e2db0ebe.jpeg"},79621:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>d});var n=i(58101);const a={},s=n.createContext(a);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);