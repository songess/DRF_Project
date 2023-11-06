import type { StorybookConfig } from '@storybook/react-webpack5'
const {
  override,
  useBabelRc,
  removeModuleScopePlugin,
} = require('customize-cra')

const customizeWebpackConfig = (config: any) => {
  const customizedConfig = override(
    useBabelRc(),
    removeModuleScopePlugin(),
  )(config)

  return customizedConfig
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => customizeWebpackConfig(config),
}

export default config
