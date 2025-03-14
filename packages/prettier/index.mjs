/** @type {import("prettier").Config} */
const config = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  singleQuote: true,
  plugins: [import.meta.resolve('prettier-plugin-packagejson')],
};

export default config;
