import { useCallback, useContext } from 'react';
import { LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext } from 'shared/context/ThemeContext';

type TUseThemeResult = [
  Theme,
  (theme: Theme) => void
];

export const useTheme = (): TUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setThemeWrapper = useCallback((theme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, theme);
    setTheme(theme);
  }, [setTheme]);

  return [theme, setThemeWrapper];
};
