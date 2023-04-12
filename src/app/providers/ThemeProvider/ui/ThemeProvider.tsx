import React, { FC, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  initTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initTheme }) => {
  const [theme, setTheme] = React.useState<Theme>(initTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
