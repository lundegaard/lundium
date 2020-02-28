# Lundium UI component library internationalization

## Usage

Install dependency into your project:

```bash
yarn add @lundium/locale
```

Import some locale and add it to ThemeProvider:

```javascript
import { en_US } from '@lundium/locale';
...

<ThemeProvider theme={{ isRTL: boolean('isRTL', false), locale: en_US }}>
/* Component tree */
</ThemeProvider>
```
