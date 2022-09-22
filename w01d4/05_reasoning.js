const names = ['alice', 'bob', 'carol', 'dean', 'elise'];

const doOnEveryIteration = (name) => {
  const output = `hello there ${name}`;
  console.log(output);
  return 'something amazing!'
};

// for (const name of names) {
//   doOnEveryIteration(name);
// }

const iterateThroughAnyArray = (arr, callback) => {
  for (const element of arr) {
    callback(element); // console.log(element);
  }
};

// iterateThroughAnyArray(names, doOnEveryIteration);
// console.log();
// iterateThroughAnyArray(names, console.log);

names.forEach(doOnEveryIteration);
