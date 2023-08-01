import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
// import 'core-js'
import config from '../babel.config.js';
console.log(config.plugins);
var a = function a() {
  return console.log('hello world');
};
a();
var arr = [1, 2, 3];
_includesInstanceProperty(arr).call(arr, 1);
_Promise.all([1, 2, 3]);