import nextPlugin from '@next/eslint-plugin-next';
import next from './rules/next.js';
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
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...next,
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
