import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
  },

  pluginJs.configs.recommended,

  {
    files: ["Les5/src/**/*.js"],
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      quotes: ["error", "double"],
    },
  },
  {
    ignores: [
      "node_modules/**",
      "dist_les5/**",
      "webpack.config.js",
      "eslint.config.mjs",
    ],
  },
];
