- npm i -D eslint
- new file .eslintrc.js
- third

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    // 识别ES的代码,使用ECMAScript2021 自动设置 ecmaVersion parser 为2021
    es2021: true,
  },

  // 配置单个规则,具体规则https://cn.eslint.org/docs/rules/
  // rules: {
  // 每行不能操过80个字符
  //   'max-len': ['error', { code: 90 }],
  // },

  extends: 'eslint:recommended',
};
```

