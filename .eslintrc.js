module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:storybook/recommended'
  ],
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react', 'i18next', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'react/button-has-type': 2,
    'react/jsx-props-no-spreading': 'warn',
    '@typescript-eslint/naming-convention': 0,
    'promise/param-names': 0,
    '@typescript-eslint/no-floating-promises': 0,
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid']
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  globals: {
    __IS_DEV: true
  }
};
