"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99087],{86480:(o,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"logto-oss/troubleshooting-oss","title":"Solu\xe7\xe3o de Problemas para OSS","description":"Meu navegador n\xe3o consegue carregar o Admin Console (mostrando erro Crypto.subtle is unavailable...) \\\\","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/troubleshooting-oss.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/troubleshooting-oss","permalink":"/pt-BR/logto-oss/troubleshooting-oss","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/troubleshooting-oss.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_label":"Solu\xe7\xe3o de Problemas","sidebar_position":9},"sidebar":"docsSidebar","previous":{"title":"Atualizando","permalink":"/pt-BR/logto-oss/upgrading-oss-version"},"next":{"title":"Contribui\xe7\xe3o","permalink":"/pt-BR/logto-oss/contribution"}}');var n=r(25105),i=r(79621);const a={sidebar_label:"Solu\xe7\xe3o de Problemas",sidebar_position:9},d="Solu\xe7\xe3o de Problemas para OSS",t={},l=[{value:"Meu navegador n\xe3o consegue carregar o Admin Console (mostrando erro <code>Crypto.subtle is unavailable...</code>)",id:"my-browser-cannot-load-admin-console-showing-error-cryptosubtle-is-unavailable",level:3},{value:"Estou usando um dom\xednio personalizado, mas meu navegador n\xe3o consegue carregar o Admin Console (mostrando erro <code>&quot;code&quot;: &quot;oidc.invalid_redirect_uri&quot;</code>)",id:"im-using-a-custom-domain-but-my-browser-cannot-load-admin-console-showing-error-code-oidcinvalid_redirect_uri",level:3},{value:"Estou usando um proxy HTTPS (por exemplo, Nginx) na frente do Logto, mas falhei no login (mostrando erro <code>TypeError: Failed to fetch</code>)",id:"im-using-an-https-proxy-eg-nginx-in-front-of-logto-but-i-failed-on-sign-in-showing-error-typeerror-failed-to-fetch",level:3},{value:"Estou enfrentando problemas de CORS.",id:"im-facing-cors-issues",level:3},{value:"O que \xe9 isso novamente? <code>Error: Invalid id token</code>",id:"what-is-this-again-error-invalid-id-token",level:3}];function c(o){const e={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...o.components},{Details:r}=e;return r||function(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"solu\xe7\xe3o-de-problemas-para-oss",children:"Solu\xe7\xe3o de Problemas para OSS"})}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)(e.h3,{id:"my-browser-cannot-load-admin-console-showing-error-cryptosubtle-is-unavailable",children:["Meu navegador n\xe3o consegue carregar o Admin Console (mostrando erro ",(0,n.jsx)(e.code,{children:"Crypto.subtle is unavailable..."}),")"]})}),(0,n.jsxs)(e.p,{children:["O Admin Console usa a ",(0,n.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",children:"Web Crypto API"}),", que requer ",(0,n.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts",children:"contextos seguros"}),", ou seja, HTTPS ou HTTP com ",(0,n.jsx)(e.code,{children:"localhost"}),"."]}),(0,n.jsx)(e.p,{children:"Se voc\xea usar HTTP com um endere\xe7o IP ou dom\xednio personalizado, o navegador n\xe3o conseguir\xe1 carregar o Admin Console."})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)(e.h3,{id:"im-using-a-custom-domain-but-my-browser-cannot-load-admin-console-showing-error-code-oidcinvalid_redirect_uri",children:["Estou usando um dom\xednio personalizado, mas meu navegador n\xe3o consegue carregar o Admin Console (mostrando erro ",(0,n.jsx)(e.code,{children:'"code": "oidc.invalid_redirect_uri"'}),")"]})}),(0,n.jsxs)(e.p,{children:["Se voc\xea estiver usando um dom\xednio personalizado em vez de ",(0,n.jsx)(e.code,{children:"localhost"}),", \xe9 necess\xe1rio definir a vari\xe1vel de ambiente ",(0,n.jsx)(e.code,{children:"ENDPOINT"})," para a URL do Logto. Isso se deve ao requisito rigoroso de URI de Redirecionamento no OIDC. Veja ",(0,n.jsx)(e.a,{href:"/concepts/core-service/configuration/",children:"Configura\xe7\xe3o"})," para mais detalhes."]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)(e.h3,{id:"im-using-an-https-proxy-eg-nginx-in-front-of-logto-but-i-failed-on-sign-in-showing-error-typeerror-failed-to-fetch",children:["Estou usando um proxy HTTPS (por exemplo, Nginx) na frente do Logto, mas falhei no login (mostrando erro ",(0,n.jsx)(e.code,{children:"TypeError: Failed to fetch"}),")"]})}),(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Primeiro, certifique-se de ter definido a vari\xe1vel de ambiente do node ",(0,n.jsx)(e.code,{children:"TRUST_PROXY_HEADER"})," como ",(0,n.jsx)(e.code,{children:"true"}),". Veja ",(0,n.jsx)(e.a,{href:"/concepts/core-service/configuration/#using-a-https-proxy",children:"Configura\xe7\xe3o"})," para mais detalhes."]}),"\n",(0,n.jsxs)(e.li,{children:["Al\xe9m disso, voc\xea precisa definir o cabe\xe7alho ",(0,n.jsx)(e.code,{children:"X-Forwarded-Proto"})," como ",(0,n.jsx)(e.code,{children:"https"})," na configura\xe7\xe3o do seu proxy. Veja ",(0,n.jsx)(e.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies",children:"Confiando em proxies de descarregamento TLS"})," para mais detalhes."]}),"\n"]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(e.h3,{id:"im-facing-cors-issues",children:"Estou enfrentando problemas de CORS."})}),(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Se ",(0,n.jsx)(e.code,{children:"ADMIN_ENDPOINT"})," n\xe3o for especificado, ",(0,n.jsx)(e.code,{children:"localhost:[admin-port]"})," ser\xe1 permitido para realizar Cross-Origin Resource Sharing (CORS) no Logto."]}),"\n",(0,n.jsxs)(e.li,{children:["Se ",(0,n.jsx)(e.code,{children:"ADMIN_ENDPOINT"})," for especificado, apenas solicita\xe7\xf5es da origem de ",(0,n.jsx)(e.code,{children:"ADMIN_ENDPOINT"})," ser\xe3o permitidas."]}),"\n"]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:(0,n.jsxs)(e.h3,{id:"what-is-this-again-error-invalid-id-token",children:["O que \xe9 isso novamente? ",(0,n.jsx)(e.code,{children:"Error: Invalid id token"})]})}),(0,n.jsx)(e.p,{children:"Se voc\xea n\xe3o est\xe1 bagun\xe7ando seus tokens, na maioria dos casos isso \xe9 causado por uma discrep\xe2ncia entre o hor\xe1rio do seu servidor e o hor\xe1rio do cliente. Sincronize o hor\xe1rio em ambos, servidor e cliente, e tente novamente."})]})]})}function u(o={}){const{wrapper:e}={...(0,i.R)(),...o.components};return e?(0,n.jsx)(e,{...o,children:(0,n.jsx)(c,{...o})}):c(o)}},79621:(o,e,r)=>{r.d(e,{R:()=>a,x:()=>d});var s=r(58101);const n={},i=s.createContext(n);function a(o){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function d(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(n):o.components||n:a(o.components),s.createElement(i.Provider,{value:e},o.children)}}}]);