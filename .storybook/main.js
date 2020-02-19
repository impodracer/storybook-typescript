const path = require('path');

module.exports = {
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        include: [path.resolve(__dirname, '../src')],
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
  ],
  stories: ['../src/**/*.stories.(ts|md)x'],
};
