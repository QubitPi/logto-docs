"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[62320],{48054:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"customization/bring-your-ui/upload-custom-ui-assets-using-cli","title":"Benutzerdefinierte UI-Assets mit CLI hochladen","description":"Nachdem du deine benutzerdefinierte Anmelde-UI entwickelt hast, kannst du sie in Logto Cloud bereitstellen, um deinen Mandantenbenutzern zu dienen. Wie wir bereits in der Dokumentation \\"Bring your UI\\" eingef\xfchrt haben, kannst du dies erreichen, indem du die gezippten UI-Assets in Logto Console hochl\xe4dst.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/customization/bring-your-ui/upload-custom-ui-assets-using-cli.mdx","sourceDirName":"customization/bring-your-ui","slug":"/customization/bring-your-ui/upload-custom-ui-assets-using-cli","permalink":"/de/customization/bring-your-ui/upload-custom-ui-assets-using-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/customization/bring-your-ui/upload-custom-ui-assets-using-cli.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Debuggen und Testen deiner benutzerdefinierten UI lokal","permalink":"/de/customization/bring-your-ui/debug-and-test-your-custom-ui-locally"},"next":{"title":"Lokalisierte Sprachen","permalink":"/de/customization/localized-languages"}}');var s=i(25105),r=i(79621);const d={sidebar_position:2},o="Benutzerdefinierte UI-Assets mit CLI hochladen",a={},l=[{value:"Anweisungen",id:"instructions",level:2},{value:"Voraussetzungen",id:"prerequisites",level:3},{value:"Befehlsoptionen",id:"command-options",level:3},{value:"Befehl ausf\xfchren",id:"run-the-command",level:3},{value:"Unterst\xfctzte Umgebungsvariablen",id:"supported-environment-variables",level:3},{value:"Verwendung von Umgebungsvariablen",id:"use-environment-variables",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"benutzerdefinierte-ui-assets-mit-cli-hochladen",children:"Benutzerdefinierte UI-Assets mit CLI hochladen"})}),"\n",(0,s.jsxs)(n.p,{children:['Nachdem du deine benutzerdefinierte Anmelde-UI entwickelt hast, kannst du sie in Logto Cloud bereitstellen, um deinen Mandantenbenutzern zu dienen. Wie wir bereits in der Dokumentation "',(0,s.jsx)(n.a,{href:"/customization/bring-your-ui/",children:"Bring your UI"}),'" eingef\xfchrt haben, kannst du dies erreichen, indem du die gezippten UI-Assets in Logto Console hochl\xe4dst.']}),"\n",(0,s.jsx)(n.p,{children:"Hier bieten wir eine weitere Option, um deine UI-Assets mit dem CLI-Befehl in die Cloud bereitzustellen, was n\xfctzlich ist, wenn du den Bereitstellungsprozess in ein NPM-Skript oder eine CI/CD-Pipeline integrieren m\xf6chtest."}),"\n",(0,s.jsx)(n.h2,{id:"instructions",children:"Anweisungen"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Angenommen, du hast deine benutzerdefinierten Anmelde-UI-Assets im Verzeichnis ",(0,s.jsx)(n.code,{children:"/path/to/your/custom/ui/dist"})," erstellt."]})}),"\n",(0,s.jsx)(n.p,{children:"Der Bereitstellungsbefehl zippt automatisch deine UI-Assets, l\xe4dt sie in Logto Cloud hoch und setzt die benutzerdefinierte UI als Anmeldeerfahrung f\xfcr deine Mandantenbenutzer."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Voraussetzungen"}),"\n",(0,s.jsxs)(n.p,{children:["Da dieser Befehl mit der Logto Management API interagiert, ist eine Maschine-zu-Maschine-Anwendung erforderlich, um die Anfrage zu authentifizieren. Siehe ",(0,s.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/",children:"diese Dokumentation"}),", um zu erfahren, was die Logto Management API ist und wie man eine Maschine-zu-Maschine-Anwendung mit den erforderlichen Berechtigungen erstellt."]}),"\n",(0,s.jsx)(n.h3,{id:"command-options",children:"Befehlsoptionen"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--help                                 Hilfe anzeigen\n--version                              CLI-Version ausgeben\n--auth                                 Authentifizierungsdaten deiner Logto M2M-Anwendung. Z.B.: <app-id>:<app-secret>\n--endpoint                             Logto-Endpunkt-URI, der auf deine Logto Cloud-Instanz verweist. Z.B.: https://<tenant-id>.logto.app/\n--path, --experience-path              Der lokale Ordnerpfad deiner benutzerdefinierten Anmeldeerfahrungs-Assets.\n--resource, --management-api-resource  Logto Management API Ressourcenindikator. Erforderlich bei Verwendung einer benutzerdefinierten Domain.\n--verbose                              Ausf\xfchrliche Ausgabe anzeigen. [Standard: false]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"run-the-command",children:"Befehl ausf\xfchren"}),"\n",(0,s.jsxs)(n.p,{children:["Angenommen, deine App-ID ist ",(0,s.jsx)(n.code,{children:"foo"}),", das App-Geheimnis ist ",(0,s.jsx)(n.code,{children:"bar"})," und deine Mandanten-ID ist ",(0,s.jsx)(n.code,{children:"baz"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --auth foo:bar --endpoint https://baz.logto.app --experience-path /path/to/your/custom/ui/dist\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Wenn du eine benutzerdefinierte Domain f\xfcr deinen Logto-Endpunkt verwendest, muss eine zus\xe4tzliche Option ",(0,s.jsx)(n.code,{children:"--management-api-resource"})," (oder ",(0,s.jsx)(n.code,{children:"--resource"}),") angegeben werden."]}),"\n",(0,s.jsxs)(n.p,{children:["Da die Logto Management API Ressource immer auf ",(0,s.jsx)(n.code,{children:"https://<tenant-id>.logto.app/api"})," festgelegt ist, kannst du den Befehl wie folgt ausf\xfchren:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --resource https://baz.logto.app/api --auth foo:bar --endpoint https://your.custom.domain --experience-path /path/to/your/custom/ui/dist\n"})}),"\n",(0,s.jsx)(n.p,{children:"Hinweis:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Diese Option kann weggelassen werden, wenn die Standard-Logto-Domain verwendet wird, da die CLI die Ressource automatisch ableiten kann."}),"\n",(0,s.jsx)(n.li,{children:"Die Verwendung entweder der benutzerdefinierten Domain oder der Standard-Logto-Domain als Endpunkt f\xfchrt zu identischen Ergebnissen."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternativ, wenn du bereits eine vorhandene Zip-Datei hast und diese direkt verwenden m\xf6chtest, kannst du die Option ",(0,s.jsx)(n.code,{children:"--zip-path"})," angeben."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --auth foo:bar --endpoint https://baz.logto.app --zip-path /path/to/your/custom/ui/dist.zip\n"})}),"\n",(0,s.jsx)(n.h3,{id:"supported-environment-variables",children:"Unterst\xfctzte Umgebungsvariablen"}),"\n",(0,s.jsx)(n.p,{children:"Der Bereitstellungsbefehl unterst\xfctzt auch Umgebungsvariablen und ordnet sie automatisch den entsprechenden Optionen zu."}),"\n",(0,s.jsxs)(n.p,{children:["Alle unterst\xfctzten Umgebungsvariablen sind unten aufgelistet und mit ",(0,s.jsx)(n.code,{children:"LOGTO_"})," vorangestellt."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Umgebungsvariable"}),(0,s.jsx)(n.th,{children:"CLI-Option"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_AUTH"}),(0,s.jsx)(n.td,{children:"--auth"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_ENDPOINT"}),(0,s.jsx)(n.td,{children:"--endpoint"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_EXPERIENCE_PATH"}),(0,s.jsx)(n.td,{children:"--experience-path"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_PATH"}),(0,s.jsx)(n.td,{children:"--path"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_MANAGEMENT_API_RESOURCE"}),(0,s.jsx)(n.td,{children:"--management-api-resource"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_RESOURCE"}),(0,s.jsx)(n.td,{children:"--resource"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_ZIP_PATH"}),(0,s.jsx)(n.td,{children:"--zip-path"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"use-environment-variables",children:"Verwendung von Umgebungsvariablen"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Du kannst eine ",(0,s.jsx)(n.code,{children:".env"}),"-Datei im CLI-Stammverzeichnis oder in einem \xfcbergeordneten Verzeichnis erstellen, in dem sich die CLI befindet."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"LOGTO_AUTH=foo:bar\nLOGTO_ENDPOINT=https://your.custom.domain\nLOGTO_EXPERIENCE_PATH=/path/to/your/custom/ui/dist\nLOGTO_RESOURCE=https://baz.logto.app/api\n"})}),"\n",(0,s.jsx)(n.p,{children:"Dann f\xfchre den Befehl aus, ohne die Optionen anzugeben."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Alternativ kannst du diese Umgebungsvariablen direkt beim Ausf\xfchren des Befehls angeben."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"LOGTO_AUTH=foo:bar LOGTO_ENDPOINT=https://your.custom.domain LOGTO_EXPERIENCE_PATH=/path/to/your/custom/ui/dist LOGTO_RESOURCE=https://baz.logto.app/api npx @logto/tunnel deploy\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},79621:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(58101);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);