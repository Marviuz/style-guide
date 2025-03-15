export default {
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-exports': [
    'warn',
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'warn',
    {
      disallowTypeAnnotations: true,
      fixStyle: 'inline-type-imports',
      prefer: 'type-imports',
    },
  ],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/method-signature-style': 'warn',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['PascalCase'],
      selector: ['typeLike', 'enumMember'],
    },
    {
      custom: {
        match: false,
        regex: '^I[A-Z]|^(Interface|Props|State)$',
      },
      format: ['PascalCase'],
      selector: 'interface',
    },
  ],
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    { ignoreArrowShorthand: true },
  ],
  '@typescript-eslint/no-misused-promises': [
    'off',
    { checksVoidReturn: { attributes: false } },
  ],
  '@typescript-eslint/no-redundant-type-constituents': 'warn',
  '@typescript-eslint/no-unnecessary-qualifier': 'warn',
  '@typescript-eslint/prefer-regexp-exec': 'warn',
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true },
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    { allowNumber: true },
  ],
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
};
