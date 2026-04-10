import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    rules: {
      // Marketing copy uses apostrophes and quotes; escaping hurts readability.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
