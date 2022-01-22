
// const AutoImportESLintGlobals = require('unplugin-auto-import/eslint');


module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": [
        './.eslintrc-auto-import.json',
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/eslint-recommended",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        // ...AutoImportESLintGlobals()
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint",
        "prettier",
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "no-unused-vars": "warn",
        "no-debugger": "warn",
    }
};