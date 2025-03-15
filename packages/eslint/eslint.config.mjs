import globals from 'globals';
import { recommended } from './index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
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
