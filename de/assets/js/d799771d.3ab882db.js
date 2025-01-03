"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[89895],{96875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"logto-oss/get-started-with-oss","title":"Erste Schritte mit OSS","description":"Schnellstartanleitungen f\xfcr die Initialisierung des Logto Open-Source-Dienstes (OSS).","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/get-started-with-oss.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/get-started-with-oss","permalink":"/de/logto-oss/get-started-with-oss","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/get-started-with-oss.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"Schnellstartanleitungen f\xfcr die Initialisierung des Logto Open-Source-Dienstes (OSS).","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Logto OSS","permalink":"/de/logto-oss/"},"next":{"title":"Bereitstellung und Konfiguration","permalink":"/de/logto-oss/deployment-and-configuration"}}');var s=t(25105),o=t(79621),i=t(3768),l=t(11043);const a=t.p+"assets/images/gitpod-running-9ccf680a2482a3146703b6097d62f0a5.png",d={description:"Schnellstartanleitungen f\xfcr die Initialisierung des Logto Open-Source-Dienstes (OSS).",sidebar_position:1},c="Erste Schritte mit OSS",u={},h=[{value:"GitPod",id:"gitpod",level:2},{value:"Lokal",id:"local",level:2},{value:"Verwendung einer alternativen URL zum Herunterladen",id:"using-an-alternative-url-for-downloading",level:3},{value:"Konfiguration (optional)",id:"configuration-optional",level:3},{value:"Ein Konto erstellen",id:"create-an-account",level:2},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:t,Url:r}=n;return t||m("Details",!0),r||m("Url",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"erste-schritte-mit-oss",children:"Erste Schritte mit OSS"})}),"\n",(0,s.jsx)(n.h2,{id:"gitpod",children:"GitPod"}),"\n",(0,s.jsxs)(n.p,{children:["Um einen Online-GitPod-Arbeitsbereich f\xfcr Logto zu starten, ",(0,s.jsx)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener",children:"klicke hier"}),". Warte einen Moment, du wirst eine Nachricht wie diese sehen:"]}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("img",{src:a,alt:"Gitpod l\xe4uft",width:"720px",style:{borderRadius:"4px"}})}),"\n",(0,s.jsxs)(n.p,{children:["Logto verwendet standardm\xe4\xdfig den Port ",(0,s.jsx)(n.code,{children:"3001"})," f\xfcr seinen Kerndienst und den Port ",(0,s.jsx)(n.code,{children:"3002"})," f\xfcr die interaktive Admin-Konsole."]}),"\n",(0,s.jsxs)(n.p,{children:["Um deine Logto-Reise fortzusetzen, dr\xfccke Strg (oder Cmd) und klicke auf den Link, der mit ",(0,s.jsx)(n.code,{children:"https://3002-..."})," beginnt. Viel Spa\xdf!"]}),"\n",(0,s.jsx)(n.h2,{id:"local",children:"Lokal"}),"\n",(0,s.jsx)(n.p,{children:"Die minimal empfohlenen Hardwareanforderungen f\xfcr das Hosting von Logto sind:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"vCPU"}),": 2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Speicher"}),": 8 GiB"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Festplatte"}),": 256 GiB"]}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsxs)(i.A,{value:"docker-compose",label:"Docker Compose",children:[(0,s.jsxs)(n.p,{children:["Docker Compose CLI kommt normalerweise mit ",(0,s.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"}),"."]}),(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Verwende unseren Docker Compose-Befehl nicht f\xfcr die Produktion! Da wir derzeit eine integrierte Postgres-Datenbank zusammen mit der Logto-App in ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," geb\xfcndelt haben, wird jedes Mal, wenn du den Befehl erneut ausf\xfchrst, eine neue Datenbankinstanz erstellt, und alle zuvor gespeicherten Daten gehen verloren."]})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | docker compose -p logto -f - up\n"})}),(0,s.jsx)(n.p,{children:"Nach einer erfolgreichen Komposition wirst du eine Nachricht wie diese sehen:"})]}),(0,s.jsxs)(i.A,{value:"docker",label:"Docker",children:[(0,s.jsx)("h3",{children:"Schritt 1"}),(0,s.jsxs)(n.p,{children:["Bereite eine ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),"@^14.0-Instanz vor und verwende ",(0,s.jsx)(n.a,{href:"/logto-oss/using-cli",children:"Logto CLI"}),", um eine Datenbank f\xfcr Logto zu initialisieren:"]}),(0,s.jsxs)(l.A,{groupId:"cmd",children:[(0,s.jsx)(i.A,{value:"cli",label:"CLI",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"logto db seed\n"})})}),(0,s.jsx)(i.A,{value:"npx",label:"npx",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db seed\n"})})})]}),(0,s.jsx)("h3",{children:"Schritt 2"}),(0,s.jsx)(n.p,{children:"Ziehe das Image:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# ghcr\ndocker pull ghcr.io/logto-io/logto:latest\n# DockerHub\ndocker pull svhd/logto:latest\n"})}),(0,s.jsx)("h3",{children:"Schritt 3"}),(0,s.jsxs)(n.p,{children:["Ordne die Container-Ports der Logto-Kern- und Admin-App zu, z. B. ",(0,s.jsx)(n.code,{children:"3001:3001"})," und ",(0,s.jsx)(n.code,{children:"3002:3002"}),"; und setze die folgenden Umgebungsvariablen f\xfcr den Container:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"TRUST_PROXY_HEADER: 1 # Setze auf 1, wenn du einen HTTPS-Proxy (z. B. Nginx) vor Logto hast\nENDPOINT: https://<your-logto-domain> # (Optional) Ersetze durch deine Logto-Endpunkt-URL, wenn du eine benutzerdefinierte Domain verwendest\nADMIN_ENDPOINT: https://<your-logto-admin-domain> # (Optional) Ersetze durch deine Logto-Admin-URL, wenn du eine benutzerdefinierte Domain verwendest\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Ersetze durch deinen Postgres-DSN\n"})}),(0,s.jsx)(n.p,{children:"F\xfchre den Container mit allen oben genannten Umgebungsvariablen aus:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run \\\n  --name logto \\\n  -p 3001:3001 \\\n  -p 3002:3002 \\\n  -e TRUST_PROXY_HEADER=1 \\\n  -e ENDPOINT=https://<your-logto-domain> \\\n  -e ADMIN_ENDPOINT=https://<your-logto-admin-domain> \\\n  -e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\n  ghcr.io/logto-io/logto:latest\n"})}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Wenn du Docker Hub verwendest, verwende ",(0,s.jsx)(n.code,{children:"svhd/logto:latest"})," anstelle von ",(0,s.jsx)(n.code,{children:"ghcr.io/logto-io/logto:latest"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Verwende ",(0,s.jsx)(n.code,{children:"host.docker.internal"})," oder ",(0,s.jsx)(n.code,{children:"172.17.0.1"})," in ",(0,s.jsx)(n.code,{children:"DB_URL"}),", um auf die Host-IP zu verweisen."]}),"\n"]})}),(0,s.jsx)(n.p,{children:"Schlie\xdflich wirst du eine Nachricht wie diese sehen:"})]}),(0,s.jsxs)(i.A,{value:"npm",label:"npm-init",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Voraussetzungen"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,s.jsx)(n.code,{children:"^18.12.0"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://postgresql.org/",children:"PostgreSQL"})," ",(0,s.jsx)(n.code,{children:"^14.0"})]}),"\n"]}),(0,s.jsx)(n.p,{children:"H\xf6here Versionen funktionieren normalerweise, sind aber nicht garantiert."}),(0,s.jsx)(n.p,{children:"Wir empfehlen die Verwendung einer neuen leeren Datenbank, die f\xfcr Logto vorgesehen ist, obwohl dies keine zwingende Voraussetzung ist."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Download und Start"})}),(0,s.jsx)(n.p,{children:"In deinem Terminal:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm init @logto@latest\n"})}),(0,s.jsx)(n.p,{children:"Sobald du den Initialisierungsprozess abgeschlossen und Logto gestartet hast, wirst du eine Nachricht wie diese sehen:"})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Kern-App l\xe4uft unter http://localhost:3001\nKern-App l\xe4uft unter https://your-domain-url\nAdmin-App l\xe4uft unter http://localhost:3002\nAdmin-App l\xe4uft unter https://your-admin-domain-url\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Gehe zu ",(0,s.jsx)(n.code,{children:"http://localhost:3002/"}),", um deine Logto-Reise fortzusetzen. Viel Spa\xdf!"]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.h3,{id:"using-an-alternative-url-for-downloading",children:"Verwendung einer alternativen URL zum Herunterladen"})}),(0,s.jsxs)(n.p,{children:["Wenn du eine URL f\xfcr die Logto-Zip-Datei angeben m\xf6chtest, verwende die Option ",(0,s.jsx)(n.code,{children:"--download-url"}),". Zum Beispiel:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm init @logto@latest -- --download-url=https://github.com/logto-io/logto/releases/download/v1.2.2/logto.tar.gz\n"})}),(0,s.jsxs)(n.p,{children:["Beachte, dass das zus\xe4tzliche ",(0,s.jsx)(n.code,{children:"--"})," erforderlich ist, damit NPM die Argumente \xfcbergibt."]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.h3,{id:"configuration-optional",children:"Konfiguration (optional)"})}),(0,s.jsxs)(n.p,{children:["Logto verwendet Umgebungsvariablen f\xfcr die Konfiguration, zusammen mit der Unterst\xfctzung von ",(0,s.jsx)(n.code,{children:".env"}),"-Dateien. Siehe ",(0,s.jsx)(n.a,{href:"/concepts/core-service/configuration",children:"Konfiguration"})," f\xfcr detaillierte Nutzung und vollst\xe4ndige Variablenliste."]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Schau dir ",(0,s.jsx)(n.a,{href:"/concepts/core-service",children:"Kernservice"})," an, wenn du mehr erweiterte Steuerungen oder programmatischen Zugriff auf Logto m\xf6chtest."]})}),"\n",(0,s.jsx)(n.h2,{id:"create-an-account",children:"Ein Konto erstellen"}),"\n",(0,s.jsx)(n.p,{children:'Sobald du Logto erfolgreich auf deinem Server gehostet hast, klicke auf der Willkommensseite auf "Konto erstellen". Beachte, dass die Open-Source-Version von Logto nur die Erstellung eines Kontos w\xe4hrend des ersten Starts erlaubt und keine Unterst\xfctzung f\xfcr mehrere Konten bietet. Der Kontoerstellungsprozess ist auf Kombinationen aus Benutzername und Passwort beschr\xe4nkt.'}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,s.jsx)(r,{href:"https://blog.logto.io/local-https",children:"Umgang mit lokaler HTTPS-Entwicklung"})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3768:(e,n,t)=>{t.d(n,{A:()=>i});t(58101);var r=t(13526);const s={tabItem:"tabItem_y6LR"};var o=t(25105);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11043:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(58101),s=t(13526),o=t(32571),i=t(55234),l=t(87394),a=t(87276),d=t(31637),c=t(16063);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[i,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[d,u]=g({queryString:t,groupId:s}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),x=(()=>{const e=d??m;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&a(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(27034);const x={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var j=t(25105);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=a.indexOf(n),s=l[t].value;s!==r&&(d(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:c,...o,className:(0,s.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},79621:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(58101);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);