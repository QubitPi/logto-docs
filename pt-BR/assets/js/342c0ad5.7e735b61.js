"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[41715],{76283:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"customization/bring-your-ui/upload-custom-ui-assets-using-cli","title":"Fazer upload de ativos de UI personalizados usando CLI","description":"Ap\xf3s desenvolver sua interface de login personalizada, voc\xea pode implant\xe1-la no Logto Cloud para atender aos usu\xe1rios do seu locat\xe1rio. Como j\xe1 introduzimos na documenta\xe7\xe3o \\"Bring your UI\\", voc\xea pode fazer isso fazendo upload dos ativos de UI compactados no Logto Console.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/customization/bring-your-ui/upload-custom-ui-assets-using-cli.mdx","sourceDirName":"customization/bring-your-ui","slug":"/customization/bring-your-ui/upload-custom-ui-assets-using-cli","permalink":"/pt-BR/customization/bring-your-ui/upload-custom-ui-assets-using-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/customization/bring-your-ui/upload-custom-ui-assets-using-cli.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Depurar e testar sua UI personalizada localmente","permalink":"/pt-BR/customization/bring-your-ui/debug-and-test-your-custom-ui-locally"},"next":{"title":"Idiomas localizados","permalink":"/pt-BR/customization/localized-languages"}}');var s=a(25105),i=a(79621);const t={sidebar_position:2},r="Fazer upload de ativos de UI personalizados usando CLI",d={},c=[{value:"Instru\xe7\xf5es",id:"instructions",level:2},{value:"Pr\xe9-requisitos",id:"prerequisites",level:3},{value:"Op\xe7\xf5es de comando",id:"command-options",level:3},{value:"Executar o comando",id:"run-the-command",level:3},{value:"Vari\xe1veis de ambiente suportadas",id:"supported-environment-variables",level:3},{value:"Usar vari\xe1veis de ambiente",id:"use-environment-variables",level:3}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"fazer-upload-de-ativos-de-ui-personalizados-usando-cli",children:"Fazer upload de ativos de UI personalizados usando CLI"})}),"\n",(0,s.jsxs)(o.p,{children:['Ap\xf3s desenvolver sua interface de login personalizada, voc\xea pode implant\xe1-la no Logto Cloud para atender aos usu\xe1rios do seu locat\xe1rio. Como j\xe1 introduzimos na documenta\xe7\xe3o "',(0,s.jsx)(o.a,{href:"/customization/bring-your-ui/",children:"Bring your UI"}),'", voc\xea pode fazer isso fazendo upload dos ativos de UI compactados no Logto Console.']}),"\n",(0,s.jsx)(o.p,{children:"Aqui, fornecemos outra op\xe7\xe3o para implantar seus ativos de UI na Cloud usando o comando CLI, o que ser\xe1 \xfatil quando voc\xea quiser integrar o processo de implanta\xe7\xe3o em um script NPM ou pipeline CI/CD."}),"\n",(0,s.jsx)(o.h2,{id:"instructions",children:"Instru\xe7\xf5es"}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Assumindo que voc\xea tenha seus ativos de UI de login personalizados constru\xeddos no diret\xf3rio ",(0,s.jsx)(o.code,{children:"/path/to/your/custom/ui/dist"}),"."]})}),"\n",(0,s.jsx)(o.p,{children:"O comando de implanta\xe7\xe3o ir\xe1 compactar automaticamente seus ativos de UI, fazer upload deles para o Logto Cloud e definir a UI personalizada como a experi\xeancia de login para os usu\xe1rios do seu locat\xe1rio."}),"\n",(0,s.jsx)(o.h3,{id:"prerequisites",children:"Pr\xe9-requisitos"}),"\n",(0,s.jsxs)(o.p,{children:["Como este comando interage com o Logto Management API, um aplicativo m\xe1quina para m\xe1quina \xe9 necess\xe1rio para autenticar a solicita\xe7\xe3o. Consulte ",(0,s.jsx)(o.a,{href:"/integrate-logto/interact-with-management-api/",children:"esta documenta\xe7\xe3o"})," para saber o que \xe9 o Logto Management API e como criar um aplicativo m\xe1quina para m\xe1quina com as permiss\xf5es necess\xe1rias."]}),"\n",(0,s.jsx)(o.h3,{id:"command-options",children:"Op\xe7\xf5es de comando"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"--help                                 Mostrar ajuda\n--version                              Imprimir vers\xe3o do CLI\n--auth                                 Credenciais de autentica\xe7\xe3o do seu aplicativo Logto M2M. Ex.: <app-id>:<app-secret>\n--endpoint                             URI do endpoint Logto que aponta para sua inst\xe2ncia Logto Cloud. Ex.: https://<tenant-id>.logto.app/\n--path, --experience-path              O caminho da pasta local dos ativos da sua experi\xeancia de login personalizada.\n--resource, --management-api-resource  Indicador de recurso do Logto Management API. Necess\xe1rio se estiver usando dom\xednio personalizado.\n--verbose                              Mostrar sa\xedda detalhada. [padr\xe3o: false]\n"})}),"\n",(0,s.jsx)(o.h3,{id:"run-the-command",children:"Executar o comando"}),"\n",(0,s.jsxs)(o.p,{children:["Assumindo que seu ID de aplicativo \xe9 ",(0,s.jsx)(o.code,{children:"foo"}),", o segredo do aplicativo \xe9 ",(0,s.jsx)(o.code,{children:"bar"}),", e seu ID de locat\xe1rio \xe9 ",(0,s.jsx)(o.code,{children:"baz"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"npx @logto/tunnel deploy --auth foo:bar --endpoint https://baz.logto.app --experience-path /path/to/your/custom/ui/dist\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Se voc\xea estiver usando um dom\xednio personalizado para seu endpoint Logto, uma op\xe7\xe3o adicional ",(0,s.jsx)(o.code,{children:"--management-api-resource"})," (ou ",(0,s.jsx)(o.code,{children:"--resource"}),") deve ser especificada."]}),"\n",(0,s.jsxs)(o.p,{children:["Dado que o recurso do Logto Management API \xe9 sempre fixo em ",(0,s.jsx)(o.code,{children:"https://<tenant-id>.logto.app/api"}),". Voc\xea pode executar o comando da seguinte forma:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"npx @logto/tunnel deploy --resource https://baz.logto.app/api --auth foo:bar --endpoint https://your.custom.domain --experience-path /path/to/your/custom/ui/dist\n"})}),"\n",(0,s.jsx)(o.p,{children:"Nota:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Esta op\xe7\xe3o pode ser omitida ao usar o dom\xednio padr\xe3o do Logto, pois o CLI pode inferir o recurso automaticamente."}),"\n",(0,s.jsx)(o.li,{children:"Usar tanto o dom\xednio personalizado quanto o dom\xednio padr\xe3o do Logto como endpoint produzir\xe1 resultados id\xeanticos."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Alternativamente, se voc\xea tiver um zip existente e preferir us\xe1-lo diretamente, pode especificar a op\xe7\xe3o ",(0,s.jsx)(o.code,{children:"--zip-path"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"npx @logto/tunnel deploy --auth foo:bar --endpoint https://baz.logto.app --zip-path /path/to/your/custom/ui/dist.zip\n"})}),"\n",(0,s.jsx)(o.h3,{id:"supported-environment-variables",children:"Vari\xe1veis de ambiente suportadas"}),"\n",(0,s.jsx)(o.p,{children:"O comando de implanta\xe7\xe3o tamb\xe9m suporta vari\xe1veis de ambiente e as mapear\xe1 automaticamente para as op\xe7\xf5es correspondentes."}),"\n",(0,s.jsxs)(o.p,{children:["Todas as vari\xe1veis de ambiente suportadas est\xe3o listadas abaixo, prefixadas com ",(0,s.jsx)(o.code,{children:"LOGTO_"}),"."]}),"\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Vari\xe1vel de ambiente"}),(0,s.jsx)(o.th,{children:"Op\xe7\xe3o CLI"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"LOGTO_AUTH"}),(0,s.jsx)(o.td,{children:"--auth"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"LOGTO_ENDPOINT"}),(0,s.jsx)(o.td,{children:"--endpoint"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"LOGTO_EXPERIENCE_PATH"}),(0,s.jsx)(o.td,{children:"--experience-path"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"LOGTO_PATH"}),(0,s.jsx)(o.td,{children:"--path"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"LOGTO_MANAGEMENT_API_RESOURCE"}),(0,s.jsx)(o.td,{children:"--management-api-resource"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"LOGTO_RESOURCE"}),(0,s.jsx)(o.td,{children:"--resource"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"LOGTO_ZIP_PATH"}),(0,s.jsx)(o.td,{children:"--zip-path"})]})]})]}),"\n",(0,s.jsx)(o.h3,{id:"use-environment-variables",children:"Usar vari\xe1veis de ambiente"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Voc\xea pode criar um arquivo ",(0,s.jsx)(o.code,{children:".env"})," no diret\xf3rio raiz do CLI, ou em qualquer diret\xf3rio pai onde o CLI esteja localizado."]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",metastring:'title=".env"',children:"LOGTO_AUTH=foo:bar\nLOGTO_ENDPOINT=https://your.custom.domain\nLOGTO_EXPERIENCE_PATH=/path/to/your/custom/ui/dist\nLOGTO_RESOURCE=https://baz.logto.app/api\n"})}),"\n",(0,s.jsx)(o.p,{children:"Em seguida, execute o comando sem especificar as op\xe7\xf5es."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"npx @logto/tunnel deploy\n"})}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsx)(o.li,{children:"Alternativamente, especifique essas vari\xe1veis de ambiente diretamente ao executar o comando."}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"LOGTO_AUTH=foo:bar LOGTO_ENDPOINT=https://your.custom.domain LOGTO_EXPERIENCE_PATH=/path/to/your/custom/ui/dist LOGTO_RESOURCE=https://baz.logto.app/api npx @logto/tunnel deploy\n"})})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},79621:(e,o,a)=>{a.d(o,{R:()=>t,x:()=>r});var n=a(58101);const s={},i=n.createContext(s);function t(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);