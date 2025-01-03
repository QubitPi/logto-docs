"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19243],{94165:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"end-user-flows/mfa/configure-mfa","title":"MFA konfigurieren","description":"MFA-Einstellungen in Logto konfigurieren \\\\","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/mfa/configure-mfa.mdx","sourceDirName":"end-user-flows/mfa","slug":"/end-user-flows/mfa/configure-mfa","permalink":"/de/end-user-flows/mfa/configure-mfa","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/mfa/configure-mfa.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Multi-Faktor-Authentifizierung","permalink":"/de/end-user-flows/mfa/"},"next":{"title":"Authenticator-App OTP","permalink":"/de/end-user-flows/mfa/authenticator-app-otp"}}');var t=i(25105),s=i(79621);const o={sidebar_position:1},u="MFA konfigurieren",d={},l=[{value:"MFA-Einstellungen in Logto konfigurieren",id:"configure-mfa-settings-in-logto",level:2},{value:"MFA-Benutzerfluss",id:"mfa-user-flow",level:2},{value:"MFA-Einrichtungsfluss",id:"mfa-set-up-flow",level:3},{value:"MFA-Verifizierungsfluss",id:"mfa-verification-flow",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"mfa-konfigurieren",children:"MFA konfigurieren"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-mfa-settings-in-logto",children:"MFA-Einstellungen in Logto konfigurieren"}),"\n",(0,t.jsx)(n.p,{children:"Folge diesen Schritten, um MFAs im Anmeldefluss der Benutzer in Logto zu aktivieren:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigiere zu: ",(0,t.jsx)(r,{to:"/mfa",children:"Konsole > Multi-Faktor-Authentifizierung"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Aktiviere die unterst\xfctzten Verifizierungsfaktoren f\xfcr deine Benutzer.","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Prim\xe4re Faktoren:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/end-user-flows/mfa/authenticator-app-otp",children:"Authenticator App OTP"}),": Die gebr\xe4uchlichste und weit verbreitete Methode. Verwende ein zeitbasiertes Einmalpasswort (TOTP), das von einer Authenticator-App wie Google Authenticator oder Authy generiert wird."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/end-user-flows/mfa/webauthn",children:"Passkeys (WebAuthn)"}),": Eine hochsichere Option, geeignet f\xfcr Webprodukte, die Ger\xe4tebiometrie oder Sicherheitsschl\xfcssel unterst\xfctzen und somit einen robusten Schutz gew\xe4hrleisten."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Backup-Faktoren:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/end-user-flows/mfa/backup-codes",children:"Backup-Codes"}),": Dies dient als Backup-Option, wenn Benutzer keinen der oben genannten prim\xe4ren Faktoren verifizieren k\xf6nnen. Die Aktivierung dieser Option reduziert die Reibung f\xfcr den erfolgreichen Zugriff der Benutzer."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["W\xe4hle die MFA-Richtlinieneinstellungen f\xfcr die Benutzer:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Benutzerkontrollierte MFA"}),": Benutzer k\xf6nnen den MFA-Einrichtungsprozess w\xe4hrend des Anmeldeflusses \xfcberspringen. Sie k\xf6nnen sich sp\xe4ter entscheiden, MFA \xfcber deine Self-Service-Kontoeinstellungsseite oder die von Logto gehostete Kontoeinstellungsseite (demn\xe4chst verf\xfcgbar) einzurichten. ",(0,t.jsx)(n.a,{href:"/end-user-flows/account-settings/",children:"Erfahre mehr"})," \xfcber die Implementierung einer Benutzerkontoeinstellungsseite."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Admin-erzwungene MFA"}),": Du kannst MFA f\xfcr alle Benutzer erzwingen. Benutzer werden aufgefordert, MFA w\xe4hrend des Anmeldeprozesses einzurichten, was nicht \xfcbersprungen werden kann. Wenn der Benutzer es vers\xe4umt, MFA einzurichten oder seine MFA-Einstellungen l\xf6scht, wird er von seinem Konto ausgesperrt, bis er MFA erneut einrichtet."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MFA-Einstellungen",src:i(69148).A+"",width:"3010",height:"1456"})}),"\n",(0,t.jsx)(n.h2,{id:"mfa-user-flow",children:"MFA-Benutzerfluss"}),"\n",(0,t.jsx)(n.h3,{id:"mfa-set-up-flow",children:"MFA-Einrichtungsfluss"}),"\n",(0,t.jsx)(n.p,{children:"Sobald MFA aktiviert ist, werden Benutzer w\xe4hrend des Anmelde- und Registrierungsprozesses aufgefordert, MFA einzurichten. Benutzer k\xf6nnen diesen Einrichtungsprozess nur dann \xfcberspringen, wenn die Richtlinie \u201eBenutzerkontrollierte MFA\u201c aktiviert ist."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Besuche die Anmelde- oder Registrierungsseite"}),": Der Benutzer navigiert zur Anmelde- oder Registrierungsseite."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Abschlie\xdfen der Anmeldung oder Registrierung"}),": Der Benutzer schlie\xdft den Identit\xe4ts\xfcberpr\xfcfungsprozess innerhalb des Anmelde- oder Registrierungsflusses ab."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Einrichten des prim\xe4ren MFA-Faktors"}),': Der Benutzer wird aufgefordert, seinen prim\xe4ren MFA-Faktor einzurichten (entweder Authenticator App OTP oder WebAuthn). Wenn mehrere prim\xe4re Faktoren aktiviert sind, k\xf6nnen sie ihre bevorzugte Option w\xe4hlen. Wenn die Richtlinie \u201eBenutzerkontrollierte MFA\u201c aktiviert ist, k\xf6nnen sie diesen Schritt auch \xfcberspringen, indem sie die Schaltfl\xe4che "\xdcberspringen" ausw\xe4hlen.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Einrichten des Backup-MFA-Faktors"}),": Wenn ",(0,t.jsx)(n.strong,{children:"Backup-Codes"})," aktiviert sind, wird der Benutzer aufgefordert, Backup-Codes einzurichten, nachdem er seinen prim\xe4ren Authentifizierungsfaktor erfolgreich konfiguriert hat. Automatisch generierte Backup-Codes werden dem Benutzer angezeigt, die er herunterladen und sicher speichern kann. Der Benutzer muss die Backup-Codes manuell best\xe4tigen, um den MFA-Einrichtungsprozess abzuschlie\xdfen."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MFA-Einrichtungsfluss",src:i(54060).A+"",width:"4078",height:"3018"})}),"\n",(0,t.jsx)(n.h3,{id:"mfa-verification-flow",children:"MFA-Verifizierungsfluss"}),"\n",(0,t.jsx)(n.p,{children:"Benutzer, die MFA eingerichtet haben, werden w\xe4hrend der Anmeldung aufgefordert, ihre Identit\xe4t mit ihren konfigurierten MFA-Faktoren zu verifizieren. Der Verifizierungsfaktor h\xe4ngt von der MFA-Konfiguration in Logto und den Benutzereinstellungen ab."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Wenn ein Benutzer nur einen Faktor eingerichtet hat, wird er diesen direkt verifizieren."}),"\n",(0,t.jsx)(n.li,{children:"Wenn ein Benutzer mehrere Faktoren als 2FA eingerichtet hat, muss er einen zur Verifizierung ausw\xe4hlen."}),"\n",(0,t.jsx)(n.li,{children:"Wenn alle aktivierten prim\xe4ren Faktoren dem Benutzer nicht zur Verf\xfcgung stehen und der Backup-Code aktiviert ist, kann er den einmaligen Backup-Code verwenden, um seine Identit\xe4t zu verifizieren."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"MFA-Verifizierungsfluss",src:i(92639).A+"",width:"4078",height:"2546"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},69148:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/configure-mfa-7f11afc1548e87be48fbcaa6ad860ce0.png"},54060:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/link-mfa-302f4e8f5a9561d10f3a9678c2b52217.png"},92639:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/verify-mfa-6c9358cb857546193b304af3d0ff3fcc.png"},79621:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>u});var r=i(58101);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);