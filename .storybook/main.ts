import type { StorybookConfig } from '@storybook/react-webpack5';
import { readdirSync } from 'fs';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    ...readdirSync(__dirname + '/../src/', { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .filter((dirent) => dirent.name !== 'utils')
      .map(
        (dirent) => `../src/${dirent.name}/**/*.stories.@(js|jsx|ts|tsx|mdx)`
      ),
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    'storybook-addon-react-router-v6'
  ],
  webpackFinal: async (config) => {
    if(!config.resolve) config.resolve = {};
    config.resolve.plugins = config.resolve.plugins || [];

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
export default config;
