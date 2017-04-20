// http://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: ["standard", "standard-react"],

    plugins: [
        'react'
    ],
    // add your custom rules here
    'rules': {
        // 要求箭头函数的参数使用圆括号
        'arrow-parens': 0,
        // 强制 generator 函数中 * 号周围使用一致的空格
        'generator-star-spacing': 0,
        // debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    }
}
