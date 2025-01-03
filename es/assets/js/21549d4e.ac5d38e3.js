"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13241],{40781:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>t,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"logto-oss/using-cli/translation","title":"Traducci\xf3n","description":"Usa CLI para gestionar traducciones i18n.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/using-cli/translation.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/translation","permalink":"/es/logto-oss/using-cli/translation","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/using-cli/translation.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"description":"Usa CLI para gestionar traducciones i18n.","sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Gestionar configuraciones de base de datos","permalink":"/es/logto-oss/using-cli/manage-database-configs"},"next":{"title":"Migrar configuraciones desde env","permalink":"/es/logto-oss/using-cli/migrate-from-env"}}');var o=n(25105),c=n(79621);const i={description:"Usa CLI para gestionar traducciones i18n.",sidebar_position:5},r="Traducci\xf3n",t={},l=[{value:"Sincronizar claves",id:"sync-keys",level:2},{value:"Traducir claves usando ChatGPT",id:"translate-keys-using-chatgpt",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"traducci\xf3n",children:"Traducci\xf3n"})}),"\n",(0,o.jsx)(a.admonition,{type:"note",children:(0,o.jsxs)(a.p,{children:["A partir de la v1.20.0, el comando de traducci\xf3n se elimin\xf3 de ",(0,o.jsx)(a.code,{children:"@logto/cli"})," y se mantiene como un paquete independiente ",(0,o.jsx)(a.code,{children:"@logto/translate"})," en el monorepo de Logto. Por favor, consulta el ",(0,o.jsx)(a.a,{href:"/logto-oss/translate-cli/",children:"CLI de traducci\xf3n"})," para m\xe1s detalles."]})}),"\n",(0,o.jsxs)(a.p,{children:["Usa CLI para gestionar traducciones i18n. Estos comandos son para desarrolladores que desean contribuir a Logto. Si solo deseas usar Logto con traducci\xf3n personalizada, por favor consulta ",(0,o.jsx)(a.a,{href:"/customization/localized-languages/",children:"esta gu\xeda"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"sync-keys",children:"Sincronizar claves"}),"\n",(0,o.jsxs)(a.p,{children:["Supongamos que hicimos algunos cambios en las claves de traducci\xf3n en la carpeta ",(0,o.jsx)(a.code,{children:"en"})," del paquete ",(0,o.jsx)(a.code,{children:"phrases"}),". Queremos sincronizar estos cambios con la carpeta ",(0,o.jsx)(a.code,{children:"pt-BR"}),". Ejecuta el siguiente comando para sincronizar las claves de traducci\xf3n y la estructura de archivos:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"pnpm cli translate sync-keys --target pt-BR\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Este comando leer\xe1 todas las claves de traducci\xf3n de la carpeta del idioma fuente (",(0,o.jsx)(a.code,{children:"en"})," por defecto) y las sincronizar\xe1 con la carpeta del idioma objetivo (",(0,o.jsx)(a.code,{children:"pt-BR"})," en este ejemplo)."]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Si la carpeta del idioma objetivo no existe, se crear\xe1 autom\xe1ticamente;"}),"\n",(0,o.jsx)(a.li,{children:"Si la carpeta del idioma objetivo ya existe, se actualizar\xe1 con nuevas claves y se eliminar\xe1n las claves obsoletas."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Para cada clave de traducci\xf3n:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:["Si falta una clave en el objetivo, se a\xf1adir\xe1 con un comentario para indicar que la frase no est\xe1 traducida (marcada con ",(0,o.jsx)(a.code,{children:"/** UNTRANSLATED */"}),");"]}),"\n",(0,o.jsx)(a.li,{children:"Si falta una clave en la l\xednea base, se eliminar\xe1 del objetivo;"}),"\n",(0,o.jsx)(a.li,{children:"Si una clave existe tanto en la l\xednea base como en el objetivo, se usar\xe1 el valor del objetivo."}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["Para sincronizar claves para todos los idiomas en el paquete ",(0,o.jsx)(a.code,{children:"phrases"}),", ejecuta el siguiente comando:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"pnpm cli translate sync-keys --target all\n"})}),"\n",(0,o.jsx)(a.p,{children:"As\xed podemos centrarnos en actualizar las claves de traducci\xf3n en la carpeta del idioma fuente, y las claves de traducci\xf3n en otros idiomas se actualizar\xe1n autom\xe1ticamente."}),"\n",(0,o.jsx)(a.admonition,{type:"info",children:(0,o.jsxs)(a.p,{children:["Este comando se ejecuta para el paquete ",(0,o.jsx)(a.code,{children:"phrases"})," por defecto. Puedes especificar el nombre del paquete con la opci\xf3n ",(0,o.jsx)(a.code,{children:"--package"}),". Por ejemplo, usa ",(0,o.jsx)(a.code,{children:"--package phrases-experience"})," para sincronizar claves para el paquete ",(0,o.jsx)(a.code,{children:"phrases-experience"}),"."]})}),"\n",(0,o.jsx)(a.p,{children:"Despu\xe9s de sincronizar las claves, podemos traducirlas usando la API de ChatGPT."}),"\n",(0,o.jsx)(a.h2,{id:"translate-keys-using-chatgpt",children:"Traducir claves usando ChatGPT"}),"\n",(0,o.jsx)(a.p,{children:"Ejecuta el siguiente comando para traducir claves usando ChatGPT:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"pnpm cli translate sync\n"})}),"\n",(0,o.jsxs)(a.p,{children:["Este comando traducir\xe1 todas las claves no traducidas (marcadas con ",(0,o.jsx)(a.code,{children:"/** UNTRANSLATED */"}),") en todos los idiomas en los paquetes ",(0,o.jsx)(a.code,{children:"phrases"})," y ",(0,o.jsx)(a.code,{children:"phrases-experience"}),". Ten en cuenta que se requiere una variable de entorno ",(0,o.jsx)(a.code,{children:"OPENAI_API_KEY"})," para ejecutar este comando."]})]})}function u(e={}){const{wrapper:a}={...(0,c.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},79621:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>r});var s=n(58101);const o={},c=s.createContext(o);function i(e){const a=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);