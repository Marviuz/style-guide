import next from '@next/eslint-plugin-next';
import { consts } from './consts.js';

const babelOptions = {
  presets: (() => {
    try {
      import.meta.resolve('next/babel');
      return ['next/babel'];
    } catch {
      return [];
    }
  })(),
};

/** @type {import('eslint').Linter.Config} */
export default [
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
    },
    languageOptions: {
      parserOptions: {
        babelOptions,
      },
    },
    ignores: ['**/.next/**'],
  },
  {
    files: consts.JAVASCRIPT_FILES,
    languageOptions: {
      parserOptions: {
        babelOptions,
      },
    },
  },
];
