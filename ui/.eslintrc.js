module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-filename-extension': [0],
    '@typescript-eslint/camelcase': 'off',
  },
};
