import marviuzConfig from '@marviuz/eslint-config';

export default [
  ...marviuzConfig.recommended,
  {
    files: ['**/*.mjs', '**/*.cjs', '**/*.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
