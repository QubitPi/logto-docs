"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1407],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82958:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=t(665),r=t(40151),a=(t(59496),t(49613)),i=["components"],s={sidebar_label:"Guide to implement connectors",sidebar_position:2},c="Guide to implementing connectors",l={unversionedId:"docs/recipes/create-your-connector/connector-implementation-guide",id:"version-1.x/docs/recipes/create-your-connector/connector-implementation-guide",title:"Guide to implementing connectors",description:"After looking at the connector's file structure, let's discuss the implementation and main idea of developing a connector.",source:"@site/versioned_docs/version-1.x/docs/recipes/create-your-connector/connector-implementation-guide.mdx",sourceDirName:"docs/recipes/create-your-connector",slug:"/docs/recipes/create-your-connector/connector-implementation-guide",permalink:"/logto-docs/docs/recipes/create-your-connector/connector-implementation-guide",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/create-your-connector/connector-implementation-guide.mdx",tags:[],version:"1.x",sidebarPosition:2,frontMatter:{sidebar_label:"Guide to implement connectors",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Connector file structure",permalink:"/logto-docs/docs/recipes/create-your-connector/connector-file-structure"},next:{title:"\ud83d\ude9d Interact with Management API",permalink:"/logto-docs/docs/recipes/interact-with-management-api/"}},p={},d=[{value:"Build a social connector",id:"build-a-social-connector",level:2},{value:"getAuthorizationUri",id:"getauthorizationuri",level:3},{value:"getAccessToken",id:"getaccesstoken",level:3},{value:"getUserInfo",id:"getuserinfo",level:3},{value:"Build a passwordless connector",id:"build-a-passwordless-connector",level:2},{value:"sendMessage",id:"sendmessage",level:3},{value:"What&#39;s more?",id:"whats-more",level:2},{value:"Install your own connectors",id:"install-your-own-connectors",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guide-to-implementing-connectors"},"Guide to implementing connectors"),(0,a.kt)("p",null,"After looking at the connector's file structure, let's discuss the implementation and main idea of developing a connector."),(0,a.kt)("p",null,"We will go through a straightforward example for social and passwordless connectors so that you can build your connector with almost the same idea."),(0,a.kt)("p",null,"In this part, we are not diving deep into details of specific parameters (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),") since it is not the point of this guide. Developers who implement new connectors should read documents provided by third-party service vendors, and those documents should elaborate on parameters' in details."),(0,a.kt)("h2",{id:"build-a-social-connector"},"Build a social connector"),(0,a.kt)("p",null,"Let's take GitHub connector as an example."),(0,a.kt)("p",null,"Most social connectors' authorization flow obeys ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-basic-1_0.html"},"OAuth Authorization Code Flow"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Majority of the ",(0,a.kt)("em",{parentName:"p"},"Social Connectors"),", obtaining a user profile with end-users' authentication follows a two-step scheme (assume that all steps succeeds):"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Start an authentication request and obtain user's authentication."),(0,a.kt)("li",{parentName:"ol"},"Fetch ",(0,a.kt)("inlineCode",{parentName:"li"},"accessToken")," by using a connector vendor granted ",(0,a.kt)("inlineCode",{parentName:"li"},"authCode"),"."),(0,a.kt)("li",{parentName:"ol"},"Request for a publicly accessible user profile using ",(0,a.kt)("inlineCode",{parentName:"li"},"accessToken"),"."))),(0,a.kt)("p",null,"In order to accomplish the flow, we need to have following three methods:"),(0,a.kt)("h3",{id:"getauthorizationuri"},"getAuthorizationUri"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAuthorizationUri")," generates a redirect URL that can direct end-users to the page need users' authentication."),(0,a.kt)("p",null,"The interface is defined as ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAuthorizationUri")," in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/blob/master/packages/toolkit/connector-kit/src/types.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"@logto/connector-kit")),"."),(0,a.kt)("p",null,"You are allowed to store sign-in-related essential information using ",(0,a.kt)("inlineCode",{parentName:"p"},"setSession")," (the second input parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"GetAuthorizationUri"),") for the sake of ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserInfo")," method."),(0,a.kt)("p",null,"Listed parameters are required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authorizationEndpoint")," can be found in GitHub OAuth doc site, which is the page where end-user should go for authentication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config"),", which includes ",(0,a.kt)("inlineCode",{parentName:"li"},"clientId")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"clientSecret")," in GitHub scenario"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"state"),", a random string to proof CSRF"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redirectUri")," of landing page after end-user's successful authentication")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const getAuthorizationUri = async ({ state, redirectUri }) => {\n  const queryParameters = new URLSearchParams({\n    client_id: config.clientId, // `config` contains your GitHub application credential\n    redirect_uri: redirectUri,\n    state,\n  });\n\n  return `${authorizationEndpoint}?${queryParameters.toString()}`;\n};\n")),(0,a.kt)("h3",{id:"getaccesstoken"},"getAccessToken"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getAccessToken")," gets access token with authorization code issued after end-users successful authentication."),(0,a.kt)("p",null,"Besides ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," we mentioned in previous ",(0,a.kt)("inlineCode",{parentName:"p"},"getAuthorizationUri")," method, we also want to get:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"authorization ",(0,a.kt)("inlineCode",{parentName:"li"},"code")," from parameters brought to redirect landing page"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accessTokenEndpoint"),", which is the endpoint to get access token with authorization code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const getAccessToken = async (config: GithubConfig, code: string) => {\n  const { clientId: client_id, clientSecret: client_secret } = config;\n\n  const httpResponse = await got.post({\n    url: accessTokenEndpoint,\n    json: {\n      client_id,\n      client_secret,\n      code,\n    },\n    timeout: defaultTimeout,\n  });\n\n  const result = accessTokenResponseGuard.safeParse(qs.parse(httpResponse.body));\n\n  if (!result.success) {\n    throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n  }\n\n  const { access_token: accessToken } = result.data;\n\n  assert(accessToken, new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid));\n\n  return { accessToken };\n};\n")),(0,a.kt)("h3",{id:"getuserinfo"},"getUserInfo"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getUserInfo")," fetches user information with access token got in previous step."),(0,a.kt)("p",null,"The interface is defined as ",(0,a.kt)("inlineCode",{parentName:"p"},"GetUserInfo")," in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/blob/master/packages/toolkit/connector-kit/src/types.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"@logto/connector-kit")),"."),(0,a.kt)("p",null,"For sign-in purposes, you can retrieve necessary information using the ",(0,a.kt)("inlineCode",{parentName:"p"},"getSession")," function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"userInfoEndpoint")," is the endpoint which is used to get user information."),(0,a.kt)("p",null,"You may check official documents to find specific user information that can be accessed at user info endpoint and corresponding scope."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"id")," assigned by the connector's identity provider (in this case, GitHub) is required; other information is optional. If you can get ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"phone"),' from the user profile, MAKE SURE that they are "verified". You also need to align the returning keys with the fields name in ',(0,a.kt)("a",{parentName:"p",href:"/logto-docs/docs/references/users/#basic-data"},"Logto user profile"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const getUserInfo = async (\n  data: { code: string; config: GithubConfig },\n  getSession: GetSession,\n  { set: SetStorageValue, get: GetStorageValue }\n) => {\n  const { code, config } = data;\n  const { accessToken } = await getAccessToken(config, code);\n\n  try {\n    const httpResponse = await got.get(userInfoEndpoint, {\n      headers: {\n        authorization: `token ${accessToken}`,\n      },\n      timeout: defaultTimeout,\n    });\n\n    const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));\n\n    if (!result.success) {\n      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n    }\n\n    const { id, avatar_url: avatar, email, name } = result.data;\n\n    return {\n      id: String(id),\n      avatar: conditional(avatar),\n      email: conditional(email),\n      name: conditional(name),\n    };\n  } catch (error: unknown) {\n    if (error instanceof HTTPError) {\n      const { statusCode, body: rawBody } = error.response;\n\n      if (statusCode === 401) {\n        throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);\n      }\n\n      throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));\n    }\n\n    throw error;\n  }\n};\n")),(0,a.kt)("p",null,"You can find complete implementation ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/connectors/blob/master/packages/connector-github/src/index.ts"},"here"),"."),(0,a.kt)("p",null,"For more details on configurable parameters, see GitHub connector README or GitHub official documents."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The example we've been discussing is based on the OAuth protocol's Authorization Code grant type, which is used in Logto's GitHub connector. However, it's worth highlighting that another grant type, the Implicit grant type, can also be used to retrieve a user's profile, and in fact, provides an access_token directly in the authentication response. Despite this convenience, the Authorization Code grant type is generally recommended over the Implicit type due to its stronger security."),(0,a.kt)("p",{parentName:"admonition"},"You can also build a connector based on OIDC or some other open protocols, it depends on your use case as well as the compatibility of the social vendor you want to connect to.")),(0,a.kt)("h2",{id:"build-a-passwordless-connector"},"Build a passwordless connector"),(0,a.kt)("p",null,"Let's go through the implementation of Aliyun direct mail connector to get the process of building a passwordless connector."),(0,a.kt)("p",null,"Passwordless connectors are used to send a random code to end-users' email or phone. As a result, a ",(0,a.kt)("inlineCode",{parentName:"p"},"sendMessage")," method is required."),(0,a.kt)("h3",{id:"sendmessage"},"sendMessage"),(0,a.kt)("p",null,"In order to send message, we need ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint")," to be correctly set up."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"endpoint")," is the endpoint your API calls connect to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config")," contains ",(0,a.kt)("inlineCode",{parentName:"li"},"templates")," (contents templates for sending passcode in different user flows), ",(0,a.kt)("inlineCode",{parentName:"li"},"clientId")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"clientSecret")," (to access to API requests)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const sendMessage = async (data, inputConfig) => {\n  const { to, type, payload } = data;\n  const config = inputConfig ?? (await getConfig(defaultMetadata.id));\n  validateConfig<AliyunDmConfig>(config, aliyunDmConfigGuard);\n  const { accessKeyId, accessKeySecret, accountName, fromAlias, templates } = config;\n  const template = templates.find((template) => template.usageType === type);\n\n  assert(\n    template,\n    new ConnectorError(\n      ConnectorErrorCodes.TemplateNotFound,\n      `Cannot find template for type: ${type}`\n    )\n  );\n\n  const parameters = {\n    AccessKeyId: accessKeyId,\n    AccountName: accountName,\n    ReplyToAddress: 'false',\n    AddressType: '1',\n    ToAddress: to,\n    FromAlias: fromAlias,\n    Subject: template.subject,\n    HtmlBody:\n      typeof payload.code === 'string'\n        ? template.content.replace(/{{code}}/g, payload.code)\n        : template.content,\n  };\n\n  try {\n    const httpResponse = await request(\n      endpoint,\n      { Action: 'SingleSendMail', ...staticConfigs, ...parameters },\n      accessKeySecret\n    );\n\n    const result = sendEmailResponseGuard.safeParse(parseJson(httpResponse.body));\n\n    if (!result.success) {\n      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n    }\n\n    return result.data;\n  } catch (error: unknown) {\n    if (error instanceof HTTPError) {\n      const {\n        response: { body: rawBody },\n      } = error;\n\n      assert(typeof rawBody === 'string', new ConnectorError(ConnectorErrorCodes.InvalidResponse));\n\n      errorHandler(rawBody);\n    }\n\n    throw error;\n  }\n};\n\nconst request = async (\n  url: string,\n  parameters: PublicParameters & Record<string, string>,\n  accessKeySecret: string\n) => {\n  const finalParameters: Record<string, string> = {\n    ...parameters,\n    SignatureNonce: String(Math.random()),\n    Timestamp: new Date().toISOString(),\n  };\n  const signature = getSignature(finalParameters, accessKeySecret, 'POST');\n\n  const payload = new URLSearchParams();\n\n  for (const [key, value] of Object.entries(finalParameters)) {\n    payload.append(key, value);\n  }\n  payload.append('Signature', signature);\n\n  return got.post({\n    url,\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n    },\n    form: payload,\n  });\n};\n")),(0,a.kt)("p",null,"You can find complete implementation ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/connectors/blob/master/packages/connector-aliyun-dm/src/index.ts"},"here"),"."),(0,a.kt)("p",null,"For more details on configurable parameters, see Aliyun direct mail connector README or Aliyun direct mail official documents."),(0,a.kt)("h2",{id:"whats-more"},"What's more?"),(0,a.kt)("p",null,"To see connector methods' definition and build a picture of connector interface design, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/toolkit/connector-kit"},(0,a.kt)("inlineCode",{parentName:"a"},"@logto/connector-kit")),". You can also find ",(0,a.kt)("em",{parentName:"p"},"ConnectorMetadata"),' reference at "',(0,a.kt)("a",{parentName:"p",href:"/logto-docs/docs/references/connectors/#connectors-local-storage-connectormetadata"},"Connectors - ConnectorMetadata"),'" and "',(0,a.kt)("a",{parentName:"p",href:"/logto-docs/docs/recipes/create-your-connector/connector-file-structure"},"Connector file structure"),'" can help you figure out how to organize your implementation.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A connector's config ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/colinhacks/zod"},(0,a.kt)("em",{parentName:"a"},"Zod"))," schema is obligatory for all connectors. This is quite important since we do type check before saving ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," to DB and calling APIs which requires ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," information."),(0,a.kt)("li",{parentName:"ul"},"All ",(0,a.kt)("em",{parentName:"li"},"SMS Connectors")," and ",(0,a.kt)("em",{parentName:"li"},"Email Connectors")," require a ",(0,a.kt)("inlineCode",{parentName:"li"},"sendMessage")," method to call service providers message sending APIs using configs from the database. Developers can also reuse this method to send a testing message with unsaved config while setting connectors up in Admin Console."),(0,a.kt)("li",{parentName:"ul"},"Authorization URL generator ",(0,a.kt)("inlineCode",{parentName:"li"},"getAuthorizationUri")," and user profile retriever ",(0,a.kt)("inlineCode",{parentName:"li"},"getUserInfo")," are required for all ",(0,a.kt)("em",{parentName:"li"},"Social Connectors")," (",(0,a.kt)("inlineCode",{parentName:"li"},"getAccessToken")," is regarded as an optional step in ",(0,a.kt)("inlineCode",{parentName:"li"},"getUserInfo"),")."),(0,a.kt)("li",{parentName:"ul"},"All connectors' methods work through API calls, as a result, connector developers need to check documents and handle possible unsuccessful API call responses.")),(0,a.kt)("h2",{id:"install-your-own-connectors"},"Install your own connectors"),(0,a.kt)("p",null,"We assume that you have already finished building your own connector. Go through following steps to manually install it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the connector folder you implemented to directory ",(0,a.kt)("inlineCode",{parentName:"li"},"/packages/connectors")," of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto"},(0,a.kt)("inlineCode",{parentName:"a"},"logto-io/logto")),"."),(0,a.kt)("li",{parentName:"ol"},"Install connector repository's dependencies by typing ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm pnpm:devPreinstall && pnpm i")," at root path of logto folder."),(0,a.kt)("li",{parentName:"ol"},"Build connector with ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm connectors:build"),"."),(0,a.kt)("li",{parentName:"ol"},"Link local connectors using ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm cli connector link"),"."),(0,a.kt)("li",{parentName:"ol"},"Restart Logto instance with ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm dev")," at root directory of ",(0,a.kt)("inlineCode",{parentName:"li"},"logto-io/logto"),", and you can find connectors successfully installed.")),(0,a.kt)("p",null,"You can now test and try out your connector to see whether it works as expected."),(0,a.kt)("p",null,"If you want to add connectors that have already been published to NPM or Logto official connectors, you may check out ",(0,a.kt)("a",{parentName:"p",href:"/logto-docs/docs/tutorials/using-cli/manage-connectors#add-connectors"},"Using Logto CLI - Manage connectors"),"."))}m.isMDXComponent=!0}}]);