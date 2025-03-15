import globals from 'globals';
import turboConfig from 'eslint-config-turbo/flat';
import marviuzConfig from './index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...turboConfig,
  ...marviuzConfig.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['rules/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
  {
    files: ['**/*.mjs', '**/*.cjs', '**/*.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
