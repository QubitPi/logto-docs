"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5906],{41620:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"logto-oss/develop-your-connector/implement-connectors","title":"Implementar conectores","description":"Despu\xe9s de revisar la estructura de archivos del conector, discutamos la implementaci\xf3n y la idea principal de desarrollar un conector.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/develop-your-connector/implement-connectors.mdx","sourceDirName":"logto-oss/develop-your-connector","slug":"/logto-oss/develop-your-connector/implement-connectors","permalink":"/es/logto-oss/develop-your-connector/implement-connectors","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/logto-oss/develop-your-connector/implement-connectors.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Estructura de archivos del conector","permalink":"/es/logto-oss/develop-your-connector/connector-file-structure"},"next":{"title":"Gu\xeda paso a paso para desarrollar un conector social","permalink":"/es/logto-oss/develop-your-connector/step-by-step-guide"}}');var r=o(25105),a=o(79621);const t={sidebar_position:2},c="Implementar conectores",i={},l=[{value:"Construir un conector social",id:"build-a-social-connector",level:2},{value:"getAuthorizationUri",id:"getauthorizationuri",level:3},{value:"getAccessToken",id:"getaccesstoken",level:3},{value:"getUserInfo",id:"getuserinfo",level:3},{value:"Construir un conector sin contrase\xf1a",id:"build-a-passwordless-connector",level:2},{value:"sendMessage",id:"sendmessage",level:3},{value:"\xbfQu\xe9 m\xe1s?",id:"whats-more",level:2},{value:"Instalar tus propios conectores",id:"install-your-own-connectors",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"implementar-conectores",children:"Implementar conectores"})}),"\n",(0,r.jsx)(n.p,{children:"Despu\xe9s de revisar la estructura de archivos del conector, discutamos la implementaci\xf3n y la idea principal de desarrollar un conector."}),"\n",(0,r.jsx)(n.p,{children:"Revisaremos un ejemplo sencillo para conectores sociales y sin contrase\xf1a para que puedas construir tu conector con casi la misma idea."}),"\n",(0,r.jsxs)(n.p,{children:["En esta parte, no profundizaremos en los detalles de par\xe1metros espec\xedficos (como ",(0,r.jsx)(n.code,{children:"config"}),") ya que no es el objetivo de esta gu\xeda. Los desarrolladores que implementen nuevos conectores deben leer los documentos proporcionados por los proveedores de servicios de terceros, y esos documentos deben detallar los par\xe1metros."]}),"\n",(0,r.jsx)(n.h2,{id:"build-a-social-connector",children:"Construir un conector social"}),"\n",(0,r.jsx)(n.p,{children:"Tomemos el conector de GitHub como ejemplo."}),"\n",(0,r.jsxs)(n.p,{children:["El flujo de autorizaci\xf3n de la mayor\xeda de los conectores sociales sigue el ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-basic-1_0.html",children:"Flujo de C\xf3digo de Autorizaci\xf3n de OAuth"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["La mayor\xeda de los ",(0,r.jsx)(n.em,{children:"conectores sociales"}),", obtienen un perfil de usuario con la autenticaci\xf3n de los usuarios finales siguiendo un esquema de dos pasos (asumiendo que todos los pasos tienen \xe9xito):"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Iniciar una solicitud de autenticaci\xf3n y obtener la autenticaci\xf3n del usuario."}),"\n",(0,r.jsxs)(n.li,{children:["Obtener ",(0,r.jsx)(n.code,{children:"accessToken"})," utilizando un ",(0,r.jsx)(n.code,{children:"authCode"})," otorgado por el proveedor del conector."]}),"\n",(0,r.jsxs)(n.li,{children:["Solicitar un perfil de usuario accesible p\xfablicamente usando ",(0,r.jsx)(n.code,{children:"accessToken"}),"."]}),"\n"]})]}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n\tactor user as Usuario final\n\tparticipant logto as Logto\n\tparticipant platform as Plataforma social de terceros\n\n\tuser ->> logto: El usuario inicia sesi\xf3n social\n\tlogto ->> platform: Logto redirige a la plataforma social de terceros\n\tplatform --\x3e> user: La plataforma social solicita al usuario que inicie sesi\xf3n\n\tuser ->> platform: El usuario inicia sesi\xf3n y autoriza el acceso de Logto\n\tplatform --\x3e> logto: Redirige de nuevo al URI de callback de Logto con un c\xf3digo de autorizaci\xf3n\n\tlogto ->> platform: Logto intercambia el c\xf3digo por un token de acceso\n\tplatform --\x3e> logto: La plataforma social devuelve el token de acceso\n\tlogto ->> platform: Logto obtiene informaci\xf3n del usuario con el token de acceso\n\tplatform --\x3e> logto: La plataforma social devuelve la informaci\xf3n del usuario\n\tlogto --\x3e> user: Logto devuelve la informaci\xf3n del usuario a la aplicaci\xf3n del usuario, <br> completa el flujo de inicio de sesi\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Para completar el flujo, necesitamos tener los siguientes tres m\xe9todos:"}),"\n",(0,r.jsx)(n.h3,{id:"getauthorizationuri",children:"getAuthorizationUri"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getAuthorizationUri"})," genera una URL de redirecci\xf3n que puede dirigir a los usuarios finales a la p\xe1gina que necesita la autenticaci\xf3n de los usuarios."]}),"\n",(0,r.jsxs)(n.p,{children:["La interfaz est\xe1 definida como ",(0,r.jsx)(n.code,{children:"GetAuthorizationUri"})," en ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/master/packages/toolkit/connector-kit/src/types/social.ts",children:(0,r.jsx)(n.code,{children:"@logto/connector-kit"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Se te permite almacenar informaci\xf3n esencial relacionada con el inicio de sesi\xf3n usando ",(0,r.jsx)(n.code,{children:"setSession"})," (el segundo par\xe1metro de entrada de ",(0,r.jsx)(n.code,{children:"GetAuthorizationUri"}),") para el m\xe9todo ",(0,r.jsx)(n.code,{children:"getUserInfo"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Los par\xe1metros listados son necesarios:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"authorizationEndpoint"})," se puede encontrar en el sitio de documentaci\xf3n de OAuth de GitHub, que es la p\xe1gina donde el usuario final debe ir para la autenticaci\xf3n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config"}),", que incluye ",(0,r.jsx)(n.code,{children:"clientId"})," y ",(0,r.jsx)(n.code,{children:"clientSecret"})," en el escenario de GitHub"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"state"}),", una cadena aleatoria para probar CSRF"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"redirectUri"})," de la p\xe1gina de destino despu\xe9s de la autenticaci\xf3n exitosa del usuario final"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const getAuthorizationUri = async ({ state, redirectUri }) => {\n  const queryParameters = new URLSearchParams({\n    client_id: config.clientId, // `config` contiene las credenciales de tu aplicaci\xf3n de GitHub\n    redirect_uri: redirectUri,\n    state,\n  });\n\n  return `${authorizationEndpoint}?${queryParameters.toString()}`;\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"getaccesstoken",children:"getAccessToken"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getAccessToken"})," obtiene el token de acceso con el c\xf3digo de autorizaci\xf3n emitido despu\xe9s de la autenticaci\xf3n exitosa de los usuarios finales."]}),"\n",(0,r.jsxs)(n.p,{children:["Adem\xe1s de ",(0,r.jsx)(n.code,{children:"config"})," que mencionamos en el m\xe9todo anterior ",(0,r.jsx)(n.code,{children:"getAuthorizationUri"}),", tambi\xe9n queremos obtener:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"code"})," de autorizaci\xf3n de los par\xe1metros llevados a la p\xe1gina de destino de redirecci\xf3n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"accessTokenEndpoint"}),", que es el punto final para obtener el token de acceso con el c\xf3digo de autorizaci\xf3n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const getAccessToken = async (config: GithubConfig, code: string) => {\n  const { clientId: client_id, clientSecret: client_secret } = config;\n\n  const httpResponse = await got.post({\n    url: accessTokenEndpoint,\n    json: {\n      client_id,\n      client_secret,\n      code,\n    },\n    timeout: defaultTimeout,\n  });\n\n  const result = accessTokenResponseGuard.safeParse(qs.parse(httpResponse.body));\n\n  if (!result.success) {\n    throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n  }\n\n  const { access_token: accessToken } = result.data;\n\n  assert(accessToken, new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid));\n\n  return { accessToken };\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"getuserinfo",children:"getUserInfo"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getUserInfo"})," obtiene informaci\xf3n del usuario con el token de acceso obtenido en el paso anterior."]}),"\n",(0,r.jsxs)(n.p,{children:["La interfaz est\xe1 definida como ",(0,r.jsx)(n.code,{children:"GetUserInfo"})," en ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/master/packages/toolkit/connector-kit/src/types/social.ts",children:(0,r.jsx)(n.code,{children:"@logto/connector-kit"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para prop\xf3sitos de inicio de sesi\xf3n, puedes recuperar la informaci\xf3n necesaria usando la funci\xf3n ",(0,r.jsx)(n.code,{children:"getSession"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"userInfoEndpoint"})," es el punto final que se utiliza para obtener informaci\xf3n del usuario."]}),"\n",(0,r.jsx)(n.p,{children:"Puedes consultar documentos oficiales para encontrar informaci\xf3n espec\xedfica del usuario que se puede acceder en el punto final de informaci\xf3n del usuario y el alcance correspondiente."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"id"})," asignado por el proveedor de identidad del conector (en este caso, GitHub) es obligatorio; otra informaci\xf3n es opcional. Si puedes obtener ",(0,r.jsx)(n.code,{children:"email"})," o ",(0,r.jsx)(n.code,{children:"phone"}),' del perfil del usuario, ASEG\xdaRATE de que est\xe9n "verificados". Tambi\xe9n necesitas alinear las claves de retorno con los nombres de los campos en el ',(0,r.jsx)(n.a,{href:"/user-management/user-data/#basic-data",children:"perfil de usuario de Logto"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const getUserInfo = async (\n  data: { code: string; config: GithubConfig },\n  getSession: GetSession,\n  { set: SetStorageValue, get: GetStorageValue }\n) => {\n  const { code, config } = data;\n  const { accessToken } = await getAccessToken(config, code);\n\n  try {\n    const httpResponse = await got.get(userInfoEndpoint, {\n      headers: {\n        authorization: `token ${accessToken}`,\n      },\n      timeout: defaultTimeout,\n    });\n\n    const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));\n\n    if (!result.success) {\n      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n    }\n\n    const { id, avatar_url: avatar, email, name } = result.data;\n\n    return {\n      id: String(id),\n      avatar: conditional(avatar),\n      email: conditional(email),\n      name: conditional(name),\n    };\n  } catch (error: unknown) {\n    if (error instanceof HTTPError) {\n      const { statusCode, body: rawBody } = error.response;\n\n      if (statusCode === 401) {\n        throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);\n      }\n\n      throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));\n    }\n\n    throw error;\n  }\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Puedes encontrar la implementaci\xf3n completa ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/connectors/blob/master/packages/connector-github/src/index.ts",children:"aqu\xed"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Para m\xe1s detalles sobre los par\xe1metros configurables, consulta el README del conector de GitHub o los documentos oficiales de GitHub."}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"El ejemplo que hemos estado discutiendo se basa en el tipo de concesi\xf3n de C\xf3digo de Autorizaci\xf3n del protocolo OAuth, que se utiliza en el conector de GitHub de Logto. Sin embargo, vale la pena destacar que otro tipo de concesi\xf3n, el tipo de concesi\xf3n Impl\xedcita, tambi\xe9n se puede usar para recuperar el perfil de un usuario, y de hecho, proporciona un access_token directamente en la respuesta de autenticaci\xf3n. A pesar de esta conveniencia, el tipo de concesi\xf3n de C\xf3digo de Autorizaci\xf3n generalmente se recomienda sobre el tipo Impl\xedcito debido a su mayor seguridad."}),(0,r.jsx)(n.p,{children:"Tambi\xe9n puedes construir un conector basado en OIDC u otros protocolos abiertos, depende de tu caso de uso as\xed como de la compatibilidad del proveedor social al que deseas conectarte."})]}),"\n",(0,r.jsx)(n.h2,{id:"build-a-passwordless-connector",children:"Construir un conector sin contrase\xf1a"}),"\n",(0,r.jsx)(n.p,{children:"Revisemos la implementaci\xf3n del conector de correo directo de Aliyun para comprender el proceso de construir un conector sin contrase\xf1a."}),"\n",(0,r.jsxs)(n.p,{children:["Los conectores sin contrase\xf1a se utilizan para enviar un c\xf3digo aleatorio al correo electr\xf3nico o tel\xe9fono de los usuarios finales. Como resultado, se requiere un m\xe9todo ",(0,r.jsx)(n.code,{children:"sendMessage"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"sendmessage",children:"sendMessage"}),"\n",(0,r.jsxs)(n.p,{children:["Para enviar un mensaje, necesitamos que ",(0,r.jsx)(n.code,{children:"config"})," y ",(0,r.jsx)(n.code,{children:"endpoint"})," est\xe9n configurados correctamente."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"endpoint"})," es el punto final al que se conectan tus llamadas API"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"config"})," contiene ",(0,r.jsx)(n.code,{children:"templates"})," (plantillas de contenido para enviar el c\xf3digo de acceso en diferentes flujos de usuario), ",(0,r.jsx)(n.code,{children:"clientId"})," y ",(0,r.jsx)(n.code,{children:"clientSecret"})," (para acceder a las solicitudes de API)"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const sendMessage = async (data, inputConfig) => {\n  const { to, type, payload } = data;\n  const config = inputConfig ?? (await getConfig(defaultMetadata.id));\n  validateConfig<AliyunDmConfig>(config, aliyunDmConfigGuard);\n  const { accessKeyId, accessKeySecret, accountName, fromAlias, templates } = config;\n  const template = templates.find((template) => template.usageType === type);\n\n  assert(\n    template,\n    new ConnectorError(\n      ConnectorErrorCodes.TemplateNotFound,\n      `Cannot find template for type: ${type}`\n    )\n  );\n\n  const parameters = {\n    AccessKeyId: accessKeyId,\n    AccountName: accountName,\n    ReplyToAddress: 'false',\n    AddressType: '1',\n    ToAddress: to,\n    FromAlias: fromAlias,\n    Subject: template.subject,\n    HtmlBody:\n      typeof payload.code === 'string'\n        ? template.content.replace(/{{code}}/g, payload.code)\n        : template.content,\n  };\n\n  try {\n    const httpResponse = await request(\n      endpoint,\n      { Action: 'SingleSendMail', ...staticConfigs, ...parameters },\n      accessKeySecret\n    );\n\n    const result = sendEmailResponseGuard.safeParse(parseJson(httpResponse.body));\n\n    if (!result.success) {\n      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n    }\n\n    return result.data;\n  } catch (error: unknown) {\n    if (error instanceof HTTPError) {\n      const {\n        response: { body: rawBody },\n      } = error;\n\n      assert(typeof rawBody === 'string', new ConnectorError(ConnectorErrorCodes.InvalidResponse));\n\n      errorHandler(rawBody);\n    }\n\n    throw error;\n  }\n};\n\nconst request = async (\n  url: string,\n  parameters: PublicParameters & Record<string, string>,\n  accessKeySecret: string\n) => {\n  const finalParameters: Record<string, string> = {\n    ...parameters,\n    SignatureNonce: String(Math.random()),\n    Timestamp: new Date().toISOString(),\n  };\n  const signature = getSignature(finalParameters, accessKeySecret, 'POST');\n\n  const payload = new URLSearchParams();\n\n  for (const [key, value] of Object.entries(finalParameters)) {\n    payload.append(key, value);\n  }\n  payload.append('Signature', signature);\n\n  return got.post({\n    url,\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n    },\n    form: payload,\n  });\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Puedes encontrar la implementaci\xf3n completa ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/connectors/blob/master/packages/connector-aliyun-dm/src/index.ts",children:"aqu\xed"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Para m\xe1s detalles sobre los par\xe1metros configurables, consulta el README del conector de correo directo de Aliyun o los documentos oficiales de correo directo de Aliyun."}),"\n",(0,r.jsx)(n.h2,{id:"whats-more",children:"\xbfQu\xe9 m\xe1s?"}),"\n",(0,r.jsxs)(n.p,{children:["Para ver la definici\xf3n de los m\xe9todos del conector y construir una imagen del dise\xf1o de la interfaz del conector, consulta ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/toolkit/connector-kit",children:(0,r.jsx)(n.code,{children:"@logto/connector-kit"})}),". Tambi\xe9n puedes encontrar la referencia de ",(0,r.jsx)(n.em,{children:"ConnectorMetadata"}),' en "',(0,r.jsx)(n.a,{href:"/connectors/connector-data-structure/#connectors-local-storage-connectormetadata",children:"Connectors - ConnectorMetadata"}),'" y "',(0,r.jsx)(n.a,{href:"/logto-oss/develop-your-connector/connector-file-structure/",children:"Estructura de archivos del conector"}),'" que pueden ayudarte a organizar tu implementaci\xf3n.']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["El esquema de ",(0,r.jsx)(n.em,{children:"Zod"})," de la configuraci\xf3n de un conector es obligatorio para todos los conectores. Esto es bastante importante ya que realizamos una verificaci\xf3n de tipo antes de guardar ",(0,r.jsx)(n.code,{children:"config"})," en la base de datos y llamar a las API que requieren informaci\xf3n de ",(0,r.jsx)(n.code,{children:"config"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Todos los ",(0,r.jsx)(n.em,{children:"conectores de SMS"})," y ",(0,r.jsx)(n.em,{children:"conectores de correo electr\xf3nico"})," requieren un m\xe9todo ",(0,r.jsx)(n.code,{children:"sendMessage"})," para llamar a las API de env\xedo de mensajes de los proveedores de servicios utilizando configuraciones de la base de datos. Los desarrolladores tambi\xe9n pueden reutilizar este m\xe9todo para enviar un mensaje de prueba con una configuraci\xf3n no guardada mientras configuran los conectores en la Consola de Administraci\xf3n."]}),"\n",(0,r.jsxs)(n.li,{children:["El generador de URL de autorizaci\xf3n ",(0,r.jsx)(n.code,{children:"getAuthorizationUri"})," y el recuperador de perfil de usuario ",(0,r.jsx)(n.code,{children:"getUserInfo"})," son necesarios para todos los ",(0,r.jsx)(n.em,{children:"conectores sociales"})," (",(0,r.jsx)(n.code,{children:"getAccessToken"})," se considera un paso opcional en ",(0,r.jsx)(n.code,{children:"getUserInfo"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"Todos los m\xe9todos de los conectores funcionan a trav\xe9s de llamadas API, como resultado, los desarrolladores de conectores necesitan revisar documentos y manejar posibles respuestas de llamadas API no exitosas."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install-your-own-connectors",children:"Instalar tus propios conectores"}),"\n",(0,r.jsx)(n.p,{children:"Asumimos que ya has terminado de construir tu propio conector. Sigue los siguientes pasos para instalarlo manualmente:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Copia la carpeta del conector que implementaste en el directorio ",(0,r.jsx)(n.code,{children:"/packages/connectors"})," de ",(0,r.jsx)(n.a,{href:"https://github.com/logto-io/logto",children:(0,r.jsx)(n.code,{children:"logto-io/logto"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Instala las dependencias del repositorio del conector escribiendo ",(0,r.jsx)(n.code,{children:"pnpm pnpm:devPreinstall && pnpm i"})," en la ruta ra\xedz de la carpeta logto."]}),"\n",(0,r.jsxs)(n.li,{children:["Construye el conector con ",(0,r.jsx)(n.code,{children:"pnpm connectors build"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Enlaza los conectores locales usando ",(0,r.jsx)(n.code,{children:"pnpm cli connector link"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Reinicia la instancia de Logto con ",(0,r.jsx)(n.code,{children:"pnpm dev"})," en el directorio ra\xedz de ",(0,r.jsx)(n.code,{children:"logto-io/logto"}),", y podr\xe1s encontrar los conectores instalados con \xe9xito."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Ahora puedes probar y verificar tu conector para ver si funciona como se espera."}),"\n",(0,r.jsxs)(n.p,{children:["Si deseas agregar conectores que ya han sido publicados en NPM o conectores oficiales de Logto, puedes consultar ",(0,r.jsx)(n.a,{href:"/logto-oss/using-cli/manage-connectors/#add-connectors",children:"Usando Logto CLI - Gestionar conectores"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79621:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>c});var s=o(58101);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);