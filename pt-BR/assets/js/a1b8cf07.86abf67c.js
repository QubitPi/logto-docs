"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[18875],{85475:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"concepts/core-service/configuration","title":"Configura\xe7\xe3o","description":"Vari\xe1veis de ambiente","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/concepts/core-service/configuration.md","sourceDirName":"concepts/core-service","slug":"/concepts/core-service/configuration","permalink":"/pt-BR/concepts/core-service/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/concepts/core-service/configuration.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Logto core service","permalink":"/pt-BR/concepts/core-service/"},"next":{"title":"Token opaco","permalink":"/pt-BR/concepts/opaque-token"}}');var o=s(25105),i=s(79621);const r={},c="Configura\xe7\xe3o",t={},a=[{value:"Vari\xe1veis de ambiente",id:"environment-variables",level:2},{value:"Uso",id:"usage",level:3},{value:"Vari\xe1veis",id:"variables",level:3},{value:"Habilitando HTTPS",id:"enabling-https",level:3},{value:"Usando Node",id:"using-node",level:4},{value:"Usando um proxy HTTPS",id:"using-a-https-proxy",level:4},{value:"Configura\xe7\xf5es do banco de dados",id:"database-configs",level:2},{value:"Tipos de chave privada suportados",id:"supported-private-key-types",level:3}];function l(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.header,{children:(0,o.jsx)(d.h1,{id:"configura\xe7\xe3o",children:"Configura\xe7\xe3o"})}),"\n",(0,o.jsx)(d.h2,{id:"environment-variables",children:"Vari\xe1veis de ambiente"}),"\n",(0,o.jsx)(d.h3,{id:"usage",children:"Uso"}),"\n",(0,o.jsx)(d.p,{children:"Logto lida com vari\xe1veis de ambiente na seguinte ordem:"}),"\n",(0,o.jsxs)(d.ul,{children:["\n",(0,o.jsx)(d.li,{children:"Vari\xe1veis de ambiente do sistema"}),"\n",(0,o.jsxs)(d.li,{children:["O arquivo ",(0,o.jsx)(d.code,{children:".env"})," na raiz do projeto, que est\xe1 em conformidade com o formato ",(0,o.jsx)(d.a,{href:"https://github.com/motdotla/dotenv#readme",children:"dotenv"})]}),"\n"]}),"\n",(0,o.jsxs)(d.p,{children:["Assim, as vari\xe1veis de ambiente do sistema ir\xe3o sobrescrever os valores em ",(0,o.jsx)(d.code,{children:".env"}),"."]}),"\n",(0,o.jsx)(d.h3,{id:"variables",children:"Vari\xe1veis"}),"\n",(0,o.jsx)(d.admonition,{type:"caution",children:(0,o.jsxs)(d.p,{children:["Se voc\xea executar o Logto via ",(0,o.jsx)(d.code,{children:"npm start"})," na raiz do projeto, ",(0,o.jsx)(d.code,{children:"NODE_ENV"})," ser\xe1 sempre ",(0,o.jsx)(d.code,{children:"production"}),"."]})}),"\n",(0,o.jsxs)(d.p,{children:["Nos valores padr\xe3o, ",(0,o.jsx)(d.code,{children:"protocol"})," ser\xe1 ",(0,o.jsx)(d.code,{children:"http"})," ou ",(0,o.jsx)(d.code,{children:"https"})," de acordo com sua configura\xe7\xe3o de HTTPS."]}),"\n",(0,o.jsxs)(d.table,{children:[(0,o.jsx)(d.thead,{children:(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.th,{children:"Key"}),(0,o.jsx)(d.th,{children:"Valor Padr\xe3o"}),(0,o.jsx)(d.th,{children:"Tipo"}),(0,o.jsx)(d.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(d.tbody,{children:[(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"NODE_ENV"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"undefined"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)("code",{children:"'production' | 'test' | undefined"})}),(0,o.jsx)(d.td,{children:"Em que tipo de ambiente o Logto est\xe1 sendo executado."})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"PORT"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"3001"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"number"})}),(0,o.jsx)(d.td,{children:"A porta local que o Logto escuta."})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"ADMIN_PORT"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"3002"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"number"})}),(0,o.jsx)(d.td,{children:"A porta local que o Logto Admin Console escuta."})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"ADMIN_DISABLE_LOCALHOST"}),(0,o.jsx)(d.td,{children:"N/A"}),(0,o.jsx)(d.td,{children:(0,o.jsx)("code",{children:"string | boolean | number"})}),(0,o.jsxs)(d.td,{children:["Defina como ",(0,o.jsx)(d.code,{children:"1"})," ou ",(0,o.jsx)(d.code,{children:"true"})," para desabilitar a porta para o Admin Console. Com ",(0,o.jsx)(d.code,{children:"ADMIN_ENDPOINT"})," n\xe3o definido, ele desativar\xe1 completamente o Admin Console."]})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"DB_URL"}),(0,o.jsx)(d.td,{children:"N/A"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"string"})}),(0,o.jsxs)(d.td,{children:["O ",(0,o.jsx)(d.a,{href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6",children:"Postgres DSN"})," para o banco de dados Logto."]})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"HTTPS_CERT_PATH"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"undefined"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)("code",{children:"string | undefined"})}),(0,o.jsxs)(d.td,{children:["Veja ",(0,o.jsx)(d.a,{href:"#enabling-https",children:"Habilitando HTTPS"})," para detalhes."]})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"HTTPS_KEY_PATH"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"undefined"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)("code",{children:"string | undefined"})}),(0,o.jsx)(d.td,{children:"Idem."})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"TRUST_PROXY_HEADER"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"false"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"boolean"})}),(0,o.jsx)(d.td,{children:"Idem."})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"ENDPOINT"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"'protocol://localhost:$PORT'"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"string"})}),(0,o.jsxs)(d.td,{children:["Voc\xea pode especificar uma URL com seu dom\xednio personalizado para testes online ou produ\xe7\xe3o. Isso tamb\xe9m afetar\xe1 o valor do ",(0,o.jsx)(d.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"identificador do emissor OIDC"}),"."]})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"ADMIN_ENDPOINT"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"'protocol://localhost:$ADMIN_PORT'"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"string"})}),(0,o.jsxs)(d.td,{children:["Voc\xea pode especificar uma URL com seu dom\xednio personalizado para produ\xe7\xe3o (Ex.: ",(0,o.jsx)(d.code,{children:"ADMIN_ENDPOINT=https://admin.domain.com"}),"). Isso tamb\xe9m afetar\xe1 o valor dos URIs de redirecionamento do Admin Console."]})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"CASE_SENSITIVE_USERNAME"}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"true"})}),(0,o.jsx)(d.td,{children:(0,o.jsx)(d.code,{children:"boolean"})}),(0,o.jsx)(d.td,{children:"Especifica se o nome de usu\xe1rio \xe9 sens\xedvel a mai\xfasculas e min\xfasculas. Tenha cuidado ao modificar este valor; mudan\xe7as n\xe3o ajustar\xe3o automaticamente os dados existentes no banco de dados, exigindo gerenciamento manual."})]})]})]}),"\n",(0,o.jsx)(d.h3,{id:"enabling-https",children:"Habilitando HTTPS"}),"\n",(0,o.jsx)(d.h4,{id:"using-node",children:"Usando Node"}),"\n",(0,o.jsxs)(d.p,{children:["Node suporta HTTPS nativamente. Forne\xe7a ",(0,o.jsx)(d.strong,{children:"AMBOS"})," ",(0,o.jsx)(d.code,{children:"HTTPS_CERT_PATH"})," e ",(0,o.jsx)(d.code,{children:"HTTPS_KEY_PATH"})," para habilitar HTTPS via Node."]}),"\n",(0,o.jsxs)(d.p,{children:[(0,o.jsx)(d.code,{children:"HTTPS_CERT_PATH"})," implica o caminho para o seu certificado HTTPS, enquanto ",(0,o.jsx)(d.code,{children:"HTTPS_KEY_PATH"})," implica o caminho para a sua chave HTTPS."]}),"\n",(0,o.jsx)(d.h4,{id:"using-a-https-proxy",children:"Usando um proxy HTTPS"}),"\n",(0,o.jsx)(d.p,{children:"Outra pr\xe1tica comum \xe9 ter um proxy HTTPS na frente do Node (Ex.: Nginx)."}),"\n",(0,o.jsxs)(d.p,{children:["Nesse caso, voc\xea provavelmente desejar\xe1 definir ",(0,o.jsx)(d.code,{children:"TRUST_PROXY_HEADER"})," como ",(0,o.jsx)(d.code,{children:"true"}),", o que indica se os campos de cabe\xe7alho do proxy devem ser confi\xe1veis. Logto passar\xe1 o valor para as ",(0,o.jsx)(d.a,{href:"https://github.com/koajs/koa/blob/master/docs/api/index.md#settings",children:"configura\xe7\xf5es do aplicativo Koa"}),"."]}),"\n",(0,o.jsxs)(d.p,{children:["Veja ",(0,o.jsx)(d.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies",children:"Confiando em proxies de descarregamento TLS"})," para saber quando configurar este campo."]}),"\n",(0,o.jsx)(d.h2,{id:"database-configs",children:"Configura\xe7\xf5es do banco de dados"}),"\n",(0,o.jsxs)(d.p,{children:["Gerenciar muitas vari\xe1veis de ambiente n\xe3o \xe9 eficiente e flex\xedvel, ent\xe3o a maioria de nossas configura\xe7\xf5es gerais s\xe3o armazenadas na tabela do banco de dados ",(0,o.jsx)(d.code,{children:"logto_configs"}),"."]}),"\n",(0,o.jsx)(d.p,{children:"A tabela \xe9 um armazenamento simples de chave-valor, e a chave \xe9 enumer\xe1vel como segue:"}),"\n",(0,o.jsxs)(d.table,{children:[(0,o.jsx)(d.thead,{children:(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.th,{children:"Key"}),(0,o.jsx)(d.th,{children:"Tipo"}),(0,o.jsx)(d.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(d.tbody,{children:[(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"oidc.cookieKeys"}),(0,o.jsx)(d.td,{children:(0,o.jsx)("code",{children:"string[]"})}),(0,o.jsxs)(d.td,{children:["O array de strings das ",(0,o.jsx)(d.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys",children:"chaves de assinatura de cookies"}),"."]})]}),(0,o.jsxs)(d.tr,{children:[(0,o.jsx)(d.td,{children:"oidc.privateKeys"}),(0,o.jsx)(d.td,{children:(0,o.jsx)("code",{children:"string[]"})}),(0,o.jsxs)(d.td,{children:["O array de strings do conte\xfado da chave privada para ",(0,o.jsx)(d.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing",children:"assinatura de JWT OIDC"}),"."]})]})]})]}),"\n",(0,o.jsx)(d.h3,{id:"supported-private-key-types",children:"Tipos de chave privada suportados"}),"\n",(0,o.jsxs)(d.ul,{children:["\n",(0,o.jsx)(d.li,{children:"EC (curvas P-256, secp256k1, P-384 e P-521)"}),"\n",(0,o.jsx)(d.li,{children:"RSA"}),"\n",(0,o.jsx)(d.li,{children:"OKP (subtipos Ed25519, Ed448, X25519, X448)"}),"\n"]})]})}function h(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,o.jsx)(d,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},79621:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>c});var n=s(58101);const o={},i=n.createContext(o);function r(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);