"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11425],{14936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=t(11527),s=t(17279);const c={sidebar_label:"Connector file structure",sidebar_position:1},r="Connector file structure",i={id:"docs/recipes/configure-connectors/create-your-connector/connector-file-structure",title:"Connector file structure",description:"Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project.",source:"@site/docs/docs/recipes/configure-connectors/create-your-connector/connector-file-structure.mdx",sourceDirName:"docs/recipes/configure-connectors/create-your-connector",slug:"/docs/recipes/configure-connectors/create-your-connector/connector-file-structure",permalink:"/docs/recipes/configure-connectors/create-your-connector/connector-file-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/create-your-connector/connector-file-structure.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Connector file structure",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Create your connector",permalink:"/docs/recipes/configure-connectors/create-your-connector/"},next:{title:"Guide to implement connectors",permalink:"/docs/recipes/configure-connectors/create-your-connector/connector-implementation-guide"}},d={},l=[{value:"package.json",id:"packagejson",level:2},{value:"README.md",id:"readmemd",level:2},{value:"logo.svg",id:"logosvg",level:2},{value:"logo-dark.svg",id:"logo-darksvg",level:2},{value:"index.ts",id:"indexts",level:2},{value:"index.test.ts",id:"indextestts",level:2},{value:"types.ts",id:"typests",level:2},{value:"constant.ts",id:"constantts",level:2},{value:"mock.ts",id:"mockts",level:2},{value:"utils.ts",id:"utilsts",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connector-file-structure",children:"Connector file structure"}),"\n",(0,o.jsx)(n.p,{children:"Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project."}),"\n",(0,o.jsxs)(n.p,{children:["Files whose name ends up with ",(0,o.jsx)(n.code,{children:"^"})," refer to an optional file, otherwise are required."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ConnectorRootDir/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 logo.svg\n\u251c\u2500\u2500 logo-dark.svg^\n\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 index.test.ts\n    \u251c\u2500\u2500 types.ts\n    \u251c\u2500\u2500 constant.ts\n    \u251c\u2500\u2500 mock.ts^\n    \u251c\u2500\u2500 utils.ts^\n    \u251c\u2500\u2500 utils.test.ts^\n    \u2514\u2500\u2500 ...\n"})}),"\n",(0,o.jsx)(n.p,{children:"Based on the connector file structure, let's go through each file and figure out how they work together as a whole system."}),"\n",(0,o.jsx)(n.h2,{id:"packagejson",children:"package.json"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"package.json"})," contains configurations of this connector repo. It will be merged with a sharing ",(0,o.jsx)(n.code,{children:"package.json"}),", which contains common dependencies and attributes."]}),"\n",(0,o.jsx)(n.h2,{id:"readmemd",children:"README.md"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"README.md"})," is an elaborated guide for setting up the connector's config."]}),"\n",(0,o.jsx)(n.h2,{id:"logosvg",children:"logo.svg"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"logo.svg"})," is a file that stores the connector's logo in vector image format."]}),"\n",(0,o.jsx)(n.h2,{id:"logo-darksvg",children:"logo-dark.svg"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"logo-dark.svg"})," file contains vector graphic of connector's dark mode logo."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/references/connectors/#logo",children:"connector logo"})," to know more about the relationship between ",(0,o.jsx)(n.code,{children:"logo.svg"})," and ",(0,o.jsx)(n.code,{children:"logo-dark.svg"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"indexts",children:"index.ts"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"index.ts"})," is the file for connector class implementation."]}),"\n",(0,o.jsx)(n.h2,{id:"indextestts",children:"index.test.ts"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"index.test.ts"})," is a file containing corresponding unit tests (UTs) for implementations in ",(0,o.jsx)(n.code,{children:"index.ts"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"typests",children:"types.ts"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"types.ts"})," is where you should define variables' types."]}),"\n",(0,o.jsx)(n.h2,{id:"constantts",children:"constant.ts"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"constant.ts"})," is where you should put constants related to the connector, including endpoints, connector metadata, etc."]}),"\n",(0,o.jsx)(n.h2,{id:"mockts",children:"mock.ts"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"mock.ts"})," is the file you may put mocked values for testing purposes."]}),"\n",(0,o.jsx)(n.h2,{id:"utilsts",children:"utils.ts"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"utils.ts"})," is the file where developers put utility functions, and ",(0,o.jsx)(n.code,{children:"utils.test.ts"})," should contain relating UTs."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},17279:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var o=t(50959);const s={},c=o.createContext(s);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);