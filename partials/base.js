const esLintPluginSilvermine = require('@silvermine/eslint-plugin-silvermine'),
      stylistic = require('@stylistic/eslint-plugin');

module.exports = {
   plugins: {
      '@silvermine/eslint-plugin-silvermine': esLintPluginSilvermine, // Our custom rules
      '@stylistic': stylistic,
   },

   languageOptions: {
      'ecmaVersion': 'latest',
   },

   rules: {
      '@silvermine/eslint-plugin-silvermine/array-indentation': 'error',
      '@silvermine/eslint-plugin-silvermine/call-indentation': 'error',
      '@silvermine/eslint-plugin-silvermine/fluent-chaining': 'error',
      '@silvermine/eslint-plugin-silvermine/no-multiple-inline-functions': 'error',
      '@silvermine/eslint-plugin-silvermine/no-multiline-conditionals': 'error',
      '@silvermine/eslint-plugin-silvermine/no-multiline-var-declarations': [ 'error', { 'const': 'single-only' } ],
      '@silvermine/eslint-plugin-silvermine/empty-object-spacing': 'error',
      '@silvermine/eslint-plugin-silvermine/empty-array-spacing': 'error',
      '@silvermine/eslint-plugin-silvermine/uninitialized-last': 'error',
      '@silvermine/eslint-plugin-silvermine/block-scope-case': 'error',
      '@silvermine/eslint-plugin-silvermine/brace-style': [
         'error', '1tbs', { 'allowSingleLine': false, 'allowSingleLineArrow': true },
      ],
      '@silvermine/eslint-plugin-silvermine/max-statements-per-line': 'error',
      '@stylistic/indent': [ 'error', 3, { 'VariableDeclarator': 'first', 'SwitchCase': 1 } ],
      '@stylistic/comma-dangle': [
         'error',
         {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'enums': 'always-multiline',
            'functions': 'never',
         },
      ],
      'no-unsafe-finally': 'warn',
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'complexity': 'error',
      'curly': 'error',
      'default-case': 'error',
      'default-param-last': 'error',
      '@stylistic/dot-location': [ 'error', 'property' ],
      'dot-notation': [
         'error',
         { 'allowPattern': '^[a-z]+(_[a-z]+)+$' }, // Allow obj['snake_case']
      ],
      'eqeqeq': 'error',
      'grouped-accessor-pairs': [ 'error', 'getBeforeSet' ],
      'guard-for-in': 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-console': 'error',
      'no-constructor-return': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-empty-pattern': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      '@stylistic/no-floating-decimal': 'error',
      'no-implicit-coercion': [ 'error', { 'allow': [ '!!' ] } ],
      'no-implicit-globals': [ 'error', { 'lexicalBindings': true } ],
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      '@stylistic/no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'radix': 'error',
      'vars-on-top': 'error',
      '@stylistic/wrap-iife': 'error',
      'yoda': 'error',
      // because we are still on commonjs module
      'strict': 'off',
      'no-shadow': 'error',
      'no-delete-var': 'error',
      'no-label-var': 'error',
      'no-restricted-globals': [ 'error', 'event' ],
      'no-shadow-restricted-names': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': [ 'error', { 'functions': false } ],
      'callback-return': [ 'error', [ 'callback', 'cb', 'next', 'done' ] ],
      'global-require': 'error',
      'handle-callback-err': 'error',
      'no-new-require': 'error',
      'no-path-concat': 'error',
      'no-process-env': 'error',
      'no-process-exit': 'error',
      'no-sync': 'error',
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/block-spacing': 'error',
      'camelcase': 'error',
      '@stylistic/comma-spacing': 'error',
      '@stylistic/comma-style': 'error',
      '@stylistic/computed-property-spacing': 'error',
      'consistent-this': [ 'error', 'self' ],
      '@stylistic/eol-last': 'error',
      '@stylistic/key-spacing': 'error',
      '@stylistic/keyword-spacing': [
         'error',
         {
            'overrides': {
               'catch': { 'after': false },
            },
         },
      ],
      '@stylistic/linebreak-style': [ 'error', 'unix' ],
      '@stylistic/lines-around-comment': 'error',
      '@stylistic/spaced-comment': [ 'error', 'always' ],
      'max-depth': [ 'error', 4 ],
      '@stylistic/max-len': [
         'error',
         {
            'code': 140,
            'comments': 90,
            'ignoreUrls': true,
            // function declaration lines
            'ignorePattern': '^\\s*((async|export|default|async|public|private|protected|function) )+.*\\{',
         },
      ],
      'max-nested-callbacks': [ 'error', 6 ],
      'max-params': [ 'error', 5 ],
      'new-cap': [
         'error',
         { 'capIsNewExceptions': [ 'Q' ] },
      ],
      '@stylistic/new-parens': 'error',
      '@stylistic/padding-line-between-statements': [
         'error',
         { blankLine: 'always', prev: [ 'var', 'let', 'const' ], next: '*' },
      ],
      'prefer-regex-literals': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-import-assign': 'error',
      'no-dupe-else-if': 'error',
      'no-lonely-if': 'error',
      '@stylistic/no-multiple-empty-lines': [
         'error',
         {
            'max': 2,
            'maxBOF': 0,
            'maxEOF': 0,
         },
      ],
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new-object': 'error',
      'no-plusplus': [
         'error',
         { 'allowForLoopAfterthoughts': true },
      ],
      'no-restricted-syntax': [
         'error',
         'DoWhileStatement',
         'DebuggerStatement',
         'EmptyStatement',
         'ForInStatement',
         'WithStatement',
         'YieldExpression',
      ],
      'no-setter-return': 'error',
      '@stylistic/func-call-spacing': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      'one-var': [ 'error', { 'var': 'always', 'let': 'consecutive' } ],
      '@stylistic/one-var-declaration-per-line': 'error',
      '@stylistic/quotes': [ 'error', 'single' ],
      '@stylistic/semi': [ 'error', 'always' ],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': [
         'error',
         {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always',
         },
      ],
      '@stylistic/space-in-parens': [ 'error', 'never' ],
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'unicode-bom': 'error',
      'arrow-body-style': [ 'error', 'always' ],
      'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
      'arrow-parens': 'error',
      'template-curly-spacing': [ 'error', 'never' ],
      'object-property-newline': [ 'error', { 'allowAllPropertiesOnSameLine': true } ],
   },
};
