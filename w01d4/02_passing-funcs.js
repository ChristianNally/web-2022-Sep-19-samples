const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function(func) {
  func('Dean');
};

runMyFunc(sayHello);
// const returnVal = runMyFunc(console.log);

// console.log(returnVal.toString());

