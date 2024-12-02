import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest"; // Plugin para Jest

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Inclui as globals do Node.js
        ...globals.jest, // Inclui as globals do Jest
      },
    },
  },
  pluginJs.configs.recommended, // Regras recomendadas do ESLint para JavaScript
  pluginJest.configs.recommended, // Regras recomendadas do Jest
];
