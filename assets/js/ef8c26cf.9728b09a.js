"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[90420],{49613:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var r=o(59496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},86719:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=o(665),n=o(40151),a=(o(59496),o(49613)),i=["components"],s={sidebar_label:"Match your brand",sidebar_position:2},c="Match your brand",l={unversionedId:"docs/recipes/customize-sie/match-your-brand",id:"docs/recipes/customize-sie/match-your-brand",title:"Match your brand",description:'To customize the sign-in page for the core brand element, go to "Sign-in Experience > Brand > Brand Area" in the Logto Console. This section is straightforward. Change something to see what happens.',source:"@site/docs/docs/recipes/customize-sie/match-your-brand.md",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/match-your-brand",permalink:"/logto-docs/next/docs/recipes/customize-sie/match-your-brand",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/customize-sie/match-your-brand.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Match your brand",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure sign-in methods",permalink:"/logto-docs/next/docs/recipes/customize-sie/configure-sign-in-methods"},next:{title:"Custom CSS",permalink:"/logto-docs/next/docs/recipes/customize-sie/custom-css"}},d={},u=[{value:"App logo",id:"app-logo",level:2},{value:"Favicon",id:"favicon",level:2},{value:"Dark mode",id:"dark-mode",level:2}],p={toc:u};function m(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"match-your-brand"},"Match your brand"),(0,a.kt)("p",null,'To customize the sign-in page for the core brand element, go to "Sign-in Experience > Brand > Brand Area" in the Logto Console. This section is straightforward. Change something to see what happens.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SIE branding area",src:o(47706).Z,width:"3018",height:"1828"})),(0,a.kt)("h1",{id:"brand-color"},"Brand color",(0,a.kt)("a",{parentName:"h1",href:"https://docs.logto.io/docs/recipes/customize-sie/configure-branding#brand-color"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Brand color")," will affect the primary color of components, including but not limited to CTA buttons, links, etc. Feel free to replace the Logto purple-blue with your brand color."),(0,a.kt)("li",{parentName:"ul"},"If dark mode is enabled, you'll see an additional brand color input named ",(0,a.kt)("em",{parentName:"li"},"Brand color (Dark)"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You may notice the auto-generated Brand color (Dark) is slightly different compared to the original Brand color. Because Logto just took care of the visual difference between light and dark and computes a brand color exclusively for dark mode. If you are unsatisfied with the color, you\u2019re also free to customize it.")),(0,a.kt)("h2",{id:"app-logo"},"App logo"),(0,a.kt)("p",null,"The logo will be displayed on the sign-in homepage, sign-up home, loading page, and other interfaces with our expansion."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the Logto Cloud, upload the images to our service. In the Open-Source Console, paste the URL of the uploaded image in the input box."),(0,a.kt)("li",{parentName:"ul"},"There are some limitations for images: they must be under 500KB and in SVG, PNG, JPG, JPEG, or ICO format."),(0,a.kt)("li",{parentName:"ul"},"If you leave the logo field blank, the logo will not display in the interface."),(0,a.kt)("li",{parentName:"ul"},"You can also edit the App logo for dark mode if dark mode is enabled.")),(0,a.kt)("h2",{id:"favicon"},"Favicon"),(0,a.kt)("p",null,"A favicon is a small icon representing a website and is displayed in the browser tab, bookmarks, and other areas of the browser interface."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As the App logo, Favicon should be uploaded to Logto Cloud, and the URL pasted in the Open-Source Console."),(0,a.kt)("li",{parentName:"ul"},"The image must be under 500KB and in SVG, PNG, JPG, JPEG, or ICO format. Uploading a square image is recommended to ensure a good presentation effect."),(0,a.kt)("li",{parentName:"ul"},"Currently, only one universal favicon can be uploaded for different browser themes."),(0,a.kt)("li",{parentName:"ul"},"Besides, the browser title for different flows (Sign in/Sign up/Forgot password, etc.) is now used instead of a custom title.")),(0,a.kt)("h2",{id:"dark-mode"},"Dark mode"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Enable dark mode"),' switch controls if the UI has a "dark feeling" when Logto detects related system preference.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SIE branding dark mode",src:o(14305).Z,width:"3018",height:"1828"})))}m.isMDXComponent=!0},47706:function(e,t,o){t.Z=o.p+"assets/images/sie-branding-area-ae2ca16995c2d378abc9f06cc35ebce9.png"},14305:function(e,t,o){t.Z=o.p+"assets/images/sie-branding-dark-mode-c5f8e278bd21d235ee15662793ab309f.png"}}]);