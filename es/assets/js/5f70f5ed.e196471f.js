"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[73815],{49412:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"concepts/core-service/configuration","title":"Configuraci\xf3n","description":"Variables de entorno","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/concepts/core-service/configuration.md","sourceDirName":"concepts/core-service","slug":"/concepts/core-service/configuration","permalink":"/es/concepts/core-service/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/concepts/core-service/configuration.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Logto core service","permalink":"/es/concepts/core-service/"},"next":{"title":"Token opaco","permalink":"/es/concepts/opaque-token"}}');var i=s(25105),r=s(79621);const c={},o="Configuraci\xf3n",t={},l=[{value:"Variables de entorno",id:"environment-variables",level:2},{value:"Uso",id:"usage",level:3},{value:"Variables",id:"variables",level:3},{value:"Habilitar HTTPS",id:"enabling-https",level:3},{value:"Usando Node",id:"using-node",level:4},{value:"Usando un proxy HTTPS",id:"using-a-https-proxy",level:4},{value:"Configuraciones de la base de datos",id:"database-configs",level:2},{value:"Tipos de clave privada compatibles",id:"supported-private-key-types",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configuraci\xf3n",children:"Configuraci\xf3n"})}),"\n",(0,i.jsx)(n.h2,{id:"environment-variables",children:"Variables de entorno"}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Uso"}),"\n",(0,i.jsx)(n.p,{children:"Logto maneja las variables de entorno en el siguiente orden:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Variables de entorno del sistema"}),"\n",(0,i.jsxs)(n.li,{children:["El archivo ",(0,i.jsx)(n.code,{children:".env"})," en la ra\xedz del proyecto, que cumple con el formato ",(0,i.jsx)(n.a,{href:"https://github.com/motdotla/dotenv#readme",children:"dotenv"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Por lo tanto, las variables de entorno del sistema sobrescribir\xe1n los valores en ",(0,i.jsx)(n.code,{children:".env"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"variables",children:"Variables"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Si ejecutas Logto a trav\xe9s de ",(0,i.jsx)(n.code,{children:"npm start"})," en la ra\xedz del proyecto, ",(0,i.jsx)(n.code,{children:"NODE_ENV"})," siempre ser\xe1 ",(0,i.jsx)(n.code,{children:"production"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["En los valores predeterminados, ",(0,i.jsx)(n.code,{children:"protocol"})," ser\xe1 ",(0,i.jsx)(n.code,{children:"http"})," o ",(0,i.jsx)(n.code,{children:"https"})," seg\xfan tu configuraci\xf3n de HTTPS."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Clave"}),(0,i.jsx)(n.th,{children:"Valor Predeterminado"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"NODE_ENV"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"'production' | 'test' | undefined"})}),(0,i.jsx)(n.td,{children:"Qu\xe9 tipo de entorno en el que se ejecuta Logto."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PORT"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"3001"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"El puerto local al que Logto escucha."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ADMIN_PORT"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"3002"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"El puerto local al que escucha Logto Admin Console."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ADMIN_DISABLE_LOCALHOST"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string | boolean | number"})}),(0,i.jsxs)(n.td,{children:["Establ\xe9celo en ",(0,i.jsx)(n.code,{children:"1"})," o ",(0,i.jsx)(n.code,{children:"true"})," para deshabilitar el puerto para Admin Console. Con ",(0,i.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," sin establecer, deshabilitar\xe1 completamente Admin Console."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DB_URL"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsxs)(n.td,{children:["El ",(0,i.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6",children:"Postgres DSN"})," para la base de datos de Logto."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTPS_CERT_PATH"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string | undefined"})}),(0,i.jsxs)(n.td,{children:["Consulta ",(0,i.jsx)(n.a,{href:"#enabling-https",children:"Habilitar HTTPS"})," para m\xe1s detalles."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"HTTPS_KEY_PATH"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"undefined"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string | undefined"})}),(0,i.jsx)(n.td,{children:"\xcddem."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TRUST_PROXY_HEADER"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"\xcddem."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ENDPOINT"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'protocol://localhost:$PORT'"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsxs)(n.td,{children:["Puedes especificar una URL con tu dominio personalizado para pruebas en l\xednea o producci\xf3n. Esto tambi\xe9n afectar\xe1 el valor del ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"identificador del emisor de OIDC"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ADMIN_ENDPOINT"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"'protocol://localhost:$ADMIN_PORT'"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsxs)(n.td,{children:["Puedes especificar una URL con tu dominio personalizado para producci\xf3n (Ej. ",(0,i.jsx)(n.code,{children:"ADMIN_ENDPOINT=https://admin.domain.com"}),"). Esto tambi\xe9n afectar\xe1 el valor de los URIs de redirecci\xf3n de Admin Console."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"CASE_SENSITIVE_USERNAME"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsx)(n.td,{children:"Especifica si el nombre de usuario distingue entre may\xfasculas y min\xfasculas. Ten cuidado al modificar este valor; los cambios no ajustar\xe1n autom\xe1ticamente los datos existentes de la base de datos, requiriendo gesti\xf3n manual."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"enabling-https",children:"Habilitar HTTPS"}),"\n",(0,i.jsx)(n.h4,{id:"using-node",children:"Usando Node"}),"\n",(0,i.jsxs)(n.p,{children:["Node admite HTTPS de forma nativa. Proporciona ",(0,i.jsx)(n.strong,{children:"AMBOS"})," ",(0,i.jsx)(n.code,{children:"HTTPS_CERT_PATH"})," y ",(0,i.jsx)(n.code,{children:"HTTPS_KEY_PATH"})," para habilitar HTTPS a trav\xe9s de Node."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HTTPS_CERT_PATH"})," implica la ruta a tu certificado HTTPS, mientras que ",(0,i.jsx)(n.code,{children:"HTTPS_KEY_PATH"})," implica la ruta a tu clave HTTPS."]}),"\n",(0,i.jsx)(n.h4,{id:"using-a-https-proxy",children:"Usando un proxy HTTPS"}),"\n",(0,i.jsx)(n.p,{children:"Otra pr\xe1ctica com\xfan es tener un proxy HTTPS frente a Node (Ej. Nginx)."}),"\n",(0,i.jsxs)(n.p,{children:["En este caso, probablemente querr\xe1s establecer ",(0,i.jsx)(n.code,{children:"TRUST_PROXY_HEADER"})," en ",(0,i.jsx)(n.code,{children:"true"}),", lo que indica si los campos de encabezado del proxy deben ser confiables. Logto pasar\xe1 el valor a ",(0,i.jsx)(n.a,{href:"https://github.com/koajs/koa/blob/master/docs/api/index.md#settings",children:"configuraciones de la aplicaci\xf3n Koa"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Consulta ",(0,i.jsx)(n.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies",children:"Confiar en proxies de descarga de TLS"})," para saber cu\xe1ndo configurar este campo."]}),"\n",(0,i.jsx)(n.h2,{id:"database-configs",children:"Configuraciones de la base de datos"}),"\n",(0,i.jsxs)(n.p,{children:["Gestionar demasiadas variables de entorno no es eficiente ni flexible, por lo que la mayor\xeda de nuestras configuraciones generales se almacenan en la tabla de la base de datos ",(0,i.jsx)(n.code,{children:"logto_configs"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"La tabla es un almacenamiento simple de clave-valor, y la clave es enumerable de la siguiente manera:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Clave"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oidc.cookieKeys"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string[]"})}),(0,i.jsxs)(n.td,{children:["El arreglo de cadenas de las ",(0,i.jsx)(n.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys",children:"claves de firma de cookies"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"oidc.privateKeys"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("code",{children:"string[]"})}),(0,i.jsxs)(n.td,{children:["El arreglo de cadenas del contenido de la clave privada para la ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing",children:"firma de JWT de OIDC"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"supported-private-key-types",children:"Tipos de clave privada compatibles"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"EC (curvas P-256, secp256k1, P-384 y P-521)"}),"\n",(0,i.jsx)(n.li,{children:"RSA"}),"\n",(0,i.jsx)(n.li,{children:"OKP (subtipos Ed25519, Ed448, X25519, X448)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var d=s(58101);const i={},r=d.createContext(i);function c(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);