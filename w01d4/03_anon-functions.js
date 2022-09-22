// const username = 'Alice';
// console.log(username);

// console.log('Bob');

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function(func) {
  func('Dean');
};

runMyFunc(sayHello);

runMyFunc(function(name) {
  console.log(`hello there ${name}`);
});

runMyFunc(name => `hello there ${name}`);

