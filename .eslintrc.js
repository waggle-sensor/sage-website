module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error','unix'],
    'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
    'spaced-comment': ['error', 'always'],
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}'],
      },
    ],
    '@typescript-eslint/no-var-requires': 'off'
  },
  'globals': {
    'require': true,
    'module': true,
  }
}