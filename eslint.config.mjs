import { antfu } from '@antfu/eslint-config';

export default antfu({
  react: true,
  ignores: ['prisma/**', 'src/generated/**'],
  rules: {
    '@typescript-eslint/no-redeclare': 'off',
    'style/quotes': ['warn', 'single'],
    'style/jsx-quotes': ['warn', 'prefer-single'],
    'node/prefer-global/process': 'off',
    'style/semi': ['warn', 'always'],
    'package-json/valid-package-def': 'off',
    '@eslint-react/no-missing-key': 'warn',
    'no-restricted-syntax': 'off',
    'import/no-anonymous-default-export': 'off',
    'eqeqeq': 'warn',
    'no-console': 'warn',
    'unicorn/prefer-math-trunc': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-empty-object-type': 'warn',
    'unicorn/prefer-query-selector': 0,
    'regexp/no-super-linear-backtracking': 0,
    'regexp/no-useless-assertions': 0,
    'unicorn/no-new-array': 0,
    '@typescript-eslint/method-signature-style': 0,
    'unicorn/prefer-code-point': 'warn',
    'unicorn/no-object-as-default-parameter': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    '@eslint-react/no-unstable-default-props': 'warn',
    'unicorn/prefer-regexp-test': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'unicorn/prefer-logical-operator-over-ternary': 'warn',
    'arrow-body-style': 0,
    'unicorn/no-array-callback-reference': 0,
    'prefer-regex-literals': 0,
    'regexp/optimal-quantifier-concatenation': 'warn',
    'unicorn/prefer-string-slice': 0,
    'array-callback-return': 0,
    'regexp/no-unused-capturing-group': 1,
    'unicorn/no-anonymous-default-export': 0,
    'unicorn/no-magic-array-flat-depth': 1,
    'react-refresh/only-export-components': 0,
    'react/no-array-index-key': 0,
    'package-json/valid-name': 0,
  },
});
