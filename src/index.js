const box = {
  weight: 2,
  getWeight() {
    return this.weight;
  },
};

const { getWeight } = box;

console.log(box.getWeight()); // prints '2'

const bigBox = { weight: 10 };
console.log(bigBox::getWeight()); // prints '10'
const newGetWeight = bigBox::getWeight
console.log(newGetWeight()); // prints '10'

// Can be chained:
// function add(val) {
//   return this + val;
// }