"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[93159],{57378:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-management/personal-access-token","title":"Personal access token","description":"Personal access tokens (PATs) provide a secure way for users to grant access token without using their credentials and interactive sign-in. This is useful for CI/CD, scripts, or applications that need to access resources programmatically.","source":"@site/docs/user-management/personal-access-token.mdx","sourceDirName":"user-management","slug":"/user-management/personal-access-token","permalink":"/user-management/personal-access-token","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/user-management/personal-access-token.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Advanced user search","permalink":"/user-management/advanced-user-search"},"next":{"title":"User migration","permalink":"/user-management/user-migration"}}');var o=s(25105),a=s(79621);const r={sidebar_position:4},i="Personal access token",c={},l=[{value:"Managing personal access tokens",id:"managing-personal-access-tokens",level:2},{value:"Using Console",id:"using-console",level:3},{value:"Using Management API",id:"using-management-api",level:3},{value:"Use PATs to grant access tokens",id:"use-pats-to-grant-access-tokens",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Example token exchange",id:"example-token-exchange",level:3},{value:"Related resources",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{CloudLink:s,Url:t}=n;return s||p("CloudLink",!0),t||p("Url",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"personal-access-token",children:"Personal access token"})}),"\n",(0,o.jsxs)(n.p,{children:["Personal access tokens (PATs) provide a secure way for users to grant ",(0,o.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"access token"})," without using their credentials and interactive sign-in. This is useful for CI/CD, scripts, or applications that need to access resources programmatically."]}),"\n",(0,o.jsx)(n.h2,{id:"managing-personal-access-tokens",children:"Managing personal access tokens"}),"\n",(0,o.jsx)(n.h3,{id:"using-console",children:"Using Console"}),"\n",(0,o.jsxs)(n.p,{children:["You can manage personal access tokens in the User Details page of the ",(0,o.jsx)(s,{to:"/users",children:"Console > User management"}),'. In the card "Authentication", you can see the list of personal access tokens and create new ones.']}),"\n",(0,o.jsx)(n.h3,{id:"using-management-api",children:"Using Management API"}),"\n",(0,o.jsxs)(n.p,{children:["After setting up the ",(0,o.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/",children:"Management API"}),", you can use the ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listuserpersonalaccesstokens",children:"API endpoints"})," to create, list, and delete personal access tokens."]}),"\n",(0,o.jsx)(n.h2,{id:"use-pats-to-grant-access-tokens",children:"Use PATs to grant access tokens"}),"\n",(0,o.jsx)(n.p,{children:"After creating a PAT, you can use it to grant access tokens to your application by using the token exchange endpoint."}),"\n",(0,o.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,o.jsxs)(n.p,{children:["The application makes a ",(0,o.jsx)(n.a,{href:"https://auth.wiki/authorization-code-flow#token-exchange-request",children:"token exchange request"})," to the tenant's ",(0,o.jsx)(n.a,{href:"/integrate-logto/application-data-structure#token-endpoint",children:"token endpoint"})," with a special grant type using the HTTP POST method. The following parameters are included in the HTTP request entity-body using the ",(0,o.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," format."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"client_id"}),": REQUIRED. The client ID of the application."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"grant_type"}),": REQUIRED. The value of this parameter must be ",(0,o.jsx)(n.code,{children:"urn:ietf:params:oauth:grant-type:token-exchange"})," indicates that a token exchange is being performed."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"resource"}),": OPTIONAL. The resource indicator, the same as other token requests."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"scope"}),": OPTIONAL. The requested scopes, the same as other token requests."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"subject_token"}),": REQUIRED. The user's PAT."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"subject_token_type"}),": REQUIRED. The type of the security token provided in the ",(0,o.jsx)(n.code,{children:"subject_token"})," parameter. The value of this parameter must be ",(0,o.jsx)(n.code,{children:"urn:logto:token-type:personal_access_token"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,o.jsxs)(n.p,{children:["If the token exchange request is successful, the tenant's token endpoint returns an access token that represents the identity of the user. The response includes the following parameters in the HTTP response entity-body using the ",(0,o.jsx)(n.code,{children:"application/json"})," format."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"access_token"}),": REQUIRED. The access token of the user, which is the same as other token requests like ",(0,o.jsx)(n.code,{children:"authorization_code"})," or ",(0,o.jsx)(n.code,{children:"refresh_token"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"issued_token_type"}),": REQUIRED. The type of the issued token. The value of this parameter must be ",(0,o.jsx)(n.code,{children:"urn:ietf:params:oauth:token-type:access_token"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"token_type"}),": REQUIRED. The type of the token. The value of this parameter must be ",(0,o.jsx)(n.code,{children:"Bearer"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"expires_in"}),": REQUIRED. The lifetime in seconds of the access token."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"scope"}),": OPTIONAL. The scopes of the access token."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-token-exchange",children:"Example token exchange"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"POST /oidc/token HTTP/1.1\nHost: tenant.logto.app\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Basic <base64(client-id:client-secret)>\n\ngrant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Atoken-exchange\n&scope=profile\n&subject_token=pat_W51arOqe7nynW75nWhvYogyc\n&subject_token_type=urn%3Alogto%3Atoken-type%3Apersonal_access_token\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "access_token": "eyJhbGci...zg",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "profile"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The example access token payload:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "jti": "iFtbZBeh2M1cTTBuKbHk4",\n  "sub": "123",\n  "iss": "https://tenant.logto.app/oidc",\n  "exp": 1672531200,\n  "iat": 1672527600,\n  "scope": "profile",\n  "client_id": "client-id"\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,o.jsx)(t,{href:"https://blog.logto.io/pat-and-api-keys",children:(0,o.jsx)(n.p,{children:"Personal Access Tokens, Machine-to-Machine authentication, and API Keys definition and their\nreal-world scenarios"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(58101);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);