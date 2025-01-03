"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[15008],{84419:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"developers/webhooks/webhooks-request","title":"Webhooks-Anfrage","description":"Sobald ein g\xfcltiges Hook-Ereignis ausgel\xf6st wird, sucht Logto nach entsprechenden Webhooks und sendet eine POST-Anfrage pro Hook-Konfiguration.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/webhooks-request","permalink":"/de/developers/webhooks/webhooks-request","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/developers/webhooks/request.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"webhooks-request","title":"Webhooks-Anfrage","sidebar_label":"Webhooks-Anfrage","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Webhooks-Ereignisse","permalink":"/de/developers/webhooks/webhooks-events"},"next":{"title":"Sichere Webhooks","permalink":"/de/developers/webhooks/secure-webhooks"}}');var r=s(25105),t=s(79621);const i={id:"webhooks-request",title:"Webhooks-Anfrage",sidebar_label:"Webhooks-Anfrage",sidebar_position:4},l="Webhooks-Anfrage",c={},h=[{value:"Anfrage-Header",id:"request-headers",level:2},{value:"Anfragetext f\xfcr Interaktions-Hook-Ereignisse",id:"interaction-hook-events-request-body",level:2},{value:"Anfragetext f\xfcr Datenmutations-Hook-Ereignisse",id:"data-mutation-hook-events-request-body",level:2},{value:"Standard-Anfragetextfelder",id:"standard-request-body-fields",level:3},{value:"Interaktions-API-Kontextfelder",id:"interaction-api-context-body-fields",level:3},{value:"Management-API-Kontextfelder",id:"management-api-context-body-fields",level:3},{value:"Daten-Nutzlastfelder",id:"data-payload-body-fields",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"webhooks-anfrage",children:"Webhooks-Anfrage"})}),"\n",(0,r.jsx)(n.p,{children:"Sobald ein g\xfcltiges Hook-Ereignis ausgel\xf6st wird, sucht Logto nach entsprechenden Webhooks und sendet eine POST-Anfrage pro Hook-Konfiguration."}),"\n",(0,r.jsx)(n.h2,{id:"request-headers",children:"Anfrage-Header"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Schl\xfcssel"}),(0,r.jsx)(n.th,{children:"Anpassbar"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user-agent"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsxs)(n.td,{children:["Standardm\xe4\xdfig ",(0,r.jsx)(n.code,{children:"Logto (https://logto.io/)"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"content-type"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsxs)(n.td,{children:["Standardm\xe4\xdfig ",(0,r.jsx)(n.code,{children:"application/json"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"logto-signature-sha-256"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Die Signatur des Anfragetextes, siehe ",(0,r.jsx)(n.a,{href:"/developers/webhooks/secure-webhooks",children:"Sicherung deiner Webhooks"}),"."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Du kannst anpassbare Header \xfcberschreiben, indem du die ",(0,r.jsx)(n.a,{href:"/developers/webhooks/configure-webhooks/#secure-webhook",children:"Anfrage-Header anpasst"})," mit demselben Schl\xfcssel."]}),"\n",(0,r.jsx)(n.h2,{id:"interaction-hook-events-request-body",children:"Anfragetext f\xfcr Interaktions-Hook-Ereignisse"}),"\n",(0,r.jsxs)(n.p,{children:["Verf\xfcgbare Ereignisse: ",(0,r.jsx)(n.code,{children:"PostRegister"}),", ",(0,r.jsx)(n.code,{children:"PostSignIn"}),", ",(0,r.jsx)(n.code,{children:"PostResetPassword"})]}),"\n",(0,r.jsx)(n.p,{children:"Der Anfragetext ist ein JSON-Objekt, das drei Arten von Datenfeldern enth\xe4lt:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type UserEntity = {\n  id: string;\n  username?: string;\n  primaryEmail?: string;\n  primaryPhone?: string;\n  name?: string;\n  avatar?: string;\n  customData?: object;\n  identities?: object;\n  lastSignInAt?: string;\n  createdAt?: string;\n  applicationId?: string;\n  isSuspended?: boolean;\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type ApplicationEntity = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hookId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Der Bezeichner in Logto."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"event"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Welches Ereignis diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"createdAt"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die Erstellungszeit der Nutzlast im ISO-Format."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"interactionEvent"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Das Interaktionsereignis, das diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sessionId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die Sitzungs-ID (nicht Interaktions-ID) f\xfcr dieses Ereignis, falls zutreffend."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userAgent"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Der User-Agent f\xfcr die Anfrage, die diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userIp"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die IP-Adresse f\xfcr die Anfrage, die diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die zugeh\xf6rige Benutzer-ID f\xfcr dieses Ereignis, falls zutreffend."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"user"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UserEntity"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die zugeh\xf6rige Benutzerentit\xe4t f\xfcr dieses Ereignis, falls zutreffend."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"applicationId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die zugeh\xf6rige Anwendungs-ID f\xfcr dieses Ereignis, falls zutreffend."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"application"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ApplicationEntity"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die zugeh\xf6rigen Anwendungsinformationen f\xfcr dieses Ereignis, falls zutreffend."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Siehe ",(0,r.jsx)(n.a,{href:"/user-management/user-data",children:"Benutzer"})," und ",(0,r.jsx)(n.a,{href:"/integrate-logto/application-data-structure",children:"Anwendungen"})," Referenz f\xfcr detaillierte Felderkl\xe4rungen."]}),"\n",(0,r.jsx)(n.h2,{id:"data-mutation-hook-events-request-body",children:"Anfragetext f\xfcr Datenmutations-Hook-Ereignisse"}),"\n",(0,r.jsx)(n.h3,{id:"standard-request-body-fields",children:"Standard-Anfragetextfelder"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hookId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Der Bezeichner in Logto."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"event"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Welches Ereignis diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"createdAt"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die Erstellungszeit der Nutzlast im ISO-Format."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"userAgent"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Der User-Agent f\xfcr die Anfrage."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ip"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die IP-Adresse f\xfcr die Anfrage."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"interaction-api-context-body-fields",children:"Interaktions-API-Kontextfelder"}),"\n",(0,r.jsx)(n.p,{children:"Datenmutations-Hook-Ereignisse, die durch Benutzerinteraktions-API-Aufrufe ausgel\xf6st werden."}),"\n",(0,r.jsxs)(n.p,{children:["Verf\xfcgbare Ereignisse: ",(0,r.jsx)(n.code,{children:"User.Created"}),", ",(0,r.jsx)(n.code,{children:"User.Data.Updated"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"interactionEvent"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Das Interaktionsereignis, das diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sessionId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die Sitzungs-ID (nicht Interaktions-ID) f\xfcr dieses Ereignis, falls zutreffend."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"applicationId"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die zugeh\xf6rige Anwendungs-ID f\xfcr dieses Ereignis, falls zutreffend."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"application"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ApplicationEntity"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die zugeh\xf6rigen Anwendungsinformationen f\xfcr dieses Ereignis, falls zutreffend."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"management-api-context-body-fields",children:"Management-API-Kontextfelder"}),"\n",(0,r.jsx)(n.p,{children:"Datenmutations-Hook-Ereignisse, die durch Management-API-Aufrufe ausgel\xf6st werden."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"path"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Der Pfad des API-Aufrufs, der diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"method"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die Methode des API-Aufrufs, der diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"status"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Der Antwortstatuscode des API-Aufrufs, der diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"params"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"object"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die Anfrage-Koa-Pfadparameter des API-Aufrufs, der diesen Hook ausl\xf6st."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"matchedRoute"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die Koa-\xfcbereinstimmende Route des API-Aufrufs, der diesen Hook ausl\xf6st. Logto verwendet dieses Feld, um die aktivierten Hook-Ereignisse zuzuordnen."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"data-payload-body-fields",children:"Daten-Nutzlastfelder"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Benutzerereignisse"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ereignis"}),(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"User.Created"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"UserEntity"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die erstellte Benutzerentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"User.Data.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"UserEntity"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die aktualisierte Benutzerentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"User.Deleted"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Rollenereignisse"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type Role = {\n  id: string;\n  name: string;\n  description: string;\n  type: 'User' / 'MachineToMachine';\n  isDefault: boolean;\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type Scope = {\n  id: string;\n  name: string;\n  description: string;\n  resourceId: string;\n  createdAt: number;\n};\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ereignis"}),(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Role.Created"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Role"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die erstellte Rollenentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Role.Data.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Role"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die aktualisierte Rollenentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Role.Deleted"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Role.Scope.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Scope[]"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die aktualisierten Berechtigungen, die der Rolle zugewiesen sind."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Role.Scope.Updated"}),(0,r.jsx)(n.td,{children:"roleId"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die Rollen-ID, der Berechtigungen zugewiesen sind. (Nur verf\xfcgbar, wenn das Ereignis durch das Erstellen einer neuen Rolle mit vorab zugewiesenen Berechtigungen ausgel\xf6st wurde)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Berechtigungsereignisse (Scope)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ereignis"}),(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scope.Created"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Scope"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die erstellte Berechtigungsentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scope.Data.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Scope"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die aktualisierte Berechtigungsentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scope.Deleted"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Organisationsereignisse"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type Organization = {\n  id: string;\n  name: string;\n  description?: string;\n  customData: object;\n  createdAt: number;\n};\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ereignis"}),(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Organization.Created"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Organization"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die erstellte Organisationsentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Organization.Data.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"Organization"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die aktualisierte Organisationsentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Organization.Deleted"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Organization.Membership.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Organisationsrollenereignisse"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type OrganizationRole = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type OrganizationScope = {\n  id: string;\n  name: string;\n  description?: string;\n};\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ereignis"}),(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrganizationRole.Created"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"OrganizationRole"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die erstellte Organisationsrollenentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrganizationRole.Data.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"OrganizationRole"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die aktualisierte Organisationsrollenentit\xe4t f\xfcr dieses Ereignis."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrganizationRole.Deleted"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrganizationRole.Scope.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrganizationRole.Scope.Updated"}),(0,r.jsx)(n.td,{children:"organizationRoleId"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"Die Rollen-ID, der Berechtigungen zugewiesen sind. (Nur verf\xfcgbar, wenn das Ereignis durch das Erstellen einer neuen Rolle mit vorab zugewiesenen Berechtigungen ausgel\xf6st wurde)"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Organisationsberechtigungsereignisse (OrganizationScope)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Ereignis"}),(0,r.jsx)(n.th,{children:"Feld"}),(0,r.jsx)(n.th,{children:"Typ"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Anmerkungen"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrganizationScope.Created"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"OrganizationScope"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die erstellte Organisationsberechtigungsentit\xe4t."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrganizationScope.Data.Updated"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"OrganizationScope"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Die aktualisierte Organisationsberechtigungsentit\xe4t."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OrganizationScope.Deleted"}),(0,r.jsx)(n.td,{children:"data"}),(0,r.jsx)(n.td,{children:"null"}),(0,r.jsx)(n.td,{children:"/"}),(0,r.jsx)(n.td,{})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var d=s(58101);const r={},t=d.createContext(r);function i(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);