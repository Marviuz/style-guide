import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import babelParser from '@babel/eslint-parser';
import bestPractices from './rules/best-practices.js';
import es6 from './rules/es6.js';
import possibleErrors from './rules/possible-errors.js';
import stylistic from './rules/stylistic.js';
import variables from './rules/variables.js';
import { consts } from './consts.js';
import commentsConfig from './comments.js';
import importConfig from './import.js';

/** @type {import('eslint').Linter.Config[]} */
export const base = [
  eslint.configs.recommended,
  prettier,
  commentsConfig,
  importConfig,
  {
    rules: {
      ...bestPractices,
      ...es6,
      ...possibleErrors,
      ...stylistic,
      ...variables,
    },
    settings: {
      'import/resolver': {
        node: true,
      },
    },
  },
  {
    files: consts.JAVASCRIPT_FILES,
    ignores: ['!.*.js'],
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
    languageOptions: {
      ecmaVersion: consts.ECMA_VERSION,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
  },
];
