"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[89989],{11872:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"developers/user-impersonation","title":"\u7528\u6237\u6a21\u62df","description":"\u60f3\u8c61\u4e00\u4e0b\uff0cTechCorp \u7684\u652f\u6301\u5de5\u7a0b\u5e08 Sarah \u6536\u5230\u4e86\u4e00\u5f20\u6765\u81ea\u5ba2\u6237 Alex \u7684\u7d27\u6025\u5de5\u5355\uff0cAlex \u65e0\u6cd5\u8bbf\u95ee\u5173\u952e\u8d44\u6e90\u3002\u4e3a\u4e86\u9ad8\u6548\u5730\u8bca\u65ad\u548c\u89e3\u51b3\u95ee\u9898\uff0cSarah \u9700\u8981\u770b\u5230\u7cfb\u7edf\u4e2d Alex \u6240\u770b\u5230\u7684\u5185\u5bb9\u3002\u8fd9\u65f6\uff0cLogto \u7684\u7528\u6237\u6a21\u62df\u529f\u80fd\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/user-impersonation.mdx","sourceDirName":"developers","slug":"/developers/user-impersonation","permalink":"/zh-CN/developers/user-impersonation","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/user-impersonation.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"user-impersonation","title":"\u7528\u6237\u6a21\u62df","sidebar_label":"\u7528\u6237\u6a21\u62df","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u521b\u5efa\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e\u811a\u672c","permalink":"/zh-CN/developers/custom-token-claims/create-script"},"next":{"title":"\u7b7e\u540d\u5bc6\u94a5","permalink":"/zh-CN/developers/signing-keys"}}');var r=o(25105),s=o(79621);const a={id:"user-impersonation",title:"\u7528\u6237\u6a21\u62df",sidebar_label:"\u7528\u6237\u6a21\u62df",sidebar_position:3},c="\u7528\u6237\u6a21\u62df",i={},p=[{value:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"how-it-works",level:2},{value:"\u6b65\u9aa4 1\uff1a\u8bf7\u6c42\u6a21\u62df",id:"step-1-requesting-impersonation",level:3},{value:"\u6b65\u9aa4 2\uff1a\u83b7\u53d6\u4e3b\u4f53\u4ee4\u724c",id:"step-2-obtaining-a-subject-token",level:3},{value:"\u6b65\u9aa4 3\uff1a\u7528\u4e3b\u4f53\u4ee4\u724c\u4ea4\u6362\u8bbf\u95ee\u4ee4\u724c",id:"step-3-exchanging-the-subject-token-for-an-access-token",level:3},{value:"\u793a\u4f8b\u7528\u6cd5",id:"example-usage",level:2},{value:"<code>act</code> \u58f0\u660e",id:"act-claim",level:2},{value:"\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e",id:"customizing-token-claims",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u7528\u6237\u6a21\u62df",children:"\u7528\u6237\u6a21\u62df"})}),"\n",(0,r.jsx)(n.p,{children:"\u60f3\u8c61\u4e00\u4e0b\uff0cTechCorp \u7684\u652f\u6301\u5de5\u7a0b\u5e08 Sarah \u6536\u5230\u4e86\u4e00\u5f20\u6765\u81ea\u5ba2\u6237 Alex \u7684\u7d27\u6025\u5de5\u5355\uff0cAlex \u65e0\u6cd5\u8bbf\u95ee\u5173\u952e\u8d44\u6e90\u3002\u4e3a\u4e86\u9ad8\u6548\u5730\u8bca\u65ad\u548c\u89e3\u51b3\u95ee\u9898\uff0cSarah \u9700\u8981\u770b\u5230\u7cfb\u7edf\u4e2d Alex \u6240\u770b\u5230\u7684\u5185\u5bb9\u3002\u8fd9\u65f6\uff0cLogto \u7684\u7528\u6237\u6a21\u62df\u529f\u80fd\u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u6a21\u62df\u5141\u8bb8\u50cf Sarah \u8fd9\u6837\u7684\u6388\u6743\u7528\u6237\u5728\u7cfb\u7edf\u4e2d\u4e34\u65f6\u4ee3\u8868\u5176\u4ed6\u7528\u6237\uff08\u5982 Alex\uff09\u8fdb\u884c\u64cd\u4f5c\u3002\u8fd9\u4e2a\u5f3a\u5927\u7684\u529f\u80fd\u5bf9\u4e8e\u6545\u969c\u6392\u9664\u3001\u63d0\u4f9b\u5ba2\u6237\u652f\u6301\u548c\u6267\u884c\u7ba1\u7406\u4efb\u52a1\u975e\u5e38\u6709\u4ef7\u503c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Sarah as Sarah \u7684\u5e94\u7528\n    participant TechCorp as TechCorp \u7684\u670d\u52a1\u5668\n    participant Logto as Logto Management API\n    participant LogtoToken as Logto \u4ee4\u724c\u7aef\u70b9\n\n    Sarah->>TechCorp: POST /api/request-impersonation\n    Note over Sarah,TechCorp: \u8bf7\u6c42\u6a21\u62df Alex\n\n    TechCorp->>Logto: POST /api/subject-tokens\n    Note over TechCorp,Logto: \u8bf7\u6c42 Alex \u7684\u4e3b\u4f53\u4ee4\u724c\n\n    Logto--\x3e>TechCorp: \u8fd4\u56de\u4e3b\u4f53\u4ee4\u724c\n    TechCorp--\x3e>Sarah: \u8fd4\u56de\u4e3b\u4f53\u4ee4\u724c\n\n    Sarah->>LogtoToken: POST /oidc/token\n    Note over Sarah,LogtoToken: \u7528\u4e3b\u4f53\u4ee4\u724c\u4ea4\u6362\u8bbf\u95ee\u4ee4\u724c\n\n    LogtoToken--\x3e>Sarah: \u8fd4\u56de\u8bbf\u95ee\u4ee4\u724c\n    Note over Sarah: Sarah \u73b0\u5728\u53ef\u4ee5\u4ee5 Alex \u7684\u8eab\u4efd\u8bbf\u95ee\u8d44\u6e90"}),"\n",(0,r.jsx)(n.p,{children:"\u6a21\u62df\u8fc7\u7a0b\u6d89\u53ca\u4e09\u4e2a\u4e3b\u8981\u6b65\u9aa4\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Sarah \u901a\u8fc7 TechCorp \u7684\u540e\u7aef\u670d\u52a1\u5668\u8bf7\u6c42\u6a21\u62df"}),"\n",(0,r.jsx)(n.li,{children:"TechCorp \u7684\u670d\u52a1\u5668\u4ece Logto \u7684 Management API \u83b7\u53d6\u4e3b\u4f53\u4ee4\u724c"}),"\n",(0,r.jsx)(n.li,{children:"Sarah \u7684\u5e94\u7528\u7a0b\u5e8f\u7528\u8fd9\u4e2a\u4e3b\u4f53\u4ee4\u724c\u4ea4\u6362\u8bbf\u95ee\u4ee4\u724c"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u770b\u770b Sarah \u5982\u4f55\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\u6765\u5e2e\u52a9 Alex\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"step-1-requesting-impersonation",children:"\u6b65\u9aa4 1\uff1a\u8bf7\u6c42\u6a21\u62df"}),"\n",(0,r.jsx)(n.p,{children:"\u9996\u5148\uff0cSarah \u7684\u652f\u6301\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u4ece TechCorp \u7684\u540e\u7aef\u670d\u52a1\u5668\u8bf7\u6c42\u6a21\u62df\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf7\u6c42\uff08Sarah \u7684\u5e94\u7528\u7a0b\u5e8f\u5230 TechCorp \u7684\u670d\u52a1\u5668\uff09"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'POST /api/request-impersonation HTTP/1.1\nHost: api.techcorp.com\nAuthorization: Bearer <Sarah \u7684\u8bbf\u95ee\u4ee4\u724c>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "reason": "\u8c03\u67e5\u8d44\u6e90\u8bbf\u95ee\u95ee\u9898",\n  "ticketId": "TECH-1234"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a API \u4e2d\uff0c\u540e\u7aef\u5e94\u8be5\u6267\u884c\u9002\u5f53\u7684\u6388\u6743 (Authorization) \u68c0\u67e5\uff0c\u4ee5\u786e\u4fdd Sarah \u62e5\u6709\u6a21\u62df Alex \u7684\u5fc5\u8981\u6743\u9650\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"step-2-obtaining-a-subject-token",children:"\u6b65\u9aa4 2\uff1a\u83b7\u53d6\u4e3b\u4f53\u4ee4\u724c"}),"\n",(0,r.jsxs)(n.p,{children:["TechCorp \u7684\u670d\u52a1\u5668\u5728\u9a8c\u8bc1 Sarah \u7684\u8bf7\u6c42\u540e\uff0c\u5c06\u8c03\u7528 Logto \u7684 ",(0,r.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," \u4ee5\u83b7\u53d6\u4e3b\u4f53\u4ee4\u724c\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf7\u6c42\uff08TechCorp \u7684\u670d\u52a1\u5668\u5230 Logto \u7684 Management API\uff09"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'POST /api/subject-tokens HTTP/1.1\nHost: techcorp.logto.app\nAuthorization: Bearer <TechCorp_m2m_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "\u8d44\u6e90\u8bbf\u95ee\u95ee\u9898",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u54cd\u5e94\uff08Logto \u5230 TechCorp \u7684\u670d\u52a1\u5668\uff09"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"TechCorp \u7684\u670d\u52a1\u5668\u7136\u540e\u5e94\u8be5\u5c06\u8fd9\u4e2a\u4e3b\u4f53\u4ee4\u724c\u8fd4\u56de\u7ed9 Sarah \u7684\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u54cd\u5e94\uff08TechCorp \u7684\u670d\u52a1\u5668\u5230 Sarah \u7684\u5e94\u7528\u7a0b\u5e8f\uff09"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"step-3-exchanging-the-subject-token-for-an-access-token",children:"\u6b65\u9aa4 3\uff1a\u7528\u4e3b\u4f53\u4ee4\u724c\u4ea4\u6362\u8bbf\u95ee\u4ee4\u724c"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\uff0cSarah \u7684\u5e94\u7528\u7a0b\u5e8f\u7528\u8fd9\u4e2a\u4e3b\u4f53\u4ee4\u724c\u4ea4\u6362\u4ee3\u8868 Alex \u7684\u8bbf\u95ee\u4ee4\u724c\uff0c\u5e76\u6307\u5b9a\u4ee4\u724c\u5c06\u88ab\u4f7f\u7528\u7684\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf7\u6c42\uff08Sarah \u7684\u5e94\u7528\u7a0b\u5e8f\u5230 Logto \u7684\u4ee4\u724c\u7aef\u70b9\uff09"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u54cd\u5e94\uff08Logto \u5230 Sarah \u7684\u5e94\u7528\u7a0b\u5e8f\uff09"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...<truncated>",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "resource:read"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd4\u56de\u7684 ",(0,r.jsx)(n.code,{children:"access_token"})," \u5c06\u7ed1\u5b9a\u5230\u6307\u5b9a\u7684\u8d44\u6e90\uff0c\u786e\u4fdd\u5b83\u53ea\u80fd\u7528\u4e8e TechCorp \u7684\u5ba2\u6237\u6570\u636e API\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"\u793a\u4f8b\u7528\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f Sarah \u5982\u4f55\u5728 Node.js \u652f\u6301\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u6b64\u529f\u80fd\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"interface ImpersonationResponse {\n  subjectToken: string;\n  expiresIn: number;\n}\n\ninterface TokenExchangeResponse {\n  access_token: string;\n  issued_token_type: string;\n  token_type: string;\n  expires_in: number;\n  scope: string;\n}\n\nasync function impersonateUser(\n  userId: string,\n  clientId: string,\n  ticketId: string,\n  resource: string\n): Promise<string> {\n  try {\n    // \u6b65\u9aa4 1 & 2\uff1a\u8bf7\u6c42\u6a21\u62df\u5e76\u83b7\u53d6\u4e3b\u4f53\u4ee4\u724c\n    const impersonationResponse = await fetch(\n      'https://api.techcorp.com/api/request-impersonation',\n      {\n        method: 'POST',\n        headers: {\n          Authorization: \"Bearer <Sarah \u7684\u8bbf\u95ee\u4ee4\u724c>\",\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          userId,\n          reason: '\u8c03\u67e5\u8d44\u6e90\u8bbf\u95ee\u95ee\u9898',\n          ticketId,\n        }),\n      }\n    );\n\n    if (!impersonationResponse.ok) {\n      throw new Error(`HTTP \u9519\u8bef\u53d1\u751f\u3002\u72b6\u6001\uff1a${impersonationResponse.status}`);\n    }\n\n    const { subjectToken } = (await impersonationResponse.json()) as ImpersonationResponse;\n\n    // \u6b65\u9aa4 3\uff1a\u7528\u4e3b\u4f53\u4ee4\u724c\u4ea4\u6362\u8bbf\u95ee\u4ee4\u724c\n    const tokenExchangeBody = new URLSearchParams({\n      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',\n      client_id: clientId,\n      scope: 'openid profile resource.read',\n      subject_token: subjectToken,\n      subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',\n      resource: resource,\n    });\n\n    const tokenExchangeResponse = await fetch('https://techcorp.logto.app/oidc/token', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n      body: tokenExchangeBody,\n    });\n\n    if (!tokenExchangeResponse.ok) {\n      throw new Error(`HTTP \u9519\u8bef\uff01\u72b6\u6001\uff1a${tokenExchangeResponse.status}`);\n    }\n\n    const tokenData = (await tokenExchangeResponse.json()) as TokenExchangeResponse;\n    return tokenData.access_token;\n  } catch (error) {\n    console.error('\u6a21\u62df\u5931\u8d25\uff1a', error);\n    throw error;\n  }\n}\n\n// Sarah \u4f7f\u7528\u6b64\u51fd\u6570\u6a21\u62df Alex\nasync function performImpersonation(): Promise<void> {\n  try {\n    const accessToken = await impersonateUser(\n      'alex123',\n      'techcorp_support_app',\n      'TECH-1234',\n      'https://api.techcorp.com/customer-data'\n    );\n    console.log('Alex \u7684\u6a21\u62df\u8bbf\u95ee\u4ee4\u724c\uff1a', accessToken);\n  } catch (error) {\n    console.error('\u6267\u884c\u6a21\u62df\u5931\u8d25\uff1a', error);\n  }\n}\n\n// \u6267\u884c\u6a21\u62df\nvoid performImpersonation()\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e3b\u4f53\u4ee4\u724c\u662f\u77ed\u671f\u7684\u5e76\u4e14\u4ec5\u4f9b\u4e00\u6b21\u4f7f\u7528\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u6a21\u62df\u8bbf\u95ee\u4ee4\u724c\u4e0d\u9644\u5e26 ",(0,r.jsx)(n.a,{href:"https://auth.wiki/refresh-token",children:"\u5237\u65b0\u4ee4\u724c"}),"\u3002\u5982\u679c\u4ee4\u724c\u5728 Sarah \u89e3\u51b3 Alex \u7684\u95ee\u9898\u4e4b\u524d\u8fc7\u671f\uff0cSarah \u5c06\u9700\u8981\u91cd\u590d\u6b64\u8fc7\u7a0b\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"TechCorp \u7684\u540e\u7aef\u670d\u52a1\u5668\u5fc5\u987b\u5b9e\u65bd\u9002\u5f53\u7684\u6388\u6743 (Authorization) \u68c0\u67e5\uff0c\u4ee5\u786e\u4fdd\u53ea\u6709\u50cf Sarah \u8fd9\u6837\u7684\u6388\u6743\u652f\u6301\u4eba\u5458\u53ef\u4ee5\u8bf7\u6c42\u6a21\u62df\u3002"}),"\n"]})}),"\n",(0,r.jsxs)(n.h2,{id:"act-claim",children:[(0,r.jsx)(n.code,{children:"act"})," \u58f0\u660e"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4f7f\u7528\u4ee4\u724c\u4ea4\u6362\u6d41\u7a0b\u8fdb\u884c\u6a21\u62df\u65f6\uff0c\u7b7e\u53d1\u7684\u8bbf\u95ee\u4ee4\u724c\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u989d\u5916\u7684 ",(0,r.jsx)(n.code,{children:"act"}),"\uff08actor\uff09\u58f0\u660e\u3002\u6b64\u58f0\u660e\u8868\u793a\u201c\u6267\u884c\u65b9\u201d\u7684\u8eab\u4efd\u2014\u2014\u5728\u6211\u4eec\u7684\u793a\u4f8b\u4e2d\uff0c\u662f\u6267\u884c\u6a21\u62df\u7684 Sarah\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u5305\u542b ",(0,r.jsx)(n.code,{children:"act"})," \u58f0\u660e\uff0cSarah \u7684\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u5728\u4ee4\u724c\u4ea4\u6362\u8bf7\u6c42\u4e2d\u63d0\u4f9b\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"actor_token"}),"\u3002\u6b64\u4ee4\u724c\u5e94\u662f\u4e00\u4e2a\u6709\u6548\u7684 Sarah \u7684\u8bbf\u95ee\u4ee4\u724c\uff0c\u5e76\u5177\u6709 ",(0,r.jsx)(n.code,{children:"openid"})," \u6743\u9650\u3002\u4ee5\u4e0b\u662f\u5982\u4f55\u5728\u4ee4\u724c\u4ea4\u6362\u8bf7\u6c42\u4e2d\u5305\u542b\u5b83\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&actor_token=sarah_access_token\n&actor_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u63d0\u4f9b\u4e86 ",(0,r.jsx)(n.code,{children:"actor_token"}),"\uff0c\u751f\u6210\u7684\u8bbf\u95ee\u4ee4\u724c\u5c06\u5305\u542b\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"act"})," \u58f0\u660e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "aud": "https://api.techcorp.com",\n  "iss": "https://techcorp.logto.app",\n  "exp": 1443904177,\n  "sub": "alex123",\n  "act": {\n    "sub": "sarah789"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a ",(0,r.jsx)(n.code,{children:"act"})," \u58f0\u660e\u6e05\u695a\u5730\u8868\u660e Sarah (sarah789) \u6b63\u5728\u4ee3\u8868 Alex (alex123) \u884c\u4e8b\u3002",(0,r.jsx)(n.code,{children:"act"})," \u58f0\u660e\u5bf9\u4e8e\u5ba1\u8ba1\u548c\u8ddf\u8e2a\u6a21\u62df\u64cd\u4f5c\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"customizing-token-claims",children:"\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["Logto \u5141\u8bb8\u4f60\u4e3a\u6a21\u62df\u4ee4\u724c ",(0,r.jsx)(n.a,{href:"/developers/custom-token-claims",children:"\u81ea\u5b9a\u4e49\u4ee4\u724c\u58f0\u660e"}),"\u3002\u8fd9\u5bf9\u4e8e\u5728\u6a21\u62df\u8fc7\u7a0b\u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u4e0a\u4e0b\u6587\u6216\u5143\u6570\u636e\u975e\u5e38\u6709\u7528\uff0c\u4f8b\u5982\u6a21\u62df\u7684\u539f\u56e0\u6216\u76f8\u5173\u7684\u652f\u6301\u5de5\u5355\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53 TechCorp \u7684\u670d\u52a1\u5668\u4ece Logto \u7684 Management API \u8bf7\u6c42\u4e3b\u4f53\u4ee4\u724c\u65f6\uff0c\u5b83\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"context"})," \u5bf9\u8c61\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "\u8d44\u6e90\u8bbf\u95ee\u95ee\u9898",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a ",(0,r.jsx)(n.a,{href:"/developers/custom-token-claims/create-script#context-only-available-for-user-access-token",children:"context"})," \u7136\u540e\u53ef\u4ee5\u5728 ",(0,r.jsx)(n.code,{children:"getCustomJwtClaims()"})," \u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u4ee5\u5411\u6700\u7ec8\u8bbf\u95ee\u4ee4\u724c\u6dfb\u52a0\u7279\u5b9a\u58f0\u660e\u3002\u4ee5\u4e0b\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  if (context.grant?.type === 'urn:ietf:params:oauth:grant-type:token-exchange') {\n    const { ticketId, reason, supportEngineerId } = context.grant.subjectTokenContext;\n    return {\n      impersonation_context: {\n        ticket_id: ticketId,\n        reason: reason,\n        support_engineer: supportEngineerId,\n      },\n    };\n  }\n  return {};\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sarah \u6536\u5230\u7684\u6700\u7ec8\u8bbf\u95ee\u4ee4\u724c\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "sub": "alex123",\n  "aud": "https://api.techcorp.com/customer-data",\n  "impersonation_context": {\n    "ticket_id": "TECH-1234",\n    "reason": "\u8d44\u6e90\u8bbf\u95ee\u95ee\u9898",\n    "support_engineer": "sarah789"\n  }\n  // ... \u5176\u4ed6\u6807\u51c6\u58f0\u660e\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u81ea\u5b9a\u4e49\u8bbf\u95ee\u4ee4\u724c\u58f0\u660e\uff0cTechCorp \u53ef\u4ee5\u5305\u542b\u6709\u5173\u6a21\u62df\u4e0a\u4e0b\u6587\u7684\u6709\u4ef7\u503c\u4fe1\u606f\uff0c\u4f7f\u5176\u66f4\u5bb9\u6613\u5728\u7cfb\u7edf\u4e2d\u5ba1\u8ba1\u548c\u7406\u89e3\u6a21\u62df\u6d3b\u52a8\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u5728\u5411\u4ee4\u724c\u6dfb\u52a0\u81ea\u5b9a\u4e49\u58f0\u660e\u65f6\u8981\u8c28\u614e\u3002\u907f\u514d\u5305\u542b\u654f\u611f\u4fe1\u606f\uff0c\u5982\u679c\u4ee4\u724c\u88ab\u622a\u83b7\u6216\u6cc4\u9732\uff0c\u53ef\u80fd\u4f1a\u5e26\u6765\u5b89\u5168\u98ce\u9669\u3002JWT \u662f\u7b7e\u540d\u7684\uff0c\u4f46\u4e0d\u662f\u52a0\u5bc6\u7684\uff0c\u56e0\u6b64\u58f0\u660e\u5bf9\u4efb\u4f55\u6709\u6743\u8bbf\u95ee\u4ee4\u724c\u7684\u4eba\u90fd\u662f\u53ef\u89c1\u7684\u3002"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},79621:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var t=o(58101);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);