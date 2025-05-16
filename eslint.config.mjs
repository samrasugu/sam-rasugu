import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    env: { node: true, browser: true, es6: true },
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "eslint:recommended",
      "prettier",
      "plugin:prettier/recommended",
      "@studio/eslint-config-studio",
    ],
    plugins: ["prettier"],
    rules: {
      "no-console": "warn",
      "prettier/prettier": "error",
    },
  }),
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
];

export default eslintConfig;
