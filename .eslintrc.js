module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never', jsx: 'never', ts: 'never', tsx: 'never'
    }],
    'jsx-a11y/anchor-is-valid': 'off'
  }
}
