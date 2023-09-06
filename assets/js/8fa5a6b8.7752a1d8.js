"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[27090],{49613:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var r=o(59496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),l=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),d=n,g=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return o?r.createElement(g,c(c({ref:t},u),{},{components:o})):r.createElement(g,c({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,c=new Array(i);c[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<i;l++)c[l]=o[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},87085:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var r=o(665),n=o(40151),i=(o(59496),o(49613)),c=["components"],s={},a=void 0,l={unversionedId:"sdk/Swift/Logto/Protocols/UserInfoProtocol",id:"version-1.x/sdk/Swift/Logto/Protocols/UserInfoProtocol",title:"UserInfoProtocol",description:"PROTOCOL",source:"@site/versioned_docs/version-1.x/sdk/Swift/Logto/Protocols/UserInfoProtocol.md",sourceDirName:"sdk/Swift/Logto/Protocols",slug:"/sdk/Swift/Logto/Protocols/UserInfoProtocol",permalink:"/logto-docs/sdk/Swift/Logto/Protocols/UserInfoProtocol",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/Swift/Logto/Protocols/UserInfoProtocol.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"NetworkSession",permalink:"/logto-docs/sdk/Swift/Logto/Protocols/NetworkSession"},next:{title:"URLSession",permalink:"/logto-docs/sdk/Swift/Logto/Extensions/URLSession"}},u={},f=[],p={toc:f};function d(e){var t=e.components,o=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PROTOCOL")),(0,i.kt)("h1",{id:"userinfoprotocol"},(0,i.kt)("inlineCode",{parentName:"h1"},"UserInfoProtocol")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol UserInfoProtocol: Codable, Equatable {\n    var name: String? { get }\n    var picture: String? { get }\n    var username: String? { get }\n    var email: String? { get }\n    var emailVerified: Bool? { get }\n    var phoneNumber: String? { get }\n    var phoneNumberVerified: Bool? { get }\n}\n")))}d.isMDXComponent=!0}}]);