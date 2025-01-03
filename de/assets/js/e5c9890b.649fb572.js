"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[32006],{71628:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var s=i(25105),t=i(79621);const r=[];function d(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["In diesem Leitfaden gehen wir davon aus, dass du grundlegende Kenntnisse \xfcber Logto Connectors hast. Falls nicht, schaue dir den Leitfaden ",(0,s.jsx)(n.a,{href:"/connectors",children:"Connectors konfigurieren"})," an, um loszulegen."]})})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},48434:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"integrations/social/wechat-native/README","title":"Soziale Anmeldung mit WeChat (Native) einrichten","description":"Der offizielle Logto-Connector f\xfcr die WeChat-Sozialanmeldung in nativen Apps (iOS und Android).","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/integrations/social/wechat-native/README.mdx","sourceDirName":"integrations/social/wechat-native","slug":"/integrations/wechat-native","permalink":"/de/integrations/wechat-native","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/integrations/social/wechat-native/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wechat-native","sidebar_label":"WeChat (Native)","sidebar_custom_props":{"description":"WeChat ist eine plattform\xfcbergreifende Instant-Messaging-App.","logoFilename":"wechat.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"OIDC (Social)","permalink":"/de/integrations/oidc"},"next":{"title":"WeChat (Web)","permalink":"/de/integrations/wechat-web"}}');var t=i(25105),r=i(79621),d=i(71628);const a={slug:"/integrations/wechat-native",sidebar_label:"WeChat (Native)",sidebar_custom_props:{description:"WeChat ist eine plattform\xfcbergreifende Instant-Messaging-App.",logoFilename:"wechat.svg"}},l="Soziale Anmeldung mit WeChat (Native) einrichten",c={},o=[...d.RM,{value:"Erste Schritte",id:"get-started",level:2},{value:"Erstelle eine mobile App auf der WeChat Open Platform",id:"create-a-mobile-app-in-the-wechat-open-platform",level:2},{value:"Erstelle ein Konto",id:"create-an-account",level:3},{value:"Erstelle eine mobile App",id:"create-a-mobile-app",level:3},{value:"Grundlegende Informationen",id:"basic-info",level:4},{value:"Plattforminformationen",id:"platform-info",level:4},{value:"Warten auf das \xdcberpr\xfcfungsergebnis",id:"waiting-for-the-review-result",level:4},{value:"Aktiviere die WeChat-Native-Anmeldung in deiner App",id:"enable-wechat-native-sign-in-in-your-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Teste den WeChat-Native-Connector",id:"test-wechat-native-connector",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"soziale-anmeldung-mit-wechat-native-einrichten",children:"Soziale Anmeldung mit WeChat (Native) einrichten"})}),"\n",(0,t.jsx)(n.p,{children:"Der offizielle Logto-Connector f\xfcr die WeChat-Sozialanmeldung in nativen Apps (iOS und Android)."}),"\n",(0,t.jsx)(d.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"get-started",children:"Erste Schritte"}),"\n",(0,t.jsxs)(n.p,{children:["Wenn du das Konzept des Connectors nicht kennst oder nicht wei\xdft, wie du diesen Connector zu deiner Anmeldeerfahrung hinzuf\xfcgen kannst, sieh dir bitte das ",(0,t.jsx)(n.a,{href:"/connectors/social-connectors",children:"Logto-Tutorial"})," an."]}),"\n",(0,t.jsx)(n.p,{children:"In nativen Apps kannst du das Web nicht als Anmeldemethode von WeChat verwenden: Eine Navigation zur WeChat-App ist erforderlich, und es erfordert auch die Verwendung ihres SDK."}),"\n",(0,t.jsx)(n.p,{children:"Wir wissen, dass es be\xe4ngstigend klingt, aber keine Sorge. Wir werden es in diesem Tutorial leicht handhaben."}),"\n",(0,t.jsx)(n.h2,{id:"create-a-mobile-app-in-the-wechat-open-platform",children:"Erstelle eine mobile App auf der WeChat Open Platform"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,t.jsx)(n.strong,{children:"Tipp"})]}),"\n",(0,t.jsx)(n.p,{children:"Du kannst einige Abschnitte \xfcberspringen, wenn du sie bereits abgeschlossen hast."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-an-account",children:"Erstelle ein Konto"}),"\n",(0,t.jsxs)(n.p,{children:["\xd6ffne ",(0,t.jsx)(n.a,{href:"https://open.weixin.qq.com/",children:"https://open.weixin.qq.com/"}),', klicke auf die Schaltfl\xe4che "Registrieren" in der oberen rechten Ecke und schlie\xdfe dann den Registrierungsprozess ab.']}),"\n",(0,t.jsx)(n.h3,{id:"create-a-mobile-app",children:"Erstelle eine mobile App"}),"\n",(0,t.jsx)(n.p,{children:'Melde dich mit dem gerade erstellten Konto an. Im Tab "Mobile Anwendung" (\u79fb\u52a8\u5e94\u7528) klicke auf die gro\xdfe gr\xfcne Schaltfl\xe4che "Erstelle eine mobile App" (\u521b\u5efa\u79fb\u52a8\u5e94\u7528).'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"App-Tabs",src:i(69369).A+"",width:"328",height:"266"})}),"\n",(0,t.jsx)(n.p,{children:"F\xfclle die erforderlichen Informationen im Antragsformular aus."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Erstelle eine mobile App",src:i(14282).A+"",width:"2000",height:"617"})}),"\n",(0,t.jsx)(n.h4,{id:"basic-info",children:"Grundlegende Informationen"}),"\n",(0,t.jsx)(n.p,{children:"Die meisten sind ziemlich selbsterkl\xe4rend, und wir haben hier einige Tipps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Wenn du nur die WeChat-Anmeldung testen m\xf6chtest und die App nicht im App Store ist, w\xe4hle im Abschnitt "App ist verf\xfcgbar" "Nein", um den "App-Download-Link" zu \xfcberspringen.'}),"\n",(0,t.jsx)(n.li,{children:'Das "App-Betriebsablaufdiagramm" sieht knifflig aus. Aus unserer Erfahrung musst du ein einfaches Flussdiagramm und mehrere App-Screenshots vorbereiten, um die M\xf6glichkeit zu erh\xf6hen, die \xdcberpr\xfcfung zu bestehen.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Klicke auf "N\xe4chster Schritt", um fortzufahren.'}),"\n",(0,t.jsx)(n.h4,{id:"platform-info",children:"Plattforminformationen"}),"\n",(0,t.jsx)(n.p,{children:"Du kannst eine oder beide Plattformen, iOS und Android, konfigurieren, um Logto mit der WeChat-Native-Anmeldung zu integrieren."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"iOS-App"})}),"\n",(0,t.jsx)(n.p,{children:'W\xe4hle "iOS-App" (iOS \u5e94\u7528) aus und w\xe4hle dann den Zielger\xe4tetyp deiner App entsprechend aus.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"App-Plattform",src:i(77074).A+"",width:"1614",height:"374"})}),"\n",(0,t.jsx)(n.p,{children:'Wenn du "Nein" f\xfcr die Verf\xfcgbarkeit im App Store gew\xe4hlt hast, kannst du das Ausf\xfcllen der "AppStore-Download-Adresse" hier \xfcberspringen.'}),"\n",(0,t.jsxs)(n.p,{children:["F\xfclle ",(0,t.jsx)(n.em,{children:"Bundle ID"}),", ",(0,t.jsx)(n.em,{children:"Testversion Bundle ID"})," und ",(0,t.jsx)(n.em,{children:"Universal Links"})," aus (tats\xe4chlich wird nur ein Link ben\xf6tigt \ud83d\ude02)."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Hinweis"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Bundle ID"})," und ",(0,t.jsx)(n.em,{children:"Testversion Bundle ID"})," k\xf6nnen denselben Wert haben."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,t.jsx)(n.strong,{children:"Tipp"})]}),"\n",(0,t.jsxs)(n.p,{children:["WeChat erfordert einen universellen Link f\xfcr die native Anmeldung. Wenn du ihn nicht eingerichtet hast oder nicht wei\xdft, was es ist, sieh dir bitte die ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/ios/universal-links/",children:"offizielle Apple-Dokumentation"})," an."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Android-App"})}),"\n",(0,t.jsx)(n.p,{children:'W\xe4hle "Android-App" (Android \u5e94\u7528) aus.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Android-App-Plattform",src:i(74278).A+"",width:"1538",height:"332"})}),"\n",(0,t.jsxs)(n.p,{children:["F\xfclle ",(0,t.jsx)(n.em,{children:"Anwendungssignatur"})," (\u5e94\u7528\u7b7e\u540d) und ",(0,t.jsx)(n.em,{children:"Anwendungspaketname"})," (\u5e94\u7528\u5305\u540d) aus."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Hinweis"})]}),"\n",(0,t.jsxs)(n.p,{children:["Du musst deine App signieren, um eine Signatur zu erhalten. Siehe ",(0,t.jsx)(n.a,{href:"https://developer.android.com/studio/publish/app-signing",children:"App signieren"})," f\xfcr weitere Informationen."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Nachdem du das Signieren abgeschlossen hast, kannst du die ",(0,t.jsx)(n.code,{children:"signingReport"}),"-Aufgabe ausf\xfchren, um die Signatursignatur zu erhalten."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./gradlew your-android-project:signingReport\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Der ",(0,t.jsx)(n.code,{children:"MD5"}),"-Wert des entsprechenden Build-Variantenberichts wird die ",(0,t.jsx)(n.em,{children:"Anwendungssignatur"})," (\u5e94\u7528\u7b7e\u540d) sein, aber denke daran, alle Doppelpunkte aus dem Wert zu entfernen und ihn in Kleinbuchstaben zu schreiben."]}),"\n",(0,t.jsxs)(n.p,{children:["Z.B. ",(0,t.jsx)(n.code,{children:"1A:2B:3C:4D"})," -> ",(0,t.jsx)(n.code,{children:"1a2b3c4d"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"waiting-for-the-review-result",children:"Warten auf das \xdcberpr\xfcfungsergebnis"}),"\n",(0,t.jsx)(n.p,{children:'Nachdem du die Plattforminformationen abgeschlossen hast, klicke auf "\xdcberpr\xfcfung einreichen", um fortzufahren. Normalerweise geht die \xdcberpr\xfcfung schnell, sie endet innerhalb von 1-2 Tagen.'}),"\n",(0,t.jsx)(n.p,{children:"Wir vermuten, dass der Pr\xfcfer bei jeder Einreichung zuf\xe4llig zugewiesen wird, da der Standard schwankt. Du k\xf6nntest beim ersten Mal abgelehnt werden, aber gib nicht auf! Erkl\xe4re deinen aktuellen Status und frage den Pr\xfcfer, wie du ihn \xe4ndern kannst."}),"\n",(0,t.jsx)(n.h2,{id:"enable-wechat-native-sign-in-in-your-app",children:"Aktiviere die WeChat-Native-Anmeldung in deiner App"}),"\n",(0,t.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,t.jsxs)(n.p,{children:["Wir gehen davon aus, dass du das ",(0,t.jsx)(n.a,{href:"/quick-starts/swift",children:"Logto iOS SDK"})," in deiner App integriert hast. In diesem Fall sind die Dinge ziemlich einfach, und du musst nicht einmal die WeChat SDK-Dokumentation lesen:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"1. Konfiguriere den universellen Link und das URL-Schema in deinem Xcode-Projekt"})}),"\n",(0,t.jsx)(n.p,{children:'Im Xcode-Projekt -> Tab "Signing & Capabilities", f\xfcge die F\xe4higkeit "Associated Domains" und den zuvor konfigurierten universellen Link hinzu.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Universeller Link",src:i(32247).A+"",width:"1180",height:"274"})}),"\n",(0,t.jsxs)(n.p,{children:['Gehe dann zum Tab "Info" und f\xfcge ein ',(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"benutzerdefiniertes URL-Schema"})," mit der WeChat-App-ID hinzu."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Benutzerdefiniertes URL-Schema",src:i(31528).A+"",width:"1216",height:"476"})}),"\n",(0,t.jsxs)(n.p,{children:["\xd6ffne schlie\xdflich deine ",(0,t.jsx)(n.code,{children:"Info.plist"})," und f\xfcge ",(0,t.jsx)(n.code,{children:"weixinULAPI"})," und ",(0,t.jsx)(n.code,{children:"weixin"})," unter ",(0,t.jsx)(n.code,{children:"LSApplicationQueriesSchemes"})," hinzu."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Plist",src:i(72091).A+"",width:"1104",height:"262"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83e\udd26 ",(0,t.jsx)(n.strong,{children:"Hinweis"})]}),"\n",(0,t.jsxs)(n.p,{children:["Wir wissen, dass diese Aktionen nicht sehr vern\xfcnftig sind, aber dies ist die minimal funktionsf\xe4hige L\xf6sung, die wir gefunden haben. Siehe den ",(0,t.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/Access_Guide/iOS.html",children:"magischen offiziellen Leitfaden"})," f\xfcr weitere Informationen."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. F\xfcge ",(0,t.jsx)(n.code,{children:"LogtoSocialPluginWechat"})," zu deinem Xcode-Projekt hinzu"]})}),"\n",(0,t.jsx)(n.p,{children:"F\xfcge das Framework hinzu:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Framework hinzuf\xfcgen",src:i(94145).A+"",width:"1108",height:"310"})}),"\n",(0,t.jsxs)(n.p,{children:["Und f\xfcge ",(0,t.jsx)(n.code,{children:"-ObjC"})," zu deinen Build-Einstellungen > Linking > Other Linker Flags hinzu:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Linker-Flags",src:i(59912).A+"",width:"1134",height:"202"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Hinweis"})]}),"\n",(0,t.jsxs)(n.p,{children:["Das Plugin enth\xe4lt das WeChat Open SDK 1.9.2. Du kannst ",(0,t.jsx)(n.code,{children:"import WechatOpenSDK"})," direkt verwenden, sobald das Plugin importiert wurde."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3. F\xfcge das Plugin zu deinen ",(0,t.jsx)(n.code,{children:"LogtoClient"}),"-Init-Optionen hinzu"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"let logtoClient = LogtoClient(\n  useConfig: config,\n  socialPlugins: [LogtoSocialPluginWechat()]\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["4. Behandle ",(0,t.jsx)(n.code,{children:"onOpenURL"})," richtig"]})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Hinweis"})]}),"\n",(0,t.jsxs)(n.p,{children:["Die Funktion ",(0,t.jsx)(n.code,{children:"LogtoClient.handle(url:)"})," wird alle nativen Connectoren behandeln, die du aktiviert hast. Du musst sie nur einmal aufrufen."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"// SwiftUI\nYourRootView()\n  .onOpenURL { url in\n      LogtoClient.handle(url: url)\n  }\n\n// oder AppDelegate\nfunc application(_ app: UIApplication, open url: URL, options: /*...*/) -> Bool {\n  LogtoClient.handle(url: url)\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,t.jsxs)(n.p,{children:["Wir gehen davon aus, dass du das ",(0,t.jsx)(n.a,{href:"/quick-starts/android",children:"Logto Android SDK"})," in deiner App integriert hast. In diesem Fall sind die Dinge ziemlich einfach, und du musst nicht einmal die WeChat SDK-Dokumentation lesen:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["1. F\xfcge ",(0,t.jsx)(n.code,{children:"Wechat Open SDK"})," zu deinem Projekt hinzu"]})}),"\n",(0,t.jsxs)(n.p,{children:["Stelle sicher, dass das ",(0,t.jsx)(n.code,{children:"mavenCentral()"}),"-Repository in deinen Gradle-Projektrepositories enthalten ist:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"repositories {\n  // ...\n  mavenCentral()\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"F\xfcge das Wechat Open SDK zu deinen Abh\xe4ngigkeiten hinzu:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"dependencies {\n  // ...\n  api(\"com.tencent.mm.opensdk:wechat-sdk-android:6.8.0\")  // kotlin-script\n  // oder\n  api 'com.tencent.mm.opensdk:wechat-sdk-android:6.8.0'   // groovy-script\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["2. F\xfchre ",(0,t.jsx)(n.code,{children:"WXEntryActivity"})," in dein Projekt ein"]})}),"\n",(0,t.jsxs)(n.p,{children:["Erstelle ein ",(0,t.jsx)(n.code,{children:"wxapi"}),"-Paket unter deinem Paketstamm und f\xfcge die ",(0,t.jsx)(n.code,{children:"WXEntryActivity"})," im ",(0,t.jsx)(n.code,{children:"wxapi"}),"-Paket hinzu (Nehmen wir ",(0,t.jsx)(n.code,{children:"com.sample.app"})," als Beispiel):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"// WXEntryActivity.kt\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\nclass WXEntryActivity: WechatSocialResultActivity()\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"// WXEntryActivity.java\npackage com.sample.app.wxapi\n\nimport io.logto.sdk.android.auth.social.wechat.WechatSocialResultActivity\n\npublic class WXEntryActivity extends WechatSocialResultActivity {}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Die endg\xfcltige Position der ",(0,t.jsx)(n.code,{children:"WXEntryActivity"})," im Projekt sollte so aussehen (Nehmen wir Kotlin als Beispiel):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"src/main/kotlin/com/sample/app/wxapi/WXEntryActivity.kt\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["3. \xc4ndere die ",(0,t.jsx)(n.code,{children:"AndroidManifest.xml"})]})}),"\n",(0,t.jsxs)(n.p,{children:["F\xfcge die folgende Zeile zu deiner ",(0,t.jsx)(n.code,{children:"AndroidManifest.xml"})," hinzu:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'\\<?xml version="1.0" encoding="utf-8"?>\n\\<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  package="com.sample.app">\n\n  \\<application>\n    \\\x3c!-- hinzuzuf\xfcgende Zeile --\x3e\n    \\<activity android:name=".wxapi.WXEntryActivity" android:exported="true"/>\n  \\</application>\n\n\\</manifest>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"test-wechat-native-connector",children:"Teste den WeChat-Native-Connector"}),"\n",(0,t.jsxs)(n.p,{children:["Das war's. Vergiss nicht, den ",(0,t.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"sozialen Connector in der Anmeldeerfahrung zu aktivieren"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Sobald der WeChat-Native-Connector aktiviert ist, kannst du deine App erstellen und ausf\xfchren, um zu sehen, ob sie funktioniert."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(n.strong,{children:"Vorsicht"})]}),"\n",(0,t.jsxs)(n.p,{children:["WeChat hat keinen Plan f\xfcr Ger\xe4te ohne installierte WeChat-App. Logto wird diesen Connector w\xe4hrend der Anmeldung ausblenden, falls dies der Fall ist (was die empfohlene Vorgehensweise aus dem ",(0,t.jsx)(n.a,{href:"https://developers.weixin.qq.com/doc/oplatform/en/Mobile_App/WeChat_Login/Development_Guide.html",children:"offiziellen Entwicklungsleitfaden"})," ist)."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94145:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/add-framework-a2909ba00d89aecf527fee6f6eb2e222.png"},69369:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/app-tabs-0fdd6440f5140b067ca25c7645605e6d.png"},14282:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/create-mobile-app-0f8e3cd8ec9e5c2b0293377a21fb86a0.png"},31528:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/custom-url-scheme-abb8ac9a9639a93e2db7399b16c788b1.png"},59912:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/linker-flags-0ad70a41be8bf97f4d9d249890178228.png"},74278:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/platform-android-app-aecce8c59d4104fbb6cdbeec8e64fff8.png"},77074:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/platform-b86788c4ba09b775d6930cac8ce81e5d.png"},72091:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/plist-7f1222158e4ce1e755332cae7832b123.png"},32247:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/universal-link-80235270b511eb79e20fc07f4fa4cb67.png"},79621:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var s=i(58101);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);