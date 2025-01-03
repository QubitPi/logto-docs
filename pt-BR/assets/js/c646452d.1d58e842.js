"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20609],{99566:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>s});var o=i(25105),a=i(79621);const s=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Neste guia, assumimos que voc\xea tem conhecimento b\xe1sico sobre Conectores (Connectors) do Logto. Se n\xe3o tiver, confira o guia ",(0,o.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para come\xe7ar."]})})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},6004:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"integrations/social/wechat-native/README","title":"Configurar login social com WeChat (Native)","description":"O conector oficial do Logto para login social do WeChat em aplicativos nativos (iOS e Android).","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/social/wechat-native/README.mdx","sourceDirName":"integrations/social/wechat-native","slug":"/integrations/wechat-native","permalink":"/pt-BR/integrations/wechat-native","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/pt-BR/docusaurus-plugin-content-docs/current/integrations/social/wechat-native/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wechat-native","sidebar_label":"WeChat (Native)","sidebar_custom_props":{"description":"WeChat \xe9 um aplicativo de mensagens instant\xe2neas multiplataforma.","logoFilename":"wechat.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"OIDC (Social)","permalink":"/pt-BR/integrations/oidc"},"next":{"title":"WeChat (Web)","permalink":"/pt-BR/integrations/wechat-web"}}');var a=i(25105),s=i(79621),r=i(99566);const c={slug:"/integrations/wechat-native",sidebar_label:"WeChat (Native)",sidebar_custom_props:{description:"WeChat \xe9 um aplicativo de mensagens instant\xe2neas multiplataforma.",logoFilename:"wechat.svg"}},t="Configurar login social com WeChat (Native)",l={},d=[...r.RM,{value:"Introdu\xe7\xe3o",id:"get-started",level:2},{value:"Criar um aplicativo m\xf3vel na Plataforma Aberta do WeChat",id:"create-a-mobile-app-in-the-wechat-open-platform",level:2},{value:"Criar uma conta",id:"create-an-account",level:3},{value:"Criar um aplicativo m\xf3vel",id:"create-a-mobile-app",level:3},{value:"Informa\xe7\xf5es b\xe1sicas",id:"basic-info",level:4},{value:"Informa\xe7\xf5es da plataforma",id:"platform-info",level:4},{value:"Aguardando o resultado da revis\xe3o",id:"waiting-for-the-review-result",level:4},{value:"Habilitar login nativo do WeChat no seu aplicativo",id:"enable-wechat-native-sign-in-in-your-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Testar o conector nativo do WeChat",id:"test-wechat-native-connector",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"configurar-login-social-com-wechat-native",children:"Configurar login social com WeChat (Native)"})}),"\n",(0,a.jsx)(n.p,{children:"O conector oficial do Logto para login social do WeChat em aplicativos nativos (iOS e Android)."}),"\n",(0,a.jsx)(r.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"get-started",children:"Introdu\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["Se voc\xea n\xe3o conhece o conceito de conector ou n\xe3o sabe como adicionar este conector \xe0 sua Experi\xeancia de login, consulte o ",(0,a.jsx)(n.a,{href:"/connectors/social-connectors",children:"tutorial do Logto"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Em aplicativos nativos, voc\xea n\xe3o pode usar a web como m\xe9todo de login do WeChat: \xe9 necess\xe1rio navegar para o aplicativo WeChat e tamb\xe9m requer o uso do SDK deles."}),"\n",(0,a.jsx)(n.p,{children:"Sabemos que parece assustador, mas n\xe3o se preocupe. Vamos lidar com isso facilmente neste tutorial."}),"\n",(0,a.jsx)(n.h2,{id:"create-a-mobile-app-in-the-wechat-open-platform",children:"Criar um aplicativo m\xf3vel na Plataforma Aberta do WeChat"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,a.jsx)(n.strong,{children:"Dica"})]}),"\n",(0,a.jsx)(n.p,{children:"Voc\xea pode pular algumas se\xe7\xf5es se j\xe1 tiver conclu\xeddo."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"create-an-account",children:"Criar uma conta"}),"\n",(0,a.jsxs)(n.p,{children:["Abra ",(0,a.jsx)(n.a,{href:"https://open.weixin.qq.com/",children:"https://open.weixin.qq.com/"}),', clique no bot\xe3o "Sign Up" no canto superior direito e conclua o processo de inscri\xe7\xe3o.']}),"\n",(0,a.jsx)(n.h3,{id:"create-a-mobile-app",children:"Criar um aplicativo m\xf3vel"}),"\n",(0,a.jsx)(n.p,{children:'Fa\xe7a login com a conta que voc\xea acabou de criar. Na aba "Mobile Application" (\u79fb\u52a8\u5e94\u7528), clique no grande bot\xe3o verde "Create a mobile app" (\u521b\u5efa\u79fb\u52a8\u5e94\u7528).'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"App tabs",src:i(37113).A+"",width:"328",height:"266"})}),"\n",(0,a.jsx)(n.p,{children:"Vamos preencher as informa\xe7\xf5es necess\xe1rias no formul\xe1rio de inscri\xe7\xe3o."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Create a mobile app",src:i(81642).A+"",width:"2000",height:"617"})}),"\n",(0,a.jsx)(n.h4,{id:"basic-info",children:"Informa\xe7\xf5es b\xe1sicas"}),"\n",(0,a.jsx)(n.p,{children:"A maioria delas \xe9 bastante direta, e temos algumas dicas aqui:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Se voc\xea s\xf3 quer testar o login do WeChat e o aplicativo n\xe3o est\xe1 na App Store, na se\xe7\xe3o "App is available", escolha "No" para pular o "App download link".'}),"\n",(0,a.jsx)(n.li,{children:'O "App operation flow chart" parece complicado. Pela nossa experi\xeancia, voc\xea precisa preparar um fluxograma simples e v\xe1rias capturas de tela do aplicativo para aumentar a possibilidade de aprova\xe7\xe3o na revis\xe3o.'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'Clique em "Next step" para continuar.'}),"\n",(0,a.jsx)(n.h4,{id:"platform-info",children:"Informa\xe7\xf5es da plataforma"}),"\n",(0,a.jsx)(n.p,{children:"Voc\xea pode configurar uma ou ambas as plataformas iOS e Android para integrar o Logto com o login nativo do WeChat."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"App iOS"})}),"\n",(0,a.jsx)(n.p,{children:'Marque "iOS app" (iOS \u5e94\u7528), depois marque o tipo de dispositivo alvo do seu aplicativo conforme necess\xe1rio.'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"App platform",src:i(26130).A+"",width:"1614",height:"374"})}),"\n",(0,a.jsx)(n.p,{children:'Se voc\xea escolheu "No" para a disponibilidade na App Store, pode pular o preenchimento do "AppStore download address" aqui.'}),"\n",(0,a.jsxs)(n.p,{children:["Preencha ",(0,a.jsx)(n.em,{children:"Bundle ID"}),", ",(0,a.jsx)(n.em,{children:"Test version Bundle ID"})," e ",(0,a.jsx)(n.em,{children:"Universal Links"})," (na verdade, apenas um link \xe9 necess\xe1rio \ud83d\ude02)."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,a.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Bundle ID"})," e ",(0,a.jsx)(n.em,{children:"Test version Bundle ID"})," podem ter o mesmo valor."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,a.jsx)(n.strong,{children:"Dica"})]}),"\n",(0,a.jsxs)(n.p,{children:["O WeChat requer link universal para login nativo. Se voc\xea n\xe3o configurou ou n\xe3o sabe o que \xe9, consulte o ",(0,a.jsx)(n.a,{href:"https://developer.apple.com/ios/universal-links/",children:"documento oficial da Apple"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"App Android"})}),"\n",(0,a.jsx)(n.p,{children:'Marque "Android app" (Android \u5e94\u7528).'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Android app platform",src:i(20518).A+"",width:"1538",height:"332"})}),"\n",(0,a.jsxs)(n.p,{children:["Preencha ",(0,a.jsx)(n.em,{children:"Application Signing Signature"})," (\u5e94\u7528\u7b7e\u540d) e ",(0,a.jsx)(n.em,{children:"Application Package Name"})," (\u5e94\u7528\u5305\u540d)."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,a.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,a.jsxs)(n.p,{children:["Voc\xea precisa assinar seu aplicativo para obter uma assinatura. Consulte ",(0,a.jsx)(n.a,{href:"https://developer.android.com/studio/publish/app-signing",children:"Assinar seu aplicativo"})," para mais informa\xe7\xf5es."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Ap\xf3s concluir a assinatura, voc\xea pode executar a tarefa ",(0,a.jsx)(n.code,{children:"signingReport"})," para obter a assinatura."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./gradlew your-android-project:signingReport\n"})}),"\n",(0,a.jsxs)(n.p,{children:["O valor ",(0,a.jsx)(n.code,{children:"MD5"})," do relat\xf3rio da variante de build correspondente ser\xe1 a ",(0,a.jsx)(n.em,{children:"Application Signing Signature"})," (\u5e94\u7528\u7b7e\u540d), mas lembre-se de remover todos os pontos e v\xedrgulas do valor e coloc\xe1-lo em min\xfasculas."]}),"\n",(0,a.jsxs)(n.p,{children:["Ex.: ",(0,a.jsx)(n.code,{children:"1A:2B:3C:4D"})," -> ",(0,a.jsx)(n.code,{children:"1a2b3c4d"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"waiting-for-the-review-result",children:"Aguardando o resultado da revis\xe3o"}),"\n",(0,a.jsx)(n.p,{children:'Ap\xf3s completar as informa\xe7\xf5es da plataforma, clique em "Submit Review" para continuar. Normalmente, a revis\xe3o \xe9 r\xe1pida, terminando em 1-2 dias.'}),"\n",(0,a.jsx)(n.p,{children:"Suspeitamos que o revisor seja alocado aleatoriamente em cada submiss\xe3o, j\xe1 que o padr\xe3o \xe9 vari\xe1vel. Voc\xea pode ser rejeitado na primeira vez, mas n\xe3o desista! Explique sua situa\xe7\xe3o atual e pergunte ao revisor como modific\xe1-la."}),"\n",(0,a.jsx)(n.h2,{id:"enable-wechat-native-sign-in-in-your-app",children:"Habilitar login nativo do WeChat no seu aplicativo"}),"\n",(0,a.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,a.jsxs)(n.p,{children:["Assumimos que voc\xea integrou o ",(0,a.jsx)(n.a,{href:"/quick-starts/swift",children:"Logto iOS SDK"})," no seu aplicativo. Nesse caso, as coisas s\xe3o bem simples, e voc\xea nem precisa ler o documento do SDK do WeChat:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"1. Configure o link universal e o esquema de URL no seu projeto Xcode"})}),"\n",(0,a.jsx)(n.p,{children:'No projeto Xcode -> aba Signing & Capabilities, adicione a capacidade "Associated Domains" e o link universal que voc\xea configurou anteriormente.'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Universal link",src:i(79927).A+"",width:"1180",height:"274"})}),"\n",(0,a.jsxs)(n.p,{children:['Depois v\xe1 para a aba "Info", adicione um ',(0,a.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"esquema de URL personalizado"})," com o ID do aplicativo WeChat."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Custom URL scheme",src:i(55688).A+"",width:"1216",height:"476"})}),"\n",(0,a.jsxs)(n.p,{children:["Finalmente, abra seu ",(0,a.jsx)(n.code,{children:"Info.plist"}),", adicione ",(0,a.jsx)(n.code,{children:"weixinULAPI"})," e ",(0,a.jsx)(n.code,{children:"weixin"})," em ",(0,a.jsx)(n.code,{children:"LSApplicationQueriesSchemes"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Plist",src:i(34971).A+"",width:"1104",height:"262"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\ud83e\udd26 ",(0,a.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,a.jsxs)(n.p,{children:["Sabemos que essas a\xe7\xf5es n\xe3o s\xe3o muito razo\xe1veis, mas esta \xe9 a solu\xe7\xe3o m\xednima vi\xe1vel que encontramos. Veja o ",(0,a.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/Access_Guide/iOS.html",children:"guia oficial m\xe1gico"})," para mais informa\xe7\xf5es."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["2. Adicione ",(0,a.jsx)(n.code,{children:"LogtoSocialPluginWechat"})," ao seu projeto Xcode"]})}),"\n",(0,a.jsx)(n.p,{children:"Adicione o framework:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Add framework",src:i(95329).A+"",width:"1108",height:"310"})}),"\n",(0,a.jsxs)(n.p,{children:["E adicione ",(0,a.jsx)(n.code,{children:"-ObjC"})," em Build Settings > Linking > Other Linker Flags:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Linker flags",src:i(69736).A+"",width:"1134",height:"202"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,a.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,a.jsxs)(n.p,{children:["O plugin inclui o WeChat Open SDK 1.9.2. Voc\xea pode usar diretamente ",(0,a.jsx)(n.code,{children:"import WechatOpenSDK"})," uma vez importado o plugin."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["3. Adicione o plugin \xe0s op\xe7\xf5es de inicializa\xe7\xe3o do seu ",(0,a.jsx)(n.code,{children:"LogtoClient"})]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"let logtoClient = LogtoClient(\n  useConfig: config,\n  socialPlugins: [LogtoSocialPluginWechat()]\n)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["4. Lide com ",(0,a.jsx)(n.code,{children:"onOpenURL"})," adequadamente"]})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,a.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,a.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,a.jsx)(n.code,{children:"LogtoClient.handle(url:)"})," lidar\xe1 com todos os conectores nativos que voc\xea habilitou. Voc\xea s\xf3 precisa cham\xe1-la uma vez."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"// SwiftUI\nYourRootView()\n  .onOpenURL { url in\n      LogtoClient.handle(url: url)\n  }\n\n// ou AppDelegate\nfunc application(_ app: UIApplication, open url: URL, options: /*...*/) -> Bool {\n  LogtoClient.handle(url: url)\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,a.jsxs)(n.p,{children:["Assumimos que voc\xea integrou o ",(0,a.jsx)(n.a,{href:"/quick-starts/android",children:"Logto Android SDK"})," no seu aplicativo. Nesse caso, as coisas s\xe3o bem simples, e voc\xea nem precisa ler o documento do SDK do WeChat:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. Adicione ",(0,a.jsx)(n.code,{children:"Wechat Open SDK"})," ao seu projeto"]})}),"\n",(0,a.jsxs)(n.p,{children:["Certifique-se de que o reposit\xf3rio ",(0,a.jsx)(n.code,{children:"mavenCentral()"})," est\xe1 nos reposit\xf3rios do seu projeto Gradle:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"repositories {\n  // ...\n  mavenCentral()\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Adicione o Wechat Open SDK \xe0s suas depend\xeancias:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"dependencies {\n  // ...\n  api(\"com.tencent.mm.opensdk:wechat-sdk-android:6.8.0\")  // kotlin-script\n  // ou\n  api 'com.tencent.mm.opensdk:wechat-sdk-android:6.8.0'   // groovy-script\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["2. Introduza ",(0,a.jsx)(n.code,{children:"WXEntryActivity"})," ao seu projeto"]})}),"\n",(0,a.jsxs)(n.p,{children:["Crie um pacote ",(0,a.jsx)(n.code,{children:"wxapi"})," sob o seu pacote raiz e adicione o ",(0,a.jsx)(n.code,{children:"WXEntryActivity"})," no pacote ",(0,a.jsx)(n.code,{children:"wxapi"})," (Tome ",(0,a.jsx)(n.code,{children:"com.sample.app"})," como exemplo):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"// WXEntryActivity.kt\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\nclass WXEntryActivity: WechatSocialResultActivity()\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// WXEntryActivity.java\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\npublic class WXEntryActivity extends WechatSocialResultActivity {}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["A posi\xe7\xe3o final do ",(0,a.jsx)(n.code,{children:"WXEntryActivity"})," no projeto deve ser assim (Tome Kotlin como exemplo):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"src/main/kotlin/com/sample/app/wxapi/WXEntryActivity.kt\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["3. Modifique o ",(0,a.jsx)(n.code,{children:"AndroidManifest.xml"})]})}),"\n",(0,a.jsxs)(n.p,{children:["Adicione a seguinte linha ao seu ",(0,a.jsx)(n.code,{children:"AndroidManifest.xml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'\\<?xml version="1.0" encoding="utf-8"?>\n\\<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  package="com.sample.app">\n\n  \\<application>\n    \\\x3c!-- linha a ser adicionada --\x3e\n    \\<activity android:name=".wxapi.WXEntryActivity" android:exported="true"/>\n  \\</application>\n\n\\</manifest>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"test-wechat-native-connector",children:"Testar o conector nativo do WeChat"}),"\n",(0,a.jsxs)(n.p,{children:["\xc9 isso. N\xe3o se esque\xe7a de ",(0,a.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"Habilitar conector social na experi\xeancia de login"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Uma vez que o conector nativo do WeChat esteja habilitado, voc\xea pode construir e executar seu aplicativo para ver se funciona."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,a.jsx)(n.strong,{children:"Aten\xe7\xe3o"})]}),"\n",(0,a.jsxs)(n.p,{children:["O WeChat n\xe3o tem um plano para aqueles dispositivos sem o aplicativo WeChat instalado. O Logto ocultar\xe1 este conector durante o login se for o caso (o que \xe9 a maneira recomendada pelo ",(0,a.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/WeChat_Login/Development_Guide.html",children:"guia de desenvolvimento oficial"}),")."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},95329:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/add-framework-a2909ba00d89aecf527fee6f6eb2e222.png"},37113:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/app-tabs-0fdd6440f5140b067ca25c7645605e6d.png"},81642:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/create-mobile-app-0f8e3cd8ec9e5c2b0293377a21fb86a0.png"},55688:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/custom-url-scheme-abb8ac9a9639a93e2db7399b16c788b1.png"},69736:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/linker-flags-0ad70a41be8bf97f4d9d249890178228.png"},20518:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/platform-android-app-aecce8c59d4104fbb6cdbeec8e64fff8.png"},26130:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/platform-b86788c4ba09b775d6930cac8ce81e5d.png"},34971:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/plist-7f1222158e4ce1e755332cae7832b123.png"},79927:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/universal-link-80235270b511eb79e20fc07f4fa4cb67.png"},79621:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var o=i(58101);const a={},s=o.createContext(a);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);