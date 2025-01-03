"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64363],{54035:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"integrate-logto/application-data-structure","title":"Application data structure","description":"Introduction \\\\","source":"@site/docs/integrate-logto/application-data-structure.mdx","sourceDirName":"integrate-logto","slug":"/integrate-logto/application-data-structure","permalink":"/integrate-logto/application-data-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrate-logto/application-data-structure.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Interact with Management API","permalink":"/integrate-logto/interact-with-management-api/"},"next":{"title":"Integrate Logto","permalink":"/integrate-logto/"}}');var o=i(25105),s=i(79621);const a={sidebar_position:5},r="Application data structure",c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Properties",id:"properties",level:2},{value:"Application ID",id:"application-id",level:3},{value:"Application types",id:"application-types",level:3},{value:"Application secret",id:"application-secret",level:3},{value:"Application name",id:"application-name",level:3},{value:"Description",id:"description",level:3},{value:"Redirect URIs",id:"redirect-uris",level:3},{value:"Post sign-out redirect URIs",id:"post-sign-out-redirect-uris",level:3},{value:"CORS allowed origins",id:"cors-allowed-origins",level:3},{value:"OpenID provider configuration endpoint",id:"openid-provider-configuration-endpoint",level:3},{value:"Authorization endpoint",id:"authorization-endpoint",level:3},{value:"Token endpoint",id:"token-endpoint",level:3},{value:"Userinfo endpoint",id:"userinfo-endpoint",level:3},{value:"Always issue refresh token",id:"always-issue-refresh-token",level:3},{value:"Rotate refresh token",id:"rotate-refresh-token",level:3},{value:"Refresh token time-to-live (TTL) in days",id:"refresh-token-time-to-live-ttl-in-days",level:3},{value:"Backchannel logout URI",id:"backchannel-logout-uri",level:3},{value:"Custom data",id:"custom-data",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Url:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"application-data-structure",children:"Application data structure"})}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["In Logto, an ",(0,o.jsx)(t.em,{children:"application"})," refers to a specific software program or service that is registered with the Logto platform and has been granted authorization to access user information or perform actions on behalf of a user. Applications are used to identify the source of requests made to the Logto API, as well as to manage the authentication and authorization process for users accessing those applications."]}),"\n",(0,o.jsx)(t.p,{children:"The use of applications in Logto's sign-in experience allows users to easily access and manage their authorized applications from a single location, with a consistent and secure authentication process. This helps to streamline the user experience and ensure that only authorized individuals are accessing sensitive information or performing actions on behalf of the organization."}),"\n",(0,o.jsxs)(t.p,{children:["Applications are also used in Logto's audit logs to track user activity and identify any potential security threats or breaches. By associating specific actions with a particular application, Logto can provide detailed insights into how data is being accessed and used, allowing organizations to better manage their security and compliance requirements.\nIf you want to integrate your application with Logto, see ",(0,o.jsx)(t.a,{href:"/integrate-logto",children:"Integrate Logto"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(t.h3,{id:"application-id",children:"Application ID"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Application ID"})," is a unique auto-generated key to identify your application in Logto, and is referenced as ",(0,o.jsx)(t.a,{href:"https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/",children:"client id"})," in OAuth 2.0."]}),"\n",(0,o.jsx)(t.h3,{id:"application-types",children:"Application types"}),"\n",(0,o.jsxs)(t.p,{children:["An ",(0,o.jsx)(t.em,{children:"Application"})," can be one of the following application types:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Native app"})," is an app that runs in a native environment. E.g., iOS app, Android app."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Single page app"})," is an app that runs in a web browser, which updates the page with the new data from the server without loading entire new pages. E.g., React DOM app, Vue app."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Traditional web app"})," is an app that renders and updates pages by the web server alone. E.g., JSP, PHP."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Machine-to-machine (M2M) app"})," is an application that runs in a machine environment for direct service-to-service communication without user interaction."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"application-secret",children:"Application secret"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Application secret"})," is a key used to authenticate the application in the authentication system, specifically for private clients (Traditional Web and M2M apps) as a private security barrier."]}),"\n",(0,o.jsx)(t.h3,{id:"application-name",children:"Application name"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Application name"})," is a human-readable name of the application and will be displayed in the admin console."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"Application name"})," is an important component of managing applications in Logto, as it allows administrators to easily identify and track the activity of individual applications within the platform."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["It's important to note that the ",(0,o.jsx)(t.em,{children:"Application name"})," should be chosen carefully, as it will be visible to all users who have access to the admin console. It should accurately reflect the purpose and function of the application, while also being easy to understand and recognize."]})}),"\n",(0,o.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"A brief description of the application will be displayed on the admin console application details page. The description is intended to provide administrators with additional information about the application, such as its purpose, functionality, and any other relevant details."}),"\n",(0,o.jsx)(t.h3,{id:"redirect-uris",children:"Redirect URIs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Redirect URIs"})," that are a list of valid redirect URIs that have been pre-configured for an application. When a user signs in to Logto and attempts to access the application, they are redirected to one of the allowed URIs specified in the application settings."]}),"\n",(0,o.jsx)(t.p,{children:"The allowed URIs list is used to validate the redirect URI that is included in the authorization request sent by the application to Logto during the authentication process. If the redirect URI specified in the authorization request matches one of the allowed URIs in the application settings, the user is redirected to that URI after successful authentication. If the redirect URI is not on the allowed list, the user will not be redirected and the authentication process will fail."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"It is important to ensure that all valid redirect URIs are added to the allowed list for an application in Logto, in order to ensure that users can successfully access the application after authentication."})}),"\n",(0,o.jsxs)(t.p,{children:["You can check out the ",(0,o.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-3.1.2",children:"Redirection endpoint"})," for more information."]}),"\n",(0,o.jsx)(i,{href:"https://blog.logto.io/redirect-uri-in-authorization-code-flow",children:(0,o.jsx)(t.p,{children:"Understanding Redirect URIs in OIDC with Authorization Code Flow"})}),"\n",(0,o.jsx)(t.h3,{id:"post-sign-out-redirect-uris",children:"Post sign-out redirect URIs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Post sign-out redirect URIs"})," are a list of valid URIs that have been pre-configured for an application to redirect the user after they have signed out from Logto."]}),"\n",(0,o.jsxs)(t.p,{children:["The use of Allowed ",(0,o.jsx)(t.em,{children:"Post Sign-out Redirect URIs"})," for Logout is part of the RP-Initiated (Relying Party Initiated) Logout specification in OIDC. This specification provides a standardized method for applications to initiate a logout request for a user, which includes redirecting the user to a pre-configured endpoint after they have signed out."]}),"\n",(0,o.jsx)(t.p,{children:"When a user signs out of Logto, their session is terminated and they are redirected to one of the allowed URIs specified in the application settings. This ensures that the user is directed only to authorized and valid endpoints after they have signed out, helping to prevent unauthorized access and security risks associated with redirecting users to unknown or unverified endpoints."}),"\n",(0,o.jsxs)(t.p,{children:["You can check out the ",(0,o.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html#RPLogout",children:"RP-initiated logout"})," for more information."]}),"\n",(0,o.jsx)(t.h3,{id:"cors-allowed-origins",children:"CORS allowed origins"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"CORS (Cross-origin resource sharing) allowed origins"})," are a list of permitted origins from which an application can make requests to the Logto service. Any origin that is not included in the allowed list will not be able to make requests to the Logto service."]}),"\n",(0,o.jsx)(t.p,{children:"The CORS allowed origins list is used to restrict access to the Logto service from unauthorized domains, and to help prevent cross-site request forgery (CSRF) attacks. By specifying the allowed origins for an application in Logto, the service can ensure that only authorized domains are able to make requests to the service."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"The allowed origins list should contain the origin where the application will be served. This ensures that requests from the application are allowed, while requests from unauthorized origins are blocked."})}),"\n",(0,o.jsx)(t.h3,{id:"openid-provider-configuration-endpoint",children:"OpenID provider configuration endpoint"}),"\n",(0,o.jsxs)(t.p,{children:["The endpoint for ",(0,o.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationRequest",children:"OpenID Connect Discovery"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"authorization-endpoint",children:"Authorization endpoint"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Authorization Endpoint"})," is an OIDC term, and it is a required endpoint that is used to initiate the authentication process for a user. When a user attempts to access a protected resource or application hat has been registered with the Logto platform, they will be redirected to the ",(0,o.jsx)(t.em,{children:"Authorization Endpoint"})," to authenticate their identity and obtain authorization to access the requested resource."]}),"\n",(0,o.jsxs)(t.p,{children:["You can check out the ",(0,o.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint",children:"Authorization Endpoint"})," for more information."]}),"\n",(0,o.jsx)(t.h3,{id:"token-endpoint",children:"Token endpoint"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Token Endpoint"})," is an OIDC term, it is a web API endpoint that is used by an OIDC client to obtain an access token, an ID token, or a refresh token from an OIDC provider."]}),"\n",(0,o.jsx)(t.p,{children:"When an OIDC client needs to obtain an access token or ID token, it sends a request to the Token Endpoint with an authorization grant, which is typically an authorization code or a refresh token. The Token Endpoint then validates the authorization grant and issues an access token or ID token to the client if the grant is valid."}),"\n",(0,o.jsxs)(t.p,{children:["You can check out the ",(0,o.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint",children:"Token Endpoint"})," for more information."]}),"\n",(0,o.jsx)(t.h3,{id:"userinfo-endpoint",children:"Userinfo endpoint"}),"\n",(0,o.jsxs)(t.p,{children:["The OpenID Connect ",(0,o.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo Endpoint"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"always-issue-refresh-token",children:"Always issue refresh token"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Availability: Traditional web, SPA"})}),"\n",(0,o.jsxs)(t.p,{children:["When enabled, Logto will always issue refresh tokens, regardless of whether ",(0,o.jsx)(t.code,{children:"prompt=consent"})," is presented in the authentication request, nor ",(0,o.jsx)(t.code,{children:"offline_access"})," is presented in the scopes."]}),"\n",(0,o.jsx)(t.p,{children:"However, this practice is discouraged unless necessary (usually it's useful for some third-party OAuth integrations that require refresh token), as it is not compatible with OpenID Connect and may potentially cause issues."}),"\n",(0,o.jsx)(t.h3,{id:"rotate-refresh-token",children:"Rotate refresh token"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["Default: ",(0,o.jsx)(t.code,{children:"true"})]})}),"\n",(0,o.jsx)(t.p,{children:"When enabled, Logto will issue a new refresh token for token requests under the following conditions:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If the refresh token has been rotated (have its TTL prolonged by issuing a new one) for one year; ",(0,o.jsx)(t.strong,{children:"OR"})]}),"\n",(0,o.jsxs)(t.li,{children:["If the refresh token is close to its expiration time (>=70% of its original Time to Live (TTL) passed); ",(0,o.jsx)(t.strong,{children:"OR"})]}),"\n",(0,o.jsx)(t.li,{children:"If the client is a public client, e.g. Native application or single page application (SPA)."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"For public clients, when this feature is enabled, a new refresh token will always be issued when the client is exchanging for a new access token using the refresh token.\nAlthough you can still turn off the feature for those public clients, it is highly recommended to keep it enabled for security reasons."})}),"\n",(0,o.jsx)(i,{href:"https://blog.logto.io/understanding-refresh-token-rotation",children:(0,o.jsx)(t.p,{children:"Understanding refresh token rotation"})}),"\n",(0,o.jsx)(t.h3,{id:"refresh-token-time-to-live-ttl-in-days",children:"Refresh token time-to-live (TTL) in days"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Availability: Not SPA; Default: 14 days"})}),"\n",(0,o.jsx)(t.p,{children:"The duration for which a refresh token can be used to request new access tokens before it expires and becomes invalid. Token requests will extend the TTL of the refresh token to this value."}),"\n",(0,o.jsx)(t.p,{children:"Typically, a lower value is preferred."}),"\n",(0,o.jsx)(t.p,{children:'Note: TTL refreshment is unavailable in SPA (single page app) for security reasons. This means Logto will not extend the TTL through token requests. To enhance the user experience, you can enable the "Rotate refresh token" feature, allowing Logto to issue a new refresh token when necessary.'}),"\n",(0,o.jsx)(t.h3,{id:"backchannel-logout-uri",children:"Backchannel logout URI"}),"\n",(0,o.jsxs)(t.p,{children:["The OpenID Connect backchannel logout endpoint. See ",(0,o.jsx)(t.a,{href:"#",children:"Federated sign-out: Back-channel logout"})," for more information."]}),"\n",(0,o.jsx)(t.h3,{id:"custom-data",children:"Custom data"}),"\n",(0,o.jsx)(t.p,{children:"Additional custom application info not listed in the pre-defined application properties, users can define their own custom data fields according to their specific needs, such as business-specific settings and configurations."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},79621:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(58101);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);