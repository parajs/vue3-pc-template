

module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": [
        './.eslintrc-auto-import.json',
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    // "plugins": [
    //     "vue",
    //     "@typescript-eslint",
    //     "prettier",
    // ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "no-unused-vars": "warn",
        "no-debugger": "warn",
    }
};