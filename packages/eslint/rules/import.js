export default {
  'import/first': 'error',
  'import/newline-after-import': 'warn',
  'import/no-absolute-path': 'error',
  'import/no-cycle': 'error',
  'import/no-default-export': 'error',
  'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
  'import/no-mutable-exports': 'error',
  'import/no-relative-packages': 'warn',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': ['error'],
  'import/order': [
    'warn',
    {
      groups: [
        'builtin', // Node.js built-in modules
        'external', // Packages
        'internal', // Aliased modules
        'parent', // Relative parent
        'sibling', // Relative sibling
        'index', // Relative index
      ],
      'newlines-between': 'never',
    },
  ],
};
