import _bindInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/bind";
// import "core-js/es/array";
var box = {
  weight: 2,
  getWeight: function getWeight() {
    return this.weight;
  }
};
var getWeight = box.getWeight;
console.log(box.getWeight()); // prints '2'

var bigBox = {
  weight: 10
};
console.log(getWeight.call(bigBox)); // prints '10'
var newGetWeight = _bindInstanceProperty(getWeight).call(getWeight, bigBox);
console.log(newGetWeight()); // prints '10'

// Can be chained:
// function add(val) {
//   return this + val;
// }