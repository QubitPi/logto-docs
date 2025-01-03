"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39136],{46919:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"end-user-flows/enterprise-sso/sp-initiated-sso","title":"SP-initiiertes SSO","description":"SP-initiiertes SSO, die Standard- und sicherere Methode als IdP-initiiertes SSO, erm\xf6glicht es Unternehmensbenutzern, den SSO-Anmeldeprozess von der Logto-Anmeldeseite aus zu starten. Logto unterst\xfctzt sowohl E-Mail-Domain-Prompt-SSO als auch direkten Anmeldeparameter f\xfcr SSO.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/sp-initiated-sso.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/sp-initiated-sso","permalink":"/de/end-user-flows/enterprise-sso/sp-initiated-sso","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/sp-initiated-sso.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Enterprise SSO","permalink":"/de/end-user-flows/enterprise-sso/"},"next":{"title":"IdP-initiiertes SSO","permalink":"/de/end-user-flows/enterprise-sso/idp-initiated-sso"}}');var t=i(25105),s=i(79621);const d={sidebar_position:1},o="SP-initiiertes SSO",a={},l=[{value:"SP-initiiertes SSO einrichten",id:"set-up-sp-initiated-sso",level:2},{value:"SP-initiiertes SSO-Erlebnis",id:"sp-initiated-sso-experience",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Kann ich Organisationsname / Domain anstelle der E-Mail-Domain verwenden, um zum IdP weiterzuleiten?",id:"can-i-use-organization-namedomain-instead-of-email-domain-to-redirect-to-the-idp",level:3},{value:"Kann ich einen bestimmten Enterprise-Connector-Button auf der Anmeldeseite anzeigen?",id:"can-i-display-a-specific-enterprise-connector-button-on-the-sign-in-page",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:r,Details:d}=n;return r||h("CloudLink",!0),d||h("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sp-initiiertes-sso",children:"SP-initiiertes SSO"})}),"\n",(0,t.jsxs)(n.p,{children:["SP-initiiertes SSO, die Standard- und sicherere Methode als ",(0,t.jsx)(n.a,{href:"/end-user-flows/enterprise-sso/idp-initiated-sso",children:"IdP-initiiertes SSO"}),", erm\xf6glicht es Unternehmensbenutzern, den SSO-Anmeldeprozess von der Logto-Anmeldeseite aus zu starten. Logto unterst\xfctzt sowohl ",(0,t.jsx)(n.a,{href:"#sp-initiated-sso-experience",children:"E-Mail-Domain-Prompt-SSO"})," als auch ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in#enterprise-sso",children:"direkten Anmeldeparameter f\xfcr SSO"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"set-up-sp-initiated-sso",children:"SP-initiiertes SSO einrichten"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Enterprise SSO aktivieren"})," in deinem Identit\xe4tssystem"]}),"\n",(0,t.jsxs)(n.p,{children:["Um Enterprise SSO zu aktivieren, navigiere zur ",(0,t.jsx)(r,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Konsole > Anmeldeerfahrung > Anmeldung und Registrierung"}),' und aktiviere die Einstellung "Enterprise SSO aktivieren". Sobald aktiviert, erscheint ein "Single Sign-On"-Button auf deiner Anmeldeseite. Unternehmensbenutzer mit SSO-aktivierten E-Mail-Domains k\xf6nnen \xfcber ihre Unternehmensidentit\xe4tsanbieter auf deine Dienste zugreifen.']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Enterprise-Connectors erstellen"})," f\xfcr verschiedene Kunden"]}),"\n",(0,t.jsxs)(n.p,{children:["Als N\xe4chstes musst du jeden Unternehmensidentit\xe4tsanbieter f\xfcr deine Kunden integrieren. \xc4hnlich wie bei der sozialen Anmeldung, erstelle einen neuen Enterprise-Connector in Logto und konfiguriere die erforderlichen Einstellungen. Navigiere zur ",(0,t.jsx)(r,{to:"/enterprise-sso",children:"Konsole > Enterprise SSO"}),', klicke auf den Button "Enterprise-Connector hinzuf\xfcgen" und folge den Anweisungen, um den Connector einzurichten. Siehe ',(0,t.jsx)(n.a,{href:"/connectors/enterprise-connectors/",children:"Enterprise SSO Connector Einrichtung"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"E-Mail-Domains einrichten"})," f\xfcr den Enterprise-Connector"]}),"\n",(0,t.jsx)(n.p,{children:"Enterprise SSO-Identit\xe4ten werden typischerweise durch eine Unternehmens-E-Mail-Domain erkannt. Im SSO-Erfahrung-Tab der Detailseite jedes Enterprise-Connectors kannst du die zugeh\xf6rigen E-Mail-Domains angeben."}),"\n",(0,t.jsx)(n.p,{children:"Benutzer mit den angegebenen E-Mail-Domains werden darauf beschr\xe4nkt, sich ausschlie\xdflich \xfcber diesen Enterprise SSO-Connector anzumelden, w\xe4hrend andere Anmeldemethoden \u2013 wie E-Mail-Verifizierungscodes, E-Mail-Passwort-Authentifizierung oder soziale Anmeldung \u2013 f\xfcr diese Benutzer deaktiviert werden. Der SSO-Connector wird nur f\xfcr Benutzer mit den angegebenen E-Mail-Domains sichtbar sein."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\xd6ffentliche E-Mail-Domains (z. B. gmail.com, yahoo.com) k\xf6nnen nicht mit einem Enterprise-Connector verkn\xfcpft werden."})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sp-initiated-sso-experience",children:"SP-initiiertes SSO-Erlebnis"}),"\n",(0,t.jsx)(n.p,{children:"SSO wird aktiviert, wenn Benutzer versuchen, sich mit einer f\xfcr SSO konfigurierten Unternehmens-E-Mail-Domain anzumelden. Dieser Prozess umgeht Standardverifizierungsmethoden wie Passw\xf6rter."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Single Sign-On Button"}),":"]}),"\n",(0,t.jsx)(n.p,{children:'Wenn die Enterprise SSO-Anmeldemethode aktiviert ist, erscheint ein "Single Sign-On"-Button als alternative Anmeldeoption auf der Anmeldeseite. Durch Klicken auf diesen Link werden Benutzer aufgefordert, ihre Unternehmens-E-Mail-Adresse einzugeben, um den SSO-Prozess zu starten.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Einzelner Connector: Wenn nur ein Enterprise SSO-Connector mit der E-Mail-Domain des Benutzers verkn\xfcpft ist, wird der Benutzer direkt zur IdP-Anmeldeseite weitergeleitet."}),"\n",(0,t.jsx)(n.li,{children:"Mehrere Connectors: Wenn mehrere Enterprise SSO-Connectors mit der E-Mail-Domain des Benutzers verkn\xfcpft sind, w\xe4hlt der Benutzer zun\xe4chst den gew\xfcnschten IdP aus einer Liste aus, bevor er zur IdP-Anmeldeseite weitergeleitet wird."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Single Sign-On Button",src:i(31326).A+"",width:"2377",height:"1320"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Universelle E-Mail-Anmeldung"}),":"]}),"\n",(0,t.jsx)(n.p,{children:'Im universellen Identifikator-Anmeldeformular (mit aktivierter E-Mail-Anmeldemethode) ist die Erkennung von Enterprise SSO-E-Mail-Domains standardm\xe4\xdfig aktiviert. Wenn Benutzer ihre E-Mail-Adresse eingeben, erkennt Logto automatisch, ob ein Enterprise SSO-Connector mit dieser Domain verkn\xfcpft ist. Wenn eine \xdcbereinstimmung gefunden wird, aktualisiert sich das Standardanmeldeformular: Der "Anmelden"-Button \xe4ndert sich in einen "Single Sign-On"-Button, der den Benutzer darauf beschr\xe4nkt, sich mit dem/den Enterprise SSO-Connector(en) anzumelden.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Universelle E-Mail-Anmeldung",src:i(42756).A+"",width:"2377",height:"1320"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.h3,{id:"can-i-use-organization-namedomain-instead-of-email-domain-to-redirect-to-the-idp",children:"Kann ich Organisationsname / Domain anstelle der E-Mail-Domain verwenden, um zum IdP weiterzuleiten?"})}),(0,t.jsxs)(n.p,{children:["Derzeit unterst\xfctzt die vorgefertigte Anmeldeerfahrung von Logto nur ",(0,t.jsx)(n.strong,{children:"E-Mail-Domain-Prompt-SSO"}),", nicht ",(0,t.jsx)(n.strong,{children:"Organisations-Domain-Prompt-SSO"}),"."]}),(0,t.jsxs)(n.p,{children:["Du kannst eine benutzerdefinierte Routing-Seite auf deiner Client-Seite erstellen, indem du die Authentifizierungsparameter mit ",(0,t.jsx)(n.code,{children:"directSignIn:'sso:{connectorId}"})," verwendest. Diese Seite leitet gro\xdfe Unternehmenskunden basierend auf ihrer Organisationsdomain zum entsprechenden IdP weiter. Erfahre mehr \xfcber den ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"direkten Anmeldeparameter"}),"."]})]}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(n.h3,{id:"can-i-display-a-specific-enterprise-connector-button-on-the-sign-in-page",children:"Kann ich einen bestimmten Enterprise-Connector-Button auf der Anmeldeseite anzeigen?"})}),(0,t.jsx)(n.p,{children:"Verschiedene Unternehmenskunden verwenden unterschiedliche Identit\xe4tsanbieter, um ihre Mitarbeiter zu verwalten, und fordern unterschiedliche Berechtigungen (OIDC) oder Attribute (SAML) an. Daher wird nicht empfohlen, einen Enterprise-Connector-Button, der f\xfcr einen bestimmten Kunden gedacht ist, auf einer generischen Anmeldeseite anzuzeigen."}),(0,t.jsxs)(n.p,{children:["Wenn du jedoch ein B2E-Produkt entwickelst und einen Button f\xfcr einen bestimmten Unternehmenskunden anzeigen m\xf6chtest, kannst du eine benutzerdefinierte Anmeldeseite erstellen und ",(0,t.jsx)(n.code,{children:"directSignIn:sso"})," verwenden, um den Button entsprechend zu leiten. Erfahre mehr \xfcber den ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"direkten Anmeldeparameter"}),"."]})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31326:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/sso-button-sign-in-93ab8ccddea7963a14afc949ed91a8f7.png"},42756:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/sso-email-sign-in-6d0aa4bc16a703e35c2e80f86b412b0d.png"},79621:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var r=i(58101);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);