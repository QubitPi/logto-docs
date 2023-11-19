"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37765],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52309:function(e,t,n){n.d(t,{ZP:function(){return l}});var i=n(665),o=n(40151),a=(n(59496),n(49613)),r=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Native App")," is an app that runs in a native environment. E.g., iOS app, Android app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Single Page App")," is an app that runs in a web browser, which updates the page with the new data from the server without loading entire new pages. E.g., React DOM app, Vue app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Traditional Web App")," is an app that renders and updates pages by the web server alone. E.g., JSP, PHP.")))}l.isMDXComponent=!0},30734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(665),o=n(40151),a=(n(59496),n(49613)),r=n(52309),s=["components"],l={},p="\ud83d\udcf1 Applications",c={unversionedId:"docs/references/applications/README",id:"version-1.x/docs/references/applications/README",title:"\ud83d\udcf1 Applications",description:"Introduction",source:"@site/versioned_docs/version-1.x/docs/references/applications/README.mdx",sourceDirName:"docs/references/applications",slug:"/docs/references/applications/",permalink:"/logto-docs/docs/references/applications/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/references/applications/README.mdx",tags:[],version:"1.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udd11 Signing keys",permalink:"/logto-docs/docs/recipes/signing-keys-rotation/"},next:{title:"\ud83d\udd0c Connectors",permalink:"/logto-docs/docs/references/connectors/"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Properties",id:"properties",level:2},{value:"Application ID",id:"application-id",level:3},{value:"Application Types",id:"application-types",level:3},{value:"Application Name",id:"application-name",level:3},{value:"Description",id:"description",level:3},{value:"Redirect URIs",id:"redirect-uris",level:3},{value:"Post Sign-out Redirect URIs",id:"post-sign-out-redirect-uris",level:3},{value:"CORS Allowed Origins",id:"cors-allowed-origins",level:3},{value:"OpenID Provider configuration endpoint",id:"openid-provider-configuration-endpoint",level:3},{value:"Authorization Endpoint",id:"authorization-endpoint",level:3},{value:"Token Endpoint",id:"token-endpoint",level:3},{value:"Userinfo Endpoint",id:"userinfo-endpoint",level:3},{value:"Always issue Refresh Token",id:"always-issue-refresh-token",level:3},{value:"Rotate Refresh Token",id:"rotate-refresh-token",level:3},{value:"Refresh Token Time to Live (TTL) in days",id:"refresh-token-time-to-live-ttl-in-days",level:3}],h={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-applications"},"\ud83d\udcf1 Applications"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In Logto for OIDC, an ",(0,a.kt)("em",{parentName:"p"},"Application")," refers to a specific software program or service that is registered with the Logto platform and has been granted authorization to access user information or perform actions on behalf of a user. Applications are used to identify the source of requests made to the Logto API, as well as to manage the authentication and authorization process for users accessing those applications."),(0,a.kt)("p",null,"The use of applications in Logto's sign-in experience allows users to easily access and manage their authorized applications from a single location, with a consistent and secure authentication process. This helps to streamline the user experience and ensure that only authorized individuals are accessing sensitive information or performing actions on behalf of the organization."),(0,a.kt)("p",null,"Applications are also used in Logto's audit logs to track user activity and identify any potential security threats or breaches. By associating specific actions with a particular application, Logto can provide detailed insights into how data is being accessed and used, allowing organizations to better manage their security and compliance requirements.\nIf you want to integrate your application with Logto, see ",(0,a.kt)("a",{parentName:"p",href:"../../recipes/integrate-logto"},"Integrate Logto in your application"),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"application-id"},"Application ID"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Application ID")," is a unique auto-generated key to identify your application in Logto, and is referenced as ",(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/"},"client id")," in OAuth 2.0."),(0,a.kt)("h3",{id:"application-types"},"Application Types"),(0,a.kt)("p",null,"An ",(0,a.kt)("em",{parentName:"p"},"Application")," can be one of the following application types:"),(0,a.kt)(r.ZP,{mdxType:"ApplicationTypesIntro"}),(0,a.kt)("h3",{id:"application-name"},"Application Name"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Application Name")," is a human-readable name of the application and will be displayed in the admin console."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Application Name")," is an important component of managing applications in Logto, as it allows administrators to easily identify and track the activity of individual applications within the platform."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," It's important to note that the _Application Name_ should be chosen carefully, as it will be visible to all users who have access to the admin console. It should accurately reflect the purpose and function of the application, while also being easy to understand and recognize.\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"A brief description of the application will be displayed on the admin console application details page. The description is intended to provide administrators with additional information about the application, such as its purpose, functionality, and any other relevant details."),(0,a.kt)("h3",{id:"redirect-uris"},"Redirect URIs"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Redirect URIs")," that are a list of valid redirect URIs that have been pre-configured for an application. When a user signs in to Logto and attempts to access the application, they are redirected to one of the allowed URIs specified in the application settings."),(0,a.kt)("p",null,"The allowed URIs list is used to validate the redirect URI that is included in the authorization request sent by the application to Logto during the authentication process. If the redirect URI specified in the authorization request matches one of the allowed URIs in the application settings, the user is redirected to that URI after successful authentication. If the redirect URI is not on the allowed list, the user will not be redirected and the authentication process will fail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"It is important to ensure that all valid redirect URIs are added to the allowed list for an application in Logto, in order to ensure that users can successfully access the application after authentication.\n")),(0,a.kt)("p",null,"You can check out the ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-3.1.2"},"Redirection Endpoint")," for more information."),(0,a.kt)("h3",{id:"post-sign-out-redirect-uris"},"Post Sign-out Redirect URIs"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Post Sign-out Redirect URIs")," are a list of valid URIs that have been pre-configured for an application to redirect the user after they have signed out from Logto."),(0,a.kt)("p",null,"The use of Allowed ",(0,a.kt)("em",{parentName:"p"},"Post Sign-out Redirect URIs")," for Logout is part of the RP-Initiated Logout specification in OIDC. This specification provides a standardized method for applications to initiate a logout request for a user, which includes redirecting the user to a pre-configured endpoint after they have signed out."),(0,a.kt)("p",null,"When a user signs out of Logto, their session is terminated and they are redirected to one of the allowed URIs specified in the application settings. This ensures that the user is directed only to authorized and valid endpoints after they have signed out, helping to prevent unauthorized access and security risks associated with redirecting users to unknown or unverified endpoints."),(0,a.kt)("p",null,"You can check out the ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html#RPLogout"},"RP-Initiated Logout")," for more information."),(0,a.kt)("h3",{id:"cors-allowed-origins"},"CORS Allowed Origins"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"CORS (Cross-Origin Resource Sharing) Allowed Origins")," are a list of permitted origins from which an application can make requests to the Logto service. Any origin that is not included in the allowed list will not be able to make requests to the Logto service."),(0,a.kt)("p",null,"The CORS Allowed Origins list is used to restrict access to the Logto service from unauthorized domains, and to help prevent cross-site request forgery (CSRF) attacks. By specifying the allowed origins for an application in Logto, the service can ensure that only authorized domains are able to make requests to the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The allowed origins list should contain the origin where the application will be served. This ensures that requests from the application are allowed, while requests from unauthorized origins are blocked.\n")),(0,a.kt)("h3",{id:"openid-provider-configuration-endpoint"},"OpenID Provider configuration endpoint"),(0,a.kt)("p",null,"The endpoint for ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationRequest"},"OpenID Connect Discovery"),"."),(0,a.kt)("h3",{id:"authorization-endpoint"},"Authorization Endpoint"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Authorization Endpoint")," is an OIDC term, and it is a required endpoint that is used to initiate the authentication process for a user. When a user attempts to access a protected resource or application hat has been registered with the Logto platform, they will be redirected to the ",(0,a.kt)("em",{parentName:"p"},"Authorization Endpoint")," to authenticate their identity and obtain authorization to access the requested resource."),(0,a.kt)("p",null,"You can check out the ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint"},"Authorization Endpoint")," for more information."),(0,a.kt)("h3",{id:"token-endpoint"},"Token Endpoint"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Token Endpoint")," is an OIDC term, it is a web API endpoint that is used by an OIDC client to obtain an access token, an ID token, or a refresh token from an OIDC provider."),(0,a.kt)("p",null,"When an OIDC client needs to obtain an access token or ID token, it sends a request to the Token Endpoint with an authorization grant, which is typically an authorization code or a refresh token. The Token Endpoint then validates the authorization grant and issues an access token or ID token to the client if the grant is valid."),(0,a.kt)("p",null,"You can check out the ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint"},"Token Endpoint")," for more information."),(0,a.kt)("h3",{id:"userinfo-endpoint"},"Userinfo Endpoint"),(0,a.kt)("p",null,"The OpenID Connect ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint"),"."),(0,a.kt)("h3",{id:"always-issue-refresh-token"},"Always issue Refresh Token"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Added in v1.4.0")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Availability: Traditional Web, SPA")),(0,a.kt)("p",null,"When enabled, Logto will always issue Refresh Tokens, regardless of whether ",(0,a.kt)("inlineCode",{parentName:"p"},"prompt=consent")," is presented in the authentication request, nor ",(0,a.kt)("inlineCode",{parentName:"p"},"offline_access")," is presented in the scopes."),(0,a.kt)("p",null,"However, this practice is discouraged unless necessary (usually it's useful for some third-party OAuth integrations that require Refresh Token), as it is not compatible with OpenID Connect and may potentially cause issues."),(0,a.kt)("h3",{id:"rotate-refresh-token"},"Rotate Refresh Token"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Added in v1.6.0")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Availability: Traditional Web, Machine-to-machine; Default: ",(0,a.kt)("inlineCode",{parentName:"em"},"true"))),(0,a.kt)("p",null,"When enabled, Logto will issue a new Refresh Token for token requests under the following conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the time elapsed since the refresh token was last rotated is less than 1 year; and"),(0,a.kt)("li",{parentName:"ul"},"If 70% of the original Time to Live (TTL) has passed; or"),(0,a.kt)("li",{parentName:"ul"},"If the client is a non-sender-constrained public client.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the application type is not available for this switch, it means a new refresh token will be always issued for each token request.")),(0,a.kt)("h3",{id:"refresh-token-time-to-live-ttl-in-days"},"Refresh Token Time to Live (TTL) in days"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Added in v1.6.0")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Availability: Not SPA; Default: 14 days")),(0,a.kt)("p",null,"The duration for which a Refresh Token can be used to request new access tokens before it expires and becomes invalid. Token requests will extend the TTL of the Refresh Token to this value."),(0,a.kt)("p",null,"Typically, a lower value is preferred."),(0,a.kt)("p",null,"Note: TTL refreshment is unavailable in SPA (Single Page Apps) for security reasons. This means Logto will not extend the TTL through token requests. To enhance the user experience, you can enable the Rotate Refresh Token feature, allowing Logto to issue a new Refresh Token when necessary."))}f.isMDXComponent=!0}}]);