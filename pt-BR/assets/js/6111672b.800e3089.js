"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[10951],{23777:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[{value:"Create your OAuth 2.0 app",id:"create-your-oauth-20-app",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Config types",id:"config-types",level:3},{value:"Reference",id:"reference",level:3}];function s(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-your-oauth-20-app",children:"Create your OAuth 2.0 app"}),"\n",(0,i.jsx)(n.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OAuth 2.0 protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OAuth 2.0 authorization."}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(n.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," can be found at your OAuth 2.0 apps details page."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(n.p,{children:["You are expected to find ",(0,i.jsx)(n.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(n.code,{children:"tokenEndpoint"})," and ",(0,i.jsx)(n.code,{children:"userInfoEndpoint"})," in social vendor's documentation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an access token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an access token."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"userInfoEndpoint"}),": This endpoint is used by the client application to obtain additional information about the user, such as their fullname, email address or profile picture. The user info endpoint is typically accessed after the client application has obtained an access token from the token endpoint."]}),"\n",(0,i.jsxs)(n.p,{children:["Logto also provide a ",(0,i.jsx)(n.code,{children:"profileMap"})," field that users can customize the mapping from the social vendors' profiles which are usually not standard. The keys are Logto's standard user profile field names and corresponding values should be social profiles' field names. In current stage, Logto only concern 'id', 'name', 'avatar', 'email' and 'phone' from social profile, only 'id' is required and others are optional fields."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"responseType"})," and ",(0,i.jsx)(n.code,{children:"grantType"})," can ONLY be FIXED values with authorization code grant type, so we make them optional and default values will be automatically filled."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can find ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect#an-id-tokens-payload",children:"Google user profile response"})," and hence its ",(0,i.jsx)(n.code,{children:"profileMap"})," should be like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "sub",\n  "avatar": "picture"\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["We provided an OPTIONAL ",(0,i.jsx)(n.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OAuth 2.0 standard protocol. If your desired social identity provider strictly stick to OAuth 2.0 standard protocol, the you do not need to care about ",(0,i.jsx)(n.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authorizationEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userInfoEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpointResponseType"}),(0,i.jsx)(n.td,{children:"enum"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"grantType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"customConfig"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"profileMap"}),(0,i.jsx)(n.td,{children:"ProfileMap"}),(0,i.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ProfileMap fields"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avatar"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"avatar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"email"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"email"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"phone"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"phone"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6749",children:"The OAuth 2.0 2.0 Authorization Framework"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},49746:(e,n,t)=>{t.d(n,{Ay:()=>y,RM:()=>m});var i=t(25105),o=t(79621);function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on Expo ~50.0.6."}),"\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/react-native/tree/master/packages/rn-sample",children:"SDK repository"}),"."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var a=t(3768),c=t(11043);function l(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Install Logto SDK and peer dependencies via your favorite package manager:"}),"\n",(0,i.jsxs)(c.A,{children:[(0,i.jsx)(a.A,{value:"npm",label:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i @logto/rn\nnpm i expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/rn\nyarn add expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})}),(0,i.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/rn\npnpm add expo-crypto expo-secure-store expo-web-browser @react-native-async-storage/async-storage\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@logto/rn"})," package is the SDK for Logto. The remaining packages are its peer dependencies. They couldn't be listed as direct dependencies because the Expo CLI requires that all dependencies for native modules be installed directly within the root project's ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["If you're installing this in a ",(0,i.jsx)(n.a,{href:"https://docs.expo.dev/bare/overview",children:"bare React Native app"}),", you should also follow these ",(0,i.jsx)(n.a,{href:"https://docs.expo.dev/bare/installing-expo-modules/",children:"additional installation instructions"}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}var h=t(45490),p=t(87208);const u=[{value:"Init Logto provider",id:"init-logto-provider",level:3},{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...p.RM,...h.RM];function g(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"init-logto-provider",children:"Init Logto provider"}),"\n",(0,i.jsxs)(n.p,{children:["Import and use ",(0,i.jsx)(n.code,{children:"LogtoProvider"})," to provide a Logto context:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { LogtoProvider, LogtoConfig } from '@logto/rn';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>',\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsx)(p.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["Switch to the application details page of Logto Console. Add a native redirect URI (for example, ",(0,i.jsx)(n.code,{children:"io.logto://callback"}),'), then click "Save".']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For iOS, the redirect URI scheme does not really matter since the ",(0,i.jsx)(n.code,{children:"ASWebAuthenticationSession"})," class will listen to the redirect URI regardless of if it's registered."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For Android, the redirect URI scheme must be filled in Expo's ",(0,i.jsx)(n.code,{children:"app.json"})," file, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="app.json"',children:'{\n  "expo": {\n    "scheme": "io.logto"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now back to your app, you can use ",(0,i.jsx)(n.code,{children:"useLogto"})," hook to sign in and sign out:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { useLogto } from '@logto/rn';\nimport { Button } from 'react-native';\n\nconst Content = () => {\n  const { signIn, signOut, isAuthenticated } = useLogto();\n\n  return (\n    <div>\n      {isAuthenticated ? (\n        <Button title=\"Sign out\" onPress={async () => signOut()} />\n      ) : (\n        // Replace the redirect URI with your own\n        <Button title=\"Sign in\" onPress={async () => signIn('io.logto://callback')} />\n      )}\n    </div>\n  );\n};\n"})}),"\n",(0,i.jsx)(h.Ay,{})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}var j=t(38727);const m=[{value:"Installation",id:"installation",level:3},...u,...j.RM];function f(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(j.Ay,{sdk:"Expo (React Native)"})]})}function y(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},64201:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(99320).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},56668:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(37969).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(37264).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},62703:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(69350).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(55558).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},61516:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},64582:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},38727:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},32836:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},2927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,connector:()=>m,contentTitle:()=>x,default:()=>v,frontMatter:()=>g,metadata:()=>i,toc:()=>f});var i=t(4269),o=t(25105),r=t(79621),s=t(61516),a=t(56668),c=t(64201),l=t(64582),d=t(62703),h=t(32836),p=t(49746),u=t(23777);const g={slug:"how-to-build-oauth2-sign-in-with-expo-react-native-and-logto",authors:"logto",tags:["authentication","oauth2","expo-react-native","js","social-sign-in","sign-in","login"],title:"How to build OAuth2 sign-in with Expo (React Native) and Logto"},x=void 0,j={authorsImageUrls:[void 0]},m="OAuth2",f=[...s.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...a.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...p.RM,{value:"Add OAuth2 connector",id:"add-oauth2-connector",level:2},...c.RM,{value:"Set up Standard OAuth 2.0 app",id:"set-up-standard-oauth-20-app",level:2},...u.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.RM,{value:"Enable OAuth2 connector in Sign-in Experience",id:"enable-oauth2-connector-in-sign-in-experience",level:2},...d.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...h.RM,{value:"Further readings",id:"further-readings",level:2}];function y(e){const n={a:"a",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n","\n","\n",(0,o.jsx)(s.Ay,{connector:m,sdk:"Expo (React Native)",link:"https://expo.dev/"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.Ay,{type:"Native app",framework:"Expo"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(p.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"add-oauth2-connector",children:"Add OAuth2 connector"}),"\n",(0,o.jsx)(c.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"set-up-standard-oauth-20-app",children:"Set up Standard OAuth 2.0 app"}),"\n",(0,o.jsx)(u.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(l.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"enable-oauth2-connector-in-sign-in-experience",children:"Enable OAuth2 connector in Sign-in Experience"}),"\n",(0,o.jsx)(d.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(h.Ay,{connector:m,sdk:"Expo (React Native)"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/user-management",children:"User management"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/customization/localized-languages",children:"Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://blog.logto.io/ciam-101-intro-authn-sso",children:"Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function v(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},45490:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[{value:"Checkpoint: Test your application",id:"checkpoint-test-your-application",level:3}];function s(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"checkpoint-test-your-application",children:"Checkpoint: Test your application"}),"\n",(0,i.jsx)(n.p,{children:"Now, you can test your application:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Run your application, you will see the sign-in button."}),"\n",(0,i.jsx)(n.li,{children:"Click the sign-in button, the SDK will init the sign-in process and redirect you to the Logto sign-in page."}),"\n",(0,i.jsx)(n.li,{children:"After you signed in, you will be redirected back to your application and see the sign-out button."}),"\n",(0,i.jsx)(n.li,{children:"Click the sign-out button to clear local storage and sign out."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},41018:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const r=[{value:"Regarding redirect-based sign-in",id:"regarding-redirect-based-sign-in",level:3}];function s(e){const n={a:"a",h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.h3,{id:"regarding-redirect-based-sign-in",children:"Regarding redirect-based sign-in"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This authentication process follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,i.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,i.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,i.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},87208:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621),r=t(41018);const s=[...r.RM];function a(e){const n={hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before we dive into the details, here's a quick overview of the end-user experience. The sign-in process can be simplified as follows:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n    A(Your app) --\x3e|1. Invoke sign-in| B(Logto)\n    B --\x3e|2. Finish sign-in| A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Your app invokes the sign-in method."}),"\n",(0,i.jsx)(n.li,{children:"The user is redirected to the Logto sign-in page. For native apps, the system browser is opened."}),"\n",(0,i.jsx)(n.li,{children:"The user signs in and is redirected back to your app (configured as the redirect URI)."}),"\n"]}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3768:(e,n,t)=>{t.d(n,{A:()=>s});t(58101);var i=t(13526);const o={tabItem:"tabItem_y6LR"};var r=t(25105);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,s),hidden:t,children:n})}},11043:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(58101),o=t(13526),r=t(32571),s=t(55234),a=t(87394),c=t(87276),l=t(31637),d=t(16063);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=p(e),[s,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[l,h]=g({queryString:t,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),m=(()=>{const e=l??x;return u({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(27034);const m={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var f=t(25105);function y(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=a[t].value;o!==i&&(l(n),s(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function b(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(b,{...e,children:h(e.children)},String(n))}},99320:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},37264:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},37969:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},55558:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},69350:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},79621:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(58101);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},4269:e=>{e.exports=JSON.parse('{"permalink":"/pt-BR/tutorial/how-to-build-oauth2-sign-in-with-expo-react-native-and-logto","source":"@site/tutorial/build-with-logto/generated-expo-react-native-oauth2.mdx","title":"How to build OAuth2 sign-in with Expo (React Native) and Logto","description":"{/*","date":"2025-01-03T07:02:36.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/pt-BR/tutorial/tags/authentication"},{"inline":true,"label":"oauth2","permalink":"/pt-BR/tutorial/tags/oauth-2"},{"inline":true,"label":"expo-react-native","permalink":"/pt-BR/tutorial/tags/expo-react-native"},{"inline":true,"label":"js","permalink":"/pt-BR/tutorial/tags/js"},{"inline":true,"label":"social-sign-in","permalink":"/pt-BR/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/pt-BR/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/pt-BR/tutorial/tags/login"}],"readingTime":1.29,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-oauth2-sign-in-with-expo-react-native-and-logto","authors":"logto","tags":["authentication","oauth2","expo-react-native","js","social-sign-in","sign-in","login"],"title":"How to build OAuth2 sign-in with Expo (React Native) and Logto"},"unlisted":false,"prevItem":{"title":"How to build Naver sign-in with Expo (React Native) and Logto","permalink":"/pt-BR/tutorial/how-to-build-naver-sign-in-with-expo-react-native-and-logto"},"nextItem":{"title":"How to build OIDC sign-in with Expo (React Native) and Logto","permalink":"/pt-BR/tutorial/how-to-build-oidc-sign-in-with-expo-react-native-and-logto"}}')}}]);