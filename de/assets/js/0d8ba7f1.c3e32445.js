"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[98118],{32975:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"end-user-flows/authentication-parameters/README","title":"Authentifizierungsparameter","description":"In einem standardm\xe4\xdfigen OIDC-Anmeldefluss initiieren Client-Anwendungen eine Authentifizierungsanfrage, die den Benutzer zur von Logto gehosteten universellen Anmeldeerfahrungs-Webseite umleitet. Basierend auf deinen Anmeldeerfahrungseinstellungen k\xf6nnen sich Benutzer mit verschiedenen Identifikatoren, Verifizierungsmethoden und Drittanbieter-SSO-Connectors f\xfcr soziale oder Unternehmensanmeldungen anmelden oder registrieren.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/README.mdx","sourceDirName":"end-user-flows/authentication-parameters","slug":"/end-user-flows/authentication-parameters/","permalink":"/de/end-user-flows/authentication-parameters/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/README.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Backup-Codes","permalink":"/de/end-user-flows/mfa/backup-codes"},"next":{"title":"Erste Bildschirmparameter","permalink":"/de/end-user-flows/authentication-parameters/first-screen"}}');var t=r(25105),s=r(79621);const d={sidebar_position:4},a="Authentifizierungsparameter",u={},o=[{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components},{Url:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"authentifizierungsparameter",children:"Authentifizierungsparameter"})}),"\n",(0,t.jsx)(n.p,{children:"In einem standardm\xe4\xdfigen OIDC-Anmeldefluss initiieren Client-Anwendungen eine Authentifizierungsanfrage, die den Benutzer zur von Logto gehosteten universellen Anmeldeerfahrungs-Webseite umleitet. Basierend auf deinen Anmeldeerfahrungseinstellungen k\xf6nnen sich Benutzer mit verschiedenen Identifikatoren, Verifizierungsmethoden und Drittanbieter-SSO-Connectors f\xfcr soziale oder Unternehmensanmeldungen anmelden oder registrieren."}),"\n",(0,t.jsxs)(n.p,{children:["Zus\xe4tzlich zu den standardm\xe4\xdfigen ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC-Authentifizierungsparametern"})," f\xfchrt unser Produkt mehrere benutzerdefinierte Authentifizierungsparameter ein, die es dir erm\xf6glichen, die gew\xfcnschte Anmeldeerfahrung f\xfcr die Endbenutzer anzupassen."]}),"\n",(0,t.jsx)(n.p,{children:"Dies ist besonders n\xfctzlich, wenn du spezifische Anmeldefl\xfcsse f\xfcr verschiedene Benutzersegmente erzwingen m\xf6chtest. Einschlie\xdflich, aber nicht beschr\xe4nkt auf die folgenden Szenarien:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Direkte Registrierung f\xfcr neue Benutzer"}),": F\xfcr eine gezielte Registrierungskampagne m\xf6chtest du m\xf6glicherweise neue Benutzer direkt zur Registrierungsseite leiten und das Standard-Anmeldeformular umgehen, um eine nahtlose Onboarding-Erfahrung zu gew\xe4hrleisten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Vorab ausgef\xfcllte E-Mail-Registrierung von einem Abonnement-Link"}),": Wenn du E-Mail-Adressen \xfcber ein selbst gehostetes Abonnementformular sammelst, erm\xf6glichen dir diese Parameter, die neuen Abonnenten zur Registrierungsseite mit vorab ausgef\xfclltem E-Mail-Feld weiterzuleiten, sodass sie den Registrierungsprozess einfach abschlie\xdfen k\xf6nnen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Direkter Passwort-Zur\xfccksetzungslink"}),": F\xfcr neue Benutzer, die ihr neues Passwort einrichten m\xfcssen, sende ihnen einen direkten Link und leite sie zur Passwort-Zur\xfccksetzungsseite mit vorab ausgef\xfclltem E-Mail-Feld weiter."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sofortige soziale Anmeldung"}),": Wenn du Anmeldeschaltfl\xe4chen f\xfcr soziale Medien direkt auf deiner Website bereitstellst, kannst du diese Parameter verwenden, um das Standard-Anmeldeformular zu \xfcberspringen und den Benutzern die direkte Authentifizierung mit ihrem gew\xe4hlten sozialen Anbieter zu erm\xf6glichen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Direkte SSO-Anmeldung f\xfcr Unternehmenskunden"}),": F\xfcr Produkte, die mehreren Unternehmenskunden dienen, erm\xf6glichen dir diese Parameter, eine dedizierte SSO-Schaltfl\xe4che anzuzeigen, die Benutzer mit ihrem spezifischen SSO-Anbieter anmeldet, das universelle Anmeldeformular \xfcberspringt und eine nahtlose Erfahrung f\xfcr jede Organisation bietet."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Lies weiter, um mehr \xfcber die Authentifizierungsparameter zu erfahren, um den ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/first-screen",children:"ersten Bildschirm"})," anzupassen oder eine ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in",children:"direkte Anmeldeerfahrung"})," f\xfcr deine Benutzer zu erm\xf6glichen."]}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,t.jsx)(r,{href:"https://blog.logto.io/embed-login-or-registration-forms-securely-on-your-site",children:(0,t.jsx)(n.p,{children:"Einbettung von Anmelde- oder Registrierungsformularen sicher auf deiner Website"})}),"\n",(0,t.jsx)(r,{href:"https://blog.logto.io/authentication-parameters",children:(0,t.jsx)(n.p,{children:"Kleine Tricks zur Verbesserung deiner Kunden-Onboarding-Erfahrung"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},79621:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var i=r(58101);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);