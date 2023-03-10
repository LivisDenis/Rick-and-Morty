/** @type {import("eslint").Linter.Config} */
module.exports = {
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier"
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    'react/destructuring-assignment': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/no-array-index-key': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
  },
};
