module.exports = {
    extends: [
      "next/core-web-vitals",
      // 他の extends 設定 (例: 'eslint:recommended', 'plugin:react/recommended')
    ],
    // 他の設定 (例: rules, plugins)
    rules: {
      // カスタムルールを追加する場合
    },
  };module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "next/core-web-vitals", // Ensure Next.js rules are applied
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: [
      "@typescript-eslint",
      "react",
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  