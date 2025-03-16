import marviuzConfig from '@marviuz/eslint-config';
import turboConfig from 'eslint-config-turbo/flat';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...turboConfig,
  ...marviuzConfig.recommended,
  ...marviuzConfig.typescript,
  ...marviuzConfig.react,
  ...marviuzConfig.next,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  { ignores: ['**/*.config.mjs'] },
];

export default eslintConfig;
