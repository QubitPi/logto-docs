"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37797],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(59496);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=o.createContext({}),c=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),g=c(n),d=i,h=g["".concat(p,".").concat(d)]||g[d]||s[d]||a;return n?o.createElement(h,r(r({ref:e},u),{},{components:n})):o.createElement(h,r({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},63243:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Sign in with GitHub account",id:"sign-in-with-github-account",level:3},{value:"Create and configure OAuth app",id:"create-and-configure-oauth-app",level:3},{value:"Managing OAuth apps",id:"managing-oauth-apps",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4}]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"sign-in-with-github-account"},"Sign in with GitHub account"),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub website")," and sign in with your GitHub account. You may register a new account if you don't have one."),(0,a.kt)("h3",{id:"create-and-configure-oauth-app"},"Create and configure OAuth app"),(0,a.kt)("p",null,"Follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app"},"creating an OAuth App")," guide, and register a new application."),(0,a.kt)("p",null,"Name your new OAuth application in ",(0,a.kt)("strong",{parentName:"p"},"Application name")," and fill up ",(0,a.kt)("strong",{parentName:"p"},"Homepage URL")," of the app.\nYou can leave ",(0,a.kt)("strong",{parentName:"p"},"Application description")," field blank and customize ",(0,a.kt)("strong",{parentName:"p"},"Authorization callback URL")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"${your_logto_origin}/callback/${connector_id}"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"connector_id")," can be found on the top bar of the Logto Admin Console connector details page."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Note: If you encounter the error message "The redirect_uri MUST match the registered callback URL for this application." when logging in, try aligning the Authorization Callback URL of your GitHub OAuth App and your Logto App\'s redirect URL (of course, including the protocol) to resolve the issue.')),(0,a.kt)("p",null,"We suggest not to check the box before ",(0,a.kt)("strong",{parentName:"p"},"Enable Device Flow"),", or users who sign in with GitHub on mobile devices must confirm the initial sign-in action in the GitHub app. Many GitHub users do not install the GitHub mobile app on their phones, which could block the sign-in flow. Please ignore our suggestion if you are expecting end-users to confirm their sign-in flow. See details of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow"},"device flow"),"."),(0,a.kt)("h3",{id:"managing-oauth-apps"},"Managing OAuth apps"),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/settings/developers"},"OAuth Apps page")," and you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,a.kt)("inlineCode",{parentName:"p"},"Client ID")," and generate ",(0,a.kt)("inlineCode",{parentName:"p"},"Client secrets")," in OAuth app detail pages."),(0,a.kt)("h3",{id:"compose-the-connector-json"},"Compose the connector JSON"),(0,a.kt)("p",null,"Let's go back to Logto. Fill out the ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clientSecret")," field with ",(0,a.kt)("em",{parentName:"p"},"Client ID")," and ",(0,a.kt)("em",{parentName:"p"},"Client Secret")," you've got from OAuth app detail pages mentioned in the previous section."),(0,a.kt)("p",null,"Here is an example of GitHub connector config JSON."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientID": "<your-client-id>",\n  "clientSecret": "<your-client-secret>"\n}\n')),(0,a.kt)("h4",{id:"config-types"},"Config types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientId"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,a.kt)("td",{parentName:"tr",align:null},"string")))))}p.isMDXComponent=!0},21344:function(t,e,n){n.d(e,{ZP:function(){return g}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(81075),l=n(57768),p=n(74027),c=n(58369),u=["components"],s={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Sign in",id:"sign-in",level:3}]};function g(t){var e=t.components,n=(0,i.Z)(t,u);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,a.kt)(r.ZP,{mdxType:"AddSdk"}),(0,a.kt)("h3",{id:"init-logtoclient"},"Init LogtoClient"),(0,a.kt)(p.ZP,{mdxType:"InitClient"}),(0,a.kt)("h3",{id:"sign-in"},"Sign in"),(0,a.kt)(l.ZP,{mdxType:"ImplementSignIn"}),(0,a.kt)(c.ZP,{sdk:"flutter",mdxType:"TestYourIntegration"}))}g.isMDXComponent=!0},62413:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,p=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connector tab",src:n(31631).Z,width:"3352",height:"1226"})),(0,a.kt)("p",null,'In the openning modal, select "',p.connector,'" and click "Next".'),(0,a.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,a.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}p.isMDXComponent=!0},84551:function(t,e,n){n.d(e,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],p={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(t){var e=t.components,c=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create application",src:n(96678).Z,width:"2368",height:"226"})),(0,a.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,a.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,a.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,a.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,a.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,a.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,a.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},11895:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,p=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign-in Experience tab",src:n(66984).Z,width:"3160",height:"1822"})),(0,a.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',p.connector," ","sign-in, which may increase your conversion rate."),(0,a.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',p.connector,'". Then you should be able to see a button with text "Continue with ',p.connector,'" in the preview section.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Save changes",src:n(67434).Z,width:"2474",height:"188"})),(0,a.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}p.isMDXComponent=!0},4107:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"For our new friends",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,a.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,a.kt)("span",null," and "),(0,a.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"Basic knowledge of"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"A usable ",n.connector," account."))))}p.isMDXComponent=!0},45793:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}p.isMDXComponent=!0},58369:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Test your integration",type:"info"},(0,a.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}p.isMDXComponent=!0},27501:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}p.isMDXComponent=!0},45114:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},connector:function(){return g},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=(n(4107),n(84551),n(62413),n(45793),n(11895),n(27501),n(21344),n(63243),["components"]),l={slug:"how-to-build-github-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","github","flutter","dart","social-sign-in","sign-in","login"],title:"How to build GitHub sign-in with Flutter and Logto"},p=void 0,c={permalink:"/logto-docs/tutorial/how-to-build-github-sign-in-with-flutter-and-logto",source:"@site/tutorial/build-with-logto/generated-flutter-github.mdx",title:"How to build GitHub sign-in with Flutter and Logto",description:"\x3c!--",date:"2023-07-26T01:54:28.660Z",formattedDate:"July 26, 2023",tags:[{label:"authentication",permalink:"/logto-docs/tutorial/tags/authentication"},{label:"github",permalink:"/logto-docs/tutorial/tags/github"},{label:"flutter",permalink:"/logto-docs/tutorial/tags/flutter"},{label:"dart",permalink:"/logto-docs/tutorial/tags/dart"},{label:"social-sign-in",permalink:"/logto-docs/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/logto-docs/tutorial/tags/sign-in"},{label:"login",permalink:"/logto-docs/tutorial/tags/login"}],readingTime:1.28,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-github-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","github","flutter","dart","social-sign-in","sign-in","login"],title:"How to build GitHub sign-in with Flutter and Logto"},prevItem:{title:"How to build Facebook sign-in with Flutter and Logto",permalink:"/logto-docs/tutorial/how-to-build-facebook-sign-in-with-flutter-and-logto"},nextItem:{title:"How to build Google sign-in with Flutter and Logto",permalink:"/logto-docs/tutorial/how-to-build-google-sign-in-with-flutter-and-logto"}},u={authorsImageUrls:[void 0]},s=[],g="GitHub",d={toc:s,connector:g};function h(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},81075:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our flutter SDK package is published on ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/logto_dart_sdk"},"pub.dev"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub get logto_dart_sdk\n")),(0,a.kt)("p",null,"Or you may directly get your own copy of the SDK from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/dart"},"github")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/logto-io/dart\n")))}p.isMDXComponent=!0},57768:function(t,e,n){n.d(e,{ZP:function(){return s}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(37173),l=n(48248),p=n(86032),c=["components"],u={toc:[{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3}]};function s(t){var e=t.components,n=(0,i.Z)(t,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,a.kt)(l.ZP,{figureSrc:r.Z,redirectUri:"io.logto://callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)(p.ZP,{calling:".signIn(redirectUri)",mdxType:"SignInNote"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void signIn() async {\n  await logtoClient.signIn(redirectUri);\n}\n")))}s.isMDXComponent=!0},74027:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:logto_dart_sdk/logto_dart_sdk.dart';\nimport 'package:http/http.dart' as http;\n\n// ...\nlate LogtoClient logtoClient;\n\n// LogtoConfig\nfinal logtoConfig = const LogtoConfig(\n  endpoint: \"<your-logto-endpoint>\", // E.g. http://localhost:3001\n  appId: \"<your-app-id>\"\n  ...\n);\n\nvoid _init() async  {\n  logtoClient = LogtoClient(\n    config: logtoConfig,\n    httpClient: http.Client(), // Optional http client\n  );\n}\n\n")))}p.isMDXComponent=!0},48248:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,a.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}p.isMDXComponent=!0},86032:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"Before calling ",(0,a.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}p.isMDXComponent=!0},37173:function(t,e){e.Z="data:image/png;base64,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"},31631:function(t,e,n){e.Z=n.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},96678:function(t,e,n){e.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},67434:function(t,e,n){e.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},66984:function(t,e,n){e.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);