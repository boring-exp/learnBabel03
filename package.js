const a = `{
  "name": "learn-babel",
  "version": "1.0.0",
  "description": "learn babel",
  "main": "index.js",
  "scripts": {
    "test": "echo Error: no test specified && exit 1"
  },
  "author": "JinweiOS",
  "license": "MIT"
}`
// 将js的对象序列化成json字符串
// const aStr = JSON.stringify(a)

// 如果你想要将json字符串转换成js对象，可以使用JSON.parse()方法
const aObj = JSON.parse(a)
console.log(aObj)