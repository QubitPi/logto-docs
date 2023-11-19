"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[65306],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||a;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58670:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Enable Sign in with Apple for your app",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"Create an identifier",id:"create-an-identifier",level:3},{value:"Enable Sign in with Apple for your identifier",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3}]};function p(e){var t=e.components,p=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app.")),(0,a.kt)("p",null,"You need to enroll ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/programs/"},"Apple Developer Program")," before continuing."),(0,a.kt)("h3",{id:"enable-sign-in-with-apple-for-your-app"},"Enable Sign in with Apple for your app"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Caution")),(0,a.kt)("p",{parentName:"blockquote"},"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID).")),(0,a.kt)("p",null,"You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/resources/identifiers/list/bundleId"},"Certificates, Identifiers & Profiles"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enable Sign in with Apple",src:n(19186).Z,width:"1220",height:"398"})),(0,a.kt)("p",null,'See the "Enable an App ID" section in ',(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple"},"Apple official docs")," for more info."),(0,a.kt)("h3",{id:"create-an-identifier"},"Create an identifier"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources/identifiers/list/serviceId"},"Certificates, Identifiers & Profiles"),', then click the "+" button next to "Identifier".'),(0,a.kt)("li",{parentName:"ol"},'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'),(0,a.kt)("li",{parentName:"ol"},'Fill out "Description" and "Identifier" (E.g., ',(0,a.kt)("inlineCode",{parentName:"li"},"Logto Test")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"io.logto.test"),'), then click "Continue".'),(0,a.kt)("li",{parentName:"ol"},'Double-check the info and click "Register".')),(0,a.kt)("h3",{id:"enable-sign-in-with-apple-for-your-identifier"},"Enable Sign in with Apple for your identifier"),(0,a.kt)("p",null,'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enable Sign in with Apple",src:n(27350).Z,width:"1170",height:"186"})),(0,a.kt)("p",null,"In the opening modal, select the App ID you just enabled Sign in with Apple."),(0,a.kt)("p",null,"Enter the domain of your Logto instance without protocol and port, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"your.logto.domain"),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,a.kt)("inlineCode",{parentName:"p"},"/callback/${connector_id}"),", e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your.logto.domain/callback/apple-universal"),". You can get the randomly generated ",(0,a.kt)("inlineCode",{parentName:"p"},"connector_id")," after creating Apple connector in Admin Console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"domain-and-url",src:n(14411).Z,width:"988",height:"668"})),(0,a.kt)("p",null,'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Caution")),(0,a.kt)("p",{parentName:"blockquote"},"Apple does NOT allow Return URLs with HTTP protocol and ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," domain."),(0,a.kt)("p",{parentName:"blockquote"},"If you want to test locally, you need to edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"mkcert")," can help you for setting up local HTTPS.")),(0,a.kt)("h3",{id:"compose-the-connector-json"},"Compose the connector JSON"),(0,a.kt)("p",null,"You need to use the identifier that fills in the ",(0,a.kt)("a",{parentName:"p",href:"#create-an-identifier"},"Create an identifier")," section to compose the JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "io.logto.test"\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"This connector doesn't support customizing ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," (e.g., name, email) yet since Apple requires ",(0,a.kt)("inlineCode",{parentName:"p"},"form_post")," response mode when ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," is not empty, which is incompatible with the current connector design."),(0,a.kt)("p",{parentName:"blockquote"},"We'll figure out this later.")))}p.isMDXComponent=!0},94232:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(66065),l=n(90587),p=n(81233),u=n(45203),c=["components"],s={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Sign in",id:"sign-in",level:3}]};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,a.kt)(r.ZP,{mdxType:"AddSdk"}),(0,a.kt)("h3",{id:"init-logtoclient"},"Init LogtoClient"),(0,a.kt)(p.ZP,{mdxType:"InitClient"}),(0,a.kt)("h3",{id:"sign-in"},"Sign in"),(0,a.kt)(l.ZP,{mdxType:"ImplementSignIn"}),(0,a.kt)(u.ZP,{sdk:"Next",mdxType:"TestYourIntegration"}))}d.isMDXComponent=!0},58556:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,p=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connector tab",src:n(17167).Z,width:"3352",height:"1226"})),(0,a.kt)("p",null,'In the openning modal, select "',p.connector,'" and click "Next".'),(0,a.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,a.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}p.isMDXComponent=!0},94742:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],p={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function u(e){var t=e.components,u=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create application",src:n(78509).Z,width:"2368",height:"226"})),(0,a.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,a.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,a.kt)("p",null,'In the opening modal, select the "',u.type,'" option as the application type.'),(0,a.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,a.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,a.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,a.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}u.isMDXComponent=!0},51282:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,p=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign-in Experience tab",src:n(36280).Z,width:"3160",height:"1822"})),(0,a.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',p.connector," ","sign-in, which may increase your conversion rate."),(0,a.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',p.connector,'". Then you should be able to see a button with text "Continue with ',p.connector,'" in the preview section.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Save changes",src:n(46902).Z,width:"2474",height:"188"})),(0,a.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}p.isMDXComponent=!0},39092:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"For our new friends",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,a.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,a.kt)("span",null," and "),(0,a.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"Basic knowledge of"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"A usable ",n.connector," account."))))}p.isMDXComponent=!0},12579:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}p.isMDXComponent=!0},45203:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Test your integration",type:"info"},(0,a.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}p.isMDXComponent=!0},2447:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}p.isMDXComponent=!0},64310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},connector:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=(n(39092),n(94742),n(58556),n(12579),n(51282),n(2447),n(94232),n(58670),["components"]),l={slug:"how-to-build-apple-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","apple","next","js","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Next and Logto"},p=void 0,u={permalink:"/logto-docs/tutorial/how-to-build-apple-sign-in-with-next-and-logto",source:"@site/tutorial/build-with-logto/generated-next-apple.mdx",title:"How to build Apple sign-in with Next and Logto",description:"\x3c!--",date:"2023-11-19T14:51:06.416Z",formattedDate:"November 19, 2023",tags:[{label:"authentication",permalink:"/logto-docs/tutorial/tags/authentication"},{label:"apple",permalink:"/logto-docs/tutorial/tags/apple"},{label:"next",permalink:"/logto-docs/tutorial/tags/next"},{label:"js",permalink:"/logto-docs/tutorial/tags/js"},{label:"social-sign-in",permalink:"/logto-docs/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/logto-docs/tutorial/tags/sign-in"},{label:"login",permalink:"/logto-docs/tutorial/tags/login"}],readingTime:1.275,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-apple-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","apple","next","js","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Next and Logto"},prevItem:{title:"How to build OAuth2 sign-in with Flutter and Logto",permalink:"/logto-docs/tutorial/how-to-build-oauth2-sign-in-with-flutter-and-logto"},nextItem:{title:"How to build Azure AD sign-in with Next and Logto",permalink:"/logto-docs/tutorial/how-to-build-azure-ad-sign-in-with-next-and-logto"}},c={authorsImageUrls:[void 0]},s=[],d="Apple",g={toc:s,connector:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},21522:function(e,t,n){n.d(t,{Z:function(){return r}});n(59496);var o=n(45924),i="tabItem_ojA4",a=n(4637);function r(e){var t=e.children,n=e.hidden,r=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n,children:t})}},36884:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(59496),i=n(45924),a=n(32173),r=n(5734),l=n(27236),p=n(34857),u=n(55635);function c(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function s(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,a=(0,r.k6)(),p=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:i});return[(0,l._X)(p),(0,o.useCallback)((function(e){if(p){var t=new URLSearchParams(a.location.search);t.set(p,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[p,a])]}function m(e){var t,n,i,a,r=e.defaultValue,l=e.queryString,p=void 0!==l&&l,c=e.groupId,m=s(e),h=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:m})})),f=h[0],k=h[1],A=g({queryString:p,groupId:c}),b=A[0],v=A[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),i=n[0],a=n[1],[i,(0,o.useCallback)((function(e){t&&a.set(e)}),[t,a])]),y=w[0],N=w[1],I=function(){var e=null!=b?b:y;return d({value:e,tabValues:m})?e:null}();return(0,o.useLayoutEffect)((function(){I&&k(I)}),[I]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);k(e),v(e),N(e)}),[v,N,m]),tabValues:m}}var h=n(62607),f="tabList_by9y",k="tabItem_Dr3M",A=n(4637);function b(e){var t=e.className,n=e.block,o=e.selectedValue,r=e.selectValue,l=e.tabValues,p=[],u=(0,a.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=p.indexOf(t),i=l[n].value;i!==o&&(u(t),r(i))},s=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var o,i=p.indexOf(e.currentTarget)+1;n=null!=(o=p[i])?o:p[0];break;case"ArrowLeft":var a,r=p.indexOf(e.currentTarget)-1;n=null!=(a=p[r])?a:p[p.length-1]}null==(t=n)||t.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,A.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return p.push(e)},onKeyDown:s,onClick:c},a,{className:(0,i.Z)("tabs__item",k,null==a?void 0:a.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,i=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var r=a.find((function(e){return e.props.value===i}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function w(e){var t=m(e);return(0,A.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,A.jsx)(b,Object.assign({},e,t)),(0,A.jsx)(v,Object.assign({},e,t))]})}function y(e){var t=(0,h.Z)();return(0,A.jsx)(w,Object.assign({},e),String(t))}},62637:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,a.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}p.isMDXComponent=!0},71667:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",l=["components"],p={toc:[]};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",null,'You can find and copy "App Secret" from application details page in Admin Console:'),(0,a.kt)("img",{alt:"App Secret",src:r,width:"586px"})))}u.isMDXComponent=!0},5149:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In the following code snippets, we assume your app is running on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),".")))}p.isMDXComponent=!0},75648:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The sign-in flow can be simplified as:"),(0,a.kt)("img",{alt:"Web sign-in flow",src:"data:image/png;base64,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",width:"700pt"}))}p.isMDXComponent=!0},66065:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(21522),l=n(36884),p=["components"],u={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/next\n"))),(0,a.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/next\n"))),(0,a.kt)(r.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/next\n")))))}c.isMDXComponent=!0},90587:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(84792),l=n(62637),p=n(75648),u=["components"],c={toc:[{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:3},{value:"Prepare API routes",id:"prepare-api-routes",level:3},{value:"Implement sign-in button",id:"implement-sign-in-button",level:3}]};function s(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p.ZP,{mdxType:"SignInFlowSummary"}),(0,a.kt)("h3",{id:"configure-sign-in-redirect-uri"},"Configure sign-in redirect URI"),(0,a.kt)(l.ZP,{figureSrc:r.Z,redirectUri:"http://localhost:3000/api/logto/sign-in-callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("h3",{id:"prepare-api-routes"},"Prepare API routes"),(0,a.kt)("p",null,"Prepare ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/introduction"},"API routes")," to connect with Logto."),(0,a.kt)("p",null,"Go back to your IDE/editor, use the following code to implement the API routes first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n")),(0,a.kt)("p",null,"This will create 4 routes automatically:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in"),": Sign in with Logto."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in-callback"),": Handle sign-in callback."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-out"),": Sign out with Logto."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/user"),": Check if user is authenticated with Logto. If yes, return user info.")),(0,a.kt)("h3",{id:"implement-sign-in-button"},"Implement sign-in button"),(0,a.kt)("p",null,"We're almost there! In the last step, we will create a sign-in button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRouter } from 'next/router';\n\n<button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>;\n")),(0,a.kt)("p",null,"Now you will be navigated to Logto sign-in page when you click the button."))}s.isMDXComponent=!0},81233:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(71667),l=n(5149),p=["components"],u={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.ZP,{mdxType:"AssumingUrl"}),(0,a.kt)(r.ZP,{mdxType:"GetAppSecret"}),(0,a.kt)("p",null,"Import and initialize LogtoClient:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n")))}c.isMDXComponent=!0},84792:function(e,t,n){t.Z=n.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},17167:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},78509:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},14411:function(e,t,n){t.Z=n.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},19186:function(e,t,n){t.Z=n.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},27350:function(e,t,n){t.Z=n.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},46902:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},36280:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);