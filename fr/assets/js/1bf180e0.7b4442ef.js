"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[60974],{63386:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"developers/webhooks/secure-webhooks","title":"S\xe9curiser les webhooks","description":"Une fois que votre serveur est pr\xeat \xe0 recevoir des requ\xeates de webhook, vous voudrez vous assurer qu\'il peut g\xe9rer les requ\xeates de mani\xe8re s\xe9curis\xe9e. Logto g\xe9n\xe8re une signature pour chaque charge utile de requ\xeate de webhook, ce qui vous permet de v\xe9rifier que la requ\xeate provient de Logto.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/webhooks/secure-webhooks.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/secure-webhooks","permalink":"/fr/developers/webhooks/secure-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/developers/webhooks/secure-webhooks.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"secure-webhooks","title":"S\xe9curiser les webhooks","sidebar_label":"S\xe9curiser les webhooks","sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Requ\xeate de Webhooks","permalink":"/fr/developers/webhooks/webhooks-request"},"next":{"title":"Journaux d\'audit","permalink":"/fr/developers/audit-logs"}}');var t=o(25105),n=o(79621);const i={id:"secure-webhooks",title:"S\xe9curiser les webhooks",sidebar_label:"S\xe9curiser les webhooks",sidebar_position:5},u="S\xe9curiser les webhooks",d={},a=[{value:"Obtenir la cl\xe9 de signature",id:"get-the-signing-key",level:2},{value:"V\xe9rifier la signature",id:"verify-the-signature",level:2}];function l(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components},{CloudLink:o}=r;return o||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"s\xe9curiser-les-webhooks",children:"S\xe9curiser les webhooks"})}),"\n",(0,t.jsx)(r.p,{children:"Une fois que votre serveur est pr\xeat \xe0 recevoir des requ\xeates de webhook, vous voudrez vous assurer qu'il peut g\xe9rer les requ\xeates de mani\xe8re s\xe9curis\xe9e. Logto g\xe9n\xe8re une signature pour chaque charge utile de requ\xeate de webhook, ce qui vous permet de v\xe9rifier que la requ\xeate provient de Logto."}),"\n",(0,t.jsx)(r.h2,{id:"get-the-signing-key",children:"Obtenir la cl\xe9 de signature"}),"\n",(0,t.jsxs)(r.p,{children:["Vous devrez obtenir la cl\xe9 de signature depuis la page des d\xe9tails du webhook dans ",(0,t.jsx)(o,{to:"/webhooks",children:" Logto Console > Webhooks"})," pour v\xe9rifier la signature."]}),"\n",(0,t.jsx)(r.h2,{id:"verify-the-signature",children:"V\xe9rifier la signature"}),"\n",(0,t.jsxs)(r.p,{children:["Extrayez la signature de l'en-t\xeate ",(0,t.jsx)(r.code,{children:"logto-signature-sha-256"})," de la requ\xeate de webhook."]}),"\n",(0,t.jsx)(r.p,{children:"Ensuite, vous devez g\xe9n\xe9rer une signature en utilisant votre cl\xe9 de signature et le corps de la requ\xeate de webhook, et vous assurer que le r\xe9sultat correspond \xe0 la signature de Logto."}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"Utilisez le corps brut de la requ\xeate de webhook pour la g\xe9n\xe9ration de la signature ; \xe9vitez d'utiliser le corps analys\xe9, car les serveurs peuvent le pr\xe9traiter avant d'atteindre votre gestionnaire de point de terminaison de webhook."})}),"\n",(0,t.jsx)(r.p,{children:"Logto utilise un digest hexad\xe9cimal HMAC pour calculer la signature."}),"\n",(0,t.jsx)(r.p,{children:"Voici un exemple de comment v\xe9rifier la signature en Node.js :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { createHmac } from 'node:crypto';\n\nexport const verify = (signingKey: string, rawBody: Buffer[], expectedSignature: string) => {\n  const hmac = createHmac('sha256', signingKey);\n  hmac.update(rawBody);\n  const signature = hmac.digest('hex');\n  return signature === expectedSignature;\n};\n"})})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},79621:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>u});var s=o(58101);const t={},n=s.createContext(t);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);