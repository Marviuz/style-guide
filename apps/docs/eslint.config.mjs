import reactRefresh from 'eslint-plugin-react-refresh';
import marviuzConfig from '@marviuz/eslint-config';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist', '**/*.config.mjs', '.content-collections'] },
  ...marviuzConfig.recommended,
  ...marviuzConfig.typescript,
  ...marviuzConfig.react,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['**/*.config.*'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
