"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[35021],{49613:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(59496);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?t.createElement(h,s(s({ref:a},p),{},{components:n})):t.createElement(h,s({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8162:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var t=n(665),r=n(40151),i=(n(59496),n(49613)),s=["components"],o={sidebar_label:"Advanced User Search",sidebar_position:3},l="Advanced user search",c={unversionedId:"docs/recipes/manage-users/advanced-user-search",id:"docs/recipes/manage-users/advanced-user-search",title:"Advanced user search",description:"Directly using Management API to leverage advanced user search conditions.",source:"@site/docs/docs/recipes/manage-users/advanced-user-search.md",sourceDirName:"docs/recipes/manage-users",slug:"/docs/recipes/manage-users/advanced-user-search",permalink:"/logto-docs/next/docs/recipes/manage-users/advanced-user-search",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/manage-users/advanced-user-search.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Advanced User Search",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Management API",permalink:"/logto-docs/next/docs/recipes/manage-users/management-api"},next:{title:"Common practice: you don't need a user table",permalink:"/logto-docs/next/docs/recipes/manage-users/you-dont-need-a-user-table"}},p={},m=[{value:"Perform a search request",id:"perform-a-search-request",level:2},{value:"Sample",id:"sample",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Basic fuzzy search",id:"basic-fuzzy-search",level:3},{value:"Specify fields",id:"specify-fields",level:3},{value:"Changing the joint mode",id:"changing-the-joint-mode",level:3},{value:"Exact match and case sensitivity",id:"exact-match-and-case-sensitivity",level:3},{value:"Regular expression (RegEx)",id:"regular-expression-regex",level:3},{value:"Match mode override",id:"match-mode-override",level:3}],d={toc:m};function u(e){var a=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-user-search"},"Advanced user search"),(0,i.kt)("p",null,"Directly using Management API to leverage advanced user search conditions."),(0,i.kt)("h2",{id:"perform-a-search-request"},"Perform a search request"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/users")," for searching users. Note it is a Management API that requires auth like others. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/"},"Interact with Management API")," for the interaction recipe."),(0,i.kt)("h3",{id:"sample"},"Sample"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://<your-logto-endpoint>/api/users?search=%25alice%25'\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response")),(0,i.kt)("p",null,"An array of ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": "MgUzzDsyX0iB",\n    "username": "alice_123",\n    "primaryEmail": "alice@some.email.domain",\n    "primaryPhone": null,\n    "name": null,\n    "avatar": null\n    // ...\n  }\n]\n')),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"A search request consists of the following parameter keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Search keywords: ",(0,i.kt)("inlineCode",{parentName:"li"},"search"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"search.*")),(0,i.kt)("li",{parentName:"ul"},"Search mode for fields: ",(0,i.kt)("inlineCode",{parentName:"li"},"mode"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mode.*")," (default value ",(0,i.kt)("inlineCode",{parentName:"li"},"'like'"),", available ",(0,i.kt)("inlineCode",{parentName:"li"},"['exact', 'like', 'similar_to', 'posix']"),")"),(0,i.kt)("li",{parentName:"ul"},"Joint mode: ",(0,i.kt)("inlineCode",{parentName:"li"},"joint")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"jointMode")," (default value ",(0,i.kt)("inlineCode",{parentName:"li"},"'or'"),", available ",(0,i.kt)("inlineCode",{parentName:"li"},"['or', 'and']"),")"),(0,i.kt)("li",{parentName:"ul"},"Is case-sensitive: ",(0,i.kt)("inlineCode",{parentName:"li"},"isCaseSensitive")," (default value ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,i.kt)("p",null,"This API has ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/#using-pagination"},"pagination")," enabled."),(0,i.kt)("p",null,"Let's go through them via some examples. All search params will be formatted as a constructor of ",(0,i.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Search mode is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"like")," by default, which uses ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Approximate_string_matching"},"approximate string matching"),' ("fuzzy search").')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'All fuzzy search modes only support matching one value per field. If you need to match multiple values for a single field, you should use the "exact" mode. See ',(0,i.kt)("a",{parentName:"p",href:"#exact-match-and-case-sensitivity"},"Exact match and case sensitivity")," for details.")),(0,i.kt)("h3",{id:"basic-fuzzy-search"},"Basic fuzzy search"),(0,i.kt)("p",null,"If you want to perform a fuzzy search over all available fields, just provide a value for key ",(0,i.kt)("inlineCode",{parentName:"p"},"search"),". It will use ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-LIKE"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"like")," operator")," under the hood:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([['search', '%foo%']]);\n")),(0,i.kt)("p",null,"This search will iterate over all available fields in a user search, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryEmail"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primaryPhone"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("h3",{id:"specify-fields"},"Specify fields"),(0,i.kt)("p",null,"What if you want to limit the search in ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," only? To search someone that includes ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in their name, just use the ",(0,i.kt)("inlineCode",{parentName:"p"},".")," symbol to specify the field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([['search.name', '%foo%']]);\n")),(0,i.kt)("p",null,"Remember nested fields are not supported, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"search.name.first")," will result an error."),(0,i.kt)("p",null,"You can also specify multiple fields at the same time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n]);\n")),(0,i.kt)("p",null,"Means to search users that have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in name ",(0,i.kt)("strong",{parentName:"p"},"OR")," their email ends with ",(0,i.kt)("inlineCode",{parentName:"p"},"@gmail.com"),"."),(0,i.kt)("h3",{id:"changing-the-joint-mode"},"Changing the joint mode"),(0,i.kt)("p",null,"If you want the API only returns the result that satisfies ALL the conditions, set the joint mode to ",(0,i.kt)("inlineCode",{parentName:"p"},"and"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([\n  ['search.name', '%foo%'],\n  ['search.primaryEmail', '%@gmail.com'],\n  ['joint', 'and'],\n]);\n")),(0,i.kt)("p",null,"Means to search users that have ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," in name ",(0,i.kt)("strong",{parentName:"p"},"AND")," their email ends with ",(0,i.kt)("inlineCode",{parentName:"p"},"@gmail.com"),"."),(0,i.kt)("h3",{id:"exact-match-and-case-sensitivity"},"Exact match and case sensitivity"),(0,i.kt)("p",null,'Say you want to search whose name is exact "Alice". You can set ',(0,i.kt)("inlineCode",{parentName:"p"},"mode.name")," to use exact match."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['mode.name', 'exact'],\n]);\n")),(0,i.kt)("p",null,"You may find it has the same effect when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"like")," mode (default) v.s. specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"exact"),". One difference is ",(0,i.kt)("inlineCode",{parentName:"p"},"exact")," mode uses ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," for comparing while ",(0,i.kt)("inlineCode",{parentName:"p"},"like")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"like")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ilike"),". Theoretically ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," should have a better performance."),(0,i.kt)("p",null,"Plus, in ",(0,i.kt)("inlineCode",{parentName:"p"},"exact")," mode, you can pass multiple values for matching, and they will be connected with ",(0,i.kt)("inlineCode",{parentName:"p"},"or"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n]);\n")),(0,i.kt)("p",null,'It will match the users with name "Alice" ',(0,i.kt)("strong",{parentName:"p"},"OR"),' "Bob".'),(0,i.kt)("p",null,"By default search is case-insensitive. To be more precise, set the search as case-sensitive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([\n  ['search.name', 'Alice'],\n  ['search.name', 'Bob'],\n  ['mode.name', 'exact'],\n  ['isCaseSensitive', 'true'],\n]);\n")),(0,i.kt)("p",null,"Note ",(0,i.kt)("inlineCode",{parentName:"p"},"isCaseSensitive")," is a global config. Thus EVERY field will follow it."),(0,i.kt)("h3",{id:"regular-expression-regex"},"Regular expression (RegEx)"),(0,i.kt)("p",null,"PostgreSQL supports two types of regular expressions, ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-SIMILARTO-REGEXP"},"similar to")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/functions-matching.html#FUNCTIONS-POSIX-REGEXP"},"posix"),". Set ",(0,i.kt)("inlineCode",{parentName:"p"},"mode")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"similar_to")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"posix")," to search by regular expressions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n]);\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),"\nMode ",(0,i.kt)("inlineCode",{parentName:"p"},"similar_to")," only works in case-sensitive searches.")),(0,i.kt)("h3",{id:"match-mode-override"},"Match mode override"),(0,i.kt)("p",null,"By default, all keywords will inherit the match mode from the general search:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Posix mode\n  ['joint', 'and'],\n]);\n")),(0,i.kt)("p",null,"To override for specific field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new URLSearchParams([\n  ['search', '^T.?m Scot+$'],\n  ['mode', 'posix'],\n  ['search.primaryEmail', 'tom%'], // Like mode\n  ['mode.primaryEmail', 'like'],\n  ['search.phone', '0{3,}'], // Posix mode\n  ['joint', 'and'],\n]);\n")))}u.isMDXComponent=!0}}]);