"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[73191],{71628:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>o});var s=i(25105),t=i(79621);const o=[];function l(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["In diesem Leitfaden gehen wir davon aus, dass du grundlegende Kenntnisse \xfcber Logto Connectors hast. Falls nicht, schaue dir den Leitfaden ",(0,s.jsx)(n.a,{href:"/connectors",children:"Connectors konfigurieren"})," an, um loszulegen."]})})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},72978:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"integrations/social/facebook/README","title":"Soziale Anmeldung mit Facebook einrichten","description":"Der offizielle Logto Connector f\xfcr die Facebook-Sozialanmeldung.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/integrations/social/facebook/README.mdx","sourceDirName":"integrations/social/facebook","slug":"/integrations/facebook","permalink":"/de/integrations/facebook","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/integrations/social/facebook/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/facebook","sidebar_label":"Facebook","sidebar_custom_props":{"description":"Facebook ist eine weltweite Social-Media-Plattform mit Milliarden von Nutzern."}},"sidebar":"integrationsSidebar","previous":{"title":"Discord","permalink":"/de/integrations/discord"},"next":{"title":"Feishu","permalink":"/de/integrations/feishu-web"}}');var t=i(25105),o=i(79621),l=i(71628);const r={slug:"/integrations/facebook",sidebar_label:"Facebook",sidebar_custom_props:{description:"Facebook ist eine weltweite Social-Media-Plattform mit Milliarden von Nutzern."}},d="Soziale Anmeldung mit Facebook einrichten",c={},a=[...l.RM,{value:"Erste Schritte",id:"get-started",level:2},{value:"Ein Facebook-Entwicklerkonto registrieren",id:"register-a-facebook-developer-account",level:3},{value:"Eine Facebook-App einrichten",id:"set-up-a-facebook-app",level:3},{value:"Den Connector-JSON zusammenstellen",id:"compose-the-connector-json",level:2},{value:"Anmeldung mit Facebook-Testbenutzern testen",id:"test-sign-in-with-facebooks-test-users",level:2},{value:"Facebook-Anmeldeeinstellungen ver\xf6ffentlichen",id:"publish-facebook-sign-in-settings",level:2},{value:"Konfigurationstypen",id:"config-types",level:2},{value:"Referenzen",id:"references",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"soziale-anmeldung-mit-facebook-einrichten",children:"Soziale Anmeldung mit Facebook einrichten"})}),"\n",(0,t.jsx)(n.p,{children:"Der offizielle Logto Connector f\xfcr die Facebook-Sozialanmeldung."}),"\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"Erste Schritte"}),"\n",(0,t.jsx)(n.p,{children:"Der Facebook-Connector bietet eine pr\xe4gnante M\xf6glichkeit f\xfcr deine Anwendung, das OAuth 2.0-Authentifizierungssystem von Facebook zu nutzen."}),"\n",(0,t.jsx)(n.h3,{id:"register-a-facebook-developer-account",children:"Ein Facebook-Entwicklerkonto registrieren"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/register/",children:"Registriere dich als Facebook-Entwickler"}),", falls du noch keines hast."]}),"\n",(0,t.jsx)(n.h3,{id:"set-up-a-facebook-app",children:"Eine Facebook-App einrichten"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Besuche die Seite ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/apps",children:"Apps"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Klicke auf deine bestehende App oder ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app",children:"erstelle eine neue"}),", falls n\xf6tig.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Der ausgew\xe4hlte ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types",children:"App-Typ"})," liegt bei dir, sollte aber das Produkt ",(0,t.jsx)(n.em,{children:"Facebook Login"})," haben."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'Auf der App-Dashboard-Seite scrolle zum Abschnitt "Produkt hinzuf\xfcgen" und klicke auf die Schaltfl\xe4che "Einrichten" auf der Karte "Facebook Login".'}),"\n",(0,t.jsx)(n.li,{children:'\xdcberspringe die Facebook Login Schnellstartseite und klicke auf die Seitenleiste -> "Produkte" -> "Facebook Login" -> "Einstellungen".'}),"\n",(0,t.jsxs)(n.li,{children:["Auf der Seite Facebook Login Einstellungen f\xfclle ",(0,t.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),' in das Feld "G\xfcltige OAuth-Weiterleitungs-URIs" ein. Die ',(0,t.jsx)(n.code,{children:"connector_id"})," findest du in der oberen Leiste der Logto Admin Console Connector-Detailseite. Zum Beispiel:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"})," f\xfcr die Produktion"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"https://localhost:3001/callback/${connector_id}"})," f\xfcr Tests in der lokalen Umgebung"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'Klicke auf die Schaltfl\xe4che "\xc4nderungen speichern" in der unteren rechten Ecke.'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"compose-the-connector-json",children:"Den Connector-JSON zusammenstellen"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Auf der Facebook-App-Dashboard-Seite klicke auf die Seitenleiste -> "Einstellungen" -> "Grundlegend".'}),"\n",(0,t.jsx)(n.li,{children:'Du siehst die "App-ID" und das "App-Geheimnis" auf dem Panel.'}),"\n",(0,t.jsx)(n.li,{children:'Klicke auf die Schaltfl\xe4che "Anzeigen" neben dem Eingabefeld f\xfcr das App-Geheimnis, um dessen Inhalt zu kopieren.'}),"\n",(0,t.jsxs)(n.li,{children:["F\xfclle die Logto-Connector-Einstellungen aus:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["F\xfclle das Feld ",(0,t.jsx)(n.code,{children:"clientId"})," mit dem String aus ",(0,t.jsx)(n.em,{children:"App-ID"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["F\xfclle das Feld ",(0,t.jsx)(n.code,{children:"clientSecret"})," mit dem String aus ",(0,t.jsx)(n.em,{children:"App-Geheimnis"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["F\xfclle das Feld ",(0,t.jsx)(n.code,{children:"scope"})," mit einer durch Kommas oder Leerzeichen getrennten Liste von ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/permissions/reference",children:"Berechtigungen"})," als String aus. Wenn du keinen Scope angibst, ist der Standard-Scope ",(0,t.jsx)(n.code,{children:"email,public_profile"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"test-sign-in-with-facebooks-test-users",children:"Anmeldung mit Facebook-Testbenutzern testen"}),"\n",(0,t.jsxs)(n.p,{children:["Du kannst die Konten der Test-, Entwickler- und Admin-Benutzer verwenden, um die Anmeldung mit der zugeh\xf6rigen App sowohl im Entwicklungs- als auch im Live-",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes",children:"App-Modus"})," zu testen."]}),"\n",(0,t.jsxs)(n.p,{children:["Du kannst die App auch direkt ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"live schalten"}),", sodass sich jeder Facebook-Nutzer mit der App anmelden kann."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Auf der App-Dashboard-Seite klicke auf die Seitenleiste -> "Rollen" -> "Testbenutzer".'}),"\n",(0,t.jsx)(n.li,{children:'Klicke auf die Schaltfl\xe4che "Testbenutzer erstellen", um einen Testbenutzer zu erstellen.'}),"\n",(0,t.jsx)(n.li,{children:'Klicke auf die Schaltfl\xe4che "Optionen" des bestehenden Testbenutzers, und du siehst weitere Operationen, z. B. "Name und Passwort \xe4ndern".'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"publish-facebook-sign-in-settings",children:"Facebook-Anmeldeeinstellungen ver\xf6ffentlichen"}),"\n",(0,t.jsxs)(n.p,{children:["Normalerweise k\xf6nnen sich nur die Test-, Admin- und Entwickler-Benutzer mit der zugeh\xf6rigen App im ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode",children:"Entwicklungsmodus"})," anmelden."]}),"\n",(0,t.jsxs)(n.p,{children:["Um normalen Facebook-Nutzern die Anmeldung mit der App in der Produktionsumgebung zu erm\xf6glichen, musst du m\xf6glicherweise deine Facebook-App in den ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"Live-Modus"})})," schalten, abh\xe4ngig vom App-Typ. Zum Beispiel hat die reine ",(0,t.jsx)(n.em,{children:"Business-Typ"}),'-App keinen "Live"-Schalter, aber es wird deine Nutzung nicht blockieren.']}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Auf der Facebook-App-Dashboard-Seite klicke auf die Seitenleiste -> "Einstellungen" -> "Grundlegend".'}),"\n",(0,t.jsx)(n.li,{children:'F\xfclle die Felder "Datenschutzrichtlinien-URL" und "Benutzerdatenl\xf6schung" auf dem Panel aus, falls erforderlich.'}),"\n",(0,t.jsx)(n.li,{children:'Klicke auf die Schaltfl\xe4che "\xc4nderungen speichern" in der unteren rechten Ecke.'}),"\n",(0,t.jsx)(n.li,{children:'Klicke auf die "Live"-Schaltfl\xe4che in der oberen Leiste der App.'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"config-types",children:"Konfigurationstypen"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Typ"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientId"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientSecret"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"Referenzen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/",children:"Facebook Login - Dokumentation - Facebook f\xfcr Entwickler"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/",children:"Manuellen Anmeldefluss erstellen"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/permissions",children:"Berechtigungsleitfaden"})}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(58101);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);