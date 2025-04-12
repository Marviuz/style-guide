import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import tsdoc from './tsdoc.js';
import { consts } from './consts.js';
import typescript from './rules/typescript/index.js';
import typescriptExtension from './rules/typescript/extension.js';
import typescriptImport from './rules/typescript/import.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.typescript,
  prettierConfig,
  tsdoc,
  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: consts.ECMA_VERSION,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        parser: tseslint.parser,
      },
    },
    files: consts.TYPESCRIPT_FILES,
    rules: {
      ...typescript,
      ...typescriptExtension,
      ...typescriptImport,
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
];
