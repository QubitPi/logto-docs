"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[60627],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var s=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?s.createElement(m,o(o({ref:t},c),{},{components:n})):s.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30719:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var s=n(665),a=n(40151),r=(n(59496),n(49613)),o=["components"],i={sidebar_label:"Using Admin Console",sidebar_position:1},l="Manage users using Admin Console",u={unversionedId:"docs/recipes/manage-users/admin-console",id:"version-1.x/docs/recipes/manage-users/admin-console",title:"Manage users using Admin Console",description:"Browse and search users",source:"@site/versioned_docs/version-1.x/docs/recipes/manage-users/admin-console.md",sourceDirName:"docs/recipes/manage-users",slug:"/docs/recipes/manage-users/admin-console",permalink:"/logto-docs/docs/recipes/manage-users/admin-console",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/manage-users/admin-console.md",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_label:"Using Admin Console",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users",permalink:"/logto-docs/docs/recipes/manage-users/"},next:{title:"Management API",permalink:"/logto-docs/docs/recipes/manage-users/management-api"}},c={},d=[{value:"Browse and search users",id:"browse-and-search-users",level:2},{value:"Add user",id:"add-user",level:2},{value:"View and update user profile",id:"view-and-update-user-profile",level:2},{value:"View user activities",id:"view-user-activities",level:2},{value:"Suspend user",id:"suspend-user",level:2},{value:"Delete user",id:"delete-user",level:2},{value:"Reset user password",id:"reset-user-password",level:2},{value:"Mange roles of users",id:"mange-roles-of-users",level:2}],p={toc:d};function h(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-users-using-admin-console"},"Manage users using Admin Console"),(0,r.kt)("h2",{id:"browse-and-search-users"},"Browse and search users"),(0,r.kt)("p",null,'To access the user management functionality in the Admin Console, navigate to the "User Management" tab on the left-hand side of the screen. Once there, you will see a table view of all the users on the right-hand side of the screen.'),(0,r.kt)("p",null,"The table consists of three columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"User", which displays information about the user, such as their avatar, full name, username, phone number, and email'),(0,r.kt)("li",{parentName:"ul"},'"From application", which displays the name of the application that the user initially registered with'),(0,r.kt)("li",{parentName:"ul"},'"Latest sign-in", which displays the timestamp of the user\'s most recent sign-in.')),(0,r.kt)("p",null,'To search for a specific user, enter a keyword related to their name, username, email, or phone number in the search box above the user table. Once you have entered your keyword, click the "Search" button. The search is partial, meaning it will match any user property that contains the keyword you entered.'),(0,r.kt)("p",null,'After clicking the "Search" button, the table will display all users matching the keyword you entered. You can then view their information in the table, including their avatar, full name, username, phone number, email, the application they registered with, and the timestamp of their latest sign-in.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List and search users",src:n(40886).Z,width:"1440",height:"900"})),(0,r.kt)("h2",{id:"add-user"},"Add user"),(0,r.kt)("p",null,'Using the Admin Console, administrators can create new accounts for end-users. To do so, click on the "+ Add User" button in the screen\'s upper right corner. A modal window will appear, where you can enter the username and full name of the new user. Once you\'ve filled out the required fields, click on the "Add User" button to confirm.'),(0,r.kt)("p",null,"After the new user has been created, you can copy their ",(0,r.kt)("strong",{parentName:"p"},"username")," and ",(0,r.kt)("strong",{parentName:"p"},"initial password")," to send to them. This will allow them to log in to the system and start using it."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you fail to retain the password after closing the "Add User" modal, you will not be able to view it again. If you forget to keep it, you can ',(0,r.kt)("a",{parentName:"p",href:"#reset-user-password"},"reset the password"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add user",src:n(57813).Z,width:"960",height:"339"})),(0,r.kt)("h2",{id:"view-and-update-user-profile"},"View and update user profile"),(0,r.kt)("p",null,'To view the details of a user, simply click on the corresponding row in the user table. This will take you to the "',(0,r.kt)("strong",{parentName:"p"},"User details"),'" page where you can find the user\'s profile information, such as their avatar, full name, user ID, email, phone number, username, and social connections. The "Social connections" section displays a list of social connectors that the user has linked to their account. For example, if the user has signed in using their Facebook account, you will see a "Facebook" item in the list. You can refer to the ',(0,r.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/references/users/social-identities"},"identities")," documentation for more information."),(0,r.kt)("p",null,"Please note that while the full name, avatar image URL, and custom data can be edited, the social connections can be removed, and the other properties are read-only."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"It is important to confirm that the user has an alternative sign-in method before removing a social connection, such as another social connection, phone number, email, or username-with-password. If the user does not have any other sign-in method, they will not be able to access their account again once the social connection is removed.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Don\'t forget to click "Save changes" after updating.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User profile",src:n(62804).Z,width:"2417",height:"1840"})),(0,r.kt)("h2",{id:"view-user-activities"},"View user activities"),(0,r.kt)("p",null,'To view the recent activities of a user, navigate to the "User logs" sub-tab on the "User details" page. Here, you can find a table that displays the user\'s recent activities, including the action performed, the result of the action, the related application, and the time that the user acted.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User logs",src:n(13303).Z,width:"2424",height:"1098"})),(0,r.kt)("p",null,"Click the table row to see more details in the user log, e.g., IP address, user agent, raw data, etc."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User log details",src:n(93386).Z,width:"2000",height:"1242"})),(0,r.kt)("h2",{id:"suspend-user"},"Suspend user"),(0,r.kt)("p",null,'On the "User details" page, click "Three Dots" -> "Suspend User" button.'),(0,r.kt)("p",null,"Once a user is suspended, the user will be unable to sign in to your app and won't be able to obtain a new access token after the current one expires. Additionally, any API requests made by this user will fail."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Suspend user",src:n(12173).Z,width:"1216",height:"358"})),(0,r.kt)("p",null,'If you want to reactive this user, you can do so by clicking "Three Dots" -> "Reactivate User" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reactivate user",src:n(89353).Z,width:"1216",height:"358"})),(0,r.kt)("h2",{id:"delete-user"},"Delete user"),(0,r.kt)("p",null,'On the "User details" page, click "Three Dots" -> "Delete" button.'),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Be careful! The user data deletion CANNOT be undone.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete user",src:n(39691).Z,width:"1216",height:"358"})),(0,r.kt)("h2",{id:"reset-user-password"},"Reset user password"),(0,r.kt)("p",null,'On the "User details" page, click "Three Dots" -> "Reset password" button.'),(0,r.kt)("p",null,"After you reset the password, copy and send it to the end-user."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Once the "Reset password" modal is closed, you can no longer view the password.\nIf you forget to keep it, you can reset it again.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reset user password",src:n(43111).Z,width:"1216",height:"358"})),(0,r.kt)("h2",{id:"mange-roles-of-users"},"Mange roles of users"),(0,r.kt)("p",null,'In the "Roles" tab of the user details page, you can easily assign or remove roles to meet your desired outcome. Check RBAC - Manage a user\'s roles to learn more'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Manage roles of users",src:n(59778).Z,width:"2880",height:"1800"})))}h.isMDXComponent=!0},57813:function(e,t,n){t.Z=n.p+"assets/images/add-user-176bb9580338627692077998aa7eadd6.png"},39691:function(e,t,n){t.Z=n.p+"assets/images/delete-user-30c02844a292561918d23cd79fa4a183.png"},40886:function(e,t,n){t.Z=n.p+"assets/images/list-and-search-users-9aae4bebd084fcee9142f5c240d00645.png"},59778:function(e,t,n){t.Z=n.p+"assets/images/manage-roles-users-6ac09d6b4e9d0ca3b8809125d42b4223.png"},89353:function(e,t,n){t.Z=n.p+"assets/images/reactivate-user-0272321272dec5a4e89a06255fde556d.png"},43111:function(e,t,n){t.Z=n.p+"assets/images/reset-user-password-96ebac54d8be71496f8c7a7be54263ba.png"},12173:function(e,t,n){t.Z=n.p+"assets/images/suspend-user-c499e66d1355573ec9b9ad856498170f.png"},93386:function(e,t,n){t.Z=n.p+"assets/images/user-log-details-3e569aac7697d0b42da5bf175150bbe4.png"},13303:function(e,t,n){t.Z=n.p+"assets/images/user-logs-5b9c137e1b01fb01bbd5c04e65bca906.png"},62804:function(e,t,n){t.Z=n.p+"assets/images/user-profile-24d65cbfb0d9e47892c2f590a57854e3.png"}}]);