"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[22491],{78049:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[{value:"Sign in with GitHub account",id:"sign-in-with-github-account",level:3},{value:"Create and configure OAuth app",id:"create-and-configure-oauth-app",level:3},{value:"Managing OAuth apps",id:"managing-oauth-apps",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"sign-in-with-github-account",children:"Sign in with GitHub account"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://github.com/",children:"GitHub website"})," and sign in with your GitHub account. You may register a new account if you don't have one."]}),"\n",(0,i.jsx)(n.h3,{id:"create-and-configure-oauth-app",children:"Create and configure OAuth app"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app",children:"creating an OAuth App"})," guide, and register a new application."]}),"\n",(0,i.jsxs)(n.p,{children:["Name your new OAuth application in ",(0,i.jsx)(n.strong,{children:"Application name"})," and fill up ",(0,i.jsx)(n.strong,{children:"Homepage URL"})," of the app.\nYou can leave ",(0,i.jsx)(n.strong,{children:"Application description"})," field blank and customize ",(0,i.jsx)(n.strong,{children:"Authorization callback URL"})," as ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". The ",(0,i.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'Note: If you encounter the error message "The redirect_uri MUST match the registered callback URL for this application." when logging in, try aligning the Authorization Callback URL of your GitHub OAuth App and your Logto App\'s redirect URL (of course, including the protocol) to resolve the issue.'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We suggest not to check the box before ",(0,i.jsx)(n.strong,{children:"Enable Device Flow"}),", or users who sign in with GitHub on mobile devices must confirm the initial sign-in action in the GitHub app. Many GitHub users do not install the GitHub mobile app on their phones, which could block the sign-in flow. Please ignore our suggestion if you are expecting end-users to confirm their sign-in flow. See details of ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow",children:"device flow"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"managing-oauth-apps",children:"Managing OAuth apps"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://github.com/settings/developers",children:"OAuth Apps page"})," and you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,i.jsx)(n.code,{children:"Client ID"})," and generate ",(0,i.jsx)(n.code,{children:"Client secrets"})," in OAuth app detail pages."]}),"\n",(0,i.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,i.jsxs)(n.p,{children:["Let's go back to Logto. Fill out the ",(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," field with ",(0,i.jsx)(n.em,{children:"Client ID"})," and ",(0,i.jsx)(n.em,{children:"Client Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of GitHub connector config JSON."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "clientID": "<your-client-id>",\n  "clientSecret": "<your-client-secret>"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},19552:(e,n,t)=>{t.d(n,{Ay:()=>x,RM:()=>u});var i=t(25105),o=t(79621),s=t(80723),r=t(95056),c=t(98537);function a(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["First, add actions methods to your ",(0,i.jsx)(n.code,{children:"Controller"}),", for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Controllers/HomeController.cs"',children:'public class HomeController : Controller\n{\n  public IActionResult SignIn()\n  {\n    // This will redirect the user to the Logto sign-in page.\n    return Challenge(new AuthenticationProperties { RedirectUri = "/" });\n  }\n\n  // Use the `new` keyword to avoid conflict with the `ControllerBase.SignOut` method\n  new public IActionResult SignOut()\n  {\n    // This will clear the authentication cookie and redirect the user to the Logto sign-out page\n    // to clear the Logto session as well.\n    return SignOut(new AuthenticationProperties { RedirectUri = "/" });\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, add the links to your View:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",metastring:'title="Views/Home/Index.cshtml"',children:'<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n@if (User.Identity?.IsAuthenticated == true) {\n  <a asp-controller="Home" asp-action="SignOut">Sign out</a>\n} else {\n  <a asp-controller="Home" asp-action="SignIn">Sign in</a>\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'It will show the "Sign in" link if the user is not authenticated, and show the "Sign out" link if the user is authenticated.'})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var d=t(67321),h=t(11805),p=t(38727);const u=[...c.RM,{value:"Installation",id:"installation",level:3},...d.RM,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...s.RM,{value:"Sign-in and sign-out flows",id:"sign-in-and-sign-out-flows",level:3},...h.RM,{value:"Configure redirect URIs",id:"configure-redirect-uris",level:3},...r.RM,{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},...p.RM];function g(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"sign-in-and-sign-out-flows",children:"Sign-in and sign-out flows"}),"\n",(0,i.jsx)(h.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(p.Ay,{sdk:".NET Core (MVC)"})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},64201:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(99320).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},56668:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(37969).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(37264).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},62703:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(69350).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(55558).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},61516:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},64582:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},38727:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},32836:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},92182:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,connector:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var i=t(47800),o=t(25105),s=t(79621);t(61516),t(56668),t(64201),t(64582),t(62703),t(32836),t(19552),t(78049);const r={slug:"how-to-build-github-sign-in-with-dotnet-core-mvc-and-logto",authors:"logto",tags:["authentication","github","dotnet-core-mvc","c#","social-sign-in","sign-in","login"],title:"How to build GitHub sign-in with .NET Core (MVC) and Logto"},c=void 0,a={authorsImageUrls:[void 0]},l="GitHub",d=[];function h(e){return(0,o.jsx)(o.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h()}},41018:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[{value:"Regarding redirect-based sign-in",id:"regarding-redirect-based-sign-in",level:3}];function r(e){const n={a:"a",h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.h3,{id:"regarding-redirect-based-sign-in",children:"Regarding redirect-based sign-in"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This authentication process follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,i.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,i.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,i.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},23866:(e,n,t)=>{t.d(n,{Ay:()=>a,Ip:()=>s,RM:()=>r});var i=t(25105),o=t(79621);const s="http://localhost:3000/",r=[];function c(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)("code",{children:s}),"."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},80723:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},95056:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>c});var i=t(25105),o=t(79621),s=t(65113),r=t(23866);const c=[...r.RM,{value:"Change the default paths",id:"change-the-default-paths",level:4}];function a(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["First, let's configure the ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"}),'. Add the following URI to the "Redirect URIs" list in the Logto application details page:']}),"\n",(0,i.jsx)(s.A,{children:`http://${r.Ip}/Callback`}),"\n",(0,i.jsxs)(n.p,{children:["To configure the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"}),', add the following URI to the "Post sign-out redirect URIs" list in the Logto application details page:']}),"\n",(0,i.jsx)(s.A,{children:`http://${r.Ip}/SignedOutCallback`}),"\n",(0,i.jsx)(n.h4,{id:"change-the-default-paths",children:"Change the default paths"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," has a default path of ",(0,i.jsx)(n.code,{children:"/Callback"}),", and the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default path of ",(0,i.jsx)(n.code,{children:"/SignedOutCallback"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can leave them as are if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"CallbackPath"})," and ",(0,i.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  // highlight-start\n  options.CallbackPath = "/Foo";\n  options.SignedOutCallbackPath = "/Bar";\n  // highlight-end\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},98537:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},67321:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(25105),o=t(79621);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11805:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(25105),o=t(79621),s=t(41018);const r=[...s.RM];function c(e){const n={li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before we proceed, there are two confusing terms in the .NET Core authentication middleware that we need to clarify:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CallbackPath"}),': The URI that Logto will redirect the user back to after the user has signed in (the "redirect URI" in Logto)']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RedirectUri"}),": The URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The sign-in process can be illustrated as follows:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n  subgraph Your app\n    A\n    C\n    D\n  end\n  subgraph Logto\n    B\n  end\n  A(Sign-in path) --\x3e|Redirect to| B(Logto)\n  B --\x3e|Redirect to| C(CallbackPath)\n  C --\x3e|Redirect to| D(RedirectUri)"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, .NET Core also has ",(0,i.jsx)(n.strong,{children:"SignedOutCallbackPath"})," and ",(0,i.jsx)(n.strong,{children:"RedirectUri"})," for the sign-out flow."]}),"\n",(0,i.jsx)(n.p,{children:"For the sack of clarity, we'll refer them as follows:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Term we use"}),(0,i.jsx)(n.th,{children:".NET Core term"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Logto redirect URI"}),(0,i.jsx)(n.td,{children:"CallbackPath"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Logto post sign-out redirect URI"}),(0,i.jsx)(n.td,{children:"SignedOutCallbackPath"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Application redirect URI"}),(0,i.jsx)(n.td,{children:"RedirectUri"})]})]})]}),"\n",(0,i.jsx)(s.Ay,{})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},48564:(e,n,t)=>{t.d(n,{A:()=>x});var i=t(8859),o=t(9545),s=t(83702),r=t(1391),c=t(9743),a=t(45247),l=t(86686),d=t(85601),h=t(13526),p=t(57850);const u={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};var g=t(25105);function x(e){let{children:n,className:t="",metastring:x,title:j,showLineNumbers:m,language:f}=e;const{prism:{defaultLanguage:b,magicComments:w}}=(0,i.p)(),y=function(e){return e?.toLowerCase()}(f??(0,s.Op)(t)??b),k=(0,o.A)(),A=(0,r.f)(),v=(0,s.wt)(x)||j,{lineClassNames:R,code:C}=(0,s.Li)(n,{metastring:x,language:y,magicComments:w}),L=m??(0,s._u)(x);return(0,g.jsxs)(c.A,{as:"div",className:(0,h.A)(t,y&&!t.includes(`language-${y}`)&&`language-${y}`),children:[v&&(0,g.jsx)("div",{className:u.codeBlockTitle,children:v}),(0,g.jsxs)("div",{className:u.codeBlockContent,children:[(0,g.jsx)(p.f4,{theme:k,code:C,language:y??"text",children:e=>{let{className:n,style:t,tokens:i,getLineProps:o,getTokenProps:s}=e;return(0,g.jsx)("pre",{ref:A.codeBlockRef,tabIndex:0,className:(0,h.A)(n,u.codeBlock,"thin-scrollbar"),style:t,children:(0,g.jsx)("code",{className:(0,h.A)(u.codeBlockLines,L&&u.codeBlockLinesWithNumbering),children:i.map(((e,n)=>(0,g.jsx)(l.A,{line:e,getLineProps:o,getTokenProps:s,classNames:R[n],showLineNumbers:L},n)))})})}}),(0,g.jsxs)("div",{className:u.buttonGroup,children:[(A.isEnabled||A.isCodeScrollable)&&(0,g.jsx)(d.A,{className:u.codeButton,isEnabled:A.isEnabled,onClick:()=>{A.toggle()}}),(0,g.jsx)(a.A,{className:u.codeButton,code:C})]})]})]})}},99320:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},37264:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},37969:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},55558:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},69350:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},47800:e=>{e.exports=JSON.parse('{"permalink":"/es/tutorial/how-to-build-github-sign-in-with-dotnet-core-mvc-and-logto","source":"@site/tutorial/build-with-logto/generated-dotnet-core-mvc-github.mdx","title":"How to build GitHub sign-in with .NET Core (MVC) and Logto","description":"{/*","date":"2025-01-03T07:56:28.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/es/tutorial/tags/authentication"},{"inline":true,"label":"github","permalink":"/es/tutorial/tags/github"},{"inline":true,"label":"dotnet-core-mvc","permalink":"/es/tutorial/tags/dotnet-core-mvc"},{"inline":true,"label":"c#","permalink":"/es/tutorial/tags/c"},{"inline":true,"label":"social-sign-in","permalink":"/es/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/es/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/es/tutorial/tags/login"}],"readingTime":1.295,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-github-sign-in-with-dotnet-core-mvc-and-logto","authors":"logto","tags":["authentication","github","dotnet-core-mvc","c#","social-sign-in","sign-in","login"],"title":"How to build GitHub sign-in with .NET Core (MVC) and Logto"},"unlisted":false,"prevItem":{"title":"How to build Facebook sign-in with .NET Core (MVC) and Logto","permalink":"/es/tutorial/how-to-build-facebook-sign-in-with-dotnet-core-mvc-and-logto"},"nextItem":{"title":"How to build Google sign-in with .NET Core (MVC) and Logto","permalink":"/es/tutorial/how-to-build-google-sign-in-with-dotnet-core-mvc-and-logto"}}')}}]);