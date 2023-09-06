"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[52062],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k}});var r=n(665),o=n(40151),s=(n(59496),n(49613)),a=["components"],i={toc:[]};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("table",null,(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("strong",null,"Property Name")),(0,s.kt)("td",null,(0,s.kt)("strong",null,"Property Description")),(0,s.kt)("td",null,(0,s.kt)("strong",null,"Required")))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,"API Name"),(0,s.kt)("td",null,"A user friendly name that can help you to identify the API resource."),(0,s.kt)("td",null,"true")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"API Identifier"),(0,s.kt)("td",null,"The unique ",(0,s.kt)("a",{href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"API Resource Indicator")," ","value, with restrictions listed above.",(0,s.kt)("br",null),"Logto will use it to identify the requested API resource and grant the authorization tokens accordingly."),(0,s.kt)("td",null,"true")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Token expiration time ",(0,s.kt)("i",null,"(in seconds)")),(0,s.kt)("td",null,"The expiration time set for ",(0,s.kt)("strong",null,"access_token"),". The default expiration value is"," ",(0,s.kt)("strong",null,"3600"),"."),(0,s.kt)("td",null,"false")),(0,s.kt)("tr",null,(0,s.kt)("td",null,"Default API"),(0,s.kt)("td",null,"Only zero or one default API can be set per tenant.",(0,s.kt)("br",null),"When a default API is designated, the resource parameter can be omitted in the auth request. Subsequent token exchanges will use that API as the audience by default, resulting in the issuance of JWTs."),(0,s.kt)("td",null,"false")))),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Requests with a expired ",(0,s.kt)("strong",null,"access_token")," should be restricted.\nThis is implemented to protect your API from a abused token.\nThe larger value is set, the longer will a issued ",(0,s.kt)("strong",null,"access_token")," survive, and the more vulnerable your API will be.")))}l.isMDXComponent=!0;var c=["components"],u={},d="\ud83d\udcc1 API Resource",p={unversionedId:"docs/references/resources/README",id:"version-1.x/docs/references/resources/README",title:"\ud83d\udcc1 API Resource",description:"Introduction",source:"@site/versioned_docs/version-1.x/docs/references/resources/README.md",sourceDirName:"docs/references/resources",slug:"/docs/references/resources/",permalink:"/logto-docs/docs/references/resources/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/references/resources/README.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/logto-docs/docs/references/core/configuration"},next:{title:"\ud83d\udcc3 SDK Convention",permalink:"/logto-docs/docs/references/sdk-convention/"}},h={},k=[{value:"Introduction",id:"introduction",level:2},{value:"What is an API Resource?",id:"what-is-an-api-resource",level:3},{value:"Why is API Resource needed?",id:"why-is-api-resource-needed",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Resource Indicator",id:"resource-indicator",level:3},{value:"Logto API Resource Schema",id:"logto-api-resource-schema",level:3},{value:"Default API",id:"default-api",level:3},{value:"Permissions and Role-Based Access Control",id:"permissions-and-role-based-access-control",level:3},{value:"How does it work",id:"how-does-it-work",level:2},{value:"1. Authentication request",id:"1-authentication-request",level:3},{value:"2. Token request",id:"2-token-request",level:3},{value:"3. Request to the API Resource",id:"3-request-to-the-api-resource",level:3}],m={toc:k};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-api-resource"},"\ud83d\udcc1 API Resource"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("h3",{id:"what-is-an-api-resource"},"What is an API Resource?"),(0,s.kt)("p",null,"API Resources, a.k.a. ",(0,s.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"Resource Indicators"),", indicate the target services or resources to be requested, usually, a URI format variable representing the resource's identity."),(0,s.kt)("h3",{id:"why-is-api-resource-needed"},"Why is API Resource needed?"),(0,s.kt)("p",null,"Logto, as an authorization server, is designed to serve a large number of services and APIs. By indicating which API Resource an end-user intends to access, Logto can issue a private encrypted authorization token and apply audience restrictions accordingly."),(0,s.kt)("p",null,"A guarded request with an authorization token provided will help you protect your private resources from being accessed and attacked by anonymous identities."),(0,s.kt)("h2",{id:"definitions"},"Definitions"),(0,s.kt)("h3",{id:"resource-indicator"},"Resource Indicator"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A resource value indicates the target service or resource to which access is being requested."),(0,s.kt)("li",{parentName:"ul"},"Its value ",(0,s.kt)("strong",{parentName:"li"},"MUST")," be an absolute URI."),(0,s.kt)("li",{parentName:"ul"},"The URI ",(0,s.kt)("strong",{parentName:"li"},"MUST NOT")," include a fragment component."),(0,s.kt)("li",{parentName:"ul"},"It ",(0,s.kt)("strong",{parentName:"li"},"SHOULD NOT")," include a query component."),(0,s.kt)("li",{parentName:"ul"},"You ",(0,s.kt)("strong",{parentName:"li"},"SHOULD")," provide the most specific URI it can for the complete API or set of resources it intends to access.")),(0,s.kt)("p",null,"In practice, a client may know a base URI or the application or resource to interact with. It would be appropriate to use it as the value of the resource parameter."),(0,s.kt)("p",null,"E.g., Logto management API base URI."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://tenantId.logto.app/api\n")),(0,s.kt)("p",null,"By default, this API Resource is pre-registered to your Logto service. All the management APIs under this URI are protected by Logto."),(0,s.kt)("h3",{id:"logto-api-resource-schema"},"Logto API Resource Schema"),(0,s.kt)(l,{mdxType:"APIResourceSchema"}),(0,s.kt)("h3",{id:"default-api"},"Default API"),(0,s.kt)("p",null,"Logto leverages ",(0,s.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8707"},"RFC 8707: Resource Indicators for OAuth 2.0")," to implement Role-Based Access Control (RBAC). While it is one of the features of OAuth 2.0, it is not yet widely supported."),(0,s.kt)("p",null,"In Logto's implementation, every user-defined permission (scope) must be associated with an API Resource. Otherwise, it will be treated as an OpenID Connect (or OAuth) permission. Generally, this doesn't affect your authorization process. However, when integrating with third-party apps that lack support for RFC 8707 (e.g., ChatGPT plugins), it can pose challenges since the initial authorization request may not include a ",(0,s.kt)("inlineCode",{parentName:"p"},"resource")," parameter. Consequently, Logto will always issue Opaque Access Tokens."),(0,s.kt)("p",null,"To address this issue, you can designate an API Resource as the tenant-level default resource. Once it is done:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Logto will use the default API Resource when no ",(0,s.kt)("inlineCode",{parentName:"li"},"resource")," parameter is present in the ",(0,s.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest"},"Authentication Request"),"."),(0,s.kt)("li",{parentName:"ul"},"If the ",(0,s.kt)("inlineCode",{parentName:"li"},"openid")," scope is included, an Opaque Access Token for the ",(0,s.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"Userinfo Endpoint")," will be issued when no ",(0,s.kt)("inlineCode",{parentName:"li"},"resource")," parameter is present in subsequent ",(0,s.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest"},"Token Requests"),"."),(0,s.kt)("li",{parentName:"ul"},"If the ",(0,s.kt)("inlineCode",{parentName:"li"},"openid")," scope is not included, a JWT Access Token for the default API Resource will be issued when no ",(0,s.kt)("inlineCode",{parentName:"li"},"resource")," parameter is present in subsequent ",(0,s.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest"},"Token Requests"),".")),(0,s.kt)("p",null,"By designating a default API Resource, you can ensure smooth integration with apps lacking RFC 8707 support while maintaining the appropriate access controls."),(0,s.kt)("h3",{id:"permissions-and-role-based-access-control"},"Permissions and Role-Based Access Control"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/recipes/rbac"},"\ud83d\udd10 Role-Based Access Control (RBAC)")," for details."),(0,s.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,s.kt)("h3",{id:"1-authentication-request"},"1. Authentication request"),(0,s.kt)("p",null,"Provide a list of resource indicator parameters in an ",(0,s.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest"},"Authentication Request"),". It will indicate all the protected resource(s) that the user may request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:3001/oidc/auth?response_type=code\n    &client_id=s6BhdRkqt3\n    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI\n    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications\n    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers\n")),(0,s.kt)("p",null,"Logto will validate and store these resource indicators. An ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization_code")," will be granted and returned with scopes restricted to these specified resources."),(0,s.kt)("h3",{id:"2-token-request"},"2. Token request"),(0,s.kt)("p",null,"When the resource parameter is present on a ",(0,s.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest"},"Token Request")," along with the ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization_code")," granted above, it will specify the target API Resource audience of the access token is requested."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"POST http://localhost:3001/oidc/token HTTP/1.1\n\n    grant_type=authorization_code\n    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ\n    resource=https%3A%2F%2Flogto.test.dev%2Fusers\n")),(0,s.kt)("p",null,"An encrypted access token with the audience restricted to this requested resource will be granted by Logto. The token carries all the data you will need to represent the authorization status of the request. E.g., the request user's identity and role, the token's audience and expiration time."),(0,s.kt)("h3",{id:"3-request-to-the-api-resource"},"3. Request to the API Resource"),(0,s.kt)("p",null,"The client user sent a request to the API Resource by presenting the given ",(0,s.kt)("inlineCode",{parentName:"p"},"access_token")," in the Authorization header."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:3001/api/users\n\nAuthorization: Bearer eyJhbGciOiJIUz...\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Please follow our ",(0,s.kt)("a",{parentName:"p",href:"/logto-docs/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect Your API")," guide to implement the token validation on your server-side APIs and make your resources well protected.")),(0,s.kt)("p",null,"Logto follows the standard token-based authorization protocol to protect your API Resources. To learn more about OAuth 2.0, please refer to OAuth 2.0's ",(0,s.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"},"official document"),"."))}f.isMDXComponent=!0}}]);