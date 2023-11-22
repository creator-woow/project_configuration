import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext } from 'shared/context/ThemeContext';

const storageTheme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme || Theme.NORMAL;

interface IThemeProvider extends PropsWithChildren {
  activeTheme?: Theme;
}

export const ThemeProvider: FC<IThemeProvider> = (props) => {
  const {
    activeTheme,
    children
  } = props;
  const [theme, setTheme] = useState<Theme>(activeTheme || storageTheme);

  if (activeTheme && theme !== activeTheme) {
    setTheme(activeTheme);
  }

  const providerState = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={providerState}>
      {children}
    </ThemeContext.Provider>
  );
};
