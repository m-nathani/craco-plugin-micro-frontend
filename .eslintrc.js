module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint-config-cra'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-param-reassign': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
