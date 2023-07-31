const box = {
  weight: 2,
  getWeight() {
    return this.weight;
  }
};
const {
  getWeight
} = box;
console.log(box.getWeight()); // prints '2'

const bigBox = {
  weight: 10
};
console.log(getWeight.call(bigBox)); // prints '10'
const newGetWeight = getWeight.bind(bigBox);
console.log(newGetWeight()); // prints '10'

// Can be chained:
// function add(val) {
//   return this + val;
// }