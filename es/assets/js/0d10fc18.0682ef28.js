"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20958],{44255:(e,n,a)=>{a.d(n,{Ay:()=>l,RM:()=>c});var i=a(25105),s=a(79621);const c=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,i.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},59848:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/social/wechat-native/README","title":"Configura el inicio de sesi\xf3n social con WeChat (Native)","description":"El conector oficial de Logto para el inicio de sesi\xf3n social de WeChat en aplicaciones nativas (iOS y Android).","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/wechat-native/README.mdx","sourceDirName":"integrations/social/wechat-native","slug":"/integrations/wechat-native","permalink":"/es/integrations/wechat-native","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/social/wechat-native/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wechat-native","sidebar_label":"WeChat (Native)","sidebar_custom_props":{"description":"WeChat es una aplicaci\xf3n de mensajer\xeda instant\xe1nea multiplataforma.","logoFilename":"wechat.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"OIDC (Social)","permalink":"/es/integrations/oidc"},"next":{"title":"WeChat (Web)","permalink":"/es/integrations/wechat-web"}}');var s=a(25105),c=a(79621),o=a(44255);const l={slug:"/integrations/wechat-native",sidebar_label:"WeChat (Native)",sidebar_custom_props:{description:"WeChat es una aplicaci\xf3n de mensajer\xeda instant\xe1nea multiplataforma.",logoFilename:"wechat.svg"}},r="Configura el inicio de sesi\xf3n social con WeChat (Native)",t={},d=[...o.RM,{value:"Comenzar",id:"get-started",level:2},{value:"Crea una aplicaci\xf3n m\xf3vil en la Plataforma Abierta de WeChat",id:"create-a-mobile-app-in-the-wechat-open-platform",level:2},{value:"Crear una cuenta",id:"create-an-account",level:3},{value:"Crear una aplicaci\xf3n m\xf3vil",id:"create-a-mobile-app",level:3},{value:"Informaci\xf3n b\xe1sica",id:"basic-info",level:4},{value:"Informaci\xf3n de la plataforma",id:"platform-info",level:4},{value:"Esperando el resultado de la revisi\xf3n",id:"waiting-for-the-review-result",level:4},{value:"Habilitar el inicio de sesi\xf3n nativo de WeChat en tu aplicaci\xf3n",id:"enable-wechat-native-sign-in-in-your-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Probar el conector nativo de WeChat",id:"test-wechat-native-connector",level:2}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configura-el-inicio-de-sesi\xf3n-social-con-wechat-native",children:"Configura el inicio de sesi\xf3n social con WeChat (Native)"})}),"\n",(0,s.jsx)(n.p,{children:"El conector oficial de Logto para el inicio de sesi\xf3n social de WeChat en aplicaciones nativas (iOS y Android)."}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"get-started",children:"Comenzar"}),"\n",(0,s.jsxs)(n.p,{children:["Si no conoces el concepto del conector o no sabes c\xf3mo agregar este conector a tu experiencia de inicio de sesi\xf3n, consulta el ",(0,s.jsx)(n.a,{href:"/connectors/social-connectors",children:"tutorial de Logto"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"En aplicaciones nativas, no puedes usar la web como m\xe9todo de inicio de sesi\xf3n de WeChat: se requiere la navegaci\xf3n a la aplicaci\xf3n de WeChat, y tambi\xe9n requiere usar su SDK."}),"\n",(0,s.jsx)(n.p,{children:"Sabemos que suena aterrador, pero no te preocupes. Lo manejaremos f\xe1cilmente en este tutorial."}),"\n",(0,s.jsx)(n.h2,{id:"create-a-mobile-app-in-the-wechat-open-platform",children:"Crea una aplicaci\xf3n m\xf3vil en la Plataforma Abierta de WeChat"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,s.jsx)(n.strong,{children:"Consejo"})]}),"\n",(0,s.jsx)(n.p,{children:"Puedes omitir algunas secciones si ya las has completado."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-an-account",children:"Crear una cuenta"}),"\n",(0,s.jsxs)(n.p,{children:["Abre ",(0,s.jsx)(n.a,{href:"https://open.weixin.qq.com/",children:"https://open.weixin.qq.com/"}),', haz clic en el bot\xf3n "Sign Up" en la esquina superior derecha, luego completa el proceso de registro.']}),"\n",(0,s.jsx)(n.h3,{id:"create-a-mobile-app",children:"Crear una aplicaci\xf3n m\xf3vil"}),"\n",(0,s.jsx)(n.p,{children:'Inicia sesi\xf3n con la cuenta que acabas de crear. En la pesta\xf1a "Aplicaci\xf3n M\xf3vil" (\u79fb\u52a8\u5e94\u7528), haz clic en el gran bot\xf3n verde "Crear una aplicaci\xf3n m\xf3vil" (\u521b\u5efa\u79fb\u52a8\u5e94\u7528).'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Pesta\xf1as de la aplicaci\xf3n",src:a(53118).A+"",width:"328",height:"266"})}),"\n",(0,s.jsx)(n.p,{children:"Completemos la informaci\xf3n requerida en el formulario de solicitud."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Crear una aplicaci\xf3n m\xf3vil",src:a(49643).A+"",width:"2000",height:"617"})}),"\n",(0,s.jsx)(n.h4,{id:"basic-info",children:"Informaci\xf3n b\xe1sica"}),"\n",(0,s.jsx)(n.p,{children:"La mayor\xeda son bastante sencillas, y aqu\xed tenemos varios consejos:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Si solo deseas probar el inicio de sesi\xf3n de WeChat y la aplicaci\xf3n no est\xe1 en la App Store, en la secci\xf3n "App is available", elige "No" para omitir el "Enlace de descarga de la aplicaci\xf3n".'}),"\n",(0,s.jsx)(n.li,{children:'El "Diagrama de flujo de operaci\xf3n de la aplicaci\xf3n" parece complicado. Seg\xfan nuestra experiencia, necesitas preparar un diagrama de flujo simple y varias capturas de pantalla de la aplicaci\xf3n para mejorar la posibilidad de pasar la revisi\xf3n.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Haz clic en "Siguiente paso" para continuar.'}),"\n",(0,s.jsx)(n.h4,{id:"platform-info",children:"Informaci\xf3n de la plataforma"}),"\n",(0,s.jsx)(n.p,{children:"Puedes configurar una o ambas plataformas iOS y Android para integrar Logto con el inicio de sesi\xf3n nativo de WeChat."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Aplicaci\xf3n iOS"})}),"\n",(0,s.jsx)(n.p,{children:'Marca "Aplicaci\xf3n iOS" (iOS \u5e94\u7528), luego marca el tipo de dispositivo objetivo de tu aplicaci\xf3n seg\xfan corresponda.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Plataforma de la aplicaci\xf3n",src:a(66169).A+"",width:"1614",height:"374"})}),"\n",(0,s.jsx)(n.p,{children:'Si elegiste "No" para la disponibilidad en la App Store, puedes omitir completar la "Direcci\xf3n de descarga de AppStore" aqu\xed.'}),"\n",(0,s.jsxs)(n.p,{children:["Completa ",(0,s.jsx)(n.em,{children:"Bundle ID"}),", ",(0,s.jsx)(n.em,{children:"Test version Bundle ID"})," y ",(0,s.jsx)(n.em,{children:"Universal Links"})," (en realidad, solo se necesita un enlace \ud83d\ude02)."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,s.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Bundle ID"})," y ",(0,s.jsx)(n.em,{children:"Test version Bundle ID"})," pueden tener el mismo valor."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,s.jsx)(n.strong,{children:"Consejo"})]}),"\n",(0,s.jsxs)(n.p,{children:["WeChat requiere un enlace universal para el inicio de sesi\xf3n nativo. Si no lo has configurado o no lo conoces, consulta el ",(0,s.jsx)(n.a,{href:"https://developer.apple.com/ios/universal-links/",children:"documento oficial de Apple"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Aplicaci\xf3n Android"})}),"\n",(0,s.jsx)(n.p,{children:'Marca "Aplicaci\xf3n Android" (Android \u5e94\u7528).'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Plataforma de la aplicaci\xf3n Android",src:a(92901).A+"",width:"1538",height:"332"})}),"\n",(0,s.jsxs)(n.p,{children:["Completa ",(0,s.jsx)(n.em,{children:"Firma de la aplicaci\xf3n"})," (\u5e94\u7528\u7b7e\u540d) y ",(0,s.jsx)(n.em,{children:"Nombre del paquete de la aplicaci\xf3n"})," (\u5e94\u7528\u5305\u540d)."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,s.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,s.jsxs)(n.p,{children:["Necesitas firmar tu aplicaci\xf3n para obtener una firma. Consulta ",(0,s.jsx)(n.a,{href:"https://developer.android.com/studio/publish/app-signing",children:"Firmar tu aplicaci\xf3n"})," para m\xe1s informaci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Despu\xe9s de terminar de firmar, puedes ejecutar la tarea ",(0,s.jsx)(n.code,{children:"signingReport"})," para obtener la firma de la aplicaci\xf3n."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./gradlew your-android-project:signingReport\n"})}),"\n",(0,s.jsxs)(n.p,{children:["El valor ",(0,s.jsx)(n.code,{children:"MD5"})," del informe de la variante de compilaci\xf3n correspondiente ser\xe1 la ",(0,s.jsx)(n.em,{children:"Firma de la aplicaci\xf3n"})," (\u5e94\u7528\u7b7e\u540d), pero recuerda eliminar todos los puntos y comas del valor y ponerlo en min\xfasculas."]}),"\n",(0,s.jsxs)(n.p,{children:["Por ejemplo, ",(0,s.jsx)(n.code,{children:"1A:2B:3C:4D"})," -> ",(0,s.jsx)(n.code,{children:"1a2b3c4d"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"waiting-for-the-review-result",children:"Esperando el resultado de la revisi\xf3n"}),"\n",(0,s.jsx)(n.p,{children:'Despu\xe9s de completar la informaci\xf3n de la plataforma, haz clic en "Enviar revisi\xf3n" para continuar. Por lo general, la revisi\xf3n es r\xe1pida y termina en 1-2 d\xedas.'}),"\n",(0,s.jsx)(n.p,{children:"Sospechamos que el revisor se asigna aleatoriamente en cada env\xedo, ya que el est\xe1ndar es variable. Puede que te rechacen la primera vez, \xa1pero no te rindas! Explica tu situaci\xf3n actual y pregunta al revisor c\xf3mo modificarla."}),"\n",(0,s.jsx)(n.h2,{id:"enable-wechat-native-sign-in-in-your-app",children:"Habilitar el inicio de sesi\xf3n nativo de WeChat en tu aplicaci\xf3n"}),"\n",(0,s.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,s.jsxs)(n.p,{children:["Asumimos que has integrado ",(0,s.jsx)(n.a,{href:"/quick-starts/swift",children:"Logto iOS SDK"})," en tu aplicaci\xf3n. En este caso, las cosas son bastante simples, y ni siquiera necesitas leer el documento del SDK de WeChat:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Configura el enlace universal y el esquema de URL en tu proyecto Xcode"})}),"\n",(0,s.jsx)(n.p,{children:'En el proyecto Xcode -> pesta\xf1a Signing & Capabilities, agrega la capacidad "Associated Domains" y el enlace universal que configuraste antes.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Enlace universal",src:a(8580).A+"",width:"1180",height:"274"})}),"\n",(0,s.jsxs)(n.p,{children:['Luego ve a la pesta\xf1a "Info", agrega un ',(0,s.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"esquema de URL personalizado"})," con el ID de la aplicaci\xf3n de WeChat."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Esquema de URL personalizado",src:a(28745).A+"",width:"1216",height:"476"})}),"\n",(0,s.jsxs)(n.p,{children:["Finalmente, abre tu ",(0,s.jsx)(n.code,{children:"Info.plist"}),", agrega ",(0,s.jsx)(n.code,{children:"weixinULAPI"})," y ",(0,s.jsx)(n.code,{children:"weixin"})," bajo ",(0,s.jsx)(n.code,{children:"LSApplicationQueriesSchemes"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Plist",src:a(43498).A+"",width:"1104",height:"262"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\ud83e\udd26 ",(0,s.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,s.jsxs)(n.p,{children:["Sabemos que estas acciones no son muy razonables, pero esta es la soluci\xf3n m\xednima viable que encontramos. Consulta la ",(0,s.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/Access_Guide/iOS.html",children:"gu\xeda oficial m\xe1gica"})," para m\xe1s informaci\xf3n."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. Agrega ",(0,s.jsx)(n.code,{children:"LogtoSocialPluginWechat"})," a tu proyecto Xcode"]})}),"\n",(0,s.jsx)(n.p,{children:"Agrega el framework:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Agregar framework",src:a(39624).A+"",width:"1108",height:"310"})}),"\n",(0,s.jsxs)(n.p,{children:["Y agrega ",(0,s.jsx)(n.code,{children:"-ObjC"})," a tus Build Settings > Linking > Other Linker Flags:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Flags del linker",src:a(69363).A+"",width:"1134",height:"202"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,s.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,s.jsxs)(n.p,{children:["El plugin incluye WeChat Open SDK 1.9.2. Puedes usar directamente ",(0,s.jsx)(n.code,{children:"import WechatOpenSDK"})," una vez importado el plugin."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["3. Agrega el plugin a tus opciones de inicializaci\xf3n de ",(0,s.jsx)(n.code,{children:"LogtoClient"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"let logtoClient = LogtoClient(\n  useConfig: config,\n  socialPlugins: [LogtoSocialPluginWechat()]\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["4. Maneja ",(0,s.jsx)(n.code,{children:"onOpenURL"})," adecuadamente"]})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,s.jsx)(n.strong,{children:"Nota"})]}),"\n",(0,s.jsxs)(n.p,{children:["La funci\xf3n ",(0,s.jsx)(n.code,{children:"LogtoClient.handle(url:)"})," manejar\xe1 todos los conectores nativos que hayas habilitado. Solo necesitas llamarla una vez."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:"// SwiftUI\nYourRootView()\n  .onOpenURL { url in\n      LogtoClient.handle(url: url)\n  }\n\n// o AppDelegate\nfunc application(_ app: UIApplication, open url: URL, options: /*...*/) -> Bool {\n  LogtoClient.handle(url: url)\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,s.jsxs)(n.p,{children:["Asumimos que has integrado ",(0,s.jsx)(n.a,{href:"/quick-starts/android",children:"Logto Android SDK"})," en tu aplicaci\xf3n. En este caso, las cosas son bastante simples, y ni siquiera necesitas leer el documento del SDK de WeChat:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. Agrega ",(0,s.jsx)(n.code,{children:"Wechat Open SDK"})," a tu proyecto"]})}),"\n",(0,s.jsxs)(n.p,{children:["Aseg\xfarate de que el repositorio ",(0,s.jsx)(n.code,{children:"mavenCentral()"})," est\xe9 en los repositorios de tu proyecto Gradle:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"repositories {\n  // ...\n  mavenCentral()\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Agrega el Wechat Open SDK a tus dependencias:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"dependencies {\n  // ...\n  api(\"com.tencent.mm.opensdk:wechat-sdk-android:6.8.0\")  // kotlin-script\n  // o\n  api 'com.tencent.mm.opensdk:wechat-sdk-android:6.8.0'   // groovy-script\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2. Introduce ",(0,s.jsx)(n.code,{children:"WXEntryActivity"})," a tu proyecto"]})}),"\n",(0,s.jsxs)(n.p,{children:["Crea un paquete ",(0,s.jsx)(n.code,{children:"wxapi"})," bajo tu ra\xedz de paquete y agrega el ",(0,s.jsx)(n.code,{children:"WXEntryActivity"})," en el paquete ",(0,s.jsx)(n.code,{children:"wxapi"})," (Toma ",(0,s.jsx)(n.code,{children:"com.sample.app"})," como ejemplo):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"// WXEntryActivity.kt\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\nclass WXEntryActivity: WechatSocialResultActivity()\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// WXEntryActivity.java\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\npublic class WXEntryActivity extends WechatSocialResultActivity {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["La posici\xf3n final del ",(0,s.jsx)(n.code,{children:"WXEntryActivity"})," bajo el proyecto deber\xeda verse as\xed (Toma Kotlin como ejemplo):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"src/main/kotlin/com/sample/app/wxapi/WXEntryActivity.kt\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["3. Modifica el ",(0,s.jsx)(n.code,{children:"AndroidManifest.xml"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Agrega la siguiente l\xednea a tu ",(0,s.jsx)(n.code,{children:"AndroidManifest.xml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'\\<?xml version="1.0" encoding="utf-8"?>\n\\<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  package="com.sample.app">\n\n  \\<application>\n    \\\x3c!-- l\xednea a agregar --\x3e\n    \\<activity android:name=".wxapi.WXEntryActivity" android:exported="true"/>\n  \\</application>\n\n\\</manifest>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"test-wechat-native-connector",children:"Probar el conector nativo de WeChat"}),"\n",(0,s.jsxs)(n.p,{children:["Eso es todo. No olvides ",(0,s.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"Habilitar el conector social en la experiencia de inicio de sesi\xf3n"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Una vez que el conector nativo de WeChat est\xe9 habilitado, puedes compilar y ejecutar tu aplicaci\xf3n para ver si funciona."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,s.jsx)(n.strong,{children:"Precauci\xf3n"})]}),"\n",(0,s.jsxs)(n.p,{children:["WeChat no tiene un plan para aquellos dispositivos sin la aplicaci\xf3n de WeChat instalada. Logto ocultar\xe1 este conector durante el inicio de sesi\xf3n si es as\xed (lo cual es la forma recomendada seg\xfan la ",(0,s.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/WeChat_Login/Development_Guide.html",children:"gu\xeda de desarrollo oficial"}),")."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},39624:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/add-framework-a2909ba00d89aecf527fee6f6eb2e222.png"},53118:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/app-tabs-0fdd6440f5140b067ca25c7645605e6d.png"},49643:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/create-mobile-app-0f8e3cd8ec9e5c2b0293377a21fb86a0.png"},28745:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/custom-url-scheme-abb8ac9a9639a93e2db7399b16c788b1.png"},69363:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/linker-flags-0ad70a41be8bf97f4d9d249890178228.png"},92901:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/platform-android-app-aecce8c59d4104fbb6cdbeec8e64fff8.png"},66169:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/platform-b86788c4ba09b775d6930cac8ce81e5d.png"},43498:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/plist-7f1222158e4ce1e755332cae7832b123.png"},8580:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/universal-link-80235270b511eb79e20fc07f4fa4cb67.png"},79621:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var i=a(58101);const s={},c=i.createContext(s);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);