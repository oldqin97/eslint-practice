// module.exports = {
//   env: {
//     browser: true,
//     node: true,
//     es2021: true,
//   },
//   // rules: {
//   //   'max-len': ['error', { code: 90 }],
//   // },
//   extends: "eslint:recommended",
//   plugins: [
//     // 使用 Prettier 的代码风格规则
//     // 并用 Prettier 来自动修复代码
//     "prettier",
//   ],
//   rules: {
//     // 违反 Prettier 的规则就报 error
//     // "prettier/prettier": "error",
//     "prettier/prettier": "warn",
//   },
// };

// module.exports = {
//   env: {
//     // 支持浏览器环境
//     browser: true,
//     // 识别 CommonJS
//     node: true,
//     // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
//     es2021: true,
//   },
//   extends: ['eslint:recommended', 'plugin:prettier/recommended'],
// };

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
