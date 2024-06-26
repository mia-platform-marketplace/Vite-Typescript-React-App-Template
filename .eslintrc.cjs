module.exports = {
  "ignorePatterns": ['dist', '.eslintrc.cjs', 'jest.config.ts', 'vite.config.ts', "src/**/*.test.*", "scripts/*"],
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "webextensions": true
  },
  "globals": {
    "jsx": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "standard",
    "eslint:recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "rules": {
    "consistent-return": 0,
    "indent"           : [1, 2],
    "no-else-return"   : 1,
    "semi"             : [1, "never"],
    "space-unary-ops"  : 2,
    "import/order": [
      2,
      {
        "groups": [
          [
            "builtin",
            "external"
          ]
        ],
        "newlines-between": "always"
      }
    ],
    "no-console": 1,
    "no-unused-vars": 2,
    "object-curly-spacing": [
      2,
      "never"
    ],
    "operator-linebreak": [
      2,
      "after"
    ],
    "react/display-name": 0,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-first-prop-new-line": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-curly-brace-presence": "off",
    "react/react-in-jsx-scope":0,
    "node/no-callback-literal": "off",
    "react/jsx-sort-props": [
      2,
      {
        // https://github.com/yannickcr/eslint-plugin-react/issues/2381
        "ignoreCase": true
      }
    ],
    "react/jsx-wrap-multilines": [
      2,
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line"
      }
    ],
    "react/no-multi-comp": [
      2,
      {
        "ignoreStateless": true
      }
    ],
    "react/no-unused-prop-types": 2,
    "react/no-unused-state": 2,
    "react/sort-prop-types": 2,
    "react/sort-comp": [
      2,
      {
        "order": [
          "static-methods",
          "lifecycle",
          "everything-else",
          "render"
        ]
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "import/no-absolute-path":"off"
}
}