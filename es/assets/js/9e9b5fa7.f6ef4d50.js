"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[96517],{44255:(e,n,s)=>{s.d(n,{Ay:()=>o,RM:()=>a});var i=s(25105),c=s(79621);const a=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,i.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11302:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/sms/tencent-sms/README","title":"Configura la verificaci\xf3n por SMS con Tencent Short Message Service","description":"El conector oficial de Logto para Tencent Short Message Service.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/sms/tencent-sms/README.mdx","sourceDirName":"integrations/sms/tencent-sms","slug":"/integrations/tencent-sms","permalink":"/es/integrations/tencent-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/sms/tencent-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/tencent-sms","sidebar_label":"Tencent Short Message","sidebar_custom_props":{"description":"Tencent proporciona servicios de computaci\xf3n en la nube para negocios en l\xednea.","logoFilename":"tencent.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"SMS Aero","permalink":"/es/integrations/smsaero"},"next":{"title":"Twilio SMS","permalink":"/es/integrations/twilio-sms"}}');var c=s(25105),a=s(79621),r=s(44255);const o={slug:"/integrations/tencent-sms",sidebar_label:"Tencent Short Message",sidebar_custom_props:{description:"Tencent proporciona servicios de computaci\xf3n en la nube para negocios en l\xednea.",logoFilename:"tencent.svg"}},t="Configura la verificaci\xf3n por SMS con Tencent Short Message Service",l={},d=[...r.RM,{value:"Comenzar",id:"get-started",level:2},{value:"Configura un servicio de mensajes cortos en Tencent Cloud",id:"set-up-a-short-message-service-in-tencent-cloud",level:2},{value:"Crea una cuenta de Tencent Cloud",id:"create-an-tencent-cloud-account",level:3},{value:"Habilita y configura Tencent Cloud SMS",id:"enable-and-configure-tencent-cloud-sms",level:3},{value:"Componer el JSON del conector",id:"compose-the-connector-json",level:2},{value:"Probar el conector de SMS de Tencent Cloud",id:"test-tencent-cloud-sms-connector",level:3},{value:"Tipos de configuraci\xf3n",id:"config-types",level:3},{value:"Referencias",id:"references",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"configura-la-verificaci\xf3n-por-sms-con-tencent-short-message-service",children:"Configura la verificaci\xf3n por SMS con Tencent Short Message Service"})}),"\n",(0,c.jsx)(n.p,{children:"El conector oficial de Logto para Tencent Short Message Service."}),"\n",(0,c.jsx)(r.Ay,{}),"\n",(0,c.jsx)(n.h2,{id:"get-started",children:"Comenzar"}),"\n",(0,c.jsx)(n.p,{children:"Tencent Cloud es un proveedor principal de servicios en la nube en Asia, que ofrece varios servicios, incluido el SMS (servicio de mensajes cortos)."}),"\n",(0,c.jsx)(n.p,{children:"El conector de Tencent Short Message Service es una integraci\xf3n oficial de Logto que ayuda a los usuarios finales a registrarse o iniciar sesi\xf3n utilizando c\xf3digos de verificaci\xf3n por SMS."}),"\n",(0,c.jsx)(n.h2,{id:"set-up-a-short-message-service-in-tencent-cloud",children:"Configura un servicio de mensajes cortos en Tencent Cloud"}),"\n",(0,c.jsx)(n.h3,{id:"create-an-tencent-cloud-account",children:"Crea una cuenta de Tencent Cloud"}),"\n",(0,c.jsxs)(n.p,{children:["Ve al ",(0,c.jsx)(n.a,{href:"https://cloud.tencent.com/",children:"sitio web de Tencent Cloud"})," y registra tu cuenta si no tienes una."]}),"\n",(0,c.jsx)(n.h3,{id:"enable-and-configure-tencent-cloud-sms",children:"Habilita y configura Tencent Cloud SMS"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["Inicia sesi\xf3n con tu cuenta en el ",(0,c.jsx)(n.a,{href:"https://cloud.tencent.com/",children:"sitio web de Tencent Cloud"})," y ve a la ",(0,c.jsx)(n.a,{href:"https://cloud.tencent.com/product/sms",children:"p\xe1gina de la consola del servicio SMS"}),"."]}),"\n",(0,c.jsx)(n.li,{children:"Haz clic en el bot\xf3n \u201cFree Trial\u201d (\u514d\u8d39\u8bd5\u7528) en la p\xe1gina del servicio SMS y sigue los pasos de configuraci\xf3n."}),"\n",(0,c.jsx)(n.li,{children:"Acepta los \u201cT\xe9rminos de Activaci\xf3n del Servicio SMS\u201d (\u77ed\u4fe1\u5f00\u901a\u670d\u52a1\u6761\u6b3e) y haz clic en \u201cActivate Service\u201d (\u5f00\u901a\u670d\u52a1) para continuar."}),"\n",(0,c.jsxs)(n.li,{children:["En el \u201c",(0,c.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2",children:"SMS Console Overview"}),"\u201d (\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u6982\u89c8), elige \u201cDomestic Messages\u201d(\u56fd\u5185\u6d88\u606f) o \u201cInternational/Hong Kong, Macao, Taiwan Messages\u201d(\u56fd\u9645/\u6e2f\u6fb3\u53f0\u6d88\u606f) desde la barra lateral seg\xfan tus necesidades."]}),"\n",(0,c.jsxs)(n.li,{children:["A\xf1ade una firma y una plantilla para los mensajes SMS. Nota:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:'Al a\xf1adir una \u201cSignature\u201d (\u7b7e\u540d), selecciona \u201cVerification Code\u201d (\u9a8c\u8bc1\u7801) en el campo "Applicable Scenarios" (\u6a21\u7248\u7c7b\u578b).'}),"\n",(0,c.jsx)(n.li,{children:"Al a\xf1adir una plantilla, elige \u201cVerification Code\u201d como el tipo de plantilla."}),"\n",(0,c.jsxs)(n.li,{children:["Incluye un marcador de posici\xf3n ",(0,c.jsx)(n.code,{children:"{1}"})," en el contenido de la plantilla, que ser\xe1 reemplazado por un c\xf3digo generado aleatoriamente."]}),"\n",(0,c.jsx)(n.li,{children:"No se admiten plantillas con m\xfaltiples marcadores de posici\xf3n. Usa o crea una plantilla de un solo marcador de posici\xf3n."}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["Env\xeda la firma y la plantilla para su aprobaci\xf3n. Despu\xe9s de la presentaci\xf3n:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Espera a que entren en vigor."}),"\n",(0,c.jsxs)(n.li,{children:["Se pueden enviar SMS de prueba desde el \u201c",(0,c.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2",children:"SMS Console Overview"}),"\u201d (\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u6982\u89c8). Las firmas y plantillas aprobadas se pueden usar directamente para pruebas, o usa las plantillas de prueba proporcionadas si a\xfan est\xe1n en revisi\xf3n."]}),"\n",(0,c.jsx)(n.li,{children:"Aseg\xfarate de que tu cuenta tenga saldo suficiente para las pruebas y pre-registra el n\xfamero de tel\xe9fono de prueba para recibir SMS con \xe9xito."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Para obtener una gu\xeda detallada, haz clic en la pesta\xf1a \u201cGetting Started Guide\u201d (\u65b0\u624b\u914d\u7f6e\u6307\u5f15) en el SMS Console Overview."}),"\n",(0,c.jsx)(n.h2,{id:"compose-the-connector-json",children:"Componer el JSON del conector"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["Ve al \u201c",(0,c.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2",children:"SMS Console Overview"}),"\u201d y pasa el cursor sobre tu avatar en la esquina superior derecha. Navega a \u201cAccess Management > Access Keys > API Keys\u201d para generar tu ",(0,c.jsx)(n.code,{children:"AccessKey ID"})," y ",(0,c.jsx)(n.code,{children:"AccessKey Secret"})," despu\xe9s de completar la verificaci\xf3n de seguridad. Por favor, gu\xe1rdalos adecuadamente."]}),"\n",(0,c.jsxs)(n.li,{children:["Desde la pesta\xf1a \u201cDomestic Messages\u201d (\u56fd\u5185\u6d88\u606f) o \u201cInternational/Hong Kong, Macao, Taiwan Messages\u201d (\u56fd\u9645/\u6e2f\u6fb3\u53f0\u6d88\u606f), recupera el \u201cSignature Name\u201d (\u7b7e\u540d\u540d\u79f0) y el \u201cTemplate Code\u201d (\u6a21\u7248 CODCE).","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:'Para plantillas de prueba, consulta la pesta\xf1a \u201cGetting Started\u201d (\u5feb\u901f\u5f00\u59cb) bajo "Test-Exclusive Templates" (\u6d4b\u8bd5\u4e13\u7528\u7b7e\u540d\u6a21\u7248).'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Configura el Conector de SMS de Tencent Cloud con los siguientes campos:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"accessKeyId"})," y ",(0,c.jsx)(n.code,{children:"accessKeySecret"}),": Usa las credenciales del paso 1."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"signName"}),": El nombre de la firma obtenido en el paso 2. Esto se aplica a todas las plantillas."]}),"\n",(0,c.jsxs)(n.li,{children:["A\xf1ade m\xfaltiples plantillas para diferentes escenarios si es necesario. Ejemplo para una sola plantilla:","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"templateCode"}),": Recuperado del \u201cTemplate Code\u201d en el paso 2."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"usageType"}),": Especifica uno de ",(0,c.jsx)(n.code,{children:"Register"}),", ",(0,c.jsx)(n.code,{children:"SignIn"}),", ",(0,c.jsx)(n.code,{children:"ForgotPassword"}),", o ",(0,c.jsx)(n.code,{children:"Generic"})," para diferentes escenarios (propiedad espec\xedfica de Logto)."]}),"\n",(0,c.jsx)(n.li,{children:"Aseg\xfarate de que las plantillas est\xe9n configuradas para los cuatro escenarios para completar el flujo."}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"sdkAppId"}),": Encontrado en \u201c",(0,c.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2/app-manage",children:"Application Management"}),"\u201d (\u5e94\u7528\u7ba1\u7406)."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"region"}),": Especifica la regi\xf3n admitida desde el \u201c",(0,c.jsx)(n.a,{href:"https://cloud.tencent.com/document/api/382/52071#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8",children:"Sending Documentation"}),"\u201d (\u53d1\u9001\u6587\u6863)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"test-tencent-cloud-sms-connector",children:"Probar el conector de SMS de Tencent Cloud"}),"\n",(0,c.jsx)(n.p,{children:'Puedes escribir un n\xfamero de tel\xe9fono y hacer clic en "Send" para ver si la configuraci\xf3n puede funcionar antes de "Save and Done".'}),"\n",(0,c.jsxs)(n.p,{children:["Eso es todo. No olvides ",(0,c.jsx)(n.a,{href:"/connectors/sms-connectors#enable-phone-number-sign-up-or-sign-in",children:"Habilitar el conector en la experiencia de inicio de sesi\xf3n"}),"."]}),"\n",(0,c.jsx)(n.h3,{id:"config-types",children:"Tipos de configuraci\xf3n"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nombre"}),(0,c.jsx)(n.th,{children:"Tipo"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"accessKeyId"}),(0,c.jsx)(n.td,{children:"string"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"accessKeySecret"}),(0,c.jsx)(n.td,{children:"string"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"signName"}),(0,c.jsx)(n.td,{children:"string"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"region"}),(0,c.jsx)(n.td,{children:"string"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"sdkAppId"}),(0,c.jsx)(n.td,{children:"string"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"templates"}),(0,c.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Propiedades de la plantilla"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{children:"Valores del enum"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"templateCode"}),(0,c.jsx)(n.td,{children:"string"}),(0,c.jsx)(n.td,{children:"N/A"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"usageType"}),(0,c.jsx)(n.td,{children:"enum string"}),(0,c.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"references",children:"Referencias"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://cloud.tencent.com/document/product/382/43070",children:"\xbfC\xf3mo implementar la funci\xf3n de c\xf3digo de verificaci\xf3n por SMS?"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},79621:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(58101);const c={},a=i.createContext(c);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);