module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-use-before-define': ['error', { functions: true, classes: true }],
    curly: 'error',
    eqeqeq: 'error',
    'no-eval': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'spaced-comment': 'error',
    yoda: 'error',
    'no-invalid-this': 'error',
  },
}
