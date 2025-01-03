"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[59197],{9360:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>a});var t=i(25105),o=i(79621);const a=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["This guide assumes you have basic understanding of Logto Connectors. For those unfamiliar, please refer to the ",(0,t.jsx)(n.a,{href:"/connectors",children:"Connectors"})," guide to get started."]})})}function r(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},17303:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"integrations/social/wechat-native/README","title":"Set up social login with WeChat (Native)","description":"The official Logto connector for WeChat social sign-in in native apps (iOS and Android).","source":"@site/docs/integrations/social/wechat-native/README.mdx","sourceDirName":"integrations/social/wechat-native","slug":"/integrations/wechat-native","permalink":"/integrations/wechat-native","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/social/wechat-native/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wechat-native","sidebar_label":"WeChat (Native)","sidebar_custom_props":{"description":"WeChat is a cross-platform instant messaging app.","logoFilename":"wechat.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"OIDC (Social)","permalink":"/integrations/oidc"},"next":{"title":"WeChat (Web)","permalink":"/integrations/wechat-web"}}');var o=i(25105),a=i(79621),s=i(9360);const r={slug:"/integrations/wechat-native",sidebar_label:"WeChat (Native)",sidebar_custom_props:{description:"WeChat is a cross-platform instant messaging app.",logoFilename:"wechat.svg"}},c="Set up social login with WeChat (Native)",l={},d=[...s.RM,{value:"Get started",id:"get-started",level:2},{value:"Create a mobile app in the WeChat Open Platform",id:"create-a-mobile-app-in-the-wechat-open-platform",level:2},{value:"Create an account",id:"create-an-account",level:3},{value:"Create a mobile app",id:"create-a-mobile-app",level:3},{value:"Basic info",id:"basic-info",level:4},{value:"Platform info",id:"platform-info",level:4},{value:"Waiting for the review result",id:"waiting-for-the-review-result",level:4},{value:"Enable WeChat native sign-in in your app",id:"enable-wechat-native-sign-in-in-your-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Test WeChat native connector",id:"test-wechat-native-connector",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"set-up-social-login-with-wechat-native",children:"Set up social login with WeChat (Native)"})}),"\n",(0,o.jsx)(n.p,{children:"The official Logto connector for WeChat social sign-in in native apps (iOS and Android)."}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,o.jsxs)(n.p,{children:["If you don't know the concept of the connector or don't know how to add this connector to your Sign-in experience, please see ",(0,o.jsx)(n.a,{href:"/connectors/social-connectors",children:"Logto tutorial"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"In native apps, you cannot use the web as a sign-in method of WeChat: navigation to the WeChat app is required, and it also requires using their SDK."}),"\n",(0,o.jsx)(n.p,{children:"We know it sounds scary, but don't worry. We'll handle it easily in this tutorial."}),"\n",(0,o.jsx)(n.h2,{id:"create-a-mobile-app-in-the-wechat-open-platform",children:"Create a mobile app in the WeChat Open Platform"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"You can skip some sections if you have already finished."})}),"\n",(0,o.jsx)(n.h3,{id:"create-an-account",children:"Create an account"}),"\n",(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.a,{href:"https://open.weixin.qq.com/",children:"https://open.weixin.qq.com/"}),', click the "Sign Up" button in the upper-right corner, then finish the sign-up process.']}),"\n",(0,o.jsx)(n.h3,{id:"create-a-mobile-app",children:"Create a mobile app"}),"\n",(0,o.jsx)(n.p,{children:'Sign in with the account you just created. In the "Mobile Application" (\u79fb\u52a8\u5e94\u7528) tab, click the big green button "Create a mobile app" (\u521b\u5efa\u79fb\u52a8\u5e94\u7528).'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"App tabs",src:i(82417).A+"",width:"328",height:"266"})}),"\n",(0,o.jsx)(n.p,{children:"Let's fill out the required info in the application form."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create a mobile app",src:i(96802).A+"",width:"2000",height:"617"})}),"\n",(0,o.jsx)(n.h4,{id:"basic-info",children:"Basic info"}),"\n",(0,o.jsx)(n.p,{children:"Most of them are pretty straightforward, and we have several tips here:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'If you just want to test WeChat sign-in and the app is not on the App Store, in the "App is available" section, choose "No" to skip the "App download link".'}),"\n",(0,o.jsx)(n.li,{children:'The "App operation flow chart" looks tricky. From our experience, you need to prepare a simple flowchart and several app screenshots to improve the possibility of passing the review.'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Click "Next step" to move on.'}),"\n",(0,o.jsx)(n.h4,{id:"platform-info",children:"Platform info"}),"\n",(0,o.jsx)(n.p,{children:"You can configure one or both iOS and Android platforms to integrate Logto with WeChat native sign-in."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"iOS app"})}),"\n",(0,o.jsx)(n.p,{children:'Check "iOS app" (iOS \u5e94\u7528), then check the target device type of your app accordingly.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"App platform",src:i(2186).A+"",width:"1614",height:"374"})}),"\n",(0,o.jsx)(n.p,{children:'If you chose "No" for the App Store availability, you cloud skip filling out the "AppStore download address" here.'}),"\n",(0,o.jsxs)(n.p,{children:["Fill out ",(0,o.jsx)(n.em,{children:"Bundle ID"}),", ",(0,o.jsx)(n.em,{children:"Test version Bundle ID"}),", and ",(0,o.jsx)(n.em,{children:"Universal Links"})," (actually, only one link is needed \ud83d\ude02)."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Bundle ID"})," and ",(0,o.jsx)(n.em,{children:"Test version Bundle ID"})," can be the same value."]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["WeChat requires universal link for native sign-in. If you haven't set up or don't know it, please refer to the ",(0,o.jsx)(n.a,{href:"https://developer.apple.com/ios/universal-links/",children:"Apple official doc"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Android app"})}),"\n",(0,o.jsx)(n.p,{children:'Check "Android app" (Android \u5e94\u7528).'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Android app platform",src:i(3726).A+"",width:"1538",height:"332"})}),"\n",(0,o.jsxs)(n.p,{children:["Fill out ",(0,o.jsx)(n.em,{children:"Application Signing Signature"})," (\u5e94\u7528\u7b7e\u540d) and ",(0,o.jsx)(n.em,{children:"Application Package Name"})," (\u5e94\u7528\u5305\u540d)."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You need to sign your app to get a signature. Refer to the ",(0,o.jsx)(n.a,{href:"https://developer.android.com/studio/publish/app-signing",children:"Sign your app"})," for more info."]})}),"\n",(0,o.jsxs)(n.p,{children:["After finish signing, you can execute the ",(0,o.jsx)(n.code,{children:"signingReport"})," task to get the signing signature."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./gradlew your-android-project:signingReport\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"MD5"})," value of the corresponding build variant's report will be the ",(0,o.jsx)(n.em,{children:"Application Signing Signature"})," (\u5e94\u7528\u7b7e\u540d), but remember to remove all semicolons from the value and lowercase it."]}),"\n",(0,o.jsxs)(n.p,{children:["E.g. ",(0,o.jsx)(n.code,{children:"1A:2B:3C:4D"})," -> ",(0,o.jsx)(n.code,{children:"1a2b3c4d"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"waiting-for-the-review-result",children:"Waiting for the review result"}),"\n",(0,o.jsx)(n.p,{children:'After completing the platform info, click "Submit Review" to continue. Usually, the review goes fast, which will end within 1-2 days.'}),"\n",(0,o.jsx)(n.p,{children:"We suspect the reviewer is allocated randomly on each submission since the standard is floating. You may get rejected the first time, but don't give up! State your status quo and ask the reviewer how to modify it."}),"\n",(0,o.jsx)(n.h2,{id:"enable-wechat-native-sign-in-in-your-app",children:"Enable WeChat native sign-in in your app"}),"\n",(0,o.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,o.jsxs)(n.p,{children:["We assume you have integrated ",(0,o.jsx)(n.a,{href:"/quick-starts/swift",children:"Logto iOS SDK"})," in your app. In this case, things are pretty simple, and you don't even need to read the WeChat SDK doc:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. Configure universal link and URL scheme in your Xcode project"})}),"\n",(0,o.jsx)(n.p,{children:'In the Xcode project -> Signing & Capabilities tab, add the "Associated Domains" capability and the universal link you configured before.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Universal link",src:i(72607).A+"",width:"1180",height:"274"})}),"\n",(0,o.jsxs)(n.p,{children:['Then goes to the "Info" tab, add a ',(0,o.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"custom URL scheme"})," with the WeChat App ID."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Custom URL scheme",src:i(35312).A+"",width:"1216",height:"476"})}),"\n",(0,o.jsxs)(n.p,{children:["Finally open your ",(0,o.jsx)(n.code,{children:"Info.plist"}),", add ",(0,o.jsx)(n.code,{children:"weixinULAPI"})," and ",(0,o.jsx)(n.code,{children:"weixin"})," under ",(0,o.jsx)(n.code,{children:"LSApplicationQueriesSchemes"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Plist",src:i(95443).A+"",width:"1104",height:"262"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["We know these actions are not very reasonable, but this is the minimum workable solution we found. See the ",(0,o.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/Access_Guide/iOS.html",children:"magical official guide"})," for more info."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["2. Add ",(0,o.jsx)(n.code,{children:"LogtoSocialPluginWechat"})," to your Xcode project"]})}),"\n",(0,o.jsx)(n.p,{children:"Add the framework:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Add framework",src:i(80633).A+"",width:"1108",height:"310"})}),"\n",(0,o.jsxs)(n.p,{children:["And add ",(0,o.jsx)(n.code,{children:"-ObjC"})," to your Build Settings > Linking > Other Linker Flags:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Linker flags",src:i(49520).A+"",width:"1134",height:"202"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The plugin includes WeChat Open SDK 1.9.2. You can directly use ",(0,o.jsx)(n.code,{children:"import WechatOpenSDK"})," once imported the plugin."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["3. Add the plugin to your ",(0,o.jsx)(n.code,{children:"LogtoClient"})," init options"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"let logtoClient = LogtoClient(\n  useConfig: config,\n  socialPlugins: [LogtoSocialPluginWechat()]\n)\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["4. Handle ",(0,o.jsx)(n.code,{children:"onOpenURL"})," properly"]})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The function ",(0,o.jsx)(n.code,{children:"LogtoClient.handle(url:)"})," will handle all the native connectors you enabled. You only need to call it once."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"// SwiftUI\nYourRootView()\n  .onOpenURL { url in\n      LogtoClient.handle(url: url)\n  }\n\n// or AppDelegate\nfunc application(_ app: UIApplication, open url: URL, options: /*...*/) -> Bool {\n  LogtoClient.handle(url: url)\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,o.jsxs)(n.p,{children:["We assume you have integrated ",(0,o.jsx)(n.a,{href:"/quick-starts/android",children:"Logto Android SDK"})," in your app. In this case, things are pretty simple, and you don't even need to read the WeChat SDK doc:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["1. Add ",(0,o.jsx)(n.code,{children:"Wechat Open SDK"})," to your project"]})}),"\n",(0,o.jsxs)(n.p,{children:["Ensure the ",(0,o.jsx)(n.code,{children:"mavenCentral()"})," repository is in your Gradle project repositories:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"repositories {\n  // ...\n  mavenCentral()\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add the Wechat Open SDK to your dependencies:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"dependencies {\n  // ...\n  api(\"com.tencent.mm.opensdk:wechat-sdk-android:6.8.0\")  // kotlin-script\n  // or\n  api 'com.tencent.mm.opensdk:wechat-sdk-android:6.8.0'   // groovy-script\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["2. Introduce ",(0,o.jsx)(n.code,{children:"WXEntryActivity"})," to your project"]})}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"wxapi"})," package under your package root and add the ",(0,o.jsx)(n.code,{children:"WXEntryActivity"})," in the ",(0,o.jsx)(n.code,{children:"wxapi"})," package (Take ",(0,o.jsx)(n.code,{children:"com.sample.app"})," as an example):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"// WXEntryActivity.kt\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\nclass WXEntryActivity: WechatSocialResultActivity()\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"// WXEntryActivity.java\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\npublic class WXEntryActivity extends WechatSocialResultActivity {}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The final position of the ",(0,o.jsx)(n.code,{children:"WXEntryActivity"})," under the project should look like this (Take Kotlin as an example):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"src/main/kotlin/com/sample/app/wxapi/WXEntryActivity.kt\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["3. Modify the ",(0,o.jsx)(n.code,{children:"AndroidManifest.xml"})]})}),"\n",(0,o.jsxs)(n.p,{children:["Add the following line to your ",(0,o.jsx)(n.code,{children:"AndroidManifest.xml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'\\<?xml version="1.0" encoding="utf-8"?>\n\\<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  package="com.sample.app">\n\n  \\<application>\n    \\\x3c!-- line to be added --\x3e\n    \\<activity android:name=".wxapi.WXEntryActivity" android:exported="true"/>\n  \\</application>\n\n\\</manifest>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"test-wechat-native-connector",children:"Test WeChat native connector"}),"\n",(0,o.jsxs)(n.p,{children:["That's it. Don't forget to ",(0,o.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"Enable social connector in sign-in experience"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Once WeChat native connector is enabled, you can build and run your app to see if it works."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["WeChat doesn't have a plan for those devices without the WeChat app installed. Logto will hide this connector during sign-in if so (which is the recommended way from the ",(0,o.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/WeChat_Login/Development_Guide.html",children:"official development guide"}),")."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},80633:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/add-framework-a2909ba00d89aecf527fee6f6eb2e222.png"},82417:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/app-tabs-0fdd6440f5140b067ca25c7645605e6d.png"},96802:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/create-mobile-app-0f8e3cd8ec9e5c2b0293377a21fb86a0.png"},35312:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/custom-url-scheme-abb8ac9a9639a93e2db7399b16c788b1.png"},49520:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/linker-flags-0ad70a41be8bf97f4d9d249890178228.png"},3726:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/platform-android-app-aecce8c59d4104fbb6cdbeec8e64fff8.png"},2186:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/platform-b86788c4ba09b775d6930cac8ce81e5d.png"},95443:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/plist-7f1222158e4ce1e755332cae7832b123.png"},72607:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/universal-link-80235270b511eb79e20fc07f4fa4cb67.png"},79621:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(58101);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);