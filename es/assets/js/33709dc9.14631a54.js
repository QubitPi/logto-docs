"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[18879],{81923:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"authorization/api-resources/python","title":"Gu\xeda: Python","description":"Paso 1: Extraer el Token Bearer del encabezado de la solicitud \\\\","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/authorization/api-resources/python.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/python","permalink":"/es/authorization/api-resources/python","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/authorization/api-resources/python.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Protege tu API","permalink":"/es/authorization/api-resources/protect-your-api"},"next":{"title":"Gu\xeda: Node (Express)","permalink":"/es/authorization/api-resources/node-express"}}');var a=n(25105),t=n(79621);const i={sidebar_position:2},s="Gu\xeda: Python",d={},c=[{value:"Paso 1: Extraer el Token Bearer del encabezado de la solicitud",id:"step-1-extract-the-bearer-token-from-request-header",level:2},{value:"Paso 2: Validaci\xf3n del token",id:"step-2-token-validation",level:2},{value:"Instalar <code>python-jose</code> como tu dependencia",id:"install-python-jose-as-your-dependency",level:3},{value:"Recuperar las configuraciones OIDC de Logto",id:"retrieve-logtos-oidc-configurations",level:3},{value:"Crear el decorador de validaci\xf3n de autorizaci\xf3n",id:"create-the-authorization-validation-decorator",level:3},{value:"Aplicar el decorador a tu API",id:"apply-decorator-to-your-api",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.header,{children:(0,a.jsx)(o.h1,{id:"gu\xeda-python",children:"Gu\xeda: Python"})}),"\n",(0,a.jsx)(o.h2,{id:"step-1-extract-the-bearer-token-from-request-header",children:"Paso 1: Extraer el Token Bearer del encabezado de la solicitud"}),"\n",(0,a.jsxs)(o.p,{children:["Una solicitud autorizada debe contener un encabezado ",(0,a.jsx)(o.code,{children:"Authorization"})," con ",(0,a.jsx)(o.code,{children:"Bearer <access_token>"})," como su contenido. Extrae el Token de Autorizaci\xf3n del encabezado de la solicitud:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:"\"\"\"requires-auth.py\n\"\"\"\ndef get_auth_token():\n  auth = request.headers.get(\"Authorization\", None)\n\n  if not auth:\n    raise Error({ code: 'auth.authorization_header_missing', status: 401 })\n\n  contents = auth.split()\n\n  if len(contents) < 2:\n    raise Error({code: 'auth.authorization_token_invalid_format', status: 401})\n\n  elif contents[0] != 'Bearer':\n    raise Error({code: 'auth.authorization_token_type_not_supported', status: 401})\n\n  return contents[1]\n"})}),"\n",(0,a.jsx)(o.h2,{id:"step-2-token-validation",children:"Paso 2: Validaci\xf3n del token"}),"\n",(0,a.jsxs)(o.p,{children:["Para la demostraci\xf3n, usamos la aplicaci\xf3n Flask y el paquete ",(0,a.jsx)(o.a,{href:"https://github.com/mpdavis/python-jose",children:"jose"})," para crear el decorador require_auth para validar la firma del token, el estado de expiraci\xf3n y los reclamos requeridos."]}),"\n",(0,a.jsxs)(o.h3,{id:"install-python-jose-as-your-dependency",children:["Instalar ",(0,a.jsx)(o.code,{children:"python-jose"})," como tu dependencia"]}),"\n",(0,a.jsxs)(o.p,{children:["Elige la criptograf\xeda que est\xe1s usando en Logto. (",(0,a.jsx)(o.code,{children:"ecdsa"})," por defecto)"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"pip install python-jose[ecdsa]\n\n"})}),"\n",(0,a.jsx)(o.h3,{id:"retrieve-logtos-oidc-configurations",children:"Recuperar las configuraciones OIDC de Logto"}),"\n",(0,a.jsxs)(o.p,{children:["Necesitar\xe1s un conjunto de claves p\xfablicas JWK y el emisor del token para verificar la firma y la fuente del token JWS recibido. Todas las configuraciones p\xfablicas de autorizaci\xf3n de Logto m\xe1s recientes se pueden encontrar en ",(0,a.jsx)(o.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Por ejemplo, llama a ",(0,a.jsx)(o.code,{children:"https://tenant-id.logto.app/oidc/.well-known/openid-configuration"}),". Y localiza los siguientes dos campos en el cuerpo de la respuesta:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-json",children:'{\n  "jwks_uri": "https://tenant-id.logto.app/oidc/jwks",\n  "issuer": "https://tenant-id.logto.app/oidc"\n}\n'})}),"\n",(0,a.jsx)(o.h3,{id:"create-the-authorization-validation-decorator",children:"Crear el decorador de validaci\xf3n de autorizaci\xf3n"}),"\n",(0,a.jsx)(o.admonition,{type:"warning",children:(0,a.jsxs)(o.p,{children:["Si usas ",(0,a.jsx)(o.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"control de acceso basado en roles (RBAC)"}),", tambi\xe9n se requiere la validaci\xf3n del alcance."]})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:"\"\"\"requires-auth.py\n\"\"\"\n\nimport json\nfrom flask import request,  _request_ctx_stack\nfrom six.moves.urllib.request import urlopen\nfrom functools import wraps\nfrom jose import jwt\n\ndef requires_auth(f):\n  @wraps(f)\n  def decorated(*args, **kwargs):\n    token = get_token_auth_header()\n\n# endpoint jwks_uri recuperado de Logto\n    jwks_uri = urlopen('https://<your-logto-domain>/oidc/jwks')\n\n# emisor recuperado de Logto\n    issuer = 'https://<your-logto-domain>/oidc'\n\n    jwks = json.loads(jwks_uri.read())\n\n    try:\n      payload = jwt.decode(\n        token,\n        jwks,\n# El algoritmo de codificaci\xf3n jwt recuperado junto con jwks. ES384 por defecto\n        algorithms=jwt.get_unverified_header(token).get('alg'),\n# El indicador de recurso registrado de la API en Logto\n        audience='<your request listener resource indicator>',\n        issuer=issuer,\n        options={\n          'verify_at_hash': False\n        }\n      )\n    except Exception:\n# manejador de excepciones\n      raise Error({code: 'invalid_token', status: 401})\n\n# C\xf3digo personalizado para procesar el payload\n    _request_ctx_stack.top.user_id = payload.get('sub')\n\n    return f(*args, **kwargs)\n  return decorated\n"})}),"\n",(0,a.jsx)(o.h2,{id:"apply-decorator-to-your-api",children:"Aplicar el decorador a tu API"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-python",children:'from flask import Flask\nfrom flask_cors import cross_origin\n\nAPP = Flask(__name__)\n\n@APP.route("/user/info")\n@cross_origin(headers=["Content-Type", "Authorization"])\n@requires_auth\ndef api:\n# Tu l\xf3gica de API\n'})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},79621:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>s});var r=n(58101);const a={},t=r.createContext(a);function i(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);