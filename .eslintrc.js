module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],

  rules: { 'linebreak-style': 0, 'react/react-in-jsx-scope': 'off' },
  globals: {
    JSX: 'readonly',
  },
};
