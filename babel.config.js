// 根目录下的 babel.config.js 文件中的内容
// const plugins = [
//   // '@babel/plugin-transform-arrow-functions',
//   '@babel/plugin-proposal-function-bind'
// ]

const presets = [
  ['@babel/preset-env', {
    modules: false,
    // include: ['@babel/plugin-proposal-function-bind']
  }] // 不会在此引入非标准的插件
]

export default { presets }