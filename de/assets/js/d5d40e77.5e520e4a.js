"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[36933],{8273:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"authorization/role-based-access-control/configure-roles","title":"Rollen konfigurieren","description":"Konfiguration \xfcber die Logto-Konsole \\\\","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-roles.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/configure-roles","permalink":"/de/authorization/role-based-access-control/configure-roles","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-roles.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Berechtigungen konfigurieren","permalink":"/de/authorization/role-based-access-control/configure-permissions"},"next":{"title":"API-Ressourcen mit RBAC sch\xfctzen","permalink":"/de/authorization/role-based-access-control/protect-api-resources-with-rbac"}}');var t=i(25105),o=i(79621);const s={sidebar_position:2},l="Rollen konfigurieren",d={},a=[{value:"Konfiguration \xfcber die Logto-Konsole",id:"configure-via-logto-console",level:2},{value:"Rollentyp definieren",id:"define-role-type",level:3},{value:"Eine neue Rolle erstellen und definieren",id:"create-and-define-a-new-role",level:3},{value:"Eine Rolle anzeigen oder aktualisieren",id:"view-or-update-a-role",level:3},{value:"Benutzer oder Maschine-zu-Maschine-Apps in Rollen verwalten",id:"manage-users-or-machine-to-machine-apps-in-roles",level:3},{value:"Berechtigungen in Rollen verwalten",id:"manage-permissions-in-roles",level:3},{value:"Rollen verwalten, die einer Maschine-zu-Maschine-App oder einem Benutzer zugewiesen sind",id:"manage-roles-assigned-to-a-machine-to-machine-app-or-user",level:3},{value:"Konfiguration \xfcber die Logto Management API",id:"configure-via-logto-management-api",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"rollen-konfigurieren",children:"Rollen konfigurieren"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-via-logto-console",children:"Konfiguration \xfcber die Logto-Konsole"}),"\n",(0,t.jsx)(n.h3,{id:"define-role-type",children:"Rollentyp definieren"}),"\n",(0,t.jsx)(n.p,{children:'In Logto gibt es zwei Arten von Rollen, basierend auf der Entit\xe4t, auf die sie angewendet werden k\xf6nnen: "Benutzerrolle" oder "Maschine-zu-Maschine-App-Rolle".'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Benutzerrolle"}),": Eine Benutzerrolle ist eine Art von Rolle, die nur Benutzern zugewiesen werden kann. Sie kann Berechtigungen aus deinen eigenen API-Ressourcen enthalten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Maschine-zu-Maschine-Rolle"}),": Eine M2M-Rolle ist eine Art von Rolle, die nur Maschine-zu-Maschine-Apps zugewiesen werden kann. Sie kann sowohl deine eigenen API-Berechtigungen als auch Logto Management API-Berechtigungen enthalten. Die Maschine-zu-Maschine-Rolle wird normalerweise verwendet, um deine Maschine-zu-Maschine-Authentifizierung zu sch\xfctzen, wie z. B. den Zugriff auf die Logto Management API oder deine eigenen API-Ressourcen."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Nach der Erstellung einer Rolle kannst du ihren Typ nicht mehr \xe4ndern."}),"\n",(0,t.jsx)(n.h3,{id:"create-and-define-a-new-role",children:"Eine neue Rolle erstellen und definieren"}),"\n",(0,t.jsxs)(n.p,{children:["Eine Rolle ist eine Gruppe von Berechtigungen. Navigiere zu ",(0,t.jsx)(i,{to:"/roles",children:"Konsole > Rollen"}),", und du siehst eine Liste der von dir definierten Rollen."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Beachte, dass es technisch m\xf6glich ist, eine Rolle ",(0,t.jsx)(n.em,{children:"ohne"})," zugewiesene Berechtigungen oder Benutzer zu erstellen, es wird jedoch nicht empfohlen, zu viele leere Rollen zu erstellen. Dies w\xfcrde die Harmonie des Rollenmanagements st\xf6ren und das RBAC-System unwirksam machen."]}),"\n",(0,t.jsx)(n.li,{children:"Berechtigungen sind im Selektor nach API gruppiert, sodass du sie in gro\xdfen Mengen hinzuf\xfcgen oder einzeln ausw\xe4hlen kannst."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Rollenbasierte Zugangskontrolle (RBAC) wird in der gesamten Logto-Infrastruktur verwendet, sowohl auf System-/Benutzerebene als auch auf Organisationsebene. Dieses Kapitel konzentriert sich auf RBAC auf System-/Benutzerebene. Wenn du RBAC auf Organisationsebene implementieren musst, siehe die ",(0,t.jsx)(n.a,{href:"/authorization/organization-template",children:"Organisationstemplate"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"view-or-update-a-role",children:"Eine Rolle anzeigen oder aktualisieren"}),"\n",(0,t.jsx)(n.p,{children:"Du kannst jederzeit den Rollennamen und die Beschreibung bearbeiten sowie die Berechtigungen und Benutzer, die der Rolle zugewiesen sind, \xfcberpr\xfcfen und verwalten."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Das L\xf6schen der Rolle entfernt alle damit verkn\xfcpften Berechtigungen f\xfcr die betroffenen Benutzer und l\xf6scht die Verbindung zwischen Rollen, Benutzern oder Apps und Berechtigungen."})}),"\n",(0,t.jsx)(n.h3,{id:"manage-users-or-machine-to-machine-apps-in-roles",children:"Benutzer oder Maschine-zu-Maschine-Apps in Rollen verwalten"}),"\n",(0,t.jsx)(n.p,{children:"Abh\xe4ngig vom gew\xe4hlten Rollentyp kannst du Benutzer oder Maschine-zu-Maschine-Anwendungen auf der Rollendetailseite zuweisen oder entfernen."}),"\n",(0,t.jsx)(n.p,{children:'Klicke auf die Registerkarte "Benutzer" oder "Maschine-zu-Maschine-Apps", um die der Rolle zugewiesenen Benutzer oder Apps anzuzeigen. Um Benutzer oder Apps weiterhin zur Rolle hinzuzuf\xfcgen, klicke auf die Schaltfl\xe4che "Benutzer zuweisen" oder "Anwendungen zuweisen" in der oberen rechten Ecke.'}),"\n",(0,t.jsx)(n.h3,{id:"manage-permissions-in-roles",children:"Berechtigungen in Rollen verwalten"}),"\n",(0,t.jsx)(n.p,{children:"Wenn du die F\xe4higkeiten einer Rolle \xe4ndern musst, kannst du dies einfach tun, indem du Berechtigungen zuweist oder entfernst."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Wenn eine Berechtigung gel\xf6scht wird, verlieren Benutzer oder Apps mit dieser Rolle den durch diese Berechtigung gew\xe4hrten Zugriff."})}),"\n",(0,t.jsx)(n.h3,{id:"manage-roles-assigned-to-a-machine-to-machine-app-or-user",children:"Rollen verwalten, die einer Maschine-zu-Maschine-App oder einem Benutzer zugewiesen sind"}),"\n",(0,t.jsx)(n.p,{children:'Auf der Detailseite eines Benutzers oder einer App findest du eine Registerkarte "Rollen". Klicke auf die Registerkarte, um die der Benutzer oder Maschine-zu-Maschine-Apps zugewiesenen Rollen anzuzeigen und zu verwalten.'}),"\n",(0,t.jsx)(n.p,{children:"Wenn die Konfiguration in Logto Cloud f\xfcr dich nicht ausreicht, kannst du die Management API nutzen, um diese Verwaltungsaufgabe programmgesteuert durchzuf\xfchren."}),"\n",(0,t.jsx)(n.h2,{id:"configure-via-logto-management-api",children:"Konfiguration \xfcber die Logto Management API"}),"\n",(0,t.jsxs)(n.p,{children:["Verwalte mit der Logto Management API. F\xfchre einen Aufruf zum entsprechenden Endpunkt aus. Sieh dir diese ",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"Referenz"})," an."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Methode"}),(0,t.jsx)(n.th,{children:"Pfad"}),(0,t.jsx)(n.th,{children:"Beschreibung"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listroles",children:"/api/roles"})}),(0,t.jsx)(n.td,{children:"Rollen mit Filtern und Paginierung abrufen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createrole",children:"/api/roles"})}),(0,t.jsx)(n.td,{children:"Eine neue Rolle mit den angegebenen Daten erstellen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getrole",children:"/api/roles/{Id}"})}),(0,t.jsx)(n.td,{children:"Rollendetails nach ID abrufen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DELETE"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-deleterole",children:"/api/roles/{Id}"})}),(0,t.jsx)(n.td,{children:"Eine Rolle mit der angegebenen ID l\xf6schen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PATCH"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-updaterole",children:"/api/roles/{Id}"})}),(0,t.jsx)(n.td,{children:"Rollendetails aktualisieren. Diese Methode f\xfchrt ein partielles Update durch."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listroleusers",children:"/api/roles/{Id}/users"})}),(0,t.jsx)(n.td,{children:"Benutzer abrufen, denen die Rolle mit Paginierung zugewiesen ist."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createroleuser",children:"/api/roles/{Id}/users"})}),(0,t.jsxs)(n.td,{children:["Eine Rolle einer Liste von Benutzern zuweisen. Die Rolle muss den Typ ",(0,t.jsx)(n.code,{children:"User"})," haben."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DELETE"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-deleteroleuser",children:"/api/roles/{Id}/users/{userId}"})}),(0,t.jsx)(n.td,{children:"Eine Rolle von einem Benutzer mit der angegebenen ID entfernen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listroleapplications",children:"/api/roles/{Id}/applications"})}),(0,t.jsx)(n.td,{children:"Anwendungen abrufen, denen die Rolle mit Paginierung zugewiesen ist."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createroleapplication",children:"/api/roles/{Id}/applications"})}),(0,t.jsxs)(n.td,{children:["Eine Rolle einer Liste von Anwendungen zuweisen. Die Rolle muss den Typ ",(0,t.jsx)(n.code,{children:"Application"})," haben."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DELETE"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-deleteroleapplication",children:"/api/roles/{Id}/applications/{applicationId}"})}),(0,t.jsx)(n.td,{children:"Die Rolle von einer Anwendung mit der angegebenen ID entfernen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listrolescopes",children:"/api/roles/{Id}/scopes"})}),(0,t.jsx)(n.td,{children:"API-Ressourcen-Berechtigungen (Scopes) abrufen, die mit einer Rolle verkn\xfcpft sind."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createrolescope",children:"/api/roles/{Id}/scopes"})}),(0,t.jsx)(n.td,{children:"Eine Liste von API-Ressourcen-Berechtigungen (Scopes) mit einer Rolle verkn\xfcpfen. Die urspr\xfcnglich verkn\xfcpften Scopes bleiben erhalten."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DELETE"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-deleterolescope",children:"/api/roles/{Id}/scopes/{scopeId}"})}),(0,t.jsx)(n.td,{children:"Eine API-Ressourcen-Berechtigung (Scope) von einer Rolle mit der angegebenen ID entkn\xfcpfen."})]})]})]}),"\n",(0,t.jsx)(n.h1,{id:"standardrollen",children:"Standardrollen"}),"\n",(0,t.jsx)(n.p,{children:"Standardrollen sind die automatisch zugewiesenen Rollen, wenn die Benutzer erstellt werden, entweder f\xfcr die Selbstregistrierung oder erstellt \xfcber die Management API. Du kannst diesen Schalter aktivieren, indem du zu Rollen-Rolledetail-Allgemein gehst."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(58101);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);