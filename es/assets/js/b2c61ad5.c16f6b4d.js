"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[58255],{8088:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developers/webhooks/secure-webhooks","title":"Asegurar webhooks","description":"Una vez que tu servidor est\xe9 listo para recibir solicitudes de webhook, es posible que desees asegurarte de que pueda manejar las solicitudes de manera segura. Logto genera una firma para cada carga \xfatil de solicitud de webhook, lo que te permite verificar que la solicitud proviene de Logto.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/webhooks/secure-webhooks.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/secure-webhooks","permalink":"/es/developers/webhooks/secure-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/developers/webhooks/secure-webhooks.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"secure-webhooks","title":"Asegurar webhooks","sidebar_label":"Asegurar webhooks","sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Webhooks request","permalink":"/es/developers/webhooks/webhooks-request"},"next":{"title":"Registros de auditor\xeda","permalink":"/es/developers/audit-logs"}}');var a=r(25105),i=r(79621);const t={id:"secure-webhooks",title:"Asegurar webhooks",sidebar_label:"Asegurar webhooks",sidebar_position:5},n="Asegurar webhooks",d={},l=[{value:"Obtener la clave de firma",id:"get-the-signing-key",level:2},{value:"Verificar la firma",id:"verify-the-signature",level:2}];function c(e){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components},{CloudLink:r}=o;return r||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"asegurar-webhooks",children:"Asegurar webhooks"})}),"\n",(0,a.jsx)(o.p,{children:"Una vez que tu servidor est\xe9 listo para recibir solicitudes de webhook, es posible que desees asegurarte de que pueda manejar las solicitudes de manera segura. Logto genera una firma para cada carga \xfatil de solicitud de webhook, lo que te permite verificar que la solicitud proviene de Logto."}),"\n",(0,a.jsx)(o.h2,{id:"get-the-signing-key",children:"Obtener la clave de firma"}),"\n",(0,a.jsxs)(o.p,{children:["Necesitar\xe1s obtener la clave de firma desde la p\xe1gina de detalles del webhook en ",(0,a.jsx)(r,{to:"/webhooks",children:" Logto Console > Webhooks"})," para verificar la firma."]}),"\n",(0,a.jsx)(o.h2,{id:"verify-the-signature",children:"Verificar la firma"}),"\n",(0,a.jsxs)(o.p,{children:["Extrae la firma del encabezado ",(0,a.jsx)(o.code,{children:"logto-signature-sha-256"})," de la solicitud de webhook."]}),"\n",(0,a.jsx)(o.p,{children:"Despu\xe9s de eso, debes generar una firma usando tu clave de firma y el cuerpo de la solicitud de webhook y asegurarte de que el resultado coincida con la firma de Logto."}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsx)(o.p,{children:"Usa el cuerpo sin procesar de la solicitud de webhook para la generaci\xf3n de la firma; evita usar el cuerpo analizado, ya que los servidores pueden preprocesarlo antes de llegar a tu manejador de endpoint de webhook."})}),"\n",(0,a.jsx)(o.p,{children:"Logto utiliza un resumen HMAC en formato hexadecimal para calcular la firma."}),"\n",(0,a.jsx)(o.p,{children:"Aqu\xed tienes un ejemplo de c\xf3mo verificar la firma en Node.js:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"import { createHmac } from 'node:crypto';\n\nexport const verify = (signingKey: string, rawBody: Buffer[], expectedSignature: string) => {\n  const hmac = createHmac('sha256', signingKey);\n  hmac.update(rawBody);\n  const signature = hmac.digest('hex');\n  return signature === expectedSignature;\n};\n"})})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},79621:(e,o,r)=>{r.d(o,{R:()=>t,x:()=>n});var s=r(58101);const a={},i=s.createContext(a);function t(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);