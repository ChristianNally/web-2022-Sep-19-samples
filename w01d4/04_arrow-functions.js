// advantages of arrow functions
// 1. no function keyword
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if only one line of code, that line is implicitly returned from the function

const sayHello = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

const returnVal = sayHello2('alice');
console.log(returnVal);

// function() {}
// () => {}

// if (i > 10) break; 
