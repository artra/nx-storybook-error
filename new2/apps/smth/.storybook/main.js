const rootMain = require('../../../.storybook/main');
const path = require('path');

const config = {
  ...rootMain,
  core: { builder: 'webpack5' },
  stories: [...rootMain.stories, '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [...(rootMain.addons ?? []),
    'storybook-addon-swc',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    }],
  staticDirs: ['../public', '../../../libs/design-system/public'],
  webpackFinal: async (config, options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal?.(config, options);
    }

    // add your own webpack tweaks if needed

    return config;
  },
};

module.exports = config;
