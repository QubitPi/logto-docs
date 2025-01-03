"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7644],{34067:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"end-user-flows/account-settings/by-management-api","title":"Account settings by Management API","description":"Integrations \\\\","source":"@site/docs/end-user-flows/account-settings/by-management-api.mdx","sourceDirName":"end-user-flows/account-settings","slug":"/end-user-flows/account-settings/by-management-api","permalink":"/end-user-flows/account-settings/by-management-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/end-user-flows/account-settings/by-management-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Account settings","permalink":"/end-user-flows/account-settings/"},"next":{"title":"Account settings by account API","permalink":"/end-user-flows/account-settings/by-account-api"}}');var s=i(25105),r=i(79621);const a={sidebar_position:1},o="Account settings by Management API",d={},c=[{value:"Integrations",id:"integrations",level:2},{value:"Architecture",id:"architecture",level:3},{value:"Sequence diagram",id:"sequence-diagram",level:3},{value:"Integrate Management API to server-side application",id:"integrate-management-api-to-server-side-application",level:3},{value:"User Management APIs",id:"user-management-apis",level:2},{value:"User data schema",id:"user-data-schema",level:3},{value:"User profile and identifiers Management APIs",id:"user-profile-and-identifiers-management-apis",level:3},{value:"Email and phone number verification",id:"email-and-phone-number-verification",level:3},{value:"User password management",id:"user-password-management",level:3},{value:"User social identities management",id:"user-social-identities-management",level:3},{value:"User enterprise identities management",id:"user-enterprise-identities-management",level:3},{value:"User MFA settings management",id:"user-mfa-settings-management",level:3},{value:"User account deletion",id:"user-account-deletion",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"account-settings-by-management-api",children:"Account settings by Management API"})}),"\n",(0,s.jsx)(t.h2,{id:"integrations",children:"Integrations"}),"\n",(0,s.jsx)(t.p,{children:"Logto provides various Management API to manage user accounts. You can use these APIs to build a self-serve account settings page for end-users."}),"\n",(0,s.jsx)(t.h3,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(t.mermaid,{value:"  graph TB\n    A[User] --\x3e B[Client application]\n    B --\x3e|Self-hosted account settings API call|C[Server-side application]\n    C --\x3e|Management API call| D[Logto]"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"User"}),": Authenticated end-user who needs to access and manage their account settings."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Client application"}),": Your client application that serves the account settings page to the user."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Server-side application"}),": Server-side application that provides the account settings API to the client. Interacts with the Logto Management API."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Logto"}),": Logto as the authentication and authorization service. Provides the Management API to manage user accounts."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"sequence-diagram",children:"Sequence diagram"}),"\n",(0,s.jsx)(t.mermaid,{value:"  sequenceDiagram\n    autonumber\n    actor User as User\n    participant Client as Client app\n    participant Server as Server-side application\n    participant Logto as Logto\n\n    User ->> Client: Access client app\n    Client ->> Logto: POST /oidc/auth\n    User --\x3e> Logto: sign in\n    Logto --\x3e> Client: Redirect to client app\n    Client ->> Logto: POST /oidc/token\n    Logto ->> Client: Access token A\n    Client ->> Server: GET /account-settings (with access token A)\n    Server ->> Logto: POST /oidc/token (with client credentials)\n    Logto ->> Server: Access token B\n    Server ->> Logto: GET /api/users/{userId} (with access token B)\n    Logto ->> Server: User details\n    Server ->> Client: User details"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"User accesses the client application."}),"\n",(0,s.jsx)(t.li,{children:"Client application send the authentication request to Logto and redirects the user to the Logto sign-in page."}),"\n",(0,s.jsx)(t.li,{children:"User signs in to Logto."}),"\n",(0,s.jsx)(t.li,{children:"Authenticated user is redirected back to the client application with the authorization code."}),"\n",(0,s.jsx)(t.li,{children:"Client application requests the access token from Logto for the self-hosted account settings API access."}),"\n",(0,s.jsx)(t.li,{children:"Logto grants the access token to the client application."}),"\n",(0,s.jsx)(t.li,{children:"The client application send the account settings request to Server-side application with the user access token."}),"\n",(0,s.jsx)(t.li,{children:"Server-side application verifies the requester's identity and permission from the user access token. Then request for a Management API access token from Logto."}),"\n",(0,s.jsx)(t.li,{children:"Logto grants the Management API access token to Server-side application."}),"\n",(0,s.jsx)(t.li,{children:"Server-side application requests the user data from Logto using the Management API access token."}),"\n",(0,s.jsx)(t.li,{children:"Logto verifies the server's identity and Management API permission and returns the user data."}),"\n",(0,s.jsx)(t.li,{children:"Server-side application process the user data based on the requester's permission and returns the user account details to the client application."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"integrate-management-api-to-server-side-application",children:"Integrate Management API to server-side application"}),"\n",(0,s.jsxs)(t.p,{children:["Check the ",(0,s.jsx)(t.a,{href:"/integrate-logto/interact-with-management-api/",children:"Management API"})," section to learn how to integrate the Management APIs with server-side applications."]}),"\n",(0,s.jsx)(t.h2,{id:"user-management-apis",children:"User Management APIs"}),"\n",(0,s.jsx)(t.h3,{id:"user-data-schema",children:"User data schema"}),"\n",(0,s.jsxs)(t.p,{children:["Check the ",(0,s.jsx)(t.a,{href:"/user-management/user-data/",children:"user data and custom data"})," section to learn more about the user schema in Logto."]}),"\n",(0,s.jsx)(t.h3,{id:"user-profile-and-identifiers-management-apis",children:"User profile and identifiers Management APIs"}),"\n",(0,s.jsx)(t.p,{children:"A user's profile and identifiers are essential for user management. You can use the following APIs to manage user profiles and identifiers."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"method"}),(0,s.jsx)(t.th,{children:"path"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"/api/users/{userId}"})}),(0,s.jsx)(t.td,{children:"Get user details by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PATCH"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-updateuser",children:"/api/users/{userId}"})}),(0,s.jsx)(t.td,{children:"Update user details."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PATCH"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-updateuserprofile",children:"/api/users/{userId}/profile"})}),(0,s.jsx)(t.td,{children:"Update user profile fields by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-listusercustomdata",children:"/api/users/{userId}/custom-data"})}),(0,s.jsx)(t.td,{children:"Get user custom data by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PATCH"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-updateusercustomdata",children:"/api/users/{userId}/custom-data"})}),(0,s.jsx)(t.td,{children:"Update user custom data by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PATCH"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-updateuserissuspended",children:"/api/users/{userId}/is-suspended"})}),(0,s.jsx)(t.td,{children:"Update user suspension status by user ID."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"email-and-phone-number-verification",children:"Email and phone number verification"}),"\n",(0,s.jsx)(t.p,{children:"In the Logto system, both email addresses and phone numbers can serve as user identifiers, making their verification essential. To support this, we provide a set of verification code APIs to help verify the provided email or phone number."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Make sure to verify the email or phone number before updating the user's profile with a new email or phone number."})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"method"}),(0,s.jsx)(t.th,{children:"path"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-createverificationcode",children:"/api/verification/verification-codes"})}),(0,s.jsx)(t.td,{children:"Send email or phone number verification code."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-verifyverificationcode",children:"/api/verification/verification-codes/verify"})}),(0,s.jsx)(t.td,{children:"Verify email or phone number by verification code."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"user-password-management",children:"User password management"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"method"}),(0,s.jsx)(t.th,{children:"path"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-verifyuserpassword",children:"/api/users/{userId}/password/verify"})}),(0,s.jsx)(t.td,{children:"Verify current user password by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PATCH"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-updateuserpassword",children:"/api/users/{userId}/password"})}),(0,s.jsx)(t.td,{children:"Update user password by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-getuserhaspassword",children:"/api/users/{userId}/has-password"})}),(0,s.jsx)(t.td,{children:"Check if the user has a password by user ID."})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Make sure to verify the user's current password before updating the user's password."})}),"\n",(0,s.jsx)(t.h3,{id:"user-social-identities-management",children:"User social identities management"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"method"}),(0,s.jsx)(t.th,{children:"path"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"/api/users/{userId}"})}),(0,s.jsxs)(t.td,{children:["Get user details by user ID. The social identities can be found in the ",(0,s.jsx)(t.code,{children:"identities"})," field."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-createuseridentity",children:"/api/users/{userId}/identities"})}),(0,s.jsx)(t.td,{children:"Link a authenticated social identity to the user by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DELETE"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-deleteuseridentity",children:"/api/users/{userId}/identities"})}),(0,s.jsx)(t.td,{children:"Unlink a social identity from the user by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PUT"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-replaceuseridentity",children:"/api/users/{userId}/identities"})}),(0,s.jsx)(t.td,{children:"Directly update a social identity linked to the user by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-createconnectorauthorizationuri",children:"/api/connectors/{connectorId}/authorization-uri"})}),(0,s.jsx)(t.td,{children:"Get the authorization URI for a social identity provider. Use this URI to initiate a new social identity connection."})]})]})]}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    autoNumber\n    participant User as User\n    participant Client as Client app\n    participant App as server app\n    participant Logto as Logto\n    participant IdP as Social identity provider\n\n    User ->> Client: Access client app request to bind social identity\n    Client ->> App: Send request to bind social identity\n    App ->> Logto: POST /api/connectors/{connectorId}/authorization-uri\n    Logto ->> App: Authorization URI\n    App ->> Client: Return authorization URI\n    Client ->> IdP: Redirect to IdP authorization page\n    User --\x3e> IdP: Sign in to IdP\n    IdP ->> Client: Redirect to client app with authorization code\n    Client ->> Server: Link social identity request, forward IdP authorization response\n    Server ->> Logto: POST /api/users/{userId}/identities\n    Logto ->> IdP: Get user info from IdP using authorization code\n    IdP ->> Logto: Return user info"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"User accesses the client application and requests to bind a social identity."}),"\n",(0,s.jsx)(t.li,{children:"Client application sends a request to the server to bind a social identity."}),"\n",(0,s.jsxs)(t.li,{children:["Server sends a request to Logto to get the authorization URI for the social identity provider. You need to provide your own ",(0,s.jsx)(t.code,{children:"state"})," parameter and ",(0,s.jsx)(t.code,{children:"redirect_uri"})," in the request. Make sure to register the ",(0,s.jsx)(t.code,{children:"redirect_uri"})," in the social identity provider."]}),"\n",(0,s.jsx)(t.li,{children:"Logto returns the authorization URI to the server."}),"\n",(0,s.jsx)(t.li,{children:"Server returns the authorization URI to the client application."}),"\n",(0,s.jsx)(t.li,{children:"Client application redirects the user to the IdP authorization URI."}),"\n",(0,s.jsx)(t.li,{children:"User signs in to the IdP."}),"\n",(0,s.jsxs)(t.li,{children:["IdP redirects the user back to the client application using the ",(0,s.jsx)(t.code,{children:"redirect_uri"})," with the authorization code."]}),"\n",(0,s.jsxs)(t.li,{children:["Client application validates the ",(0,s.jsx)(t.code,{children:"state"})," and forwards the IdP authorization response to the server."]}),"\n",(0,s.jsx)(t.li,{children:"Server sends a request to Logto to link the social identity to the user."}),"\n",(0,s.jsx)(t.li,{children:"Logto gets the user information from the IdP using the authorization code."}),"\n",(0,s.jsx)(t.li,{children:"IdP returns the user information to Logto and Logto links the social identity to the user."}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"There a few limitations to consider when linking new social identities to a user:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Management API does not have any session context, any social connector that requires an active session to securely maintain the social authentication state cannot be linked via the Management API. Unsupported connectors include apple, standard OIDC and standard OAuth 2.0 connector."}),"\n",(0,s.jsxs)(t.li,{children:["For the same reason, Logto can not verify the ",(0,s.jsx)(t.code,{children:"state"})," parameter in the authorization response. Make sure to store the ",(0,s.jsx)(t.code,{children:"state"})," parameter in you client app and validate it when the authorization response is received."]}),"\n",(0,s.jsxs)(t.li,{children:["You need to register the ",(0,s.jsx)(t.code,{children:"redirect_uri"})," to the social identity provider in advance. Otherwise, the social IdP will not redirect the user back to your client app. Your social IdP must accept more than one callback ",(0,s.jsx)(t.code,{children:"redirect_uri"}),", one for user sign-in, one for your own profile binding page."]}),"\n"]})]}),"\n",(0,s.jsx)(t.h3,{id:"user-enterprise-identities-management",children:"User enterprise identities management"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"method"}),(0,s.jsx)(t.th,{children:"path"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"/api/users/{userId}?includeSsoIdentities=true"})}),(0,s.jsxs)(t.td,{children:["Get user details by user ID. The enterprise identities can be found in the ",(0,s.jsx)(t.code,{children:"ssoIdentities"})," field. Add the ",(0,s.jsx)(t.code,{children:"includeSsoIdentities=true"})," query parameter to the user details API to include them."]})]})})]}),"\n",(0,s.jsx)(t.p,{children:"Currently, the Management API does not support linking or unlinking enterprise identities to a user. You can only display the enterprise identities linked to a user."}),"\n",(0,s.jsx)(t.h3,{id:"user-mfa-settings-management",children:"User MFA settings management"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"method"}),(0,s.jsx)(t.th,{children:"path"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-listusermfaverifications",children:"/api/users/{userId}/mfa-verifications"})}),(0,s.jsx)(t.td,{children:"Get user MFA settings by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-createusermfaverification",children:"/api/users/{userId}/mfa-verifications"})}),(0,s.jsx)(t.td,{children:"Setup a user MFA verification by user ID."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DELETE"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-deleteusermfaverification",children:"/api/users/{userId}/mfa-verifications/{verificationId}"})}),(0,s.jsx)(t.td,{children:"Delete a user MFA verification by ID."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"user-account-deletion",children:"User account deletion"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"method"}),(0,s.jsx)(t.th,{children:"path"}),(0,s.jsx)(t.th,{children:"description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DELETE"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-deleteuser",children:"/api/users/{userId}"})}),(0,s.jsx)(t.td,{children:"Delete a user by user ID."})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},79621:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(58101);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);