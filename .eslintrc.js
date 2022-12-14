module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'next',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  ignorePatterns: ['.eslintrc.js', '**/*.config.js'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'testing-library/no-render-in-setup': [
      'error',
      {allowTestingFrameworkSetupHook: 'beforeEach'},
    ],
    'no-unused-vars': [1, {args: 'after-used', varsIgnorePattern: '^_'}],
    'react/no-unescaped-entities': 0,
    'no-console': 'off',
    'react/no-unknown-property': 0,
  },
};
