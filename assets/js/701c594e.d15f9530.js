"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[73707],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),a=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=a(n),d=r,k=f["".concat(l,".").concat(d)]||f[d]||p[d]||s;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var a=2;a<s;a++)i[a]=n[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return p}});var o=n(665),r=n(40151),s=(n(59496),n(49613)),i=["components"],c={sidebar_position:1.1},l=void 0,a={unversionedId:"sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes.AccessToken",id:"version-1.x/sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes.AccessToken",title:"LogtoClientErrorTypes.AccessToken",description:"ENUM",source:"@site/versioned_docs/version-1.x/sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes.AccessToken.md",sourceDirName:"sdk/Swift/LogtoClient/Enums",slug:"/sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes.AccessToken",permalink:"/logto-docs/sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes.AccessToken",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes.AccessToken.md",tags:[],version:"1.x",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"sdkSidebar",previous:{title:"LogtoClientErrorTypes",permalink:"/logto-docs/sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes"},next:{title:"LogtoClientErrorTypes.JwkSet",permalink:"/logto-docs/sdk/Swift/LogtoClient/Enums/LogtoClientErrorTypes.JwkSet"}},u={},p=[{value:"Cases",id:"cases",level:2},{value:"<code>noRefreshTokenFound</code>",id:"norefreshtokenfound",level:3},{value:"<code>unableToFetchTokenByRefreshToken</code>",id:"unabletofetchtokenbyrefreshtoken",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"ENUM")),(0,s.kt)("h1",{id:"logtoclienterrortypesaccesstoken"},(0,s.kt)("inlineCode",{parentName:"h1"},"LogtoClientErrorTypes.AccessToken")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"public enum AccessToken\n")),(0,s.kt)("h2",{id:"cases"},"Cases"),(0,s.kt)("h3",{id:"norefreshtokenfound"},(0,s.kt)("inlineCode",{parentName:"h3"},"noRefreshTokenFound")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"case noRefreshTokenFound\n")),(0,s.kt)("p",null,"No Refresh Token presents in the Keychain."),(0,s.kt)("h3",{id:"unabletofetchtokenbyrefreshtoken"},(0,s.kt)("inlineCode",{parentName:"h3"},"unableToFetchTokenByRefreshToken")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"case unableToFetchTokenByRefreshToken\n")),(0,s.kt)("p",null,"Unable to use Refresh Token to fetch a new Access Token.\nThe Refresh Token could be expired or revoked."))}d.isMDXComponent=!0}}]);