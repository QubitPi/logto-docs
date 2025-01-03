"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[48788],{76980:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"end-user-flows/organization-experience/create-organization","title":"Organisation erstellen","description":"Stellen Sie sich vor, Sie bauen eine Multi-Tenant-App (z. B. eine Multi-Tenant-SaaS-App), die zahlreiche Kunden bedient, und jeder Kunde besitzt einen eigenen Tenant. Wenn ein neuer Kunde hinzukommt, erstellt er ein neues Konto sowie einen neuen Tenant f\xfcr sein eigenes Gesch\xe4ft.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/create-organization.mdx","sourceDirName":"end-user-flows/organization-experience","slug":"/end-user-flows/organization-experience/create-organization","permalink":"/de/end-user-flows/organization-experience/create-organization","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/create-organization.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Organisationserfahrung","permalink":"/de/end-user-flows/organization-experience/"},"next":{"title":"Organisationsmitglieder einladen","permalink":"/de/end-user-flows/organization-experience/invite-organization-members"}}');var r=i(25105),a=i(79621);const o={sidebar_position:1},s="Organisation erstellen",l={},d=[{value:"Erstellen Sie Ihre Organisationen",id:"create-your-organizations",level:2},{value:"Erstellen \xfcber Logto Console",id:"create-via-logto-console",level:3},{value:"Erstellen \xfcber Logto Management API",id:"create-via-logto-management-api",level:3},{value:"Validierung des Organisationstokens in Benutzeranfragen",id:"validating-organization-token-in-user-request",level:2},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{CloudLink:i,Url:t}=n;return i||u("CloudLink",!0),t||u("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"organisation-erstellen",children:"Organisation erstellen"})}),"\n",(0,r.jsxs)(n.p,{children:["Stellen Sie sich vor, Sie bauen eine ",(0,r.jsx)(n.a,{href:"https://auth.wiki/multi-tenancy",children:"Multi-Tenant-App"})," (z. B. eine Multi-Tenant-SaaS-App), die zahlreiche Kunden bedient, und jeder Kunde besitzt einen eigenen Tenant. Wenn ein neuer Kunde hinzukommt, erstellt er ein neues Konto sowie einen neuen Tenant f\xfcr sein eigenes Gesch\xe4ft."]}),"\n",(0,r.jsxs)(n.p,{children:["Genauso wie Sie Ihr ",(0,r.jsx)(n.a,{href:"https://cloud.logto.io/",children:"Logto Cloud"}),'-Konto registriert haben und Ihren eigenen Logto-Tenant besitzen. Sie k\xf6nnen dieselbe Architektur auch in Ihrer App implementieren, indem Sie die Logto-Funktion "',(0,r.jsx)(n.a,{href:"/organizations",children:"Organisation"}),'" verwenden.']}),"\n",(0,r.jsx)(n.h2,{id:"create-your-organizations",children:"Erstellen Sie Ihre Organisationen"}),"\n",(0,r.jsx)(n.p,{children:"Es gibt zwei M\xf6glichkeiten, Organisationen f\xfcr Ihre App zu erstellen."}),"\n",(0,r.jsx)(n.h3,{id:"create-via-logto-console",children:"Erstellen \xfcber Logto Console"}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie Ihre Organisationen manuell \xfcber die Logto Console UI. Gehen Sie zu ",(0,r.jsx)(i,{to:"/organizations",children:"Console > Organizations"}),", um eine Organisation zu erstellen, Mitglieder und Rollen zuzuweisen und die Anmeldeerfahrung der Organisation anzupassen."]}),"\n",(0,r.jsxs)(n.p,{children:['Erstellen Sie eine "',(0,r.jsx)(n.a,{href:"/authorization/organization-template",children:"Organisationstemplate"}),'", wenn Sie \xe4hnliche Organisationen im Batch erstellen m\xf6chten, die dieselben ',(0,r.jsx)(n.a,{href:"/authorization/organization-template/configure-organization-template#create-organization-role",children:"Rolle"})," und ",(0,r.jsx)(n.a,{href:"/authorization/organization-template/configure-organization-template#create-organization-permission",children:"Berechtigung"})," Einstellungen teilen."]}),"\n",(0,r.jsx)(n.h3,{id:"create-via-logto-management-api",children:"Erstellen \xfcber Logto Management API"}),"\n",(0,r.jsxs)(n.p,{children:["Das Klicken von Schaltfl\xe4chen in der Console UI funktioniert gut, aber wir m\xf6chten wirklich, dass die Endbenutzer selbstst\xe4ndig Organisationen erstellen und diese in ",(0,r.jsx)(n.strong,{children:"IHRER App"})," verwalten. Daher m\xfcssen Sie diese Funktionen in Ihrer App implementieren, mit Hilfe der Logto Management API."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"Wenn Sie mit der Logto Management API nicht vertraut sind, stellen Sie bitte sicher, dass Sie diese Dokumente zuerst lesen."}),(0,r.jsx)(t,{href:"/concepts/core-service/#management-api",children:"Management API"}),(0,r.jsx)(t,{href:"/integrate-logto/interact-with-management-api",children:"Interagieren mit der Management API"})]}),"\n",(0,r.jsx)(n.p,{children:"Angenommen, Sie haben Ihren API-Backend-Server bereits \xfcber den Maschine-zu-Maschine (M2M) Mechanismus mit dem Logto Management API-Endpunkt verbunden und das M2M-Zugangstoken erhalten."}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie eine Organisation mit der Management API (",(0,r.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createorganization",children:"API-Referenzen"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X POST https://[tenant_id].logto.app/api/organizations \\\n -H "Authorization: Bearer $M2M_ACCESS_TOKEN" \\\n -H "Content-Type: application/json" \\\n -d \'{"tenantId":"string","name":"string","description":"string","customData":{},"isMfaRequired":false,"branding":{"logoUrl":"string","darkLogoUrl":"string","favicon":"string","darkFavicon":"string"},"createdAt":1234567890}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"Beispielantwort (201)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "tenantId": "string",\n  "id": "string",\n  "name": "string",\n  "description": "string",\n  "customData": {},\n  "isMfaRequired": false,\n  "branding": {\n    "logoUrl": "string",\n    "darkLogoUrl": "string",\n    "favicon": "string",\n    "darkFavicon": "string"\n  },\n  "createdAt": 1234567890\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'Als N\xe4chstes k\xf6nnen Sie Ihre eigene API f\xfcr Ihre App implementieren. Wenn Ihre Benutzer die Aktion "Organisation erstellen" in Ihrer App ausf\xfchren, k\xf6nnen Sie die Anfrage validieren, indem Sie ihre Berechtigungen \xfcberpr\xfcfen und dann die Logto Management API aufrufen, um den Rest der Arbeit zu erledigen.'}),"\n",(0,r.jsx)(n.h2,{id:"validating-organization-token-in-user-request",children:"Validierung des Organisationstokens in Benutzeranfragen"}),"\n",(0,r.jsxs)(n.p,{children:["In Ihrer App, wenn Benutzer Aktionen im Kontext einer Organisation ausf\xfchren, m\xfcssen sie das Organisationstoken anstelle des regul\xe4ren Zugangstokens verwenden. Das Organisationstoken ist eine spezielle Art von ",(0,r.jsx)(n.a,{href:"https://auth.wiki/jwt",children:"JWT"}),", das Organisationsberechtigungen enth\xe4lt. Und genau wie bei jedem JWT ",(0,r.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"Zugangstoken"}),' k\xf6nnen Sie die Token-Anspr\xfcche dekodieren und den "scope"-Anspruch f\xfcr die Berechtigungspr\xfcfung verifizieren.']}),"\n",(0,r.jsx)(n.p,{children:"\xdcberpr\xfcfen Sie diese Dokumentationen f\xfcr weitere Details:"}),"\n",(0,r.jsx)(t,{href:"/authorization/organization-template/protect-organization-resources",children:(0,r.jsx)(n.p,{children:"Organisationstokens verifizieren"})}),"\n",(0,r.jsx)(t,{href:"/authorization/api-resources/protect-your-api",children:"Sch\xfctzen Sie Ihre API"}),"\n",(0,r.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,r.jsx)(t,{href:"https://blog.logto.io/implement-multi-tenancy",children:(0,r.jsx)(n.p,{children:"Multi-Tenancy-Implementierung mit Postgres"})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(58101);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);