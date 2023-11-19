"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[93430],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36677:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[{value:"Configure a mail service in the AWS service console",id:"configure-a-mail-service-in-the-aws-service-console",level:3},{value:"Register AWS account",id:"register-aws-account",level:4},{value:"Create a identity",id:"create-a-identity",level:4},{value:"Configuration of the connector",id:"configuration-of-the-connector",level:4},{value:"Test the Amazon SES connector",id:"test-the-amazon-ses-connector",level:4},{value:"Configure types",id:"configure-types",level:4}]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"configure-a-mail-service-in-the-aws-service-console"},"Configure a mail service in the AWS service console"),(0,r.kt)("p",null,"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending."),(0,r.kt)("p",null,"Logto core calls the Amazon Simple Email Service APIs via this connector, with the help of which Logto end-users can register and sign in to their Logto account via email verification code."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 ",(0,r.kt)("strong",{parentName:"p"},"Tip")),(0,r.kt)("p",{parentName:"blockquote"},"You can skip some sections if you have already finished.")),(0,r.kt)("h4",{id:"register-aws-account"},"Register AWS account"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"AWS")," and register an account."),(0,r.kt)("h4",{id:"create-a-identity"},"Create a identity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Amazon Simple Email Service")," Console"),(0,r.kt)("li",{parentName:"ul"},"Create an identity, choose one of the following options",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a domain"),(0,r.kt)("li",{parentName:"ul"},"Create an email address")))),(0,r.kt)("h4",{id:"configuration-of-the-connector"},"Configuration of the connector"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click your username in the upper right corner of the Amazon console to enter ",(0,r.kt)("inlineCode",{parentName:"li"},"Security Credentials"),". If you don't have one, create an ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessKey")," and save it carefully."),(0,r.kt)("li",{parentName:"ol"},"Complete the settings of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Amazon Simple Email Service")," connector:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessKey ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessKey Secret")," obtained in step 1 to fill in ",(0,r.kt)("inlineCode",{parentName:"li"},"accessKeyId")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"accessKeySecret")," respectively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region"),": Fill in the ",(0,r.kt)("inlineCode",{parentName:"li"},"region")," field with the region of the identity you use to send mail."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"emailAddress"),": The email address you use to send mail, in the format of ",(0,r.kt)("inlineCode",{parentName:"li"},"Logto<noreply@logto.io>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<noreply@logto.io>"))))),(0,r.kt)("p",null,"the following parameters are optional; parameters description can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html"},"AWS SES API documentation"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feedbackForwardingEmailAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feedbackForwardingEmailAddressIdentityArn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configurationSetName"))),(0,r.kt)("h4",{id:"test-the-amazon-ses-connector"},"Test the Amazon SES connector"),(0,r.kt)("p",null,'You can type in an email address and click on "Send" to see whether the settings work before "Save and Done".'),(0,r.kt)("p",null,"That's it. Don't forget to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors#enable-sms-or-email-passwordless-sign-in"},"Enable connector in sign-in experience"),"."),(0,r.kt)("h4",{id:"configure-types"},"Configure types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessKeyId"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessKeySecret"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"region"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emailAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emailAddressIdentityArn"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedbackForwardingEmailAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feedbackForwardingEmailAddressIdentityArn"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configurationSetName"),(0,r.kt)("td",{parentName:"tr",align:null},"string (OPTIONAL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"templates"),(0,r.kt)("td",{parentName:"tr",align:null},"Template[]")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Template Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Enum values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subject"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usageType"),(0,r.kt)("td",{parentName:"tr",align:null},"enum string"),(0,r.kt)("td",{parentName:"tr",align:null},"'Register' ","|"," 'SignIn' ","|"," 'ForgotPassword' ","|"," 'Generic'")))))}s.isMDXComponent=!0},18937:function(e,t,n){n.d(t,{ZP:function(){return k}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(64553),l=n(57530),s=n(91560),c=n(2890),u=n(84751),p=n(62637),d=n(45203),m=["components"],g={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3}]};function k(e){var t=e.components,n=(0,a.Z)(e,m);return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,r.kt)(i.ZP,{mdxType:"AddSdk"}),(0,r.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,r.kt)(c.ZP,{mdxType:"InitClient"}),(0,r.kt)("h2",{id:"sign-in"},"Sign in"),(0,r.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,r.kt)(l.ZP,{mdxType:"ConfigAndroidRedirectUri"}),(0,r.kt)(p.ZP,{figureSrc:u.Z,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,r.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,r.kt)(s.ZP,{mdxType:"ImplementSignIn"}),(0,r.kt)(d.ZP,{sdk:"Android",mdxType:"TestYourIntegration"}))}k.isMDXComponent=!0},49594:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To add or change ",s.connectorType,' connector, go to the "Connector" tab in the Admin Console, then click on "Email and SMS Connectors". From there, click "Set up" or go to detail page and click "Change ',s.connectorType,' connector".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connector tab",src:n(42198).Z,width:"4164",height:"1290"})),(0,r.kt)("p",null,'In the openning modal, select "',s.connector,'" and click "Next".'),(0,r.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,r.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}s.isMDXComponent=!0},94742:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],s={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(e){var t=e.components,c=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create application",src:n(78509).Z,width:"2368",height:"226"})),(0,r.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,r.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,r.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,r.kt)("img",{src:i,alt:"Create Application modal",width:"700"}),(0,r.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,r.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,r.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},28440:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sign-in Experience tab",src:n(36280).Z,width:"3160",height:"1822"})),(0,r.kt)("p",null,'Select "',s.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up identifier" to provide sign-up for ',s.connectorType," passwordless sign-in, which may increase your conversion rate."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Save changes",src:n(46902).Z,width:"2474",height:"188"})),(0,r.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}s.isMDXComponent=!0},39092:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"For our new friends",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,r.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,r.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,r.kt)("span",null," and "),(0,r.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",null,"Basic knowledge of"," ",(0,r.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",null,"A usable ",n.connector," account."))))}s.isMDXComponent=!0},12579:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}s.isMDXComponent=!0},45203:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Test your integration",type:"info"},(0,r.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}s.isMDXComponent=!0},2447:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}s.isMDXComponent=!0},12154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},connector:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=(n(39092),n(94742),n(49594),n(12579),n(28440),n(2447),n(18937),n(36677),["components"]),l={slug:"how-to-build-aws-ses-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","aws-ses","android","kotlin/java","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with Android and Logto"},s=void 0,c={permalink:"/logto-docs/tutorial/how-to-build-aws-ses-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-aws-ses.mdx",title:"How to build AWS SES Email passwordless sign-in with Android and Logto",description:"\x3c!--",date:"2023-11-19T14:38:51.079Z",formattedDate:"November 19, 2023",tags:[{label:"authentication",permalink:"/logto-docs/tutorial/tags/authentication"},{label:"aws-ses",permalink:"/logto-docs/tutorial/tags/aws-ses"},{label:"android",permalink:"/logto-docs/tutorial/tags/android"},{label:"kotlin/java",permalink:"/logto-docs/tutorial/tags/kotlin-java"},{label:"passwordless-sign-in",permalink:"/logto-docs/tutorial/tags/passwordless-sign-in"},{label:"sign-in",permalink:"/logto-docs/tutorial/tags/sign-in"},{label:"login",permalink:"/logto-docs/tutorial/tags/login"}],readingTime:1.315,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-aws-ses-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","aws-ses","android","kotlin/java","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with Android and Logto"},nextItem:{title:"How to build SendGrid Email passwordless sign-in with Android and Logto",permalink:"/logto-docs/tutorial/how-to-build-sendgrid-sign-in-with-android-and-logto"}},u={authorsImageUrls:[void 0]},p=[],d="AWS SES",m={toc:p,connector:d};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},21522:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var o=n(45924),a="tabItem_ojA4",r=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n,children:t})}},36884:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(59496),a=n(45924),r=n(32173),i=n(5734),l=n(27236),s=n(34857),c=n(55635);function u(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,o.useCallback)((function(e){if(s){var t=new URLSearchParams(r.location.search);t.set(s,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[s,r])]}function g(e){var t,n,a,r,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,g=p(e),k=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:g})})),f=k[0],h=k[1],y=m({queryString:s,groupId:u}),v=y[0],b=y[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),N=w[0],C=w[1],T=function(){var e=null!=v?v:N;return d({value:e,tabValues:g})?e:null}();return(0,o.useLayoutEffect)((function(){T&&h(T)}),[T]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);h(e),b(e),C(e)}),[b,C,g]),tabValues:g}}var k=n(62607),f="tabList_by9y",h="tabItem_Dr3M",y=n(4637);function v(e){var t=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,l=e.tabValues,s=[],c=(0,r.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==o&&(c(t),i(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var o,a=s.indexOf(e.currentTarget)+1;n=null!=(o=s[a])?o:s[0];break;case"ArrowLeft":var r,i=s.indexOf(e.currentTarget)-1;n=null!=(r=s[i])?r:s[s.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:u},r,{className:(0,a.Z)("tabs__item",h,null==r?void 0:r.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=g(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,y.jsx)(v,Object.assign({},e,t)),(0,y.jsx)(b,Object.assign({},e,t))]})}function N(e){var t=(0,k.Z)();return(0,y.jsx)(w,Object.assign({},e),String(t))}},64553:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(21522),l=n(36884),s=["components"],c={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The minimum supported Android API level of Logto Andorid SDK is level 24.")),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,r.kt)("p",null,"Add Logto Android SDK to your dependencies:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,r.kt)(i.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))))}u.isMDXComponent=!0},57530:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Android, the Redirect URI follows the pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format.",(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," is your app package name.")),(0,r.kt)("p",null,"Assuming you treat ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android")," as the custom ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," is your app package name, the Redirect URI should be ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"."),(0,r.kt)("p",null,"Now you can configure the Redirect URI in the admin console (Take ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," as an example)."))}s.isMDXComponent=!0},91560:function(e,t,n){n.d(t,{ZP:function(){return h}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(21522),l=n(36884),s=n(5517),c=["components"],u={toc:[]};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n')))}p.isMDXComponent=!0;var d=["components"],m={toc:[]};function g(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n')))}g.isMDXComponent=!0;var k=["components"],f={toc:[]};function h(e){var t=e.components,n=(0,a.Z)(e,k);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(g,{mdxType:"KotlinSignInCode"})),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(p,{mdxType:"JavaSignInCode"}))),(0,r.kt)("p",null,"After signing in successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))}h.isMDXComponent=!0},2890:function(e,t,n){n.d(t,{ZP:function(){return f}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(21522),l=n(36884),s=["components"],c={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}u.isMDXComponent=!0;var p=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}m.isMDXComponent=!0;var g=["components"],k={toc:[]};function f(e){var t=e.components,n=(0,a.Z)(e,g);return(0,r.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ensure the Application object has been initialized before creating a LogtoClient.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(m,{mdxType:"KotlinSetupCode"})),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(u,{mdxType:"JavaSetupCode"}))))}f.isMDXComponent=!0},62637:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,r.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,r.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}s.isMDXComponent=!0},5517:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",null,"Before calling ",(0,r.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}s.isMDXComponent=!0},84751:function(e,t,n){t.Z=n.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},42198:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},78509:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},46902:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},36280:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);