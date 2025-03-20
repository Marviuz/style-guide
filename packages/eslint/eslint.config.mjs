import globals from 'globals';
import turboConfig from 'eslint-config-turbo/flat';
import recommended from './_base.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...turboConfig,
  ...recommended,
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
