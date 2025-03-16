import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import reactRules from './rules/react.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  jsxA11y.flatConfigs.recommended,
  {
    rules: reactRules,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  importPlugin.flatConfigs.react,
  prettier,
];
