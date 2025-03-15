import eslintPluginImport from 'eslint-plugin-import';
import rules from './rules/import.js';

export default {
  ...eslintPluginImport.flatConfigs.recommended,
  rules: {
    ...eslintPluginImport.flatConfigs.recommended.rules,
    ...rules,
  },
};
