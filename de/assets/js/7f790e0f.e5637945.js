"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[30255],{20128:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"developers/signing-keys","title":"Signaturschl\xfcssel","description":"Logto OIDC-Signaturschl\xfcssel, auch bekannt als \\"OIDC-Private Keys\\" und \\"OIDC-Cookie-Keys\\", sind die Signaturschl\xfcssel, die verwendet werden, um JWT-Tokens (Zugangstokens und ID-Tokens) und Browser-Cookies in Logto Anmeldesitzungen zu signieren. Diese Signaturschl\xfcssel werden beim Seeding der Logto-Datenbank (Open-Source) oder beim Erstellen eines neuen Mandanten (Cloud) generiert und k\xf6nnen \xfcber CLI (Open-Source), Management APIs oder Console UI verwaltet werden.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/developers/signing-keys.mdx","sourceDirName":"developers","slug":"/developers/signing-keys","permalink":"/de/developers/signing-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/developers/signing-keys.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"signing-keys","title":"Signaturschl\xfcssel","sidebar_label":"Signaturschl\xfcssel","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Benutzermimikry","permalink":"/de/developers/user-impersonation"},"next":{"title":"Webhooks","permalink":"/de/developers/webhooks/"}}');var r=s(25105),t=s(79621);const l={id:"signing-keys",title:"Signaturschl\xfcssel",sidebar_label:"Signaturschl\xfcssel",sidebar_position:4},d="Signaturschl\xfcssel",o={},a=[{value:"Wie funktioniert es?",id:"how-it-works",level:2},{value:"Signaturschl\xfcssel \xfcber die Console UI rotieren",id:"rotate-signing-keys-from-console-ui",level:2},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{CloudLink:s,Url:i}=n;return s||c("CloudLink",!0),i||c("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"signaturschl\xfcssel",children:"Signaturschl\xfcssel"})}),"\n",(0,r.jsxs)(n.p,{children:["Logto ",(0,r.jsx)(n.a,{href:"https://auth.wiki/signing-key",children:"OIDC-Signaturschl\xfcssel"}),', auch bekannt als "OIDC-Private Keys" und "OIDC-Cookie-Keys", sind die Signaturschl\xfcssel, die verwendet werden, um JWT-Tokens (',(0,r.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"Zugangstokens"})," und ",(0,r.jsx)(n.a,{href:"https://auth.wiki/id-token",children:"ID-Tokens"}),") und Browser-Cookies in Logto ",(0,r.jsx)(n.a,{href:"/end-user-flows/sign-out#sign-in-session",children:"Anmeldesitzungen"})," zu signieren. Diese Signaturschl\xfcssel werden beim Seeding der Logto-Datenbank (",(0,r.jsx)(n.a,{href:"/logto-oss",children:"Open-Source"}),") oder beim Erstellen eines neuen Mandanten (",(0,r.jsx)(n.a,{href:"/logto-cloud",children:"Cloud"}),") generiert und k\xf6nnen \xfcber ",(0,r.jsx)(n.a,{href:"/logto-oss/using-cli",children:"CLI"})," (Open-Source), Management APIs oder Console UI verwaltet werden."]}),"\n",(0,r.jsx)(n.p,{children:"Standardm\xe4\xdfig verwendet Logto den Elliptic Curve (EC) Algorithmus, um digitale Signaturen zu erzeugen. Da Benutzer jedoch h\xe4ufig JWT-Signaturen \xfcberpr\xfcfen m\xfcssen und viele \xe4ltere Tools den EC-Algorithmus nicht unterst\xfctzen (nur RSA unterst\xfctzen), haben wir die Funktionalit\xe4t implementiert, private Schl\xfcssel zu rotieren und Benutzern die Wahl des Signaturalgorithmus zu erm\xf6glichen (einschlie\xdflich sowohl RSA als auch EC). Dies gew\xe4hrleistet die Kompatibilit\xe4t mit Diensten, die veraltete Signatur\xfcberpr\xfcfungstools verwenden."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Theoretisch sollten Signaturschl\xfcssel nicht geleakt werden und haben keine Ablaufzeit, was bedeutet, dass es nicht notwendig ist, sie zu rotieren. Das periodische Rotieren des Signaturschl\xfcssels nach einem bestimmten Zeitraum kann jedoch die Sicherheit erh\xf6hen."})}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"Wie funktioniert es?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OIDC-Private Key"}),(0,r.jsx)(n.br,{}),"\n","Beim Initialisieren einer Logto-Instanz wird automatisch ein Paar aus \xf6ffentlichem und privatem Schl\xfcssel generiert und im zugrunde liegenden OIDC-Anbieter registriert. Wenn Logto ein neues JWT-Token (Zugangstoken oder ID-Token) ausstellt, wird das Token mit dem privaten Schl\xfcssel signiert. Gleichzeitig kann jede Client-Anwendung, die ein JWT-Token erh\xe4lt, den gepaarten \xf6ffentlichen Schl\xfcssel verwenden, um die Tokensignatur zu \xfcberpr\xfcfen, um sicherzustellen, dass das Token nicht von Dritten manipuliert wurde. Der private Schl\xfcssel ist auf dem Logto-Server gesch\xfctzt. Der \xf6ffentliche Schl\xfcssel hingegen ist, wie der Name schon sagt, f\xfcr jeden zug\xe4nglich und kann \xfcber die ",(0,r.jsx)(n.code,{children:"/oidc/jwks"}),"-Schnittstelle des OIDC-Endpunkts abgerufen werden. Ein Signaturschl\xfcsselalgorithmus kann beim Generieren des privaten Schl\xfcssels angegeben werden, und Logto verwendet standardm\xe4\xdfig den EC (Elliptic Curve) Algorithmus. Die Administratoren k\xf6nnen den Standardalgorithmus durch Rotieren der privaten Schl\xfcssel auf RSA (Rivest-Shamir-Adleman) \xe4ndern."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OIDC-Cookie Key"}),(0,r.jsx)(n.br,{}),"\n",'Wenn ein Benutzer einen Anmelde- oder Registrierungsfluss initiiert, wird auf dem Server eine "OIDC-Sitzung" erstellt, ebenso wie eine Reihe von Browser-Cookies. Mit diesen Cookies kann der Browser die Logto Experience API anfordern, um eine Reihe von Interaktionen im Namen des Benutzers durchzuf\xfchren, wie z. B. Anmelden, Registrieren und Passwort zur\xfccksetzen. Im Gegensatz zu den JWT-Tokens werden die Cookies jedoch nur von Logto OIDC-Dienst selbst signiert und \xfcberpr\xfcft, asymmetrische Kryptographiema\xdfnahmen sind nicht erforderlich. Daher haben wir keine gepaarten \xf6ffentlichen Schl\xfcssel f\xfcr Cookie-Signaturschl\xfcssel, noch asymmetrische Verschl\xfcsselungsalgorithmen.']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"rotate-signing-keys-from-console-ui",children:"Signaturschl\xfcssel \xfcber die Console UI rotieren"}),"\n",(0,r.jsx)(n.p,{children:'Logto f\xfchrt eine Funktion zur "Rotation von Signaturschl\xfcsseln" ein, die es dir erm\xf6glicht, einen neuen OIDC-Private Key und Cookie Key in deinem Mandanten zu erstellen.'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigiere zu ",(0,r.jsx)(s,{to:"/signing-keys",children:"Console > Signaturschl\xfcssel"}),". Dort kannst du sowohl OIDC-Private Keys als auch OIDC-Cookie Keys verwalten."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Um den Signaturschl\xfcssel zu rotieren, klicke auf die Schaltfl\xe4che "Private Keys rotieren" oder "Cookie Keys rotieren". Beim Rotieren der privaten Schl\xfcssel hast du die M\xf6glichkeit, den Signaturalgorithmus zu \xe4ndern.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Du findest eine Tabelle, die alle in Gebrauch befindlichen Signaturschl\xfcssel auflistet. Hinweis: Du kannst den vorherigen Schl\xfcssel l\xf6schen, aber nicht den aktuellen."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status"}),(0,r.jsx)(n.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Aktuell"}),(0,r.jsx)(n.td,{children:"Dies zeigt an, dass dieser Schl\xfcssel derzeit aktiv in deinen Anwendungen und APIs verwendet wird."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vorherig"}),(0,r.jsx)(n.td,{children:"Bezieht sich auf einen Schl\xfcssel, der zuvor verwendet wurde, aber herausrotiert wurde. Bestehende Tokens mit diesem Signaturschl\xfcssel bleiben g\xfcltig."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Bitte denke daran, dass die Rotation die folgenden drei Aktionen umfasst:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Erstellen eines neuen Signaturschl\xfcssels"}),": Dies erfordert, dass alle deine ",(0,r.jsx)(n.strong,{children:"Anwendungen"})," und ",(0,r.jsx)(n.strong,{children:"APIs"})," den neuen Signaturschl\xfcssel \xfcbernehmen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rotieren des aktuellen Schl\xfcssels"}),': Der bestehende Schl\xfcssel wird nach der Rotation als "vorherig" bezeichnet und nicht mehr von neu erstellten Anwendungen und APIs verwendet. Tokens, die mit diesem Schl\xfcssel signiert wurden, bleiben jedoch weiterhin g\xfcltig.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Entfernen deines vorherigen Schl\xfcssels"}),': Schl\xfcssel, die als "vorherig" gekennzeichnet sind, werden widerrufen und aus der Tabelle entfernt.']}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"Drehe niemals Signaturschl\xfcssel hintereinander (zwei oder mehr Mal), da dies ALLE ausgegebenen Tokens ung\xfcltig machen kann."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"F\xfcr OSS-Benutzer ist nach dem Rotieren des Signaturschl\xfcssels ein Neustart der Logto-Instanz erforderlich, damit der neue Signaturschl\xfcssel wirksam wird."}),"\n",(0,r.jsx)(n.li,{children:"F\xfcr Cloud-Benutzer wird der neue Signaturschl\xfcssel sofort nach der Rotation wirksam, aber bitte stelle sicher, dass du den Signaturschl\xfcssel nicht mehrmals hintereinander rotierst."}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,r.jsx)(i,{href:"https://blog.logto.io/introduction-to-ec-and-rsa-signing-algorithms-in-jwt",children:(0,r.jsx)(n.p,{children:"Einf\xfchrung in EC- und RSA-Signaturalgorithmen in JWT"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(58101);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);