"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2546,62848],{49613:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(59496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,p=f["".concat(u,".").concat(m)]||f[m]||d[m]||o;return r?t.createElement(p,i(i({ref:n},s),{},{components:r})):t.createElement(p,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65520:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(59496),a=r(45924),o=r(41963),i=r(27670),l="admonition_zpDR",u="admonitionHeading_iYwg",c="admonitionIcon_GPu2",s="admonitionContent_AHia",d=r(4637);var f={note:{infimaClassName:"secondary",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 14 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 12 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 12 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 14 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,d.jsx)("svg",{viewBox:"0 0 16 16",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,d.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){var n,r=function(e){var n=t.Children.toArray(e),r=n.find((function(e){var n;return t.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),a=(0,d.jsx)(d.Fragment,{children:n.filter((function(e){return e!==r}))});return{mdxAdmonitionTitle:r,rest:a}}(e.children),a=r.mdxAdmonitionTitle,o=r.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:a,children:o})}function v(e){var n=p(e),r=n.children,t=n.type,i=n.title,v=n.icon,h=function(e){var n,r=null!=(n=m[e])?n:e;return f[r]||(console.warn('No admonition config found for admonition type "'+r+'". Using Info as fallback.'),f.info)}(t),b=null!=i?i:h.label,g=h.iconComponent,y=null!=v?v:(0,d.jsx)(g,{});return(0,d.jsxs)("div",{className:(0,a.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,l),children:[(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("span",{className:c,children:y}),b]}),(0,d.jsx)("div",{className:s,children:r})]})}},22042:function(e,n,r){r.d(n,{Z:function(){return i}});r(59496);var t=r(45924),a="tabItem_ojA4",o=r(4637);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a,i),hidden:r,children:n})}},77477:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(59496),a=r(45924),o=r(5734),i=r(84512),l=r(8888),u=r(35312);function c(e){return function(e){var n,r;return null!=(n=null==(r=t.Children.map(e,(function(e){if(!e||(0,t.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function s(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:c(r);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,l=(0,o.k6)(),u=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,i._X)(u),(0,t.useCallback)((function(e){if(u){var n=new URLSearchParams(l.location.search);n.set(u,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[u,l])]}function m(e){var n,r,a,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,m=e.groupId,p=s(e),v=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),h=v[0],b=v[1],g=f({queryString:c,groupId:m}),y=g[0],j=g[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,u.Nk)(n),a=r[0],o=r[1],[a,(0,t.useCallback)((function(e){n&&o.set(e)}),[n,o])]),w=x[0],O=x[1],C=function(){var e=null!=y?y:w;return d({value:e,tabValues:p})?e:null}();return(0,t.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:h,selectValue:(0,t.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),j(e),O(e)}),[j,O,p]),tabValues:p}}var p=r(14775),v=r(99468),h="tabList_by9y",b="tabItem_Dr3M",g=r(4637);function y(e){var n=e.className,r=e.block,t=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],u=(0,p.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=l.indexOf(n),a=i[r].value;a!==t&&(u(n),o(a))},s=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;r=null!=(o=l[i])?o:l[l.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:s,onClick:c},o,{className:(0,a.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,a=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function x(e){var n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",h),children:[(0,g.jsx)(y,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,v.Z)();return(0,g.jsx)(x,Object.assign({},e),String(n))}}}]);