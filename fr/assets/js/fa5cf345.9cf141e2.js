"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[66524],{32593:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"logto-oss/file-storage-provider","title":"Fournisseur de stockage de fichiers","description":"Par d\xe9faut, Logto Console utilise une entr\xe9e de texte pour les URL de fichiers statiques tels que les avatars. Pour activer une exp\xe9rience de t\xe9l\xe9chargement de fichiers plus intuitive avec glisser-d\xe9poser, vous devez configurer un fournisseur de stockage.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/file-storage-provider.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/file-storage-provider","permalink":"/fr/logto-oss/file-storage-provider","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/file-storage-provider.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Cache central","permalink":"/fr/logto-oss/central-cache"},"next":{"title":"D\xe9veloppez votre connecteur","permalink":"/fr/logto-oss/develop-your-connector/"}}');var r=s(25105),n=s(79621);const t={sidebar_position:6},c="Fournisseur de stockage de fichiers",l={},d=[{value:"Azure Storage",id:"azure-storage",level:2},{value:"Pr\xe9requis",id:"prerequisites",level:3},{value:"Configuration via CLI",id:"config-using-cli",level:3},{value:"<code>connectionString</code>",id:"connectionstring",level:4},{value:"<code>container</code>",id:"container",level:4},{value:"<code>publicUrl</code>",id:"publicurl",level:4},{value:"S3 Storage",id:"s3-storage",level:2},{value:"Pr\xe9requis",id:"prerequisites-1",level:3},{value:"Configuration via CLI",id:"config-using-cli-1",level:3},{value:"<code>accessKeyId</code>",id:"accesskeyid",level:4},{value:"<code>accessSecretKey</code>",id:"accesssecretkey",level:4},{value:"<code>bucket</code>",id:"bucket",level:4},{value:"<code>region</code>",id:"region",level:4},{value:"<code>endpoint</code>",id:"endpoint",level:4},{value:"<code>publicUrl</code>",id:"publicurl-1",level:4},{value:"Google Cloud Storage",id:"google-cloud-storage",level:2},{value:"Pr\xe9requis",id:"prerequisites-2",level:3},{value:"Obtenir le fichier de cl\xe9",id:"obtain-the-key-file",level:3},{value:"Ajouter le fichier de cl\xe9 \xe0 Logto",id:"add-the-key-file-to-logto",level:3},{value:"Configuration via CLI",id:"config-using-cli-2",level:3},{value:"<code>projectId</code>",id:"projectid",level:4},{value:"<code>keyFilename</code>",id:"keyfilename",level:4},{value:"<code>bucketName</code>",id:"bucketname",level:4},{value:"<code>publicUrl</code>",id:"publicurl-2",level:4}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"fournisseur-de-stockage-de-fichiers",children:"Fournisseur de stockage de fichiers"})}),"\n",(0,r.jsx)(o.p,{children:"Par d\xe9faut, Logto Console utilise une entr\xe9e de texte pour les URL de fichiers statiques tels que les avatars. Pour activer une exp\xe9rience de t\xe9l\xe9chargement de fichiers plus intuitive avec glisser-d\xe9poser, vous devez configurer un fournisseur de stockage."}),"\n",(0,r.jsx)(o.p,{children:"Logto prend en charge plusieurs fournisseurs de stockage, y compris AWS S3, Azure Storage. Cette recette vous montrera comment configurer un fournisseur de stockage pour Logto."}),"\n",(0,r.jsxs)(o.p,{children:["La configuration est stock\xe9e dans la table ",(0,r.jsx)(o.code,{children:"systems"})," de la base de donn\xe9es, mais il est recommand\xe9 d'utiliser le CLI pour configurer le fournisseur de stockage. Pour plus d'informations, essayez la commande \"help\" :"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"pnpm logto db system --help\n"})}),"\n",(0,r.jsx)(o.h2,{id:"azure-storage",children:"Azure Storage"}),"\n",(0,r.jsx)(o.p,{children:"Azure Storage est une solution de stockage cloud puissante et \xe9volutive qui vous permet de stocker et de g\xe9rer vos donn\xe9es dans le cloud. La recette suivante vous montrera comment configurer Azure Storage en tant que fournisseur de stockage pour Logto."}),"\n",(0,r.jsx)(o.h3,{id:"prerequisites",children:"Pr\xe9requis"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview",children:"Compte Azure Storage"})}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"config-using-cli",children:"Configuration via CLI"}),"\n",(0,r.jsx)(o.p,{children:"Exemple d'utilisation :"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"AzureStorage","connectionString":"DefaultEndpointsProtocol=https;AccountName=logto;AccountKey=oRhfTBHOHiBxxxxxxxxxxxxxxxxZ0se6XROftl/Xrow==;EndpointSuffix=core.windows.net","container":"logto"}\'\n'})}),"\n",(0,r.jsx)(o.h4,{id:"connectionstring",children:(0,r.jsx)(o.code,{children:"connectionString"})}),"\n",(0,r.jsx)(o.p,{children:"Pour acc\xe9der \xe0 Azure Storage, vous devez utiliser une cha\xeene de connexion, qui est une cha\xeene de caract\xe8res contenant les informations n\xe9cessaires pour \xe9tablir une connexion \xe0 votre compte de stockage."}),"\n",(0,r.jsxs)(o.p,{children:["Pour obtenir la cha\xeene de connexion, suivez la documentation officielle sur la ",(0,r.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string",children:"cha\xeene de connexion Azure Storage"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"container",children:(0,r.jsx)(o.code,{children:"container"})}),"\n",(0,r.jsx)(o.p,{children:"Le conteneur est une ressource de stockage qui stocke des blobs. Vous pouvez utiliser le conteneur pour organiser vos blobs et contr\xf4ler l'acc\xe8s \xe0 vos donn\xe9es."}),"\n",(0,r.jsxs)(o.p,{children:["Pour cr\xe9er un conteneur, suivez la documentation officielle sur les ",(0,r.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#containers",children:"conteneurs Azure Storage"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"publicurl",children:(0,r.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,r.jsx)(o.p,{children:"Optionnel."}),"\n",(0,r.jsxs)(o.p,{children:["L'URL publique est l'URL qui peut \xeatre utilis\xe9e pour acc\xe9der \xe0 la ressource de stockage publiquement. Si vous n'utilisez pas de CDN, vous pouvez la laisser vide pour utiliser le \"point de terminaison principal\" par d\xe9faut d'Azure Storage comme URL publique. Logto obtiendra cette valeur \xe0 partir de \"connectionString\" avec l'aide du SDK Azure. Pour en savoir plus sur le point de terminaison principal de votre compte de stockage, suivez la documentation officielle sur le ",(0,r.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview#primary-endpoints",children:"point de terminaison principal Azure Storage"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"s3-storage",children:"S3 Storage"}),"\n",(0,r.jsx)(o.p,{children:"S3 Storage est un service de stockage cloud qui offre un stockage d'objets via une interface de service web. La recette suivante vous montrera comment configurer S3 Storage en tant que fournisseur de stockage pour Logto."}),"\n",(0,r.jsx)(o.h3,{id:"prerequisites-1",children:"Pr\xe9requis"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html",children:"Compte S3 Storage"})," ou autre service de stockage compatible S3, tel que ",(0,r.jsx)(o.a,{href:"https://min.io/",children:"MinIO"})]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"config-using-cli-1",children:"Configuration via CLI"}),"\n",(0,r.jsx)(o.p,{children:"Exemple d'utilisation :"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"S3Storage","accessKeyId":"my-access-key-id","accessSecretKey": "my-secret-access-key","bucket":"logto","endpoint":"https://s3.us-east-2.amazonaws.com"}\'\n'})}),"\n",(0,r.jsx)(o.h4,{id:"accesskeyid",children:(0,r.jsx)(o.code,{children:"accessKeyId"})}),"\n",(0,r.jsxs)(o.p,{children:["L'ID de cl\xe9 d'acc\xe8s est un identifiant pour votre compte AWS. Pour trouver votre ID de cl\xe9 d'acc\xe8s pour votre compte AWS, suivez la documentation officielle sur l'",(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey",children:"ID de cl\xe9 d'acc\xe8s AWS"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"accesssecretkey",children:(0,r.jsx)(o.code,{children:"accessSecretKey"})}),"\n",(0,r.jsxs)(o.p,{children:["La cl\xe9 d'acc\xe8s secr\xe8te est utilis\xe9e conjointement avec l'ID de cl\xe9 d'acc\xe8s pour signer les requ\xeates programmatiques. Pour trouver votre cl\xe9 d'acc\xe8s secr\xe8te pour votre compte AWS, suivez la documentation officielle sur la ",(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey",children:"cl\xe9 d'acc\xe8s secr\xe8te AWS"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"bucket",children:(0,r.jsx)(o.code,{children:"bucket"})}),"\n",(0,r.jsxs)(o.p,{children:["Le bucket est un conteneur pour les objets stock\xe9s dans Amazon S3. Pour cr\xe9er un bucket, suivez la documentation officielle sur les ",(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html",children:"buckets AWS S3"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"region",children:(0,r.jsx)(o.code,{children:"region"})}),"\n",(0,r.jsx)(o.p,{children:"Optionnel."}),"\n",(0,r.jsxs)(o.p,{children:["La r\xe9gion est la r\xe9gion g\xe9ographique o\xf9 se trouve le bucket AWS S3. Si ",(0,r.jsx)(o.code,{children:"endpoint"})," est un point de terminaison AWS S3 standard, il peut \xeatre analys\xe9 \xe0 partir de ",(0,r.jsx)(o.code,{children:"endpoint"}),". Pour trouver votre r\xe9gion AWS S3, suivez la documentation officielle sur la ",(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"r\xe9gion AWS S3"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Si vous utilisez un service de stockage compatible S3, vous pouvez laisser ce champ vide."}),"\n",(0,r.jsx)(o.h4,{id:"endpoint",children:(0,r.jsx)(o.code,{children:"endpoint"})}),"\n",(0,r.jsx)(o.p,{children:"Optionnel."}),"\n",(0,r.jsxs)(o.p,{children:["Le point de terminaison est l'URL utilis\xe9e pour acc\xe9der au service AWS S3. Pour trouver votre point de terminaison AWS S3, suivez la documentation officielle sur le ",(0,r.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"point de terminaison AWS S3"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Vous pouvez laisser ce champ vide pour utiliser le point de terminaison par d\xe9faut pour la r\xe9gion. Si vous utilisez un service de stockage compatible S3, vous pouvez utiliser le point de terminaison du service."}),"\n",(0,r.jsx)(o.h4,{id:"publicurl-1",children:(0,r.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,r.jsx)(o.p,{children:"Optionnel."}),"\n",(0,r.jsx)(o.p,{children:"L'URL publique est l'URL qui peut \xeatre utilis\xe9e pour acc\xe9der \xe0 la ressource de stockage publiquement. Si vous n'utilisez pas de CDN, vous pouvez la laisser vide pour utiliser l'URL par d\xe9faut de S3 Storage."}),"\n",(0,r.jsx)(o.h2,{id:"google-cloud-storage",children:"Google Cloud Storage"}),"\n",(0,r.jsx)(o.p,{children:"Google Cloud Storage est un service de stockage cloud qui fournit un stockage d'objets via une interface de service web. Le guide suivant vous montrera comment configurer Google Cloud Storage en tant que fournisseur de stockage pour Logto."}),"\n",(0,r.jsx)(o.h3,{id:"prerequisites-2",children:"Pr\xe9requis"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Un projet Google Cloud"}),"\n",(0,r.jsxs)(o.li,{children:["Un bucket, consultez la documentation officielle de Google Cloud : ",(0,r.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/creating-buckets",children:"https://cloud.google.com/storage/docs/creating-buckets"}),"."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"obtain-the-key-file",children:"Obtenir le fichier de cl\xe9"}),"\n",(0,r.jsx)(o.p,{children:"Les SDK Google Cloud utilisent couramment un \"fichier de cl\xe9\". Si vous n'\xeates pas familier avec Google Cloud, cela pourrait \xeatre la partie la plus difficile. Voici comment l'obtenir :"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["Allez sur la page du compte de service : ",(0,r.jsx)(o.a,{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",children:"https://console.cloud.google.com/iam-admin/serviceaccounts"})]}),"\n",(0,r.jsx)(o.li,{children:"Cr\xe9ez un compte, entrez un nom, puis continuez."}),"\n",(0,r.jsx)(o.li,{children:'\xc0 l\'\xe9tape suivante, s\xe9lectionnez le r\xf4le de "Storage Object User". Vous pouvez le trouver en utilisant le filtre.'}),"\n",(0,r.jsx)(o.li,{children:'Une fois que vous avez termin\xe9 de cr\xe9er le compte, allez sur la page de d\xe9tail du compte et s\xe9lectionnez l\'onglet "keys".'}),"\n",(0,r.jsx)(o.li,{children:'Cliquez sur "add key", s\xe9lectionnez "create a new key", choisissez "json" dans la bo\xeete de dialogue, puis t\xe9l\xe9chargez votre fichier json.'}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"add-the-key-file-to-logto",children:"Ajouter le fichier de cl\xe9 \xe0 Logto"}),"\n",(0,r.jsx)(o.p,{children:"Logto doit avoir acc\xe8s au fichier de cl\xe9."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Ex\xe9cution dans Node.js"})}),"\n",(0,r.jsxs)(o.p,{children:["Copiez le fichier dans ",(0,r.jsx)(o.code,{children:"/path/to/logto/core"})," et renommez-le en ",(0,r.jsx)(o.code,{children:"google-storage-key.json"}),"."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Ex\xe9cution dans un conteneur Docker"})}),"\n",(0,r.jsx)(o.p,{children:"Si vous ex\xe9cutez Logto dans un conteneur Docker, vous devrez monter le fichier dans le conteneur. En supposant que vous utilisez Docker Compose, ajoutez ceci \xe0 votre configuration :"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"volumes:\n  - ./path/to/google-storage-key.json:/etc/logto/core/google-storage-key.json\n"})}),"\n",(0,r.jsxs)(o.p,{children:["N'oubliez pas de remplacer ",(0,r.jsx)(o.code,{children:"/path/to"})," par le chemin r\xe9el."]}),"\n",(0,r.jsx)(o.h3,{id:"config-using-cli-2",children:"Configuration via CLI"}),"\n",(0,r.jsx)(o.p,{children:"Exemple d'utilisation :"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"GoogleStorage","projectId":"psychic-trainer-403801","keyFilename":"google-storage-key.json","bucketName":"logto-test2"}\'\n'})}),"\n",(0,r.jsx)(o.h4,{id:"projectid",children:(0,r.jsx)(o.code,{children:"projectId"})}),"\n",(0,r.jsx)(o.p,{children:"Votre ID de projet Google Cloud."}),"\n",(0,r.jsx)(o.h4,{id:"keyfilename",children:(0,r.jsx)(o.code,{children:"keyFilename"})}),"\n",(0,r.jsxs)(o.p,{children:["Le nom du fichier de cl\xe9, si vous suivez les \xe9tapes ci-dessus, alors c'est ",(0,r.jsx)(o.code,{children:"google-storage-key.json"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"bucketname",children:(0,r.jsx)(o.code,{children:"bucketName"})}),"\n",(0,r.jsx)(o.p,{children:"Le nom du bucket."}),"\n",(0,r.jsx)(o.h4,{id:"publicurl-2",children:(0,r.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,r.jsx)(o.p,{children:"Optionnel."}),"\n",(0,r.jsx)(o.p,{children:"L'URL publique est l'URL qui peut \xeatre utilis\xe9e pour acc\xe9der \xe0 la ressource de stockage publiquement. Si vous n'utilisez pas de CDN, vous pouvez la laisser vide pour utiliser l'URL par d\xe9faut de S3 Storage."})]})}function a(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79621:(e,o,s)=>{s.d(o,{R:()=>t,x:()=>c});var i=s(58101);const r={},n=i.createContext(r);function t(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);