"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11165],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},21522:function(e,t,a){a.d(t,{Z:function(){return l}});a(59496);var n=a(45924),r="tabItem_ojA4",o=a(4637);function l(e){var t=e.children,a=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r,l),hidden:a,children:t})}},36884:function(e,t,a){a.d(t,{Z:function(){return x}});var n=a(59496),r=a(45924),o=a(32173),l=a(5734),i=a(27236),u=a(34857),s=a(55635);function c(e){return function(e){var t,a;return null!=(t=null==(a=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:c(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),u=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:r});return[(0,i._X)(u),(0,n.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function b(e){var t,a,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,b=p(e),f=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:b})})),h=f[0],g=f[1],v=m({queryString:u,groupId:c}),y=v[0],k=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),a=(0,s.Nk)(t),r=a[0],o=a[1],[r,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=w[0],N=w[1],T=function(){var e=null!=y?y:x;return d({value:e,tabValues:b})?e:null}();return(0,n.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:h,selectValue:(0,n.useCallback)((function(e){if(!d({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),N(e)}),[k,N,b]),tabValues:b}}var f=a(62607),h="tabList_by9y",g="tabItem_Dr3M",v=a(4637);function y(e){var t=e.className,a=e.block,n=e.selectedValue,l=e.selectValue,i=e.tabValues,u=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==n&&(s(t),l(r))},p=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;a=null!=(o=u[l])?o:u[u.length-1]}null==(t=a)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((function(e){var t=e.value,a=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return u.push(e)},onKeyDown:p,onClick:c},o,{className:(0,r.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":n===t}),children:null!=a?a:t}),t)}))})}function k(e){var t=e.lazy,a=e.children,r=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=b(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",h),children:[(0,v.jsx)(y,Object.assign({},e,t)),(0,v.jsx)(k,Object.assign({},e,t))]})}function x(e){var t=(0,f.Z)();return(0,v.jsx)(w,Object.assign({},e),String(t))}},43558:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(665),r=a(40151),o=(a(59496),a(49613)),l=a(21522),i=a(36884),u=["components"],s={sidebar_position:3},c="Database alteration",p={unversionedId:"docs/tutorials/using-cli/database-alteration",id:"docs/tutorials/using-cli/database-alteration",title:"Database alteration",description:"When developing new features, or refactoring existing ones, sometimes it is unavoidable to change database schemas.",source:"@site/docs/docs/tutorials/using-cli/database-alteration.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/database-alteration",permalink:"/logto-docs/next/docs/tutorials/using-cli/database-alteration",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/using-cli/database-alteration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Manage connectors",permalink:"/logto-docs/next/docs/tutorials/using-cli/manage-connectors"},next:{title:"Manage database configs",permalink:"/logto-docs/next/docs/tutorials/using-cli/manage-database-configs"}},d={},m=[{value:"Determine the version to deploy",id:"determine-the-version-to-deploy",level:2},{value:"Rollback alterations",id:"rollback-alterations",level:2},{value:"For contributors",id:"for-contributors",level:2}],b={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-alteration"},"Database alteration"),(0,o.kt)("p",null,"When developing new features, or refactoring existing ones, sometimes it is unavoidable to change database schemas."),(0,o.kt)("p",null,"Things may sound scary, as a user, usually you need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Double check the difference between two or more versions"),(0,o.kt)("li",{parentName:"ul"},"Alter database in a safe and backward-compatible way"),(0,o.kt)("li",{parentName:"ul"},"Get prepared for potential failure, say have a rollback script"),(0,o.kt)("li",{parentName:"ul"},"Gradually replace running Logto instances to the new verion")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hey, we are also developers, and we know it feels unhappy to do all these risky but mandatory stuff.")," So why don't we give them to someone that won't make mistake, like a CLI?"),(0,o.kt)("p",null,"From now on, your upgrade process will be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"logto db alt deploy")," from anywhere that can access to the database"),(0,o.kt)("li",{parentName:"ul"},"Gradually replace running Logto instances to the new verion")),(0,o.kt)("p",null,"Let's get started!"),(0,o.kt)("h2",{id:"determine-the-version-to-deploy"},"Determine the version to deploy"),(0,o.kt)("p",null,"If you have Logto CLI installed globally, it is ",(0,o.kt)("strong",{parentName:"p"},"highly recommended")," to upgrade the CLI to the latest version before deploying to get full available database alterations. Then run the command:"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db alteration deploy\n"))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db alteration deploy\n")))),(0,o.kt)("p",null,"If your database is up-to-date, you'll see the message below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[info] Found 0 alteration to deploy\n")),(0,o.kt)("p",null,"If you have undeployed alterations, the CLI will ask you to choose the desired version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? Choose the alteration target version (Use arrow keys)\n> 1.2.0\n  1.0.0\n")),(0,o.kt)("p",null,"Theoretically, the version to deploy should match the version of your Logto instance. In the meantime, you can use the command with a target version:"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db alteration deploy 1.2.0\n"))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db alteration deploy 1.2.0\n")))),(0,o.kt)("p",null,"It is helpful when you'd like to do the alteration in a non-TTY pipeline, just remember to pass the database URL using ",(0,o.kt)("inlineCode",{parentName:"p"},"--db-url"),". See ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/deployment"},"\ud83d\ude80 Deployment")," for setting up a alteration job in your cluster."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For each alteration script, the Logto CLI will run the whole script in a transaction. So if a deployment is failed, you can easily continue with the same command after the issue fixed.")),(0,o.kt)("h2",{id:"rollback-alterations"},"Rollback alterations"),(0,o.kt)("p",null,"Our alteration scripts also come with a ",(0,o.kt)("inlineCode",{parentName:"p"},"down")," script which can rollback the changes. To rollback the database status to a specific version, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0")," with your target version and run the command below:"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db alteration rollback 1.0.0\n"))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db alteration rollback 1.0.0\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can find all alteration scripts ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations"},"in this directory"),".")),(0,o.kt)("h2",{id:"for-contributors"},"For contributors"),(0,o.kt)("p",null,'The master branch of Logto repository may contain unpublished alteration scripts. You may need to manually deploy "next" alterations by running:'),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db alteration deploy next\n"))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db alteration deploy next\n")))),(0,o.kt)("p",null,"If you are developing a feature that requires database alterations, rather than updating the database schema, you also need to provide a script in the following foramt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"next-[timestamp]-what-to-do.ts\n")),(0,o.kt)("p",null,"Check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations"},"this directory")," for reference."))}f.isMDXComponent=!0}}]);