// function declaration
// function sayHello(name) {
//   console.log(`hello there ${name}`);
// }

// function expression
const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const myOtherFunc = sayHello;

// myOtherFunc('Alice');

console.log(myOtherFunc);

// sayHello('bob');

// sayHello.secretMessage = 'welcome to my app';

// console.log('secret message', sayHello.secretMessage);

// console.log(sayHello('carol'));
// console.log(sayHello.toString());

// const funcs = [sayHello, console.log];

// console.log(funcs);
// funcs[0]('dean');

// for (const func of funcs) {
//   func('elise'); // sayHello('elise')
// }

// console.log('func', func);
