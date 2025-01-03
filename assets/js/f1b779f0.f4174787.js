"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[98603],{49320:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"authorization/api-resources/python","title":"Guide: Python","description":"Step 1: Extract the Bearer Token from request header \\\\","source":"@site/docs/authorization/api-resources/python.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/python","permalink":"/authorization/api-resources/python","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/authorization/api-resources/python.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Protect your API","permalink":"/authorization/api-resources/protect-your-api"},"next":{"title":"Guide: Node (Express)","permalink":"/authorization/api-resources/node-express"}}');var r=o(25105),i=o(79621);const a={sidebar_position:2},s="Guide: Python",d={},c=[{value:"Step 1: Extract the Bearer Token from request header",id:"step-1-extract-the-bearer-token-from-request-header",level:2},{value:"Step 2: Token validation",id:"step-2-token-validation",level:2},{value:"Install <code>python-jose</code> as your dependency",id:"install-python-jose-as-your-dependency",level:3},{value:"Retrieve Logto&#39;s OIDC configurations",id:"retrieve-logtos-oidc-configurations",level:3},{value:"Create the authorization validation decorator",id:"create-the-authorization-validation-decorator",level:3},{value:"Apply decorator to your API",id:"apply-decorator-to-your-api",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"guide-python",children:"Guide: Python"})}),"\n",(0,r.jsx)(t.h2,{id:"step-1-extract-the-bearer-token-from-request-header",children:"Step 1: Extract the Bearer Token from request header"}),"\n",(0,r.jsxs)(t.p,{children:["A authorized request should contain an ",(0,r.jsx)(t.code,{children:"Authorization"})," header with ",(0,r.jsx)(t.code,{children:"Bearer <access_token>"})," as its content. Extract the Authorization Token from the request header:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"\"\"\"requires-auth.py\n\"\"\"\ndef get_auth_token():\n  auth = request.headers.get(\"Authorization\", None)\n\n  if not auth:\n    raise Error({ code: 'auth.authorization_header_missing', status: 401 })\n\n  contents = auth.split()\n\n  if len(contents) < 2\n    raise Error({code: 'auth.authorization_token_invalid_format', status: 401})\n\n  elif contents[0] != 'Bearer'\n    raise Error({code: 'auth.authorization_token_type_not_supported', status: 401})\n\n  return contents[1]\n"})}),"\n",(0,r.jsx)(t.h2,{id:"step-2-token-validation",children:"Step 2: Token validation"}),"\n",(0,r.jsxs)(t.p,{children:["For demonstration, we use the Flask app and ",(0,r.jsx)(t.a,{href:"https://github.com/mpdavis/python-jose",children:"jose"})," package to create the require_auth decorator to validate the token's signature, expiration status, and required claims."]}),"\n",(0,r.jsxs)(t.h3,{id:"install-python-jose-as-your-dependency",children:["Install ",(0,r.jsx)(t.code,{children:"python-jose"})," as your dependency"]}),"\n",(0,r.jsxs)(t.p,{children:["Pick the cryptography your are using in Logto. (",(0,r.jsx)(t.code,{children:"ecdsa"})," by default)"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"pip install python-jose[ecdsa]\n\n"})}),"\n",(0,r.jsx)(t.h3,{id:"retrieve-logtos-oidc-configurations",children:"Retrieve Logto's OIDC configurations"}),"\n",(0,r.jsxs)(t.p,{children:["You will need a JWK public key set and the token issuer to verify the signature and source of the received JWS token. All the latest public Logto Authorization Configurations can be found at ",(0,r.jsx)(t.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["e.g. Call ",(0,r.jsx)(t.code,{children:"https://tenant-id.logto.app/oidc/.well-known/openid-configuration"}),". And locate the following two fields in the response body:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "jwks_uri": "https://tenant-id.logto.app/oidc/jwks",\n  "issuer": "https://tenant-id.logto.app/oidc"\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"create-the-authorization-validation-decorator",children:"Create the authorization validation decorator"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["If you use ",(0,r.jsx)(t.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"Role-based access control"}),", scope validation is also required."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"\"\"\"requires-auth.py\n\"\"\"\n\nimport json\nfrom flask import request,  _request_ctx_stack\nfrom six.moves.urllib.request import urlopen\nfrom functools import wraps\nfrom jose import jwt\n\ndef requires_auth(f):\n  @wraps(f)\n  def decorated(*args, **kwargs):\n    token = get_token_auth_header()\n\n# jwks_uri endpoint retrieved from Logto\n    jwks_uri = urlopen('https://<your-logto-domain>/oidc/jwks')\n\n# issuer retrieved from Logto\n    issuer = 'https://<your-logto-domain>/oidc'\n\n    jwks = json.loads(jwks_uri.read())\n\n    try:\n      payload = jwt.decode(\n        token,\n        jwks,\n# The jwt encode algorithm retrieved along with jwks. ES384 by default\n        algorithms=jwt.get_unverified_header(token).get('alg'),\n# The API's registered resource indicator in Logto\n        audience='<your request listener resource indicator>',\n        issuer=issuer,\n        options={\n          'verify_at_hash': False\n        }\n      )\n    except Exception:\n# exception handler\n      raise Error({code: 'invalid_token', status: 401})\n\n# Custom code to process payload\n    _request_ctx_stack.top.user_id = payload.get('sub')\n\n    return f(*args, **kwargs)\n  return decorated\n"})}),"\n",(0,r.jsx)(t.h2,{id:"apply-decorator-to-your-api",children:"Apply decorator to your API"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from flask import Flask\nfrom flask_cors import cross_origin\n\nAPP = Flask(__name__)\n\n@APP.route("/user/info")\n@cross_origin(headers=["Content-Type", "Authorization"])\n@requires_auth\ndef api:\n# Your API Logic\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79621:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var n=o(58101);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);