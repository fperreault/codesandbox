module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'tailwindcss'],
  rules: {
    'react/prop-types': 0,

    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,

    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'builtin',
            'position': 'before',
          },
          {
            'pattern': '@assets/**',
            'group': 'internal',
            'position': 'after',
          },
          {
            'pattern': '@components/**',
            'group': 'internal',
            'position': 'after',
          },
          {
            'pattern': '@hooks/**',
            'group': 'internal',
            'position': 'after',
          },
          {
            'pattern': '@pages/**',
            'group': 'internal',
            'position': 'after',
          },
          {
            'pattern': '@store/**',
            'group': 'internal',
            'position': 'after',
          },
          {
            'pattern': '@styles/**',
            'group': 'internal',
            'position': 'after',
          },
          {
            'pattern': '@utils/**',
            'group': 'internal',
            'position': 'after',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      callees: [
        'classnames',
        'classNames',
        'cx',
        'tailwindCx',
        'twMerge',
        'clsx',
      ],
    },
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    },
  ],
};
