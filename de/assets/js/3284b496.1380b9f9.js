"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[59023],{39413:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"end-user-flows/sign-out","title":"Abmeldung","description":"Der Abmeldeprozess in Logto (als OIDC-basierter Identit\xe4tsanbieter) ist ein vielschichtiges Konzept, da sowohl die zentralisierte Anmeldesitzung, die von Logto verwaltet wird, als auch der verteilte Authentifizierungsstatus, der von den Client-Anwendungen verwaltet wird, beteiligt sind.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/sign-out.mdx","sourceDirName":"end-user-flows","slug":"/end-user-flows/sign-out","permalink":"/de/end-user-flows/sign-out","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/sign-out.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Zustimmungsbildschirm","permalink":"/de/end-user-flows/consent-screen"},"next":{"title":"Kontoeinstellungen","permalink":"/de/end-user-flows/account-settings/"}}');var r=i(25105),s=i(79621);const d={sidebar_position:6},l="Abmeldung",u={},o=[{value:"Anmeldesitzung",id:"sign-in-session",level:2},{value:"Komponenten",id:"components",level:2},{value:"Zentralisierte Anmeldesitzung, verwaltet von Logto",id:"centralized-sign-in-session-managed-by-logto",level:3},{value:"Verteilter Authentifizierungsstatus, verwaltet von den Client-Anwendungen",id:"distributed-authentication-status-managed-by-the-client-applications",level:2},{value:"Abmeldemechanismen",id:"sign-out-mechanisms",level:2},{value:"Tokens und lokale Sitzung auf der Client-Seite l\xf6schen",id:"clear-tokens-and-local-session-at-the-client-side",level:3},{value:"Anmeldesitzung bei Logto l\xf6schen",id:"clear-sign-in-session-at-logto",level:3},{value:"F\xf6derierte Abmeldung: Back-Channel-Logout",id:"federated-sign-out-back-channel-logout",level:2},{value:"Abmeldemethoden in Logto SDKs",id:"sign-out-methods-in-logto-sdks",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Ich erhalte keine Back-Channel-Logout-Benachrichtigungen.",id:"im-not-receiving-the-back-channel-logout-notifications",level:3},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i,Url:t}=n;return i||h("Details",!0),t||h("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"abmeldung",children:"Abmeldung"})}),"\n",(0,r.jsx)(n.p,{children:"Der Abmeldeprozess in Logto (als OIDC-basierter Identit\xe4tsanbieter) ist ein vielschichtiges Konzept, da sowohl die zentralisierte Anmeldesitzung, die von Logto verwaltet wird, als auch der verteilte Authentifizierungsstatus, der von den Client-Anwendungen verwaltet wird, beteiligt sind."}),"\n",(0,r.jsx)(n.h2,{id:"sign-in-session",children:"Anmeldesitzung"}),"\n",(0,r.jsx)(n.p,{children:"Um den Abmeldeprozess besser zu verstehen, ist es wichtig, zun\xe4chst zu verstehen, wie Benutzersitzungen und deren Authentifizierungsstatus in Logto verwaltet werden."}),"\n",(0,r.jsx)(n.mermaid,{value:"  sequenceDiagram\n    autonumber\n    actor User\n\n    box Relying Party (RP)\n      participant Client as Client-Anwendung\n    end\n\n    box Logto (IdP)\n      participant OIDC as OIDC-Anbieter\n      participant SignIn as Anmeldeseite\n    end\n\n    User ->> Client: Zugriff auf Webanwendung\n    Client ->> OIDC: Benutzer zur Authentifizierung an OIDC weiterleiten\n    OIDC --\x3e> OIDC: \xdcberpr\xfcfen der Benutzersitzung\n    OIDC ->> SignIn: Benutzer zur Anmeldung auffordern\n    SignIn ->> OIDC: Benutzer identifizieren und Interaktionsergebnis \xfcbermitteln\n    OIDC --\x3e> OIDC: Benutzersitzung und Authentifizierungsberechtigung erstellen\n    OIDC ->> Client: Benutzer mit Authentifizierungscode zur Webanwendung zur\xfcckleiten (Autorisierungscodefluss)\n    Client ->> OIDC: Code gegen Tokens austauschen\n    OIDC --\x3e> Client: Tokens zur\xfcckgeben"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Der Benutzer greift auf die Webanwendung (RP) zu."}),"\n",(0,r.jsxs)(n.li,{children:["Die Client-Anwendung leitet den Benutzer zur ",(0,r.jsx)(n.a,{href:"https://auth.wiki/authentication",children:"Authentifizierung (Authentication)"})," an Logto (IdP) weiter."]}),"\n",(0,r.jsx)(n.li,{children:"Der OIDC-Anbieter \xfcberpr\xfcft den Status der Benutzersitzung. Wenn keine Sitzung existiert oder die Sitzung abgelaufen ist, wird der Benutzer zur Anmeldung aufgefordert."}),"\n",(0,r.jsx)(n.li,{children:"Der Benutzer interagiert mit der Anmeldeseite, um sich zu authentifizieren."}),"\n",(0,r.jsx)(n.li,{children:"Nach erfolgreicher Anmeldung erstellt Logto eine neue Sitzung f\xfcr den Benutzer und leitet ihn mit einem Autorisierungscode zur\xfcck zur Client-Anwendung."}),"\n",(0,r.jsx)(n.li,{children:"Der OIDC-Anbieter erstellt eine neue Anmeldesitzung und Authentifizierungsberechtigung f\xfcr den Benutzer."}),"\n",(0,r.jsxs)(n.li,{children:["Der OIDC-Anbieter leitet den Benutzer mit einem Authentifizierungscode (",(0,r.jsx)(n.a,{href:"https://auth.wiki/authorization-code-flow",children:"Autorisierungscodefluss"}),") zur\xfcck zum Client."]}),"\n",(0,r.jsx)(n.li,{children:"Der Client erh\xe4lt den Authentifizierungscode und tauscht ihn gegen Tokens aus, um auf Benutzerinformationen zuzugreifen."}),"\n",(0,r.jsx)(n.li,{children:"Tokens an die Client-Anwendung gew\xe4hren."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"components",children:"Komponenten"}),"\n",(0,r.jsx)(n.h3,{id:"centralized-sign-in-session-managed-by-logto",children:"Zentralisierte Anmeldesitzung, verwaltet von Logto"}),"\n",(0,r.jsx)(n.p,{children:"Im obigen Ablauf wird die zentralisierte Anmeldesitzung von Logto verwaltet. Die Sitzung wird erstellt, wenn der Benutzer sich erfolgreich anmeldet, und wird zerst\xf6rt, wenn der Benutzer sich abmeldet. Die Sitzung wird auch zerst\xf6rt, wenn die Benutzersitzung abl\xe4uft."}),"\n",(0,r.jsx)(n.p,{children:"Die Logto-Anmeldesitzung wird mit Sitzungscookies verwaltet. Das Sitzungscookie wird gesetzt, wenn der Benutzer sich anmeldet. Alle Authentifizierungsanfragen werden gegen das Sitzungscookie validiert. Wenn das Sitzungscookie vorhanden und g\xfcltig ist, wird der Benutzer automatisch authentifiziert und direkt zur Client-Anwendung mit dem Autorisierungscode weitergeleitet. Andernfalls wird der Benutzer zur Anmeldung aufgefordert."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Geteiltes Logto-Sitzungscookie\nF\xfcr einen Benutzer, der sich von demselben Benutzeragenten (z. B. Browser) bei mehreren Client-Anwendungen anmeldet, wird ein gemeinsames Sitzungscookie unter der Logto-Domain vorhanden sein. Das bedeutet, dass der Benutzer sich nur einmal anmelden muss und automatisch f\xfcr andere Client-Anwendungen authentifiziert wird."}),"\n",(0,r.jsx)(n.mermaid,{value:" flowchart TD\n subgraph User [Benutzeragent A]\n   U[Benutzer]\n\n   subgraph Layer1 [Client-Domain A]\n     A[Client-Anwendung A]\n   end\n\n   subgraph Layer1 [Client-Domain B]\n     B[Client-Anwendung B]\n   end\n\n   subgraph Layer2 [Logto-Domain]\n       C{{Logto-Anmeldesitzung?}}\n       D[Anmeldeseite]\n   end\n end\n\n U --\x3e |Anmelden| A\n A --\x3e |Weiterleitung zu Logto| C\n U --\x3e |Anmelden| B\n B --\x3e |Weiterleitung zu Logto| C\n C --\x3e |Nein| D\n D --\x3e |Sitzung erstellen| C"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Isoliertes Logto-Sitzungscookie\nF\xfcr einen Benutzer, der sich von verschiedenen Ger\xe4ten oder Browsern bei unterschiedlichen Client-Anwendungen anmeldet, werden isolierte Sitzungscookies unter der Logto-Domain vorhanden sein. Das bedeutet, dass der Benutzer sich f\xfcr jede Client-Anwendung separat anmelden muss."}),"\n",(0,r.jsx)(n.mermaid,{value:" flowchart TD\n U[Benutzer]\n\n subgraph DeviceA [Benutzeragent A]\n   subgraph Layer1 [Client-Domain A]\n     A[Client-Anwendung A]\n   end\n\n   subgraph Layer2 [Logto-Domain]\n       C{{Logto-Anmeldesitzung?}}\n       D[Anmeldeseite]\n   end\n end\n\n subgraph DeviceB [Benutzeragent B]\n   subgraph Layer3 [Client-Domain B]\n     B[Client-Anwendung B]\n   end\n\n   subgraph Layer4 [Logto-Domain]\n       E{{Logto-Anmeldesitzung?}}\n       F[Anmeldeseite]\n   end\n end\n\n U --\x3e |Anmelden| A\n A --\x3e |Weiterleitung zu Logto| C\n U --\x3e |Anmelden| B\n B --\x3e |Weiterleitung zu Logto| E\n C --\x3e |Nein| D\n E --\x3e |Nein| F\n D --\x3e |Sitzung erstellen| C\n F --\x3e |Sitzung erstellen| E"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"distributed-authentication-status-managed-by-the-client-applications",children:"Verteilter Authentifizierungsstatus, verwaltet von den Client-Anwendungen"}),"\n",(0,r.jsx)(n.p,{children:"Jede Client-Anwendung verwaltet ihren eigenen Authentifizierungsstatus. Ob Native, SPA oder Web-Anwendung, alle haben ihre eigene Methode, den Authentifizierungsstatus des Benutzers zu verwalten."}),"\n",(0,r.jsxs)(n.p,{children:["Nach erfolgreicher Anmeldung kann die Client-Anwendung ein ",(0,r.jsx)(n.a,{href:"https://auth.wiki/id-token",children:"ID-Token"})," und ein ",(0,r.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"Zugangstoken"})," erhalten. Die Client-Anwendung kann das ID-Token verwenden, um die Identit\xe4t des Benutzers zu bestimmen, und das Zugangstoken, um auf die Ressourcen des Benutzers zuzugreifen. Der Authentifizierungsstatus des Benutzers wird durch die Ablaufzeit des Zugangstokens dargestellt."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Native und SPA-Anwendungen:\nDie Client-Anwendung muss diese Tokens sicher speichern und verwalten, um den Authentifizierungsstatus des Benutzers aufrechtzuerhalten. Zum Beispiel, indem die Tokens im lokalen Speicher oder Sitzungsspeicher gespeichert werden und die Tokens gel\xf6scht werden, wenn der Benutzer sich abmeldet."}),"\n",(0,r.jsx)(n.li,{children:"Web-Anwendungen:\nWeb-Apps, wie die mit Frameworks wie Next.js erstellten, verwalten oft ihre eigene Sitzung f\xfcr angemeldete Benutzer neben den von Logto ausgestellten Tokens. Sobald der Benutzer sich anmeldet und die Web-App die Tokens von Logto erh\xe4lt, kann sie die Tokens clientseitig speichern, \xe4hnlich wie SPA-Anwendungen, oder sie kann die Tokens serverseitig speichern und die Sitzung mit Cookies oder anderen Mechanismen verwalten."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sign-out-mechanisms",children:"Abmeldemechanismen"}),"\n",(0,r.jsx)(n.h3,{id:"clear-tokens-and-local-session-at-the-client-side",children:"Tokens und lokale Sitzung auf der Client-Seite l\xf6schen"}),"\n",(0,r.jsx)(n.p,{children:"Auf der Client-Seite beinhaltet eine einfache Abmeldung das L\xf6schen der lokalen Sitzung und das Entfernen der Tokens (ID-Token, Zugangstoken, Auffrischungstoken) aus dem lokalen Speicher oder Sitzungsspeicher. Dies f\xfchrt zu einer nur clientseitigen Abmeldung, bei der die zentralisierte Sitzung intakt bleibt. Benutzer, die sich auf diese Weise abmelden, k\xf6nnen m\xf6glicherweise weiterhin auf andere Anwendungen unter derselben Autorisierungsserversitzung zugreifen, bis die zentralisierte Sitzung abl\xe4uft oder aktiv zerst\xf6rt wird."}),"\n",(0,r.jsx)(n.h3,{id:"clear-sign-in-session-at-logto",children:"Anmeldesitzung bei Logto l\xf6schen"}),"\n",(0,r.jsxs)(n.p,{children:["Um den Benutzer explizit abzumelden und die Sitzung bei Logto zu l\xf6schen, muss die Client-Anwendung den Benutzer zum ",(0,r.jsx)(n.strong,{children:"Ende-Sitzung-Endpunkt"})," von Logto weiterleiten."]}),"\n",(0,r.jsxs)(n.p,{children:["Zum Beispiel: ",(0,r.jsx)(n.code,{children:"https://{your-logto-domain}/oidc/session/end"})]}),"\n",(0,r.jsxs)(n.p,{children:["Der ",(0,r.jsx)(n.strong,{children:"Ende-Sitzung-Endpunkt"})," ist ein standardm\xe4\xdfiger OIDC-Endpunkt, der es der Client-Anwendung erm\xf6glicht, den Autorisierungsserver dar\xfcber zu informieren, dass der Benutzer sich abgemeldet hat. Der Endpunkt wird die zentralisierte Anmeldesitzung bei Logto l\xf6schen."]}),"\n",(0,r.jsx)(n.p,{children:"Sobald die Sitzung gel\xf6scht ist, erfordern alle nachfolgenden Autorisierungsanfragen, dass der Benutzer sich erneut anmeldet."}),"\n",(0,r.jsxs)(n.p,{children:["Wenn eine ",(0,r.jsx)(n.strong,{children:"Post-Logout-Redirect-URI"})," angegeben wird, wird der Benutzer nach dem L\xf6schen der Sitzung zur angegebenen URI weitergeleitet. Andernfalls wird der Benutzer zur Standard-Post-Logout-Seite weitergeleitet, die von Logto gehostet wird."]}),"\n",(0,r.jsx)(n.h2,{id:"federated-sign-out-back-channel-logout",children:"F\xf6derierte Abmeldung: Back-Channel-Logout"}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr eine konsistentere Abmeldungsverwaltung unterst\xfctzt Logto ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-backchannel-1_0-final.html",children:"Back-Channel-Logout"}),". Back-Channel-Logout ist ein Mechanismus, der es Logto erm\xf6glicht, alle Client-Anwendungen unter derselben Anmeldesitzung zu benachrichtigen, wenn der Benutzer sich abmeldet."]}),"\n",(0,r.jsx)(n.p,{children:"Dies ist besonders n\xfctzlich in Szenarien, in denen der Benutzer sich von einer Client-Anwendung abmeldet und erwartet, dass er von allen anderen Client-Anwendungen unter derselben Logto-Anmeldesitzung abgemeldet wird."}),"\n",(0,r.jsx)(n.p,{children:"Um Back-Channel-Logout f\xfcr deine Client-Anwendungen zu aktivieren, gehe zur Anwendungsdetailseite im Logto-Dashboard und registriere eine Back-Channel-Logout-URI. Logto sendet ein Logout-Token an alle registrierten URIs, wenn der Benutzer eine Abmeldeanfrage von einer beliebigen Client-Anwendung initiiert."}),"\n",(0,r.jsxs)(n.p,{children:["Wenn deine Client-Anwendung erfordert, dass die Anmeldesitzung im Logout-Token enthalten ist, aktiviere die Einstellung ",(0,r.jsx)(n.code,{children:"Ist Sitzung erforderlich"})," in der Back-Channel-Logout-Konfiguration. Ein ",(0,r.jsx)(n.code,{children:"sid"}),"-Anspruch wird im Logout-Token enthalten sein, um die Anmeldesitzung des Benutzers bei Logto zu identifizieren."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Der Benutzer initiiert eine Abmeldeanfrage von einer Client-Anwendung."}),"\n",(0,r.jsx)(n.li,{children:"Logto erh\xe4lt die Ende-Sitzung-Anfrage, generiert ein Logout-Token und sendet das Logout-Token an alle registrierten Back-Channel-Logout-URIs."}),"\n",(0,r.jsx)(n.li,{children:"Jede Client-Anwendung erh\xe4lt das Logout-Token und f\xfchrt Abmeldeaktionen durch."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Abmeldeaktionen f\xfcr jede Client-Anwendung beim Empfang des Logout-Tokens:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Validierung des Logout-Tokens."}),"\n",(0,r.jsx)(n.li,{children:"L\xf6schen der lokalen Sitzung und Entfernen der Tokens aus dem lokalen Speicher oder Sitzungsspeicher."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sign-out-methods-in-logto-sdks",children:"Abmeldemethoden in Logto SDKs"}),"\n",(0,r.jsx)(n.p,{children:"Wenn du Logto mit deiner Client-Anwendung unter Verwendung der Logto-SDKs integrierst:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["F\xfcr SPA und Web-Anwendungen wird die Methode ",(0,r.jsx)(n.code,{children:"client.signOut()"})," den lokalen Token-Speicher l\xf6schen und den Benutzer zum Ende-Sitzung-Endpunkt von Logto weiterleiten. Du kannst eine ",(0,r.jsx)(n.strong,{children:"Post-Logout-Redirect-URI"})," angeben, um den Benutzer nach dem L\xf6schen der Sitzung weiterzuleiten."]}),"\n",(0,r.jsxs)(n.li,{children:["F\xfcr native Anwendungen (einschlie\xdflich hybrider Apps wie ",(0,r.jsx)(n.strong,{children:"React Native"})," und ",(0,r.jsx)(n.strong,{children:"Flutter"}),") wird nur der lokale Token-Speicher gel\xf6scht. Dies liegt daran, dass in nativen Anwendungen der sitzungslose Webview verwendet wird, um den Anmeldeprozess zu handhaben. Es werden keine Sitzungscookies im nativen Browser gespeichert, daher ist es nicht erforderlich, die Anmeldesitzung bei Logto zu l\xf6schen. Jede Authentifizierungsanfrage ist eine eigenst\xe4ndige Anfrage, die keine Sitzungscookies enth\xe4lt."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["F\xfcr native Anwendungen, die den sitzungslosen Webview nicht unterst\xfctzen oder die ",(0,r.jsx)(n.code,{children:"hervorgehobenen"})," Einstellungen nicht erkennen (Android-App mit ",(0,r.jsx)(n.strong,{children:"React Native"})," oder ",(0,r.jsx)(n.strong,{children:"Flutter"})," SDK), kannst du den Benutzer zwingen, sich erneut anzumelden, indem du den Parameter ",(0,r.jsx)(n.code,{children:"prompt=login"})," in der Autorisierungsanfrage \xfcbergibst."]})}),"\n",(0,r.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.h3,{id:"im-not-receiving-the-back-channel-logout-notifications",children:"Ich erhalte keine Back-Channel-Logout-Benachrichtigungen."})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Stelle sicher, dass die Back-Channel-Logout-URI korrekt im Logto-Dashboard registriert ist."}),"\n",(0,r.jsx)(n.li,{children:"Stelle sicher, dass deine Client-Anwendung eine g\xfcltige aktive Anmeldesitzung hat und es sich um dieselbe Sitzung handelt, die die Abmeldeanfrage initiiert hat."}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,r.jsx)(t,{href:"https://blog.logto.io/oidc-back-channel-logout/",children:(0,r.jsx)(n.p,{children:"Verst\xe4ndnis des OIDC-Back-Channel-Logouts."})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var t=i(58101);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);