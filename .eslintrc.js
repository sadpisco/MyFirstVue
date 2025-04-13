module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
    requireConfigFile: false,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier", "vue"],
  // add your custom rules here
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/migration-from-tailwind-2": "off",
    "vue/comment-directive": "off",
    "vue/no-v-html": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "no-new": "off",
    "vue/multi-word-component-names": "off",
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
      },
    ],
    "vue/script-setup-uses-vars": "error",
    "vue/no-multiple-template-root": "off",
  },
}
