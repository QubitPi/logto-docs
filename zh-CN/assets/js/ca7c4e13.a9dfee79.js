"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11723],{70053:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>t});var s=i(25105),l=i(79621);const t=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,l.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5bf9 Logto \u8fde\u63a5\u5668 (Connectors) \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u67e5\u770b ",(0,s.jsx)(n.a,{href:"/connectors",children:"\u914d\u7f6e\u8fde\u63a5\u5668"})," \u6307\u5357\u4ee5\u5f00\u59cb\u4e86\u89e3\u3002"]})})}function r(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},38379:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"integrations/social/apple/README","title":"\u8bbe\u7f6e Apple \u793e\u4ea4\u767b\u5f55","description":"Logto \u5b98\u65b9\u7684 Apple \u793e\u4ea4\u767b\u5f55\u8fde\u63a5\u5668\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/social/apple/README.mdx","sourceDirName":"integrations/social/apple","slug":"/integrations/apple","permalink":"/zh-CN/integrations/apple","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/social/apple/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/apple","sidebar_label":"Apple","sidebar_custom_props":{"description":"Apple \u662f\u4e00\u5bb6\u63d0\u4f9b\u9ad8\u7aef\u786c\u4ef6\u548c\u8f6f\u4ef6\u7684\u8de8\u56fd\u516c\u53f8\u3002"}},"sidebar":"integrationsSidebar","previous":{"title":"Alipay (Web)","permalink":"/zh-CN/integrations/alipay-web"},"next":{"title":"Microsoft","permalink":"/zh-CN/integrations/azuread"}}');var l=i(25105),t=i(79621),o=i(70053);const r={slug:"/integrations/apple",sidebar_label:"Apple",sidebar_custom_props:{description:"Apple \u662f\u4e00\u5bb6\u63d0\u4f9b\u9ad8\u7aef\u786c\u4ef6\u548c\u8f6f\u4ef6\u7684\u8de8\u56fd\u516c\u53f8\u3002"}},p="\u8bbe\u7f6e Apple \u793e\u4ea4\u767b\u5f55",c={},a=[...o.RM,{value:"\u5f00\u59cb",id:"get-started",level:2},{value:"\u4e3a\u4f60\u7684\u5e94\u7528\u542f\u7528 Apple \u767b\u5f55",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"\u521b\u5efa\u6807\u8bc6\u7b26",id:"create-an-identifier",level:3},{value:"\u4e3a\u4f60\u7684\u6807\u8bc6\u7b26\u542f\u7528 Apple \u767b\u5f55",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"\u914d\u7f6e\u6743\u9650",id:"configure-scope",level:2},{value:"\u914d\u7f6e\u6743\u9650\u7684\u9677\u9631",id:"pitfalls-of-configuring-scope",level:3},{value:"\u6d4b\u8bd5 Apple \u8fde\u63a5\u5668",id:"test-apple-connector",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u8bbe\u7f6e-apple-\u793e\u4ea4\u767b\u5f55",children:"\u8bbe\u7f6e Apple \u793e\u4ea4\u767b\u5f55"})}),"\n",(0,l.jsx)(n.p,{children:"Logto \u5b98\u65b9\u7684 Apple \u793e\u4ea4\u767b\u5f55\u8fde\u63a5\u5668\u3002"}),"\n",(0,l.jsx)(o.Ay,{}),"\n",(0,l.jsx)(n.h2,{id:"get-started",children:"\u5f00\u59cb"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u4e86\u89e3\u8fde\u63a5\u5668\u7684\u6982\u5ff5\u6216\u4e0d\u77e5\u9053\u5982\u4f55\u5c06\u6b64\u8fde\u63a5\u5668\u6dfb\u52a0\u5230\u4f60\u7684\u767b\u5f55\u4f53\u9a8c\u4e2d\uff0c\u8bf7\u53c2\u9605 ",(0,l.jsx)(n.a,{href:"/connectors/social-connectors",children:"Logto \u6559\u7a0b"}),"\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u5e94\u7528\u4e2d\u6709\u5176\u4ed6\u793e\u4ea4\u767b\u5f55\u65b9\u6cd5\uff0cAppStore \u8981\u6c42\u5fc5\u987b\u63d0\u4f9b Apple \u767b\u5f55\u3002\n\u5982\u679c\u4f60\u4e5f\u63d0\u4f9b Android \u5e94\u7528\uff0c\u5728 Android \u8bbe\u5907\u4e0a\u63d0\u4f9b Apple \u767b\u5f55\u662f\u5f88\u597d\u7684\u9009\u62e9\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u6ce8\u518c ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-app",children:"\u4e3a\u4f60\u7684\u5e94\u7528\u542f\u7528 Apple \u767b\u5f55"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5373\u4f7f\u4f60\u53ea\u60f3\u5728 web \u5e94\u7528\u4e0a\u5b9e\u73b0 Apple \u767b\u5f55\uff0c\u4f60\u4ecd\u7136\u9700\u8981\u62e5\u6709\u4e00\u4e2a\u73b0\u6709\u7684\u5e94\u7528\uff0c\u8be5\u5e94\u7528\u878d\u5165\u4e86 AppStore \u751f\u6001\u7cfb\u7edf\uff08\u5373\u62e5\u6709\u6709\u6548\u7684 App ID\uff09\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 Xcode -> \u9879\u76ee\u8bbe\u7f6e -> \u7b7e\u540d\u548c\u529f\u80fd\uff0c\u6216\u8005\u8bbf\u95ee ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/bundleId",children:"Certificates, Identifiers & Profiles"})," \u6765\u5b8c\u6210\u6b64\u64cd\u4f5c\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u542f\u7528 Apple \u767b\u5f55",src:i(62824).A+"",width:"1220",height:"398"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple",children:"Apple \u5b98\u65b9\u6587\u6863"})," \u4e2d\u7684\u201c\u542f\u7528 App ID\u201d\u90e8\u5206\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"create-an-identifier",children:"\u521b\u5efa\u6807\u8bc6\u7b26"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/serviceId",children:"Certificates, Identifiers & Profiles"}),"\uff0c\u7136\u540e\u70b9\u51fb\u201c\u6807\u8bc6\u7b26\u201d\u65c1\u8fb9\u7684\u201c+\u201d\u6309\u94ae\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u5728\u201c\u6ce8\u518c\u65b0\u6807\u8bc6\u7b26\u201d\u9875\u9762\uff0c\u9009\u62e9\u201c\u670d\u52a1 ID\u201d\u5e76\u70b9\u51fb\u201c\u7ee7\u7eed\u201d\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u586b\u5199\u201c\u63cf\u8ff0\u201d\u548c\u201c\u6807\u8bc6\u7b26\u201d\uff08\u4f8b\u5982\uff0c",(0,l.jsx)(n.code,{children:"Logto Test"})," \u548c ",(0,l.jsx)(n.code,{children:"io.logto.test"}),"\uff09\uff0c\u7136\u540e\u70b9\u51fb\u201c\u7ee7\u7eed\u201d\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u4ed4\u7ec6\u68c0\u67e5\u4fe1\u606f\u5e76\u70b9\u51fb\u201c\u6ce8\u518c\u201d\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-identifier",children:"\u4e3a\u4f60\u7684\u6807\u8bc6\u7b26\u542f\u7528 Apple \u767b\u5f55"}),"\n",(0,l.jsx)(n.p,{children:"\u70b9\u51fb\u4f60\u521a\u521b\u5efa\u7684\u6807\u8bc6\u7b26\u3002\u5728\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u4e0a\u52fe\u9009\u201cApple \u767b\u5f55\u201d\u5e76\u70b9\u51fb\u201c\u914d\u7f6e\u201d\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u542f\u7528 Apple \u767b\u5f55",src:i(78635).A+"",width:"1170",height:"186"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6253\u5f00\u7684\u6a21\u6001\u7a97\u53e3\u4e2d\uff0c\u9009\u62e9\u4f60\u521a\u521a\u542f\u7528 Apple \u767b\u5f55\u7684 App ID\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u8f93\u5165\u4f60\u7684 Logto \u5b9e\u4f8b\u7684\u57df\u540d\uff0c\u4e0d\u5e26\u534f\u8bae\u548c\u7aef\u53e3\uff0c\u4f8b\u5982\uff0c",(0,l.jsx)(n.code,{children:"your.logto.domain"}),"\uff1b\u7136\u540e\u8f93\u5165\u201c\u8fd4\u56de URL\u201d\uff08\u5373\u91cd\u5b9a\u5411 URI\uff09\uff0c\u8fd9\u662f\u5e26\u6709 ",(0,l.jsx)(n.code,{children:"/callback/${connector_id}"})," \u7684 Logto URL\uff0c\u4f8b\u5982\uff0c",(0,l.jsx)(n.code,{children:"https://your.logto.domain/callback/apple-universal"}),"\u3002\u4f60\u53ef\u4ee5\u5728 Admin Console \u4e2d\u521b\u5efa Apple \u8fde\u63a5\u5668\u540e\u83b7\u53d6\u968f\u673a\u751f\u6210\u7684 ",(0,l.jsx)(n.code,{children:"connector_id"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u57df\u540d\u548c URL",src:i(490).A+"",width:"988",height:"668"})}),"\n",(0,l.jsx)(n.p,{children:"\u70b9\u51fb\u201c\u4e0b\u4e00\u6b65\u201d\uff0c\u7136\u540e\u70b9\u51fb\u201c\u5b8c\u6210\u201d\u4ee5\u5173\u95ed\u6a21\u6001\u7a97\u53e3\u3002\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u201c\u7ee7\u7eed\u201d\uff0c\u7136\u540e\u70b9\u51fb\u201c\u4fdd\u5b58\u201d\u4ee5\u4fdd\u5b58\u4f60\u7684\u914d\u7f6e\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,l.jsxs)(n.p,{children:["Apple \u4e0d\u5141\u8bb8\u4f7f\u7528 HTTP \u534f\u8bae\u548c ",(0,l.jsx)(n.code,{children:"localhost"})," \u57df\u540d\u7684\u8fd4\u56de URL\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u5728\u672c\u5730\u6d4b\u8bd5\uff0c\u4f60\u9700\u8981\u7f16\u8f91 ",(0,l.jsx)(n.code,{children:"/etc/hosts"})," \u6587\u4ef6\uff0c\u5c06 localhost \u6620\u5c04\u5230\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u5e76\u8bbe\u7f6e\u672c\u5730 HTTPS \u73af\u5883\u3002",(0,l.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," \u53ef\u4ee5\u5e2e\u52a9\u4f60\u8bbe\u7f6e\u672c\u5730 HTTPS\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"configure-scope",children:"\u914d\u7f6e\u6743\u9650"}),"\n",(0,l.jsxs)(n.p,{children:["\u8981\u4ece Apple \u83b7\u53d6\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\uff0c\u4f60\u9700\u8981\u5c06\u6743\u9650\u914d\u7f6e\u4e3a\u5305\u542b ",(0,l.jsx)(n.code,{children:"email"}),"\u3002\u5bf9\u4e8e\u7535\u5b50\u90ae\u4ef6\u548c\u59d3\u540d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"name email"})," \u4f5c\u4e3a\u6743\u9650\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.jsx)(n.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/incorporating_sign_in_with_apple_into_other_platforms#3332113",children:"Apple \u5b98\u65b9\u6587\u6863"}),"\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u80fd\u4f1a\u9009\u62e9\u9690\u85cf\u4ed6\u4eec\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5c06\u65e0\u6cd5\u83b7\u53d6\u771f\u5b9e\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002\u76f8\u53cd\uff0c\u5c06\u8fd4\u56de\u7c7b\u4f3c ",(0,l.jsx)(n.code,{children:"random@privaterelay.appleid.com"})," \u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"pitfalls-of-configuring-scope",children:"\u914d\u7f6e\u6743\u9650\u7684\u9677\u9631"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5728\u7528\u6237\u5df2\u7ecf\u901a\u8fc7 Apple \u767b\u5f55\u540e\u914d\u7f6e\u5e94\u7528\u8bf7\u6c42\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u4f60\u5c06\u65e0\u6cd5\u83b7\u53d6\u8fd9\u4e9b\u73b0\u6709\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u5373\u4f7f\u4ed6\u4eec\u518d\u6b21\u4f7f\u7528 Apple ID \u767b\u5f55\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u9700\u8981\u6307\u793a\u7528\u6237\u8bbf\u95ee ",(0,l.jsx)(n.a,{href:"https://appleid.apple.com/account/manage",children:"Apple ID \u8d26\u6237\u7ba1\u7406\u9875\u9762"})," \u5e76\u4ece\u201cApple \u767b\u5f55\u201d\u90e8\u5206\u4e2d\u79fb\u9664\u4f60\u7684\u5e94\u7528\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5728\u5e94\u7528\u7684\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u4e0a\u9009\u62e9\u201c\u505c\u6b62\u4f7f\u7528 Apple \u767b\u5f55\u201d\u6765\u5b8c\u6210\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u5e94\u7528\u8bf7\u6c42\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u548c\u59d3\u540d\uff08",(0,l.jsx)(n.code,{children:"email name"})," \u6743\u9650\uff09\uff0c\u65b0\u7528\u6237\u5728\u9996\u6b21\u767b\u5f55\u65f6\u770b\u5230\u7684\u7528\u6237\u6388\u6743\u9875\u9762\u5e94\u7c7b\u4f3c\u4e8e\u6b64\uff1a"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Apple \u767b\u5f55\u7528\u6237\u6388\u6743\u9875\u9762",src:i(4197).A+"",width:"1472",height:"1188"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8bf7\u53c2\u9605\u5f00\u53d1\u8005\u8ba8\u8bba ",(0,l.jsx)(n.a,{href:"https://forums.developer.apple.com/forums/thread/132223",children:"\u8fd9\u91cc"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"test-apple-connector",children:"\u6d4b\u8bd5 Apple \u8fde\u63a5\u5668"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c31\u662f\u8fd9\u6837\u3002Apple \u8fde\u63a5\u5668\u5e94\u8be5\u53ef\u4ee5\u5728 web \u548c\u539f\u751f\u5e94\u7528\u4e2d\u4f7f\u7528\u3002\u522b\u5fd8\u4e86\u5728 ",(0,l.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"\u767b\u5f55\u4f53\u9a8c\u4e2d\u542f\u7528\u793e\u4ea4\u8fde\u63a5\u5668"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},490:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},62824:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},78635:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},4197:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/sign-in-with-apple-consent-screen-2e34ab8e2d4c8039accb0f60ec4d7a26.png"},79621:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(58101);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);