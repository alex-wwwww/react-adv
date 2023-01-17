module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  // parserOptions: {
  // ecmaVersion: 'latest',
  // sourceType: 'module',
  // },
  rules: {
    'no-unused-vars': 'warn',
    // '@typescript-eslint/no-unused-vars': 'warn',
  },
  parser: '@typescript-eslint/parser',
  globals: {
    JSX: 'readonly',
  },
};
