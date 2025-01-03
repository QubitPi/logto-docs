"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[93137],{26933:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"customization/bring-your-ui/upload-custom-ui-assets-using-cli","title":"Cargar activos de UI personalizados usando CLI","description":"Despu\xe9s de desarrollar tu interfaz de usuario de inicio de sesi\xf3n personalizada, puedes desplegarla en Logto Cloud para servir a los usuarios de tu inquilino. Como ya hemos introducido en la documentaci\xf3n \\"Bring your UI\\", puedes lograr esto subiendo los activos de UI comprimidos en Logto Console.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/customization/bring-your-ui/upload-custom-ui-assets-using-cli.mdx","sourceDirName":"customization/bring-your-ui","slug":"/customization/bring-your-ui/upload-custom-ui-assets-using-cli","permalink":"/es/customization/bring-your-ui/upload-custom-ui-assets-using-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/customization/bring-your-ui/upload-custom-ui-assets-using-cli.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Depura y prueba tu UI personalizada localmente","permalink":"/es/customization/bring-your-ui/debug-and-test-your-custom-ui-locally"},"next":{"title":"Idiomas localizados","permalink":"/es/customization/localized-languages"}}');var s=o(25105),a=o(79621);const t={sidebar_position:2},r="Cargar activos de UI personalizados usando CLI",d={},c=[{value:"Instrucciones",id:"instructions",level:2},{value:"Requisitos previos",id:"prerequisites",level:3},{value:"Opciones del comando",id:"command-options",level:3},{value:"Ejecutar el comando",id:"run-the-command",level:3},{value:"Variables de entorno compatibles",id:"supported-environment-variables",level:3},{value:"Usar variables de entorno",id:"use-environment-variables",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cargar-activos-de-ui-personalizados-usando-cli",children:"Cargar activos de UI personalizados usando CLI"})}),"\n",(0,s.jsxs)(n.p,{children:['Despu\xe9s de desarrollar tu interfaz de usuario de inicio de sesi\xf3n personalizada, puedes desplegarla en Logto Cloud para servir a los usuarios de tu inquilino. Como ya hemos introducido en la documentaci\xf3n "',(0,s.jsx)(n.a,{href:"/customization/bring-your-ui/",children:"Bring your UI"}),'", puedes lograr esto subiendo los activos de UI comprimidos en Logto Console.']}),"\n",(0,s.jsx)(n.p,{children:"Aqu\xed proporcionamos otra opci\xf3n para desplegar tus activos de UI en Cloud usando el comando CLI, lo cual ser\xe1 \xfatil cuando desees integrar el proceso de despliegue en un script de NPM o en una canalizaci\xf3n de CI/CD."}),"\n",(0,s.jsx)(n.h2,{id:"instructions",children:"Instrucciones"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Suponiendo que tienes tus activos de UI de inicio de sesi\xf3n personalizados construidos en el directorio ",(0,s.jsx)(n.code,{children:"/path/to/your/custom/ui/dist"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"El comando de despliegue comprimir\xe1 autom\xe1ticamente tus activos de UI, los subir\xe1 a Logto Cloud y establecer\xe1 la UI personalizada como la experiencia de inicio de sesi\xf3n para los usuarios de tu inquilino."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Requisitos previos"}),"\n",(0,s.jsxs)(n.p,{children:["Dado que este comando interact\xfaa con el Management API de Logto, se requiere una aplicaci\xf3n m\xe1quina a m\xe1quina para autenticar la solicitud. Consulta ",(0,s.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/",children:"esta documentaci\xf3n"})," para aprender qu\xe9 es el Management API de Logto y c\xf3mo crear una aplicaci\xf3n m\xe1quina a m\xe1quina con los permisos requeridos."]}),"\n",(0,s.jsx)(n.h3,{id:"command-options",children:"Opciones del comando"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--help                                 Mostrar ayuda\n--version                              Imprimir versi\xf3n de CLI\n--auth                                 Credenciales de autenticaci\xf3n de tu aplicaci\xf3n M2M de Logto. Ej.: <app-id>:<app-secret>\n--endpoint                             URI del endpoint de Logto que apunta a tu instancia de Logto Cloud. Ej.: https://<tenant-id>.logto.app/\n--path, --experience-path              La ruta de la carpeta local de tus activos de experiencia de inicio de sesi\xf3n personalizados.\n--resource, --management-api-resource  Indicador de recurso del Management API de Logto. Requerido si se usa un dominio personalizado.\n--verbose                              Mostrar salida detallada. [default: false]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"run-the-command",children:"Ejecutar el comando"}),"\n",(0,s.jsxs)(n.p,{children:["Suponiendo que tu ID de aplicaci\xf3n es ",(0,s.jsx)(n.code,{children:"foo"}),", el secreto de la aplicaci\xf3n es ",(0,s.jsx)(n.code,{children:"bar"}),", y tu ID de inquilino es ",(0,s.jsx)(n.code,{children:"baz"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --auth foo:bar --endpoint https://baz.logto.app --experience-path /path/to/your/custom/ui/dist\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Si est\xe1s usando un dominio personalizado para tu endpoint de Logto, se debe especificar una opci\xf3n adicional ",(0,s.jsx)(n.code,{children:"--management-api-resource"})," (o ",(0,s.jsx)(n.code,{children:"--resource"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Dado que el recurso del Management API de Logto siempre est\xe1 fijado a ",(0,s.jsx)(n.code,{children:"https://<tenant-id>.logto.app/api"}),". Puedes ejecutar el comando de la siguiente manera:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --resource https://baz.logto.app/api --auth foo:bar --endpoint https://your.custom.domain --experience-path /path/to/your/custom/ui/dist\n"})}),"\n",(0,s.jsx)(n.p,{children:"Nota:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Esta opci\xf3n puede omitirse cuando se usa el dominio predeterminado de Logto, ya que el CLI puede inferir el recurso autom\xe1ticamente."}),"\n",(0,s.jsx)(n.li,{children:"Usar ya sea un dominio personalizado o el dominio predeterminado de Logto como el endpoint producir\xe1 resultados id\xe9nticos."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternativamente, si tienes un zip existente y prefieres usarlo directamente, puedes especificar la opci\xf3n ",(0,s.jsx)(n.code,{children:"--zip-path"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --auth foo:bar --endpoint https://baz.logto.app --zip-path /path/to/your/custom/ui/dist.zip\n"})}),"\n",(0,s.jsx)(n.h3,{id:"supported-environment-variables",children:"Variables de entorno compatibles"}),"\n",(0,s.jsx)(n.p,{children:"El comando de despliegue tambi\xe9n admite variables de entorno y las mapear\xe1 autom\xe1ticamente a las opciones correspondientes."}),"\n",(0,s.jsxs)(n.p,{children:["Todas las variables de entorno compatibles se enumeran a continuaci\xf3n, con el prefijo ",(0,s.jsx)(n.code,{children:"LOGTO_"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable de entorno"}),(0,s.jsx)(n.th,{children:"Opci\xf3n de CLI"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_AUTH"}),(0,s.jsx)(n.td,{children:"--auth"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_ENDPOINT"}),(0,s.jsx)(n.td,{children:"--endpoint"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_EXPERIENCE_PATH"}),(0,s.jsx)(n.td,{children:"--experience-path"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_PATH"}),(0,s.jsx)(n.td,{children:"--path"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_MANAGEMENT_API_RESOURCE"}),(0,s.jsx)(n.td,{children:"--management-api-resource"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_RESOURCE"}),(0,s.jsx)(n.td,{children:"--resource"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"LOGTO_ZIP_PATH"}),(0,s.jsx)(n.td,{children:"--zip-path"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"use-environment-variables",children:"Usar variables de entorno"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Puedes crear un archivo ",(0,s.jsx)(n.code,{children:".env"})," en el directorio ra\xedz del CLI, o en cualquier directorio padre donde se encuentre el CLI."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"LOGTO_AUTH=foo:bar\nLOGTO_ENDPOINT=https://your.custom.domain\nLOGTO_EXPERIENCE_PATH=/path/to/your/custom/ui/dist\nLOGTO_RESOURCE=https://baz.logto.app/api\n"})}),"\n",(0,s.jsx)(n.p,{children:"Luego ejecuta el comando sin especificar las opciones."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Alternativamente, especifica estas variables de entorno directamente al ejecutar el comando."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"LOGTO_AUTH=foo:bar LOGTO_ENDPOINT=https://your.custom.domain LOGTO_EXPERIENCE_PATH=/path/to/your/custom/ui/dist LOGTO_RESOURCE=https://baz.logto.app/api npx @logto/tunnel deploy\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},79621:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>r});var i=o(58101);const s={},a=i.createContext(s);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);