const foods = ['pizza', 'banana', 'burrito', 'apple'];

const ourMap = (arr, callback) => {
  // create a new array
  const output = [];

  // loop through the provided array
  for (const element of arr) {
    // call the provided callback with the element of the array AND store the return value
    const returnVal = callback(element);

    // add the return value to the newly created array
    output.push(returnVal);
  }

  // return the newly created array
  return output;
};

console.log(foods);

const mappedFoods2 = ourMap(foods, (food) => {
  const transformed = `${food} is tasty!!!!!`;
  // return transformed;
});

// for (const food of foods) {}

const mappedFoods = foods.map((food) => {
  const transformed = `${food} is tasty!!!!!`;
  return transformed;

  // return food;
});

console.log(foods);
console.log();
console.log('built in map', mappedFoods);
console.log();
console.log('our map', mappedFoods2);
