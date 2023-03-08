import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext } from 'shared/context/ThemeContext';

const activeTheme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme || Theme.NORMAL;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(activeTheme);

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
