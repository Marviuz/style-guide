import globals from 'globals';
import marviuzConfig from './index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
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
