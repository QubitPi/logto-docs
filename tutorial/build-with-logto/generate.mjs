/*
This script generates blog posts with the cartesian product of the const `sdks` and `connectors`.

For example:

```ts
const sdks = [{ name: 'React', ... }, { name: 'Vue', ... }];
const connectors = [{ name: 'GitHub', ... }, { name: 'Google', ... }];
```

will generate four blog posts:

- `react-github.mdx`
- `react-google.mdx`
- `vue-github.mdx`
- `vue-google.mdx`

*/

import fs from 'node:fs/promises';

/**
 * SDKs to read. You should keep the name in original cases such as "React" to provide a better reading experience.
 *
 * @type Array<{ name: string; language: string; officialLink: string; appType: string; }>
 */
const sdks = [
  {
    name: 'React',
    language: 'js',
    officialLink: 'https://reactjs.org/',
    appType: 'Single page app',
    framework: 'React',
  },
  {
    name: 'Expo (React Native)',
    language: 'js',
    officialLink: 'https://expo.dev/',
    appType: 'Native app',
    framework: 'Expo',
  },
  {
    name: 'Vue',
    language: 'js',
    officialLink: 'https://vuejs.org/',
    appType: 'Single page app',
    framework: 'Vue',
  },
  {
    name: 'Vanilla JS',
    language: 'js',
    officialLink: 'https://en.wikipedia.org/wiki/ECMAScript',
    appType: 'Single page app',
    framework: 'Vanilla JS',
  },
  {
    name: 'iOS Swift',
    language: 'swift',
    officialLink: 'https://developer.apple.com/ios/ ',
    appType: 'Native app',
    framework: 'iOS(Swift)',
  },
  { name: 'Go', language: 'go', officialLink: 'https://go.dev/', appType: 'Traditional web' },
  {
    name: 'Android',
    language: 'kotlin/java',
    officialLink: 'https://developer.android.com/',
    appType: 'Native app',
    framework: 'Android (Kotlin) / Android (Java)',
  },
  {
    name: 'Flutter',
    language: 'dart',
    officialLink: 'https://flutter.dev/',
    appType: 'Native app',
    framework: 'Flutter',
  },
  {
    name: 'Next',
    language: 'js',
    officialLink: 'https://nextjs.org/',
    appType: 'Traditional web',
    framework: 'Next.js',
  },
  {
    name: 'Express',
    language: 'js',
    officialLink: 'https://expressjs.com/',
    appType: 'Traditional web',
    framework: 'Express',
  },
  {
    name: 'Python',
    language: 'python',
    officialLink: 'https://www.python.org/',
    appType: 'Traditional web',
    framework: 'Flask',
  },
  {
    name: 'PHP',
    language: 'php',
    officialLink: 'https://www.php.net/',
    appType: 'Traditional web',
    framework: 'Laravel',
  },
  {
    name: '.NET Core (MVC)',
    language: 'c#',
    officialLink: 'https://dotnet.microsoft.com/apps/aspnet/mvc',
    appType: 'Traditional web',
    framework: '.NET Core (MVC)',
  },
  {
    name: '.NET Core (Razor Pages)',
    language: 'c#',
    officialLink: 'https://learn.microsoft.com/aspnet/core/razor-pages/',
    appType: 'Traditional web',
    framework: '.NET Core (Razor Pages)',
  },
  {
    name: '.NET Core (Blazor Server)',
    language: 'c#',
    officialLink:
      'https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-server',
    appType: 'Traditional web',
    framework: '.NET Core (Blazor Server)',
  },
  {
    name: '.NET Core (Blazor WebAssembly)',
    language: 'c#',
    officialLink:
      'https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-webassembly',
    appType: 'Single page app',
    framework: '.NET Core (Blazor WebAssembly)',
  },
];

/**
 * Connector names to read. You should keep the name in original cases such as "GitHub" to provide a better reading experience.
 *
 * * @type Array<{ name: string; configName: string; }>
 */
const socialConnectors = [
  { name: 'GitHub', configName: 'GitHub OAuth app' },
  { name: 'Google', configName: 'Google OAuth app' },
  { name: 'Apple', configName: 'Apple Sign-in' },
  { name: 'Azure AD', configName: 'Azure AD' },
  { name: 'Discord', configName: 'Discord OAuth app' },
  { name: 'Kakao', configName: 'Kakao login' },
  { name: 'Naver', configName: 'Naver login' },
  { name: 'Facebook', configName: 'Facebook login' },
  { name: 'OIDC', configName: 'Standard OIDC app' },
  { name: 'SAML', configName: 'Standard SAML app' },
  { name: 'OAuth2', configName: 'Standard OAuth 2.0 app' },
  { name: 'Hugging Face', configName: 'Hugging Face OAuth app' },
];

const emailConnectors = [
  { name: 'AWS SES', configName: 'AWS SES email connector' },
  { name: 'SendGrid', configName: 'SendGrid email connector' },
];

const smsConnectors = [{ name: 'Twilio', configName: 'Twilio SMS connector' }];

const generator = async (sdks, connectors, template, type) => {
  await Promise.all(
    sdks.flatMap((sdk) =>
      connectors.map(async (connector) => {
        const connectorPath = connector.name.replaceAll(' ', '-').toLowerCase();
        const sdkPath = sdk.name
          .replaceAll(' ', '-')
          .replaceAll(/[()]/g, '')
          .replaceAll('.', 'dot')
          .toLowerCase();

        const post = template
          .replaceAll('${connector}', connector.name)
          .replaceAll('${connectorPath}', connectorPath)
          .replaceAll('${connectorConfigName}', connector.configName)
          .replaceAll('${connectorType}', type)
          .replaceAll(
            '${passwordlessSignUpIdentifier}',
            type === 'Email' ? 'Email address' : 'Phone number'
          )
          .replaceAll('${sdk}', sdk.name)
          .replaceAll('${sdkPath}', sdkPath)
          .replaceAll('${sdkOfficialLink}', sdk.officialLink)
          .replaceAll('${language}', sdk.language)
          .replaceAll('${appType}', sdk.appType)
          .replaceAll('${framework}', sdk.framework);

        const filename = `generated-${sdkPath}-${connectorPath}.mdx`;

        await fs.writeFile(filename, post, 'utf8');

        console.log('Generated', filename);
      })
    )
  );
};

const run = async () => {
  const socialTemplate = await fs.readFile('./_template-social.mdx', 'utf8');
  await generator(sdks, socialConnectors, socialTemplate);

  const passwordlessTemplate = await fs.readFile('./_template-passwordless.mdx', 'utf8');
  await generator(sdks, emailConnectors, passwordlessTemplate, 'Email');
  await generator(sdks, smsConnectors, passwordlessTemplate, 'SMS');
};

await run();
