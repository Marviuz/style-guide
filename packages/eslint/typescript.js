import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import tsdoc from './tsdoc.js';
import { consts } from './consts.js';
import typescript from './rules/typescript/index.js';
import typescriptExtension from './rules/typescript/extension.js';
import typescriptImport from './rules/typescript/import.js';

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
