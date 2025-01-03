"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[25680],{71441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"developers/user-impersonation","title":"Usurpation d\u2019identit\xe9 utilisateur","description":"Imaginez Sarah, une ing\xe9nieure de support chez TechCorp, qui re\xe7oit un ticket urgent d\'Alex, un client qui ne peut pas acc\xe9der \xe0 une ressource critique. Pour diagnostiquer et r\xe9soudre efficacement le probl\xe8me, Sarah doit voir exactement ce qu\'Alex voit dans le syst\xe8me. C\'est l\xe0 que la fonctionnalit\xe9 d\'usurpation d\u2019identit\xe9 utilisateur de Logto est utile.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/user-impersonation.mdx","sourceDirName":"developers","slug":"/developers/user-impersonation","permalink":"/fr/developers/user-impersonation","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/developers/user-impersonation.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"user-impersonation","title":"Usurpation d\u2019identit\xe9 utilisateur","sidebar_label":"Usurpation d\u2019identit\xe9 utilisateur","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Cr\xe9er un script de revendications de jeton personnalis\xe9","permalink":"/fr/developers/custom-token-claims/create-script"},"next":{"title":"Cl\xe9s de signature","permalink":"/fr/developers/signing-keys"}}');var o=t(25105),r=t(79621);const a={id:"user-impersonation",title:"Usurpation d\u2019identit\xe9 utilisateur",sidebar_label:"Usurpation d\u2019identit\xe9 utilisateur",sidebar_position:3},i="Usurpation d\u2019identit\xe9 utilisateur",c={},d=[{value:"Comment \xe7a fonctionne ?",id:"how-it-works",level:2},{value:"\xc9tape 1 : Demande d&#39;usurpation",id:"step-1-requesting-impersonation",level:3},{value:"\xc9tape 2 : Obtention d&#39;un jeton de sujet",id:"step-2-obtaining-a-subject-token",level:3},{value:"\xc9tape 3 : \xc9change du jeton de sujet contre un jeton d\u2019acc\xe8s",id:"step-3-exchanging-the-subject-token-for-an-access-token",level:3},{value:"Exemple d&#39;utilisation",id:"example-usage",level:2},{value:"Revendication <code>act</code>",id:"act-claim",level:2},{value:"Personnalisation des revendications de jetons",id:"customizing-token-claims",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"usurpation-didentit\xe9-utilisateur",children:"Usurpation d\u2019identit\xe9 utilisateur"})}),"\n",(0,o.jsx)(n.p,{children:"Imaginez Sarah, une ing\xe9nieure de support chez TechCorp, qui re\xe7oit un ticket urgent d'Alex, un client qui ne peut pas acc\xe9der \xe0 une ressource critique. Pour diagnostiquer et r\xe9soudre efficacement le probl\xe8me, Sarah doit voir exactement ce qu'Alex voit dans le syst\xe8me. C'est l\xe0 que la fonctionnalit\xe9 d'usurpation d\u2019identit\xe9 utilisateur de Logto est utile."}),"\n",(0,o.jsx)(n.p,{children:"L'usurpation d\u2019identit\xe9 utilisateur permet aux utilisateurs autoris\xe9s comme Sarah d'agir temporairement au nom d'autres utilisateurs comme Alex au sein du syst\xe8me. Cette fonctionnalit\xe9 puissante est inestimable pour le d\xe9pannage, le support client et l'ex\xe9cution de t\xe2ches administratives."}),"\n",(0,o.jsx)(n.h2,{id:"how-it-works",children:"Comment \xe7a fonctionne ?"}),"\n",(0,o.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Sarah as Application de Sarah\n    participant TechCorp as Serveur de TechCorp\n    participant Logto as Logto Management API\n    participant LogtoToken as Point de terminaison du jeton Logto\n\n    Sarah->>TechCorp: POST /api/request-impersonation\n    Note over Sarah,TechCorp: Demande d'usurpation d'Alex\n\n    TechCorp->>Logto: POST /api/subject-tokens\n    Note over TechCorp,Logto: Demande de jeton de sujet pour Alex\n\n    Logto--\x3e>TechCorp: Retourne le jeton de sujet\n    TechCorp--\x3e>Sarah: Retourne le jeton de sujet\n\n    Sarah->>LogtoToken: POST /oidc/token\n    Note over Sarah,LogtoToken: \xc9change du jeton de sujet contre un jeton d\u2019acc\xe8s\n\n    LogtoToken--\x3e>Sarah: Retourne le jeton d\u2019acc\xe8s\n    Note over Sarah: Sarah peut maintenant acc\xe9der aux ressources en tant qu'Alex"}),"\n",(0,o.jsx)(n.p,{children:"Le processus d'usurpation implique trois \xe9tapes principales :"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Sarah demande l'usurpation via le serveur backend de TechCorp"}),"\n",(0,o.jsx)(n.li,{children:"Le serveur de TechCorp obtient un jeton de sujet de la Management API de Logto"}),"\n",(0,o.jsx)(n.li,{children:"L'application de Sarah \xe9change ce jeton de sujet contre un jeton d\u2019acc\xe8s"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Voyons comment Sarah peut utiliser cette fonctionnalit\xe9 pour aider Alex."}),"\n",(0,o.jsx)(n.h3,{id:"step-1-requesting-impersonation",children:"\xc9tape 1 : Demande d'usurpation"}),"\n",(0,o.jsx)(n.p,{children:"Tout d'abord, l'application de support de Sarah doit demander l'usurpation au serveur backend de TechCorp."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Demande (application de Sarah au serveur de TechCorp)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'POST /api/request-impersonation HTTP/1.1\nHost: api.techcorp.com\nAuthorization: Bearer <Sarah\'s_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "reason": "Investigating resource access issue",\n  "ticketId": "TECH-1234"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Dans cette API, le backend doit effectuer des v\xe9rifications d'autorisation appropri\xe9es pour s'assurer que Sarah a les permissions n\xe9cessaires pour usurper l'identit\xe9 d'Alex."}),"\n",(0,o.jsx)(n.h3,{id:"step-2-obtaining-a-subject-token",children:"\xc9tape 2 : Obtention d'un jeton de sujet"}),"\n",(0,o.jsxs)(n.p,{children:["Le serveur de TechCorp, apr\xe8s avoir valid\xe9 la demande de Sarah, appellera ensuite la ",(0,o.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," de Logto pour obtenir un jeton de sujet."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Demande (serveur de TechCorp \xe0 la Management API de Logto)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'POST /api/subject-tokens HTTP/1.1\nHost: techcorp.logto.app\nAuthorization: Bearer <TechCorp_m2m_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "Resource access issue",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"R\xe9ponse (Logto au serveur de TechCorp)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Le serveur de TechCorp doit ensuite retourner ce jeton de sujet \xe0 l'application de Sarah."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"R\xe9ponse (serveur de TechCorp \xe0 l'application de Sarah)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"step-3-exchanging-the-subject-token-for-an-access-token",children:"\xc9tape 3 : \xc9change du jeton de sujet contre un jeton d\u2019acc\xe8s"}),"\n",(0,o.jsx)(n.p,{children:"Maintenant, l'application de Sarah \xe9change ce jeton de sujet contre un jeton d\u2019acc\xe8s repr\xe9sentant Alex, en sp\xe9cifiant la ressource o\xf9 le jeton sera utilis\xe9."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Demande (application de Sarah au point de terminaison du jeton Logto)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"R\xe9ponse (Logto \xe0 l'application de Sarah)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...<truncated>",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "resource:read"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Le ",(0,o.jsx)(n.code,{children:"access_token"})," retourn\xe9 sera li\xe9 \xe0 la ressource sp\xe9cifi\xe9e, garantissant qu'il ne peut \xeatre utilis\xe9 qu'avec l'API de donn\xe9es client de TechCorp."]}),"\n",(0,o.jsx)(n.h2,{id:"example-usage",children:"Exemple d'utilisation"}),"\n",(0,o.jsx)(n.p,{children:"Voici comment Sarah pourrait utiliser cela dans une application de support Node.js :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"interface ImpersonationResponse {\n  subjectToken: string;\n  expiresIn: number;\n}\n\ninterface TokenExchangeResponse {\n  access_token: string;\n  issued_token_type: string;\n  token_type: string;\n  expires_in: number;\n  scope: string;\n}\n\nasync function impersonateUser(\n  userId: string,\n  clientId: string,\n  ticketId: string,\n  resource: string\n): Promise<string> {\n  try {\n    // \xc9tape 1 & 2 : Demande d'usurpation et obtention du jeton de sujet\n    const impersonationResponse = await fetch(\n      'https://api.techcorp.com/api/request-impersonation',\n      {\n        method: 'POST',\n        headers: {\n          Authorization: \"Bearer <Sarah's_access_token>\",\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          userId,\n          reason: 'Investigating resource access issue',\n          ticketId,\n        }),\n      }\n    );\n\n    if (!impersonationResponse.ok) {\n      throw new Error(`HTTP error occurred. Status: ${impersonationResponse.status}`);\n    }\n\n    const { subjectToken } = (await impersonationResponse.json()) as ImpersonationResponse;\n\n    // \xc9tape 3 : \xc9change du jeton de sujet contre un jeton d\u2019acc\xe8s\n    const tokenExchangeBody = new URLSearchParams({\n      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',\n      client_id: clientId,\n      scope: 'openid profile resource.read',\n      subject_token: subjectToken,\n      subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',\n      resource: resource,\n    });\n\n    const tokenExchangeResponse = await fetch('https://techcorp.logto.app/oidc/token', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n      body: tokenExchangeBody,\n    });\n\n    if (!tokenExchangeResponse.ok) {\n      throw new Error(`HTTP error! status: ${tokenExchangeResponse.status}`);\n    }\n\n    const tokenData = (await tokenExchangeResponse.json()) as TokenExchangeResponse;\n    return tokenData.access_token;\n  } catch (error) {\n    console.error('Impersonation failed:', error);\n    throw error;\n  }\n}\n\n// Sarah utilise cette fonction pour usurper l'identit\xe9 d'Alex\nasync function performImpersonation(): Promise<void> {\n  try {\n    const accessToken = await impersonateUser(\n      'alex123',\n      'techcorp_support_app',\n      'TECH-1234',\n      'https://api.techcorp.com/customer-data'\n    );\n    console.log('Impersonation access token for Alex:', accessToken);\n  } catch (error) {\n    console.error('Failed to perform impersonation:', error);\n  }\n}\n\n// Ex\xe9cute l'usurpation\nvoid performImpersonation()\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Le jeton de sujet est de courte dur\xe9e et \xe0 usage unique."}),"\n",(0,o.jsxs)(n.li,{children:["Le jeton d\u2019acc\xe8s d'usurpation ne vient pas avec un ",(0,o.jsx)(n.a,{href:"https://auth.wiki/refresh-token",children:"jeton de rafra\xeechissement"}),". Sarah devra r\xe9p\xe9ter ce processus si le jeton expire avant qu'elle ne r\xe9solve le probl\xe8me d'Alex."]}),"\n",(0,o.jsx)(n.li,{children:"Le serveur backend de TechCorp doit impl\xe9menter des v\xe9rifications d'autorisation appropri\xe9es pour s'assurer que seuls les membres du support autoris\xe9s comme Sarah peuvent demander l'usurpation."}),"\n"]})}),"\n",(0,o.jsxs)(n.h2,{id:"act-claim",children:["Revendication ",(0,o.jsx)(n.code,{children:"act"})]}),"\n",(0,o.jsxs)(n.p,{children:["Lors de l'utilisation du flux d'\xe9change de jetons pour l'usurpation, le jeton d\u2019acc\xe8s \xe9mis peut inclure une revendication ",(0,o.jsx)(n.code,{children:"act"})," (acteur) suppl\xe9mentaire. Cette revendication repr\xe9sente l'identit\xe9 de la \"partie agissante\" - dans notre exemple, Sarah, qui effectue l'usurpation."]}),"\n",(0,o.jsxs)(n.p,{children:["Pour inclure la revendication ",(0,o.jsx)(n.code,{children:"act"}),", l'application de Sarah doit fournir un ",(0,o.jsx)(n.code,{children:"actor_token"})," dans la demande d'\xe9change de jetons. Ce jeton doit \xeatre un jeton d\u2019acc\xe8s valide pour Sarah avec la port\xe9e ",(0,o.jsx)(n.code,{children:"openid"}),". Voici comment l'inclure dans la demande d'\xe9change de jetons :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&actor_token=sarah_access_token\n&actor_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Si un ",(0,o.jsx)(n.code,{children:"actor_token"})," est fourni, le jeton d\u2019acc\xe8s r\xe9sultant contiendra une revendication ",(0,o.jsx)(n.code,{children:"act"})," comme celle-ci :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "aud": "https://api.techcorp.com",\n  "iss": "https://techcorp.logto.app",\n  "exp": 1443904177,\n  "sub": "alex123",\n  "act": {\n    "sub": "sarah789"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Cette revendication ",(0,o.jsx)(n.code,{children:"act"})," indique clairement que Sarah (sarah789) agit au nom d'Alex (alex123). La revendication ",(0,o.jsx)(n.code,{children:"act"})," peut \xeatre utile pour l'audit et le suivi des actions d'usurpation."]}),"\n",(0,o.jsx)(n.h2,{id:"customizing-token-claims",children:"Personnalisation des revendications de jetons"}),"\n",(0,o.jsxs)(n.p,{children:["Logto vous permet de ",(0,o.jsx)(n.a,{href:"/developers/custom-token-claims",children:"personnaliser les revendications de jetons"})," pour les jetons d'usurpation. Cela peut \xeatre utile pour ajouter un contexte ou des m\xe9tadonn\xe9es suppl\xe9mentaires au processus d'usurpation, comme la raison de l'usurpation ou le ticket de support associ\xe9."]}),"\n",(0,o.jsxs)(n.p,{children:["Lorsque le serveur de TechCorp demande un jeton de sujet \xe0 la Management API de Logto, il peut inclure un objet ",(0,o.jsx)(n.code,{children:"context"})," :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "Resource access issue",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Ce ",(0,o.jsx)(n.a,{href:"/developers/custom-token-claims/create-script#context-only-available-for-user-access-token",children:"contexte"})," peut ensuite \xeatre utilis\xe9 dans une fonction ",(0,o.jsx)(n.code,{children:"getCustomJwtClaims()"})," pour ajouter des revendications sp\xe9cifiques au jeton d\u2019acc\xe8s final. Voici un exemple de la fa\xe7on dont cela pourrait \xeatre impl\xe9ment\xe9 :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  if (context.grant?.type === 'urn:ietf:params:oauth:grant-type:token-exchange') {\n    const { ticketId, reason, supportEngineerId } = context.grant.subjectTokenContext;\n    return {\n      impersonation_context: {\n        ticket_id: ticketId,\n        reason: reason,\n        support_engineer: supportEngineerId,\n      },\n    };\n  }\n  return {};\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Le jeton d\u2019acc\xe8s r\xe9sultant que Sarah re\xe7oit pourrait ressembler \xe0 ceci :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "sub": "alex123",\n  "aud": "https://api.techcorp.com/customer-data",\n  "impersonation_context": {\n    "ticket_id": "TECH-1234",\n    "reason": "Resource access issue",\n    "support_engineer": "sarah789"\n  }\n  // ... autres revendications standard\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"En personnalisant les revendications de jetons d\u2019acc\xe8s de cette mani\xe8re, TechCorp peut inclure des informations pr\xe9cieuses sur le contexte d'usurpation, ce qui facilite l'audit et la compr\xe9hension des activit\xe9s d'usurpation dans leur syst\xe8me."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Soyez prudent lorsque vous ajoutez des revendications personnalis\xe9es \xe0 vos jetons. \xc9vitez d'inclure des informations sensibles qui pourraient poser des risques de s\xe9curit\xe9 si le jeton est intercept\xe9 ou divulgu\xe9. Les JWT sont sign\xe9s mais non chiffr\xe9s, donc les revendications sont visibles pour quiconque a acc\xe8s au jeton."})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},79621:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(58101);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);