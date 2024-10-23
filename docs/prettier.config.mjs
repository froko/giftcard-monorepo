import * as baseConfig from '../prettier.config.mjs';

const config = {
  ...baseConfig.default,
  plugins: ['prettier-plugin-astro'],
  proseWrap: 'always',
};

export default config;
