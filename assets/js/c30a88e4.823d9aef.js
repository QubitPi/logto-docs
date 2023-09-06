"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21982],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60442:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Register SendGrid account",id:"register-sendgrid-account",level:3},{value:"Verify senders",id:"verify-senders",level:3},{value:"Create API keys",id:"create-api-keys",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Test SendGrid Email connector",id:"test-sendgrid-email-connector",level:4},{value:"Config types",id:"config-types",level:4}]};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"register-sendgrid-account"},"Register SendGrid account"),(0,i.kt)("p",null,"Create a new account at ",(0,i.kt)("a",{parentName:"p",href:"https://app.sendgrid.com/"},"SendGrid website"),". You may skip this step if you've already registered an account."),(0,i.kt)("h3",{id:"verify-senders"},"Verify senders"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://app.sendgrid.com/"},"SendGrid console page")," and sign in with your SendGrid account."),(0,i.kt)("p",null,"Senders indicate the addresses our verification code email will be sent from. In order to send emails via the SendGrid mail server, you need to verify at least one sender."),(0,i.kt)("p",null,"Starting from the ",(0,i.kt)("a",{parentName:"p",href:"https://app.sendgrid.com/"},"SendGrid console page"),', go to "Settings" -> "Sender Authentication" from the sidebar.'),(0,i.kt)("p",null,'Domain Authentication is recommended but not obligatory. You can click "Get Started" in "Authenticate Your Domain" card and follow the upcoming guide to link and verify a sender to SendGrid.'),(0,i.kt)("p",null,'By clicking the "Verify a Single Sender" button in the panel, you are now focusing on a form requiring some critical information to create a sender. Follow the guide, fill out all these fields, and hit the "Create" button.'),(0,i.kt)("p",null,"After the single sender is created, an email with a verification link should be sent to your sender's email address. Go to your mailbox, find the verification mail and finish verifying the single sender by clicking the link given in the email. You can now send emails via SendGrid connector using the sender you've just verified."),(0,i.kt)("h3",{id:"create-api-keys"},"Create API keys"),(0,i.kt)("p",null,"Let's start from the ",(0,i.kt)("a",{parentName:"p",href:"https://app.sendgrid.com/"},"SendGrid console page"),', go to "Settings" -> "API Keys" from the sidebar.'),(0,i.kt)("p",null,'Click the "Create API Key" in the top-right corner of the API Keys page. Type in the name of the API key and customize "API Key Permission" per your use case. A global ',(0,i.kt)("inlineCode",{parentName:"p"},"Full Access")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Restricted Access")," with full access to Mail Send is required before sending emails with this API key."),(0,i.kt)("p",null,"The API Key is presented to you on the screen as soon as you finished the ",(0,i.kt)("em",{parentName:"p"},"Create API Key")," process. You should save this API Key somewhere safe because this is the only chance that you can see it."),(0,i.kt)("h3",{id:"configure-your-connector"},"Configure your connector"),(0,i.kt)("p",null,"Fill out the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),' field with the API Key created in "Create API keys" section.'),(0,i.kt)("p",null,"Fill out the ",(0,i.kt)("inlineCode",{parentName:"p"},"fromEmail")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fromName")," fields with the senders' ",(0,i.kt)("em",{parentName:"p"},"From Address")," and ",(0,i.kt)("em",{parentName:"p"},"Nickname"),". You can find the sender's details on the ",(0,i.kt)("a",{parentName:"p",href:"https://mc.sendgrid.com/senders"},'"Sender Management" page'),". ",(0,i.kt)("inlineCode",{parentName:"p"},"fromName")," is OPTIONAL, so you can skip filling it."),(0,i.kt)("p",null,"You can add multiple SendGrid mail connector templates for different cases. Here is an example of adding a single template:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fill out the ",(0,i.kt)("inlineCode",{parentName:"li"},"subject")," field, which works as the title of emails."),(0,i.kt)("li",{parentName:"ul"},"Fill out the ",(0,i.kt)("inlineCode",{parentName:"li"},"content")," field with arbitrary string-typed contents. Do not forget to leave the ",(0,i.kt)("inlineCode",{parentName:"li"},"{{code}}")," placeholder for the random verification code."),(0,i.kt)("li",{parentName:"ul"},"Fill out ",(0,i.kt)("inlineCode",{parentName:"li"},"usageType")," field with either ",(0,i.kt)("inlineCode",{parentName:"li"},"Register"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"SignIn"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ForgotPassword"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Generic")," for different use cases."),(0,i.kt)("li",{parentName:"ul"},"Fill out ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," field with either ",(0,i.kt)("inlineCode",{parentName:"li"},"text/plain")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"text/html")," for different types of content.")),(0,i.kt)("p",null,"In order to enable full user flows, templates with usageType ",(0,i.kt)("inlineCode",{parentName:"p"},"Register"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SignIn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgotPassword")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Generic")," are required."),(0,i.kt)("p",null,"Here is an example of SendGrid connector template JSON."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'[\n  {\n    "subject": "<register-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (register template)>",\n    "usageType": "Register",\n    "type": "text/plain"\n  },\n  {\n    "subject": "<sign-in-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (sign-in template)>",\n    "usageType": "SignIn",\n    "type": "text/plain"\n  },\n  {\n    "subject": "<forgot-password-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (forgot-password template)>",\n    "usageType": "ForgotPassword",\n    "type": "text/plain"\n  },\n  {\n    "subject": "<generic-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (generic template)>",\n    "usageType": "Generic",\n    "type": "text/plain"\n  }\n]\n')),(0,i.kt)("h4",{id:"test-sendgrid-email-connector"},"Test SendGrid Email connector"),(0,i.kt)("p",null,'You can type in an email address and click on "Send" to see whether the settings can work before "Save and Done".'),(0,i.kt)("p",null,"That's it. Don't forget to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors#enable-sms-or-email-passwordless-sign-in"},"Enable connector in sign-in experience")),(0,i.kt)("h4",{id:"config-types"},"Config types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"apiKey"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fromEmail"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fromName"),(0,i.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"templates"),(0,i.kt)("td",{parentName:"tr",align:null},"Template[]")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Template Properties"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Enum values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subject"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"content"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"usageType"),(0,i.kt)("td",{parentName:"tr",align:null},"enum string"),(0,i.kt)("td",{parentName:"tr",align:null},"'Register' ","|"," 'SignIn' ","|"," 'ForgotPassword' ","|"," 'Generic'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"enum string"),(0,i.kt)("td",{parentName:"tr",align:null},"'text/plain' ","|"," 'text/html'")))))}s.isMDXComponent=!0},18937:function(e,t,n){n.d(t,{ZP:function(){return k}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(64553),l=n(57530),s=n(91560),c=n(2890),d=n(84751),u=n(62637),p=n(45203),m=["components"],g={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3}]};function k(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,i.kt)(r.ZP,{mdxType:"AddSdk"}),(0,i.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,i.kt)(c.ZP,{mdxType:"InitClient"}),(0,i.kt)("h2",{id:"sign-in"},"Sign in"),(0,i.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,i.kt)(l.ZP,{mdxType:"ConfigAndroidRedirectUri"}),(0,i.kt)(u.ZP,{figureSrc:d.Z,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,i.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,i.kt)(s.ZP,{mdxType:"ImplementSignIn"}),(0,i.kt)(p.ZP,{sdk:"Android",mdxType:"TestYourIntegration"}))}k.isMDXComponent=!0},49594:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To add or change ",s.connectorType,' connector, go to the "Connector" tab in the Admin Console, then click on "Email and SMS Connectors". From there, click "Set up" or go to detail page and click "Change ',s.connectorType,' connector".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connector tab",src:n(42198).Z,width:"4164",height:"1290"})),(0,i.kt)("p",null,'In the openning modal, select "',s.connector,'" and click "Next".'),(0,i.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,i.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}s.isMDXComponent=!0},94742:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],s={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(e){var t=e.components,c=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create application",src:n(78509).Z,width:"2368",height:"226"})),(0,i.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,i.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,i.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,i.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,i.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,i.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,i.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},28440:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign-in Experience tab",src:n(36280).Z,width:"3160",height:"1822"})),(0,i.kt)("p",null,'Select "',s.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up identifier" to provide sign-up for ',s.connectorType," passwordless sign-in, which may increase your conversion rate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Save changes",src:n(46902).Z,width:"2474",height:"188"})),(0,i.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}s.isMDXComponent=!0},39092:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"For our new friends",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,i.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,i.kt)("span",null," and "),(0,i.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"Basic knowledge of"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"A usable ",n.connector," account."))))}s.isMDXComponent=!0},12579:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}s.isMDXComponent=!0},45203:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Test your integration",type:"info"},(0,i.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}s.isMDXComponent=!0},2447:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}s.isMDXComponent=!0},36628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},connector:function(){return b},contentTitle:function(){return h},default:function(){return C},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return v}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(39092),l=n(94742),s=n(49594),c=n(12579),d=n(28440),u=n(2447),p=n(18937),m=n(60442),g=["components"],k={slug:"how-to-build-sendgrid-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","sendgrid","android","kotlin/java","passwordless-sign-in","sign-in","login"],title:"How to build SendGrid Email passwordless sign-in with Android and Logto"},h=void 0,f={permalink:"/logto-docs/tutorial/how-to-build-sendgrid-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-sendgrid.mdx",title:"How to build SendGrid Email passwordless sign-in with Android and Logto",description:"\x3c!--",date:"2023-09-06T01:06:48.336Z",formattedDate:"September 6, 2023",tags:[{label:"authentication",permalink:"/logto-docs/tutorial/tags/authentication"},{label:"sendgrid",permalink:"/logto-docs/tutorial/tags/sendgrid"},{label:"android",permalink:"/logto-docs/tutorial/tags/android"},{label:"kotlin/java",permalink:"/logto-docs/tutorial/tags/kotlin-java"},{label:"passwordless-sign-in",permalink:"/logto-docs/tutorial/tags/passwordless-sign-in"},{label:"sign-in",permalink:"/logto-docs/tutorial/tags/sign-in"},{label:"login",permalink:"/logto-docs/tutorial/tags/login"}],readingTime:1.295,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-sendgrid-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","sendgrid","android","kotlin/java","passwordless-sign-in","sign-in","login"],title:"How to build SendGrid Email passwordless sign-in with Android and Logto"},prevItem:{title:"How to build AWS SES Email passwordless sign-in with Android and Logto",permalink:"/logto-docs/tutorial/how-to-build-aws-ses-sign-in-with-android-and-logto"},nextItem:{title:"How to build AWS SES Email passwordless sign-in with Express and Logto",permalink:"/logto-docs/tutorial/how-to-build-aws-ses-sign-in-with-express-and-logto"}},y={authorsImageUrls:[void 0]},v=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add SendGrid connector",id:"add-sendgrid-connector",level:2},{value:"Set up SendGrid email connector",id:"set-up-sendgrid-email-connector",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable SendGrid connector in Sign-in Experience",id:"enable-sendgrid-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],b="SendGrid",w={toc:v,connector:b};function C(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.ZP,{connector:b,sdk:"Android",link:"https://developer.android.com/",mdxType:"Intro"}),(0,i.kt)("h2",{id:"create-an-application-in-logto"},"Create an application in Logto"),(0,i.kt)(l.ZP,{type:"Native App",mdxType:"CreateApplication"}),(0,i.kt)("h2",{id:"integrate-logto-sdk"},"Integrate Logto SDK"),(0,i.kt)(p.ZP,{mdxType:"IntegrateSdk"}),(0,i.kt)("h2",{id:"add-sendgrid-connector"},"Add SendGrid connector"),(0,i.kt)(s.ZP,{connector:b,connectorType:"Email",mdxType:"AddPasswordlessConnector"}),(0,i.kt)("h2",{id:"set-up-sendgrid-email-connector"},"Set up SendGrid email connector"),(0,i.kt)(m.ZP,{mdxType:"ConnectorGuide"}),(0,i.kt)("h2",{id:"save-your-configuraiton"},"Save your configuraiton"),(0,i.kt)(c.ZP,{connector:b,mdxType:"SaveYourConfiguration"}),(0,i.kt)("h2",{id:"enable-sendgrid-connector-in-sign-in-experience"},"Enable SendGrid connector in Sign-in Experience"),(0,i.kt)(d.ZP,{connectorType:"Email",passwordlessSignUpIdentifier:"Email address",mdxType:"EnablePasswordlessConnector"}),(0,i.kt)("h2",{id:"testing-and-validation"},"Testing and Validation"),(0,i.kt)(u.ZP,{connector:b,sdk:"Android",mdxType:"TestingAndValidation"}),(0,i.kt)("h2",{id:"further-readings"},"Further readings"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect your API")," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.kt)("br",null),"\nLearn more about identifying who's who and keeping your API secure."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/"},"\ud83e\uddd1\u200d\ud83d\ude80 Manage users")," We know you care about user management and activities, as we also do.",(0,i.kt)("br",null),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/localized-language"},"\ud83c\udf10 Localization")," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.kt)("br",null),"\nYou can change current language phrases or add a new language without friction."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/blog/tags/ciam"},"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series")," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."))}C.isMDXComponent=!0},21522:function(e,t,n){n.d(t,{Z:function(){return r}});n(59496);var o=n(45924),a="tabItem_ojA4",i=n(4637);function r(e){var t=e.children,n=e.hidden,r=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,r),hidden:n,children:t})}},36884:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(59496),a=n(45924),i=n(32173),r=n(5734),l=n(27236),s=n(34857),c=n(55635);function d(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,r.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,o.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function g(e){var t,n,a,i,r=e.defaultValue,l=e.queryString,s=void 0!==l&&l,d=e.groupId,g=u(e),k=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:g})})),h=k[0],f=k[1],y=m({queryString:s,groupId:d}),v=y[0],b=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,o.useCallback)((function(e){t&&i.set(e)}),[t,i])]),C=w[0],N=w[1],T=function(){var e=null!=v?v:C;return p({value:e,tabValues:g})?e:null}();return(0,o.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),N(e)}),[b,N,g]),tabValues:g}}var k=n(62607),h="tabList_by9y",f="tabItem_Dr3M",y=n(4637);function v(e){var t=e.className,n=e.block,o=e.selectedValue,r=e.selectValue,l=e.tabValues,s=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==o&&(c(t),r(a))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var o,a=s.indexOf(e.currentTarget)+1;n=null!=(o=s[a])?o:s[0];break;case"ArrowLeft":var i,r=s.indexOf(e.currentTarget)-1;n=null!=(i=s[r])?i:s[s.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return s.push(e)},onKeyDown:u,onClick:d},i,{className:(0,a.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var r=i.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=g(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",h),children:[(0,y.jsx)(v,Object.assign({},e,t)),(0,y.jsx)(b,Object.assign({},e,t))]})}function C(e){var t=(0,k.Z)();return(0,y.jsx)(w,Object.assign({},e),String(t))}},64553:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(21522),l=n(36884),s=["components"],c={toc:[]};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The minimum supported Android API level of Logto Andorid SDK is level 24.")),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,i.kt)("p",null,"Add Logto Android SDK to your dependencies:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,i.kt)(r.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))))}d.isMDXComponent=!0},57530:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Android, the Redirect URI follows the pattern: ",(0,i.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," is your app package name.")),(0,i.kt)("p",null,"Assuming you treat ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android")," as the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," is your app package name, the Redirect URI should be ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"."),(0,i.kt)("p",null,"Now you can configure the Redirect URI in the admin console (Take ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," as an example)."))}s.isMDXComponent=!0},91560:function(e,t,n){n.d(t,{ZP:function(){return f}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(21522),l=n(36884),s=n(5517),c=["components"],d={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n')))}u.isMDXComponent=!0;var p=["components"],m={toc:[]};function g(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n')))}g.isMDXComponent=!0;var k=["components"],h={toc:[]};function f(e){var t=e.components,n=(0,a.Z)(e,k);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(g,{mdxType:"KotlinSignInCode"})),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(u,{mdxType:"JavaSignInCode"}))),(0,i.kt)("p",null,"After signing in successfully, ",(0,i.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."))}f.isMDXComponent=!0},2890:function(e,t,n){n.d(t,{ZP:function(){return h}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(21522),l=n(36884),s=["components"],c={toc:[]};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}d.isMDXComponent=!0;var u=["components"],p={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}m.isMDXComponent=!0;var g=["components"],k={toc:[]};function h(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Ensure the Application object has been initialized before creating a LogtoClient.")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(m,{mdxType:"KotlinSetupCode"})),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(d,{mdxType:"JavaSetupCode"}))))}h.isMDXComponent=!0},62637:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,i.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,i.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}s.isMDXComponent=!0},5517:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",null,"Before calling ",(0,i.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}s.isMDXComponent=!0},84751:function(e,t,n){t.Z=n.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},42198:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},78509:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},46902:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},36280:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);