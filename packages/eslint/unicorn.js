import unicornPlugin from 'eslint-plugin-unicorn';
import unicorn from './rules/unicorn';

export default {
  plugins: {
    unicorn: unicornPlugin,
  },
  rules: unicorn,
};
