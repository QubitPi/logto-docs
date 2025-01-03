"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21881],{40476:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"logto-oss/file-storage-provider","title":"File storage provider","description":"By default, Logto Console uses a text input for static file URLs such as avatars. To enable a more intuitive file upload experience with drag and drop, you need to configure a storage provider.","source":"@site/docs/logto-oss/file-storage-provider.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/file-storage-provider","permalink":"/logto-oss/file-storage-provider","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/logto-oss/file-storage-provider.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"Central cache","permalink":"/logto-oss/central-cache"},"next":{"title":"Develop your connector","permalink":"/logto-oss/develop-your-connector/"}}');var i=n(25105),s=n(79621);const r={sidebar_position:6},c="File storage provider",l={},a=[{value:"Azure Storage",id:"azure-storage",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Config using CLI",id:"config-using-cli",level:3},{value:"<code>connectionString</code>",id:"connectionstring",level:4},{value:"<code>container</code>",id:"container",level:4},{value:"<code>publicUrl</code>",id:"publicurl",level:4},{value:"S3 Storage",id:"s3-storage",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Config using CLI",id:"config-using-cli-1",level:3},{value:"<code>accessKeyId</code>",id:"accesskeyid",level:4},{value:"<code>accessSecretKey</code>",id:"accesssecretkey",level:4},{value:"<code>bucket</code>",id:"bucket",level:4},{value:"<code>region</code>",id:"region",level:4},{value:"<code>endpoint</code>",id:"endpoint",level:4},{value:"<code>publicUrl</code>",id:"publicurl-1",level:4},{value:"Google Cloud Storage",id:"google-cloud-storage",level:2},{value:"Prerequisites",id:"prerequisites-2",level:3},{value:"Obtain the key file",id:"obtain-the-key-file",level:3},{value:"Add the key file to Logto",id:"add-the-key-file-to-logto",level:3},{value:"Config using CLI",id:"config-using-cli-2",level:3},{value:"<code>projectId</code>",id:"projectid",level:4},{value:"<code>keyFilename</code>",id:"keyfilename",level:4},{value:"<code>bucketName</code>",id:"bucketname",level:4},{value:"<code>publicUrl</code>",id:"publicurl-2",level:4}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.header,{children:(0,i.jsx)(o.h1,{id:"file-storage-provider",children:"File storage provider"})}),"\n",(0,i.jsx)(o.p,{children:"By default, Logto Console uses a text input for static file URLs such as avatars. To enable a more intuitive file upload experience with drag and drop, you need to configure a storage provider."}),"\n",(0,i.jsx)(o.p,{children:"Logto supports multiple storage providers, including AWS S3, Azure Storage. This recipe will show you how to configure a storage provider for Logto."}),"\n",(0,i.jsxs)(o.p,{children:["The configuration is stored in DB's ",(0,i.jsx)(o.code,{children:"systems"}),' table, but it is recommended to use the CLI to configure the storage provider. For more information, try the "help" command:']}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sh",children:"pnpm logto db system --help\n"})}),"\n",(0,i.jsx)(o.h2,{id:"azure-storage",children:"Azure Storage"}),"\n",(0,i.jsx)(o.p,{children:"Azure Storage is a powerful and scalable cloud storage solution that allows you to store and manage your data in the cloud. The following recipe will show you how to configure Azure Storage as a storage provider for Logto."}),"\n",(0,i.jsx)(o.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:(0,i.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview",children:"Azure Storage account"})}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"config-using-cli",children:"Config using CLI"}),"\n",(0,i.jsx)(o.p,{children:"Example usage:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"AzureStorage","connectionString":"DefaultEndpointsProtocol=https;AccountName=logto;AccountKey=oRhfTBHOHiBxxxxxxxxxxxxxxxxZ0se6XROftl/Xrow==;EndpointSuffix=core.windows.net","container":"logto"}\'\n'})}),"\n",(0,i.jsx)(o.h4,{id:"connectionstring",children:(0,i.jsx)(o.code,{children:"connectionString"})}),"\n",(0,i.jsx)(o.p,{children:"To access Azure Storage, you need to use a connection string, which is a string of characters that contains the necessary information for establishing a connection to your storage account."}),"\n",(0,i.jsxs)(o.p,{children:["To get the connection string, follow the official ",(0,i.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string",children:"Azure Storage connection string documentation"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"container",children:(0,i.jsx)(o.code,{children:"container"})}),"\n",(0,i.jsx)(o.p,{children:"The container is a storage resource that stores blobs. You can use the container to organize your blobs and to control access to your data."}),"\n",(0,i.jsxs)(o.p,{children:["To create a container, follow the official ",(0,i.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#containers",children:"Azure Storage container documentation"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"publicurl",children:(0,i.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,i.jsx)(o.p,{children:"Optional."}),"\n",(0,i.jsxs)(o.p,{children:['The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the Azure Storage\'s default "Primary endpoint" as the public URL. Logto will get this value from "connectionString" with the help of Azure SDK. To learn more about your storage account\'s primary endpoint, follow the official ',(0,i.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview#primary-endpoints",children:"Azure Storage primary endpoint documentation"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"s3-storage",children:"S3 Storage"}),"\n",(0,i.jsx)(o.p,{children:"S3 Storage is a cloud storage service that offers object storage through a web service interface. The following recipe will show you how to configure S3 Storage as a storage provider for Logto."}),"\n",(0,i.jsx)(o.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html",children:"S3 Storage account"})," or other S3 compatible storage service, such as ",(0,i.jsx)(o.a,{href:"https://min.io/",children:"MinIO"})]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"config-using-cli-1",children:"Config using CLI"}),"\n",(0,i.jsx)(o.p,{children:"Example usage:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"S3Storage","accessKeyId":"my-access-key-id","accessSecretKey": "my-secret-access-key","bucket":"logto","endpoint":"https://s3.us-east-2.amazonaws.com"}\'\n'})}),"\n",(0,i.jsx)(o.h4,{id:"accesskeyid",children:(0,i.jsx)(o.code,{children:"accessKeyId"})}),"\n",(0,i.jsxs)(o.p,{children:["The access key ID is an identifier for your AWS account. To find your access Key ID for your AWS account, follow the official ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey",children:"AWS access key ID documentation"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"accesssecretkey",children:(0,i.jsx)(o.code,{children:"accessSecretKey"})}),"\n",(0,i.jsxs)(o.p,{children:["The secret access key is used in conjunction with the access key ID to sign programmatic requests. To find your access key secret for your AWS account, follow the official ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey",children:"AWS access key secret documentation"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"bucket",children:(0,i.jsx)(o.code,{children:"bucket"})}),"\n",(0,i.jsxs)(o.p,{children:["The bucket is a container for objects stored in Amazon S3. To create a bucket, follow the official ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html",children:"AWS S3 bucket documentation"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"region",children:(0,i.jsx)(o.code,{children:"region"})}),"\n",(0,i.jsx)(o.p,{children:"Optional."}),"\n",(0,i.jsxs)(o.p,{children:["The region is the geographical region where the AWS S3 bucket is located. If ",(0,i.jsx)(o.code,{children:"endpoint"})," is a standard AWS S3 endpoint, it can be parsed from ",(0,i.jsx)(o.code,{children:"endpoint"}),". To find your AWS S3 region, follow the official ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"AWS S3 region documentation"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"If you are using a S3 compatible storage service, you may leave this field blank."}),"\n",(0,i.jsx)(o.h4,{id:"endpoint",children:(0,i.jsx)(o.code,{children:"endpoint"})}),"\n",(0,i.jsx)(o.p,{children:"Optional."}),"\n",(0,i.jsxs)(o.p,{children:["Endpoint is the URL that is used to access the AWS S3 service. To find your AWS S3 endpoint, follow the official ",(0,i.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"AWS S3 endpoint documentation"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"You can leave this field blank to use the default endpoint for the region. If you are using a S3 compatible storage service, you can use the endpoint of the service."}),"\n",(0,i.jsx)(o.h4,{id:"publicurl-1",children:(0,i.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,i.jsx)(o.p,{children:"Optional."}),"\n",(0,i.jsx)(o.p,{children:"The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the S3 Storage's default URL."}),"\n",(0,i.jsx)(o.h2,{id:"google-cloud-storage",children:"Google Cloud Storage"}),"\n",(0,i.jsx)(o.p,{children:"Google Cloud Storage is a cloud storage service that provides object storage through a web service interface. The following guide will show you how to configure Google Cloud Storage as a storage provider for Logto."}),"\n",(0,i.jsx)(o.h3,{id:"prerequisites-2",children:"Prerequisites"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"A Google Cloud project"}),"\n",(0,i.jsxs)(o.li,{children:["A bucket, refer to the official Google Cloud documentation: ",(0,i.jsx)(o.a,{href:"https://cloud.google.com/storage/docs/creating-buckets",children:"https://cloud.google.com/storage/docs/creating-buckets"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"obtain-the-key-file",children:"Obtain the key file"}),"\n",(0,i.jsx)(o.p,{children:"Google Cloud SDKs commonly use a \"key file.\" If you're unfamiliar with Google Cloud, this might be the most challenging part. Here's how to get it:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Go to the service account page: ",(0,i.jsx)(o.a,{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",children:"https://console.cloud.google.com/iam-admin/serviceaccounts"})]}),"\n",(0,i.jsx)(o.li,{children:"Create an account, enter a name, and then continue."}),"\n",(0,i.jsx)(o.li,{children:"In the next step, select the role of \u201cStorage Object User.\u201d You can find it using the filter."}),"\n",(0,i.jsx)(o.li,{children:"Once you've finished creating the account, go to the account detail page and select the \u201ckeys\u201d tab."}),"\n",(0,i.jsx)(o.li,{children:"Click \u201cadd key,\u201d select \u201ccreate a new key,\u201d choose \u201cjson\u201d in the dialog, and then download your json file."}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"add-the-key-file-to-logto",children:"Add the key file to Logto"}),"\n",(0,i.jsx)(o.p,{children:"Logto should have access to the key file."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Running in Node.js"})}),"\n",(0,i.jsxs)(o.p,{children:["Copy the file to ",(0,i.jsx)(o.code,{children:"/path/to/logto/core"})," and rename it to ",(0,i.jsx)(o.code,{children:"google-storage-key.json"}),"."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.strong,{children:"Running in a Docker Container"})}),"\n",(0,i.jsx)(o.p,{children:"If you're running Logto in a Docker container, you'll need to mount the file to the container. Assuming you're using Docker Compose, add this to your configuration:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-yaml",children:"volumes:\n  - ./path/to/google-storage-key.json:/etc/logto/core/google-storage-key.json\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Remember to replace ",(0,i.jsx)(o.code,{children:"/path/to"})," with the actual path."]}),"\n",(0,i.jsx)(o.h3,{id:"config-using-cli-2",children:"Config using CLI"}),"\n",(0,i.jsx)(o.p,{children:"Example usage:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"GoogleStorage","projectId":"psychic-trainer-403801","keyFilename":"google-storage-key.json","bucketName":"logto-test2"}\'\n'})}),"\n",(0,i.jsx)(o.h4,{id:"projectid",children:(0,i.jsx)(o.code,{children:"projectId"})}),"\n",(0,i.jsx)(o.p,{children:"Your Google Cloud project ID."}),"\n",(0,i.jsx)(o.h4,{id:"keyfilename",children:(0,i.jsx)(o.code,{children:"keyFilename"})}),"\n",(0,i.jsxs)(o.p,{children:["The name of the key file, if you follow the above steps, then it is ",(0,i.jsx)(o.code,{children:"google-storage-key.json"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"bucketname",children:(0,i.jsx)(o.code,{children:"bucketName"})}),"\n",(0,i.jsx)(o.p,{children:"The bucket name."}),"\n",(0,i.jsx)(o.h4,{id:"publicurl-2",children:(0,i.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,i.jsx)(o.p,{children:"Optional."}),"\n",(0,i.jsx)(o.p,{children:"The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the S3 Storage's default URL."})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79621:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>c});var t=n(58101);const i={},s=t.createContext(i);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);