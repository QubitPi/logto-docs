"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9792],{72777:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[{value:"Register Twilio account",id:"register-twilio-account",level:3},{value:"Set up senders&#39; phone numbers",id:"set-up-senders-phone-numbers",level:3},{value:"Get account credentials",id:"get-account-credentials",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Test Twilio SMS connector",id:"test-twilio-sms-connector",level:4},{value:"Config types",id:"config-types",level:4},{value:"Reference",id:"reference",level:4}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"register-twilio-account",children:"Register Twilio account"}),"\n",(0,o.jsxs)(n.p,{children:["Create a new account on ",(0,o.jsx)(n.a,{href:"https://www.twilio.com",children:"Twilio"}),". (Jump to the next step if you already have one.)"]}),"\n",(0,o.jsx)(n.h3,{id:"set-up-senders-phone-numbers",children:"Set up senders' phone numbers"}),"\n",(0,o.jsxs)(n.p,{children:["Go to the ",(0,o.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio console page"})," and sign in with your Twilio account."]}),"\n",(0,o.jsx)(n.p,{children:'Purchase a phone number under "Phone Numbers" -> "Manage" -> "Buy a number".'}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,o.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,o.jsx)(n.p,{children:"Sometimes you may encounter the situation that SMS service is not supported in specific countries or areas. Pick a number from other regions to bypass."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Once we have a valid number claimed, navigate to the "Messaging" -> "Services". Create a new Message Service by clicking on the button.'}),"\n",(0,o.jsxs)(n.p,{children:["Give a friendly service name and choose ",(0,o.jsx)(n.em,{children:"Notify my users"})," as our service purpose.\nFollowing the next step, choose ",(0,o.jsx)(n.code,{children:"Phone Number"})," as ",(0,o.jsx)(n.em,{children:"Sender Type"}),", and add the phone number we just claimed to this service as a sender."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,o.jsx)(n.strong,{children:"Note"})]}),"\n",(0,o.jsx)(n.p,{children:"Each phone number can only be linked with one messaging service."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"get-account-credentials",children:"Get account credentials"}),"\n",(0,o.jsxs)(n.p,{children:["We will need the API credentials to make the connector work. Let's begin with the ",(0,o.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio console page"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Click on the "Account" menu in the top-right corner, then go to the "API keys & tokens" page to get your ',(0,o.jsx)(n.code,{children:"Account SID"})," and ",(0,o.jsx)(n.code,{children:"Auth token"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Back to "Messaging" -> "Services" settings page starting from the sidebar, and find the ',(0,o.jsx)(n.code,{children:"Sid"})," of your service."]}),"\n",(0,o.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(n.p,{children:["Fill out the ",(0,o.jsx)(n.em,{children:"accountSID"}),", ",(0,o.jsx)(n.em,{children:"authToken"})," and ",(0,o.jsx)(n.em,{children:"fromMessagingServiceSID"})," fields with ",(0,o.jsx)(n.code,{children:"Account SID"}),", ",(0,o.jsx)(n.code,{children:"Auth token"})," and ",(0,o.jsx)(n.code,{children:"Sid"})," of the corresponding messaging service."]}),"\n",(0,o.jsx)(n.p,{children:"You can add multiple SMS connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fill out the ",(0,o.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave ",(0,o.jsx)(n.code,{children:"{{code}}"})," placeholder for random verification code."]}),"\n",(0,o.jsxs)(n.li,{children:["Fill out the ",(0,o.jsx)(n.code,{children:"usageType"})," field with either ",(0,o.jsx)(n.code,{children:"Register"}),", ",(0,o.jsx)(n.code,{children:"SignIn"}),", ",(0,o.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,o.jsx)(n.code,{children:"Generic"})," for different use cases. In order to enable full user flows, templates with usageType ",(0,o.jsx)(n.code,{children:"Register"}),", ",(0,o.jsx)(n.code,{children:"SignIn"}),", ",(0,o.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,o.jsx)(n.code,{children:"Generic"})," are required."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"test-twilio-sms-connector",children:"Test Twilio SMS connector"}),"\n",(0,o.jsx)(n.p,{children:'You can enter a phone number and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,o.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"accountSID"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"authToken"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fromMessagingServiceSID"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"templates"}),(0,o.jsx)(n.td,{children:"Templates[]"})]})]})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Template Properties"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Enum values"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"content"}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"N/A"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"usageType"}),(0,o.jsx)(n.td,{children:"enum string"}),(0,o.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.twilio.com/docs/api/errors",children:"Twilio - Error and Warning Dictionary"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},47353:(e,n,t)=>{t.d(n,{ZP:()=>p,d$:()=>d});var o=t(11527),i=t(17279),s=t(56314),r=t(88004),c=t(13174),a=t(54976),l=t(50418);const d=[...s.d$,{value:"Installation",id:"installation",level:3},...r.d$,...c.d$,{value:"Update Razor pages",id:"update-razor-pages",level:3},...a.d$,...l.d$];function h(e){const n={h3:"h3",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(l.ZP,{sdk:".NET Core (Blazor Server)"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},81124:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(62608).Z+"",width:"4164",height:"1290"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},5632:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>r});var o=t(11527),i=t(17279);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Started",src:t(20368).Z+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Framework List",src:t(40011).Z+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1048:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(84026).Z+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(68309).Z+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},63708:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},38844:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},50418:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},97536:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},30876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,connector:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(11527),i=t(17279);t(63708),t(5632),t(81124),t(38844),t(1048),t(97536),t(47353),t(72777);const s={slug:"how-to-build-twilio-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","twilio","dotnet-core-blazor-webassembly","c#","passwordless-sign-in","sign-in","login"],title:"How to build Twilio SMS passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto"},r=void 0,c={permalink:"/tutorial/how-to-build-twilio-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-twilio.mdx",title:"How to build Twilio SMS passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-04-23T23:02:20.000Z",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"twilio",permalink:"/tutorial/tags/twilio"},{label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{label:"c#",permalink:"/tutorial/tags/c"},{label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.35,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-twilio-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","twilio","dotnet-core-blazor-webassembly","c#","passwordless-sign-in","sign-in","login"],title:"How to build Twilio SMS passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build SendGrid Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build Apple sign-in with .NET Core (MVC) and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-dotnet-core-mvc-and-logto"}},a={authorsImageUrls:[void 0]},l="Twilio",d=[];function h(e){return(0,o.jsx)(o.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h()}},56314:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,o.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},88004:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},13174:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function r(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,o.jsxs)(n.p,{children:["Include ",(0,o.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,o.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["There's no need to use the ",(0,o.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,o.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,o.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Remember to add the ",(0,o.jsx)(n.code,{children:"RedirectUri"})," and ",(0,o.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},54976:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var o=t(11527),i=t(17279);const s=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function r(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,o.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,o.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,o.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,o.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,o.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,o.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,o.jsx)(n.code,{children:"User"})," and ",(0,o.jsx)(n.code,{children:"Profile"})," classes in the ",(0,o.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},62608:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},40011:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},20368:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},68309:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},84026:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(50959);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);