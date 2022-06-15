# ESlint

- npm i -D eslint
- new file .eslintrc.js
- ESlint src --fix **更多用于指代代码风格的修正**

```js
module.exports = {
  env: {
    // 识别 browser环境
    browser: true,
    // 识别node环境
    node: true,
    // 识别ES的代码,使用ECMAScript2021 自动设置 ecmaVersion parser 为2021
    es2021: true,
  },

  // 配置单个规则,具体规则https://cn.eslint.org/docs/rules/
  // rules: {
  // 每行不能操过80个字符
  //   'max-len': ['error', { code: 90 }],
  // },

  // 继承Eslint的规则集
  extends: "eslint:recommended",
};
```

### 规则的分类

1. **Formatting rules 代码风格规则**
2. **Code-quality rules 代码质量规则**

# Eslint X Prettier

## prettier

1. npm i -D prettier
2. add file .prettierrc.json
3. {}
4. npx prettier --write . (格式化当前目录下所有可格式化的文件)
5. npx prettier --check . (检查当前目录下所有可格式化文件的问题)

- opinionated 框架将所有的设计/规范/工具都调整到最佳
- unopinionated 框架只负责单一的功能,别的需要开发者自己组装

**prettier 属于 opinionated, 这个工具的目标就是为了树立一个最标准的代码风格规范**


## eslint-plugin-prettier

1. npm i -D eslint-plugin-prettier
2. 在.eslintrc.js 添加prettier插件
3. eslint xxx.js --fix (Eslint 就会调用prettier的格式化功能)

```js
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // rules: {
  //   'max-len': ['error', { code: 90 }],
  // },
  extends: 'eslint:recommended',
  plugins: [
    // 使用 Prettier 的代码风格规则
    // 并用 Prettier 来自动修复代码
    'prettier'
  ],
  rules: {
    // 违反 Prettier 的规则就报 error
    'prettier/prettier': 'error',
    // 违反 Prettier 的规则就报 warn
    "prettier/prettier": "warn",
  },
};
```

### NOTES

> Prettier 有自己的代码风格,Eslint有自己的代码风格,难免会出现规则之间的冲突, 为了解决ESLint配置可能与Prettier产生的冲突，利用eslint-config-prettier 来关闭相关的配置。

> npm i -D eslint-config-prettier

```js
module.exports = {
  env: {
    // 支持浏览器环境
    browser: true,
    // 识别 CommonJS
    node: true,
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
};

// 等价于

module.exports = {
  env: {
    // 支持浏览器环境
    browser: true,
    // 识别 CommonJS
    node: true,
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
    es2021: true,
  },
  // 继承 Prettier 格式化规则
  extends: ["eslint:recommended", "prettier"],
  // 使用 Prettier 格式化
  plugins: ["prettier"],
  // 解决规则冲突
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
```
