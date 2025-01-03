"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85366],{79038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"user-management/user-migration","title":"Benutzermigration","description":"Logto unterst\xfctzt die manuelle Migration bestehender Benutzer von einer anderen Plattform. Diese Anleitung zeigt dir, wie du bestehende Benutzer \xfcber die Management API importierst und welche Dinge du vor der Migration beachten solltest.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/user-management/user-migration.mdx","sourceDirName":"user-management","slug":"/user-management/user-migration","permalink":"/de/user-management/user-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/user-management/user-migration.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Pers\xf6nliches Zugangstoken","permalink":"/de/user-management/personal-access-token"},"next":{"title":"Benutzerverwaltung","permalink":"/de/user-management/"}}');var i=t(25105),s=t(79621);const o={sidebar_position:5},a="Benutzermigration",d={},u=[{value:"Benutzerschema",id:"user-schema",level:2},{value:"Passwort-Hashing",id:"password-hashing",level:2},{value:"Schritte zur Migration",id:"steps-to-migrate",level:2},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Url:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"benutzermigration",children:"Benutzermigration"})}),"\n",(0,i.jsx)(n.p,{children:"Logto unterst\xfctzt die manuelle Migration bestehender Benutzer von einer anderen Plattform. Diese Anleitung zeigt dir, wie du bestehende Benutzer \xfcber die Management API importierst und welche Dinge du vor der Migration beachten solltest."}),"\n",(0,i.jsx)(n.h2,{id:"user-schema",children:"Benutzerschema"}),"\n",(0,i.jsxs)(n.p,{children:["Bevor wir beginnen, werfen wir einen Blick auf das ",(0,i.jsx)(n.a,{href:"/user-management/user-data/#user-profile",children:"Benutzerschema"})," in Logto. Es gibt 3 Teile des Benutzerschemas, die du beachten solltest:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Basisdaten"}),": sind die grundlegenden Informationen aus dem Benutzerprofil, du kannst die Daten aus deinem bestehenden Benutzerprofil abgleichen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Benutzerdefinierte Daten"}),": speichert zus\xe4tzliche Benutzerinformationen, du kannst dies verwenden, um Dateien zu speichern, die nicht mit den Basisdaten \xfcbereinstimmen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Soziale Identit\xe4ten"}),": speichert die Benutzerinformationen, die aus der sozialen Anmeldung abgerufen wurden."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Du kannst eine Zuordnung erstellen, um die Benutzerinformationen aus deinem bestehenden Benutzerprofil mit ",(0,i.jsx)(n.strong,{children:"Basisdaten"})," und ",(0,i.jsx)(n.strong,{children:"benutzerdefinierten Daten"})," abzugleichen. F\xfcr die soziale Anmeldung ben\xf6tigst du zus\xe4tzliche Schritte, um die sozialen Identit\xe4ten zu importieren. Bitte beziehe dich auf die API von ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createuseridentity",children:"Soziale Identit\xe4t mit Benutzer verkn\xfcpfen"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"password-hashing",children:"Passwort-Hashing"}),"\n",(0,i.jsxs)(n.p,{children:["Logto verwendet ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Argon2",children:"Argon2"})," zum Hashen des Benutzerpassworts und unterst\xfctzt auch andere Algorithmen wie ",(0,i.jsx)(n.code,{children:"MD5"}),", ",(0,i.jsx)(n.code,{children:"SHA1"}),", ",(0,i.jsx)(n.code,{children:"SHA256"})," und ",(0,i.jsx)(n.code,{children:"Bcrypt"})," f\xfcr die Bequemlichkeit der Migration. Diese Algorithmen gelten als unsicher, die entsprechenden Passwort-Hashes werden beim ersten erfolgreichen Anmelden des Benutzers zu Argon2 migriert."]}),"\n",(0,i.jsxs)(n.p,{children:["Wenn du Unterst\xfctzung f\xfcr einen bestimmten Hashing-Algorithmus ben\xf6tigst, ",(0,i.jsx)(n.a,{href:"https://logto.io/contact",children:"lass es uns bitte wissen"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"steps-to-migrate",children:"Schritte zur Migration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Vorbereitung der Benutzerdaten"}),"\nDu solltest zuerst die Benutzerdaten von deiner bestehenden Plattform exportieren und dann die Benutzerinformationen auf das Logto-Benutzerschema abbilden. Wir empfehlen dir, die abgebildeten Daten im JSON-Format vorzubereiten. Hier ist ein Beispiel f\xfcr die Benutzerdaten:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "username": "user1",\n    "passwordDigest": "password-encrypted",\n    "passwordAlgorithm": "SHA256"\n  },\n  {\n    "username": "user2",\n    "passwordDigest": "password-encrypted",\n    "passwordAlgorithm": "SHA256"\n  }\n]\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Erstellen eines Logto-Tenants"}),"\nDu musst einen Tenant in Logto einrichten. Du kannst entweder Logto Cloud oder Logto OSS verwenden. Wenn du dies noch nicht getan hast, beziehe dich bitte auf die Anleitung ",(0,i.jsx)(n.a,{href:"/introduction/set-up-logto-cloud/#create-logto-tenant",children:"Logto Cloud einrichten"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Einrichtung der Verbindung zur Management API"}),"\nWir werden die Management API verwenden, um die Benutzerdaten zu importieren. Du kannst dich auf die ",(0,i.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," beziehen, um zu erfahren, wie du die Verbindung in deiner Entwicklungsumgebung einrichtest."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Import der Benutzerdaten"}),"\nEs wird empfohlen, ein Skript vorzubereiten, um die Benutzerdaten einzeln zu importieren. Wir werden die ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createuser",children:"Benutzer erstellen"})," API aufrufen, um die Benutzerdaten zu importieren. Hier ist ein Beispiel f\xfcr das Skript:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const users = require('./users.json');\n\nconst importUsers = async () => {\n  for (const user of users) {\n    try {\n      await fetch('https://[tenant_id].logto.app/api/users', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          Authorization: 'Bearer [your-access-token]',\n        },\n        body: JSON.stringify(user),\n      });\n      // Sleep for a while to avoid rate limit\n      await new Promise((resolve) => setTimeout(resolve, 200));\n    } catch (error) {\n      console.error(`Failed to import user ${user.username}: ${error.message}`);\n    }\n  }\n};\n\nimportUsers();\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Bitte beachte, dass der API-Endpunkt einer Ratenbegrenzung unterliegt. Du solltest eine Pause zwischen jeder Anfrage einf\xfcgen, um die Ratenbegrenzung zu vermeiden. Bitte \xfcberpr\xfcfe unsere Seite zu ",(0,i.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/#rate-limit",children:"Ratenbegrenzungen"})," f\xfcr Details."]}),"\n",(0,i.jsxs)(n.p,{children:["Wenn du eine gro\xdfe Menge an Benutzerdaten (100k+ Benutzer) hast, kannst du ",(0,i.jsx)(n.a,{href:"https://logto.io/contact",children:"uns kontaktieren"}),", um die Ratenbegrenzung zu erh\xf6hen."]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,i.jsx)(t,{href:"https://blog.logto.io/general-migration-guide",children:(0,i.jsx)(n.p,{children:"Eine allgemeine Anleitung zur Migration deiner bestehenden Benutzerdatenbank zu Logto"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},79621:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(58101);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);