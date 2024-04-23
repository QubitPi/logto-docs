"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51679],{49613:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return k}});var i=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=o,d=u["".concat(l,".").concat(k)]||u[k]||p[k]||r;return n?i.createElement(d,a(a({ref:t},g),{},{components:n})):i.createElement(d,a({ref:t},g))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(665),o=n(40151),r=(n(59496),n(49613)),a=["components"],s={sidebar_position:12},l="\ud83d\udd11 Signing keys",c={unversionedId:"docs/recipes/signing-keys-rotation/README",id:"docs/recipes/signing-keys-rotation/README",title:"\ud83d\udd11 Signing keys",description:"What are signing keys in Logto?",source:"@site/docs/docs/recipes/signing-keys-rotation/README.md",sourceDirName:"docs/recipes/signing-keys-rotation",slug:"/docs/recipes/signing-keys-rotation/",permalink:"/next/docs/recipes/signing-keys-rotation/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/signing-keys-rotation/README.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"docsSidebar",previous:{title:"\ud83d\uddc4\ufe0f Enable central cache",permalink:"/next/docs/recipes/enable-central-cache/"},next:{title:"\ud83c\udff7\ufe0f Environment Tags",permalink:"/next/docs/recipes/environment-tags/"}},g={},p=[{value:"What are signing keys in Logto?",id:"what-are-signing-keys-in-logto",level:2},{value:"How it works?",id:"how-it-works",level:2},{value:"Signing keys rotation",id:"signing-keys-rotation",level:2}],u={toc:p};function k(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-signing-keys"},"\ud83d\udd11 Signing keys"),(0,r.kt)("h2",{id:"what-are-signing-keys-in-logto"},"What are signing keys in Logto?"),(0,r.kt)("p",null,"Logto OIDC signing keys, as known as \u201cOIDC private keys\u201d and \u201cOIDC cookie keys\u201d, are the signing keys used to encrypt JWT tokens (access tokens and ID tokens) and browser cookies in Logto sign-in sessions. These signing keys are generated when seeding Logto database (open-source) or creating a new tenant (Cloud)."),(0,r.kt)("p",null,"The signing keys are applied to the entire Logto instance (a Logto open-source instance or a Cloud tenant). Different Logto instances hold their own set of private keys and cookie keys, which can be managed through CLI (open-source), management APIs or Console UI (Cloud)."),(0,r.kt)("h2",{id:"how-it-works"},"How it works?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OIDC private key"),": When initializing a Logto instance, a pair of public key and private key are automatically generated and are registered in the underlying OIDC provider. Thereby, when Logto issues a new JWT token (access token or ID token), the token is signed with the private key. In the meantime, any client application that receives a JWT token can use the paired public key to verify the token signature, in order to ensure the token is not tampered by any third-party. The private key is protected on the Logto server. The public key, however, as the name suggests, are public to everyone, and can be accessed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"/oidc/jwks")," interface of the OIDC endpoint.\nA signing key algorithm can be specified when generating the private key, and Logto uses EC (Elliptic Curve) algorithm by default. The admin users can change the default algorithm to RSA (Rivest\u2013Shamir\u2013Adleman) by rotating the private keys.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OIDC cookie key"),": When user initiate a sign-in or sign-up flow, an \u201cOIDC session\u201d will be created on the server, as well as a set of browser cookies. With the help of the cookies, the users do not have to provide the sign-in credentials every time they launch Logto or other client applications protected by Logto. This feature is called \u201cauto consent\u201d in Logto terminology. The OIDC cookie key is used to sign these browser cookies.\nHowever, unlike the JWT tokens, the cookies are only signed and verified by Logto OIDC service itself, asymmetric cryptography measures are not required. Thus we don\u2019t have paired public keys for cookie signing keys, nor asymmetric encryption algorithms."))),(0,r.kt)("h2",{id:"signing-keys-rotation"},"Signing keys rotation"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are Logto open source user, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/using-cli/rotate-signing-keys/"},"this tutorial")," to generate new signing keys using CLI.")),(0,r.kt)("p",null,"Logto Cloud introduces a \u201cSigning Keys Rotation\u201d feature, which allows you to create a new OIDC private key and cookie key in your tenant."),(0,r.kt)("p",null,'Navigate to the tenant settings page and find the "Signing keys" section. From there, you can manage both OIDC private keys and OIDC cookie keys.'),(0,r.kt)("p",null,"In this section, you'll find a table that lists all the signing keys in use."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current"),(0,r.kt)("td",{parentName:"tr",align:null},"This indicates that this key is currently in active use within your applications and APIs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Previous"),(0,r.kt)("td",{parentName:"tr",align:null},"It refers to a key that was previously used but has been rotated out. Existing tokens with this signing key remain valid.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Console UI",src:n(2780).Z,width:"2336",height:"874"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can delete the previous key, but you cannot delete the current one.")),(0,r.kt)("p",null,'To rotate the signing key, go to the appropriate tab. Click the "Rotate private keys" or "Rotate cookie keys" button. When rotating private keys, you have the option to change the signing algorithm.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rotate keys dialog UI",src:n(62307).Z,width:"2640",height:"784"})),(0,r.kt)("p",null,"Please remember that rotation involves the following three actions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creating a new signing key: This will require all your applications and APIs to adopt the new signing key."),(0,r.kt)("li",{parentName:"ol"},'Rotating the current key: The existing key will be designated as "previous" after the rotation and will not be utilized by newly created applications and APIs. However, tokens signed with this key will still remain valid.'),(0,r.kt)("li",{parentName:"ol"},'Removing your previous key: Keys labeled as "previous" will be revoked and removed from the table.')))}k.isMDXComponent=!0},2780:function(e,t,n){t.Z=n.p+"assets/images/console-rotate-keys-991618289a34be5bd3b7ba7d8cb5d904.webp"},62307:function(e,t,n){t.Z=n.p+"assets/images/rotate-keys-66e729708a657330cabb804f0cf3202d.webp"}}]);