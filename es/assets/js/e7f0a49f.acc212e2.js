"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[30427],{72285:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"authorization/role-based-access-control/protect-api-resources-with-rbac","title":"Protege recursos de API con RBAC","description":"Adem\xe1s de Proteger tu API, que asegura los recursos al garantizar que un JWT v\xe1lido est\xe9 presente, tambi\xe9n se puede aplicar el Control de Acceso Basado en Roles (RBAC).","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/protect-api-resources-with-rbac.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/protect-api-resources-with-rbac","permalink":"/es/authorization/role-based-access-control/protect-api-resources-with-rbac","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/protect-api-resources-with-rbac.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Configurar roles","permalink":"/es/authorization/role-based-access-control/configure-roles"},"next":{"title":"Plantilla de organizaci\xf3n","permalink":"/es/authorization/organization-template/"}}');var a=s(25105),r=s(79621);const i={sidebar_position:3},t="Protege recursos de API con RBAC",c={},l=[{value:"Diagrama de flujo de autorizaci\xf3n",id:"authorization-flow-diagram",level:2},{value:"Opcional: Manejar cambios en los permisos del usuario",id:"optional-handle-user-permission-change",level:2},{value:"No se introducen nuevos permisos en el sistema",id:"no-new-permissions-introduced-into-the-system",level:3},{value:"Se introduce un nuevo permiso en el sistema y se asigna a un usuario",id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-user",level:3},{value:"Recursos relacionados",id:"related-resources",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Url:s}=o;return s||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"protege-recursos-de-api-con-rbac",children:"Protege recursos de API con RBAC"})}),"\n",(0,a.jsxs)(o.p,{children:["Adem\xe1s de ",(0,a.jsx)(o.a,{href:"/authorization/api-resources/protect-your-api",children:"Proteger tu API"}),", que asegura los recursos al garantizar que un JWT v\xe1lido est\xe9 presente, tambi\xe9n se puede aplicar el Control de Acceso Basado en Roles (RBAC)."]}),"\n",(0,a.jsx)(o.p,{children:"En este art\xedculo, nos centraremos en c\xf3mo RBAC afecta la delegaci\xf3n y validaci\xf3n de alcances en tu flujo de autenticaci\xf3n."}),"\n",(0,a.jsx)(o.h2,{id:"authorization-flow-diagram",children:"Diagrama de flujo de autorizaci\xf3n"}),"\n",(0,a.jsx)(o.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant Logto\n    participant API\n\n    Note over Client,API: Autenticaci\xf3n y Solicitud de Token\n    Client->>Logto: GET /oidc/auth & POST /oidc/token\n    Note right of Client: con recurso y alcances solicitados\n\n    Note over Logto: Filtrar alcances solicitados basado en<br/>la pol\xedtica RBAC del usuario\n    Logto--\x3e>Client: Devuelve token de acceso JWT\n    Note left of Logto: El token contiene:<br/>- Reclamos est\xe1ndar de JWT<br/>- Alcances otorgados (filtrados por RBAC)\n\n    Note over Client,API: Solicitud de API\n    Client->>API: Solicitud con token Bearer\n\n    Note over API: Validar token JWT:<br/>- Validaci\xf3n est\xe1ndar de JWT<br/>- Verificar alcances otorgados\n\n    alt Token Inv\xe1lido\n        API--\x3e>Client: 401 No autorizado\n    else Token V\xe1lido\n        alt Alcances requeridos no est\xe1n en los alcances otorgados\n            API--\x3e>Client: 403 Prohibido\n        else Tiene alcances requeridos\n            API--\x3e>Client: Recurso Protegido\n        end\n    end"}),"\n",(0,a.jsx)(o.p,{children:"Como puedes ver en el diagrama, la principal diferencia con la protecci\xf3n b\xe1sica de API es el manejo de los alcances. En lugar de otorgar directamente todos los alcances solicitados, Logto ahora los filtra seg\xfan la pol\xedtica RBAC del usuario. El token JWT solo contendr\xe1 los alcances que el usuario ha recibido a trav\xe9s de sus roles. En el lado de la API, despu\xe9s de validar la autenticidad del token, hay una verificaci\xf3n adicional para asegurar que el token contenga los alcances requeridos para el recurso solicitado."}),"\n",(0,a.jsx)(o.h2,{id:"optional-handle-user-permission-change",children:"Opcional: Manejar cambios en los permisos del usuario"}),"\n",(0,a.jsx)(o.p,{children:"Los permisos del usuario pueden ser alterados durante una sesi\xf3n; por ejemplo, se les pueden asignar nuevos roles o modificar los permisos de roles existentes. En estos escenarios, puede ser necesario detectar estos cambios y actualizar la interfaz de usuario de la aplicaci\xf3n."}),"\n",(0,a.jsx)(o.p,{children:"\xbfQu\xe9 sucede cuando cambian los permisos de un usuario? Hay dos casos."}),"\n",(0,a.jsx)(o.h3,{id:"no-new-permissions-introduced-into-the-system",children:"No se introducen nuevos permisos en el sistema"}),"\n",(0,a.jsx)(o.p,{children:"Los tokens de acceso actuales seguir\xe1n siendo v\xe1lidos hasta que expiren, incluso despu\xe9s de que se cambien los permisos de un usuario. Sin embargo, los nuevos permisos se reflejar\xe1n en los tokens de acceso subsiguientes, y cualquier permiso revocado ser\xe1 omitido."}),"\n",(0,a.jsxs)(o.p,{children:["Aqu\xed hay algunas ",(0,a.jsx)(o.strong,{children:"acciones recomendadas"}),":"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Opci\xf3n 1: Usar tiempos de expiraci\xf3n cortos para los tokens de acceso"})}),"\n",(0,a.jsxs)(o.p,{children:["Los tokens de acceso de corta duraci\xf3n aseguran actualizaciones m\xe1s frecuentes de los permisos del usuario. Configura los ajustes de expiraci\xf3n de tokens en la configuraci\xf3n del ",(0,a.jsx)(o.a,{href:"/authorization/api-resources/#logto-api-resource-schema",children:"Recurso de API"})," de la Consola. La desventaja es que aumentar\xe1 el uso de tus tokens."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Opci\xf3n 2: Verificar din\xe1micamente los permisos"})}),"\n",(0,a.jsxs)(o.p,{children:["Llama a los endpoints de ",(0,a.jsx)(o.a,{href:"/integrate-logto/interact-with-management-api",children:"Logto Management API"})," peri\xf3dicamente (por ejemplo, SWR) o utiliza t\xe9cnicas como WebSocket para implementar conexiones de larga duraci\xf3n para obtener din\xe1micamente los permisos del usuario. Al detectar cambios, borra el token de acceso existente y los nuevos tokens emitidos reflejar\xe1n autom\xe1ticamente los cambios en el alcance de los permisos. - API: User-role - API: Role-permission"]}),"\n",(0,a.jsxs)(o.p,{children:["Cuando se detecten cambios en los permisos, borra primero el token de acceso del almacenamiento y luego llama al m\xe9todo del SDK ",(0,a.jsx)(o.code,{children:"getAccessToken()"})," para adquirir uno nuevo. El nuevo token de acceso emitido deber\xeda reflejar los cambios en los permisos."]}),"\n",(0,a.jsx)(o.h3,{id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-user",children:"Se introduce un nuevo permiso en el sistema y se asigna a un usuario"}),"\n",(0,a.jsx)(o.p,{children:"Esto sucede cuando se introducen nuevos permisos en tu sistema. En este caso, primero tendr\xe1s que incluir los nuevos alcances de permisos introducidos al inicializar el cliente Logto. Por ejemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"new LogtoClient({\n  appId: 'your-app-id',\n  redirectUrl: 'your-redirect-url',\n  resources: ['your-api-resource'],\n  scopes: [\n    // ... tus alcances de permisos existentes,\n    'new-scope',\n  ],\n});\n"})}),"\n",(0,a.jsx)(o.p,{children:"En segundo lugar, cada una de tus aplicaciones cliente necesitar\xe1 volver a consentir o volver a iniciar sesi\xf3n para que los usuarios reciban el cambio de permiso nuevo. Entonces, el nuevo alcance de permiso se reflejar\xe1 en los nuevos tokens de acceso."}),"\n",(0,a.jsx)(o.p,{children:"Ejemplo de c\xf3digo para volver a consentir:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-tsx",children:"signIn({ redirectUrl: 'your-redirect-url', prompt: 'consent' });\n"})}),"\n",(0,a.jsx)(o.h2,{id:"related-resources",children:"Recursos relacionados"}),"\n",(0,a.jsx)(s,{href:"https://blog.logto.io/logto-x-cloudflare-workers",children:(0,a.jsx)(o.p,{children:"Logto x Cloudflare Workers: \xbfC\xf3mo proteger tus workers del acceso p\xfablico?"})}),"\n",(0,a.jsx)(s,{href:"https://blog.logto.io/secure-api-for-machine-to-machine",children:(0,a.jsx)(o.p,{children:"Protege tus recursos de API para la comunicaci\xf3n m\xe1quina a m\xe1quina"})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},79621:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>t});var n=s(58101);const a={},r=n.createContext(a);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);