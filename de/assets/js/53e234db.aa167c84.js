"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[90985],{71628:(e,n,i)=>{i.d(n,{Ay:()=>d,RM:()=>s});var t=i(25105),r=i(79621);const s=[];function c(e){const n={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["In diesem Leitfaden gehen wir davon aus, dass du grundlegende Kenntnisse \xfcber Logto Connectors hast. Falls nicht, schaue dir den Leitfaden ",(0,t.jsx)(n.a,{href:"/connectors",children:"Connectors konfigurieren"})," an, um loszulegen."]})})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},59786:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>g,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"integrations/social/huggingface/README","title":"Soziale Anmeldung mit Hugging Face einrichten","description":"Der offizielle Logto-Connector f\xfcr die soziale Anmeldung bei Hugging Face.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/integrations/social/huggingface/README.mdx","sourceDirName":"integrations/social/huggingface","slug":"/integrations/huggingface","permalink":"/de/integrations/huggingface","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/integrations/social/huggingface/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/huggingface","sidebar_label":"Hugging Face","sidebar_custom_props":{"description":"Hugging Face ist eine Plattform und Community f\xfcr maschinelles Lernen (ML) und Datenwissenschaft, die Benutzern hilft, Modelle f\xfcr maschinelles Lernen zu erstellen, bereitzustellen und zu trainieren."}},"sidebar":"integrationsSidebar","previous":{"title":"Google","permalink":"/de/integrations/google"},"next":{"title":"Kakao","permalink":"/de/integrations/kakao"}}');var r=i(25105),s=i(79621),c=i(71628);const d={slug:"/integrations/huggingface",sidebar_label:"Hugging Face",sidebar_custom_props:{description:"Hugging Face ist eine Plattform und Community f\xfcr maschinelles Lernen (ML) und Datenwissenschaft, die Benutzern hilft, Modelle f\xfcr maschinelles Lernen zu erstellen, bereitzustellen und zu trainieren."}},g="Soziale Anmeldung mit Hugging Face einrichten",o={},l=[...c.RM,{value:"Erste Schritte",id:"get-started",level:2},{value:"Anmeldung mit Hugging Face-Konto",id:"sign-in-with-hugging-face-account",level:2},{value:"Erstelle eine OAuth-App bei Hugging Face",id:"create-an-oauth-app-in-the-hugging-face",level:2},{value:"Verwaltung von Hugging Face OAuth-Apps",id:"managing-hugging-face-oauth-apps",level:2},{value:"Konfiguriere deinen Connector",id:"configure-your-connector",level:2},{value:"Konfigurationstypen",id:"config-types",level:3},{value:"Hugging Face-Connector testen",id:"test-hugging-face-connector",level:2},{value:"Referenz",id:"reference",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"soziale-anmeldung-mit-hugging-face-einrichten",children:"Soziale Anmeldung mit Hugging Face einrichten"})}),"\n",(0,r.jsx)(n.p,{children:"Der offizielle Logto-Connector f\xfcr die soziale Anmeldung bei Hugging Face."}),"\n",(0,r.jsx)(c.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"get-started",children:"Erste Schritte"}),"\n",(0,r.jsx)(n.p,{children:"Der Hugging Face-Connector erm\xf6glicht es Endbenutzern, sich \xfcber ihre eigenen Hugging Face-Konten \xfcber den Hugging Face OAuth / OpenID Connect-Flow bei deiner Anwendung anzumelden."}),"\n",(0,r.jsx)(n.h2,{id:"sign-in-with-hugging-face-account",children:"Anmeldung mit Hugging Face-Konto"}),"\n",(0,r.jsxs)(n.p,{children:["Gehe zur ",(0,r.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face-Website"})," und melde dich mit deinem Hugging Face-Konto an. Du kannst ein neues Konto registrieren, wenn du noch keines hast."]}),"\n",(0,r.jsx)(n.h2,{id:"create-an-oauth-app-in-the-hugging-face",children:"Erstelle eine OAuth-App bei Hugging Face"}),"\n",(0,r.jsxs)(n.p,{children:["Folge dem Leitfaden ",(0,r.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#creating-an-oauth-app",children:"Erstellen einer OAuth-App"})," und registriere eine neue Anwendung."]}),"\n",(0,r.jsx)(n.p,{children:"Im Erstellungsprozess musst du die folgenden Informationen angeben:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Anwendungsname"}),": Der Name deiner Anwendung."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Homepage-URL"}),": Die URL der Homepage oder Landingpage deiner Anwendung."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Logo-URL"}),": Die URL des Logos deiner Anwendung."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Berechtigungen (Scopes)"}),": Die f\xfcr die OAuth-App erlaubten Berechtigungen. F\xfcr den Hugging Face-Connector wird normalerweise ",(0,r.jsx)(n.code,{children:"profile"})," verwendet, um die Profilinformationen des Benutzers zu erhalten, und ",(0,r.jsx)(n.code,{children:"email"}),", um die E-Mail-Adresse des Benutzers zu erhalten. Stelle sicher, dass diese Berechtigungen in deiner Hugging Face OAuth-App erlaubt sind, wenn du sie verwenden m\xf6chtest."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Redirect-URI"}),": Die URL, zu der der Benutzer nach der Authentifizierung weitergeleitet wird. Du findest die Redirect-URI in der Logto Admin-Konsole, wenn du einen Hugging Face-Connector erstellst oder auf der Detailseite des erstellten Hugging Face-Connectors."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"managing-hugging-face-oauth-apps",children:"Verwaltung von Hugging Face OAuth-Apps"}),"\n",(0,r.jsxs)(n.p,{children:["Gehe zur Seite ",(0,r.jsx)(n.a,{href:"https://huggingface.co/settings/connected-applications",children:"Verbundene Anwendungen"}),", dort kannst du vorhandene OAuth-Apps hinzuf\xfcgen, bearbeiten oder l\xf6schen. Du kannst auch ",(0,r.jsx)(n.code,{children:"Client ID"})," finden und ",(0,r.jsx)(n.code,{children:"App secrets"})," in den entsprechenden OAuth-App-Einstellungsseiten generieren."]}),"\n",(0,r.jsx)(n.h2,{id:"configure-your-connector",children:"Konfiguriere deinen Connector"}),"\n",(0,r.jsxs)(n.p,{children:["F\xfclle die Felder ",(0,r.jsx)(n.code,{children:"clientId"})," und ",(0,r.jsx)(n.code,{children:"clientSecret"})," mit der ",(0,r.jsx)(n.em,{children:"Client ID"})," und dem ",(0,r.jsx)(n.em,{children:"App Secret"})," aus, die du von den OAuth-App-Detailseiten im vorherigen Abschnitt erhalten hast."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"scope"})," ist eine durch Leerzeichen getrennte Liste der ",(0,r.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#currently-supported-scopes",children:"von Hugging Face unterst\xfctzten Berechtigungen"}),". Wenn nicht angegeben, ist die Standardberechtigung ",(0,r.jsx)(n.code,{children:"profile"}),". F\xfcr den Hugging Face-Connector sind die Berechtigungen, die du verwenden m\xf6chtest, ",(0,r.jsx)(n.code,{children:"profile"})," und ",(0,r.jsx)(n.code,{children:"email"}),". Die Berechtigung ",(0,r.jsx)(n.code,{children:"profile"})," ist erforderlich, um die Profilinformationen des Benutzers zu erhalten, und die Berechtigung ",(0,r.jsx)(n.code,{children:"email"})," ist erforderlich, um die E-Mail-Adresse des Benutzers zu erhalten. Stelle sicher, dass du diese Berechtigungen in deiner Hugging Face OAuth-App erlaubt hast (konfiguriert im Abschnitt ",(0,r.jsx)(n.a,{href:"#create-an-oauth-app-in-the-hugging-face",children:"Erstelle eine OAuth-App bei Hugging Face"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"config-types",children:"Konfigurationstypen"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Typ"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientSecret"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scope"}),(0,r.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"test-hugging-face-connector",children:"Hugging Face-Connector testen"}),"\n",(0,r.jsxs)(n.p,{children:["Das war's. Der Hugging Face-Connector sollte jetzt verf\xfcgbar sein. Vergiss nicht, ",(0,r.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"Sozialen Connector in der Anmeldeerfahrung aktivieren"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Referenz"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#sign-in-with-hugging-face",children:"Hugging Face - Anmeldung mit Hugging Face"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var t=i(58101);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);