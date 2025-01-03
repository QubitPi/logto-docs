"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[55164],{42306:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>t});var s=i(25105),c=i(79621);const t=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001Logto \u30b3\u30cd\u30af\u30bf\u30fc\u306b\u95a2\u3059\u308b\u57fa\u672c\u7684\u306a\u77e5\u8b58\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u3082\u3057\u6301\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,s.jsx)(n.a,{href:"/connectors",children:"\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u8a2d\u5b9a"})," \u30ac\u30a4\u30c9\u3092\u53c2\u7167\u3057\u3066\u59cb\u3081\u3066\u304f\u3060\u3055\u3044\u3002"]})})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},83283:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"integrations/social/wechat-native/README","title":"WeChat \u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30ed\u30b0\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b (\u30cd\u30a4\u30c6\u30a3\u30d6)","description":"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea (iOS \u304a\u3088\u3073 Android) \u3067\u306e WeChat \u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3\u7528\u306e\u516c\u5f0f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/integrations/social/wechat-native/README.mdx","sourceDirName":"integrations/social/wechat-native","slug":"/integrations/wechat-native","permalink":"/ja/integrations/wechat-native","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/ja/docusaurus-plugin-content-docs/current/integrations/social/wechat-native/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wechat-native","sidebar_label":"WeChat (Native)","sidebar_custom_props":{"description":"WeChat \u306f\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30a2\u30d7\u30ea\u3067\u3059\u3002","logoFilename":"wechat.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"OIDC (Social)","permalink":"/ja/integrations/oidc"},"next":{"title":"WeChat (Web)","permalink":"/ja/integrations/wechat-web"}}');var c=i(25105),t=i(79621),r=i(42306);const l={slug:"/integrations/wechat-native",sidebar_label:"WeChat (Native)",sidebar_custom_props:{description:"WeChat \u306f\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30c8\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30a2\u30d7\u30ea\u3067\u3059\u3002",logoFilename:"wechat.svg"}},a="WeChat \u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30ed\u30b0\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b (\u30cd\u30a4\u30c6\u30a3\u30d6)",d={},o=[...r.RM,{value:"\u306f\u3058\u3081\u306b",id:"get-started",level:2},{value:"WeChat \u30aa\u30fc\u30d7\u30f3\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b",id:"create-a-mobile-app-in-the-wechat-open-platform",level:2},{value:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b",id:"create-an-account",level:3},{value:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b",id:"create-a-mobile-app",level:3},{value:"\u57fa\u672c\u60c5\u5831",id:"basic-info",level:4},{value:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u60c5\u5831",id:"platform-info",level:4},{value:"\u30ec\u30d3\u30e5\u30fc\u7d50\u679c\u3092\u5f85\u3064",id:"waiting-for-the-review-result",level:4},{value:"\u30a2\u30d7\u30ea\u3067 WeChat \u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b",id:"enable-wechat-native-sign-in-in-your-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"WeChat \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b",id:"test-wechat-native-connector",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"wechat-\u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30ed\u30b0\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b-\u30cd\u30a4\u30c6\u30a3\u30d6",children:"WeChat \u3092\u4f7f\u7528\u3057\u3066\u30bd\u30fc\u30b7\u30e3\u30eb\u30ed\u30b0\u30a4\u30f3\u3092\u8a2d\u5b9a\u3059\u308b (\u30cd\u30a4\u30c6\u30a3\u30d6)"})}),"\n",(0,c.jsx)(n.p,{children:"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea (iOS \u304a\u3088\u3073 Android) \u3067\u306e WeChat \u30bd\u30fc\u30b7\u30e3\u30eb\u30b5\u30a4\u30f3\u30a4\u30f3\u7528\u306e\u516c\u5f0f Logto \u30b3\u30cd\u30af\u30bf\u30fc\u3067\u3059\u3002"}),"\n",(0,c.jsx)(r.Ay,{}),"\n",(0,c.jsx)(n.h2,{id:"get-started",children:"\u306f\u3058\u3081\u306b"}),"\n",(0,c.jsxs)(n.p,{children:["\u30b3\u30cd\u30af\u30bf\u30fc\u306e\u6982\u5ff5\u304c\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u3084\u3001\u3053\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u306b\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5\u304c\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001",(0,c.jsx)(n.a,{href:"/connectors/social-connectors",children:"Logto \u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3067\u306f\u3001WeChat \u306e\u30b5\u30a4\u30f3\u30a4\u30f3\u65b9\u6cd5\u3068\u3057\u3066\u30a6\u30a7\u30d6\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002WeChat \u30a2\u30d7\u30ea\u3078\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3067\u3042\u308a\u3001\u307e\u305f\u305d\u306e SDK \u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6016\u305d\u3046\u306b\u805e\u3053\u3048\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u5fc3\u914d\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u7c21\u5358\u306b\u5bfe\u51e6\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"create-a-mobile-app-in-the-wechat-open-platform",children:"WeChat \u30aa\u30fc\u30d7\u30f3\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,c.jsx)(n.strong,{children:"\u30d2\u30f3\u30c8"})]}),"\n",(0,c.jsx)(n.p,{children:"\u3059\u3067\u306b\u5b8c\u4e86\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u4e00\u90e8\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u30b9\u30ad\u30c3\u30d7\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"create-an-account",children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://open.weixin.qq.com/",children:"https://open.weixin.qq.com/"})," \u3092\u958b\u304d\u3001\u53f3\u4e0a\u306e\u300c\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u30d7\u30ed\u30bb\u30b9\u3092\u5b8c\u4e86\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"create-a-mobile-app",children:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,c.jsx)(n.p,{children:"\u4f5c\u6210\u3057\u305f\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u307e\u3059\u3002\u300c\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u300d(\u79fb\u52a8\u5e94\u7528) \u30bf\u30d6\u3067\u3001\u5927\u304d\u306a\u7dd1\u8272\u306e\u30dc\u30bf\u30f3\u300c\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u300d(\u521b\u5efa\u79fb\u52a8\u5e94\u7528) \u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u30a2\u30d7\u30ea\u30bf\u30d6",src:i(27883).A+"",width:"328",height:"266"})}),"\n",(0,c.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d5\u30a9\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5165\u529b\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u3092\u4f5c\u6210",src:i(12960).A+"",width:"2000",height:"617"})}),"\n",(0,c.jsx)(n.h4,{id:"basic-info",children:"\u57fa\u672c\u60c5\u5831"}),"\n",(0,c.jsx)(n.p,{children:"\u307b\u3068\u3093\u3069\u306f\u975e\u5e38\u306b\u7c21\u5358\u3067\u3001\u3044\u304f\u3064\u304b\u306e\u30d2\u30f3\u30c8\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"WeChat \u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u30c6\u30b9\u30c8\u3057\u305f\u3044\u3060\u3051\u3067\u3001\u30a2\u30d7\u30ea\u304c App Store \u306b\u306a\u3044\u5834\u5408\u3001\u300c\u30a2\u30d7\u30ea\u304c\u5229\u7528\u53ef\u80fd\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u300c\u3044\u3044\u3048\u300d\u3092\u9078\u629e\u3057\u3066\u300c\u30a2\u30d7\u30ea\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30ea\u30f3\u30af\u300d\u3092\u30b9\u30ad\u30c3\u30d7\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u300c\u30a2\u30d7\u30ea\u64cd\u4f5c\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u300d\u306f\u96e3\u3057\u305d\u3046\u306b\u898b\u3048\u307e\u3059\u3002\u79c1\u305f\u3061\u306e\u7d4c\u9a13\u304b\u3089\u8a00\u3048\u3070\u3001\u30ec\u30d3\u30e5\u30fc\u3092\u901a\u904e\u3059\u308b\u53ef\u80fd\u6027\u3092\u9ad8\u3081\u308b\u305f\u3081\u306b\u3001\u7c21\u5358\u306a\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u3068\u3044\u304f\u3064\u304b\u306e\u30a2\u30d7\u30ea\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3092\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u300c\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u9032\u307f\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.h4,{id:"platform-info",children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u60c5\u5831"}),"\n",(0,c.jsx)(n.p,{children:"Logto \u3092 WeChat \u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30a4\u30f3\u30a4\u30f3\u3068\u7d71\u5408\u3059\u308b\u305f\u3081\u306b\u3001iOS \u304a\u3088\u3073 Android \u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u3044\u305a\u308c\u304b\u307e\u305f\u306f\u4e21\u65b9\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"iOS \u30a2\u30d7\u30ea"})}),"\n",(0,c.jsx)(n.p,{children:"\u300ciOS \u30a2\u30d7\u30ea\u300d(iOS \u5e94\u7528) \u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u30a2\u30d7\u30ea\u306e\u5bfe\u8c61\u30c7\u30d0\u30a4\u30b9\u30bf\u30a4\u30d7\u3092\u9069\u5b9c\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u30a2\u30d7\u30ea\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",src:i(11272).A+"",width:"1614",height:"374"})}),"\n",(0,c.jsx)(n.p,{children:"App Store \u306e\u53ef\u7528\u6027\u3067\u300c\u3044\u3044\u3048\u300d\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u306f\u3001\u3053\u3053\u3067\u300cAppStore \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30a2\u30c9\u30ec\u30b9\u300d\u3092\u5165\u529b\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"Bundle ID"}),"\u3001",(0,c.jsx)(n.em,{children:"\u30c6\u30b9\u30c8\u30d0\u30fc\u30b8\u30e7\u30f3 Bundle ID"}),"\u3001\u304a\u3088\u3073 ",(0,c.jsx)(n.em,{children:"\u30e6\u30cb\u30d0\u30fc\u30b5\u30eb\u30ea\u30f3\u30af"})," \u3092\u5165\u529b\u3057\u307e\u3059\uff08\u5b9f\u969b\u306b\u306f\u30011 \u3064\u306e\u30ea\u30f3\u30af\u3060\u3051\u304c\u5fc5\u8981\u3067\u3059 \ud83d\ude02\uff09\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"Bundle ID"})," \u3068 ",(0,c.jsx)(n.em,{children:"\u30c6\u30b9\u30c8\u30d0\u30fc\u30b8\u30e7\u30f3 Bundle ID"})," \u306f\u540c\u3058\u5024\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,c.jsx)(n.strong,{children:"\u30d2\u30f3\u30c8"})]}),"\n",(0,c.jsxs)(n.p,{children:["WeChat \u306f\u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30a4\u30f3\u30a4\u30f3\u306b\u30e6\u30cb\u30d0\u30fc\u30b5\u30eb\u30ea\u30f3\u30af\u3092\u8981\u6c42\u3057\u307e\u3059\u3002\u8a2d\u5b9a\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u3084\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3001",(0,c.jsx)(n.a,{href:"https://developer.apple.com/ios/universal-links/",children:"Apple \u516c\u5f0f\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Android \u30a2\u30d7\u30ea"})}),"\n",(0,c.jsx)(n.p,{children:"\u300cAndroid \u30a2\u30d7\u30ea\u300d(Android \u5e94\u7528) \u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Android \u30a2\u30d7\u30ea\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",src:i(87856).A+"",width:"1538",height:"332"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7f72\u540d"})," (\u5e94\u7528\u7b7e\u540d) \u3068 ",(0,c.jsx)(n.em,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8\u540d"})," (\u5e94\u7528\u5305\u540d) \u3092\u5165\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u7f72\u540d\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u30a2\u30d7\u30ea\u306b\u7f72\u540d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,c.jsx)(n.a,{href:"https://developer.android.com/studio/publish/app-signing",children:"\u30a2\u30d7\u30ea\u306e\u7f72\u540d"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7f72\u540d\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001",(0,c.jsx)(n.code,{children:"signingReport"})," \u30bf\u30b9\u30af\u3092\u5b9f\u884c\u3057\u3066\u7f72\u540d\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"./gradlew your-android-project:signingReport\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5bfe\u5fdc\u3059\u308b\u30d3\u30eb\u30c9\u30d0\u30ea\u30a2\u30f3\u30c8\u306e\u30ec\u30dd\u30fc\u30c8\u306e ",(0,c.jsx)(n.code,{children:"MD5"})," \u5024\u304c ",(0,c.jsx)(n.em,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7f72\u540d"})," (\u5e94\u7528\u7b7e\u540d) \u306b\u306a\u308a\u307e\u3059\u304c\u3001\u5024\u304b\u3089\u3059\u3079\u3066\u306e\u30bb\u30df\u30b3\u30ed\u30f3\u3092\u524a\u9664\u3057\u3001\u5c0f\u6587\u5b57\u306b\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\uff1a",(0,c.jsx)(n.code,{children:"1A:2B:3C:4D"})," -> ",(0,c.jsx)(n.code,{children:"1a2b3c4d"}),"\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"waiting-for-the-review-result",children:"\u30ec\u30d3\u30e5\u30fc\u7d50\u679c\u3092\u5f85\u3064"}),"\n",(0,c.jsx)(n.p,{children:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u60c5\u5831\u3092\u5165\u529b\u3057\u305f\u5f8c\u3001\u300c\u30ec\u30d3\u30e5\u30fc\u3092\u9001\u4fe1\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u7d9a\u884c\u3057\u307e\u3059\u3002\u901a\u5e38\u3001\u30ec\u30d3\u30e5\u30fc\u306f\u8fc5\u901f\u306b\u884c\u308f\u308c\u30011\u301c2 \u65e5\u4ee5\u5185\u306b\u7d42\u4e86\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u30ec\u30d3\u30e5\u30fc\u62c5\u5f53\u8005\u306f\u5404\u63d0\u51fa\u6642\u306b\u30e9\u30f3\u30c0\u30e0\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u308b\u3068\u63a8\u6e2c\u3055\u308c\u307e\u3059\u3002\u57fa\u6e96\u304c\u5909\u52d5\u3059\u308b\u305f\u3081\u3001\u6700\u521d\u306f\u62d2\u5426\u3055\u308c\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u8ae6\u3081\u306a\u3044\u3067\u304f\u3060\u3055\u3044\uff01\u73fe\u72b6\u3092\u8aac\u660e\u3057\u3001\u3069\u306e\u3088\u3046\u306b\u4fee\u6b63\u3059\u308b\u304b\u3092\u30ec\u30d3\u30e5\u30fc\u62c5\u5f53\u8005\u306b\u5c0b\u306d\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"enable-wechat-native-sign-in-in-your-app",children:"\u30a2\u30d7\u30ea\u3067 WeChat \u30cd\u30a4\u30c6\u30a3\u30d6\u30b5\u30a4\u30f3\u30a4\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\n",(0,c.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,c.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u306b ",(0,c.jsx)(n.a,{href:"/quick-starts/swift",children:"Logto iOS SDK"})," \u3092\u7d71\u5408\u3057\u3066\u3044\u308b\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u975e\u5e38\u306b\u7c21\u5358\u3067\u3001WeChat SDK \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3080\u5fc5\u8981\u3055\u3048\u3042\u308a\u307e\u305b\u3093\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"1. Xcode \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30e6\u30cb\u30d0\u30fc\u30b5\u30eb\u30ea\u30f3\u30af\u3068 URL \u30b9\u30ad\u30fc\u30e0\u3092\u8a2d\u5b9a\u3059\u308b"})}),"\n",(0,c.jsx)(n.p,{children:"Xcode \u30d7\u30ed\u30b8\u30a7\u30af\u30c8 -> Signing & Capabilities \u30bf\u30d6\u3067\u3001\u300cAssociated Domains\u300d\u6a5f\u80fd\u3068\u4ee5\u524d\u306b\u8a2d\u5b9a\u3057\u305f\u30e6\u30cb\u30d0\u30fc\u30b5\u30eb\u30ea\u30f3\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u30e6\u30cb\u30d0\u30fc\u30b5\u30eb\u30ea\u30f3\u30af",src:i(41465).A+"",width:"1180",height:"274"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6b21\u306b\u300cInfo\u300d\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3001WeChat \u30a2\u30d7\u30ea ID \u3092\u4f7f\u7528\u3057\u3066",(0,c.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"\u30ab\u30b9\u30bf\u30e0 URL \u30b9\u30ad\u30fc\u30e0"}),"\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u30ab\u30b9\u30bf\u30e0 URL \u30b9\u30ad\u30fc\u30e0",src:i(65294).A+"",width:"1216",height:"476"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u5f8c\u306b ",(0,c.jsx)(n.code,{children:"Info.plist"})," \u3092\u958b\u304d\u3001",(0,c.jsx)(n.code,{children:"LSApplicationQueriesSchemes"})," \u306e\u4e0b\u306b ",(0,c.jsx)(n.code,{children:"weixinULAPI"})," \u3068 ",(0,c.jsx)(n.code,{children:"weixin"})," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Plist",src:i(71133).A+"",width:"1104",height:"262"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\ud83e\udd26 ",(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u975e\u5e38\u306b\u5408\u7406\u7684\u3067\u306f\u306a\u3044\u3053\u3068\u306f\u308f\u304b\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u3053\u308c\u306f\u79c1\u305f\u3061\u304c\u898b\u3064\u3051\u305f\u6700\u5c0f\u9650\u306e\u5b9f\u884c\u53ef\u80fd\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,c.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/Access_Guide/iOS.html",children:"\u9b54\u6cd5\u306e\u516c\u5f0f\u30ac\u30a4\u30c9"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["2. ",(0,c.jsx)(n.code,{children:"LogtoSocialPluginWechat"})," \u3092 Xcode \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b"]})}),"\n",(0,c.jsx)(n.p,{children:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u8ffd\u52a0",src:i(23863).A+"",width:"1108",height:"310"})}),"\n",(0,c.jsxs)(n.p,{children:["\u305d\u3057\u3066\u3001Build Settings > Linking > Other Linker Flags \u306b ",(0,c.jsx)(n.code,{children:"-ObjC"})," \u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"\u30ea\u30f3\u30ab\u30fc\u30d5\u30e9\u30b0",src:i(14570).A+"",width:"1134",height:"202"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u306f WeChat Open SDK 1.9.2 \u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f\u5f8c\u3001",(0,c.jsx)(n.code,{children:"import WechatOpenSDK"})," \u3092\u76f4\u63a5\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["3. \u30d7\u30e9\u30b0\u30a4\u30f3\u3092 ",(0,c.jsx)(n.code,{children:"LogtoClient"})," \u306e\u521d\u671f\u5316\u30aa\u30d7\u30b7\u30e7\u30f3\u306b\u8ffd\u52a0\u3059\u308b"]})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-swift",children:"let logtoClient = LogtoClient(\n  useConfig: config,\n  socialPlugins: [LogtoSocialPluginWechat()]\n)\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["4. ",(0,c.jsx)(n.code,{children:"onOpenURL"})," \u3092\u9069\u5207\u306b\u51e6\u7406\u3059\u308b"]})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u95a2\u6570 ",(0,c.jsx)(n.code,{children:"LogtoClient.handle(url:)"})," \u306f\u3001\u3042\u306a\u305f\u304c\u6709\u52b9\u306b\u3057\u305f\u3059\u3079\u3066\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u51e6\u7406\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u4e00\u5ea6\u3060\u3051\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-swift",children:"// SwiftUI\nYourRootView()\n  .onOpenURL { url in\n      LogtoClient.handle(url: url)\n  }\n\n// \u307e\u305f\u306f AppDelegate\nfunc application(_ app: UIApplication, open url: URL, options: /*...*/) -> Bool {\n  LogtoClient.handle(url: url)\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,c.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u306b ",(0,c.jsx)(n.a,{href:"/quick-starts/android",children:"Logto Android SDK"})," \u3092\u7d71\u5408\u3057\u3066\u3044\u308b\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u975e\u5e38\u306b\u7c21\u5358\u3067\u3001WeChat SDK \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3080\u5fc5\u8981\u3055\u3048\u3042\u308a\u307e\u305b\u3093\uff1a"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["1. ",(0,c.jsx)(n.code,{children:"Wechat Open SDK"})," \u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b"]})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"mavenCentral()"})," \u30ea\u30dd\u30b8\u30c8\u30ea\u304c Gradle \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u542b\u307e\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-kotlin",children:"repositories {\n  // ...\n  mavenCentral()\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"Wechat Open SDK \u3092\u4f9d\u5b58\u95a2\u4fc2\u306b\u8ffd\u52a0\u3057\u307e\u3059\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-kotlin",children:"dependencies {\n  // ...\n  api(\"com.tencent.mm.opensdk:wechat-sdk-android:6.8.0\")  // kotlin-script\n  // \u307e\u305f\u306f\n  api 'com.tencent.mm.opensdk:wechat-sdk-android:6.8.0'   // groovy-script\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["2. ",(0,c.jsx)(n.code,{children:"WXEntryActivity"})," \u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5c0e\u5165\u3059\u308b"]})}),"\n",(0,c.jsxs)(n.p,{children:["\u30d1\u30c3\u30b1\u30fc\u30b8\u30eb\u30fc\u30c8\u306e\u4e0b\u306b ",(0,c.jsx)(n.code,{children:"wxapi"})," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f5c\u6210\u3057\u3001",(0,c.jsx)(n.code,{children:"wxapi"})," \u30d1\u30c3\u30b1\u30fc\u30b8\u306b ",(0,c.jsx)(n.code,{children:"WXEntryActivity"})," \u3092\u8ffd\u52a0\u3057\u307e\u3059\uff08\u4f8b\u3068\u3057\u3066 ",(0,c.jsx)(n.code,{children:"com.sample.app"})," \u3092\u4f7f\u7528\uff09\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-kotlin",children:"// WXEntryActivity.kt\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\nclass WXEntryActivity: WechatSocialResultActivity()\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"// WXEntryActivity.java\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\npublic class WXEntryActivity extends WechatSocialResultActivity {}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e ",(0,c.jsx)(n.code,{children:"WXEntryActivity"})," \u306e\u6700\u7d42\u4f4d\u7f6e\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff08\u4f8b\u3068\u3057\u3066 Kotlin \u3092\u4f7f\u7528\uff09\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"src/main/kotlin/com/sample/app/wxapi/WXEntryActivity.kt\n"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsxs)(n.strong,{children:["3. ",(0,c.jsx)(n.code,{children:"AndroidManifest.xml"})," \u3092\u4fee\u6b63\u3059\u308b"]})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"AndroidManifest.xml"})," \u306b\u6b21\u306e\u884c\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-xml",children:'\\<?xml version="1.0" encoding="utf-8"?>\n\\<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  package="com.sample.app">\n\n  \\<application>\n    \\\x3c!-- \u8ffd\u52a0\u3059\u308b\u884c --\x3e\n    \\<activity android:name=".wxapi.WXEntryActivity" android:exported="true"/>\n  \\</application>\n\n\\</manifest>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"test-wechat-native-connector",children:"WeChat \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u30c6\u30b9\u30c8\u3059\u308b"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ee5\u4e0a\u3067\u3059\u3002\u30b5\u30a4\u30f3\u30a4\u30f3\u4f53\u9a13\u3067 ",(0,c.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"WeChat \u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30cd\u30af\u30bf\u30fc\u304c\u6709\u52b9\u306b\u306a\u308b\u3068\u3001\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c\u3057\u3001\u52d5\u4f5c\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,c.jsxs)(n.p,{children:["WeChat \u306f WeChat \u30a2\u30d7\u30ea\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u30c7\u30d0\u30a4\u30b9\u306b\u5bfe\u3059\u308b\u8a08\u753b\u3092\u6301\u3063\u3066\u3044\u307e\u305b\u3093\u3002Logto \u306f\u305d\u306e\u5834\u5408\u3001\u30b5\u30a4\u30f3\u30a4\u30f3\u4e2d\u306b\u3053\u306e\u30b3\u30cd\u30af\u30bf\u30fc\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\uff08\u3053\u308c\u306f ",(0,c.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/WeChat_Login/Development_Guide.html",children:"\u516c\u5f0f\u958b\u767a\u30ac\u30a4\u30c9"})," \u304b\u3089\u306e\u63a8\u5968\u65b9\u6cd5\u3067\u3059\uff09\u3002"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},23863:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/add-framework-a2909ba00d89aecf527fee6f6eb2e222.png"},27883:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/app-tabs-0fdd6440f5140b067ca25c7645605e6d.png"},12960:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/create-mobile-app-0f8e3cd8ec9e5c2b0293377a21fb86a0.png"},65294:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/custom-url-scheme-abb8ac9a9639a93e2db7399b16c788b1.png"},14570:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/linker-flags-0ad70a41be8bf97f4d9d249890178228.png"},87856:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/platform-android-app-aecce8c59d4104fbb6cdbeec8e64fff8.png"},11272:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/platform-b86788c4ba09b775d6930cac8ce81e5d.png"},71133:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/plist-7f1222158e4ce1e755332cae7832b123.png"},41465:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/universal-link-80235270b511eb79e20fc07f4fa4cb67.png"},79621:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(58101);const c={},t=s.createContext(c);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);