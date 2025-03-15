import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import rules from './rules/comments.js';

export default {
  ...comments.recommended,
  rules: {
    ...comments.recommended.rules,
    ...rules,
  },
};
