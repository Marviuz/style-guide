import marviuzConfig from '@marviuz/prettier-config';

/** @type {import('prettier').Config} */
export default {
  ...marviuzConfig,
  plugins: [...marviuzConfig.plugins, 'prettier-plugin-tailwindcss'],
};
