import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from 'shared/context/ThemeContext';
import 'app/styles/index.scss';
import 'shared/config/i18n/config';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const preview: Preview = {
  decorators: [
    (story, context) => {
      const theme = context.parameters.theme || context.globals.theme;

      return (
        <ThemeProvider activeTheme={theme}>
          <div className={`app ${theme}`}>
            <BrowserRouter>
              {story()}
            </BrowserRouter>
          </div>
        </ThemeProvider>
      );
    }
  ],
  globalTypes: {
    theme: {
      description: 'Changes theme for all stores',
      defaultValue: Theme.NORMAL,
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: Theme.NORMAL, title: 'Normal', icon: 'circlehollow' },
          { value: Theme.DARK, title: 'Dark', icon: 'circle' },
          
        ],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
