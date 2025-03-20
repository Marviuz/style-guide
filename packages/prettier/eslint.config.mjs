import turboConfig from 'eslint-config-turbo/flat';
import recommended from '@marviuz/eslint-config/recommended';

export default [
  ...turboConfig,
  ...recommended,
  {
    files: ['**/*.mjs', '**/*.cjs', '**/*.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
