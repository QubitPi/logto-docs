"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20807],{57278:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"logto-oss/develop-your-connector/step-by-step-guide","title":"\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9","description":"\u6700\u3082\u901f\u304f\u59cb\u3081\u308b\u65b9\u6cd5\u306f\u3001\u65e2\u5b58\u306e\u516c\u5f0f\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30b3\u30fc\u30c9\u3092\u30b3\u30d4\u30fc\u3057\u3001\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u4fee\u6b63\u3059\u308b\u3053\u3068\u3067\u3059\u3002GitHub \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u4f8b\u306b\u3068\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/logto-oss/develop-your-connector/step-by-step-guide.mdx","sourceDirName":"logto-oss/develop-your-connector","slug":"/logto-oss/develop-your-connector/step-by-step-guide","permalink":"/ja/logto-oss/develop-your-connector/step-by-step-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/logto-oss/develop-your-connector/step-by-step-guide.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u5b9f\u88c5","permalink":"/ja/logto-oss/develop-your-connector/implement-connectors"},"next":{"title":"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9","permalink":"/ja/logto-oss/upgrading-oss-version"}}');var i=o(25105),s=o(79621);const c={sidebar_position:3},r="\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9",l={},d=[{value:"\u30b9\u30c6\u30c3\u30d7 1: \u65e2\u5b58\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b",id:"step-1-clone-an-existing-connector-package",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 2: \u30e1\u30a4\u30f3\u30a8\u30f3\u30c8\u30ea\u30fc\u30d5\u30a1\u30a4\u30eb (index.ts) \u3092\u4fee\u6b63\u3059\u308b",id:"step-2-modify-the-main-entry-file-indexts",level:2},{value:"\u30b9\u30c6\u30c3\u30d7 3: \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b",id:"step-3-test-the-connector",level:2},{value:"\u30e6\u30cb\u30c3\u30c8\u30c6\u30b9\u30c8",id:"unit-test",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u30c6\u30b9\u30c8",id:"local-test",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9",children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e\u30b9\u30c6\u30c3\u30d7\u30d0\u30a4\u30b9\u30c6\u30c3\u30d7\u30ac\u30a4\u30c9"})}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u3082\u901f\u304f\u59cb\u3081\u308b\u65b9\u6cd5\u306f\u3001\u65e2\u5b58\u306e\u516c\u5f0f\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30b3\u30fc\u30c9\u3092\u30b3\u30d4\u30fc\u3057\u3001\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u4fee\u6b63\u3059\u308b\u3053\u3068\u3067\u3059\u3002GitHub \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u4f8b\u306b\u3068\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"step-1-clone-an-existing-connector-package",children:"\u30b9\u30c6\u30c3\u30d7 1: \u65e2\u5b58\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30bd\u30fc\u30b9\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u306f\u3001\u6b21\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"index.ts"}),": \u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30e1\u30a4\u30f3\u30a8\u30f3\u30c8\u30ea\u30fc\u30d5\u30a1\u30a4\u30eb\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"constant.ts"}),": \u30b3\u30cd\u30af\u30bf\u30fc\u3067\u4f7f\u7528\u3055\u308c\u308b\u5b9a\u6570\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"types.ts"}),": \u30b3\u30cd\u30af\u30bf\u30fc\u3067\u4f7f\u7528\u3055\u308c\u308b TypeScript \u306e\u578b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"index.test.ts"}),": \u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mock.ts"}),": \u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3067\u4f7f\u7528\u3055\u308c\u308b\u30e2\u30c3\u30af\u30c7\u30fc\u30bf\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u52a0\u3048\u3066\u3001\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8aac\u660e\u3059\u308b ",(0,i.jsx)(n.code,{children:"README.md"})," \u30d5\u30a1\u30a4\u30eb\u3001",(0,i.jsx)(n.code,{children:"logo.svg"}),"\uff08\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u3067\u306e\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b ",(0,i.jsx)(n.code,{children:"logo-dark.svg"})," \u3082\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\uff09\u304a\u3088\u3073 npm \u30d1\u30c3\u30b1\u30fc\u30b8\u60c5\u5831\u3092\u5b9a\u7fa9\u3059\u308b ",(0,i.jsx)(n.code,{children:"package.json"})," \u30d5\u30a1\u30a4\u30eb\u3092\u63d0\u4f9b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"step-2-modify-the-main-entry-file-indexts",children:"\u30b9\u30c6\u30c3\u30d7 2: \u30e1\u30a4\u30f3\u30a8\u30f3\u30c8\u30ea\u30fc\u30d5\u30a1\u30a4\u30eb (index.ts) \u3092\u4fee\u6b63\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"index.ts"})," \u30d5\u30a1\u30a4\u30eb\u306b\u306f\u3001\u307b\u3068\u3093\u3069\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u30ed\u30b8\u30c3\u30af\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u901a\u5e38\u3001\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b 4 \u3064\u306e\u95a2\u6570\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getAuthorizationUri"}),": \u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u8a8d\u53ef (Authorization) URI \u3092\u751f\u6210\u3057\u307e\u3059\u3002GitHub \u306e\u5834\u5408\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a",(0,i.jsx)(n.code,{children:"https://github.com/login/oauth/authorize?client_id={clientId}&redirect_uri={redirectUri}&state={state}"}),"\u3002\u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u958b\u767a\u8005\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u3001\u6b63\u3057\u3044 URI \u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authorizationCallbackHandler"}),": \u8a8d\u53ef (Authorization) \u30b3\u30fc\u30eb\u30d0\u30c3\u30af URI \u3067\u8fd4\u3055\u308c\u305f\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u5024\u3092\u4fdd\u8b77\u3057\u3001\u8a8d\u53ef (Authorization) ",(0,i.jsx)(n.code,{children:"code"})," \u3092\u62bd\u51fa\u3057\u3001\u6f5c\u5728\u7684\u306a\u30a8\u30e9\u30fc\u3092\u51e6\u7406\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getAccessToken"}),": \u8a8d\u53ef (Authorization) ",(0,i.jsx)(n.code,{children:"code"})," \u3092\u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u306b\u4ea4\u63db\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getUserInfo"}),": \u30a2\u30af\u30bb\u30b9 \u30c8\u30fc\u30af\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30bd\u30fc\u30b7\u30e3\u30eb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304b\u3089\u30e6\u30fc\u30b6\u30fc\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ed6\u306e\u4e00\u822c\u7684\u306a\u30ed\u30b8\u30c3\u30af\u306e\u307b\u3068\u3093\u3069\u306f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u30ad\u30c3\u30c8\u3067\u51e6\u7406\u3055\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u4f5c\u696d\u304c\u5bb9\u6613\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u5f8c\u306b\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u6700\u5f8c\u3067\u3001GitHub \u30b3\u30cd\u30af\u30bf\u30fc\u3068\u540c\u3058\u30b3\u30fc\u30c9\u69cb\u9020\u306b\u5f93\u3063\u3066\u30b3\u30cd\u30af\u30bf\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u3060\u3051\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const createGithubConnector: CreateConnector<SocialConnector> = async ({ getConfig }) => {\n  return {\n    metadata: defaultMetadata,\n    type: ConnectorType.Social,\n    configGuard: githubConfigGuard,\n    getAuthorizationUri: getAuthorizationUri(getConfig),\n    getUserInfo: getUserInfo(getConfig),\n  };\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-test-the-connector",children:"\u30b9\u30c6\u30c3\u30d7 3: \u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b"}),"\n",(0,i.jsx)(n.h3,{id:"unit-test",children:"\u30e6\u30cb\u30c3\u30c8\u30c6\u30b9\u30c8"}),"\n",(0,i.jsx)(n.p,{children:"\u307e\u305a\u3001\u3044\u304f\u3064\u304b\u306e\u30e6\u30cb\u30c3\u30c8\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3092\u66f8\u304d\u3001\u57fa\u672c\u7684\u306a\u6a5f\u80fd\u304c\u671f\u5f85\u901a\u308a\u306b\u52d5\u4f5c\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"local-test",children:"\u30ed\u30fc\u30ab\u30eb\u30c6\u30b9\u30c8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u30ed\u30fc\u30ab\u30eb\u74b0\u5883\u3067 Logto \u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\uff1aLogto \u306f\u30ed\u30fc\u30ab\u30eb\u3067\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u3044\u304f\u3064\u304b\u306e\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002CLI \u3092\u4f7f\u7528\u3059\u308b\u304b\u3001docker \u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304b\u3089\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044 ",(0,i.jsx)(n.a,{href:"/logto-oss/using-cli/install-logto/",children:"\u8a73\u7d30\u306f\u3053\u3061\u3089"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u30ab\u30b9\u30bf\u30e0\u30b3\u30cd\u30af\u30bf\u30fc\u3092 Logto \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u30ea\u30f3\u30af\u3059\u308b\uff1aCLI \u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30b7\u30f3\u30dc\u30ea\u30c3\u30af\u30ea\u30f3\u30af\u3092 Logto \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,i.jsx)(n.a,{href:"/logto-oss/using-cli/manage-connectors/#link-local-connectors",children:"\u8a73\u7d30\u306f\u3053\u3061\u3089"}),"\u3002","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd logto\nnpx @logto/cli connector link -p .\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30ea\u30f3\u30af\u3057\u305f\u5f8c\u3001",(0,i.jsx)(n.code,{children:"<logto-root-path>/packages/core/connectors"})," \u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["Logto \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u518d\u8d77\u52d5\u3057\u3001Logto \u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u79fb\u52d5\u3059\u308b\u3068\u3001\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u30ea\u30b9\u30c8\u306b\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\u3002","\n","\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(o,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Console > Sign-in experience > Sign-up and sign-in"})," > \u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3\u3067\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u300c\u30e9\u30a4\u30d6\u30d7\u30ec\u30d3\u30e5\u30fc\u300d\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066\u30c7\u30e2\u30a2\u30d7\u30ea\u3067\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},79621:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var t=o(58101);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);