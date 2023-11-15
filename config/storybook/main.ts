import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildStylesLoader } from '../webpack/loaders/styles';
import webpack from 'webpack';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-toolbars'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../../public'],
  webpackFinal: async (config) =>  {
    config.resolve.modules.push(
      path.resolve(__dirname, '..', '..', 'src'),
      path.resolve(__dirname, '..', '..', 'node_modules')
    );
    config.module.rules.push(buildStylesLoader(true));

    config.module.rules = config.module.rules.map((rule) => {
      if (typeof rule === 'object' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(new webpack.DefinePlugin({
      __IS_DEV__: true
    }));
  
    return config;
  }
};
export default config;
