"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[52787],{71628:(e,n,i)=>{i.d(n,{Ay:()=>o,RM:()=>s});var r=i(25105),t=i(79621);const s=[];function l(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["In diesem Leitfaden gehen wir davon aus, dass du grundlegende Kenntnisse \xfcber Logto Connectors hast. Falls nicht, schaue dir den Leitfaden ",(0,r.jsx)(n.a,{href:"/connectors",children:"Connectors konfigurieren"})," an, um loszulegen."]})})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},55561:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"integrations/social/google/README","title":"Soziale Anmeldung mit Google einrichten","description":"Der Google-Connector bietet eine pr\xe4gnante M\xf6glichkeit f\xfcr deine Anwendung, das OAuth 2.0-Authentifizierungssystem von Google zu nutzen.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/integrations/social/google/README.mdx","sourceDirName":"integrations/social/google","slug":"/integrations/google","permalink":"/de/integrations/google","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/integrations/social/google/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/google","sidebar_label":"Google","sidebar_custom_props":{"description":"Google ist ein f\xfchrender Anbieter von Suchmaschinentechnologie und E-Mail-Diensten."}},"sidebar":"integrationsSidebar","previous":{"title":"GitHub","permalink":"/de/integrations/github"},"next":{"title":"Hugging Face","permalink":"/de/integrations/huggingface"}}');var t=i(25105),s=i(79621),l=i(71628);const o={slug:"/integrations/google",sidebar_label:"Google",sidebar_custom_props:{description:"Google ist ein f\xfchrender Anbieter von Suchmaschinentechnologie und E-Mail-Diensten."}},d="Soziale Anmeldung mit Google einrichten",u={},c=[...l.RM,{value:"Ein Projekt in der Google API Console einrichten",id:"set-up-a-project-in-the-google-api-console",level:2},{value:"Deinen Zustimmungsbildschirm konfigurieren",id:"configure-your-consent-screen",level:2},{value:"Deine Anwendung konfigurieren und registrieren",id:"configure-and-register-your-application",level:3},{value:"App-Registrierung bearbeiten",id:"edit-app-registration",level:3},{value:"OAuth-Zustimmungsbildschirm konfigurieren",id:"config-oauth-consent-screen",level:4},{value:"Berechtigungen konfigurieren",id:"config-scopes",level:4},{value:"Testbenutzer hinzuf\xfcgen (nur externer Benutzertyp)",id:"add-test-users-external-user-type-only",level:4},{value:"OAuth 2.0-Anmeldedaten erhalten",id:"obtain-oauth-20-credentials",level:2},{value:"Deinen Connector konfigurieren",id:"configure-your-connector",level:2},{value:"Konfigurationstypen",id:"config-types",level:3},{value:"Google One Tap aktivieren",id:"enable-google-one-tap",level:2},{value:"Referenzen",id:"references",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"soziale-anmeldung-mit-google-einrichten",children:"Soziale Anmeldung mit Google einrichten"})}),"\n",(0,t.jsx)(n.p,{children:"Der Google-Connector bietet eine pr\xe4gnante M\xf6glichkeit f\xfcr deine Anwendung, das OAuth 2.0-Authentifizierungssystem von Google zu nutzen."}),"\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"set-up-a-project-in-the-google-api-console",children:"Ein Projekt in der Google API Console einrichten"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Besuche die ",(0,t.jsx)(n.a,{href:"https://console.developers.google.com",children:"Google API Console"})," und melde dich mit deinem Google-Konto an."]}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf die Schaltfl\xe4che ",(0,t.jsx)(n.strong,{children:"Projekt ausw\xe4hlen"})," in der oberen Men\xfcleiste und klicke auf die Schaltfl\xe4che ",(0,t.jsx)(n.strong,{children:"Neues Projekt"}),", um ein Projekt zu erstellen."]}),"\n",(0,t.jsxs)(n.li,{children:["In deinem neu erstellten Projekt klicke auf ",(0,t.jsx)(n.strong,{children:"APIs & Dienste"}),", um das Men\xfc ",(0,t.jsx)(n.strong,{children:"APIs & Dienste"})," aufzurufen."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-your-consent-screen",children:"Deinen Zustimmungsbildschirm konfigurieren"}),"\n",(0,t.jsx)(n.h3,{id:"configure-and-register-your-application",children:"Deine Anwendung konfigurieren und registrieren"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Klicke im linken Men\xfc ",(0,t.jsx)(n.strong,{children:"APIs & Dienste"})," auf die Schaltfl\xe4che ",(0,t.jsx)(n.strong,{children:"OAuth-Zustimmungsbildschirm"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["W\xe4hle den gew\xfcnschten ",(0,t.jsx)(n.strong,{children:"Benutzertyp"})," aus und klicke auf die Schaltfl\xe4che ",(0,t.jsx)(n.strong,{children:"Erstellen"}),". (Hinweis: Wenn du ",(0,t.jsx)(n.strong,{children:"Extern"})," als deinen ",(0,t.jsx)(n.strong,{children:"Benutzertyp"})," ausw\xe4hlst, musst du sp\xe4ter Testbenutzer hinzuf\xfcgen.)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Nun befindest du dich auf der Seite ",(0,t.jsx)(n.strong,{children:"App-Registrierung bearbeiten"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"edit-app-registration",children:"App-Registrierung bearbeiten"}),"\n",(0,t.jsx)(n.h4,{id:"config-oauth-consent-screen",children:"OAuth-Zustimmungsbildschirm konfigurieren"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Folge den Anweisungen, um das Formular ",(0,t.jsx)(n.strong,{children:"OAuth-Zustimmungsbildschirm"})," auszuf\xfcllen."]}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf ",(0,t.jsx)(n.strong,{children:"SPEICHERN UND FORTFAHREN"}),", um fortzufahren."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"config-scopes",children:"Berechtigungen konfigurieren"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Klicke auf ",(0,t.jsx)(n.strong,{children:"BERECHTIGUNGEN HINZUF\xdcGEN ODER ENTFERNEN"})," und w\xe4hle ",(0,t.jsx)(n.code,{children:"../auth/userinfo.email"}),", ",(0,t.jsx)(n.code,{children:"../auth/userinfo.profile"})," und ",(0,t.jsx)(n.code,{children:"openid"})," im Popup-Drawer aus und klicke auf ",(0,t.jsx)(n.strong,{children:"AKTUALISIEREN"}),", um abzuschlie\xdfen. Es wird empfohlen, alle Berechtigungen hinzuzuf\xfcgen, die du m\xf6glicherweise verwenden m\xf6chtest, da sonst einige Berechtigungen, die du in der Konfiguration hinzugef\xfcgt hast, m\xf6glicherweise nicht funktionieren."]}),"\n",(0,t.jsx)(n.li,{children:"F\xfclle das Formular nach Bedarf aus."}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf ",(0,t.jsx)(n.strong,{children:"SPEICHERN UND FORTFAHREN"}),", um fortzufahren."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"add-test-users-external-user-type-only",children:"Testbenutzer hinzuf\xfcgen (nur externer Benutzertyp)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Klicke auf ",(0,t.jsx)(n.strong,{children:"BENUTZER HINZUF\xdcGEN"})," und f\xfcge Testbenutzer hinzu, um diesen Benutzern den Zugriff auf deine Anwendung w\xe4hrend des Testens zu erm\xf6glichen."]}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf ",(0,t.jsx)(n.strong,{children:"SPEICHERN UND FORTFAHREN"}),", um fortzufahren."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Nun solltest du den Google OAuth 2.0-Zustimmungsbildschirm konfiguriert haben."}),"\n",(0,t.jsx)(n.h2,{id:"obtain-oauth-20-credentials",children:"OAuth 2.0-Anmeldedaten erhalten"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Klicke im linken Men\xfc ",(0,t.jsx)(n.strong,{children:"APIs & Dienste"})," auf die Schaltfl\xe4che ",(0,t.jsx)(n.strong,{children:"Anmeldedaten"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Auf der Seite ",(0,t.jsx)(n.strong,{children:"Anmeldedaten"})," klicke auf die Schaltfl\xe4che ",(0,t.jsx)(n.strong,{children:"+ ANMELDEDATEN ERSTELLEN"})," in der oberen Men\xfcleiste und w\xe4hle ",(0,t.jsx)(n.strong,{children:"OAuth-Client-ID"})," aus."]}),"\n",(0,t.jsxs)(n.li,{children:["Auf der Seite ",(0,t.jsx)(n.strong,{children:"OAuth-Client-ID erstellen"})," w\xe4hle ",(0,t.jsx)(n.strong,{children:"Webanwendung"})," als Anwendungstyp aus."]}),"\n",(0,t.jsx)(n.li,{children:"F\xfclle die grundlegenden Informationen f\xfcr deine Anwendung aus."}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf ",(0,t.jsx)(n.strong,{children:"+ URI hinzuf\xfcgen"}),", um eine autorisierte Domain zu den ",(0,t.jsx)(n.strong,{children:"Autorisierte JavaScript-Urspr\xfcnge"})," hinzuzuf\xfcgen. Dies ist die Domain, von der deine Logto-Authentifizierungsseite bereitgestellt wird. In unserem Fall wird dies ",(0,t.jsx)(n.code,{children:"${your_logto_origin}"})," sein, z. B. ",(0,t.jsx)(n.code,{children:"https://logto.dev"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf ",(0,t.jsx)(n.strong,{children:"+ URI hinzuf\xfcgen"})," im Abschnitt *",(0,t.jsx)(n.strong,{children:"*Autorisierte Weiterleitungs-URIs**"}),", um die *",(0,t.jsx)(n.strong,{children:"*Autorisierte Weiterleitungs-URIs**"})," einzurichten, die den Benutzer nach der Anmeldung zur Anwendung weiterleiten. In unserem Fall wird dies ",(0,t.jsx)(n.code,{children:"${your_logto_endpoint}/callback/${connector_id}"})," sein, z. B. ",(0,t.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". Die ",(0,t.jsx)(n.code,{children:"connector_id"})," kann in der oberen Leiste der Logto Admin Console Connector-Detailseite gefunden werden."]}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf ",(0,t.jsx)(n.strong,{children:"Erstellen"}),", um abzuschlie\xdfen, und dann erh\xe4ltst du die ",(0,t.jsx)(n.strong,{children:"Client-ID"})," und das ",(0,t.jsx)(n.strong,{children:"Client-Geheimnis"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-your-connector",children:"Deinen Connector konfigurieren"}),"\n",(0,t.jsxs)(n.p,{children:["F\xfclle die Felder ",(0,t.jsx)(n.code,{children:"clientId"})," und ",(0,t.jsx)(n.code,{children:"clientSecret"})," mit der ",(0,t.jsx)(n.em,{children:"Client-ID"})," und dem ",(0,t.jsx)(n.em,{children:"Client-Geheimnis"})," aus, die du von den OAuth-App-Detailseiten im vorherigen Abschnitt erhalten hast."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"scope"})," ist eine durch Leerzeichen getrennte Liste von ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Berechtigungen"}),". Wenn nicht angegeben, ist der Standardwert f\xfcr scope ",(0,t.jsx)(n.code,{children:"openid profile email"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"prompts"})," ist ein Array von Zeichenfolgen, das den erforderlichen Benutzereingriffstyp angibt. Die Zeichenfolge kann einen der folgenden Werte haben:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"none"}),": Der Autorisierungsserver zeigt keine Authentifizierungs- oder Benutzerzustimmungsbildschirme an; er gibt einen Fehler zur\xfcck, wenn der Benutzer nicht bereits authentifiziert ist und keine vorab konfigurierte Zustimmung f\xfcr die angeforderten Berechtigungen hat. Du kannst none verwenden, um auf bestehende Authentifizierung und/oder Zustimmung zu pr\xfcfen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"consent"}),": Der Autorisierungsserver fordert den Benutzer zur Zustimmung auf, bevor er Informationen an den Client zur\xfcckgibt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"select_account"}),": Der Autorisierungsserver fordert den Benutzer auf, ein Benutzerkonto auszuw\xe4hlen. Dies erm\xf6glicht einem Benutzer, der mehrere Konten beim Autorisierungsserver hat, die Auswahl zwischen den mehreren Konten, f\xfcr die er m\xf6glicherweise aktuelle Sitzungen hat."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"config-types",children:"Konfigurationstypen"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Typ"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientId"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientSecret"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"prompts"}),(0,t.jsx)(n.td,{children:"string[]"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"enable-google-one-tap",children:"Google One Tap aktivieren"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features",children:"Google One Tap"})," ist eine sichere und einfache M\xf6glichkeit, Benutzern die Anmeldung auf deiner Website oder App mit ihrem Google-Konto zu erm\xf6glichen."]}),"\n",(0,t.jsx)(n.p,{children:"Sobald du den Google-Connector eingerichtet hast, siehst du eine Karte f\xfcr Google One Tap auf der Connector-Detailseite. Du kannst Google One Tap auf deinen Anmelde- und Registrierungsseiten aktivieren, indem du den Schalter umlegst."}),"\n",(0,t.jsx)(n.p,{children:"Wenn du Google One Tap aktivierst, kannst du die folgenden Optionen konfigurieren:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Anmeldedaten automatisch ausw\xe4hlen, wenn m\xf6glich"}),": Melde den Benutzer automatisch mit dem Google-Konto an, wenn ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out",children:"bestimmte Bedingungen erf\xfcllt sind"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Aufforderung abbrechen, wenn der Benutzer au\xdferhalb klickt/tippt"}),": Schlie\xdfe die Google One Tap-Aufforderung, wenn der Benutzer au\xdferhalb der Aufforderung klickt oder tippt. Wenn deaktiviert, muss der Benutzer auf die Schaltfl\xe4che zum Schlie\xdfen klicken, um die Aufforderung zu schlie\xdfen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Aktualisierte One Tap UX auf ITP-Browsern aktivieren"}),": Aktiviere die aktualisierte Google One Tap-Benutzererfahrung auf Intelligent Tracking Prevention (ITP)-Browsern. Bitte siehe ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/gsi/web/guides/features#upgraded_ux_on_itp_browsers",children:"diese Seite"})," f\xfcr weitere Informationen."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Um Google One Tap auf deiner Website (\xfcber die Logto-Anmeldeerfahrung hinaus) zu aktivieren, befindet sich diese Funktion in der Entwicklung. Bitte bleibe f\xfcr Updates dran."})}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup",children:"Google Identity: OAuth 2.0 einrichten"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(58101);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);