"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2793],{79015:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"logto-oss/develop-your-connector/step-by-step-guide","title":"Guia passo a passo para desenvolver um conector social","description":"A maneira mais r\xe1pida de come\xe7ar \xe9 copiar o c\xf3digo de um conector oficial existente e modific\xe1-lo para atender \xe0s suas necessidades. Vamos usar o conector do GitHub como exemplo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/develop-your-connector/step-by-step-guide.mdx","sourceDirName":"logto-oss/develop-your-connector","slug":"/logto-oss/develop-your-connector/step-by-step-guide","permalink":"/pt-BR/logto-oss/develop-your-connector/step-by-step-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/logto-oss/develop-your-connector/step-by-step-guide.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Implementar conectores","permalink":"/pt-BR/logto-oss/develop-your-connector/implement-connectors"},"next":{"title":"Atualizando","permalink":"/pt-BR/logto-oss/upgrading-oss-version"}}');var r=n(25105),t=n(79621);const i={sidebar_position:3},a="Guia passo a passo para desenvolver um conector social",c={},d=[{value:"Passo 1: Clonar um pacote de conector existente",id:"step-1-clone-an-existing-connector-package",level:2},{value:"Passo 2: Modificar o arquivo de entrada principal (index.ts)",id:"step-2-modify-the-main-entry-file-indexts",level:2},{value:"Passo 3: Testar o conector",id:"step-3-test-the-connector",level:2},{value:"Teste unit\xe1rio",id:"unit-test",level:3},{value:"Teste local",id:"local-test",level:3}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{CloudLink:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"guia-passo-a-passo-para-desenvolver-um-conector-social",children:"Guia passo a passo para desenvolver um conector social"})}),"\n",(0,r.jsx)(o.p,{children:"A maneira mais r\xe1pida de come\xe7ar \xe9 copiar o c\xf3digo de um conector oficial existente e modific\xe1-lo para atender \xe0s suas necessidades. Vamos usar o conector do GitHub como exemplo."}),"\n",(0,r.jsx)(o.h2,{id:"step-1-clone-an-existing-connector-package",children:"Passo 1: Clonar um pacote de conector existente"}),"\n",(0,r.jsx)(o.p,{children:"Em uma pasta de origem do conector, voc\xea encontrar\xe1 os seguintes arquivos:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"index.ts"}),": O arquivo de entrada principal do conector."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"constant.ts"}),": As constantes usadas no conector."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"types.ts"}),": Os tipos TypeScript usados no conector."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"index.test.ts"}),": Os casos de teste para o conector."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"mock.ts"}),": Os dados simulados usados nos casos de teste do conector."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Al\xe9m desses arquivos, voc\xea tamb\xe9m precisar\xe1 fornecer um arquivo ",(0,r.jsx)(o.code,{children:"README.md"})," para descrever o conector, um ",(0,r.jsx)(o.code,{children:"logo.svg"})," (opcionalmente um ",(0,r.jsx)(o.code,{children:"logo-dark.svg"})," para uma melhor experi\xeancia de usu\xe1rio no modo escuro) e um arquivo ",(0,r.jsx)(o.code,{children:"package.json"})," para definir as informa\xe7\xf5es do pacote npm."]}),"\n",(0,r.jsx)(o.h2,{id:"step-2-modify-the-main-entry-file-indexts",children:"Passo 2: Modificar o arquivo de entrada principal (index.ts)"}),"\n",(0,r.jsxs)(o.p,{children:["No arquivo ",(0,r.jsx)(o.code,{children:"index.ts"}),", voc\xea encontrar\xe1 a maior parte da l\xf3gica do conector. Normalmente, h\xe1 4 fun\xe7\xf5es que voc\xea precisa implementar:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"getAuthorizationUri"}),": Gerar o URI de autoriza\xe7\xe3o para a plataforma social de terceiros. Para o GitHub, seria: ",(0,r.jsx)(o.code,{children:"https://github.com/login/oauth/authorize?client_id={clientId}&redirect_uri={redirectUri}&state={state}"}),". Consulte a documenta\xe7\xe3o do desenvolvedor da sua plataforma social alvo para obter o URI correto."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"authorizationCallbackHandler"}),": Proteger os valores dos par\xe2metros retornados no URI de callback de autoriza\xe7\xe3o, extrair o ",(0,r.jsx)(o.code,{children:"code"})," de autoriza\xe7\xe3o e lidar com poss\xedveis erros."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"getAccessToken"}),": Trocar o ",(0,r.jsx)(o.code,{children:"code"})," de autoriza\xe7\xe3o por um token de acesso."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"getUserInfo"}),": Buscar informa\xe7\xf5es do usu\xe1rio na plataforma social de terceiros com o token de acesso."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"A maioria das outras l\xf3gicas comuns j\xe1 foi tratada no kit de conectores do Logto, o que deve facilitar seu trabalho."}),"\n",(0,r.jsx)(o.p,{children:"Finalmente, no final do arquivo, voc\xea s\xf3 precisar\xe1 exportar o objeto do conector, seguindo a mesma estrutura de c\xf3digo do conector do GitHub."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"const createGithubConnector: CreateConnector<SocialConnector> = async ({ getConfig }) => {\n  return {\n    metadata: defaultMetadata,\n    type: ConnectorType.Social,\n    configGuard: githubConfigGuard,\n    getAuthorizationUri: getAuthorizationUri(getConfig),\n    getUserInfo: getUserInfo(getConfig),\n  };\n};\n"})}),"\n",(0,r.jsx)(o.h2,{id:"step-3-test-the-connector",children:"Passo 3: Testar o conector"}),"\n",(0,r.jsx)(o.h3,{id:"unit-test",children:"Teste unit\xe1rio"}),"\n",(0,r.jsx)(o.p,{children:"Primeiro, escreva alguns casos de teste unit\xe1rio e certifique-se de que as funcionalidades b\xe1sicas funcionem conforme o esperado."}),"\n",(0,r.jsx)(o.h3,{id:"local-test",children:"Teste local"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Configure o Logto no seu ambiente local: Logto oferece v\xe1rias maneiras de rodar localmente, voc\xea pode usar CLI, ou docker, ou at\xe9 mesmo construir a partir do c\xf3digo-fonte. Confira as documenta\xe7\xf5es para ",(0,r.jsx)(o.a,{href:"/logto-oss/using-cli/install-logto/",children:"mais detalhes"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Vincule seu conector personalizado \xe0 sua inst\xe2ncia Logto: Use o CLI para criar um link simb\xf3lico do seu conector para a inst\xe2ncia Logto. ",(0,r.jsx)(o.a,{href:"/logto-oss/using-cli/manage-connectors/#link-local-connectors",children:"Mais detalhes"}),".","\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"cd logto\nnpx @logto/cli connector link -p .\n"})}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["Ap\xf3s vincular o conector, voc\xea deve v\xea-lo na pasta ",(0,r.jsx)(o.code,{children:"<logto-root-path>/packages/core/connectors"}),"."]}),"\n",(0,r.jsx)(o.li,{children:"Reinicie sua inst\xe2ncia Logto, v\xe1 para o Console de Administra\xe7\xe3o do Logto, voc\xea deve ser capaz de v\xea-lo na lista de conectores sociais."}),"\n",(0,r.jsxs)(o.li,{children:["Configure seu conector em ",(0,r.jsx)(n,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Console > Experi\xeancia de login > Inscri\xe7\xe3o e login"}),' > Login social. E experimente em nosso aplicativo de demonstra\xe7\xe3o com o recurso "Visualiza\xe7\xe3o ao vivo".']}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},79621:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>a});var s=n(58101);const r={},t=s.createContext(r);function i(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);