"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20332],{5534:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"authorization/role-based-access-control/protect-api-resources-with-rbac","title":"API-Ressourcen mit RBAC sch\xfctzen","description":"Zus\xe4tzlich zu Sch\xfctze deine API, das Ressourcen sichert, indem es sicherstellt, dass ein g\xfcltiges JWT vorhanden ist, kann auch die rollenbasierte Zugangskontrolle (RBAC) angewendet werden.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/protect-api-resources-with-rbac.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/protect-api-resources-with-rbac","permalink":"/de/authorization/role-based-access-control/protect-api-resources-with-rbac","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/protect-api-resources-with-rbac.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Rollen konfigurieren","permalink":"/de/authorization/role-based-access-control/configure-roles"},"next":{"title":"Organisationstemplate","permalink":"/de/authorization/organization-template/"}}');var t=r(25105),s=r(79621);const o={sidebar_position:3},u="API-Ressourcen mit RBAC sch\xfctzen",d={},a=[{value:"Autorisierungsflussdiagramm",id:"authorization-flow-diagram",level:2},{value:"Optional: Benutzerberechtigungs\xe4nderung behandeln",id:"optional-handle-user-permission-change",level:2},{value:"Keine neuen Berechtigungen im System eingef\xfchrt",id:"no-new-permissions-introduced-into-the-system",level:3},{value:"Neue Berechtigung wird in das System eingef\xfchrt und einem Benutzer zugewiesen",id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-user",level:3},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Url:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"api-ressourcen-mit-rbac-sch\xfctzen",children:"API-Ressourcen mit RBAC sch\xfctzen"})}),"\n",(0,t.jsxs)(n.p,{children:["Zus\xe4tzlich zu ",(0,t.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"Sch\xfctze deine API"}),", das Ressourcen sichert, indem es sicherstellt, dass ein g\xfcltiges JWT vorhanden ist, kann auch die rollenbasierte Zugangskontrolle (RBAC) angewendet werden."]}),"\n",(0,t.jsx)(n.p,{children:"In diesem Artikel konzentrieren wir uns darauf, wie RBAC die Berechtigungsdelegation und -validierung in deinem Authentifizierungsfluss beeinflusst."}),"\n",(0,t.jsx)(n.h2,{id:"authorization-flow-diagram",children:"Autorisierungsflussdiagramm"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: Authentifizierung & Token-Anfrage\n    Client->>Logto: GET /oidc/auth & POST /oidc/token\n    Note right of Client: mit Ressource und angeforderten Berechtigungen\n\n    Note over Logto: Filtere angeforderte Berechtigungen basierend auf<br/>der RBAC-Richtlinie des Benutzers\n    Logto--\x3e>Client: Gibt JWT-Zugangstoken zur\xfcck\n    Note left of Logto: Token enth\xe4lt:<br/>- Standard-JWT-Anspr\xfcche<br/>- Gew\xe4hrte Berechtigungen (gefiltert durch RBAC)\n\n    Note over Client,API: API-Anfrage\n    Client->>API: Anfrage mit Bearer-Token\n\n    Note over API: JWT-Token validieren:<br/>- Standard-JWT-Validierung<br/>- \xdcberpr\xfcfe gew\xe4hrte Berechtigungen\n\n    alt Token ung\xfcltig\n        API--\x3e>Client: 401 Unautorisiert\n    else Token g\xfcltig\n        alt Erforderliche Berechtigungen nicht in gew\xe4hrten Berechtigungen\n            API--\x3e>Client: 403 Verboten\n        else Hat erforderliche Berechtigungen\n            API--\x3e>Client: Gesch\xfctzte Ressource\n        end\n    end"}),"\n",(0,t.jsx)(n.p,{children:"Wie aus dem Diagramm ersichtlich, liegt der Hauptunterschied zum grundlegenden API-Schutz in der Handhabung der Berechtigungen. Anstatt alle angeforderten Berechtigungen direkt zu gew\xe4hren, filtert Logto sie nun basierend auf der RBAC-Richtlinie des Benutzers. Das JWT-Token enth\xe4lt nur Berechtigungen, die dem Benutzer durch seine Rollen gew\xe4hrt wurden. Auf der API-Seite gibt es nach der \xdcberpr\xfcfung der Authentizit\xe4t des Tokens eine zus\xe4tzliche \xdcberpr\xfcfung, um sicherzustellen, dass das Token die erforderlichen Berechtigungen f\xfcr die angeforderte Ressource enth\xe4lt."}),"\n",(0,t.jsx)(n.h2,{id:"optional-handle-user-permission-change",children:"Optional: Benutzerberechtigungs\xe4nderung behandeln"}),"\n",(0,t.jsx)(n.p,{children:"Benutzerberechtigungen k\xf6nnen w\xe4hrend einer Sitzung ge\xe4ndert werden \u2013 zum Beispiel k\xf6nnen ihnen neue Rollen zugewiesen oder bestehende Rollenberechtigungen ge\xe4ndert werden. In diesen Szenarien kann es notwendig sein, diese \xc4nderungen zu erkennen und die Benutzeroberfl\xe4che der Anwendung zu aktualisieren."}),"\n",(0,t.jsx)(n.p,{children:"Was passiert, wenn sich die Berechtigungen eines Benutzers \xe4ndern? Es gibt zwei F\xe4lle."}),"\n",(0,t.jsx)(n.h3,{id:"no-new-permissions-introduced-into-the-system",children:"Keine neuen Berechtigungen im System eingef\xfchrt"}),"\n",(0,t.jsx)(n.p,{children:"Aktuelle Zugangstokens bleiben g\xfcltig, bis sie ablaufen, selbst nachdem die Berechtigungen eines Benutzers ge\xe4ndert wurden. Neue Berechtigungen werden jedoch in nachfolgenden Zugangstokens widergespiegelt, und alle widerrufenen Berechtigungen werden weggelassen."}),"\n",(0,t.jsxs)(n.p,{children:["Hier sind einige ",(0,t.jsx)(n.strong,{children:"empfohlene Ma\xdfnahmen"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Option 1: Verwende kurze Ablaufzeiten f\xfcr Zugangstokens"})}),"\n",(0,t.jsxs)(n.p,{children:["Kurzlebige Zugangstokens sorgen f\xfcr h\xe4ufigere Aktualisierungen der Benutzerberechtigungen. Konfiguriere die Token-Ablaufeinstellungen in den ",(0,t.jsx)(n.a,{href:"/authorization/api-resources/#logto-api-resource-schema",children:"API-Ressourcen"})," Einstellungen der Konsole. Der Nachteil ist, dass dies deinen Tokenverbrauch erh\xf6hen wird."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Option 2: Berechtigungen dynamisch \xfcberpr\xfcfen"})}),"\n",(0,t.jsxs)(n.p,{children:["Rufe regelm\xe4\xdfig (z. B. SWR) Endpunkte der ",(0,t.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Logto Management API"})," auf oder verwende Techniken wie WebSocket, um langlebige Verbindungen zu implementieren, um Benutzerberechtigungen dynamisch abzurufen. Bei Erkennung von \xc4nderungen l\xf6sche das bestehende Zugangstoken, und neu ausgestellte Tokens werden automatisch Berechtigungs\xe4nderungen widerspiegeln. - API: Benutzer-Rolle - API: Rollenberechtigung"]}),"\n",(0,t.jsxs)(n.p,{children:["Wenn Berechtigungs\xe4nderungen erkannt werden, l\xf6sche zuerst das Zugangstoken aus dem Speicher und rufe dann die SDK-Methode ",(0,t.jsx)(n.code,{children:"getAccessToken()"})," auf, um ein neues zu erhalten. Das neu ausgestellte Zugangstoken sollte Berechtigungs\xe4nderungen widerspiegeln."]}),"\n",(0,t.jsx)(n.h3,{id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-user",children:"Neue Berechtigung wird in das System eingef\xfchrt und einem Benutzer zugewiesen"}),"\n",(0,t.jsx)(n.p,{children:"Dies geschieht, wenn neue Berechtigungen in dein System eingef\xfchrt werden. In diesem Fall musst du zuerst die neu eingef\xfchrten Berechtigungsbereiche beim Initialisieren des Logto-Clients einbeziehen. Zum Beispiel:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"new LogtoClient({\n  appId: 'your-app-id',\n  redirectUrl: 'your-redirect-url',\n  resources: ['your-api-resource'],\n  scopes: [\n    // ... deine bestehenden Berechtigungsbereiche,\n    'new-scope',\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Zweitens muss jede deiner Client-Anwendungen die Benutzer erneut um Zustimmung bitten oder sie erneut anmelden, um die neue Berechtigungs\xe4nderung zu erhalten. Dann wird der neue Berechtigungsbereich in neuen Zugangstokens widergespiegelt."}),"\n",(0,t.jsx)(n.p,{children:"Codebeispiel f\xfcr erneute Zustimmung:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"signIn({ redirectUrl: 'your-redirect-url', prompt: 'consent' });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,t.jsx)(r,{href:"https://blog.logto.io/logto-x-cloudflare-workers",children:(0,t.jsx)(n.p,{children:"Logto x Cloudflare Workers: Wie sch\xfctzt du deine Worker vor \xf6ffentlichem Zugriff?"})}),"\n",(0,t.jsx)(r,{href:"https://blog.logto.io/secure-api-for-machine-to-machine",children:(0,t.jsx)(n.p,{children:"Sch\xfctze deine API-Ressourcen f\xfcr Maschine-zu-Maschine-Kommunikation"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},79621:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>u});var i=r(58101);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);