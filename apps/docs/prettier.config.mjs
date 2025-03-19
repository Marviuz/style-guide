import marviuzConfig from '@marviuz/prettier-config';

/** @type {import('prettier').Config} */
export default {
  ...marviuzConfig,
  plugins: [
    ...marviuzConfig.plugins,
    import.meta.resolve('prettier-plugin-tailwindcss'),
  ],
};
