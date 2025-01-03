"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[78606],{23777:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[{value:"Create your OAuth 2.0 app",id:"create-your-oauth-20-app",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Config types",id:"config-types",level:3},{value:"Reference",id:"reference",level:3}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-your-oauth-20-app",children:"Create your OAuth 2.0 app"}),"\n",(0,i.jsx)(n.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OAuth 2.0 protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OAuth 2.0 authorization."}),"\n",(0,i.jsx)(n.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(n.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," can be found at your OAuth 2.0 apps details page."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(n.p,{children:["You are expected to find ",(0,i.jsx)(n.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(n.code,{children:"tokenEndpoint"})," and ",(0,i.jsx)(n.code,{children:"userInfoEndpoint"})," in social vendor's documentation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an access token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an access token."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"userInfoEndpoint"}),": This endpoint is used by the client application to obtain additional information about the user, such as their fullname, email address or profile picture. The user info endpoint is typically accessed after the client application has obtained an access token from the token endpoint."]}),"\n",(0,i.jsxs)(n.p,{children:["Logto also provide a ",(0,i.jsx)(n.code,{children:"profileMap"})," field that users can customize the mapping from the social vendors' profiles which are usually not standard. The keys are Logto's standard user profile field names and corresponding values should be social profiles' field names. In current stage, Logto only concern 'id', 'name', 'avatar', 'email' and 'phone' from social profile, only 'id' is required and others are optional fields."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"responseType"})," and ",(0,i.jsx)(n.code,{children:"grantType"})," can ONLY be FIXED values with authorization code grant type, so we make them optional and default values will be automatically filled."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, you can find ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect#an-id-tokens-payload",children:"Google user profile response"})," and hence its ",(0,i.jsx)(n.code,{children:"profileMap"})," should be like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "sub",\n  "avatar": "picture"\n}\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["We provided an OPTIONAL ",(0,i.jsx)(n.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OAuth 2.0 standard protocol. If your desired social identity provider strictly stick to OAuth 2.0 standard protocol, the you do not need to care about ",(0,i.jsx)(n.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"authorizationEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userInfoEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpointResponseType"}),(0,i.jsx)(n.td,{children:"enum"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"responseType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"grantType"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tokenEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"customConfig"}),(0,i.jsx)(n.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"profileMap"}),(0,i.jsx)(n.td,{children:"ProfileMap"}),(0,i.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ProfileMap fields"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avatar"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"avatar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"email"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"email"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"phone"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"phone"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc6749",children:"The OAuth 2.0 2.0 Authorization Framework"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},10551:(e,n,t)=>{t.d(n,{Ay:()=>x,RM:()=>p});var i=t(25105),o=t(79621),s=t(93377),r=t(6530),a=t(99755),c=t(76779),l=t(84780),d=t(88438),h=t(88656),u=t(38727);const p=[...r.RM,{value:"Installation",id:"installation",level:3},...h.RM,{value:"Create a session storage",id:"create-a-session-storage",level:3},...s.RM,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...d.RM,{value:"Implement sign-in route",id:"implement-sign-in-route",level:3},...c.RM,{value:"Implement the callback route",id:"implement-the-callback-route",level:3},...a.RM,{value:"Implement sign-out route",id:"implement-sign-out-route",level:3},...l.RM,...u.RM];function g(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(h.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"create-a-session-storage",children:"Create a session storage"}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-route",children:"Implement sign-in route"}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-the-callback-route",children:"Implement the callback route"}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out-route",children:"Implement sign-out route"}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(u.Ay,{sdk:"Go"})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},64201:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(99320).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},56668:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(25105),o=t(79621);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(37969).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(37264).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},62703:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(69350).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(55558).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},61516:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},64582:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},38727:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},32836:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},88307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,connector:()=>j,contentTitle:()=>x,default:()=>b,frontMatter:()=>g,metadata:()=>i,toc:()=>f});var i=t(77735),o=t(25105),s=t(79621),r=t(61516),a=t(56668),c=t(64201),l=t(64582),d=t(62703),h=t(32836),u=t(10551),p=t(23777);const g={slug:"how-to-build-oauth2-sign-in-with-go-and-logto",authors:"logto",tags:["authentication","oauth2","go","go","social-sign-in","sign-in","login"],title:"How to build OAuth2 sign-in with Go and Logto"},x=void 0,m={authorsImageUrls:[void 0]},j="OAuth2",f=[...r.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...a.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...u.RM,{value:"Add OAuth2 connector",id:"add-oauth2-connector",level:2},...c.RM,{value:"Set up Standard OAuth 2.0 app",id:"set-up-standard-oauth-20-app",level:2},...p.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.RM,{value:"Enable OAuth2 connector in Sign-in Experience",id:"enable-oauth2-connector-in-sign-in-experience",level:2},...d.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...h.RM,{value:"Further readings",id:"further-readings",level:2}];function y(e){const n={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n","\n","\n",(0,o.jsx)(r.Ay,{connector:j,sdk:"Go",link:"https://go.dev/"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.Ay,{type:"Traditional web",framework:"undefined"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(u.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"add-oauth2-connector",children:"Add OAuth2 connector"}),"\n",(0,o.jsx)(c.Ay,{connector:j}),"\n",(0,o.jsx)(n.h2,{id:"set-up-standard-oauth-20-app",children:"Set up Standard OAuth 2.0 app"}),"\n",(0,o.jsx)(p.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(l.Ay,{connector:j}),"\n",(0,o.jsx)(n.h2,{id:"enable-oauth2-connector-in-sign-in-experience",children:"Enable OAuth2 connector in Sign-in Experience"}),"\n",(0,o.jsx)(d.Ay,{connector:j}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(h.Ay,{connector:j,sdk:"Go"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/authorization/api-resources/protect-your-api",children:"Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/user-management",children:"User management"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/customization/localized-languages",children:"Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://blog.logto.io/ciam-101-intro-authn-sso",children:"Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}},98272:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(25105),o=t(79621);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",r=[];function a(e){const n={admonition:"admonition",...(0,o.R)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,i.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},93377:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In traditional web applications, the user authentication information will be stored in the user session."}),"\n",(0,i.jsxs)(n.p,{children:["Logto SDK provides a ",(0,i.jsx)(n.code,{children:"Storage"})," interface, you can implement a ",(0,i.jsx)(n.code,{children:"Storage"})," adapter based on your web framework so that the Logto SDK can store user authentication information in the session."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"We do NOT recommend using cookie-based sessions, as user authentication information stored by Logto may exceed the cookie size limit.\nIn this example, we use memory-based sessions. You can use Redis, MongoDB, and other technologies in production to store sessions as needed."})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Storage"})," type in the Logto SDK is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="github.com/logto-io/client/storage.go"',children:"package client\n\ntype Storage interface {\n\tGetItem(key string) string\n\tSetItem(key, value string)\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.a,{href:"https://github.com/gin-contrib/sessions",children:"github.com/gin-contrib/sessions"})," middleware as an example to demonstrate this process."]}),"\n",(0,i.jsx)(n.p,{children:"Apply the middleware to the application, so that we can get the user session by the user request context in the route handler:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n\t"github.com/gin-contrib/sessions"\n\t"github.com/gin-contrib/sessions/memstore"\n\t"github.com/gin-gonic/gin"\n\t"github.com/logto-io/go/client"\n)\n\nfunc main() {\n\trouter := gin.Default()\n\n\t// We use memory-based session in this example\n\tstore := memstore.NewStore([]byte("your session secret"))\n\trouter.Use(sessions.Sessions("logto-session", store))\n\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// Get user session\n\t\tsession := sessions.Default(ctx)\n\t\t// ...\n\t\tctx.String(200, "Hello Logto!")\n\t})\n\trouter.Run(":3000")\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"session_storage.go"})," file, define a ",(0,i.jsx)(n.code,{children:"SessionStorage"})," and implement the Logto SDK's ",(0,i.jsx)(n.code,{children:"Storage"})," interfaces:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="session_storage.go"',children:'package main\n\nimport (\n\t"github.com/gin-contrib/sessions"\n)\n\ntype SessionStorage struct {\n\tsession sessions.Session\n}\n\nfunc (storage *SessionStorage) GetItem(key string) string {\n\tvalue := storage.session.Get(key)\n\tif value == nil {\n\t\treturn ""\n\t}\n\treturn value.(string)\n}\n\nfunc (storage *SessionStorage) SetItem(key, value string) {\n\tstorage.session.Set(key, value)\n\tstorage.session.Save()\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now, in the route handler, you can create a session storage for Logto:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"session := sessions.Default(ctx)\nsessionStorage := &SessionStorage{session: session}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},6530:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following demonstration is built upon the ",(0,i.jsx)(n.a,{href:"https://gin-gonic.com",children:"Gin Web Framework"}),". You may also integrate Logto into other frameworks by taking the same steps."]}),"\n",(0,i.jsxs)(n.li,{children:["The Go sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/go/tree/master/gin-sample",children:"Go SDK repo"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},99755:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"When the user signs in successfully on the Logto sign-in page, Logto will redirect the user to the Redirect URI."}),"\n",(0,i.jsxs)(n.p,{children:["Since the redirect URI is ",(0,i.jsx)(n.code,{children:"http://localhost:3000/callback"}),", we add the ",(0,i.jsx)(n.code,{children:"/callback"})," route to handle the callback after signing in."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a route for handling sign-in callback requests\n\trouter.GET("/callback", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-in callback request is handled by Logto\n\t\terr := logtoClient.HandleSignInCallback(ctx.Request)\n\t\tif err != nil {\n\t\t\tctx.String(http.StatusInternalServerError, err.Error())\n\t\t\treturn\n\t\t}\n\n\t\t// Jump to the page specified by the developer.\n\t\t// This example takes the user back to the home page.\n\t\tctx.Redirect(http.StatusTemporaryRedirect, "/")\n\t})\n\n\t// ...\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},76779:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["After the redirect URI is configured, we add a ",(0,i.jsx)(n.code,{children:"sign-in"})," route to handle the sign-in request and also add an sign-in link on the home page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a link to perform a sign-in request on the home page\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// ...\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>" +\n\t\t\t// Add link\n\t\t\t`<div><a href="/sign-in">Sign In</a></div>`\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// Add a route for handling sign-in requests\n\trouter.GET("/sign-in", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-in request is handled by Logto.\n\t\t// The user will be redirected to the Redirect URI on signed in.\n\t\tsignInUri, err := logtoClient.SignIn("http://localhost:3000/callback")\n\t\tif err != nil {\n\t\t\tctx.String(http.StatusInternalServerError, err.Error())\n\t\t\treturn\n\t\t}\n\n\t\t// Redirect the user to the Logto sign-in page.\n\t\tctx.Redirect(http.StatusTemporaryRedirect, signInUri)\n\t})\n\n\t// ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now, when your user visit ",(0,i.jsx)(n.code,{children:"http://localhost:3000/sign-in"}),", the user will be redirected to the Logto sign-in page."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},84780:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Similar to the sign-in flow, when the user signs out, Logto will redirect the user to the post sign-out redirect URI."}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's add the ",(0,i.jsx)(n.code,{children:"sign-out"})," route to handle the sign-out request and also add a sign-out link on the home page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a link to perform a sign-out request on the home page\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// ...\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>" +\n\t\t\t`<div><a href="/sign-in">Sign In</a></div>` +\n\t\t\t// Add link\n\t\t\t`<div><a href="/sign-out">Sign Out</a></div>`\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// Add a route for handling signing out requests\n\trouter.GET("/sign-out", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-out request is handled by Logto.\n\t\t// The user will be redirected to the Post Sign-out Redirect URI on signed out.\n\t\tsignOutUri, signOutErr := logtoClient.SignOut("http://localhost:3000")\n\n\t\tif signOutErr != nil {\n\t\t\tctx.String(http.StatusOK, signOutErr.Error())\n\t\t\treturn\n\t\t}\n\n\t\tctx.Redirect(http.StatusTemporaryRedirect, signOutUri)\n\t})\n\n\t// ...\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"After the user makes a signing-out request, Logto will clear all user authentication information in the session."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},88438:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(25105),o=t(79621),s=t(98272);const r=[...s.RM];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"First, create a Logto config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\tlogtoConfig := &client.LogtoConfig{\n\t\tEndpoint:  "<your-logto-endpoint>", // E.g. http://localhost:3001\n\t\tAppId:     "<your-application-id>",\n\t\tAppSecret: "<your-application-secret>",\n\t}\n\t// ...\n}\n'})}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["Then, you can create a ",(0,i.jsx)(n.code,{children:"LogtoClient"})," for each user request with the Logto config above:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// Create LogtoClient\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// Use Logto to control the content of the home page\n\t\tauthState := "You are not logged in to this website. :("\n\n\t\tif logtoClient.IsAuthenticated() {\n\t\t\tauthState = "You are logged in to this website! :)"\n\t\t}\n\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>"\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// ...\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},88656:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Execute in the project root directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go get github.com/logto-io/go\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"github.com/logto-io/go/client"})," package to your application code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'// main.go\npackage main\n\nimport (\n\t"github.com/gin-gonic/gin"\n\t// Add dependency\n\t"github.com/logto-io/go/client"\n)\n\nfunc main() {\n\trouter := gin.Default()\n\trouter.GET("/", func(c *gin.Context) {\n\t\tc.String(200, "Hello Logto!")\n\t})\n\trouter.Run(":3000")\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},99320:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},37264:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},37969:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},55558:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},69350:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},79621:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(58101);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},77735:e=>{e.exports=JSON.parse('{"permalink":"/tutorial/how-to-build-oauth2-sign-in-with-go-and-logto","source":"@site/tutorial/build-with-logto/generated-go-oauth2.mdx","title":"How to build OAuth2 sign-in with Go and Logto","description":"{/*","date":"2025-01-03T07:10:56.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/tutorial/tags/authentication"},{"inline":true,"label":"oauth2","permalink":"/tutorial/tags/oauth-2"},{"inline":true,"label":"go","permalink":"/tutorial/tags/go"},{"inline":true,"label":"go","permalink":"/tutorial/tags/go"},{"inline":true,"label":"social-sign-in","permalink":"/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/tutorial/tags/login"}],"readingTime":1.27,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-oauth2-sign-in-with-go-and-logto","authors":"logto","tags":["authentication","oauth2","go","go","social-sign-in","sign-in","login"],"title":"How to build OAuth2 sign-in with Go and Logto"},"unlisted":false,"prevItem":{"title":"How to build Naver sign-in with Go and Logto","permalink":"/tutorial/how-to-build-naver-sign-in-with-go-and-logto"},"nextItem":{"title":"How to build OIDC sign-in with Go and Logto","permalink":"/tutorial/how-to-build-oidc-sign-in-with-go-and-logto"}}')}}]);