// console.log('1. top of the file');

// for (let i = 0; i < 100; i++) {
//   const date = new Date();
//   console.log(date);
// }

// setTimeout(() => {
//   console.log('2. inside the timeout');
// }, 300);

const timeout = setTimeout(() => {
  console.log('4. inside the second timeout');
}, Math.PI);

console.log('timeout', timeout);

// console.log('3. bottom of the file');
