import reactRefresh from 'eslint-plugin-react-refresh';
import recommended from '@marviuz/eslint-config/recommended';
import typescript from '@marviuz/eslint-config/typescript';
import react from '@marviuz/eslint-config/react';
import pluginRouter from '@tanstack/eslint-plugin-router';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'dist',
      '**/*.config.mjs',
      '.content-collections',
      '**/routeTree.gen.ts',
    ],
  },
  ...recommended,
  ...typescript,
  ...react,
  {
    plugins: {
      '@tanstack/router': pluginRouter,
    },
    rules: {
      '@tanstack/router/create-route-property-order': 'error',
    },
  },
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
