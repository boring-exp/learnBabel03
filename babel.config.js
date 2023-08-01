// 根目录下的 babel.config.js 文件中的内容
const plugins = [
  // '@babel/plugin-transform-arrow-functions',
  '@babel/plugin-proposal-function-bind',
  ['@babel/plugin-transform-runtime', {
    corejs: 3
  }]
]

const presets = [
  ['@babel/preset-env', {
    // entry: 要求在入口文件中引入 core-js，之后，babel会自动进行全量替换
    // usage: 会自动检测代码中使用到的新特性，然后按需引入
    // useBuiltIns: 'usage',
    modules: false
  }] // 不会在此引入非标准的插件
]

export default { presets, plugins }