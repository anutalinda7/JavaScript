import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      semi: ["error", "always"],
      quotes: [
        "error",
        "single",
        {
          allowTemplateLiterals: true
        }
      ]
    }
  },
  pluginJs.configs.recommended
];
