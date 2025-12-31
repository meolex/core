/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  trailingComma: "all",
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: [
    "classProperties",
    "decorators-legacy",
    "typescript",
  ],
  importOrder: [
    "^react(\\/.*)?$",
    "^next(\\/.*)?$",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^src/(.*)$",
    "^../(.*)",
    "^./(.*)",
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-import-sort",
  ],
  printWidth: 140,
};
