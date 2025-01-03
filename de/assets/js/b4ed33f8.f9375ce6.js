"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[84826],{1446:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"logto-oss/central-cache","title":"Zentraler Cache","description":"Logto unterst\xfctzt die Verwendung von Redis\xae als zentralen Cache f\xfcr bekannte Daten. Durch die Verwendung eines zentralen Caches kann Logto die Endbenutzererfahrung erheblich beschleunigen, indem die Anzahl der Datenbankabfragen, die zur Generierung einer Antwort erforderlich sind, reduziert wird.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/central-cache.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/central-cache","permalink":"/de/logto-oss/central-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/central-cache.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"CLI \xfcbersetzen","permalink":"/de/logto-oss/translate-cli"},"next":{"title":"Dateispeicheranbieter","permalink":"/de/logto-oss/file-storage-provider"}}');var t=r(25105),s=r(79621);const d={sidebar_position:5},o="Zentraler Cache",a={},c=[{value:"Konfiguration der Verbindung",id:"configure-the-connection",level:2},{value:"\xdcberpr\xfcfen, ob der Cache funktioniert",id:"check-if-the-cache-is-working",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"zentraler-cache",children:"Zentraler Cache"})}),"\n",(0,t.jsxs)(n.p,{children:["Logto unterst\xfctzt die Verwendung von Redis\xae",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," als zentralen Cache f\xfcr bekannte Daten. Durch die Verwendung eines zentralen Caches kann Logto die Endbenutzererfahrung erheblich beschleunigen, indem die Anzahl der Datenbankabfragen, die zur Generierung einer Antwort erforderlich sind, reduziert wird."]}),"\n",(0,t.jsx)(n.p,{children:"Typischerweise kann der Cache \xf6ffentlich gemacht werden, da er nur f\xfcr bekannte Daten ausgelegt ist. Derzeit speichert Logto keine Daten, die Authentifizierung oder Autorisierung erfordern."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Um die besten Sicherheitspraktiken zu gew\xe4hrleisten, empfehlen wir dennoch, den Zugriff auf den Cache zu beschr\xe4nken."})}),"\n",(0,t.jsx)(n.h2,{id:"configure-the-connection",children:"Konfiguration der Verbindung"}),"\n",(0,t.jsxs)(n.p,{children:["Um den Cache zu aktivieren, ben\xf6tigst du eine Redis 6.0-Instanz, die l\xe4uft. Damit Logto eine Verbindung herstellen und den Cache nutzen kann, setze einfach die Umgebungsvariable ",(0,t.jsx)(n.code,{children:"REDIS_URL"})," auf den Redis-Verbindungsstring, der mit dem ",(0,t.jsx)(n.a,{href:"https://www.iana.org/assignments/uri-schemes/prov/redis",children:'"redis"-Protokoll'})," (",(0,t.jsx)(n.code,{children:"redis://"}),") f\xfcr ungesicherte Verbindungen oder dem ",(0,t.jsx)(n.a,{href:"https://www.iana.org/assignments/uri-schemes/prov/rediss",children:'"redis"-Protokoll'})," (",(0,t.jsx)(n.code,{children:"redis://"}),") f\xfcr Verbindungen \xfcber TLS beginnen sollte."]}),"\n",(0,t.jsx)(n.p,{children:"Zum Beispiel:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"REDIS_URL=redis://your-redis-username:your-password@your.redis.url.com:6380\n"})}),"\n",(0,t.jsx)(n.p,{children:'Bitte beachte, dass die meisten Teile des Verbindungsstrings weggelassen werden k\xf6nnen, wie im folgenden Beispiel gezeigt, das einen Verbindungsstring ohne Benutzername und Port unter Verwendung des "redis"-Protokolls erstellt:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"REDIS_URL=redis://:your-password@your.redis.url.com\n"})}),"\n",(0,t.jsx)(n.p,{children:"Wenn das Passwort Sonderzeichen enth\xe4lt, muss es URI-codiert werden:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Wenn das Passwort "foo=" ist\nREDIS_URL=redis://:foo%3D@your.redis.url.com\n'})}),"\n",(0,t.jsx)(n.p,{children:"In F\xe4llen, in denen alle Standardwerte verwendet werden, kannst du die Variable der Einfachheit halber auf einen wahrheitsgem\xe4\xdfen Wert setzen:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'REDIS_URL=1 # oder "true", "yes"\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Der ",(0,t.jsx)(n.a,{href:"https://stackexchange.github.io/StackExchange.Redis/Configuration.html",children:"StackExchange.Redis"}),"-String wird nicht unterst\xfctzt."]})}),"\n",(0,t.jsx)(n.h2,{id:"check-if-the-cache-is-working",children:"\xdcberpr\xfcfen, ob der Cache funktioniert"}),"\n",(0,t.jsx)(n.p,{children:"Um zu \xfcberpr\xfcfen, ob der Cache ordnungsgem\xe4\xdf verbunden ist, solltest du die folgende Meldung sehen, wenn Logto startet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[CACHE] Connected to Redis\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Zus\xe4tzlich, wenn die Anfrage den Cache trifft (zum Beispiel durch mehrmaliges Zugreifen auf ",(0,t.jsx)(n.code,{children:"GET /api/.well-known/phrases"}),"), erscheint die folgende Meldung in der Konsole:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[CACHE] Well-known cache hit for ...\n"})}),"\n","\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,t.jsxs)(n.p,{children:["Redis ist eine eingetragene Marke von Redis Ltd. Alle Rechte daran sind Redis Ltd. vorbehalten. Jegliche Verwendung durch Silverhand dient nur zu Referenzzwecken und zeigt keine Unterst\xfctzung, Bef\xfcrwortung oder Verbindung zwischen Redis und Silverhand an. ",(0,t.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},79621:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var i=r(58101);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);