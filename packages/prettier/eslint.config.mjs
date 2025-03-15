import { recommended } from '@marviuz/eslint-config';

export default [
  ...recommended,
  {
    files: ['**/*.mjs', '**/*.cjs', '**/*.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
