import tseslint from 'typescript-eslint/dist/index.js';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import tsdoc from './tsdoc';
import { consts } from './consts.js';
import typescript from './rules/typescript';
import typescriptExtension from './rules/typescript/extension';
import typescriptImport from './rules/typescript/import';

export default tseslint.config(
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.typescript,
  prettierConfig,
  tsdoc,
  {
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
);
