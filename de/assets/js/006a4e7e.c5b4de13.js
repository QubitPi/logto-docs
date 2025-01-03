"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[18009],{31496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications/README","title":"OIDC / OAuth Drittanbieteranwendungen","description":"Logto ist ein Identit\xe4tsdienst, der auf dem OpenID Connect (OIDC) Protokoll basiert und sowohl Authentifizierungs- als auch Autorisierungs-Funktionen bietet. Dies macht die Integration einer OIDC-Drittanbieteranwendung so einfach wie eine traditionelle Webanwendung.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/README.mdx","sourceDirName":"integrate-logto/third-party-applications/oidc-oauth-third-party-applications","slug":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/","permalink":"/de/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/README.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Drittanbieteranwendungen","permalink":"/de/integrate-logto/third-party-applications/"},"next":{"title":"Berechtigungsverwaltung","permalink":"/de/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management"}}');var r=t(25105),a=t(79621),s=t(58976),o=t(12508);const d=t.p+"assets/images/consent-screen-e9e6a45ff7e783ed62224f48307046a1.webp",l={},c="OIDC / OAuth Drittanbieteranwendungen",u={},h=[{value:"OIDC-Konfigurationen einrichten",id:"set-up-the-oidc-configurations",level:2},{value:"Zustimmungsbildschirm f\xfcr OIDC-Drittanbieteranwendungen",id:"consent-screen-for-oidc-third-party-applications",level:2},{value:"Weitere Aktionen",id:"further-actions",level:2},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function p(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components},{DocCardList:t,Url:i}=n;return t||f("DocCardList",!0),i||f("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"oidc--oauth-drittanbieteranwendungen",children:"OIDC / OAuth Drittanbieteranwendungen"})}),"\n",(0,r.jsxs)(n.p,{children:["Logto ist ein Identit\xe4tsdienst, der auf dem ",(0,r.jsx)(n.a,{href:"https://auth.wiki/openid-connect",children:"OpenID Connect (OIDC)"})," Protokoll basiert und sowohl ",(0,r.jsx)(n.a,{href:"https://auth.wiki/authentication",children:"Authentifizierungs"}),"- als auch ",(0,r.jsx)(n.a,{href:"https://auth.wiki/authorization",children:"Autorisierungs"}),"-Funktionen bietet. Dies macht die Integration einer OIDC-Drittanbieteranwendung so einfach wie eine traditionelle Webanwendung."]}),"\n",(0,r.jsxs)(n.p,{children:["Da OIDC auf ",(0,r.jsx)(n.a,{href:"https://auth.wiki/oauth-2.0",children:"OAuth 2.0"})," aufbaut und eine Authentifizierungsschicht hinzuf\xfcgt, kannst du auch Drittanbieteranwendungen mit dem OAuth-Protokoll integrieren."]}),"\n",(0,r.jsx)(n.h2,{id:"set-up-the-oidc-configurations",children:"OIDC-Konfigurationen einrichten"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Bevor du die OIDC-Konfigurationen einrichtest, stelle bitte sicher, dass du eine ",(0,r.jsx)(n.a,{href:"/quick-starts/third-party-oidc",children:"OIDC-Drittanbieteranwendung erstellt"})," hast."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Gib die ",(0,r.jsx)(n.a,{href:"/integrate-logto/application-data-structure#redirect-uris",children:(0,r.jsx)(n.strong,{children:"Redirect-URI"})})," deiner OIDC-Drittanbieteranwendung an. Dies ist die URL, zu der die Drittanbieteranwendung Benutzer weiterleitet, nachdem sie von Logto authentifiziert wurden.\nDiese Informationen findest du normalerweise auf der IdP-Verbindungsseite der Drittanbieteranwendung."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Rufe die ",(0,r.jsx)(n.a,{href:"/integrate-logto/application-data-structure#application-id",children:(0,r.jsx)(n.strong,{children:"Client-ID"})})," und das ",(0,r.jsx)(n.a,{href:"/integrate-logto/application-data-structure#application-secret",children:(0,r.jsx)(n.strong,{children:"Client-Secret"})})," von der Logto-Anwendungsdetailseite ab und gib sie auf der IdP-Verbindungsseite deines Dienstanbieters ein."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Rufe den ",(0,r.jsx)(n.a,{href:"/integrate-logto/application-data-structure#authorization-endpoint",children:(0,r.jsx)(n.strong,{children:"Autorisierungsendpunkt"})})," und den ",(0,r.jsx)(n.a,{href:"/integrate-logto/application-data-structure#token-endpoint",children:(0,r.jsx)(n.strong,{children:"Token-Endpunkt"})})," von der Logto-Anwendungsdetailseite ab und stelle sie deinem Dienstanbieter zur Verf\xfcgung.\nWenn dein Dienstanbieter OIDC-Discovery unterst\xfctzt, kannst du einfach den ",(0,r.jsx)(n.strong,{children:"Discovery-Endpunkt"})," von der Logto-Anwendungsdetailseite kopieren und deinem Dienstanbieter zur Verf\xfcgung stellen. Der Dienstanbieter kann dann automatisch alle aktuellen OIDC-Authentifizierungsinformationen vom Discovery-Endpunkt abrufen.\nAndernfalls klicke auf die Schaltfl\xe4che ",(0,r.jsx)(n.strong,{children:"Endpunktdetails anzeigen"}),", um alle OIDC-Authentifizierungsendpunkte anzuzeigen."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"consent-screen-for-oidc-third-party-applications",children:"Zustimmungsbildschirm f\xfcr OIDC-Drittanbieteranwendungen"}),"\n",(0,r.jsxs)(n.p,{children:["Aus Sicherheitsgr\xfcnden werden alle OIDC-Drittanbieteranwendungen nach der Authentifizierung durch Logto zu einem ",(0,r.jsx)(n.a,{href:"/end-user-flows/consent-screen",children:"Zustimmungsbildschirm"})," f\xfcr die Benutzerautorisierung weitergeleitet."]}),"\n",(0,r.jsxs)(n.p,{children:["Alle von Drittanbietern angeforderten ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management#user-permissions-user-profile-scopes",children:"Benutzerprofilberechtigungen"}),", ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management#api-resource-permissions-api-resource-scopes",children:"API-Ressourcenberechtigungen"}),", ",(0,r.jsx)(n.a,{href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management#organization-permissions-organization-scopes",children:"Organisationsberechtigungen"})," und Informationen zur Organisationsmitgliedschaft werden auf dem Zustimmungsbildschirm angezeigt."]}),"\n",(0,r.jsx)(n.p,{children:'Diese angeforderten Berechtigungen werden den Drittanbieteranwendungen erst gew\xe4hrt, nachdem der Benutzer auf die Schaltfl\xe4che "Autorisieren" klickt.'}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:d,alt:"Zustimmungsbildschirm",width:500})}),"\n",(0,r.jsx)(n.h2,{id:"further-actions",children:"Weitere Aktionen"}),"\n",(0,r.jsx)(t,{items:[{type:"link",label:"Berechtigungsverwaltung",href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/permission-management",description:"Erfahre, wie du Berechtigungen f\xfcr deine OIDC-Drittanbieteranwendung verwalten kannst.",customProps:{icon:(0,r.jsx)(s.A,{width:20,height:20})}},{type:"link",label:"Zustimmungsbildschirm-Branding",href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/consent-screen-branding",description:"Personalisiere das Erscheinungsbild des Zustimmungsbildschirms, um deine Markenidentit\xe4t widerzuspiegeln und eine konsistente Benutzererfahrung zu bieten.",customProps:{icon:(0,r.jsx)(o.A,{width:20,height:20})}}]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,r.jsx)(i,{href:"https://blog.logto.io/logto-as-idp",children:(0,r.jsx)(n.p,{children:"Verwendung von Logto als Drittanbieter-Identit\xe4tsanbieter (IdP)"})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},58976:(e,n,t)=>{t.d(n,{A:()=>s});var i,r=t(58101);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(null,arguments)}const s=e=>{let{title:n,titleId:t,...s}=e;return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",viewBox:"0 0 18 18","aria-labelledby":t},s),n?r.createElement("title",{id:t},n):null,i||(i=r.createElement("path",{fill:"currentColor",d:"M9.975 9.165a3.7 3.7 0 0 0 1.275-2.79 3.75 3.75 0 0 0-7.5 0 3.7 3.7 0 0 0 1.275 2.79 6 6 0 0 0-3.525 5.46.75.75 0 1 0 1.5 0 4.5 4.5 0 1 1 9 0 .75.75 0 1 0 1.5 0 6 6 0 0 0-3.525-5.46M7.5 8.625a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m8.782-1.777a.75.75 0 0 0-1.065 0l-1.5 1.5-.465-.473a.75.75 0 1 0-1.065 1.057l1.006 1.005a.75.75 0 0 0 1.057 0l2.003-2.002a.75.75 0 0 0 .03-1.087"})))}},12508:(e,n,t)=>{t.d(n,{A:()=>s});var i,r=t(58101);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(null,arguments)}const s=e=>{let{title:n,titleId:t,...s}=e;return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",viewBox:"0 0 18 18","aria-labelledby":t},s),n?r.createElement("title",{id:t},n):null,i||(i=r.createElement("path",{fill:"currentColor",d:"M5.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m9.045-3 .922-.922a2.25 2.25 0 0 0 0-3.18l-2.122-2.115a2.25 2.25 0 0 0-3.18 0L9 3.705A2.25 2.25 0 0 0 6.75 1.5h-3A2.25 2.25 0 0 0 1.5 3.75v10.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-3A2.25 2.25 0 0 0 14.295 9M7.5 14.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 3.75 3h3a.75.75 0 0 1 .75.75zM9 5.82l1.98-1.98a.75.75 0 0 1 1.057 0L14.16 6a.75.75 0 0 1 0 1.058L12 9.218 9 12.18zm6 8.43a.75.75 0 0 1-.75.75H8.865a2.3 2.3 0 0 0 .127-.69l3.81-3.81h1.448a.75.75 0 0 1 .75.75z"})))}},79621:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(58101);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);