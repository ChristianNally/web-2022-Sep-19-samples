console.log('start of the main thread');

const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 444);
console.log('promise:',promise);


// Not the best way to do this
// setTimeout(() => {
//   console.log('promise 6 seconds later:',promise);
// },6000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('data:', data);
    return 42;
  }) // <--- that is just a function call. no magic there!
  .then((previousReturnValue) => {
    console.log('it is alive! ', previousReturnValue);
  });

console.log('end of the main thread');
