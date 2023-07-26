"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29514,69960],{5629:function(e,n,t){t.r(n),t.d(n,{default:function(){return Te}});var a=t(59496),i=t(45924),r=t(16120),o=t(41963),s=t(6472),l=t(3886),c=t(60794),d=t(77601),u=t(81504),m=t(27670),h=t(14775),b=t(67201);var p="backToTopButton_jo2v",v="backToTopButtonShow_O6ex",x=t(4637);function f(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),i=t[0],r=t[1],o=(0,a.useRef)(!1),s=(0,h.Ct)(),l=s.startScroll,c=s.cancelScroll;return(0,h.RF)((function(e,t){var a=e.scrollY,i=null==t?void 0:t.scrollY;i&&(o.current?o.current=!1:a>=i?(c(),r(!1)):a<n?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,b.S)((function(e){e.location.hash&&(o.current=!0,r(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,x.jsx)("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.k.common.backToTopButton,p,n&&v),type:"button",onClick:t})}var j=t(27879),g=t(5734),_=t(36756),C=t(35945),k=t(66582);function I(e){return(0,x.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}var S="collapseSidebarButton_o_Oe",N="collapseSidebarButtonIcon_seQv";function Z(e){var n=e.onClick;return(0,x.jsx)("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",S),onClick:n,children:(0,x.jsx)(I,{className:N})})}var T=t(36522),w=t(40151),y=t(23086),L=Symbol("EmptyContext"),A=a.createContext(L);function E(e){var n=e.children,t=(0,a.useState)(null),i=t[0],r=t[1],o=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:r}}),[i]);return(0,x.jsx)(A.Provider,{value:o,children:n})}var B=t(81170),M=t(54945),F=t(11871),H=t(99468),P=["item","onItemClick","activePath","level","index"];function O(e){var n=e.categoryLabel,t=e.onClick;return(0,x.jsx)("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:t})}function V(e){var n=e.item,t=e.onItemClick,r=e.activePath,s=e.level,c=e.index,d=(0,w.Z)(e,P),u=n.items,m=n.label,h=n.collapsible,b=n.className,p=n.href,v=(0,C.L)().docs.sidebar.autoCollapseCategories,f=function(e){var n=(0,H.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!n&&e.collapsible?(0,l.Wl)(e):void 0}),[e,n])}(n),j=(0,l._F)(n,r),g=(0,M.Mg)(p,r),_=(0,B.u)({initialState:function(){return!!h&&(!j&&n.collapsed)}}),k=_.collapsed,I=_.setCollapsed,S=function(){var e=(0,a.useContext)(A);if(e===L)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=S.expandedItem,Z=S.setExpandedItem,T=function(e){void 0===e&&(e=!k),Z(e?null:c),I(e)};return function(e){var n=e.isActive,t=e.collapsed,i=e.updateCollapsed,r=(0,y.D9)(n);(0,a.useEffect)((function(){n&&!r&&t&&i(!1)}),[n,r,t,i])}({isActive:j,collapsed:k,updateCollapsed:T}),(0,a.useEffect)((function(){h&&null!=N&&N!==c&&v&&I(!0)}),[h,N,c,I,v]),(0,x.jsxs)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":k},b),children:[(0,x.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,x.jsx)(F.Z,Object.assign({className:(0,i.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!p&&h,"menu__link--active":j}),onClick:h?function(e){null==t||t(n),p?T(!1):(e.preventDefault(),T())}:function(){null==t||t(n)},"aria-current":g?"page":void 0,"aria-expanded":h?!k:void 0,href:h?null!=f?f:"#":f},d,{children:m})),p&&h&&(0,x.jsx)(O,{categoryLabel:m,onClick:function(e){e.preventDefault(),T()}})]}),(0,x.jsx)(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,x.jsx)(J,{items:u,tabIndex:k?-1:0,onItemClick:t,activePath:r,level:s+1})})]})}var D=t(67821),R=t(30738),W="menuExternalLink_fpCs",q=["item","onItemClick","activePath","level","index"];function U(e){var n=e.item,t=e.onItemClick,a=e.activePath,r=e.level,s=(e.index,(0,w.Z)(e,q)),c=n.href,d=n.label,u=n.className,m=n.autoAddBaseUrl,h=(0,l._F)(n,a),b=(0,D.Z)(c);return(0,x.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),children:(0,x.jsxs)(F.Z,Object.assign({className:(0,i.Z)("menu__link",!b&&W,{"menu__link--active":h}),autoAddBaseUrl:m,"aria-current":h?"page":void 0,to:c},b&&{onClick:t?function(){return t(n)}:void 0},s,{children:[d,!b&&(0,x.jsx)(R.Z,{})]}))},d)}var z="menuHtmlItem_pp_3";function G(e){var n=e.item,t=e.level,a=e.index,r=n.value,s=n.defaultStyle,l=n.className;return(0,x.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(t),s&&[z,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:r}},a)}var Y=["item"];function Q(e){var n=e.item,t=(0,w.Z)(e,Y);switch(n.type){case"category":return(0,x.jsx)(V,Object.assign({item:n},t));case"html":return(0,x.jsx)(G,Object.assign({item:n},t));default:return(0,x.jsx)(U,Object.assign({item:n},t))}}var K=["items"];function X(e){var n=e.items,t=(0,w.Z)(e,K);return(0,x.jsx)(E,{children:n.map((function(e,n){return(0,x.jsx)(Q,Object.assign({item:e,index:n},t),n)}))})}var J=(0,a.memo)(X),$="menu_pUMF",ee="menuWithAnnouncementBar_VePY";function ne(e){var n=e.path,t=e.sidebar,r=e.className,s=function(){var e=(0,T.nT)().isActive,n=(0,a.useState)(e),t=n[0],i=n[1];return(0,h.RF)((function(n){var t=n.scrollY;e&&i(0===t)}),[e]),e&&t}();return(0,x.jsx)("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",$,s&&ee,r),children:(0,x.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(J,{items:t,activePath:n,level:1})})})}var te="sidebar_GoH3",ae="sidebarWithHideableNavbar_IsoX",ie="sidebarHidden_Z1rw",re="sidebarLogo_eqGG";function oe(e){var n=e.path,t=e.sidebar,a=e.onCollapse,r=e.isHidden,o=(0,C.L)(),s=o.navbar.hideOnScroll,l=o.docs.sidebar.hideable;return(0,x.jsxs)("div",{className:(0,i.Z)(te,s&&ae,r&&ie),children:[s&&(0,x.jsx)(k.Z,{tabIndex:-1,className:re}),(0,x.jsx)(ne,{path:n,sidebar:t}),l&&(0,x.jsx)(Z,{onClick:a})]})}var se=a.memo(oe),le=t(16656),ce=t(68911),de=function(e){var n=e.sidebar,t=e.path,a=(0,ce.e)();return(0,x.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(J,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ue(e){return(0,x.jsx)(le.Zo,{component:de,props:e})}var me=a.memo(ue);function he(e){var n=(0,_.i)(),t="desktop"===n||"ssr"===n,a="mobile"===n;return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)(se,Object.assign({},e)),a&&(0,x.jsx)(me,Object.assign({},e))]})}var be="expandButton_mu3V",pe="expandButtonIcon_cCT0";function ve(e){var n=e.toggleSidebar;return(0,x.jsx)("div",{className:be,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n,children:(0,x.jsx)(I,{className:pe})})}var xe={docSidebarContainer:"docSidebarContainer_omMU",docSidebarContainerHidden:"docSidebarContainerHidden_C1mL",sidebarViewport:"sidebarViewport_c4q0"};function fe(e){var n,t=e.children,i=(0,d.V)();return(0,x.jsx)(a.Fragment,{children:t},null!=(n=null==i?void 0:i.name)?n:"noSidebar")}function je(e){var n=e.sidebar,t=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,s=(0,g.TH)().pathname,l=(0,a.useState)(!1),c=l[0],d=l[1],u=(0,a.useCallback)((function(){c&&d(!1),!c&&(0,j.n)()&&d(!0),r((function(e){return!e}))}),[r,c]);return(0,x.jsx)("aside",{className:(0,i.Z)(o.k.docs.docSidebarContainer,xe.docSidebarContainer,t&&xe.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(xe.docSidebarContainer)&&t&&d(!0)},children:(0,x.jsx)(fe,{children:(0,x.jsxs)("div",{className:(0,i.Z)(xe.sidebarViewport,c&&xe.sidebarViewportHidden),children:[(0,x.jsx)(he,{sidebar:n,path:s,onCollapse:u,isHidden:c}),c&&(0,x.jsx)(ve,{toggleSidebar:u})]})})})}var ge={docMainContainer:"docMainContainer_yqQ2",docMainContainerEnhanced:"docMainContainerEnhanced_EBFV",docItemWrapperEnhanced:"docItemWrapperEnhanced_hq5H"};function _e(e){var n=e.hiddenSidebarContainer,t=e.children,a=(0,d.V)();return(0,x.jsx)("main",{className:(0,i.Z)(ge.docMainContainer,(n||!a)&&ge.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",ge.docItemWrapper,n&&ge.docItemWrapperEnhanced),children:t})})}var Ce="docPage_L4B6",ke="docsWrapper_B63C";function Ie(e){var n=e.children,t=(0,d.V)(),i=(0,a.useState)(!1),r=i[0],o=i[1];return(0,x.jsxs)(u.Z,{wrapperClassName:ke,children:[(0,x.jsx)(f,{}),(0,x.jsxs)("div",{className:Ce,children:[t&&(0,x.jsx)(je,{sidebar:t.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),(0,x.jsx)(_e,{hiddenSidebarContainer:r,children:n})]})]})}var Se=t(69960),Ne=t(30378);function Ze(e){var n=e.versionMetadata;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ne.Z,{version:n.version,tag:(0,s.os)(n.pluginId,n.version)}),(0,x.jsx)(r.d,{children:n.noIndex&&(0,x.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}function Te(e){var n=e.versionMetadata,t=(0,l.hI)(e);if(!t)return(0,x.jsx)(Se.default,{});var a=t.docElement,s=t.sidebarName,u=t.sidebarItems;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ze,Object.assign({},e)),(0,x.jsx)(r.FG,{className:(0,i.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className),children:(0,x.jsx)(c.q,{version:n,children:(0,x.jsx)(d.b,{name:s,items:u,children:(0,x.jsx)(Ie,{children:a})})})})]})}},69960:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});t(59496);var a=t(27670),i=t(16120),r=t(81504),o=t(4637);function s(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,o.jsx)(r.Z,{children:(0,o.jsx)("main",{className:"container margin-vert--xl",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)("h1",{className:"hero__title",children:(0,o.jsx)(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}},60794:function(e,n,t){t.d(n,{E:function(){return l},q:function(){return s}});var a=t(59496),i=t(23086),r=t(4637),o=a.createContext(null);function s(e){var n=e.children,t=e.version;return(0,r.jsx)(o.Provider,{value:t,children:n})}function l(){var e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocsVersionProvider");return e}}}]);