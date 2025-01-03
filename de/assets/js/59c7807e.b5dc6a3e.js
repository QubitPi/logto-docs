"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83203],{75747:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"concepts/core-service/configuration","title":"Konfiguration","description":"Umgebungsvariablen","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/concepts/core-service/configuration.md","sourceDirName":"concepts/core-service","slug":"/concepts/core-service/configuration","permalink":"/de/concepts/core-service/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/concepts/core-service/configuration.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Logto-Kernservice","permalink":"/de/concepts/core-service/"},"next":{"title":"Opaker Token","permalink":"/de/concepts/opaque-token"}}');var d=i(25105),s=i(79621);const t={},c="Konfiguration",l={},o=[{value:"Umgebungsvariablen",id:"environment-variables",level:2},{value:"Verwendung",id:"usage",level:3},{value:"Variablen",id:"variables",level:3},{value:"Aktivierung von HTTPS",id:"enabling-https",level:3},{value:"Verwendung von Node",id:"using-node",level:4},{value:"Verwendung eines HTTPS-Proxys",id:"using-a-https-proxy",level:4},{value:"Datenbankkonfigurationen",id:"database-configs",level:2},{value:"Unterst\xfctzte private Schl\xfcsseltypen",id:"supported-private-key-types",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"konfiguration",children:"Konfiguration"})}),"\n",(0,d.jsx)(n.h2,{id:"environment-variables",children:"Umgebungsvariablen"}),"\n",(0,d.jsx)(n.h3,{id:"usage",children:"Verwendung"}),"\n",(0,d.jsx)(n.p,{children:"Logto verarbeitet Umgebungsvariablen in folgender Reihenfolge:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Systemumgebungsvariablen"}),"\n",(0,d.jsxs)(n.li,{children:["Die ",(0,d.jsx)(n.code,{children:".env"}),"-Datei im Projektstamm, die dem ",(0,d.jsx)(n.a,{href:"https://github.com/motdotla/dotenv#readme",children:"dotenv"}),"-Format entspricht"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Daher werden die Systemumgebungsvariablen die Werte in ",(0,d.jsx)(n.code,{children:".env"})," \xfcberschreiben."]}),"\n",(0,d.jsx)(n.h3,{id:"variables",children:"Variablen"}),"\n",(0,d.jsx)(n.admonition,{type:"caution",children:(0,d.jsxs)(n.p,{children:["Wenn du Logto \xfcber ",(0,d.jsx)(n.code,{children:"npm start"})," im Projektstamm ausf\xfchrst, wird ",(0,d.jsx)(n.code,{children:"NODE_ENV"})," immer ",(0,d.jsx)(n.code,{children:"production"})," sein."]})}),"\n",(0,d.jsxs)(n.p,{children:["In den Standardwerten wird ",(0,d.jsx)(n.code,{children:"protocol"})," entweder ",(0,d.jsx)(n.code,{children:"http"})," oder ",(0,d.jsx)(n.code,{children:"https"})," entsprechend deiner HTTPS-Konfiguration sein."]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Schl\xfcssel"}),(0,d.jsx)(n.th,{children:"Standardwert"}),(0,d.jsx)(n.th,{children:"Typ"}),(0,d.jsx)(n.th,{children:"Beschreibung"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"NODE_ENV"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"'production' | 'test' | undefined"})}),(0,d.jsx)(n.td,{children:"Welche Art von Umgebung, in der Logto l\xe4uft."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"PORT"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"3001"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:"Der lokale Port, den Logto abh\xf6rt."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ADMIN_PORT"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"3002"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"number"})}),(0,d.jsx)(n.td,{children:"Der lokale Port, den die Logto Admin-Konsole abh\xf6rt."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ADMIN_DISABLE_LOCALHOST"}),(0,d.jsx)(n.td,{children:"N/A"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string | boolean | number"})}),(0,d.jsxs)(n.td,{children:["Setze es auf ",(0,d.jsx)(n.code,{children:"1"})," oder ",(0,d.jsx)(n.code,{children:"true"}),", um den Port f\xfcr die Admin-Konsole zu deaktivieren. Wenn ",(0,d.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," nicht gesetzt ist, wird die Admin-Konsole vollst\xe4ndig deaktiviert."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"DB_URL"}),(0,d.jsx)(n.td,{children:"N/A"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["Der ",(0,d.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6",children:"Postgres DSN"})," f\xfcr die Logto-Datenbank."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTPS_CERT_PATH"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string | undefined"})}),(0,d.jsxs)(n.td,{children:["Siehe ",(0,d.jsx)(n.a,{href:"#enabling-https",children:"Aktivierung von HTTPS"})," f\xfcr Details."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"HTTPS_KEY_PATH"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"undefined"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string | undefined"})}),(0,d.jsx)(n.td,{children:"Ebenso."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"TRUST_PROXY_HEADER"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"Ebenso."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ENDPOINT"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"'protocol://localhost:$PORT'"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["Du kannst eine URL mit deiner benutzerdefinierten Domain f\xfcr Online-Tests oder Produktion angeben. Dies wird auch den Wert des ",(0,d.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"OIDC-Ausstelleridentifikators"})," beeinflussen."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ADMIN_ENDPOINT"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"'protocol://localhost:$ADMIN_PORT'"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsxs)(n.td,{children:["Du kannst eine URL mit deiner benutzerdefinierten Domain f\xfcr die Produktion angeben (z. B. ",(0,d.jsx)(n.code,{children:"ADMIN_ENDPOINT=https://admin.domain.com"}),"). Dies wird auch den Wert der Admin-Konsole-Umleitungs-URIs beeinflussen."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"CASE_SENSITIVE_USERNAME"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"true"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"boolean"})}),(0,d.jsx)(n.td,{children:"Gibt an, ob der Benutzername gro\xdf-/kleinsensitiv ist. Sei vorsichtig beim \xc4ndern dieses Wertes; \xc4nderungen werden vorhandene Datenbanken nicht automatisch anpassen, was eine manuelle Verwaltung erfordert."})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"enabling-https",children:"Aktivierung von HTTPS"}),"\n",(0,d.jsx)(n.h4,{id:"using-node",children:"Verwendung von Node"}),"\n",(0,d.jsxs)(n.p,{children:["Node unterst\xfctzt HTTPS nativ. Gib ",(0,d.jsx)(n.strong,{children:"SOWOHL"})," ",(0,d.jsx)(n.code,{children:"HTTPS_CERT_PATH"})," als auch ",(0,d.jsx)(n.code,{children:"HTTPS_KEY_PATH"})," an, um HTTPS \xfcber Node zu aktivieren."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"HTTPS_CERT_PATH"})," gibt den Pfad zu deinem HTTPS-Zertifikat an, w\xe4hrend ",(0,d.jsx)(n.code,{children:"HTTPS_KEY_PATH"})," den Pfad zu deinem HTTPS-Schl\xfcssel angibt."]}),"\n",(0,d.jsx)(n.h4,{id:"using-a-https-proxy",children:"Verwendung eines HTTPS-Proxys"}),"\n",(0,d.jsx)(n.p,{children:"Eine weitere g\xe4ngige Praxis ist es, einen HTTPS-Proxy vor Node zu haben (z. B. Nginx)."}),"\n",(0,d.jsxs)(n.p,{children:["In diesem Fall m\xf6chtest du wahrscheinlich ",(0,d.jsx)(n.code,{children:"TRUST_PROXY_HEADER"})," auf ",(0,d.jsx)(n.code,{children:"true"})," setzen, was angibt, ob Proxy-Header-Felder vertrauensw\xfcrdig sein sollen. Logto wird den Wert an die ",(0,d.jsx)(n.a,{href:"https://github.com/koajs/koa/blob/master/docs/api/index.md#settings",children:"Koa-App-Einstellungen"})," weitergeben."]}),"\n",(0,d.jsxs)(n.p,{children:["Siehe ",(0,d.jsx)(n.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies",children:"Vertrauen in TLS-Offloading-Proxys"})," f\xfcr Informationen, wann dieses Feld konfiguriert werden sollte."]}),"\n",(0,d.jsx)(n.h2,{id:"database-configs",children:"Datenbankkonfigurationen"}),"\n",(0,d.jsxs)(n.p,{children:["Das Verwalten zu vieler Umgebungsvariablen ist nicht effizient und flexibel, daher werden die meisten unserer allgemeinen Konfigurationen in der Datenbanktabelle ",(0,d.jsx)(n.code,{children:"logto_configs"})," gespeichert."]}),"\n",(0,d.jsx)(n.p,{children:"Die Tabelle ist ein einfacher Schl\xfcssel-Wert-Speicher, und der Schl\xfcssel ist wie folgt aufz\xe4hlbar:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Schl\xfcssel"}),(0,d.jsx)(n.th,{children:"Typ"}),(0,d.jsx)(n.th,{children:"Beschreibung"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"oidc.cookieKeys"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string[]"})}),(0,d.jsxs)(n.td,{children:["Das String-Array der ",(0,d.jsx)(n.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys",children:"Signatur-Cookie-Schl\xfcssel"}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"oidc.privateKeys"}),(0,d.jsx)(n.td,{children:(0,d.jsx)("code",{children:"string[]"})}),(0,d.jsxs)(n.td,{children:["Das String-Array des privaten Schl\xfcsselinhalts f\xfcr ",(0,d.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing",children:"OIDC JWT-Signierung"}),"."]})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"supported-private-key-types",children:"Unterst\xfctzte private Schl\xfcsseltypen"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"EC (P-256, secp256k1, P-384 und P-521 Kurven)"}),"\n",(0,d.jsx)(n.li,{children:"RSA"}),"\n",(0,d.jsx)(n.li,{children:"OKP (Ed25519, Ed448, X25519, X448 Subtypen)"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var r=i(58101);const d={},s=r.createContext(d);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);