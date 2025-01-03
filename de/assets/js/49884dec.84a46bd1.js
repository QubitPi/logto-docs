"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64930],{48013:(M,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>k,frontMatter:()=>E,metadata:()=>i,toc:()=>L});const i=JSON.parse('{"id":"connectors/enterprise-connectors","title":"Enterprise-Connectors","description":"Die Single Sign-On (SSO)-L\xf6sung von Logto vereinfacht das Zugangsmanagement f\xfcr deine Unternehmenskunden. Enterprise SSO-Connectors sind entscheidend, um SSO f\xfcr deine verschiedenen Unternehmenskunden zu erm\xf6glichen.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/connectors/enterprise-connectors.mdx","sourceDirName":"connectors","slug":"/connectors/enterprise-connectors","permalink":"/de/connectors/enterprise-connectors","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/connectors/enterprise-connectors.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"enterprise-connectors","title":"Enterprise-Connectors","sidebar_label":"Enterprise-Connectors","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Soziale Connectors","permalink":"/de/connectors/social-connectors"},"next":{"title":"Connector-Datenstruktur","permalink":"/de/connectors/connector-data-structure"}}');var N,j=n(25105),D=n(79621),t=n(58101);function r(){return r=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(M[i]=n[i])}return M},r.apply(null,arguments)}const g=M=>{let{title:e,titleId:n,...i}=M;return t.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},i),e?t.createElement("title",{id:n},e):null,N||(N=t.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMDY5MzQgMTguNzA5N0M1LjU4NjY3IDE5LjAzMjMgNi40NDY2NyAxOS4zOTEgNy4zNTYgMTkuMzkxQzguMTg0IDE5LjM5MSA4Ljk1MzM0IDE5LjE1MSA5LjU5MDY3IDE4Ljc0MTdDOS41OTA2NyAxOC43NDE3IDkuNTkyIDE4Ljc0MTcgOS41OTMzNCAxOC43NDAzTDEyIDE3LjIzNjNWMjIuNjY3QzExLjYxODcgMjIuNjY3IDExLjIzNDcgMjIuNTYzIDEwLjkwMTMgMjIuMzU1TDUuMDY5MzQgMTguNzA5N1oiIGZpbGw9IiMyMjUwODYiLz4KPHBhdGggZD0iTTEwLjQ3MDcgMi4wMDkwMUwwLjQ3MDY2MiAxMy4yODlDLTAuMzAxMzM4IDE0LjE2MSAtMC4xMDAwMDUgMTUuNDc4MyAwLjkwMTMyOCAxNi4xMDM3QzAuOTAxMzI4IDE2LjEwMzcgNC42MDI2NiAxOC40MTcgNS4wNjkzMyAxOC43MDlDNS41ODY2NiAxOS4wMzE3IDYuNDQ2NjYgMTkuMzkwMyA3LjM1NTk5IDE5LjM5MDNDOC4xODM5OSAxOS4zOTAzIDguOTUzMzMgMTkuMTUwMyA5LjU5MDY2IDE4Ljc0MUM5LjU5MDY2IDE4Ljc0MSA5LjU5MTk5IDE4Ljc0MSA5LjU5MzMzIDE4LjczOTdMMTIgMTcuMjM1N0w2LjE4MTMzIDEzLjU5ODNMMTIuMDAxMyA3LjAzMzAxVjEuMzMzMDFDMTEuNDM2IDEuMzMzMDEgMTAuODcwNyAxLjU1ODM0IDEwLjQ3MDcgMi4wMDkwMVoiIGZpbGw9IiM2NkRERkYiLz4KPHBhdGggZD0iTTYuMTgxMjcgMTMuNTk5NUw2LjI1MDYxIDEzLjY0MjJMMTEuOTk5OSAxNy4yMzY4SDEyLjAwMTNWNy4wMzU1MUwxMS45OTk5IDcuMDM0MThMNi4xODEyNyAxMy41OTk1WiIgZmlsbD0iI0NCRjhGRiIvPgo8cGF0aCBkPSJNMjMuMDk4NyAxNi4xMDRDMjQuMSAxNS40Nzg3IDI0LjMwMTMgMTQuMTYxMyAyMy41MjkzIDEzLjI4OTNMMTYuOTY4IDUuODg4QzE2LjQzODcgNS42NDEzMyAxNS44NDUzIDUuNSAxNS4yMTczIDUuNUMxMy45ODQgNS41IDEyLjg4MTMgNi4wMzIgMTIuMTQ4IDYuODY4TDEyLjAwMjcgNy4wMzJMMTcuODIxMyAxMy41OTczTDEyLjAwMTMgMTcuMjM0N1YyMi42NjUzQzEyLjM4NCAyMi42NjUzIDEyLjc2NTMgMjIuNTYxMyAxMy4wOTg3IDIyLjM1MzNMMjMuMDk4NyAxNi4xMDI3VjE2LjEwNFoiIGZpbGw9IiMwNzQ3OTMiLz4KPHBhdGggZD0iTTEyLjAwMTMgMS4zMzMwMVY3LjAzMzAxTDEyLjE0NjcgNi44NjkwMUMxMi44OCA2LjAzMzAxIDEzLjk4MjcgNS41MDEwMSAxNS4yMTYgNS41MDEwMUMxNS44NDUzIDUuNTAxMDEgMTYuNDM3MyA1LjY0MzY3IDE2Ljk2NjcgNS44ODkwMUwxMy41MjggMi4wMTAzNEMxMy4xMjkzIDEuNTU5NjcgMTIuNTY0IDEuMzM0MzQgMTIgMS4zMzQzNEwxMi4wMDEzIDEuMzMzMDFaIiBmaWxsPSIjMDI5NEU0Ii8+CjxwYXRoIGQ9Ik0xNy44MiAxMy41OTkyTDEyLjAwMTMgNy4wMzUxNlYxNy4yMzUyTDE3LjgyIDEzLjU5OTJaIiBmaWxsPSIjOTZCQ0MyIi8+Cjwvc3ZnPgo=",width:24,height:24,preserveAspectRatio:"none"})))};var I;function s(){return s=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(M[i]=n[i])}return M},s.apply(null,arguments)}const u=M=>{let{title:e,titleId:n,...i}=M;return t.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},i),e?t.createElement("title",{id:n},e):null,I||(I=t.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy41MiAxMi4yNzI5QzIzLjUyIDExLjQyMiAyMy40NDM2IDEwLjYwMzggMjMuMzAxOCA5LjgxODM2SDEyVjE0LjQ2MDJIMTguNDU4MkMxOC4xOCAxNS45NjAyIDE3LjMzNDUgMTcuMjMxMSAxNi4wNjM2IDE4LjA4MlYyMS4wOTI5SDE5Ljk0MThDMjIuMjEwOSAxOS4wMDM4IDIzLjUyIDE1LjkyNzQgMjMuNTIgMTIuMjcyOVYxMi4yNzI5WiIgZmlsbD0iIzQyODVGNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDIzLjk5OTNDMTUuMjQgMjMuOTk5MyAxNy45NTY0IDIyLjkyNDggMTkuOTQxOCAyMS4wOTJMMTYuMDYzNiAxOC4wODExQzE0Ljk4OTEgMTguODAxMSAxMy42MTQ1IDE5LjIyNjYgMTIgMTkuMjI2NkM4Ljg3NDU1IDE5LjIyNjYgNi4yMjkwOSAxNy4xMTU3IDUuMjg1NDYgMTQuMjc5M0gxLjI3NjM3VjE3LjM4ODRDMy4yNTA5MSAyMS4zMTAyIDcuMzA5MDkgMjMuOTk5MyAxMiAyMy45OTkzVjIzLjk5OTNaIiBmaWxsPSIjMzRBODUzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4yODU0NSAxNC4yODA0QzUuMDQ1NDUgMTMuNTYwNCA0LjkwOTA5IDEyLjc5MTMgNC45MDkwOSAxMi4wMDA0QzQuOTA5MDkgMTEuMjA5NSA1LjA0NTQ1IDEwLjQ0MDQgNS4yODU0NSA5LjcyMDQyVjYuNjExMzNIMS4yNzYzNkMwLjQ2MzYzNiA4LjIzMTMzIDAgMTAuMDY0MSAwIDEyLjAwMDRDMCAxMy45MzY4IDAuNDYzNjM2IDE1Ljc2OTUgMS4yNzYzNiAxNy4zODk1TDUuMjg1NDUgMTQuMjgwNFYxNC4yODA0WiIgZmlsbD0iI0ZCQkMwNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDQuNzcyNzNDMTMuNzYxOCA0Ljc3MjczIDE1LjM0MzYgNS4zNzgxOCAxNi41ODczIDYuNTY3MjdMMjAuMDI5MSAzLjEyNTQ1QzE3Ljk1MDkgMS4xODkwOSAxNS4yMzQ1IDAgMTIgMEM3LjMwOTA5IDAgMy4yNTA5MSAyLjY4OTA5IDEuMjc2MzcgNi42MTA5MUw1LjI4NTQ2IDkuNzJDNi4yMjkwOSA2Ljg4MzY0IDguODc0NTUgNC43NzI3MyAxMiA0Ljc3MjczVjQuNzcyNzNaIiBmaWxsPSIjRUE0MzM1Ii8+Cjwvc3ZnPgo=",width:24,height:24,preserveAspectRatio:"none"})))};var T;function z(){return z=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(M[i]=n[i])}return M},z.apply(null,arguments)}const c=M=>{let{title:e,titleId:n,...i}=M;return t.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},i),e?t.createElement("title",{id:n},e):null,T||(T=t.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzk5MTRfMjA2MTMpIj4KPHBhdGggZD0iTTI0IDEzLjc5OTJMMjMuNCA4LjM5OTIyTDIxLjY2IDkuNTM5MjJDMjAuMDQgOC41MTkyMiAxOCA3Ljc5OTIyIDE1LjcyIDcuNDM5MjJDMTUuNzIgNy40MzkyMiAxNC41OCA3LjE5OTIyIDEzLjA4IDcuMTk5MjJDMTEuNTggNy4xOTkyMiAxMC4yIDcuMzc5MjIgMTAuMiA3LjM3OTIyQzQuMzggOC4wOTkyMiAwIDExLjM5OTIgMCAxNS4zNTkyQzAgMTkuNDM5MiA0LjUgMjIuNzk5MiAxMS40IDIzLjM5OTJWMjEuMDU5MkM2LjY2IDIwLjM5OTIgMy42NiAxOC4xNzkyIDMuNjYgMTUuMzU5MkMzLjY2IDEyLjcxOTIgNi40MiAxMC40OTkyIDEwLjIgOS43NzkyMkMxMC4yIDkuNzc5MjIgMTMuMTQgOS4xMTkyMiAxNS43MiA5Ljg5OTIyQzE2Ljk4IDEwLjE5OTIgMTguMTIgMTAuNjE5MiAxOS4wOCAxMS4yMTkyTDE2LjggMTIuNTk5MkwyNCAxMy43OTkyWiIgZmlsbD0iIzlFOUU5RSIvPgo8cGF0aCBkPSJNMTEuMzk5OSAyLjM5OTYxVjIzLjM5OTZMMTQuOTk5OSAyMS41OTk2VjAuNTk5NjA5TDExLjM5OTkgMi4zOTk2MVoiIGZpbGw9IiNGRjk4MDAiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF85OTE0XzIwNjEzIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=",width:24,height:24,preserveAspectRatio:"none"})))};var o;function A(){return A=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(M[i]=n[i])}return M},A.apply(null,arguments)}const y=M=>{let{title:e,titleId:n,...i}=M;return t.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},i),e?t.createElement("title",{id:n},e):null,o||(o=t.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzk5MTRfMjA2MzApIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4yMDIxIDAuMTcwNDI3TDEyLjcwOTkgNi4yNDkzNEMxMi40NzcgNi4yMjExIDEyLjI0MTEgNi4yMDU5NyAxMiA2LjIwNTk3QzExLjcwMDUgNi4yMDU5NyAxMS40MDYxIDYuMjI4MTYgMTEuMTE4NiA2LjI3MjUzTDEwLjgzODMgMy4zMjQ4NUMxMC44MjkyIDMuMjMzMDggMTAuOTAyOCAzLjE1MjQgMTAuOTk1NiAzLjE1MzQxSDExLjQ5ODhMMTEuMjU1OCAwLjE3MDQyN0MxMS4yNDc3IDAuMDc4NjU4NyAxMS4zMjAzIDAgMTEuNDEyMSAwSDEzLjA0MzdDMTMuMTM1NSAwIDEzLjIwNzEgMC4wNzg2NTg3IDEzLjIwMDEgMC4xNzA0MjdIMTMuMjAyMVpNOS4wODM2IDAuNDcxOTUzQzkuMDU5NCAwLjM4MzIwOSA4Ljk2NDYgMC4zMzQ4MDQgOC44Nzc4NyAwLjM2NjA2Nkw3LjM0NCAwLjkyNDc0N0M3LjI1NzI3IDAuOTU2MDA3IDcuMjE2OTMgMS4wNTQ4MyA3LjI1NTI3IDEuMTM4NTNMOC41MDI3MyAzLjg1ODMxTDguMDI4NzMgNC4wMjk3NUM3Ljk0MiA0LjA2MTAxIDcuODk5NjcgNC4xNjA4NSA3Ljk0IDQuMjQ1NTVMOS4yMTA2NyA2LjkxOTkzQzkuNjcxNTMgNi42NjU4MyAxMC4xNzA3IDYuNDc1MjMgMTAuNjk4MSA2LjM1NDIxTDkuMDgzNiAwLjQ3MTk1M1pNNS4zMTgwMiAyLjE2NTEzTDguODQ3NiA3LjEzNzhDOC4zOTk4NyA3LjQyOTIgNy45OTU0NyA3Ljc4MDEzIDcuNjQ0NTMgOC4xODA1M0w1LjUzMzgzIDYuMTAxMDlDNS40NjcyNyA2LjAzNTU1IDUuNDcyMzEgNS45Mjc2NSA1LjU0MjkxIDUuODY4MTVMNS45MjkxNCA1LjU0NTQ0TDMuODI3NTMgMy40MTY2MUMzLjc2Mjk5IDMuMzUxMDcgMy43NjgwMyAzLjI0NTE4IDMuODM4NjIgMy4xODU2OEw1LjA4ODA5IDIuMTM1ODlDNS4xNTg2OSAyLjA3NjM5IDUuMjY0NTcgMi4wOTA1MSA1LjMxODAyIDIuMTY1MTNaTTIuMzU3MjEgNS4wNDQyNUMyLjI4MTU3IDQuOTkyODEgMi4xNzc3MSA1LjAxNjAxIDIuMTMxMzEgNS4wOTQ2N0wxLjMxNTQ4IDYuNTA4NTFDMS4yNjkwOSA2LjU4ODE3IDEuMzAxMzYgNi42OSAxLjM4NDA1IDYuNzI5MzNMNC4wODc3MSA4LjAxMTA3TDMuODM0NTkgOC40NDY3M0MzLjc4ODIgOC41Mjc0IDMuODIwNDcgOC42MzAyNyAzLjkwNTE4IDguNjY4Nkw2LjU5ODc1IDkuODk5OTNDNi43OTQ0IDkuMzk4NzMgNy4wNTQ2IDguOTMxOCA3LjM3MzI3IDguNTEwMjdMMi4zNTcyMSA1LjA0NDI1Wk0wLjM2NTUxOSA4Ljg4NjRDMC4zODE2NTQgOC43OTU2NyAwLjQ3MDM5OCA4LjczODIgMC41NjAxNSA4Ljc2MTRMNi40NTk1OSAxMC4zMDIzQzYuMzA3MzEgMTAuODAwNSA2LjIyMTU5IDExLjMyNzkgNi4yMDk0OSAxMS44NzM1TDMuMjU1NzQgMTEuNjM2NUMzLjE2Mjk2IDExLjYyOTQgMy4wOTc0MSAxMS41NDM3IDMuMTEzNTUgMTEuNDUxOUwzLjIwMjI5IDEwLjk1NjdMMC4yMjQzMzYgMTAuNjc3NEMwLjEzMjU2NyAxMC42NjgzIDAuMDY4MDI2IDEwLjU4MzcgMC4wODQxNjEzIDEwLjQ5MjlMMC4zNjY1MjcgOC44ODU0TDAuMzY1NTE5IDguODg2NFpNMC4xNDI2NTEgMTIuODcwOEMwLjA1MDg4MjIgMTIuODc5OSAtMC4wMTM2NTg3IDEyLjk2NDYgMC4wMDI0NzY1OCAxMy4wNTUzTDAuMjg1ODUxIDE0LjY2MjhDMC4zMDE5ODcgMTQuNzUzNSAwLjM5MTczOSAxNC44MTExIDAuNDgwNDgyIDE0Ljc4NzlMMy4zNzQ3MyAxNC4wMzE1TDMuNDYxNDYgMTQuNTI2N0MzLjQ3NzYgMTQuNjE4NCAzLjU2OTM3IDE0LjY3NTkgMy42NTgxMSAxNC42NTA3TDYuNTEzMDMgMTMuODYyMUM2LjM0NDYyIDEzLjM2NjkgNi4yNDA3NSAxMi44NDM1IDYuMjEzNTMgMTIuMjk5TDAuMTQyNjUxIDEyLjg3MDhaTTEuMDg2NTYgMTcuMDk1MkMxLjA0MDE3IDE3LjAxNTUgMS4wNzI0NCAxNi45MTM3IDEuMTU1MTMgMTYuODc0M0w2LjY2MzI5IDE0LjI2MjVDNi44NzMwNyAxNC43NTY2IDcuMTUwNCAxNS4yMTU0IDcuNDgyMTMgMTUuNjI2OUw1LjA2NzkzIDE3LjM0NDNDNC45OTIyOSAxNy4zOTg3IDQuODg2NCAxNy4zNzQ1IDQuODQxMDIgMTcuMjk0OUw0LjU4OTkyIDE2Ljg1ODJMMi4xMjkzIDE4LjU1OTVDMi4wNTM2NyAxOC42MTE5IDEuOTQ5NzkgMTguNTg4NyAxLjkwMzQxIDE4LjUwOUwxLjA4NjU2IDE3LjA5NTJaTTcuNzYwNDcgMTUuOTQ5NkwzLjQ3NTU4IDIwLjI4OTlDMy40MTEwNCAyMC4zNTU1IDMuNDE2MDggMjAuNDYxMyAzLjQ4NjY3IDIwLjUyMDlMNC43MzcxNSAyMS41Njk3QzQuODA3NzUgMjEuNjI5MSA0LjkxMzYzIDIxLjYxNSA0Ljk2NzA4IDIxLjU0MDRMNi42OTc2IDE5LjA5OTlMNy4wODI4IDE5LjQyNDdDNy4xNTM0IDE5LjQ4NDIgNy4yNjEzMyAxOS40NzAxIDcuMzEzNzMgMTkuMzkzNEw4Ljk5MzggMTYuOTU2QzguNTM4IDE2LjY3NzcgOC4xMjM1MyAxNi4zMzc4IDcuNzYwNDcgMTUuOTQ5NlpNNi45MTQ0IDIyLjkxNzlDNi44Mjc2NyAyMi44ODY3IDYuNzg3MzMgMjIuNzg3OSA2LjgyNTY3IDIyLjcwNDFMOS4zNjY5MyAxNy4xNTk3QzkuODM0ODcgMTcuMzk4NyAxMC4zMzkxIDE3LjU3NzIgMTAuODY5NSAxNy42ODIxTDEwLjEyNDMgMjAuNTQ4MUMxMC4xMDExIDIwLjYzNzkgMTAuMDA1MyAyMC42ODgzIDkuOTE4NiAyMC42NTZMOS40NDU2IDIwLjQ4MjVMOC42NTMgMjMuMzY3N0M4LjYyODczIDIzLjQ1NjUgOC41MzQgMjMuNTA0OSA4LjQ0NzI3IDIzLjQ3MzZMNi45MTM0IDIyLjkxNTlMNi45MTQ0IDIyLjkxNzlaTTExLjI5MTEgMTcuNzQ5N0wxMC43OTg5IDIzLjgyOTZDMTAuNzkxOSAyMy45MjEzIDEwLjg2MzUgMjQgMTAuOTU1MyAyNEgxMi41ODY5QzEyLjY3ODcgMjQgMTIuNzUxMyAyMy45MjEzIDEyLjc0MzMgMjMuODI5NkwxMi41MDAyIDIwLjg0NzZIMTMuMDAzNEMxMy4wOTYyIDIwLjg0ODYgMTMuMTY4OCAyMC43Njg5IDEzLjE2MDcgMjAuNjc2MUwxMi44ODA0IDE3LjcyODVDMTIuNTkzIDE3Ljc3MTkgMTIuMjk4NSAxNy43OTUxIDExLjk5OSAxNy43OTUxQzExLjc1OSAxNy43OTUxIDExLjUyMyAxNy43Nzg5IDExLjI5MDEgMTcuNzUwN0wxMS4yOTExIDE3Ljc0OTdaTTE3LjE3NTQgMS4yOTQ4NUMxNy4yMTM3IDEuMjExMTQgMTcuMTcyMyAxLjExMzMzIDE3LjA4NjcgMS4wODEwNUwxNS41NTI4IDAuNTIzMzgzQzE1LjQ2NzEgMC40OTIxMjEgMTUuMzcxMyAwLjU0MDUyNyAxNS4zNDcxIDAuNjI5MjdMMTQuNTU0NCAzLjUxNDQzTDE0LjA4MTUgMy4zNDA5OEMxMy45OTQ3IDMuMzA4NzEgMTMuODk4OSAzLjM1OTEzIDEzLjg3NTcgMy40NDg4OUwxMy4xMzA1IDYuMzE0ODlDMTMuNjYwOSA2LjQxOTc3IDE0LjE2NTEgNi41OTgyNiAxNC42MzMxIDYuODM3MjdMMTcuMTc1NCAxLjI5MzgzVjEuMjk0ODVaTTIwLjUyNDUgMy43MTEwOEwxNi4yMzk1IDguMDUxNEMxNS44Nzc1IDcuNjYyMiAxNS40NjMxIDcuMzIyMzMgMTUuMDA2MiA3LjA0NEwxNi42ODYzIDQuNjA2NThDMTYuNzM4NyA0LjUzMDk1IDE2Ljg0NjYgNC41MTU4MiAxNi45MTcyIDQuNTc2MzNMMTcuMzAyNSA0LjkwMTA1TDE5LjAzMjkgMi40NjA2MUMxOS4wODY0IDIuMzg1OTggMTkuMTkyMyAyLjM3MTg3IDE5LjI2MjkgMi40MzEzNkwyMC41MTMzIDMuNDgwMTVDMjAuNTgzOSAzLjUzOTY1IDIwLjU4OSAzLjY0NjU0IDIwLjUyNDUgMy43MTEwOFpNMjIuODQ0OSA3LjEyNjY3QzIyLjkyODYgNy4wODczMyAyMi45NTk5IDYuOTg1NTMgMjIuOTEzNSA2LjkwNTg3TDIyLjA5NjYgNS40OTE5OUMyMi4wNTAzIDUuNDEyMzMgMjEuOTQ2MyA1LjM4OTEzIDIxLjg3MDcgNS40NDE1N0wxOS40MTAxIDcuMTQyOEwxOS4xNTkgNi43MDYxM0MxOS4xMTI2IDYuNjI1NDkgMTkuMDA2NyA2LjYwMjI5IDE4LjkzMjEgNi42NTY3NUwxNi41MTc5IDguMzc0MTNDMTYuODQ5NyA4Ljc4NjYgMTcuMTI3IDkuMjQ0NCAxNy4zMzY3IDkuNzM4NTNMMjIuODQ0OSA3LjEyNjY3Wk0yMy43MTQyIDkuMzM5MkwyMy45OTc1IDEwLjk0NjdDMjQuMDEzNyAxMS4wMzg1IDIzLjk0ODEgMTEuMTIzMSAyMy44NTc0IDExLjEzMTJMMTcuNzg2NSAxMS43MDFDMTcuNzU5MyAxMS4xNTY1IDE3LjY1NTQgMTAuNjMzMSAxNy40ODcgMTAuMTM3OUwyMC4zNDE5IDkuMzUwMzNDMjAuNDMwNyA5LjMyNTA3IDIwLjUyMjQgOS4zODM2IDIwLjUzODUgOS40NzQzM0wyMC42MjQzIDkuOTY5NDdMMjMuNTE4NSA5LjIxMzEzQzIzLjYwNzMgOS4xODk5MyAyMy42OTcxIDkuMjQ3NDcgMjMuNzEzMiA5LjMzODJMMjMuNzE0MiA5LjMzOTJaTTIzLjQzOTkgMTUuMjM5NkMyMy41Mjg2IDE1LjI2MjggMjMuNjE4NCAxNS4yMDUzIDIzLjYzNDUgMTUuMTE0NkwyMy45MTY5IDEzLjUwNzFDMjMuOTMzIDEzLjQxNjMgMjMuODY3NSAxMy4zMzE3IDIzLjc3NjcgMTMuMzIyNkwyMC43OTg3IDEzLjA0MzNMMjAuODg3NSAxMi41NDgxQzIwLjkwMzYgMTIuNDU2MyAyMC44MzgxIDEyLjM3MTYgMjAuNzQ1MyAxMi4zNjM1TDE3Ljc5MTUgMTIuMTI2NUMxNy43Nzk1IDEyLjY3MzEgMTcuNjkzNyAxMy4xOTk1IDE3LjU0MTUgMTMuNjk4N0wyMy40NDA5IDE1LjIzODZMMjMuNDM5OSAxNS4yMzk2Wk0yMS44Njg3IDE4LjkwNzNDMjEuODIyMyAxOC45ODYgMjEuNzE4NSAxOS4wMDkyIDIxLjY0MjggMTguOTU3OEwxNi42MjQ4IDE1LjQ5MTdDMTYuOTQzNSAxNS4wNzAyIDE3LjIwNDYgMTQuNjAzMyAxNy4zOTkzIDE0LjEwMjFMMjAuMDkyOCAxNS4zMzQ0QzIwLjE3NzUgMTUuMzcyNyAyMC4yMTA4IDE1LjQ3NjYgMjAuMTYzNCAxNS41NTYzTDE5LjkxMDMgMTUuOTkxOUwyMi42MTM5IDE3LjI3MzdDMjIuNjk2NyAxNy4zMTMgMjIuNzI4OSAxNy40MTQ5IDIyLjY4MjUgMTcuNDk0NUwyMS44NjY3IDE4LjkwODNMMjEuODY4NyAxOC45MDczWk0xNS4xNTI0IDE2Ljg2MzJMMTguNjgyIDIxLjgzNjlDMTguNzM1NSAyMS45MTE1IDE4Ljg0MDMgMjEuOTI1NiAxOC45MTE5IDIxLjg2NjFMMjAuMTYxNCAyMC44MTYzQzIwLjIzMiAyMC43NTY5IDIwLjIzNzEgMjAuNjQ5OSAyMC4xNzI1IDIwLjU4NTRMMTguMDcwOSAxOC40NTY2TDE4LjQ1NzEgMTguMTMzOUMxOC41Mjc3IDE4LjA3NDQgMTguNTMyNyAxNy45NjY1IDE4LjQ2NjIgMTcuOTAxOUwxNi4zNTU1IDE1LjgyMjVDMTYuMDA0NiAxNi4yMjE5IDE1LjYwMDIgMTYuNTcyOCAxNS4xNTI0IDE2Ljg2NDNWMTYuODYzMlpNMTUuMTIyMiAyMy42MzQ5QzE1LjAzNjUgMjMuNjY2MiAxNC45NDA3IDIzLjYxNzggMTQuOTE2NSAyMy41MjkxTDEzLjMwMDkgMTcuNjQ3OEMxMy44MjgzIDE3LjUyNjggMTQuMzI3NSAxNy4zMzUyIDE0Ljc4ODQgMTcuMDgyMUwxNi4wNTkgMTkuNzU2NUMxNi4wOTkzIDE5Ljg0MDEgMTYuMDU4IDE5Ljk0MSAxNS45NzAzIDE5Ljk3MjNMMTUuNDk2MyAyMC4xNDM3TDE2Ljc0MzcgMjIuODYzNUMxNi43ODIxIDIyLjk0NzIgMTYuNzQwNyAyMy4wNDUgMTYuNjU1IDIzLjA3NzNMMTUuMTIxMiAyMy42MzU5TDE1LjEyMjIgMjMuNjM0OVoiIGZpbGw9ImJsYWNrIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfOTkxNF8yMDYzMCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",width:24,height:24,preserveAspectRatio:"none"})))};var x;function l(){return l=Object.assign?Object.assign.bind():function(M){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(M[i]=n[i])}return M},l.apply(null,arguments)}const O=M=>{let{title:e,titleId:n,...i}=M;return t.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":n},i),e?t.createElement("title",{id:n},e):null,x||(x=t.createElement("image",{xlinkHref:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjAuMDk4OEMwIDE3LjQ2MzIgMi41MTQzNCA3LjYzMDE1IDcuNzEyOTEgMS4wNDEwMkM0LjA0MzMzIDcuOTY4MDYgMS45MDg3MSAxMi42NTgzIDMuNDY1NzEgMTYuMzE0M0M0LjY4ODkxIDE5LjE4NjUgMTAuOTc0OCAxOC4yNzQxIDE0LjM3MjUgMTcuMTI1M0M4LjMyNDUxIDE5Ljg2MjMgMi4xMTc5NCAyMC4yMzQgMCAyMC4wOTg4WiIgZmlsbD0iI0MxMjcyRCIvPgo8cGF0aCBkPSJNMTEuMjYwNSAwLjc1QzEzLjU1NTcgMi4wNjc4MyAyMC44NjEzIDkuMTQ5ODMgMjQgMTYuOTIxN0MxOS44MDI2IDEwLjI5NzcgMTYuNzg1NSA2LjExNDE2IDEyLjgyMzMgNS42MjcxM0M5LjcxMDU1IDUuMjQ0NTIgNy4zNjIxMSAxMS4xMTQ0IDYuNjYzNyAxNC42MTUyQzcuMzA0MjQgOC4wMzc4IDEwLjA4MzggMi41MDY1IDExLjI2MDUgMC43NVoiIGZpbGw9IiNDMTI3MkQiLz4KPHBhdGggZD0iTTIyLjUzMiAyMC4wNzUyQzIwLjIzNjggMjEuMzkzMSAxMC40MTY4IDI0LjE0NDEgMi4wNzk1OSAyMi45NjE0QzkuOTQ2NiAyMi42NTgzIDE1LjA5ODMgMjIuMTUxNiAxNy41MDM1IDE4Ljk4MjZDMTkuMzkzMSAxNi40OTMxIDE1LjQ1NTYgMTEuNTM1NSAxMi43NTYzIDkuMTgzNTlDMTguMTYzOCAxMy4wMjQgMjEuNTkwNyAxOC4xODM2IDIyLjUzMiAyMC4wNzUyWiIgZmlsbD0iI0MxMjcyRCIvPgo8L3N2Zz4K",width:24,height:24,preserveAspectRatio:"none"})))},E={id:"enterprise-connectors",title:"Enterprise-Connectors",sidebar_label:"Enterprise-Connectors",sidebar_position:4},a=void 0,d={},L=[{value:"Enterprise-Connectors",id:"enterprise-connectors",level:2},{value:"Beliebte Enterprise-Connectors",id:"popular-enterprise-connectors",level:3},{value:"Passe deine Enterprise-Connectors an",id:"customize-your-enterprise-connectors",level:3},{value:"Konfiguration von Enterprise-Connectors",id:"configuring-enterprise-connectors",level:2},{value:"Aktivierung von Enterprise SSO",id:"enabling-enterprise-sso",level:2},{value:"Just-in-Time zur Organisation",id:"just-in-time-to-organization",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Auswirkungen auf bestehende Benutzer nach \xc4nderungen am Enterprise SSO-Connector?",id:"impact-on-existing-users-after-enterprise-sso-connector-changes",level:3},{value:"Verwandte Ressourcen",id:"related-resources",level:2}];function w(M){const e={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,D.R)(),...M.components},{CloudLink:n,Details:i,DocCardList:N,Url:t}=e;return n||S("CloudLink",!0),i||S("Details",!0),N||S("DocCardList",!0),t||S("Url",!0),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(e.p,{children:["Die ",(0,j.jsx)(e.a,{href:"/end-user-flows/enterprise-sso",children:"Single Sign-On (SSO)-L\xf6sung"})," von Logto vereinfacht das Zugangsmanagement f\xfcr deine Unternehmenskunden. Enterprise SSO-Connectors sind entscheidend, um SSO f\xfcr deine verschiedenen Unternehmenskunden zu erm\xf6glichen."]}),"\n",(0,j.jsxs)(e.p,{children:["Diese Connectors erleichtern den Authentifizierungsprozess zwischen deinem Dienst und den Unternehmens-IdPs. Logto unterst\xfctzt sowohl ",(0,j.jsx)(e.a,{href:"/end-user-flows/enterprise-sso/sp-initiated-sso",children:"SP-initiiertes SSO"})," als auch ",(0,j.jsx)(e.a,{href:"/end-user-flows/enterprise-sso/idp-initiated-sso",children:"IdP-initiiertes SSO"}),", was es Organisationsmitgliedern erm\xf6glicht, mit ihren bestehenden Unternehmensanmeldedaten auf deine Dienste zuzugreifen, wodurch Sicherheit und Produktivit\xe4t verbessert werden."]}),"\n",(0,j.jsx)(e.h2,{id:"enterprise-connectors",children:"Enterprise-Connectors"}),"\n",(0,j.jsxs)(e.p,{children:["Logto bietet vorgefertigte Connectors f\xfcr beliebte Unternehmens-Identit\xe4tsanbieter, die eine schnelle Integration erm\xf6glichen. F\xfcr individuelle Anforderungen unterst\xfctzen wir die Integration \xfcber die Protokolle ",(0,j.jsx)(e.a,{href:"https://auth.wiki/openid-connect",children:"OpenID Connect (OIDC)"})," und ",(0,j.jsx)(e.a,{href:"https://auth.wiki/saml",children:"SAML"}),"."]}),"\n",(0,j.jsx)(e.h3,{id:"popular-enterprise-connectors",children:"Beliebte Enterprise-Connectors"}),"\n",(0,j.jsx)(N,{items:[{type:"link",label:"Microsoft Entra ID (OIDC)",href:"/integrations/entra-id-oidc",customProps:{icon:(0,j.jsx)(g,{})}},{type:"link",label:"Microsoft Entra ID (SAML)",href:"/integrations/entra-id-saml",customProps:{icon:(0,j.jsx)(g,{})}},{type:"link",label:"Google Workspace (OIDC)",href:"/integrations/google-workspace",customProps:{icon:(0,j.jsx)(u,{})}},{type:"link",label:"Okta (OIDC)",href:"/integrations/okta",customProps:{icon:(0,j.jsx)(y,{})}}]}),"\n",(0,j.jsx)(e.h3,{id:"customize-your-enterprise-connectors",children:"Passe deine Enterprise-Connectors an"}),"\n",(0,j.jsx)(N,{items:[{type:"link",label:"OIDC (Enterprise)",href:"/integrations/oidc-sso",customProps:{icon:(0,j.jsx)(c,{})}},{type:"link",label:"SAML (Enterprise)",href:"/integrations/saml-sso",customProps:{icon:(0,j.jsx)(O,{})}}]}),"\n",(0,j.jsx)(e.p,{children:"Wenn unsere Standard-Connectors nicht deinen spezifischen Anforderungen entsprechen, z\xf6gere nicht, uns zu kontaktieren."}),"\n",(0,j.jsx)(e.h2,{id:"configuring-enterprise-connectors",children:"Konfiguration von Enterprise-Connectors"}),"\n",(0,j.jsxs)(e.ol,{children:["\n",(0,j.jsxs)(e.li,{children:["Navigiere zu: ",(0,j.jsx)(n,{to:"/enterprise-sso",children:"Konsole > Enterprise SSO"}),"."]}),"\n",(0,j.jsx)(e.li,{children:'Klicke auf die Schaltfl\xe4che "Enterprise-Connector hinzuf\xfcgen" und w\xe4hle einen Connector-Typ aus.'}),"\n",(0,j.jsx)(e.li,{children:"Gib einen eindeutigen Namen an (z. B. Okta f\xfcr Acme Company)."}),"\n",(0,j.jsx)(e.li,{children:'Konfiguriere die Verbindung mit deinem IdP im Tab "Verbindung". Sieh dir die oben genannten Anleitungen f\xfcr jeden Connector-Typ an.'}),"\n",(0,j.jsxs)(e.li,{children:["Passe die SSO-Erfahrung und die ",(0,j.jsx)(e.strong,{children:"E-Mail-Domain"}),' im Tab "Erfahrung" an.']}),"\n",(0,j.jsx)(e.li,{children:'F\xfcr den SAML-Enterprise-Connector ist das Aktivieren von IdP-initiiertem SSO im Tab "IdP-initiiertes SSO" optional. Siehe die Anleitung f\xfcr Details.'}),"\n",(0,j.jsx)(e.li,{children:"\xc4nderungen speichern."}),"\n"]}),"\n",(0,j.jsx)(e.p,{children:"Bitte beachte die folgenden Einstellungen:"}),"\n",(0,j.jsxs)(e.ul,{children:["\n",(0,j.jsxs)(e.li,{children:["\n",(0,j.jsxs)(e.p,{children:[(0,j.jsx)(e.strong,{children:"E-Mail-Domains"}),': Wenn die E-Mail-Domain der vom Benutzer eingegebenen E-Mail im Feld "Enterprise-E-Mail-Domains" einiger Enterprise SSO-Connectors enthalten ist, wird der Benutzer zur entsprechenden Anmelde-URL dieses SSO-Connectors weitergeleitet.']}),"\n",(0,j.jsxs)(e.admonition,{type:"note",children:[(0,j.jsxs)(e.p,{children:["Es ist wichtig zu beachten, dass nach der Konfiguration relevanter E-Mail-Domains in einem SSO-Connector Benutzer, die sich mit E-Mails aus diesen Domains anmelden, gezwungen werden, die ",(0,j.jsx)(e.a,{href:"/end-user-flows/enterprise-sso",children:"SSO-Anmeldung"})," zu verwenden."]}),(0,j.jsx)(e.p,{children:'Mit anderen Worten, nur E-Mails von Domains, die NICHT in den SSO-Connectors konfiguriert sind, k\xf6nnen die Anmeldung mit "E-Mail + Best\xe4tigungscode" oder "E-Mail + Passwort" verwenden (vorausgesetzt, dass diese beiden Anmeldemethoden in der Anmeldeerfahrung aktiviert sind).'})]}),"\n"]}),"\n",(0,j.jsxs)(e.li,{children:["\n",(0,j.jsxs)(e.p,{children:[(0,j.jsx)(e.strong,{children:"Benutzerprofile synchronisieren"}),': W\xe4hle, wann Benutzerprofilinformationen (z. B. Avatar, Name) synchronisiert werden sollen. Das Standardverhalten ist "Nur bei der ersten Anmeldung synchronisieren". "Immer bei jeder Anmeldung synchronisieren" ist eine weitere Option f\xfcr dieses Feld, kann jedoch dazu f\xfchren, dass benutzerdefinierte Benutzerdaten \xfcberschrieben werden.']}),"\n"]}),"\n",(0,j.jsxs)(e.li,{children:["\n",(0,j.jsxs)(e.p,{children:[(0,j.jsx)(e.strong,{children:"Anzeigedaten"}),": Optional kannst du den Anzeigenamen und das Logo f\xfcr den Connector anpassen. Dies ist sehr n\xfctzlich, wenn mehrere Connectors mit derselben E-Mail-Domain verkn\xfcpft sind. Benutzer w\xe4hlen den gew\xfcnschten IdP aus einer Liste von SSO-Connector-Schaltfl\xe4chen aus, bevor sie zur IdP-Anmeldeseite weitergeleitet werden."]}),"\n"]}),"\n"]}),"\n",(0,j.jsx)(e.h2,{id:"enabling-enterprise-sso",children:"Aktivierung von Enterprise SSO"}),"\n",(0,j.jsxs)(e.ol,{children:["\n",(0,j.jsxs)(e.li,{children:["Navigiere zu: ",(0,j.jsx)(n,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Konsole > Anmeldeerfahrung > Anmeldung und Registrierung"}),"."]}),"\n",(0,j.jsx)(e.li,{children:'Aktiviere den "Enterprise SSO"-Schalter.'}),"\n",(0,j.jsx)(e.li,{children:"\xc4nderungen speichern."}),"\n"]}),"\n",(0,j.jsxs)(e.p,{children:['Sobald aktiviert, erscheint eine "Single Sign-On"-Schaltfl\xe4che auf deiner Anmeldeseite. Unternehmenskunden mit SSO-aktivierten E-Mail-Domains k\xf6nnen mit ihren Unternehmens-Identit\xe4tsanbietern (IdPs) auf deine Dienste zugreifen. Um mehr \xfcber die SSO-Benutzererfahrung zu erfahren, siehe Benutzerfl\xfcsse: ',(0,j.jsx)(e.a,{href:"/end-user-flows/enterprise-sso",children:"Enterprise SSO"}),"."]}),"\n",(0,j.jsx)(e.h2,{id:"just-in-time-to-organization",children:"Just-in-Time zur Organisation"}),"\n",(0,j.jsxs)(e.p,{children:["In Logto ist ",(0,j.jsx)(e.a,{href:"https://auth.wiki/jit-provisioning",children:"Just-in-Time (JIT) Bereitstellung"})," ein Prozess, der verwendet wird, um Organisationsmitgliedschaften und Rollen Benutzern automatisch zuzuweisen, w\xe4hrend sie sich zum ersten Mal im System anmelden."]}),"\n",(0,j.jsxs)(e.p,{children:["Logto bietet einen Einstiegspunkt zur Konfiguration der JIT-Bereitstellung von SSO-Connectors innerhalb einer Organisation, siehe ",(0,j.jsx)(e.a,{href:"/organizations/just-in-time-provisioning",children:"Referenz"}),"."]}),"\n",(0,j.jsx)(e.h2,{id:"faqs",children:"FAQs"}),"\n",(0,j.jsxs)(i,{children:[(0,j.jsx)("summary",{children:(0,j.jsx)(e.h3,{id:"impact-on-existing-users-after-enterprise-sso-connector-changes",children:"Auswirkungen auf bestehende Benutzer nach \xc4nderungen am Enterprise SSO-Connector?"})}),(0,j.jsxs)(e.ul,{children:["\n",(0,j.jsx)(e.li,{children:"Hinzuf\xfcgen von SSO: Die SSO-Identit\xe4ten werden mit bestehenden Konten verkn\xfcpft, wenn die E-Mail \xfcbereinstimmt."}),"\n",(0,j.jsx)(e.li,{children:"Entfernen von SSO: Entfernt SSO-Identit\xe4ten, die mit dem Konto verkn\xfcpft sind, beh\xe4lt jedoch Benutzerkonten bei und fordert Benutzer auf, alternative Verifizierungsmethoden einzurichten."}),"\n"]})]}),"\n",(0,j.jsx)(e.h2,{id:"related-resources",children:"Verwandte Ressourcen"}),"\n",(0,j.jsx)(t,{href:"https://blog.logto.io/idp-vs-sp-initiated-sso",children:(0,j.jsx)(e.p,{children:"IdP-initiiertes SSO & SP-initiiertes SSO"})}),"\n",(0,j.jsx)(t,{href:"https://blog.logto.io/differences-between-saml-and-oidc",children:"SAML vs. OpenID Connect"})]})}function k(M={}){const{wrapper:e}={...(0,D.R)(),...M.components};return e?(0,j.jsx)(e,{...M,children:(0,j.jsx)(w,{...M})}):w(M)}function S(M,e){throw new Error("Expected "+(e?"component":"object")+" `"+M+"` to be defined: you likely forgot to import, pass, or provide it.")}},79621:(M,e,n)=>{n.d(e,{R:()=>D,x:()=>t});var i=n(58101);const N={},j=i.createContext(N);function D(M){const e=i.useContext(j);return i.useMemo((function(){return"function"==typeof M?M(e):{...e,...M}}),[e,M])}function t(M){let e;return e=M.disableParentContext?"function"==typeof M.components?M.components(N):M.components||N:D(M.components),i.createElement(j.Provider,{value:e},M.children)}}}]);