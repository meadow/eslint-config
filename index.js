module.exports = {
  "extends": "eslint:recommended",
  "parser": "babel-eslint",

  "ecmaFeatures": {
    "jsx": true
  },

  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },

  "plugins": [
    "react"
  ],

  "rules": {
    /*
     * Possible Errors
     */

    "comma-dangle": [2, "never"],
    "no-cond-assign": [2, "always"],
    "no-console": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "use-isnan": 2,
    "valid-jsdoc": 2,
    "valid-typeof": 2,

    /*
     * Best Practices
     */

    "accessor-pairs": 2,
    "block-scoped-var": 2,
    "consistent-return": 2,
    "curly": 2,
    "default-case": 2,
    "dot-notation": 0,
    "eqeqeq": [2, "allow-null"],
    "guard-for-in": 2,
    "no-alert": 0,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-label": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": [2, { "boolean": false }],
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 0,
    "no-process-env": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unused-expressions": 2,
    "no-useless-call": 0,
    "no-useless-concat": 2,
    "no-void": 2,
    "no-warning-comments": [1, { "location": "anywhere" }],
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 0,
    "wrap-iife": 2,
    "yoda": 2,

    /*
     * Strict
     */

    "strict": [2, "global"],

    /*
     * Variables
     */

    "init-declarations": 0,
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,

    /*
     * Node.js/Common JS
     */

    "callback-return": [2, ["callback", "cb", "next"]],
    "global-require": 2,
    "handle-callback-err": [1, "^(err|error)$"],
    "no-mixed-requires": 0,
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-exit": 2,
    "no-sync": 2,

    /*
     * Stylistic
     */

    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs"],
    "camelcase": [2, { properties: "never" }],
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": 0,
    "eol-last": 2,
    "func-names": 0,
    "func-style": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [2, 2, { "SwitchCase": 1 }],
    "jsx-quotes": [2, "prefer-double"],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "linebreak-style": 2,
    "lines-around-comment": [2, { "beforeBlockComment": false, "afterBlockComment": true, "beforeLineComment": false, "afterLineComment": false }],
    "max-depth": [1, 4],
    "max-len": 0,
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "new-cap": 0,
    "new-parens": 2,
    "newline-after-var": 0,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-continue": 2,
    "no-inline-comments": 0,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": 2,
    "no-negated-condition": 0,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-plusplus": 0,
    "no-restricted-syntax": 2,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [2, "always", { "objectsInObjects": false }],
    "one-var": 0,
    "operator-assignment": 0,
    "operator-linebreak": 0,
    "padded-blocks": 0,
    "quote-props": [2, "as-needed", { "keywords": true, "unnecessary": false }],
    "quotes": [2, "single"],
    "require-jsdoc": 0,
    "semi-spacing": [2, {"before": false, "after": true}],
    "semi": [2, "always"],
    "sort-vars": 0,
    "space-after-keywords": [2, "always"],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "always"],
    "space-before-keywords": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": 0,
    "spaced-comment": [2, "always", { "markers": ["*"] }],
    "wrap-regex": 2,

    /*
     * ES6
     */

    "arrow-body-style": 0,
    "arrow-parens": 0,
    "arrow-spacing": [2, { "before": true, "after": true }],
    "constructor-super": 2,
    "generator-star-spacing": [2, { "before": true, "after": false }],
    "no-arrow-condition": 2,
    "no-class-assign": 2,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 2,
    "object-shorthand": [2, "properties"],
    "prefer-arrow-callback": 0,
    "prefer-const": 2,
    "prefer-reflect": 0,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 0,

    /*
     * React Plugin
     */

    "react/display-name": [2, { "acceptTranspilerName": true }],
    "react/forbid-prop-types": [2, { "forbid": ["any"] }],
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": [2, { "selfClosing": "after-props", "nonEmpty": "after-props"}],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-handler-names": 0,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [2, { "maximum": 5 }],
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 2,
    "react/no-did-mount-set-state": [2, "allow-in-func"],
    "react/no-did-update-set-state": [2, "allow-in-func"],
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/no-set-state": 0,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 0,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 0,
    "react/self-closing-comp": 2,
    "react/sort-comp": [2, {
      order: [
        'lifecycle',
        'everything-else',
        'render'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'getDefaultProps',
          'getInitialState',
          'getStateFromStores',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }],
    "react/wrap-multilines": 2
  }
}
