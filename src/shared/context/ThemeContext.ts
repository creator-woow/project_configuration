import { createContext } from 'react';

export const enum Theme {
  NORMAL = 'app-theme-normal',
  DARK = 'app-theme-dark',
}

interface IContextState {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_KEY_THEME = 'theme';

export const ThemeContext = createContext<IContextState>({});
