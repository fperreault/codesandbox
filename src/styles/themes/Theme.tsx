/* eslint-disable @typescript-eslint/no-use-before-define */
import React, {
  createContext,
  FC,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@styles/themes';
import { darkTheme } from '@styles/themes';

/**
 * Theme type dict
 */
enum ThemeMode {
  DEFAULT = 'default',
  DARKMODE = 'darkmode',
}

/**
 * Interfaces
 */
interface ContextProps {
  theme: ThemeMode;
  setThemeToggle: () => void;
}

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Theme Context
 */
const Context = createContext<ContextProps | undefined>(undefined);

/**
 *
 * Theme Provider
 */
const Provider: FC<ProviderProps> = ({
  children,
}: ProviderProps): JSX.Element => {
  // set default mode according to darkmode software option
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.DEFAULT);

  // current theme values
  const currentTheme = theme === ThemeMode.DEFAULT ? defaultTheme : darkTheme;

  // set mode theme
  const setMode = useCallback((mode: ThemeMode) => setTheme(mode), [setTheme]);

  const setThemeToggle = () =>
    theme === ThemeMode.DEFAULT
      ? setMode(ThemeMode.DARKMODE)
      : setMode(ThemeMode.DEFAULT);

  // set css var for current theme
  useEffect(() => {
    setCssVars(currentTheme, document.documentElement);
  }, [currentTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Context.Provider value={{ theme, setThemeToggle }}>
        {children}
      </Context.Provider>
    </ThemeProvider>
  );
};

/**
 * HOOK
 * use theme context to toggle dark/default
 */
const useDarkMode = (): ContextProps => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('No Provider found when calling useDarkMode.');
  }

  return {
    theme: context.theme,
    setThemeToggle: context.setThemeToggle,
  };
};

/**
 * set css vars for an element according to theme
 * TODO: support recurvive object parsing
 * TODO: remove TS error
 * TODO: remove theme: any
 * @example
 * setCssVars(currentTheme, document.documentElement);
 */
const setCssVars = (theme: any, el: HTMLElement) => {
  const colors = Object.keys(theme.colors);
  colors.forEach((key) => {
    el?.style.setProperty(`--colors-${key}`, theme.colors[key]);
  });
};

/**
 * Exports
 */
export { ThemeMode };
export { useDarkMode };
export { Provider as ThemeProvider };
