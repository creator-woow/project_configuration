import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from 'shared/context/ThemeContext';
import 'app/styles/index.scss';
import 'shared/config/i18n/config';

const preview: Preview = {
  decorators: [
    (story, context) => {
      const theme = context.parameters.theme || context.globals.theme;
      return (
        <div className={`app theme-${theme}`}>
          <BrowserRouter>
            {story()}
          </BrowserRouter>
        </div>
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
          { value: Theme.NORMAL, title: Theme.NORMAL.toUpperCase(), icon: 'circlehollow' },
          { value: Theme.DARK, title: Theme.DARK.toUpperCase(), icon: 'circle' },
          
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
