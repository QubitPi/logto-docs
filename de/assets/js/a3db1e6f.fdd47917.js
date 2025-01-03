"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11627],{71628:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var i=t(25105),s=t(79621);const r=[];function a(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["In diesem Leitfaden gehen wir davon aus, dass du grundlegende Kenntnisse \xfcber Logto Connectors hast. Falls nicht, schaue dir den Leitfaden ",(0,i.jsx)(n.a,{href:"/connectors",children:"Connectors konfigurieren"})," an, um loszulegen."]})})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},17805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"integrations/sms/gatewayapi-sms/README","title":"SMS-Verifizierung mit GatewayAPI SMS einrichten","description":"Der offizielle Logto Connector f\xfcr GatewayAPI SMS.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/integrations/sms/gatewayapi-sms/README.mdx","sourceDirName":"integrations/sms/gatewayapi-sms","slug":"/integrations/gatewayapi","permalink":"/de/integrations/gatewayapi","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/integrations/sms/gatewayapi-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/gatewayapi","sidebar_label":"GatewayAPI SMS","sidebar_custom_props":{"description":"GatewayAPI beschleunigt die Entwicklung, indem es die Lernkurve und das R\xe4tselraten beseitigt, sodass du sofort mit unseren APIs loslegen kannst."}},"sidebar":"integrationsSidebar","previous":{"title":"Aliyun Short Message","permalink":"/de/integrations/aliyun-sms"},"next":{"title":"SMS Aero","permalink":"/de/integrations/smsaero"}}');var s=t(25105),r=t(79621),a=t(71628);const o={slug:"/integrations/gatewayapi",sidebar_label:"GatewayAPI SMS",sidebar_custom_props:{description:"GatewayAPI beschleunigt die Entwicklung, indem es die Lernkurve und das R\xe4tselraten beseitigt, sodass du sofort mit unseren APIs loslegen kannst."}},d="SMS-Verifizierung mit GatewayAPI SMS einrichten",l={},c=[...a.RM,{value:"Erste Schritte",id:"get-started",level:2},{value:"Einrichtung in GatewayAPI",id:"set-up-in-gatewayapi",level:2},{value:"Erstelle ein GatewayAPI-Konto",id:"create-an-gatewayapi-account",level:3},{value:"Konto aktivieren",id:"enable-account",level:3},{value:"API-Token erhalten",id:"get-api-token",level:3},{value:"Einrichtung in Logto",id:"set-up-in-logto",level:2}];function u(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sms-verifizierung-mit-gatewayapi-sms-einrichten",children:"SMS-Verifizierung mit GatewayAPI SMS einrichten"})}),"\n",(0,s.jsx)(n.p,{children:"Der offizielle Logto Connector f\xfcr GatewayAPI SMS."}),"\n",(0,s.jsx)(a.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Erste Schritte"}),"\n",(0,s.jsx)(n.p,{children:"GatewayAPI ist ein Cloud-Dienstanbieter in Europa, der viele Cloud-Dienste anbietet, einschlie\xdflich SMS (Short Message Service). Der GatewayAPI SMS Connector ist ein Plugin, das vom Logto-Team bereitgestellt wird, um den GatewayAPI SMS-Dienst aufzurufen. Mit dessen Hilfe k\xf6nnen sich Logto-Endbenutzer \xfcber einen SMS-Verifizierungscode bei ihrem Logto-Konto registrieren und anmelden."}),"\n",(0,s.jsx)(n.h2,{id:"set-up-in-gatewayapi",children:"Einrichtung in GatewayAPI"}),"\n",(0,s.jsx)(n.h3,{id:"create-an-gatewayapi-account",children:"Erstelle ein GatewayAPI-Konto"}),"\n",(0,s.jsxs)(n.p,{children:["Gehe zur ",(0,s.jsx)(n.a,{href:"https://www.gatewayapi.com/",children:"GatewayAPI-Website"})," und registriere dein GatewayAPI-Konto, falls du noch keines hast."]}),"\n",(0,s.jsx)(n.h3,{id:"enable-account",children:"Konto aktivieren"}),"\n",(0,s.jsx)(n.p,{children:"M\xf6glicherweise musst du dein Konto aktivieren, bevor du den SMS-Dienst nutzen kannst. Du kannst den Kundenservice von GatewayAPI kontaktieren, um dein Konto zu aktivieren."}),"\n",(0,s.jsx)(n.h3,{id:"get-api-token",children:"API-Token erhalten"}),"\n",(0,s.jsx)(n.p,{children:"Gehe zur Seite API-Schl\xfcssel in der GatewayAPI-Konsole und finde den API-Token oder erstelle einen neuen API-Token."}),"\n",(0,s.jsx)(n.h2,{id:"set-up-in-logto",children:"Einrichtung in Logto"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"}),": Wenn dein GatewayAPI-Konto in der EU-Region ist, solltest du den Endpoint ",(0,s.jsx)(n.a,{href:"https://gatewayapi.com/rest/mtsms",children:"https://gatewayapi.com/rest/mtsms"})," verwenden. Wenn dein GatewayAPI-Konto in der US-Region ist, solltest du den Endpoint ",(0,s.jsx)(n.a,{href:"https://gatewayapi.com/rest/mtsms",children:"https://gatewayapi.com/rest/mtsms"})," verwenden."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API-Token"}),": Der API-Token, den du im vorherigen Schritt erstellt hast."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Absender"}),": Der Absender, den du verwenden m\xf6chtest, um die SMS zu senden."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vorlagen"}),": Die Vorlagen, die du verwenden m\xf6chtest, um die SMS zu senden. Du kannst die Standardvorlagen verwenden oder sie nach Bedarf anpassen."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},79621:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(58101);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);