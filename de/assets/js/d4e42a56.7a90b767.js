"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[58170],{89917:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"end-user-flows/sign-up-and-sign-in/disable-user-registration","title":"Benutzerregistrierung deaktivieren","description":"In einigen F\xe4llen m\xf6chtest du m\xf6glicherweise die Benutzerregistrierung f\xfcr deine Anwendung einschr\xe4nken. Logto erm\xf6glicht es dir, die anonyme Benutzerregistrierung zu deaktivieren und die Benutzeranmeldung nur auf Benutzer zu beschr\xe4nken, die von einem Administrator eingeladen wurden.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/disable-user-registration.mdx","sourceDirName":"end-user-flows/sign-up-and-sign-in","slug":"/end-user-flows/sign-up-and-sign-in/disable-user-registration","permalink":"/de/end-user-flows/sign-up-and-sign-in/disable-user-registration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/sign-up-and-sign-in/disable-user-registration.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Bedingungen und Datenschutz","permalink":"/de/end-user-flows/sign-up-and-sign-in/terms-and-privacy"},"next":{"title":"Enterprise SSO","permalink":"/de/end-user-flows/enterprise-sso/"}}');var t=i(25105),s=i(79621);const d={sidebar_position:6},l="Benutzerregistrierung deaktivieren",u={},o=[{value:"Implementiere einen einladungsbasierten Registrierungsfluss",id:"implement-an-invitation-only-sign-up-flow",level:2},{value:"Option 1: Benutzer per E-Mail einladen",id:"option-1-invite-users-via-email",level:3},{value:"Option 2: Benutzer bei manueller Registrierung benachrichtigen",id:"option-2-notify-users-on-manual-registration",level:3},{value:"Benutzererfahrung bei einladungsbasierter Registrierung",id:"user-experience-for-invitation-only-sign-up",level:2},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:i,Url:r}=n;return i||c("CloudLink",!0),r||c("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"benutzerregistrierung-deaktivieren",children:"Benutzerregistrierung deaktivieren"})}),"\n",(0,t.jsx)(n.p,{children:"In einigen F\xe4llen m\xf6chtest du m\xf6glicherweise die Benutzerregistrierung f\xfcr deine Anwendung einschr\xe4nken. Logto erm\xf6glicht es dir, die anonyme Benutzerregistrierung zu deaktivieren und die Benutzeranmeldung nur auf Benutzer zu beschr\xe4nken, die von einem Administrator eingeladen wurden."}),"\n",(0,t.jsx)(n.p,{children:"Um die Endbenutzerregistrierung zu deaktivieren, folge diesen Schritten:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Gehe zur Seite ",(0,t.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Konsole > Anmeldeerfahrung > Registrierung und Anmeldung"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Schalte im Abschnitt ",(0,t.jsx)(n.strong,{children:"Erweiterte Optionen"})," den Schalter ",(0,t.jsx)(n.strong,{children:"Benutzerregistrierung aktivieren"})," aus, um die Benutzerregistrierung zu deaktivieren. (Standardm\xe4\xdfig aktiviert)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sobald die Benutzerregistrierung deaktiviert ist:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Der Link "Konto erstellen" wird von der Anmeldeseite entfernt.'}),"\n",(0,t.jsx)(n.li,{children:"Die Registrierungsseite ist deaktiviert, und Benutzer, die sie besuchen, werden zur Anmeldeseite umgeleitet."}),"\n",(0,t.jsx)(n.li,{children:'Der soziale und Enterprise SSO-Registrierungsfluss ist ebenfalls deaktiviert. Benutzer mit nicht registrierten sozialen Konten erhalten nach der sozialen Authentifizierung einen "Konto nicht gefunden"-Fehler.'}),"\n",(0,t.jsx)(n.li,{children:"Die Funktion zum Verkn\xfcpfen von sozialen Konten ist weiterhin f\xfcr Benutzer verf\xfcgbar, die eine \xfcbereinstimmende E-Mail-Adresse oder Telefonnummer im System haben."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implement-an-invitation-only-sign-up-flow",children:"Implementiere einen einladungsbasierten Registrierungsfluss"}),"\n",(0,t.jsx)(n.p,{children:"Logto bietet keinen integrierten Einladungsfluss. Du kannst jedoch leicht einen einladungsbasierten Registrierungsfluss implementieren, indem du die Benutzer-Management-API in Logto nutzt."}),"\n",(0,t.jsx)(n.h3,{id:"option-1-invite-users-via-email",children:"Option 1: Benutzer per E-Mail einladen"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Deaktiviere die Benutzerregistrierung in der ",(0,t.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Konsole > Anmeldeerfahrung"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Erstelle ein benutzerdefiniertes, einladungsbasiertes Benutzerregistrierungsformular in deiner Anwendung."}),"\n",(0,t.jsx)(n.li,{children:"Sende eine Einladung per E-Mail an den Benutzer mit einem eindeutigen Einladungslink."}),"\n",(0,t.jsxs)(n.li,{children:["Wenn der Benutzer auf den Registrierungslink klickt, lasse deine Anwendung die ",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createuser",children:"Logto Management API"})," aufrufen, um das Benutzerkonto zu erstellen."]}),"\n",(0,t.jsxs)(n.li,{children:["Nachdem das Benutzerkonto erstellt wurde, leite den Benutzer zur Logto-Anmeldeseite oder zur Seite zum Zur\xfccksetzen des Passworts weiter, um die Registrierung abzuschlie\xdfen. Siehe ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/",children:"Authentifizierungsparameter"})," f\xfcr Anleitungen zur Anpassung des ersten Bildschirms und zum Vorab-Ausf\xfcllen der E-Mail des Benutzers, um den Anmeldeprozess zu vereinfachen."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"option-2-notify-users-on-manual-registration",children:"Option 2: Benutzer bei manueller Registrierung benachrichtigen"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Deaktiviere die Benutzerregistrierung in der Logto-Konsole."}),"\n",(0,t.jsxs)(n.li,{children:["Erstelle Benutzerkonten manuell in der ",(0,t.jsx)(i,{to:"/users",children:"Konsole > Benutzerverwaltung"})," oder \xfcber die ",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createuser",children:"Management API"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Benachrichtige die Benutzer per E-Mail, dass ihr Konto erstellt wurde."}),"\n",(0,t.jsxs)(n.li,{children:["Leite die Benutzer zur Logto-Anmeldeseite oder zur Seite zum Zur\xfccksetzen des Passworts weiter, um die Registrierung abzuschlie\xdfen. Siehe ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/",children:"Authentifizierungsparameter"})," f\xfcr Anleitungen zur Anpassung des ersten Bildschirms und zum Vorab-Ausf\xfcllen der E-Mail des Benutzers, um den Anmeldeprozess zu vereinfachen."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"user-experience-for-invitation-only-sign-up",children:"Benutzererfahrung bei einladungsbasierter Registrierung"}),"\n",(0,t.jsx)(n.p,{children:"Wenn die Benutzerregistrierung deaktiviert ist, werden Benutzer, die die Registrierungsseite besuchen, zur Anmeldeseite umgeleitet. Benutzer k\xf6nnen nur von einem Administrator oder durch die Verwendung der Management API erstellt werden. Abh\xe4ngig von den von dir konfigurierten Einstellungen f\xfcr Registrierung und Anmeldung k\xf6nnen Benutzer unterschiedliche Erfahrungen beim Anmelden machen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Anmeldung mit E-Mail oder Telefonnummer \xfcber Best\xe4tigungscode"}),": Erstelle das Benutzerkonto mit einer ",(0,t.jsx)(n.strong,{children:"E-Mail-Adresse"})," oder ",(0,t.jsx)(n.strong,{children:"Telefonnummer"}),". Aktiviere die Anmeldemethode per Best\xe4tigungscode f\xfcr E-Mail oder Telefonnummer. Sobald der Benutzer erstellt ist, kann er sich direkt mit seiner E-Mail oder Telefonnummer \xfcber die Authentifizierungsmethode per Best\xe4tigungscode anmelden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Soziale Anmeldung mit spezifischer E-Mail oder Telefonnummer"}),": Erstelle das Benutzerkonto mit einer ",(0,t.jsx)(n.strong,{children:"E-Mail-Adresse"})," oder ",(0,t.jsx)(n.strong,{children:"Telefonnummer"}),", die mit ihrem sozialen Konto verkn\xfcpft ist. Erstelle und aktiviere die soziale Verbindung f\xfcr den spezifischen sozialen Anbieter. Aktiviere die Funktion ",(0,t.jsx)(n.a,{href:"/end-user-flows/sign-up-and-sign-in/social-sign-in#account-linking",children:(0,t.jsx)(n.strong,{children:"Automatische Kontoverkn\xfcpfung"})}),", um die soziale Identit\xe4t automatisch mit dem Benutzerkonto basierend auf der \xfcbereinstimmenden E-Mail oder Telefonnummer zu verkn\xfcpfen. Sobald der Benutzer erstellt ist, kann er sich direkt mit seinem sozialen Konto anmelden, das mit der E-Mail oder Telefonnummer \xfcbereinstimmt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Benutzername/E-Mail/Telefonnummer mit Passwort"}),": Erstelle ein Benutzerkonto mit einem ",(0,t.jsx)(n.strong,{children:"Benutzernamen"}),", einer ",(0,t.jsx)(n.strong,{children:"E-Mail-Adresse"})," oder einer ",(0,t.jsx)(n.strong,{children:"Telefonnummer"})," und aktiviere den entsprechenden Identifikator f\xfcr die passwortbasierte Anmeldung.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Mit einem voreingestellten Passwort: Setze ein Passwort w\xe4hrend der Kontoerstellung und teile es dem Benutzer sicher mit. Der Benutzer kann sich dann direkt mit seinem Benutzernamen, seiner E-Mail oder Telefonnummer und dem voreingestellten Passwort anmelden und das Passwort bei Bedarf zur\xfccksetzen."}),"\n",(0,t.jsxs)(n.li,{children:["Ohne voreingestelltes Passwort: Erstelle das Konto ohne Passwort und fordere den Benutzer auf, eines bei der Kontoaktivierung festzulegen. (Eine ",(0,t.jsx)(n.strong,{children:"E-Mail-Adresse"})," oder ",(0,t.jsx)(n.strong,{children:"Telefonnummer"})," ist f\xfcr den Passwort-Zur\xfccksetzungsprozess erforderlich.) Nachdem der Benutzer erstellt wurde, leite ihn zur Seite zum Zur\xfccksetzen des Passworts weiter, wobei seine E-Mail oder Telefonnummer vorab ausgef\xfcllt ist. F\xfcr Anleitungen zum Weiterleiten von Benutzern zur Seite zum Zur\xfccksetzen des Passworts mit vorab ausgef\xfcllten Details, siehe ",(0,t.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/",children:"Authentifizierungsparameter"}),". Sobald der Benutzer ein neues Passwort festgelegt hat, kann er sich direkt mit seinem Benutzernamen, seiner E-Mail oder Telefonnummer und dem neuen Passwort anmelden."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,t.jsx)(r,{href:"https://blog.logto.io/invitation-only-sign-up",children:(0,t.jsx)(n.p,{children:"Blog: Wie man eine einladungsbasierte Registrierung in Logto einrichtet"})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(58101);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);