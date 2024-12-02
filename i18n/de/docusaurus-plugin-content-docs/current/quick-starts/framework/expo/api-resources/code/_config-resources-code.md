```tsx title="App.tsx"
import { LogtoConfig } from '@logto/rn';

const config: LogtoConfig = {
  appId: '<your-application-id>',
  endpoint: '<your-logto-endpoint>',
  // API-Ressourcen hinzufügen
  // highlight-start
  resources: ['https://shopping.your-app.com/api', 'https://store.your-app.com/api'],
  // highlight-end
};
```