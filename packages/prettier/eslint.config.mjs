import turboConfig from 'eslint-config-turbo/flat';
import marviuzConfig from '@marviuz/eslint-config';

export default [
  ...turboConfig,
  ...marviuzConfig.recommended,
  {
    files: ['**/*.mjs', '**/*.cjs', '**/*.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
