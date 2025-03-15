import rules from '../variables.js';

// These share identical configuration options, so we want to keep them in sync.
const noUnusedVarsConfig = rules['no-unused-vars'];

export default {
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unused-vars': noUnusedVarsConfig,
  '@typescript-eslint/no-useless-constructor': 'error',
};
