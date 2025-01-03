"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13544],{45637:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"developers/webhooks/configure-webhooks","title":"Configurar Webhooks","description":"Configure webhooks no Logto Console para alcan\xe7ar integra\xe7\xe3o perfeita e receber notifica\xe7\xf5es de eventos em tempo real para o seu aplicativo. Desfrute de configura\xe7\xe3o f\xe1cil, seguran\xe7a aprimorada e op\xe7\xf5es convenientes de monitoramento de sa\xfade.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/webhooks/configure-webhooks.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/configure-webhooks","permalink":"/pt-BR/developers/webhooks/configure-webhooks","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/developers/webhooks/configure-webhooks.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"configure-webhooks","title":"Configurar Webhooks","sidebar_label":"Configurar Webhooks","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Webhooks","permalink":"/pt-BR/developers/webhooks/"},"next":{"title":"Eventos de Webhooks","permalink":"/pt-BR/developers/webhooks/webhooks-events"}}');var r=a(25105),n=a(79621);const i={id:"configure-webhooks",title:"Configurar Webhooks",sidebar_label:"Configurar Webhooks",sidebar_position:2},t="Configurar webhooks",d={},c=[{value:"Criar um webhook",id:"create-a-webhook",level:2},{value:"Proteger webhook",id:"secure-webhook",level:2},{value:"Testar webhook",id:"test-webhook",level:2},{value:"Monitorar status de sa\xfade do Webhook",id:"monitor-webhook-health-status",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{CloudLink:s}=o;return s||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"configurar-webhooks",children:"Configurar webhooks"})}),"\n",(0,r.jsx)(o.p,{children:"Configure webhooks no Logto Console para alcan\xe7ar integra\xe7\xe3o perfeita e receber notifica\xe7\xf5es de eventos em tempo real para o seu aplicativo. Desfrute de configura\xe7\xe3o f\xe1cil, seguran\xe7a aprimorada e op\xe7\xf5es convenientes de monitoramento de sa\xfade."}),"\n",(0,r.jsx)(o.h2,{id:"create-a-webhook",children:"Criar um webhook"}),"\n",(0,r.jsx)(o.p,{children:"Primeiramente, crie um endpoint de webhook que ser\xe1 chamado pelo Logto Agent. Este endpoint deve ser implementado no seu servidor e capaz de receber solicita\xe7\xf5es HTTP."}),"\n",(0,r.jsx)(o.p,{children:"Para criar um novo webhook no Logto Console, siga estas etapas:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Criar webhook"}),": Navegue at\xe9 ",(0,r.jsx)(s,{to:"/webhooks",children:"Console > Webhooks"}),' e clique no bot\xe3o "Criar webhook".']}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nome"}),": Forne\xe7a um nome para o webhook. \xc9 para sua pr\xf3pria refer\xeancia para definir o cen\xe1rio de uso."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Endpoint URL"}),": Insira o ",(0,r.jsx)(o.code,{children:"Endpoint URL"}),", que \xe9 o URL do seu servidor que receber\xe1 as solicita\xe7\xf5es POST do webhook quando o evento ocorrer. Por raz\xf5es de seguran\xe7a, o URL deve ser publicamente acess\xedvel via HTTPS e n\xe3o deve ser um URL de host local."]}),"\n",(0,r.jsxs)(o.admonition,{type:"note",children:[(0,r.jsx)(o.p,{children:'Seu servidor deve responder \xe0s solicita\xe7\xf5es de webhook do Logto com uma resposta HTTP 200 ("OK") logo ap\xf3s receber a solicita\xe7\xe3o para notificar que a solicita\xe7\xe3o foi recebida.'}),(0,r.jsx)(o.p,{children:"Aguardar a conclus\xe3o do processamento da l\xf3gica do evento correspondente do Webhook antes de responder pode causar o tempo limite do Webhook."}),(0,r.jsx)(o.p,{children:"N\xe3o retorne nenhuma resposta al\xe9m de 200 para o webhook do Logto. Se ocorrer um erro ao processar o evento, lide com ele no seu pr\xf3prio servidor."})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Evento"}),": No modal que aparece, selecione os ",(0,r.jsx)(o.a,{href:"/developers/webhooks/webhooks-events",children:"eventos"})," desejados que acionar\xe3o este webhook. Recomenda-se escolher um n\xfamero menor de eventos que atendam aos seus requisitos para evitar sobrecarregar a recep\xe7\xe3o do servidor. Voc\xea pode alterar os eventos selecionados a qualquer momento ap\xf3s criar o webhook."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Criar webhook",src:a(7512).A+"",width:"2530",height:"2084"})}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Desativar / Reativar"}),': Por padr\xe3o, o webhook \xe9 ativado imediatamente ap\xf3s a cria\xe7\xe3o. Se voc\xea quiser suspender o webhook temporariamente, pode desativ\xe1-lo ou reativ\xe1-lo usando o menu "Tr\xeas Pontos" localizado no canto superior direito do cabe\xe7alho ap\xf3s cri\xe1-lo.']}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"secure-webhook",children:"Proteger webhook"}),"\n",(0,r.jsx)(o.p,{children:"Uma vez que seu servidor esteja pronto para receber solicita\xe7\xf5es de webhook, voc\xea pode querer garantir que ele possa lidar com as solicita\xe7\xf5es de forma segura. O Logto gera uma assinatura para cada payload de solicita\xe7\xe3o de webhook, o que permite verificar se a solicita\xe7\xe3o vem do Logto."}),"\n",(0,r.jsx)(o.p,{children:"Ap\xf3s criar um novo webhook, voc\xea tem op\xe7\xf5es para aumentar sua seguran\xe7a:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Chave de assinatura"}),": O Logto gera uma assinatura hash \xfanica, conhecida como Chave de Assinatura, para cada webhook. Voc\xea pode incluir essa chave como um cabe\xe7alho de solicita\xe7\xe3o na implementa\xe7\xe3o do seu endpoint. Verificar a chave de assinatura garante que o payload do webhook se origina do Logto e n\xe3o foi adulterado por fontes n\xe3o autorizadas. Leia ",(0,r.jsx)(o.a,{href:"/developers/webhooks/secure-webhooks/",children:"protegendo seus webhooks"})," para saber mais sobre o c\xf3digo."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Cabe\xe7alho personalizado"}),": Voc\xea tem a op\xe7\xe3o de incluir cabe\xe7alhos personalizados no payload do webhook para fornecer contexto ou metadados adicionais. Este recurso permite adicionar informa\xe7\xf5es relevantes que podem ajudar a processar os dados do webhook de forma eficaz."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Utilizando a Chave de Assinatura e considerando a inclus\xe3o de Cabe\xe7alhos Personalizados, voc\xea pode aumentar a seguran\xe7a dos seus webhooks e garantir a integridade e autenticidade dos payloads recebidos."}),"\n",(0,r.jsx)(o.h2,{id:"test-webhook",children:"Testar webhook"}),"\n",(0,r.jsx)(o.p,{children:'Para testar a conex\xe3o entre o Logto e seus servi\xe7os, basta clicar no bot\xe3o "Enviar payload de teste". O Logto enviar\xe1 ent\xe3o um payload de amostra para cada evento selecionado para o seu Endpoint URL. Essas solicita\xe7\xf5es de teste cont\xeam dados an\xf4nimos e n\xe3o s\xe3o registradas no hist\xf3rico de solicita\xe7\xf5es recentes.'}),"\n",(0,r.jsx)(o.p,{children:"Este teste garante que seu webhook esteja configurado corretamente para receber e processar payloads do Logto. Ele permite validar a integra\xe7\xe3o antes de implantar o webhook em um ambiente ao vivo."}),"\n",(0,r.jsx)(o.h2,{id:"monitor-webhook-health-status",children:"Monitorar status de sa\xfade do Webhook"}),"\n",(0,r.jsx)(o.p,{children:"O Logto fornece ferramentas convenientes para monitorar o status de sa\xfade dos seus webhooks e investigar quaisquer problemas potenciais em detalhes:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Status de sa\xfade"}),"\nA lista de webhooks no Logto exibe o status de sa\xfade de cada webhook, incluindo a taxa de sucesso e o n\xfamero total de solicita\xe7\xf5es feitas nas \xfaltimas 24 horas. Esta informa\xe7\xe3o oferece uma vis\xe3o geral do desempenho do webhook."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Logs de solicita\xe7\xf5es independentes"}),'\nNa se\xe7\xe3o "Solicita\xe7\xf5es Recentes" de cada webhook, voc\xea pode acessar os logs de solicita\xe7\xf5es das \xfaltimas 24 horas. Cada solicita\xe7\xe3o \xe9 registrada individualmente, permitindo que voc\xea visualize os detalhes de cada solicita\xe7\xe3o e investigue quaisquer erros ou anomalias potenciais.']}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Repeti\xe7\xe3o autom\xe1tica"}),"\nNo caso de uma entrega falhada (quando o status da resposta do webhook \xe9 maior ou igual a 500), o Logto tenta automaticamente a entrega novamente at\xe9 tr\xeas vezes. Fique tranquilo, pois m\xfaltiplas tentativas da mesma solicita\xe7\xe3o gerar\xe3o apenas uma \xfanica entrada de log, evitando duplica\xe7\xe3o desnecess\xe1ria."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Aproveitando esses recursos de monitoramento, voc\xea pode acompanhar efetivamente a sa\xfade dos seus webhooks, examinar logs de solicita\xe7\xf5es e garantir a confiabilidade e desempenho das suas integra\xe7\xf5es de webhook."})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},7512:(e,o,a)=>{a.d(o,{A:()=>s});const s=a.p+"assets/images/create-webhook-page-b86c280030fa18c8d6dd2e9697286c73.png"},79621:(e,o,a)=>{a.d(o,{R:()=>i,x:()=>t});var s=a(58101);const r={},n=s.createContext(r);function i(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);