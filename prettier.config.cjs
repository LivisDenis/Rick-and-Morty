/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'always',
  useTabs: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
