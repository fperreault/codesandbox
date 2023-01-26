import { defaultTheme } from '@styles/themes';

/**
 * Dark Theme
 */
const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    // override colors values
    primary: '#ffffff',
    white: '#000000',
    black: '#ffffff',

    notification: {
      info: '#21130d',
      warn: '#eab676',
      log: '#000000',
      save: '#c2c2c2',
    },
  },
};

/**
 * Exports
 */
export { theme };
