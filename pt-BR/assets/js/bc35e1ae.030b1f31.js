"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[94610],{25673:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"integrations/email/smtp/README","title":"Configurar verifica\xe7\xe3o de email com SMTP","description":"O conector oficial do Logto para SMTP.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/email/smtp/README.mdx","sourceDirName":"integrations/email/smtp","slug":"/integrations/smtp","permalink":"/pt-BR/integrations/smtp","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/email/smtp/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/smtp","sidebar_label":"SMTP","sidebar_custom_props":{"description":"O SMTP \xe9 um protocolo de comunica\xe7\xe3o padr\xe3o da internet para transmiss\xe3o de correio eletr\xf4nico."}},"sidebar":"integrationsSidebar","previous":{"title":"SendGrid Email","permalink":"/pt-BR/integrations/sendgrid-email"},"next":{"title":"Aliyun Short Message","permalink":"/pt-BR/integrations/aliyun-sms"}}');var n=r(25105),i=r(79621),t=r(99566);const a={slug:"/integrations/smtp",sidebar_label:"SMTP",sidebar_custom_props:{description:"O SMTP \xe9 um protocolo de comunica\xe7\xe3o padr\xe3o da internet para transmiss\xe3o de correio eletr\xf4nico."}},d="Configurar verifica\xe7\xe3o de email com SMTP",c={},l=[...t.RM,{value:"Introdu\xe7\xe3o",id:"get-started",level:2},{value:"Configurar conector SMTP",id:"set-up-smtp-connector",level:2},{value:"Configura\xe7\xe3o para uso do Gmail",id:"set-up-for-gmail-use",level:3},{value:"Integra\xe7\xe3o com SendGrid SMTP API",id:"integrate-with-sendgrid-smtp-api",level:3},{value:"Configura\xe7\xe3o com conta de correio direto Aliyun",id:"configure-with-aliyun-direct-mail-account",level:3},{value:"Testar conector SMTP",id:"test-smtp-connector",level:3},{value:"Tipos de configura\xe7\xe3o",id:"config-types",level:3}];function m(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"configurar-verifica\xe7\xe3o-de-email-com-smtp",children:"Configurar verifica\xe7\xe3o de email com SMTP"})}),"\n",(0,n.jsx)(o.p,{children:"O conector oficial do Logto para SMTP."}),"\n",(0,n.jsx)(t.Ay,{}),"\n",(0,n.jsx)(o.h2,{id:"get-started",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"O SMTP (Simple Mail Transfer Protocol) \xe9 um protocolo de comunica\xe7\xe3o padr\xe3o da internet para transmiss\xe3o de correio eletr\xf4nico. Servidores de correio e outros agentes de transfer\xeancia de mensagens usam SMTP para enviar e receber mensagens."}),"\n",(0,n.jsx)(o.h2,{id:"set-up-smtp-connector",children:"Configurar conector SMTP"}),"\n",(0,n.jsx)(o.p,{children:"SMTP \xe9 um protocolo de transmiss\xe3o que n\xe3o \xe9 exclusivo de alguns provedores de servi\xe7o de email espec\xedficos, mas pode funcionar com todos os provedores."}),"\n",(0,n.jsx)(o.p,{children:"Estamos agora oferecendo guias sobre como usar o conector SMTP para enviar emails seguindo os provedores para sua melhor compreens\xe3o:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Gmail"})," \xe9 o fornecedor de servi\xe7o de email mais popular em todo o mundo."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.em,{children:"Aliyun direct mail"})," e ",(0,n.jsx)(o.em,{children:"SendGrid mail"}),". Alguns de voc\xeas podem estar familiarizados com esses dois provedores de servi\xe7o de email porque a equipe do Logto forneceu conectores correspondentes; voc\xea provavelmente ter\xe1 uma ideia geral sobre eles."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Esperamos que voc\xea consiga descobrir as configura\xe7\xf5es de todos os outros fornecedores de email com os exemplos a seguir ","\ud83d\ude80"]}),"\n",(0,n.jsx)(o.h3,{id:"set-up-for-gmail-use",children:"Configura\xe7\xe3o para uso do Gmail"}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea pode obter uma nova conta do Gmail em ",(0,n.jsx)(o.a,{href:"https://mail.google.com/",children:"Gmail"}),", ou pode usar uma conta existente se j\xe1 tiver uma."]}),"\n",(0,n.jsxs)(o.p,{children:["Um ",(0,n.jsx)(o.a,{href:"https://support.google.com/a/answer/176600",children:"post oficial do Gmail"})," mostra como determinar os valores das propriedades necess\xe1rias para operar o Gmail via um conector SMTP."]}),"\n",(0,n.jsx)(o.h3,{id:"integrate-with-sendgrid-smtp-api",children:"Integra\xe7\xe3o com SendGrid SMTP API"}),"\n",(0,n.jsxs)(o.p,{children:["Inicialmente, assumimos que voc\xea j\xe1 tem uma conta SendGrid. Se n\xe3o, crie uma nova conta no ",(0,n.jsx)(o.a,{href:"https://app.sendgrid.com/",children:"site do SendGrid"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea pode encontrar um guia passo a passo sobre ",(0,n.jsx)(o.a,{href:"https://docs.sendgrid.com/for-developers/sending-email/integrating-with-the-smtp-api",children:'"Integrando com a API SMTP"'}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Os desenvolvedores podem acessar os detalhes do ",(0,n.jsx)(o.em,{children:"remetente"})," em ",(0,n.jsx)(o.a,{href:"https://mc.sendgrid.com/senders",children:'"Gerenciamento de Remetente"'}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"configure-with-aliyun-direct-mail-account",children:"Configura\xe7\xe3o com conta de correio direto Aliyun"}),"\n",(0,n.jsxs)(o.p,{children:["Fa\xe7a login no ",(0,n.jsx)(o.a,{href:"https://cn.aliyun.com/",children:"site da Aliyun"}),". Registre uma nova conta se voc\xea n\xe3o tiver uma."]}),"\n",(0,n.jsxs)(o.p,{children:["Siga o ",(0,n.jsx)(o.a,{href:"https://www.alibabacloud.com/help/en/directmail/latest/send-emails-using-smtp",children:"guia de envio de emails usando SMTP"})," e conclua essas 'tarefas' para obter as configura\xe7\xf5es e informa\xe7\xf5es necess\xe1rias."]}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea pode ir para a ",(0,n.jsx)(o.a,{href:"https://www.alibabacloud.com/help/en/directmail/latest/smtp-service-address",children:"p\xe1gina de endere\xe7o do servi\xe7o SMTP"})," para escolher um host de endere\xe7o de servi\xe7o SMTP e n\xfamero de porta adequados."]}),"\n",(0,n.jsxs)(o.p,{children:['Para verificar "Endere\xe7os de Remetente", voc\xea pode encontrar a entrada no painel de navega\xe7\xe3o \xe0 esquerda no ',(0,n.jsx)(o.a,{href:"https://dm.console.aliyun.com/",children:"console DirectMail"}),". Voc\xea deve ver ",(0,n.jsx)(o.code,{children:"Endere\xe7o do remetente"})," e ",(0,n.jsx)(o.code,{children:"Senha SMTP"})," aqui."]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["\u2139\ufe0f ",(0,n.jsx)(o.strong,{children:"Nota"})]}),"\n",(0,n.jsxs)(o.p,{children:['Apenas um modelo de exemplo \xe9 fornecido nos casos anteriores para simplificar as coisas. Voc\xea deve adicionar mais modelos para outros casos de uso.\nVoc\xea deve alterar os valores envolvidos com "<" e ">" de acordo com as configura\xe7\xf5es de sua conta do Gmail, SendGrid ou Aliyun e optar por manter outros campos sem "<" e ">".\nAdicione ',(0,n.jsx)(o.code,{children:"{{code}}"})," como um espa\xe7o reservado no conte\xfado dos modelos para mostrar o c\xf3digo de verifica\xe7\xe3o aleat\xf3rio ao enviar emails."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"test-smtp-connector",children:"Testar conector SMTP"}),"\n",(0,n.jsx)(o.p,{children:'Voc\xea pode digitar um endere\xe7o de email e clicar em "Enviar" para ver se as configura\xe7\xf5es funcionam antes de "Salvar e Concluir".'}),"\n",(0,n.jsxs)(o.p,{children:["\xc9 isso. N\xe3o se esque\xe7a de ",(0,n.jsx)(o.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in",children:"Habilitar conector na experi\xeancia de login"}),"."]}),"\n",(0,n.jsx)(o.h3,{id:"config-types",children:"Tipos de configura\xe7\xe3o"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Nome"}),(0,n.jsx)(o.th,{children:"Tipo"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"host"}),(0,n.jsx)(o.td,{children:"string"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"port"}),(0,n.jsx)(o.td,{children:"string"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"fromEmail"}),(0,n.jsx)(o.td,{children:"string"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"templates"}),(0,n.jsx)(o.td,{children:"Template[]"})]})]})]}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Propriedades do Template"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{children:"Valores Enum"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"subject"}),(0,n.jsx)(o.td,{children:"string"}),(0,n.jsx)(o.td,{children:"N/A"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"content"}),(0,n.jsx)(o.td,{children:"string"}),(0,n.jsx)(o.td,{children:"N/A"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"usageType"}),(0,n.jsx)(o.td,{children:"enum string"}),(0,n.jsx)(o.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"contentType"}),(0,n.jsx)(o.td,{children:"enum string"}),(0,n.jsx)(o.td,{children:"'text/plain' | 'text/html'"})]})]})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Op\xe7\xf5es de Autentica\xe7\xe3o de Nome de Usu\xe1rio e Senha"})}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Nome"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{children:"Valores Enum"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"user"}),(0,n.jsx)(o.td,{children:"string"}),(0,n.jsx)(o.td,{children:"N/A"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"pass"}),(0,n.jsx)(o.td,{children:"string"}),(0,n.jsx)(o.td,{children:"N/A"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"type"}),(0,n.jsx)(o.td,{children:"enum string (OPCIONAL)"}),(0,n.jsx)(o.td,{children:"'login'"})]})]})]}),"\n",(0,n.jsxs)(o.p,{children:["Voc\xea tamb\xe9m pode configurar ",(0,n.jsx)(o.a,{href:"https://nodemailer.com/smtp/oauth2/",children:"Op\xe7\xf5es de Autentica\xe7\xe3o OAuth2"})," e outras configura\xe7\xf5es avan\xe7adas. Veja ",(0,n.jsx)(o.a,{href:"https://nodemailer.com/smtp/",children:"aqui"})," para mais detalhes."]}),"\n",(0,n.jsx)(o.p,{children:"Demos um exemplo de configura\xe7\xe3o com todos os par\xe2metros configur\xe1veis na caixa de texto para ajud\xe1-lo a configurar sua pr\xf3pria configura\xe7\xe3o. (Voc\xea \xe9 respons\xe1vel pela configura\xe7\xe3o, alguns valores s\xe3o para fins de demonstra\xe7\xe3o e podem n\xe3o se adequar ao seu caso de uso.)"})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},99566:(e,o,r)=>{r.d(o,{Ay:()=>a,RM:()=>i});var s=r(25105),n=r(79621);const i=[];function t(e){const o={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,s.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function a(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},79621:(e,o,r)=>{r.d(o,{R:()=>t,x:()=>a});var s=r(58101);const n={},i=s.createContext(n);function t(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);