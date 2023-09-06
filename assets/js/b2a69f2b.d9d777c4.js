"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[80482],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={slug:"typescript-all-in-one",authors:"gao",tags:["typescript","monorepo"]},s="TypeScript all-in-one: Monorepo with its pains and gains",p={permalink:"/logto-docs/blog/typescript-all-in-one",source:"@site/blog/2022-08-07-typescript-all-in-one.md",title:"TypeScript all-in-one: Monorepo with its pains and gains",description:"Intro",date:"2022-08-07T00:00:00.000Z",formattedDate:"August 7, 2022",tags:[{label:"typescript",permalink:"/logto-docs/blog/tags/typescript"},{label:"monorepo",permalink:"/logto-docs/blog/tags/monorepo"}],readingTime:8.93,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{slug:"typescript-all-in-one",authors:"gao",tags:["typescript","monorepo"]},prevItem:{title:"Logto x Hasura: How to use open-source auth + GraphQL solution to boost your project",permalink:"/logto-docs/blog/logto-x-hasura"}},c={authorsImageUrls:[void 0]},d=[{value:"Intro",id:"intro",level:2},{value:"Why TypeScript?",id:"why-typescript",level:2},{value:"Choosing package manager",id:"choosing-package-manager",level:2},{value:"The pain of inertia",id:"the-pain-of-inertia",level:3},{value:"It just works",id:"it-just-works",level:3},{value:"Defining package scopes",id:"defining-package-scopes",level:2},{value:"Tech stack for fullstack",id:"tech-stack-for-fullstack",level:2},{value:"How about schemas?",id:"how-about-schemas",level:3},{value:"General v.s. opinionated",id:"general-vs-opinionated",level:4},{value:"SQL &lt;-&gt; TypeScript",id:"sql---typescript",level:4},{value:"Result",id:"result",level:3},{value:"Dev experience",id:"dev-experience",level:2},{value:"Package and config sharing",id:"package-and-config-sharing",level:3},{value:"Internal dependencies",id:"internal-dependencies",level:4},{value:"Config sharing",id:"config-sharing",level:4},{value:"Code, lint, and commit",id:"code-lint-and-commit",level:3},{value:"Compiler and proxy",id:"compiler-and-proxy",level:3},{value:"Watch mode",id:"watch-mode",level:3},{value:"Summary",id:"summary",level:3},{value:"Closing notes",id:"closing-notes",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"I always had a dream of monorepo."),(0,i.kt)("p",null,"I saw the monorepo approach while working for Airbnb, but it was for the frontend only. With a deep love of the JavaScript ecosystem and the \u201chappy\u201d TypeScript developing experience, I started to align frontend and backend code in the same language from ~three years ago. It was great (for hiring) but not that great for developing since our projects were still scattered across multiple repos."),(0,i.kt)("admonition",{title:"FYI",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are quotes around the word \u201chappy\u201d since TypeScript did bring me a lot of fun and a-ha moments, but it also let me think \u201chow could this doesn\u2019t work\u201d sometimes.")),(0,i.kt)("p",null,"As it says, \u201cthe best way of refactoring a project is to start a new one\u201d. So when I was starting my startup about one year ago, I decided to use a total monorepo strategy: put frontend and backend projects, even database schemas, into one repo."),(0,i.kt)("p",null,"In this article, I won\u2019t compare monorepo and polyrepo since it\u2019s all about philosophy. Instead, I\u2019ll focus on the building and evolving experience and assume you are familiar with the JS/TS ecosystem."),(0,i.kt)("p",null,"The final result is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto"},"GitHub"),"."),(0,i.kt)("h2",{id:"why-typescript"},"Why TypeScript?"),(0,i.kt)("p",null,"Frankly speaking, I\u2019m a fan of JavaScript and TypeScript. I love the compatibility of its flexibility and rigorousness: you can fall back to ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," (although we banned any form of ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," in our codebase), or use a super-strict lint rule set to align the code style across the team."),(0,i.kt)("p",null,"When we were talking about the concept of \u201cfullstack\u201d before, we usually imagine at least two ecosystems and programming languages: one for frontend and one for backend."),(0,i.kt)("p",null,"One day, I suddenly realized it could be simpler: Node.js is fast enough (believe me, in most cases, code quality is more important than running speed), TypeScript is mature enough (works well in big frontend projects), and the monorepo concept has been practiced by a bunch of famous teams (React, Babel, etc.) - so why don\u2019t we combine all the code together, from frontend to backend? This can make engineers do the jobs without context switch in one repo and implement a complete feature in (almost) one language."),(0,i.kt)("h2",{id:"choosing-package-manager"},"Choosing package manager"),(0,i.kt)("p",null,"As a developer, and as usual, I couldn\u2019t wait to start coding. But this time, things were different."),(0,i.kt)("p",null,"The choice of the package manager is critical to the dev experience in a monorepo."),(0,i.kt)("admonition",{title:"\ud83d\udd28 TL; DR",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We chose lerna with pnpm.")),(0,i.kt)("h3",{id:"the-pain-of-inertia"},"The pain of inertia"),(0,i.kt)("p",null,"It was July 2021. I started with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn@1.x")," since I\u2019ve been using it for a long time. Yarn was fast, but soon I met several issues with Yarn Workspaces. E.g., ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/yarn/issues/7572"},"not hoisting dependencies correctly"),", and tons of issues are tagged with \u201c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/yarn/issues?q=label%3Afixed-in-modern+"},"fixed in modern"),"\u201d, which redirects me to the v2 (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry"},"berry"),")."),(0,i.kt)("p",null,"\u201cOkay fine I\u2019m upgrading now.\u201d I stopped struggling with v1 and started to migrate. But the long ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/migration"},"migration guide")," of berry frightened me, and I gave up after several failed tries."),(0,i.kt)("h3",{id:"it-just-works"},"It just works"),(0,i.kt)("p",null,"So the research about package managers began. I was absorbed by ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," after a trial: fast as yarn, native monorepo support, similar commands to ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),", hard links, etc. Most importantly, it just works. As a developer who wants to get started with a product but NOT develop a package manager, I just wanted to add some dependencies and start the project without knowing how a package manager works or any other fancy concepts."),(0,i.kt)("p",null,"Based on the same idea, we chose an old friend ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna")," for executing commands across the packages and publishing workspace packages."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Now pnpm has a -w option to run commands in the workspace root and --filter for filtering. Thus you can probably replace lerna with a more dedicated package publishing CLI.")),(0,i.kt)("h2",{id:"defining-package-scopes"},"Defining package scopes"),(0,i.kt)("p",null,"It\u2019s hard to clearly figure out the final scope of each package in the beginning. Just start with your best try according to the status quo, and remember you can always refactor during development."),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/af7e6ccd83723d623555dafa4650e115fa795838/packages"},"initial structure")," contains four packages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"core"),": the backend monolith service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"phrases"),": i18n key \u2192 phrase resources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schemas"),": the database and shared TypeScript schemas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ui"),": a web SPA that interacts with ",(0,i.kt)("inlineCode",{parentName:"li"},"core"),".")),(0,i.kt)("h2",{id:"tech-stack-for-fullstack"},"Tech stack for fullstack"),(0,i.kt)("p",null,"Since we are embracing the JavaScript ecosystem and using TypeScript as our main programming language, a lot of choices are straightforward (based on my preference \ud83d\ude0a):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"koajs")," for the backend service (core): I had a hard experience using ",(0,i.kt)("inlineCode",{parentName:"li"},"async/await")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"express"),", so I decided to use something with native support."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"i18next/react-i18next")," for i18n (phrases/ui): like its simplicity of APIs and good TypeScript support."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react")," for SPA (ui): Just personal preference.")),(0,i.kt)("h3",{id:"how-about-schemas"},"How about schemas?"),(0,i.kt)("p",null,"Something is still missing here: database system and schema <-> TypeScript definition mapping."),(0,i.kt)("h4",{id:"general-vs-opinionated"},"General v.s. opinionated"),(0,i.kt)("p",null,"At that point, I tried two popular approaches:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ORM with a lot of decorators."),(0,i.kt)("li",{parentName:"ul"},"Use a query builder like Knex.js.")),(0,i.kt)("p",null,"But both of them produce a strange feeling during previous development:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ORM: I\u2019m not a fan of decorators, and another abstract layer of the database causes more learning effort and uncertainty for the team."),(0,i.kt)("li",{parentName:"ul"},"For query builder: It\u2019s like writing SQL with some restrictions (in a good way), but it\u2019s not actual SQL. Thus we need to use ",(0,i.kt)("inlineCode",{parentName:"li"},".raw()")," for raw queries in many scenarios.")),(0,i.kt)("p",null,"Then I saw this article: \u201c",(0,i.kt)("a",{parentName:"p",href:"https://gajus.medium.com/stop-using-knex-js-and-earn-30-bf410349856c"},"Stop using Knex.js: Using SQL query builder is an anti-pattern"),"\u201d. The title looks aggressive, but the content is great. It strongly reminds me that \u201cSQL is a programming language\u201d, and I realized I could write SQL directly (just like CSS, how could I miss this!) to leverage the native language and database features instead of adding another layer and reducing the power."),(0,i.kt)("p",null,"In conclusion, I decided to stick with Postgres and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gajus/slonik"},"Slonik")," (an open-source Postgres client), as the article states:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2026the benefit of allowing user to choose between the different database dialects is marginal and the overhead of developing for multiple databases at once is significant.")),(0,i.kt)("h4",{id:"sql---typescript"},"SQL <-> TypeScript"),(0,i.kt)("p",null,"Another advantage of writing SQL is we can easily use it as the single source of truth of TypeScript definitions. I wrote a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/af7e6ccd83723d623555dafa4650e115fa795838/packages/schemas/src/gen"},"code generator")," to transpile SQL schemas to TypeScript code that we\u2019ll use in our backend, and the result looks not bad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n\nimport { OidcClientMetadata } from '../foundations';\n\nexport type OidcClient = {\n  clientId: string;\n  metadata: OidcClientMetadata;\n  createdAt: number;\n};\n// ...\n")),(0,i.kt)("p",null,"We can even connect ",(0,i.kt)("inlineCode",{parentName:"p"},"jsonb")," with a TypeScript type and process type validation in the backend service if needed."),(0,i.kt)("admonition",{title:"\ud83e\udd14 Why not use TypeScript as the SSOT?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It\u2019s a plan I\u2019ve thought of. It sounds attractive initially, but SQL will precisely describe database schemas and keep the flow in one direction (see the following section) instead of using TypeScript and then \u201ctranspile back\u201d to SQL.")),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("p",null,"The final dependency structure looks like:"),(0,i.kt)("mermaid",{value:"graph TD\n  database[Postgres Database] --\x3e Schemas\n  subgraph Monorepo\n\t  Phrases --\x3e Core\n\t  Phrases --\x3e UI\n\t  Schemas --\x3e Core\n\t  Schemas --\x3e UI\n  end"}),(0,i.kt)("p",null,"You may notice it\u2019s a one-direction diagram, which greatly helped us to keep a clear architecture and the ability to expand while the project grows. Plus, the code is (basically) all in TypeScript."),(0,i.kt)("h2",{id:"dev-experience"},"Dev experience"),(0,i.kt)("h3",{id:"package-and-config-sharing"},"Package and config sharing"),(0,i.kt)("h4",{id:"internal-dependencies"},"Internal dependencies"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna")," are doing an awesome job on internal workspace dependencies. We use the command below in the project root to add sibling packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"lerna add --scope=@logto/core @logto/schemas\n")),(0,i.kt)("p",null,"It will add ",(0,i.kt)("inlineCode",{parentName:"p"},"@logto/schemas")," as a dependency to ",(0,i.kt)("inlineCode",{parentName:"p"},"@logto/core"),". While keeping the semantic version in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," of your internal dependencies, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm")," can also correctly link them in ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". The result will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// packages/core/pacakge.json\n{\n  "dependencies": {\n    "@logto/schemas": "^1.0.0-beta.3"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# pnpm-lock.yaml\npackages/core:\n  dependencies:\n    '@logto/schemas': link:../schemas\n")),(0,i.kt)("h4",{id:"config-sharing"},"Config sharing"),(0,i.kt)("p",null,"We treat every package in monorepo \u201cindependent\u201d. Thus we can use the standard approach for config sharing, which covers ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eslintConfig"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stlyelint"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"jest-config"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/6327eb6c577cdf36c8f44b55bac8195f7d6a6335/packages/console"},"this project")," for example."),(0,i.kt)("h3",{id:"code-lint-and-commit"},"Code, lint, and commit"),(0,i.kt)("p",null,"I use VSCode for daily development, and in short, nothing is different when the project is configured properly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ESLint and Stylelint work normally.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you are using VSCode ESLint plugin, add the VSCode settings below to make it honors the per-package ESLint config (replace the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"pattern")," with your own):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "eslint.workingDirectories": [\n      {\n        "pattern": "./packages/*"\n      }\n    ]\n}\n'))))),(0,i.kt)("li",{parentName:"ul"},"husky, commitlint, and lint-staged work as expected.")),(0,i.kt)("h3",{id:"compiler-and-proxy"},"Compiler and proxy"),(0,i.kt)("p",null,"We are using different compilers for frontend and backend: ",(0,i.kt)("inlineCode",{parentName:"p"},"parceljs")," for UI (React) and ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," for all other pure TypeScript packages. I strongly recommend you to try ",(0,i.kt)("inlineCode",{parentName:"p"},"parceljs")," if you haven\u2019t. It\u2019s a real \u201czero-config\u201d compiler that gracefully handles different file types."),(0,i.kt)("p",null,"Parcel hosts its own frontend dev server, and the production output is just static files. Since we\u2019d like to mount APIs and SPA under the same origin to avoid CORS issues, the strategy below works:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In dev environment, use a simple HTTP proxy to redirect the traffic to the Parcel dev server."),(0,i.kt)("li",{parentName:"ul"},"In production, serve static files directly.")),(0,i.kt)("p",null,"You can find the frontend middleware function implementation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/blob/6327eb6c577cdf36c8f44b55bac8195f7d6a6335/packages/core/src/middleware/koa-spa-proxy.ts"},"here"),"."),(0,i.kt)("h3",{id:"watch-mode"},"Watch mode"),(0,i.kt)("p",null,"We have a ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," script in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," for each package that watches the file changes and re-compile when needed. Thanks to ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna"),", things become easy using ",(0,i.kt)("inlineCode",{parentName:"p"},"lerna exec")," to run package scripts in parallel. The root script will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'"dev": "lerna --scope=@logto/{core,phrases,schemas,ui} exec -- pnpm dev"\n')),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Ideally, only two steps for a new engineer/contributor to get started:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the repo"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm i && pnpm dev"))),(0,i.kt)("h2",{id:"closing-notes"},"Closing notes"),(0,i.kt)("p",null,"Our team has been developing under this approach for one year, and we are pretty happy with it. Visit our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto"},"GitHub repo")," to see the latest shape of the project. To wrap up:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pains")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Need to be familiar with the JS/TS ecosystem"),(0,i.kt)("li",{parentName:"ul"},"Need to choose the right package manager"),(0,i.kt)("li",{parentName:"ul"},"Require some additional one-time setup")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gains")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Develop and maintain the whole project in one repo"),(0,i.kt)("li",{parentName:"ul"},"Simplified coding skill requirements"),(0,i.kt)("li",{parentName:"ul"},"Shared code styles, schemas, phrases, and utilities"),(0,i.kt)("li",{parentName:"ul"},"Improved communication efficiency",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No more questions like: What\u2019s the API definition?"),(0,i.kt)("li",{parentName:"ul"},"All engineers are talking in the same programming language"))),(0,i.kt)("li",{parentName:"ul"},"CI/CD with ease",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use the same toolchain for building, testing, and publishing")))),(0,i.kt)("p",null,"This article remains several topics uncovered: Setting up the repo from scratch, adding a new package, leveraging GitHub Actions for CI/CD, etc. It\u2019ll be too long for this article if I expand each of them. Feel free to comment and let me know which topic you\u2019d like to see in the future."))}m.isMDXComponent=!0}}]);