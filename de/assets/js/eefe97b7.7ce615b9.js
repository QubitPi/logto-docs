"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[18135],{97711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"developers/custom-token-claims/README","title":"Benutzerdefinierte Token-Anspr\xfcche","description":"Einf\xfchrung \\\\","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/developers/custom-token-claims/README.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/","permalink":"/de/developers/custom-token-claims/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/developers/custom-token-claims/README.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Entwickler","permalink":"/de/developers/"},"next":{"title":"H\xe4ufige Anwendungsf\xe4lle","permalink":"/de/developers/custom-token-claims/common-use-cases"}}');var i=t(25105),s=t(79621);const o={sidebar_position:2},d="Benutzerdefinierte Token-Anspr\xfcche",a={},c=[{value:"Einf\xfchrung",id:"introduction",level:2},{value:"Wie funktionieren benutzerdefinierte Token-Anspr\xfcche?",id:"how-do-custom-token-claims-work",level:2},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Url:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"benutzerdefinierte-token-anspr\xfcche",children:"Benutzerdefinierte Token-Anspr\xfcche"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Einf\xfchrung"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"Zugangstokens"})," spielen eine entscheidende Rolle im Authentifizierungs- und Autorisierungsprozess, indem sie die Identit\xe4tsinformationen und Berechtigungen des Subjekts tragen und zwischen dem ",(0,i.jsx)(n.a,{href:"/concepts/core-service",children:"Logto-Server"})," (dient als Auth-Server oder Identit\xe4tsanbieter, IdP), deinem Webdienst-Server (Ressourcenanbieter) und den Client-Anwendungen (Clients) weitergegeben werden."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://auth.wiki/claim",children:"Token-Anspr\xfcche"})," sind die Schl\xfcssel-Wert-Paare, die Informationen \xfcber eine Entit\xe4t oder das Token selbst bereitstellen. Die Anspr\xfcche k\xf6nnen Benutzerinformationen, Token-Ablaufzeit, Berechtigungen und andere Metadaten enthalten, die f\xfcr den Authentifizierungs- und Autorisierungsprozess relevant sind."]}),"\n",(0,i.jsx)(n.p,{children:"Es gibt zwei Arten von Zugangstokens in Logto:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Web Token:"})," ",(0,i.jsx)(n.a,{href:"https://auth.wiki/jwt",children:"JSON Web Token (JWT)"})," ist ein beliebtes Format, das Anspr\xfcche auf eine Weise kodiert, die sowohl sicher als auch f\xfcr Clients lesbar ist. \xdcbliche Anspr\xfcche wie ",(0,i.jsx)(n.code,{children:"sub"}),", ",(0,i.jsx)(n.code,{children:"iss"}),", ",(0,i.jsx)(n.code,{children:"aud"})," usw. werden im Einklang mit dem OAuth 2.0-Protokoll verwendet (siehe ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-4",children:"diesen Link"})," f\xfcr weitere Details). JWT-Tokens erm\xf6glichen es Verbrauchern, direkt auf Anspr\xfcche zuzugreifen, ohne zus\xe4tzliche Validierungsschritte. In Logto werden Zugangstokens standardm\xe4\xdfig im JWT-Format ausgegeben, wenn ein Client Autorisierungsanfragen f\xfcr spezifische Ressourcen oder Organisationen initiiert."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Opaker Token:"})," Ein ",(0,i.jsx)(n.a,{href:"http://localhost:3000/concepts/opaque-token",children:"opakes Token"})," ist nicht eigenst\xe4ndig und erfordert immer einen zus\xe4tzlichen Validierungsschritt \xfcber den ",(0,i.jsx)(n.a,{href:"https://auth.wiki/token-introspection",children:"Token-Introspektions"}),"-Endpunkt. Trotz ihres nicht transparenten Formats k\xf6nnen opake Tokens helfen, Anspr\xfcche zu erhalten und sicher zwischen Parteien \xfcbertragen zu werden. Token-Anspr\xfcche werden sicher auf dem Logto-Server gespeichert und von den Client-Anwendungen \xfcber den Token-Introspektionsendpunkt abgerufen. Zugangstokens werden im opaken Format ausgegeben, wenn keine spezifische Ressource oder Organisation in der Autorisierungsanfrage enthalten ist. Diese Tokens werden haupts\xe4chlich f\xfcr den Zugriff auf den OIDC ",(0,i.jsx)(n.code,{children:"userinfo"}),"-Endpunkt und andere allgemeine Zwecke verwendet."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In vielen F\xe4llen reichen Standardanspr\xfcche nicht aus, um die spezifischen Bed\xfcrfnisse deiner Anwendungen zu erf\xfcllen, egal ob du JWT oder opake Tokens verwendest. Um dies zu adressieren, bietet Logto die Flexibilit\xe4t, benutzerdefinierte Anspr\xfcche innerhalb von Zugangstokens hinzuzuf\xfcgen. Mit dieser Funktion kannst du zus\xe4tzliche Informationen f\xfcr deine Gesch\xe4ftslogik einf\xfcgen, die alle sicher in den Tokens \xfcbertragen und im Fall von opaken Tokens \xfcber Introspektion abrufbar sind."}),"\n",(0,i.jsx)(n.h2,{id:"how-do-custom-token-claims-work",children:"Wie funktionieren benutzerdefinierte Token-Anspr\xfcche?"}),"\n",(0,i.jsxs)(n.p,{children:["Logto erm\xf6glicht es dir, benutzerdefinierte Anspr\xfcche in das ",(0,i.jsx)(n.code,{children:"Zugangstoken"})," \xfcber eine Callback-Funktion ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," einzuf\xfcgen. Du kannst deine Implementierung der Funktion ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," bereitstellen, um ein Objekt mit benutzerdefinierten Anspr\xfcchen zur\xfcckzugeben. Der R\xfcckgabewert wird mit der urspr\xfcnglichen Token-Nutzlast zusammengef\xfchrt und signiert, um das endg\xfcltige Zugangstoken zu generieren."]}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant U as Benutzer oder Benutzeragent\n  participant IdP as Logto (Identit\xe4tsanbieter)\n  participant SP as Dienstanbieter\n\n  autonumber\n  U ->> IdP: Auth-Anfrage (mit Anmeldedaten)\n  activate IdP\n  IdP--\x3e>IdP: Anmeldedaten validieren &<br/>rohe Zugangstoken-Nutzlast generieren\n  rect var(--mermaid-rect-fill)\n  note over IdP: Benutzerdefinierte Token-Anspr\xfcche\n  IdP->>IdP: Benutzerdefiniertes Token-Anspr\xfcche-Skript ausf\xfchren (`getCustomJwtClaims`) &<br/>zus\xe4tzliche Token-Anspr\xfcche erhalten\n  end\n  IdP--\x3e>IdP: Rohe Zugangstoken-Nutzlast und zus\xe4tzliche Token-Anspr\xfcche zusammenf\xfchren\n  IdP--\x3e>IdP: Nutzlast signieren & verschl\xfcsseln, um Zugangstoken zu erhalten\n  deactivate IdP\n  IdP--\x3e>U: JWT-Format Zugangstoken ausgeben\n  par Dienst \xfcber API abrufen\n  U->>SP: Dienstanfrage (mit JWT-Zugangstoken)\n  SP--\x3e>U: Dienstantwort\n  end"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Logto-eigene Token-Anspr\xfcche k\xf6nnen NICHT \xfcberschrieben oder ge\xe4ndert werden. Benutzerdefinierte Anspr\xfcche werden dem Token als zus\xe4tzliche Anspr\xfcche hinzugef\xfcgt. Wenn benutzerdefinierte Anspr\xfcche mit den eingebauten Anspr\xfcchen in Konflikt stehen, werden diese benutzerdefinierten Anspr\xfcche ignoriert."})}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,i.jsx)(t,{href:"https://blog.logto.io/glance-on-custom-jwt-access-token-claims",children:(0,i.jsx)(n.p,{children:"Benutzerdefinierte Anspr\xfcche f\xfcr JWT-Zugangstokens mit Logto hinzuf\xfcgen, um deine Autorisierung zu\nverbessern"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},79621:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(58101);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);