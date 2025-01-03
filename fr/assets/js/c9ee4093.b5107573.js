"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[52529],{73303:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>l});var s=i(25105),a=i(79621);const l=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,s.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function r(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},93588:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"integrations/social/alipay-native/README","title":"Configurer la connexion sociale avec Alipay (Native)","description":"Le connecteur officiel Logto pour la connexion sociale Alipay dans les applications natives sur appareils mobiles.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/alipay-native/README.mdx","sourceDirName":"integrations/social/alipay-native","slug":"/integrations/alipay-native","permalink":"/fr/integrations/alipay-native","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/alipay-native/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/alipay-native","sidebar_label":"Alipay (Native)","sidebar_custom_props":{"description":"Alipay est une plateforme de paiement mobile et en ligne tierce.","logoFilename":"alipay.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Introduction","permalink":"/fr/integrations/"},"next":{"title":"Alipay (Web)","permalink":"/fr/integrations/alipay-web"}}');var a=i(25105),l=i(79621),o=i(73303);const r={slug:"/integrations/alipay-native",sidebar_label:"Alipay (Native)",sidebar_custom_props:{description:"Alipay est une plateforme de paiement mobile et en ligne tierce.",logoFilename:"alipay.svg"}},t="Configurer la connexion sociale avec Alipay (Native)",c={},p=[...o.RM,{value:"Commencer",id:"get-started",level:2},{value:"Enregistrer un compte d\xe9veloppeur Alipay",id:"register-alipay-developer-account",level:2},{value:"Cr\xe9er et configurer une application Alipay",id:"create-and-configure-alipay-app",level:2},{value:"Configurer les param\xe8tres du connecteur Logto Alipay Native",id:"set-up-the-logto-alipay-native-connector-settings",level:2},{value:"Types de configuration",id:"config-types",level:3},{value:"Activer la connexion native Alipay dans votre application",id:"enable-alipay-native-sign-in-in-your-app",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Tester le connecteur natif Alipay",id:"test-alipay-native-connector",level:3},{value:"R\xe9f\xe9rences",id:"references",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"configurer-la-connexion-sociale-avec-alipay-native",children:"Configurer la connexion sociale avec Alipay (Native)"})}),"\n",(0,a.jsx)(n.p,{children:"Le connecteur officiel Logto pour la connexion sociale Alipay dans les applications natives sur appareils mobiles."}),"\n",(0,a.jsx)(o.Ay,{}),"\n",(0,a.jsx)(n.h2,{id:"get-started",children:"Commencer"}),"\n",(0,a.jsx)(n.p,{children:"Le connecteur Alipay Native fonctionne en \xe9troite collaboration avec le SDK Logto sur les plateformes mobiles. Il tire parti du workflow d'Authentification OAuth 2.0 d'Alipay et permet aux utilisateurs d'Alipay de se connecter \xe0 d'autres applications en utilisant des profils utilisateurs publics Alipay sans passer par un processus d'enregistrement fastidieux."}),"\n",(0,a.jsx)(n.h2,{id:"register-alipay-developer-account",children:"Enregistrer un compte d\xe9veloppeur Alipay"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://certifyweb.alipay.com/certify/reg/guide#/",children:"Enregistrez un compte d\xe9veloppeur Alipay"})," si vous n'en avez pas."]}),"\n",(0,a.jsx)(n.h2,{id:"create-and-configure-alipay-app",children:"Cr\xe9er et configurer une application Alipay"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Connectez-vous \xe0 la ",(0,a.jsx)(n.a,{href:"https://open.alipay.com/",children:"console Alipay"})," avec le compte que vous venez de cr\xe9er."]}),"\n",(0,a.jsx)(n.li,{children:'Allez dans l\'onglet "Web & Mobile Apps" (\u7f51\u9875&\u79fb\u52a8\u5e94\u7528) dans le panneau "My Application" (\u6211\u7684\u5e94\u7528).'}),"\n",(0,a.jsx)(n.li,{children:'Cliquez sur le bouton "Create an App" (\u7acb\u5373\u521b\u5efa) pour commencer \xe0 configurer votre application.'}),"\n",(0,a.jsx)(n.li,{children:'Nommez votre application dans "Application Name" (\u5e94\u7528\u540d\u79f0) en suivant les conventions de nommage et t\xe9l\xe9chargez votre "Application Icon" (\u5e94\u7528\u56fe\u6807), assurez-vous de choisir "mobile application" (\u79fb\u52a8\u5e94\u7528) comme "App type" (\u5e94\u7528\u7c7b\u578b). Pour construire une application iOS, un "Bundle ID" unique est requis. De plus, une "application signature" (\u5e94\u7528\u7b7e\u540d) et un "application package name" (\u5e94\u7528\u5305\u540d) sont requis pour les applications Android.'}),"\n",(0,a.jsx)(n.li,{children:'Apr\xe8s avoir termin\xe9 la cr\xe9ation de l\'application, nous arrivons \xe0 la page d\'aper\xe7u, o\xf9 nous devons cliquer sur "add ability" (\u6dfb\u52a0\u80fd\u529b) pour ajouter "Third-party application authorization" (\u7b2c\u4e09\u65b9\u5e94\u7528\u6388\u6743), "Get member information" (\u83b7\u53d6\u4f1a\u5458\u4fe1\u606f) et "App Alipay login" (App \u652f\u4ed8\u5b9d\u767b\u5f55) avant d\'activer la connexion Alipay.'}),"\n",(0,a.jsxs)(n.li,{children:["Allez au ",(0,a.jsx)(n.a,{href:"https://b.alipay.com/index2.htm",children:"Centre Client Alipay"}),', et connectez-vous avec le compte d\xe9veloppeur Alipay. Cliquez sur "Account Center" (\u8d26\u53f7\u4e2d\u5fc3) dans la barre sup\xe9rieure et allez \xe0 "APPID binding" (APPID \u7ed1\u5b9a), dont l\'entr\xe9e se trouve en bas de la barre lat\xe9rale. "Add binding" (\u6dfb\u52a0\u7ed1\u5b9a) en tapant l\'APPID de l\'application mobile que vous venez de cr\xe9er \xe0 l\'\xe9tape 4.']}),"\n",(0,a.jsx)(n.li,{children:'Cliquez sur le bouton "Sign" de "App Alipay login", et terminez le processus de signature en suivant le guide. Apr\xe8s avoir termin\xe9 cette \xe9tape, vous devriez voir les capacit\xe9s que vous venez d\'ajouter \xe0 l\'\xe9tape 5 s\'activer.'}),"\n",(0,a.jsx)(n.li,{children:'Revenez \xe0 la page de la console de la plateforme ouverte Alipay, et vous pouvez trouver "Interface signing method" (\u63a5\u53e3\u52a0\u7b7e\u65b9\u5f0f\uff08\u5bc6\u94a5/\u8bc1\u4e66\uff09) dans la section "development information" (\u5f00\u53d1\u4fe1\u606f). Cliquez sur le bouton "set up" (\u8bbe\u7f6e), et vous vous retrouverez sur une page de configuration de la m\xe9thode de signature. "Public Key" (\u516c\u94a5) est le mode de signature pr\xe9f\xe9r\xe9, et remplissez les contenus du fichier de cl\xe9 publique que vous avez g\xe9n\xe9r\xe9 dans la zone de saisie de texte.'}),"\n",(0,a.jsxs)(n.li,{children:['Configurez "Authorization Redirect URI" (\u6388\u6743\u56de\u8c03\u5730\u5740) en cliquant sur le bouton "set up" (\u8bbe\u7f6e) en bas de la page de la console Alipay. ',(0,a.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"})," est l'URI de redirection par d\xe9faut utilis\xe9 dans le noyau Logto. Le ",(0,a.jsx)(n.code,{children:"connector_id"})," peut \xeatre trouv\xe9 sur la barre sup\xe9rieure de la page de d\xe9tails du connecteur de la console d'administration Logto."]}),"\n",(0,a.jsx)(n.li,{children:'Apr\xe8s avoir termin\xe9 toutes ces \xe9tapes, revenez dans le coin sup\xe9rieur droit de la page de la console Alipay, et cliquez sur "Submit for review" (\u63d0\u4ea4\u5ba1\u6838). Une fois l\'examen approuv\xe9, vous \xeates pr\xeat \xe0 utiliser un flux de connexion Alipay fluide.'}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,a.jsx)(n.strong,{children:"Remarque"})]}),"\n",(0,a.jsxs)(n.p,{children:["Vous pouvez utiliser ",(0,a.jsx)(n.em,{children:"openssl"})," pour g\xe9n\xe9rer des paires de cl\xe9s sur votre machine locale en ex\xe9cutant le code suivant dans le terminal."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -outform PEM -pubout -out public.pem\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Lors du remplissage de la cl\xe9 publique sur le site de configuration de l'application Alipay, vous devez supprimer l'en-t\xeate et le pied de page de ",(0,a.jsx)(n.code,{children:"public.pem"}),', supprimer tous les caract\xe8res de nouvelle ligne, et coller le reste du contenu dans la zone de saisie de texte pour "public key".']}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"set-up-the-logto-alipay-native-connector-settings",children:"Configurer les param\xe8tres du connecteur Logto Alipay Native"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Dans ",(0,a.jsx)(n.a,{href:"https://open.alipay.com/dev/workspace",children:"l'espace de travail de la console Alipay"}),', allez dans le panneau "My application" (\u6211\u7684\u5e94\u7528) et cliquez sur l\'onglet "Web & Mobile Apps" (\u7f51\u9875&\u79fb\u52a8\u5e94\u7528), vous pouvez trouver l\'APPID de toutes les applications.']}),"\n",(0,a.jsx)(n.li,{children:"\xc0 l'\xe9tape 7 de la partie pr\xe9c\xe9dente, vous avez d\xe9j\xe0 g\xe9n\xe9r\xe9 une paire de cl\xe9s comprenant une cl\xe9 priv\xe9e et une cl\xe9 publique."}),"\n",(0,a.jsxs)(n.li,{children:["Remplissez les param\xe8tres du connecteur Logto :","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Remplissez le champ ",(0,a.jsx)(n.code,{children:"appId"})," avec l'APPID que vous avez obtenu \xe0 l'\xe9tape 1."]}),"\n",(0,a.jsxs)(n.li,{children:["Remplissez le champ ",(0,a.jsx)(n.code,{children:"privateKey"})," avec le contenu du fichier de cl\xe9 priv\xe9e mentionn\xe9 \xe0 l'\xe9tape 2. Assurez-vous d'utiliser '\\n' pour remplacer tous les caract\xe8res de nouvelle ligne. Vous n'avez pas besoin de supprimer l'en-t\xeate et le pied de page dans le fichier de cl\xe9 priv\xe9e."]}),"\n",(0,a.jsxs)(n.li,{children:["Remplissez le champ ",(0,a.jsx)(n.code,{children:"signType"})," avec 'RSA2' en raison du mode de signature ",(0,a.jsx)(n.code,{children:"Public key"}),' que nous avons choisi \xe0 l\'\xe9tape 7 de "Cr\xe9er et configurer des applications Alipay".']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"config-types",children:"Types de configuration"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nom"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Valeurs \xe9num\xe9r\xe9es"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"appId"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"N/A"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"privateKey"}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"N/A"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"signType"}),(0,a.jsx)(n.td,{children:"enum string"}),(0,a.jsx)(n.td,{children:"'RSA' | 'RSA2'"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"enable-alipay-native-sign-in-in-your-app",children:"Activer la connexion native Alipay dans votre application"}),"\n",(0,a.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,a.jsxs)(n.p,{children:["Nous supposons que vous avez int\xe9gr\xe9 le ",(0,a.jsx)(n.a,{href:"/quick-starts/swift",children:"Logto iOS SDK"})," dans votre application. Dans ce cas, les choses sont assez simples, et vous n'avez m\xeame pas besoin de lire la documentation du SDK Alipay :"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["1. Ajoutez ",(0,a.jsx)(n.code,{children:"LogtoSocialPluginAlipay"})," \xe0 votre projet Xcode"]})}),"\n",(0,a.jsx)(n.p,{children:"Ajoutez le framework :"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Add framework",src:i(65824).A+"",width:"1086",height:"306"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,a.jsx)(n.strong,{children:"Remarque"})]}),"\n",(0,a.jsxs)(n.p,{children:['Le plugin inclut le "minimalist SDK" (\u6781\u7b80\u7248 SDK) d\'Alipay. Vous pouvez directement utiliser ',(0,a.jsx)(n.code,{children:"import AFServiceSDK"})," une fois le plugin import\xe9."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["2. Ajoutez le plugin \xe0 vos options d'initialisation ",(0,a.jsx)(n.code,{children:"LogtoClient"})]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'let logtoClient = LogtoClient(\n  useConfig: config,\n  socialPlugins: [LogtoSocialPluginAlipay(callbackScheme: "your-scheme")]\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["O\xf9 ",(0,a.jsx)(n.code,{children:"callbackScheme"})," est l'un des ",(0,a.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"custom URL Schemes"})," qui peut naviguer vers votre application."]}),"\n",(0,a.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,a.jsxs)(n.p,{children:["Nous supposons que vous avez int\xe9gr\xe9 le ",(0,a.jsx)(n.a,{href:"/quick-starts/android",children:"Logto Android SDK"})," dans votre application. Dans ce cas, les choses sont assez simples, et vous n'avez m\xeame pas besoin de lire la documentation du SDK Alipay :"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:'1. T\xe9l\xe9chargez le "minimalist SDK" d\'Alipay et ajoutez-le \xe0 votre projet'})}),"\n",(0,a.jsxs)(n.p,{children:['T\xe9l\xe9chargez le "minimalist SDK" d\'Alipay (\u6781\u7b80\u7248 SDK) depuis ',(0,a.jsx)(n.a,{href:"https://github.com/logto-io/social-sdks/blob/master/alipay/android/alipaySdk-15.7.9-20200727142846.aar",children:"Logto 3rd-party Social SDKs"})," dans le dossier ",(0,a.jsx)(n.code,{children:"app/libs"})," de votre projet :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"project-path/app/libs/alipaySdk-15.7.9-20200727142846.aar\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:'2. Ajoutez le "minimalist SDK" d\'Alipay en tant que d\xe9pendance'})}),"\n",(0,a.jsxs)(n.p,{children:["Ouvrez votre fichier ",(0,a.jsx)(n.code,{children:"build.gradle"})," :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"project-path/app/build.gradle\n"})}),"\n",(0,a.jsx)(n.p,{children:"Ajoutez la d\xe9pendance :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"dependencies {\n  // ...\n  implementation(files(\"./libs/alipaySdk-15.7.9-20200727142846.aar\"))  // kotlin-script\n  // or\n  implementation files('./libs/alipaySdk-15.7.9-20200727142846.aar')  // groovy-script\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"test-alipay-native-connector",children:"Tester le connecteur natif Alipay"}),"\n",(0,a.jsxs)(n.p,{children:["C'est tout. N'oubliez pas d' ",(0,a.jsx)(n.a,{href:"/connectors/social-connectors/#enable-social-sign-in",children:"activer le connecteur social dans l'exp\xe9rience de connexion"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Une fois le connecteur natif Alipay activ\xe9, vous pouvez construire et ex\xe9cuter votre application pour voir si cela fonctionne."}),"\n",(0,a.jsx)(n.h2,{id:"references",children:"R\xe9f\xe9rences"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://opendocs.alipay.com/support/01rau6",children:"Alipay Docs - Access Preparation - How to create an app"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://opendocs.alipay.com/open/200/105310",children:"Alipay Docs - Web & Mobile Apps - Create an app"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},65824:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/add-framework-46af6de4ae4a8b92382c7e57e3454036.png"},79621:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(58101);const a={},l=s.createContext(a);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);