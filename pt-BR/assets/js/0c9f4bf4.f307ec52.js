"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51589],{57317:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"logto-oss/central-cache","title":"Cache central","description":"Logto suporta o uso do Redis\xae como um cache central para dados bem conhecidos. Ao usar um cache central, o Logto pode acelerar significativamente a experi\xeancia do usu\xe1rio final, reduzindo o n\xfamero de consultas ao banco de dados necess\xe1rias para gerar uma resposta.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/central-cache.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/central-cache","permalink":"/pt-BR/logto-oss/central-cache","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/central-cache.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Traduzir CLI","permalink":"/pt-BR/logto-oss/translate-cli"},"next":{"title":"Provedor de armazenamento de arquivos","permalink":"/pt-BR/logto-oss/file-storage-provider"}}');var s=a(25105),r=a(79621);const c={sidebar_position:5},i="Cache central",t={},d=[{value:"Configurar a conex\xe3o",id:"configure-the-connection",level:2},{value:"Verificar se o cache est\xe1 funcionando",id:"check-if-the-cache-is-working",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"cache-central",children:"Cache central"})}),"\n",(0,s.jsxs)(o.p,{children:["Logto suporta o uso do Redis\xae",(0,s.jsx)(o.sup,{children:(0,s.jsx)(o.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," como um cache central para dados bem conhecidos. Ao usar um cache central, o Logto pode acelerar significativamente a experi\xeancia do usu\xe1rio final, reduzindo o n\xfamero de consultas ao banco de dados necess\xe1rias para gerar uma resposta."]}),"\n",(0,s.jsx)(o.p,{children:"Normalmente, o cache pode ser tornado p\xfablico, pois \xe9 projetado apenas para dados bem conhecidos. Atualmente, o Logto n\xe3o armazena nenhum dado que exija autentica\xe7\xe3o ou autoriza\xe7\xe3o."}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsx)(o.p,{children:"Para garantir as melhores pr\xe1ticas de seguran\xe7a, ainda aconselhamos limitar o acesso ao cache."})}),"\n",(0,s.jsx)(o.h2,{id:"configure-the-connection",children:"Configurar a conex\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["Para habilitar o cache, voc\xea precisar\xe1 de uma inst\xe2ncia do Redis 6.0 que esteja em funcionamento. Para que o Logto se conecte e use o cache, basta definir a vari\xe1vel de ambiente ",(0,s.jsx)(o.code,{children:"REDIS_URL"})," para a string de conex\xe3o do Redis, que deve come\xe7ar com o ",(0,s.jsx)(o.a,{href:"https://www.iana.org/assignments/uri-schemes/prov/redis",children:'protocolo "redis"'})," (",(0,s.jsx)(o.code,{children:"redis://"}),") para conex\xf5es n\xe3o seguras, ou o ",(0,s.jsx)(o.a,{href:"https://www.iana.org/assignments/uri-schemes/prov/rediss",children:'protocolo "redis"'})," (",(0,s.jsx)(o.code,{children:"redis://"}),") para conex\xe3o via TLS."]}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"REDIS_URL=redis://your-redis-username:your-password@your.redis.url.com:6380\n"})}),"\n",(0,s.jsx)(o.p,{children:'Observe que a maioria das partes da string de conex\xe3o pode ser omitida, como mostrado no exemplo abaixo, que comp\xf5e uma string de conex\xe3o sem o nome de usu\xe1rio e porta, usando o protocolo "redis":'}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"REDIS_URL=redis://:your-password@your.redis.url.com\n"})}),"\n",(0,s.jsx)(o.p,{children:"Se a senha contiver caracteres especiais, ela precisa ser codificada em URI:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:'# Se a senha for "foo="\nREDIS_URL=redis://:foo%3D@your.redis.url.com\n'})}),"\n",(0,s.jsx)(o.p,{children:"Nos casos em que todos os valores padr\xe3o est\xe3o em uso, voc\xea pode definir a vari\xe1vel para um valor verdadeiro para conveni\xeancia:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:'REDIS_URL=1 # ou "true", "yes"\n'})}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["A string ",(0,s.jsx)(o.a,{href:"https://stackexchange.github.io/StackExchange.Redis/Configuration.html",children:"StackExchange.Redis"})," n\xe3o \xe9 suportada."]})}),"\n",(0,s.jsx)(o.h2,{id:"check-if-the-cache-is-working",children:"Verificar se o cache est\xe1 funcionando"}),"\n",(0,s.jsx)(o.p,{children:"Para verificar se o cache est\xe1 devidamente conectado, voc\xea deve ver a seguinte mensagem exibida quando o Logto iniciar:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"[CACHE] Connected to Redis\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Al\xe9m disso, quando a solicita\xe7\xe3o atingir o cache (por exemplo, acessando ",(0,s.jsx)(o.code,{children:"GET /api/.well-known/phrases"})," v\xe1rias vezes), a seguinte mensagem aparecer\xe1 no console:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"[CACHE] Well-known cache hit for ...\n"})}),"\n","\n",(0,s.jsxs)(o.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(o.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(o.p,{children:["Redis \xe9 uma marca registrada da Redis Ltd. Quaisquer direitos sobre ela s\xe3o reservados \xe0 Redis Ltd. Qualquer uso por Silverhand \xe9 apenas para fins de refer\xeancia e n\xe3o indica qualquer patroc\xednio, endosso ou afilia\xe7\xe3o entre Redis e Silverhand. ",(0,s.jsx)(o.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},79621:(e,o,a)=>{a.d(o,{R:()=>c,x:()=>i});var n=a(58101);const s={},r=n.createContext(s);function c(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);