import js from "@eslint/js";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    env: { node: true, browser: true, es6: true },
    extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
    plugins: ["prettier"],

    rules: {
      "no-console": "warn",
      "prettier/prettier": "error",
    },
  }),
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      ".vercel/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "studio-cms/**",
    ],
  },
];

export default eslintConfig;
