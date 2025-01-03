"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[92120],{91210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"logto-oss/using-cli/README","title":"Logto CLI","description":"\u4ecb\u7ecd CLI \u5de5\u5177\uff0c\u4ee5\u4fbf\u5728\u4e0d\u624b\u52a8\u5904\u7406\u90a3\u4e9b\u65e0\u804a\u7684\u6280\u672f\u95ee\u9898\u7684\u60c5\u51b5\u4e0b\u5b89\u88c5\u3001\u7ef4\u62a4\u548c\u66f4\u65b0\u4f60\u7684 Logto \u5b9e\u4f8b\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/README.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/","permalink":"/zh-CN/logto-oss/using-cli/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"description":"\u4ecb\u7ecd CLI \u5de5\u5177\uff0c\u4ee5\u4fbf\u5728\u4e0d\u624b\u52a8\u5904\u7406\u90a3\u4e9b\u65e0\u804a\u7684\u6280\u672f\u95ee\u9898\u7684\u60c5\u51b5\u4e0b\u5b89\u88c5\u3001\u7ef4\u62a4\u548c\u66f4\u65b0\u4f60\u7684 Logto \u5b9e\u4f8b\u3002","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u90e8\u7f72\u548c\u914d\u7f6e","permalink":"/zh-CN/logto-oss/deployment-and-configuration"},"next":{"title":"\u5b89\u88c5 Logto","permalink":"/zh-CN/logto-oss/using-cli/install-logto"}}');var l=t(25105),o=t(79621),a=t(3768),s=t(11043);const i={description:"\u4ecb\u7ecd CLI \u5de5\u5177\uff0c\u4ee5\u4fbf\u5728\u4e0d\u624b\u52a8\u5904\u7406\u90a3\u4e9b\u65e0\u804a\u7684\u6280\u672f\u95ee\u9898\u7684\u60c5\u51b5\u4e0b\u5b89\u88c5\u3001\u7ef4\u62a4\u548c\u66f4\u65b0\u4f60\u7684 Logto \u5b9e\u4f8b\u3002",sidebar_position:3},c="Logto CLI",u={},d=[{value:"\u5168\u5c40\u5b89\u88c5 CLI",id:"install-cli-globally",level:3},{value:"\u672c\u5730 CLI",id:"local-cli",level:3},{value:"\u4f7f\u7528 <code>npx</code> \u8c03\u7528 CLI",id:"use-cli-by-npx",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"logto-cli",children:"Logto CLI"})}),"\n",(0,l.jsx)(n.p,{children:"Logto CLI \u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u4fbf\u7684\u65b9\u6cd5\u6765\u5b89\u88c5\u3001\u7ef4\u62a4\u548c\u66f4\u65b0\u4f60\u7684 Logto \u5b9e\u4f8b\uff0c\u800c\u65e0\u9700\u624b\u52a8\u5904\u7406\u90a3\u4e9b\u65e0\u804a\u7684\u6280\u672f\u95ee\u9898\u3002"}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["\u76ee\u524d\u6211\u4eec\u4e0d\u63d0\u4f9b\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u56e0\u6b64\u73af\u5883\u4e2d\u9700\u8981 Node.js ",(0,l.jsx)(n.code,{children:"^18.12.0"}),"\u3002"]})}),"\n",(0,l.jsx)(n.h3,{id:"install-cli-globally",children:"\u5168\u5c40\u5b89\u88c5 CLI"}),"\n",(0,l.jsxs)(n.p,{children:["\u901a\u8fc7\u4f60\u559c\u6b22\u7684\u5305\u7ba1\u7406\u5668\u5b89\u88c5\uff0c\u4ee5\u4fbf\u5168\u5c40\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"logto"})," \u547d\u4ee4\uff1a"]}),"\n",(0,l.jsxs)(s.A,{children:[(0,l.jsx)(a.A,{value:"npm",label:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm i @logto/cli -g\n"})})}),(0,l.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn global add @logto/cli\n"})})}),(0,l.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm add -g @logto/cli\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u968f\u65f6\u6dfb\u52a0 ",(0,l.jsx)(n.code,{children:"--help"})," \u6765\u663e\u793a\u6bcf\u4e2a\u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"logto --help\nlogto db seed --help\n"})}),"\n",(0,l.jsx)(n.h3,{id:"local-cli",children:"\u672c\u5730 CLI"}),"\n",(0,l.jsxs)(n.p,{children:["\u81ea v1.0.0-beta.11 \u8d77\uff0c\u6bcf\u4e2a Logto \u7248\u672c\u90fd\u9644\u5e26\u4e86\u4e00\u4e2a\u5185\u7f6e\u7248\u672c\u7684 CLI\u3002\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728 ",(0,l.jsx)(n.code,{children:"~/logto"})," \u4e2d\u6709\u4e00\u4e2a Logto \u5b9e\u4f8b\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd ~/logto\nnpm run cli # \u8c03\u7528\u672c\u5730 CLI\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u9009\u9879\u6267\u884c\u547d\u4ee4\uff0c\u4f60\u9700\u8981\u5728 Logto CLI \u7684\u9009\u9879\u4e4b\u524d\u52a0\u4e0a ",(0,l.jsx)(n.code,{children:"--"}),"\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm run cli db seed -- --db-url postgresql://your-database-url\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"use-cli-by-npx",children:["\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"npx"})," \u8c03\u7528 CLI"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 Logto CLI \u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f ",(0,l.jsx)(n.code,{children:"npx"}),"\uff0c\u5b83\u53ef\u4ee5\u5728\u4e0d\u5b89\u88c5\u7684\u60c5\u51b5\u4e0b\u6267\u884c\u4e00\u4e2a\u5305\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u5bf9\u4e8e\u4e00\u6b21\u6027\u8c03\u7528\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db seed --db-url postgresql://your-database-url\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},3768:(e,n,t)=>{t.d(n,{A:()=>a});t(58101);var r=t(13526);const l={tabItem:"tabItem_y6LR"};var o=t(25105);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:t,children:n})}},11043:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(58101),l=t(13526),o=t(32571),a=t(55234),s=t(87394),i=t(87276),c=t(31637),u=t(16063);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const l=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(l.location.search);n.set(o,e),l.replace({...l.location,search:n.toString()})}),[o,l])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,o=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=g({queryString:t,groupId:l}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,o]=(0,u.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:l}),f=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(27034);const f={tabList:"tabList_swUI",tabItem:"tabItem_BXZ5"};var x=t(25105);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),l=s[t].value;l!==r&&(c(n),a(l))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function I(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,x.jsx)(I,{...e,children:d(e.children)},String(n))}},79621:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(58101);const l={},o=r.createContext(l);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);